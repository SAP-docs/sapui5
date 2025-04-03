<!-- loio27dec1d8246d4b129d8747a317483253 -->

# What's New in SAPUI5 1.100

With this release SAPUI5 is upgraded from version 1.99 to 1.100.



****


<table>
<tr>
<th valign="top">

Version

</th>
<th valign="top">

Type

</th>
<th valign="top">

Category

</th>
<th valign="top">

Title

</th>
<th valign="top">

Description

</th>
<th valign="top">

Action

</th>
<th valign="top">

Available as of

</th>
</tr>
<tr>
<td valign="top">

1.100 

</td>
<td valign="top">

New 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**New Theme Flavors Available for SAP Fiori User Experience \(Experimental\)** 

</td>
<td valign="top">

**New Theme Flavors Available for SAP Fiori User Experience \(Experimental\)**

The new flavors for the preview version of the *Horizon* visual theme for SAP Fiori are now available \(theme IDs: `sap_horizon_dark`, `sap_horizon_hcb`, and `sap_horizon_hcw`\). In addition to *Morning Horizon*, which was introduced in an earlier release, we have now also provided *Evening Horizon*, *Horizon High Contrast Black*, and *Horizon High Contrast White*.

To preview the new theme flavors, see

-   [https://ui5.sap.com/?sap-ui-theme=sap\_horizon\_dark\#/controls](https://ui5.sap.com/?sap-ui-theme=sap_horizon_dark#/controls)

-   [https://ui5.sap.com/?sap-ui-theme=sap\_horizon\_hcb\#/controls](https://ui5.sap.com/?sap-ui-theme=sap_horizon_hcb#/controls)

-   [https://ui5.sap.com/?sap-ui-theme=sap\_horizon\_hcw\#/controls](https://ui5.sap.com/?sap-ui-theme=sap_horizon_hcw#/controls)


> ### Note:  
> The themes have the status 'experimental' and are thus subject to change. They must not be used as a basis for custom themes as long as the status is 'experimental'.

<sub>New•Feature•Info Only•1.100</sub>

</td>
<td valign="top">

Info Only

</td>
<td valign="top">

2022-03-24

</td>
</tr>
<tr>
<td valign="top">

1.100 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**SAPUI5 Bootstrapping** 

</td>
<td valign="top">

**SAPUI5 Bootstrapping**

For all long-term maintenance versions of SAPUI5 starting from 1.71, you can now use evergreen versions in the bootstrap script. The script takes care to boot your SAPUI5 application from CDN with a specific version using the latest patch level. Additionally, all HTML pages of the Demo Kit using evergreen versions will be automatically redirected. For more information, see [Bootstrapping from SAPUI5 CDN](../04_Essentials/variant-for-bootstrapping-from-content-delivery-network-2d3eb2f.md#loio2d3eb2f322ea4a82983c1c62a33ec4ae__section_CDN).

<sub>Changed•Feature•Info Only•1.100</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-03-24

</td>
</tr>
<tr>
<td valign="top">

1.100 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**SAPUI5 OData V2 Model** 

</td>
<td valign="top">

**SAPUI5 OData V2 Model**

You can now access the status of a `Context` in bindings with the `@$ui5.context.isInactive` and `@$ui5.context.isTransient` instance annotations.For more information, see the [API Reference for `#isInactive`](https://ui5.sap.com/#/api/sap.ui.model.odata.v2.Context%23methods/isInactive) and the [API Reference for `#isTransient`](https://ui5.sap.com/#/api/sap.ui.model.odata.v2.Context%23methods/isTransient).

<sub>Changed•Feature•Info Only•1.100</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-03-24

</td>
</tr>
<tr>
<td valign="top">

1.100 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**SAPUI5 OData V4 Model** 

</td>
<td valign="top">

**SAPUI5 OData V4 Model**

The new version of the SAPUI5 OData V4 model introduces the following features:

-   The `sap.ui.model.odata.v4.ODataModel#getKeepAliveContext` method introduced with SAPUI5 1.99 also works if either no context exists in the identified list binding or if no list binding could be identified at all.For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel%23methods/getKeepAliveContext) and [Relative Bindings](../04_Essentials/data-reuse-648e360.md#loio648e360fa22d46248ca783dc6eb44531__section_relativeBindings).

-   You can now refresh a list binding with transient records.


<sub>Changed•Feature•Info Only•1.100</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-03-24

</td>
</tr>
<tr>
<td valign="top">

1.100 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.QuickView`** 

</td>
<td valign="top">

**`sap.m.QuickView`**

The control now displays a language-dependent “–” symbol when the text for a value is empty. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.QuickView) and the [Sample](https://ui5.sap.com/#/entity/sap.m.QuickViewCard/sample/sap.m.sample.QuickViewCard).

<sub>Changed•Control•Info Only•1.100</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-03-24

</td>
</tr>
<tr>
<td valign="top">

1.100 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.Select`** 

</td>
<td valign="top">

**`sap.m.Select`**

The `sap.m.Select` control has a new `liveChange` event that fires when the user navigates to a different item.For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.Select).

<sub>Changed•Control•Info Only•1.100</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-03-24

</td>
</tr>
<tr>
<td valign="top">

1.100 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.comp.smartfield.SmartField`** 

</td>
<td valign="top">

**`sap.ui.comp.smartfield.SmartField`**

`SmartField` in edit mode now supports time zones for `Edm.DateTimeOffset` fields with the following annotation

```
<Annotation Term="com.sap.vocabularies.Common.v1.Timezone" Path="ClockInTimezone"/>
```

You can format the date in the `sap.ui.core.CustomData` class with `key:“dateFormatSettings”`. If you add the `"showTimezone": "Hide"` property to `sap.ui.core.CustomData`, the time zone will not be shown.

<sub>Changed•Control•Info Only•1.100</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-03-24

</td>
</tr>
<tr>
<td valign="top">

1.100 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.comp.smartfilterbar.SmartFilterBar`** 

</td>
<td valign="top">

**`sap.ui.comp.smartfilterbar.SmartFilterBar`**

`SmartFilterBar` now supports the `com.sap.vocabularies.UI.v1.TextArrangement` annotation for strings in filter fields with a single value.

<sub>Changed•Control•Info Only•1.100</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-03-24

</td>
</tr>
<tr>
<td valign="top">

1.100 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.integration.widgets.Card`** 

</td>
<td valign="top">

**`sap.ui.integration.widgets.Card`**

-   The `showMessage` method is now \(experimentally\) available for all card types. It allows developers to display a message to the user. For more information, see the [Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/extension/showMessage) in the Card Explorer.

-   We have introduced a new `initials` formatter, which creates initials from names. The default length of the returned initials is 2, but you can control it using the optional `length` property. For more information, see the [Initials Formatter](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/formatters/initials) section and the [Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/initials) in the Card Explorer.

-   We have added a new [Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/encodeURIComponent) that demonstrates how you can use expression binding with `EncodeURIComponent` formatter. Expression binding also supports some of the native JS functions like `Array`, `Boolean`, `Date`, `Infinity`, `isFinite`, `isNaN`, `JSON`, `Math`, `NaN`, `Number`, `Object`, `parseFloat`, `parseInt`, `RegExp`, `String`, and `undefined`.


<sub>Changed•Control•Info Only•1.100</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-03-24

</td>
</tr>
<tr>
<td valign="top">

1.100 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

SAP Fiori Elements 

</td>
<td valign="top">

**SAP Fiori elements for OData V2** 

</td>
<td valign="top">

**SAP Fiori elements for OData V2**

The following changes and new features are available for SAP Fiori elements for OData V2:

-   The analytical list page now supports optional parameters for parameterized entity sets. For more information, see [Configuring Filter Bars](../06_SAP_Fiori_Elements/configuring-filter-bars-4bd7590.md).

-   The analytical list page now supports hybrid view in mobile devices with the screen size **M**.

-   In mobile devices, the object page header facets are now aligned horizontally with a scroll option. For more information, see [Header Facets](../06_SAP_Fiori_Elements/header-facets-17dbd5b.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.100</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-03-24

</td>
</tr>
<tr>
<td valign="top">

1.100 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

SAP Fiori Elements 

</td>
<td valign="top">

**SAP Fiori elements for OData V4** 

</td>
<td valign="top">

**SAP Fiori elements for OData V4**

The following changes and new features are available for SAP Fiori elements for OData V4:

-   You can now trigger an action that is connected to a field value. For more information, see [Adding Actions to Tables](../06_SAP_Fiori_Elements/adding-actions-to-tables-b623e0b.md).

-   You can now hide an action parameter using a dynamic expression. For more information, see [Actions](../06_SAP_Fiori_Elements/actions-cbf16c5.md).

-   You can now use the `Table` building block to add bound and unbound actions, and to group actions as menu buttons. You can also send and remove messages related to the table. For more information, see [Building Blocks](../06_SAP_Fiori_Elements/building-blocks-24c1304.md).

-   You can now hide the icon tab bar for multiple views. For more information, see [Multiple Views on List Report Tables](../06_SAP_Fiori_Elements/multiple-views-on-list-report-tables-a37df40.md).

-   SAP Fiori elements for OData V4 now provides the possibility for applications to configure the 412 warning messages \("Precondition Failed" messages\) for standard actions and application-specified actions that deal with a single context. For more information, see [Using Messages](../06_SAP_Fiori_Elements/using-messages-239b192.md) and [Confirmation Popups](../06_SAP_Fiori_Elements/confirmation-popups-9a53662.md).

-   You can now use singletons to influence the visibility of the *Create*, *Delete*, and *Edit* buttons on the object page. For more information, see [Actions](../06_SAP_Fiori_Elements/actions-cbf16c5.md).

-   SAP Fiori elements for OData V4 now supports the `Importance` property for custom columns. For more information, see [Extension Points for Tables](../06_SAP_Fiori_Elements/extension-points-for-tables-d525522.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.100</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-03-24

</td>
</tr>
</table>

**Related Information**  


[What's New in SAPUI5 1.132](what-s-new-in-sapui5-1-132-bd2e61f.md "With this release SAPUI5 is upgraded from version 1.131 to 1.132.")

[What's New in SAPUI5 1.131](what-s-new-in-sapui5-1-131-7d24d94.md "With this release SAPUI5 is upgraded from version 1.130 to 1.131.")

[What's New in SAPUI5 1.130](what-s-new-in-sapui5-1-130-85609d4.md "With this release SAPUI5 is upgraded from version 1.129 to 1.130.")

[What's New in SAPUI5 1.129](what-s-new-in-sapui5-1-129-d22b8af.md "With this release SAPUI5 is upgraded from version 1.128 to 1.129.")

[What's New in SAPUI5 1.128](what-s-new-in-sapui5-1-128-1f76220.md "With this release SAPUI5 is upgraded from version 1.127 to 1.128.")

[What's New in SAPUI5 1.127](what-s-new-in-sapui5-1-127-e5e1317.md "With this release SAPUI5 is upgraded from version 1.126 to 1.127.")

[What's New in SAPUI5 1.126](what-s-new-in-sapui5-1-126-1d98116.md "With this release SAPUI5 is upgraded from version 1.125 to 1.126.")

[What's New in SAPUI5 1.125](what-s-new-in-sapui5-1-125-9d87044.md "With this release SAPUI5 is upgraded from version 1.124 to 1.125.")

[What's New in SAPUI5 1.124](what-s-new-in-sapui5-1-124-7f77c3f.md "With this release SAPUI5 is upgraded from version 1.123 to 1.124.")

[What's New in SAPUI5 1.123](what-s-new-in-sapui5-1-123-9d00ac7.md "With this release SAPUI5 is upgraded from version 1.122 to 1.123.")

[What's New in SAPUI5 1.122](what-s-new-in-sapui5-1-122-5d078da.md "With this release SAPUI5 is upgraded from version 1.121 to 1.122.")

[What's New in SAPUI5 1.121](what-s-new-in-sapui5-1-121-91a4a2f.md "With this release SAPUI5 is upgraded from version 1.120 to 1.121.")

[What's New in SAPUI5 1.120](what-s-new-in-sapui5-1-120-2359b63.md "With this release SAPUI5 is upgraded from version 1.119 to 1.120.")

[What's New in SAPUI5 1.119](what-s-new-in-sapui5-1-119-0b1903a.md "With this release SAPUI5 is upgraded from version 1.118 to 1.119.")

[What's New in SAPUI5 1.118](what-s-new-in-sapui5-1-118-3eecbde.md "With this release SAPUI5 is upgraded from version 1.117 to 1.118.")

[What's New in SAPUI5 1.117](what-s-new-in-sapui5-1-117-029d3b4.md "With this release SAPUI5 is upgraded from version 1.116 to 1.117.")

[What's New in SAPUI5 1.116](what-s-new-in-sapui5-1-116-ebd6f34.md "With this release SAPUI5 is upgraded from version 1.115 to 1.116.")

[What's New in SAPUI5 1.115](what-s-new-in-sapui5-1-115-409fde8.md "With this release SAPUI5 is upgraded from version 1.114 to 1.115.")

[What's New in SAPUI5 1.114](what-s-new-in-sapui5-1-114-890fce1.md "With this release SAPUI5 is upgraded from version 1.113 to 1.114.")

[What's New in SAPUI5 1.113](what-s-new-in-sapui5-1-113-a9553fe.md "With this release SAPUI5 is upgraded from version 1.112 to 1.113.")

[What's New in SAPUI5 1.112](what-s-new-in-sapui5-1-112-34afc69.md "With this release SAPUI5 is upgraded from version 1.111 to 1.112.")

[What's New in SAPUI5 1.111](what-s-new-in-sapui5-1-111-7a67837.md "With this release SAPUI5 is upgraded from version 1.110 to 1.111.")

[What's New in SAPUI5 1.110](what-s-new-in-sapui5-1-110-71a855c.md "With this release SAPUI5 is upgraded from version 1.109 to 1.110.")

[What's New in SAPUI5 1.109](what-s-new-in-sapui5-1-109-3264bd2.md "With this release SAPUI5 is upgraded from version 1.108 to 1.109.")

[What's New in SAPUI5 1.108](what-s-new-in-sapui5-1-108-66e33f0.md "With this release SAPUI5 is upgraded from version 1.107 to 1.108.")

[What's New in SAPUI5 1.107](what-s-new-in-sapui5-1-107-d4ff916.md "With this release SAPUI5 is upgraded from version 1.106 to 1.107.")

[What's New in SAPUI5 1.106](what-s-new-in-sapui5-1-106-5b497b0.md "With this release SAPUI5 is upgraded from version 1.105 to 1.106.")

[What's New in SAPUI5 1.105](what-s-new-in-sapui5-1-105-4d6c00e.md "With this release SAPUI5 is upgraded from version 1.104 to 1.105.")

[What's New in SAPUI5 1.104](what-s-new-in-sapui5-1-104-69e567c.md "With this release SAPUI5 is upgraded from version 1.103 to 1.104.")

[What's New in SAPUI5 1.103](what-s-new-in-sapui5-1-103-0e98c76.md "With this release SAPUI5 is upgraded from version 1.102 to 1.103.")

[What's New in SAPUI5 1.102](what-s-new-in-sapui5-1-102-f038c99.md "With this release SAPUI5 is upgraded from version 1.101 to 1.102.")

[What's New in SAPUI5 1.101](what-s-new-in-sapui5-1-101-7733b00.md "With this release SAPUI5 is upgraded from version 1.100 to 1.101.")

[What's New in SAPUI5 1.99](what-s-new-in-sapui5-1-99-4f35848.md "With this release SAPUI5 is upgraded from version 1.98 to 1.99.")

[What's New in SAPUI5 1.98](what-s-new-in-sapui5-1-98-d9f16f2.md "With this release SAPUI5 is upgraded from version 1.97 to 1.98.")

[What's New in SAPUI5 1.97](what-s-new-in-sapui5-1-97-fa0e282.md "With this release SAPUI5 is upgraded from version 1.96 to 1.97.")

[What's New in SAPUI5 1.96](what-s-new-in-sapui5-1-96-7a9269f.md "With this release SAPUI5 is upgraded from version 1.95 to 1.96.")

[What's New in SAPUI5 1.95](what-s-new-in-sapui5-1-95-a1aea67.md "With this release SAPUI5 is upgraded from version 1.94 to 1.95.")

[What's New in SAPUI5 1.94](what-s-new-in-sapui5-1-94-c40f1e6.md "With this release SAPUI5 is upgraded from version 1.93 to 1.94.")

[What's New in SAPUI5 1.93](what-s-new-in-sapui5-1-93-f273340.md "With this release SAPUI5 is upgraded from version 1.92 to 1.93.")

[What's New in SAPUI5 1.92](what-s-new-in-sapui5-1-92-1ef345d.md "With this release SAPUI5 is upgraded from version 1.91 to 1.92.")

[What's New in SAPUI5 1.91](what-s-new-in-sapui5-1-91-0a2bd79.md "With this release SAPUI5 is upgraded from version 1.90 to 1.91.")

[What's New in SAPUI5 1.90](what-s-new-in-sapui5-1-90-91c10c2.md "With this release SAPUI5 is upgraded from version 1.89 to 1.90.")

[What's New in SAPUI5 1.89](what-s-new-in-sapui5-1-89-e56cddc.md "With this release SAPUI5 is upgraded from version 1.88 to 1.89.")

[What's New in SAPUI5 1.88](what-s-new-in-sapui5-1-88-e15a206.md "With this release SAPUI5 is upgraded from version 1.87 to 1.88.")

[What's New in SAPUI5 1.87](what-s-new-in-sapui5-1-87-b506da7.md "With this release SAPUI5 is upgraded from version 1.86 to 1.87.")

[What's New in SAPUI5 1.86](what-s-new-in-sapui5-1-86-4c1c959.md "With this release SAPUI5 is upgraded from version 1.85 to 1.86.")

[What's New in SAPUI5 1.85](what-s-new-in-sapui5-1-85-1d18eb5.md "With this release SAPUI5 is upgraded from version 1.84 to 1.85.")

[What's New in SAPUI5 1.84](what-s-new-in-sapui5-1-84-dc76640.md "With this release SAPUI5 is upgraded from version 1.82 to 1.84.")

[What's New in SAPUI5 1.82](what-s-new-in-sapui5-1-82-3a8dd13.md "With this release SAPUI5 is upgraded from version 1.81 to 1.82.")

[What's New in SAPUI5 1.81](what-s-new-in-sapui5-1-81-f5e2a21.md "With this release SAPUI5 is upgraded from version 1.80 to 1.81.")

[What's New in SAPUI5 1.80](what-s-new-in-sapui5-1-80-8cee506.md "With this release SAPUI5 is upgraded from version 1.79 to 1.80.")

[What's New in SAPUI5 1.79](what-s-new-in-sapui5-1-79-99c4cdc.md "With this release SAPUI5 is upgraded from version 1.78 to 1.79.")

[What's New in SAPUI5 1.78](what-s-new-in-sapui5-1-78-f09b63e.md "With this release SAPUI5 is upgraded from version 1.77 to 1.78.")

[What's New in SAPUI5 1.77](what-s-new-in-sapui5-1-77-c46b439.md "With this release SAPUI5 is upgraded from version 1.76 to 1.77.")

[What's New in SAPUI5 1.76](what-s-new-in-sapui5-1-76-aad03b5.md "With this release SAPUI5 is upgraded from version 1.75 to 1.76.")

[What's New in SAPUI5 1.75](what-s-new-in-sapui5-1-75-5cbb62d.md "With this release SAPUI5 is upgraded from version 1.74 to 1.75.")

[What's New in SAPUI5 1.74](what-s-new-in-sapui5-1-74-c22208a.md "With this release SAPUI5 is upgraded from version 1.73 to 1.74.")

[What's New in SAPUI5 1.73](what-s-new-in-sapui5-1-73-231dd13.md "With this release SAPUI5 is upgraded from version 1.72 to 1.73.")

[What's New in SAPUI5 1.72](what-s-new-in-sapui5-1-72-521cad9.md "With this release SAPUI5 is upgraded from version 1.71 to 1.72.")

[What's New in SAPUI5 1.71](what-s-new-in-sapui5-1-71-a93a6a3.md "With this release SAPUI5 is upgraded from version 1.70 to 1.71.")

[What's New in SAPUI5 1.70](what-s-new-in-sapui5-1-70-f073d69.md "With this release SAPUI5 is upgraded from version 1.69 to 1.70.")

[What's New in SAPUI5 1.69](what-s-new-in-sapui5-1-69-89a18bd.md "With this release SAPUI5 is upgraded from version 1.68 to 1.69.")

[What's New in SAPUI5 1.68](what-s-new-in-sapui5-1-68-f94bf93.md "With this release SAPUI5 is upgraded from version 1.67 to 1.68.")

[What's New in SAPUI5 1.67](what-s-new-in-sapui5-1-67-a6b1472.md "With this release SAPUI5 is upgraded from version 1.66 to 1.67.")

[What's New in SAPUI5 1.66](what-s-new-in-sapui5-1-66-c9896e9.md "With this release SAPUI5 is upgraded from version 1.65 to 1.66.")

[What's New in SAPUI5 1.65](what-s-new-in-sapui5-1-65-0f5acfd.md "With this release SAPUI5 is upgraded from version 1.64 to 1.65.")

[What's New in SAPUI5 1.64](what-s-new-in-sapui5-1-64-0e30822.md "With this release SAPUI5 is upgraded from version 1.63 to 1.64.")

[What's New in SAPUI5 1.63](what-s-new-in-sapui5-1-63-e8d9da7.md "With this release SAPUI5 is upgraded from version 1.62 to 1.63.")

[What's New in SAPUI5 1.62](what-s-new-in-sapui5-1-62-771f4d5.md "With this release SAPUI5 is upgraded from version 1.61 to 1.62.")

[What's New in SAPUI5 1.61](what-s-new-in-sapui5-1-61-d991552.md "With this release SAPUI5 is upgraded from version 1.60 to 1.61.")

[What's New in SAPUI5 1.60](what-s-new-in-sapui5-1-60-5a0e1f7.md "With this release SAPUI5 is upgraded from version 1.58 to 1.60.")

[What's New in SAPUI5 1.58](what-s-new-in-sapui5-1-58-7c927aa.md "With this release SAPUI5 is upgraded from version 1.56 to 1.58.")

[What's New in SAPUI5 1.56](what-s-new-in-sapui5-1-56-108b7fd.md "With this release SAPUI5 is upgraded from version 1.54 to 1.56.")

[What's New in SAPUI5 1.54](what-s-new-in-sapui5-1-54-c838330.md "With this release SAPUI5 is upgraded from version 1.52 to 1.54.")

[What's New in SAPUI5 1.52](what-s-new-in-sapui5-1-52-849e1b6.md "With this release SAPUI5 is upgraded from version 1.50 to 1.52.")

[What's New in SAPUI5 1.50](what-s-new-in-sapui5-1-50-759e9f3.md "With this release SAPUI5 is upgraded from version 1.48 to 1.50.")

[What's New in SAPUI5 1.48](what-s-new-in-sapui5-1-48-fa1efac.md "With this release SAPUI5 is upgraded from version 1.46 to 1.48.")

[What's New in SAPUI5 1.46](what-s-new-in-sapui5-1-46-6307539.md "With this release SAPUI5 is upgraded from version 1.44 to 1.46.")

[What's New in SAPUI5 1.44](what-s-new-in-sapui5-1-44-a0cb7a0.md "With this release SAPUI5 is upgraded from version 1.42 to 1.44.")

[What's New in SAPUI5 1.42](what-s-new-in-sapui5-1-42-468b05d.md "With this release SAPUI5 is upgraded from version 1.40 to 1.42.")

[What's New in SAPUI5 1.40](what-s-new-in-sapui5-1-40-fbab50e.md "With this release SAPUI5 is upgraded from version 1.38 to 1.40.")

[What's New in SAPUI5 1.38](what-s-new-in-sapui5-1-38-f218918.md "With this release SAPUI5 is upgraded from version 1.36 to 1.38.")

