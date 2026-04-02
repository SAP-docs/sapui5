<!-- loio432a2d21151641b2aeb93db719bd4423 -->

# Using the Condensed Table Layout

You can set the content density to `condensed` for `ui.table` in list report page and object page applications.

> ### Note:  
> For information about SAP Fiori elements for OData V4, see [Using the Condensed Table Layout](using-the-condensed-table-layout-f3cc057.md).

To apply the condensed style to a table in a specific section, in the `manifest.json` file within the relevant section, set `"condensedTableLayout"` to `true` in the `manifest.json`. This setting ensures that the table in the specified section adapts to the condensed layout.

> ### Note:  
> -   Condensed mode is applicable only to grid tables `(sap.ui.table)` and not to responsive tables `(sap.m.table)`.
> 
> -   The application must run in compact mode. If it runs in cozy mode, the class is not set, even if the manifest key is set to `true`.
> 
> -   On the object page, the `condensedTableLayout` class can be set only if there is just one section that contains a grid table \(`sap.ui.table`\) or if the icon tab bar is used for navigation between sections, and any section has only one table in it. Otherwise, the class is not applied for the grid table \(`sap.ui.table`\), even if the manifest key is set to `true`.

> ### Sample Code:  
> Object Page Table in `manifest.json`
> 
> ```
> 
> "ObjectPage|STTA_C_MP_Product": {
>     "entitySet": "STTA_C_MP_Product",
>     "component": {
>         "name": "sap.suite.ui.generic.template.ObjectPage",
>         "settings": {
>             "sections": {
>                 "to_ProductText::com.sap.vocabularies.UI.v1.LineItem": {
>                     "condensedTableLayout": true
>                 }
>             }
>         }
>     }
> }
> 
> ```

