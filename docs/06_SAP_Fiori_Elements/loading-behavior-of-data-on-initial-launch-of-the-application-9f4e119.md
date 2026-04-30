<!-- loio9f4e1192f1384b85bc160288e17f69c4 -->

# Loading Behavior of Data on Initial Launch of the Application

You can configure the loading behavior of SAP Fiori apps.

Some of the factors are initial configuration of the variant, initial loading configuration for the *Standard* variant as specified in the manifest by the application developers, or initial launch of the application with a navigation context.

-   Data is loaded on the initial launch of the application if a navigation context is present. This behavior also applies in cases where a context is passed because the context is added to the target URL property of the SAP Fiori launchpad target mapping configuration.

-   When navigating from a tile that has no navigation context, or from a tile that has only default values from the user-specific settings of SAP Fiori launchpad, the loading behavior of data depends on the following:

    -   If the default variant is configured, then this variant is launched. The initial data load depends on the configuration of the *Apply Automatically* checkbox for this variant by the users.

    -   If no default variant is configured, then the *Standard* variant is launched along with the default values in the user-specific settings of SAP Fiori launchpad. The initial data load depends on the manifest configuration done by the application developers.



> ### Note:  
> We recommend providing default values for filter fields to avoid loading empty charts and tables when you launch the application.

You can set `initialLoad` to `Auto` \(default\), `Disabled` , or `Enabled`.

> ### Sample Code:  
> ```
> "SalesOrderManageList": {
>      "type": "Component",
>      "id": "SalesOrderManageList",
>      "name": "sap.fe.templates.AnalyticalListPage",
>      "options": {
>           "settings": {
>                "contextPath": "/SalesOrderManage",
>                "initialLoad": "Enabled"
>           }
>      }
> }
> ```

These settings are only relevant for applications that are initially launched with the *Standard* variant. They work for both single-view and multi-view applications.

The loading behavior of data based on these settings is as follows:

-   `Auto`: An initial load of data only occurs if some default filter values have been set in the filter bar. The *Apply Automatically* checkbox in the *Manage Views* dialog has the following text: *If predefined filter values are available, the content loads automatically.* This is the default setting. Users can override this by deselecting the *Apply Automatically* checkbox in the *Manage Views* dialog.

-   `Disabled`: An initial load of data does not occur for the standard variant and the user has to actively click the *Go* button. They can override this by selecting the *Apply Automatically* checkbox in the *Manage Views* dialog.

-   `Enabled`: An initial load of data occurs for the standard variant. Users can override this by deselecting the *Apply Automatically* checkbox in the *Manage Views* dialog.




> ### Note:  
> For information about SAP Fiori elements for OData V2, see [Loading Behavior of Data on Initial Launch of the Application](loading-behavior-of-data-on-initial-launch-of-the-application-b736ab6.md).

**Related Information**  


[The VariantManagement Building Block](the-variantmanagement-building-block-33640ff.md "You can use the VariantManagement building block to enable variant management for any flex-enabled control.")

