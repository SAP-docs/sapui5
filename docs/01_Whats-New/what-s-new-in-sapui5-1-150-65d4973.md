<!-- loio65d4973a83614c5dbf7b471e64d50888 -->

<link rel="stylesheet" type="text/css" href="../css/sap-icons.css"/>

# What's New in SAPUI5 1.150

With this release SAPUI5 is upgraded from version 1.149 to 1.150.

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

-   1.84
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

1.150 

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

There are currently some deprecations in the `TypeScript` and OData V2 areas \(see the respective entries\). For a complete list of all deprecations, see [Deprecated APIs](https://ui5.sap.com/#/api/deprecated).

<sub>Deprecated•Feature•Info Only•1.150</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-07-09

</td>
</tr>
<tr>
<td valign="top">

1.150 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**`TypeScript`** 

</td>
<td valign="top">

**`TypeScript`**

We have recently made several changes in the `TypeScript` area:

-   `TypeScript`-specific API documentation is now published at [https://ui5.github.io/typescript/api/](https://ui5.github.io/typescript/api/) for the latest version and the long-term maintenance versions. It includes `TypeScript`-specific APIs, such as the event-specific parameter types \(like `Input$LiveChangeEventParameters`, see [Interface: Input$LiveChangeEventParameters](https://ui5.github.io/typescript/api/openui5/1.120/sap.m/sap/m/Input/interfaces/Input$LiveChangeEventParameters.html)\), which are not included in the API documentation in the Demo Kit.

-   The long deprecated type definition packages`@sapui5/ts-types-esm` and `@openui5/ts-types-esm` are no longer released. Use the identical packages `@sapui5/types` and `@openui5/types` instead.

-   The type definition package `@types/openui5` is now deprecated \(since it offers no benefit when used with the current `TypeScript` versions 6.x and higher\). Use `@openui5/types` instead. `@types/openui5` continues to be released throughout 2026 at minimum.

-   `TypeScript` 6 and 7 are coming with incompatible changes. From an SAPUI5 perspective, most things continue to work, but the `@ui5/ts-interface-generator` tool cannot yet be used with `TypeScript` 7.

    For more information, see this [blog post](https://community.sap.com/t5/technology-blog-posts-by-sap/typescript-6-and-7-what-ui5-typescript-developers-need-to-know-in-2026/ba-p/14393526).


<sub>Changed•Feature•Info Only•1.150</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-07-09

</td>
</tr>
<tr>
<td valign="top">

1.150 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.StandardListItem`** 

</td>
<td valign="top">

**`sap.m.StandardListItem`**

The `StandardListItem` now supports an optional icon alongside the info text through the new `infoIcon` property. The info text rendering has been migrated to use the internal `ObjectStatus` control. This ensures consistency with `ObjectStatus` behavior and brings the following:

-   Improved accessibility, including support for inverted state wrapping and high-contrast theming
-   Text-spacing compliance
-   Full support for wrapping in inverted state mode
-   Native truncation handling
-   Better screen reader support

These changes ensure adherence to accessibility standards. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.StandardListItem), the [Sample](https://ui5.sap.com/#/entity/sap.m.StandardListItem/sample/sap.m.sample.StandardListItemInfo), and the [Sample for Wrapping](https://ui5.sap.com/#/entity/sap.m.StandardListItem/sample/sap.m.sample.StandardListItemWrapping).

<sub>Changed•Control•Info Only•1.150</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-07-09

</td>
</tr>
<tr>
<td valign="top">

1.150 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.mdc.ValueHelp`** 

</td>
<td valign="top">

**`sap.ui.mdc.ValueHelp` **

We have improved the filtering behavior in `DefineConditionPanel`. Only the relevant list entries are now shown in the results, and the text that matches what has been entered is now highlighted if the new `highlightFilterResults` is set to `true`. This enhancement improves accessibility for screen reader users and simplifies keyboard and mouse navigation when selecting condition operators. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.mdc.valuehelp.content.FixedList%23methods/getHighlightFilterResults) and the [Sample](https://ui5.sap.com/#/entity/sap.ui.mdc.FilterBar/sample/sap.ui.mdc.demokit.sample.FilterbarTypes).

<sub>Changed•Control•Info Only•1.150</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-07-09

</td>
</tr>
<tr>
<td valign="top">

1.150 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

SAP Fiori Elements 

</td>
<td valign="top">

SAP Fiori elements for OData V2 

</td>
<td valign="top">

**SAP Fiori Elements for OData V2**

The following changes and new features are available for SAP Fiori Elements for OData V2:

-   We now support pasting in table columns on object pages with `TextArrangement` set to `TextOnly`. For more information, see [Copying and Pasting from External Applications to Tables](../06_SAP_Fiori_Elements/copying-and-pasting-from-external-applications-to-tables-181c4e6.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.150</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-07-09

</td>
</tr>
<tr>
<td valign="top">

1.150 

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

The following changes and new features are available for SAP Fiori Elements for OData V4:

-   You can now configure custom messages on the overview page for various scenarios using either a message-based or illustration-based approach. For more information, see [Configuring Custom Messages on the Overview Page](../06_SAP_Fiori_Elements/configuring-custom-messages-on-the-overview-page-b75910f.md).

-   You can now disable the selection of leaf nodes in tree tables. For more information, see [Tree Tables](../06_SAP_Fiori_Elements/tree-tables-7cf7a31.md).

-   We now support the use of first-level navigation properties as filters in the value help dialog. For more information, see [Value Help](../06_SAP_Fiori_Elements/value-help-fccb255.md).

-   You can now suppress the thousands separator for integer fields using the `formatOptions` settings in the `manifest.json` file. For more information, see [Removing the Thousands Separator from Fields](../06_SAP_Fiori_Elements/removing-the-thousands-separator-from-fields-40713d5.md).

-   We now support the OPA methods `iClickContactLink()` and `iClickLink()` in tables. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.fe.test.api.TableActions%23methods).


<sub>Changed•SAP Fiori Elements•Info Only•1.150</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-07-09

</td>
</tr>
<tr>
<td valign="top">

1.150 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.RatingIndicator`** 

</td>
<td valign="top">

**`sap.m.RatingIndicator`**

In read-only and display-only modes, `sap.m.RatingIndicator` now renders the unselected half of a half-value icon as an outline instead of a filled grey shape. This makes half-value ratings distinguishable without relying on color alone, improving accessibility for users with color vision deficiency. Interactive \(editable\) mode is unchanged. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.RatingIndicator%23overview).

<sub>Changed•Control•Info Only•1.150</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-07-09

</td>
</tr>
<tr>
<td valign="top">

1.150 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.Panel`** 

</td>
<td valign="top">

**`sap.m.Panel`**

`sap.m.Panel` now supports a new `Contrast` value for its `backgroundDesign` property. It applies a subtly different background color, making the panel visually distinguishable when placed inside containers with the same background, such as a dialog. In non-Horizon themes, it falls back to the solid background for compatibility. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.Panel) and the [Sample](https://ui5.sap.com/#/entity/sap.m.Panel/sample/sap.m.sample.PanelBackgroundDesign).

<sub>Changed•Control•Info Only•1.150</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-07-09

</td>
</tr>
<tr>
<td valign="top">

1.150 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.ComboBox`, `sap.m.MultiComboBox`** 

</td>
<td valign="top">

**`sap.m.ComboBox`, `sap.m.MultiComboBox`**

`sap.m.ComboBox` and `sap.m.MultiComboBox` now support a `maxPickerHeight` property, allowing developers to limit the height of the picker dropdown. When items exceed the set height, vertical scrolling is enabled automatically. Keyboard navigation continues to work seamlessly with scrolling. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.ComboBox) and the [Sample](https://ui5.sap.com/#/entity/sap.m.ComboBox/sample/sap.m.sample.ComboBoxMaxPickerHeight).

Note: Has no effect on phones, where suggestions display in a full-screen dialog.

<sub>Changed•Control•Info Only•1.150</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-07-09

</td>
</tr>
<tr>
<td valign="top">

1.150 

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

`sap.m.Dialog` now supports a full-screen toggle via the new `showFullScreenButton` property. When enabled, users can expand the dialog to fill the entire screen by clicking the header button, pressing [Shift\] + [Ctrl\] + [F\] , or double-clicking the dialog header. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.m.Dialog/sample/sap.m.sample.DialogFullScreen).

<sub>Changed•Control•Info Only•1.150</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-07-09

</td>
</tr>
<tr>
<td valign="top">

1.150 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**UI Integration Cards** 

</td>
<td valign="top">

**UI Integration Cards**

-   The Object Card groups configuration now supports a new `itemsLayout` property, allowing label/value pairs to be arranged either vertically \(default\) or horizontally. For more information, see the [Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/object/horizontalItemsLayout) and the [API Reference](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/typesDeclarative/object) in the Card Explorer.

-   UI Integration Cards functionality is now available as Claude Code Skills, enabling AI-assisted development for Cards directly in your IDE. The skills are delivered as part of the UI5 plugins for Claude Code, giving developers intelligent, context-aware support when working with Card manifests and configurations. The Card Explorer documentation has also been updated to reflect AI-driven Card creation workflows. For more information, see the [AI Generation](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/overview/aiGeneration), [Developing Cards](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/overview/developingCards) and [Getting Started](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/gettingStarted) in the Card Explorer.


<sub>Changed•Control•Info Only•1.150</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-07-09

</td>
</tr>
<tr>
<td valign="top">

1.150 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**Date Controls** 

</td>
<td valign="top">

**Date Controls**

Date controls now show a more accurate placeholder when no value is set. Previously, the placeholder always displayed the last date of the current year. Now, if a min/max range is configured and the year-end date falls outside it, the placeholder shows the max value instead. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.m.DatePicker/sample/sap.m.sample.DatePicker).

<sub>Changed•Control•Info Only•1.150</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-07-09

</td>
</tr>
<tr>
<td valign="top">

1.150 

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

The recurring concept, introduced in version 1.128 for non-working time periods, is now extended to appointments. You can define recurring appointments for any period type — daily, weekly, monthly, or custom occurrences. For example, a weekly 1:1 every Monday at 11 AM or a daily standup every workday at 10 AM. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.m.PlanningCalendar/sample/sap.m.sample.PlanningCalendarRecurringItem).

<sub>Changed•Control•Info Only•1.150</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-07-09

</td>
</tr>
<tr>
<td valign="top">

1.150 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.DynamicDateRange`** 

</td>
<td valign="top">

**`sap.m.DynamicDateRange`**

Custom options in `sap.m.DynamicDateRange` can now display both date and time in the value help dialog footer. Previously, the footer only showed the date, which was misleading for time-sensitive options such as a custom Business Day \(9 AM – 5 PM\). Developers can now override `getValueHelpUIFooterFormatTypes` to return `datetime`, enabling the full date and time to appear in the selected date bar at the bottom of the dialog. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.DynamicDateOption%23methods/getValueHelpUIFooterFormatTypes) and the [Sample](https://ui5.sap.com/#/entity/sap.m.DynamicDateRange/sample/sap.m.sample.DynamicDateRangeWithCustomOptions/code).

<sub>Changed•Control•Info Only•1.150</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-07-09

</td>
</tr>
<tr>
<td valign="top">

1.150 

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

-   The `groupPaths` feature introduced with SAPUI5 1.148 and 1.149 is now documented in [Sorting](../04_Essentials/sorting-d2ce3f5.md) and [Sorting, Grouping, and Filtering for List Binding and Tree Binding](../04_Essentials/sorting-grouping-and-filtering-for-list-binding-and-tree-binding-ec79a5d.md).

-   The combination of data aggregation or recursive hierarchies with `sap.ui.model.odata.v4.ODataModel#getKeepAliveContext` is now supported.For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel%23methods/getKeepAliveContext).

-   When you use data aggregation without group levels, the following features are supported experimentally:

    -   When you create a new record, the header context is marked as outdated only if its properties are used in a `Sorter` or `Filter` object, or if a `$search` or custom query option is set. The grand total's context is marked as outdated if the new properties are used in a `Filter` object, or if a `$search` or custom query option is set.

    -   Properties specified with the `additionally` option in `$$aggregation` or `v4.ODataListBinding#setAggregation` can now be read using `v4.Context#requestSideEffects`. For more information, see the API Reference for [`v4.ODataListBinding#setAggregation`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding%23methods/setAggregation) and [`v4.Context#requestSideEffects`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context%23methods/requestSideEffects).



<sub>Changed•Feature•Info Only•1.150</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-07-09

</td>
</tr>
<tr>
<td valign="top">

1.150 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**`sap.ui.model.type` Types** 

</td>
<td valign="top">

**`sap.ui.model.type` Types**

The `#getPlaceholderText` method for the following types now accepts two new optional parameters, `oMinimum` and `oMaximum`. Use these parameters to compute a placeholder that fits within a specific date range.

-   `sap.ui.model.type.Date`
-   `sap.ui.model.type.Time`
-   `sap.ui.model.type.DateTime`
-   `sap.ui.model.type.DateInterval`
-   `sap.ui.model.type.TimeInterval`
-   `sap.ui.model.type.DateTimeInterval`

<sub>Changed•Feature•Info Only•1.150</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-07-09

</td>
</tr>
<tr>
<td valign="top">

1.150 

</td>
<td valign="top">

Deprecated 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**SAPUI5 OData V2 Model** 

</td>
<td valign="top">

**SAPUI5 OData V2 Model**

The OData V2 hierarchy solution is now fully deprecated. This now also applies to the following:

-   `sap.ui.model.odata.v2.ODataTreeBinding` class
-   `sap.ui.model.odata.ODataTreeBindingFlat` class
-   `sap.ui.model.odata.v2.ODataModel#bindTree` method

**Action:** Switch to the OData V4 hierarchy solution. For more information, see [Transition from OData V2 to OData V4](../04_Essentials/upgrading-your-odata-model-cda632b.md#loiocda632b01c1e4a988ccecab759d19380__section_OD2OD4) and [Recursive Hierarchy](../04_Essentials/data-aggregation-and-recursive-hierarchy-7d91431.md#loio7d914317c0b64c23824bf932cc8a4ae1__section_RCH).

<sub>Deprecated•Feature•Recommended•1.150</sub>

</td>
<td valign="top">

Recommended 

</td>
<td valign="top">

2026-07-09

</td>
</tr>
</table>

