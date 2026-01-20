<!-- loio1fd8e5201e3142d0bc002a078bb3da98 -->

# Adapting Texts in the Delete Dialog \(Object Page Header\)

You can adapt the text of the *Delete* dialog that appears when users delete the entire object page.



## Context

> ### Note:  
> This topic is only applicable to SAP Fiori elements for OData V2.

> ### Caution:  
> Use app extensions with caution and only if you cannot produce the required behavior by other means, such as manifest settings or annotations. To correctly integrate your app extension coding with SAP Fiori elements, use only the `extensionAPI` of SAP Fiori elements. For more information, see [Using the extensionAPI](using-the-extensionapi-bd2994b.md).
> 
> After you've created an app extension, its display \(for example, control placement and layout\) and system behavior \(for example, model and binding usage, busy handling\) lies within the application's responsibility. SAP Fiori elements provides support only for the official `extensionAPI` functions. Don't access or manipulate controls, properties, models, or other internal objects created by the SAP Fiori elements framework.

In the object page header, users can display the *Delete* dialog by choosing the *Delete* button to delete the entire content of the object page.

The delete dialog contains a title and text.

Perform the following steps to use the extension:



## Procedure

1.  Register your extension in the `manifest.json` file:

    > ### Sample Code:  
    > `manifest.json`
    > 
    > ```
    > 
    > "extends": {
    >    "extensions": {
    >       ... 
    >       "sap.ui.controllerExtensions": { 
    >          ...
    >          "sap.suite.ui.generic.template.ObjectPage.view.Details": {
    >             ...
    >             "controllerName": "MY_APP.ext.controller.DetailsExtension",
    >             ...
    >          }
    >       } 
    >       ...
    > 
    > ```

2.  Maintain the controller extension files in your application:

    ![](images/AppExtensionTree_ObjectPage_318f52b.png)

3.  Implement the `beforeDeleteExtension` function in the controller extension file of the object page. You can adapt the dialog in the following ways:

    -   Using an object

        > ### Sample Code:  
        > ```
        > 
        > beforeDeleteExtension: function() {
        >     var oMessageText = {
        >         title: "My title";
        >         text: "My text"
        >     };
        >     return oMessageText;
        > }
        > 
        > ```

    -   Using promises

        > ### Sample Code:  
        > ```
        > 
        > beforeDeleteExtension: function() {
        >     var oMessageText = {
        >         title: "My title";
        >         text: "My text"
        >     };
        >     return Promise.resolve(oMessageText);
        > }
        > 
        > ```

    -   Using the `extensionAPI.SecuredExecution`

        > ### Sample Code:  
        > ```
        > 
        > beforeDeleteExtension: function() {
        >     var oMessageText = {
        >         title: "My title";
        >         text: "My text"
        >     };
        >     return this.extensionAPI.securedExecution(function() {
        >         return new Promise(function(resolve) {
        >             ...
        >             resolve(oMessageText);
        >             ...
        >         });
        >     });
        > }
        > 
        > ```

        For more information about `extensionAPI.SecuredExecution`, see [Using the SecuredExecution Method](using-the-securedexecution-method-6a39150.md).



