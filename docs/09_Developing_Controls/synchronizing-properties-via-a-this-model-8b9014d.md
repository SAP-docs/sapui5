<!-- loio8b9014dd3dbb4f20811f86e6b8c620bf -->

# Synchronizing Properties via a `$this` Model

An alternative to writing setter wrappers in your composite control: expose its state via a model, and let the inner controls bind to it. SAPUI5 propagates property changes for you.



## Why a Model?

When a composite control has only one or two properties, overriding their dedicated setters \(`setMyValue`, `setLabel`, etc.\) to forward values to the inner controls is straightforward — see [Building Standard Composite Controls](building-standard-composite-controls-c1512f6.md). For composite controls with many properties, or with several inner controls reacting to the same property, those per-property setter overrides become repetitive.

An alternative is to expose the composite's state via a model and let the inner controls bind to it. This shifts the synchronization out of imperative code into declarative bindings, and SAPUI5 handles the updates automatically. By convention — inherited from the `XMLComposite` era — the model is registered under the name `$this`, so that any reader of an inner control's binding can tell at a glance: "this binding pulls from the surrounding composite".

> ### Note:  
> Use plain setter forwarding when you have one or two properties; reach for the model pattern when you have many, or when migrating from `XMLComposite`.



## The `$this` Binding Pattern

The following helper is a pattern that application teams can copy into their codebase and adapt as needed. It is small, self-contained, and has no dependencies beyond `sap.ui.core.Control` and `sap.ui.model.json.JSONModel`. The code snippets below use `CompositeHelper` as the file and function name — this is just a naming convention for the example; you can choose any name that fits your codebase.

The pattern has three responsibilities, all wired through a single `JSONModel` registered under `$this`:

1.  Create the model and register it under the name `$this` on the control.
2.  **Inner control → outer control:** When a bound inner control changes a value, the model fires a `propertyChange`. Listen for it and write the value back into the composite via `setProperty(..., true)`.
3.  **Outer control → model:** Wrap the composite's `setProperty`, so that programmatic changes from outside \(`composite.setMyValue("x")`\) also update the model.

These two directions share a re-entry guard, so that one does not trigger the other in a loop.

```
sap.ui.define([
    "sap/ui/core/Control",
    "sap/ui/model/json/JSONModel"
], function(Control, JSONModel) {
    "use strict";

    /**
     * Activates the $this-model pattern on a composite control instance.
     *
     * @param {sap.ui.core.Control} oControl - the composite control instance (typically `this` from init)
     */
    return function CompositeHelper(oControl) {
        const oModel = new JSONModel({});
        oControl.setModel(oModel, "$this");

        let bSuppressUpdate = false;

        // Inner control -> outer control: a bound inner control changed something.
        oModel.attachPropertyChange(function(oEvent) {
            if (bSuppressUpdate) {
                return;
            }
            const sProperty = oEvent.getParameter("path").slice(1); // "/myValue" -> "myValue"
            const vValue = oEvent.getParameter("value");
            Control.prototype.setProperty.call(oControl, sProperty, vValue, true);
        });

        // Outer control -> model: programmatic setter calls reach the model.
        oControl.setProperty = function(sName, vValue, bSuppressInvalidate) {
            bSuppressUpdate = true;
            try {
                oModel.setProperty("/" + sName, vValue);
            } finally {
                bSuppressUpdate = false;
            }
            return Control.prototype.setProperty.call(oControl, sName, vValue, bSuppressInvalidate);
        };
    };
});
```

> ### Note:  
> The helper assumes the composite inherits directly from `sap.ui.core.Control`. If your composite extends a more specialized base class \(for example, `sap.m.InputBase`\), replace `Control.prototype.setProperty` with the corresponding base class's prototype so that the framework's setter logic for that base class still runs.

Three notes on the implementation:

-   **The re-entry guard** \(`bSuppressUpdate`\) is a defensive measure. With the current `JSONModel`, the wrapped `setProperty` writing into the model does not by itself trigger a `propertyChange` event — that event is fired by the binding layer when an inner control writes back via two-way binding. The guard ensures that if a subclass or a side-effect setter ever introduces additional model writes during the wrapper's execution, those writes do not re-enter the wrapper. Without the guard, such an extension could cause an infinite loop.
-   **`Control.prototype.setProperty.call(...)`** bypasses the wrapper but still goes through the framework's normal setter logic \(validation, invalidation, change events\). Calling `oControl.setProperty(...)` from the listener would re-enter the wrapper.
-   **`true` as the third argument** in the listener path skips the re-render: the change originated in the inner control's DOM, so re-rendering the composite would discard work the inner control already did.



## Using the Pattern in Your Composite

This is a `LabeledInput` composite — a label, an input, and a status text below it, all bound to three properties of the composite \(`label`, `value`, `status`\):

```
sap.ui.define([
    "sap/ui/core/Control",
    "sap/m/Label",
    "sap/m/Input",
    "sap/m/Text",
    "my/app/util/CompositeHelper"
], function(Control, Label, Input, Text, CompositeHelper) {
    "use strict";

    const LabeledInput = Control.extend("my.app.LabeledInput", {
        metadata: {
            properties: {
                "label":  { type: "string", defaultValue: "" },
                "value":  { type: "string", defaultValue: "" },
                "status": { type: "string", defaultValue: "" }
            },
            aggregations: {
                "_label":  { type: "sap.m.Label", multiple: false, visibility: "hidden" },
                "_input":  { type: "sap.m.Input", multiple: false, visibility: "hidden" },
                "_status": { type: "sap.m.Text",  multiple: false, visibility: "hidden" }
            }
        },

        init() {
            Control.prototype.init.apply(this, arguments);
            CompositeHelper(this);

            this.setAggregation("_label", new Label({
                text: "{$this>/label}"
            }));
            this.setAggregation("_input", new Input({
                value: "{$this>/value}"
            }));
            this.setAggregation("_status", new Text({
                text: "{$this>/status}"
            }));
        },

        renderer: {
            apiVersion: 4,
            render(oRm, oControl) {
                oRm.openStart("div", oControl);
                oRm.class("LabeledInput");
                oRm.openEnd();
                oRm.renderControl(oControl.getAggregation("_label"));
                oRm.renderControl(oControl.getAggregation("_input"));
                oRm.renderControl(oControl.getAggregation("_status"));
                oRm.close("div");
            }
        }
    });

    return LabeledInput;
});
```

Two things to note:

-   The inner controls bind to `{$this>/label}`, `{$this>/value}`, `{$this>/status}` — the same syntax that an `XMLComposite` fragment uses. After `CompositeHelper(this)` runs in `init`, the bindings resolve.
-   Property changes propagate in both directions: an app that calls `oLabeledInput.setValue("foo")` updates the model, which updates the bound `Input`. Typing into the `Input` updates the model, which writes the value back into the composite's `value` property.

> ### Note:  
> If you override a setter on the composite to do additional work \(for example, a `setEditable` that also clears the validation state\), the override must end with `this.setProperty(...)`, not by writing the model directly. The wrapped `setProperty` keeps the model in sync; writing the model directly skips the framework's setter logic.

```
// Side-effect setter — composite's own setEditable does additional cleanup.
setEditable(bEditable) {
    this.clearValidationState(); // composite-specific side effect
    return this.setProperty("editable", bEditable);
}
```



## Migrating from `XMLComposite`

`XMLComposite` automatically registers a `$this` backing model for property bindings, so that fragment bindings such as `{$this>/text}` work without any explicit setup. The pattern on this page reconstructs that behavior with a `JSONModel`. Property bindings stay character-identical — only the model is now activated by your code in `init`.

One important difference: the `$this` model in `XMLComposite` could also expose aggregations. The pattern on this page covers properties only. For aggregations, see [Forwarding Aggregations](forwarding-aggregations-64a5e17.md).


<table>
<tr>
<th valign="top">

`XMLComposite` feature

</th>
<th valign="top">

What is lost during migration

</th>
<th valign="top">

Compensation

</th>
</tr>
<tr>
<td valign="top">

Automatic `$this` model registration

</td>
<td valign="top">

Bidirectional property bindings between inner controls and outer control

</td>
<td valign="top">

The `$this` binding pattern on this page

</td>
</tr>
</table>

**Related Information**  


[Composite Controls](composite-controls-d6bab27.md "A composite control is an SAPUI5 control whose visual representation is built by reusing other controls, providing a stable public API while encapsulating implementation details.")

[Building Standard Composite Controls](building-standard-composite-controls-c1512f6.md "Composite controls are a means to save time and effort by reusing existing controls for the implementation. This page walks you through the building blocks: defining the API, instantiating inner controls in init, propagating property changes, and writing a renderer.")

[Forwarding Aggregations](forwarding-aggregations-64a5e17.md "A mechanism used for aggregations of composite controls. With aggregation forwarding, an aggregation declared on a composite is automatically routed to an aggregation of one of its inner controls — without writing add/remove/destroy wrappers by hand.")

[API Reference: sap.ui.model.json.JSONModel](https://ui5.sap.com/#/api/sap.ui.model.json.JSONModel)

