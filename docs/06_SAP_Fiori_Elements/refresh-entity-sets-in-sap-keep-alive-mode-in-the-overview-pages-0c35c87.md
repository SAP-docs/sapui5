<!-- loio0c35c877d43f4237ab50c2988fc9f2c2 -->

# Refresh Entity Sets in `sap-keep-alive` Mode in the Overview Pages

You can use the `sap-keep-alive` feature in SAP Fiori launchpad to preserve the view state of an overview page when users navigate away from it.

When `sap-keep-alive` is enabled, SAP Fiori launchpad stores the overview page in the view cache. When users return to the overview page, the cached view is restores, which improves performance. When users navigate from the overview page to a target application, make changes to the target application, and return to the overview page, the cards must reflect the updated data. Without a refresh strategy, cached cards may display outdated values. To handle this, you can configure which entity sets refresh automatically when the overview page is restored. You can configure it in the `refreshStrategyOnAppRestore` section of the `manifest.json` file.



## Configuring the Refresh Strategy

In the `sap.ovp` section of `manifest.json` file, add a `refreshStrategyOnAppRestore` object that lists the entity sets to refresh, as shown in the following sample code:

> ### Sample Code:  
> `manifest.json`
> 
> ```
> "sap.ovp": {
>         "globalFilterModel": "salesOrder",
>         "globalFilterEntitySet": "ZFilterEntitySet", //Represents the entity set used as a global filter
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

The entity set `self` is refreshed automatically when users return to the overview page.

In SAP Fiori elements for OData V4, the global filter rendered using the `FilterBar` building block, while in SAP Fiori elements for OData V2, the global filter is rendered using the `ap.ui.comp.smartfilterbar.SmartFilterBar` control.

Please note that, as opposed to other floorplans for SAP Fiori elements for OData V4, the overview page uses smart controls.

**Related Information**  


[Configuring the Manifest for the Overview Page](configuring-the-manifest-for-the-overview-page-f194b41.md "You can use the manifest.json file to initialize an overview page application.")

[Configuring the Global Filter on the Overview Page](configuring-the-global-filter-on-the-overview-page-73d9693.md "You can configure the global filter to allow users to filter the data displayed on one or more cards.")

[Configuring Dependencies to SAPUI5 Libraries](configuring-dependencies-to-sapui5-libraries-ef5f16b.md "You can define dependencies to SAPUI5 libraries required by your app. Defining dependencies allow the framework to preload libraries efficiently, which can improve the loading time of the app.")

[The FilterBar Building Block](the-filterbar-building-block-7838611.md "You can user the FilterBar building block to add a filter bar to your application in SAP Fiori elements for OData V4.")

[Smart Filter Bar](../10_More_About_Controls/smart-filter-bar-7bcdffc.md "The sap.ui.comp.smartfilterbar.SmartFilterBar control analyzes the $metadata document of an OData service and renders a FilterBar control that can be used to filter, for example, a table or a chart.")

