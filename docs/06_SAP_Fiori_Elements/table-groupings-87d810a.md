<!-- loio87d810a6959246808a9a28f925f6bee3 -->

# Table Groupings

You can disable table grouping or define default table groups in different table types.

> ### Note:  
> For information about SAP Fiori elements for OData V4, see [Table Groupings](table-groupings-d344c5a.md).

SAP Fiori elements handles table groupings automatically.

The grouping of rows is supported in analytical tables \(`sap.ui.Table.AnalyticalTable`\) and responsive tables \(`sap.m.Table`\). Grid tables and tree tables are not supported.

An example of row grouping in a table is shown in the following screenshot:

![](images/Table_Grouping_b36df77.png)



<a name="loio87d810a6959246808a9a28f925f6bee3__section_nzy_r1y_rgb"/>

## Restrictions

For analytical tables, take the following restrictions into account:

-   Grouping can only be activated for dimension columns.

-   Grouping takes place on the server. The header formatter has no effect on the grouping itself. This means that groups stay separate even if they have the same header after formatting.

-   The `TextArrangement` annotation is not supported. A property with a text property is displayed as follows: "m – Meter". For more information, see the *API Reference* for [`TextArrangement`](https://ui5.sap.com/#/api/sap.ui.comp.smarttable.SmartTable/annotations/TextArrangement).

-   Displaying values with units of measure is not supported.




<a name="loio87d810a6959246808a9a28f925f6bee3__section_ijw_ywg_bsb"/>

## Grouping Header Text

These group header formatters are automatically set by SAP Fiori elements:

-   Responsive table: Set a grouping function on the sorter: `fnGroup` of `sap.ui.model.Sorter`.

-   Analytical table: Set property `groupHeaderFormatter` of `sap.ui.table.AnalyticalColumn```.




<a name="loio87d810a6959246808a9a28f925f6bee3__section_jkg_svv_tgc"/>

## Grouping Header Types

SAP Fiori elements supports these group header formatters:


<table>
<tr>
<th valign="top">

OData Type

</th>
<th valign="top">

SAP Display Format

</th>
<th valign="top">

OData Example

</th>
<th valign="top">

Unformatted

</th>
<th valign="top">

Formatted

</th>
<th valign="top">

Comments

</th>
</tr>
<tr>
<td valign="top">

`Edm.DateTimeOffsetDate`

</td>
<td valign="top">

Date

</td>
<td valign="top">

/Date\(1485471600000 +0000\)/

</td>
<td valign="top">

Fri Jan 27 2017 00:00:00 GMT+0100 \(Central European Standard Time\)

</td>
<td valign="top">

Jan 26, 2017

</td>
<td valign="top">

UTC

</td>
</tr>
<tr>
<td valign="top">

`Edm.DateTimeOffset`

</td>
<td valign="top">

 

</td>
<td valign="top">

/Date\(1485471600000 +0000\)/

</td>
<td valign="top">

Fri Jan 27 2017 00:00:00 GMT+0100 \(Central European Standard Time\)

</td>
<td valign="top">

Jan 27, 2017, 12:00:00 AM

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`Edm.DateTime`

</td>
<td valign="top">

Date

</td>
<td valign="top">

/Date\(1485471600000 +0000\)/

</td>
<td valign="top">

Fri Jan 27 2017 00:00:00 GMT+0100 \(Central European Standard Time\)

</td>
<td valign="top">

Jan 26, 2017

</td>
<td valign="top">

UTC

</td>
</tr>
<tr>
<td valign="top">

`Edm.DateTime`

</td>
<td valign="top">

 

</td>
<td valign="top">

/Date\(1485471600000 +0000\)/

</td>
<td valign="top">

Fri Jan 27 2017 00:00:00 GMT+0100 \(Central European Standard Time\)

</td>
<td valign="top">

Jan 27, 2017, 12:00:00 AM

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`Edm.Time`

</td>
<td valign="top">

Time

</td>
<td valign="top">

PT11H13M01S

</td>
<td valign="top">

\[object Object\] is: \{ms: 43980000, \_\_edmType: "Edm.Time"\}

</td>
<td valign="top">

11:13:01 AM

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`Edm.String`

</td>
<td valign="top">

Date

</td>
<td valign="top">

20180313

</td>
<td valign="top">

20180313

</td>
<td valign="top">

Mar 13, 2018

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`Edm.Boolean`

</td>
<td valign="top">

 

</td>
<td valign="top">

true

</td>
<td valign="top">

true

</td>
<td valign="top">

Yes

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

`Edm.Decimal`

</td>
<td valign="top">

 

</td>
<td valign="top">

10

</td>
<td valign="top">

10

</td>
<td valign="top">

10.000 m\*

</td>
<td valign="top">

Unit of measure

</td>
</tr>
<tr>
<td valign="top">

`Edm.Decimal`

</td>
<td valign="top">

 

</td>
<td valign="top">

2498.00

</td>
<td valign="top">

2498.00

</td>
<td valign="top">

2,498.00 EUR\*

</td>
<td valign="top">

Currency

</td>
</tr>
<tr>
<td valign="top">

`Edm.String`

</td>
<td valign="top">

 

</td>
<td valign="top">

m

</td>
<td valign="top">

m

</td>
<td valign="top">

Meter \(m\)\*

</td>
<td valign="top">

Unit of measure and `TextArrangement`

</td>
</tr>
<tr>
<td valign="top">

`Edm.String`

</td>
<td valign="top">

 

</td>
<td valign="top">

EUR

</td>
<td valign="top">

EUR

</td>
<td valign="top">

Euro \(EUR\)\*

</td>
<td valign="top">

Currency and `TextArrangement`

</td>
</tr>
</table>

\* Units of measure or currencies in the grouping header are supported only in responsive tables.

