<!-- loio116b5d82e8c545e2a56e1b51b8b0a9bd -->

# Configuring the Selection Mode for Tables

You can configure single or multiple selection in tables while triggering table toolbar actions that require context.

You can make the table rows selectable or non-selectable based on specific settings. You can also allow single selection or multiple selection of rows in a table by setting appropriate values for the `selectionMode` property. The following values are possible:

-   `Auto`: This setting has been deprecated.

-   `Multi`: This is the default value. Here, the application first checks for a custom action or `UI.DataFieldForIntentBasedNavigation` in the table toolbar that requires a context. In display mode, multiple selection of table rows is allowed, if such actions are found. If not, then multiple selection of table rows isn't allowed. In edit mode, when there are no actions that require context, multiple selection of table rows is allowed if a *Delete* button is available in the table toolbar.

-   `Single`: Here, the application first checks for a custom action or `UI.DataFieldForIntentBasedNavigation` in the table toolbar that requires a context. In display mode, single selection of table rows is allowed if such actions are found. If not, single selection of table row isn't allowed. In edit mode, when there are no actions that require context, single selection of table row is allowed if a *Delete* button is available in the table toolbar.

-   `None`: Restricts users from selecting any table entries in display mode. However, in edit mode, on the object page and in the list report, selection \(including multiple selection\) is still possible when a *Delete* button is available in the table toolbar.


> ### Note:  
> When bound actions aren't enabled for the user, we evaluate the selection mode to `None` even if the `selectionMode` is set to `Multi` or `Single` in the `manifest.json` file. The selection can still be forced by using `ForceMulti` or `ForceSingle` in the `manifest.json` file.



<a name="loio116b5d82e8c545e2a56e1b51b8b0a9bd__section_cch_3z1_jmb"/>

## Settings for the List Report Page

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



## Settings for the Object Page

When you set `selectionMode` to `Multi` in the `manifest.json` file of an object page, you enable multiple selection at the table level, that is, individually for each table, as shown in the following sample code:

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



## *Select All* and *Clear All* Options in the Table

On the list report page, if multiple selection is enabled, the following applies:

-   In a responsive table, the *Select All* checkbox is visible by default in the column header.

-   In a non-responsive table, the *Clear All* checkbox is visible by default in the column header.


On the object page, the *Select All* checkbox is enabled based on the page layout:

-   Tab bar mode

    The tables displayed in a separate tab can contain a significant number of items. Therefore, the *Select All* checkbox is disabled by default and the *Clear All* checkbox is displayed.

-   Anchor bar mode

    The tables displayed in the page layout are intended to contain a small amount of data. Therefore, the *Select All* checkbox is enabled by default.


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
> For grid tables, analytical tables, and tree tables, if you choose the *Select All* checkbox, the system loads all data from the back-end system in multiple sequential requests. For performance reasons, set `selectAll` to `true` only if the expected amount of data isn't too high.
> 
> In responsive tables, if you choose the *Select All* checkbox, only the loaded data is selected. A message toast showing the number of selected records is displayed.



## Limiting the Number of Selected Rows in a Table

You can configure the `selectionLimit` setting in the `manifest.json` file to limit the number of rows selected at once in the table. If `selectionLimit` isn't configured, then the default value is set to 200.

This option is applicable only to grid tables, tree tables, and analytical tables.

> ### Sample Code:  
> `manifest.json`
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



> ### Note:  
> For information about SAP Fiori elements for OData V2, see [Configuring the Selection Mode for Tables](configuring-the-selection-mode-for-tables-402fac7.md).

