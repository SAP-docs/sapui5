<!-- loio0c35c877d43f4237ab50c2988fc9f2c2 -->

# Refresh Entity Sets in `sap-keep-alive` Mode in the Overview Pages

`sap-keep-alive` is an SAP Fiori launchpad feature that ensures that a view is not destroyed in the view cache when navigating away from the application.

The feature ensures improved performance when you reload the same view again once you navigate back to the application.

If you make changes in an external application that you navigated to, then when you navigate back and restore the application view, the changes that you made are reflected in the card data. You can configure the entity sets that you want to refresh. To do so, when navigating back to the source application from the target application, you can use the manifest configuration described below.

The following configuration is supported for entity sets:

> ### Sample Code:  
> `EntitySetName`: `self`
> 
> ```
> "sap.ovp": {
>         "globalFilterModel": "salesOrder",
>         "globalFilterEntityType": "GlobalFilters",
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

