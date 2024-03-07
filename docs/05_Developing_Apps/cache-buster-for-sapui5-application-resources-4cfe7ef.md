<!-- loio4cfe7eff3001447a9d4b0abeaba95166 -->

# Cache Buster for SAPUI5 Application Resources

To avoid the need for end users to clean up the browser cache after a software update on the server, you can activate the cache buster for the following:

-   SAPUI5 application resources \(see [Application Cache Buster](../04_Essentials/application-cache-buster-ff7aced.md)\)

-   SAPUI5 core resources \(see [Cache Buster for SAPUI5](../04_Essentials/cache-buster-for-sapui5-91f0809.md)\)


To activate cache busting on the level of single application resources and cache busting for SAPUI5 core resources, change the script tag with the ID `sap-ui-bootstrap` in the start page of the underlying SAPUI5 app:

-   Change the value of the `src` attribute pointing to the SAPUI5 core to `resources/sap-ui-cachebuster/sap-ui-core.js`.

-   Add the attribute `data-sap-ui-appCacheBuster="./"`.


Example \(snippet from the sample app `/UI5/SIMPLETEST`\):

```html

<html>
  <head>
    <script src="resources/sap-ui-cachebuster/sap-ui-core.js"
      id="sap-ui-bootstrap"
      data-sap-ui-libs="sap.m"
      data-sap-ui-theme="sap_horizon"
      data-sap-ui-appCachebuster="./">
    </script>
  …
</html>
```

For more information, see [Application Cache Buster: Enhanced Concept](../04_Essentials/application-cache-buster-enhanced-concept-94e0c33.md).

Both the ICM server cache on the ABAP front-end server as well as the browser cache are used to optimize the performance of your SAPUI5 app. The cache buster mechanisms ensure that all application and core resources are up to date at any time and are requested only if needed.

**Further Technical Information**

-   For proper operation you need to schedule the report `/UI5/APP_INDEX_CALCULATE` \(replacing the report `/UI5/UPDATE_CACHEBUSTER` used in the user interface add-on 1.0 for SAP NetWeaver\) periodically. Then the recalculation and caching of meta data for SAPUI5 apps potentially needed after any system and language import for an SAPUI5 app are done automatically in the background.

-   Under typical conditions, for example when using SAPUI5 apps or when developing with the SAPUI5 repository team provider or the SAPUI5 repository upload and download reports, the application cache buster and the cache buster of the SAPUI5 core work fully automatically.

-   You can trigger a refresh of the cache buster and application meta data for a specific SAPUI5 repository \(and the application or component inside\) manually by calling the URL `<URL to SAPUI5 application or component>/do-update-meta-data` in the browser. See SAP Note 2187043.

-   In addition to cache busting on the level of a single application resource mentioned above, the cache buster for SAPUI5 application resources supports also cache busting on the level of multiple and all application resources.

-   The cache buster technology is used by SAP Fiori launchpad, and SAP Fiori and High Performance Analytic \(HPA\) apps.

-   Fore more information, see SAP Notes 2075016 and 2085648.

