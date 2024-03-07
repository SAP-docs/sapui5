<!-- loio2691788a08fc43f7bf269ea7c6336caf -->

# Spreadsheet Export

The spreadsheet export allows you to export data to an Office Open XML spreadsheet.



<a name="loio2691788a08fc43f7bf269ea7c6336caf__section_jk4_pxc_ffb"/>

## Overview

The spreadsheet export allows you to export your data to an Office Open XML document of category Spreadsheet \(xlsx\). You can export any type of content that has a tabular format, such as tables or lists.

If you use the `SmartTable` control to export data, you can also use different types of exports, the client export or the SAP Gateway export.

> ### Tip:  
> The `SmartTable` control offers you all the preconfigured content you need for the export. You can either simply use it without having to define any configuration yourself, or you can adapt the content to make it fit your own specific requirements. For other entitities, you have to define the configuration manually as described below.



<a name="loio2691788a08fc43f7bf269ea7c6336caf__section_txq_sxc_ffb"/>

## Prerequisites

If you want to export data manually, without `SmartTable`, you have to perform the following steps:

1.  Load the `sap.ui.export.Spreadsheet` library within your controller coding.

    You can load the library during the initialization of your controller or whenever needed.

2.  Define the configuration for the export for the following objects:

    -   Columns

    -   Data sources

    -   Additional properties that are used for processing the export \(optional\)

    -   Hierarchical data, if required


3.  Start the export process.




<a name="loio2691788a08fc43f7bf269ea7c6336caf__section_ssv_jf3_ffb"/>

## Details



### Loading During Initialization

If the library is loaded during the initialization of your controller, it is available across the whole lifecycle of the controller. All you need to do is add the library as a dependency to your existing `sap.ui.define` call. This mechanism ensures that the library is already loaded every time you use it. You don't need to take care of synchronous or asynchronous loading but the library is loaded even if an export is never triggered.

```js
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/export/Spreadsheet"
], function(Controller, Spreadsheet) {
    "use strict";
 
    return Controller.extend("sample.Spreadsheet", {
 
        // Place your controller coding here
 
    });
});
```



### Loading On Demand

If the library is loaded on demand, it will only be available when it is actually needed \(for example, when a user presses an export button\). You have to request the library every time it is needed \(although it will be loaded from the backend only once\). This can be done by using `sap.ui.require` with a callback function. This is necessary to ensure that the library will be loaded asynchronously, but it requires more effort to implement the export because all the export steps need to be enwrapped by the callback function.

```js
sap.ui.define([
    "sap/ui/core/Lib"
    "sap/ui/core/mvc/Controller"
], function(Library, Controller) {
    "use strict";
 
    return Controller.extend("sample.Spreadsheet", {
 
        onExport: function() {
            // loadLibrary is only needed when the library is not added as a dependent in bootstrap or any other dependency mechanism used in your project.
            var oExportLibLoadPromise = Library.load("sap.ui.export");
         
            oExportLibLoadPromise.then(function() {
                sap.ui.require(["sap/ui/export/Spreadsheet"], function(Spreadsheet) {
 
                    // Place your export coding here
 
                });
            });
        }
    });
});
```

For more information, see the [API Reference: `sap.ui.require`](https://ui5.sap.com/#/api/sap.ui/properties). 



### Supported Data Types

The following data types are supported:

-   [`String`](data-types-for-spreadsheet-export-283217d.md#loio283217d8f187401c8045723abc27e5e0__section_sg5_2z1_j3b)

-   [`Boolean`](data-types-for-spreadsheet-export-283217d.md#loio283217d8f187401c8045723abc27e5e0__section_qwh_fmb_j3b)

-   [`Number`](data-types-for-spreadsheet-export-283217d.md#loio283217d8f187401c8045723abc27e5e0__section_dnx_c3n_n3b)

-   [`Date`](data-types-for-spreadsheet-export-283217d.md#loio283217d8f187401c8045723abc27e5e0__section_tg5_hyv_43b)

-   [`DateTime`](data-types-for-spreadsheet-export-283217d.md#loio283217d8f187401c8045723abc27e5e0__section_tg5_hyv_43b)

-   [`Time`](data-types-for-spreadsheet-export-283217d.md#loio283217d8f187401c8045723abc27e5e0__section_tg5_hyv_43b)

-   [`Currency`](data-types-for-spreadsheet-export-283217d.md#loio283217d8f187401c8045723abc27e5e0__section_gdf_spn_n3b)

-   [`Enumeration`](data-types-for-spreadsheet-export-283217d.md#loio283217d8f187401c8045723abc27e5e0__section_zw5_53x_43b)

-   [`BigNumber`](data-types-for-spreadsheet-export-283217d.md#loio283217d8f187401c8045723abc27e5e0__section_fhw_hqx_43b)

-   [`Percentage`](data-types-for-spreadsheet-export-283217d.md#loio283217d8f187401c8045723abc27e5e0__section_wxf_zjj_l4b)

-   [`Timezone`](data-types-for-spreadsheet-export-283217d.md#loio283217d8f187401c8045723abc27e5e0__section_f2x_vc2_qyb)


> ### Note:  
> Currency values and numbers that cannot be represented in the standard format as defined by the *IEEE \(Institute of Electrical and Electronics Engineers\)* in the spreadsheet file because they are too large automatically use the `BigNumber` data type as a fallback option. The number is then stored as `string` and represented using the international format with a comma as a thousands separator and a period for the decimal point.

For more information, see [Data Types for Spreadsheet Export](data-types-for-spreadsheet-export-283217d.md).



### Additional Settings on Export User Interface

In addition to the regular `Export` dialog, the user can use the `Export As` dialog in the `SmartTable` control, which can be selected from a dropdown list next to the *Export to Spreadsheet* button, to define additional settings for the export.

The user can define the following for the exported file:

-   File name

-   File format

    The file format has been predefined.

-   Whether to show cells with more than one value in separate columns

    This option is used for columns based on text arrangements, currencies, and units of measure. For example, if both the name and the ID of a customer are displayed in one column, the exported file will show the customer data in two separate columns. This might result in duplicate columns if the file already contains columns with the same header name.

-   Whether to show any available filter settings

    If this option is selected, the exported file has an additional *Filter* sheet showing the filters that were set on the columns as well as in the `FilterBar` control. The filters shown in the exported file currently contain the technical property that has been extracted from the binding.


The `beforeExport` event also provides the additional export settings defined by the user \(`userExportSettings` parameter\). This parameter is always available and contains the settings currently valid for the export, so the application developers can decide which settings to use.

> ### Note:  
> The dialog with additional export settings is available for the client export of `SmartTable` only. For the SAP Gateway export, only the regular dialog is available with no additional options for export settings.

**Related Information**  


[API Reference: `sap.ui.export.Spreadsheet`](https://ui5.sap.com/#/api/sap.ui.export.Spreadsheet)

[Samples](https://ui5.sap.com/#/entity/sap.ui.export.Spreadsheet)

[API Reference: `sap.ui.export.EdmType`](https://ui5.sap.com/#/api/sap.ui.export.EdmType)

[SAP Gateway Export versus Client Export](sap-gateway-export-versus-client-export-e7f52f4.md "To decide which type of export to use, have a look at the following criteria.")

