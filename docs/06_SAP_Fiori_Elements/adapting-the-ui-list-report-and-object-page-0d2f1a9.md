<!-- loio0d2f1a9ebd2d4a4c906216ded1d33783 -->

# Adapting the UI: List Report and Object Page

Application developers can extend and customize specific features of the list report and object page.

We recommend that you use [SAP Fiori tools](https://help.sap.com/viewer/product/SAP_FIORI_tools/Latest/en-US), which is a set of extensions for SAP Business Application Studio and Visual Studio Code, to adapt the list report and object page.

You can find details about how app developers can adapt the UI in SAP Fiori elements for OData V2 in the section below.

In SAP Fiori elements for OData V4, app developers adapt the UI using the manifest settings. You can search for features and navigate to the related documentation for more details in the [SAP Fiori Elements Feature Map](sap-fiori-elements-feature-map-62d3f7c.md).



<a name="loio0d2f1a9ebd2d4a4c906216ded1d33783__section_ndt_tlw_gnb"/>

## Additional Features in SAP Fiori Elements for OData V2

> ### Note:  
> Adapt the UI only for the use cases described here. Otherwise, you might experience issues regarding consistency, compatibility, or other problems, immediately or in future releases.

You can also use SAP Fiori tools to extend and customize specific features of the list report and object page. For more information, see [Configure Page Elements](https://help.sap.com/docs/SAP_FIORI_tools/17d50220bcd848aa854c9c182d65b699/047507c86afa4e96bb3d284adb9f4726.html).

> ### Note:  
> In the Page Editor, a property is written with spaces in between for better readability. In SAP Fiori elements, whenever we provide a property, it is written in the actual code format.



### Adapting the UI: List Report


<table>
<tr>
<th valign="top">

Feature

</th>
<th valign="top">

Setting

</th>
</tr>
<tr>
<td valign="top">

Display/Hide the *Export to Excel* button in the table toolbar

</td>
<td valign="top">

Change the `enableExport` property to `True/False`.

</td>
</tr>
<tr>
<td valign="top">

Change the column width.

</td>
<td valign="top">

Choose the column of a table in the outline of the Page Editor, and change the `Width` property as needed.

</td>
</tr>
<tr>
<td valign="top">

Center-align status columns

</td>
<td valign="top">

Choose the column of the table in the outline of Page Editor, and set the `hAlign` property to `Center`.

For vertical alignment of the whole responsive table, see [Tables](tables-c0f6592.md).

</td>
</tr>
<tr>
<td valign="top">

Modify the standard list report behavior for analytical, grid, and tree table types to not occupy the entire space available in the container.

</td>
<td valign="top">

Set the `fitContent` property of the dynamic page to `false` with the Page Editor.

By default, `fitContent` is set to `true` for analytical, grid, and tree table types in list report pages.

</td>
</tr>
<tr>
<td valign="top">

Change the layout of the list report table for better readability for a high number of columns.

</td>
<td valign="top">

In the table, set the `popinLayout` property with the Page Editor to one of the following values:

-   `Block`

-   `GridSmall`

-   `GridLarge`


The default layout is `Block`.

</td>
</tr>
<tr>
<td valign="top">

Change the default value of the `scrollThreshold` parameter in grid tables, analytical tables, and tree tables on the list report page. The default value is 300.

</td>
<td valign="top">

In the outline, select the table whose value needs to be changed, and set the new value for the `scrollThreshold` parameter.

</td>
</tr>
</table>



### Adapting the UI: Object Page


<table>
<tr>
<th valign="top">

Feature

</th>
<th valign="top">

Setting

</th>
</tr>
<tr>
<td valign="top">

Change the avatar shape in the object page dynamic header from a square to a circle

</td>
<td valign="top">

On the header of the object page, set the `displayShape` property to `Circle`.

</td>
</tr>
<tr>
<td valign="top">

Hide the anchor bar

</td>
<td valign="top">

On the page layout node, set the `showAnchorBar` property to `false`.

</td>
</tr>
<tr>
<td valign="top">

Switch to tabs

</td>
<td valign="top">

On the page layout node, set the property `useIconTabBar` to `true`.

</td>
</tr>
<tr>
<td valign="top">

Display the *Export to Excel* button in the table toolbar

</td>
<td valign="top">

In the table node, set the `enableExport` property to `true`.

</td>
</tr>
<tr>
<td valign="top">

Show header content in edit mode

</td>
<td valign="top">

On the page layout node, set the `showHeaderContent` property to `true` or `false`, to determine the header content visibility.

Alternatively, you can make a binding change if you need to change the value according to a property or an expression. For more information, see [Creating a Binding Change](creating-a-binding-change-4754094.md).

</td>
</tr>
<tr>
<td valign="top">

Don't collapse headers when scrolling down

</td>
<td valign="top">

On the page layout node, set the `alwaysShowContentHeader` property to `true`.

> ### Note:  
> On tablets and mobile phones, the header collapses automatically.



</td>
</tr>
<tr>
<td valign="top">

Change the default `growingThreshold` value for the object page’s `sap.m.Table`. The default value is 10.

> ### Note:  
> When there is a single section with a single subsection holding a table, the default `growingThreshold` value is 20 and it cannot be changed.



</td>
<td valign="top">

In the outline, select the table whose value needs to be changed, and set the new value for the `growingThreshold` property.

</td>
</tr>
<tr>
<td valign="top">

Set object page tables with non-editable content only, to not editable

By default, object page tables are automatically set to `editable` if the object page is in edit mode. This means that users can only access editable table content when they navigate through the table using the [tab\] key.

However, in a table with only non-editable content, there is no tab stop.

</td>
<td valign="top">

Set the `editable` property of the table to `false`. The inner table's `navigationMode` property is set to `Navigation`.

Users can then navigate through the entire focusable table content, and not only through the editable fields.

</td>
</tr>
<tr>
<td valign="top">

Enable *Include Item In Selection* for tables.

By setting this property to true, the item selection is displayed even if a user navigates away from a table.

</td>
<td valign="top">

On the table, set the `includeItemInSelection` property to `True`.

</td>
</tr>
<tr>
<td valign="top">

Enable the *Save and Edit* button in non-draft applications. Users can choose this button to save the current changes. The object page stays in edit mode so that they can continue editing.

</td>
<td valign="top">

In outline view of the object page select the `Save and Edit` action from the `Actions` within `Footer` and change the visibility to `{ui>/editable}`.

</td>
</tr>
<tr>
<td valign="top">

Change the layout of the object table for better readability for a high number of columns.

</td>
<td valign="top">

On the table, set the `popinLayout` property to one of the following values:

-   `Block`

-   `GridSmall`

-   `GridLarge`


The default layout is `Block`.

</td>
</tr>
</table>



### More Information

For more information, see [Creating a Binding Change](creating-a-binding-change-4754094.md).

