<!-- loio449d3b00da4649bbb8da1c517ac799c2 -->

# Creating an Extension to Modify Navigation Targets in Semantic Link Popovers

Extension method for customizing navigation targets in semantic link popovers in SAP Fiori elements for OData V4. Use this to add, remove, or reorder targets, or to change link text.

> ### Caution:  
> Use app extensions with caution and only if you cannot produce the required behavior by other means, such as manifest settings or annotations. To correctly integrate your app extension coding with SAP Fiori elements, use only the `extensionAPI` of SAP Fiori elements. For more information, see [Using the ExtensionAPI](using-the-extensionapi-bd2994b.md).
> 
> After you've created an app extension, its display \(for example, control placement and layout\) and system behavior \(for example, model and binding usage, busy handling\) lies within the application's responsibility. SAP Fiori elements provides support only for the official `extensionAPI` functions. Don't access or manipulate controls, properties, models, or other internal objects created by the SAP Fiori elements framework.

For more security-related information, see [Security Configuration](security-configuration-ba0484b.md).

You can modify navigation targets in semantic link popovers. The following modifications are available:

-   Adding a navigation target

-   Removing a navigation target

-   Reordering navigation targets

-   Changing the link text


To modify the navigation target, use the [`adaptNavigationTargets`](https://ui5.sap.com/#/api/sap.fe.core.controllerextensions.IntentBasedNavigation%23methods/adaptNavigationTargets) extension method, which is called when a semantic object link popover is about to open, before the list of targets is displayed to the user.

`navigationTargets` is an array of [`NavigationTarget`](https://ui5.sap.com/#/api/sap.fe.core.controllerextensions.IntentBasedNavigation.NavigationTarget) objects representing the targets that appear in the popover. Each entry has the following:

-   A `semanticObject`

-   An action

-   An optional text label

-   An optional `initiallyVisible` property


You must modify this array in place to add, remove, or reorder entries.

`oNavigationInfo` provides the following context about the link:

-   `semanticObjects` is the array of all semantic objects registered for the link field.

-   `bindingContext` is the binding context of the source row or field giving access to the current record's data.

-   `sourceControl` defines the instance of the `Field` building block that triggered the navigation. If the navigation isn't triggered from a field, `sourceControl` is undefined.


When the user navigates to a target you added, SAP Fiori elements for OData V4 resolves the URL parameters automatically and calls [`adaptNavigationContext`](https://ui5.sap.com//#/api/sap.fe.core.controllerextensions.IntentBasedNavigation%23methods/adaptNavigationContext) for that target, just as it does for native targets.

For more information, see [Creating an Extension to Modify Properties in the Navigation Context](creating-an-extension-to-modify-properties-in-the-navigation-context-199a496.md) and the [API Reference](https://ui5.sap.com//#/api/sap.fe.core.controllerextensions.IntentBasedNavigation)



## Using the `adaptNavigationTargets` Extension Method

To use the `adaptNavigationTargets` extension method, configure the extension with the controller for the page in the `manifest.json` file as shown in the following sample code:

> ### Sample Code:  
> `manifest.json`
> 
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

Use the `adaptNavigationTargets` extension within the app controller as shown in the following sample code:

> ### Sample Code:  
> App Controller
> 
> ```
> override: {
>     intentBasedNavigation: {
>         adaptNavigationTargets: function(navigationTargets, oNavigationInfo) {
> 
>             // Remove a target by filtering it out
>             const idx = navigationTargets.findIndex(
>                 t => t.semanticObject === "SalesOrder" && t.action === "legacy"
>             );
>             if (idx !== -1) {
>                 navigationTargets.splice(idx, 1);
>             }
> 
>             // Add a new target based on the current record's data
>             const travelId = oNavigationInfo.bindingContext.getProperty("TravelID");
>             if (travelId) {
>                 navigationTargets.push({
>                     semanticObject: "Travel",
>                     action: "display",
>                     text: "Show Travel Details",
>                     initiallyVisible: true
>                 });
>             }
>         }
>     }
> }
> ```



## Related Links

-   For more information about semantic link popovers, see the [Using a Link](navigation-from-an-app-outbound-navigation-d782acf.md#loiod782acf8bfd74107ad6a04f0361c5f62__optionsIBN) subsection in [Navigation from an App \(Outbound Navigation\)](navigation-from-an-app-outbound-navigation-d782acf.md).

-   For more information about quick views, see [Enabling Quick Views for Link Navigation](enabling-quick-views-for-link-navigation-307ced1.md) and [Configuring the Content of Quick Views](configuring-the-content-of-quick-views-c245ad7.md).

-   For more information about `adaptNavigationContext`, see [Creating an Extension to Modify Properties in the Navigation Context](creating-an-extension-to-modify-properties-in-the-navigation-context-199a496.md).


