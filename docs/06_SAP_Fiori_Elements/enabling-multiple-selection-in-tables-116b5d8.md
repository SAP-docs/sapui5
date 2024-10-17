<!-- loio116b5d82e8c545e2a56e1b51b8b0a9bd -->

# Enabling Multiple Selection in Tables

This feature enables you to configure whether end users can select a single row or multiple rows in a table, while triggering table toolbar actions that require context.



<a name="loio116b5d82e8c545e2a56e1b51b8b0a9bd__section_ntz_dy1_jmb"/>

## Additional Features in SAP Fiori Elements for OData V2

Single selection in tables is enabled by default. You can enable multiple selection in tables, if necessary.



### List Report Settings

When `multiSelect` is set to `true` in the `manifest.json` file of a list report table, the table switches from single selection to multiple selection.

> ### Sample Code:  
> ```
> 
> "sap.ui.generic.app": {
>   "_version": "1.3.0",
>   "pages": {
>   "ListReport|STTA_C_MP_Product": {
>     "entitySet": "STTA_C_MP_Product",
>     "component": {
>     "name": "sap.suite.ui.generic.template.ListReport",
>     "list": true,
>     "settings" : { 
>       "tableSettings": {
>         "multiSelect": true
>       }
>     }
> 
> ```



### Object Page Settings

You've two options:

-   You can enable multiple selection at the object page level for all tables on the object page. To do so, set `multiSelect` to `true` in the `manifest.json` file of your object page.

    > ### Sample Code:  
    > ```
    > 
    > "pages": {
    >   "ObjectPage|STTA_C_MP_Product": {
    >   "entitySet": "STTA_C_MP_Product",
    >   "name": "sap.suite.ui.generic.template.ObjectPage",
    >     "settings": {
    >       "showRelatedApps": true,
    >       "editableHeaderContent": true,
    >       "tableSettings": {
    >         "multiSelect": true
    >       },
    >       "sections": {
    >         "to_ProductText::com.sap.vocabularies.UI.v1.LineItem": {
    >           "navigationProperty": "to_ProductText",
    >           "entitySet": "STTA_C_MP_ProductText",
    >           "createMode": "inline"
    >         }
    > 
    > 
    > ```

-   You can enable multiple selection at the table level, that is, individually for each table. To do so, set `multiSelect` to `true` for a specific table in the `manifest.json` file of your object page.

    > ### Sample Code:  
    > ```
    > "pages": {
    >   "ObjectPage|STTA_C_MP_Product": {
    >   "entitySet": "STTA_C_MP_Product",
    >   "name": "sap.suite.ui.generic.template.ObjectPage",
    >     "settings": {
    >       "showRelatedApps": true,
    >       "editableHeaderContent": true,
    >       "sections": {
    >         "to_ProductText::com.sap.vocabularies.UI.v1.LineItem": {
    >           "navigationProperty": "to_ProductText",
    >           "entitySet": "STTA_C_MP_ProductText",
    >           "createMode": "inline”,
    >           "tableSettings": {
    >             "multiSelect": true
    >           }
    >         }
    > 
    > ```




### *Select All* and *Clear All* Options in the Table

In the list report and object page, if `multiSelect` is enabled for responsive tables, the *Select All* checkbox is displayed by default in the column header. To enable the *Clear All* button by default, you must set `selectAll` to `false` in the table configuration.

For grid tables, analytical tables, and tree tables, the *Clear All* button is visible by default if `multiSelect` is enabled in both list reports and object pages. If `multiSelect:true` and `selectAll:false`, the following applies:

-   You can still select a range. If new data is loaded from the back-end system, the number of lines to be loaded is restricted to the specified limit. The default value for this limit is 200. If `selectAll:true`, the selection limit isn't evaluated.

-   The *Clear All* button is still displayed instead of the *Select All* button. You can choose this button to reset all selections.


You can change the *Select All*/*Clear All* option in both the list report and object page by setting `selectAll` to `true/false` in the table configuration.

> ### Sample Code:  
> ```
>      "tableSettings": {
>            "multiSelect": true,
>            "selectAll": true/false,
>            "selectionLimit": 150  //Applicable only for Grid/Analytical/Tree table types
>      }
> 
> ```

> ### Note:  
> For grid tables, analytical tables, and tree tables, if you choose *Select All*, the system loads all data from the back-end system in multiple sequential requests. For performance reasons, set `selectAll:true` only if the expected amount of data isn't too high.
> 
> In responsive tables, if you choose *Select All*, only the loaded data is selected. A message toast showing the number of selected records is displayed.



<a name="loio116b5d82e8c545e2a56e1b51b8b0a9bd__section_cch_3z1_jmb"/>

## Additional Features in SAP Fiori Elements for OData V4

You can make the table rows selectable or non-selectable based on settings. You can also allow single selection or multiple selection of rows in a table. To do so, specify appropriate values for the `selectionMode` property. The following values are possible:

-   `Auto`: This setting has been deprecated.

-   `Multi`: This is the default value. Here, the application first checks for a custom action or `UI.DataFieldForIntentBasedNavigation` in the table toolbar that requires a context. In display mode, multiple selection of table rows is allowed, if such actions are found. If not, then multiple selection of table rows isn't allowed. In edit mode, when there are no actions that require context, multiple selection of table rows in allowed if a *Delete* button is available in the table toolbar.

-   `Single`: Here, the application first checks for a custom action or `UI.DataFieldForIntentBasedNavigation` in the table toolbar that requires a context. In display mode, single selection of table rows is allowed if such actions are found. If not, single selection of table row isn't allowed. In edit mode, when there are no actions that require context, single selection of table row is allowed, if a *Delete* button is available in the table toolbar.

-   `None`: Restricts end users from selecting any table entries in display mode. However, in edit mode, on the object page and in the list report, selection \(including multiple selection\) is still possible when a *Delete* button is available in the table toolbar.




### List Report Settings

When `selectionMode` is set to `Multi` in the `manifest.json` file of a list report table, the table switches from single selection to multiple selection.

> ### Sample Code:  
> ```
> "SalesOrderManageList":{
>          "type":"Component",
>          "id":"SalesOrderManageList",
>          "name":"sap.fe.templates.ListReport",
>          "options":{
>             "settings":{
>                "contextPath":"/SalesOrderManage",
>                "controlConfiguration":{
>                   "@com.sap.vocabularies.UI.v1.LineItem":{
>                      "tableSettings":{
>                         "type":"ResponsiveTable",
>                         "selectionMode":"Multi"
>                      }
>                   }
>                }
>             }
>          }
>       }
> 
> ```



### Object Page Settings

When you set `selectionMode` to `Multi` in the `manifest.json` of an object page, you enable multiple selection at the table level, that is, individually for each table, as shown in the following sample code:

> ### Sample Code:  
> ```
> "SalesOrderManageObjectPage":{
>       "type":"Component",
>       "id":"SalesOrderManageObjectPage",
>       "name":"sap.fe.templates.ObjectPage",
>       "options":{
>          "settings":{
>             "contextPath":"/SalesOrderManage",
>             "sectionLayout":"Tabs",
>             "controlConfiguration":{
>                "_Item/@com.sap.vocabularies.UI.v1.LineItem":{
>                   "tableSettings":{
>                      "type":"GridTable",
>                      "selectionMode":"Multi"
>                   }
>                }
>             }
>          }
>       }
>    }
> 
> ```



### *Select All* and *Clear All* Options in the Table

In the list report, if multiple selection is enabled, then the following applies:

-   In a responsive table, the *Select All* checkbox is visible by default in the column header,

-   In a non-responsive table, the *Clear All* checkbox is visible by default in the column header.


On the object page, the *Select All* checkbox is enabled based on the page layout:

-   Tab bar mode

    The tables displayed in a separate tab can contain a significant number of items. Therefore, the *Select All* feature is disabled by default and the *Clear All* checkbox is displayed.

-   Anchor bar mode

    The tables displayed in the page layout are intended to contain a small amount of data. Therefore, the *Select All* feature is enabled by default.


You can change the default *Select All* feature in both layouts by setting `selectAll` to `true` in the table configuration, as shown in the following code sample:

> ### Sample Code:  
> ```
> "controlConfiguration":{
> 	"_Item/@com.sap.vocabularies.UI.v1.LineItem":{
> 		"tableSettings":{
>             "type":"GridTable",
>             "selectionMode":"Multi",
>             "selectAll": true
>         }
>     }
> }
> ```

> ### Note:  
> For grid tables, analytical tables, and tree tables, if you choose the *Select All* checkbox, the system loads all data from the back-end system in multiple sequential requests. For performance reasons, set `selectAll` to `true`only if the expected amount of data isn't too high.
> 
> In responsive tables, if you choose the *Select All*, checkbox, only the loaded data is selected. A message toast showing the number of selected records is displayed.



### Limiting the Number of Selected Rows in a Table

You can configure the `selectionLimit` setting in the `manifest.json` file to limit the number of rows selected at once in the table.

If `selectionLimit` isn't configured, then the default value is set as 200.

This option is applicable only to grid tables, tree tables, and analytical tables.

> ### Sample Code:  
> manifest.json
> 
> ```
> "SalesOrderManageObjectPage":{
>       "type":"Component",
>       "id":"SalesOrderManageObjectPage",
>       "name":"sap.fe.templates.ObjectPage",
>       "options":{
>          "settings":{
>             "contextPath":"/SalesOrderManage",
>             "sectionLayout":"Tabs",
>             "controlConfiguration":{
>                "_Item/@com.sap.vocabularies.UI.v1.LineItem":{
>                   "tableSettings":{
>                      "type":"GridTable",
>                      "selectionMode":"Multi",
>                      "selectionLimit": "50"
>                   }
>                }
>             }
>          }
>       }
>    }
> ```

