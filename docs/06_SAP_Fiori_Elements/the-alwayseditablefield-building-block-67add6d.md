<!-- loio67add6da9b3e476cba94ec6dcfb69f98 -->

# The `AlwaysEditableField` Building Block

You can use the `AlwaysEditableField` building block to define a field that is always displayed in edit mode, regardless of OData metadata and field controls.

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

Using the `value` property to bind to a JSON model is not supported for the following fields:

-   Rating indicator fields
-   `dateTime` fields
-   Amount fields with an associated currency or unit of measure
-   Quantity fields with an associated currency or unit of measure



## API

For information about the `AlwaysEditableField` API, see the [API Reference](https://ui5.sap.com/#/api/sap.fe.macros.AlwaysEditableField).

