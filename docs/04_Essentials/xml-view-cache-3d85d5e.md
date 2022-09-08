<!-- loio3d85d5eec1594be0a71236d5e61f89aa -->

# XML View Cache

To be able to speed up processing times of XML views that make heavy use of the preprocessor feature, you can use the view cache to store its processed XML source. Then according network requests for the source and all preprocessor runs that modify the XML source are skipped and the source is taken from the cache.

To make sure that the cache always contains the latest view data, the cache has to be invalidated whenever the data changes that is needed for preprocessing. When the cache is invalidated, all resources are processed again and the cache gets filled with new data.

> ### Caution:  
> Parts of this feature are currently still experimental. For more information, see [API Reference: `sap.ui.xmlview`](https://ui5.sap.com/#/api/sap.ui/methods/sap.ui.xmlview). 

The following data changes are handled automatically by SAPUI5:

-   SAPUI5 version changes

-   Descriptor file \(`manifest.json`\)

-   Locale \(for each locale one cached resource is being created\)


> ### Note:  
> For each additional component that may have an influence on the preprocessing results of the view source, like OData metadata, you have to implement the invalidation by adding additional keys to the cache configuration.



## Prerequisites

This feature is only enabled for the following browsers:

-   Google Chrome as of Version 49 for desktop

-   Google Chrome as of Version 80 for Android phone/tablet
-   Microsoft Edge \(Chromium\) for desktop
-   Mozilla Firefox as of Version 74 for Microsoft Windows desktop
-   Safari as of Version 13 for desktop
-   Safari as of Version 13 for iOS phone/tablet

The XML view has to be loaded asynchronously.



## Cache Configuration

If you want to keep things simple, you can use the following cache configuration:

```xml
var sCalculatedCacheKey = oKeyProvider.getCacheKey();

sap.ui.require("sap/ui/core/mvc/XMLView", function (XMLView) {
	XMLView.create({
		id: "cacheableView",
		viewName: "my.cacheableView",
		cache: {
			// one key is mandatory
			keys:[sCalculatedCacheKey]
		}
	}).then(function (oXmlView) {
		// ...
	});
});
```

If you want to pass on multiple keys, for example strings or promises that resolve with a string, you use the following syntax:

```xml
var pCalculatedCacheKey = oKeyProvider1.getCacheKeyPromise();
var sAnotherKey = oKeyProvider2.getCacheKey();

sap.ui.require("sap/ui/core/mvc/XMLView", function (XMLView) {
	XMLView.create({
		id: "cacheableView",
		viewName: "my.cacheableView",
		cache: {
			keys: [
			// several key providers, at least one
			pCalculatedCacheKeyPromise,
			sAnotherKey
			]
		}
	}).then(function (oXmlView) {
		// ...
	});
});
```



<a name="loio3d85d5eec1594be0a71236d5e61f89aa__ViewCache_Preprocessor"/>

## Preprocessor Integration

If you want to implement a preprocessor that has influence on the creation of views, for example, by changing the XML code, you can use function `getCacheKey`. With this function, the view can find out whether the preprocessor triggers changes that invalidate the cache. The function returns a cache key or a promise that resolves a cache key. For more information, see [API Reference: `sap.ui.core.mvc.View.Preprocessor`](https://ui5.sap.com/#/api/sap.ui.core.mvc.View.Preprocessor). 

```xml
// Example preprocessor implementation
sap.ui.define(['sap/ui/base/Object'],
	function(BaseObject) {
		'use strict';

		var TestPreprocessor = BaseObject.extend("smy.TestPreprocessor", {});

		TestPreprocessor.process = function(vSource, sCaller, mSettings) {
			return doSomething(vSource));
		};

		TestPreprocessor.getCacheKey = function(oViewInfo) {
			return sCacheKey;
		};

		return TestPreprocessor;

	}, /* bExport= */ true);
```

**Related Information**  


[API Reference: `sap.ui.xmlview`](https://ui5.sap.com/#/api/sap.ui/methods/sap.ui.xmlview)

[Preprocessing XML Views](preprocessing-xml-views-48b81b9.md "Applying preprocessing to views enables you to use features like XML templating. This feature is currently only enabled for XML views. On an abstract level, preprocessing means that a view can be modified during runtime before it is rendered. This makes it possible to use the templating syntax, as it is interpreted by the preprocessor. It also makes it possible to apply user customization.")

