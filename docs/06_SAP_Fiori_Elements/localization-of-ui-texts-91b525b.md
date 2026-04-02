<!-- loio91b525b1bb694d0680e980ac254f2a3c -->

# Localization of UI Texts

You can replace standard UI texts for apps you've created with SAP Fiori elements.

> ### Note:  
> For information about SAP Fiori elements for OData V4, see [Localization of UI Texts](localization-of-ui-texts-b8cb649.md).

Standard texts are available in the generic framework \(for example, the button texts for draft concepts\) and belong to the template components \(for example, the list report page and the object page\). The following sections describe how you can replace the texts in your generated apps.

Standard texts can be overwritten by application-specific texts.

Perform the following steps to replace the standard UI texts:

1.  Find or add a resource file to your application.

2.  Search for the text that you would like to change.

3.  Copy the corresponding key and text to your resource file.

4.  Adapt the text as required.


> ### Note:  
> To save translation costs, don't copy and redefine more texts than needed.



<a name="loio91b525b1bb694d0680e980ac254f2a3c__section_hf2_zhc_tgc"/>

## Overriding Texts from Annotations

You can override the texts that come from annotations. To do so, the annotation must refer to the i18n key that is used in the application's `i18n` file:

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

For the annotation example above, the application's i18n properties file must have the key `CopyActionText=Copy Selected Item`. In addition, the model should have the `@i18n` model defined within the `manifest.json` file.

> ### Sample Code:  
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
> For example, if the back-end system is based onSAP NetWeaver 7.51 or lower \(SAP S/4HANA\) or on SAP NetWeaver 7.67 or lower \(SAP S/4HANA Cloud Public Edition\), you can't add `UI.ReferenceFacet` in the back end. In such a case, a modification to the *Reference Facet* label is only possible by modifying the local annotation file as described above.



<a name="loio91b525b1bb694d0680e980ac254f2a3c__section_jxn_kgh_2nb"/>

## Localization Keys

When you have created your specific application component, for example in SAP Fiori tools, standard texts are available from a specific template component \(for example, `i18n` file within `sap.suite.ui.generic.template.ListReport`\) and from the generic template component \(for example, i18n file within `sap.suite.ui.generic.template.lib`\).

Texts from the *Generic Application Component* can't be replaced.

You can use the custom `i18n` file approach to override any keys that are mentioned in the following tables:


<table>
<tr>
<th valign="top" colspan="3">

**List Report Page Specific Key from `..>>lib>i18n`**

</th>
</tr>
<tr>
<th valign="top">

Key

</th>
<th valign="top">

Default Text in SAP Fiori elements 

</th>
<th valign="top">

Used In

</th>
</tr>
<tr>
<td valign="top">

`ST_GENERIC_UNSAVED_CHANGES_CHECKBOX` 

</td>
<td valign="top">

Also delete objects with unsaved changes.

</td>
<td valign="top">

Text displayed in the delete dialog when a user selects multiple objects, some of which have unsaved changes from other users. This dialog provides a checkbox that allows users to include or exclude these objects with unsaved changes.

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

Text displayed in the delete dialog when a user selects all active objects or their own draft objects from the list report page.

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

Text displayed in the delete dialog when a user selects an object that include unsaved changes made by another user. The user can still delete the object.

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

Text displayed in the delete dialog when a user selects more than one object that includes unsaved changes made by another user. The user can still delete the object.

</td>
</tr>
<tr>
<td valign="top">

`ST_GENERIC_DELETE_LOCKED` 

</td>
<td valign="top">

This object cannot be deleted. It is currently locked by \{1\}.

</td>
<td valign="top">

Text displayed in the confirmation message box when a user selects an object that is locked by another user.

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

Text displayed in the confirmation message box when a user tries to delete an object that is non-deletable.

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

Text displayed in the confirmation message box when a user selects multiple objects that are locked by another user and tries to delete them.

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

Text displayed in the delete dialog when a user tries to delete the selected records, but some of the objects can't be deleted.

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

Text displayed in the delete dialog when some of the selected objects are locked by other users and can't be deleted.

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

Text displayed in the confirmation dialog when a user selects some objects that are either locked or cannot be deleted. However, one of the selections can be deleted.

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

Text displayed in the confirmation dialog when a user selects some objects that are either locked or cannot be deleted. However, some of the selections can be deleted.

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

Text displayed in the confirmation dialog when a user select some objects that are either locked or cannot be deleted. Some of the selected objects can be deleted, but it contains unsaved changes made by another user.

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

Text displayed in the confirmation dialog when a user selects some objects that are either locked or cannot be deleted. Some of the selected objects can be deleted, but it contains unsaved changes made by another user.

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

Text displayed in the message toast when multiple objects are successfully deleted.

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

Text displayed in the message toast when an object can't be deleted from the back end.

</td>
</tr>
</table>


<table>
<tr>
<th valign="top" colspan="3">

**List Report Page Specific Key from `..>>ListReport>i18n`**

</th>
</tr>
<tr>
<th valign="top">

Key

</th>
<th valign="top">

Default Text in SAP Fiori elements 

</th>
<th valign="top">

Used In

</th>
</tr>
<tr>
<td valign="top">

`CREATE_OBJECT` 

</td>
<td valign="top">

Create

</td>
<td valign="top">

Label for creating buttons on the list report page.

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

Title for the *Create* dialog if `createWithParameterDialog` is configured.

Application developers can set the title to "Create Order" or "Create Contract", for example.

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

Used in a message box that is displayed on the list report page after a partial update, in case of mass edit.

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

Title for the `NewAction` parameter dialog on the list report page.

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

Label for a button within the `NewAction` parameter dialog on the list report page.

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

Title for mass edit dialog on the list report page.

Application developers can set the title to "Edit Purchase Orders \(\{0\}\)", for example.

</td>
</tr>
</table>


<table>
<tr>
<th valign="top" colspan="3">

**Key from `..>>ObjectPage>i18n`**

</th>
</tr>
<tr>
<th valign="top">

Key

</th>
<th valign="top">

Default Text in SAP Fiori elements 

</th>
<th valign="top">

Used In

</th>
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

Text displayed in the confirmation dialog when a user chooses *Edit* on the object page that was locked and the lock expired.

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

Text displayed in a message toast when a user chooses to save and the object is saved successfully.

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

Text displayed in a message toast when a user successfully creates a subobject or an item.

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

You haven't made any changes.

</td>
<td valign="top">

Text displayed in a message toast when a user chooses *Save* and the object has no unsaved changes.

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

Text displayed in a message box when an object is successfully created.

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

Text displayed in the delete dialog when both the title and description are available for the object, and the application is open in flexible column layout mode.

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

Text displayed in the delete dialog when a title is available for the object, and the application is open in full screen mode.

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

Text displayed in the delete dialog when a user selects items without a title and description from the smart table in the subobject page, and chooses *Delete* on the smart table toolbar.

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

Text displayed in the delete dialog when the title and description is available, and the subobject page is open in flexible column layout mode.

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

Text displayed in the delete dialog when a user selects items in the object page smart table in full screen mode, and the title is defined.

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

Text displayed in the delete dialog when a user selects items from the smart table in the object page and chooses to delete them.

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

Text displayed in the message toast when a user successfully deletes multiple items from the smart table in the object page.

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

Text displayed in the message toast when a user successfully deletes a single item from the smart table on the object page.

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

Text displayed in the message toast when an item is successfully deleted from the table on the object page.

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

Text displayed in a message popover when the application developer configures the `InsertRestriction` annotation to make certain fields mandatory. This is applicable only in non-draft scenarios.

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

Title text displayed in the create dialog when `createWithParameterDialog` is configured on an object page table of a non-draft application. Application developers can change titles to, for example, "Create Sales Order Item".

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

Tooltip text that is displayed when the focus is on the previous paginator button on a subobject page.

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

Tooltip text that is displayed when the focus is on the next paginator button on a subobject page.

</td>
</tr>
</table>


<table>
<tr>
<th valign="top" colspan="3">

**Object Page and Subobject Page Key from `..>>lib>i18n`**

</th>
</tr>
<tr>
<th valign="top">

Key

</th>
<th valign="top">

Default Text in SAP Fiori elements 

</th>
<th valign="top">

Used In

</th>
</tr>
<tr>
<td valign="top">

`ST_GENERIC_DELETE_SELECTED` 

</td>
<td valign="top">

Delete this object?

</td>
<td valign="top">

Text displayed within the delete dialog when a user deletes an object \(without an object title\) by choosing *Delete* on the object page header.

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

Text displayed in the confirmation dialog when a user selects an object to edit that is locked by another user.

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

Text displayed in the delete dialog when a user deletes an object with a title.

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
<td valign="top">

`REQUIRED_PROP_ERROR|<EntitySet>|<navigationProperty>| com.sap.vocabularies.UI.v1.LineItem|<Required Property Name>` 

</td>
<td valign="top">

Enter a value.

</td>
<td valign="top">

Text displayed when the value for a required field is missing and so the draft cannot be created. The required field is highlighted with a red border.

</td>
</tr>
</table>


<table>
<tr>
<th valign="top" colspan="3">

**List Report Page, Object Page, and Analytical List Page Key from `..>>lib>i18n`**

</th>
</tr>
<tr>
<th valign="top">

Key

</th>
<th valign="top">

Default Text in SAP Fiori elements 

</th>
<th valign="top">

Used In

</th>
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

When an object has unsaved changes from another user, an icon is displayed in the key field column of the list report page, and next to the title on the object page. When the user chooses the icon, a popup appears with this message.

</td>
</tr>
<tr>
<td valign="top">

`NEW_OBJECT` 

</td>
<td valign="top">

New Object

</td>
<td valign="top">

The header title for newly created draft objects in draft-enabled apps and for unsaved objects in non-draft apps.

</td>
</tr>
<tr>
<td valign="top">

`UNNAMED_OBJECT` 

</td>
<td valign="top">

Unnamed Object

</td>
<td valign="top">

The header title for draft objects in edit mode.

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

Warning message text displayed on the delete popover when a user tries to delete multiple items at once, but the deletion cannot proceed because a 412 confirmation is required for some of the selected items.

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

Warning message text on the delete popover informing the user that some of the objects are not deletable as the deletion has failed in the back end in case of multi-select delete.

Warning message text on the delete popover when a user tries to delete multiple objects at once, but the deletion cannot proceed because some objects cannot be deleted as the deletion failed in the back end.

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

Warning message text on the delete popover when a user tries to delete multiple objects at once, indicating the deletion has failed in the back end for some objects, and as a result of a genetic error, the entire batch has failed.

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

Message text displayed for multi-select function import actions, when the action fails in the back end

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

Message text displayed for multi-select function import actions. In this case, the action fails in the back end for some of the selected objects, and as a result, the entire batch fails.

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

Message text displayed for multi-select function import actions. In this case, the action shows a warning for some of the selected objects, and as a result, the entire batch fails.

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

Text displayed in the message strip above the smart table on the list report page when a user sets filters that aren't relevant for the selected tab in multiple table mode, on a desktop, or a large screen device.

Text displayed in a message strip above the smart table on the list report page when a user applies filters that aren't relevant for the selected tab in multiple table mode, on a desktop, or a large-screen device.

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

Text displayed in the message strip above the smart table on the list report page when a user selects a filter that isn't relevant for the selected tab in multiple table mode, on a mobile, or a small-screen device.

</td>
</tr>
<tr>
<td valign="top">

`MESSAGE_MULTIPLE_VALUES_L_FORM` 

</td>
<td valign="top">

Some of the filters aren't relevant for the tab \\"\{1\}\\" \(\{0\}\). Setting these filters has no effect on the results.

</td>
<td valign="top">

Text displayed in the message strip above the smart table on the list report page when a user selects a filter that isn't relevant for the selected tab in multiple table mode, on a desktop, or a large-screen device.

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

Text displayed in the message strip above the smart table on the list report page when a user selects a filter that isn't relevant for the selected tab in multiple table mode, on a mobile, or a small-screen device.

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

Text displayed within the discard confirmation dialog when a user navigates away while editing a draft with unsaved changes.

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
<td valign="top">

`ACTION_CONFIRM` 

</td>
<td valign="top">

Confirm this action?

</td>
<td valign="top">

Text within the confirmation dialog that comes up when a user chooses on an action that requires confirmation.

> ### Note:  
> The `ACTION_CONFIRM` key can also be interpreted as `ACTION_CONFIRM|<EntitySetName><ActionName>`.
> 
> Add the key-value pair and the message text to the`i18n.properties` file of your application. An example of a message box text for confirming an action question can be as follows:`ACTION_CONFIRM|STTA_C_MP_ProductActivation = Confirm activation?`



</td>
</tr>
<tr>
<td valign="top">

`SMARTCHART_INITIAL_NODATA_ILLUSTRATION_TITLE`

</td>
<td valign="top">

Let's get some results

</td>
<td valign="top" rowspan="2">

Illustrated message text displayed when a chart on a list report page in multiple table mode contains no data because the user hasn't chosen *Go*.

</td>
</tr>
<tr>
<td valign="top">

`SMARTCHART_INITIAL_NODATA_ILLUSTRATION_DESCRIPTION`

</td>
<td valign="top">

Start by providing your search or filter criteria.

</td>
</tr>
<tr>
<td valign="top">

`NOITEMS_LR_SMARTCHART_ILLUSTRATION_TITLE`

</td>
<td valign="top">

No results found

</td>
<td valign="top" rowspan="2">

Illustrated message text displayed when the filters applied to a chart on a list report page in multiple table mode return no data.

</td>
</tr>
<tr>
<td valign="top">

`NOITEMS_LR_SMARTCHART_ILLUSTRATION_DESCRIPTION`

</td>
<td valign="top">

Try changing the view or filter criteria.

</td>
</tr>
<tr>
<td valign="top">

`NOITEMS_SMARTCHART_ILLUSTRATION_TITLE`

</td>
<td valign="top">

There are no entries yet

</td>
<td valign="top" rowspan="2">

Illustrated message text displayed when a chart on an object page contains no data because the user hasn't chosen *Go*.

</td>
</tr>
<tr>
<td valign="top">

`NOITEMS_SMARTCHART_ILLUSTRATION_DESCRIPTION`

</td>
<td valign="top">

When there are, you'll see them here.

</td>
</tr>
<tr>
<td valign="top">

`NODATA_SMARTTABLE_LR_ILLUSTRATION_TITLE`

</td>
<td valign="top">

Let's get some results

</td>
<td valign="top" rowspan="2">

Illustrated message text displayed when a chart on a list report page contains no data because the user hasn't chosen *Go*.

</td>
</tr>
<tr>
<td valign="top">

`NODATA_SMARTTABLE_LR_ILLUSTRATION_DESCRIPTION`

</td>
<td valign="top">

Start by providing your search or filter criteria.

</td>
</tr>
<tr>
<td valign="top">

`NOITEMS_MULTIVIEW_LR_SMARTTABLE_WITH_FILTER_ILLUSTRATION_TITLE`

</td>
<td valign="top">

No results found

</td>
<td valign="top" rowspan="2">

Illustrated message text displayed when the filters applied to a table on a list report page in multiple table mode return no data.

</td>
</tr>
<tr>
<td valign="top">

`NOITEMS_MULTIVIEW_LR_SMARTTABLE_WITH_FILTER_ILLUSTRATION_DESCRIPTION`

</td>
<td valign="top">

Try changing the view or filter criteria.

</td>
</tr>
<tr>
<td valign="top">

`NOITEMS_LR_SMARTTABLE_ILLUSTRATION_TITLE`

</td>
<td valign="top">

No results found

</td>
<td valign="top" rowspan="2">

Illustrated message text displayed when the filters applied to a list report page table return no data.

</td>
</tr>
<tr>
<td valign="top">

`NOITEMS_LR_SMARTTABLE_ILLUSTRATION_DESCRIPTION`

</td>
<td valign="top">

Try changing your filter criteria.

</td>
</tr>
<tr>
<td valign="top">

`NOITEMS_LR_SMARTTABLE_WITH_FILTER_ILLUSTRATION_TITLE`

</td>
<td valign="top">

There are no entries yet

</td>
<td valign="top" rowspan="2">

Illustrated message text displayed when a table on a list report page contains no data because the user hasn't chosen *Go*.

</td>
</tr>
<tr>
<td valign="top">

`NOITEMS_LR_SMARTTABLE_WITH_FILTER_ILLUSTRATION_DESCRIPTION`

</td>
<td valign="top">

When there are, you'll see them here.

</td>
</tr>
<tr>
<td valign="top">

`NOITEMS_SMARTTABLE_WITH_FILTER_FOR_SEGMENTEDBUTTON_ILLUSTRATION_TITLE`

</td>
<td valign="top">

No results found

</td>
<td valign="top" rowspan="2">

Illustrated message text displayed when no data is available in the selected view of an object page table with segmented buttons.

</td>
</tr>
<tr>
<td valign="top">

`NOITEMS_SMARTTABLE_WITH_FILTER_FOR_SEGMENTEDBUTTON_ILLUSTRATION_DESCRIPTION`

</td>
<td valign="top">

Try changing the view or filter criteria.

</td>
</tr>
<tr>
<td valign="top">

`NOITEMS_SMARTTABLE_ILLUSTRATION_TITLE`

</td>
<td valign="top">

There are no entries yet

</td>
<td valign="top" rowspan="2">

Illustrated message text displayed when a table on an object page contains no data because the user hasn't chosen *Go*.

</td>
</tr>
<tr>
<td valign="top">

`NOITEMS_SMARTTABLE_ILLUSTRATION_DESCRIPTION`

</td>
<td valign="top">

When there are, you'll see them here.

</td>
</tr>
<tr>
<td valign="top">

`NOITEMS_SMARTTABLE_WITH_FILTER_ILLUSTRATION_TITLE`

</td>
<td valign="top">

No results found

</td>
<td valign="top" rowspan="2">

Illustrated message text displayed when the filters applied to a table on an object page or an analytical list page return no data.

</td>
</tr>
<tr>
<td valign="top">

`NOITEMS_SMARTTABLE_WITH_FILTER_ILLUSTRATION_DESCRIPTION`

</td>
<td valign="top">

Try changing your filter criteria.

</td>
</tr>
</table>


<table>
<tr>
<th valign="top" colspan="3">

**Key from `..>>AnalyticalPage>i18n`**

</th>
</tr>
<tr>
<th valign="top">

Key

</th>
<th valign="top">

Default Text in SAP Fiori elements 

</th>
<th valign="top">

Used In

</th>
</tr>
<tr>
<td valign="top">

`MESSAGE_MULTIPLE_VALUES_L_FORM` 

</td>
<td valign="top">

Some of the filters aren't relevant for the tab \\"\{1\}\\" \(\{0\}\). Settings these filters has no effect on the results.

</td>
<td valign="top">

Text displayed in a message strip when a user applies filters, but some of the filters aren't applicable for the selected tab in multiple table mode, on a mobile, or a small-screen device.

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

Text displayed in a message strip when a user applies filters, but some of them aren't relevant for the selected tab in multiple table mode, on a mobile, or a small-screen device.

</td>
</tr>
<tr>
<td valign="top">

`NODATA_SMARTCHART_ALP_ILLUSTRATION_TITLE`

</td>
<td valign="top">

Let's get some results

</td>
<td valign="top" rowspan="2">

Illustrated message text displayed when a chart on an analytical list page contains no data because the user hasn't chosen *Go*.

</td>
</tr>
<tr>
<td valign="top">

`NODATA_SMARTCHART_ALP_ILLUSTRATION_DESCRIPTION`

</td>
<td valign="top">

Start by providing your search or filter criteria.

</td>
</tr>
<tr>
<td valign="top">

`NOITEMS_SMARTCHART_WITH_FILTER_ILLUSTRATION_TITLE`

</td>
<td valign="top">

No results found

</td>
<td valign="top" rowspan="2">

Illustrated message text displayed when the filters applied to a chart on an analytical list page return no data.

</td>
</tr>
<tr>
<td valign="top">

`NOITEMS_SMARTCHART_WITH_FILTER_ILLUSTRATION_DESCRIPTION`

</td>
<td valign="top">

Try changing your filter criteria.

</td>
</tr>
<tr>
<td valign="top">

`NODATA_SMARTTABLE_ALP_ILLUSTRATION_TITLE`

</td>
<td valign="top">

Let's get some results

</td>
<td valign="top" rowspan="2">

Illustrated message text displayed when a table on an analytical list page contains no data because the user hasn't chosen *Go*.

</td>
</tr>
<tr>
<td valign="top">

`NODATA_SMARTTABLE_ALP_ILLUSTRATION_DESCRIPTION`

</td>
<td valign="top">

Start by providing your search or filter criteria.

</td>
</tr>
</table>

For more information about illustrated messages, see [Displaying an Illustrated Message When No Data Is Found](displaying-an-illustrated-message-when-no-data-is-found-dee77bd.md).



<a name="loio91b525b1bb694d0680e980ac254f2a3c__section_v24_bjc_tgc"/>

## How to Find the Resource File of Your Application Component

SAP Fiori generator automatically generates the following initial folders and files when you create an app with SAP Fiori elements:

-   `<root-folder>`

-   `webapp`

-   `i18n`

-   `i18n.properties`


The required folder structure to the resource model appears as shown here. You can create it as required by your application structure and the texts that need adaptation. Since the `manifest.json` file also refers to the title and description of the app, there is a general `i18n.properties` file on the top level:

-   `i18n/i18n.properties`
-   `i18n/ListReport/<entitySet>/i18n.properties`
-   `i18n/ObjectPage/<entitySet>/i18n.properties`
-   `i18n/ObjectPage/<subEntitySet>/i18n.properties`

    > ### Note:  
    > For object pages, the number of `i18n` files corresponds to the number of object pages defined in the app.


The app descriptor \(`manifest.json` file\) of an application specifies the SAPUI5 models.

Example:

> ### Sample Code:  
> `manifest.json`
> 
> ```
> 
> "sap.ui5": {
>  
>         ...
>     "models": {
>         "i18n": {                
>             "type": "sap.ui.model.resource.ResourceModel",                
>             "uri": "i18n/i18n.properties"           
>         },
>  
>         "i18n|sap.suite.ui.generic.template.ListReport|POHeaders": {
>             "type": "sap.ui.model.resource.ResourceModel",
>             "uri": "i18n/ListReport/POHeaders/i18n.properties"
>         },
>         "i18n|sap.suite.ui.generic.template.ObjectPage|POHeaders": {
>             "type": "sap.ui.model.resource.ResourceModel",
>             "uri": "i18n/ObjectPage/POHeaders/i18n.properties"
>         },
>         "i18n|sap.suite.ui.generic.template.ObjectPage|POItems": {
>             "type": "sap.ui.model.resource.ResourceModel",
>             "uri": "i18n/ObjectPage/POItems/i18n.properties"
>         }
>     }
> }
> 
> ```

The URL reflects the folder path to the resource model. The model's name, `i18n|sap.suite.ui.generic.template.ObjectPage|POHeaders`, is separated by lines used to identify the specific template component and entity set for which the resource model can be enhanced by editing the `i18n.properties` file.

