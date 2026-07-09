<!-- loio65731e6b823240398e33133908efdaa1 -->

# Annotations Used in Overview Pages

Annotations define how data is presented, navigated, and visualized in cards of overview pages. You can use these annotations to control how entity data is displayed, formatted, and interacted with SAP Fiori applications.



The annotations are organized into the following functional groups:

**Annotations in Overview Pages**


<table>
<tr>
<th valign="top">

Group

</th>
<th valign="top">

Function

</th>
<th valign="top">

Annotations

</th>
<th valign="top">

Purpose

</th>
<th valign="top">

Related Topic

</th>
</tr>
<tr>
<td valign="top" rowspan="9">

Data Display and Formatting

</td>
<td valign="top" rowspan="4">

Header and Display

</td>
<td valign="top">

`com.sap.vocabularies.UI.v1.HeaderInfo` 

</td>
<td valign="top">

Defines the header \(title, description, image\) of an entity.

</td>
<td valign="top" rowspan="9">

[Data Display and Formatting Annotations](data-display-and-formatting-annotations-57e417c.md) 

</td>
</tr>
<tr>
<td valign="top">

`com.sap.vocabularies.UI.v1.DataField` 

</td>
<td valign="top">

Displays a simple labeled value.

</td>
</tr>
<tr>
<td valign="top">

`com.sap.vocabularies.UI.v1.DataFieldForAnnotation` 

</td>
<td valign="top">

References another annotation term to display its content.

</td>
</tr>
<tr>
<td valign="top">

`com.sap.vocabularies.UI.v1.DataPoint` 

</td>
<td valign="top">

Displays a value with formatting, criticality coloring, or trend information.

</td>
</tr>
<tr>
<td valign="top" rowspan="3">

Lists and Groups

</td>
<td valign="top">

`com.sap.vocabularies.UI.v1.LineItem` 

</td>
<td valign="top">

Defines the columns of a list or table.

</td>
</tr>
<tr>
<td valign="top">

`com.sap.vocabularies.UI.v1.FieldGroup` 

</td>
<td valign="top">

Groups related data fields under a single label.

</td>
</tr>
<tr>
<td valign="top">

`com.sap.vocabularies.UI.v1.Facets` 

</td>
<td valign="top">

Organizes content into sections using reference facets.

</td>
</tr>
<tr>
<td valign="top" rowspan="2">

Helpers

</td>
<td valign="top">

`com.sap.vocabularies.Common.v1.Text` 

</td>
<td valign="top">

Configures text arrangement for a property, for example, ID \(Description\).

</td>
</tr>
<tr>
<td valign="top">

`com.sap.vocabularies.PersonalData.v1` 

</td>
<td valign="top">

Marks properties as potentially sensitive personal data.

</td>
</tr>
<tr>
<td valign="top" rowspan="4">

Navigation and Actions

</td>
<td valign="top" rowspan="4">

Navigation and Action

</td>
<td valign="top">

`com.sap.vocabularies.UI.v1.DataFieldForAction` 

</td>
<td valign="top">

Triggers an OData action \(for example, Confirm Order\).

</td>
<td valign="top" rowspan="4">

[Navigation and Action Annotations](navigation-and-action-annotations-d0fac68.md) 

</td>
</tr>
<tr>
<td valign="top">

`com.sap.vocabularies.UI.v1.DataFieldForIntentBasedNavigation` 

</td>
<td valign="top">

Navigates to another app using a semantic object and action.

</td>
</tr>
<tr>
<td valign="top">

`com.sap.vocabularies.UI.v1.DataFieldWithUrl` 

</td>
<td valign="top">

Renders a field as a hyperlink.

</td>
</tr>
<tr>
<td valign="top">

`com.sap.vocabularies.UI.v1.Identification` 

</td>
<td valign="top">

Container that holds the available card actions.

</td>
</tr>
<tr>
<td valign="top" rowspan="5">

Data Querying and Visualization

</td>
<td valign="top" rowspan="3">

Query and Display Data

</td>
<td valign="top">

`com.sap.vocabularies.UI.v1.SelectionVariant` 

</td>
<td valign="top">

Defines parameters and filters for querying an entity set.

</td>
<td valign="top" rowspan="5">

[Data Querying and Visualization Annotations](data-querying-and-visualization-annotations-5c287de.md) 

</td>
</tr>
<tr>
<td valign="top">

`com.sap.vocabularies.UI.v1.PresentationVariant` 

</td>
<td valign="top">

Defines how query results are sorted, grouped, and visualized.

</td>
</tr>
<tr>
<td valign="top">

`com.sap.vocabularies.UI.v1.SelectionPresentationVariant` 

</td>
<td valign="top">

Combines a selection variant and a presentation variant.

</td>
</tr>
<tr>
<td valign="top" rowspan="2">

Visualizations

</td>
<td valign="top">

`com.sap.vocabularies.UI.v1.Chart` 

</td>
<td valign="top">

Defines chart type, dimensions, and measures.

</td>
</tr>
<tr>
<td valign="top">

`com.sap.vocabularies.UI.v1.KPI` 

</td>
<td valign="top">

Configures KPI tags on card headers \(combines data point, selection variant, presentation variant, and navigation\).

</td>
</tr>
</table>

****


<table>
<tr>
<td valign="top" rowspan="4">



</td>
</tr>
</table>





### 

