<!-- loio91f1f4536f4d1014b6dd926db0e91070 -->

# Standard Variant for Bootstrapping

The standard variant for bootstrapping loads all JavaScript modules of a library in advance with one single request for performance reasons.

The library preload file `library-preload.js` contains all modules of a certain library. These modules will only be executed on demand, if the application requires them. Using preloads significantly reduces the number of roundtrips since the single modules are bundled in one file.

> ### Note:  
> An application must **not** reference the `library-preload.js`. If preload files exist, SAPUI5 automatically loads them. The dependencies to libraries are defined as part of the manifest namespace `sap.ui5/dependencies/libs`. For further information, see [Descriptor for Applications, Components, and Libraries \(manifest.json\)](descriptor-for-applications-components-and-libraries-manifest-json-be0cf40.md).

By setting the `async=true` configuration parameter, the module loader loads the modules and preload files asynchronously. You can enable it in an existing application by specifying the `sap-ui-async` configuration parameter in the start URL, or by adding the `data-sap-ui-async` attribute to the bootstrap tag:

```html
<script
    id="sap-ui-bootstrap"
    src="resources/sap-ui-core.js"
    data-sap-ui-theme="sap_horizon"
    data-sap-ui-async="true"
    data-sap-ui-on-init="module:my/app/main"
    data-sap-ui-resource-roots='{"my.app": "./"}'
></script>
```

> ### Note:  
> Before you use the `async` configuration parameter, make sure your app is ready for asynchronous loading, see [Best Practices for Loading Modules](best-practices-for-loading-modules-00737d6.md) and [Is Your Application Ready for Asynchronous Loading?](../03_Get-Started/is-your-application-ready-for-asynchronous-loading-493a15a.md).

**Related Information**  


[noJQuery Variant for Bootstrapping](nojquery-variant-for-bootstrapping-91f1dd0.md "The noJQuery variant supports bootstrapping for an application that already integrates jQuery or uses a different jQuery version than SAPUI5.")

[Configuration of the SAPUI5 Runtime](configuration-of-the-sapui5-runtime-91f08de.md "SAPUI5 provides several options for the configuration of the SAPUI5 runtime. The possible ways to provide input for the available configuration options are described in detail.")

[Is Your Application Ready for Asynchronous Loading?](../03_Get-Started/is-your-application-ready-for-asynchronous-loading-493a15a.md "Find a collection of information that helps you to find out if your application is ready for asynchronous loading.")

