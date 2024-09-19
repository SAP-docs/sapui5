<!-- loio9c6400eb7dc145b78e94a81e6e390780 -->

# Performance Checklist

Follow these steps to apply performance best practices to your application.

In addition to applying best practices, always stay up to date with the framework, for instance via the SAPUI5 [Release Notes](https://ui5.sap.com/#/releasenotes.html) and the [What's New in SAPUI5](../01_Whats-New/what-s-new-in-sapui5-99ac68a.md).

1.  [Use the UI5 Support Assistant to Check for Known Issues](../04_Essentials/support-assistant-57ccd7d.md)
2.  [Enable Asynchronous Loading in the Bootstrap](use-asynchronous-loading-676b636.md#loio676b636446c94eada183b1218a824717__section_EALB)
3.  [Make Use of the `sap.ui.core.IAsyncContentCreation` Interface](use-asynchronous-loading-676b636.md#loio676b636446c94eada183b1218a824717__section_AsyncInterface)or [Ensure the Root View and Routing are Configured to Load Targets Asynchronously](use-asynchronous-loading-676b636.md#loio676b636446c94eada183b1218a824717__section_RootViewRoutingConfiguration)
4.  [Make Use of Asynchronous Module Loading \(AMD Style\)](use-asynchronous-loading-676b636.md#loio676b636446c94eada183b1218a824717__section_AsyncModuleLoading)
5.  [Use `manifest.json` instead of the Bootstrap to define Dependencies](../05_Developing_Apps/performance-speed-up-your-app-408b40e.md#loio408b40efed3c416681e1bd8cdd8910d4__section_ManifestJson)
6.  [Load SAPUI5 from the Content Delivery Network \(CDN\)](../05_Developing_Apps/performance-speed-up-your-app-408b40e.md#loio408b40efed3c416681e1bd8cdd8910d4__section_LoadFromCDN)
7.  [Ensure that all Resources are Properly Configured to Avoid 404 Errors](../05_Developing_Apps/performance-speed-up-your-app-408b40e.md#loio408b40efed3c416681e1bd8cdd8910d4__section_Resources404)
8.  [Use "manifest first" to load the Component](../05_Developing_Apps/performance-speed-up-your-app-408b40e.md#loio408b40efed3c416681e1bd8cdd8910d4__section_ManifestFirst)
9.  [Ensure that Library Preloads are Enabled](../05_Developing_Apps/performance-speed-up-your-app-408b40e.md#loio408b40efed3c416681e1bd8cdd8910d4__section_LibraryPreloads)
10. [Ensure that Application Resources are Loaded as Component Preload](../05_Developing_Apps/performance-speed-up-your-app-408b40e.md#loio408b40efed3c416681e1bd8cdd8910d4__section_ComponentPreload)
11. [Check Network Requests](../05_Developing_Apps/performance-speed-up-your-app-408b40e.md#loio408b40efed3c416681e1bd8cdd8910d4__section_NetworkRequests)
12. [Migrate `jquery.sap.*` Modules to their Modularised Variants](../05_Developing_Apps/performance-speed-up-your-app-408b40e.md#loio408b40efed3c416681e1bd8cdd8910d4__section_MigrateJquery)
13. [Migrate Synchronous Variants of UI5 Factories to Asynchronous Variants](../05_Developing_Apps/performance-speed-up-your-app-408b40e.md#loio408b40efed3c416681e1bd8cdd8910d4__section_MigrateFactories)
14. [Use the OData V2 Model Preload](../05_Developing_Apps/performance-speed-up-your-app-408b40e.md#loio408b40efed3c416681e1bd8cdd8910d4__section_ModelPreload) 
15. [Use OData Metadata Caching](../05_Developing_Apps/performance-speed-up-your-app-408b40e.md#loio408b40efed3c416681e1bd8cdd8910d4__section_MetadataCaching)
16. [Use a `$select` Query when Binding an Aggregation](../05_Developing_Apps/performance-speed-up-your-app-408b40e.md#loio408b40efed3c416681e1bd8cdd8910d4__section_useSelectQuery)
17. [Limit the Loading of Data over the Network](../05_Developing_Apps/performance-issues-966d67c.md#loio966d67c8cc5046419d1b35556cd9e447__section_LLAOD)
18. [Check Lists and Tables](../05_Developing_Apps/performance-speed-up-your-app-408b40e.md#loio408b40efed3c416681e1bd8cdd8910d4__section_ListsTables)
19. [Further Optimize your Code](../05_Developing_Apps/performance-speed-up-your-app-408b40e.md#loio408b40efed3c416681e1bd8cdd8910d4__section_OptimizeCode)

