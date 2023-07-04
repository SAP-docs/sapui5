<!-- loio91f08de06f4d1014b6dd926db0e91070 -->

# Configuration of the SAPUI5 Runtime

SAPUI5 provides several options for the configuration of the SAPUI5 runtime. The possible ways to provide input for the available configuration options are described in detail.

When the SAPUI5 bootstrap script is included in a page, the SAPUI5 runtime will automatically be initialized as soon as the script is loaded and executed by the browser. For simple use cases and for a default SAPUI5 installation, this should already be sufficient to build and run UI5 applications. The only additional information that usually needs to be specified is the set of libraries and the theme to be used.

A typical bootstrap script looks like this:

```html
<script id="sap-ui-bootstrap"
            type="text/javascript"
            src="resources/sap-ui-core.js"
            data-sap-ui-theme="sap_belize"
            data-sap-ui-libs="sap.m"
            data-sap-ui-compatVersion="edge">
</script>
```

For more information see [Bootstrapping: Loading and Initializing](bootstrapping-loading-and-initializing-a04b0d1.md).

You can provide additional configuration information in the following ways:



<a name="loio91f08de06f4d1014b6dd926db0e91070__section_ACO"/>

## Available Configuration Options

UI5 supports 7 different possibilities to provide values for the available configuration parameters. Options 2 to 5 require you to provide them before the application boots up \(in **pre-boot**\). They are technically equivalent, however at runtime they will be evaluated in the order given below. The list below is therefore sorted in ascending order of precedence:

1.  Effective framework default values
2.  Server-wide defaults, read from `sap-ui-config.json`

    This option is activated by setting `window["sap-ui-config"]` to an arbitrary string value.

3.  Properties of the global configuration object `window["sap-ui-config"]`
4.  A configuration string in the `data-sap-ui-config` attribute of the bootstrap tag
5.  Individual `data-sap-ui-<myOption>` attributes of the bootstrap tag
6.  URL parameters

    > ### Note:  
    > Additional `<meta>` tags are evaluated after URL parameters, if not stated otherwise. Please see the overall list of [Configuration Options and URL Parameters](configuration-options-and-url-parameters-91f2d03.md) for the parameters which can be defined via `<meta>` tags.

7.  Specific APIs, for example the setters on the  [`sap.ui.core.Configuration`](https://ui5.sap.com/#/api/sap.ui.core.Configuration) class \(only for some parameters\)

Please have a look at the complete list of [Configuration Options and URL Parameters](configuration-options-and-url-parameters-91f2d03.md) for a description of each configuration option, including the available ways to set input values. The following subsections will describe these possibilities in more detail.



<a name="loio91f08de06f4d1014b6dd926db0e91070__section_z1g_zkg_plb"/>

## Setting Configuration Values



### \[1\] Effective Default Values

The easiest way to specify a configuration value is **not to specify** it. The SAPUI5 runtime contains a default value for each configuration option. As long as you don't have to change the value, simply don't specify it.

The effective default values can be found either in the  [API Reference](https://ui5.sap.com/#/api/sap.ui.core.Configuration) or in the complete list of [Configuration Options and URL Parameters](configuration-options-and-url-parameters-91f2d03.md).



### \[2\] `sap-ui-config.json` \(deprecated\)

This option is activated by setting `window["sap-ui-config"]` to an arbitrary string value.

> ### Note:  
> The usage of a `sap-ui-config.json` file is deprecated. Please use one of the other available configuration options.



### \[3\] Global Configuration Object

The global configuration object is a property in the global `window` object with property name `sap-ui-config`. The property must be a simple object, where each property represents the configuration option of the corresponding name.

To avoid conflicts with typical JavaScript coding, the name of the `window` property is not a valid JavaScript identifier. The name structure is chosen to avoid conflicts with SAP objects. To define the object, quotes must be used. If a configuration option has a name that is not a valid JavaScript identifier or that is a reserved token in JavaScript, the property name in the configuration object must be quoted. Currently, this only applies to the experimental configuration options starting with "xx-". These must be quoted inside square brackets, e.g. `["xx-supportedLanguages"] = ...`

As the configuration is evaluated during bootstrap, the configuration object must be created **before** SAPUI5 is bootstrapped. Otherwise, the contained configuration cannot be evaluated. As a consequence, using the global configuration object requires another script tag in front of the bootstrap script tag. It is up to the application whether it uses an inline script tag or a separate JavaScript file, which is loaded via a script tag, for this purpose. If you use a dedicated file, it may require more work initially, but offers the following advantages:

-   Several pages can share the file and, thus, use the same configuration.

-   The Content Security Policy \(CSP\) mechanism as introduced, for example, by Firefox 4.0 and others requires the use of a file.


The following code snippet shows an example for an inline script tag:

```html
<script type="text/javascript">
            window["sap-ui-config"] = {
			theme : "sap_belize",
			libs : "sap.m",
            };
</script>
<script id="sap-ui-bootstrap" 
            src="resources/sap-ui-core.js">
</script>
```

This option requires an additional script or script tag, but it offers the following advantages:

-   Possibility to share configuration between pages

-   Can be used in environments where the scrip tag cannot be influenced, for example, because it is created out of some configuration, like in some mashup frameworks

-   Allows to provide configuration before the core boots




### \[4\] Configuration String in the `data-sap-ui-config` Attribute

The bootstrap attribute `data-sap-ui-config` enables you to provide a single attribute with the configuration information for the SAPUI5 runtime.

You can use this attribute instead of attaching individual options with individual configuration attributes to the script tag. Its content is similar to the Global Configuration Object but without the enclosing parentheses: It is a comma-separated list of key-value pairs.

> ### Note:  
> The usual HTML escape mechanisms must be used if the value contains specific HTML characters \(<, \>, &\) or the quote character that is used to enclose the attribute value.

```html
<script id="sap-ui-bootstrap"
	type="text/javascript"
	src="resources/sap-ui-core.js"
	data-sap-ui-config="
		theme:'sap_belize',
		libs:'sap.m'
	">
</script>
```



### \[5\] Individual Script Tag Attributes

For each configuration option, you can have one attribute in the bootstrap script tag. These attributes must provide the following information:

-   Attribute name

    The attribute name is composed of the name of the configuration option and the `data-sap-ui-` prefix. The first part of the prefix \(`data-`\) is necessary to comply with the W3C recommendations for custom attributes in HTML. The second part \(`-sap-ui-`\) separates SAPUI5 attributes from custom attributes defined by any other framework.

    > ### Note:  
    > Attribute names in HTML are case-insensitive and this also applies to the configuration attribute names. However, SAPUI5 has defined some configuration options names in camel case, for example `originInfo`. SAPUI5 converts these names automatically to lower case when accessing the configuration.

-   Value

    Element attributes in HTML have a `string` value by definition. For configuration options of type `string`, the attribute value is equivalent to the value of the option.

    > ### Note:  
    > If the value contains specific HTML characters, such as '<' or '\>', or if the value contains the same quote character that is used to wrap the attribute value, the usual HTML escape mechanisms must be used: Use entities for the specific HTML characters, for example `&lt;` instead of `<`, and switch the type of quotes from single to double or vice versa.

    For configuration options that are **not** of type `string`, the format of the allowed values has to be defined as follows:


    <table>
    <tr>
    <th valign="top">

    Type


    
    </th>
    <th valign="top">

    Notation/Values


    
    </th>
    </tr>
    <tr>
    <td valign="top">
    
        `boolean`


    
    </td>
    <td valign="top">
    
        `true` and `x` are both accepted as true values \(case-insensitive\), all others are false. We recommend to use `false` for false values


    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
        `int`


    
    </td>
    <td valign="top">
    
        Any integer value


    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
        `string array`


    
    </td>
    <td valign="top">
    
        Comma-separated list of values; commas within a string are not supported \(no escaping\)


    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
        map from string to string


    
    </td>
    <td valign="top">
    
        JavaScript object literal \(preferably JSON syntax\)


    
    </td>
    </tr>
    </table>
    



### \[6\] URL Parameters

Configuration parameters can be added to the URL of an app.

The URL parameter name is composed of the name of the configuration option and the `sap-ui-` prefix, for example like `index.html?sap-ui-debug=true`.

> ### Note:  
> The W3C proposed that the `data-` prefix is not needed and not even allowed here as all URL parameters are kind of custom parameters.

The value of a URL parameter is of type `string` and the same type mapping as for HTML attributes applies. However, URLs require a different encoding than HTML; they use, for example % encoding instead of entity encoding.

For security reasons, only some configuration options can be set via URL parameters. An application can set the `ignoreUrlParameters` option to `true` to disable URL configuration parameters completely.



### \[7\] Specific APIs

The configuration options above are evaluated during the SAPUI5 runtime boot. After that, all changes to these parameters are ignored. To read the final configuration result, you can use the `sap.ui.getCore().getConfiguration()` method.

Additionally, for a limited set of configuration options specific APIs exist which allow you to modify these options at runtime.

For example, the `sap.ui.core.Configuration` class provides setters for several configuration options that can be modified at runtime. The runtime and/or the controls can then react on these configuration changes. The most prominent example for such a configuration option is the `theme`.

