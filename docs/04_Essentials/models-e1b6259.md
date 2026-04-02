<!-- loioe1b625940c104b558e52f47afe5ddb4f -->

# Models

A model in the Model View Controller concept holds the data and provides methods to retrieve the data from the database and to set and update data.



![UI5 provides the following models: JSON, XML, Resource (all client-side); OData V4, and OData V2 (both
							server-side).](images/SAPUI5_Models_a99f157.png)

SAPUI5 provides the following predefined models:

-   **OData models**: Enable binding of controls to data from OData services.

    > ### Note:  
    > Two OData models are available:
    > 
    > -   OData V4 for OData services using the OData V4 protocol
    > 
    > -   OData V2 for OData services using the OData V2 protocol

-   **JSON model**: Can be used to bind controls to JavaScript object data, which is usually serialized in the JSON format. The JSON model is a client-side model and, therefore, intended for small data sets, which are completely available on the client.

-   **XML model**: A client-side model intended for small data sets, which are completely available on the client. The XML model does not contain mechanisms for server-based paging or loading of deltas.

-   **Resource model**: Designed to handle data in resource bundles, mainly to provide texts in different languages.


Whether data can only be read from the model or also be written to the model using data binding differs between the models. For an overview, see [Binding Modes: One-way Binding, Two-way Binding, and One-time Binding](data-binding-68b9644.md#loio68b9644a253741e8a4b9e4279a35c247__section_BindingModes). Note that two-way binding is currently only supported for properties, and not for aggregations.

The JSON model, XML model, and the resource model are **client-side models**, meaning that the model data is loaded completely and is available on the client. Operations such as sorting and filtering are executed on the client without server requests.

The OData \(V4 or V2\) models are **server-side models** and only load required data from the server.

You can define several models for use with your application and assign single controls to a model. You can also define nested models, for example, a JSON model defined for the application and an OData model for a table control contained in the application.

**Related Information**  


[API Reference: `sap.ui.model`](https://ui5.sap.com/#/api/sap.ui.model)

