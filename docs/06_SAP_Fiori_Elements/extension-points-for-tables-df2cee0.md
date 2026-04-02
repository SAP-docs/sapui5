<!-- loiodf2cee0d09d040409bee7bd5dbf8e6e2 -->

# Extension Points for Tables

You can use extension points to enhance tables.

> ### Note:  
> For information about SAP Fiori elements for OData V4, see [Extension Points for Tables](extension-points-for-tables-d525522.md).

> ### Caution:  
> Use app extensions with caution and only if you cannot produce the required behavior by other means, such as manifest settings or annotations. To correctly integrate your app extension coding with SAP Fiori elements, use only the `extensionAPI` of SAP Fiori elements. For more information, see [Using the extensionAPI](using-the-extensionapi-a5a4ec6.md).
> 
> After you've created an app extension, its display \(for example, control placement and layout\) and system behavior \(for example, model and binding usage, busy handling\) lies within the application's responsibility. SAP Fiori elements provides support only for the official `extensionAPI` functions. Don't access or manipulate controls, properties, models, or other internal objects created by the SAP Fiori elements framework.

You can use the following extension points to add additional columns to tables:


<table>
<tr>
<th valign="top">

Table Type

</th>
<th valign="top">

Floorplan

</th>
<th valign="top">

Extension Point

</th>
<th valign="top">

Example

</th>
</tr>
<tr>
<td valign="top">

All

</td>
<td valign="top">

Object page

</td>
<td valign="top">

`onBeforeRebindTableExtension` 

</td>
<td valign="top">

[Example: Applying Custom Logic When a Table is Loaded or Refreshed](example-applying-custom-logic-when-a-table-is-loaded-or-refreshed-382a6c3.md) 

</td>
</tr>
<tr>
<td valign="top" rowspan="2">

Responsive table

</td>
<td valign="top">

List report page

</td>
<td valign="top">

`ResponsiveTableColumnsExtension|<Name of the EntitySet>`

`ResponsiveTableCellsExtension|<Name of the EntitySet>`

</td>
<td valign="top">

[Example: Adding Columns to a Responsive Table on the List Report Page](example-adding-columns-to-a-responsive-table-on-the-list-report-page-28e9570.md) 

</td>
</tr>
<tr>
<td valign="top">

Object page

</td>
<td valign="top">

`ResponsiveTableColumnsExtension|<Name of the table EntitySet>|<Facet ID/Annotation Path>`

`ResponsiveTableCellsExtension|<Name of the table EntitySet>|<Facet ID/Annotation Path>`

</td>
<td valign="top">

[Example: Adding Columns to a Responsive Table on the Object Page](example-adding-columns-to-a-responsive-table-on-the-object-page-c174923.md) 

</td>
</tr>
<tr>
<td valign="top" rowspan="2">

Grid table

</td>
<td valign="top">

List report page

</td>
<td valign="top">

`GridTableColumnsExtension|<Name of the EntitySet>` 

</td>
<td valign="top">

[Example: Adding Columns to a Grid Table on the List Report Page](example-adding-columns-to-a-grid-table-on-the-list-report-page-69bfeec.md) 

</td>
</tr>
<tr>
<td valign="top">

Object page

</td>
<td valign="top">

`GridTableColumnsExtension|<Name of the EntitySet>|<Facet ID/Annotation Path>` 

</td>
<td valign="top">

[Example: Adding Columns to a Grid Table on the Object Page](example-adding-columns-to-a-grid-table-on-the-object-page-10a6ef1.md) 

</td>
</tr>
<tr>
<td valign="top" rowspan="2">

Analytical table

</td>
<td valign="top">

List report page

</td>
<td valign="top">

`AnalyticalTableColumnsExtension|<Name of the EntitySet>GridTableColumnsExtension|<Name of the table EntitySet>|<Facet ID/Annotation Path>` 

</td>
<td valign="top">

 

</td>
</tr>
<tr>
<td valign="top">

Object page

</td>
<td valign="top">

`GridTableColumnsExtension|AnalyticalTableColumnsExtension|<Name of the table EntitySet>|<Facet ID/Annotation Path>` 

</td>
<td valign="top">

[Example: Adding Columns to an Analytical Table on the Object Page](example-adding-columns-to-an-analytical-table-on-the-object-page-3b78e69.md) 

</td>
</tr>
<tr>
<td valign="top">

Tree table

</td>
<td valign="top">

List report page

</td>
<td valign="top">

`TreeTableColumnsExtension|<Name of the EntitySet>` 

</td>
<td valign="top">

[Example: Adding Columns to a Tree Table on the List Report Page](example-adding-columns-to-a-tree-table-on-the-list-report-page-b903da5.md) 

</td>
</tr>
</table>

> ### Note:  
> `<Name of the EntitySet>` is the entity set of the current page.
> 
> `<Name of the table EntitySet>` is the entity set of the table that the extension is intended for. Use this for all table column extensions on the object page, rather than for any other view extensions on the object page.

To replace default navigation within a responsive table on a list report page, use the `ListReportExtension` extension point . For more information, see [Example: Replacing Standard Navigation in a Responsive Table on the List Report Page](example-replacing-standard-navigation-in-a-responsive-table-on-the-list-report-page-5ae7b0c.md).

To replace default navigation within a responsive table on an object page, use the `DetailsExtension` extension point. For more information, see [Example: Replacing Standard Navigation in a Responsive Table on the Object Page](example-replacing-standard-navigation-in-a-responsive-table-on-the-object-page-b20dc7a.md).

