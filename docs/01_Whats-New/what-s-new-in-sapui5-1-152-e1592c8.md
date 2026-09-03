<!-- loioe1592c84da3d48888c1572a19c8fd4f7 -->

<link rel="stylesheet" type="text/css" href="../css/sap-icons.css"/>

# What's New in SAPUI5 1.152

With this release SAPUI5 is upgraded from version 1.151 to 1.152.

> ### Tip:  
> If you want to do a search across all versions of the What's New content, you can also find it in the [SAPUI5 What's New viewer](https://help.sap.com/whats-new/67f60363b57f4ac0b23efd17fa192d60).

> ### Note:  
> Content marked as <span style="color:#666666;"><span class="SAP-icons-V5"></span></span>**[Preview](https://help.sap.com/docs/whats-new-disclaimer)** is provided as a courtesy, without a warranty, and may be subject to change. For more information, see the [preview disclaimer](https://help.sap.com/docs/whats-new-disclaimer).

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

Upcoming 

</td>
<td valign="top">

Deleted 

</td>
<td valign="top">

Announcement 

</td>
<td valign="top">

**End of Cloud Provisioning for SAPUI5 Versions \(Q3/2026\)** 

</td>
<td valign="top">

**End of Cloud Provisioning for SAPUI5 Versions \(Q3/2026\)**

The following SAPUI5 versions will be removed from the SAPUI5 Content Delivery Network \(CDN\) after the end of Q3/2026.

**Minor Versions Reaching Their End of Cloud Provisioning**

The following versions including all patches will be removed entirely:

-   1.130
-   1.133
-   1.138

**Action**: Upgrade to a version that is still in maintenance.

**Patch Versions Reaching Their End of Cloud Provisioning**

The following patches will be removed:

-   1.71.75 to 1.71.76
-   1.84.54
-   1.96.41 to 1.96.42
-   1.108.44 to 1.108.45
-   1.120.32 to 1.120.37
-   1.130.11
-   1.133.5
-   1.136.3 to 1.136.7
-   1.138.0 to 1.138.1

**Action**: Upgrade to the latest available patch for the respective SAPUI5 version.

For more information, see [Version Overview](https://ui5.sap.com/versionoverview.html).

<sub><span style="color:#666666;"><span class="SAP-icons-V5"></span></span>**[Preview](https://help.sap.com/docs/whats-new-disclaimer)**•Deleted•Announcement•Info Only•Upcoming</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

9999-01-01

</td>
</tr>
<tr>
<td valign="top">

1.152 

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

<sub>Deprecated•Feature•Info Only•1.152</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-09-03

</td>
</tr>
<tr>
<td valign="top">

1.152 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.layout.form.Form`** 

</td>
<td valign="top">

**`sap.ui.layout.form.Form`**

There is now an automatic tooltip rendering for `Form` titles that displays the full text when space constraints cause truncation. This enhancement improves usability by ensuring users can always access complete title information.

<sub>Changed•Control•Info Only•1.152</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-09-03

</td>
</tr>
<tr>
<td valign="top">

1.152 

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

We have introduced a validation hook in the table settings dialog that enables applications to validate personalization data before confirmation. Use this hook to enforce dependent field rules, display custom error messages, and prevent invalid configurations from being applied when users modify table settings.

<sub>Changed•Control•Info Only•1.152</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-09-03

</td>
</tr>
<tr>
<td valign="top">

1.152 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.table.Table`** 

</td>
<td valign="top">

**`sap.ui.table.Table`**

This new performance optimization feature for the grid table \(default behavior for large data sets that is also automatically enabled for `sap.ui.mdc.Table` and now visualized in `sap.ui.comp.smarttable.SmartTable`\) reduces server requests and improves the scrolling experience for users through intelligent data loading and visual placeholders. This enhancement activates automatically for large data sets, minimizing server load while providing smooth scroll visualization with skeleton bars during high-speed scrolling.

<sub>Changed•Control•Info Only•1.152</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-09-03

</td>
</tr>
<tr>
<td valign="top">

1.152 

</td>
<td valign="top">

New 

</td>
<td valign="top">

User Documentation 

</td>
<td valign="top">

**Migration Documentation for `sap.m.p13n`** 

</td>
<td valign="top">

****Migration Documentation for `sap.m.p13n`****

We have provided a documentation on how to migrate the personalization dialog from the deprecated components to the modern `sap.m.p13n` implementation. The documentation explains the key conceptual shifts — from granular events to a single state snapshot, from UI-bound state to typed plain objects, and from manual dialog management to `Engine` delegation — and provides an API mapping table alongside four practical "before/after" code recipes for column visibility, sorting/grouping, the stand-alone popup, and filter conditions. It also covers state object shapes, persistence modes, common pitfalls, and `TypeScript` adoption notes. For more information, see [How to migrate from sap.m.P13nDialog to sap.m.p13n](../10_More_About_Controls/how-to-migrate-from-sap-m-p13ndialog-to-sap-m-p13n-22123cc.md).

<sub>New•User Documentation•Info Only•1.152</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-09-03

</td>
</tr>
<tr>
<td valign="top">

1.152 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**Document Export** 

</td>
<td valign="top">

**Document Export**

Read-only column marking in exported Microsoft Excel files enables copy-paste workflows while meeting accessibility standards. Applications can lock specific columns \(such as IDs\) using a new `readOnly` property and automatically apply sheet protection and append a localized "read-only" suffix to column headers. This allows users to safely edit permitted fields and paste data back into the application. For more information, see [Spreadsheet Export Configuration](../04_Essentials/spreadsheet-export-configuration-7e12e6b.md) and the [Sample](https://ui5.sap.com/#/entity/sap.ui.export.Spreadsheet/sample/sap.ui.export.sample.json).

<sub>Changed•Feature•Info Only•1.152</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-09-03

</td>
</tr>
<tr>
<td valign="top">

1.152 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**UI Integration Cards, `sap.f.cards`** 

</td>
<td valign="top">

**UI Integration Cards, `sap.f.cards`**

Several previously experimental methods and properties of `sap.ui.integration.Card`, `sap.ui.integration.Host`, `sap.ui.integration.Extension`, and the `sap.f` card headers are now stable API. This includes the following:

-   Card lifecycle methods \(`isReady`, `refresh`\)

-   Parameter handling \(`getParameters`, `setParameters`\)

-   Host communication events \(`manifestReady`, `stateChanged`, `cardStateChanged`\)

-   Context access \(`getContextValue`, `getContexts`\)

-   Actions \(`action`, `triggerAction`\)

-   Design-time support \(`loadDesigntime`\)

-   Form input validation \(`validateControls`\)

-   Header properties, such as `dataTimestamp`, `wrappingType`, `titleMaxLines`, and `subtitleMaxLines`


For more information, see the [API Reference](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/headers) in the Card Explorer and the [API Reference: `sap.f.cards`](https://ui5.sap.com/#/api/sap.f.cards).

<sub>Changed•Control•Info Only•1.152</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-09-03

</td>
</tr>
<tr>
<td valign="top">

1.152 

</td>
<td valign="top">

New 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.f.HeroBanner`** 

</td>
<td valign="top">

**`sap.f.HeroBanner`**

The new `sap.f.HeroBanner` control provides a full-width home page banner for showcasing an application's most important information and key actions. You can add a greeting, an overline, and interactive content, such as buttons, search fields, or KPI cards. The banner adapts responsively to smaller screens.

Note that this control is experimental, and its API may change in future versions. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.f.HeroBanner) and the [Samples](https://ui5.sap.com/#/entity/sap.f.HeroBanner).

<sub>New•Control•Info Only•1.152</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-09-03

</td>
</tr>
<tr>
<td valign="top">

1.152 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.DateTimePicker`, `sap.m.TimePicker`** 

</td>
<td valign="top">

**`sap.m.DateTimePicker`, `sap.m.TimePicker`**

`sap.m.DateTimePicker` and `sap.m.TimePicker` have been redesigned to improve accessibility. On phones, a toggle button in the picker header lets users switch between the clock view and a keyboard input view for entering the time directly, giving users of assistive technologies a reliable way to set a time.

<sub>Changed•Control•Info Only•1.152</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-09-03

</td>
</tr>
<tr>
<td valign="top">

1.152 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.unified.Calendar`** 

</td>
<td valign="top">

**`sap.ui.unified.Calendar`**

`sap.ui.unified.Calendar` now supports an `ariaHasPopup` property on `DateTypeRange`, which sets the `aria-haspopup` attribute on specific dates or date ranges. This allows screen readers to announce that selecting a date opens a popover, such as an appointment or details dialog. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.unified.DateTypeRange%23constructor) and the [Sample](https://ui5.sap.com/#/entity/sap.ui.unified.Calendar/sample/sap.ui.unified.sample.CalendarAriaHasPopup).

<sub>Changed•Control•Info Only•1.152</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-09-03

</td>
</tr>
<tr>
<td valign="top">

1.152 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.Menu`** 

</td>
<td valign="top">

**`sap.m.Menu`**

Keyboard navigation with *Page Up* and *Page Down* in `sap.m.Menu` now moves to the last or first fully visible item within the current viewport, instead of jumping a fixed number of items. The navigation adapts to the actual visible area of the menu popover, so it remains accurate even when the popover is resized while open.

<sub>Changed•Control•Info Only•1.152</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-09-03

</td>
</tr>
<tr>
<td valign="top">

1.152 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

SAP Fiori Elements 

</td>
<td valign="top">

SAP Fiori Elements for OData V4 

</td>
<td valign="top">

**SAP Fiori Elements for OData V4**

The following changes and new features are available for SAP Fiori elements for OData V4:

-   You can now define separate side effects for source entity changes using `SourceEntitiesInserted`, `SourceEntitiesUpdated`, and `SourceEntitiesDeleted`. Each property handles a specific change type: creation, update, or deletion. For more information, see [Side Effects](../06_SAP_Fiori_Elements/side-effects-18b17bd.md).

-   You can now use the `adaptNavigationTargets` controller extension to modify the navigation targets that appear in the popover for semantic object links. For more information, see [Creating an Extension to Modify Navigation Targets in Semantic Link Popovers](../06_SAP_Fiori_Elements/creating-an-extension-to-modify-navigation-targets-in-semantic-link-popovers-449d3b0.md).

-   In the *Share* menu, the *Share in SAP Jam* option is now replaced with the *Share on SAP Build Work Zone* option. You can also see the new option if you are still using SAP Jam. For more information, see [The Share Building Block](../06_SAP_Fiori_Elements/the-share-building-block-41b02df.md).

-   You can now display rows with distinct values in the value help table, type-ahead, or dropdown list. For more information, see [Value Help](../06_SAP_Fiori_Elements/value-help-fccb255.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.152</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-09-03

</td>
</tr>
<tr>
<td valign="top">

1.152 

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

-   A new model parameter, `parseKeepsEmptyString`, is available. When set, the system sets the `parseKeepsEmptyString` format option for all `sap.ui.model.odata.type.String` instances that are created by automatic type detection. For more information, see [Type Determination](../04_Essentials/type-determination-53cdd55.md) and the API Reference for [`v4.ODataMetaModel#requestUI5Type`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataMetaModel%23methods/requestUI5Type) and [`v4.ODataModel#getParseKeepsEmptyString`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel%23methods/getParseKeepsEmptyString).

-   You can now use the `v4.ODataUtils.parseSystemQueryOption` method to parse the system query options `$select`, `$expand`, and `$filter`. You can also use the `v4.ODataUtils.parseFilter` method to parse `$filter`. For more information, see the API Reference for [`v4.ODataUtils.parseSystemQueryOption`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataUtils%23methods/sap.ui.model.odata.v4.ODataUtils.parseSystemQueryOption) and [`v4.ODataUtils.parseFilter`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataUtils%23methods/sap.ui.model.odata.v4.ODataUtils.parseFilter).

-   The model now supports error handling for stream-returning operations, which were introduced in SAPUI5 1.151. This includes support for temporarily unavailable back ends. For more information, see [Handling of Temporarily Unavailable Back Ends](../04_Essentials/handling-of-temporarily-unavailable-back-ends-b3422ec.md).


<sub>Changed•Feature•Info Only•1.152</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-09-03

</td>
</tr>
<tr>
<td valign="top">

1.152 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.FeedListItem`** 

</td>
<td valign="top">

**`sap.m.FeedListItem`**

The overflow menu in the feed list item control now uses a standard menu component instead of an action sheet. This change improves accessibility for screen readers. On mobile devices, the menu now opens as a full-screen dialog instead of sliding up from the bottom.

For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.FeedListItem) and the [Sample](https://ui5.sap.com/#/entity/sap.m.FeedListItem).

<sub>Changed•Control•Info Only•1.152</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-09-03

</td>
</tr>
<tr>
<td valign="top">

1.152 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.gantt.simple.GanttChartWithTable`** 

</td>
<td valign="top">

**`sap.gantt.simple.GanttChartWithTable`**

You can now scroll the Gantt chart to a specific row using the new `scrollToRow` method. This is useful for quickly navigating to rows that are currently off-screen.

For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.gantt.simple.GanttChartWithTable).

<sub>Changed•Control•Info Only•1.152</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-09-03

</td>
</tr>
</table>

