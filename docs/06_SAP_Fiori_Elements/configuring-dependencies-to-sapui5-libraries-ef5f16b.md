<!-- loioef5f16bb7e024c9dbe1d514f1f202210 -->

# Configuring Dependencies to SAPUI5 Libraries

You can define dependencies to SAPUI5 libraries required by your app. Defining dependencies allow the framework to preload libraries efficiently, which can improve the loading time of the app.



Overview page applications depend on the `sap.ovp` SAPUI5 library, which provides the card framework, layout, and filter bar used in overview pages. This dependency is essential for the overview page app to initialize correctly.

You can define the dependencies in the `manifest.json` file of your app. For the full sample code, see [Configuring the Manifest for the Overview Page](configuring-the-manifest-for-the-overview-page-f194b41.md).

> ### Sample Code:  
> ```
> "sap.ui5": {
>     ...
>     "dependencies": {
>         "minUI5Version": "1.146.0", //Minimum version of the SAPUI5 framework required by your app.
>         "libs": { //Map of SAPUI5 libraries the app depends on.
>             "sap.ovp": {
>                 "minVersion": "1.32.0" //Minimum version of the specific library.
>             }
>         }
>     },
>     ...
> }
> ```

> ### Note:  
> The version numbers in the code samples are illustrative. Use the version that matches your runtime environment.

**Related Information**  


[Refresh Entity Sets in sap-keep-alive Mode in the Overview Pages](refresh-entity-sets-in-sap-keep-alive-mode-in-the-overview-pages-0c35c87.md "You can use the sap-keep-alive feature in SAP Fiori launchpad to preserve the view state of an overview page when users navigate away from it.")

[Configuring the Global Filter on the Overview Page](configuring-the-global-filter-on-the-overview-page-73d9693.md "You can configure the global filter to allow users to filter the data displayed on one or more cards.")

