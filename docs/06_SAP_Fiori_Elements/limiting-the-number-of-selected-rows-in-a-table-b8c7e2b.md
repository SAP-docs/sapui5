<!-- loiob8c7e2b707c245c592c616c7855c60cc -->

# Limiting the Number of Selected Rows in a Table

Selection limit configuration that restricts the maximum number of rows users can select simultaneously in grid tables, tree tables, and analytical tables in SAP Fiori elements for OData V4. Use this setting to optimize performance and prevent system overload during bulk operations.

You can configure the `selectionLimit` setting in the `manifest.json` file to limit the number of rows selected at once in the table. If `selectionLimit` isn't configured, then the default value is set to 200.

This option is applicable only to grid tables, tree tables, and analytical tables.

> ### Sample Code:  
> `manifest.json`
> 
> ```json
> "SalesOrderManageObjectPage": {
>     "type": "Component",
>     "id": "SalesOrderManageObjectPage",
>     "name": "sap.fe.templates.ObjectPage",
>     "options": {
>         "settings": {
>             "contextPath": "/SalesOrderManage",
>             "sectionLayout": "Tabs",
>             "controlConfiguration": {
>                 "_Item/@com.sap.vocabularies.UI.v1.LineItem": {
>                     "tableSettings": {
>                         "type": "GridTable",
>                         "selectionMode": "Multi",
>                         "selectionLimit": "50"
>                     }
>                 }
>             }
>         }
>     }
> }
> ```

