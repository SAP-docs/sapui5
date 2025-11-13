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

Since SAPUI5 version 1.60, properties, aggregations, and associations can be configured with `hidden` visibility. In this case, no accessors, no mutators, and no API documentation will be generated for them. It is still possible to bind data, regardless of the `bindable` setting. The generic methods `bindProperty`/`bindAggregation` and `unbindProperty`/`unbindAggregation` are always available.

The two aggregations with visibility set to `hidden` are used to hold the inner controls. Aggregations are used to define a parent-child relationship between a parent control and its children \(controls or elements\). The knowledge about this relationship is, for example, relevant for the SAPUI5 core to dispatch events properly, or to cleanup the children when the parent is destroyed. Hidden aggregations are control internal and are used especially to register the inner controls within the control hierarchy without making them publicly available. Because hidden aggregations are only used internally within a composite control, they are neither cloned nor generating any typed accessors or mutators.



### Behavior

The control implementation, that is, its behavior, contains the code for initialization and clean-up hooks as well as glue code for properties and events.



### Init

The `init` function contains the composite's parts and stores references to them. If you want to hide the composite parts, you should **not** assign an ID to those parts, but rather let the framework compute the IDs automatically. This reduces the possibility that a composite's parts are accessed from outside via the `Element.getElementById` function, where `Element` is required from module `sap/ui/core/Element`. Only if you have to access the composite parts by ID for some reason should you concatenate the main control ID \(ID of your composite instance\) with a single dash \(`-`\) and an additional ID for the part, like in the following example:

```js
// If ID needed, within the composite control definition:
this.getId()/*composite instance ID*/ + "-input"/*part ID*/
```

> ### Caution:  
> To avoid potential conflicts with other internal part IDs, the part ID \(`input`\) itself must not contain any additional dashes. A conflict can occur, for example, if your composite control defines one internal part incorrectly with the ID `input-inner` and another with the ID `input`, while the `input` part itself internally uses the suffix `-inner` for its subpart.
> 
> > ### Remember:  
> > SAPUI5 reserves the single dash \(`-`\) for composite controls and their parts, while a double dash \(`--`\) is used to combine the ID of views and their contained controls, and a triple dash \(`---`\) is used to combine component IDs and the IDs of their owned controls or views.

During the `init` function, the settings of the composite only have their default values. If the application developer has provided some values to the constructor, these values will only be set later on. It is, therefore, crucial for the correct behavior of your composite control that you implement one of the synchronization mechanisms described below.

> ### Note:  
> When synchronizing with inner controls by calling their `ManagedObject#applySettings` API or even recreating them entirely and using `constructor` settings, ensure that given values are escaped using [`sap/ui/base/ManagedObject.escapeSettingsValue`](https://ui5.sap.com/#/api/sap.ui.base.managedObject%23methods/sap.ui.base.ManagedObject.escapeSettingsValue). For more information, see [Escaping Binding Syntax](../04_Essentials/binding-syntax-e2e6f41.md#loioe2e6f4127fe4450ab3cf1339c42ee832__section_EBS). String values from application data should be safeguarded against accidental interpretation as binding expressions. If the application intends to bind `myValue`, for example, `setMyValue` will be called accordingly in the below sample.

```js
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

```js
/**
 * Clean-up hook... Framework destroys the aggregations by default.
 */
SearchField.prototype.exit = function() {
  // Other cleanup tasks not covered by framework
  // ...
  Control.prototype.exit.apply(this, arguments);
};
```



### Properties

Changes to settings in the API of a composite control are usually reflected in its parts. In the following example, the `myValue` property is propagated to the inner `Input` part. To do so, the generated setter for that property is overwritten. Make sure that you include the proper implementation which generically sets a property inside the element base class, else you would have to override the getter also.

Note how the `Input`'s change event is used to update the composite's `myValue` property. Because the change originated in the HTML input field, no rerendering is needed. This is expressed by the third parameter of the `setProperty` call. This trick is applicable whenever a property change does not require a rerendering on this control level.

> ### Note:  
> Changing the `Input`'s `value` does trigger a rerendering of the `Input`.

```js
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

```js
SearchFieldRenderer.render = function(oRm, oSearchField) {
  // oSearchField.updateAllParts() depending on your 'sync' approach
  oRm.openStart("div", oSearchField); 
  oRm.class("SearchField"); 
  oRm.openEnd();
  oRm.renderControl(oSearchField._getInput());
  oRm.renderControl(oSearchField._getButton());
  oRm.close("div");
};
```

**Related Information**  


[Aggregation Forwarding](aggregation-forwarding-64a5e17.md "A mechanism used for aggregations of composite controls.")

