<!-- loio600e3b8476554a9c8db2fb134415d98c -->

# Tree Table

For hierarchical steps, there is only one representation available to vizualize the data: the tree table. To create a representation for a hierarchical step, select the step, click *Add* \> *Representation* and enter the following:


<table>
<tr>
<th valign="top">

Field

</th>
<th valign="top">

Explanation

</th>
</tr>
<tr>
<td valign="top">

Visualization

</td>
<td valign="top">

Prefilled with *Tree Table*

</td>
</tr>
<tr>
<td valign="top">

Basic Data

</td>
<td valign="top">

Enter the hierarchical property for the first column of the tree table and properties for further columns.

If you have selected both a key property and the corresponding text property for the hierarchical property at step level, you can define what is displayed in the first column of the tree table: the key or the text. If you want both key and text to be displayed, use *Key* for the hierarchical column and define an additional column for the corresponding text property.

The default label text for each property is derived from the `sap:label` annotation of the property. You can see that the default text is used when you see *Label \(Default\)* in front of the entry field. You can overwrite the default text with your own label text as required. When you delete the label text, the default label is displayed again.

</td>
</tr>
<tr>
<td valign="top">

Sorting

</td>
<td valign="top">

You can define whether certain measures are applied to the data request and subsequently to the chart as sorting criteria. You can also specify the sorting direction \(ascending or descending\) for each measure. If you don’t specify a sorting field, the data is displayed in the order provided by the OData service.

</td>
</tr>
<tr>
<td valign="top">

Corner Texts for Thumbnail

</td>
<td valign="top">

The texts that are displayed in the four corners of the thumbnail in the analysis path display. All of them are optional.

The fields are prefilled with the texts entered at step level, if applicable. When a text is entered or changed on representation level, this text takes precedence over the corresponding text entered at step level and is displayed at runtime. When you now again change the same text at step level, this change is not copied to the representation and also not reflected at runtime. This only applies to those representations where a change has been made on representation level.

</td>
</tr>
</table>

> ### Note:  
> A preview is not available for tree tables.

