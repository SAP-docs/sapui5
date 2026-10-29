<!-- loioe1592c84da3d48888c1572a19c8fd4f7 -->

# What's New in SAPUI5 1.152

With this release SAPUI5 is upgraded from version 1.151 to 1.152.

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

**Related Information**  


[What's New in SAPUI5 1.151](what-s-new-in-sapui5-1-151-e824a0e.md "With this release SAPUI5 is upgraded from version 1.150 to 1.151.")

[What's New in SAPUI5 1.150](what-s-new-in-sapui5-1-150-65d4973.md "With this release SAPUI5 is upgraded from version 1.149 to 1.150.")

[What's New in SAPUI5 1.149](what-s-new-in-sapui5-1-149-8591ff4.md "With this release SAPUI5 is upgraded from version 1.148 to 1.149.")

[What's New in SAPUI5 1.148](what-s-new-in-sapui5-1-148-6b940b3.md "With this release SAPUI5 is upgraded from version 1.147 to 1.148.")

[What's New in SAPUI5 1.147](what-s-new-in-sapui5-1-147-88df9d3.md "With this release SAPUI5 is upgraded from version 1.146 to 1.147.")

[What's New in SAPUI5 1.146](what-s-new-in-sapui5-1-146-6ccfe05.md "With this release SAPUI5 is upgraded from version 1.145 to 1.146.")

[What's New in SAPUI5 1.145](what-s-new-in-sapui5-1-145-7676a2a.md "With this release SAPUI5 is upgraded from version 1.144 to 1.145.")

[What's New in SAPUI5 1.144](what-s-new-in-sapui5-1-144-ad1c805.md "With this release SAPUI5 is upgraded from version 1.143 to 1.144.")

[What's New in SAPUI5 1.143](what-s-new-in-sapui5-1-143-ad08c66.md "With this release SAPUI5 is upgraded from version 1.142 to 1.143.")

[What's New in SAPUI5 1.142](what-s-new-in-sapui5-1-142-92ed100.md "With this release SAPUI5 is upgraded from version 1.141 to 1.142.")

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

