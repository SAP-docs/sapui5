<!-- loiob95adf3545fc4c578ca50d1ee3ec34a1 -->

# Adapting Texts in the Delete Dialog \(Object Page with Nested Smart Table\)

You can adapt the text in the *Delete* dialog that appears when users delete items from nested smart tables on the object page.



## Context

> ### Note:  
> This topic is only applicable to SAP Fiori elements for OData V2.

> ### Caution:  
> Use app extensions with caution and only if you cannot produce the required behavior by other means, such as manifest settings or annotations. To correctly integrate your app extension coding with SAP Fiori elements, use only the `extensionAPI` of SAP Fiori elements. For more information, see [Using the extensionAPI](using-the-extensionapi-bd2994b.md).
> 
> After you've created an app extension, its display \(for example, control placement and layout\) and system behavior \(for example, model and binding usage, busy handling\) lies within the application's responsibility. SAP Fiori elements provides support only for the official `extensionAPI` functions. Don't access or manipulate controls, properties, models, or other internal objects created by the SAP Fiori elements framework.

On an object page with a nested smart table, users can choose the *Delete* button in the table toolbar to delete the selected items.

A delete dialog contains a title, text, and an undeletable text. An undeletable text appears only if one or more selected items cannot be deleted using the `deletablePath` feature.

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

3.  Implement the `beforeLineItemDeleteExtension` function in the controller extension file of the object page.

    You can adapt the delete dialog in the following ways:

    -   Using an object

        > ### Sample Code:  
        > ```
        > 
        > beforeLineItemDeleteExtension: function(oBeforeLineItemDeleteProperties) {
        >     if (oBeforeLineItemDeleteProperties.sUiElementId !== "My_APP::sap.suite.ui.generic.template.ObjectPage.view.Details::MY_EntitySet--to_NavProperty::com.sap.vocabularies.UI.v1.LineItem::Table") {
        >         return;
        >     }
        >     var oMessageText = {
        >         title: "My title",
        >         text: "My text",
        >         undeletableText: "My undeletable text"
        >     };
        >     return oMessageText;
        > }
        > 
        > ```

    -   Using promises

        > ### Sample Code:  
        > ```
        > 
        > beforeLineItemDeleteExtension: function(oBeforeLineItemDeleteProperties) {
        >     if (oBeforeLineItemDeleteProperties.sUiElementId !== "My_APP::sap.suite.ui.generic.template.ObjectPage.view.Details::MY_EntitySet--to_NavProperty::com.sap.vocabularies.UI.v1.LineItem::Table") {
        >         return;
        >     }
        >     var oMessageText = {
        >         title: "My title",
        >         text: "My text",
        >         undeletableText: "My undeletable text"
        >     };
        >     return Promise.resolve(oMessageText);
        > }
        > 
        > ```

    -   Using the `extensionAPI.SecuredExecution`

        > ### Sample Code:  
        > ```
        > 
        > beforeLineItemDeleteExtension: function(oBeforeLineItemDeleteProperties) {
        >     if (oBeforeLineItemDeleteProperties.sUiElementId !== "My_APP::sap.suite.ui.generic.template.ObjectPage.view.Details::MY_EntitySet--to_NavProperty::com.sap.vocabularies.UI.v1.LineItem::Table") {
        >         return;
        >     }
        >     var oMessageText = {
        >         title: "My title",
        >         text: "My text",
        >         undeletableText: "My undeletable text"
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


    > ### Note:  
    > The property `oBeforeLineItemDeleteProperties` contains information about items selected for deletion in the nested smart table. For example, `sUiElementId` identifies the nested smart tablefrom which the items are to be deleted.


