<!-- loiod22b8af563784d8cbcff8afd3955734e -->

<link rel="stylesheet" type="text/css" href="../css/sap-icons.css"/>

# What's New in SAPUI5 1.129

With this release SAPUI5 is upgraded from version 1.128 to 1.129.

> ### Tip:  
> If you want to do a search across all versions of the What's New content, you can also find it in the [SAPUI5 What's New viewer](https://help.sap.com/whats-new/67f60363b57f4ac0b23efd17fa192d60).

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

1.129 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**Harmonized Context Menu in Key User Adaptation** 

</td>
<td valign="top">

**Harmonized Context Menu in Key User Adaptation**

The context menu is now consistent when you select elements. It no longer depends on how you select an element, such as using the left or right mouse button. The familiar right-click context menu now also appears when you left-click an element.

<sub>Changed•Feature•Info Only•1.129</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-10-03

</td>
</tr>
<tr>
<td valign="top">

1.129 

</td>
<td valign="top">

New 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**What's New Dialog in Key User Adaptation** 

</td>
<td valign="top">

**What's New Dialog in Key User Adaptation**

The *What's New* dialog keeps you informed about the latest updates, features, and improvements in key user adaptation.

After an upgrade, the dialog automatically shows the new features introduced with the new version. If you're interested in features from previous versions, you can find an overview in the <span class="SAP-icons-V5"></span> \(More Actions\) menu in the toolbar.

<sub>New•Feature•Info Only•1.129</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-10-03

</td>
</tr>
<tr>
<td valign="top">

1.129 

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

-   We have added the experimental `$$separate` binding parameter to `ODataListBinding`, which allows you to load properties with a longer loading time in a separate request. At the moment, only navigation properties can be specified in `$$separate`. Note that this parameter must not be used in productive applications yet.

-   We now support filtering by aggregated properties. For more information, see [Filtering](../04_Essentials/data-aggregation-and-recursive-hierarchy-7d91431.md#loio7d914317c0b64c23824bf932cc8a4ae1__section_DAF).


<sub>Changed•Feature•Info Only•1.129</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-10-03

</td>
</tr>
<tr>
<td valign="top">

1.129 

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

We now provide the `sap.ui.model.odata.ODataMetaModel#getFunctionImportParameterContext` method, which provides the parameter context for `sap.ui.model.odata.ODataMetaModel#getODataValueLists`. This enables the lazy loading of value list metadata of function import parameters.

For more information, see the API Reference for [`ODataMetaModel#getFunctionImportParameterContext`](https://ui5.sap.com/#/api/sap.ui.model.odata.ODataMetaModel%23methods/getFunctionImportParameterContext) and [`ODataMetaModel#getODataValueLists`](https://ui5.sap.com/#/api/sap.ui.model.odata.ODataMetaModel%23methods/getODataValueLists).

<sub>Changed•Feature•Info Only•1.129</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-10-03

</td>
</tr>
<tr>
<td valign="top">

1.129 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

sap.ui.richtexteditor.RichTextEditor

</td>
<td valign="top">

**`sap.ui.richtexteditor.RichTextEditor`**

We have updated the `TinyMCE` third-party library to the latest version 6.

<sub>Changed•Control•Info Only•1.129</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-10-03

</td>
</tr>
<tr>
<td valign="top">

1.129 

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

The `SmartField` control now reads criticality information from the `DataPoint` and `FieldGroup` annotations and renders the `ObjectStatus` control based on it. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smartfield.SmartField%23overview).

<sub>Changed•Control•Info Only•1.129</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-10-03

</td>
</tr>
<tr>
<td valign="top">

1.129 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.SlideTile`** 

</td>
<td valign="top">

**`sap.m.SlideTile`**

We've introduced the following features to the `SlideTile` control:

-   Added left and right chevrons to easily scroll the tiles in either direction.

-   Increased the slide indicator size to 24px to enable easier tapping on touchscreen devices.

-   Play and pause indicators are now displayed by default. Until now, these indicators were displayed only when a user hovered on the tile.


For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.m.SlideTile).

<sub>Changed•Control•Info Only•1.129</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-10-03

</td>
</tr>
<tr>
<td valign="top">

1.129 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.suite.ui.commons.ChartContainer`** 

</td>
<td valign="top">

**`sap.suite.ui.commons.ChartContainer`**

We've introduced the `enableBrowserFullScreen` property in the `ChartContainer` control. This property enables the display of the content within the `ChartContainer` using the browser's fullscreen APIs. In fullscreen mode, `sap.m.Dialog`, `sap.m.Popover`, `sap.m.ResponsivePopover`, and `sap.m.SelectionDetails` can be displayed over the `ChartContainer` control. To enable the display, the controls are added as dependents of the `ChartContainer`.

> ### Sample Code:  
> An example of connecting a dialog to the `ChartContainer` control:
> 
> ```
> oChartContainer.addDependent(new Dialog({
>     text: "Display Dialog"
> }));
> ```

For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.suite.ui.commons.ChartContainer) and the [Sample](https://ui5.sap.com/#/entity/sap.suite.ui.commons.sample.ChartContainerBrowserFullscreen).

<sub>Changed•Control•Info Only•1.129</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-10-03

</td>
</tr>
<tr>
<td valign="top">

1.129 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.upload.UploadSet`** 

</td>
<td valign="top">

**`sap.m.upload.UploadSet`**

We now ensure that the `UploadSet` control handles item insertion and deletion if the `items` aggregation is not bound to a model. It allows the connected model to not only manage the insertion and deletion updates but it also helps to avoid template-related issues and ensures better data handling. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.upload.UploadSet).

<sub>Changed•Control•Info Only•1.129</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-10-03

</td>
</tr>
<tr>
<td valign="top">

1.129 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.MessageStrip`** 

</td>
<td valign="top">

**`sap.m.MessageStrip`**

The control can now display multiple links within its text using the `controls` aggregation.

<sub>Changed•Control•Info Only•1.129</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-10-03

</td>
</tr>
<tr>
<td valign="top">

1.129 

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

We have enhanced `sap.m.Select` so that now navigating with the arrow keys in a selection in the control can be reverted using the [Esc\] key, even when the selection list is closed.

<sub>Changed•Control•Info Only•1.129</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-10-03

</td>
</tr>
<tr>
<td valign="top">

1.129 

</td>
<td valign="top">

Deprecated 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**Deprecations** 

</td>
<td valign="top">

**Deprecations**

There are currently no major deprecations. For a complete list of all deprecations, see [Deprecated APIs](https://ui5.sap.com/#/api/deprecated).

<sub>Deprecated•Feature•Info Only•1.129</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-10-03

</td>
</tr>
<tr>
<td valign="top">

1.129 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.mdc.Table`** 

</td>
<td valign="top">

**`sap.ui.mdc.Table`**

We have added the `scrollThreshold` property. It only affects the inner table if it is of type `TableType.Table`. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.mdc.table.GridTableType%23methods/getScrollThreshold).

<sub>Changed•Control•Info Only•1.129</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-10-03

</td>
</tr>
<tr>
<td valign="top">

1.129 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.List`, `sap.m.Table`, `sap.m.Tree`** 

</td>
<td valign="top">

**`sap.m.List`, `sap.m.Table`, `sap.m.Tree`**

Group headers for the relevant items in these controls are now sticky, so they remain in a fixed position at the top of the page during vertical scrolling.

<sub>Changed•Control•Info Only•1.129</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-10-03

</td>
</tr>
<tr>
<td valign="top">

1.129 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.table.AnalyticalTable`, `sap.ui.table.Table`, `sap.ui.table.TreeTable`** 

</td>
<td valign="top">

**`sap.ui.table.AnalyticalTable`, `sap.ui.table.Table`, `sap.ui.table.TreeTable`**

-   We have adapted and tidied up the structure of the context menu of group headers \(for example, we have added submenus\). In addition, the mobile menu button for group headers has been removed.

-   We have tidied up the interactive row count mode and the related entities: We have aligned the visual design of the resizer with the `sap.ui.layout.Splitter` control and improved the interaction, for example, the auto-resize and some missing keyboard shortcuts. We have also added the `maxRowCount` property with a default value. To improve accessibility, we have also added ARIA roles and attributes. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.table.rowmodes.Interactive%23overview) and the [Sample](https://ui5.sap.com/#/entity/sap.ui.table.Table/sample/sap.ui.table.sample.RowModes).
-   We have added the `scrollThreshold` property to the controls. It resembles the existing `threshold` property , but it is only used for scrolling. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.table.Table%23methods/setScrollThreshold).

<sub>Changed•Control•Info Only•1.129</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-10-03

</td>
</tr>
<tr>
<td valign="top">

1.129 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

SAP Fiori Elements 

</td>
<td valign="top">

**SAP Fiori Elements for OData V2** 

</td>
<td valign="top">

**SAP Fiori Elements for OData V2**

The following changes and new features are available for SAP Fiori elements for OData V2:

-   Adaptation projects now support modification of the application-level settings in the SAP delivered apps. For more information, see [Extending the Delivered Apps Manifest Using an Adaptation Project](../06_SAP_Fiori_Elements/extending-the-delivered-apps-manifest-using-an-adaptation-project-a2b24a6.md).

-   We now display the *Copy to Clipboard* button in tables, even when the selection mode is `NONE`.

-   We now ensure that the parameter input fields in the function import dialog support the `textArrangement` annotation and the formatting of numeric values.


<sub>Changed•SAP Fiori Elements•Info Only•1.129</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-10-03

</td>
</tr>
<tr>
<td valign="top">

1.129 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

SAP Fiori Elements 

</td>
<td valign="top">

**SAP Fiori Elements for OData V4** 

</td>
<td valign="top">

**SAP Fiori Elements for OData V4**

The following changes and new features are available for SAP Fiori elements for OData V4:

-   We now support key user adaptation for actions. For more information, see [Enabling an App for Key User Adaptation](../06_SAP_Fiori_Elements/enabling-an-app-for-key-user-adaptation-ccd45ba.md).

-   We now display an illustrated message when no data is available in a chart. For more information, see [Maintaining Standard Texts for Charts](../06_SAP_Fiori_Elements/maintaining-standard-texts-for-charts-37cd601.md).

-   We now display an illustrated message if no data is found in a table. For more information, see [Maintaining Standard Texts for Tables](../06_SAP_Fiori_Elements/maintaining-standard-texts-for-tables-aacfac5.md) and [Illustrated Message When No Data Is Found](../06_SAP_Fiori_Elements/illustrated-message-when-no-data-is-found-f9925b6.md).

-   Application developers can now override the key for the *Delete* button on an object page using the custom i18n file approach. For more information, see [Localization of UI Texts](../06_SAP_Fiori_Elements/localization-of-ui-texts-b8cb649.md).

-   We now support additional formats for date-and-time-based controls. For more information, see [Configuring Fields](../06_SAP_Fiori_Elements/configuring-fields-4b50f21.md).

-   We now support executing side effects for properties used in custom fields. For more information, see [Side Effects](../06_SAP_Fiori_Elements/side-effects-18b17bd.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.129</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-10-03

</td>
</tr>
<tr>
<td valign="top">

1.129 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.PlanningCalendar`** 

</td>
<td valign="top">

**`sap.m.PlanningCalendar`**

A busy indicator is now shown while the rows are still loading. This prevents a misleading `noData` message from being displayed. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.PlanningCalendar).

<sub>Changed•Control•Info Only•1.129</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-10-03

</td>
</tr>
<tr>
<td valign="top">

1.129 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.ResponsivePopover`** 

</td>
<td valign="top">

**`sap.m.ResponsivePopover`**

We have added a new `footer` aggregation to the control. This aggregation allows for the action buttons to be moved into an overflow menu on smaller screens when there isn't enough space. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.m.ResponsivePopover/sample/sap.m.sample.ResponsivePopover).

<sub>Changed•Control•Info Only•1.129</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-10-03

</td>
</tr>
<tr>
<td valign="top">

1.129 

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

We have added a new `selectedIndex` property to the `ComboBox` \(experimental\) filter. The property can provide an initial selected index of the combo box. As a developer, use this property if the keys of the items are not known up front. For more information, see the [Combo Box Filter](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/filters/comboBox) section and [Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/comboBoxFilter/dynamicFilterSelectedIndex) in the Card Explorer.

<sub>Changed•Control•Info Only•1.129</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-10-03

</td>
</tr>
<tr>
<td valign="top">

1.129 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.unified.Menu`** 

</td>
<td valign="top">

**`sap.ui.unified.Menu`**

We have added a new `closed` event, which is fired when a menu is closed. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.unified.Menu).

<sub>Changed•Control•Info Only•1.129</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-10-03

</td>
</tr>
</table>

**Related Information**  


[What's New in SAPUI5 1.141](what-s-new-in-sapui5-1-141-a7ed66d.md "With this release SAPUI5 is upgraded from version 1.140 to 1.141.")

[What's New in SAPUI5 1.140](what-s-new-in-sapui5-1-140-26a106c.md "With this release SAPUI5 is upgraded from version 1.139 to 1.140.")

[What's New in SAPUI5 1.139](what-s-new-in-sapui5-1-139-e10db71.md "With this release SAPUI5 is upgraded from version 1.138 to 1.139.")

[What's New in SAPUI5 1.138](what-s-new-in-sapui5-1-138-8f6a92b.md "With this release SAPUI5 is upgraded from version 1.136 to 1.138.")

[What's New in SAPUI5 1.136](what-s-new-in-sapui5-1-136-a82754d.md "With this release SAPUI5 is upgraded from version 1.135 to 1.136.")

[What's New in SAPUI5 1.135](what-s-new-in-sapui5-1-135-93d7630.md "With this release SAPUI5 is upgraded from version 1.134 to 1.135.")

[What's New in SAPUI5 1.134](what-s-new-in-sapui5-1-134-c512d71.md "With this release SAPUI5 is upgraded from version 1.133 to 1.134.")

[What's New in SAPUI5 1.133](what-s-new-in-sapui5-1-133-86d7605.md "With this release SAPUI5 is upgraded from version 1.132 to 1.133.")

[What's New in SAPUI5 1.132](what-s-new-in-sapui5-1-132-bd2e61f.md "With this release SAPUI5 is upgraded from version 1.131 to 1.132.")

[What's New in SAPUI5 1.131](what-s-new-in-sapui5-1-131-7d24d94.md "With this release SAPUI5 is upgraded from version 1.130 to 1.131.")

[What's New in SAPUI5 1.130](what-s-new-in-sapui5-1-130-85609d4.md "With this release SAPUI5 is upgraded from version 1.129 to 1.130.")

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

[What's New in SAPUI5 1.100](what-s-new-in-sapui5-1-100-27dec1d.md "With this release SAPUI5 is upgraded from version 1.99 to 1.100.")

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

