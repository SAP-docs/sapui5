<!-- loiobd1536854990449ab77ceaff1580eacf -->

# Defining `formatOptions` at the Column Level

Format options that control display and editing behavior of annotation-based table columns in SAP Fiori elements for OData V4. Use `formatOptions` to configure field appearance.

You can define `formatOptions` for all fields of an annotation-based column using a `ColumnOverride` in the `Table` building block as shown in the following sample code:

> ### Sample Code:  
> The `Table` Building Block
> 
> ```
> <feT:ColumnOverride key="DataField::Description">
>     <feT:formatOptions>
>         <feF:FieldFormatOptions
>             displayMode="Description"
>             textMaxCharactersDisplay="200"
>             fieldEditStyle="RadioButtons" />
>     </feT:formatOptions>
> </feT:ColumnOverride>
> ```

The following `formatOptions` are supported:

-   `textLinesEdit`
-   `textMaxCharactersDisplay`
-   `textExpandBehaviorDisplay`
-   `textMaxLines`
-   `textMaxLength`
-   `imageFitType`
-   `enableEnlargeImage`

For more information about `formatOptions`, see [Using Images and Icons](using-images-and-icons-5760b63.md) and the [Configuring Multi-Line Text Fields](multi-line-text-fields-b502146.md#loiob5021469ca58446ea4e6cf73635dd5d3__configuring-multi-line-text-fields) section in [Multi-Line Text Fields](multi-line-text-fields-b502146.md).

> ### Note:  
> Dynamic bindings aren't supported. Only static values are supported.

