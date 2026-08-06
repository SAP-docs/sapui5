<!-- loio40713d5d5df84fde96be1a23ed075e7e -->

# Removing the Thousands Separator from Fields

You can remove the thousands separator from integer fields in SAP Fiori elements for OData V4.

By default, integer fields are displayed with thousands separators. You can set `disableIntegerGrouping` to `true` to remove the thousands separator from integer fields in filter bars, forms, and table columns in the `manifest.json` file or in building blocks.

**Integer Field Value Formatting**


<table>
<tr>
<th valign="top">

With Thousands Separator

</th>
<th valign="top">

Without Thousands Separator

</th>
</tr>
<tr>
<td valign="top">

1,000,000

</td>
<td valign="top">

1000000

</td>
</tr>
</table>

Removing the thousands separator doesn't affect the text alignment.



## Removing the Thousands Separator Using the `manifest.json` File

The following sample codes show how to use `disableIntegerGrouping` to remove the thousands separators from integer fields in filter bars, forms, and table columns:

> ### Sample Code:  
> `manifest.json`: Filter Bar
> 
> ```
> 
> "controlConfiguration": {
>     "@com.sap.vocabularies.UI.v1.SelectionFields": {
>         "filterFields": {
>             "OrderYear": {
>                 "settings": {
>                     "disableIntegerGrouping": true
>                 }
>             }
>         }
>     }
> }
> ```

> ### Sample Code:  
> `manifest.json`: Form
> 
> ```
> 
> "controlConfiguration": {
>     "@com.sap.vocabularies.UI.v1.FieldGroup#GeneralInformation": {
>         "fields": {
>             "DataField::OrderYear": {
>                 "formatOptions": {
>                     "disableIntegerGrouping": true
>                 }
>             }
>         }
>     }
> }
> ```

> ### Sample Code:  
> `manifest.json`: Table Column
> 
> ```
> 
> "controlConfiguration": {
>     "@com.sap.vocabularies.UI.v1.LineItem": {
>         "columns": {
>             "DataField::OrderYear": {
>                 "formatOptions": {
>                     "disableIntegerGrouping": true
>                 }
>             }
>         }
>     }
> }
> ```



## Removing the Thousands Separator in Building Blocks

The following sample codes show how to use `disableIntegerGrouping` to remove the thousands separator in the `Field` and `Table` building blocks:

> ### Sample Code:  
> The `Field` Building Block
> 
> ```
> 
> <macro:Field
>     idPrefix="fe::EditableHeaderForm::OrderYear"
>     contextPath="..."
>     >
>     <formatOptions disableIntegerGrouping="true"/>
> </macro:Field>
> ```

> ### Sample Code:  
> The `Table` Building Block
> 
> ```
> 
> <core:FragmentDefinition xmlns:core="sap.ui.core" xmlns="sap.m" xmlns:macros="sap.fe.macros" xmlns:macrosTable="sap.fe.macros.table" xmlns:field="sap.fe.macros.field">
>        <macros:Table metaPath="/Travel/@com.sap.vocabularies.UI.v1.LineItem">
>           <macros:columns>
>                 <macrosTable:ColumnOverride key="DataField::TravelID">
>                        <macrosTable:formatOptions>
>                                 <field:FieldFormatOptions disableIntegerGrouping="true" />
>                          </macrosTable:formatOptions>
>                 </macrosTable:ColumnOverride>
>           </macros:columns>
>        </macros:Table>
> </core:FragmentDefinition>
> ```

For more information about the `Field` building block, see [The Field Building Block](the-field-building-block-5260b9c.md).

For more information about the `Table` building block, see [The Table Building Block](the-table-building-block-3801656.md).

