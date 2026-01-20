<!-- loio91f2d03b6f4d1014b6dd926db0e91070 -->

# Configuration Options and URL Parameters

The following tables show available configuration options.

> ### Note:  
> In earlier framework versions, the configuration options available in SAPUI5 could be found in the [API Reference via the `sap.ui.core.Configuration`](https://ui5.sap.com/#/api/sap.ui.core.Configuration). This legacy module has been deprecated with SAPUI5 1.120 and replaced by a modular, future-proof solution for configuration handling.

> ### Note:  
> The SAPUI5 configuration options now follow a consistent naming scheme based on kebab-case notation. Configuration options in older framework versions or code samples \(especially those from before SAPUI5 1.120\) may follow the former camelCase notation. Typically, you should now use \(or search for\) the newer names, e.g. `log-level` instead of `logLevel`.

The available configuration options are given below the topic they belong to, e.g. **Localization**, **Theming**, etc. Often, these topics correspond to modules with the same name, which provide methods to retrieve and set the values of their associated configuration options.

Some configuration options can also be set via URL parameters, which is indicated by an entry in the corresponding column in the tables below. URL parameter names are composed of the `sap-ui-` prefix together with the name of the configuration option, for example: `sap-ui-log-level=ALL`. An application may set the `ignore-url-parameters` option to `true` to disable configuration URL parameters.

Typically, configuration options are evaluated when booting SAPUI5. After that, all changes to these options are ignored. For some configuration options, specific APIs exist that allow you to modify their values at runtime. This is indicated by an entry in the corresponding column in the tables below, which usually also provides a link to the respective API method.



<a name="loio91f2d03b6f4d1014b6dd926db0e91070__section_mpr_v1v_fzb"/>

## Localization


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

`active-terminologies`

</td>
<td valign="top">

[Type](configuration-options-and-url-parameters-91f2d03.md#loio91f2d03b6f4d1014b6dd926db0e91070__section_TVT): `string[]`

Default value: `undefined`

List of active terminologies provided via URL parameter, bootstrap or [`sap.ui.core.Component.create`](https://ui5.sap.com/#/api/sap.ui.core.Component%23methods/sap.ui.core.Component.create) API.

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

[Type](configuration-options-and-url-parameters-91f2d03.md#loio91f2d03b6f4d1014b6dd926db0e91070__section_TVT): `string`

Default value: `user settings / language`

Defines the language that shall be used for localized texts, formatting, and so on. For more information, see [Identifying the Language Code / Locale](identifying-the-language-code-locale-91f21f1.md).

</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)

</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)

[`Localization.setLanguage`](https://ui5.sap.com/#/api/module:sap/base/i18n/Localization%23methods/sap/base/i18n/Localization.setLanguage)

</td>
</tr>
<tr>
<td valign="top">

`rtl`

</td>
<td valign="top">

[Type](configuration-options-and-url-parameters-91f2d03.md#loio91f2d03b6f4d1014b6dd926db0e91070__section_TVT): `boolean`

Default value: RTL derived from user locale

If set to `true`, all controls are rendered in right-to-left \(RTL\) mode.

Typically, the RTL mode is derived from the current language, which is usually picked automatically based on the locale configuration of the user's browser or profile data. Particularly for testing purposes, it might be handy to set the mode explicitly.

Modifiable at runtime with restrictions. For more information, see the [API Reference: `Localization.setLanguage`](https://ui5.sap.com/#/api/module:sap/base/i18n/Localization%23methods/sap/base/i18n/Localization.setLanguage) .

</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)

</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)

[`Localization.setRTL`](https://ui5.sap.com/#/api/module:sap/base/i18n/Localization%23methods/sap/base/i18n/Localization.setRTL)

</td>
</tr>
<tr>
<td valign="top">

`timezone`

</td>
<td valign="top">

[Type](configuration-options-and-url-parameters-91f2d03.md#loio91f2d03b6f4d1014b6dd926db0e91070__section_TVT): `string`

Default value: the browser's local time zone

The configured time zone is used for `sap.ui.core.date.UI5Date` instances and to convert dates when using `sap.ui.core.format.DateFormat` instances. The time zone should be an IANA time zone ID, e.g. "America/New\_York". In addition to the `sap-ui-timezone` URL parameter, an alternative `sap-timezone` parameter can also be used to set the time zone.

For more information, see [Date Format](date-format-91f2eba.md).

> ### Caution:  
> Setting the time zone via the configuration API has to be done at the earliest possible point in time when launching an SAPUI5 application. It is preferably even set by shells or launchpads, such as the SAP Fiori launchpad, before launching the application. Using the API in running applications can lead to unexpected data inconsistencies, because any created date objects could still be related to the previously configured time zone. Generally, **an app should be completely restarted after changing the time zone**.
> 
> The SAPUI5 configuration is applied globally and not application-specific; it therefore affects **all** apps inside the shell or launchpad, for example.



</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)

</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)

[`Localization.setTimezone`](https://ui5.sap.com/#/api/module:sap/base/i18n/Localization%23methods/sap/base/i18n/Localization.setTimezone)

</td>
</tr>
</table>



<a name="loio91f2d03b6f4d1014b6dd926db0e91070__section_ins_2bv_fzb"/>

## Formatting


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

`calendar-type`

</td>
<td valign="top">

Type: [`sap/base/18n/date/CalendarType`](https://ui5.sap.com/#/api/module:sap/base/18n/date/CalendarType)

Default value: If there is no value defined, the actual value is determined from the locale data for the configured locale.

Defines the calendar type that is used for locale-dependent, date-related features \(for example, formatting or parsing date and time\).

</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)

</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)

[`Formatting.setCalendarType`](https://ui5.sap.com/#/api/module:sap/base/i18n/Formatting%23methods/sap/base/i18n/Formatting.setCalendarType)

</td>
</tr>
<tr>
<td valign="top">

`calendar-week-numbering`

</td>
<td valign="top">

Type: [`sap/base/18n/date/CalendarWeekNumbering`](https://ui5.sap.com/#/api/module:sap/base/18n/date/CalendarWeekNumbering)

Default value: `Default`

Defines the calendar week numbering algorithm that is used to determine the first day of the week and the first calendar week of the year.

For more information, see the [API Reference: `sap/base/18n/date/CalendarWeekNumbering`](https://ui5.sap.com/#/api/module:sap/base/18n/date/CalendarWeekNumbering)

</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)

</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)

[`Formatting.setCalendarWeekNumbering`](https://ui5.sap.com/#/api/module:sap/base/i18n/Formatting%23methods/sap/base/i18n/Formatting.setCalendarWeekNumbering)

</td>
</tr>
<tr>
<td valign="top">

`format-locale`

</td>
<td valign="top">

[Type](configuration-options-and-url-parameters-91f2d03.md#loio91f2d03b6f4d1014b6dd926db0e91070__section_TVT): `string`

Default value: Derived from the language

Defines the locale used for formatting purposes; the default values for the locale are derived from the language.

</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)

</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)

[`Formatting.setLanguageTag`](https://ui5.sap.com/#/api/module:sap/base/i18n/Formatting%23methods/sap/base/i18n/Formatting.setLanguageTag)

</td>
</tr>
<tr>
<td valign="top">

`trailing-currency-code`

</td>
<td valign="top">

[Type](configuration-options-and-url-parameters-91f2d03.md#loio91f2d03b6f4d1014b6dd926db0e91070__section_TVT): `boolean`

Default value: `true`

By default the currency codes are shown after the amount. If set to `false`, the currency code will be shown as configured by the locale-specific patterns of the Common Locale Data Repository \(CLDR\).

</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)

</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)

[`Formatting.setTrailingCurrencyCode`](https://ui5.sap.com/#/api/module:sap/base/i18n/Formatting%23methods/sap/base/i18n/Formatting.setTrailingCurrencyCode)

</td>
</tr>
<tr>
<td valign="top">

`ABAP-date-format`

</td>
<td valign="top">

[Type](configuration-options-and-url-parameters-91f2d03.md#loio91f2d03b6f4d1014b6dd926db0e91070__section_TVT): `string`

Default value: `''`

Specifies one of the ABAP date formats.

</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)

</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)

[`Formatting.setABAPDateFormat`](https://ui5.sap.com/#/api/module:sap/base/i18n/Formatting%23methods/sap/base/i18n/Formatting.ABAPDateFormat)

</td>
</tr>
<tr>
<td valign="top">

`ABAP-time-format`

</td>
<td valign="top">

[Type](configuration-options-and-url-parameters-91f2d03.md#loio91f2d03b6f4d1014b6dd926db0e91070__section_TVT): `string`

Default value: `''`

Specifies one of the ABAP time formats.

</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)

</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)

[`Formatting.setABAPTimeFormat`](https://ui5.sap.com/#/api/module:sap/base/i18n/Formatting%23methods/sap/base/i18n/Formatting.setABAPTimeFormat)

</td>
</tr>
<tr>
<td valign="top">

`ABAP-number-format`

</td>
<td valign="top">

[Type](configuration-options-and-url-parameters-91f2d03.md#loio91f2d03b6f4d1014b6dd926db0e91070__section_TVT): `string`

Default value: `''`

Specifies one of the ABAP number formats.

</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)

</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)

[`Formatting.setABAPNumberFormat`](https://ui5.sap.com/#/api/module:sap/base/i18n/Formatting%23methods/sap/base/i18n/Formatting.setABAPNumberFormat)

</td>
</tr>
</table>



<a name="loio91f2d03b6f4d1014b6dd926db0e91070__section_svv_cbv_fzb"/>

## Theming


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

`favicon`

</td>
<td valign="top">

[Type](configuration-options-and-url-parameters-91f2d03.md#loio91f2d03b6f4d1014b6dd926db0e91070__section_TVT): `boolean | string`

Default value: undefined

Defines whether a favicon is used. If set to `true`, a favicon, defined as part of a custom theme, is used. If no custom favicon has been defined or if the theme is an SAP standard theme, the SAP logo is used as favicon. You can also provide a relative path to a favicon as a string, e.g. to specify a favicon for a dedicated application. Absolute URLs are not allowed as origin for a favicon.

</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)

</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)

[`Theming.setFavicon`](https://ui5.sap.com/#/api/module:sap/ui/core/Theming%23methods/sap/ui/core/Theming.setFavicon)

</td>
</tr>
<tr>
<td valign="top">

`theme`

</td>
<td valign="top">

[Type](configuration-options-and-url-parameters-91f2d03.md#loio91f2d03b6f4d1014b6dd926db0e91070__section_TVT): `string`

Default value: The default theme of the used UI5 version

Defines the theme that shall be used.

**Theme Root:** When the theme string contains an at-sign \(`@`\), anything before the `@` is assumed to denote the ID of the theme, while anything after the `@` is assumed to represent the URL location of the theme. To defend against XSS attacks, only origins maintained in `sap-allowed-theme-origins` are accepted. For more information, see [Theme Origin Allowlist](setting-themes-e9fc648.md#loioe9fc648661d84ed89360bbec3ae02611__section_TOA).

</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)

</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)

[`Theming.setTheme`](https://ui5.sap.com/#/api/module:sap/ui/core/Theming%23methods/sap/ui/core/Theming.setTheme)

</td>
</tr>
<tr>
<td valign="top">

`theme-roots`

</td>
<td valign="top">

[Type](configuration-options-and-url-parameters-91f2d03.md#loio91f2d03b6f4d1014b6dd926db0e91070__section_TVT): `{}`

Default value: undefined

Defines the location of themes.

</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)

</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)

</td>
</tr>
</table>



<a name="loio91f2d03b6f4d1014b6dd926db0e91070__section_c33_gbv_fzb"/>

## Control Behavior and UI Integration


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

`accessibility`

</td>
<td valign="top">

[Type](configuration-options-and-url-parameters-91f2d03.md#loio91f2d03b6f4d1014b6dd926db0e91070__section_TVT): `boolean`

Default value: `true`

If set to `true`, the SAPUI5 controls are rendered for or running in accessibility mode.

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

`animation-mode`

</td>
<td valign="top">

Type: [`sap/ui/core/AnimationMode`](https://ui5.sap.com/#/api/module:sap/ui/core/AnimationMode)

Default value: `full`

Sets the animation behavior according to the values and description provided by the [`AnimationMode`](https://ui5.sap.com/#/api/module:sap/ui/core/AnimationMode) enumeration, e.g. `full`, `basic`, `minimal` or `none`.

</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)

</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)

[`ControlBehavior.setAnimationMode`](https://ui5.sap.com/#/api/module:sap/ui/core/ControlBehavior%23methods/sap/ui/core/ControlBehavior.setAnimationMode)

</td>
</tr>
<tr>
<td valign="top">

`uid-prefix`

</td>
<td valign="top">

[Type](configuration-options-and-url-parameters-91f2d03.md#loio91f2d03b6f4d1014b6dd926db0e91070__section_TVT): `string`

Default value: '\_\_' \(i.e. two underscore characters\)

Prefix to be used for automatically generated control IDs; must be chosen carefully to avoid conflicts with IDs defined by the application or DOM IDs.

</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)

</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)

</td>
</tr>
</table>



<a name="loio91f2d03b6f4d1014b6dd926db0e91070__section_trk_3bv_fzb"/>

## Security


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

`allowlist-service` 

</td>
<td valign="top">

[Type](configuration-options-and-url-parameters-91f2d03.md#loio91f2d03b6f4d1014b6dd926db0e91070__section_TVT): `string`

Default value: `""`

URL to an allowlist service; see [Allowlist Service](../05_Developing_Apps/allowlist-service-d04a6d4.md).

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

`frame-options` 

</td>
<td valign="top">

[Type](configuration-options-and-url-parameters-91f2d03.md#loio91f2d03b6f4d1014b6dd926db0e91070__section_TVT): `string`

Default value: `allow`

Frame options mode; for more information, see [Frame Options](../05_Developing_Apps/frame-options-62d9c4d.md).

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

`frame-options-config` 

</td>
<td valign="top">

[Type](configuration-options-and-url-parameters-91f2d03.md#loio91f2d03b6f4d1014b6dd926db0e91070__section_TVT): `{}`

Default value: undefined

Advanced frame options configuration; for more information, see [Frame Options](../05_Developing_Apps/frame-options-62d9c4d.md).

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

`security-token-handlers`

</td>
<td valign="top">

[Type](configuration-options-and-url-parameters-91f2d03.md#loio91f2d03b6f4d1014b6dd926db0e91070__section_TVT): `[]`

Each of these functions is called by the OData V4 model to retrieve the security tokens instead of using the default "X-CSRF-Token".

For more information, see [Security Token Handling](model-instantiation-and-data-access-9613f1f.md#loio9613f1f2d88747cab21896f7216afdac__section_STH).

</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)

</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)

[`Security.setSecurityTokenHandlers`](https://ui5.sap.com/#/api/module:sap/ui/security/Security%23methods/sap/ui/security/Security.setSecurityTokenHandlers)

</td>
</tr>
</table>



<a name="loio91f2d03b6f4d1014b6dd926db0e91070__section_zy1_kbv_fzb"/>

## Supportability


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

`debug`

</td>
<td valign="top">

[Type](configuration-options-and-url-parameters-91f2d03.md#loio91f2d03b6f4d1014b6dd926db0e91070__section_TVT): `boolean | string`

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

![NO](images/Cancel_dfb38de.png)

</td>
</tr>
<tr>
<td valign="top">

`ignore-url-params`

</td>
<td valign="top">

[Type](configuration-options-and-url-parameters-91f2d03.md#loio91f2d03b6f4d1014b6dd926db0e91070__section_TVT): `boolean`

Default value: `false`

Security-relevant parameter that allows applications to disable configuration modifications via URL parameters.

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

[Type](configuration-options-and-url-parameters-91f2d03.md#loio91f2d03b6f4d1014b6dd926db0e91070__section_TVT): `boolean`

Default value: `false`

If set to `true`, the `sap-ui-debug.js` module is included and provides some supportability features.

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

`log-level`

</td>
<td valign="top">

[Type](configuration-options-and-url-parameters-91f2d03.md#loio91f2d03b6f4d1014b6dd926db0e91070__section_TVT): `string`

Default value: `ERROR`

This configuration parameter sets the log level to the given value; for minified \(productive\) sources, the default level is `ERROR`, for debug sources it is `DEBUG`. At runtime, you can modify the log level by using the `sap/base/Log.setLevel` method.

Options: `0|1|2|3|4|5|6|NONE|FATAL|ERROR|WARNING|INFO|DEBUG|ALL`

</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)

</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)

[`Log.setLevel`](https://ui5.sap.com/#/api/module:sap/base/Log%23methods/sap/base/Log.setLevel)

</td>
</tr>
<tr>
<td valign="top">

`statistics`

</td>
<td valign="top">

[Type](configuration-options-and-url-parameters-91f2d03.md#loio91f2d03b6f4d1014b6dd926db0e91070__section_TVT): `boolean`

Default value: `false`

Activates end-to-end traces and measurement of response times For more information, see [Interaction Tracking for Performance Measurement](interaction-tracking-for-performance-measurement-b2825ea.md).

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

[Type](configuration-options-and-url-parameters-91f2d03.md#loio91f2d03b6f4d1014b6dd926db0e91070__section_TVT): `string[]`

Default value: `null`

Whether support mode is enabled. For more information, see [Support Assistant](support-assistant-57ccd7d.md).

Options: `true | silent | window`

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

`test-recorder`

</td>
<td valign="top">

[Type](configuration-options-and-url-parameters-91f2d03.md#loio91f2d03b6f4d1014b6dd926db0e91070__section_TVT): `string[]`

Default value: `null`

Whether test tools are enabled. For more information, see [Test Recorder](test-recorder-2535ef9.md).

Options: `true | silent | window`

</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)

</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)

</td>
</tr>
</table>



<a name="loio91f2d03b6f4d1014b6dd926db0e91070__section_dq2_mbv_fzb"/>

## Loading and Integration


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

`app-cache-buster`

</td>
<td valign="top">

[Type](configuration-options-and-url-parameters-91f2d03.md#loio91f2d03b6f4d1014b6dd926db0e91070__section_TVT): `string[]`

Default value: `[]`

Modifiable at runtime via the `AppCacheBuster` API \(see [Application Cache Buster: Enhanced Concept](application-cache-buster-enhanced-concept-94e0c33.md)\).

If set to a non-empty list of URLs, the `AppCacheBuster` will be activated and will load component version info files from the configured set of URLs \(see [Application Cache Buster](application-cache-buster-ff7aced.md)\).

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

![NO](images/Cancel_dfb38de.png)

</td>
</tr>
<tr>
<td valign="top">

`compat-version` 

</td>
<td valign="top">

Type: `string`

Default value: `1.14`

> ### Note:  
> Applications must set this option to `edge`. **Other version definitions are deprecated.**

For more information, see [Compatibility Version Information](compatibility-version-information-9feb96d.md).

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

`excludejquerycompat`

</td>
<td valign="top">

[Type](configuration-options-and-url-parameters-91f2d03.md#loio91f2d03b6f4d1014b6dd926db0e91070__section_TVT): `boolean`

Default value: `false`

A compatibility layer restores several incompatibly changed APIs in jQuery v3 back to their old behavior in jQuery v2. It may be excluded via this setting. For more information, see [Upgrading from a Version Below 1.82](../02_Read-Me-First/upgrading-from-a-version-below-1-82-147eef9.md).

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

`flexibility-services`

</td>
<td valign="top">

[Type](configuration-options-and-url-parameters-91f2d03.md#loio91f2d03b6f4d1014b6dd926db0e91070__section_TVT): `string`

Default value: `/sap/bc/lrep`

You can define an alternative route from where to load SAPUI5 flexibility.

For more information, see [Bootstrapping SAPUI5 Flexibility](bootstrapping-sapui5-flexibility-642dab2.md).

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

`libs`

</td>
<td valign="top">

[Type](configuration-options-and-url-parameters-91f2d03.md#loio91f2d03b6f4d1014b6dd926db0e91070__section_TVT): `string[]`

Default value: `[]`

Defines a list of libraries that shall be loaded initially.

To load further libraries, the `Lib.load()` method may be used. For more information, see: [Lib.load](https://ui5.sap.com/#/api/sap.ui.core.Lib%23methods/sap.ui.core.Lib.load)

All libraries provided using the configuration option `libs` are merged into the configuration option `modules`.

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

`modules`

</td>
<td valign="top">

[Type](configuration-options-and-url-parameters-91f2d03.md#loio91f2d03b6f4d1014b6dd926db0e91070__section_TVT): `string[]`

Default value: `[]`

Defines a list of JavaScript modules that shall be loaded after the core has been initialized.

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

`no-conflict`

</td>
<td valign="top">

[Type](configuration-options-and-url-parameters-91f2d03.md#loio91f2d03b6f4d1014b6dd926db0e91070__section_TVT): `boolean`

Default value: `false`

If set to `true`, SAPUI5 forces jQuery into `noConflict` mode.

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

`on-init`

</td>
<td valign="top">

[Type](configuration-options-and-url-parameters-91f2d03.md#loio91f2d03b6f4d1014b6dd926db0e91070__section_TVT): `string|function`

Default value: `undefined`

Defines code that has to be executed after the initialization.

In case a string is provided, this must be either the name of a module indicated by the prefix `module:` \(like [`module:sap/ui/core/ComponentSupport`](https://ui5.sap.com/#/api/module:sap/ui/core/ComponentSupport)\) or the name of a property within the `globalThis` object containing a function. The provided module will be loaded and executed after initialization.

Within `globalThis["sap-ui-config"]["on-init"]` it is also possible to provide a function directly.

> ### Caution:  
> For productive scenarios, only the usage of a module is supported. Functions or function references to the `globalThis` object are only intended to be used within non-productive scenarios, such as testing, web-based debugging, or sharing minimal samples.

**Deprecation:** As of UI5 1.120, only module names should be provided for **productive** scenarios. Only for **non-productive** scenarios, references to functions available on the `globalThis` object might also be used.

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

`resource-roots`

</td>
<td valign="top">

[Type](configuration-options-and-url-parameters-91f2d03.md#loio91f2d03b6f4d1014b6dd926db0e91070__section_TVT): `object`

Default value: undefined

With `sap.ui.loader.config({paths: ...})` a map can be used to define locations for resources. See the [API Reference: `sap.ui.loader`](https://ui5.sap.com/#/api/sap.ui.loader)

To provide a URL location that is **not** overwritten by a component later on, `final` can be set to `true`, for example: `{url: '/that/is/the/prefix/', final: true}`

For more information, see the [API Reference: `sap.ui.loader.config`](https://ui5.sap.com/#/api/sap.ui.loader/methods/sap.ui.loader.config)

</td>
<td valign="top">

![NO](images/Cancel_dfb38de.png)

</td>
<td valign="top">

![YES](../02_Read-Me-First/images/Checked_Okay_3929e46.png)

</td>
</tr>
</table>



<a name="loio91f2d03b6f4d1014b6dd926db0e91070__section_TVT"/>

## Types

The table below lists the possible types for configuration options and their corresponding valid values.

> ### Note:  
> Some of the configuration options listed on this page, as well as the ones listed under [Deprecated Configuration Options](deprecated-configuration-options-b474a71.md), might have more restrictions on the allowed values. Please refer to the corresponding entry for more details.


<table>
<tr>
<th valign="top">

Type

</th>
<th valign="top">

Valid Values

</th>
</tr>
<tr>
<td valign="top">

`Boolean` 

</td>
<td valign="top">

`true|false` 

</td>
</tr>
<tr>
<td valign="top">

`Integer` 

</td>
<td valign="top">

Any valid integer value

</td>
</tr>
<tr>
<td valign="top">

`String` 

</td>
<td valign="top">

Any valid string value

</td>
</tr>
<tr>
<td valign="top">

`StringArray`

</td>
<td valign="top">

An empty array `[]`, an array containing one or more valid strings, e.g. `["<string1>", "<string2>", "<stringN>"]`, or a string with a list of values separated by comma or semicolon, e.g. `"<string1>, <string2>, <stringN>".`

> ### Note:  
> For sources where the values can only be provided via a string such as a bootstrap tag, meta tag or URL, you'd need to provide values of type `StringArray` as a comma- or semicolon-separated list.



</td>
</tr>
<tr>
<td valign="top">

`FunctionArray`

</td>
<td valign="top">

An empty array `[]` or an array containing one or more functions, e.g. `[myFunction1, myFunction2, myFunctionN]` 

</td>
</tr>
<tr>
<td valign="top">

`Function`

</td>
<td valign="top">

A valid function object

</td>
</tr>
<tr>
<td valign="top">

`Object`

</td>
<td valign="top">

A valid JavaScript object

</td>
</tr>
<tr>
<td valign="top">

`Enumeration`

</td>
<td valign="top">

Any value which is part of the respective enumeration for the corresponding configuration parameter. For instance, the `animation-mode` parameter can take any value of the `sap/ui/core/AnimationMode` enumeration, such as `AnimationMode.basic`, `AnimationMode.full`, `AnimationMode.minimal`, or `AnimationMode.none`.

</td>
</tr>
</table>



<a name="loio91f2d03b6f4d1014b6dd926db0e91070__section_dfr_j2x_fzb"/>

## Related Information

For alist of deprecated configuration options, see [Deprecated Configuration Options](deprecated-configuration-options-b474a71.md).

