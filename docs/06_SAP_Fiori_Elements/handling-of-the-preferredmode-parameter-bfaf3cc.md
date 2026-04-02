<!-- loiobfaf3ccf3d6d4735990cc793b21f5529 -->

# Handling of the `preferredMode` Parameter

You can use the `preferredMode` parameter to configure the mode in which the object page is initially launched.

The `preferredMode` parameter supports multiple values that allow you to specify the mode in which the object page is launched. For more information, see the separate sections in this topic.

> ### Note:  
> If no object page is defined in the `manifest.json` file of the target app, or if the \(usually internal\) navigation to the object page is overridden by external navigation, the list report page is shown.
> 
> In this case, the information described in this topic does not apply.



<a name="loiobfaf3ccf3d6d4735990cc793b21f5529__section_rr2_sz2_qbc"/>

## Using the `preferredMode=create` Parameter

You can configure the list report page and object page applications in the SAP Fiori launchpad with a start-up parameter `preferredMode=create`. When you launch the application from the tile, the list report page and object page load directly in create mode.

To achieve this behavior during external navigation, you can add `preferredMode=create` to the navigation URL during external navigation.

> ### Example:  
> `...#SalesOrder-manage?preferredMode=create`

You can also append URL parameters after `preferredMode=create` to pass specific values to be used in the creation process.

> ### Example:  
> To set the value 01 for the `DefectCategory` field, enter the URL `…#Defect-displayWorklist?preferredMode=create&DefectCategory=01`.

The `preferredMode` parameter works as follows:

-   Applications can define `createWith:`, followed by the desired action as the `preferredMode` value. In this case, this action is called when the app is opened in create mode.

    If the specified action has parameters, then an action parameter dialog appears after navigation to the target application. If values are already available from the navigation context for some of the fields, these values are taken over into the dialog. This is shown in the following sample code:

    > ### Sample Code:  
    > `manifest.json`
    > 
    > ```
    > 
    > "preferredMode": {
    >     "defaultValue": {
    >         "value": "createWith:com.c_salesordermanage_sd.CreateWithSalesOrderType",
    >         "format": "value"
    >     }
    > },
    > ```

-   Applications can also define `autoCreateWith:`, which works like `createWith:` except for the following behavior:

    -   If values can be determined from the navigation context for all action parameters, the action parameter dialog is skipped after navigation.

    -   If no value can be determined for at least one parameter, the action parameter dialog is still displayed and the provided values are taken over into the dialog fields.


    > ### Sample Code:  
    > `manifest.json`
    > 
    > ```
    > 
    > "preferredMode": {
    >     "defaultValue": {
    >         "value": "autoCreateWith:com.c_salesordermanage_sd.CreateWithSalesOrderType",
    >         "format": "value"
    >     }
    > },
    > ```




<a name="loiobfaf3ccf3d6d4735990cc793b21f5529__section_evr_bcd_hmb"/>

## Passing Parameters when Using `preferredMode=create`

When `preferredMode=create` is used with URL parameter values, there's a difference in the handling of the parameters based on creation mode:

-   If the application has defined a create action \(property `NewAction` of the annotation `StickySupported` or `DraftRoot`\) and if this action is dependent on the mandatory parameters, then on launching the app the action parameter dialog requests the user to enter the parameters. After entering the parameter values, the object page opens in create mode.

-   If the application has not defined a create action or if this action is not dependent on the mandatory parameters, then on launching the app, the object page doesn't open in create mode.

-   Applications can also define `createWith:`, followed by the desired action as the `preferredMode` value. In this case, this action is called when the app is opened in create mode.

    If the specified action has parameters, then an action parameter dialog appears after navigation to the target application. If values are already available from the navigation context for some of the fields, these values are taken over into the dialog. This is shown in the following sample code:

    > ### Sample Code:  
    > ```
    > "preferredMode": {
    >      "defaultValue": {
    >           "value": "createWith:com.c_salesordermanage_sd.CreateWithSalesOrderType",
    >           "format": "value"
    >      }
    > },
    > ```

-   For POST-based create, the values are only considered if they are also specified using the `useForCreate` property in the `manifest.json` file of the target application. URL parameters that are not defined using the `useForCreate` property in the `manifest.json` file, are not passed to the back end during the creation process.

    > ### Sample Code:  
    > Manifest changes to specify parameters relevant for `useForCreate`
    > 
    > ```
    > 
    > "options": {
    >     "settings": {
    >         "contextPath": "/SalesOrderManage", // Object Page
    >         ...
    >         "inboundParameters": {
    >              "SalesOrderType": {
    >                 "useForCreate": true
    >              }
    >         }
    >     }
    > }
    > ```

    If the `manifest.json` file of the object page in the target application is configured as shown in the sample code, an incoming URL like …`#SalesOrder-manage?preferredMode=create&SalesOrderType=OR&Supplier=ABC` results in only the part `SalesOrderType=OR` being passed to the back end in the create call. The `Supplier` value is ignored because it is not specified in the `useForCreate` property.

-   For `NewAction()`-based create, the incoming value of the navigation context is always applied to the matching fields \(exact technical name match\) in the action parameter dialog. If no matching field is configured, the parameters from the navigation context are not passed. In this case the manifest setting `useForCreate` is not considered at all.




## Passing Parameters when Using `preferredMode=edit`

If an application is configured with the startup parameter `preferredMode=edit` or contains the URL parameter `preferredMode=edit` followed by a technical key or semantic key, then the object page can be launched directly in edit mode. When the object page opens in edit mode, a draft is created if one doesn't exist yet.

-   `preferredMode=edit` as a startup parameter

    You can configure `preferredMode=edit` as a startup parameter either in the SAP Fiori launchpad configuration or in the `Component.js` file of the application, along with a key pointing to the object page that needs to be opened in edit mode.

    > ### Sample Code:  
    > `manifest.json`
    > 
    > ```
    > 
    > sap.ui.define(["sap/fe/core/AppComponent"], function(AppComponent) 
    >     "use strict";                                                  
    > 
    >     return AppComponent.extend("FormTemplate.Component", {         
    >         metadata: {                                                
    >             manifest: "json"                                       
    >         },                                                         
    >         getStartupParameters: function() {                         
    >             return Promise.resolve({                               
    >                 preferredMode: ["edit"],
    >                 ID: "1"                          
    >             });                                                    
    >         }                                                          
    >     });                                                            
    > );
    > ```

-   `preferredMode=edit` as a URL parameter

    You can also use the `preferredMode=edit` parameter directly as a URL parameter along with the key pointing to the object page, that prompts the navigation to the respective object page in edit mode.

    > ### Sample Code:  
    > ```
    > #Manage-items?preferredMode=edit&ID=1
    > ```




> ### Note:  
> For information about SAP Fiori elements for OData V2, see [Handling of the preferredMode Parameter](handling-of-the-preferredmode-parameter-2e40363.md).

**Related Information**  


[Actions on the List Report Page](actions-on-the-list-report-page-993e99e.md "You can configure various action buttons on the list report page.")

[Actions](actions-cbf16c5.md "You can use generic actions provided by SAP Fiori elements and implement application-specific actions using annotations or extension points.")

[Configuring Navigation](configuring-navigation-a424275.md "You can configure the SAP Fiori elements navigation within an app (internal navigation) and the navigation to and from an app (external navigation).")

