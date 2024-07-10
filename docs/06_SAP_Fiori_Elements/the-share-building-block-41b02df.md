<!-- loio41b02dfe1ac44d72bb766f5fc3e3d244 -->

# The `Share` Building Block

Freestyle SAPUI5 applications can also use the "`Share`" functionality that allows end users to share the current application state using the options *Send Email*, *Share to Microsoft Teams*, *Save as Tile*, and *Share in SAP Jam* \(on platforms that are integrated with SAP Jam\).



<a name="loio41b02dfe1ac44d72bb766f5fc3e3d244__section_qfd_qdn_j1c"/>

## Configuring the Visibility of *Send Email* Option

You can control the visibility of the *Send Email* option within the `Share` building block by configuring the `showSendEmail` key under the `shareOptions`. The property values can be either boolean or binding.

> ### Sample Code:  
> ```
> <macros:Share id="shareWithStaticProperties">
>     <macros:shareOptions showSendEmail="false" />
> </macros:Share>
> ```



Check out our live example in the flexible programming model explorer at [Share Building Block Usage](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/buildingBlocks/features/shareDefault) and [Share Controller Extension Usage](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/controllerExtensions/controllerExtensionsOverview/shareExtensibility).



<a name="loio41b02dfe1ac44d72bb766f5fc3e3d244__section_cvs_phs_j5b"/>

## API

For information about the `Share` API, see the [API Reference](https://ui5.sap.com/#/api/sap.fe.macros.Share).

