<!-- loio2c641481649f44de9c1c22c9c3c49d13 -->

# Spreadsheet Export Restrictions

There are some restrictions and features that are not supported when you use the spreadsheet export.

The following restrictions apply:


<table>
<tr>
<td valign="top">

In Safari on iOS , the file name and file extension get lost due to a download attribute that is not supported. This issue is caused by the iOS Safari browser in every version before iOS 13.



</td>
</tr>
<tr>
<td valign="top">

Columns of type `sap.ui.export.EdmType.Date` and `sap.ui.export.EdmType.DateTime` support multiple calendars as defined by `sap.ui.core.CalendarType`. However, not all values of the `sap.ui.core.CalendarType` enumeration are supported. For more information about supported values for the `calendar` property for columns of type `sap.ui.export.EdmType.Date` and `sap.ui.export.EdmType.DateTime`, see [`Date`, `Time`, and `DateTime`.](data-types-for-spreadsheet-export-283217d.md#loio283217d8f187401c8045723abc27e5e0__section_tg5_hyv_43b) 



</td>
</tr>
<tr>
<td valign="top">

Column width is converted into an Office Open XML equivalent and may differ slightly from the original table. The column width is at least the same as the width of the column label.



</td>
</tr>
<tr>
<td valign="top">

If you use the client export within the `SmartTable` control, you have to provide additional `p13n` custom data for the custom columns.

Custom columns are created by the application or SAP Fiori Elements and not by the `SmartTable` control, so the `SmartTable` control does not recognize this data type.



</td>
</tr>
<tr>
<td valign="top">

The maximum number of rows that can be exported is restricted to 1,048,576.



</td>
</tr>
<tr>
<td valign="top">

The number of cells that can be exported is restricted to 2,000,000 on desktop and 100,000 on mobile devices.



</td>
</tr>
<tr>
<td valign="top">

The hierarchical depth that can be visually represented is restricted to eight levels.



</td>
</tr>
</table>

The following features are not supported:


<table>
<tr>
<td valign="top">

Charts



</td>
</tr>
<tr>
<td valign="top">

Icons



</td>
</tr>
<tr>
<td valign="top">

Semantic cell highlighting



</td>
</tr>
<tr>
<td valign="top">

Custom formatters



</td>
</tr>
<tr>
<td valign="top">

Dates before January 1st, 1900



</td>
</tr>
<tr>
<td valign="top">

Milliseconds in time information



</td>
</tr>
<tr>
<td valign="top">

Aggregated rows \(group headers or sum rows\)



</td>
</tr>
</table>

> ### Note:  
> For more information, see the SAP Note [3198506](https://launchpad.support.sap.com/#/notes/3198506).

