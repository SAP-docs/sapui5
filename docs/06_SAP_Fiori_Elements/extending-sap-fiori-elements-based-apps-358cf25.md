<!-- loio358cf2598d71462b8ac2bd8c944efbfd -->

# Extending SAP Fiori Elements-Based Apps

You can extend your SAP Fiori elements app.

These are made by developers during the creation of an SAP Fiori elements-based app, using framework extension points provided by SAP Fiori elements. The extensions are made, for example, using manifest changes or SAPUI5 extension points, depending on the floorplan. For more information, see [Extending Generated Apps Using App Extensions](extending-generated-apps-using-app-extensions-340cdb2.md).

Application developers can optionally also target a specific instance they want to extend in an object page:

> ### Sample Code:  
> `manifest.json`
> 
> ```
> "sap.fe.templates.ObjectPage.ObjectPageController": {
>     "controllerName": "SalesOrder.ext.OPExtend"
> },
> "sap.fe.templates.ObjectPage.ObjectPageController#SalesOrder::SalesOrderManageObjectPage": {
>     "controllerName": "SalesOrder.ext.SalesOrderOPExtend"
> }
> ```

The most specific one wins. In the sample code above, this means for the `SalesOrderManageObjectPage` that the `SalesOrderOPExtend` is loaded, and for all others the `OPExtend` is loaded. Behind the hash is the ID of the view.

The following sample code shows the logic used:

> ### Sample Code:  
> `manifest.json`
> 
> ```
> { 
>     "sap.app": { 
>         "id": "MyApplicationID", 
>         "type": "application" 
>     }, 
>     "sap.ui5": { 
>         "routing": { 
>             "config": { 
>                 "async": true 
>             }, (if sapui5_version is 'sapui5_1.0') 
>             "routes": [ 
>                 { 
>                     "pattern": "MainEntity({key}):?query:", 
>                     "name": "MainEntityObjectPage", 
>                     "target": "MainEntityObjectPageTarget" 
>                 } 
>             ], 
>             "targets": { 
>                 "MainEntityObjectPageTarget": { 
>                     "type": "Component", 
>                     "id": "MainEntityObjectPage", 
>                     "name": "sap.fe.templates.ObjectPage", 
>                     "options": { 
>                         "settings": { 
>                             "contextPath": "/MainEntity" 
>                         } 
>                     } 
>                 } 
>             } 
>         } 
>     } 
> }
> ```

Here, `MyApplicationID::MainEntityObjectPage` represents the page ID.

In addition, key users and developers can extend and configure SAP Fiori applications by adapting the UI. For more information, see [Extending Delivered Apps Using Adaptation Extensions](extending-delivered-apps-using-adaptation-extensions-52fc48b.md).



> ### Note:  
> For information about SAP Fiori elements for OData V2, see [Extending SAP Fiori Elements-Based Apps](extending-sap-fiori-elements-based-apps-03b3b87.md).

