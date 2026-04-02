<!-- loio49669384ae424ace81667f22f69712b5 -->

# Key User Capabilities

A key user can adapt the UI of the overview page application.



## Prerequisites

Based on the deployment environment, ensure that the appropriate role is assigned.


<table>
<tr>
<th valign="top">

Deployment Environment

</th>
<th valign="top">

Required Role

</th>
</tr>
<tr>
<td valign="top">

SAP Business Technology Platform

</td>
<td valign="top">

`FlexKeyUser`

</td>
</tr>
<tr>
<td valign="top">

SAP S/4HANA

</td>
<td valign="top">

`SAP_UI_FLEX_KEY_USER`

</td>
</tr>
</table>

For more information, see [SAPUI5 Flexibility: Adapting UIs Made Easy](../04_Essentials/sapui5-flexibility-adapting-uis-made-easy-a8e55aa.md)



To enable UI adaptation mode, from the user menu, choose *Adapt UI*.

**User Interface Adaptation Features**


<table>
<tr>
<th valign="top">

Feature

</th>
<th valign="top">

Description

</th>
</tr>
<tr>
<td valign="top">

Hide Card

</td>
<td valign="top">

Hides cards during initial load. The hidden cards remain available in the *Manage Cards* section.

</td>
</tr>
<tr>
<td valign="top">

Add Card

</td>
<td valign="top">

Adds cards from a list of available cards that are hidden.

</td>
</tr>
<tr>
<td valign="top">

Edit Card

</td>
<td valign="top">

Modifies the title, subtitle, KPI header, value, description, chart type, sorting, and navigation properties.

Configures threshold values that influence semantic coloring for column charts only.

Disables the addition of individual cards to the *Insights* section. This option is available only if the card generation for the *Insights* section of *My Home* in SAP S/4HANA Cloud Public Edition is enabled.

</td>
</tr>
<tr>
<td valign="top">

Add/Delete Views

</td>
<td valign="top">

Adds view switch field to a card

</td>
</tr>
<tr>
<td valign="top">

Modify Card Size

</td>
<td valign="top">

Resizes cards and changes the number of rows and columns.

</td>
</tr>
<tr>
<td valign="top">

Create Card

</td>
<td valign="top">

Creates new cards. Only static link list cards and KPI cards can be created.

</td>
</tr>
<tr>
<td valign="top">

Others

</td>
<td valign="top">

Performs basic card operations like cut, copy, paste, save, cancel, reset, and publish.

</td>
</tr>
<tr>
<td valign="top">

Adapt Filters

</td>
<td valign="top">

Adds or removes filters from the filter bar. Assigns value to a filter and save the changes as a new variant or apply them to an existing variant.

</td>
</tr>
<tr>
<td valign="top">

Adapt Variants

</td>
<td valign="top">

Renames an existing view, saves a view, saves the current view as a new view, and manages views.

</td>
</tr>
</table>



<a name="loio49669384ae424ace81667f22f69712b5__section_hzn_ncq_kfb"/>

## Best Practices

To enhance readability in UI adaptation mode, maintain property labels for the following annotations:


<table>
<tr>
<th valign="top">

Annotation

</th>
<th valign="top">

Property

</th>
</tr>
<tr>
<td valign="top">

`PresentationVariant`

</td>
<td valign="top">

`text`

</td>
</tr>
<tr>
<td valign="top">

`SelectionVariant`

</td>
<td valign="top">

`text`

</td>
</tr>
<tr>
<td valign="top">

`DataPoint`

</td>
<td valign="top">

`title`

</td>
</tr>
<tr>
<td valign="top">

`IdentificationAnnotation`

</td>
<td valign="top">

The label is determined by the priority defined in `DataFieldForIntentBasedNavigation` or `DataFieldWithURL`.

</td>
</tr>
<tr>
<td valign="top">

`chartAnnotation`

</td>
<td valign="top">

`description`

</td>
</tr>
</table>



> ### Note:  
> For information about SAP Fiori elements for OData V2, see [Key User Capabilities](key-user-capabilities-37b16cc.md).

