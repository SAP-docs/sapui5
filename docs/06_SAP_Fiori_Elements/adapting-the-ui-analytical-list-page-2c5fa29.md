<!-- loio2c5fa29df37c4d13b5142ed7b484b274 -->

# Adapting the UI: Analytical List Page

You can extend and customize specific features of the analytical list page.



> ### Note:  
> This topic is only applicable to SAP Fiori elements for OData V2.



We recommend that you use [SAP Fiori tools](https://help.sap.com/viewer/product/SAP_FIORI_tools/Latest/en-US), which is a set of extensions for SAP Business Application Studio and Visual Studio Code, to adapt the analytical list page.

> ### Note:  
> Adapt the UI only for the use cases described in this topic. Otherwise, control replacements might lead to changes that can no longer be applied.

> ### Note:  
> In the Page Editor, a property is written with spaces in between for better readability. In SAP Fiori elements, whenever we provide a property, it is written in the actual code format.

****


<table>
<tr>
<th valign="top">

Feature

</th>
<th valign="top">

Setting

</th>
</tr>
<tr>
<td valign="top">

Collapse smart filter bar

</td>
<td valign="top">

Configure the `headerExpanded` property for the template to collapse and hide the filter bar.

</td>
</tr>
<tr>
<td valign="top">

Freeze filter bar on scroll

</td>
<td valign="top">

Configure the `preserveHeaderStateonScroll` property for the template to freeze the filter bar.

</td>
</tr>
<tr>
<td valign="top">

Variant management options

</td>
<td valign="top">

Configure the following page variant properties to enable the variant management options:

-   `showSetAsDefault`: This property lets you set the default variant for a user

-   `showShare`: This property lets you make the variant as visible to users




</td>
</tr>
<tr>
<td valign="top">

Share icon

</td>
<td valign="top">

Configure the `visible` property to hide or unhide the share icon.

</td>
</tr>
<tr>
<td valign="top">

Clear button

</td>
<td valign="top">

The clear button may appear on the smart filter bar or on the header area based on the enabling of *Go* button. If the *Clear* button is on the:

-   Smart filer bar: Configure the `visible` property of the clear button.

-   Header bar: Configure the `visible` property of the *Clear* button.




</td>
</tr>
<tr>
<td valign="top">

Table toolbar

</td>
<td valign="top">

Configure the `visible` property of the table toolbar to hide or unhide table toolbar.

</td>
</tr>
<tr>
<td valign="top">

Page footer

</td>
<td valign="top">

Configure the `visible` property of the page footer to hide or unhide page footer.

</td>
</tr>
<tr>
<td valign="top">

Chart

</td>
<td valign="top">

Use the following smart chart properties on the UI Adaptation layer:

-   `ignoredChartTypes`

-   `selectionMode`

-   `showChartTooltip`

-   `showChartTypeSelectionButton`




</td>
</tr>
</table>



## Adapting the UI: Chart

****


<table>
<tr>
<th valign="top">

Feature

</th>
<th valign="top">

Setting

</th>
</tr>
<tr>
<td valign="top">

Ignored chart types

</td>
<td valign="top">

Configure the `ignoredChartType` property to hide certain chart types. Upon entering the value as comma-separated chart types, the mentioned charts do not show up in the list of available charts.

</td>
</tr>
<tr>
<td valign="top">

No data

</td>
<td valign="top">

Configure the `noData` property that allows you to override the default text when chart has no data to display.

</td>
</tr>
<tr>
<td valign="top">

Selection mode

</td>
<td valign="top">

Configure the `selectionMode` property that lets you select the mode \(single, multiple, or none\).

</td>
</tr>
<tr>
<td valign="top">

Show chart type selection button

</td>
<td valign="top">

Configure the `showChartTypeSelectionButton` property that controls the visibility of the chart type button \(users could change the chart type\).

</td>
</tr>
<tr>
<td valign="top">

Show download button

</td>
<td valign="top">

Configure the `showDownloadButton` property that controls the visibility of the chart download button \(users can download the chart as an image\).

</td>
</tr>
<tr>
<td valign="top">

Show legend button

</td>
<td valign="top">

Configure the `showLegendButton` property that controls the visibility of the legend button \(users can toggle the visibility of the chart legends\).

</td>
</tr>
</table>



### List of Available Chart Types

****


<table>
<tr>
<th valign="top">

Chart Type

</th>
<th valign="top">

ignoredChartTypes value

</th>
</tr>
<tr>
<td valign="top">

Bar Chart

</td>
<td valign="top">

bar

</td>
</tr>
<tr>
<td valign="top">

Column Chart

</td>
<td valign="top">

column

</td>
</tr>
<tr>
<td valign="top">

Line Chart

</td>
<td valign="top">

line

</td>
</tr>
<tr>
<td valign="top">

Combined Column Line Chart

</td>
<td valign="top">

combination

</td>
</tr>
<tr>
<td valign="top">

Pie Chart

</td>
<td valign="top">

pie

</td>
</tr>
<tr>
<td valign="top">

Doughnut Chart

</td>
<td valign="top">

donut

</td>
</tr>
<tr>
<td valign="top">

Scatter Plot

</td>
<td valign="top">

scatter

</td>
</tr>
<tr>
<td valign="top">

Bubble Chart

</td>
<td valign="top">

bubble

</td>
</tr>
<tr>
<td valign="top">

Heat Map

</td>
<td valign="top">

heatmap

</td>
</tr>
<tr>
<td valign="top">

Bullet Chart

</td>
<td valign="top">

bullet

</td>
</tr>
<tr>
<td valign="top">

Vertical Bullet Chart

</td>
<td valign="top">

vertical\_bullet

</td>
</tr>
<tr>
<td valign="top">

Stacked Bar Chart

</td>
<td valign="top">

stacked\_bar

</td>
</tr>
<tr>
<td valign="top">

Stacked Column Chart

</td>
<td valign="top">

stacked\_column

</td>
</tr>
<tr>
<td valign="top">

Combined Stacked Line Chart

</td>
<td valign="top">

stacked\_combination

</td>
</tr>
<tr>
<td valign="top">

Horizontal Combined Stacked Line Chart

</td>
<td valign="top">

horizontal\_stacked\_combination

</td>
</tr>
<tr>
<td valign="top">

Bar Chart with 2 X-Axes

</td>
<td valign="top">

dual\_bar

</td>
</tr>
<tr>
<td valign="top">

Column Chart with 2 Y-Axes

</td>
<td valign="top">

dual\_column

</td>
</tr>
<tr>
<td valign="top">

Line Chart with 2 Y-Axes

</td>
<td valign="top">

dual\_line

</td>
</tr>
<tr>
<td valign="top">

Stacked Bar Chart with 2 X-Axes

</td>
<td valign="top">

dual\_stacked\_bar

</td>
</tr>
<tr>
<td valign="top">

Stacked Column Chart with 2 Y-Axes

</td>
<td valign="top">

dual\_stacked\_column

</td>
</tr>
<tr>
<td valign="top">

Combined Column Line Chart with 2 Y-Axes

</td>
<td valign="top">

dual\_combination

</td>
</tr>
<tr>
<td valign="top">

Combined Bar Line Chart with 2 X-Axes

</td>
<td valign="top">

dual\_stacked\_combination

</td>
</tr>
<tr>
<td valign="top">

Combined Stacked Line Chart with 2 Y-Axes

</td>
<td valign="top">

dual\_horizontal\_combination

</td>
</tr>
<tr>
<td valign="top">

Horizontal Combined Stacked Line Chart with 2 X-Axes

</td>
<td valign="top">

dual\_horizontal\_stacked\_combination

</td>
</tr>
<tr>
<td valign="top">

100% Stacked Bar Chart

</td>
<td valign="top">

100\_stacked\_bar

</td>
</tr>
<tr>
<td valign="top">

100% Stacked Column Chart

</td>
<td valign="top">

100\_stacked\_column

</td>
</tr>
<tr>
<td valign="top">

100% Stacked Bar Chart with 2 X-Axes

</td>
<td valign="top">

100\_dual\_stacked\_bar

</td>
</tr>
<tr>
<td valign="top">

100% Stacked Column Chart with 2 Y-Axes

</td>
<td valign="top">

100\_dual\_stacked\_column

</td>
</tr>
<tr>
<td valign="top">

Waterfall Chart

</td>
<td valign="top">

waterfall

</td>
</tr>
<tr>
<td valign="top">

Horizontal Waterfall Chart

</td>
<td valign="top">

horizontal\_waterfall

</td>
</tr>
</table>



<a name="loio2c5fa29df37c4d13b5142ed7b484b274__section_tgz_r1x_dcb"/>

## Adapting the UI: Chart Toolbar

****


<table>
<tr>
<th valign="top">

Feature

</th>
<th valign="top">

Setting

</th>
</tr>
<tr>
<td valign="top">

Chart personalisation button

</td>
<td valign="top">

Configure the `visible` property to display or hide the Settings icon of chart personalisation

</td>
</tr>
<tr>
<td valign="top">

C\_ContrItemMonitoringResults--chart-btnDrillDownText

</td>
<td valign="top">

Visibility: To drill down within the chart toolbar

</td>
</tr>
</table>



<a name="loio2c5fa29df37c4d13b5142ed7b484b274__section_kfh_kxz_dcb"/>

## Adapting the UI: Table

****


<table>
<tr>
<th valign="top">

Feature

</th>
<th valign="top">

Setting

</th>
</tr>
<tr>
<td valign="top">

C\_ContrItemMonitoringResults--table-nodata

</td>
<td valign="top">

Allows you to override the default text when chart has no data to display

</td>
</tr>
<tr>
<td valign="top">

Personalization

</td>
<td valign="top">

Configure the `visible` property to display or hide the *Settings* icon of table personalisation.

</td>
</tr>
<tr>
<td valign="top">

Export to Excel

</td>
<td valign="top">

The *Export to Excel* button is visible on the UI by default. You can hide this button by setting the `enableExport` property to `False` using the UI adaptation.

</td>
</tr>
<tr>
<td valign="top">

C\_ContrItemMonitoringResults--table

</td>
<td valign="top">

Show Row Count

</td>
</tr>
<tr>
<td valign="top">

Configuration of dynamically loaded additional records from the back-end system while scrolling within grid tables, tree tables, or analytical tables.

</td>
<td valign="top">

In the outline, choose the table that requires a change to its `scrollThreshold` parameter, and update it with the new value.

The default value is 300.

</td>
</tr>
<tr>
<td valign="top">

Row selection in responsive tables

</td>
<td valign="top">

Determine whether row selection in a responsive table persists or resets after a refresh or data update.

Configure the `rememberSelections` property to either `True` or `False`. The default value is `False`.

</td>
</tr>
</table>



<a name="loio2c5fa29df37c4d13b5142ed7b484b274__section_mqn_1zz_dcb"/>

## Adapting the UI: Table Column

Each column of the smart table can also be tweaked in UI Adaptation. The smart table columns expose several properties for this purpose. Some of them are listed here:

****


<table>
<tr>
<th valign="top">

Property

</th>
<th valign="top">

Setting

</th>
</tr>
<tr>
<td valign="top">

`visible` 

</td>
<td valign="top">

Hide or unhide a column.

</td>
</tr>
<tr>
<td valign="top">

`width` 

</td>
<td valign="top">

Adjust the column width

</td>
</tr>
<tr>
<td valign="top">

`autoResizable` 

</td>
<td valign="top">

Expand column to the maximum width of the content

</td>
</tr>
<tr>
<td valign="top">

`inResult` 

</td>
<td valign="top">

Ensures the column is always used in the query, which affects the aggregation level

</td>
</tr>
<tr>
<td valign="top">

`resizable` 

</td>
<td valign="top">

Resize column width

</td>
</tr>
<tr>
<td valign="top">

`showSortMenuEntry` 

</td>
<td valign="top">

Displays column with a sort tab for personalization

</td>
</tr>
<tr>
<td valign="top">

`sortOrder` 

</td>
<td valign="top">

Allows sorting in ascending or descending. The default value is ascending.

</td>
</tr>
<tr>
<td valign="top">

`sorted` 

</td>
<td valign="top">

Displays sorted items when sort is available in column header

</td>
</tr>
<tr>
<td valign="top">

`summed` 

</td>
<td valign="top">

Displays the total sum of a column

</td>
</tr>
</table>



<a name="loio2c5fa29df37c4d13b5142ed7b484b274__section_efj_215_5mb"/>

## Adapting the UI: Visual Filters Dialog

Each button of the *Adapt Filters* dialog in Visual Filter mode can be tweaked in UI adaptation. The buttons and micro charts expose several properties for this purpose. Some of the button properties are listed here:

****


<table>
<tr>
<th valign="top">

Property

</th>
<th valign="top">

Setting

</th>
</tr>
<tr>
<td valign="top">

`visible` 

</td>
<td valign="top">

Hide or reveal a button

</td>
</tr>
<tr>
<td valign="top">

`width` 

</td>
<td valign="top">

Adjust the width of a button

</td>
</tr>
<tr>
<td valign="top">

`icon` 

</td>
<td valign="top">

Lets you configure a button icon

</td>
</tr>
<tr>
<td valign="top">

`activeIcon` 

</td>
<td valign="top">

The source property of an alternative icon for the active \(depressed\) state of the button

</td>
</tr>
<tr>
<td valign="top">

`text` 

</td>
<td valign="top">

Allows you to change button text

</td>
</tr>
<tr>
<td valign="top">

`busy` 

</td>
<td valign="top">

Denotes whether a control is currently in busy state

</td>
</tr>
<tr>
<td valign="top">

`enabled` 

</td>
<td valign="top">

Enable or disable a button

</td>
</tr>
<tr>
<td valign="top">

`blocked` 

</td>
<td valign="top">

Denotes whether a control is currently in blocked state

</td>
</tr>
</table>

