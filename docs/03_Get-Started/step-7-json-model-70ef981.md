<!-- loio70ef981d350a495b940640801701c409 -->

# Step 7: JSON Model

Now that we have set up the view and controller, it’s about time to think about the M in MVC.

We will add an input field to our app, bind its value to the model, and bind the same value to the description of the input field. The description will be directly updated as the user types.



## Preview

   
  
<a name="loio70ef981d350a495b940640801701c409__fig_r1j_pst_mr"/>An input field and a description displaying the value of the input field

 ![](images/SAPUI5_Walkthrough_Step_07_to_10_e5a9bb4.png "An input field and a description displaying the value of the input
					field") 



## Coding

You can view and download all files at [Walkthrough - Step 7](https://ui5.sap.com/#/entity/sap.m.tutorial.walkthrough/sample/sap.m.tutorial.walkthrough.07).

```js
sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast",
   "sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, JSONModel) {
   "use strict";
   return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
      onInit : function () {
         // set data model on view
         var oData = {
            recipient : {
               name : "World"
            }
         };
         var oModel = new JSONModel(oData);
         this.getView().setModel(oModel);
      },
      onShowHello : function () {
         MessageToast.show("Hello World");
      }
   });
});

```

We add an init function to the controller. `onInit` is one of SAPUI5’s lifecycle methods that is invoked by the framework when the controller is created, similar to a constructor function of a control.

Inside the function we instantiate a JSON model. The data for the model only contains a single property for the “recipient”, and inside this it also contains one additional property for the name.

To be able to use this model from within the XML view, we call the `setModel` function on the view and pass on our newly created model. The model is now set on the view.

The message toast is just showing the static "Hello World" message. We will show how to load a translated text here in the next step.



## webapp/view/App.view.xml

```xml
<mvc:View
   controllerName="sap.ui.demo.walkthrough.controller.App"
   xmlns="sap.m"
   xmlns:mvc="sap.ui.core.mvc">
   <Button
      text="Say Hello"
      press=".onShowHello"/>
   <Input
      value="{/recipient/name}"
      description="Hello {/recipient/name}"
      valueLiveUpdate="true"
      width="60%"/>
</mvc:View>

```

We add an `sap.m.Input` control to the view. With this, the user can enter a recipient for the greetings. We bind its value to a SAPUI5 model by using the declarative binding syntax for XML views:

-   The curly brackets `{…}` indicate that data is taken from the value of the `recipient`'s object name property. This is called "data binding".

-    `/recipient/name` declares the path in the model.




## webapp/index.html

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>SAPUI5 Walkthrough</title>
	<script
		id="sap-ui-bootstrap"
		src="https://sdk.openui5.org/resources/sap-ui-core.js"
		data-sap-ui-theme="sap_belize"
		data-sap-ui-libs="sap.m"
		data-sap-ui-compatVersion="edge"
		data-sap-ui-async="true"
		data-sap-ui-resourceroots='{
			"sap.ui.demo.walkthrough": "./"
		}'
		data-sap-ui-oninit="module:sap/ui/demo/walkthrough/index">
	</script>
</head>
<body class="sapUiBody" id="content">
</body>
</html>
```

The binding of the value attribute is a simple binding example that contains only a binding pattern. We can also combine texts and binding pattern to a more complex binding result as seen in the description attribute. To be able to use the so-called complex binding syntax we have to enable it globally by setting the bootstrap parameter `data-sap-ui-compatVersion` to `edge`. If this setting is omitted, then only standard binding syntax is allowed, meaning "Hello `{/recipient/name}`" would not work anymore while "`{/recipient/name}`" would work just fine.

> ### Note:  
> You can either use `data-sap-ui-compatVersion="edge"` or `data-sap-ui-bindingSyntax="complex"` in the script. By setting the "edge" compatibility mode, the complex binding syntax is automatically enabled. The `edge` mode automatically enables compatibility features that otherwise would have to be enabled manually. For more information, see [Compatibility Version Information](../04_Essentials/compatibility-version-information-9feb96d.md).



## Conventions

-   Use Hungarian notation for variable names.


**Parent topic:** [Walkthrough](walkthrough-3da5f4b.md "In this tutorial we will introduce you to all major development paradigms of SAPUI5.")

**Next:** [Step 6: Modules](step-6-modules-f665d0d.md "In SAPUI5, resources are often referred to as modules. In this step, we replace the alert from the last exercise with a proper Message Toast from the sap.m library. The required modules are enabled to be loaded asynchronously.")

**Previous:** [Step 8: Translatable Texts](step-8-translatable-texts-df86bfb.md "In this step we move the texts of our UI to a separate resource file.")

**Related Information**  


[Model View Controller \(MVC\)](../04_Essentials/model-view-controller-mvc-91f2334.md "The Model View Controller (MVC) concept is used in SAPUI5 to separate the representation of information from the user interaction. This separation facilitates development and the changing of parts independently.")

[Data Binding](../04_Essentials/data-binding-68b9644.md "You use data binding to bind UI elements to data sources to keep the data in sync and allow data editing on the UI.")

[JSON Model](../04_Essentials/json-model-96804e3.md#loio96804e3315ff440aa0a50fd290805116 "The JSON model can be used to bind controls to JavaScript object data, which is usually serialized in the JSON format.")

[API Reference: `sap.ui.define`](https://ui5.sap.com/#/api/sap.ui/methods/sap.ui.define)

