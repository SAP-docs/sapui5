<!-- loio2e206a06be4146338610cf8148c7c7ee -->

# Defining the Column Width Calculation with the Header

Column width calculation automatically determines default widths based on field metadata and supports optional header inclusion through `widthIncludingColumnHeader` in SAP Fiori elements for OData V4. Use this to optimize table column sizing and improve readability.

SAP Fiori elements for OData V4 automatically calculates the default width of columns containing texts based on the `MaxLength` property of the field defined in the metadata. The lower limit is set to 3 rem and the upper limit is set to 20 rem.

By default, the column width is calculated based on the type of the content. You can include the column header while calculating the column width by configuring the `widthIncludingColumnHeader` setting in the `manifest.json` file. This setting can be defined at the table level or at the column level. The `widthIncludingColumnHeader` setting defined at the column level has a higher priority than the `widthIncludingColumnHeader` setting defined at the table level.

> ### Sample Code:  
> `manifest.json`
> 
> ```json
> "controlConfiguration": {
>     "@com.sap.vocabularies.UI.v1.LineItem": {
>         "tableSettings": {
>             "widthIncludingColumnHeader": true
>         },
>         "columns": {
>             "DataField::commonProperty": {
>                 "widthIncludingColumnHeader": false
>             }
>         }
>     }
> }
> 
> ```

To customize the width of a column defined in a line item, use the UI annotation `com.sap.vocabularies.HTML5.v1.CssDefaults`. For more information, see [Setting the Default Column Width](setting-the-default-column-width-a765253.md).

