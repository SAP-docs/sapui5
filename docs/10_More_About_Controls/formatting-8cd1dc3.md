<!-- loio8cd1dc3ef4c94e2b9ba78a4c43eac9fd -->

# Formatting

The top labels are always formatted by the `sap.ui.core.format.NumberFormat`.

The bottom labels are formatted by the number or date formatter depending on the `dimensions` property's type and its annotations:

**Formatted bottom labels in different annotation cases**


<table>
<tr>
<th valign="top">

Type of `dimension` property

</th>
<th valign="top">

Annotations

</th>
<th valign="top">

Raw value

</th>
<th valign="top">

X-coordinate value

</th>
<th valign="top">

Formatted value for bottom label

</th>
</tr>
<tr>
<td valign="top">

Any type

</td>
<td valign="top">

`sap:text`="DateLabel" \(or has annotation `Common.Text` whose Path="DateLabel"\)

</td>
<td valign="top">

"any text" \(raw value of `DateLabel` property\)

</td>
<td valign="top">

Depends on property type \(use index value if neither date nor number type\)

</td>
<td valign="top">

'any text'

</td>
</tr>
<tr>
<td valign="top">

Edm.String

</td>
<td valign="top">

`sap:semantics`="year" \(or has annotation `IsCalendarYear`\)

</td>
<td valign="top">

2016

</td>
<td valign="top">

Timestamp

</td>
<td valign="top">

1/1/16

</td>
</tr>
<tr>
<td valign="top">

Edm.String

</td>
<td valign="top">

`sap:semantics`="yearmonth" \(or has annotation `IsCalendarYearMonth`\)

</td>
<td valign="top">

201612

</td>
<td valign="top">

Timestamp

</td>
<td valign="top">

12/1/16

</td>
</tr>
<tr>
<td valign="top">

Edm.String

</td>
<td valign="top">

`sap:semantics`="yearmonthday" \(or has annotation `IsCalendarDate`\)

</td>
<td valign="top">

20161225

</td>
<td valign="top">

Timestamp

</td>
<td valign="top">

12/25/16

</td>
</tr>
<tr>
<td valign="top">



</td>
<td valign="top">

\---

</td>
<td valign="top">

'any text'

</td>
<td valign="top">

Indices

</td>
<td valign="top">



</td>
</tr>
<tr>
<td valign="top">

Edm.DateTime

</td>
<td valign="top">



</td>
<td valign="top">

/Date\(1472629368000\)/

</td>
<td valign="top">

Timestamp

</td>
<td valign="top">

8/31/16

</td>
</tr>
<tr>
<td valign="top">

Edm.Int32 or other number types

</td>
<td valign="top">



</td>
<td valign="top">

20000

</td>
<td valign="top">

20000

</td>
<td valign="top">

20K

</td>
</tr>
</table>

-   If the `dimensions` property has a V2 annotation `sap:text` \(or V4 annotation `Common.Text`\) pointing to another property, that property's value will be used to display the bottom label, no matter what the primary property's data type is. The x-coordinate's value depends on the primary property's data type. If its type is `DateTime`, the date is converted to a timestamp; if it has a numeric type, the value is used directly. In other cases, each point's index from within the data list is used, causing an evenly distribution of points on the x-axis.

-   If the type of the `dimensions` property is 'string' and it has a V2 annotation `sap:semantics` \(or the V4 annotation `IsCalendarYear`, or similar\), the raw value is formatted to a shortened date string based on the pattern provided by `sap:semantics` \(or a corresponding pattern of `IsCalendarYear`\) and the value of the x-coordinate is set to the formatted date's timestamp. The bottom label displays the formatted short date.
-   If the type of the `dimensions` property is `DateTime` or another numeric type without any of the annotations mentioned above, the raw value is formatted by the number formatter or date formatter depending on the data type. Each point's x-coordinate value is set to the date's timestamp representation if its type is `DateTime`, and to a numeric value if its type is numeric.

