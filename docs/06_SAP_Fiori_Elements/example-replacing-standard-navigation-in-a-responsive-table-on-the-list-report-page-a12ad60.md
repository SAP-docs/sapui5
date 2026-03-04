<!-- loioa12ad6058db84e8cb60a3a9b2ade63fb -->

# Example: Replacing Standard Navigation in a Responsive Table on the List Report Page

You can replace the standard navigation from the list report page to the object page with your own navigation to an external or internal target.



<a name="loioa12ad6058db84e8cb60a3a9b2ade63fb__context_vgz_122_scb"/>

## Context

> ### Caution:  
> Use app extensions with caution and only if you cannot produce the required behavior by other means, such as manifest settings or annotations. To correctly integrate your app extension coding with SAP Fiori elements, use only the `extensionAPI` of SAP Fiori elements. For more information, see [Using the extensionAPI](using-the-extensionapi-bd2994b.md).
> 
> After you've created an app extension, its display \(for example, control placement and layout\) and system behavior \(for example, model and binding usage, busy handling\) lies within the application's responsibility. SAP Fiori elements provides support only for the official `extensionAPI` functions. Don't access or manipulate controls, properties, models, or other internal objects created by the SAP Fiori elements framework.

You can selectively change the target when chevron navigation is triggered from a table.



<a name="loioa12ad6058db84e8cb60a3a9b2ade63fb__steps_ovs_pzz_h4b"/>

## Procedure

1.  Add an outbound navigation configuration pointing to the target app in the `manifest.json` file.

    > ### Sample Code:  
    > ```
    > sap.app": {
    >     ...
    >     "crossNavigation": {
    >         "inbounds": {},
    >         "outbounds": {
    >             "FreestyleNav1": {
    >                 "semanticObject": "v4Freestyle",
    >                 "action": "Inbound",
    >                 "parameters": {
    >                     "SoldToParty": {
    >                         "value": {
    >                             "value": "7P100001",
    >                             "format": "plain"
    >                         }
    >                     }
    >                 }
    >             }
    >         }
    >     }
    > }
    > ```

2.  Configure the extension with the controller for the list report page in the `manifest.json` file.

    > ### Sample Code:  
    > ```
    > "sap.ui5": {
    >     "extends": {
    >         "extensions": {
    >             "sap.ui.controllerExtensions": {
    >                 "sap.fe.templates.ListReport.ListReportController": {
    >                     "controllerName": "SalesOrder.ext.LRExtend"
    >                 },
    >                 "sap.fe.templates.ObjectPage.ObjectPageController": {
    >                     "controllerName": "SalesOrder.ext.OPExtend"
    >                 }
    >             }
    >         }
    >     }
    > }
    > ```

3.  Implement the `onBeforeNavigation` extension method within your controller extension.

    > ### Sample Code:  
    > ```
    > override: {
    >     routing: {
    >         onBeforeNavigation: function(oContextInfo) {
    >             var oLineContext = oContextInfo.bindingContext,
    >             oNav = this.base.getExtensionAPI().intentBasedNavigation;
    >             // for salesOrder 6437 navigate to FreeStyle App
    >             if (oLineContext.SalesOrder === "6437") {
    >                 oNav.navigateOutbound("FreestyleNav", { "Customer": "10001" });
    >             } else {
    >                 // return false to trigger the default internal navigation
    >                 return false;
    >             }
    >             // return true is necessary to prevent further default navigation
    >             return true;                                                       
    >         }
    >     }
    > }
    > ```

    In the example above, the navigation to an external application is configured and the values for the `Customer` parameters are passed when a user clicks the line item for sales order 6437.

    `oContextInfo` includes the regular context that is passed to a target application upon navigation, that is the `lineItem` context when navigating from the list report page table.


<a name="concept_j2y_twp_c3c"/>

<!-- concept\_j2y\_twp\_c3c -->

## 

> ### Note:  
> For information about SAP Fiori elements for OData V2, see [Example: Replacing Standard Navigation in a Responsive Table in the List Report](example-replacing-standard-navigation-in-a-responsive-table-in-the-list-report-5ae7b0c.md).

