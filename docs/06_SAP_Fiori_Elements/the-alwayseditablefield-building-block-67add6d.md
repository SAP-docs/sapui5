<!-- loio67add6da9b3e476cba94ec6dcfb69f98 -->

# The `AlwaysEditableField` Building Block

You can use the `AlwaysEditableField` building block to define a field that is always displayed in edit mode, regardless of OData metadata and field controls, in SAP Fiori elements for OData V4.

> ### Sample Code:  
> The `AlwaysEditableField Building Block`
> 
> ```
> <macros:AlwaysEditableField
>     id="dialogPrice"
>     metaPath="Currency"
>     value="{dialogModel>/newPrice}"
>     description="{dialogModel>/currencyDescription}" />
> ```

Using the `value` property to bind a field to a JSON model isn't supported for the following fields:

-   Rating indicator fields
-   `dateTime` fields
-   Measure fields with an associated currency or unit-of-measure field

For more information and live examples, see the SAP Fiori development portal at [Building Blocks - Field - Always Editable Field](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/buildingBlocks/field/alwaysEditableField).



## API

For information about the `AlwaysEditableField` API, see the [API Reference](https://ui5.sap.com/#/api/sap.fe.macros.AlwaysEditableField).

