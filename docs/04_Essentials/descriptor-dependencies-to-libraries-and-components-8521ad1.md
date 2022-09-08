<!-- loio8521ad1955f340f9a6207d615c88d7fd -->

# Descriptor Dependencies to Libraries and Components

Description of the performance-relevant attributes that are available for the descriptor for applications, components and libraries

The performance-relevant attributes have been introduced with the version 3 of the descriptor for applications, components, and libraries.



## Dependencies to Libraries

The following dependencies to libraries can be implemented:

-   To benefit from the asynchronous library preload, add the mandatory libraries to `sap.ui5/dependencies/libs`.

-   To expose the necessary dependencies for offline packages for mobile devices, add optional libraries to `sap.ui5/dependencies/libs` and flag them as `lazy`.


For **applications and components**, modify the `manifest.json` as follows:

```
"sap.ui5": {
    ...
    "dependencies": {
      ...
      "libs": {
        "sap.m": {},
        "sap.suite.ui.commons": {
          "lazy": true
        }
      }
      ...
    },
    ...

```

For **libraries**, modify the `.library` file as shown in the follown code sample. This file is available because the `manifest.json` for libraries is generated based on this metadata.

```
<dependencies>
    <dependency>
       <libraryName>sap.m</libraryName>
    </dependency>
    <dependency>
       <libraryName>sap.suite.ui.commons</libraryName>
       <lazy>true</lazy>
    </dependency>
    ...
```

In a second step, modify the `library.js` file as follows:

```
sap.ui.getCore().initLibrary({
   ...
   dependencies : ["sap.ui.core","sap.m"], // lazy libs are not declared here
```

> ### Note:  
> In all cases, the lazy libraries need to be loaded manually in the application or library via the `loadLibrary` API:
> 
> ```
> // lazy lib loaded synchronously (avoid if possible!)
> sap.ui.getCore().loadLibrary("sap.suite.ui.commons");
> 
> // lazy lib loaded asynchronously (the preferred way!)
> sap.ui.getCore().loadLibrary("sap.suite.ui.commons", { async: true }).then(...);
> ```

> ### Tip:  
> Execute the `loadLibrary` before any resource of the library is required to preload the complete library instead of loading each resource individually.
> 
> Always use the async API as this is the preferred and performant way. Only use the sync API as an exception if your coding relies on synchronous loading.



<a name="loio8521ad1955f340f9a6207d615c88d7fd__section_qkj_sdf_3mb"/>

## Dependencies to Components

**Scenario 1:** UI library contains multiple components

In this scenario, the library is the leading container and **no** component preload is available. This means, that you maintain the library dependency as described above. This is true for all kinds of component dependencies, also for `sap.ui5/extends/component`. If the extended component originates in a library, do **not** use `sap.ui5.extends/component`, but only declare the library dependency. Otherwise, the component dependency causes a 404 request.

For loading lazy components inside a library, proceed with the library mechanisms as described above:

```
// lazy lib loaded synchronously (avoid if possible!)
sap.ui.getCore().loadLibrary("sap.suite.ui.commons");

// lazy lib loaded asynchronously (the preferred way!!!)
sap.ui.getCore().loadLibrary("sap.suite.ui.commons", { async: true }).then(...);
```

**Scenario 2:** Standalone component

In this scenario, you only need to maintain a dependency to the component via the `sap.ui5/componentUsages` section of your component's`manifest.json` file. You have two ways to configure reuse components:

-   Add the **mandatory** components to `sap.ui5/componentUsages`. The declared components will be preloaded asynchronously by default.

-   Add the **optional** components to `sap.ui5/componentUsages` **and** flag them as `lazy`. They will not be preloaded, but can still be loaded and instantiated at a later time.


For applications and components, modify the `manifest.json` as follows:

```json
"sap.ui5": {
	...
	"componentUsages": {
		"myReuseComponent": {
			"name": "sap.reuse.component",
			"lazy": true
		}
	},
	...
}
```

For loading and instantiating \(lazy\) standalone components, use the `createComponent` factory function provided on instances of the `sap.ui.core.Component` class:

```js
// this = an instance of sap.ui.core.Component

// Asynchronously (default) creates a new component instance.
// The given name parameter has to correspond to an entry in the "sap.ui5/componentUsages" section of the manifest.json.

var oReuseComponentPromise = this.createComponent("myReuseComponent");


```

The full list of options for the `createComponent` factory method can be found in the [API Reference](https://ui5.sap.com/#/api/sap.ui.core.Component%23methods/createComponent). 



### Nested components

As of Version 1.56 it is sufficient to declare the `sap.ui5/componentUsages` and indicate whether the component should be loaded lazily or not. The declaration of the component as a separate dependency is not recommended and should be avoided in this case.

For more information, see: [Using and Nesting Components](using-and-nesting-components-346599f.md) and [Enabling Routing in Nested Components](enabling-routing-in-nested-components-fb19f50.md). These section include information how to migrate your component declarations from the old `sap.ui5/dependencies/components` section to the modern `sap.ui5/componentUsages` section of your `manifest.json` and enable routing in nested components.

**Related Information**  


[Using and Nesting Components](using-and-nesting-components-346599f.md "You can use a ComponentContainer to wrap a UIComponent and reuse it anywhere within the SAPUI5 control tree. With the ComponentContainer you can nest components inside other components.")

[API Reference: `loadLibrary`](https://ui5.sap.com/#/api/sap.ui.core.Core%23methods/loadLibrary)

[API Reference: `sap.ui.core.Component`](https://ui5.sap.com/#/api/sap.ui.core.Component)

