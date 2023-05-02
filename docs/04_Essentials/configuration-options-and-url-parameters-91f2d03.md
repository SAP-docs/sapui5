<!-- loio91f2d03b6f4d1014b6dd926db0e91070 -->

# Configuration Options and URL Parameters

The complete list of configuration options available in SAPUI5 can be found in the *API Reference* under `sap.ui.core.Configuration`. The following table shows a subset of the available configuration options.

> ### Note:  
> -   A subset of these configuration parameters can also be set via URL parameters \(if "**by URL parameter**" is: "![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)"\). URL parameter names are composed of the `sap-ui-` prefix together with the name of the configuration option, for example: `sap-ui-debug=true`.
> 
> -   Some of the information provided here assumes that the `compatVersion` configuration option is set to its expected value; check it for more details.


<table>
<tr>
<th valign="top">

Option



</th>
<th valign="top">

Type



</th>
<th valign="top">

[pre-boot](configuration-of-the-sapui5-runtime-91f08de.md#loio91f08de06f4d1014b6dd926db0e91070__section_ACO)



</th>
<th valign="top">

by URL parameter



</th>
<th valign="top">

[by API](configuration-of-the-sapui5-runtime-91f08de.md#loio91f08de06f4d1014b6dd926db0e91070__section_ACO)



</th>
</tr>
<tr>
<td valign="top">

`accessibility`



</td>
<td valign="top">

Type: `boolean`

Default value: `true`

If set to `true`, the SAPUI5 controls are rendered for or running in accessibility mode.



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)



</td>
</tr>
<tr>
<td valign="top">

`activeTerminologies`



</td>
<td valign="top">

Type: `string[]`

Default value: `undefined`

List of active terminologies provided via URL parameter, bootstrap or `sap.ui.core.Component` API.



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)



</td>
</tr>
<tr>
<td valign="top">

`animationMode`



</td>
<td valign="top">

Type: `string`

Default value: `full`

The following animation modes are available:

-   `full`: all animations are shown

-   `basic`: a reduced, more light-weight set of animations

-   `minimal`: no animations are shown, except animations of fundamental functionality

-   `none`: deactivates the animation completely


This parameter replaces the deprecated Boolean `animation` parameter.

For all controls that implement the `animation` parameter, the `animationMode` is set as follows:

-   If `animation` is set to `true`, this is interpreted as `animationMode` `full`

-   If `animation` is set to `false`, this is interpreted as `animationMode` `minimal`




</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
</tr>
<tr>
<td valign="top">

`appCacheBuster`



</td>
<td valign="top">

Type: `boolean | string[]`

Default value: \[ \]

Modifiable at runtime via the `AppCacheBuster` API \(see [Application Cache Buster: Enhanced Concept](application-cache-buster-enhanced-concept-94e0c33.md)\).

If set to a non-empty list of URLs, the `AppCacheBuster` will be activated and will load component version info files from the configured set of URLs \(see [Application Cache Buster](application-cache-buster-ff7aced.md)\).



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
</tr>
<tr>
<td valign="top">

`areas`



</td>
<td valign="top">

Type: `string[]`

Default value: `null`

This configuration parameter defines UI areas that shall be created in advance; use `` to create new UI areas and `sap.ui.getCore().getUIArea(id).destroy()` to delete existing UI areas at runtime.



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)



</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)



</td>
</tr>
<tr>
<td valign="top">

`async`



</td>
<td valign="top">

Type: `boolean`

Default value: `false`

This configuration setting enables the module loader to load both modules and library-preload files asynchronously. Activating this feature requires intensive application-side cooperation and testing to ensure a stable and fully working application. In case you encounter issues, or if you want to prepare your application in advance, see [Is Your Application Ready for Asynchronous Loading?](../03_Get-Started/is-your-application-ready-for-asynchronous-loading-493a15a.md)



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)



</td>
</tr>
<tr>
<td valign="top">

`autoAriaBodyRole`



</td>
<td valign="top">

Type: `boolean`

Default value: `false`

Determines whether the framework automatically adds the ARIA role `application` to the HTML body.

As of SAPUI5 version 1.78, `autoAriaBodyRole` has a default value `false` in order to conform to the ARIA 1.1 recommendations. Role application on body level is not recommended, as the screen reader would then interpret the entire application as one big custom control.



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)



</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)



</td>
</tr>
<tr>
<td valign="top">

`bindingSyntax`



</td>
<td valign="top">

Type: `string`

Default value: `complex`

This configuration parameter defines whether the simple or the complex binding syntax is used. The parameter only affects bindings that are defined as strings, for example in the constructor of a control, or when specifying a binding in a declarative view, such as an XML view.



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)



</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)



</td>
</tr>
<tr>
<td valign="top">

`calendarType`



</td>
<td valign="top">

Type: `sap.ui.core.CalendarType`

Default value: If there is no value defined, the actual value is determined from the locale data for the configured locale.

Defines the calendar type that is used for locale-dependent, date-related features \(for example, formatting or parsing date and time\).



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
</tr>
<tr>
<td valign="top">

`debug`



</td>
<td valign="top">

Type: `boolean | string`

Default value: `false`

If set to `true`, the debug sources are loaded; if the bootstrap code is loaded from an optimized source, the bootstrap will be aborted and start anew from a debug source.

You can also specify a comma-separated list as a `string` that contains all modules that should be loaded as debug source.

Example: `index.html?sap-ui-debug=sap/ui/model/odata/v2/` will load all debug sources for all modules of the OData V2 model. All others modules will be taken from the preload \(if preload is active\).

You can use the following patterns:

-   A trailing slash \(`/`\) means that the complete package should be included \(shortcut for `/**/*`\)

    Example: `sap/ui/model/odata/v2/` loads everything from the `sap/ui/model/odata/v2/` package as debug source \(also nested packages `sap/ui/model/odata/v2/**/*`\).

-   `**/` matches any package or sequence of packages

    Example: `**/v2/` loads any package named `v2` as debug sources like `odata/v2`, `json/v2/` etc.

-   `*` matches any part of a simple name

    Example: `sap/ui/model/*` matches all files directly contained in the model package, but not in nested packages \(for example, not `v2` or `v4`\)


> ### Note:  
> You can also select the debug sources in the Technical Information Dialog. For more information, see [Technical Information Dialog](technical-information-dialog-616a3ef.md#loio616a3ef07f554e20a3adf749c11f64e9).



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)



</td>
</tr>
<tr>
<td valign="top">

`excludeJQueryCompat`



</td>
<td valign="top">

Type: `boolean`

Default value: `false`

A compatibility layer restores several incompatibly changed APIs in jQuery v3 back to their old behavior in jQuery v2. It may be excluded via this setting. For more information, see [Upgrading from a Version Below 1.82](../02_Read-Me-First/upgrading-from-a-version-below-1-82-147eef9.md).



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)



</td>
</tr>
<tr>
<td valign="top">

`flexibilityServices`



</td>
<td valign="top">

Type: `string`

Default value: `/sap/bc/lrep`

You can define an alternative route from where to load SAPUI5 flexibility.

For more information, see [Bootstrapping SAPUI5 Flexibility](bootstrapping-sapui5-flexibility-642dab2.md).



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)



</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)



</td>
</tr>
<tr>
<td valign="top">

`formatLocale`



</td>
<td valign="top">

Type: `string | sap.ui.core.Locale`

Default value: `null`

This configuration parameter defines the locale used for formatting purposes; the default values for the locale are derived from the language.



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
</tr>
<tr>
<td valign="top">

`formatSettings`



</td>
<td valign="top">

Type: `sap.ui.core.Configuration.FormatSettings`

Encapsulates configuration settings that are related to data formatting / parsing. When format configuration settings are modified through this class, UI5 only ensures that formatter objects created after that point in time will honor the modifications. To be on the safe side, applications should do any modifications early in their lifecycle or recreate any model/UI that is locale dependent.

Example usage: `sap.ui.getCore().getConfiguration().getFormatSettings().setCustomUnits(...)`

For more information, see the [API Reference: `sap.ui.core.Configuration.FormatSettings`](https://ui5.sap.com/#/api/sap.ui.core.Configuration.FormatSettings)



</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)



</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
</tr>
<tr>
<td valign="top">

 `frameOptions` 



</td>
<td valign="top">

Type: `string`

Default value: `default`

Frame options mode; for more information, see [Frame Options](../05_Developing_Apps/frame-options-62d9c4d.md).



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)



</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)



</td>
</tr>
<tr>
<td valign="top">

 `frameOptionsConfig` 



</td>
<td valign="top">

Type: `object`

Default value: undefined

Advanced frame options configuration; for more information, see [Frame Options](../05_Developing_Apps/frame-options-62d9c4d.md).



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![](images/Cancel_dfb38de.png)



</td>
<td valign="top">

![](images/Cancel_dfb38de.png)



</td>
</tr>
<tr>
<td valign="top">

`ignoreUrlParams`



</td>
<td valign="top">

Type: `boolean`

Default value: `false`

Security-relevant parameter that allows applications to disable configuration modifications via URL parameters.



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)



</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)



</td>
</tr>
<tr>
<td valign="top">

`inspect`



</td>
<td valign="top">

Type: `boolean`

Default value: `false`

If set to `true`, the `sap-ui-debug.js` module is included and provides some supportability features.



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)



</td>
</tr>
<tr>
<td valign="top">

`language`



</td>
<td valign="top">

Type: `string | sap.ui.core.Locale`

Default value: `user settings / language`

This configuration parameter defines the language that shall be used for localized texts, formatting, and so on. For more information, see [API Reference: `sap.ui.core.Configuration.setLanguage`](https://ui5.sap.com/#/api/sap.ui.core.Configuration/methods/setLanguage) and [Identifying the Language Code / Locale](identifying-the-language-code-locale-91f21f1.md).



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
</tr>
<tr>
<td valign="top">

`libs`



</td>
<td valign="top">

Type: `string[]`

Default value: `[ ]`

This configuration parameter defines a list of libraries that shall be loaded initially; use the `loadLibrary()` method to load further libraries.

For more information, see: [loadLibrary](https://ui5.sap.com/#/api/sap.ui.core.Core/methods/loadLibrary)

All libraries provided using the configuration option `libs` are merged into the configuration option `modules`.



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
</tr>
<tr>
<td valign="top">

`logLevel`



</td>
<td valign="top">

Type: `string`

Default value: `ERROR`

This configuration parameter sets the log level to the given value; for minified \(productive\) sources, the default level is `ERROR`, for debug sources it is `DEBUG`. At runtime, you can modify the log level by using the `sap/base/Log.setLevel` method.

Options: `0|1|2|3|4|5|6|NONE|FATAL|ERROR|WARNING|INFO|DEBUG|ALL`



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
</tr>
<tr>
<td valign="top">

`manifestFirst`



</td>
<td valign="top">

Type: `boolean`

Default value: `false`

Modifiable at runtime by using the `sap.ui.core.Component.create` component factory.

If set to `true`, the descriptor for a component is read and evaluated first, before loading the component code \(`Component.js`\).

For more information, see: [`sap.ui.core.Component.create`](https://ui5.sap.com/#/api/sap.ui.core.Component/methods/sap.ui.core.Component.create)



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
</tr>
<tr>
<td valign="top">

`modules`



</td>
<td valign="top">

Type: `string[]`

Default value: `[ ]`

This configuration parameter defines a list of JavaScript modules that shall be loaded after the core has been initialized.



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)



</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)



</td>
</tr>
<tr>
<td valign="top">

`noConflict`



</td>
<td valign="top">

Type: `boolean`

Default value: `false`

If set to `true`, SAPUI5 forces jQuery into `noConflict` mode.



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)



</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)



</td>
</tr>
<tr>
<td valign="top">

`noDuplicateIds`



</td>
<td valign="top">

Type: `boolean`

Default value: `true`

If set to `true`, this configuration parameter enforces that the same IDs are **not** used for multiple controls; we highly recommend this check as duplicate IDs may cause unforeseeable issues and side effects.



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)



</td>
</tr>
<tr>
<td valign="top">

`onInit`



</td>
<td valign="top">

Type: `code | string`

Default value: `undefined`

This configuration setting defines code that has to be executed after the initialization.

If you define a `string`, this can be a reference to a function or a name of a module. Functions are resolved from the global namespace \(like `"myapp.initFunction"`\). Modules are indicated by the prefix `module:` \(like `"module:myapp/main/Module").` The module will be loaded and executed after the initialization.

With `sap.ui.getCore().attachInit()` multiple handlers can be attached.

The `onInit` callbacks are executed in the following order:

1.  [\[onInit function/module\]](standard-variant-for-bootstrapping-91f1f45.md)
2.  [\[sap.ui.getCore\(\).attachInit\]](initialization-process-91f2c90.md#loio91f2c9076f4d1014b6dd926db0e91070)



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
</tr>
<tr>
<td valign="top">

`originInfo`



</td>
<td valign="top">

Type: `boolean`

Default value: `false`

If set to `true`, additional information for text resources is provided that allows to determine the origin of a translated text on the UI.



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)



</td>
</tr>
<tr>
<td valign="top">

`preload`



</td>
<td valign="top">

Type: `string`

Default value: `auto`

This configuration parameter defines the loading behaviour of the so-called preload files. They contain all modules of a library. The contained modules are only loaded, but not executed until they are used by the application.

The values are used as follows:

-   When set to `auto`, SAPUI5 runtime automatically uses `preload=sync` when the `async` bootstrap configuration parameter is set to false \(`async=false`\) or not set at all. The `preload` files are loaded asynchronously in case `async=true` is set.
-   When set to `sync`, the preload files for the declared libraries are loaded synchronously.
-   When set to `async`, the preload files are loaded asynchronously. However, we recommend to use the `async=true` configuration parameter in the bootstrap instead, because it switches more module/related APIs to `async` including the loading behaviour of the preload files.
-   For any other value \(for example blank\), the preload feature is deactivated and modules are loaded on demand.



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)



</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)



</td>
</tr>
<tr>
<td valign="top">

`preloadLibCss`



</td>
<td valign="top">

Type: `string[]`

Default value: `[ ]`

This configuration setting specifies a list of UI libraries using the same syntax as the `libs` property, for which the SAPUI5 core does not include the `library.css` stylesheet in the head of the page. If the list starts with an exclamation mark \(!\), no stylesheet is loaded at all for the specified libs. In this case, it is assumed that the application takes care of loading CSS, for example, a manually merged, single CSS file. Otherwise, the Core instructs the back end to create a merged CSS for the specified libs. In both cases, if the first libraries name is an asterisk \(\*\), it will be expanded to the list of already configured libraries.

> ### Note:  
> The `merge` feature is currently only available for Java and only for apps that include the additional back-end component `resource-ext`. Without the merge, applications can include their own merged CSS file and suppress the loading of the standard`library.css`.



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)



</td>
</tr>
<tr>
<td valign="top">

`resourceRoots`



</td>
<td valign="top">

Type: `object`

Default value: undefined

With `sap.ui.loader.config({paths: ...})` a map can be used to define locations for resources. See the  [API Reference: `sap.ui.loader`](https://ui5.sap.com/#/api/sap.ui.loader)

To provide a URL location that is **not** overwritten by a component later on, `final` can be set to `true`, for example: `{url: '/that/is/the/prefix/', final: true}`

For more information, see the [API Reference: `sap.ui.loader.config`](https://ui5.sap.com/#/api/sap.ui.loader/methods/sap.ui.loader.config)



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
</tr>
<tr>
<td valign="top">

`rtl`



</td>
<td valign="top">

Type: `boolean`

Default value: `false`

If set to `true`, all controls are rendered in right-to-left \(RTL\) mode; not yet determined automatically.

Modifiable at runtime with restrictions. For more information, see [API Reference: `sap.ui.core.Configuration.setLanguage`](https://ui5.sap.com/#/api/sap.ui.core.Configuration/methods/setLanguage) and [API Reference: `sap.ui.core.Configuration.setRTL`](https://ui5.sap.com/#/api/sap.ui.core.Configuration/methods/setRTL) 



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
</tr>
<tr>
<td valign="top">

`securityTokenHandlers`



</td>
<td valign="top">

Type: `function[]`

Each of these functions is called by the OData V4 model to retrieve the security tokens instead of using the default "X-CSRF-Token".

For more information, see [Security Token Handling](model-instantiation-and-data-access-9613f1f.md#loio9613f1f2d88747cab21896f7216afdac__section_STH).



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
</tr>
<tr>
<td valign="top">

`statistics`



</td>
<td valign="top">

Type: `boolean`

Default value: `false`

Activates end-to-end traces and measurement of response times For more information, see [Interaction Tracking for Performance Measurement](interaction-tracking-for-performance-measurement-b2825ea.md).



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)



</td>
</tr>
<tr>
<td valign="top">

`support`



</td>
<td valign="top">

Type: `string[]`

Default value: `null`

Whether support mode is enabled. For more information, see [Support Assistant](support-assistant-57ccd7d.md).

Options: `true | silent | window`



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)



</td>
</tr>
<tr>
<td valign="top">

`testRecorder`



</td>
<td valign="top">

Type: `string[]`

Default value: `null`

Whether test tools are enabled. For more information, see [Test Recorder](test-recorder-2535ef9.md).

Options: `true | silent | window`



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)



</td>
</tr>
<tr>
<td valign="top">

`theme`



</td>
<td valign="top">

Type: `string`

Default value: `base`

This configuration parameter defines the theme that shall be used for the current page; you can change the theme at runtime by calling `sap.ui.getCore().applyTheme()`

**Theme Root:**

When the theme string contains an at-sign \(`@`\), anything before the `@` is assumed to denote the ID of the theme, while anything after the `@` is assumed to represent the URL location of the theme. To defend against XSS attacks, only tthe server-relative part of the URL is used. Any host or port prefix will be ignored.



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
</tr>
<tr>
<td valign="top">

`themeRoots`



</td>
<td valign="top">

Type: `object`

Default value: undefined

Modifiable at runtime via `sap.ui.getCore().setThemeRoot()`

This configuration parameter defines the location of themes.



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
</tr>
<tr>
<td valign="top">

`timezone`



</td>
<td valign="top">

Type: `string`

Default value: the browser's local time zone

The configured time zone is used to convert dates when using `sap.ui.core.format.DateFormat` instances. The time zone should be an IANA time zone ID, e.g. "America/New\_York". The `sap-timezone` URL parameter can also be used to set the time zone. For more information, see [Date Format](date-format-91f2eba.md).

> ### Note:  
> Due to compatibility considerations, **setting this parameter has no effect in this release**; the time zone configuration will still reflect the time zone of the browser/host system. **For testing purposes** the `sap-timezone` URL parameter can be used to set a different time zone. You can use it to check whether an application still works properly if the user-specific time zone differs from the time zone of the machine on which the browser is executed. Note that changing the time zone via the `sap-timezone` URL parameter affects **all** applications that are running in that SAPUI5 instance.



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
</tr>
<tr>
<td valign="top">

`trace`



</td>
<td valign="top">

Type: `boolean`

Default value: `false`

Defines whether a trace view should be shown.

Has only an effect when the `sap-ui-debug.js` module has been loaded, either explicitly or by setting the `debug` option to `true`.



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)



</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)



</td>
</tr>
<tr>
<td valign="top">

`trailingCurrencyCode`



</td>
<td valign="top">

Type: `boolean`

Default value: `true`

By default the currency codes are shown after the amount. If set to `false`, the currency code will be shown as configured by the locale-specific patterns of the Common Locale Data Repository \(CLDR\).



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
</tr>
<tr>
<td valign="top">

`uidPrefix`



</td>
<td valign="top">

Type: `string`

Default value: '--'

Prefix to be used for automatically generated control IDs; must be chosen carefully to avoid conflicts with IDs defined by the application or DOM IDs.



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)



</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)



</td>
</tr>
<tr>
<td valign="top">

`versionedLibCss`



</td>
<td valign="top">

Type: `boolean`

Default value: `false`

If set to `true`, the version parameters are included in requests to the library theme resource \(for example, the parameter `library.css?version=1.0.1&sap-ui-dist-version=1.0.2` is added. `version` contains the library version and `sap-ui-dist-version` the version of the SAPUI5 distribution .

This applies to the following resources:

-   `library(-RTL).css` \(or any other variation\)

-   `library-parameters.json` 


URLs within the CSS or parameters are not modified.



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)



</td>
</tr>
<tr>
<td valign="top">

 `allowlistService` 



</td>
<td valign="top">

Type: `string`

Default value: `null`

URL to an allowlist service; see [Allowlist Service](../05_Developing_Apps/allowlist-service-d04a6d4.md).



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)



</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)



</td>
</tr>
<tr>
<td valign="top">

 `compatVersion` 



</td>
<td valign="top">

Type: `string`

Default value: `1.14`

> ### Note:  
> Applications must set this option to `edge`. **Other version definitions are deprecated.**

For more information, see [Compatibility Version Information](compatibility-version-information-9feb96d.md).



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)



</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)



</td>
</tr>
</table>



## Experimental Options

The options listed in the table below are 'experimental'. They may be removed in future versions, or their definition or behavior may change in an incompatible way. Experimental options are identified by the name prefix `xx-`. Experimental configuration options are used for support scenarios where SAPUI5 development needs the freedom to evolve supportability features over time. Others are related to experimental features where the underlying feature still may change. When an experimental configuration option becomes mature, the `xx-` prefix is removed from the definition. For compatibility reasons, the old name with the `xx-` prefix will still be supported.

> ### Note:  
> The features listed below are experimental features and may be modified or removed in future versions.


<table>
<tr>
<th valign="top">

Option



</th>
<th valign="top">

Type



</th>
<th valign="top">

[pre-boot](configuration-of-the-sapui5-runtime-91f08de.md#loio91f08de06f4d1014b6dd926db0e91070__section_ACO)



</th>
<th valign="top">

by URL parameter



</th>
<th valign="top">

[by API](configuration-of-the-sapui5-runtime-91f08de.md#loio91f08de06f4d1014b6dd926db0e91070__section_ACO)



</th>
</tr>
<tr>
<td valign="top">

`xx-appCacheBusterMode`



</td>
<td valign="top">

Type: `string`

Default value: `sync`

The loading mode of the AppCacheBuster.

Options: `sync | async | batch`.



</td>
<td valign="top">

![](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)



</td>
</tr>
<tr>
<td valign="top">

`xx-appCacheBusterHooks`



</td>
<td valign="top">

Type: `object`

Default value: `undefined`

Object defining the callback hooks for the AppCacheBuster like e.g. `handleURL`, `onIndexLoad` or `onIndexLoaded`.



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)



</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)



</td>
</tr>
<tr>
<td valign="top">

`xx-avoidAriaApplicationRole`



</td>
<td valign="top">

Type: `boolean`

Default value: `true`

Prevents the framework from automatically adding the ARIA role application to the HTML body.



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)



</td>
</tr>
<tr>
<td valign="top">

`xx-cache-excludedKeys`



</td>
<td valign="top">

Type: `string[]`

Default value: `[]`

A list of all keys that the Cache Manager will ignore when setting or getting values.



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)



</td>
</tr>
<tr>
<td valign="top">

`xx-cache-serialization`



</td>
<td valign="top">

Type: `boolean`

Default value: `false`

Whether the Cache Manager serialization support is switched on.



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
</tr>
<tr>
<td valign="top">

`xx-cache-use`



</td>
<td valign="top">

Type: `boolean`

Default value: `true`

Whether the Cache Manager is switched on.



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
</tr>
<tr>
<td valign="top">

`xx-componentPreload`



</td>
<td valign="top">

Type: `string`

Default value: same as `preload`

Allows to suppress the preload of component resources \(`Component-preload.js`\). By default, the component resources are automatically preloaded when preloads are active in general \(e.g. when running against the optimized SAPUI5 runtime and not running in debug mode\). With this parameter, the preload can be switched off without affecting the library preload. `sync` or `async` have no meaning; both are accepted to be compatible with the library preload, but the code that creates a component decides whether this happens synchronously or asynchronously.

Options: `sync | async | off`.



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)



</td>
</tr>
<tr>
<td valign="top">

`xx-cssVariables`



</td>
<td valign="top">

Type: `string`

Default value: `false`

Enable usage of CSS variables.

Options: `false | true | additional`.



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)



</td>
</tr>
<tr>
<td valign="top">

`xx-debugModuleLoading`



</td>
<td valign="top">

Type: `boolean`

Default value: `false`

When set to `true`, the SAPUI5 module loading feature produces `DEBUG` output for every required, executed, or required but already loaded module. This can help to analyse issues with dependency order, and so on.

By default, the log level is the same as for the standard log, but not higher than `INFO`.

With the experimental config option `xx-debugModuleLoading`, it can be raised to `DEBUG`.



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)



</td>
</tr>
<tr>
<td valign="top">

`xx-debugRendering`



</td>
<td valign="top">

Type: `boolean`

Default value: `false`

When set to `true`, some components of the SAPUI5 rendering system \(`RenderManager`, `UIArea`\) create a far more verbose debug output for rendering steps, for example:

-   Which controls have to be rendered?

-   Who invalidated the control? \(stacktrace\)

-   Was one rendering run sufficient, or have there been multiple runs?




</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)



</td>
</tr>
<tr>
<td valign="top">

`xx-depCache`



</td>
<td valign="top">

Type: `boolean`

Default value: `false`

Whether dependency cache info files should be loaded instead of preload files.

This experimental feature is intended for HTTP/2 scenarios.



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)



</td>
</tr>
<tr>
<td valign="top">

`xx-designMode`



</td>
<td valign="top">

Type: `boolean`

Default value: `false`

Whether the design mode is active or not.



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)



</td>
</tr>
<tr>
<td valign="top">

`xx-disableCustomizing`



</td>
<td valign="top">

Type: `boolean`

Default value: `false`

Whether the customizing is disabled or not.



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)



</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)



</td>
</tr>
<tr>
<td valign="top">

`xx-handleValidation`



</td>
<td valign="top">

Type: `boolean`

Default value: `false`

Whether type validation is handled by the Core.



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)



</td>
</tr>
<tr>
<td valign="top">

`xx-hyphenation`



</td>
<td valign="top">

Type: `string`

Default value: `''`

Force hyphenation to use only browser-native or only third-party.

Options: `native | thirdparty | disable`.



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)



</td>
</tr>
<tr>
<td valign="top">

`xx-lesssupport`



</td>
<td valign="top">

Type: `boolean`

Default value: `false`

Enable `LessSupport`.



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)



</td>
</tr>
<tr>
<td valign="top">

`xx-libraryPreloadFiles`



</td>
<td valign="top">

Type: `string[]`

Default value: `both`

Allows to enforce the use of a specific preload file type:

-   for all libraries: `?sap-ui-xx-libraryPreloadFiles=json`

-   for individual libraries \(might be a comma separated list\): `?sap-ui-xx-libraryPreloadFiles=sap.m:none,sap.ui.layout:json`

-   for a combination of both: `?sap-ui-xx-libraryPreloadFiles=both,sap.m:none,sap.ui.layout:js` 


Possible values for the file types are

-   `none` \(no preload at all\)

-   `json` \(only try to load `library-preload.json`\)

-   `js` \(only try to load `library-preload.js`\)

-   `both` \(first try `js`, then `json`\).


Any other value will be ignored. The default is `both` for all libraries.



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)



</td>
</tr>
<tr>
<td valign="top">

`xx-noless`



</td>
<td valign="top">

Type: `boolean`

Default value: `false`

Only useful at development time: when set to `true`, the browser-based compilation of LESS theming files is suppressed. Only the CSS that is created at build-time will be loaded.



</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)



</td>
</tr>
<tr>
<td valign="top">

`xx-nosync`



</td>
<td valign="top">

Type: `string`

When set to `warn`, any use of synchronous XHRs will be reported with a warning in the console. When set to `true`, such calls will cause an error.



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)



</td>
</tr>
<tr>
<td valign="top">

`xx-supportedLanguages`



</td>
<td valign="top">

Type: `string[]`

Default value: `[]`

With this option the client can be instructed to limit its back-end requests for translatable texts to the configured set of languages. An empty value or the value `*` allows any language. The value `default` limits the requests to the set of languages that are delivered with SAPUI5.



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)



</td>
</tr>
<tr>
<td valign="top">

`xx-self-closing-check`



</td>
<td valign="top">

Type: `boolean`

Default value: `false`

Only useful for development / support: Issues a warning if a non-void HTML element is written in self-closing syntax. For more information, see [Upgrading from a Version Below 1.82](../02_Read-Me-First/upgrading-from-a-version-below-1-82-147eef9.md).



</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)



</td>
</tr>
<tr>
<td valign="top">

`xx-suppressDeactivationOfControllerCode`



</td>
<td valign="top">

Type: `boolean`

Default value: `false`



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)



</td>
</tr>
<tr>
<td valign="top">

`xx-rootComponentNode`



</td>
<td valign="top">

Type: `string` 



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)



</td>
</tr>
<tr>
<td valign="top">

`xx-viewCache`



</td>
<td valign="top">

Type: `boolean`

Default value: `true`

Allows to disable the view caching, for example, during development \(see [XML View Cache](xml-view-cache-3d85d5e.md)\).



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)



</td>
</tr>
<tr>
<td valign="top">

`xx-waitForTheme`



</td>
<td valign="top">

Type: `string`

Default value: `undefined`

Possible values are:

-   `undefined` \(default\)

    By default neither the initialization of the SAPUI5 Core nor the first rendering wait for the configured theme to be loaded.

-   `rendering`

    The first \(initial\) rendering of the application will be delayed until the theme has been loaded and applied \(until `Core.isThemeApplied()`\). Helps to avoid FOUC \(flash of unstyled content\).

-   `init`

    Same as `rendering`, but additionally delays the `init` event of theSAPUI5 Core until the configured theme has been loaded. Application code that waits for this event can then rely on the theming information to be present, e.g. for calling [`sap.ui.core.theming.Parameters.get`](https://ui5.sap.com/#/api/sap.ui.core.theming.Parameters/methods/sap.ui.core.theming.Parameters.get)

    See also:

    -   [`onInit` function/module](standard-variant-for-bootstrapping-91f1f45.md)
    -   [`sap.ui.getCore().attachInit`](initialization-process-91f2c90.md#loio91f2c9076f4d1014b6dd926db0e91070)




</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)



</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)



</td>
</tr>
</table>

