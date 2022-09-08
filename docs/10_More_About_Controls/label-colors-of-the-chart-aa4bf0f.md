<!-- loioaa4bf0f6d2a943d9b9931db81421d523 -->

# Label Colors of the Chart

You use the Criticality Calculation feature to control the color of the labels at the top.

You cannot set the label color directly. The color of the labels at the bottom is unchangeable and will always be displayed with `ValueColor.Neutral`. The color of the labels at the top is calculated using the thresholds that are common for every Criticality Calculation across the Smart Micro Charts. For example:

<a name="loioaa4bf0f6d2a943d9b9931db81421d523__table_r2h_2wt_ny"/>Thresholds


<table>
<tr>
<th valign="top">

Property



</th>
<th valign="top">

Type



</th>
<th valign="top">

Value



</th>
</tr>
<tr>
<td valign="top">

DeviationLowValue



</td>
<td valign="top">

Negative



</td>
<td valign="top">

10



</td>
</tr>
<tr>
<td valign="top">

ToleranceLowValue



</td>
<td valign="top">

Critical



</td>
<td valign="top">

45



</td>
</tr>
<tr>
<td valign="top">

ToleranceHighValue



</td>
<td valign="top">

Critical



</td>
<td valign="top">

55



</td>
</tr>
<tr>
<td valign="top">

DeviationHighValue



</td>
<td valign="top">

Negative



</td>
<td valign="top">

80



</td>
</tr>
</table>

<a name="loioaa4bf0f6d2a943d9b9931db81421d523__table_dvf_qwt_ny"/>Resulting colors of different sample values in different Improvement Directions


<table>
<tr>
<th valign="top">

Value



</th>
<th valign="top">

Maximize direction



</th>
<th valign="top">

Minimize direction



</th>
<th valign="top">

Target direction



</th>
</tr>
<tr>
<td valign="top">

5



</td>
<td valign="top">

Error



</td>
<td valign="top">

Good



</td>
<td valign="top">

Error



</td>
</tr>
<tr>
<td valign="top">

15



</td>
<td valign="top">

Critical



</td>
<td valign="top">

Good



</td>
<td valign="top">

Critical



</td>
</tr>
<tr>
<td valign="top">

50



</td>
<td valign="top">

Good



</td>
<td valign="top">

Good



</td>
<td valign="top">

Good



</td>
</tr>
<tr>
<td valign="top">

70



</td>
<td valign="top">

Good



</td>
<td valign="top">

Critical



</td>
<td valign="top">

Critical



</td>
</tr>
<tr>
<td valign="top">

90



</td>
<td valign="top">

Good



</td>
<td valign="top">

Error



</td>
<td valign="top">

Error



</td>
</tr>
</table>

