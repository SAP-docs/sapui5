<!-- loio5deb78f36022473487be44cb3a71140a -->

# What's New in SAPUI5 1.100

With this release SAPUI5 is upgraded from version 1.99 to 1.100.



<a name="loio5deb78f36022473487be44cb3a71140a__section_vvy_452_rrb"/>

## Preview and Announcements

The following information concerns important upcoming changes. UI changes may have an impact on the user experience and may require test cases to be adapted.


<table>
<tr>
<th valign="top">

Type



</th>
<th valign="top">

Description



</th>
<th valign="top">

Available as of SAPUI5 Version



</th>
</tr>
<tr>
<td valign="top">

Announcement



</td>
<td valign="top">

**Reminder: Outdated SAPUI5 Versions to Be Removed from the CDN**

For security reasons, SAPUI5 versions that are no longer maintained will be removed from the UI5 content delivery network \(CDN\) one year after their end of maintenance. If a version is still in maintenance, patches of that version that are older than one year will also be removed. We have noted that a number of customers are still using such outdated versions or patches. If this affects you, please note that once these versions or patches are removed, your applications will break. Please update to a more recent version or patch. For more information, see: [Removing Outdated UI5 Versions from UI5 CDN](https://blogs.sap.com/2021/01/26/removing-outdated-ui5-versions-from-ui5-cdn/) as well as the UI5 notifications in the Demo Kit.



</td>
<td valign="top">

n/a



</td>
</tr>
</table>



<a name="loio5deb78f36022473487be44cb3a71140a__section_yxw_pxt_zcb"/>

## New Features


<table>
<tr>
<td valign="top">

**New Theme Flavors Available for SAP Fiori User Experience \(Experimental\)**

The new flavors for the preview version of the *Horizon* visual theme for SAP Fiori are now available \(theme IDs: `sap_horizon_dark`, `sap_horizon_hcb`, and `sap_horizon_hcw`\). In addition to *Morning Horizon*, which was introduced in an earlier release, we have now also provided *Evening Horizon*, *Horizon High Contrast Black*, and *Horizon High Contrast White*.

To preview the new theme flavors, see

-   [https://ui5.sap.com/?sap-ui-theme=sap\_horizon\_dark\#/controls](https://ui5.sap.com/?sap-ui-theme=sap_horizon_dark#/controls)

-   [https://ui5.sap.com/?sap-ui-theme=sap\_horizon\_hcb\#/controls](https://ui5.sap.com/?sap-ui-theme=sap_horizon_hcb#/controls)

-   [https://ui5.sap.com/?sap-ui-theme=sap\_horizon\_hcw\#/controls](https://ui5.sap.com/?sap-ui-theme=sap_horizon_hcw#/controls)


> ### Note:  
> The themes have the status 'experimental' and are thus subject to change. They must not be used as a basis for custom themes as long as the status is 'experimental'.



</td>
</tr>
</table>



<a name="loio5deb78f36022473487be44cb3a71140a__section_qwl_pb5_zcb"/>

## Improved Features


<table>
<tr>
<td valign="top">

**SAPUI5 Bootstrapping**

For all long-term maintenance versions of SAPUI5 starting from 1.71, you can now use evergreen versions in the bootstrap script. The script takes care to boot your SAPUI5 application from CDN with a specific version using the latest patch level. Additionally, all HTML pages of the Demo Kit using evergreen versions will be automatically redirected. For more information, see [Bootstrapping from SAPUI5 CDN](../04_Essentials/variant-for-bootstrapping-from-content-delivery-network-2d3eb2f.md#loio2d3eb2f322ea4a82983c1c62a33ec4ae__section_CDN).



</td>
</tr>
<tr>
<td valign="top">

**SAPUI5 OData V2 Model**

You can now access the status of a `Context` in bindings with the `@$ui5.context.isInactive` and `@$ui5.context.isTransient` instance annotations.For more information, see the [API Reference for `#isInactive`](https://ui5.sap.com/#/api/sap.ui.model.odata.v2.Context%23methods/isInactive) and the [API Reference for `#isTransient`](https://ui5.sap.com/#/api/sap.ui.model.odata.v2.Context%23methods/isTransient).



</td>
</tr>
<tr>
<td valign="top">

**SAPUI5 OData V4 Model**

The new version of the SAPUI5 OData V4 model introduces the following features:

-   The `sap.ui.model.odata.v4.ODataModel#getKeepAliveContext` method introduced with SAPUI5 1.99 also works if either no context exists in the identified list binding or if no list binding could be identified at all.For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel%23methods/getKeepAliveContext) and [Relative Bindings](../04_Essentials/data-reuse-648e360.md#loio648e360fa22d46248ca783dc6eb44531__section_relativeBindings).

-   You can now refresh a list binding with transient records.




</td>
</tr>
</table>



<a name="loio5deb78f36022473487be44cb3a71140a__section_rqn_wd5_zcb"/>

## Improved Controls


<table>
<tr>
<td valign="top">

**`sap.m.QuickView`**

Тhe control now displays a language-dependent “–” symbol when the text for a value is empty. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.QuickView) and the [Sample](https://ui5.sap.com/#/entity/sap.m.QuickViewCard/sample/sap.m.sample.QuickViewCard).



</td>
</tr>
<tr>
<td valign="top">

**`sap.m.Select`**

The `sap.m.Select` control has a new `liveChange` event that fires when the user navigates to a different item.For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.Select).



</td>
</tr>
<tr>
<td valign="top">

**`sap.ui.comp.smartfield.SmartField`**

`SmartField` in edit mode now supports time zones for `Edm.DateTimeOffset` fields with the following annotation

```
<Annotation Term="com.sap.vocabularies.Common.v1.Timezone" Path="ClockInTimezone"/>
```

You can format the date in the `sap.ui.core.CustomData` class with `key:“dateFormatSettings”`. If you add the `"showTimezone": "Hide"` property to `sap.ui.core.CustomData`, the time zone will not be shown.



</td>
</tr>
<tr>
<td valign="top">

**`sap.ui.comp.smartfilterbar.SmartFilterBar`**

`SmartFilterBar` now supports the `com.sap.vocabularies.UI.v1.TextArrangement` annotation for strings in filter fields with a single value.



</td>
</tr>
<tr>
<td valign="top">

**`sap.ui.integration.widgets.Card`**

-   The `showMessage` method is now \(experimentally\) available for all card types. It allows developers to display a message to the user. For more information, see the [Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/extension/showMessage) in the Card Explorer.

-   We have introduced a new `initials` formatter, which creates initials from names. The default length of the returned initials is 2, but you can control it using the optional `length` property. For more information, see the [Initials Formatter](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/formatters/initials) section and the [Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/initials) in the Card Explorer.

-   We have added a new [Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/encodeURIComponent) that demonstrates how you can use expression binding with `EncodeURIComponent` formatter. Expression binding also supports some of the native JS functions like `Array`, `Boolean`, `Date`, `Infinity`, `isFinite`, `isNaN`, `JSON`, `Math`, `NaN`, `Number`, `Object`, `parseFloat`, `parseInt`, `RegExp`, `String`, and `undefined`.




</td>
</tr>
</table>



<a name="loio5deb78f36022473487be44cb3a71140a__section_cps_cg5_zcb"/>

## Deprecations


<table>
<tr>
<td valign="top">

There are currently no major deprecations. For a complete list of all deprecations, see [Deprecated APIs](https://ui5.sap.com/#/api/deprecated). 



</td>
</tr>
</table>



<a name="loio5deb78f36022473487be44cb3a71140a__section_g3r_bf5_zcb"/>

## SAP Fiori Elements


<table>
<tr>
<td valign="top">

The following changes and new features are available for SAP Fiori elements for OData V2:

-   The analytical list page now supports optional parameters for parameterized entity sets. For more information, see [Configuring Filter Bars](../06_SAP_Fiori_Elements/configuring-filter-bars-4bd7590.md).

-   The analytical list page now supports hybrid view in mobile devices with the screen size **M**.

-   In mobile devices, the object page header facets are now aligned horizontally with a scroll option. For more information, see [Header Facets](../06_SAP_Fiori_Elements/header-facets-17dbd5b.md).




</td>
</tr>
<tr>
<td valign="top">

The following changes and new features are available for SAP Fiori elements for OData V4:

-   You can now trigger an action that is connected to a field value. For more information, see [Adding Actions to Tables](../06_SAP_Fiori_Elements/adding-actions-to-tables-b623e0b.md).

-   You can now hide an action parameter using a dynamic expression. For more information, see [Actions](../06_SAP_Fiori_Elements/actions-cbf16c5.md).

-   You can now use the `Table` building block to add bound and unbound actions, and to group actions as menu buttons. You can also send and remove messages related to the table. For more information, see [Building Blocks](../06_SAP_Fiori_Elements/building-blocks-24c1304.md).

-   You can now hide the icon tab bar for multiple views. For more information, see [Multiple Views on List Report Tables](../06_SAP_Fiori_Elements/multiple-views-on-list-report-tables-a37df40.md).

-   SAP Fiori elements for OData V4 now provides the possibility for applications to configure the 412 warning messages \("Precondition Failed" messages\) for standard actions and application-specified actions that deal with a single context. For more information, see [Using Messages](../06_SAP_Fiori_Elements/using-messages-239b192.md) and [Confirmation Popups](../06_SAP_Fiori_Elements/confirmation-popups-9a53662.md).

-   You can now use singletons to influence the visibility of the *Create*, *Delete*, and *Edit* buttons on the object page. For more information, see [Actions](../06_SAP_Fiori_Elements/actions-cbf16c5.md).

-   SAP Fiori elements for OData V4 now supports the `Importance` property for custom columns. For more information, see [Extension Points for Tables](../06_SAP_Fiori_Elements/extension-points-for-tables-d525522.md).




</td>
</tr>
</table>

**Parent topic:** [Previous Versions](previous-versions-6660a59.md "")

**Related Information**  


[What's New in SAPUI5 1.105](what-s-new-in-sapui5-1-105-5567dcc.md "With this release SAPUI5 is upgraded from version 1.104 to 1.105.")

[What's New in SAPUI5 1.104](what-s-new-in-sapui5-1-104-f01ebd4.md "With this release SAPUI5 is upgraded from version 1.103 to 1.104.")

[What's New in SAPUI5 1.103](what-s-new-in-sapui5-1-103-7534ae8.md "With this release SAPUI5 is upgraded from version 1.102 to 1.103.")

[What's New in SAPUI5 1.102](what-s-new-in-sapui5-1-102-b530db3.md "With this release SAPUI5 is upgraded from version 1.101 to 1.102.")

[What's New in SAPUI5 1.101](what-s-new-in-sapui5-1-101-5a18410.md "With this release SAPUI5 is upgraded from version 1.100 to 1.101.")

[What's New in SAPUI5 1.99](what-s-new-in-sapui5-1-99-5e35c25.md "With this release SAPUI5 is upgraded from version 1.98 to 1.99.")

[What's New in SAPUI5 1.98](what-s-new-in-sapui5-1-98-7aacb4e.md "With this release SAPUI5 is upgraded from version 1.97 to 1.98.")

[What's New in SAPUI5 1.97](what-s-new-in-sapui5-1-97-f21858f.md "With this release SAPUI5 is upgraded from version 1.96 to 1.97.")

[What's New in SAPUI5 1.96](what-s-new-in-sapui5-1-96-b39a11b.md "With this release SAPUI5 is upgraded from version 1.95 to 1.96.")

[What's New in SAPUI5 1.95](what-s-new-in-sapui5-1-95-1b09465.md "With this release SAPUI5 is upgraded from version 1.94 to 1.95.")

[What's New in SAPUI5 1.94](what-s-new-in-sapui5-1-94-2d6ffdd.md "With this release SAPUI5 is upgraded from version 1.93 to 1.94.")

[What's New in SAPUI5 1.93](what-s-new-in-sapui5-1-93-e9c8356.md "With this release SAPUI5 is upgraded from version 1.92 to 1.93.")

[What's New in SAPUI5 1.92](what-s-new-in-sapui5-1-92-1492551.md "With this release SAPUI5 is upgraded from version 1.91 to 1.92.")

[What's New in SAPUI5 1.91](what-s-new-in-sapui5-1-91-75777da.md "With this release SAPUI5 is upgraded from version 1.90 to 1.91.")

[What's New in SAPUI5 1.90](what-s-new-in-sapui5-1-90-b475202.md "With this release SAPUI5 is upgraded from version 1.89 to 1.90.")

[What's New in SAPUI5 1.89](what-s-new-in-sapui5-1-89-0805036.md "With this release SAPUI5 is upgraded from version 1.88 to 1.89.")

[What's New in SAPUI5 1.88](what-s-new-in-sapui5-1-88-bda141b.md "With this release SAPUI5 is upgraded from version 1.87 to 1.88.")

[What's New in SAPUI5 1.87](what-s-new-in-sapui5-1-87-e315108.md "With this release SAPUI5 is upgraded from version 1.86 to 1.87.")

[What's New in SAPUI5 1.86](what-s-new-in-sapui5-1-86-067e2fb.md "With this release SAPUI5 is upgraded from version 1.85 to 1.86.")

[What's New in SAPUI5 1.85](what-s-new-in-sapui5-1-85-eeb5bd9.md "With this release SAPUI5 is upgraded from version 1.84 to 1.85.")

[What's New in SAPUI5 1.84](what-s-new-in-sapui5-1-84-ccf76b7.md "With this release SAPUI5 is upgraded from version 1.82 to 1.84.")

[What's New in SAPUI5 1.82](what-s-new-in-sapui5-1-82-f081cf0.md "With this release SAPUI5 is upgraded from version 1.81 to 1.82.")

[What's New in SAPUI5 1.81](what-s-new-in-sapui5-1-81-f71563c.md "With this release SAPUI5 is upgraded from version 1.80 to 1.81.")

[What's New in SAPUI5 1.80](what-s-new-in-sapui5-1-80-3294c68.md "With this release SAPUI5 is upgraded from version 1.79 to 1.80.")

[What's New in SAPUI5 1.79](what-s-new-in-sapui5-1-79-edf8e35.md "With this release SAPUI5 is upgraded from version 1.78 to 1.79.")

[What's New in SAPUI5 1.78](what-s-new-in-sapui5-1-78-d176be3.md "With this release SAPUI5 is upgraded from version 1.77 to 1.78.")

[What's New in SAPUI5 1.77](what-s-new-in-sapui5-1-77-2ec6b6b.md "With this release SAPUI5 is upgraded from version 1.76 to 1.77.")

[What's New in SAPUI5 1.76](what-s-new-in-sapui5-1-76-b9b0a3f.md "With this release SAPUI5 is upgraded from version 1.75 to 1.76.")

[What's New in SAPUI5 1.75](what-s-new-in-sapui5-1-75-dc3d3ce.md "With this release SAPUI5 is upgraded from version 1.74 to 1.75.")

[What's New in SAPUI5 1.74](what-s-new-in-sapui5-1-74-21fc6cb.md "With this release SAPUI5 is upgraded from version 1.73 to 1.74.")

[What's New in SAPUI5 1.73](what-s-new-in-sapui5-1-73-7b82664.md "With this release SAPUI5 is upgraded from version 1.72 to 1.73.")

[What's New in SAPUI5 1.72](what-s-new-in-sapui5-1-72-25e5326.md "With this release SAPUI5 is upgraded from version 1.71 to 1.72.")

[What's New in SAPUI5 1.71](what-s-new-in-sapui5-1-71-609fd01.md "With this release SAPUI5 is upgraded from version 1.70 to 1.71.")

[What's New in SAPUI5 1.70](what-s-new-in-sapui5-1-70-4e89fee.md "With this release SAPUI5 is upgraded from version 1.69 to 1.70.")

[What's New in SAPUI5 1.69](what-s-new-in-sapui5-1-69-41203fd.md "With this release SAPUI5 is upgraded from version 1.68 to 1.69.")

[What's New in SAPUI5 1.68](what-s-new-in-sapui5-1-68-5531aef.md "With this release SAPUI5 is upgraded from version 1.67 to 1.68.")

[What's New in SAPUI5 1.67](what-s-new-in-sapui5-1-67-0968958.md "With this release SAPUI5 is upgraded from version 1.66 to 1.67.")

[What's New in SAPUI5 1.66](what-s-new-in-sapui5-1-66-ebe7fda.md "With this release SAPUI5 is upgraded from version 1.65 to 1.66.")

[What's New in SAPUI5 1.65](what-s-new-in-sapui5-1-65-9d2b189.md "With this release SAPUI5 is upgraded from version 1.64 to 1.65.")

[What's New in SAPUI5 1.64](what-s-new-in-sapui5-1-64-1975e30.md "With this release SAPUI5 is upgraded from version 1.63 to 1.64.")

[What's New in SAPUI5 1.63](what-s-new-in-sapui5-1-63-77e1dcc.md "With this release SAPUI5 is upgraded from version 1.62 to 1.63.")

[What's New in SAPUI5 1.62](what-s-new-in-sapui5-1-62-27eea38.md "With this release SAPUI5 is upgraded from version 1.61 to 1.62.")

[What's New in SAPUI5 1.61](what-s-new-in-sapui5-1-61-de4d50b.md "With this release SAPUI5 is upgraded from version 1.60 to 1.61.")

[What's New in SAPUI5 1.60](what-s-new-in-sapui5-1-60-2a70354.md "With this release SAPUI5 is upgraded from version 1.58 to 1.60.")

[What's New in SAPUI5 1.58](what-s-new-in-sapui5-1-58-b28edde.md "With this release, SAPUI5 is upgraded from version 1.56 to 1.58.")

[What's New in SAPUI5 1.56](what-s-new-in-sapui5-1-56-53b4b5e.md "With this release, SAPUI5 is upgraded from version 1.54 to 1.56.")

[What's New in SAPUI5 1.54](what-s-new-in-sapui5-1-54-f29023e.md "With this release, SAPUI5 is upgraded from version 1.52 to 1.54.")

[What's New in SAPUI5 1.52](what-s-new-in-sapui5-1-52-a09dd79.md "With this release, SAPUI5 is upgraded from version 1.50 to 1.52.")

[What's New in SAPUI5 1.50](what-s-new-in-sapui5-1-50-a844984.md "With this release, SAPUI5 is upgraded from version 1.48 to 1.50.")

[What's New in SAPUI5 1.48](what-s-new-in-sapui5-1-48-2818f80.md "With this release, SAPUI5 is upgraded from version 1.46 to 1.48.")

[What's New in SAPUI5 1.46](what-s-new-in-sapui5-1-46-4cf0986.md "With this release, SAPUI5 is upgraded from version 1.44 to 1.46.")

[What's New in SAPUI5 1.44](what-s-new-in-sapui5-1-44-05ce1dc.md "With this release, SAPUI5 is upgraded from version 1.42 to 1.44.")

[What's New in SAPUI5 1.42](what-s-new-in-sapui5-1-42-4768f1a.md "With this release, SAPUI5 is upgraded from version 1.40 to 1.42.")

[What's New in SAPUI5 1.40](what-s-new-in-sapui5-1-40-e659bd2.md "With this release, SAPUI5 is upgraded from version 1.38 to 1.40.")

[What's New in SAPUI5 1.38](what-s-new-in-sapui5-1-38-6a875f9.md#loio6a875f998994489483e8085705347d72 "With this release, SAPUI5 is upgraded from version 1.36 to 1.38.")

