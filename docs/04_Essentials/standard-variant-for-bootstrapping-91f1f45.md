<!-- loio91f1f4536f4d1014b6dd926db0e91070 -->

# Standard Variant for Bootstrapping

The standard variant for bootstrapping loads all JavaScript modules of a library in advance with one single request for performance reasons.

The library preload file `library-preload.js` contains all modules of a certain library. These modules will only be executed on demand, if the application requires them. Using preloads significantly reduces the number of roundtrips since the single modules are bundled in one file.

> ### Note:  
> An application must **not** reference the `library-preload.js`. If preload files exist, SAPUI5 automatically loads them. The dependencies to libraries are defined as part of the manifest namespace `sap.ui5/dependencies/libs`. For further information, see [Descriptor for Applications, Components, and Libraries \(manifest.json\)](descriptor-for-applications-components-and-libraries-manifest-json-be0cf40.md).



<a name="loio91f1f4536f4d1014b6dd926db0e91070__section_ob3_llh_1gb"/>

## Option 1 \(Recommended\)

By setting the `async=true` configuration parameter, the module loader loads the modules and preload files asynchronously. You can enable it in an existing application by specifying the `sap-ui-async` configuration parameter in the start URL, or by adding the `data-sap-ui-async` attribute to the bootstrap tag:

```html
<script
    id="sap-ui-bootstrap"
    src="resources/sap-ui-core.js"
    data-sap-ui-theme="sap_belize"
    data-sap-ui-async="true"
    data-sap-ui-onInit="module:my/app/main"
    data-sap-ui-resourceRoots='{"my.app": "./"}'
></script>
```

> ### Note:  
> Before you use the `async` configuration parameter, make sure your app is ready for asynchronous loading, see [Best Practices for Loading Modules](best-practices-for-loading-modules-00737d6.md) and [Is Your Application Ready for Asynchronous Loading?](../03_Get-Started/is-your-application-ready-for-asynchronous-loading-493a15a.md).



<a name="loio91f1f4536f4d1014b6dd926db0e91070__section_ypn_xlh_1gb"/>

## Option 2

Alternatively, you can influence the loading behavior of the preload files without affecting other single modules by setting the `preload` configuration parameter to one of the following values:

-   `async` \(recommended\)

    If you set the `preload` configuration option to `async`, the runtime loads the modules for all declared libraries asynchronously. Thus, for any code that follows the SAPUI5 bootstrap tag, the framework cannot make sure that the classes are already available. Therefore, the application must delay the access to the SAPUI5 APIs by using the `Core.attachInitEvent` method. SAPUI5 supports the `async` mode only for libraries that are loaded by the SAPUI5 core. Libraries that are loaded dynamically by using the `sap.ui.getCore().loadLibrary()` API will be loaded synchronously by default for compatibility reasons. Only when a configuration object with a property of `async:true` is passed, the bundle is loaded asynchronously.

-   `sync`

    If you set the `preload` configuration parameter to `sync`, the runtime loads the modules for all declared libraries synchronously. After processing the bootstrap tag, all preload files of all libraries are loaded and the libraries are initialized as usual. The `preload=sync` mode should be transparent for most applications.

-   `auto`

    The `preload=auto` configuration parameter is the default value. This mode checks whether SAPUI5 runtime uses optimized sources. If optimized sources are used, it enables the `preload=sync` option to further optimize the runtime. For normal or debug sources, the preload is deactivated.


You can easily check this with an existing application by specifying the `sap-ui-preload=<mode>` parameter in the start URL or by adding the `data-sap-ui-preload` attribute to the bootstrap tag:

```html
<script
    id="sap-ui-bootstrap"
    src="resources/sap-ui-core.js"
    data-sap-ui-theme="sap_belize"
    data-sap-ui-preload="async"
    data-sap-ui-onInit="module:my/app/main"
    data-sap-ui-resourceRoots='{"my.app": "./"}'
></script>
```

> ### Note:  
> Using the `async=true` or `preload=async` configuration parameters requires extensive testing and cooperation on application side to ensure a stable and fully working application. It is, therefore, not activated automatically, but only by configuration. If you encounter issues, or if you want to prepare your application in advance, see [Is Your Application Ready for Asynchronous Loading?](../03_Get-Started/is-your-application-ready-for-asynchronous-loading-493a15a.md).

> ### Note:  
> Preload sources are always optimized. However, using the `debug=true` configuration parameter always disables the loading of preload files.

> ### Note:  
> You can combine the `async` or `preload` configuration parameters with other bootstrap variants such as `sap-ui-core-noJQuery`.

**Related Information**  


[noJQuery Variant for Bootstrapping](nojquery-variant-for-bootstrapping-91f1dd0.md "The noJQuery variant supports bootstrapping for an application that already integrates jQuery or uses a different jQuery version than SAPUI5.")

[Configuration of the SAPUI5 Runtime](configuration-of-the-sapui5-runtime-91f08de.md "SAPUI5 provides several options for the configuration of the SAPUI5 runtime. The possible ways to provide input for the available configuration options are described in detail.")

[Is Your Application Ready for Asynchronous Loading?](../03_Get-Started/is-your-application-ready-for-asynchronous-loading-493a15a.md "Find a collection of information that helps you to find out if your application is ready for asynchronous loading.")

