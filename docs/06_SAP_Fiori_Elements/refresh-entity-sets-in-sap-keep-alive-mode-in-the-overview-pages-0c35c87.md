<!-- loio0c35c877d43f4237ab50c2988fc9f2c2 -->

# Refresh Entity Sets in `sap-keep-alive` Mode in the Overview Pages

The `sap-keep-alive` feature in SAP Fiori launchpad ensures that a view is not destroyed in the view cache when navigating away from the source application.

This feature enhances performance by preserving the view state, allowing the same view to reload upon returning to the source application.

When users navigate to the target application, make changes, and then return to the source application, the card data updates to reflect those changes when the view is restored. Application developers can configure which entity sets to refresh by defining specific settings in the `manifest.json` file.

In the following sample code, the entity set `self` is automatically refreshed when users return to the source application:

> ### Sample Code:  
> `manifest.json`
> 
> ```
> "sap.ovp": {
>         "globalFilterModel": "salesOrder",
>         "globalFilterEntityType": "GlobalFilters",//Represents the entity used as a global filter in the smart filter bar control. Deprecated since SAPUI5 1.54.
>         "globalFilterEntitySet": "ZFilterEntitySet", //Represents the entity set used as a global filter in the smart filter bar control. Available from SAPUI5 1.54 onwards.
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

