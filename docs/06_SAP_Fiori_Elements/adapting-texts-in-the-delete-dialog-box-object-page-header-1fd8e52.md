<!-- loio1fd8e5201e3142d0bc002a078bb3da98 -->

# Adapting Texts in the Delete Dialog Box \(Object Page Header\)

You can adapt the text of the *Delete* dialog box that is displayed when you delete the entire object page.



## Context

> ### Note:  
> This topic is currently only applicable to SAP Fiori elements for OData V2.

> ### Caution:  
> Use app extensions with caution and only if you cannot produce the required behavior by other means, such as manifest settings or annotations. To correctly integrate your app extension coding with SAP Fiori elements, use only the `extensionAPI` of SAP Fiori elements. For more information, see [Using the extensionAPI](using-the-extensionapi-bd2994b.md).
> 
> After you've created an app extension, its display \(for example, control placement and layout\) and system behavior \(for example, model and binding usage, busy handling\) lies within the application's responsibility. SAP Fiori elements provides support only for the official `extensionAPI` functions. Don't access or manipulate controls, properties, models, or other internal objects created by the SAP Fiori elements framework.

In the object page header, you can display the *Delete* dialog box by choosing the *Delete* button to delete the entire content of the object page.

Perform these steps to be able to use the extension:



## Procedure

1.  Register your extension at the app descriptor \(manifest.json\):

    > ### Sample Code:  
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

2.  Maintain the controller extension files in your app:

     ![](images/AppExtensionTree_ObjectPage_318f52b.png) 

3.  The *Delete* dialog box contains the following text:

    -   title: always appears

    -   text: always appears


    Implement the `beforeDeleteExtension` function in the controller extension file of the object page. You have several options to determine the delete dialog:

    -   The easy way

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

    -   Using the `extensionAPI.SecuredExecution` \(see also [Using the SecuredExecution Method](using-the-securedexecution-method-6a39150.md)\)

        > ### Sample Code:  
        > ```
        > 
        > beforeDeleteExtension: function() {
        >     var oMessageText = {
        >         title: "My title";
        >         text: "My text"
        >     };
        >     return this.extenionAPI.securedExecution(function() {
        >         return new Promise(function(resolve) {
        >             ...
        >             resolve(oMessageText);
        >             ...
        >         });
        >     });
        > }
        > 
        > ```



