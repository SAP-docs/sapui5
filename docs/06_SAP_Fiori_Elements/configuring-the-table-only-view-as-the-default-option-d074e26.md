<!-- loiod074e26b013647c7a93b8a9db9b51d2d -->

# Configuring the Table-Only View as the Default Option

You can display data on the analytical list page in a table format.



For more information about configuring tables, see [Configuring Tables](configuring-tables-3695931.md).

You can adjust the width of columns by modifying the `MaxLength` metadata for texts strings and `Precision` metadata for decimals.

> ### Note:  
> By default, ALP displays tables in condensed mode. You can modify the manifest setting to use compact mode.

> ### Sample Code:  
> Manifest Settings: Table-only view
> 
> ```
> "sap.ui.generic.app": {
>     "pages": [
>         {
>             "entitySet": "SEPMRA_C_ALP_SlsOrdItemCube",
>             "component": {
>                 "name": "sap.suite.ui.generic.template.AnalyticalListPage",
>                 "list": true,
>                 "settings": {
>                     "tableSettings": {
>                         "type": "GridTable or AnalyticalTable or ResponsiveTable"
>                     }
>                 }
>             }
>         }
>     ]
> }
> ```



<a name="loiod074e26b013647c7a93b8a9db9b51d2d__section_hyv_2r2_kqb"/>

## Defining Determining Actions

For more information, see [Defining Determining Actions on the List Report Page](defining-determining-actions-on-the-list-report-page-d719982.md).

> ### Recommendation:  
> Please note that this feature is deprecated. SAP Fiori elements supports this feature only for compatibility reasons. We recommend that you avoid using determining buttons.

**Related Information**  


[Configuring the Content Area](configuring-the-content-area-fc7d73c.md "You can visualize data from the main entity set and seamlessly navigate to an application.")

[Setting the Table Type](setting-the-table-type-5d27054.md "You can control which table type is rendered on the list report page and on the object page by configuring the manifest.json file and by using annotations.")

