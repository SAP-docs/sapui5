<!-- loio91f08de06f4d1014b6dd926db0e91070 -->

# Configuration of the SAPUI5 Runtime

SAPUI5 provides several options for the configuration of the SAPUI5 runtime. The possible ways to provide input for the available configuration options are described in detail.

> ### Note:  
> In earlier framework versions, the configuration options available in SAPUI5 could be found in the [API Reference via the `sap.ui.core.Configuration`](https://ui5.sap.com/#/api/sap.ui.core.Configuration). This legacy module has been deprecated with SAPUI5 1.120 and replaced by a modular, future-proof solution for configuration handling.

When the SAPUI5 bootstrap script is included in a page, the SAPUI5 runtime will automatically be initialized as soon as the script is loaded and executed by the browser. For simple use cases and for a default SAPUI5 installation, this should already be sufficient to build and run UI5 applications.The only configuration option you should specify is `data-sap-ui-compat-version="edge"` to run SAPUI5 with the latest feature set.

A typical bootstrap script looks like this:

```html
<script id="sap-ui-bootstrap"
            src="resources/sap-ui-core.js"
            data-sap-ui-compat-version="edge">
</script>
```

For more information see [Bootstrapping: Loading and Initializing](bootstrapping-loading-and-initializing-a04b0d1.md).

You can provide additional configuration information in the following ways:



<a name="loio91f08de06f4d1014b6dd926db0e91070__section_ACO"/>

## Available Configuration Options

UI5 supports different possibilities to provide values for the available configuration parameters. Options 2 to 7 require you to provide them before the application boots up. They are technically equivalent, however at runtime they will be evaluated in the order given below. The list below is therefore sorted in ascending order of precedence:

1.  Effective framework default values
2.  UI5-supported configuration options provided in `globalThis["sap-ui-config"]`
3.  **\[DEPRECATED\]** Server-wide defaults, read from `sap-ui-config.json`
4.  **\[DEPRECATED\]** A configuration string in the `data-sap-ui-config` attribute of the bootstrap tag
5.  Individual <code>data-sap-ui-&lt;<i>UI5-supported-config-option</i>&gt;</code> attributes of the bootstrap tag
6.  Individual <code>&lt;meta name="sap-ui-&lt;<i>UI5-supported-config-option</i>&gt;" content="&lt;<i>value</i>&gt;"&gt;</code> tags
7.  Individual <code>sap-ui-&lt;<i>UI5-supported-config-option</i>&gt;</code> URL parameters
8.  Specific APIs allowing a configuration change during runtime

Configuration options must be provided in kebab-case notation, i.e. as hyphenated names, starting with the `sap-ui` prefix, which serves to distinguish UI5 configuration options from options defined by others. If a configuration option is defined multiple times, the first match will be applied.

> ### Note:  
> The SAPUI5 configuration options now follow a consistent naming scheme based on kebab-case notation. Configuration options in older framework versions or code samples \(especially those from before SAPUI5 1.120\) may follow the former camelCase notation. Typically, you should now use \(or search for\) the newer names, e.g. `log-level` instead of `logLevel`.

> ### Note:  
> The `sap-ui` prefix must be omitted for options provided in `globalThis["sap-ui-config"]`. The options given there are prefixed with `sap-ui` implicitly.

As the configuration is evaluated during bootstrap, the configuration object must be created before SAPUI5 is bootstrapped; it cannot be evaluated otherwise. As a consequence, using the global configuration object requires another script tag referencing a file containing the configuration \(see the example in *\[2\] Global Configuration Object*\).

The comprehensive list of [Configuration Options and URL Parameters](configuration-options-and-url-parameters-91f2d03.md) has descriptions of each configuration option.



<a name="loio91f08de06f4d1014b6dd926db0e91070__section_z1g_zkg_plb"/>

## Setting Configuration Values



### \[1\] Effective default values

The easiest way to specify a configuration value is **not to specify** it. The SAPUI5 runtime contains a default value for each configuration option. As long as you don't have to change the value, simply don't specify it.

The effective default values can be found in the complete list of [Configuration Options and URL Parameters](configuration-options-and-url-parameters-91f2d03.md).



### \[2\] Global configuration object

The global configuration object is a property in the `globalThis` object with the property name `sap-ui-config`. The property must be a simple object, where each property represents the configuration option of the corresponding name.

As the `sap-ui-config` property is not a valid JavaScript identifier, it needs to be enclosed by quotes. The same applies for configuration properties specified in kebab case:

```
globalThis["sap-ui-config"].language = "en";
globalThis["sap-ui-config"]["animation-mode"] = "full";
```

Be careful with overwriting the config object, as others might have already provided some options:

```
// Be mindful of already existing configuration options
globalThis["sap-ui-config"] ??= {};
Object.assign(globalThis["sap-ui-config"], {
    language: "en",
    "animation-mode": "full"
});
```

The following code snippets show an example how to add a configuration before bootstrapping UI5:

> ### Example:  
> config.js
> 
> ```
> 
> globalThis["sap-ui-config"] ??= {}; // globalThis["sap-ui-config"] could be already available
> globalThis["sap-ui-config"]["compat-version"] = "edge";
> ```

> ### Example:  
> index.html
> 
> ```html
> <script src="config.js"></script>
> <script id="sap-ui-bootstrap"
>             src="resources/sap-ui-core.js">
> </script>
> ```

> ### Caution:  
> The existing list of property names in `globalThis["sap-ui-config"]` must not be extended with undocumented custom names. Applications must not access the global configuration object directly either.



### \[3\] `sap-ui-config.json` \(deprecated\)

This option is activated by setting `globalThis["sap-ui-config"]` to an arbitrary string value.

> ### Note:  
> The use of an `sap-ui-config.json` file is deprecated; be sure to use one of the other available configuration options instead.



### \[4\] Configuration string in the `data-sap-ui-config` attribute \(deprecated\)

The bootstrap attribute `data-sap-ui-config` enables you to provide a single attribute with the configuration information for the SAPUI5 runtime.

You can use this attribute instead of attaching individual options with individual configuration attributes to the script tag. Its content is similar to the Global Configuration Object but without the enclosing parentheses; it is a comma-separated list of key-value pairs.

> ### Note:  
> The usual HTML escape mechanisms must be used if the value contains specific HTML characters \(<, \>, &\) or the quote character that is used to enclose the attribute value.

```html
<script id="sap-ui-bootstrap"
	src="resources/sap-ui-core.js"
	data-sap-ui-config="
	\"anmination-mode\":\"full\",
		\"compat-version\":\"edge\"
	">
</script>
```



### \[5\] Individual <code>data-sap-ui-&lt;<i>UI5-supported-config-option</i>&gt;</code> attributes of the bootstrap tag

For each configuration option, you can have one attribute in the bootstrap script tag. These attributes must provide the following information:

-   Attribute name in kebab case

    The attribute name is composed of the name of the configuration option and the `data-sap-ui-` prefix. The first part of the prefix \(`data-`\) is necessary to comply with the W3C recommendations for custom attributes in HTML. The second part \(`-sap-ui-`\) separates SAPUI5 attributes from custom attributes defined by any other framework. The third part is the config option name in kebab case.

-   Value

    Element attributes in HTML have a `string` value by definition. For configuration options of type `string`, the attribute value is equivalent to the value of the option.

    > ### Note:  
    > If the value contains specific HTML characters, such as `<` or `>`, or if the value contains the same quote character that is used to wrap the attribute value, the usual HTML escape mechanisms must be used: Use entities for the specific HTML characters, for example `&lt;` instead of `<`, and switch the type of quotes from single to double or vice versa.

    ```html
    <script id="sap-ui-bootstrap"
                src="resources/sap-ui-core.js"
                data-sap-ui-compat-version="edge">
    </script>
    ```




### \[6\] Individual meta tag attributes

For each configuration option, you can add a meta tag. These attributes must provide the following information:

-   Attribute name in kebab case

    The attribute name is composed of the name of the configuration option and the `data-sap-ui-` prefix. The first part of the prefix \(`data-`\) is necessary to comply with the W3C recommendations for custom attributes in HTML. The second part \(`-sap-ui-`\) separates SAPUI5 attributes from custom attributes defined by any other framework. The third part is the config option name in kebab case. The attribute name must be provided within the `name` attribute of the meta tag.

-   Value

    Element attributes in HTML have a `string` value by definition. For configuration options of type `string`, the attribute value is equivalent to the value of the option. The attribute value must be provided within the `content` attribute of the meta tag.

    > ### Note:  
    > If the value contains specific HTML characters, such as `<` or `>`, or if the value contains the same quote character that is used to wrap the attribute value, the usual HTML escape mechanisms must be used: Use entities for the specific HTML characters, for example `&lt;` instead of `<`, and switch the type of quotes from single to double or vice versa.

    ```html
    <meta name="sap-ui-compat-version" content="edge">
    ```




### \[7\] URL parameters

Configuration parameters can be added to the URL of an app.

The URL parameter name is composed of the name of the configuration option and the `sap-ui-` prefix, for example like `index.html?sap-ui-debug=true`.

> ### Note:  
> The W3C proposed that the `data-` prefix is not needed and not even allowed here as all URL parameters are kind of custom parameters.

The value of a URL parameter is of type `string` and the same type mapping as for HTML attributes applies. However, URLs require a different encoding than HTML; they use, for example % encoding instead of entity encoding.

For security reasons, only some configuration options can be set via URL parameters. An application can set the `ignore-url-parameters` option to `true` to disable URL configuration parameters completely.



### \[8\] Specific APIs

The configuration options above are evaluated when booting SAPUI5. After that, all changes to these parameters are ignored.

For a limited set of configuration options, specific APIs exist that allow you to modify these options at runtime.

You can find these APIs in [Configuration Options and URL Parameters](configuration-options-and-url-parameters-91f2d03.md).

