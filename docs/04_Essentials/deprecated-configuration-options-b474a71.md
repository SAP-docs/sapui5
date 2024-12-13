<!-- loiob474a712ca364d40a1b0a804baf2d734 -->

# DeprecatedConfiguration Options

The following tables show deprecatedconfiguration options.

> ### Note:  
> In earlier framework versions, the configuration options available in SAPUI5 could be found in the [API Reference via the `sap.ui.core.Configuration`](https://ui5.sap.com/#/api/sap.ui.core.Configuration). This legacy module has been deprecated with SAPUI5 1.120 and replaced by a modular, future-proof solution for configuration handling.

> ### Note:  
> The SAPUI5 configuration options now follow a consistent naming scheme based on kebab-case notation. Configuration options in older framework versions or code samples \(especially those from before SAPUI5 1.120\) may follow the former camelCase notation. Typically, you should now use \(or search for\) the newer names, e.g. `log-level` instead of `logLevel`.



<a name="loiob474a712ca364d40a1b0a804baf2d734__section_ix3_4bv_fzb"/>

## Deprecated Options

The following configuration options are deprecated and should no longer be used in future-proof coding:


<table>
<tr>
<th valign="top">

Option

</th>
<th valign="top">

Description

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

`animation`

\(deprecated\)

</td>
<td valign="top">

Type: `boolean`

Default value: `true`

For all controls that implement the `animation` parameter, the `animation-mode` is set as follows:

-   If `animation` is set to `true`, this is interpreted as `animation-mode` `full`

-   If `animation` is set to `false`, this is interpreted as `animation-mode` `minimal`




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

\(deprecated\)

</td>
<td valign="top">

Type: `string[]`

Default value: `null`

This configuration parameter defines UI areas that shall be created in advance.

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

`auto-aria-body-role`

\(deprecated\)

</td>
<td valign="top">

Type: `boolean`

Default value: `false`

Determines whether the framework automatically adds the ARIA role `application` to the HTML body.

As of SAPUI5 version 1.78, `autoAriaBodyRole` has a default value `false` in order to conform to the ARIA 1.1 recommendations. Role application on body level is not recommended, as the screen reader would then interpret the entire application as one big custom control.

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

`binding-syntax`

\(deprecated\)

</td>
<td valign="top">

Type: `string`

Default value: `complex`

This configuration parameter defines whether the simple or the complex binding syntax is used. The parameter only affects bindings that are defined as strings, for example in the constructor of a control, or when specifying a binding in a declarative view, such as an XML view.

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

`format-settings`

\(deprecated\)

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

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)

</td>
</tr>
<tr>
<td valign="top">

`manifest-first`

\(deprecated\)

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
</tr>
<tr>
<td valign="top">

`no-duplicate-ids`

\(deprecated\)

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

![NO](images/Cancel_dfb38de.png)

</td>
</tr>
<tr>
<td valign="top">

`origin-info`

\(deprecated\)

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

![NO](images/Cancel_dfb38de.png)

</td>
</tr>
<tr>
<td valign="top">

`preload`

\(deprecated\)

</td>
<td valign="top">

[Type](configuration-options-and-url-parameters-91f2d03.md#loio91f2d03b6f4d1014b6dd926db0e91070__section_TVT): `string`

Default value: `auto`

Defines the loading behaviour of the so-called preload files. They contain all modules of a library. The contained modules are only loaded, but not executed until they are used by the application.

The values are used as follows:

-   When set to `auto`, the runtime loads preload files asynchronously if the bootstrap configuration parameter `async` is set as `async=true`. We recommend to use the `async=true` configuration parameter in the bootstrap, as it switches many module-related APIs to `async`, including the loading behaviour of the preload files.
-   Preload files for the declared libraries are loaded synchronously when the `async` bootstrap configuration parameter is set to`false` \(`async=false`\) or not set at all. Best practices discourage such behavior.
-   For any other value \(for example blank\), the preload feature is deactivated and modules are loaded on demand.



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

`trace`

\(deprecated\)

</td>
<td valign="top">

Type: `boolean`

Default value: `false`

Defines whether a trace view should be shown.

Has only an effect when the `sap-ui-debug.js` module has been loaded, either explicitly or by setting the `debug` option to `true`.

</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)

</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)

</td>
</tr>
</table>

