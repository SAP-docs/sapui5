<!-- loio88756c08fe144ba08ff1762ad92fc07c -->

# Step 5: One-Way Data Binding

In contrast to the two-way binding behavior shown above, one-way data binding is also possible. Here, data is transported in one direction only: from the model, through the binding instance to the consumer \(usually the property of a control\), but never in the other direction. In this example, we will change the previous example to use one-way data binding. This will illustrate how the flow of data from the user interface back to the model can be switched off if required.



## Preview

  
  
**Two-way data binding disabled for the checkbox**

![](images/Tutorial_Data_Binding_Step_4_61d68f1.png "Two-way data binding disabled for the checkbox")



## Coding

You can view and download all files in the Demo Kit at [Data Binding - Step 5](https://ui5.sap.com/#/entity/sap.ui.core.tutorial.databinding/sample/sap.ui.core.tutorial.databinding.05).



## webapp/index.js

```js
sap.ui.require([
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/mvc/XMLView",
	"sap/ui/model/BindingMode"
], function (JSONModel, XMLView, BindingMode) {
	"use strict";

	// Attach an anonymous function to the SAPUI5 'init' event
	sap.ui.getCore().attachInit(function () {
		// Create a JSON model from an object literal
		var oModel = new JSONModel({
			firstName: "Harry",
			lastName: "Hawk",
			enabled: true,
			panelHeaderText: "Data Binding Basics"
		});

		oModel.setDefaultBindingMode(BindingMode.OneWay);


		// Assign the model object to the SAPUI5 core
		sap.ui.getCore().setModel(oModel);

		// Display the XML view called "App"
		new XMLView({
			viewName: "sap.ui.demo.db.view.App"
		}).placeAt("content");
	});
});

```

Insert the single highlighted line immediately after the creation of the model object in `index.js`.

Now, no matter what state the checkbox is in, the input fields remain open for input because one-way data binding ensures that data flows only from the model to the UI, but never in the other direction.

The binding mode \(one-way or two-way\) is set on the model itself. Therefore, unless you specifically alter it, a binding instance will always be created using the model's default binding mode.

Should you wish to alter the binding mode, then there are two ways of doing this:

-   Alter the model's default binding mode. This is the approach used above.

-   Specify the data binding mode for a specific binding instance by using the `oBindingInfo.mode` parameter. This change applies only to this data binding instance. Any other binding instances will continue to use the model's default binding mode.For more information, see [API Reference: `sap.ui.base.ManagedObject.bindProperty`](https://ui5.sap.com/#/api/sap.ui.base.ManagedObject/methods/bindProperty). 


> ### Note:  
> There are two important points to understand about alterations to a model object's data binding mode:
> 
> -   If you alter the default binding mode of a model \(as in the example above\), then unless you explicitly say otherwise, all binding instances created after that point in time will use the altered binding mode.
> 
> -   Altering a model's default binding mode has no effect on already existing binding instances.

