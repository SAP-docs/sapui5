<!-- loio694956ffa7074d96967e6f50f171f5d2 -->

# Creating Hierarchical Steps

Hierarchical steps are analysis steps in which the data is depicted in a hierarchical table. The data for hierarchical steps is provided in a hierarchical form, that is, it has a parent-child-relationship. The property in the first column of the hierarchical table has the parent information and provides the hierarchical structure. You can expand it to show the child items.

To create an analysis step, select the category you want to create the step in and click *Add* \> *Step* \> *New Hierarchical Step*.

To create or edit a hierarchical step, enter the following information:



<a name="loio694956ffa7074d96967e6f50f171f5d2__section_vdp_zkd_gz"/>

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



<a name="loio694956ffa7074d96967e6f50f171f5d2__section_itd_bld_gz"/>

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

Hierarchical Entity Set



</td>
<td valign="top">

Entity set that corresponds to the data source, for example, the SAP HANA view. As soon as a service has been entered, this field is filled automatically.



</td>
</tr>
<tr>
<td valign="top">

Hierarchical Property



</td>
<td valign="top">

The property that is provided in a hierarchical form. This property is always displayed as the first column of the hierarchical table. As soon as a service has been entered, this field is filled automatically.



</td>
</tr>
<tr>
<td valign="top">

Non-Hierarchical Properties



</td>
<td valign="top">

The properties that are displayed in the following columns of the table. Ensure you only enter the following:

-   Measures

-   The text of the hierarchical property

-   Properties that have the same value across the entire hierarchy, for example, the reporting currency

    > ### Note:  
    > Do not use other drill-down properties apart from the hierarchical property because the tree table cannot handle additional drill-down criteria.




</td>
</tr>
<tr>
<td valign="top">

Selectable Property



</td>
<td valign="top">

The property that is selectable in the chart.

> ### Note:  
> At runtime, you cannot add more than one hierarchical step with the same hierarchical selectable property.



</td>
</tr>
</table>



<a name="loio694956ffa7074d96967e6f50f171f5d2__section_qsn_c2t_xz"/>

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



<a name="loio694956ffa7074d96967e6f50f171f5d2__section_syz_xld_gz"/>

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



<a name="loio694956ffa7074d96967e6f50f171f5d2__section_pm4_yld_gz"/>

## Corner Texts for Thumbnails

The texts entered here are displayed in the four corners of the step thumbnail in the analysis path display. All of them are optional.

Corner texts entered at step level are used as default for the corner texts at runtime as long as no text has been maintained at representation level for the specific corner. They are also used to prefill the corner text fields at representation level.

When you change a specific corner text at step level, this change is reflected in the representation and at runtime only if the corresponding field has not yet been edited on representation level.

