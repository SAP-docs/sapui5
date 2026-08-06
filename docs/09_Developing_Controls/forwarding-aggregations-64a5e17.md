<!-- loio64a5e1775bf04d4883db18c9de7d83bd -->

# Forwarding Aggregations

A mechanism used for aggregations of composite controls. With aggregation forwarding, an aggregation declared on a composite is automatically routed to an aggregation of one of its inner controls — without writing add/remove/destroy wrappers by hand.



<a name="loio64a5e1775bf04d4883db18c9de7d83bd__section_kyq_3m5_scb"/>

## Overview

Aggregation forwarding lets a composite control declare an aggregation in its public API while keeping the actual children inside one of its inner controls. The composite acts as if it owned the children; internally, they live on the inner control.

This technique is often used when the composite wraps an existing control to add functionality, but applications should still be able to fill the wrapped control's aggregations directly. At other times, the composite control uses internal layout controls to position aggregated children.

> ### Note:  
> Aggregation forwarding is technically a feature of the `ManagedObject` base class, available to any class that inherits from `ManagedObject` directly or indirectly. The most common use case is composite controls, which is the focus of this page.
> 
> For more information about this class, see the [API Reference: `ManagedObject`](https://ui5.sap.com/#/api/sap.ui.base.ManagedObject/methods/sap.ui.base.ManagedObject.extend). 

> ### Note:  
> Sometimes the controls that have been added to an aggregation of a composite control have to be transformed into different controls, which are then added to an aggregation of an internal control. This is a different use case and not covered by aggregation forwarding. With aggregation forwarding, aggregated child controls are moved **without** transforming them.



<a name="loio64a5e1775bf04d4883db18c9de7d83bd__section_vlk_km5_scb"/>

## Configuration

Aggregation forwarding is configured directly on the aggregation declaration in the control metadata. SAPUI5 needs two pieces of information: which inner control receives the forwarded children, and which aggregation on that inner control they should land in.

Aggregation forwarding is defined in the aggregation definition inside the control metadata.

The `forwarding` property can be set as an object defining the following:

-   `getter` or `idSuffix` — how SAPUI5 finds the inner target control at runtime. With `getter`, you provide the name of a method that returns the target instance. With `idSuffix`, you provide a string that is appended to the composite's ID to construct the target's ID.

-   `aggregation`: The name of the aggregation of the target control to which this aggregation is forwarded

-   `forwardBinding` \(optional\): Determines whether any binding is done at the target control or only at the outer composite control. This can be crucial if the forwarding target control has functionality that requires the aggregation to be bound.


When such a forwarding definition is done, SAPUI5 moves all aggregated child controls to the target control. All calls to `addAggregation`, `removeAggregation`, `indexOfAggregation` and so on are forwarded. When asked for the forwarded child control, both the composite control and the forwarding target act like the child control belongs to their aggregation. However, the inner forwarding target control is the actual parent of all forwarded children.



<a name="loio64a5e1775bf04d4883db18c9de7d83bd__section_pmd_qm5_scb"/>

## Examples

Here is an example that demonstrates aggregation forwarding: The new `FilterableList` control is supposed to display a list of items with an input field above the list. The list items are filtered while the user is entering the input. This `FilterableList` control can be implemented as a composite control, using the `sap.m.List` and `sap.m.Input` controls as inner controls to take advantage of their existing implementation, design, and set of features. Application developers using `FilterableList` cannot change all attributes of the inner `List` control. However, they should be able to provide the actual list items. Hence, the new `FilterableList` composite control has an `items` aggregation and forwards all items to the inner `sap.m.List` control, so, for example, the layouting, events, and selection can be handled there.

```
aggregations: {
    // The items forwarded from the FilterableList to the internal sap.m.List
    items: {
        type: "sap.m.ListItemBase",
        multiple: true,
        forwarding: {
            idSuffix: "-myInternalList",
            aggregation: "items"
        }
    }
}
```

Another example: a `ButtonList` control that displays an arbitrary number of `sap.m.Button` controls in a grid. Instead of writing custom HTML and screen-size-dependent CSS for the layout, the composite uses an internal `sap.ui.layout.Grid` and forwards its `buttons` aggregation to the grid's `content`.

```
aggregations: {
    // The items forwarded from the ButtonList to the internal sap.ui.layout.Grid
    buttons: {
        type: "sap.m.Button",
        multiple: true,
        forwarding: {
            getter: "_getInternalGrid",
            aggregation: "content"
        }
    }
}
```

The `getter` value must be the name of a method on the composite that returns the inner target control instance. A minimal implementation:

```
_getInternalGrid() {
    return this.getAggregation("_grid");
}
```



<a name="loio64a5e1775bf04d4883db18c9de7d83bd__section_fbk_l3q_ddb"/>

## Migrating from `XMLComposite`

Aggregation forwarding is the same `ManagedObject`-level API in both worlds — the `forwarding` configuration on an aggregation is a feature of `sap.ui.base.ManagedObject`, not of `XMLComposite`. The `aggregations` block from a deprecated `XMLComposite` control can be reused almost verbatim on a standard `sap.ui.core.Control`, with two adjustments:

-   The `idSuffix` value no longer starts with `--`. The double dash was the `XMLComposite` fragment-ID convention. On a standard composite, use a single dash, in line with the inner-control ID convention from [Building Standard Composite Controls](building-standard-composite-controls-c1512f6.md).
-   The inner target control must be created in `init` and assigned to a hidden aggregation. `XMLComposite` declares this in the fragment; the standard composite declares it in code.

**Example: Before/After**

This example demonstrates the migration of a `texts` aggregation forwarded into an inner `VBox`.

**Before migration:**

```
// XMLComposite (deprecated): TextList.js
sap.ui.define([
    "sap/ui/core/XMLComposite"
], function(XMLComposite) {
    "use strict";
    return XMLComposite.extend("fragments.TextList", {
        metadata: {
            aggregations: {
                texts: {
                    type: "sap.ui.core.Item",
                    multiple: true,
                    forwarding: {
                        idSuffix: "--vbox",
                        aggregation: "items"
                    }
                }
            }
        }
    });
});
```

```
<!-- TextList.control.xml -->
<core:FragmentDefinition xmlns:m="sap.m" xmlns:core="sap.ui.core">
    <m:VBox id="vbox"/>
</core:FragmentDefinition>
```

**After migration:**

```
// Standard composite: TextList.js
sap.ui.define([
    "sap/ui/core/Control",
    "sap/m/VBox",
    "./TextListRenderer"
], function(Control, VBox, TextListRenderer) {
    "use strict";

    const TextList = Control.extend("my.TextList", {
        metadata: {
            aggregations: {
                texts: {
                    type: "sap.ui.core.Item",
                    multiple: true,
                    forwarding: {
                        idSuffix: "-vbox",
                        aggregation: "items"
                    }
                },
                "_layout": { type: "sap.m.VBox", multiple: false, visibility: "hidden" }
            }
        },

        init() {
            Control.prototype.init.apply(this, arguments);
            this.setAggregation("_layout", new VBox(this.getId() + "-vbox"));
        },

        renderer: TextListRenderer
    });

    return TextList;
});
```

```
// TextListRenderer.js
sap.ui.define([], function() {
    "use strict";

    return {
        apiVersion: 4,
        render(oRm, oControl) {
            oRm.openStart("div", oControl);
            oRm.openEnd();
            oRm.renderControl(oControl.getAggregation("_layout"));
            oRm.close("div");
        }
    };
});
```

Only one character changed in the `forwarding` configuration: the leading double dash became a single dash. The `texts` aggregation still forwards to the inner `VBox`'s `items`.

> ### Tip:  
> If your inner target's ID does not follow the `<composite-id>-<suffix>` convention, use the `getter` form of `forwarding` instead of `idSuffix`. See *Configuration* and the `ButtonList` example above.



<a name="loio64a5e1775bf04d4883db18c9de7d83bd__section_b14_ym5_scb"/>

## Dos and Don'ts

If you use aggregation forwarding, you have to keep the following in mind:

-   Do not call any methods \(such as `add`, `insert`, `remove` , or `destroy`\) that modify the aggregation in the forwarding target, but call them in the control that defines the forwarding.

    For example, if you create something like a `CustomList` control that uses forwarding for its `items` aggregation to an internal `List` control, do not call `this._internalList.destroyItems()`, but call `this.destroyItems()`.

-   Aggregations can only be forwarded to non-hidden aggregations of the same or a greater multiplicity \(single-to-single, single-to-multi, multi-to-multi\).

-   The target aggregation and the source aggregation have to be compatible: Any child elements given to the source aggregation must be valid in the target aggregation as well \(otherwise the target element will throw a validation error\).

-   The aggregation target control for a particular instance of a composite control must stay the same across the entire lifecycle of the composite control.

-   If the content in the target aggregation is modified by other entities or actions, such as the target control itself or another forwarding from a different source aggregation, this will lead to an unexpected behavior of the aggregation forwarding. Hence, these modifications are not allowed.

-   Forwarded child controls always have the same models that were also available at their original location **before** the forwarding. They will not use any models that are only set for the inner control to which they are forwarded. This way, models set by an application will not be overridden.

    Also, this is in accordance with what application developers would expect regarding the models set for the child control: Any bindings they define should work regardless of how aggregation forwarding is used within the controls.

-   Never clone children in public aggregations even if the aggregation is forwarded to an inner control. They are cloned automatically by the framework.

    Also, do not clone inner controls created by your composite control, for example, inside the `init` method: If your control is cloned, the `init` method of the clone is called, and the inner control is created as well.


**Related Information**  


[Composite Controls](composite-controls-d6bab27.md "A composite control is an SAPUI5 control whose visual representation is built by reusing other controls, providing a stable public API while encapsulating implementation details.")

[Building Standard Composite Controls](building-standard-composite-controls-c1512f6.md "Composite controls are a means to save time and effort by reusing existing controls for the implementation. This page walks you through the building blocks: defining the API, instantiating inner controls in init, propagating property changes, and writing a renderer.")

[Synchronizing Properties via a $this Model](synchronizing-properties-via-a-this-model-8b9014d.md "An alternative to writing setter wrappers in your composite control: expose its state via a model, and let the inner controls bind to it. SAPUI5 propagates property changes for you.")

[API Reference: `sap.ui.base.ManagedObject.extend`](https://ui5.sap.com/#/api/sap.ui.base.ManagedObject%23methods/sap.ui.base.ManagedObject.extend)

