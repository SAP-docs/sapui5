<!-- loio15d74a2d274a4d8abc57c5d31fe2deb5 -->

# Synchronizing Controls

Here's how you can keep properties, aggregations, and events synchronized when using the *combine* action.



<a name="loio15d74a2d274a4d8abc57c5d31fe2deb5__section_bqt_4kt_hyb"/>

## Synchronizing Properties

While applying the *combine* change, we sometimes need to create new controls. Like in the previous example, we create a `sap.m.MenuItem` control for each original instance of `sap.m.Button`. The original button can have bindings on certain properties. For example, the `enabled/text/visible` properties can be bound to a custom model. When the bound model changes, the original control reacts accordingly. The same behavior should be inherited by newly created controls \(in our case `sap.m.MenuItem`\).

**Example:** If the enabled property changes in the model, the original button receives this change. The newly created `sap.m.MenuItem` control, which corresponds to this button, should also receive this change on the `enabled` property and should disable/enable the new button accordingly.

Here's a solution: The `sap.ui.fl` library provides a special object called `sap.ui.fl.util.ManagedObjectModel`. It's a wrapper of `sap.ui.model.base.ManagedObjectModel`. You can use this object to express the desired synchronization logic between two controls in a declarative way that works on JavaScript and XML level. Here's how:

> ### Sample Code:  
> Example of `sap.ui.fl.util.ManagedObjectModel` usage for properties synchronization
> 
> ```
> // Model name can be any string, but we recommend to use the following pattern to simplify debugging in case of problems:
> var sModelName = "$sap.m.flexibility.CombineButtonsModel";
>  
> // Like any other new control, we ask Modifier to create it for us.
> var oManagedObjectModel = oModifier.createControl(
>     "sap.ui.fl.util.ManagedObjectModel",
>     oAppComponent,
>     oView,
>     Object.assign({}, oSelector, {
>         id: oSelector.id + '-managedObjectModel' // Make sure this control has a unique ID.
>     }),
>     {
>         object: oButton, // Object against which this model is going to be created.
>         name: sModelName
>     }
> );
>  
> // Insert the newly created model into the `dependents` aggregation of the control where this model is going to be used.
> oModifier.insertAggregation(oMenuItem, "dependents", oManagedObjectModel);
>  
> // ** IMPORTANT ** DO NOT CALL .setModel() setter on the control, because it cannot be expressed
> // declaratively on XML level. The setModel() will be called automatically by sap.ui.fl.util.ManagedObjectModel
> // when it is added to the desired control. That said, after the next line, the oMenuItem already has the model set.
>  
> // Create binding against newly created model. The model object automatically subscribes to updates
> // for the property with the same name in the original object (oButton in this code sample).
> oModifier.bindProperty(oMenuItem, "text", sModelName + ">/text");
> ```

> ### Tip:  
> Find a full example on GitHub at [https://github.com/SAP/openui5/blob/master/src/sap.m/src/sap/m/changeHandler/CombineButtons.js](https://github.com/SAP/openui5/blob/master/src/sap.m/src/sap/m/changeHandler/CombineButtons.js).

Thanks to the abstraction of `sap.ui.fl.util.ManagedObjectModel`, we don't have to worry if the original control has bindings or not. This complexity is hidden inside `ManagedObjectModel` itself. `ManagedObjectModel` lets us simply watch properties changes on some control without having to think about implementation details.



<a name="loio15d74a2d274a4d8abc57c5d31fe2deb5__section_kry_c4t_hyb"/>

## Synchronizing Aggregations

The original control sometimes has a `customData` aggregation with some data in it, which has to be available from the newly created control as well. In our example: If the `sap.m.Button` has a `customData` aggregation, the same data should be available on `sap.m.MenuItem`, which corresponds to this button.

Here's a solution: By using `sap.ui.fl.util.ManagedObjectModel`, it's also possible to synchronize aggregations. Refer to the previous code snippet on how to create the `ManagedObjectModel` instance. Here's an example on how to bind an aggregation:

> ### Sample Code:  
> Example of `sap.ui.fl.util.ManagedObjectModel` usage for properties synchronization
> 
> ```
> // Create an aggregation binding on customData aggregation on a newly created control (sap.m.MenuItem).
> oModifier.bindAggregation(oMenuItem, "customData", {
>     path: sModelName + ">/customData", // Binding path points to the customData property of the model which points to the customData aggregation on the original control.
>     template: oModifier.createControl( // Template specifies how data should be translated into the receiver control.
>         "sap.ui.core.CustomData",
>         oAppComponent,
>         oView,
>         Object.assign({}, oSelector, { // Make sure the template has a unique ID. The rows in the bound aggregation will use this ID plus postfix - "-clone-{i}", where "i" is a row number.
>             id: oSelector.id + '-customData'
>         }),
>         {
>             key: {
>                 path: sModelName + ">key" // Binding for `key` property against the CustomData instance on original control
>             },
>             value: {
>                 path: sModelName + ">value" // Binding for `value` property against the CustomData instance on original control
>             }
>         }
>     )
> });
> 
> ```



<a name="loio15d74a2d274a4d8abc57c5d31fe2deb5__section_h3d_1pt_hyb"/>

## Synchronizing Events

The original control sometimes has some event handlers attached to it, and these event handlers have to be called. In our example, the original `sap.m.Button` has a press event handler attached. When the newly created control is clicked, the event handler on the original control has to be called as well.

Here's how to do this:

1.  Make sure that the AMD module of the change handler is exported to the global namespace:

    > ### Sample Code:  
    > Snippet indicating how to expose the AMD module into global namespace
    > 
    > ```
    > sap.ui.define(function () {
    >     "use strict";
    >  
    >     var CombineButtons = {};
    >     // Implementation
    >     return CombineButtons;
    >  
    > }, /* bExport= */true); // <<<--- IMPORTANT: Must be `true`.
    > ```

2.  Create an event handler function inside the change handler. This is called a proxy handler. This proxy function is going to be attached to the newly created control and is responsible to trigger the corresponding event on the original control. Here's an example:

    > ### Sample Code:  
    > Snippet demonstrating how to define a proxy event handler
    > 
    > ```
    > sap.ui.define([
    >     "sap/ui/core/util/reflection/JsControlTreeModifier"
    > ], function (
    >     JsControlTreeModifier
    > ) {
    >     "use strict";
    >  
    >     var CombineButtons = {};
    >  
    >     /**
    >      * Callback function which is attached via modifier in applyChange
    >      * @param {sap.ui.base.Event} oEvent - Event object
    >      * @param {object} mSelector - Selector object
    >      * @param {string} mSelector.id - ID used for determination of the flexibility target
    >      * @param {boolean} mSelector.idIsLocal - Flag if the selector.id has to be concatenated with the application component ID while applying the change.
    >      */
    >     CombineButtons.pressHandler = function (oEvent, mSelector) {
    >         var oButton = JsControlTreeModifier.bySelector(mSelector);
    >         oButton.firePress(); // The proxy handler is responsible to pass any parameters from oEvent object to firePress() call of the original control.
    >     };
    >  
    >     return CombineButtons;
    > }, /* bExport= */true);
    > ```

    > ### Note:  
    > The proxy function receives the payload object as a second parameter, which contains the information about the original control. It's a standard feature of SAPUI5 that event handlers can receive some payload in addition to a classic `sap.ui.base.Event` object. However, this doesn't happen automatically, the change handler developer needs to bypass this parameter when attaching the event \(see next step\).

    > ### Note:  
    > As no actual events can happen on XML level, it's safe to use `JsControlTreeModifier` inside the proxy event handler. Commonly it's used to get a control instance out of a selector object.

3.  Attach the created proxy handler to newly created control:

    > ### Sample Code:  
    > Snippet demonstrating how to define a proxy event handler
    > 
    > ```
    > oModifier.attachEvent(oMenuItem, "press", "sap.m.changeHandler.CombineButtons.pressHandler", oModifier.getSelector(oButton, oAppComponent));
    > 
    > ```

    > ### Note:  
    > It's important to pass a string that defines a path to the proxy handler. The reason behind it is XML support. For the original control, it's recommended to pass a Selector object.


