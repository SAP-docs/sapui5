<!-- loio41e2803d910146e58af6f32ee64b761d -->

# Creating Representations

The following video shows how to configure a representation:



To create a representation, select the step you want to create the representation for, click *Add* \> *Representation* and enter the following:


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

Select a chart type or table representation from the value help.

> ### Note:  
> If there is an asterisk in front of the chart type, this indicates that the properties selected on step level are not sufficient to configure this chart type. To be able to use it, you must go back to the analysis step configuration and add more dimensions or measures as required.

In the analysis step gallery, the chart type is indicated by an icon and a label.

</td>
</tr>
<tr>
<td valign="top">

Basic Data

</td>
<td valign="top">

Depending on the chart type you chose, enter data such as the dimension for the horizontal axis and the legend, and the measure. Some chart types offer more fields, for example, the stacked column chart, or fewer fields, for example, the pie chart. Mandatory fields are marked with an asterisk.

If you have selected both a key property and the corresponding text property for a dimension at step level, you can define for each representation what is displayed at runtime: the key only, the text only, or both key and text.

The default label text for each property is derived from the `sap:label` annotation of the property. You can see that the default text is used when you see *Label \(Default\)* in front of the entry field. You can overwrite the default text with your own label text as required. When you delete the label text, the default label is displayed again.

Ensure that all properties of drill-down dimensions that are selected for the step are also used in the representation for this step. Otherwise the data may not be displayed correctly.

</td>
</tr>
<tr>
<td valign="top">

Sorting

</td>
<td valign="top">

You can define whether certain properties are applied to the data request and subsequently to the chart as sorting criteria. You can also specify the sorting direction \(ascending or descending\) for each property. If you don’t specify a sorting field, the data is displayed in the order provided by the OData service.

If sorting criteria have been defined in the Data Reduction section of the step configuration, they are copied to the representation and cannot be changed here.

> ### Note:  
> Not all representations support sorting by more than one property to the full extent.



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

You can click *Preview* to see what the representation and the thumbnail will look like at runtime.

> ### Note:  
> The preview is based on dummy data and does not show the real data configured for the step.

At runtime, for each representation there is also an alternative list view available. The user can toggle between the chart representation and the list view. Exception: The alternative list view is not available if the representation is a table. The alternative list view is created implicitly for each representation and you do not have to define it in the APF Configuration Modeler.

