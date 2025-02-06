<!-- loio91f0d1c56f4d1014b6dd926db0e91070 -->

# Assigning the Model to the UI

If you don't want to use a component or descriptor file, you have to assign the model instance manually to the UI, before you can bind controls to this model instance.

SAPUI5 provides a flexible and modularized concept in which you can not only define one model for your applications, but define different areas in your application with different models and assign single controls to a model. You can, for example, define a JSON model for the application and an OData model for a table control that is contained in the application. You can also set multiple models for a control or a [`UIArea`](https://ui5.sap.com/#/api/sap.ui.core.UIArea) by specifying a name for the model. These models can be accessed by their name.

```js
var oJSONModel = new sap.ui.model.json.JSONModel();
var oODataModel  = new sap.ui.model.odata.v2.ODataModel("myServicelUrl");
var oControl  = new sap.m.Input();

oControl.setModel(oODataModel);
//set the JSONModel with the name 'myJSONModel' to the same control
oControl.setModel(oJSONModel,"myJSONModel");
```

When you set a model to a `UIArea` or control, it will be propagated to all aggregated child controls. So if you set a model to a container control, for example, all controls that are contained \(aggregated\) in this container have access to this model. If one of the contained controls has its own model set \(with the same name\), the propagation stops. It is not possible to have two models with the same name set to one control instance.

Choose one of the following options:

-   If you use a Component for your app, you should set the model in the `manifest.json`:

    > ### Example:  
    > **Setting a model in the manifest.json**
    > 
    > ```json
    > {
    >   "_version": "1.12.0",
    >   "sap.app": {
    >     ...
    >     "dataSources": {
    >       "invoiceRemote": {
    >         "uri": "https://services.odata.org/V2/Northwind/Northwind.svc/",
    >         "type": "OData",
    >         "settings": {
    >           "odataVersion": "2.0"
    >         }
    >       }
    >     }
    >   },
    >   ...
    >   "sap.ui5": {
    >     ...
    >     "models": {
    >       "i18n": {
    >          ...
    >       },
    >       "invoice": {
    >         "dataSource": "invoiceRemote"
    >       }
    >     }
    >   }
    > }
    > ```

    If you need to access your model in the `onInit` function of a controller, keep in mind that the model is not available via `this.getView().getModel("myModel")`. This is because the model is held by a view's parent, which isn't yet connected to the view at execution time. However, you can access the model via the Component in the following way:

    > ### Example:  
    > **Setting a model in the `onInit` function of a controller**
    > 
    > ```js
    > // in your controller
    > ...
    > onInit: function() {
    >    ...
    >    var oModel = this.getOwnerComponent().getModel("myModel");
    >    ...
    > }
    > ...
    > ```

-   You can define a specific model for a particular view by using the `setModel` method available on any control. When the model name `myModel` is omitted, the default model is set.

    ```js
    this.getView().setModel(oModel, "myModel");
    ```

-   You can also define a specific model for sections within a `UIArea`, for example, inside a panel or for a table control:

    ```js
    
    var oTable = this.getView().byId("table");
    oTable.setModel(oModel, "myModel");
    ```


**Related Information**  


[Components](components-958ead5.md "Components are independent and reusable parts used in SAPUI5 applications.")

[Manifest \(Descriptor for Applications, Components, and Libraries\)](manifest-descriptor-for-applications-components-and-libraries-be0cf40.md "The manifest (also known as descriptor for applications, components, and libraries, in short: app descriptor) is inspired by the WebApplication Manifest concept introduced by the W3C. The manifest provides a central, machine-readable, and easy-to-access location for storing metadata associated with an application, an application component, or a library.")

