<!-- loio9f4e1192f1384b85bc160288e17f69c4 -->

# Loading Behavior Based on the Chosen Variant

Several factors affect the loading behavior of the content area based on the chosen variant.

These factors are also considered in the following use cases:

-   There is no tile context during intial navigation from tiles.

-   There is no tile context, except for values from SAP Fiori launchpad user settings.


> ### Note:  
> The loading behavior of the content is always triggered when the user navigates to the application using the navigation context \(including any context from the tile's target mapping\). The factors described in this topic aren't considered during this scenario.



<a name="loio9f4e1192f1384b85bc160288e17f69c4__section_g4c_tyf_mqb"/>

## *Go* Button Mode

When you launch the application in *Go* button mode using the *Standard* variant, the system loads the data automatically by default if one or more filter fields have some default values. Application developers and end users can change the default behavior.

> ### Note:  
> Provide default values for filter fields to avoid loading of empty charts and tables when you launch the app.



<a name="loio9f4e1192f1384b85bc160288e17f69c4__section_jyq_4cg_mqb"/>

## End Users

End users can disable the automatic loading of data by deselecting the *Apply Automatically* checkbox in the *Manage Views* dialog. To enable the automatic loading of data, end users can select the *Apply Automatically* checkbox in the *Manage Views* dialog.

For the *Standard* variant, the *Apply Automatically* checkbox is selected by default.

-   If the end user deselects the checkbox, the application doesn't load the data automatically, irrespective of any preset filters.

-   If the end user selects the checkbox, the default behavior is applied and the automatic loading of data works only if preset filters have been set.




<a name="loio9f4e1192f1384b85bc160288e17f69c4__section_ldv_qcg_mqb"/>

## Application Developers



### SAP Fiori Elements for OData V2

Application developers can change the default behavior in the manifest setting by using the `"loadDataOnAppLaunch"` property as shown below:

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

This is the loading behavior:

-   `always`: Data for the standard variant is always loaded. End users can override this by deselecting the *Apply Automatically* checkbox in the *Manage Views* dialog.

-    `never`: Data for the standard variant is not loaded automatically, and the user has to actively click the *Go* button. End users can override this by selecting the *Apply Automatically* checkbox in the *Manage Views* dialog.

-   Undefined or set to `ifAnyFilterExist`: Data for the standard variant is loaded only if the default filter values have been defined \(by an administrator or a user, or passed from another app\). This is the default behavior for any newly generated apps. The *Apply Automatically* check box appears checked.

    If there is any missing mandatory filter field, the data load is not triggered irrespective of other non-mandatory filter fields. In this case, the *Apply Automatically* check box appears unchecked.


These settings work for both single and multi-view applications.

For multi-view scenarios, you can also change the manifest setting `enableAutobinding` to `false` under `quickVariantSelectionX` instead of using the `loadDataOnAppLaunch` setting. However, SAP Fiori elements recommends that you use the manifest setting `loadDataOnAppLaunch` for the multi-view scenario as well.

> ### Sample Code:  
> ```
> “pages”: {
>           “ListReport|<EntitySet> “: {
>                   “entitySet”: <EntitySet>,
>                   “component”: {
>                   “name”: “sap.suite.ui.generic.template.ListReport”,
>                   “settings”: {
>                               “quickVariantSelectionX”: {
>                                       “enableAutoBinding”:  false
>                                }
>                    }
>              }
>           }
> 
> ```



### SAP Fiori Elements for OData V4

Application developers can set `initialLoad` to `Auto`\(default\), `Disabled` , and `Enabled`.

> ### Sample Code:  
> ```
> "SalesOrderManageList": {
>      "type": "Component",
>      "id": "SalesOrderManageList",
>      "name": "sap.fe.templates.AnalyticalListPage",
>      "options": {
>           "settings": {
>                "entitySet": "SalesOrderManage",
>                "initialLoad": "Enabled"
>           }
>      }
> }
> ```

These settings work for both single and multi-view applications.

This is the loading behavior:

-   `Auto`: An initial load of data only occurs if some default filter values have been set in the filter bar. The *Apply Automatically* checkbox is provided in the *Manage Views* dialog together with the following text: *If predefined filter values are available, the content loads automatically.*. This is the default setting.

-    `Disabled`: An initial load of data does not occur for the standard variant and the user has to actively click the *Go* button. End users can override this by selecting the *Apply Automatically* checkbox in the *Manage Views* dialog.

-   `Enabled`: An initial load of data occurs for the standard variant. End users can override this by deselecting the *Apply Automatically* checkbox in the *Manage Views* dialog.


