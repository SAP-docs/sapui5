<!-- loio4120052d90374ce8b1cea24a0d8bd317 -->

# Migrating from `registerControllerExtensions` API

As of SAPUI5 1.120 release, the [`registerControllerExtensions`](https://ui5.sap.com/#/api/sap.suite.ui.generic.template.extensionAPI.extensionAPI%23methods/sap.suite.ui.generic.template.extensionAPI.extensionAPI.registerControllerExtensions)API is getting deprecated. It is planned to be removed from the SAPUI5 version 2.0.

> ### Note:  
> This topic is only applicable to SAP Fiori elements for OData V2.

Following are the requirements that describe why the API is getting deprecated:

-   Now, SAPUI5 provides capabilities to register multiple controller extensions for a single floorplan \(one controller extension per view\) directly through the manifest. In this case, the `registerControllerExtensions` API is not required anymore.

-   The `registerControllerExtensions` API internally uses the [`sap.ui.controller`](https://ui5.sap.com/#/api/sap.ui%23methods/sap.ui.controller) API.




<a name="loio4120052d90374ce8b1cea24a0d8bd317__section_a2q_nzd_z1c"/>

## Steps to Migrate

The current setup has the following three controller extension files for the object page.

-   `DetailsExtension.controller.js`

    The parent controller that invokes extensionAPI.`registerControllerExtensions` and registers the remaining two child controllers.

-   `SalesOrderExtension.controller.js`

    One of the child controllers that is responsible for the `Sales Order` view \(bound with `C_STTA_SalesOrder_WD_20` entity set\).

-   `SalesOrderItemExtension.controller.js`

    One of the child controllers that is responsible for the `Sales Order Item` view \(bound with `C_STTA_SalesOrderItem_WD_20` entity set\).


From SAPUI5 version 2.0, only the two child controller files are going to be required

**Step 1: Changes Required in the `manifest.json`**

1.  Register all the child controllers under `sap.ui.controllerExtensions` section of `manifest.json`. The registered entry must be in `<FLOOR_PLAN_NAME>#<STABLE_ID_OF_VIEW>` format. For example, the `SalesOrderExtension.controller.js` is to be registered as the following.

    > ### Sample Code:  
    > ```
    > "sap.ui.controllerExtensions": { 
    >     ... 
    >     "sap.suite.ui.generic.template.ObjectPage.view.Details#STTASOWD20::sap.suite.ui.generic.template.ObjectPage.view.Details::C_STTA_SalesOrder_WD_20": { 
    >         "controllerName": "STTASOWD20.ext.controller.SalesOrderExtension", 
    >         "sap.ui.generic.app": { 
    >             "C_STTA_SalesOrder_WD_20": { 
    >                 "EntitySet": "C_STTA_SalesOrder_WD_20", 
    >                 "Header": { 
    >                     "Actions": { 
    >                        ... 
    >                     } 
    >                 }, 
    >                 "Sections": { 
    >                     "Actions": { 
    >                        ... 
    >                     } 
    >                 } 
    >             } 
    >         } 
    >     } 
    > } 
    > ```

2.  Copy the content \(such as, header actions, section actions\) of parent controller extension to the respective child controller extensions.

3.  Remove the entry of parent controller extension from `sap.ui.controllerExtensions` section of `manifest.json`.


**Step 2: Changes Required in the Controller Extensions**

1.  Remove the parent controller extension file.

2.  All the child controller extension files must extend the `sap.ui.core.mvc.ControllerExtension` class.

    > ### Sample Code:  
    > ```
    > sap.ui.define([ 
    >     "sap/ui/core/mvc/ControllerExtension" 
    > ], function (ControllerExtension) { 
    >     'use strict'; 
    >     return ControllerExtension.extend("STTASOWD20.ext.controller.SalesOrderExtension", { 
    >         override: { 
    >             // Overridden methods 
    >         }, 
    >         // Custom methods 
    >     }); 
    > }); 
    > ```

3.  All the overridden methods must be kept under the `override` section of the controller extension class. It includes the following:

    -   All the methods provided by SAPUI5 \(for e.g: onInit\)

    -   All the methods of [`ObjectPage controllerFrameworkExtensions`](https://ui5.sap.com/#/api/sap.suite.ui.generic.template.ObjectPage.controllerFrameworkExtensions) \(for e.g: `adaptNavigationParameterExtension`, `beforeSaveExtension`\)


4.  All the custom methods are to be added after the `override` section.

    > ### Sample Code:  
    > ```
    > sap.ui.define([ 
    >     "sap/ui/core/mvc/ControllerExtension" 
    > ], function (ControllerExtension) { 
    >     'use strict'; 
    >  
    >     return ControllerExtension.extend("STTASOWD20.ext.controller.SalesOrderExtension", { 
    >         override: { 
    >             onInit: function(){ 
    >             }, 
    >             adaptNavigationParameterExtension: function (oSelectionVariant, oObjectInfo) {}, 
    >             onBeforeRendering: function () {}, 
    >             beforeDeleteExtension: function () {}, 
    >             beforeSaveExtension: function () {} 
    >         }, 
    >         onObjectPage1CustomAction: function () { 
    >         }, 
    >         onSalesOrderInfo: function () {}, 
    >         onSalesOrderItemInfo: function () {} 
    >     }); 
    > }); 
    > ```


**Steps 3: Changes Required in Declaring the Press Event Handlers in the Manifest**

Earlier, the event handlers for custom actions \(that are implemented in controller extensions\) were declared in the manifest by the name. In the following example, `onObjectPage1CustomAction` is the press event handler for the custom action `ObjectPageCustomAction`.

> ### Sample Code:  
> ```
> "sap.ui.generic.app": { 
>     "C_STTA_SalesOrder_WD_20": { 
>         "EntitySet": "C_STTA_SalesOrder_WD_20", 
>         "Header": { 
>             "Actions": { 
>                 "ObjectPageCustomAction": { 
>                     "id": "ObjectPageCustomAction", 
>                     "text": "Custom Action 1", 
>                     "press": "onObjectPage1CustomAction", 
>                     "determining": true, 
>                     "applicablePath": "IsActiveEntity" 
>                 } 
>             } 
>         } 
>     } 
> } 
> ```

It is now going to be changed to extension.`<CONTROLLER_MODULE_NAME>.<METHOD_NAME>` format.

> ### Sample Code:  
> ```
> "sap.ui.generic.app": { 
>     "C_STTA_SalesOrder_WD_20": { 
>         "EntitySet": "C_STTA_SalesOrder_WD_20", 
>         "Header": { 
>             "Actions": { 
>                 "ObjectPageCustomAction": { 
>                     "id": "ObjectPageCustomAction", 
>                     "text": "Custom Action 1", 
>                     "press": ".extension.STTASOWD20.ext.controller.SalesOrderExtension.onObjectPage1CustomAction", 
>                     "determining": true, 
>                     "applicablePath": "IsActiveEntity" 
>                 } 
>             } 
>         } 
>     } 
> } 
> ```

> ### Note:  
> Use the same format while referring to the custom methods from view and fragment files.

In the following example, refer to the `press` handler of the button.

> ### Sample Code:  
> ```
> <core:FragmentDefinition xmlns:core="sap.ui.core" xmlns="sap.m"> 
>        <Button id="previousMemoBtn" text="{i18n>yes}"  
>               press=".extension.SSTASOWD20.ext.controller.SalesOrderExtension.onPressPreviousMemo" /> 
> </core:FragmentDefinition> 
> ```



<a name="loio4120052d90374ce8b1cea24a0d8bd317__section_txf_1f2_z1c"/>

## Additional Changes

You can get the instance of `extensionAPI` using `this.getView().getController().extensionAPI`. You can find more information in the following sample:

> ### Sample Code:  
> ```
> sap.ui.define([ 
>     "sap/ui/core/mvc/ControllerExtension" 
> ], function (ControllerExtension) { 
>     'use strict'; 
>  
>     return ControllerExtension.extend("STTASOWD20.ext.controller.SalesOrderExtension", { 
>         override: { 
>             onInit: function () { 
>                 // Initializing extensionAPI 
>                 this.extensionAPI = this.getView().getController().extensionAPI; 
>             } 
>         }, 
>         onSalesOrderInfo: function () { 
>             // Using extensionAPI 
>             var aSelectedContexts = this.extensionAPI.getSelectedContexts("SalesOrderItemsID::responsiveTable"); 
>         } 
>     }); 
> }); 
> ```

