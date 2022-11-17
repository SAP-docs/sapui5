<!-- loioe7f52f49994347cbadde95620238f3f8 -->

# SAP Gateway Export versus Client Export

To decide which type of export to use, have a look at the following criteria.

The `SmartTable` control offers the following types of exports:

-   Client-side export

    This type of export is the default type.

-   SAP Gateway export of the SAP Gateway Foundation

    For more information about this export, search for Excel Support in the documentation of your SAP NetWeaver version on the SAP Help Portal at [https://help.sap.com/viewer/p/SAP\_NETWEAVER](https://help.sap.com/viewer/p/SAP_NETWEAVER).




<a name="loioe7f52f49994347cbadde95620238f3f8__section_qdb_rl2_lfb"/>

## Comparison of Export Types

To find out which export suits your requirements best, check out the following table:

**SAP Gateway versus Client Export**


<table>
<tr>
<th valign="top">

Feature



</th>
<th valign="top">

Description



</th>
<th valign="top">

SAP Gateway



</th>
<th valign="top">

Client



</th>
</tr>
<tr>
<td valign="top">

Number of cells



</td>
<td valign="top">

The number of cells that can be exported without warnings or errors.



</td>
<td valign="top">

Shows a warning if there are more than 100,000 cells or up to 500,000 cells, depending on the configuration of the session and ABAP memory.



</td>
<td valign="top">

Shows a warning depending on device used, for 2,000,000 cells on a desktop and 100,000 cells on a mobile device.

The total number of cells is limited only by the physical memory of the client and memory restrictions of the browser.



</td>
</tr>
<tr>
<td valign="top">

File compression



</td>
<td valign="top">

Office Open XML spreadsheets are ZIP containers that contain a particular file structure. To reduce the file size, these ZIP containers can be compressed.



</td>
<td valign="top">

 ![Supported](../02_Read-Me-First/images/Green_Led_3cb17ee.gif) 



</td>
<td valign="top">

 ![Supported](../02_Read-Me-First/images/Green_Led_3cb17ee.gif) 



</td>
</tr>
<tr>
<td valign="top">

Header row



</td>
<td valign="top">

The exported spreadsheet contains a header row with the corresponding column labels.



</td>
<td valign="top">

 ![Supported](../02_Read-Me-First/images/Green_Led_3cb17ee.gif) 



</td>
<td valign="top">

![Supported](../02_Read-Me-First/images/Green_Led_3cb17ee.gif)

Also, the exported spreadsheet uses the built-in auto filter for all configured columns. This will allow the user to apply filters directly in the exported file without having to change the file.



</td>
</tr>
<tr>
<td valign="top">

Localization



</td>
<td valign="top">

The location of the user exporting a file is taken into account, and the content of the exported spreadsheet will contain translated column headers and the required date, time, and Boolean representation.



</td>
<td valign="top">

![Partially supported](../02_Read-Me-First/images/Yellow_Led_3ea53dc.gif)

Column headers in the exported file can be shown in the user's language as defined in the back-end system and might differ from what the user sees on the UI.



</td>
<td valign="top">

![Supported](../02_Read-Me-First/images/Green_Led_3cb17ee.gif)

The column headers in the exported file are the same as the ones shown on the UI.



</td>
</tr>
<tr>
<td valign="top">

Meta information



</td>
<td valign="top">

Metadata with additional information is shown in the exported spreadsheet.



</td>
<td valign="top">

![Supported](../02_Read-Me-First/images/Green_Led_3cb17ee.gif)

Provides an appendix to add information to the data sheet.



</td>
<td valign="top">

![Supported](../02_Read-Me-First/images/Green_Led_3cb17ee.gif)

Provides an optional sheet in the workbook to attach additional information to the exported spreadsheet. This meta information is grouped and thus allows you to add information in different layers without any conflicts. A typical use case would be that, for example, `SmartTable` adds some basic information, and an application developer could enhance this by adding something on top of it.

In addition to that, the client export allows you to add additional information that is not part of the sheets inside the workbook. This data is built-in information and can be processed by applications like Microsoft Excel.



</td>
</tr>
<tr>
<td valign="top">

Hierarchies



</td>
<td valign="top">

The exported file can contain hierarchies that are visualized when opening the file with Microsoft Excel.



</td>
<td valign="top">

 ![Supported](../02_Read-Me-First/images/Green_Led_3cb17ee.gif) 



</td>
<td valign="top">

 ![Supported](../02_Read-Me-First/images/Green_Led_3cb17ee.gif) 



</td>
</tr>
<tr>
<td valign="top">

Data types



</td>
<td valign="top">

Office Open XML spreadsheets support various types of data that have a different visual and functional behavior. The type representation differs from the raw data and needs to be transformed accordingly.



</td>
<td valign="top">

![Partially supported](../02_Read-Me-First/images/Yellow_Led_3ea53dc.gif)

The types `text`, `number`, `date`, `time`, and `boolean` are supported.



</td>
<td valign="top">

The types `text`, `number`, `currency`, `date`, `time`, and `Boolean` are supported. In addition to the mere support for these data types, it is possible to pass additional configuration to create formatted text aggregations, a particular date and time output format, textual Boolean representation \(for example, *in stock/out of stock* instead of `true`/`false`\), and units of measurement.



</td>
</tr>
<tr>
<td valign="top">

Read Access Logging \(RAL\) support



</td>
<td valign="top">

If configured, Read Access Logging tracks who has access to which data at which point in time.This information might be required for audits.



</td>
<td valign="top">

![Not supported](../02_Read-Me-First/images/Red_Led_5befb5a.gif)

RAL is not supported because the SAP Gateway export is carried out by a server process that does not run in a specific user context.



</td>
<td valign="top">

![Supported](../02_Read-Me-First/images/Green_Led_3cb17ee.gif)

RAL is fully supported because the client export uses the existing OData service to request data.



</td>
</tr>
</table>

![](../02_Read-Me-First/images/Green_Led_3cb17ee.gif) = Supported, ![](../02_Read-Me-First/images/Yellow_Led_3ea53dc.gif) = Partially supported, ![](../02_Read-Me-First/images/Red_Led_5befb5a.gif) = Not supported

**Related Information**  


[API Reference: `sap.ui.comp.smarttable.ExportType`](https://ui5.sap.com/#/api/sap.ui.comp.smarttable.ExportType)

[API Reference: `SmartTable`](https://ui5.sap.com/#/api/sap.ui.comp.smarttable.SmartTable/controlProperties)

