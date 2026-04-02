<!-- loiob20dc7a3d9ca41bebdb86fc3ae3295bf -->

# Example: Replacing Standard Navigation in a Responsive Table on the Object Page

You can replace standard object page table navigation with custom navigation to external or internal targets using controller extensions.



<a name="loiob20dc7a3d9ca41bebdb86fc3ae3295bf__context_jdd_c22_scb"/>

## Context

> ### Caution:  
> Use app extensions with caution and only if you cannot produce the required behavior by other means, such as manifest settings or annotations. To correctly integrate your app extension coding with SAP Fiori elements, use only the `extensionAPI` of SAP Fiori elements. For more information, see [Using the extensionAPI](using-the-extensionapi-a5a4ec6.md).
> 
> After you've created an app extension, its display \(for example, control placement and layout\) and system behavior \(for example, model and binding usage, busy handling\) lies within the application's responsibility. SAP Fiori elements provides support only for the official `extensionAPI` functions. Don't access or manipulate controls, properties, models, or other internal objects created by the SAP Fiori elements framework.



<a name="loiob20dc7a3d9ca41bebdb86fc3ae3295bf__steps_ovs_pzz_h4b"/>

## Procedure

1.  Add a navigation target to the `manifest.json` file.

    The following sample code shows how an external navigation or outbound navigation is added using the SAP Fiori launchpad.

    > ### Sample Code:  
    > `manifest.json`
    > 
    > ```
    > 
    > sap.app": {
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
    > ....
    > 
    > ```

2.  Register your extension in the `manifest.json` file.

    > ### Sample Code:  
    > `manifest.json`
    > 
    > ```
    > "extends": {
    >    "extensions": {
    >       ... 
    >       "sap.ui.controllerExtensions": { 
    >          ...
    >          "sap.suite.ui.generic.template.ObjectPage.view.Details": { 
    >             ... 
    >             "controllerName": "STTA_MP.ext.controller.DetailsExtension",
    >             ...
    >          }
    >       } 
    >       ...
    > 
    > ```

3.  Implement your controller extension.

    You have to implement the `onListNavigationExtension` function within the object page controller extension.

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


