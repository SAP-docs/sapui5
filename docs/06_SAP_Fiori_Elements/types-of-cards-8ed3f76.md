<!-- loio8ed3f76b5f62419eb0408c0dba4b2e47 -->

# Types of Cards

Overview pages may contain transactional cards, such as table, list, stack, quick view cards, and analytical chart cards such as line, bubble, donut, column, and bullet chart cards.



The following is a list of cards that are available in SAP Fiori elements for OData V2 and SAP Fiori elements for OData V4:


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

Table cards display a list of records according to the configuration in the `com.sap.vocabularies.UI.v1.LineItem` term. Table cards displays data in a 3-column table layout.



</td>
</tr>
<tr>
<td valign="top">

List



</td>
<td valign="top">

List cards display lists of records according to the configuration in the `com.sap.vocabularies.UI.v1.LineItem` term. List cards display up to six fields of data in each list item.



</td>
</tr>
<tr>
<td valign="top">

Analytical Chart



</td>
<td valign="top">

Analytical chart cards show data in a variety of chart formats. They can be line, bubble, donut, column, stacked column, vertical column, combination, or scatter chart cards. The value of the template property points to the generic card component `sap.ovp.cards.charts.analytical`.



</td>
</tr>
<tr>
<td valign="top">

Link List



</td>
<td valign="top">

Link list cards display a list of links with an image or icon and a \(optional\) subtitle for each of the links.



</td>
</tr>
</table>

You can set all cards to refresh automatically for a given interval. The minimum and default refresh time is one minute. To enable auto refresh, configure the `refreshIntervalInMinutes` property in the descriptor configuration file.

```
"sap.ovp": {
        "globalFilterModel": "salesOrder",
        "globalFilterEntityType": "GlobalFilters",
        ...
        ...
        "refreshIntervalInMinutes": 12,
        "disableTableCardFlexibility": false,
               "cards": {
```



<a name="loio8ed3f76b5f62419eb0408c0dba4b2e47__section_a3r_xc3_z4b"/>

## Additional Features in SAP Fiori Elements for OData V2

The following additional card types are available only in SAP Fiori elements for OData V2:


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

Stack cards aggregate a set of cards of the same type, which are based on a common topic or action. When clicked, stack cards can display up to 20 cards in an object stream.



</td>
</tr>
<tr>
<td valign="top">

Quick View



</td>
<td valign="top">

Quick view cards display detailed information about a single record, in greater depth than would be displayed in a table or list.



</td>
</tr>
</table>

