<!-- loio2acafbfcc2cb47e8aac6d2e32399af10 -->

# Deprecated Configuration API

This page describes important aspects of the deprecation of the `sap.ui.core.Configuration` API facade. It shows a migration path away from the deprecated legacy APIs and towards their future-proof alternatives, provided the functionality is still meant for productive usage.



<a name="loio2acafbfcc2cb47e8aac6d2e32399af10__section_msd_jb4_rzb"/>

## Overview of Deprecated API Methods of `Configuration`

The following is an alphabetical list of API methods on `sap.ui.core.Configuration`. Meant as a compact and practical overview, it is derived from the [API Reference](https://ui5.sap.com/#/api/sap.ui.core.Configuration), which may provide complementary information.


<table>
<tr>
<th valign="top">

Legacy API Method on Configuration

</th>
<th valign="top">

New Module

</th>
<th valign="top">

Replace With

</th>
</tr>
<tr>
<td valign="top">

`applySettings`

</td>
<td valign="top">

\-

</td>
<td valign="top">

Deprecated without replacement.

This API method, which was typically used via `sap.ui.getCore().getConfiguration().applySettings()`, is superseded by different dedicated facade modules addressing the corresponding topics. It's therefore not possible to use a generic pattern to replace these calls.

Check the API documentation of [`sap.ui.core.Configuration`](https://ui5.sap.com/#/api/sap.ui.core.Configuration) and use the references below to find the correct replacement.

</td>
</tr>
<tr>
<td valign="top">

`getAccessibility`

</td>
<td valign="top">

[`sap/ui/core/ControlBehavior`](https://ui5.sap.com/#/api/module:sap/ui/core/ControlBehavior) 

</td>
<td valign="top">

[`ControlBehavior.isAccessibilityEnabled()`](https://ui5.sap.com/#/api/module:sap/ui/core/ControlBehavior%23methods/sap/ui/core/ControlBehavior.isAccessibilityEnabled) 

</td>
</tr>
<tr>
<td valign="top">

`getActiveTerminologies`

</td>
<td valign="top">

[`sap/base/i18n/Localization`](https://ui5.sap.com/#/api/module:sap/base/i18n/Localization) 

</td>
<td valign="top">

[`Localization.getActiveTerminologies()`](https://ui5.sap.com/#/api/module:sap/base/i18n/Localization%23methods/sap/base/i18n/Localization.getActiveTerminologies) 

</td>
</tr>
<tr>
<td valign="top">

`getAllowlistService`

</td>
<td valign="top">

[`sap/ui/security/Security`](https://ui5.sap.com/#/api/module:sap/ui/security/Security) 

</td>
<td valign="top">

[`Security.getAllowlistService()`](https://ui5.sap.com/#/api/module:sap/ui/security/Security%23methods/sap/ui/security/Security.getAllowlistService) 

</td>
</tr>
<tr>
<td valign="top">

`getAnimation`

</td>
<td valign="top">

[`sap/ui/core/ControlBehavior`](https://ui5.sap.com/#/api/module:sap/ui/core/ControlBehavior) 

</td>
<td valign="top">

[`ControlBehavior.getAnimationMode()`](https://ui5.sap.com/#/api/module:sap/ui/core/ControlBehavior%23methods/sap/ui/core/ControlBehavior.getAnimationMode) 

</td>
</tr>
<tr>
<td valign="top">

`getAnimationMode`

</td>
<td valign="top">

[`sap/ui/core/ControlBehavior`](https://ui5.sap.com/#/api/module:sap/ui/core/ControlBehavior) 

</td>
<td valign="top">

[`ControlBehavior.getAnimationMode()`](https://ui5.sap.com/#/api/module:sap/ui/core/ControlBehavior%23methods/sap/ui/core/ControlBehavior.getAnimationMode) 

</td>
</tr>
<tr>
<td valign="top">

`getAppCacheBuster`

</td>
<td valign="top">

\-

</td>
<td valign="top">

Deprecated without replacement

</td>
</tr>
<tr>
<td valign="top">

`getAppCacheBusterMode`

</td>
<td valign="top">

\-

</td>
<td valign="top">

Deprecated without replacement

</td>
</tr>
<tr>
<td valign="top">

`getApplication`

</td>
<td valign="top">

\-

</td>
<td valign="top">

Deprecated without replacement. Use [`sap/ui/core/ComponentSupport`](https://ui5.sap.com/#/api/module:sap/ui/core/ComponentSupport) instead. See also [Declarative API for Initial Components](declarative-api-for-initial-components-82a0fce.md).

</td>
</tr>
<tr>
<td valign="top">

`getAutoAriaBodyRole`

</td>
<td valign="top">

\-

</td>
<td valign="top">

Deprecated without replacement

</td>
</tr>
<tr>
<td valign="top">

`getCalendarType`

</td>
<td valign="top">

[`sap/base/i18n/Formatting`](https://ui5.sap.com/#/api/module:sap/base/i18n/Formatting) 

</td>
<td valign="top">

[`Formatting.getCalendarType()`](https://ui5.sap.com/#/api/module:sap/base/i18n/Formatting%23methods/sap/base/i18n/Formatting.getCalendarType) 

</td>
</tr>
<tr>
<td valign="top">

`getCalendarWeekNumbering`

</td>
<td valign="top">

[`sap/base/i18n/Formatting`](https://ui5.sap.com/#/api/module:sap/base/i18n/Formatting) 

</td>
<td valign="top">

[`Formatting.getCalendarWeekNumbering()`](https://ui5.sap.com/#/api/module:sap/base/i18n/Formatting%23methods/sap/base/i18n/Formatting.getCalendarWeekNumbering) 

</td>
</tr>
<tr>
<td valign="top">

`getCompatibilityVersion`

</td>
<td valign="top">

\-

</td>
<td valign="top">

Deprecated without replacement

</td>
</tr>
<tr>
<td valign="top">

`getDebug`

</td>
<td valign="top">

\-

</td>
<td valign="top">

Deprecated without replacement

</td>
</tr>
<tr>
<td valign="top">

`getFileShareSupport`

</td>
<td valign="top">

\-

</td>
<td valign="top">

Deprecated without replacement

</td>
</tr>
<tr>
<td valign="top">

`getFiori2Adaptation`

</td>
<td valign="top">

\-

</td>
<td valign="top">

Deprecated without replacement

</td>
</tr>
<tr>
<td valign="top">

`getFlexibilityServices`

</td>
<td valign="top">

\-

</td>
<td valign="top">

Deprecated without replacement

</td>
</tr>
<tr>
<td valign="top">

`getFormatLocale`

</td>
<td valign="top">

[`sap/base/i18n/Formatting`](https://ui5.sap.com/#/api/module:sap/base/i18n/Formatting) 

</td>
<td valign="top">

[`Formatting.getLanguageTag()`](https://ui5.sap.com/#/api/module:sap/base/i18n/Formatting%23methods/sap/base/i18n/Formatting.getLanguageTag)

The new API returns an [`sap/base/i18n/LanguageTag`](https://ui5.sap.com/#/api/module:sap/base/i18n/LanguageTag). There are two possibilities to replace the deprecated API calls using the new formatting API:

-   Either you replace the deprecated API by transforming the retrieved new `LanguageTag` into an [`sap/ui/core/Locale`](https://ui5.sap.com/#/api/sap.ui.core.Locale). To do so, require `sap/ui/core/Locale` and pass the `LanguageTag` as a parameter to the `Locale` constructor.

-   Alternatively, you adjust the usage of the locale to the new `LanguageTag` API.

> ### Example:  
> ```
> // either transform LanguageTag into Locale and use as before
> sap.ui.require([
>     "sap/base/i18n/Formatting",
>     "sap/ui/core/Locale"
> ], (Formatting, Locale) => {
>     // Transform LanguageTag to Locale
>     const oFormatLocale = new Locale(Formatting.getLanguageTag());
>     const sFormatLanguage = oFormatLocale.getLanguage();
> });
>  
> // or adjust usage of Locale to LanguageTag API
> sap.ui.require([
>     "sap/base/i18n/Formatting"
> ], (Formatting) => {
>     const oFormatLanguageTag = Formatting.getLanguageTag();
>     const sFormatLanguage = oFormatLanguageTag.language;
> });
> ```



</td>
</tr>
<tr>
<td valign="top">

`getFormatSettings`

</td>
<td valign="top">

[`sap/base/i18n/Formatting`](https://ui5.sap.com/#/api/module:sap/base/i18n/Formatting) 

</td>
<td valign="top">

[`Formatting`](https://ui5.sap.com/#/api/module:sap/base/i18n/Formatting%23methods/Summary)

The `getFormatSettings` API is superseded by the `Formatting` facade itself.

> ### Example:  
> ```
> sap.ui.require([
>     "sap/base/i18n/Formatting",
>     "sap/base/i18n/date/CalendarType"
> ], (Formatting, CalendarType) => {
>     Formatting.setCalendarType(CalendarType.Islamic);
> });
> ```



</td>
</tr>
<tr>
<td valign="top">

`getFrameOptions`

</td>
<td valign="top">

[`sap/ui/security/Security`](https://ui5.sap.com/#/api/module:sap/ui/security/Security) 

</td>
<td valign="top">

[`Security.getFrameOptions()`](https://ui5.sap.com/#/api/module:sap/ui/security/Security%23methods/sap/ui/security/Security.getFrameOptions) 

</td>
</tr>
<tr>
<td valign="top">

`getInspect`

</td>
<td valign="top">

\-

</td>
<td valign="top">

Deprecated without replacement

</td>
</tr>
<tr>
<td valign="top">

`getLanguage`

</td>
<td valign="top">

[`sap/base/i18n/Localization`](https://ui5.sap.com/#/api/module:sap/base/i18n/Localization) 

</td>
<td valign="top">

[`Localization.getLanguage()`](https://ui5.sap.com/#/api/module:sap/base/i18n/Localization%23methods/sap/base/i18n/Localization.getLanguage) 

</td>
</tr>
<tr>
<td valign="top">

`getLanguageTag`

</td>
<td valign="top">

[`sap/base/i18n/Localization`](https://ui5.sap.com/#/api/module:sap/base/i18n/Localization) 

</td>
<td valign="top">

`Localization.getLanguageTag().toString()` 

</td>
</tr>
<tr>
<td valign="top">

`getLocale`

</td>
<td valign="top">

[`sap/base/i18n/Localization`](https://ui5.sap.com/#/api/module:sap/base/i18n/Localization) 

</td>
<td valign="top">

[`Formatting.getLanguageTag()`](https://ui5.sap.com/#/api/module:sap/base/i18n/Formatting%23methods/sap/base/i18n/Formatting.getLanguageTag)

The new API returns an [`sap/base/i18n/LanguageTag`](https://ui5.sap.com/#/api/module:sap/base/i18n/LanguageTag). There are two possibilities to replace the deprecated API calls using the new formatting API:

-   Either you replace the deprecated API by transforming the retrieved new `LanguageTag` into an [`sap/ui/core/Locale`](https://ui5.sap.com/#/api/sap.ui.core.Locale). To do so, require `sap/ui/core/Locale` and pass the `LanguageTag` as a parameter to the `Locale` constructor.

-   Alternatively, you adjust the usage of the locale to the new `LanguageTag` API.

> ### Example:  
> ```
> // either transform LanguageTag into Locale and use as before
> sap.ui.require([
>     "sap/base/i18n/Localization",
>     "sap/ui/core/Locale"
> ], (Localization, Locale) => {
>     // Transform LanguageTag to Locale
>     const oLocale = new Locale(Localization.getLanguageTag());
>     const sLanguage = oLocale.getLanguage();
> });
>  
> // or adjust usage of Locale to LanguageTag API
> sap.ui.require([
>     "sap/base/i18n/Localization"
> ], (Localization) => {
>     const oLanguageTag = Localization.getLanguageTag();
>     const sLanguage = oLanguageTag.language;
> });
> ```



</td>
</tr>
<tr>
<td valign="top">

`getManifestFirst`

</td>
<td valign="top">

\-

</td>
<td valign="top">

Deprecated without replacement

</td>
</tr>
<tr>
<td valign="top">

`getNoDuplicateIds`

</td>
<td valign="top">

\-

</td>
<td valign="top">

Deprecated without replacement

</td>
</tr>
<tr>
<td valign="top">

`getOriginInfo`

</td>
<td valign="top">

\-

</td>
<td valign="top">

Deprecated without replacement

</td>
</tr>
<tr>
<td valign="top">

`getRootComponent`

</td>
<td valign="top">

\-

</td>
<td valign="top">

Deprecated without replacement

</td>
</tr>
<tr>
<td valign="top">

`getRTL`

</td>
<td valign="top">

[`sap/base/i18n/Localization`](https://ui5.sap.com/#/api/module:sap/base/i18n/Localization) 

</td>
<td valign="top">

[`Localization.getRTL()`](https://ui5.sap.com/#/api/module:sap/base/i18n/Localization%23methods/sap/base/i18n/Localization.getRTL) 

</td>
</tr>
<tr>
<td valign="top">

`getSAPLogonLanguage`

</td>
<td valign="top">

[`sap/base/i18n/Localization`](https://ui5.sap.com/#/api/module:sap/base/i18n/Localization) 

</td>
<td valign="top">

[`Localization.getSAPLogonLanguage()`](https://ui5.sap.com/#/api/module:sap/base/i18n/Localization%23methods/sap/base/i18n/Localization.getSAPLogonLanguage) 

</td>
</tr>
<tr>
<td valign="top">

`getSecurityTokenHandlers`

</td>
<td valign="top">

[`sap/ui/security/Security`](https://ui5.sap.com/#/api/module:sap/ui/security/Security) 

</td>
<td valign="top">

[`Security.getSecurityTokenHandlers()`](https://ui5.sap.com/#/api/module:sap/ui/security/Security%23methods/sap/ui/security/Security.getSecurityTokenHandlers) 

</td>
</tr>
<tr>
<td valign="top">

`getStatisticsEnabled`

</td>
<td valign="top">

\-

</td>
<td valign="top">

Deprecated without replacement

</td>
</tr>
<tr>
<td valign="top">

`getTheme`

</td>
<td valign="top">

[`sap/ui/core/Theming`](https://ui5.sap.com/#/api/module:sap/ui/core/Theming) 

</td>
<td valign="top">

[`Theming.getTheme()`](https://ui5.sap.com/#/api/module:sap/ui/core/Theming%23methods/sap/ui/core/Theming.getTheme) 

</td>
</tr>
<tr>
<td valign="top">

`getTimezone`

</td>
<td valign="top">

[`sap/base/i18n/Localization`](https://ui5.sap.com/#/api/module:sap/base/i18n/Localization) 

</td>
<td valign="top">

[`Localization.getTimezone()`](https://ui5.sap.com/#/api/module:sap/base/i18n/Localization%23methods/sap/base/i18n/Localization.getTimezone) 

</td>
</tr>
<tr>
<td valign="top">

`getUIDPrefix`

</td>
<td valign="top">

[`sap/ui/base/ManagedObjectMetadata`](https://ui5.sap.com/#/api/sap.ui.base.ManagedObjectMetadata) 

</td>
<td valign="top">

[`ManagedObjectMetadata.getUIDPrefix()`](https://ui5.sap.com/#/api/sap.ui.base.ManagedObjectMetadata%23methods/sap.ui.base.ManagedObjectMetadata.getUIDPrefix) 

</td>
</tr>
<tr>
<td valign="top">

`getVersion`

</td>
<td valign="top">

[`sap/ui/VersionInfo`](https://ui5.sap.com/#/api/module:sap/ui/VersionInfo) 

</td>
<td valign="top">

[`VersionInfo.load()`](https://ui5.sap.com/#/api/module:sap/ui/VersionInfo%23methods/sap/ui/VersionInfo.load)

The `getVersion` method always returned the OpenUI5 version. Check the samples below on how to get either the SAPUI5 or OpenUI5 version. For more information, see [Versioning and Maintenance of SAPUI5](../02_Read-Me-First/versioning-and-maintenance-of-sapui5-91f0214.md).

> ### Example:  
> ```
> sap.ui.require([
>     "sap/ui/VersionInfo",
>     "sap/base/util/Version"
> ], function(VersionInfo, VersionUtil) {
>     // access the SAPUI5 version at runtime
>     VersionInfo.load().then(function(oCurrentVersionInfo) {
>         const oSAPUI5Version = new VersionUtil(oCurrentVersionInfo.version);
>         // ...
>     });
>  
>     // access the OpenUI5 version (core version) at runtime
>     VersionInfo.load("sap.ui.core").then(function(oCurrentVersionInfo) {
>         const oOpenUI5Version = new VersionUtil(oCurrentVersionInfo.version);
>         // ...
>     });
> });
> ```



</td>
</tr>
<tr>
<td valign="top">

`getWhitelistService`

</td>
<td valign="top">

[`sap/ui/security/Security`](https://ui5.sap.com/#/api/module:sap/ui/security/Security) 

</td>
<td valign="top">

[`Security.getAllowlistService()`](https://ui5.sap.com/#/api/module:sap/ui/security/Security%23methods/sap/ui/security/Security.getAllowlistService) 

</td>
</tr>
<tr>
<td valign="top">

`setAnimationMode`

</td>
<td valign="top">

[`sap/ui/core/ControlBehavior`](https://ui5.sap.com/#/api/module:sap/ui/core/ControlBehavior) 

</td>
<td valign="top">

[`ControlBehavior.setAnimationMode()`](https://ui5.sap.com/#/api/module:sap/ui/core/ControlBehavior%23methods/sap/ui/core/ControlBehavior.setAnimationMode) 

</td>
</tr>
<tr>
<td valign="top">

`setCalendarType`

</td>
<td valign="top">

[`sap/base/i18n/Formatting`](https://ui5.sap.com/#/api/module:sap/base/i18n/Formatting) 

</td>
<td valign="top">

[`Formatting.setCalendarType()`](https://ui5.sap.com/#/api/module:sap/base/i18n/Formatting%23methods/sap/base/i18n/Formatting.setCalendarType) 

</td>
</tr>
<tr>
<td valign="top">

`setCalendarWeekNumbering`

</td>
<td valign="top">

[`sap/base/i18n/Formatting`](https://ui5.sap.com/#/api/module:sap/base/i18n/Formatting) 

</td>
<td valign="top">

[`Formatting.setCalendarWeekNumbering()`](https://ui5.sap.com/#/api/module:sap/base/i18n/Formatting%23methods/sap/base/i18n/Formatting.setCalendarWeekNumbering) 

</td>
</tr>
<tr>
<td valign="top">

`setFormatLocale`

</td>
<td valign="top">

[`sap/base/i18n/Formatting`](https://ui5.sap.com/#/api/module:sap/base/i18n/Formatting) 

</td>
<td valign="top">

[`Formatting.setLanguageTag()`](https://ui5.sap.com/#/api/module:sap/base/i18n/Formatting%23methods/sap/base/i18n/Formatting.setLanguageTag)

The deprecated API only accepted a string, whereas the new API also accepts an [`sap/base/i18n/LanguageTag`](https://ui5.sap.com/#/api/module:sap/base/i18n/LanguageTag).

</td>
</tr>
<tr>
<td valign="top">

`setLanguage`

</td>
<td valign="top">

[`sap/base/i18n/Localization`](https://ui5.sap.com/#/api/module:sap/base/i18n/Localization) 

</td>
<td valign="top">

[`Localization.setLanguage()`](https://ui5.sap.com/#/api/module:sap/base/i18n/Localization%23methods/sap/base/i18n/Localization.setLanguage) 

</td>
</tr>
<tr>
<td valign="top">

`setRTL`

</td>
<td valign="top">

[`sap/base/i18n/Localization`](https://ui5.sap.com/#/api/module:sap/base/i18n/Localization) 

</td>
<td valign="top">

[`Localization.setRTL()`](https://ui5.sap.com/#/api/module:sap/base/i18n/Localization%23methods/sap/base/i18n/Localization.setRTL) 

</td>
</tr>
<tr>
<td valign="top">

`setSecurityTokenHandlers`

</td>
<td valign="top">

[`sap/ui/security/Security`](https://ui5.sap.com/#/api/module:sap/ui/security/Security) 

</td>
<td valign="top">

[`Security.setSecurityTokenHandlers()`](https://ui5.sap.com/#/api/module:sap/ui/security/Security%23methods/sap/ui/security/Security.setSecurityTokenHandlers) 

</td>
</tr>
<tr>
<td valign="top">

`setTheme`

</td>
<td valign="top">

[`sap/ui/core/Theming`](https://ui5.sap.com/#/api/module:sap/ui/core/Theming) 

</td>
<td valign="top">

[`Theming.setTheme()`](https://ui5.sap.com/#/api/module:sap/ui/core/Theming%23methods/sap/ui/core/Theming.setTheme) 

</td>
</tr>
<tr>
<td valign="top">

`setTimezone`

</td>
<td valign="top">

[`sap/base/i18n/Localization`](https://ui5.sap.com/#/api/module:sap/base/i18n/Localization) 

</td>
<td valign="top">

[`Localization.setTimezone()`](https://ui5.sap.com/#/api/module:sap/base/i18n/Localization%23methods/sap/base/i18n/Localization.setTimezone) 

</td>
</tr>
</table>



<a name="loio2acafbfcc2cb47e8aac6d2e32399af10__section_occ_3br_rzb"/>

## Overview of Deprecated API Methods of `FormatSettings`

In legacy code, a configuration object that bundled certain format settings of UI5, was often retrieved by calls such as `sap.ui.core.Configuration.getFormatSettings()`, with the following methods then called on that `FormatSettings` object.


<table>
<tr>
<th valign="top">

Legacy API Method on FormatSettings

</th>
<th valign="top">

New Module

</th>
<th valign="top">

Replace With

</th>
</tr>
<tr>
<td valign="top">

`addCustomCurrencies`

</td>
<td valign="top">

[`sap/base/i18n/Formatting`](https://ui5.sap.com/#/api/module:sap/base/i18n/Formatting) 

</td>
<td valign="top">

[`Formatting.addCustomCurrencies()`](https://ui5.sap.com/#/api/module:sap/base/i18n/Formatting%23methods/sap/base/i18n/Formatting.addCustomCurrencies)

</td>
</tr>
<tr>
<td valign="top">

`getCustomCurrencies`

</td>
<td valign="top">

[`sap/base/i18n/Formatting`](https://ui5.sap.com/#/api/module:sap/base/i18n/Formatting) 

</td>
<td valign="top">

[`Formatting.getCustomCurrencies()`](https://ui5.sap.com/#/api/module:sap/base/i18n/Formatting%23methods/sap/base/i18n/Formatting.getCustomCurrencies)

</td>
</tr>
<tr>
<td valign="top">

`getDatePattern`

</td>
<td valign="top">

[`sap/base/i18n/Formatting`](https://ui5.sap.com/#/api/module:sap/base/i18n/Formatting) 

</td>
<td valign="top">

[`Formatting.getDatePattern()`](https://ui5.sap.com/#/api/module:sap/base/i18n/Formatting%23methods/sap/base/i18n/Formatting.getDatePattern)

</td>
</tr>
<tr>
<td valign="top">

`getFormatLocale`

</td>
<td valign="top">

[`sap/base/i18n/Formatting`](https://ui5.sap.com/#/api/module:sap/base/i18n/Formatting) 

</td>
<td valign="top">

[`Formatting.getLanguageTag()`](https://ui5.sap.com/#/api/module:sap/base/i18n/Formatting%23methods/sap/base/i18n/Formatting.getLanguageTag)

The new API returns an [`sap/base/i18n/LanguageTag`](https://ui5.sap.com/#/api/module:sap/base/i18n/LanguageTag). There are two possibilities to replace the deprecated API calls using the new formatting API. See the entry for `getFormatLocale` above.

</td>
</tr>
<tr>
<td valign="top">

`getLegacyDateCalendarCustomizing`

</td>
<td valign="top">

[`sap/base/i18n/Formatting`](https://ui5.sap.com/#/api/module:sap/base/i18n/Formatting) 

</td>
<td valign="top">

[`Formatting.getCustomIslamicCalendarData()`](https://ui5.sap.com/#/api/module:sap/base/i18n/Formatting%23methods/sap/base/i18n/Formatting.getCustomIslamicCalendarData) 

</td>
</tr>
<tr>
<td valign="top">

`getNumberSymbol`

</td>
<td valign="top">

[`sap/base/i18n/Formatting`](https://ui5.sap.com/#/api/module:sap/base/i18n/Formatting) 

</td>
<td valign="top">

[`Formatting.getNumberSymbol()`](https://ui5.sap.com/#/api/module:sap/base/i18n/Formatting%23methods/sap/base/i18n/Formatting.getNumberSymbol) 

</td>
</tr>
<tr>
<td valign="top">

`getTimePattern`

</td>
<td valign="top">

[`sap/base/i18n/Formatting`](https://ui5.sap.com/#/api/module:sap/base/i18n/Formatting) 

</td>
<td valign="top">

[`Formatting.getTimePattern()`](https://ui5.sap.com/#/api/module:sap/base/i18n/Formatting%23methods/sap/base/i18n/Formatting.getTimePattern) 

</td>
</tr>
<tr>
<td valign="top">

`getTrailingCurrencyCode`

</td>
<td valign="top">

[`sap/base/i18n/Formatting`](https://ui5.sap.com/#/api/module:sap/base/i18n/Formatting) 

</td>
<td valign="top">

[`Formatting.getTrailingCurrencyCode()`](https://ui5.sap.com/#/api/module:sap/base/i18n/Formatting%23methods/sap/base/i18n/Formatting.getTrailingCurrencyCode) 

</td>
</tr>
<tr>
<td valign="top">

`setCustomCurrencies`

</td>
<td valign="top">

[`sap/base/i18n/Formatting`](https://ui5.sap.com/#/api/module:sap/base/i18n/Formatting) 

</td>
<td valign="top">

[`Formatting.setCustomCurrencies()`](https://ui5.sap.com/#/api/module:sap/base/i18n/Formatting%23methods/sap/base/i18n/Formatting.setCustomCurrencies) 

</td>
</tr>
<tr>
<td valign="top">

`setDatePattern`

</td>
<td valign="top">

[`sap/base/i18n/Formatting`](https://ui5.sap.com/#/api/module:sap/base/i18n/Formatting) 

</td>
<td valign="top">

[`Formatting.setDatePattern()`](https://ui5.sap.com/#/api/module:sap/base/i18n/Formatting%23methods/sap/base/i18n/Formatting.setDatePattern) 

</td>
</tr>
<tr>
<td valign="top">

`setFirstDayOfWeek`

</td>
<td valign="top">

[`sap/base/i18n/Formatting`](https://ui5.sap.com/#/api/module:sap/base/i18n/Formatting) 

</td>
<td valign="top">

[`Formatting.setCalendarWeekNumbering()`](https://ui5.sap.com/#/api/module:sap/base/i18n/Formatting%23methods/sap/base/i18n/Formatting.setCalendarWeekNumbering) 

</td>
</tr>
<tr>
<td valign="top">

`setLegacyDateCalendarCustomizing`

</td>
<td valign="top">

[`sap/base/i18n/Formatting`](https://ui5.sap.com/#/api/module:sap/base/i18n/Formatting) 

</td>
<td valign="top">

[`Formatting.setCustomIslamicCalendarData()`](https://ui5.sap.com/#/api/module:sap/base/i18n/Formatting%23methods/sap/base/i18n/Formatting.setCustomIslamicCalendarData) 

</td>
</tr>
<tr>
<td valign="top">

`setLegacyDateFormat`

</td>
<td valign="top">

[`sap/base/i18n/Formatting`](https://ui5.sap.com/#/api/module:sap/base/i18n/Formatting) 

</td>
<td valign="top">

[`Formatting.setABAPDateFormat()`](https://ui5.sap.com/#/api/module:sap/base/i18n/Formatting%23methods/sap/base/i18n/Formatting.setABAPDateFormat)

This renaming \(along with similar ones for `setLegacyNumberFormat` and `setLegacyTimeFormat`\), has been done to reflect their relation to SAP ABAP back ends. Consequently, the corresponding change event parameter has been named `ABAPDateFormat` \(and `ABAPNumberFormat` or `ABAPTimeFormat`, respectively\).

Also refer to [`sap/base/i18n/Formatting$ChangeEvent`](https://ui5.sap.com/#/api/module:sap/base/i18n/Formatting$ChangeEvent) for a detailed breakdown of all available change event parameters.

</td>
</tr>
<tr>
<td valign="top">

`setLegacyNumberFormat`

</td>
<td valign="top">

[`sap/base/i18n/Formatting`](https://ui5.sap.com/#/api/module:sap/base/i18n/Formatting) 

</td>
<td valign="top">

[`Formatting.setABAPNumberFormat()`](https://ui5.sap.com/#/api/module:sap/base/i18n/Formatting%23methods/sap/base/i18n/Formatting.setABAPNumberFormat)

See information for `setLegacyDateFormat`.

</td>
</tr>
<tr>
<td valign="top">

`setLegacyTimeFormat`

</td>
<td valign="top">

[`sap/base/i18n/Formatting`](https://ui5.sap.com/#/api/module:sap/base/i18n/Formatting) 

</td>
<td valign="top">

[`Formatting.setABAPTimeFormat()`](https://ui5.sap.com/#/api/module:sap/base/i18n/Formatting%23methods/sap/base/i18n/Formatting.setABAPTimeFormat)

See information for `setLegacyDateFormat`.

</td>
</tr>
<tr>
<td valign="top">

`setNumberSymbol`

</td>
<td valign="top">

[`sap/base/i18n/Formatting`](https://ui5.sap.com/#/api/module:sap/base/i18n/Formatting) 

</td>
<td valign="top">

[`Formatting.setNumberSymbol()`](https://ui5.sap.com/#/api/module:sap/base/i18n/Formatting%23methods/sap/base/i18n/Formatting.setNumberSymbol) 

</td>
</tr>
<tr>
<td valign="top">

`setTimePattern`

</td>
<td valign="top">

[`sap/base/i18n/Formatting`](https://ui5.sap.com/#/api/module:sap/base/i18n/Formatting) 

</td>
<td valign="top">

[`Formatting.setTimePattern()`](https://ui5.sap.com/#/api/module:sap/base/i18n/Formatting%23methods/sap/base/i18n/Formatting.setTimePattern) 

</td>
</tr>
<tr>
<td valign="top">

`setTrailingCurrencyCode`

</td>
<td valign="top">

[`sap/base/i18n/Formatting`](https://ui5.sap.com/#/api/module:sap/base/i18n/Formatting) 

</td>
<td valign="top">

[`Formatting.setTrailingCurrencyCode()`](https://ui5.sap.com/#/api/module:sap/base/i18n/Formatting%23methods/sap/base/i18n/Formatting.setTrailingCurrencyCode) 

</td>
</tr>
</table>

