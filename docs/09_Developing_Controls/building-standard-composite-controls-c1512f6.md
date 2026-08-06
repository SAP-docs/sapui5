<!-- loioc1512f6ce1454ff1913e3857bad56392 -->

# Building Standard Composite Controls

Composite controls are a means to save time and effort by reusing existing controls for the implementation. This page walks you through the building blocks: defining the API, instantiating inner controls in `init`, propagating property changes, and writing a renderer.



## Simple Example: Search Field

To create a composite control, you start with crafting its API including properties, events, aggregations, and so on as you do it for any other control. The following simple example combines an input field with a button that we call "search field". To the outside world, it offers an editable value and can fire a search event.

![](images/SAPUI5_Composite_Control_Search_Field_Example_fd6475b.png)



### API

As any other control, you can describe composite controls via the JavaScript control definition API, see [Developing Controls](developing-controls-8dcab00.md) and the following example.

```
// "Control" required from "sap/ui/core/Control"
const SearchField = Control.extend("my.SearchField", {
  metadata: {
    properties: {
       "myValue": {type: "string", bindable: true}
    },
    aggregations: {
       "_input": {type: "sap.m.Input", multiple: false, visibility: "hidden"},
       "_btn": {type: "sap.m.Button", multiple: false, visibility: "hidden"}
    },
    // ...
  }
});
```

Properties, aggregations, and associations can be configured with `hidden` visibility. In this case, no accessors, no mutators, and no API documentation will be generated for them. It is still possible to bind data, regardless of the `bindable` setting. The generic methods `bindProperty`/`bindAggregation` and `unbindProperty`/`unbindAggregation` are always available.

The two aggregations with visibility set to `hidden` are used to hold the inner controls. Aggregations are used to define a parent-child relationship between a parent control and its children \(controls or elements\). The knowledge about this relationship is, for example, relevant for the SAPUI5 core to dispatch events properly, or to cleanup the children when the parent is destroyed. Hidden aggregations are control internal and are used especially to register the inner controls within the control hierarchy without making them publicly available. Because hidden aggregations are only used internally within a composite control, they are neither cloned nor generating any typed accessors or mutators.



### Behavior

The control implementation, that is, its behavior, contains the code for initialization and clean-up hooks as well as glue code for properties and events.



### `Init`

The `init` function contains the composite's parts and stores references to them. By default, do **not** assign IDs to your inner controls — let the framework compute them automatically. Inner controls without an explicit ID cannot easily be reached from the outside via `Element.getElementById` \(`Element` is required from module `sap/ui/core/Element`\), which is exactly what you want for parts that are an implementation detail. If you do need a stable ID for an inner control — for example, to reference it from CSS or accessibility attributes — concatenate the composite's own ID with a single dash \(`-`\) and a part-specific suffix, as in the following example:

```
// If ID needed, within the composite control definition:
this.getId()/*composite instance ID*/ + "-input"/*part ID*/
```

> ### Caution:  
> To avoid potential conflicts with other internal part IDs, the part ID \(`input`\) itself must not contain any additional dashes. A conflict can occur, for example, if your composite control defines one internal part incorrectly with the ID `input-inner` and another with the ID `input`, while the `input` part itself internally uses the suffix `-inner` for its subpart.
> 
> > ### Remember:  
> > SAPUI5 reserves the single dash \(`-`\) for composite controls and their parts, while a double dash \(`--`\) is used to combine the ID of views and their contained controls, and a triple dash \(`---`\) is used to combine component IDs and the IDs of their owned controls or views.

During the `init` function, the settings of the composite only have their default values. If the application developer has provided some values to the constructor, these values will only be set later on. To keep the composite and its inner controls in sync, override the relevant setters as shown in the *Properties* section below — or, if your composite has many properties or several inner controls reacting to the same property, use the model-based approach described in [Synchronizing Properties via a $this Model](synchronizing-properties-via-a-this-model-8b9014d.md).

> ### Note:  
> When synchronizing with inner controls by calling their `ManagedObject#applySettings` API or even recreating them entirely and using `constructor` settings, ensure that given values are escaped using [`sap/ui/base/ManagedObject.escapeSettingsValue`](https://ui5.sap.com/#/api/sap.ui.base.managedObject%23methods/sap.ui.base.ManagedObject.escapeSettingsValue). For more information, see [Escaping Binding Syntax](../04_Essentials/binding-syntax-e2e6f41.md#loioe2e6f4127fe4450ab3cf1339c42ee832__section_EBS). String values from application data should be safeguarded against accidental interpretation as binding expressions. If the application intends to bind `myValue`, for example, `setMyValue` will be called accordingly in the below sample.

```
// "Input" required from "sap/m/Input"
// "Button" required from "sap/m/Button"
// "ManagedObject" required from "sap/ui/base/ManagedObject"

SearchField.prototype.init = function() {
  Control.prototype.init.apply(this, arguments);
  this.setAggregation("_input", this._getInput());
  this.setAggregation("_btn", this._getButton());
  // ...
};

SearchField.prototype._getInput = function() {
  let oInput = this.getAggregation("_input");
  if (!oInput && !this.isDestroyStarted()) {
    oInput = new Input(this.getId() + "-input", {
      value: ManagedObject.escapeSettingsValue(this.getMyValue()), // Safeguard against unintentional binding interpretation
      change: (oEvent) => {
        this.setProperty("myValue", oEvent.getParameter("value"), true/*no rerendering needed, change originates in HTML*/);
      }
    });
    this.setAggregation("_input", oInput);
  }
  return oInput;
};

// ...
```



### Exit

You can use the `exit` function to clean up your control when it is destroyed. You do not need to destroy the inner controls manually. This is done automatically by the framework because the inner controls are kept in hidden aggregations.

```
/**
 * Clean-up hook... Framework destroys the aggregations by default.
 */
SearchField.prototype.exit = function() {
  // Other cleanup tasks not covered by framework
  // ...
  Control.prototype.exit.apply(this, arguments);
};
```

> ### Caution:  
> When the framework destroys an aggregation by calling `destroyAggregation` \(or indirectly via `destroyXYZ`\), the named aggregation mutators \(`setXYZ` for a `0..1` aggregation, `removeXYZ` for a `0..n` aggregation\) are not called for the aggregated children. If your composite control implements side effects in those mutator methods, you must also implement corresponding side effects in its `destroyXYZ` method.



### Properties

Changes to a composite's properties usually need to be reflected in its inner controls. In the example below, the `myValue` property is propagated to the inner `Input` by overriding its generated setter. Inside the override, call `this.setProperty(...)`, so that the underlying property value is stored — this also keeps the generated getter working without a separate override.

Note how the `Input`'s change event is used to update the composite's `myValue` property in the opposite direction. Because the change originated in the HTML input field, no re-rendering of the composite is needed; this is expressed by the third parameter of the `setProperty` call. The same pattern applies whenever a property change does not require a re-render at the composite level.

> ### Note:  
> Changing the `Input`'s `value` does trigger a re-rendering of the `Input`.

```
/**
 * Propagate value to Input.
 */
SearchField.prototype.setMyValue = function(sValue){
    this.setProperty("myValue", sValue, true /*no rerendering of whole composite control needed*/);
    this._getInput()?.setValue(sValue);
    return this;
};
```

Propagating the API settings to the parts is usually not as straightforward as shown in the example above. If intercepting the changes by overriding the setters is not sufficient or too complicated, an alternative approach might be to implement a single `updateAllParts` method and call it at the beginning of the renderer of the composite control or in the `onBeforeRendering` hook of the control itself.



### Renderer

You can use markup for layouting in the renderer implementation. But at the heart of it, you simply delegate \(via the render manager\) to the composite parts' renderers. This is where you really benefit from re-using other controls with non-trivial renderers. If you have chosen the `updateAllParts` approach to keep the composite API settings and the settings of the parts in sync, make sure that you call `updateAllParts` before the real rendering starts.

```
const SearchFieldRenderer = {
    apiVersion: 4,
    render(oRm, oSearchField) {
        // oSearchField.updateAllParts() depending on your 'sync' approach
        oRm.openStart("div", oSearchField);
        oRm.class("SearchField");
        oRm.openEnd();
        oRm.renderControl(oSearchField._getInput());
        oRm.renderControl(oSearchField._getButton());
        oRm.close("div");
    }
};
```



<a name="loioc1512f6ce1454ff1913e3857bad56392__section_coming_from_xmlcomposite"/>

## Migrating from `XMLComposite`

The imperative `init` and renderer described on this page replace what `XMLComposite` does declaratively via the `.control.xml` fragment. The mechanics are the same: inner controls live in aggregations, the framework destroys them when the composite is destroyed, and the renderer delegates to the inner-control renderers. What changes is where the wiring is expressed.


<table>
<tr>
<th valign="top">

`XMLComposite` \(deprecated\)

</th>
<th valign="top">

Standard Composite

</th>
</tr>
<tr>
<td valign="top">

Inner controls declared in `.control.xml` fragment

</td>
<td valign="top">

Inner controls created in `init` and assigned to hidden aggregations

</td>
</tr>
<tr>
<td valign="top">

Fragment is rendered automatically

</td>
<td valign="top">

Write a `renderer` that delegates to the inner-control renderers

</td>
</tr>
<tr>
<td valign="top">

Inner controls destroyed automatically

</td>
<td valign="top">

Unchanged — hidden aggregations are destroyed by the framework

</td>
</tr>
<tr>
<td valign="top">

`byId("foo")` for fragment children

</td>
<td valign="top">

Keep references on `this` directly, or compute the inner control's ID as `this.getId() + "-foo"` and look it up via `Element.getElementById(...)` — there is no `byId` method on a standard `Control`.

</td>
</tr>
</table>

**Example: Before/After**

A small `SimpleText` composite that exposes a `text` property bound to an inner `sap.m.Text`.

**Before migration:**

```
<!-- XMLComposite fragment: SimpleText.control.xml -->
<core:FragmentDefinition xmlns:m="sap.m" xmlns:core="sap.ui.core">
    <m:Text text="{$this>/text}"/>
</core:FragmentDefinition>
```

```
// XMLComposite JS: SimpleText.js (deprecated)
sap.ui.define([
    "sap/ui/core/XMLComposite"
], function(XMLComposite) {
    "use strict";
    return XMLComposite.extend("my.SimpleText", {
        metadata: {
            properties: {
                text: { type: "string", defaultValue: "" }
            }
        }
    });
});
```

**After migration:**

```
// Standard Composite: SimpleText.js
sap.ui.define([
    "sap/ui/core/Control",
    "sap/m/Text"
], function(Control, Text) {
    "use strict";

    const SimpleText = Control.extend("my.SimpleText", {
        metadata: {
            properties: {
                text: { type: "string", defaultValue: "" }
            },
            aggregations: {
                "_text": { type: "sap.m.Text", multiple: false, visibility: "hidden" }
            }
        },

        init() {
            Control.prototype.init.apply(this, arguments);
            this.setAggregation("_text", new Text(this.getId() + "-text"));
        },

        setText(sText) {
            this.setProperty("text", sText, true);
            this.getAggregation("_text")?.setText(sText);
            return this;
        },

        renderer: {
            apiVersion: 4,
            render(oRm, oControl) {
                oRm.openStart("div", oControl);
                oRm.openEnd();
                oRm.renderControl(oControl.getAggregation("_text"));
                oRm.close("div");
            }
        }
    });

    return SimpleText;
});
```

This example uses a setter wrapper for the single property, in line with the pattern shown earlier on this page. If the control you wish to migrate has many fragment bindings on `{$this>...}`, see [Synchronizing Properties via a $this Model](synchronizing-properties-via-a-this-model-8b9014d.md) for a model-based replacement that preserves the binding syntax.

**Related Information**  


[Composite Controls](composite-controls-d6bab27.md "A composite control is an SAPUI5 control whose visual representation is built by reusing other controls, providing a stable public API while encapsulating implementation details.")

[Forwarding Aggregations](forwarding-aggregations-64a5e17.md "A mechanism used for aggregations of composite controls. With aggregation forwarding, an aggregation declared on a composite is automatically routed to an aggregation of one of its inner controls — without writing add/remove/destroy wrappers by hand.")

[Synchronizing Properties via a $this Model](synchronizing-properties-via-a-this-model-8b9014d.md "An alternative to writing setter wrappers in your composite control: expose its state via a model, and let the inner controls bind to it. SAPUI5 propagates property changes for you.")

