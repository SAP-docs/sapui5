<!-- loio9c069828d0064136ac6a499aa2cdace3 -->

# JS Fragments

The structure of JS fragments is similar to the structure of the respective views: They have a name and an object with a `createContent()` function.

You define a simple JS fragment named `my.useful.UiPartX` as shown in the following code snippet:

```js
// fragment is located in a file named: "my/useful/UiPartX.fragment.js"
sap.ui.define(["sap/m/Button"], function(Button) {
	return {
		createContent: function(oController) {
			var oButton  = new Button({
				text: "Hello World" ,
				press:oController.doSomething
			});
			return oButton;
		}
	}; 
});
```

The `createContent()` function is responsible for the UI definition and has to return a control. The definition can be created either inline or in a separate file, for instance in `…/my/useful/UiPartX.fragment.js`. The `oController` is either already defined or it is null. In the first case, its methods can be used for the event handlers of controls.

Despite the many similarities to views, there are also differences: First of all, there is no `getControllerName()` method. Fragments cannot specify whether they have a controller. Whether `oController` is defined or not is not a decision of the fragment itself. Instead, it is decided by the code instantiating the fragment. If that code is part of a controller, it can pass a reference to itself to the fragment. This means there can be a dependency between controllers and fragments: Fragments may expect a controller to exist and to have certain methods. And controllers may expect certain controls to be in the fragment. This is in line with the purpose of fragments - to be very light-weight re-use entities that provide little encapsulation. For more encapsulation, views or even components are better suited.

**Related Information**  


[Components](components-958ead5.md "Components are independent and reusable parts used in SAPUI5 applications.")

[Views](views-91f27e3.md "The view in the Model-View-Controller (MVC) concept is responsible for defining and rendering the UI. SAPUI5 supports predefined view types.")

