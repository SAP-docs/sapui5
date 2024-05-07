<!-- loio68d0e58857a647d49470d9f92dd859bd -->

# Instantiating Views

To instantiate views asychronously, SAPUI5 provides the factory method `View.create` defined in module `sap/ui/core/mvc/View`.

To pass the required information for the instantiation, use an object with the following properties:

-   `type`: The type can be `JSON`, `JS`, `HTML`, or`XML`. All possible types are declared in the enumeration `sap.ui.core.mvc.ViewType`.

-   `viewName`: View name corresponding to the module concept

-   `definition`: Only relevant for XML views, HTML views and JSON views. Defines the XML, HTML or JSON string representation of the view definition. If `viewName` and `definition` are given, the `viewName` property is used to load the view definition.

-   `Controller`: Any controller instance; the given controller instance overrides the controller defined in the view definition

-   `viewData`: Only used for JS views; this property contains user-specific data that is available during the whole lifecycle of the view and the controller


All regular properties of a view \(control\) can be passed to the object as usual.



## Loading Views

The default mode is the asynchronous loading of a view: The advantage of asynchronous loading compared to synchronous loading is that the UI does not freeze for the duration of the loading process and there is no blockage of functionalities during view initialization.

With the asynchronous loading of views, the instance is not fully available at the moment of creation, instead you may receive a `Promise` via the `View.prototype.loaded` method. The following code snippet shows how the view instance is available in the resolve function of the `promise`.

> ### Note:  
> If you access the view in the controller's `onInit` callback, the view instance is available in any case. The behavior does not change.

```js
// "View" required from "sap/ui/core/mvc/View"
// "coreLibrary" required from "sap/ui/core/library"
// "my.own.controller" was defined earlier
View.create({
    viewName: "my.own.view",
    controller: "my.own.controller",
    type: coreLibrary.mvc.ViewType.XML
}).then(function(oView) {
    // the instance is available in the callback function
    oView.placeAt("uiArea");
});
```



### Synchronous Mode

> ### Note:  
> We do **not** recommend to instantiate views synchronously. Use the asynchronous mode instead.



<a name="loio68d0e58857a647d49470d9f92dd859bd__section_mcg_g5w_vfb"/>

## Lazy Loading for XML Views

The following code snippet shows how to do a lazy loading for XML views:

```xml
<!-- File: view/CustomView.view.xml -->
<mvc:View xmlns="sap.m" xmlns:mvc="sap.ui.core.mvc">
    <Text text="Custom View loaded ..."/>
</mvc:View>
```

```js
// File: controller/MainController.controller.js
sap.ui.require(["sap/ui/core/mvc/XMLView", "sap/ui/core/mvc/Controller"], function(XMLView, Controller) {
	return Controller.extend("samples.controller.MainController", {
		// ...
		onSomeEventTriggered: function() {
			// instantiate view using create-factory
			XMLView.create({
				viewName: "samples.view.CustomView"
			})
			.then(function(oCustomView) {
				// View loaded ...
			})
		}

	});
 });
```

For an example, see the [`sap.ui.core.sample.View.async/preview`](https://ui5.sap.com/#/entity/sap.ui.core.mvc.View/sample/sap.ui.core.sample.View.async) sample in the Demo Kit.

