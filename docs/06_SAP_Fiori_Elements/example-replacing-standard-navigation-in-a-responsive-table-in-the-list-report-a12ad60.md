<!-- loioa12ad6058db84e8cb60a3a9b2ade63fb -->

# Example: Replacing Standard Navigation in a Responsive Table in the List Report

You can replace the standard navigation from the list report to the object page with your own navigation to an external or internal target.



<a name="loioa12ad6058db84e8cb60a3a9b2ade63fb__context_vgz_122_scb"/>

## Context

> ### Caution:  
> Use app extensions with caution and only if you cannot produce the required behavior by other means, such as manifest settings or annotations. To correctly integrate your app extension coding with SAP Fiori elements, use only the `extensionAPI` of SAP Fiori elements. For more information, see [Using the extensionAPI](using-the-extensionapi-bd2994b.md).
> 
> After you've created an app extension, its display \(for example, control placement and layout\) and system behavior \(for example, model and binding usage, busy handling\) lies within the application's responsibility. SAP Fiori elements provides support only for the official `extensionAPI` functions. Don't access or manipulate controls, properties, models, or other internal objects created by the SAP Fiori elements framework.

 <a name="task_iyp_wxz_h4b"/>

<!-- task\_iyp\_wxz\_h4b -->

## Additional Features in SAP Fiori Elements for OData V2



<a name="task_iyp_wxz_h4b__steps_jxv_3yz_h4b"/>

## Procedure

1.  Add a navigation target to the manifest.js file.

    In the example below, external navigation \(outbound\) via the SAP Fiori Launchpad has been added.

    > ### Sample Code:  
    > ```
    > 
    > sap.app": {
    > 
    > ...
    >   "crossNavigation": {
    >      "inbounds": {},
    >      "outbounds": {
    >        "EPMProductManageSt": {
    >          "semanticObject": "EPMProduct",
    >          "action": "manage",
    >          "parameters": {
    >             "preferredMode": {
    >                "value": {
    >                   "value": "display"
    >                }
    >             }
    >          }
    >       }
    >    }
    >  }
    > 
    > ....
    >  
    > 
    > 
    > ```

2.  Register your extension in the manifest.js file.

    > ### Sample Code:  
    > ```
    > "extends": {
    >    "extensions": {
    >       ... 
    >       "sap.ui.controllerExtensions": { 
    >          ...
    >          "sap.suite.ui.generic.template.ListReport.view.ListReport": { 
    >             ... 
    >             "controllerName": "STTA_MP.ext.controller.ListReportExtension",
    >             ...
    >          }
    >       } 
    >       ...
    > 
    > ```

3.  Implement your controller extension.

    You have to implement the `onListNavigationExtension` function within the list report controller extension.

    > ### Sample Code:  
    > ```
    > onListNavigationExtension: function(oEvent) {
    >  var oNavigationController = this.extensionAPI.getNavigationController();
    >  var oBindingContext = oEvent.getSource().getBindingContext();
    >  var oObject = oBindingContext.getObject();
    >  // for notebooks we trigger external navigation for all others we use internal navigation
    >  if (oObject.ProductCategory == "Notebooks") {
    >     oNavigationController.navigateExternal("EPMProductManageSt");
    >  } else {
    >     // return false to trigger the default internal navigation
    >     return false;
    >  }
    >  // return true is necessary to prevent further default navigation
    >  return true;
    >  },
    > 
    > ```

4.  To ensure that this navigation can be triggered by the user, you must have defined an object page. If you do not want the user to be able to navigate to this object page, follow the procedure described under [Changing Navigation to Object Page](changing-navigation-to-object-page-8bd546e.md), *Enable External Navigation*.


 <a name="task_l13_4yz_h4b"/>

<!-- task\_l13\_4yz\_h4b -->

## Additional Features in SAP Fiori Elements for OData V4



<a name="task_l13_4yz_h4b__context_c4k_pyz_h4b"/>

## Context

Application developers can selectively change the target when chevron navigation is triggered from a table.



<a name="task_l13_4yz_h4b__steps_ovs_pzz_h4b"/>

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

2.  Configure the extension with the controller for the list report in the `manifest.json` file.

    > ### Sample Code:  
    > ```
    > "sap.ui5": {
    >     "extends": {
    >         "extensions": {
    >             "sap.ui.controllerExtensions": {
    >                 "sap.fe.templates.ListReport.ListReportController": {
    >                     "controllerName": "SalesOrder.custom.LRExtend"
    >                 },
    >                 "sap.fe.templates.ObjectPage.ObjectPageController": {
    >                     "controllerName": "SalesOrder.custom.OPExtend"
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
    >             var oLineContext = oContextInfo.sourceBindingContext,
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

    `oContextInfo` includes the regular context that is passed to a target application upon navigation, that is the `lineItem` context when navigating from the list report table.


