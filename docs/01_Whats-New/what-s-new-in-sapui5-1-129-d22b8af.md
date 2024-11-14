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

