<!-- loio0617a7773b904297a6231b8259d24551 -->

# Refresh Entity Sets in `sap-keep-alive` Mode in the Overview Pages

You can use the `sap-keep-alive` feature in SAP Fiori launchpad to ensure that a view is not destroyed in the view cache when navigating away from the source app.

> ### Note:  
> For information about SAP Fiori elements for OData V4, see [Refresh Entity Sets in sap-keep-alive Mode in the Overview Pages](refresh-entity-sets-in-sap-keep-alive-mode-in-the-overview-pages-0c35c87.md).

This feature enhances performance by preserving the view state, allowing the same view to reload upon returning to the source application.

When users navigate to the target application, make changes, and then return to the source application, the card data updates to reflect those changes when the view is restored. Application developers can configure which entity sets to refresh by defining specific settings in the `manifest.json` file.

In the following sample code, the entity set `self` is automatically refreshed when users return to the source application:

> ### Sample Code:  
> `manifest.json`
> 
> ```
> "sap.ovp": {
>         "globalFilterModel": "salesOrder",
>         "globalFilterEntitySet": "ZFilterEntitySet", //Represents the entity set used as a global filter in the smart filter bar control. 
>         "smartVariantRequired": true,
>         "enableLiveFilter": true,
>         "containerLayout": "resizable",
>         ...
>         "refreshStrategyOnAppRestore": {
>             "entitySets": {
>                 "<entitySetToRefresh>": "self"
>             }
>         },
>         ...
>         "cards": {
>             ...
>         }
> }
> ```

