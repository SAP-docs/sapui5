<!-- loio49669384ae424ace81667f22f69712b5 -->

# Key User Capabilities

A key user is a special role that lets you perform user interface adaptation in overview page application.



<a name="loio49669384ae424ace81667f22f69712b5__section_erc_ygw_kfb"/>

## Prerequisites

Ensure that you have the required user role. For more information, see [SAPUI5 Flexibility: Adapting UIs Made Easy](../04_Essentials/sapui5-flexibility-adapting-uis-made-easy-a8e55aa.md):

-   For SAP Business Technology Platform applications, you must have *FlexKeyUser* role assigned.

-   For on premise applications, you must have *SAP\_UI\_FLEX\_KEY\_USER* role assigned.




To enable the user interface adaptation mode, choose *Adapt UI* in the user actions menu.

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

Lets you hide cards during initial load. The hidden cards are available in the *Manage Cards* section.



</td>
</tr>
<tr>
<td valign="top">

Add Card



</td>
<td valign="top">

Lets you add cards from a list of available cards that are hidden.



</td>
</tr>
<tr>
<td valign="top">

Edit Card



</td>
<td valign="top">

Lets you modify title, subtitle, KPI header, value, and description, and type of chart. You can modify sorting and navigation properties. Also, you can disable adding individual cards to the *Insights* section. This option is available only if the generation of cards for the *Insights* section of *My Home* in SAP S/4HANA Cloud is enabled.



</td>
</tr>
<tr>
<td valign="top">

Add/Delete Views



</td>
<td valign="top">

Lets you add view switch field to a card



</td>
</tr>
<tr>
<td valign="top">

Modify Card Size



</td>
<td valign="top">

Lets you resize cards, change the number of rows and columns.



</td>
</tr>
<tr>
<td valign="top">

Create Card



</td>
<td valign="top">

Lets you create new cards. Currently you can create static link list card and KPI card only.



</td>
</tr>
<tr>
<td valign="top">

Others



</td>
<td valign="top">

Similarly you can perform basic card operations like cut, copy, paste, save, cancel, reset and publish.



</td>
</tr>
<tr>
<td valign="top">

Adapt Filters



</td>
<td valign="top">

Lets you add or remove filters from the filter bar. You can also add a value to a filter. These changes can later be saved as a new variant or a previously defined variant.



</td>
</tr>
<tr>
<td valign="top">

Adapt Variants



</td>
<td valign="top">

Lets you rename an existing view, save a view, save a current view as a new view, and manage views.



</td>
</tr>
</table>



<a name="loio49669384ae424ace81667f22f69712b5__section_hzn_ncq_kfb"/>

## Best Practices

Maintain property labels for these annotations to enhance readability in the user interface adaptation mode:


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

text



</td>
</tr>
<tr>
<td valign="top">

`SelectionVariant`



</td>
<td valign="top">

text



</td>
</tr>
<tr>
<td valign="top">

`DataPoint`



</td>
<td valign="top">

title



</td>
</tr>
<tr>
<td valign="top">

`IdentificationAnnotation`



</td>
<td valign="top">

The label is displayed based on the priority set in the `DataFieldForIntentBasedNavigation`/`DataFieldWithURL` property



</td>
</tr>
<tr>
<td valign="top">

`chartAnnotation`



</td>
<td valign="top">

description



</td>
</tr>
</table>

