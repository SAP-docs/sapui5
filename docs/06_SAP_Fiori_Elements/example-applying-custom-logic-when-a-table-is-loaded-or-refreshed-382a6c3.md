<!-- loio382a6c39fd494c12a4ee23c8659909bd -->

# Example: Applying Custom Logic When a Table is Loaded or Refreshed

This example explains how to use an extension point if you want to apply custom logic when your table is being loaded or refreshed.



<a name="loio382a6c39fd494c12a4ee23c8659909bd__context_m5j_yd2_scb"/>

## Context

> ### Note:  
> This topic is currently only applicable to SAP Fiori elements for OData V2.

> ### Caution:  
> Use app extensions with caution and only if you cannot produce the required behavior by other means, such as manifest settings or annotations. To correctly integrate your app extension coding with SAP Fiori elements, use only the `extensionAPI` of SAP Fiori elements. For more information, see [Using the extensionAPI](using-the-extensionapi-bd2994b.md).
> 
> After you've created an app extension, its display \(for example, control placement and layout\) and system behavior \(for example, model and binding usage, busy handling\) lies within the application's responsibility. SAP Fiori elements provides support only for the official `extensionAPI` functions. Don't access or manipulate controls, properties, models, or other internal objects created by the SAP Fiori elements framework.



## Procedure

1.  Register your extension point in the `manifest.json`.

    > ### Sample Code:  
    > ```
    > "extends": {
    >    "extensions": {
    >       ... 
    >       "sap.ui.controllerExtensions": { 
    >          ...
    >          "sap.suite.ui.generic.template.ListReport.view.Details": { 
    >             ... 
    >             "controllerName": "STTA_MP.ext.controller.DetailsExtension",
    >             ...
    >          }
    >       } 
    >       ...
    > 
    > ```

2.  Implement your controller extension.

    You have to implement a `onBeforeRebindTableExtension` function within the object page controller extension. Here, it is`DetailsExtension.controller.js`. In this example, three tables are used on the object page.To identify the tables, you should use the table ID.

    > ### Sample Code:  
    > ```
    > 
    > sap.ui.define([], function() {
    >     return {
    >         onBeforeRebindTableExtension: function(oEvent) {
    >             var oID = oEvent.getSource().getId();
    >             var tableId = "STTA_MP::sap.suite.ui.generic.template.ObjectPage.view.Details::STTA_C_MP_Product--to_ProductText::com.sap.vocabularies.UI.v1.LineItem::Table";
    >             // to select only one specific table
    >             switch (oID) {
    >                 case tableId:
    >                 // implement your logic for table 1 here
    >                 ...
    >                 break;
    >             default :
    >                 // implement your default logic for all others here
    >                 ...
    >                 return;
    >             }
    >         }
    >         ...
    >     }
    > })
    > 
    > ```


