<!-- loioa254991b7bb040059a95b6a7f551ee51 -->

# Control Structure

The `sap.f.FlexibleColumnLayout` contains 3 instances of `sap.m.NavContainer` – one for each column.

It is logically similar to `sap.m.SplitContainer`, however, there are two main differences:

-   Displays up to 3 columns side by side \(as opposed to 2 columns\)
-   The width of the columns is not fixed, but flexible \(determined by the `layout` property\)

The following table respresents how the `FlexibleColumnLayout` roughly relates to the `NavContainer` and `SplitContainer` controls.


<table>
<tr>
<th valign="top">

Control



</th>
<th valign="top">

API



</th>
<th valign="top">

Number of Pages Displayed



</th>
</tr>
<tr>
<td valign="top">

`sap.m.NavContainer` 



</td>
<td valign="top">

`pages` \(aggregation\)



</td>
<td valign="top">

1 page at a time



</td>
</tr>
<tr>
<td valign="top">

`sap.m.SplitContainer` 



</td>
<td valign="top">

`masterPages` \(aggregation\)

`detailPages` \(aggregation\)



</td>
<td valign="top">

Up to 2 pages at a time \(2 instances of `NavContainer`\)



</td>
</tr>
<tr>
<td valign="top">

`sap.f.FlexibleColumnLayout` 



</td>
<td valign="top">

`beginColumnPages` \(aggregation\)

`midColumnPages` \(aggregation\)

`endColumnPages` \(aggregation\)

`layout` \(property of type `sap.f.LayoutType`, determining the relative widths of the 3 `NavContainers`\)



</td>
<td valign="top">

Up to 3 pages at a time \(3 instances of `NavContainer`\)



</td>
</tr>
</table>

