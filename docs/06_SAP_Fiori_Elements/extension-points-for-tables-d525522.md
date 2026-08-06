<!-- loiod525522c1bf54672ae4e02d66b38e60c -->

# Extension Points for Tables

Extension points for tables enable you to add custom actions and columns, modify annotation-based table behavior, implement custom navigation, and display row counts in SAP Fiori elements for OData V4.

> ### Caution:  
> Use app extensions with caution and only if you cannot produce the required behavior by other means, such as manifest settings or annotations. To correctly integrate your app extension coding with SAP Fiori elements, use only the `extensionAPI` of SAP Fiori elements. For more information, see [Using the ExtensionAPI](using-the-extensionapi-bd2994b.md).
> 
> After you've created an app extension, its display \(for example, control placement and layout\) and system behavior \(for example, model and binding usage, busy handling\) lies within the application's responsibility. SAP Fiori elements provides support only for the official `extensionAPI` functions. Don't access or manipulate controls, properties, models, or other internal objects created by the SAP Fiori elements framework.

You can use extension points to enhance tables in SAP Fiori elements-based apps. The key features include the following:

**Key Extension Features for Tables**


<table>
<tr>
<th valign="top">

Feature

</th>
<th valign="top">

Documentation

</th>
</tr>
<tr>
<td valign="top">

Interacting with and influencing any table generated through annotations using all the properties and methods available on the `Table` building block

</td>
<td valign="top">

[Interacting with a Table Using the API](interacting-with-a-table-using-the-api-fa9defb.md) 

</td>
</tr>
<tr>
<td valign="top">

Adding custom actions and columns to your tables

</td>
<td valign="top">

[Adding Custom Actions Using Extension Points](adding-custom-actions-using-extension-points-7619517.md)

[Adding Custom Columns to Tables](adding-custom-columns-to-tables-b0e65da.md)

</td>
</tr>
<tr>
<td valign="top">

Retrieving the number of rows loaded in a table and displaying the number in a tile or a data field

</td>
<td valign="top">

[Retrieving the Row Count of Tables](retrieving-the-row-count-of-tables-3679370.md) 

</td>
</tr>
<tr>
<td valign="top">

Replacing the standard navigation from the list report page to the object page with custom navigation to an external or internal target

</td>
<td valign="top">

[Replacing Standard Navigation in a Table](replacing-standard-navigation-in-a-table-a12ad60.md) 

</td>
</tr>
</table>



> ### Note:  
> For information about SAP Fiori Elements for OData V2, see [Extension Points for Tables](extension-points-for-tables-df2cee0.md).

