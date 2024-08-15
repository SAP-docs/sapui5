<!-- loio1ef345ddb8834c51a4fb2e5ffc4840aa -->

# What's New in SAPUI5 1.92

With this release SAPUI5 is upgraded from version 1.91 to 1.92.



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

1.92 

</td>
<td valign="top">

New 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.DynamicDateRange` \(Experimental\)** 

</td>
<td valign="top">

**`sap.m.DynamicDateRange` \(Experimental\)**

The new \(experimental\) `DynamicDateRange` control enables users to select absolute and relative dates and date ranges using a different offset from the current date. Application developers can configure the list of values offered. The `DynamicDateRange` control supports several standard options, but as a developer, you can also define a custom option that fits your specific use case. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.DynamicDateRange) and the [Sample](https://ui5.sap.com/#/entity/sap.m.DynamicDateRange).

<sub>New•Control•Info Only•1.92</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2021-07-15

</td>
</tr>
<tr>
<td valign="top">

1.92 

</td>
<td valign="top">

UI Changed 

</td>
<td valign="top">

Announcement 

</td>
<td valign="top">

**Dialog for Smart Controls** 

</td>
<td valign="top">

**Dialog for Smart Controls**

> ### Note:  
> The following information concerns important changes for end users. These changes may require end users to adjust and/or test cases to be adapted, but they won't stop or disrupt software or processes.

We have improved the usability of the *View Settings* dialog for the smart chart and the smart table and made it more consistent with other dialogs. For example, we have changed the settings for selecting columns as well as sorting, filtering, and grouping them: They are now no longer buttons but tabs. For more information, see the entry for **`sap.ui.comp.smartchart.SmartChart`, `sap.ui.comp.smarttable.SmartTable`**.

<sub>UI Changed•Announcement•Info Only•1.92</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2021-07-15

</td>
</tr>
<tr>
<td valign="top">

1.92 

</td>
<td valign="top">

UI Changed 

</td>
<td valign="top">

Announcement 

</td>
<td valign="top">

**Confirmation Message for Drafts** 

</td>
<td valign="top">

**Confirmation Message for Drafts**

> ### Note:  
> The following information concerns important changes for end users. These changes may require end users to adjust and/or test cases to be adapted, but they won't stop or disrupt software or processes.

When a user has created or edited an object in a draft-enabled object page app that is based on SAP Fiori elements and tries to leave the object without saving the changes, a message box is displayed that asks the user to keep or discard the draft.

![](images/FE_Save_Draft_Message_23c6c7f.png)

<sub>UI Changed•Announcement•Info Only•1.92</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2021-07-15

</td>
</tr>
<tr>
<td valign="top">

1.92 

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

-   The `sap.ui.model.odata.v4.Context#setKeepAlive` method now provides an additional `bRequestMessages` parameter that allows you to request bound messages for the kept-alive context. The message property is identified through the `com.sap.vocabularies.Common.v1.Messages` annotation. For more information, see [Server Messages in the OData V4 Model](../04_Essentials/server-messages-in-the-odata-v4-model-fbe1cb5.md).

-   You can now execute actions with the `Prefer` header `handling=strict`. For more information, see [Strict Handling](../04_Essentials/odata-operations-b54f789.md#loiob54f7895b7594c61a83fa7257fa9d13f__section_SH).

-   We now support absolute property bindings of `$count`. Note that this will display the count as it is provided by the server. If a count that includes transient entries is required, the header context has to be used. For more information, see [Binding Collection Inline Count](../04_Essentials/binding-collection-inline-count-77d2310.md).


<sub>Changed•Feature•Info Only•1.92</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2021-07-15

</td>
</tr>
<tr>
<td valign="top">

1.92 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.Dialog`** 

</td>
<td valign="top">

**`sap.m.Dialog`**

We have updated the colors of value-state status icons. Now, they have better color-contrast ratios for improved accessibility. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.m.Dialog/sample/sap.m.sample.DialogMessage).

<sub>Changed•Control•Info Only•1.92</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2021-07-15

</td>
</tr>
<tr>
<td valign="top">

1.92 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.List, sap.m.Table, sap.m.Tree`** 

</td>
<td valign="top">

**`sap.m.List, sap.m.Table, sap.m.Tree`**

We have provided the new `requestItems` method that lets you load more data in a control. You can now trigger the growing feature manually, if the `growing` property is set to `true`. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.ListBase%23methods/requestItems).

<sub>Changed•Control•Info Only•1.92</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2021-07-15

</td>
</tr>
<tr>
<td valign="top">

1.92 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.QuickViewPage`** 

</td>
<td valign="top">

**`sap.m.QuickViewPage`**

The control now supports avatars, which display business objects, images, initials, and more. To enable this functionality, the `QuickViewPage` control uses `sap.m.Avatar` as an aggregation. The `icon` and `fallbackIcon` properties of the `QuickViewPage` are now deprecated. Instead, developers should use the functionality of the new `avatar` aggregation.For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.QuickViewPage) and the [Sample](https://ui5.sap.com/#/entity/sap.m.QuickView/sample/sap.m.sample.QuickViewAvatarConfiguration).

<sub>Changed•Control•Info Only•1.92</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2021-07-15

</td>
</tr>
<tr>
<td valign="top">

1.92 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.comp.smartchart.SmartChart`, `sap.ui.comp.smarttable.SmartTable`** 

</td>
<td valign="top">

**`sap.ui.comp.smartchart.SmartChart`, `sap.ui.comp.smarttable.SmartTable`**

We have improved the usability of the *View Settings* dialog in these controls and made it more consistent with other dialogs. For example, we have changed the following:

-   We changed the settings for selecting columns as well as sorting, filtering, and grouping them: They are now no longer buttons but tabs. This has also been changed for `SmartChart`.

-   The icons have been aligned with the general SAP Fiori guidelines.

-   To change the order of columns, you can now drag and drop the entries in the list. You can also use the icons in each row.

-   Sorting has been simplified for both `SmartChart` and `SmartTable`.

-   If you choose the *Reset* button, you receive a warning that you are about to set back your changes.


![](images/View_Settings_Dialog_5990753.png)

For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smarttable.SmartTable) and the [Sample](https://ui5.sap.com/#/entity/sap.ui.comp.smarttable.SmartTable/sample/sap.ui.comp.sample.smarttable.mtableCustom).

<sub>Changed•Control•Info Only•1.92</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2021-07-15

</td>
</tr>
<tr>
<td valign="top">

1.92 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.comp.smarttable.SmartTable`** 

</td>
<td valign="top">

**`sap.ui.comp.smarttable.SmartTable`**

We have introduced a global `customData` setting that allows you to configure the `preserveDecimals` format for the `Edm.Decimal` type as well as for units and currencies. This way, you can keep the decimals returned by the back end.For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smarttable.SmartTable) and the [Sample](https://ui5.sap.com/#/entity/sap.ui.comp.smarttable.SmartTable/sample/sap.ui.comp.sample.smarttable.smartTableWithCriticality).

<sub>Changed•Control•Info Only•1.92</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2021-07-15

</td>
</tr>
<tr>
<td valign="top">

1.92 

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

The charts in the Analytical card now support \(in experimental state\) interactions on the detail level. Until now, users could only interact with the whole content area. Now, the user can click on separate points of the charts. As an application developer you can configure two optional scenarios upon click:

-   Trigger navigation actions defined by the `actionableArea` \(experimental\) property.

-   Open a popover with more details about the selected point defined by the `popover` \(experimental\) property.


For more information, see the [Analytical Card](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/types/analytical) section and the [Chart Actions](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/analytical/chartActions) and [Details Popover](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/analytical/detailsPopover) samples in the Card Explorer

<sub>Changed•Control•Info Only•1.92</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2021-07-15

</td>
</tr>
<tr>
<td valign="top">

1.92 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.layout.ResponsiveSplitter`** 

</td>
<td valign="top">

**`sap.ui.layout.ResponsiveSplitter`**

We have added a new `resize` event, fired when the contents of the `sap.ui.layout.PaneContainer` are resized.For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.layout.PaneContainer) and the [Sample](https://ui5.sap.com/#/entity/sap.ui.layout.ResponsiveSplitter/sample/sap.ui.layout.sample.ResponsiveSplitter).

<sub>Changed•Control•Info Only•1.92</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2021-07-15

</td>
</tr>
<tr>
<td valign="top">

1.92 

</td>
<td valign="top">

Deprecated 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**Deprecation of String-Based Rendering** 

</td>
<td valign="top">

**Deprecation of String-Based Rendering**

String-based rendering \(also known as "apiVersion 1" of a renderer\) has been deprecated.Please use the [Semantic Rendering API \("apiVersion 2"\)](https://ui5.sap.com/#/api/sap.ui.core.RenderManager) instead.For a complete list of all deprecations, see [Deprecated APIs](https://ui5.sap.com/#/api/deprecated).

<sub>Deprecated•Feature•Info Only•1.92</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2021-07-15

</td>
</tr>
<tr>
<td valign="top">

1.92 

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

-   You can now define an integer value or a string containing an integer value that defines the maximum number of lines that the text field can grow to when it is editable before a scrollbar is shown. For more information, see the section *Manifest-Based Definition of the Length of a Text Field* in the topic [Different Representations of a Field](../06_SAP_Fiori_Elements/different-representations-of-a-field-c18ada4.md).

-   You can now enable the button to toggle between draft and saved values on the object page. For more information, see [Toggling Between Draft and Saved Values](../06_SAP_Fiori_Elements/toggling-between-draft-and-saved-values-fd3950a.md).

-   SAP Fiori elements for OData V4 now supports inbound processing of values coming for navigation properties when the filter bar is available in the target application. For more information, see the section *Handling Incoming Filters for Navigation Entity Set Properties* in the topic [Navigation to an App \(Inbound Navigation\)](../06_SAP_Fiori_Elements/navigation-to-an-app-inbound-navigation-c337d8b.md).

-   You can now easily see which table, column or row an error message is related to if the app contains many tables, since error messages are now grouped accordingly. For more information, see *Handling Bound Messages* \> *Layout: Message Popover* \> *Group Name* in [Using Messages](../06_SAP_Fiori_Elements/using-messages-239b192.md).

-   When displaying the quick view of semantic links, SAP Fiori elements for OData V4 now ensures that links are always shown in the footer, and that a subtitle is always shown in the header. For more information, see [Configuring the Content of Quick Views](../06_SAP_Fiori_Elements/configuring-the-content-of-quick-views-c245ad7.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.92</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2021-07-15

</td>
</tr>
</table>

**Related Information**  


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

[What's New in SAPUI5 1.100](what-s-new-in-sapui5-1-100-27dec1d.md "With this release SAPUI5 is upgraded from version 1.99 to 1.100.")

[What's New in SAPUI5 1.99](what-s-new-in-sapui5-1-99-4f35848.md "With this release SAPUI5 is upgraded from version 1.98 to 1.99.")

[What's New in SAPUI5 1.98](what-s-new-in-sapui5-1-98-d9f16f2.md "With this release SAPUI5 is upgraded from version 1.97 to 1.98.")

[What's New in SAPUI5 1.97](what-s-new-in-sapui5-1-97-fa0e282.md "With this release SAPUI5 is upgraded from version 1.96 to 1.97.")

[What's New in SAPUI5 1.96](what-s-new-in-sapui5-1-96-7a9269f.md "With this release SAPUI5 is upgraded from version 1.95 to 1.96.")

[What's New in SAPUI5 1.95](what-s-new-in-sapui5-1-95-a1aea67.md "With this release SAPUI5 is upgraded from version 1.94 to 1.95.")

[What's New in SAPUI5 1.94](what-s-new-in-sapui5-1-94-c40f1e6.md "With this release SAPUI5 is upgraded from version 1.93 to 1.94.")

[What's New in SAPUI5 1.93](what-s-new-in-sapui5-1-93-f273340.md "With this release SAPUI5 is upgraded from version 1.92 to 1.93.")

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

