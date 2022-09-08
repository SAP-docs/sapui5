<!-- loioe1b625940c104b558e52f47afe5ddb4f -->

# Models

A model in the Model View Controller concept holds the data and provides methods to retrieve the data from the database and to set and update data.



![](images/SAPUI5_Models_a99f157.png)

SAPUI5 provides the following predefined models. For an overview of the binding modes supported by them, see [One-time Binding, One-way Binding, and Two-way Binding](data-binding-68b9644.md#loio68b9644a253741e8a4b9e4279a35c247__section_BindingModes).

-   **OData model**: Enables binding of controls to data from OData services. The OData model supports two-way, one-way and one-time binding modes. However, two-way binding is currently only supported for properties, and not for aggregations.

    > ### Note:  
    > The OData model currently supports the following OData versions:
    > 
    > -   OData V2
    > 
    > -   OData V4 \(limited feature scope\)

-   **JSON model**: Can be used to bind controls to JavaScript object data, which is usually serialized in the JSON format. The JSON model is a client-side model and, therefore, intended for small data sets, which are completely available on the client. The JSON model supports two-way \(default\), one-way and one-time binding modes.

-   **XML model**: A client-side model intended for small data sets, which are completely available on the client. The XML model does not contain mechanisms for server-based paging or loading of deltas. The XML model supports two-way \(default\), one-way and one-time binding modes.

-   **Resource model**: Designed to handle data in resource bundles, mainly to provide texts in different languages. The resource model only supports one-time binding mode because it deals with static texts only.


The JSON model, XML model, and the resource model are **client-side models**, meaning that the model data is loaded completely and is available on the client. Operations such as sorting and filtering are executed on the client without further server requests.

The OData \(V2 or V4\) model is a **server-side model** and only loads the data requested by the user interface from the server.

You can not only define one model for your applications, but define different areas in your application with different models and assign single controls to a model. You can also define nested models, for example, a JSON model defined for the application and an OData model for a table control contained in the application.

A Web application should support several data sources, such as JSON, XML, Atom, or OData. However, the way in which data binding is defined and implemented within the UI controls should be independent of the respective data source. It is also possible to create a custom model implementation for data sources that are not yet covered by the framework or are domain-specific.

-   **[OData V2 Model](odata-v2-model-6c47b2b.md#loio6c47b2b39db9404582994070ec3d57a2 "The OData V2 Model enables binding of controls to data from OData
		services.")**  
The OData V2 Model enables binding of controls to data from OData services.
-   **[OData V4 Model](odata-v4-model-5de13cf.md "The sap.ui.model.odata.v4.ODataModel is the model implementation for
		consuming an OData V4 service.")**  
The `sap.ui.model.odata.v4.ODataModel` is the model implementation for consuming an OData V4 service.
-   **[JSON Model](json-model-96804e3.md#loio96804e3315ff440aa0a50fd290805116 "The JSON model can be used to bind controls to JavaScript object data, which is
		usually serialized in the JSON format.")**  
The JSON model can be used to bind controls to JavaScript object data, which is usually serialized in the JSON format.
-   **[XML Model](xml-model-a53e71d.md#loioa53e71d85fae4d0887a8b58431197a27 "The XML model allows to bind controls to XML data. It is a client-side model intended
		for small datasets, which are completely available on the client. The XML model does not
		contain mechanisms for server-based paging or loading of deltas. It supports two-way
		binding.")**  
The XML model allows to bind controls to XML data. It is a client-side model intended for small datasets, which are completely available on the client. The XML model does not contain mechanisms for server-based paging or loading of deltas. It supports two-way binding.
-   **[Resource Model](resource-model-91f122a.md#loio91f122a36f4d1014b6dd926db0e91070 "The resource model is used as a wrapper for resource bundles. In data binding you use the resource model instance, for example, to bind texts of
		a control to language-dependent resource bundle properties.")**  
The resource model is used as a wrapper for resource bundles. In data binding you use the resource model instance, for example, to bind texts of a control to language-dependent resource bundle properties.
-   **[Custom Model](custom-model-91f1c7e.md "Custom models can be used if none of the models provided by SAPUI5 is suitable for
		the specific needs of an application.")**  
Custom models can be used if none of the models provided by SAPUI5 is suitable for the specific needs of an application.
-   **[Assigning the Model to the UI](assigning-the-model-to-the-ui-91f0d1c.md "If you don't want to use a component or descriptor file, you have to assign the model
		instance manually to the UI, before you can bind controls to this model
		instance.")**  
If you don't want to use a component or descriptor file, you have to assign the model instance manually to the UI, before you can bind controls to this model instance.
-   **[Setting the Default Binding Mode](setting-the-default-binding-mode-1a08f70.md "The default binding mode applies when a model instance is created. You can overwrite the
		default binding mode after model creation.")**  
The default binding mode applies when a model instance is created. You can overwrite the default binding mode after model creation.

**Related Information**  


[API Reference: `sap.ui.model`](https://ui5.sap.com/#/api/sap.ui.model)

