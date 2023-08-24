<!-- loio5278bfd38f3940b192df0e39f2fb33b3 -->

# Step 2: Creating a Model

In this step, we create a model as container for the data on which your application operates.

The business data within a model can be defined using various formats:

-   JavaScript Object Notation \(JSON\)

-   Extensible Markup Language \(XML\)

-   OData

-   Your own custom format \(not covered in this tutorial\)


> ### Note:  
> There is also a special type of model called a "resource model". This model type is used as a wrapper object around a resource bundle file. The names of such files must end with `.properties` and are used typically for holding language-specific text.
> 
> We will use this in [Step 6: Resource Models](step-6-resource-models-9790d9a.md).

When JSON, XML and resource models are created, the data they contain is loaded in a single request \(either from a file stored locally on the client or by requesting it from a Web server\). In other words, after the model's data has been requested, the entire model is known to the application. These models are known as client-side models and tasks such as filtering and sorting are performed locally on the client.

An OData model however, is a server-side model. This means that whenever an application needs data from the model, it must be requested from the server. Such a request will almost never return all the data in the model, typically because this would be far more data than is required by the client application. Consequently, tasks such as sorting and filtering should always be delegated to the server.

In this tutorial, we will focus on JSON models since they are the simplest ones to work with.



## Preview

  
  
**Screen with text derived from a model object \(No visual changes to last step\)**

![](images/Tutorial_Data_Binding_Step_1_6d391d5.png "Screen with text derived from a model object (No visual changes to last
					step)")



## Coding

You can view and download all files in the Demo Kit at [Data Binding - Step 2](https://ui5.sap.com/#/entity/sap.ui.core.tutorial.databinding/sample/sap.ui.core.tutorial.databinding.02).



## webapp/index.js

```js
sap.ui.require([
	"sap/m/Text",
	"sap/ui/model/json/JSONModel"
], function (Text, JSONModel) {
	"use strict";

	// Attach an anonymous function to the SAPUI5 'init' event
	sap.ui.getCore().attachInit(function () {
		// Create a JSON model from an object literal
		var oModel = new JSONModel({
			greetingText: "Hi, my name is Harry Hawk"
		});

		// Assign the model object to the SAPUI5 core
		sap.ui.getCore().setModel(oModel);


		// Create a text UI element that displays a hardcoded text string
		new Text({text: "Hi, my name is Harry Hawk"}).placeAt("content");
	});
});

```

Create a new JSON model passing the data as object literal and store the resulting model instance in a local variable called `oModel`.

Set `oModel` to be the default model within the entire SAPUI5 core.

This makes the model object globally available to all controls used within the application.

In this case we have bound the model object to the SAPUI5 core. This has been done for simplicity, but is not considered good practice. Generally speaking, a model object holding business data should be bound to the app's `Component.js` or to the view that displays the data. For an example, see the Walkthrough tutorial, [Step 7: JSON Model](step-7-json-model-70ef981.md) \(binding to the View\) or [Step 9: Component Configuration](step-9-component-configuration-4cfa608.md) \(binding to the Component\).

> ### Note:  
> Models can be set on every control by calling `setModel()`. The model is then propagated to all aggregated child controls \(and their children, and so on…\). All child control will then have access to that model

The text that is displayed on the UI is still hard-coded and not taken from the model - we will bind the property `greetingText` to our UI control in the next step.

**Related Information**  


[Models](../04_Essentials/models-e1b6259.md "A model in the Model View Controller concept holds the data and provides methods to retrieve the data from the database and to set and update data.")

[JSON Model](../04_Essentials/json-model-96804e3.md#loio96804e3315ff440aa0a50fd290805116 "The JSON model can be used to bind controls to JavaScript object data, which is usually serialized in the JSON format.")

