<!-- loio41b02dfe1ac44d72bb766f5fc3e3d244 -->

# The `Share` Building Block

Freestyle SAPUI5 applications can also use the "`Share`" functionality that allows end users to share the current application state using the options *Send Email*, *Share to Microsoft Teams*, *Save as Tile*, and *Share in SAP Jam* \(on platforms that are integrated with SAP Jam\).



<a name="loio41b02dfe1ac44d72bb766f5fc3e3d244__section_qfd_qdn_j1c"/>

## Configuring the Visibility of the *Send Email* Option

You can control the visibility of the *Send Email* and *Share: Collaboration Manager* options within the `Share` building block by configuring `showSendEmail` and `showCollaborationManager` under the `shareOptions`. By default, both options are set to `false`.

> ### Sample Code:  
> ```
> <macros:Share id="shareWithStaticProperties">
>       <macros:shareOptions showSendEmail="false" showCollaborationManager="true" />"
> </macros:Share>
> ```



For more information and live examples, see the SAP Fiori development portal at [Building Blocks - Share - Overview](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/buildingBlocks/share) and [Building Blocks - Share - Share Extensions](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/controllerExtensions/shareExtensibility).



<a name="loio41b02dfe1ac44d72bb766f5fc3e3d244__section_cvs_phs_j5b"/>

## API

For information about the Share API, see the [API Reference](https://ui5.sap.com/#/api/sap.fe.macros.Share).

For information about the Share Controller Extensions API, see the [API Reference](https://ui5.sap.com/#/api/sap.fe.core.controllerextensions.Share).

