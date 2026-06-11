<!-- loio6ccfe053009944079b5e1d6d516d3de9 -->

# What's New in SAPUI5 1.146

With this release SAPUI5 is upgraded from version 1.145 to 1.146.

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

1.146 

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

<sub>Deprecated•Feature•Info Only•1.146</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-03-19

</td>
</tr>
<tr>
<td valign="top">

1.146 

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

The selected row count is now displayed in table headers next to the total row count. If the `showRowcount` property is set to `true`, this feature automatically updates the header to show how many items are currently selected, making it easier to track selections in large data sets and improving user awareness during multi-select operations in OData-V4-based tables. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.ui.mdc.Table/sample/sap.ui.mdc.demokit.sample.table.UploadSetwithTablePlugin).

<sub>Changed•Control•Info Only•1.146</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-03-19

</td>
</tr>
<tr>
<td valign="top">

1.146 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.suite.ui.commons.CalculationBuilder`** 

</td>
<td valign="top">

**`sap.suite.ui.commons.CalculationBuilder`**

The calculation builder control now supports a new `focusChange` event that improves input tracking. The event is triggered when the input field loses focus. The input field loses focus when a user clicks outside the input area, or presses the [Tab\] key. When the event is triggered, it provides the current expression value and the last cursor position. This event captures the final user input state after the editing is completed, allowing for post-edit processing.

For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.suite.ui.commons.CalculationBuilder) and the [Sample](https://ui5.sap.com/#/entity/sap.suite.ui.commons.CalculationBuilder/sample/sap.suite.ui.commons.sample.CalculationBuilder).

<sub>Changed•Control•Info Only•1.146</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-03-19

</td>
</tr>
<tr>
<td valign="top">

1.146 

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

We've now introduced the `useShapeFillForGhost` property at the `GanttChartWithTable` level to control the appearance of a ghost element for the shape that is being dragged. When this property is enabled, dragged ghost elements retain the original shape's fill color for better visual continuity. The property defaults to false for backward compatibility. If you explicitly define the `fill` property of the `shapeStyles` aggregation, it overrides this setting. This enhancement makes drag operations more intuitive, particularly for color-coded shapes.

For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.gantt.simple.GanttChartWithTable) and the [Sample](https://ui5.sap.com/#/entity/sap.gantt.simple.GanttChartWithTable/sample/sap.gantt.sample.GanttChart2Shapes).

<sub>Changed•Control•Info Only•1.146</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-03-19

</td>
</tr>
<tr>
<td valign="top">

1.146 

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

-   We now display an illustrated message when no data is available in a chart. For more information, see [Displaying an Illustrated Message When No Data Is Found](../06_SAP_Fiori_Elements/displaying-an-illustrated-message-when-no-data-is-found-dee77bd.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.146</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-03-19

</td>
</tr>
<tr>
<td valign="top">

1.146 

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

-   You can now hide the *Share in SAP Jam* option in the *Share* menu. For more information, see [The Share Functionality](../06_SAP_Fiori_Elements/the-share-functionality-022bf0d.md).

-   You can now hide the *Save as Tile* option in the *Share* menu. For more information, see [The Share Functionality](../06_SAP_Fiori_Elements/the-share-functionality-022bf0d.md).

-   You can now set the `enableEnlargeImage` property to define if users can open and enlarge the avatar image in a popup. For more information, see [Using Images and Icons](../06_SAP_Fiori_Elements/using-images-and-icons-5760b63.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.146</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-03-19

</td>
</tr>
<tr>
<td valign="top">

1.146 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**Models** 

</td>
<td valign="top">

**Models**

The `value1` and `value2` parameters of `sap.ui.model.Filter` now support data binding. For more information, see [Bound Filters](../04_Essentials/sorting-grouping-and-filtering-for-list-binding-and-tree-binding-ec79a5d.md#loioec79a5d5918f4f7f9cbc2150e66778cc__section_BF)and the [API Reference](https://ui5.sap.com/#/api/sap.ui.model.Filter).

<sub>Changed•Feature•Info Only•1.146</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-03-19

</td>
</tr>
<tr>
<td valign="top">

1.146 

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

-   Experimental support for the following features when using data aggregation without group levels:

    -   Creating single entity instances. The first call must provide the `bAtEnd` parameter with a falsy value.For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding%23methods/create).

    -   Applying side effects on contexts that represent single entity instances.For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context%23methods/requestSideEffects).


-   The new `sap.ui.model.odata.v4.ODataModel#requestSideEffects` method enables applying side effects to all bindings matching specified absolute paths at the model level.For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel%23methods/requestSideEffects).


<sub>Changed•Feature•Info Only•1.146</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-03-19

</td>
</tr>
<tr>
<td valign="top">

1.146 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.FormattedText`** 

</td>
<td valign="top">

**`sap.m.FormattedText`**

Support for the HTML strikethrough tag \(<s\>\) has been added to the list of allowed tags in the control, enabling application developers to use strikethrough formatting.

<sub>Changed•Control•Info Only•1.146</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-03-19

</td>
</tr>
<tr>
<td valign="top">

1.146 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.f.SidePanel`** 

</td>
<td valign="top">

**`sap.f.SidePanel`**

A new `title` aggregation has been added to the `SidePanelItem`. This aggregation accepts the `sap.m.Title` control, enabling application developers to set title properties directly, such as the heading level and text styling, without requiring extra control APIs. If no title is specified, the control preserves backward compatibility by creating a default title as before. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.f.SidePanel).

<sub>Changed•Control•Info Only•1.146</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-03-19

</td>
</tr>
<tr>
<td valign="top">

1.146 

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

A new `open` event is introduced, which is fired after the menu has been opened. Application developers can now reliably determine when a menu has finished opening. The `open` event complements the existing `closed` event, providing consistent lifecycle event handling for opening and closing the menu. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.Menu%23events/Summary).

<sub>Changed•Control•Info Only•1.146</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-03-19

</td>
</tr>
<tr>
<td valign="top">

1.146 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.SinglePlanningCalendar`** 

</td>
<td valign="top">

**`sap.m.SinglePlanningCalendar`**

We have improved the keyboard handling. It now moves through appointments in visual order from earliest to latest. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.m.SinglePlanningCalendar/sample/sap.m.sample.SinglePlanningCalendar).

<sub>Changed•Control•Info Only•1.146</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-03-19

</td>
</tr>
<tr>
<td valign="top">

1.146 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.DatePicker`, `sap.m.DateTimePicker`, `sap.m.DateRangeSelection`** 

</td>
<td valign="top">

****`sap.m.DatePicker`, `sap.m.DateTimePicker`, `sap.m.DateRangeSelection`****

The mobile dialog implementations of the controls have been updated to display a *Cancel* button in the footer. Additionally, a default *Select* title is displayed when no external labels are associated with the control. These changes align with the Horizon visual design specification.

<sub>Changed•Control•Info Only•1.146</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-03-19

</td>
</tr>
<tr>
<td valign="top">

1.146 

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

The control's accessibility has been enhanced. When dialogs are draggable or resizable, the visual focus now targets the dialog itself instead of the header. The initial focus is set to the first focusable element within the dialog. You can reach the drag and resize focus handler using the *Tab* key, while mouse dragging continues on the header. Screen readers provide instructions on how to interact with the dialog. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.m.Dialog/sample/sap.m.sample.Dialog).

<sub>Changed•Control•Info Only•1.146</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-03-19

</td>
</tr>
<tr>
<td valign="top">

1.146 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.Carousel`** 

</td>
<td valign="top">

**`sap.m.Carousel`**

Responsive layout mode is now available. The number of visible pages in the carousel automatically adjusts to the available width. To enable responsive layout, set the `responsive`property in the `customLayout` to `true`. Additionally, you can define a minimum page width \(in pixels\) using the `minPageWidth` property. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.m.Carousel/sample/sap.m.sample.CarouselWithDisplayOptions).

<sub>Changed•Control•Info Only•1.146</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-03-19

</td>
</tr>
<tr>
<td valign="top">

1.146 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

User Documentation 

</td>
<td valign="top">

**`sap.ui.mdc.Chart`** 

</td>
<td valign="top">

**`sap.ui.mdc.Chart`**

We've added a new exercise to the UI5 MDC Tutorial on GitHub. This hands-on example demonstrates how to integrate a `Chart.js` with the MDC Chart control. For more information, see [Exercise 7: How to Use the MDC Chart with Chart.js](https://github.com/SAP-samples/ui5-mdc-json-tutorial/tree/main/u3/ex1).

<sub>Changed•User Documentation•Info Only•1.146</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-03-19

</td>
</tr>
</table>

**Related Information**  


[What's New in SAPUI5 1.147](what-s-new-in-sapui5-1-147-88df9d3.md "With this release SAPUI5 is upgraded from version 1.146 to 1.147.")

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

