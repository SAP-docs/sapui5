<!-- loio199a496c5fa544dfbe134b53eaba092e -->

# Creating an Extension to Modify Properties in the Navigation Context

You can use this extension to modify \(add/remove/change\) the information available in the navigation context just before the external outbound navigation is triggered.



<a name="loio199a496c5fa544dfbe134b53eaba092e__context_xjp_k22_scb"/>

## Context

> ### Caution:  
> Use app extensions with caution and only if you cannot produce the required behavior by other means, such as manifest settings or annotations. To correctly integrate your app extension coding with SAP Fiori elements, use only the `extensionAPI` of SAP Fiori elements. For more information, see [Using the ExtensionAPI](using-the-extensionapi-bd2994b.md).
> 
> After you've created an app extension, its display \(for example, control placement and layout\) and system behavior \(for example, model and binding usage, busy handling\) lies within the application's responsibility. SAP Fiori elements provides support only for the official `extensionAPI` functions. Don't access or manipulate controls, properties, models, or other internal objects created by the SAP Fiori elements framework.

For more security-related information, see [Security Configuration](security-configuration-ba0484b.md).

The modification \(add/remove/change\) is achieved by using the `adaptNavigationContext` extension method, which is called if external outbound navigation is triggered \(for example for semantic links, related apps, or `DataFieldForIntentBasedNavigations`\).

`oSelectionVariant` consists of all the properties that have been passed to the target application ‒ this already excludes the sensitive information and considers any defined object mapping.

`oTargetInfo` consists of the `semanticObject` and action that has been configured.



## Procedure

1.  Configure the extension with the controller for the object page in the `manifest.json` file:

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

2.  Use the `adaptNavigationContext` extension within the app controller:

    > ### Sample Code:  
    > ```
    > override: {
    >     intentBasedNavigation: {
    >         adaptNavigationContext: function(oSelectionVariant, oTargetInfo) {
    >             Log.info("adaptNavigationContext extension called with semantic object: " + oTargetInfo .semanticObject + " and action: " + oTargetInfo .action);
    >             oSelectionVariant.removeSelectOption("HasDraftEntity");
    >         }
    >     }
    > }
    > ```


<a name="concept_br3_gdr_gwb"/>

<!-- concept\_br3\_gdr\_gwb -->

## 

> ### Restriction:  
> When you click a field that is displayed as a link, the call to the `adaptNavigationContext` extension method is invoked only once even if the link opens more than one navigation link. You cannot invoke this method by clicking the navigation links at the second level.

> ### Note:  
> For information about SAP Fiori elements for OData V2, see [Creating an Extension to Modify Properties in the Navigation Context](creating-an-extension-to-modify-properties-in-the-navigation-context-cd430a4.md).

