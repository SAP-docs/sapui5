<!-- loio358cf2598d71462b8ac2bd8c944efbfd -->

# Extending SAP Fiori Elements-Based Apps

You can extend your application if needed.

You can use app extensions to extend your app. These are made by developers during the creation of an SAP Fiori elements-based app, using framework extension points provided by SAP Fiori elements. The extensions are made, for example, using manifest changes or SAPUI5 extension points, depending on the floorplan. For more information, see [Extending Generated Apps Using App Extensions](extending-generated-apps-using-app-extensions-340cdb2.md).

Application developers can optionally also target a specific instance they want to extend in an object page:

> ### Sample Code:  
> Samplecode for SAP Fiori elements for OData V2
> 
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

> ### Sample Code:  
> Samplecode for SAP Fiori elements for OData V4
> 
> ```
> "sap.fe.templates.ObjectPage.ObjectPageController": {
>     "controllerName": "SalesOrder.custom.OPExtend"
> },
> "sap.fe.templates.ObjectPage.ObjectPageController#SalesOrder::SalesOrderManageObjectPage": {
>     "controllerName": "SalesOrder.custom.SalesOrderOPExtend"
> }
> ```

The most specific one wins. In the sample code above, this means for the `SalesOrderManageObjectPage` that the `SalesOrderOPExtend` is loaded, and for all others the `OPExtend` is loaded. Behind the hash is the ID of the view.

The following sample code shows the logic used:

> ### Sample Code:  
> Samplecode for SAP Fiori elements for OData V2
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

> ### Sample Code:  
> Samplecode for SAP Fiori elements for OData V4
> 
> ```
> {
>    "sap.app": {
>       "id": "MyApplicationID",
>       "type": "application"
>    },
>    "sap.ui5": {
>         "routing": {
>           "config": {
>             "async": true
>           },
>           "routes": [
>             {
>               "pattern": "MainEntity({key}):?query:",
>               "name": "MainEntityObjectPage",
>               "target": "MainEntityObjectPageTarget"
>             }
>           ],
>           "targets": {
>             "MainEntityObjectPageTarget": {
>               "type": "Component",
>               "id": "MainEntityObjectPage",
>               "name": "sap.fe.templates.ObjectPage",
>               "options": {
>                 "settings": {
>                   "entitySet": "MainEntity"
>                 }
>               }
>             }
>           }
>         }
>    }
> }
> ```

Here, `MyApplicationID::MainEntityObjectPage` represents the page ID.



<a name="loio358cf2598d71462b8ac2bd8c944efbfd__section_b5m_cr3_znb"/>

## Additional Features in SAP Fiori Elements for OData V2

App extensions allow customers and partners to introduce their own functionality to an existing app, as part of an adaptation project, in a consistent and upgrade-safe manner. For more information, see [Extending Delivered Apps Using Adaptation Extensions](extending-delivered-apps-using-adaptation-extensions-52fc48b.md).

> ### Note:  
> This option is possible only for list report, object page, and analytical list page.

