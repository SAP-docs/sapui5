<!-- loio0c35c877d43f4237ab50c2988fc9f2c2 -->

# Refresh Entity Sets in `sap-keep-alive` Mode in the Overview Pages

The `sap-keep-alive` feature in SAP Fiori launchpad ensures that a view is not destroyed in the view cache when navigating away from the application.

The feature enhances performance by preserving the view state when reloading the same view after navigating back to the application.

If you make changes in an external application that you navigated to, then when you navigate back and restore the application view, the changes that you made are reflected in the card data. You can configure the entity sets that you want to refresh. To do so, when navigating back to the source application from the target application, you can use the manifest configuration described below.

The following configuration is supported for entity sets:

> ### Sample Code:  
> `EntitySetName`: `self`
> 
> ```
> "sap.ovp": {
>         "globalFilterModel": "salesOrder",
>         "globalFilterEntityType": "GlobalFilters",//Represents the entity to use as a global filter in the smart filter bar control. Deprecated since SAPUI5 1.54.
>         "globalFilterEntitySet": "ZFilterEntitySet", //Represents the entity set to use as a global filter in the smart filter bar control. Available from SAPUI5 1.54 onwards.
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

