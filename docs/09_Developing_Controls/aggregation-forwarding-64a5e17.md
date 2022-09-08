<!-- loio64a5e1775bf04d4883db18c9de7d83bd -->

# Aggregation Forwarding

A mechanism used for aggregations of composite controls.



<a name="loio64a5e1775bf04d4883db18c9de7d83bd__section_kyq_3m5_scb"/>

## Overview

Aggregration forwarding is used when application developers want to add child controls to an aggregation of a composite control, but the composite control does not keep these controls as direct children. Instead, it moves or forwards them to an aggregation of one of its internal controls.

This technique is often used when a control with an aggregation is wrapped by a composite control to add functionality, but the application still has control over the content of the wrapped control. In other cases, the composite control uses layout controls internally to define the placement of aggregated children.

> ### Note:  
> While aggregation forwarding as described here is mainly aimed at composite controls, it has also been implemented for the `ManagedObject` base class. The forwarding can also be used for other entities which are not controls, but inherit directly from `ManagedObject` or one of its subclasses.
> 
> For more information about this class, see the [API Reference: `ManagedObject`](https://ui5.sap.com/#/api/sap.ui.base.ManagedObject/methods/sap.ui.base.ManagedObject.extend). 

> ### Note:  
> Sometimes the controls that have been added to an aggregation of a composite control have to be transformed into different controls, which are then added to an aggregation of an internal control. This is a different use case and not covered by aggregation forwarding. With aggregation forwarding, aggregated child controls are moved **without** transforming them.



<a name="loio64a5e1775bf04d4883db18c9de7d83bd__section_vlk_km5_scb"/>

## Configuration

Aggregation forwarding requires a simple additional setting in the definition of a control aggregation. SAPUI5 needs to know to which internal control all aggregated children need to be forwarded and to which aggregation of this internal control.

Aggregation forwarding is defined in the aggregation definition inside the control metadata.

The `forwarding` property can be set as an object defining the following:

-   `getter` or `idSuffix`: A way how SAPUI5 determines the internal control instance to which the aggregation is forwarded at runtime, which is what you could call the target control. This can either be done by specifying the `getter`, the name of a function of the composite control which always returns the target control instance, or the `idSuffix`, a string which is appended to the ID of the composite control to construct the ID of the target control.

-   `aggregation`: The name of the aggregation of the target control to which this aggregation is forwarded

-   `forwardBinding` \(optional\): Determines whether any binding is done at the target control or only at the outer composite control. This can be crucial if the forwarding target control has functionality that requires the aggregation to be bound.


When such a forwarding definition is done, SAPUI5 moves all aggregated child controls to the target control. All calls to `addAggregation`, `removeAggregation`, `indexOfAggregation` and so on are forwarded. When asked for the forwarded child control, both the composite control and the forwarding target act like the child control belongs to their aggregation. However, the inner forwarding target control is the actual parent of all forwarded children.



<a name="loio64a5e1775bf04d4883db18c9de7d83bd__section_pmd_qm5_scb"/>

## Examples

Here is an example that demonstrates aggregation forwarding: The new `FilterableList` control is supposed to display a list of items with an input field above the list. The list items are filtered while the user is entering the input. This `FilterableList` control can be implemented as a composite control, using the `sap.m.List` and `sap.m.Input` controls as inner controls to take advantage of their existing implementation, design, and set of features. Application developers using `FilterableList` cannot change all attributesof the inner `List` control. However, they should be able to provide the actual list items. Hence, the new `FilterableList` composite control has an `items` aggregation and forwards all items to the inner `sap.m.List` control, so, for example, the layouting, events, and selection can be handled there.

```js

aggregations: {
	 // The items forwarded from the FilterableList to the internal sap.m.List
	 items : {type: "sap.m.ListItemBase", multiple: true, forwarding: {
		   idSuffix: "-myInternalList",
		   aggregation: "items"
	 }},

```

Another example would be a new `ButtonList` control that is supposed to contain and display an arbitrary number of `sap.m.Button` controls in a grid. Hence it has a `buttons` aggregation. For this control, control-specific HTML could be written that provides screen-size-dependent CSS for a proper grid layout of the buttons. However, this effort can be avoided, and a `sap.ui.layout.Grid` control used internally instead to do the layouting. The buttons given to the `ButtonList` control then need to be forwarded to the `content` aggregation of the `Grid` control.

```js

aggregations: {
	 // The items forwarded from the ButtonList to the internal sap.ui.layout.Grid
	 buttons: {type: "sap.m.Button", multiple: true, forwarding: {
		   getter: "_getInternalGrid",
		   aggregation: "content"
	 }},
```



<a name="loio64a5e1775bf04d4883db18c9de7d83bd__section_fbk_l3q_ddb"/>

## Aggregation Forwarding in XML Composite Controls

If you use aggregation forwarding with `idSuffix` for an XML composite control, you define this as follows:

```js
sap.ui.define([
    "sap/ui/core/XMLComposite"], 
    function( XMLComposite ) {
    "use strict";
    var TextList = XMLComposite.extend("fragments.TextList", {
        metadata: {
            aggregations: {
                texts: { 
                    type: "sap.ui.core.Item",
                    multiple: true, forwarding: {
                           idSuffix: "--myInternalVBox",
                           aggregation: "items"
                     }
                }
            }
        }
    })
    return TextList;
}, /* bExport= */true);
```

In this case, the fragment definition XML file looks like this:

```xml
<core:FragmentDefinition xmlns:m="sap.m" xmlns:core="sap.ui.core">
    <m:VBox id="myInternalVBox"/>
</core:FragmentDefinition>
```

> ### Note:  
> `myInternalVBox` is prefixed with `--`. Other than that, the coding looks exactly the same as the one for aggregation forwarding for standard composite controls.



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

    Also, do not clone inner controls created by your composite control, for example, inside the `init()` method: If your control is cloned, the `init()` method of the clone is called, and the inner control is created as well.


