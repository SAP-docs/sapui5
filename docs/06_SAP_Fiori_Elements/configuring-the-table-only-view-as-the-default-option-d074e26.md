<!-- loiod074e26b013647c7a93b8a9db9b51d2d -->

# Configuring the Table-Only View as the Default Option

In this mode, the data is displayed in the table format.



Please see the sections *Additional Features in SAP Fiori Elements for OData V2* and *Additional Features in SAP Fiori Elements for OData V4* in this topic for the manifest configurations required to load the table-only view by default. For more information about configuring tables, see [Configuring Tables](configuring-tables-f4eb70f.md).



<a name="loiod074e26b013647c7a93b8a9db9b51d2d__section_hyv_2r2_kqb"/>

## Additional Features in SAP Fiori Elements for OData V2

You can adjust the width of columns by modifying the `MaxLength` metadata for texts strings and `Precision` metadata for decimals.

> ### Note:  
> By default, ALP displays tables in condensed mode. You can modify the descriptor setting to use compact mode.

> ### Sample Code:  
> Descriptor Settings: Table-only view
> 
> ```
> "sap.ui.generic.app":{  
>    "pages":[  
>       {  
>          "entitySet":"SEPMRA_C_ALP_SlsOrdItemCube",
>          "component":{  
>             "name":"sap.suite.ui.generic.template.AnalyticalListPage",
>             "list":true,
>             "settings":{  
>             "tableSettings":{  
>             "type": "GridTable or AnalyticalTable or ResponsiveTable",
>                             }
>                        }
>                    }
>             }
>      },
> ```



### Defining Determining Actions

For more information, see [Defining Determining Actions in List Reports](defining-determining-actions-in-list-reports-d719982.md).

> ### Recommendation:  
> Please note that this feature is deprecated. SAP Fiori elements supports this feature only for compatibility reasons. We recommend that you avoid using determining buttons.



<a name="loiod074e26b013647c7a93b8a9db9b51d2d__section_hjk_k2x_gqb"/>

## Additional Features in SAP Fiori Elements for OData V4



### ALP Configuration

Make the following entries in the manifest:

> ### Sample Code:  
> Manifest entry for ALP configuration
> 
> ```
> "views": {
>     "paths": [{
> 
> ...
>         "defaultPath": "secondary"
>     }]
> },
> ```

Setting the `"defaultPath"` to `"secondary"` ensures that the default view that is loaded is the table-only view.

For more information about options that can be provided for the annotation path, see [Descriptor Configuration for the Analytical List Page](descriptor-configuration-for-the-analytical-list-page-2a9df06.md).

**Related Information**  


[Configuring the Content Area](configuring-the-content-area-fc7d73c.md "Visualize data from the main entity set and seamlessly navigate to an application. Define a valid chart or LineItem annotation to render content for the chart area and table area.")

[Setting the Table Type](setting-the-table-type-7f844f1.md "In the manifest.json file, and through annotations, you can control which table type is rendered in the list report and on the object page.")

