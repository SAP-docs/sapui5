<!-- loio8d8d810c649941358471aafa43d25828 -->

# The `Status` Building Block

You can use the `Status` building block to display a status and criticality.

> ### Remember:  
> This building block is an experimental feature and subject to revisions. It is not intended for productive usage.

The `Status` building block is based on the `ObjectStatus` used in SAPUI5, allowing you to define an annotation-based object status.

This building block also enables you to add a custom press event handler.

> ### Sample Code:  
> `Status` Building Block
> 
> ```
> <macros:Status
>     metaPath="@com.sap.vocabularies.UI.v1.FieldGroup#ApprovalData/Data/0"
>     id="myStatus"
>     largeDesign="true"
>     press=".onStatusPressed"
> />
> 
> ```

For more information and live examples, see the SAP Fiori development portal at [Building Blocks - Status - Overview](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/buildingBlocks/features/statusDefault).



<a name="loio8d8d810c649941358471aafa43d25828__section_ht5_nls_j5b"/>

## API

For information about the `Status` API, see the [API Reference](https://ui5.sap.com/#/api/sap.fe.macros.Status).

