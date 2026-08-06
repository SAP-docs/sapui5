<!-- loio3fd4c37ff7964db9b00f80841f7a7bce -->

# Determining the Default Table Type

SAP Fiori elements for OData V4 automatically determines the default table type based on the entity set characteristics when no table type is explicitly configured.

If the table type is not specified in the `manifest.json` file, the default table type is set based on the characteristics of the entity set as follows:

**Default Table Type**


<table>
<tr>
<th valign="top">

Environment

</th>
<th valign="top">

Table Type

</th>
</tr>
<tr>
<td valign="top">

Analytical services containing the `@Aggregation.ApplySupported` annotation with all of the following transformation functions:

-   `filter`
-   `identity`
-   `orderby`
-   `skip`
-   `top`
-   `groupby`
-   `concat`
-   `aggregate`



</td>
<td valign="top">

Analytical table

</td>
</tr>
<tr>
<td valign="top">

Hierarchical services containing the `@Aggregation.RecursiveHierarchy` and the `@Hierarchy.RecursiveHierarchy` annotations with a shared `RecursiveHierarchy` qualifier

</td>
<td valign="top">

Tree table

</td>
</tr>
<tr>
<td valign="top">

All other services

</td>
<td valign="top">

Responsive table

</td>
</tr>
</table>

If the default table type doesn't suit your app's needs, you can define a different table type in the `manifest.json` file. For more information, see [Setting the Table Type](setting-the-table-type-7f844f1.md).

