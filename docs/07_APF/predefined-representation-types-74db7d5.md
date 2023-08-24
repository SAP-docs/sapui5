<!-- loio74db7d53b5c19456e10000000a423f68 -->

# Predefined Representation Types



## Use

The UI component of APF provides predefined representation types that can be used to display data.

These representation types are predefined in the file `sap/apf/core/representationTypes.js`. They can be referenced in the analytical configuration using their IDs.

Each representation type has a constructor assigned. The constructor is used as a parameter in the representation type object of the configuration file and points to the implementation of the representation type. The charts shipped with APF are implemented using the VizFrame charting library \(`sap.viz.ui5.controls.VizFrame`\) that is available with SAP UI5.

The following table lists the order of available representation types:


<table>
<tr>
<th valign="top">

Chart Name



</th>
<th valign="top">

ID



</th>
<th valign="top">

Constructor



</th>
<th valign="top">

Chart Type in VizFrame Charting Library



</th>
</tr>
<tr>
<td valign="top">

Column chart



</td>
<td valign="top">

ColumnChart



</td>
<td valign="top">

`sap.apf.ui.representations.columnChart` 



</td>
<td valign="top">

`sap.viz.ui5.controls.VizFrame({vizType : column});` 



</td>
</tr>
<tr>
<td valign="top">

Bar chart



</td>
<td valign="top">

BarChart



</td>
<td valign="top">

`sap.apf.ui.representations.barChart` 



</td>
<td valign="top">

`sap.viz.ui5.controls.VizFrame({vizType : bar});` 



</td>
</tr>
<tr>
<td valign="top">

Line chart



</td>
<td valign="top">

LineChart



</td>
<td valign="top">

`sap.apf.ui.representations.lineChart` 



</td>
<td valign="top">

`sap.viz.ui5.controls.VizFrame({vizType : line});` 



</td>
</tr>
<tr>
<td valign="top">

Line chart with two vertical axes



</td>
<td valign="top">

LineChartWithTwoVerticalAxes



</td>
<td valign="top">

`sap.apf.ui.representations.lineChartWithTwoVerticalAxes` 



</td>
<td valign="top">

`sap.viz.ui5.controls.Vi zFrame({vizType : dual_line});` 



</td>
</tr>
<tr>
<td valign="top">

Line chart with time axis



</td>
<td valign="top">

LineChartWithTimeAxis



</td>
<td valign="top">

`sap.apf.ui.representations.lineChartWithTimeAxis` 



</td>
<td valign="top">

`sap.viz.ui5.controls.Vi zFrame({vizType : timeseries_line});` 



</td>
</tr>
<tr>
<td valign="top">

Pie chart



</td>
<td valign="top">

PieChart



</td>
<td valign="top">

`sap.apf.ui.representations.pieChart` 



</td>
<td valign="top">

`sap.viz.ui5.controls.VizFrame({vizType : pie});` 



</td>
</tr>
<tr>
<td valign="top">

Donut chart



</td>
<td valign="top">

DonutChart



</td>
<td valign="top">

`sap.apf.ui.representations.donutChart` 



</td>
<td valign="top">

`sap.viz.ui5.controls.VizFrame({vizType : donut});` 



</td>
</tr>
<tr>
<td valign="top">

Scatter plot chart



</td>
<td valign="top">

ScatterPlotChart



</td>
<td valign="top">

`sap.apf.ui.representations.scatterPlotChart` 



</td>
<td valign="top">

`sap.viz.ui5.controls.VizFrame({vizType : scatter});` 



</td>
</tr>
<tr>
<td valign="top">

Bubble chart



</td>
<td valign="top">

BubbleChart



</td>
<td valign="top">

`sap.apf.ui.representations.bubbleChart` 



</td>
<td valign="top">

`sap.viz.ui5.controls.VizFrame({vizType : bubble});` 



</td>
</tr>
<tr>
<td valign="top">

Stacked column chart



</td>
<td valign="top">

StackedColumnChart



</td>
<td valign="top">

`sap.apf.ui.representations.stackedColumnChart` 



</td>
<td valign="top">

`sap.viz.ui5.controls.VizFrame({vizType : 100_stacked_column});` 



</td>
</tr>
<tr>
<td valign="top">

Stacked bar chart



</td>
<td valign="top">

StackedBarChart



</td>
<td valign="top">

`sap.apf.ui.representations.stackedBarChart` 



</td>
<td valign="top">

`sap.viz.ui5.controls.VizFrame({vizType : 100_stacked_bar});` 



</td>
</tr>
<tr>
<td valign="top">

100% stacked column chart



</td>
<td valign="top">

PercentageStackedColumnChart



</td>
<td valign="top">

`sap.apf.ui.representations.percentageStackedColumnChart` 



</td>
<td valign="top">

`sap.viz.ui5.controls.VizFrame({vizType : 100_stacked_column});)` 



</td>
</tr>
<tr>
<td valign="top">

100% stacked bar chart



</td>
<td valign="top">

PercentageStackedBarChart



</td>
<td valign="top">

`sap.apf.ui.representati ons.percentageStackedBarChart` 



</td>
<td valign="top">

`sap.viz.ui5.controls.Vi zFrame({vizType : 100_stacked_bar});)` 



</td>
</tr>
<tr>
<td valign="top">

Combined column line chart



</td>
<td valign="top">

CombinationChart



</td>
<td valign="top">

`sap.apf.ui.represent ations.combinationChart` 



</td>
<td valign="top">

`sap.viz.ui5.controls .Vi zFrame({vizType : combination});)` 



</td>
</tr>
<tr>
<td valign="top">

Combined stacked column line chart



</td>
<td valign="top">

StackedCombinationChart



</td>
<td valign="top">

`sap.apf.ui.represent ations.stackedCombinationChart` 



</td>
<td valign="top">

`sap.viz.ui5.controls .Vi zFrame({vizType : stacked combination});)` 



</td>
</tr>
<tr>
<td valign="top">

Combined column line chart with two vertical axes



</td>
<td valign="top">

DualCombinationChart



</td>
<td valign="top">

`sap.apf.ui.represent ations.dualCombinationChart` 



</td>
<td valign="top">

`sap.viz.ui5.controls .Vi zFrame({vizType : dual combination});)` 



</td>
</tr>
<tr>
<td valign="top">

Combined stacked column line chart with two vertical axes



</td>
<td valign="top">

DualStackedCombinationChart



</td>
<td valign="top">

`sap.apf.ui.represent ations.dualStackedCombinationChart` 



</td>
<td valign="top">

`sap.viz.ui5.controls .Vi zFrame({vizType : dual stacked combination});)` 



</td>
</tr>
<tr>
<td valign="top">

Heatmap chart



</td>
<td valign="top">

HeatmapChart



</td>
<td valign="top">

`Sap.apf.ui.representations.heatmapChart` 



</td>
<td valign="top">

`sap.viz.ui5.controls.Vi zFrame({vizType :heatmap});)` 



</td>
</tr>
<tr>
<td valign="top">

Table



</td>
<td valign="top">

TableRepresentation



</td>
<td valign="top">

`sap.apf.ui.representations.tableRepresentation` 



</td>
<td valign="top">

`SAPUI5 table (sap.ui.table.Table)` 



</td>
</tr>
<tr>
<td valign="top">

Tree table



</td>
<td valign="top">

TreeTableRepresentation



</td>
<td valign="top">

`sap.apf.ui.representations.treeTable` 



</td>
<td valign="top">

`SAPUI5 tree table (sap.ui.table.TreeTable)` 



</td>
</tr>
</table>

You can use the predefined representation types to define representations in your application. To do so, depending on the chart type you choose, you must define parameters such as the fields used for the horizontal axis and the vertical axis, or the field by which a chart is sorted.

**Related Information**  


[Analytical Configuration](analytical-configuration-5a467c5.md)

[The Representation Type Object](the-representation-type-object-6f467c5.md)

