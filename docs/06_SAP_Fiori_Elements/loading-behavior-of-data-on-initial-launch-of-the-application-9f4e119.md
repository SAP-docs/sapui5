<!-- loio9f4e1192f1384b85bc160288e17f69c4 -->

# Loading Behavior of Data on Initial Launch of the Application

Several factors affect the loading behavior of data on initial launch of the application.

Some of the factors are initial configuration of the variant, initial loading configuration for the *Standard* variant as specified in the manifest by the application developers, or initial launch of the application with a navigation context.

-   Data is loaded on the initial launch of the application if a navigation context is present. This behavior also applies in cases where a context is passed because the context is added to the target URL property of the SAP Fiori launchpad target mapping configuration.

-   When navigating from a tile that has no navigation context, or from a tile that has only default values from the user-specific settings of SAP Fiori launchpad, the loading behavior of data depends on the following:

    -   If the default variant is configured, then this variant is launched. The initial data load depends on the configuration of the *Apply Automatically* checkbox for this variant by the end users.

    -   If no default variant is configured, then the *Standard* variant is launched along with the default values in the user-specific settings of SAP Fiori launchpad. The initial data load depends on the manifest configuration done by the application developers. For more information, see the specific information in the V2 or V4 sections.



> ### Note:  
> We recommend providing default values for filter fields to avoid loading empty charts and tables when you launch the application.



<a name="loio9f4e1192f1384b85bc160288e17f69c4__section_f4m_b41_ybc"/>

## Additional Features in SAP Fiori Elements for OData V2

You can change the default loading behavior of data by configuring the `"loadDataOnAppLaunch"` property in the `manifest.json` file as shown in the following sample code:

> ### Sample Code:  
> ```
> "pages": {
>                    "ListReport | < EntitySet > ": {
>                                       "entitySet": < EntitySet > ,
>                                        "component": {
>                                                             "name": "sap.suite.ui.generic.template.ListReport",
>                                                             "list": true,
>                                                              "settings": {
>                                                                               "dataLoadSettings": {
>                                                                             "loadDataOnAppLaunch": "always" / "never"/ "ifAnyFilterExist"
>                                                          }
>                                       }
>                    }
> }
> 
> ```

The loading behavior of data based on this setting is as follows:

-   `always`: Data for the standard variant is always loaded. End users can override this by deselecting the *Apply Automatically* checkbox in the *Manage Views* dialog.

-   `never`: Data for the standard variant is not loaded automatically, and the end user has to actively click the *Go* button. They can override this by selecting the *Apply Automatically* checkbox in the *Manage Views* dialog.

-   Undefined or set to `ifAnyFilterExist`: Data for the standard variant is loaded only if the default filter values have been defined \(by an administrator or a user, or passed from another app\). This is the default behavior for any newly generated apps. The *Apply Automatically* checkbox is selected but end users can override this by deselecting it in the *Manage Views* dialog.

    If there is a mandatory filter field missing, the data load is not triggered irrespective of other non-mandatory filter fields. In this case, the *Apply Automatically* checkbox is deselected.


These settings work for both single-view and multi-view applications.

For multi-view scenarios, you can also change the `enableAutobinding` manifest setting to `true` or `false` under `quickVariantSelectionX` instead of using the `loadDataOnAppLaunch` setting. However, SAP Fiori elements recommends that you use the `loadDataOnAppLaunch` manifest setting for the multi-view scenario.

> ### Sample Code:  
> ```
> "pages": {
>           "ListReport|<EntitySet> ": {
>                   "entitySet": <EntitySet>,
>                   "component": {
>                   "name": "sap.suite.ui.generic.template.ListReport",
>                   "settings": {
>                               "quickVariantSelectionX": {
>                                       "enableAutoBinding":  false
>                                }
>                    }
>              }
>           }
> 
> ```



<a name="loio9f4e1192f1384b85bc160288e17f69c4__section_hhx_b41_ybc"/>

## Additional Features in SAP Fiori Elements for OData V4

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

-   `Auto`: An initial load of data only occurs if some default filter values have been set in the filter bar. The *Apply Automatically* checkbox in the *Manage Views* dialog has the following text: *If predefined filter values are available, the content loads automatically.* This is the default setting. End users can override this by deselecting the *Apply Automatically* checkbox in the *Manage Views* dialog.

-   `Disabled`: An initial load of data does not occur for the standard variant and the end user has to actively click the *Go* button. They can override this by selecting the *Apply Automatically* checkbox in the *Manage Views* dialog.

-   `Enabled`: An initial load of data occurs for the standard variant. End users can override this by deselecting the *Apply Automatically* checkbox in the *Manage Views* dialog.


