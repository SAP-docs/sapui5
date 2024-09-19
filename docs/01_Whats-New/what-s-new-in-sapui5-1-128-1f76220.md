<!-- loio1f762207392f46d7bf809edf71ed8704 -->

<link rel="stylesheet" type="text/css" href="../css/sap-icons.css"/>

# What's New in SAPUI5 1.128

With this release SAPUI5 is upgraded from version 1.127 to 1.128.

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

**End of Cloud Provisioning for SAPUI5 Versions \(Q3/2024\)** 

</td>
<td valign="top">

**End of Cloud Provisioning for SAPUI5 Versions \(Q3/2024\)**

The following SAPUI5 versions will be removed from the SAPUI5 Content Delivery Network \(CDN\) after the end of Q3/2024.

**Minor Versions Reaching Their End of Cloud Provisioning**

The following versions including all patches will be removed entirely:

-   1.114
-   1.115
-   1.116
-   1.117
-   1.118

**Action**: Upgrade to a version that is still in maintenance.

**Patch Versions Reaching Their End of Cloud Provisioning**

The following patches will be removed:

-   Long-term maintenance versions:

    -   1.71.58
    -   1.84.35 to 1.84.36
    -   1.96.23 to 1.96.24
    -   1.108.19 to 1.108.22

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

1.128 

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

<sub>Deprecated•Feature•Info Only•1.128</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-09-05

</td>
</tr>
<tr>
<td valign="top">

1.128 

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

Cell selection now works in combination with the `Row`/`RowOnly` behavior determined by the `sap.ui.table.SelectionBehavior` enumeration. If a cell selection already exists and the focus is on the cell, users can now extend the selection by pressing [Shift\] + [Up Arrow\]  and [Shift\] + [Down Arrow\]  or [Shift\] and clicking on a cell. To select a cell, users can now press [Spacebar\] if the `CellSelector` plugin is active. To select a row, users have to press [Shift\] + [Spacebar\]  or [Enter\]/ [Return\] instead of [Spacebar\]. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.plugins.CellSelector).

<sub>Changed•Control•Info Only•1.128</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-09-05

</td>
</tr>
<tr>
<td valign="top">

1.128 

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

-   We now support the keyboard shortcut [Ctrl\] + [Shift\] + [M\]  that allows end users to access the error list on the object page. For more information, see [Keyboard Shortcuts](../06_SAP_Fiori_Elements/keyboard-shortcuts-0cd318c.md).

-   We've now increased the default column size in forms on medium and large screens in flexible column layout applications.


<sub>Changed•SAP Fiori Elements•Info Only•1.128</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-09-05

</td>
</tr>
<tr>
<td valign="top">

1.128 

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

-   We no longer show the dialog of the create action if all the parameters are hidden. For more information, see [Actions](../06_SAP_Fiori_Elements/actions-cbf16c5.md).

-   You can now use the `Org.OData.Core.V1.AlternateKeys` annotation to request additional properties for object pages or subobject pages. For more information, see [Configuring Default Settings \(Visualizations, Sort Order, Filter Values\)](../06_SAP_Fiori_Elements/configuring-default-settings-visualizations-sort-order-filter-values-49a6ba5.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.128</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-09-05

</td>
</tr>
<tr>
<td valign="top">

1.128 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.gantt.skipTime.WeekPattern`** 

</td>
<td valign="top">

**`sap.gantt.skipTime.WeekPattern`**

We now provide support for hiding non-working hours from the Gantt timeline. Based on specific use cases, the feature allows applications to control the non-working hours on a granular level. With this new feature, applications can configure a weekly pattern specifying multiple time intervals per day that can be hidden. The time pattern supports hours, minutes, and seconds for each interval.

This feature is supported in stepwise zoom, proportional zoom, and the fullscreen strategies. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.gantt.skipTime.WeekPattern) and the [Sample](https://ui5.sap.com/#/entity/sap.gantt.simple.GanttChartWithTable/sample/sap.gantt.sample.GanttChart2HideNonWorkingHours).

In addition to the support for the weekly pattern, applications can extend the base discontinuity provider to define their own use cases for hiding specific parts of the Gantt timeline. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.gantt.simple.GanttChartWithTable/sample/sap.gantt.sample.GanttChart2HideNonWorkingDateRanges).

<sub>Changed•Control•Info Only•1.128</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-09-05

</td>
</tr>
<tr>
<td valign="top">

1.128 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.Link`** 

</td>
<td valign="top">

**`sap.m.Link`**

You can now add an icon before or after the link text. The icon is interactive, just like the link. You can also add two icons, one on each side, although we don't recommend this. To add an icon, set an icon URI to either of the newly introduced `icon` or `endIcon` properties. These properties only accept icons, not images. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.Link) and the [Sample](https://ui5.sap.com/#/entity/sap.m.Link/sample/sap.m.sample.Link).

<sub>Changed•Control•Info Only•1.128</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-09-05

</td>
</tr>
<tr>
<td valign="top">

1.128 

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

We have improved the drag-and-drop functionality of the control to allow more precise appointment placement. Now, the length of the snapping interval is 15 minutes, reduced from the previous 30-minute interval. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.m.PlanningCalendar/sample/sap.m.sample.PlanningCalendarDnD).

<sub>Changed•Control•Info Only•1.128</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-09-05

</td>
</tr>
<tr>
<td valign="top">

1.128 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.PlanningCalendar` and `sap.m.SinglePlanningCalendar`** 

</td>
<td valign="top">

**`sap.m.PlanningCalendar` and `sap.m.SinglePlanningCalendar`**

We have improved the flexibility when defining non-working time periods. You can now set these time periods with greater precision, specifying not just full hours but also minutes. For more information, see the [Planning Calendar](https://ui5.sap.com/#/entity/sap.m.PlanningCalendar/sample/sap.m.sample.PlanningCalendarRecurringItem) and [Single Planning Calendar](https://ui5.sap.com/#/entity/sap.m.SinglePlanningCalendar/sample/sap.m.sample.SinglePlanningCalendarRecurringItem) samples.

<sub>Changed•Control•Info Only•1.128</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-09-05

</td>
</tr>
<tr>
<td valign="top">

1.128 

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

-   We have introduced the `sap.f.cards.CardBadgeCustomData` element, which extends `sap.ui.core.CustomData`. It enables developers to add multiple badges on one card. Additionally, the new API allows them to add icons, state color, announcement text, and to control the visibility of the badge with the visibility mode. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.f.cards.CardBadgeCustomData) and the [Badge Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/badge)..

-   We have added a new `fallbackSrc` property available for images in Object cards. You can use it to set a fallback image source, in case the main `src` source fails to load. For more information, see the [Object Card](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/typesDeclarative/object) section and [Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/object/objectCardWithFallbackImage) in the Card Explorer.


<sub>Changed•Control•Info Only•1.128</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-09-05

</td>
</tr>
<tr>
<td valign="top">

1.128 

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

We have added the experimental `bAll` parameter to `sap.ui.model.odata.v4.Context#collapse`, which allows you to collapse a node and all its descendants. Note that it must not be used in productive applications yet.

For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context%23methods/collapse).

<sub>Changed•Feature•Info Only•1.128</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-09-05

</td>
</tr>
<tr>
<td valign="top">

1.128 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.f.FlexibleColumnLayout`** 

</td>
<td valign="top">

**`sap.f.FlexibleColumnLayout`**

-   We now support the `aria-valuenow` attribute for column separators. It holds the position of the separator in the range of \[0, 100\]. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.f.FlexibleColumnLayout). 


-   We have introduced the new `layoutData` API to be used by applications to define the custom width of columns, depending on the user interactions/resizing with separators.

    The new `columnsDistributionChange` event is fired when the user manually resizes the `sap.f.FlexibleColumnLayout`. This event helps app developers to save user preferences and use them later. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.f.FlexibleColumnLayout).


<sub>Changed•Control•Info Only•1.128</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-09-05

</td>
</tr>
<tr>
<td valign="top">

1.128 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.f.DynamicPageHeader`** 

</td>
<td valign="top">

**`sap.f.DynamicPageHeader`**

The `ObjectPageAccessibleLandmarkInfo` and the `DynamicPageAccessibleLandmarkInfo` now include the `headerSectionLabel` API. It enables customization of the aria-label for the header section of the `sap.f.DynamicPageHeader`. For more information, see the [sap.f.DynamicPageAccessibleLandmarkInfo](https://ui5.sap.com/#/api/sap.f.DynamicPageAccessibleLandmarkInfo) and [sap.uxap.ObjectPageAccessibleLandmarkInfo](https://ui5.sap.com/#/api/sap.uxap.ObjectPageAccessibleLandmarkInfo) API Reference.

<sub>Changed•Control•Info Only•1.128</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-09-05

</td>
</tr>
<tr>
<td valign="top">

1.128 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.Toolbar`** 

</td>
<td valign="top">

**`sap.m.Toolbar`**

We have introduced keyboard arrow navigation to the control. Users can navigate through the interactive items within the control using the [Up\], [Down\], [Left\], and [Right\] arrow keys.

<sub>Changed•Control•Info Only•1.128</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-09-05

</td>
</tr>
<tr>
<td valign="top">

1.128 

</td>
<td valign="top">

New 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**Demo Kit: Highlight searched term** 

</td>
<td valign="top">

**Demo Kit: Highlight searched term**

We have added a new feature that highlights the searched term, making it easier for users to find its position in a large body of text when they reach the searched page.

<sub>New•Feature•Info Only•1.128</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-09-05

</td>
</tr>
</table>

