<!-- loiobed8274140d04fc0b9bcb2db42d8bac2 -->

# Smart Table

The `sap.ui.comp.smarttable.SmartTable` control is used to create different types of tables based on OData V2 metadata. The control allows the user to define personalized table settings.

The frequently asked questions section aims at answering some basic questions that you might have when using this control.For more information, see the FAQ in the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smarttable.SmartTable%23faq).

> ### Note:  
> The code samples in this section reflect examples of possible use cases and might not always be suitable for your purposes. Therefore, we recommend that you do not copy and use them directly. 

For more information about this control, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smarttable.SmartTable) and the [samples](https://ui5.sap.com/#/entity/sap.ui.comp.smarttable.SmartTable).

For more information about annotations for this control, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smarttable.SmartTable/annotations/Summary). 



## Overview

The `SmartTable` control is a wrapper control around any SAPUI5 table. The control analyzes the `$metadata` document of an OData service and renders a table for a specific `entitySet`.

The control allows the consuming application to build list patterns based on OData services in an efficient and consistent way and thus makes it easy for the user to create tables without much effort. For example, the control enables the automatic creation of columns.

The consuming application can overwrite the OData default information. The `SmartTable` control offers you additional built-in features, such as a row count and an export to a spreadsheet application.

> ### Note:  
> Once the `SmartTable` control has been initialized, most of the property and aggregation changes \(for example, for `entitySet` or `persistencyKey`\) won't have any effect. Also, **any changes of the inner table are not recognized**, for example, by the personalization settings, and therefore **must not be made**.



## Details

When using `SmartTable` with an internal responsive table, you can set the `demandPopin` property to `true`. This property renders columns that exceed the space available on the screen by displaying popins.

`SmartTable` checks the custom data section for the columns and reads the `columnIndex` attribute to determine when the columns that are defined in the XML view are rendered.

If you want to show and follow `navigationProperty` fields for `EntityType`, the `SmartTable` control automatically performs a `$expand` operation for these fields.

> ### Note:  
> If you perform `$expand` operations while doing an export to a spreadsheet, the `$expand` parameters will automatically be removed \(only relevant for the Gateway export type\).



## Integration with Other Controls

The `SmartTable` control is closely linked to the following other controls:

-   `VariantManagement`

-   `SmartFilterBar`

-   `SmartLink`

-   `SmartField`


For more information about the various smart controls, see [sap.ui.comp](sap-ui-comp-0cbbeba.md).

