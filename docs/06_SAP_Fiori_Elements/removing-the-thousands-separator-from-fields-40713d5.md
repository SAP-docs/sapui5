<!-- loio40713d5d5df84fde96be1a23ed075e7e -->

# Removing the Thousands Separator from Fields

Remove the thousands separator from integer fields.

By default, integer fields are displayed with thousands separators. You can set `disableIntegerGrouping` to `true` to remove the thousands separator from integer fields in filter bars, forms, and table columns in `manifest.json` file or in building blocks.

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



## Removing the Thousands Separator Using the `manifest.json` File

The following sample code show how to use `disableIntegerGrouping` to remove the thousands separators from integer fields in filter bars, forms, and table columns:

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

The following sample codes show how to use `disableIntegerGrouping` to remove the thousands separator in `Field` and `Table` building blocks:

> ### Sample Code:  
> `Field` Building Block
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
> `Table` Building Block
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

