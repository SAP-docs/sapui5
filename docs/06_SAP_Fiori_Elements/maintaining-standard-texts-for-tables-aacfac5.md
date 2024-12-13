<!-- loioaacfac5e29904f26a04fc846545eea46 -->

# Maintaining Standard Texts for Tables

You can use the i18n file of your app to adapt the standard UI texts that are displayed in a table for the use cases explained in this topic.

The following UI texts are displayed by default:

-   SAP Fiori elements for OData V2
    -   When no filters are applied and no data is found, a *No items available.* message is shown in the object page table, and the message *To start, set the relevant filters and choose "Go".* is shown in the list report table.

    -   When filters are applied and the search shows no results, the message *No items available. Try adjusting the search or filter parameters.* is shown in the object page table, and the message *No data found. Try adjusting the search or filter criteria.* is shown in the list report table.

    -   When the table is used in multi-view mode and there is no data found, the message *There are no items for the selected filter criteria and table view.* is shown in the object page table, and the message *There is no data for the selected filter criteria and table view.* is shown in the list report table.


-   SAP Fiori elements for OData V4
    -   When no filters are applied and no data is found in the list report, an illustrated message is displayed with *No data found* as the title and *To start, set the relevant filters and choose "Go".* as the description.

    -   When filters are applied and the search shows no results, an illustrated message is displayed with *No data found* as the title and *Try adjusting the search or filter criteria.* as the description.

    -   When the table is used in multi-view mode and no data is found, an illustrated message is displayed with *No data found* as the title and *Try adjusting the selected filter criteria or view.* as the description.

    -   When no search nor filters are applied and no data is found on the object page, an illustrated message is displayed with *No items available* as the title and *When there are, you'll find them here.* as the description. You cannot override these texts.





<a name="loioaacfac5e29904f26a04fc846545eea46__section_sjr_gxk_r4b"/>

## Changing Standard Texts



### SAP Fiori Elements for OData V2

You can override the standard texts by adding these keys in the i18n file of the list report:

-   `NOITEMS_LR_SMARTTABLE`: Use this key to add a text when no filters are applied and the table is empty.

-   `NOITEMS_LR_SMARTTABLE_WITH_FILTER`: Use this key to add a text when filters are applied and no data is found.

-   `NOITEMS_MULTIVIEW_LR_SMARTTABLE_WITH_FILTER`: Use this key to add a text for a table in multi-view mode when a filter is applied and no data is found for a given view.


You can override the standard texts by adding these keys in the i18n file of the object page:

-   `NOITEMS_SMARTTABLE|<EntitySetName>|<SmartTableId>`: Use this key to add a text when no filters are applied and the table is empty. For example,`NOITEMS_SMARTTABLE|C_STTA_SalesOrder_WD_20|ContactsID=No contacts found.`.

-   `NOITEMS_SMARTTABLE_WITH_FILTER|<EntitySetName>|<SmartTableId>`: Use this key to add a text when filters are applied and no data is found. For example,`NOITEMS_SMARTTABLE_WITH_FILTER|C_STTA_SalesOrder_WD_20|ContactsID=No contacts found. Change filters.`.

-   `NOITEMS_SMARTTABLE_WITH_FILTER_FOR_SEGMENTEDBUTTON|<EntitySetName>|<SmartTableId>`: Use this key to add a text when a table with a segmented button is used. For example, `NOITEMS_SMARTTABLE_WITH_FILTER_FOR_SEGMENTEDBUTTON |C_STTA_SalesOrder_WD_20|ContactsID=No contacts found for the selection criteria`.




### SAP Fiori Elements for OData V4

You can override the standard texts used as the description in illustrated messages by using the following keys in the i18n file defined for the page:

**Description Text Keys for Illustrated Messages**


<table>
<tr>
<th valign="top">

Key

</th>
<th valign="top">

Standard Text

</th>
</tr>
<tr>
<td valign="top">

T\_TABLE\_AND\_CHART\_NO\_DATA\_TEXT

</td>
<td valign="top">

To start, set the relevant filters and choose "Go".

</td>
</tr>
<tr>
<td valign="top">

T\_TABLE\_AND\_CHART\_NO\_DATA\_TEXT\_WITH\_FILTER

</td>
<td valign="top">

Try adjusting the search or filter criteria.

</td>
</tr>
<tr>
<td valign="top">

M\_TABLE\_AND\_CHART\_NO\_DATA\_TEXT\_MULTI\_VIEW

</td>
<td valign="top">

Try adjusting the selected filter criteria or view.

</td>
</tr>
</table>

> ### Note:  
> You cannot override the title of an illustrated message.



<a name="loioaacfac5e29904f26a04fc846545eea46__section_icw_ffx_1lb"/>

## Related Information

[Configuring Tables](configuring-tables-f4eb70f.md)

