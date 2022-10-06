<!-- loioaacfac5e29904f26a04fc846545eea46 -->

# Maintaining Standard Texts for Tables

In a table, if the system does not find any entries when using the filter, standard UI texts are displayed which you can adapt in the i18n file of your app.

The following UI texts are displayed by default:

-   SAP Fiori elements for OData V2
    -   When no filters are applied and no data is found, a ***No items available*** message is shown in the object page table, and the message ***To start, set relevant filters*** is shown in the list report table.

    -   When filters are applied and the search shows no results, the message ***No items available. Try adjusting the search or filter parameters*** is shown in the object page table, and the message ***No data found. Try adjusting the search or filter criteria*** is shown in the list report table.

    -   When the table is used in multi view mode and there is no data found, the message ***There are no items for the selected filter criteria and table view*** is shown in the object page table, and the message ***There is no data for the selected filter criteria and table view*** is shown in the list report table.


-   SAP Fiori elements for OData V4
    -   When no filters are applied and no data is found, the message ***To start, set the relevant filters and choose "Go"*** is shown in the list report table.

    -   When filters are applied and the search shows no results, the message ***No data found. Try adjusting the search or filter parameters*** is shown.

    -   When no filters are applied and no data is found, the message ***No items available*** is shown in the object page table.

        You cannot override this text.





<a name="loioaacfac5e29904f26a04fc846545eea46__section_sjr_gxk_r4b"/>

## Changing Standard Texts



### SAP Fiori Elements for OData V2

You can override the standard texts by adding these keys in the i18n file of the list report:

-   `NOITEMS_LR_SMARTTABLE`: Use this key to add a text when no filters are applied and the table is empty.

-   `NOITEMS_LR_SMARTTABLE_WITH_FILTER`: Use this key to add a text when filters are applied and no data is found.

-   `NOITEMS_MULTIVIEW_LR_SMARTTABLE_WITH_FILTER`: Use this key to add a text for multiple view table when filter is applied but no data is found for a given view.


You can override the standard texts by adding these keys in the i18n file of the object page:

-   `NOITEMS_SMARTTABLE|<EntitySetName>|<SmartTableId>`: Use this key to add a text when no filters are applied and the table is empty. For example,`NOITEMS_SMARTTABLE|C_STTA_SalesOrder_WD_20|ContactsID=No contacts found.`.

-   `NOITEMS_SMARTTABLE_WITH_FILTER|<EntitySetName>|<SmartTableId>`: Use this key to add a text when filters are applied and no data is found. For example,`NOITEMS_SMARTTABLE_WITH_FILTER|C_STTA_SalesOrder_WD_20|ContactsID=No contacts found. Change filters.`.

-   `NOITEMS_SMARTTABLE_WITH_FILTER_FOR_SEGMENTEDBUTTON|<EntitySetName>|<SmartTableId>`: Use this key to add a text when a table with segmented button is used. For example, `NOITEMS_SMARTTABLE_WITH_FILTER_FOR_SEGMENTEDBUTTON |C_STTA_SalesOrder_WD_20|ContactsID=No contacts found for the selection criteria`.




### SAP Fiori Elements for OData V4

You can override the standard texts by adding these keys in the i18n file:

-   `T_TABLE_AND_CHART_NO_DATA_TEXT`: Use this key to add a text when no filters are applied and no data is found. This is applicable only to the list report.

-   `T_TABLE_AND_CHART_NO_DATA_TEXT_WITH_FILTER`: Use this key to add a text when filters are applied and no data is found.




<a name="loioaacfac5e29904f26a04fc846545eea46__section_icw_ffx_1lb"/>

## Related Information

[Configuring Tables](configuring-tables-f4eb70f.md)

