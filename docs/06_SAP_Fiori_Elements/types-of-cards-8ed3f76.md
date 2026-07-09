<!-- loio8ed3f76b5f62419eb0408c0dba4b2e47 -->

# Types of Cards

Overview pages can include several types of cards. Transactional cards show records that users can interact with such as table, list, stack, quick view cards. Analytical chart cards present data visually using chart formars such as line, bubble, donut, column, and bullet charts.



The following list of cards are available:


<table>
<tr>
<th valign="top">

Card Type

</th>
<th valign="top">

Description

</th>
</tr>
<tr>
<td valign="top">

Table

</td>
<td valign="top">

Displays a list of records based on the `com.sap.vocabularies.UI.v1.LineItem` annotation. Uses a 3-column table layout.

</td>
</tr>
<tr>
<td valign="top">

List

</td>
<td valign="top">

. Displays a list of records based on the `com.sap.vocabularies.UI.v1.LineItem` annotation. Shows up to six fields for each list item

</td>
</tr>
<tr>
<td valign="top">

Link List

</td>
<td valign="top">

Displays a list of links with an image or icon and an optional subtitle for each of the links.

</td>
</tr>
<tr>
<td valign="top">

Analytical Chart

</td>
<td valign="top">

Displays data using a chart visualization. Supported chart types include line, bubble, donut, column, stacked column, vertical column, combination, or scatter chart cards. The `template` property refers to the generic card component `sap.ovp.cards.charts.analytical`.

</td>
</tr>
</table>



## Enabling Auto Refresh for Cards

You can set all cards to refresh automatically for a given interval. The minimum and default refresh time is one minute. To enable auto refresh, configure the `refreshIntervalInMinutes` property in the `sap.ovp` section of the `manifest.json` file.

> ### Sample Code:  
> `manifest.json`
> 
> ```
> "sap.ovp": {
>     "globalFilterModel": "salesOrder",
>     "globalFilterEntitySet": "GlobalFilters",
>     ...
>     "refreshIntervalInMinutes": 12,
>     "disableTableCardFlexibility": false,
>     "cards": {
>         ...
>     }
> }
> ```

> ### Note:  
> The template setting in the `manifest.json` file depends on your OData version. Use `sap.ovp.cards.v4.<cardType>` for SAP Fiori elements for OData V4 and `sap.ovp.cards.<cardType>` for SAP Fiori elements for OData V2.



<a name="loio8ed3f76b5f62419eb0408c0dba4b2e47__section_a3r_xc3_z4b"/>

## Additional Features in SAP Fiori Elements for OData V2

The following additional card types are available:


<table>
<tr>
<th valign="top">

Card Type

</th>
<th valign="top">

Description

</th>
</tr>
<tr>
<td valign="top">

Stack

</td>
<td valign="top">

Aggregates a set of cards of the same type, which are based on a common topic or action. When clicked, the stack opens an object stream that can display up to 20 cards.

</td>
</tr>
<tr>
<td valign="top">

Quick View

</td>
<td valign="top">

Displays detailed information about a single record, in greater depth than what's shown in a table or list card.

</td>
</tr>
</table>

**Related Information**  


[Overview Page Card](overview-page-card-74332d5.md "Cards in are components that use UI annotation to render their content. They contain a header area and a content area.")

[Configuring Card Properties](configuring-card-properties-53b0791.md "This section describes the configuration items relevant for all overview page cards. All cards inherit a set of generic capabilities such as a card header, content area, and navigation support.")

