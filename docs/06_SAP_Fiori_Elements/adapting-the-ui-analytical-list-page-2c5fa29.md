<!-- loio2c5fa29df37c4d13b5142ed7b484b274 -->

# Adapting the UI: Analytical List Page

You can extend and customize specific features of the analytical list page using the SAPUI5 Visual Editor in SAP Web IDE.



> ### Note:  
> This topic is currently only applicable to SAP Fiori elements for OData V2.



You can also use [SAP Fiori tools](https://help.sap.com/viewer/product/SAP_FIORI_tools/Latest/en-US) for SAPUI5 versions higher than or equal to 1.52 to adapt the analytical list page.

> ### Note:  
> Adapt the UI only for the use cases described here. Otherwise, control replacements might lead to changes that can no longer be applied.

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

Configure the `Header Expanded` property for the template \(ID is `template:Page`\) to collapse and hide the filter bar.



</td>
</tr>
<tr>
<td valign="top">

Freeze filter bar on scroll



</td>
<td valign="top">

Configure the `Preserve header state on scroll` property for the template \(ID is `template:Page`\) to freeze the filter bar.



</td>
</tr>
<tr>
<td valign="top">

Variant management options



</td>
<td valign="top">

Configure the following page variant \(ID is `template:PageVariant`\) properties to enable the variant management options:

-   `Set as default`: This property lets you set the default variant for a user

-   `Public`: This property lets you make the variant as visible to users




</td>
</tr>
<tr>
<td valign="top">

Share icon



</td>
<td valign="top">

Configure the `Visibility` property to hide or unhide the share icon \(ID is `template:Share`\).



</td>
</tr>
<tr>
<td valign="top">

Clear button



</td>
<td valign="top">

The clear button may appear on the smart filter bar or on the header area based on the enabling of *Go* button. If the *Clear* button is on the:

-   Smart filer bar: Configure the `Visibility` property of the clear button \(ID is `template:SmartFilterBar-btnClear`\).

-   Header bar: Configure the `Visibility` property of the *Clear* button \(ID is `template:ClearButton`\).




</td>
</tr>
<tr>
<td valign="top">

Table toolbar



</td>
<td valign="top">

Configure the `Visibility` property of the table toolbar \(ID is `template:TableToolbar`\) to hide or unhide table toolbar.



</td>
</tr>
<tr>
<td valign="top">

Page footer



</td>
<td valign="top">

Configure the `Visibility` property of the page footer \(ID is `template:FooterToolbar`\) to hide or unhide page footer.



</td>
</tr>
<tr>
<td valign="top">

Chart



</td>
<td valign="top">

Use the following smart chart \(ID is `chart`, example C\_ContrItemMonitoringResults--chart\) properties on the UI Adaptation layer:

-   Ignored Chart Types

-   Selection Mode

-   Chart tool tip

-   Chart type selection button




</td>
</tr>
</table>



## Adapting the UI: Chart

****


<table>
<tr>
<th valign="top">

Property



</th>
<th valign="top">

Description



</th>
</tr>
<tr>
<td valign="top">

Ignored chart types



</td>
<td valign="top">

Comma-separated value fields do not show up in the list of available chart types.



</td>
</tr>
<tr>
<td valign="top">

No data



</td>
<td valign="top">

Allows you to override the default text when chart has no data to display.



</td>
</tr>
<tr>
<td valign="top">

Selection mode



</td>
<td valign="top">

Lets you select the mode \(single, multiple, or none\).



</td>
</tr>
<tr>
<td valign="top">

Show chart type selection button



</td>
<td valign="top">

Controls the visibility of the chart type button \(users could change the chart type\).



</td>
</tr>
<tr>
<td valign="top">

Show download button



</td>
<td valign="top">

Controls the visibility of the chart download button \(users can download the chart as an image\)



</td>
</tr>
<tr>
<td valign="top">

Show legend button



</td>
<td valign="top">

Controls the visibility of the legend button \(users can toggle the visibility of the chart legends\)



</td>
</tr>
</table>



### Values for Ignored Chart Type

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

Sample ID



</th>
<th valign="top">

Setting



</th>
</tr>
<tr>
<td valign="top">

C\_ContrItemMonitoringResults--chart-btnPersonalisation



</td>
<td valign="top">

Icon: For chart personalization



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

Sample ID



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

C\_ContrItemMonitoringResults--table-btnPersonalisation



</td>
<td valign="top">

Icon: Lets you configure the table personalization



</td>
</tr>
<tr>
<td valign="top">

C\_ContrItemMonitoringResults--table-btnExcelExport



</td>
<td valign="top">

Icon: To export content to Excel

The *Export to Excel* button is visible on the UI by default. You can hide this button by setting the `Use Export to Excel` property to `False` via UI adaptation.



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
</table>



<a name="loio2c5fa29df37c4d13b5142ed7b484b274__section_mqn_1zz_dcb"/>

## Adapting the UI: Table Column

Each column of the smart table can also be tweaked in UI Adaptation \(sample ID is `C_ContrItemMonitoringResults--PurchaseContract`\). The smart table columns expose several properties for this purpose. Some of them are listed here:

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

Visible



</td>
<td valign="top">

Hide or unhide a column



</td>
</tr>
<tr>
<td valign="top">

Width



</td>
<td valign="top">

Adjust the column width



</td>
</tr>
<tr>
<td valign="top">

Auto Resizable



</td>
<td valign="top">

Expand column to the maximum width of the content



</td>
</tr>
<tr>
<td valign="top">

InResult



</td>
<td valign="top">

Ensures the column is always used in the query, which affects the aggregation level



</td>
</tr>
<tr>
<td valign="top">

Resizable



</td>
<td valign="top">

Resize column width



</td>
</tr>
<tr>
<td valign="top">

Show Sort Menu Entry



</td>
<td valign="top">

Displays column with a sort tab for personalization



</td>
</tr>
<tr>
<td valign="top">

Sort Order



</td>
<td valign="top">

Allows sorting



</td>
</tr>
<tr>
<td valign="top">

Sorted



</td>
<td valign="top">

Displays sorted items when sort is available in column header



</td>
</tr>
<tr>
<td valign="top">

Summed



</td>
<td valign="top">

Displays the total sum of a column



</td>
</tr>
</table>



<a name="loio2c5fa29df37c4d13b5142ed7b484b274__section_efj_215_5mb"/>

## Adapting the UI: Visual Filters Dialog

Each button of the *Adapt Filters* dialog in Visual Filter mode can be tweaked via UI adaptation. The buttons and micro charts expose several properties for this purpose. Some of the button properties are listed here:

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

Visible



</td>
<td valign="top">

Hide or reveal a button



</td>
</tr>
<tr>
<td valign="top">

Width



</td>
<td valign="top">

Adjust the width of a button



</td>
</tr>
<tr>
<td valign="top">

Icon



</td>
<td valign="top">

Lets you configure a button icon



</td>
</tr>
<tr>
<td valign="top">

Active Icon



</td>
<td valign="top">

The source property of an alternative icon for the active \(depressed\) state of the button



</td>
</tr>
<tr>
<td valign="top">

Text



</td>
<td valign="top">

Allows you to change button text



</td>
</tr>
<tr>
<td valign="top">

Busy



</td>
<td valign="top">

Denotes whether a control is currently in busy state



</td>
</tr>
<tr>
<td valign="top">

Enabled



</td>
<td valign="top">

Enable or disable a button



</td>
</tr>
<tr>
<td valign="top">

Blocked



</td>
<td valign="top">

Denotes whether a control is currently in blocked state



</td>
</tr>
</table>

