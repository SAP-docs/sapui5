<!-- loio03b3b87f1fb7431e9a42bf91409d2059 -->

# Extending SAP Fiori Elements-Based Apps

You can extend your SAP Fiori elements apps .

> ### Note:  
> For information about SAP Fiori elements for OData V4, see [Extending SAP Fiori Elements-Based Apps](extending-sap-fiori-elements-based-apps-358cf25.md).

You can create extensions during the creation of an SAP Fiori elements-based app, using framework extension points provided by SAP Fiori elements. The extensions are made, for example, using manifest changes or SAPUI5 extension points, depending on the floorplan. For more information, see [Extending Generated Apps Using App Extensions](extending-generated-apps-using-app-extensions-9d133a4.md).

You can optionally also target a specific instance they want to extend in an object page:

> ### Sample Code:  
> ```
> "sap.suite.ui.generic.template.ObjectPage.view.Details": {
> 	"controllerName": "SalesOrder.ext.controller.DetailsExtension",
> },
> "sap.suite.ui.generic.template.ObjectPage.view.Details#SalesOrder::sap.suite.ui.generic.template.ObjectPage.view.Details::SalesOrder_WD" {
> 	"controllerName": "SalesOrder.ext.controller.SalesOrderExtension",
> }
> 
> ```

The most specific one wins. In the sample code above, this means for the `SalesOrder_WD` page the `SalesOrderExtension` is loaded, and for all others the `DetailsExtension` is loaded. Behind the hash is the ID of the view.

The following sample code shows the logic used:

> ### Sample Code:  
> `manifest.json`
> 
> ```
> "sap.suite.ui.generic.template.ObjectPage.view.Details": {
>                         "controllerName": "STTASOWD20.ext.controller.DetailsExtension",
>                         "sap.ui.generic.app": {
>                             "C_STTA_SalesOrder_WD_20": {
>                                 "EntitySet": "C_STTA_SalesOrder_WD_20"
>                             }
>                         }
>                     },
>                     "sap.suite.ui.generic.template.ObjectPage.view.Details#STTASOWD20::sap.suite.ui.generic.template.ObjectPage.view.Details::C_STTA_SalesOrder_WD_20": {
>                         "controllerName": "STTASOWD20.ext.controller.SalesOrderExtension",
>                         "sap.ui.generic.app": {
>                             "C_STTA_SalesOrder_WD_20": {
>                                 "EntitySet": "C_STTA_SalesOrder_WD_20"
>                             }
>                         }
>                     },
>                     "sap.suite.ui.generic.template.ObjectPage.view.Details#STTASOWD20::sap.suite.ui.generic.template.ObjectPage.view.Details::C_STTA_SalesOrderItem_WD_20": {
>                         "controllerName": "STTASOWD20.ext.controller.SalesOrderItemExtension",
>                         "sap.ui.generic.app": {
>                             "C_STTA_SalesOrderItem_WD_20": {
>                                 "EntitySet": "C_STTA_SalesOrderItem_WD_20"
>                             }
>                         }
>                     }
> 
> ```

Here, `STTASOWD20` represents the application name , `sap.suite.ui.generic.template.ObjectPage.view.Detail` represents the view ID and `C_STTA_SalesOrderItem_WD_20` represents the entity set of the relevant object page.

App extensions allow customers and partners to introduce their own functionality to an existing app, as part of an adaptation project, in a consistent and upgrade-safe manner. For more information, see [Extending Delivered Apps Using Adaptation Extensions](extending-delivered-apps-using-adaptation-extensions-4221538.md).

> ### Note:  
> This option is possible only for list report page, object page, overview page, and analytical list page.

