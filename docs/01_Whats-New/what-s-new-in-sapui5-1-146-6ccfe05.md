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

The `value1` and `value2` parameters of `sap.ui.model.Filter` now support data binding. For more information, see [Bound Filters](../04_Essentials/sorting-grouping-and-filtering-for-list-binding-ec79a5d.md#loioec79a5d5918f4f7f9cbc2150e66778cc__section_BF)and the [API Reference](https://ui5.sap.com/#/api/sap.ui.model.Filter).

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

