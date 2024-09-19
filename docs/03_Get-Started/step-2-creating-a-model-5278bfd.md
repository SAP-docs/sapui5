<!-- loio5278bfd38f3940b192df0e39f2fb33b3 -->

# Step 2: Creating a Model

In this step, we create a model. It serves as a container for the data your application operates on.

You can define the business data within a model using various formats:

-   JavaScript Object Notation \(JSON\)

-   Extensible Markup Language \(XML\)

-   OData

-   Your own custom format \(not covered in this tutorial\)


> ### Note:  
> There's also a special type of model called a "resource model". This model type is used as a wrapper object around a resource bundle file. The names of such files must end with `.properties`. They're typically used for holding language-specific text.
> 
> We'll use this in [Step 6: Resource Models](step-6-resource-models-9790d9a.md).

When you create JSON, XML, and resource models, the data they contain is loaded in a single request \(either from a file stored locally on the client or by requesting it from a Web server\). In other words, after the model's data has been requested, the entire model is known to the application. These models are known as client-side models. Tasks such as filtering and sorting are performed locally on the client.

An OData model, however, is a server-side model. This means that whenever an application needs data from the model, it must be requested from the server. Such a request almost never returns all the data in the model, typically because this would be far more data than the client application requires. Consequently, tasks such as sorting and filtering should always be delegated to the server.

In this tutorial, we focus on JSON models since they're the simplest ones to work with.



## Preview

![The browser shows the text "Hi, my name is Harry Hawk"](images/Tutorial_Data_Binding_Step_1_6d391d5.png)



## Coding

You can view and download all files in the Demo Kit at [Data Binding - Step 2](https://ui5.sap.com/#/entity/sap.ui.core.tutorial.databinding/sample/sap.ui.core.tutorial.databinding.02).

1.  Create a new folder named `model` in the `webapp` folder. In this folder, create a file called `data.json` with the following content:

    **webapp/model/data.json \(New\)**

    ```
    {
    	"greetingText" : "Hi, my name is Harry Hawk"
    }
    ```

2.  Create a new JSON model in the `manifest.json` and set its path via a URI. This binds the model object to the app component and makes it globally available to all controls used within the application.

    **webapp/manifest.json**

    ```
    ...
    	"sap.ui5": {
    		"dependencies": {
    			"minUI5Version": "1.120.0",
    			"libs": {
    				"sap.m": {},
    				"sap.ui.core": {},
    				"sap.ui.layout": {}
    			}
    		},
    		"models": {
    			"": {
    				"type": "sap.ui.model.json.JSONModel",
    				"uri": "./model/data.json"
    			}
    		},
    ...
    ```


Generally speaking, a model object holding business data should be bound to the app's `Component.js` or to the view that displays the data. For an example, see the Walkthrough tutorial, [Step 7: JSON Model](step-7-json-model-70ef981.md) \(binding to the View\) or [Step 9: Component Configuration](step-9-component-configuration-4cfa608.md) \(binding to the Component\).

The text that is displayed on the UI is still hard-coded and not taken from the model. We'll bind the property `greetingText` to our UI control in the next step.

> ### Note:  
> You can set models on every control by calling `setModel()`. The model is then propagated to all aggregated child controls \(and their children, and so on …\). All child controls then have access to that model.

**Related Information**  


[Models](../04_Essentials/models-e1b6259.md "A model in the Model View Controller concept holds the data and provides methods to retrieve the data from the database and to set and update data.")

[JSON Model](../04_Essentials/json-model-96804e3.md#loio96804e3315ff440aa0a50fd290805116 "The JSON model can be used to bind controls to JavaScript object data, which is usually serialized in the JSON format.")

