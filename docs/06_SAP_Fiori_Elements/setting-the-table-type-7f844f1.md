<!-- loio7f844f1021cd4791b8f7408eac7c1cec -->

# Setting the Table Type

Table type configuration allows you to specify which table rendering type \(responsive table, grid table, analytical table, or tree table\) is used on list report pages and object pages in SAP Fiori elements for OData V4.

If the default table type doesn't suit your app's needs, you can define a different table type in the `manifest.json` file. The following `type` properties are available within `tableSettings`:

-   `ResponsiveTable`

-   `GridTable`

-   `AnalyticalTable`

-   `TreeTable`


For information about the table types, their features and restrictions, see [Table Types](table-types-c0f6592.md).

> ### Note:  
> -   To use an analytical table, you need an analytical service. For more information, see [Annotating a Service as an Analytical Service](annotating-a-service-as-an-analytical-service-b51afc2.md).
> 
>     If the table type is specified in the `manifest.json` file and set to `AnalyticalTable`, but the `entitySet` doesn't have analytical capabilities, an empty table is displayed.
> 
> -   To use a tree table, set the `hierarchyQualifier`. You must use the qualifier for the `Hierarchy.RecursiveHierarchy` annotation for the page entity set.
> 
>     > ### Sample Code:  
>     > `manifest.json`
>     > 
>     > ```json
>     > "tableSettings": {
>     >      "type": "TreeTable",
>     >      "hierarchyQualifier": "NodesHierarchy",
>     >    ...
>     > }
>     > ```
> 
>     If the table type is specified in the `manifest.json` file and set to `TreeTable`, but the `hierarchyQualifier` isn't set, an empty table is displayed.

Set the `type` property within `tableSettings` to the required values in *sap.ui5:* \> *routing:* \> *targets* of the `manifest.json` file.

> ### Sample Code:  
> `manifest.json` Example for the List Report Page
> 
> ```json
> "targets": {
>     "SalesOrderManageList": {
>         "type": "Component",
>         "id": "SalesOrderManageList",
>         "name": "sap.fe.templates.ListReport",
>         "options": {
>             "settings": {
>                 "controlConfiguration": {
>                     "@com.sap.vocabularies.UI.v1.LineItem": {
>                         "tableSettings": {
>                             "type": "ResponsiveTable"
>                         }
>                     }
>                 }
>                 ...
>             }
>         }
>     }
> }
> 
> ```

> ### Sample Code:  
> `manifest.json` Example for the Object Page
> 
> ```json
> "targets": {
>     "SalesOrderManageObjectPage": {
>         "type": "Component",
>         "id": "SalesOrderManageObjectPage",
>         "name": "sap.fe.templates.ObjectPage",
>         "options": {
>             "settings": {
>                 "controlConfiguration": {
>                     "_Item/@com.sap.vocabularies.UI.v1.LineItem": {
>                         "tableSettings": {
>                             "type": "GridTable"
>                         }
>                     }
>                 }
>             }
>         }
>     }
> }
> 
> ```



> ### Note:  
> For information about SAP Fiori elements for OData V2, see [Setting the Table Type](setting-the-table-type-5d27054.md).



<a name="loio7f844f1021cd4791b8f7408eac7c1cec__section_ipf_sff_dmb"/>

## More Information

-   For information about the available table types, see [Table Types](table-types-c0f6592.md).

-   For information about the default table types, see [Determining the Default Table Type](determining-the-default-table-type-3fd4c37.md).

-   For information about table groupings, see [Table Groupings](table-groupings-d344c5a.md).


