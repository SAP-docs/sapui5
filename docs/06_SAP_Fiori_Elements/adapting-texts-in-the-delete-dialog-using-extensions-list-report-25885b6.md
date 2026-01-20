<!-- loio25885b6f62ec4f61bf9271553ef369cd -->

# Adapting Texts in the Delete Dialog Using Extensions \(List Report\)

You can adapt the text of the *Delete* dialog that appears when users delete items from the list report.



## Context

> ### Note:  
> This topic is only applicable to SAP Fiori elements for OData V2.

> ### Caution:  
> Use app extensions with caution and only if you cannot produce the required behavior by other means, such as manifest settings or annotations. To correctly integrate your app extension coding with SAP Fiori elements, use only the `extensionAPI` of SAP Fiori elements. For more information, see [Using the extensionAPI](using-the-extensionapi-bd2994b.md).
> 
> After you've created an app extension, its display \(for example, control placement and layout\) and system behavior \(for example, model and binding usage, busy handling\) lies within the application's responsibility. SAP Fiori elements provides support only for the official `extensionAPI` functions. Don't access or manipulate controls, properties, models, or other internal objects created by the SAP Fiori elements framework.

The *Delete* dialog appears as follows:

![](images/Delete_dialog_box_9b29c5c.png)

It contains a title, text, and unsaved changes. Unsaved changes is displayed in the dialog only in the following cases:

-   Selected items having the editing status `unsavedChanges`.

-   Selected items having the editing status `unsavedChanges` and `locked`.

-   Selected items having the editing status `unsavedChanges` and cannot be deleted using the `deletablePath` feature.

-   Selected items having the editing status `unsavedChanges`, `locked`, and cannot be deleted using the `deletablePath` feature.

-   Selected items having the editing status `unsavedChanges` and cannot be deleted using the `deletablePath` feature.


> ### Note:  
> For information about how to adapt texts on the object page, see [Adapting Texts in the Delete Dialog \(Object Page Header\)](adapting-texts-in-the-delete-dialog-object-page-header-1fd8e52.md) and [Adapting Texts in the Delete Dialog \(Object Page with Nested Smart Table\)](adapting-texts-in-the-delete-dialog-object-page-with-nested-smart-table-b95adf3.md).



## Procedure

1.  Register your extension in the `manifest.json` file.

    > ### Sample Code:  
    > `manifest.json`
    > 
    > ```
    > 
    > "extends": {
    >     "extensions": {
    >         ...
    >          "sap.ui.controllerExtensions": {
    >             ...
    >             "sap.suite.ui.generic.template.ListReport.view.ListReport": { 
    >                 ...
    >                 "controllerName": "MY_APP.ext.controller.ListReportExtension",
    >                 ...
    >             }
    >         } 
    >         ...
    > 
    > ```

2.  Maintain the controller extension files in your application.

    ![](images/AppExtension_Tree_List_Report_cc8015b.png)

3.  Implement the function `'beforeDeleteExtension'` in the controller extension file of the list report. You can adapt the delete dialog in the following ways:

    -   Using an object

        > ### Sample Code:  
        > ```
        > 
        > beforeDeleteExtension: function(oBeforeDeleteProperties) {
        >     var oMessageText = {
        >         title: "My title";
        >         text: "My text",
        >         unsavedChanges: "My unsaved changes",
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
        > beforeDeleteExtension: function(oBeforeDeleteProperties) {
        >     var oMessageText = {
        >         title: "My title";
        >         text: "My text",
        >         unsavedChanges: "My unsaved changes",
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
        > beforeDeleteExtension: function(oBeforeDeleteProperties) {
        >     var oMessageText = {
        >         title: "My title";
        >         text: "My text",
        >         unsavedChanges: "My unsaved changes",
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
    > The property `oBeforeDeleteProperties` contains information about the items selected for deletion in the list report.


