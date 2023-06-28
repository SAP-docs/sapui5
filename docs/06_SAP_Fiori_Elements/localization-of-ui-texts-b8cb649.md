<!-- loiob8cb649973534f08a6047692f8c6830d -->

# Localization of UI Texts

If necessary, you can replace standard UI texts for apps that you have created with SAP Fiori elements.

Standard texts are available in the generic framework \(for example, the button texts for draft concepts\) and belong to the template components \(for example, list report and object page\). The following sections describe how you replace texts in your generated apps.

When you have created your specific application component, standard texts are available from a specific template component and from the generic template component.

Standard texts can be overwritten by application-specific texts.

Perform the following steps to replace the standard UI texts:

1.  Find or add a resource file to your application.

2.  Search for the text that you would like to change.

3.  Copy the corresponding key and text to your resource file.

4.  Adapt the text as required.


> ### Note:  
> To save translation costs, don't copy and redefine more texts than needed.





### Overriding Texts from Annotations

You can override the texts that come from annotations. To do so, the annotation must refer to the i18n key that is used in the application’s i18n file:

> ### Sample Code:  
> XML Annotation
> 
> ```
> <Annotation Term="UI.LineItem">
>    <Collection>
>       <Record Type="UI.DataFieldForAction">
>          <PropertyValue Property="Label" String="Add random item"/>
>          <PropertyValue Property="Action"
>             String="com.c_salesordermanage_sd.AddRandomItem"/>
>       </Record>
>       <Record Type="UI.DataFieldForAction">
>          <PropertyValue Property="Label" String="{@i18n>CopyActionText}"/>
>          <PropertyValue Property="Action"
>             String="com.c_salesordermanage_sd.CopyItem"/>
>       </Record>
>    </Collection>
> </Annotation>
> 
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> @UI.lineItem: [
>   {
>     label: 'Add random item',
>     dataAction: 'PUSHDOWN:com.c_salesordermanage_sd.AddRandomItem',
>     type: #FOR_ACTION,
>     position: 1 
>   },
>   {
>     label: '{@i18n>CopyActionText}',
>     dataAction: 'PUSHDOWN:com.c_salesordermanage_sd.CopyItem',
>     type: #FOR_ACTION,
>     position: 2 
>   }
> ];
> 
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> LineItem                               : [
>     {
>         $Type  : 'UI.DataFieldForAction',
>         Label  : 'Add random item',
>         Action : 'com.c_salesordermanage_sd.AddRandomItem'
>     },
>     {
>         $Type  : 'UI.DataFieldForAction',
>         Label  : '{@i18n>CopyActionText}',       //i18n key referred here
>         Action : 'com.c_salesordermanage_sd.CopyItem'
>     },
>     .
>     .
>     .
> ]
> ```

For the annotation example above, the application’s i18n properties file must have the key `CopyActionText=Copy Selected Item`. In addition, the model should have the `@i18n` model defined within the manifest file.

> ### Sample Code:  
> `manifest.json`
> 
> ```
>  "models": {
>                …
>                …
>                "@i18n": {
>                               "type": "sap.ui.model.resource.ResourceModel",
>               "uri": "i18n/i18n.properties"
>                },
>                …
>                …
> }
> 
> ```

> ### Note:  
> The annotation modification described above is done in a local annotations file if the back-end generated file does not have the corresponding annotation segment.
> 
> For example, if the back-end system is based on SAP NetWeaver 7.51 or lower \(SAP S/4HANA\) or on SAP NetWeaver 7.67 or lower \(SAP S/4HANA Cloud\), you can't add `UI.ReferenceFacet` via the back end. In such a case, a modification to the *Reference Facet* label is only possible by modifying the local annotation file as described above.



<a name="loiob8cb649973534f08a6047692f8c6830d__section_jxn_kgh_2nb"/>

## Additional Features in SAP Fiori Elements for OData V2

When you have created your specific application component, for example in SAP Fiori tools, standard texts are available from a specific template component \(for example, i18n file within `sap.suite.ui.generic.template.ListReport`\) and from the generic template component \(for example, i18n file within `sap.suite.ui.generic.template.lib`\).

Texts from the *Generic Application Component* can't be replaced.

Applications can choose to override any key that are mentioned in the following table. You can do so by using the custom i18n file approach.

**Keys You Can Override**


<table>
<tr>
<th valign="top">

Key



</th>
<th valign="top">

Default Text in SAP Fiori Elements



</th>
<th valign="top">

Used In



</th>
</tr>
<tr>
<td valign="top" colspan="3">

 **List Report Specific Key from `..>>ListReport>i18n`** 



</td>
</tr>
<tr>
<td valign="top">

 `CREATE_OBJECT` 



</td>
<td valign="top">

Create



</td>
<td valign="top">

Label for creating buttons in the list report.



</td>
</tr>
<tr>
<td valign="top">

 `CREATE_DIALOG_TITLE` 



</td>
<td valign="top">

New Object



</td>
<td valign="top">

Title for the *Create* dialog if `createWithParameterDialog` is configured. Users can change titles to, for example, “Create Order” or “Create Contract”.



</td>
</tr>
<tr>
<td valign="top">

 `PARTIAL_UPDATE` 



</td>
<td valign="top">

\{0\} of \{1\} objects updated ??



</td>
<td valign="top">

Used in a message box that is displayed in the list report after a partial update, in case of mass edit.



</td>
</tr>
<tr>
<td valign="top">

 `DIALOG_TITLE_NEW_ACTION_FOR_CREATE` 



</td>
<td valign="top">

Create Object



</td>
<td valign="top">

Title for the `NewAction` parameter dialog in the list report.



</td>
</tr>
<tr>
<td valign="top">

 `DIALOG_ACTION_BUTTON_NEW_ACTION_FOR_CREATE` 



</td>
<td valign="top">

Continue



</td>
<td valign="top">

Label for a button within the `NewAction` parameter dialog in the list report.



</td>
</tr>
<tr>
<td valign="top">

 `MULTI_EDIT_DIALOG_TITLE` 



</td>
<td valign="top">

Edit \(\{0\}\)



</td>
<td valign="top">

Title for mass edit dialog in the list report page.

Users can change titles to for example "Edit Purchase Orders \(\{0\}\)".



</td>
</tr>
<tr>
<td valign="top" colspan="3">

 **List Report Specific Key from `..>>lib>i18n`** 



</td>
</tr>
<tr>
<td valign="top">

 `ST_GENERIC_UNSAVED_CHANGES_CHECKBOX` 



</td>
<td valign="top">

Also delete objects with unsaved changes.



</td>
<td valign="top">

This message is displayed in a delete confirmation dialog when a user select multiple objects, out of which few have unsaved changes from other users. This confirmation dialog offers a check box to include or exclude the objects with unsaved changes from other users.



</td>
</tr>
<tr>
<td valign="top">

 `ST_GENERIC_DELETE_SELECTED_PLURAL` 



</td>
<td valign="top">

Delete the selected objects?



</td>
<td valign="top">

Text displayed within the delete confirmation dialog that comes up when a user selects all active or own draft objects from the list report.



</td>
</tr>
<tr>
<td valign="top">

 `ST_GENERIC_DELETE_UNSAVED_CHANGES` 



</td>
<td valign="top">

Another user edited this object without saving the changes: \{1\}

Delete anyway?



</td>
<td valign="top">

Text displayed within the delete confirmation dialog that comes up when a user selects an object that include unsaved changes made by another user. The user can still delete the object.



</td>
</tr>
<tr>
<td valign="top">

 `ST_GENERIC_DELETE_UNSAVED_CHANGES_PLURAL` 



</td>
<td valign="top">

Other users have edited the selected objects without saving the changes.

Delete them anyway?



</td>
<td valign="top">

Text displayed within the delete confirmation dialog that comes up when a user selects more than one object that includes unsaved changes made by another user. The user can still delete the object.



</td>
</tr>
<tr>
<td valign="top">

 `ST_GENERIC_DELETE_LOCKED` 



</td>
<td valign="top">

This object cannot be deleted. It is currently locked by \{1\}



</td>
<td valign="top">

Message text used in the confirmation message box when a user selects an object that is locked by another user.



</td>
</tr>
<tr>
<td valign="top">

 `ST_GENERIC_NOT_DELETABLE` 



</td>
<td valign="top">

This object cannot be deleted.



</td>
<td valign="top">

Message text used in the confirmation message box when a user tries to delete an object that is non-deletable.



</td>
</tr>
<tr>
<td valign="top">

 `ST_GENERIC_DELETE_LOCKED_PLURAL` 



</td>
<td valign="top">

The selected objects are currently locked by other users and cannot be deleted.



</td>
<td valign="top">

Message text used in the confirmation message box when a user select multiple objects that are all locked by another user and tries to delete them.



</td>
</tr>
<tr>
<td valign="top">

 `ST_GENERIC_DELETE_UNDELETABLE` 



</td>
<td valign="top">

\{0\} of \{1\} objects cannot be deleted.



</td>
<td valign="top">

Text displayed within the delete confirmation dialog when a user tries to delete the selected records, out of which some objects can’t be deleted.



</td>
</tr>
<tr>
<td valign="top">

 `ST_GENERIC_CURRENTLY_LOCKED_PLURAL` 



</td>
<td valign="top">

\{0\} of \{1\} objects are currently locked by other users and cannot be deleted.



</td>
<td valign="top">

Text displayed within the delete confirmation dialog when some of the selected objects are locked by other users and can’t be deleted.



</td>
</tr>
<tr>
<td valign="top">

 `ST_GENERIC_DELETE_REMAINING` 



</td>
<td valign="top">

Do you still want to delete the remaining object?



</td>
<td valign="top">

Text displayed within the confirmation dialog when a user select some objects that are either locked or cannot be deleted. However, one of the selections can be deleted.



</td>
</tr>
<tr>
<td valign="top">

 `ST_GENERIC_DELETE_REMAINING_PLURAL` 



</td>
<td valign="top">

Do you still want to delete the remaining \{0\} objects?



</td>
<td valign="top">

Text displayed within the confirmation dialog when a user select some objects that are either locked or cannot be deleted. However, some of the selections can be deleted.



</td>
</tr>
<tr>
<td valign="top">

 `ST_GENERIC_DELETE_REMAINING_UNSAVED_CHANGES` 



</td>
<td valign="top">

The remaining object has unsaved changes.

Do you still want to delete it?



</td>
<td valign="top">

Text displayed within the confirmation dialog when a user select some objects that are either locked or cannot be deleted. However, one of these selections can be deleted but it includes unsaved changes made by another user.



</td>
</tr>
<tr>
<td valign="top">

 `ST_GENERIC_DELETE_REMAINING_UNSAVED_CHANGES_PLURAL` 



</td>
<td valign="top">

The remaining objects have unsaved changes by other users.

Do you still want to delete them?



</td>
<td valign="top">

Text displayed within the confirmation dialog when a user select some objects that are either locked or cannot be deleted. However, some of these selections can be deleted but it includes unsaved changes made by another user.



</td>
</tr>
<tr>
<td valign="top">

 `ST_GENERIC_DELETE_SUCCESS_PLURAL` 



</td>
<td valign="top">

Objects were deleted.



</td>
<td valign="top">

Message toast text when deletion of multiple objects is successful.



</td>
</tr>
<tr>
<td valign="top">

 `ST_GENERIC_DELETE_ERROR` 



</td>
<td valign="top">

The selected object cannot be deleted.



</td>
<td valign="top">

Message toast text when an object can’t be deleted from back end.



</td>
</tr>
<tr>
<td valign="top" colspan="3">

 **Key from `..>>ObjectPage>i18n`** 



</td>
</tr>
<tr>
<td valign="top">

 `DRAFT_LOCK_EXPIRED` 



</td>
<td valign="top">

Another user edited this object without saving the changes: \{0\}

If you take over, any changes will be lost.



</td>
<td valign="top">

Text displayed within the confirmation dialog when a user clicks *Edit* on the object page that was locked and the lock expired.



</td>
</tr>
<tr>
<td valign="top">

 `OBJECT_SAVED` 



</td>
<td valign="top">

Your changes have been saved



</td>
<td valign="top">

Message toast text when a user chooses to save and the object gets saved successfully.



</td>
</tr>
<tr>
<td valign="top">

 `ITEM_CREATED` 



</td>
<td valign="top">

Item created



</td>
<td valign="top">

Message toast text when a user successfully creates a sub object or an item.



</td>
</tr>
<tr>
<td valign="top">

 `WAITING_SMARTTABLE` 



</td>
<td valign="top">

Please wait while the data is loading...



</td>
<td valign="top">

Appears in the smart table within the object page when data is loading.



</td>
</tr>
<tr>
<td valign="top">

 `OBJECT_NOT_MODIFIED` 



</td>
<td valign="top">

You haven't made any changes



</td>
<td valign="top">

Message toast text when a user clicks on *Save* and the object has no unsaved changes.



</td>
</tr>
<tr>
<td valign="top">

 `OBJECT_CREATED` 



</td>
<td valign="top">

Object was created.



</td>
<td valign="top">

Message toast text when an object is successfully created.



</td>
</tr>
<tr>
<td valign="top">

 `DELETE_WITH_OBJECTINFO` 



</td>
<td valign="top">

Delete this object \(\{1\} \{2\}\)?



</td>
<td valign="top">

Text displayed within the delete confirmation dialog with both the title and description is available for the object and the app is open in the flexible column layout mode.



</td>
</tr>
<tr>
<td valign="top">

 `DELETE_WITH_OBJECTTITLE` 



</td>
<td valign="top">

Delete Object \{0\}?



</td>
<td valign="top">

Text displayed within the delete confirmation dialog when the app is open in the full screen mode and a title is available for the object.



</td>
</tr>
<tr>
<td valign="top">

 `SHOW_SIDE_CONTENT` 



</td>
<td valign="top">

Show Details



</td>
<td valign="top">

Used as a label to show the side content button when the side content is hidden.



</td>
</tr>
<tr>
<td valign="top">

 `HIDE_SIDE_CONTENT` 



</td>
<td valign="top">

Hide Details



</td>
<td valign="top">

Used as a label to hide the side content button when the side content is being displayed.



</td>
</tr>
<tr>
<td valign="top">

 `DELETE_SELECTED_ITEM` 



</td>
<td valign="top">

Delete Item?



</td>
<td valign="top">

Text displayed within the delete confirmation dialog when a user select items \(that don't have a title and description defined in the sub object page\) from smart table in the object page, and press delete on the smart table toolbar.



</td>
</tr>
<tr>
<td valign="top">

 `DELETE_SELECTED_ITEM_WITH_OBJECTINFO` 



</td>
<td valign="top">

Delete Item \{1\} \(\{2\}\)?



</td>
<td valign="top">

Text displayed within the delete confirmation dialog when the title and description is available and the sub object page is open in the flexible column layout mode.



</td>
</tr>
<tr>
<td valign="top">

 `DELETE_SELECTED_ITEM_WITH_OBJECTTITLE` 



</td>
<td valign="top">

Delete Item \{0\}?



</td>
<td valign="top">

Text displayed within the delete confirmation dialog when a user select items in the object page smart table in the full screen mode, and the title is defined.



</td>
</tr>
<tr>
<td valign="top">

 `DELETE_SELECTED_ITEMS` 



</td>
<td valign="top">

Delete the selected items?



</td>
<td valign="top">

Text displayed within the delete confirmation dialog when a user select items in the object page smart table and choose to delete it.



</td>
</tr>
<tr>
<td valign="top">

 `DELETE_SUCCESS_PLURAL_WITH_COUNT` 



</td>
<td valign="top">

\{0\} items have been deleted.



</td>
<td valign="top">

Message toast text when a user successfully deletes multiple items from the object page smart table.



</td>
</tr>
<tr>
<td valign="top">

 `DELETE_SUCCESS_WITH_COUNT` 



</td>
<td valign="top">

\{0\} item has been deleted.



</td>
<td valign="top">

Message toast text when a user successfully deletes a single item from the object page smart table.



</td>
</tr>
<tr>
<td valign="top">

 `DELETE_ERROR_PLURAL_WITH_COUNT` 



</td>
<td valign="top">

\{0\} items cannot been deleted.



</td>
<td valign="top">

Text displayed when a few of the selected items cannot be deleted.



</td>
</tr>
<tr>
<td valign="top">

 `DELETE_ERROR_WITH_COUNT` 



</td>
<td valign="top">

\{0\} item cannot been deleted.



</td>
<td valign="top">

Text displayed when a selected item cannot be deleted.



</td>
</tr>
<tr>
<td valign="top">

 `DELETE_ERROR` 



</td>
<td valign="top">

The selected item cannot be deleted.



</td>
<td valign="top">

Text displayed when only one record was selected for deletion and the operation failed to execute.



</td>
</tr>
<tr>
<td valign="top">

 `ITEM_DELETED` 



</td>
<td valign="top">

Item deleted



</td>
<td valign="top">

Message toast text when an item is successfully deleted from the object page table.



</td>
</tr>
<tr>
<td valign="top">

 `DELETE_UNDELETABLE_ITEMS` 



</td>
<td valign="top">

\{0\} of \{1\} items cannot be deleted.



</td>
<td valign="top">

Message text used in the confirmation message box when a user has selected multiple items and a few cannot be deleted.



</td>
</tr>
<tr>
<td valign="top">

 `DELETE_UNDELETABLE_ITEM` 



</td>
<td valign="top">

This item cannot be deleted.



</td>
<td valign="top">

Message text used in the confirmation message box when a user selects a single item that cannot be deleted.



</td>
</tr>
<tr>
<td valign="top">

 `ENTER_MANDATORY` 



</td>
<td valign="top">

Enter a value for field: \{0\}



</td>
<td valign="top">

Text displayed in a message popover when a user has configured the `InsertRestriction` annotation to make certain fields mandatory. This is applicable only in case of non-draft scenarios.



</td>
</tr>
<tr>
<td valign="top">

 `CREATE_DIALOG_TITLE` 



</td>
<td valign="top">

New Item



</td>
<td valign="top">

Title text displayed for the create dialog if `createWithParameterDialog` is configured on an object page table of a non-draft application. Users can change titles to, for example, “Create Sales Order Item”.



</td>
</tr>
<tr>
<td valign="top" colspan="3">

 **Object Page and Sub Object Page Keys from`..>>lib>i18n`** 



</td>
</tr>
<tr>
<td valign="top">

 `ST_GENERIC_DELETE_SELECTED` 



</td>
<td valign="top">

Delete this object?



</td>
<td valign="top">

Text displayed within the delete confirmation dialog when a user deletes an object \(without an object title\) by clicking *Delete* on the object page header.



</td>
</tr>
<tr>
<td valign="top">

 `ST_GENERIC_DRAFT_LOCKED_BY_USER` 



</td>
<td valign="top">

Another user edited this object without saving the changes: \{1\}

If you take over, any changes will be lost.



</td>
<td valign="top">

Text displayed within the confirmation dialog when a user selects an object to edit that is locked by another user.



</td>
</tr>
<tr>
<td valign="top">

 `DELETE_WITH_OBJECTTITLE` 



</td>
<td valign="top">

Delete Object \{0\}?



</td>
<td valign="top">

Text displayed within the delete confirmation dialog when a user deletes an object that has a defined object title.



</td>
</tr>
<tr>
<td valign="top">

 `ST_GENERIC_OBJECT_DELETED` 



</td>
<td valign="top">

Object was deleted.



</td>
<td valign="top">

Message toast text upon the successful deletion of the object.



</td>
</tr>
<tr>
<td valign="top" colspan="3">

 **List Report, Object Page and Analytical List Page Keys from `..>>lib>i18n`** 



</td>
</tr>
<tr>
<td valign="top">

 `ST_GENERIC_LOCKED_OBJECT_POPOVER_TEXT` 



</td>
<td valign="top">

You cannot edit this object at the moment.

It is locked by \{0\}



</td>
<td valign="top">

Text displayed when a user tries editing an object that is locked by another user.



</td>
</tr>
<tr>
<td valign="top">

 `ST_GENERIC_UNSAVED_OBJECT_POPOVER_TEXT` 



</td>
<td valign="top">

This object has unsaved changes by \{0\}.



</td>
<td valign="top">

When an object has unsaved change from another user, it is indicated by an icon shown in the key field column of the list report, and next to the title in the object page. When the user clicks on the icon, a pop up appears that is shown in this text.



</td>
</tr>
<tr>
<td valign="top">

 `NEW_OBJECT` 



</td>
<td valign="top">

Unnamed Object



</td>
<td valign="top">

This is the header title for a newly created object.



</td>
</tr>
<tr>
<td valign="top">

 `NOITEMS_SMARTTABLE` 



</td>
<td valign="top">

No items available.



</td>
<td valign="top">

No data text is displayed when there is no data available in the smart table of the object page.



</td>
</tr>
<tr>
<td valign="top">

 `NOITEMS_SMARTTABLE_WITH_FILTER` 



</td>
<td valign="top">

No items available. Try adjusting the search or filter parameters.



</td>
<td valign="top">

Text displayed when there is no data available in the smart table of the object page after applying filter.



</td>
</tr>
<tr>
<td valign="top">

 `NOITEMS_SMARTTABLE_WITH_FILTER_FOR_SEGMENTEDBUTTON` 



</td>
<td valign="top">

There are no items for the selected filter criteria and table view.



</td>
<td valign="top">

Text displayed when there is no data available in the smart table of the object page with segmented button.



</td>
</tr>
<tr>
<td valign="top">

 `NOITEMS_SMARTCHART` 



</td>
<td valign="top">

No data found.



</td>
<td valign="top">

Text displayed in charts on the analytical list page and object page when no data is found without applying any filters.



</td>
</tr>
<tr>
<td valign="top">

 `NOITEMS_LR_SMARTCHART` 



</td>
<td valign="top">

There is no data for the selected filter criteria and chart view.



</td>
<td valign="top">

Text displayed in the list report chart when no data is found.



</td>
</tr>
<tr>
<td valign="top">

 `NOITEMS_SMARTCHART_WITH_FILTER` 



</td>
<td valign="top">

No data found. Try adjusting the filter parameters.



</td>
<td valign="top">

Text displayed in charts on the analytical list page and object page when no data is found even after applying filters.



</td>
</tr>
<tr>
<td valign="top">

 `SMARTCHART_INITIAL_NODATA` 



</td>
<td valign="top">

To start, set the relevant filters and choose "Go".



</td>
<td valign="top">

Text displayed in the list report chart when no search is triggered.



</td>
</tr>
<tr>
<td valign="top">

 `NOITEMS_LR_SMARTTABLE` 



</td>
<td valign="top">

No data found.



</td>
<td valign="top">

Text displayed in the list report table, when the table is empty after clicking "Go" without setting any filters.



</td>
</tr>
<tr>
<td valign="top">

 `NODATA_SMARTTABLE_LR` 



</td>
<td valign="top">

To start, set the relevant filters and choose "Go".



</td>
<td valign="top">

Text displayed in the list report table, when no search is triggered.



</td>
</tr>
<tr>
<td valign="top">

 `NOITEMS_LR_SMARTTABLE_WITH_FILTER` 



</td>
<td valign="top">

No data found. Try adjusting the search or filter criteria.



</td>
<td valign="top">

Text displayed in the list report table when no data is found after applying filters.



</td>
</tr>
<tr>
<td valign="top">

 `NOITEMS_MULTIVIEW_LR_SMARTTABLE_WITH_FILTER` 



</td>
<td valign="top">

There is no data for the selected filter criteria and table view.



</td>
<td valign="top">

Text displayed in the list report table when no data is found for a view in case of multi view application.



</td>
</tr>
<tr>
<td valign="top">

 `ST_GENERIC_DELETE_WITH_WARNING_SUGGESTION_PLURAL` 



</td>
<td valign="top">

Hint: To ignore warnings, delete the objects individually.



</td>
<td valign="top">

Warning message text on the delete popover when a user tries to delete some of the selected objects in case of multi select delete.



</td>
</tr>
<tr>
<td valign="top">

 `ST_GENERIC_NOT_DELETED_RECORDS` 



</td>
<td valign="top">

\{0\} of \{1\} objects can't be deleted.



</td>
<td valign="top">

Warning message text on the delete popover informing the user that some of the objects are not deletable as the deletion has failed at backend in case of multi select delete.



</td>
</tr>
<tr>
<td valign="top">

 `ST_GENERIC_DELETE_ERROR_PLURAL` 



</td>
<td valign="top">

Some of the objects you selected can't be deleted. Try deleting the objects individually instead.



</td>
<td valign="top">

Warning message text on the delete popover in case of multi select delete, informing the user that the deletion has failed at backend for some of the objects and the complete batch is failed as a result of a generic error.



</td>
</tr>
<tr>
<td valign="top">

 `ST_GENERIC_NOT_PROCESSED_RECORDS` 



</td>
<td valign="top">

\{0\} of \{1\} objects can't be processed.



</td>
<td valign="top">

Message text displayed in case of multi select function import actions, if the action fails at backend.



</td>
</tr>
<tr>
<td valign="top">

 `ST_GENERIC_NOT_PROCESSED_RECORDS_PLURAL` 



</td>
<td valign="top">

The selected objects can't be processed.



</td>
<td valign="top">

Message text displayed in case of multi select function import actions, if the action fails at backend for some of the selected objects and as a result, the complete batch has failed.



</td>
</tr>
<tr>
<td valign="top">

 `ST_GENERIC_ACTION_WITH_WARNING_SUGGESTION_PLURAL` 



</td>
<td valign="top">

Hint: To ignore warnings, process the objects individually.



</td>
<td valign="top">

Message text displayed in case of multi select function import actions, if the action shows a warning for some of the selected objects and as a result, the complete batch has failed.



</td>
</tr>
<tr>
<td valign="top">

 `MESSAGE_SINGLE_VALUE_L_FORM` 



</td>
<td valign="top">

The filter \\"\{0\}\\" isn't relevant for the tab \\"\{1\}\\". Setting this filter has no effect on the results.



</td>
<td valign="top">

Text displayed in the message strip above the smart table in the list report when a user set filters that are not relevant for the selected tab in a multi view application, on a desktop or a large screen device.



</td>
</tr>
<tr>
<td valign="top">

 `MESSAGE_SINGLE_VALUE_S_FORM` 



</td>
<td valign="top">

You can't filter by \\"\{0\}\\" on the \\"\{1\}\\" tab.



</td>
<td valign="top">

Text displayed in the message strip above the smart table in the list report when a user set filters that are not relevant for the selected tab in a multi view application, on a mobile or a small screen device.



</td>
</tr>
<tr>
<td valign="top">

 `MESSAGE_MULTIPLE_VALUES_L_FORM` 



</td>
<td valign="top">

Some of the filters aren't relevant for the tab \\"\{1\}\\" \(\{0\}\). Settings these filters has no effect on the results.



</td>
<td valign="top">

Text displayed in the message strip above the smart table in the list report when a user select a filter that is not relevant for the selected tab in a multi view application, on a desktop or a large screen device.



</td>
</tr>
<tr>
<td valign="top">

 `MESSAGE_MULTIPLE_VALUES_S_FORM` 



</td>
<td valign="top">

You can't use the following filters on the \\"\{1\}\\" tab\\: \\"\{0\}\\"



</td>
<td valign="top">

Text displayed in the message strip above the smart table in the list report when a user select a filter that is not relevant for the selected tab in a multi view application, on a mobile or a small screen device.



</td>
</tr>
<tr>
<td valign="top">

 `ST_KEEP_DRAFT_MESSAGE_EDIT` 



</td>
<td valign="top">

You haven't made changes to this object.

What would you like to do?



</td>
<td valign="top">

Text displayed within the discard confirmation dialog when a user navigates away from edit draft that has unsaved changes.



</td>
</tr>
<tr>
<td valign="top">

 `ST_KEEP_DRAFT_MESSAGE_CREATE` 



</td>
<td valign="top">

You haven't created this object yet.

What would you like to do?



</td>
<td valign="top">

Text displayed within the discard confirmation dialog when a user navigates away from a new draft that has unsaved changes.



</td>
</tr>
<tr>
<td valign="top" colspan="3">

 **Key from `..>>AnalyticalPage>i18n`** 



</td>
</tr>
<tr>
<td valign="top">

 `NODATA_SMARTCHART_ALP` 



</td>
<td valign="top">

To start, set the relevant filters and choose "Go".



</td>
<td valign="top">

Text displayed in the analytical list page smart chart when no search is triggered.



</td>
</tr>
<tr>
<td valign="top">

 `NODATA_SMARTTABLE_ALP` 



</td>
<td valign="top">

To start, set the relevant filters and choose "Go".



</td>
<td valign="top">

Text displayed in the analytical list page smart table when no search is triggered.



</td>
</tr>
<tr>
<td valign="top">

 `MESSAGE_MULTIPLE_VALUES_L_FORM` 



</td>
<td valign="top">

Some of the filters aren’t relevant for the tab \\"\{1\}\\" \(\{0\}\). Settings these filters has no effect on the results.



</td>
<td valign="top">

Text displayed in the message strip when a user select filters and a few of them are not relevant for the selected tab in a multi view application, on a desktop or a large screen device.



</td>
</tr>
<tr>
<td valign="top">

 `MESSAGE_MULTIPLE_VALUES_S_FORM` 



</td>
<td valign="top">

You can't use the following filters on the \\"\{1\}\\" tab\\: \\"\{0\}\\"



</td>
<td valign="top">

Text displayed in the message strip when a user select filters and a few of them are not relevant for the selected tab in a multi view application, on a mobile or a small screen device.



</td>
</tr>
</table>



### How to Find the Resource File of Your Application Component

SAP Fiori generator automatically generates the following initial folders and files when you create an app with SAP Fiori elements:

-   <root-folder\>

-   |--webapp

-   |----i18n

-   |—i18n.properties


The required folder structure to the resource model appears as shown here. You can create it as required by your application structure and the texts that need adaptation. Since the `manifest.json` file also refers to the title and description of the app, there is a general `i18n.properties` file on the top level:

-   `i18n/i18n.properties`
-   `i18n/ListReport/<entitySet>/POHeaders/i18n.properties`
-   `i18n/ObjectPage/<entitySet>/i18n.properties`
-   `i18n/ObjectPage/<subEntitySet>/i18n.properties`

    > ### Note:  
    > For object pages, the number of i18n files corresponds to the number of object pages defined in the app.


The app descriptor \(`manifest.json` file\) of an application specifies the SAPUI5 models.

Example:

```
"sap.ui5": {
 
        ...
    "models": {
        "i18n": {                
            "type": "sap.ui.model.resource.ResourceModel",                
            "uri": "i18n/i18n.properties"           
      },
 
        "i18n|sap.suite.ui.generic.template.ListReport|POHeaders": {
            "type": "sap.ui.model.resource.ResourceModel",
            "uri": "i18n/ListReport/POHeaders/i18n.properties"
              },
        "i18n|sap.suite.ui.generic.template.ObjectPage|POHeaders": {
                    "type": "sap.ui.model.resource.ResourceModel",
                    "uri": "i18n/ObjectPage/POHeaders/i18n.properties"
              },
        "i18n|sap.suite.ui.generic.template.ObjectPage|POItems": {
                    "type": "sap.ui.model.resource.ResourceModel",
                    "uri": "i18n/ObjectPage/POItems/i18n.properties"

```

The URL reflects the folder path to the resource model. The model's name, `i18n|sap.suite.ui.generic.template.ObjectPage|POHeaders`, is separated by lines used to identify the specific template component and entity set for which the resource model can be enhanced by editing the `i18n.properties` file.



<a name="loiob8cb649973534f08a6047692f8c6830d__section_qty_nb1_zlb"/>

## Additional Features in SAP Fiori Elements for OData V4

When you have created your specific application component, standard UI texts are available from a specific template component \(`sap.fe.templates`\) and from the generic template component.

> ### Tip:  
> You can also use the building blocks provided by SAP Fiori elements in applications built without using one of our floorplans. If none of our floorplans suit your use case, you can build a custom app that still runs on the SAP Fiori elements framework, but where all pages are treated like custom pages. For more information about how to override the standard UI texts when you're using building blocks, see [Adapt i18n](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/buildingBlocks/guidance/adaptI18n).



### What You Can Override

Applications can currently choose to override any key from the list below. Check the last column in the following table for a recommendation about which default texts to override. Only the keys given in the table are allowed to be overridden by application developers using the custom i18n file approach:

**Keys You Can Override**


<table>
<tr>
<th valign="top">

Key



</th>
<th valign="top">

Default Text in SAP Fiori Elements



</th>
<th valign="top">

Used In



</th>
<th valign="top">

Recommendation



</th>
</tr>
<tr>
<td valign="top">

 `C_OPERATIONS_ACTION_CONFIRM_MESSAGE` 



</td>
<td valign="top">

Perform this action?



</td>
<td valign="top">

Text within the confirmation dialog that comes up when a user clicks on an action that requires confirmation.



</td>
<td valign="top">

Applications should overwrite the default text with a shorter version, or should specify the concrete action.



</td>
</tr>
<tr>
<td valign="top">

 `C_COMMON_DIALOG_OK` 



</td>
<td valign="top">

OK



</td>
<td valign="top">

Button text to confirm the action parameter dialog only when no action label has been defined.



</td>
<td valign="top">

Applications should overwrite with the action name.



</td>
</tr>
<tr>
<td valign="top">

 `C_OPERATIONS_ACTION_PARAMETER_REQUIRED` 



</td>
<td valign="top">

Invalid entry



</td>
<td valign="top">

Error message for the field left empty in the action parameter dialog.



</td>
<td valign="top">

Applications should overwrite the default text with a more specific message.



</td>
</tr>
<tr>
<td valign="top">

 `C_COMMON_ACTION_PARAMETER_DIALOG_CANCEL` 



</td>
<td valign="top">

Cancel



</td>
<td valign="top">

Cancel button text on the action parameter dialog.



</td>
<td valign="top">

 



</td>
</tr>
<tr>
<td valign="top">

 `C_APP_COMPONENT_SAPFE_ETAG_LATE_PROPERTY` 



</td>
<td valign="top">

This action may not work. Refresh the data to work with the most recent version.



</td>
<td valign="top">

Indication to the user to first refresh the data and then trigger the action again.



</td>
<td valign="top">

Applications can choose to overwrite the default message with the concrete action name.



</td>
</tr>
<tr>
<td valign="top">

`M_FIELD_RUNTIME_DRAFT_POPOVER_LOCKED_BY_KNOWN`

\(deprecated key: `C_EDIT_FLOW_GENERIC_LOCKED_OBJECT_POPOVER_TEXT_OWNER_INFO`\)



</td>
<td valign="top">

This object is currently being edited by \{0\}.



</td>
<td valign="top">

Draft information text displayed to a user for an object that is already being edited by another user, provided that the information about the owner is available.

Parameter: \{0\} = user who is editing the object



</td>
<td valign="top">

Applications should overwrite the default text with the concrete object that is being edited.



</td>
</tr>
<tr>
<td valign="top">

deprecated key: `C_EDIT_FLOW_GENERIC_LOCKED_OBJECT_POPOVER_TEXT_ADDITIONAL_USER` 



</td>
<td valign="top">

This key has been deprecated. The scenario no longer occurs.



</td>
<td valign="top">

Draft information text displayed to a user for an object that is already being edited by another user, provided that the information about the owner isn't available.



</td>
<td valign="top">

Applications should overwrite the default text with the concrete object that is being edited.



</td>
</tr>
<tr>
<td valign="top">

`M_FIELD_RUNTIME_DRAFT_POPOVER_UNSAVED_CHANGES_BY_KNOWN`

\(deprecated key: `C_EDIT_FLOW_LAST_CHANGE_USER_TEXT_OWNER_INFO`\)



</td>
<td valign="top">

This object has unsaved changes made by \{0\}.



</td>
<td valign="top">

Information about the user who has made the unsaved changes or who is currently editing the draft, provided that the information about the user making the changes is available.

Parameter: \{0\} = user who is editing the object



</td>
<td valign="top">

Applications should overwrite the default text with the concrete object that is being edited.



</td>
</tr>
<tr>
<td valign="top">

`M_FIELD_RUNTIME_DRAFT_POPOVER_UNSAVED_CHANGES_BY_UNKNOWN`

\(deprecated key: `C_EDIT_FLOW_LAST_CHANGE_USER_TEXT_ADDITIONAL_USER`\)



</td>
<td valign="top">

This object has unsaved changes made by another user.



</td>
<td valign="top">

Information about the user who has made the unsaved changes or who is currently editing the draft, when no information about the user making the changes is available.



</td>
<td valign="top">

Applications should overwrite the default text with the concrete object that is being edited.



</td>
</tr>
<tr>
<td valign="top">

deprecated key: `C_COMMON_APPLY_ERROR` 



</td>
<td valign="top">

This key has been deprecated. The regular message handling flow will be invoked in case of any errors.



</td>
<td valign="top">

Error message while saving an object.



</td>
<td valign="top">

 



</td>
</tr>
<tr>
<td valign="top">

deprecated key: `C_TRANSACTION_HELPER_TRANSIENT_CONTEXT_MESSAGE` 



</td>
<td valign="top">

This key has been deprecated. The regular message handling flow will be invoked in case of any errors.



</td>
<td valign="top">

Error message short text when a user enters a value in the field of an object page but the back-end update cannot be done due to availability or connection issues.



</td>
<td valign="top">

 



</td>
</tr>
<tr>
<td valign="top">

deprecated key: `C_TRANSACTION_HELPER_TRANSIENT_CONTEXT_DESCRIPTION` 



</td>
<td valign="top">

This key has been deprecated. The regular message handling flow will be invoked in case of any errors.



</td>
<td valign="top">

Error message description/detail text when a user enters a value in the field of an object page but the back-end update cannot be done due to availability or connection issues.



</td>
<td valign="top">

 



</td>
</tr>
<tr>
<td valign="top">

`C_TRANSACTION_HELPER_CONFIRM_DELETE_WITH_SINGLE_OBJECT_LOCKED`

\(deprecated key: `C_TRANSACTION_HELPER_OBJECT_PAGE_CONFIRM_DELETE_WITH_SINGLE_OBJECT_LOCKED`\)



</td>
<td valign="top">

This object is currently locked by \{0\} so it cannot be deleted.



</td>
<td valign="top">

Message to indicate that the object is currently locked and cannot be deleted.

Parameter: \{0\} = user who has locked the object



</td>
<td valign="top">

Applications should overwrite the default text with the concrete object.



</td>
</tr>
<tr>
<td valign="top">

`C_TRANSACTION_HELPER_CONFIRM_DELETE_WITH_OBJECTINFO`

\(deprecated key: `C_TRANSACTION_HELPER_OBJECT_PAGE_CONFIRM_DELETE_WITH_OBJECTINFO`\)



</td>
<td valign="top">

Delete this object \(\{0\} \{1\}\)?



</td>
<td valign="top">

Message text used in the confirmation message box when a user clicks the *Delete* button after selecting exactly one object that has a title \(and optionally a description\).

Parameters: \{0\} = `UI.HeaderInfo.Title`, \{1\} = `UI.HeaderInfo.Description`.

The following logic is applied:

-   If `HeaderInfo.Title` is not annotated, then the text is taken from `C_TRANSACTION_HELPER_CONFIRM_DELETE_WITH_OBJECTTITLE_SINGULAR`.

-   If `HeaderInfo.Title` is annotated but not present in the context, then the semantic key is used if it is singular and present in the context

    -   If there is no semantic key, the technical key is used if it is singular and present in the context

    -   If there is no technical key, then the text is taken from `C_TRANSACTION_HELPER_CONFIRM_DELETE_WITH_OBJECTTITLE_SINGULAR`





</td>
<td valign="top">

 



</td>
</tr>
<tr>
<td valign="top">

`C_TRANSACTION_HELPER_CONFIRM_DELETE_WITH_OBJECTTITLE_SINGULAR`

\(deprecated key: `C_TRANSACTION_HELPER_OBJECT_PAGE_CONFIRM_DELETE_WITH_OBJECTTITLE_SINGULAR`\)



</td>
<td valign="top">

Delete this object?



</td>
<td valign="top">

Message text used in the confirmation message box when a user clicks the *Delete* button to delete a single selected object that has no title.



</td>
<td valign="top">

Applications should overwrite the default text with the concrete object.



</td>
</tr>
<tr>
<td valign="top">

`C_TRANSACTION_HELPER_CONFIRM_DELETE_WITH_OBJECTTITLE_PLURAL`

\(deprecated key: `C_TRANSACTION_HELPER_OBJECT_PAGE_CONFIRM_DELETE_WITH_OBJECTTITLE_PLURAL`\)



</td>
<td valign="top">

Delete the selected objects?



</td>
<td valign="top">

Message text used in the confirmation message box when a user clicks the *Delete* button to delete multiple selected objects.



</td>
<td valign="top">

Applications should overwrite the default text with the concrete objects.



</td>
</tr>
<tr>
<td valign="top">

`C_TRANSACTION_HELPER_CONFIRM_DELETE_WITH_UNSAVED_CHANGES`

\(deprecated key: `C_TRANSACTION_HELPER_OBJECT_PAGE_CONFIRM_DELETE_WITH_UNSAVED_CHANGES`\)



</td>
<td valign="top">

The selected object has unsaved changes by \{0\}.

Delete anyway?



</td>
<td valign="top">

Message text used in the confirmation message box when a user clicks the *Delete* button to delete a single selected object that has unsaved changes from another user.

Parameter: \{0\} = user name



</td>
<td valign="top">

Applications should overwrite the default text with the concrete object.



</td>
</tr>
<tr>
<td valign="top">

`C_TRANSACTION_HELPER_CONFIRM_DELETE_WITH_UNSAVED_CHANGES_MULTIPLE_OBJECTS`

\(deprecated key: `C_TRANSACTION_HELPER_OBJECT_PAGE_CONFIRM_DELETE_WITH_UNSAVED_CHANGES_MULTIPLE_OBJECTS`\)



</td>
<td valign="top">

The selected objects have unsaved changes by other users.

Delete anyway?



</td>
<td valign="top">

Message text used in the confirmation message box when a user clicks the *Delete* button to delete multiple selected objects that have unsaved changes from another user.



</td>
<td valign="top">

Applications should overwrite the default text with the concrete object.



</td>
</tr>
<tr>
<td valign="top">

`C_TRANSACTION_HELPER_CONFIRM_DELETE_WITH_OBJECTTITLE_PLURAL_NON_DELETABLE`

\(deprecated key: `C_TRANSACTION_HELPER_OBJECT_PAGE_CONFIRM_DELETE_WITH_OBJECTTITLE_PLURAL_NON_DELETABLE`\)



</td>
<td valign="top">

Do you still want to delete the remaining objects?



</td>
<td valign="top">

Message text used in the confirmation message box when a user clicks the *Delete* button for multiple selected objects, some of which cannot be deleted.



</td>
<td valign="top">

Applications should overwrite the default text with the concrete objects.



</td>
</tr>
<tr>
<td valign="top">

`C_TRANSACTION_HELPER_CONFIRM_DELETE_WITH_OBJECTTITLE_SINGULAR_NON_DELETABLE`

\(deprecated key: `C_TRANSACTION_HELPER_OBJECT_PAGE_CONFIRM_DELETE_WITH_OBJECTTITLE_SINGULAR_NON_DELETABLE`\)



</td>
<td valign="top">

Do you still want to delete the remaining object?



</td>
<td valign="top">

Message text used in the confirmation message box when a user clicks the *Delete* button for multiple selected objects, only one of which can be deleted.



</td>
<td valign="top">

Applications should overwrite the default text with the concrete object.



</td>
</tr>
<tr>
<td valign="top">

 `C_TRANSACTION_HELPER_CONFIRM_DELETE_WITH_OBJECTINFO_AND_ONE_OBJECT_NON_DELETABLE` 



</td>
<td valign="top">

1 out of \{0\} selected objects has delete restrictions so it cannot be deleted.



</td>
<td valign="top">

Message text used in the confirmation message box when a user clicks the *Delete* for multiple selected objects, of which one cannot be deleted.

Parameter: \{0\} = number of selected objects



</td>
<td valign="top">

Applications should overwrite the default text with the concrete object.



</td>
</tr>
<tr>
<td valign="top">

`C_TRANSACTION_HELPER_CONFIRM_DELETE_WITH_OBJECTINFO_AND_FEW_OBJECTS_NON_DELETABLE`

\(deprecated key: `C_TRANSACTION_HELPER_OBJECT_PAGE_CONFIRM_DELETE_WITH_OBJECTINFO_AND_FEW_OBJECTS_NON_DELETABLE`\)



</td>
<td valign="top">

\{0\} out of \{1\} selected objects have delete restrictions so they cannot be deleted.



</td>
<td valign="top">

Message text used in the confirmation message box when a user clicks the *Delete* button for multiple selected objects, only some of which can be deleted.

Parameters: \{0\} = number of objects that cannot be deleted, \{1\} = total number of selected objects



</td>
<td valign="top">

Applications should overwrite the default text with the concrete object.



</td>
</tr>
<tr>
<td valign="top">

`C_TRANSACTION_HELPER_CONFIRM_DELETE_WITH_OBJECTINFO_AND_FEW_OBJECTS_LOCKED`

\(deprecated key: `C_TRANSACTION_HELPER_OBJECT_PAGE_CONFIRM_DELETE_WITH_OBJECTINFO_AND_FEW_OBJECTS_LOCKED_AND_NON_DELETABLE`\)



</td>
<td valign="top">

\{0\} out of \{1\} objects are currently locked so they cannot be deleted.



</td>
<td valign="top">

Message text used in the confirmation message box when a user clicks the *Delete* button.

Parameters: \{0\} = number of objects that are locked, \{1\} = number of selected objects



</td>
<td valign="top">

Applications should overwrite the default text with the concrete object.



</td>
</tr>
<tr>
<td valign="top">

`C_TRANSACTION_HELPER_CONFIRM_DELETE_WITH_OBJECTINFO_AND_ONE_OBJECT_LOCKED`

\(deprecated key: `C_TRANSACTION_HELPER_OBJECT_PAGE_CONFIRM_DELETE_WITH_OBJECTINFO_AND_ONE_OBJECT_LOCKED_AND_NON_DELETABLE`\)



</td>
<td valign="top">

1 out of \{0\} selected objects is currently locked by \{1\} so it cannot be deleted.



</td>
<td valign="top">

Message text used in the confirmation message box when a user clicks the *Delete* button.

Parameters: \{0\} = number of selected objects, \{1\} = user who has the lock on the object



</td>
<td valign="top">

Applications should overwrite the default text with the concrete object.



</td>
</tr>
<tr>
<td valign="top">

`C_TRANSACTION_HELPER_CONFIRM_DELETE_WITH_UNSAVED_AND_FEW_OBJECTS_LOCKED_SINGULAR`

\(deprecated key: `C_TRANSACTION_HELPER_OBJECT_PAGE_CONFIRM_DELETE_WITH_UNSAVED_AND_FEW_OBJECTS_LOCKED_SINGULAR`\)



</td>
<td valign="top">

The remaining object has unsaved changes made by \{0\}.

Do you still want to delete it?



</td>
<td valign="top">

Warning message text on the delete popover when a user tries to delete an object that has unsaved changes from another user.

Parameters: \{0\} = user who has unsaved changes on the object.



</td>
<td valign="top">

Applications should overwrite the default text with the concrete object.



</td>
</tr>
<tr>
<td valign="top">

`C_TRANSACTION_HELPER_CONFIRM_DELETE_WITH_UNSAVED_AND_FEW_OBJECTS_LOCKED_PLURAL`

\(deprecated key: `C_TRANSACTION_HELPER_OBJECT_PAGE_CONFIRM_DELETE_WITH_UNSAVED_AND_FEW_OBJECTS_LOCKED_PLURAL`\)



</td>
<td valign="top">

The remaining objects have unsaved changes made by other users.

Do you still want to delete them?



</td>
<td valign="top">

Warning message text on the delete popover when a user tries to delete multiple selected objects out of which more than one have unsaved changes from other users.



</td>
<td valign="top">

Applications should overwrite the default text with the concrete object.



</td>
</tr>
<tr>
<td valign="top">

`C_TRANSACTION_HELPER_CONFIRM_DELETE_WITH_OBJECTINFO_AND_FEW_OBJECTS_UNSAVED_SINGULAR`

\(deprecated key: `C_TRANSACTION_HELPER_OBJECT_PAGE_CONFIRM_DELETE_WITH_OBJECTINFO_AND_FEW_OBJECTS_UNSAVED_SINGULAR`\)



</td>
<td valign="top">

Also delete objects with unsaved changes by \{0\}?



</td>
<td valign="top">

Text used for the checkbox in the delete confirmation dialog to confirm if a user also wants to delete the single object from the selected objects that has changes from other users.

Parameters: \{0\} = user who has unsaved changes on the object.



</td>
<td valign="top">

Applications should overwrite the default text with the concrete object.



</td>
</tr>
<tr>
<td valign="top">

`C_TRANSACTION_HELPER_CONFIRM_DELETE_WITH_OBJECTINFO_AND_FEW_OBJECTS_UNSAVED_PLURAL`

\(deprecated key: `C_TRANSACTION_HELPER_OBJECT_PAGE_CONFIRM_DELETE_WITH_OBJECTINFO_AND_FEW_OBJECTS_UNSAVED_PLURAL`\)



</td>
<td valign="top">

Also delete objects with unsaved changes by other users?



</td>
<td valign="top">

Text used for the checkbox in the delete confirmation dialog to confirm if a user also wants to delete those objects from the selected objects that have changes from other users.



</td>
<td valign="top">

Applications should overwrite the default text with the concrete object.



</td>
</tr>
<tr>
<td valign="top">

`C_TRANSACTION_HELPER_DELETE_TOAST_SINGULAR`

\(deprecated key: `C_TRANSACTION_HELPER_OBJECT_PAGE_DELETE_TOAST_SINGULAR`\)



</td>
<td valign="top">

Object was deleted.



</td>
<td valign="top">

Message toast text when an object has been deleted successfully.



</td>
<td valign="top">

Applications should overwrite the default text with the concrete object.



</td>
</tr>
<tr>
<td valign="top">

`C_TRANSACTION_HELPER_DELETE_TOAST_PLURAL`

\(deprecated key: `C_TRANSACTION_HELPER_OBJECT_PAGE_DELETE_TOAST_PLURAL`\)



</td>
<td valign="top">

Objects were deleted.



</td>
<td valign="top">

Message toast text when multiple objects have been deleted successfully.



</td>
<td valign="top">

Applications should overwrite the default text with the concrete object.



</td>
</tr>
<tr>
<td valign="top">

 `C_COMMON_OBJECT_PAGE_CANCEL` 



</td>
<td valign="top">

Cancel



</td>
<td valign="top">

Cancel button text on the object page.



</td>
<td valign="top">

 



</td>
</tr>
<tr>
<td valign="top">

 `C_TRANSACTION_HELPER_OBJECT_CREATED` 



</td>
<td valign="top">

Object was created



</td>
<td valign="top">

Message toast text that is displayed after a user clicks the *Create* button on the object page.



</td>
<td valign="top">

Applications should overwrite the default text with the concrete object.



</td>
</tr>
<tr>
<td valign="top">

 `C_TRANSACTION_HELPER_OBJECT_SAVED` 



</td>
<td valign="top">

Object was saved



</td>
<td valign="top">

Message toast text that is displayed after a user clicks the *Save* button on the object page.



</td>
<td valign="top">

Applications should overwrite the default text with the concrete object.



</td>
</tr>
<tr>
<td valign="top">

 `C_TRANSACTION_HELPER_DRAFT_DISCARD_MESSAGE` 



</td>
<td valign="top">

Discard all changes?



</td>
<td valign="top">

 *Discard* button popover text on the object page when there are unsaved changes and the user clicks *Cancel*.



</td>
<td valign="top">

 



</td>
</tr>
<tr>
<td valign="top">

 `C_TRANSACTION_HELPER_DRAFT_DISCARD_BUTTON` 



</td>
<td valign="top">

Discard



</td>
<td valign="top">

 *Discard* button text on the object page when there are unsaved changes and the user clicks *Cancel*.



</td>
<td valign="top">

 



</td>
</tr>
<tr>
<td valign="top">

`T_TABLE_AND_CHART_NO_DATA_TEXT`

\(deprecated key: `T_OP_TABLE_AND_CHART_NO_DATA_TEXT`\)



</td>
<td valign="top">

To start, set the relevant filters and choose "Go".



</td>
<td valign="top">

Text that is shown on a table and chart when they are loaded but no search has been triggered yet.



</td>
<td valign="top">

 



</td>
</tr>
<tr>
<td valign="top">

`T_TABLE_AND_CHART_NO_DATA_TEXT_WITH_FILTER`

\(deprecated key: `T_OP_TABLE_AND_CHART_NO_DATA_TEXT_WITH_FILTER`\)



</td>
<td valign="top">

No data found. Try adjusting the search or filter parameters.



</td>
<td valign="top">

Text that is shown on a table and chart when a search is triggered but no data could be found with the current filter settings.



</td>
<td valign="top">

 



</td>
</tr>
<tr>
<td valign="top">

`M_TABLE_AND_CHART_NO_DATA_TEXT_MULTI_VIEW`

\(deprecated key: `M_OP_TABLE_AND_CHART_NO_DATA_TEXT_WITH_FILTER_MULTI_VIEW`\)



</td>
<td valign="top">

There are no items for the selected filter criteria and view.



</td>
<td valign="top">

Text that is shown in case of multi-view scenarios when no data is found for the current view.



</td>
<td valign="top">

Applications can overwrite the default text with a more suitable text for their specific use case.



</td>
</tr>
<tr>
<td valign="top">

`M_TABLE_AND_CHART_NO_FILTERS_NO_DATA_TEXT`

\(deprecated key: `M_OP_TABLE_AND_CHART_OP_NO_FILTERS_NO_DATA_TEXT`\)



</td>
<td valign="top">

No items available.



</td>
<td valign="top">

Text that is shown on an object page or a subobject page when no filters are applied and no data is found.



</td>
<td valign="top">

Applications can overwrite the default text with a more suitable text for their specific use case.



</td>
</tr>
<tr>
<td valign="top">

 `C_ROUTING_NAVIGATION_DISABLED_TITLE` 



</td>
<td valign="top">

Navigation is currently not possible.



</td>
<td valign="top">

Text that is shown when the navigation cannot be completed successfully.



</td>
<td valign="top">

 



</td>
</tr>
<tr>
<td valign="top">

 `T_ANNOTATION_HELPER_DEFAULT_OBJECT_PAGE_HEADER_TITLE_NO_HEADER_INFO` 



</td>
<td valign="top">

\(Unnamed Object\)



</td>
<td valign="top">

Default header title for the object page if no header information is available.



</td>
<td valign="top">

 



</td>
</tr>
<tr>
<td valign="top">

 `C_DRAFT_OBJECT_PAGE_DRAFT_UNSAVED_CHANGES` 



</td>
<td valign="top">

Another user edited this object without saving the changes: \{0\}

If you start editing, those changes will be lost.



</td>
<td valign="top">

Text that is shown in the confirmation dialog box when a user clicks the *Edit* button on an object page that has unsaved changes made by another user. \(\{0\} refers to the user name.\)



</td>
<td valign="top">

Applications should overwrite the default text with the concrete object.



</td>
</tr>
<tr>
<td valign="top">

 `C_DRAFT_OBJECT_PAGE_DRAFT_LOCKED_BY_USER` 



</td>
<td valign="top">

You can't edit this object at the moment.

It is locked by \{0\}.



</td>
<td valign="top">

Text that is shown to indicate that the object is currently locked and cannot be edited.



</td>
<td valign="top">

Applications should overwrite the default text with the concrete object.



</td>
</tr>
<tr>
<td valign="top">

 `T_ANNOTATION_HELPER_DEFAULT_OBJECT_PAGE_HEADER_TITLE` 



</td>
<td valign="top">

New



</td>
<td valign="top">

The default text "New" is appended with `UI.HeaderInfo.TypeName` to form the default title displayed in the object page header.



</td>
<td valign="top">

 



</td>
</tr>
<tr>
<td valign="top">

 `T_OP_OBJECT_PAGE_SAVE` 



</td>
<td valign="top">

Save



</td>
<td valign="top">

Save button text on the object page.



</td>
<td valign="top">

 



</td>
</tr>
<tr>
<td valign="top">

 `T_OP_OBJECT_PAGE_CREATE` 



</td>
<td valign="top">

Create



</td>
<td valign="top">

Create button text on the footer of the object page.



</td>
<td valign="top">

 



</td>
</tr>
<tr>
<td valign="top">

 `T_OP_RELATED_APPS` 



</td>
<td valign="top">

Related Apps



</td>
<td valign="top">

Drop-down menu for the list of related apps.



</td>
<td valign="top">

Restriction: you can change the key only to *Open In...*



</td>
</tr>
<tr>
<td valign="top">

 `T_NEW_OBJECT` 



</td>
<td valign="top">

New Object



</td>
<td valign="top">

Text that is shown when applications create a new object and `UI.HeaderInfo.TypeName` is not found. This text is also shown in list report tables for such objects.



</td>
<td valign="top">

Applications should overwrite the object with a more specific name.



</td>
</tr>
<tr>
<td valign="top">

 `T_PAGINATOR_CONTROL_PAGINATOR_TOOLTIP_UP` 



</td>
<td valign="top">

Previous Item



</td>
<td valign="top">

Tooltip text that is displayed when the focus is on the "previous" paginator button on a subobject page.



</td>
<td valign="top">

Applications should overwrite the default text and replace "Item" with the concrete object.



</td>
</tr>
<tr>
<td valign="top">

 `T_PAGINATOR_CONTROL_PAGINATOR_TOOLTIP_DOWN` 



</td>
<td valign="top">

Next Item



</td>
<td valign="top">

Tooltip text that is displayed when the focus is on the "next" paginator button on a subobject page.



</td>
<td valign="top">

Applications should overwrite the default text and replace "Item" with the concrete object.



</td>
</tr>
<tr>
<td valign="top">

 `ST_DRAFT_DATALOSS_POPUP_MESSAGE_CREATE` 



</td>
<td valign="top">

You haven't created this object yet.

What would you like to do?



</td>
<td valign="top">

Text that is shown in the confirmation dialog when a user has created a new object in a draft-enabled application and triggers a navigation.



</td>
<td valign="top">

Applications should overwrite the default text and replace "object" with the concrete object.

Example: *You haven't created this sales order yet.*



</td>
</tr>
<tr>
<td valign="top">

 `ST_DRAFT_DATALOSS_CREATE_ENTITY_TOL` 



</td>
<td valign="top">

Create the object.



</td>
<td valign="top">

Text that is shown below the *Create* option in the confirmation dialog.



</td>
<td valign="top">

Applications should overwrite the default text and replace "object" with the concrete object.

Example: *Create the sales order.*



</td>
</tr>
<tr>
<td valign="top">

 `ST_DRAFT_DATALOSS_POPUP_MESSAGE_SAVE` 



</td>
<td valign="top">

You've made changes to this object.

What would you like to do?



</td>
<td valign="top">

Text that is shown in the confirmation dialog when a user has edited an existing object in a draft-enabled application and triggers a navigation.



</td>
<td valign="top">

Applications should overwrite the default text and replace "object" with the concrete object.

Example: *You've made changes to this sales order.*



</td>
</tr>
<tr>
<td valign="top">

 `ST_DRAFT_DATALOSS_SAVE_DRAFT_TOL` 



</td>
<td valign="top">

Apply changes to the saved version.



</td>
<td valign="top">

Text that is shown below the *Save* option in the confirmation dialog.



</td>
<td valign="top">

 



</td>
</tr>
<tr>
<td valign="top">

 `FILTERBAR_EDITING_STATUS` 



</td>
<td valign="top">

Editing Status



</td>
<td valign="top">

Label of the filter field that is automatically added to the filter bar for draft-based services.



</td>
<td valign="top">

 



</td>
</tr>
<tr>
<td valign="top">

 `ACTION_PARAMETER_DIALOG_ACTION_NAME` 



</td>
<td valign="top">

 



</td>
<td valign="top">

Label of the action name in the action parameter dialog



</td>
<td valign="top">

 



</td>
</tr>
<tr>
<td valign="top">

 `C_MASS_EDIT_CONFIRM_MESSAGE` 



</td>
<td valign="top">

\{0\} of \{1\} \{3\} can't be edited.

Do you want to edit the remaining \{2\} \{3\}?



</td>
<td valign="top">

Text that is shown within the warning message box when some of the selected records in a mass edit scenario are not editable. \{0\} is the count of objects that are not editable. \{1\} is the total count of objects selected. \{2\} is the count of objects that can be edited. \{3\} is the value from `UI.HeaderInfo.TypeNamePlural`.



</td>
<td valign="top">

 



</td>
</tr>
<tr>
<td valign="top">

 `C_MASS_EDIT_CONFIRM_MESSAGE_DETAIL_REASON` 



</td>
<td valign="top">

Selected \{0\} are excluded if:



</td>
<td valign="top">

Text that is shown within warning message box when some of the selected objects in a mass edit scenario are not editable. \{0\} is the value from `UI.HeaderInfo.TypeNamePlural`.



</td>
<td valign="top">

 



</td>
</tr>
<tr>
<td valign="top">

 `C_MASS_EDIT_CONFIRM_MESSAGE_DETAIL_REASON_DRAFT` 



</td>
<td valign="top">

Somebody is working on the \{0\} \(a draft exists or changes haven't been saved\).



</td>
<td valign="top">

Text that is shown within the warning message box when some of the selected objects in a mass edit scenario are not editable. \{0\} is the value from `UI.HeaderInfo.TypeNamePlural`.



</td>
<td valign="top">

 



</td>
</tr>
<tr>
<td valign="top">

 `C_MASS_EDIT_CONFIRM_MESSAGE_DETAIL_REASON_NON_EDITABLE` 



</td>
<td valign="top">

Editing isn't allowed for the \{0\}.



</td>
<td valign="top">

Text that is shown within the warning message box when some of the selected objects in a mass edit scenario are not editable. \{0\} is the value from `UI.HeaderInfo.TypeNamePlural`.



</td>
<td valign="top">

 



</td>
</tr>
<tr>
<td valign="top">

 `C_TRANSACTION_HELPER_CONFIRM_DELETE_WITH_ALL_REMAINING_NON_DELETABLE` 



</td>
<td valign="top">

The remaining objects have delete restrictions so they cannot be deleted.



</td>
<td valign="top">

Text to indicate that none of the remaining objects can be deleted. This text is usually appended to text from another key that indicates why some of the selected records cannot be deleted.



</td>
<td valign="top">

Applications should overwrite the default text with the concrete objects.



</td>
</tr>
<tr>
<td valign="top">

 `C_TRANSACTION_HELPER_CONFIRM_DELETE_ONLY_DRAFT_OF_NON_DELETABLE_ACTIVE` 



</td>
<td valign="top">

Delete associated draft?



</td>
<td valign="top">

Text to confirm with the user if the associated own draft of the selected object should be deleted when the object is non-deletable.



</td>
<td valign="top">

Applications should overwrite the default text with the concrete object.



</td>
</tr>
<tr>
<td valign="top">

 `C_TRANSACTION_HELPER_CONFIRM_DELETE_ONLY_DRAFTS_OF_NON_DELETABLE_ACTIVE` 



</td>
<td valign="top">

Delete associated drafts?



</td>
<td valign="top">

Text to confirm with the user if the associated own drafts of the selected objects should be deleted when the objects are non-deletable.



</td>
<td valign="top">

Applications should overwrite the default text with the concrete objects.



</td>
</tr>
<tr>
<td valign="top">

 `C_TRANSACTION_HELPER_CONFIRM_DELETE_DRAFT_OF_NON_DELETABLE_ACTIVE` 



</td>
<td valign="top">

Also delete own draft of the non-deletable object?



</td>
<td valign="top">

Text to confirm with the user if their own draft associated with the selected objects should be deleted when all of the selected objects are non-deletable.



</td>
<td valign="top">

Applications should overwrite the default text with the concrete object.



</td>
</tr>
<tr>
<td valign="top">

 `C_TRANSACTION_HELPER_CONFIRM_DELETE_DRAFTS_OF_NON_DELETABLE_ACTIVE` 



</td>
<td valign="top">

Also delete own drafts of the non-deletable objects?



</td>
<td valign="top">

Text to confirm with the user if the associated own draft of the selected object should be deleted when there are many objects from the selected objects that are non-deletable but have their own draft.



</td>
<td valign="top">

Applications should overwrite the default text with the concrete object.



</td>
</tr>
<tr>
<td valign="top">

 `C_TRANSACTION_HELPER_CONFIRM_DELETE_WITH_SINGLE_AND_ONE_OBJECT_NON_DELETABLE` 



</td>
<td valign="top">

The selected object has delete restrictions so it cannot be deleted.



</td>
<td valign="top">

Text used when a single object \(with own draft\) is selected and this object is not deletable.



</td>
<td valign="top">

Applications should overwrite the default text with the concrete object.



</td>
</tr>
<tr>
<td valign="top">

 `C_TRANSACTION_HELPER_CONFIRM_DELETE_WITH_MULTIPLE_AND_ALL_OBJECT_NON_DELETABLE` 



</td>
<td valign="top">

The selected objects have delete restrictions so they cannot be deleted.



</td>
<td valign="top">

Text used when all selected objects are not deletable but at least one of them has its own draft.



</td>
<td valign="top">

Applications should overwrite the default text with the concrete object.



</td>
</tr>
<tr>
<td valign="top">

 `OBJECTPAGESTATE_ISSUE` 



</td>
<td valign="top">

The object contains issues



</td>
<td valign="top">

Error message text used in the message strip of an object page.



</td>
<td valign="top">

Applications should overwrite the default text and replace "object" with their concrete object.

Example: *This sales order contains issues.*



</td>
</tr>
<tr>
<td valign="top">

 `OBJECTPAGESTATE_ERROR` 



</td>
<td valign="top">

The object contains error messages



</td>
<td valign="top">

Error message text used in the message strip of an object page.



</td>
<td valign="top">

Applications should overwrite the default text and replace "object" with their concrete object.

Example: *This sales order contains error messages.*



</td>
</tr>
<tr>
<td valign="top">

 `OBJECTPAGESTATE_WARNING` 



</td>
<td valign="top">

The object contains warning messages



</td>
<td valign="top">

Warning message text used in the message strip of an object page.



</td>
<td valign="top">

Applications should overwrite the default text and replace "object" with their concrete object.

Example: *This sales order contains warning messages.*



</td>
</tr>
<tr>
<td valign="top">

 `OBJECTPAGESTATE_INFORMATION` 



</td>
<td valign="top">

The object contains information messages



</td>
<td valign="top">

Information text used in the message strip of an object page.



</td>
<td valign="top">

Applications should overwrite the default text and replace "object" with their concrete object.

Example: *This sales order contains information messages.*



</td>
</tr>
<tr>
<td valign="top">

 `M_ILLUSTRATEDMESSAGE_TITLE` 



</td>
<td valign="top">

No details available



</td>
<td valign="top">

Title of the popup that is shown when no details \(that is, no quick view annotations\) and no targets are found for a semantic object.



</td>
<td valign="top">

Applications can choose to overwrite the default text with a more specific one.



</td>
</tr>
<tr>
<td valign="top">

 `M_ILLUSTRATEDMESSAGE_DESCRIPTION` 



</td>
<td valign="top">

This may happen if your access is restricted or the data is incomplete.



</td>
<td valign="top">

Text used in the popup that is shown when no details \(that is, no quick view annotations\) and no targets are found for a semantic object.



</td>
<td valign="top">

Applications can choose to overwrite the default text with a more specific one.



</td>
</tr>
</table>



### Adding a New Resource in the Properties File

Provide the new custom texts in this custom resource bundle with the same key as the one used by SAP Fiori elements \(from the allowed list provided above\). For example:

> ### Example:  
> -   SAP Fiori elements default values \(resource bundle of SAP Fiori elements\):
> 
>     `C_OPERATIONS_ACTION_CONFIRM_MESSAGE=Do you really want to perform this action?`
> 
>     `C_TRANSACTION_HELPER_OBJECT_PAGE_CONFIRM_DELETE_WITH_OBJECTTITLE_PLURAL=Delete the selected objects?`
> 
>     `C_TRANSACTION_HELPER_OBJECT_PAGE_CONFIRM_DELETE_WITH_OBJECTTITLE_SINGULAR=Delete this object?`
> 
> -   Text values from `i18n/customSalesOrderLR.properties` \(custom resource bundle of the application\):
> 
>     `C_OPERATIONS_ACTION_CONFIRM_MESSAGE|SalesOrderManage|ReturnInProcess=Can you please confirm if you really want to trigger the returns?`
> 
>     `C_TRANSACTION_HELPER_OBJECT_PAGE_CONFIRM_DELETE_WITH_OBJECTTITLE_PLURAL|SalesOrderManage=Do you want to delete the selected Sales Orders?`
> 
>     `C_TRANSACTION_HELPER_OBJECT_PAGE_CONFIRM_DELETE_WITH_OBJECTTITLE_SINGULAR|SalesOrderManage=Do you want to delete this Sales Order?`
> 
>     Since the application has defined new texts for the above-mentioned resources, while triggering the confirmation action *Returns in Process*, we see the custom text: "Can you please confirm if you really want to trigger the returns?" instead of "Are you sure that you want to execute this action?" in the action parameter popup.



### Manifest Changes

Changes must be made in the manifest file of the application. Add `enhanceI18n` to the `settings` of the corresponding section as shown in the following code sample:

> ### Sample Code:  
> ```json
> {
>    ...
>    ...
>    "targets": {
>     "SalesOrderManageList": {
>         "type": "Component",
>         "id": "SalesOrderManageList",
>         "name": "sap.fe.templates.ListReport",
>         "options": {
>             "settings": {
>                 "entitySet": "SalesOrderManage",
>                 "enhanceI18n": "i18n/customSalesOrderLR.properties", // This is the line to be added - it provides Fiori Elements with the name of the custom resource bundle
>                 ...
>                 ...
>                 ...
>             }
>         }
>     }
>    }
>    ...
>    ...
> }
> ```



### Format of Custom Keys

For resources that are not shared across multiple entities or by multiple controls \(for example, you want the same OK text in all OK confirmation popovers\), don't append anything to the existing key.

> ### Example:  
> `C_COMMON_DIALOG_OK=OK?` \(resource bundle of SAP Fiori elements\)
> 
> `C_COMMON_DIALOG_OK=Okie?` \(custom resource bundle of the application\)

For resources that are shared across multiple entity sets, append the navigation property name \(for navigation entity sets\) or the entity set name \(in case of main entity\). For instance, you want different delete messages based on the entity being deleted.

> ### Example:  
> `C_TRANSACTION_HELPER_OBJECT_PAGE_CONFIRM_DELETE_WITH_OBJECTTITLE_SINGULAR=Delete this object?` \(resource bundle of SAP Fiori elements\)
> 
> `C_TRANSACTION_HELPER_OBJECT_PAGE_CONFIRM_DELETE_WITH_OBJECTTITLE_SINGULAR|_Items=Do you want to delete this Sales Order Item?` 

For overriding actions that have parameters, some of the text in the action parameter popovers can be overridden. Confirmation actions also get a confirmation popover that has text that can be overridden. To override these texts, the action name along with the entity set name has to be provided. This is a mandatory piece of information, even if the application needs the custom text for an action that is used in only 1 entity set. If the entity set name is not appended, the resource bundle text from SAP Fiori elements is used as a fallback.

> ### Note:  
> To override the text with a key from a navigation entity set, you must use the navigation property name instead of the entity set name of the navigation entity. In the above example, `_Items` is the navigation property set name of the navigation entity `Items`.

> ### Example:  
> `C_OPERATIONS_ACTION_CONFIRM_MESSAGE=Are you sure that you want to execute this action?`
> 
> \(resource bundle of SAP Fiori elements - this text is shown for all confirmation actions, irrespective of the action name or the entity\)
> 
> `C_OPERATIONS_ACTION_CONFIRM_MESSAGE|SalesOrderManage|ReturnInProcess=Can you please confirm if you really want to trigger the returns?`

In the above example, the developer wants to show the custom message only when a user clicks the `ReturnsInProcess` action of the `SalesOrderManage` entity set. For a second action in the same entity set the last part of the key is different, since the action name is different.

If the action name is the same but the entity differs, then the second part of the key name above is different and SAP Fiori elements uses the correct key based on the entity set to which the clicked action is associated.

> ### Example:  
> `C_OPERATIONS_ACTION_CONFIRM_MESSAGE|_Items|ReturnInProcess=Can you please confirm if you really want to trigger the returns for the chosen items?` 

