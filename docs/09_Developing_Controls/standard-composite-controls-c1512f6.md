<!-- loioc1512f6ce1454ff1913e3857bad56392 -->

# Standard Composite Controls

Composite controls are a means to save time and effort by reusing existing controls for the implementation.

For application developers, the composite control is a black box, therefore, an application developer cannot distinguish a composite control from native \(non-composite\) controls. As the application developer can not distinguish the controls, the control developer can change the implementation later and avoid composition \(or the other way around\). For existing uses of the respective control, this change is fully compatible.

> ### Note:  
> If you do **not** intend to re-use a control in several places, a composite control may not be your best choice. Composite controls are best suited for \(massive\) re-use and for a public API that shields the application developer from its inner workings. If these are not your requirements, consider to use other techniques of factoring out common parts within your application. You can, for example, simply write an XML fragment or a function returning the root of some control tree.



## Simple Example: Search Field

To create a composite control, you start with crafting its API including properties, events, aggregations, and so on as you do it for any other control. Choose either element or control as base type. The following simple example combines an input field with a button that we call "search field". To the outside world, it offers an editable value and can fire a search event.

![](images/SAPUI5_Composite_Control_Search_Field_Example_fd6475b.png)



### API

As any other control, you can describe composite controls via the JavaScript control definition API, see [Developing Controls](developing-controls-8dcab00.md) and the following example.

```js
// "Control" required from "sap/ui/core/Control"
var SearchField = Control.extend("SearchField", {
  metadata : {
    properties : {
       "value" : "string"
    },
    aggregations: {
       "_input" : {type : "sap.m.Input", multiple : false, visibility: "hidden"},
       "_btn" : {type : "sap.m.Button", multiple : false, visibility: "hidden"}
    },
    events: {
       "search" : {}
    }
  }
});
```

Since SAPUI5 version 1.60, properties and associations can be configured with `hidden` visibility. In this case, no mutators and no API documentation will be generated for these properties and associations. It is possible to bind data of hidden properties inside a control.

The two aggregations with visibility set to `hidden` are defined in the code snippets above. These aggregations are used to hold the inner controls. Aggregations are used to define a parent-child relationship between a parent control and its children \(controls or elements\). The knowledge about this relationship is, for example, relevant for the SAPUI5 core to dispatch events properly, or to cleanup the children when the parent is destroyed. Hidden aggregations are control internal and are used especially to register the inner controls within the control hierarchy without making them publicly available. Because hidden aggregations are only used internally within a composite control for hidden aggregations, no typed `accessor` functions are generated, they are not cloned, and data binding is not enabled.



### Behavior

The control implementation, that is, its behavior, contains the code for initialization and clean-up hooks as well as glue code for properties and events.



### Init

The `init` function contains the composite's parts and stores references to them. If you want to hide the composite parts, you should **not** assign an ID to those parts, but rather let the framework compute the IDs automatically. This reduces the possibility that a composite's parts are accessed from outside via the `sap.ui.getCore().byId(...)` function.

If you have to assign IDs to the composite parts, then you should create those IDs by concatenating the main control ID \(ID of your composite instance\) with a single dash \(`-`\) and an additional ID for the part like in the following example:

```js
mySearchField-input
mySearchField-btn
```

To avoid conflicts with the internal IDs of parts, the part ID \(`input` or `btn` in the example\) must be prefix-free. That means, it should not contain another dash \(for example, don't use parts `input-label` and `input` at the same time\). If the control that is used as part `input` also is a composite control and accidentally uses part `label`, then you'll have a conflict between `mySearchField-input``-label` \(`label` part of the `input`\) and your `mySearchField-input-label` artifact \(`input-label` part of your composite\).

> ### Note:  
> SAPUI5 reserves the single dash \(`-)` for composite controls and their parts, a double dash \(`--)` is used to combine the ID of views and their contained controls and a triple dash \(`---)`is used to combine component IDs and the IDs of their owned controls or views.

During the `init` function, the settings of the composite only have their default values. If the application developer has provided some values to the constructor, these values will only be set later on. It is, therefore, crucial for the correct behavior of your composite control that you implement one of the synchronization mechanisms described below.

```js
// "Button" required from "sap/m/Button"
// "Input" required from "sap/m/Input"
/**
 * Initialization hook... creating composite parts
 */
SearchField.prototype.init = function(){
  var that = this;
  this.setAggregation("_input", new Input({
    change: function(oEvent){
      that.setProperty("value", oEvent.getParameter("Value"), true /*no re-rendering needed, change originates in HTML*/); //see section Properties for explanation
    }
  }));
  this.setAggregation("_btn", new Button({
    text: "Search",
    press: function(){
      that.fireSearch();
    }
  }));
};
```



### Exit

You can use the `exit` function to clean up your control when it is destroyed. You do not need to destroy the inner controls. This is done automatically by the framework because the inner controls are kept in hidden aggregations.

```js
/**
 * Clean-up hook... destroying composite parts.
 */
SearchField.prototype.exit = function() {
  //nothing to do here
};
```



### Properties

Changes to settings in the API of a composite control are usually reflected in its parts. In the following example, the value property is propagated to the input part. To do so, the generated setter for that property is overwritten. Make sure that you include the proper implementation which generically sets a property inside the element base class, else you would have to override the getter also.

Note how the input's change event is used to update the composite's value property. Because the change originated in the HTML input field, no re-rendering is needed. This is expressed by the third parameter of the `setProperty` call. This trick is applicable whenever a property change does not require a re-rendering on this control level.

> ### Note:  
> Changing the input part's value triggers a re-rendering of the input.

```js
/**
 * Propagate value to input.
 */
SearchField.prototype.setValue = function(sValue){
    this.setProperty("value", sValue, true /*no re-rendering of whole search field needed*/);
    this.getAggregation("_input").setValue(sValue); // Note: this triggers re-rendering of input!
};
```

Propagating the API settings to the parts is usually not as straightforward as shown in the example above. If intercepting the changes by overriding the setters is not sufficient or too complicated, an alternative approach might be to implement a single `updateAllParts` method and call it at the beginning of the renderer of the composite control or in the `onBeforeRendering` hook of the control itself..



### Renderer

You can use markup for layouting in the renderer implementation. But at the heart of it, you simply delegate \(via the render manager\) to the composite parts' renderers. This is where you really benefit from re-using other controls with non-trivial renderers. If you have chosen the `updateAllParts` approach to keep the composite API settings and the settings of the parts in sync, make sure that you call `updateAllParts` before the real rendering starts.

```js
SearchFieldRenderer.render = function(oRm, oSearchField) {
  // oSearchField.updateAllParts(); // called depending on your 'sync' approach
  oRm.openStart("div", oSearchField); 
  oRm.class("SearchField"); 
  oRm.openEnd();
  oRm.renderControl(oSearchField.getAggregation("_input"));
  oRm.renderControl(oSearchField.getAggregation("_btn"));
  oRm.close("div");
};
```

