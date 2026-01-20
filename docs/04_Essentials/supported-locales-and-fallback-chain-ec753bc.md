<!-- loioec753bc539d748f689e3ac814e129563 -->

# Supported Locales and Fallback Chain

You can configure a list of supported locales and a fallback locale in your app's manifest to control the loading of resource bundles and avoid '404 Not Found' network responses.

> ### Note:  
> 1.  [UI5 CLI](https://ui5.github.io/cli/stable/) v4 and higher is capable of automatically adding supported locales to the manifest based on the available properties files. Detailed information and requirements can be found in [UI5 Builder - Generation of Supported Locales](https://ui5.github.io/cli/stable/pages/Builder/#generation-of-supported-locales).
> 
> 2.  Available properties files for a resource bundle and the locales you specify in `supportedLocales` need to be in sync. Missing properties files result in 404 responses by the server.
> 
> 3.  More severely, a missing entry in `supportedLocales` leads to a language fallback, even if the texts for the corresponding language are available.
> 
> 4.  Only use the `supportedLocales` feature if you are in control of maintaining the properties files for resource bundles within the same project or know the full list of supported locales. If the complete list of supported locales is not known, make sure to set the `supportedLocales` entry in the manifest to an empty list \(`[]`\) to indicate that all locales are supported. This prevents UI5 CLI from adding a list of supported locales based on the available properties files. For more information, see [UI5 Builder - Generation of Supported Locales](https://ui5.github.io/cli/stable/pages/Builder/#generation-of-supported-locales).
> 
> 5.  The language tags can use modern or legacy ISO639 language codes. Whatever language code is used in the list of `supportedLocales` will also be used when requesting a file from the server. If the locale contains a legacy language code like "iw" and the `supportedLocales` contains \[...,"he",...\], "he" will be used in the URL. This mapping works in both directions.



<a name="loioec753bc539d748f689e3ac814e129563__section_xqx_s3f_wqb"/>

## Introduction

When developing apps and working with resource bundles for internationalization \(i18n\), you might run into the following problems:

-   '404 Not Found' responses in the network trace, for example for a request to `myapp/i18n_de_DE.properties` when the client's locale is `"de_DE"`, because there is no translation file for this locale.
-   Resource bundle requests for language `"en"`, such as for e.g. `myapp/i18n_en.properties`, although the client's locale is not set to English.

These issues occur most often when a text translated for the user's locale cannot be found in the resource bundle. The resource bundle then tries to load all potential locale-specific translation files using synchronous requests. This not only looks bad when checking the network trace but also comes at a price of poor performance and unwanted network traffic. Since SAPUI5 1.77 you can avoid this by providing the `supportedLocales` and `fallbackLocale` configuration in your app's manifest. This enables the client to know in advance which language bundles to request.



<a name="loioec753bc539d748f689e3ac814e129563__section_FallbackChain"/>

## Fallback Chain and Fallback Locale

> ### Note:  
> A locale can be either a BCP47 language tag or a JDK-compatible locale string \(e.g. `"en-GB"`, `"en_GB"`, or `"en"`\).

A fallback chain determines the locale-specific resource bundle file to load. It is used for loading resource bundles initially, and when a translation key cannot be found in the already loaded resource bundle.

Part of this fallback chain is your configured `fallbackLocale`, which defaults to `"en"`.

The fallback chain produces locale candidates according to the following directives:

1.  Determine the input language, for example `"de_DE"`. For more information, see [Identifying the Language Code / Locale](identifying-the-language-code-locale-91f21f1.md).

2.  Remove the region suffix from the locale code, e.g. `"de_DE"` -\> `"de"`.

3.  Use your configured `fallbackLocale`, e.g. `"en"` \(defaults to `"en"`\).

4.  Use the raw bundle, that is `""`.


Each directive produces a locale candidate, which is then used to create a request. For example, `"de_DE"` is used to create a request for a `i18n/i18n_de_DE.properties` file.

The directives are executed in order until a resource bundle is loaded \(successful request\). The raw bundle `""` means that no locale is appended to the requested file. For example, it may be called `i18n/i18n.properties`.

**Sample fallback chain:**

```html
input locale: "de_DE"
fallbackLocale: "en"

fallback chain: "de_DE" -> "de" -> "en" -> ""
```

> ### Note:  
> To skip the default fallback locale, you can configure the empty string `""` as your `fallbackLocale`.
> 
> If specified, the `fallbackLocale` must be present in your list of `supportedLocales` \(see next section\).



<a name="loioec753bc539d748f689e3ac814e129563__section_SupportedLocales"/>

## Supported Locales

Locale candidates obtained from the fallback chain are filtered using your entries in `supportedLocales`. In this way, only resource bundles for configured locales are requested. If this list is empty or not specified, **all** locales are supported.

**Sample:**

```html
input locale: "de_DE"
fallbackLocale: "en"

fallback chain: "de_DE" -> "de" -> "en" -> ""

supportedLocales: ["de", "fr", "en"]
```

For the given input locale and fallback chain only bundle files for `"de"` and `"en"` are requested at most, because the list of `supportedLocales` contains them. `"fr"` is not part of the fallback chain, so although supported, it won't be requested. If the requested text can be found in `"de"`, then `"en"` will not be requested.

As of manifest version `1.21.0` the `sap.app/i18n` section can hold an object containing `bundleUrl`, `supportedLocales` and `fallbackLocale`. This corresponds to the `ResourceModel` configuration.

**Sample configuration in the manifest.json:**

```json
{
	"_version": "1.21.0",
	"sap.app": {
		"id": "sap.ui.demo.todo",
		"type": "application",
		"i18n": {
			"bundleUrl": "i18n/i18n.properties",
			"supportedLocales": ["en", "de"],
			"fallbackLocale": "en"
		},
		"title": "{{appTitle}}",
		...
	},
	"sap.ui5": {
		"models": {
			"i18n": {
				"type": "sap.ui.model.resource.ResourceModel",
				"settings": {
					"bundleUrl": "i18n/i18n.properties",
					"supportedLocales": ["en", "de"],
					"fallbackLocale": "en"
				}
			}
		},
		...	
	}
}
```

What is loaded with this configuration:

-   input locale `"de_DE"` will load `i18n_de.properties`
-   input locale `"en_US"` will load `i18n_en.properties`
-   input locale `"fr_FR"` will load `i18n_en.properties`

In this sample the locales `"de"` and `"en"` are supported. This means that you must provide the following two resource bundle files:

-   `myapp/i18n/i18n_de.properties`

-   `myapp/i18n/i18n_en.properties`


