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

You can also use SAP Web IDE to extend and customize specific features of the list report and object page.

> ### Caution:  
> SAP Web IDE is no longer available via SAP Business Technology Platform trial accounts. Any references to SAP Web IDE in this documentation are only relevant for you if you have access to SAP Web IDE through a productive SAP BTP account. Please consider SAP Business Application Studio as an alternative. See [App Development Using SAP Business Application Studio](../05_Developing_Apps/app-development-using-sap-business-application-studio-6bbad66.md).

For more information about SAP Web IDE, see the documentation for SAP Web IDE on the SAP Help Portal at [https://help.sap.com/viewer/p/SAP\_Web\_IDE](https://help.sap.com/viewer/p/SAP_Web_IDE).



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

Change the *Export to Excel* property to `True/False` using UI adaptation.



</td>
</tr>
<tr>
<td valign="top">

Combine buttons \(actions\) in the toolbar



</td>
<td valign="top">

Select the buttons that you want to combine by holding down the [ctrl\] key and left-clicking the buttons in the required order. Then, release the [ctrl\] key, and the button is visible on the UI by default. You can hide this button by pressing the [ctrl\] key, right-clicking one of the selected buttons, and choosing *Combine* from the context menu.

> ### Note:  
> If the buttons don't all fit because the preview size in the UI adaptation editor is too small, you can expand the editor tab by double-clicking it and collapsing the outline and property panels.



</td>
</tr>
<tr>
<td valign="top">

Change the column width of `sap.ui.table.Table` ,`sap.ui.table.AnalyticalTable` button is visible on the UI by default. You can hide this button by, or `sap.m.Table`.



</td>
<td valign="top">

Choose the column header to select the corresponding `sap.ui.table.Column`. Change the *Width* property as needed.



</td>
</tr>
<tr>
<td valign="top">

Center-align status columns



</td>
<td valign="top">

For `sap.m.Table`, select a column and set the *H Align* property to `Center`.

For `sap.ui.table`, click the column header and set the *H Align* property to `Center`.

For vertical alignment of the whole responsive table, see [Tables](tables-c0f6592.md).



</td>
</tr>
<tr>
<td valign="top">

Disable sticky column header and sticky table toolbar



</td>
<td valign="top">

The sticky column header and the sticky table toolbar in the list report are enabled by default. To disable them, change the *Sticky* property value under *Table*.



</td>
</tr>
<tr>
<td valign="top">

Hide a toolbar action for a specific table \(if you use multiple views on list report tables\)



</td>
<td valign="top">

Set the `visible` property to `false`.



</td>
</tr>
<tr>
<td valign="top">

Disable standard system behavior for list report tables \(analytical, grid, tree tables\): Table should not occupy the entire space available in the container.



</td>
<td valign="top">

In the Dynamic Page, set the `Fit Content` property to `false`.



</td>
</tr>
<tr>
<td valign="top">

Change the layout of the list report table for better readability for a high number of columns.



</td>
<td valign="top">

For `sap.m.Table`, set the `PopinLayout` property to one of the following values:

-   `Block`

-   `GridSmall`

-   `GridLarge`


The default layout is `Block`.



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

Change the image shape from a square to a circle



</td>
<td valign="top">

Switch to preview mode, navigate to the object page, switch back to *Adapt the UI*. Select the object page header and set the *Object Image Shape* property to `Circle`.



</td>
</tr>
<tr>
<td valign="top">

Change the avatar shape in the object page dynamic header from a square to a circle



</td>
<td valign="top">

Switch to preview mode, navigate to the object page, switch back to *Adapt the UI*. Select the avatar in the object page header and set the *displayShape* property to `Circle`.



</td>
</tr>
<tr>
<td valign="top">

Hide the anchor bar



</td>
<td valign="top">

Switch to preview mode, navigate to the object page, switch back to *Adapt the UI*. Select the object page layout and set the *Show Anchor Bar* property to `false`.



</td>
</tr>
<tr>
<td valign="top">

Switch to tabs



</td>
<td valign="top">

Switch to preview mode, navigate to the object page, switch back to *Adapt the UI*. Select the object page layout and set the *Use Icon Tab Bar* property `"useIconTabBar"` to `true`.



</td>
</tr>
<tr>
<td valign="top">

Display the *Export to Excel* button in the table toolbar



</td>
<td valign="top">

For `SmartTable`, set the *Use Export to Excel* property to `true`.



</td>
</tr>
<tr>
<td valign="top">

Show header content in edit mode



</td>
<td valign="top">

By default, there is a binding at the *showHeaderContent* property of `sap.uxap.ObjectPageLayout` that the UI Adaptation editor cannot display. Change this property to `False` to get a change file. Then, change the `newValue` from `false` to `true`.

Alternatively, you can make a binding change if you need to change the value according to a property or an expression. For more information, see [Creating a Binding Change](creating-a-binding-change-4754094.md).



</td>
</tr>
<tr>
<td valign="top">

Show content parts in the header according to display/edit mode



</td>
<td valign="top">

Ensure that the header content is also displayed in edit/create mode, as described above. Then, search for the *sap.m.VBox* under*sap.uxap.ObjectPageLayout* \> *headerContent* of the header facet that you want to adjust. In the *sap.m.VBox*, set a binding change in the *Visible* property.

See also [Creating a Binding Change](creating-a-binding-change-4754094.md).



</td>
</tr>
<tr>
<td valign="top">

Hide the *Share* button



</td>
<td valign="top">

Select the *Share* button in the header and set the `Visible` property to `false`.



</td>
</tr>
<tr>
<td valign="top">

Set widths of mixed content in sections

When placing mixed content, such as forms or tables into one subsection, you may want to adjust the content blocks to display a table next to a form, for example.



</td>
<td valign="top">

Select the `sap.ui.layout.GridData` of the corresponding section and set the spans according to your requirements.



</td>
</tr>
<tr>
<td valign="top">

Don't collapse headers when scrolling down



</td>
<td valign="top">

Select the *sap.uxap.ObjectPageLayout* and set the `Always show content header` property to `true`.

> ### Note:  
> On tablets and mobile phones, the header collapses automatically.



</td>
</tr>
<tr>
<td valign="top">

Show more contact information in the header facet



</td>
<td valign="top">

In the outline, choose *sap.m.Page* \> *content* \> *sap.uxap.ObjectPageLayout* \> *headerContent*. For each header facet, an `sap.m.VBox` is displayed. In the contact header facet, several `sap.m.HBoxes` are displayed when icons and texts or links are available but invisible. Set the *Visible* properties of the required items to `true`.



</td>
</tr>
<tr>
<td valign="top">

Show paginator buttons \(up and down arrows\) on the first object page

By default, the paginator buttons for navigating to the previous object page or next object page are not displayed on the first object page. They are displayed from the second object page onwards. You can hide it by changing the *Visible* property to false.



</td>
<td valign="top">

From the outline, choose ** \> *sap.m.Page* \> *content* \> *sap.uxap.ObjectPageLayout* \> *headerTitle* \> *sap.uxap.ObjectPageHeader* \> *navigationBar* \> *sap.m.Bar* \> *contentRight* \> *sap.m.HBox* and set the *Visible* property to `true`.



</td>
</tr>
<tr>
<td valign="top">

Change the default `growingThreshold` value for the object page’s `sap.m.Table`. The default value is 10.

> ### Note:  
> When there is a single section with a single subsection holding a table, the default `growingThreshold` value is 20 and it cannot be changed.



</td>
<td valign="top">

Switch to preview mode, navigate to the object page, switch back to *Adapt the UI*. In the outline, select the table whose value needs to be changed, and set the new value for the `growingThreshold` property.



</td>
</tr>
<tr>
<td valign="top">

Set object page tables with non-editable content only, to not editable

By default, object page tables are automatically set to `editable` if the object page is in edit mode. This means that users can only access editable table content when they navigate through the table using the [tab\] key.

However, in a table with only non-editable content, there is no tab stop.



</td>
<td valign="top">

Set the `editable` property of the smart table to `false`. The inner table's `navigationMode` property is set to `Navigation`.

Users can then navigate through the entire focusable table content, and not only through the editable fields.



</td>
</tr>
<tr>
<td valign="top">

Enable "Include Item In Selection" for tables.

By setting this property to true, the item selection is displayed even if a user navigates away from a table.



</td>
<td valign="top">

For the SmartTable control, set the `includeItemInSelection` property to `True`.



</td>
</tr>
<tr>
<td valign="top">

Enable the *Save and Edit* button in non-draft applications. Users can choose this button to save the current changes. The object page stays in edit mode so that they can continue editing.



</td>
<td valign="top">

In the SAPUI5 Visual Editor, go to the object page of your app. Switch to edit mode and choose the `Save and Edit` button from the outline panel. Change the visibility to `true`. In the change file that's created, change the new value from `true` to `{ui>/editable}`.



</td>
</tr>
<tr>
<td valign="top">

Change the layout of the object table for better readability for a high number of columns.



</td>
<td valign="top">

For `sap.m.Table`, set the `PopinLayout` property to one of the following values:

-   `Block`

-   `GridSmall`

-   `GridLarge`


The default layout is `Block`.



</td>
</tr>
<tr>
<td valign="top">

Combine buttons \(actions\) in the header



</td>
<td valign="top">

Select the buttons that you want to combine by holding down the [ctrl\] key and left-clicking the buttons in the required order. Then, release the [ctrl\] key, and the button is visible on the UI by default. You can hide this button by pressing the [ctrl\] key, right-clicking one of the selected buttons, and choosing *Combine* from the context menu.

> ### Note:  
> If the buttons don't all fit because the preview size in the UI adaptation editor is too small, you can expand the editor tab by double-clicking it and collapsing the outline and property panels.



</td>
</tr>
</table>



### More Information

For more information, see [Creating a Binding Change](creating-a-binding-change-4754094.md).

For more information about SAP Web IDE, see the documentation for SAP Web IDE on the SAP Help Portal at [https://help.sap.com/viewer/p/SAP\_Web\_IDE](https://help.sap.com/viewer/p/SAP_Web_IDE).

