<!-- loio402fac73b4794a31983609ebdde580d2 -->

# Configuring the Selection Mode for Tables

You can configure single or multiple selection in tables while triggering table toolbar actions that require context.

> ### Note:  
> For information about SAP Fiori elements for OData V4, see [Configuring the Selection Mode for Tables](configuring-the-selection-mode-for-tables-116b5d8.md).

Single selection in tables is enabled by default. You can enable multiple selection in tables, if necessary.



<a name="loio402fac73b4794a31983609ebdde580d2__section_ntz_dy1_jmb"/>

## List Report Page Settings

When `multiSelect` is set to `true` in the `manifest.json` file of a list report page table, the table switches from single selection to multiple selection.

> ### Sample Code:  
> `manifest.json`
> 
> ```
> 
> "sap.ui.generic.app": {
>     "pages": {
>         "ListReport|STTA_C_MP_Product": {
>             "entitySet": "STTA_C_MP_Product",
>             "component": {
>                 "name": "sap.suite.ui.generic.template.ListReport",
>                 "list": true,
>                 "settings": {
>                     "tableSettings": {
>                         "multiSelect": true
>                     }
>                 }
>             }
>         }
>     }
> }
> 
> ```



<a name="loio402fac73b4794a31983609ebdde580d2__section_bsq_xwv_tgc"/>

## Object Page Settings

You have two options:

-   You can enable multiple selection at the object page level for all tables. To do so, set `multiSelect:true` in the `manifest.json` file of your object page.

    > ### Sample Code:  
    > `manifest.json`
    > 
    > ```
    > 
    > "pages": {
    >     "ObjectPage|STTA_C_MP_Product": {
    >         "entitySet": "STTA_C_MP_Product",
    >         "name": "sap.suite.ui.generic.template.ObjectPage",
    >         "settings": {
    >             "showRelatedApps": true,
    >             "editableHeaderContent": true,
    >             "tableSettings": {
    >                 "multiSelect": true
    >             },
    >             "sections": {
    >                 "to_ProductText::com.sap.vocabularies.UI.v1.LineItem": {
    >                     "navigationProperty": "to_ProductText",
    >                     "entitySet": "STTA_C_MP_ProductText",
    >                     "createMode": "inline"
    >                 }
    >             }
    >         }
    >     }
    > }
    > 
    > ```

-   You can enable multiple selection at the table level, that is, individually for each table. To do so, set `multiSelect:true` for a specific table in the `manifest.json` file of your object page.

    > ### Sample Code:  
    > `manifest.json`
    > 
    > ```
    > 
    > "pages": {
    >     "ObjectPage|STTA_C_MP_Product": {
    >         "entitySet": "STTA_C_MP_Product",
    >         "name": "sap.suite.ui.generic.template.ObjectPage",
    >         "settings": {
    >             "showRelatedApps": true,
    >             "editableHeaderContent": true,
    >             "sections": {
    >                 "to_ProductText::com.sap.vocabularies.UI.v1.LineItem": {
    >                     "navigationProperty": "to_ProductText",
    >                     "entitySet": "STTA_C_MP_ProductText",
    >                     "createMode": "inline",
    >                     "tableSettings": {
    >                         "multiSelect": true
    >                     }
    >                 }
    >             }
    >         }
    >     }
    > }
    > 
    > ```




<a name="loio402fac73b4794a31983609ebdde580d2__section_uxv_ywv_tgc"/>

## *Select All* and *Clear All* Options in the Table

On the list report page and object page, if `multiSelect` is enabled for responsive tables, the *Select All* checkbox is displayed by default in the column header. To enable the *Clear All* button by default, you must set `selectAll` to `false` in the table settings.

For grid tables, analytical tables, and tree tables, the *Clear All* button is visible by default if `multiSelect` is enabled on both list report pages and object pages. If `multiSelect:true` and `selectAll:false`, the following applies:

-   You can still select a range. If new data is loaded from the back-end system, the number of lines to be loaded is restricted to the specified limit. The default value for this limit is 200. If `selectAll:true`, the selection limit isn't evaluated.

-   The *Clear All* button is still displayed instead of the *Select All* button. You can choose this button to reset all selections.


You can change the *Select All*/*Clear All* option on both the list report page and object page by setting `selectAll` to `true/false` in the table configuration.

> ### Sample Code:  
> ```
> 
> "tableSettings": {
>     "multiSelect": true,
>     "selectAll": true/false,
>     "selectionLimit": 150  //Applicable only for Grid/Analytical/Tree table types
> }
> 
> ```

> ### Note:  
> For grid tables, analytical tables, and tree tables, if you choose *Select All*, the system loads all data from the back-end system in multiple sequential requests. For performance reasons, set `selectAll:true` only if the expected amount of data isn't too high.
> 
> In responsive tables, if you choose *Select All*, only the loaded data is selected. A message toast showing the number of selected records is displayed.

