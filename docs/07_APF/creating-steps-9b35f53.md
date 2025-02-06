<!-- loio9b35f53570f246e8be74d37e080b2585 -->

# Creating Steps

The following video shows how to configure an analysis step:



To create an analysis step, select the category you want to create the step in and click *Add* \> *Step* \> *New Step*.

Analysis steps can be assigned to multiple categories. To assign a previously created step to another category, proceed in one of the following ways:

-   Select the category you want to assign the step to and click *Add* \> *Step* \> *Existing Step*.

-   Select the step and add the category in the *Category Title* field.


> ### Note:  
> When you edit an analysis step that is assigned to multiple categories, the changes take effect in all categories in which this step is used.

At runtime, the steps are displayed in the analysis step gallery in the same order as they appear in the tree structure. You can change the order of the steps by moving them up or down the tree structure using the arrow icons. The order of the steps can be defined for each category individually, that is, steps can have a different order in different categories.

To create or edit an analysis step, enter the following:



## Title and Assignment to Categories


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

Step Title

</td>
<td valign="top">

The title displayed in the analysis step gallery and with the thumbnails in the analysis path display.

</td>
</tr>
<tr>
<td valign="top">

Step Long Title

</td>
<td valign="top">

The title displayed above the representation in the analysis step display. If no long title is defined, the title entered in the *Step Title* field is used instead.

</td>
</tr>
<tr>
<td valign="top">

Category Assignments

</td>
<td valign="top">

The categories in which the analysis step is displayed in the analysis step gallery. At least one category must be entered here. When first creating a step, this field is already filled with the category in which you create the step. You can enter additional categories so that the step is displayed in all of these categories.

You can also remove category assignments here and you can use this field to change the category assignment of a step by selecting a different category from the value help. This is particularly useful if you copy a step and then want to assign it to a different category.

</td>
</tr>
</table>



## Request

Here, you enter information for the request that defines the data provisioning for the analysis step.


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

Service

</td>
<td valign="top">

Path to the OData service root. If you use ABAP CDS views or BW OData queries, select a service from the value help, which lists all services available on SAP Gateway. If you use calculation views, you must enter the service manually.

</td>
</tr>
<tr>
<td valign="top">

Entity Set

</td>
<td valign="top">

Entity set that corresponds to the data source, for example, the SAP HANA view.

</td>
</tr>
<tr>
<td valign="top">

Properties

</td>
<td valign="top">

The drill-down dimensions, measures, and additional information, for example, the currency, used in the step.

Ensure you select only those properties that shall be displayed in the representation.

</td>
</tr>
<tr>
<td valign="top">

Selectable Property

</td>
<td valign="top">

The property that is selectable in the chart. If nothing is entered here, nothing can be selected in any representation of this step.

If you have selected both a key property and the corresponding text property in the *Properties* field, you can define for the selectable property what is displayed at runtime: the key only, the text only, or both key and text. This takes effect in the selection information popup, showing which elements are selected in the current analysis step as well as in the filter information popup, showing the filters that affect the current analysis step.

</td>
</tr>
<tr>
<td valign="top">

Label

</td>
<td valign="top">

The label of the selectable property, which is displayed in the selection information popup as well as in the filter information popup at runtime.

The default label text for each property is derived from the `sap:label` annotation of the property. You can see that the default text is used when you see *Label \(Default\)* in front of the entry field. You can overwrite the default text with your own label text as required. When you delete the label text, the default label is displayed again.

</td>
</tr>
</table>



## Data Reduction

In this section, you can reduce the number of data records that are sent to the frontend for this analysis step. The top n approach is useful if you know that for this analysis step it is sufficient to look at the most relevant data records only instead of sending all data points to the UI.

> ### Tip:  
> Add "top <n\>" to the title of the analysis step, for example, "Revenue by Customer \(Top 10\)". This is helpful because, in the chart, you cannot see that data reduction has been applied.

> ### Note:  
> The top n values you see in the analysis step are not necessarily the highest numbers in the data set. Depending on the sorting direction and the measure itself, it is also possible that you see the lowest values. Examples:
> 
> -   If you sort by revenue in ascending direction, you get the bottom n instead of the top n.
> 
> -   If you choose a measure for which low values are positive, such as costs or reject rates, the lowest values are interpreted as top n.

> ### Note:  
> You can use the top n function if you want to restrict your data to up to 10,000 records. If you need more than 10,000 records, don't use data reduction.


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

Data Reduction Type

</td>
<td valign="top">

Choose whether you want to use top n or no data reduction.

</td>
</tr>
<tr>
<td valign="top">

Number of Records

</td>
<td valign="top">

Enter a number between 1 and 10,000.

</td>
</tr>
<tr>
<td valign="top">

Sorting Field, Direction

</td>
<td valign="top">

You can define which properties are applied to the data request and subsequently to the chart as sorting criteria. You can also specify the sorting direction \(ascending or descending\) for each property. The sorting criteria you enter here are copied to each representation of the step and cannot be changed in the representation configuration afterwards.

</td>
</tr>
</table>



## Filter Mapping

This section becomes visible when you choose a selectable property in the *Request* section above.

Filter mapping is useful when a selection that can be made in one analysis step cannot be handled by a subsequent step. In this case, the system determines the source filter property based on the selections made in a chart and maps them to other filters that can be used in the requests for subsequent steps in the path \(target properties\). Filter mapping is optional, that is, if the fields are not filled, no filter mapping is executed for this step.

Define the lookup request that maps the source property to the target properties as follows:


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

Service

</td>
<td valign="top">

Path to the OData service root. If you use ABAP CDS views or BW OData queries, select a service from the value help, which lists all services available on SAP Gateway. If you use calculation views, you must enter the service manually.

</td>
</tr>
<tr>
<td valign="top">

Entity Set

</td>
<td valign="top">

Entity set that corresponds to the SAP HANA view.

</td>
</tr>
<tr>
<td valign="top">

Target Property

</td>
<td valign="top">

Filter properties that the selectable property shall be mapped to. These are filter properties that can be used in the request for subsequent steps.

If both a key property and the corresponding text property exist, you can define what is displayed at runtime: the key only, the text only, or both key and text.

</td>
</tr>
<tr>
<td valign="top">

Label

</td>
<td valign="top">

The label of the target property, which is displayed in the filter information popup at runtime.

The default label text for each property is derived from the `sap:label` annotation of the property. You can see that the default text is used when you see *Label \(Default\)* in front of the entry field. You can overwrite the default text with your own label text as required. When you delete the label text, the default label is displayed again.

</td>
</tr>
<tr>
<td valign="top">

Keep Selected Property as Filter

</td>
<td valign="top">

Determines whether the source filter property is kept in the cumulative filter in addition to the mapped filter properties.

</td>
</tr>
</table>



## Assignment of Navigation Targets

Here, you can assign step-specific navigation targets to your analysis step. At runtime, these navigation targets are displayed in the *Open In...* menu when this analysis step is the active one. Navigation targets that are relevant for all steps are also displayed, but cannot be changed here.


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

Step-Specific

</td>
<td valign="top">

Shows the assigned step-specific navigation targets for this step. You can assign additional ones by selecting them from the list of previously created step-specific navigation targets. You can also delete assignments.

</td>
</tr>
<tr>
<td valign="top">

Assigned to All Steps

</td>
<td valign="top">

Navigation targets that are relevant for all analysis steps and are always displayed in the *Open In…* menu at runtime. This field is read-only.

</td>
</tr>
</table>



## Corner Texts for Thumbnails

The texts entered here are displayed in the four corners of the step thumbnail in the analysis path display. All of them are optional.

Corner texts entered at step level are used as default for the corner texts at runtime as long as no text has been maintained at representation level for the specific corner. They are also used to prefill the corner text fields at representation level.

When you change a specific corner text at step level, this change is reflected in the representation and at runtime only if the corresponding field has not yet been edited on representation level.

**Related Information**  


[Creating Navigation Targets](creating-navigation-targets-d5762bc.md "")

