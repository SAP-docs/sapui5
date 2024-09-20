<!-- loio676b636446c94eada183b1218a824717 -->

# Use Asynchronous Loading

Asynchronous loading is the way to go: It makes your applications a lot faster and, through that, better to use.

As SAPUI5 is evolving, the loading processes in the background were significantly improved. To get the best out of these changes in the core and to speed up your app, we recommend that you switch on asynchronous loading. With asynchronous loading, files are retrieved in parallel. This is much quicker than synchronous loading, where files are retrieved sequentially. You have several options to do that:



<a name="loio676b636446c94eada183b1218a824717__section_EALB"/>

## Enable Asynchronous Loading in the Bootstrap

Add the bootstrapping tag `data-sap-ui-async="true"` to your `index.html` file. It enables the runtime to load all the modules and preload files for declared libraries asynchronously if an asynchronous API is used.

```html
<script 
	id="sap-ui-bootstrap"
	src="/resources/sap-ui-core.js"
	data-sap-ui-theme="sap_horizon"
	data-sap-ui-compat-version="edge"
	data-sap-ui-async="true"
	data-sap-ui-on-init="module:my/app/main"
	data-sap-ui-resource-roots='{"my.app": "./"}'
>
```

Setting `async=true` leverages the browser's capabilities to execute multiple requests in parallel, without blocking the UI. The attribute `data-sap-ui-on-init` defines the module `my.app.Main`, which will be loaded initially.

> ### Note:  
> Configuration of the bootstrap can only be done for standalone applications and when the bootstrap is under control of the developer. The bootstrap of applications from a Fiori launchpad is managed by the launchpad.

> ### Note:  
> The `data-sap-ui-async="true"` configuration option requires extensive testing as well as cooperation on the application side to ensure a stable and fully working application. It is, therefore, **not** activated automatically, but needs to be configured accordingly. If you encounter issues or want to prepare your application for asynchronous loading, see [Is Your Application Ready for Asynchronous Loading?](is-your-application-ready-for-asynchronous-loading-493a15a.md) The bootstrap attribute `data-sap-ui-async="true"` affects both modules **and** preload files.

If you listen to the `init` event as part of your `index.html` page, make sure that you implement the asynchronous behavior also here, as shown in the following code snippet:

```html
<script>
    sap.ui.require([
        "sap/ui/core/ComponentContainer",
        "sap/ui/core/Core"
    ], function(ComponentContainer, Core) {
        Core.ready().then( () => {
            new ComponentContainer({
                name: "your.component",
                async: true,
                height: "100%",
                manifest: true,
                componentCreated: function(oParams) {
                    var oComponent = oParams.getParameter("component");
                    // do something with the component instance
                }
            }).placeAt("content");
        });
    });
</script>
```

> ### Note:  
> Please note that this variant with inline scripting is not CSP-compliant. It is better to create a module with `sap.ui.define` which contains the startup code and load it via `data-sap-ui-on-init="module:my/app/main"` \( this usually also requires a declaration of `data-sap-ui-resource-roots`, e.g.: `data-sap-ui-resource-roots='{"my.app": "./"}` \).

> ### Note:  
> Applications without a descriptor file can declare additional dependencies explicitly via the bootstrap parameter `data-sap-ui-libs`. If those dependencies are not listed, such as transitive dependencies that are inherited from a listed library, SAPUI5 will load them automatically, but then has to first read the configured libraries and find out about these dependencies. This can take time as the application might benefit less from parallel loading.

**Additional Information:**

-   For more information about bootstrap attributes, see [Bootstrapping: Loading and Initializing](../04_Essentials/bootstrapping-loading-and-initializing-a04b0d1.md)
-   Walkthrough tutorial, [Step 2: Bootstrap](step-2-bootstrap-fe12df2.md)
-   [Standard Variant for Bootstrapping](../04_Essentials/standard-variant-for-bootstrapping-91f1f45.md)
-   [Best Practices for Asynchronous Loading in UI5](https://blogs.sap.com/2018/12/18/ui5ers-buzz-41-best-practices-for-async-loading-in-ui5/)



<a name="loio676b636446c94eada183b1218a824717__section_RootViewRoutingConfiguration"/>

## Ensure that Root View and Routing are Configured to Load Targets Asynchronously

Please check the `rootView` of the application's `manifest.json` file for an `async=true` parameter. This allows the root view to be loaded asynchronously.

To configure the targets for asynchronous loading, please also check the [Routing Configuration](../04_Essentials/routing-configuration-9023130.md) for the `async=true` parameter.

```json
"sap.ui5": {
	"rootView": {
        "viewName": "my.app.view.App",
        "type": "XML",
        "id": "app",
         "async": true
    },
    "routing": {
        "config": {
            "routerClass": "sap.m.routing.Router",
            "viewType": "XML",
            "path": "my.app.view",
            "controlId": "app",
            "controlAggregation": "pages",
            "async": true
        }
    },
...
```

**Additional Information:**

-   Set the rootView and routing to async via [`sap.ui.core.IAsyncContentCreation`](https://ui5.sap.com/#/api/sap.ui.core.IAsyncContentCreation)



<a name="loio676b636446c94eada183b1218a824717__section_AsyncInterface"/>

## Make Use of the `sap.ui.core.IAsyncContentCreation` Interface

The [`sap.ui.core.IAsyncContentCreation`](https://ui5.sap.com/#/api/sap.ui.core.IAsyncContentCreation) interface allows a subclass of `sap.ui.core.UIComponent` to be created fully asynchronously. Implementing this interface sets the component's `rootView` and router configuration implicitly to `async: true`. Nested views will then also be handled asynchronously.

> ### Note:  
> For nested components \(via `sap.ui.core.ComponentContainer`\) the asynchronous behaviour will not be propagated per default.

The following code shows a sample UIComponent implementing the interface:

```js
sap.ui.define(["sap/ui/core/UIComponent"], function(UIComponent) {
	return UIComponent.extend("my.app.Component", {
		metadata: {
			interfaces: ["sap.ui.core.IAsyncContentCreation"],
			manifest: "json"
		}
	});
});
```

For more information on how `sap.ui.core.IAsyncContentCreation` affects the component's content creation, see [Methods Controlling the Initial Instantiation](../04_Essentials/methods-controlling-the-initial-instantiation-b430345.md).

**Additional Information:**

-   Walkthrough tutorial, [Step 10: Descriptor for Applications](step-10-descriptor-for-applications-8f93bf2.md)



<a name="loio676b636446c94eada183b1218a824717__section_AsyncModuleLoading"/>

## Make Use of Asynchronous Module Loading \(AMD Style\)

If modules follow the Asynchronous Module Definition \(AMD\) standard and the bootstrap flag `data-sap-ui-async` is set to `true`, custom scripts and other modules can also be loaded asynchronously when a preload is not available. It will help you in the future to enable asynchronous loading of individual modules combined with the usage of HTTP/2 or AMD-based module bundlers. It also ensures proper dependency tracking between modules.

But it isn't enough to write AMD modules. You also need to prevent access to SAPUI5 classes via global names. For instance, do not use global namespaces like `new sap.m.Button()` but require the `Button` and call its constructor via the local AMD reference instead.

For more information, see the [API Reference: `sap.ui.define`](https://ui5.sap.com/#/api/sap.ui/methods/sap.ui.define). 

Always avoid usages of `jQuery.sap.require` ! In order to enable modules to load asynchronously, use `sap.ui.define` to create modules \(e.g. controllers or components\) or `sap.ui.require` in other cases.

Please follow the [Best Practices for Loading Modules](../04_Essentials/best-practices-for-loading-modules-00737d6.md).

