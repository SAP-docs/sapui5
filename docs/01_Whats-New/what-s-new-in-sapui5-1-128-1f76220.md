<!-- loio1f762207392f46d7bf809edf71ed8704 -->

# What's New in SAPUI5 1.128

With this release SAPUI5 is upgraded from version 1.127 to 1.128.

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

**Related Information**  


[What's New in SAPUI5 1.130](what-s-new-in-sapui5-1-130-85609d4.md "With this release SAPUI5 is upgraded from version 1.129 to 1.130.")

[What's New in SAPUI5 1.129](what-s-new-in-sapui5-1-129-d22b8af.md "With this release SAPUI5 is upgraded from version 1.128 to 1.129.")

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

