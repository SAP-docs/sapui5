<!-- loiob8cb649973534f08a6047692f8c6830d -->

# Localization of UI Texts

If necessary, you can replace standard UI texts for apps that you have created with SAP Fiori elements.

We recommend that you use [SAP Fiori tools](https://help.sap.com/viewer/product/SAP_FIORI_tools/Latest/en-US), which is a set of extensions for SAP Business Application Studio and Visual Studio Code, to build your apps.

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

When you have created your specific application component, for example in SAP Web IDE or in SAP Fiori tools, standard texts are available from a specific template component \(for example, i18n file within `sap.suite.ui.generic.template.ListReport`\) and from the generic template component \(for example, i18n file within `sap.suite.ui.generic.template.lib`\).

Texts from the *Generic Application Component* can't be replaced.

> ### Caution:  
> SAP Web IDE is no longer available via SAP Business Technology Platform trial accounts. Any references to SAP Web IDE in this documentation are only relevant for you if you have access to SAP Web IDE through a productive SAP BTP account. Please consider SAP Business Application Studio as an alternative. See [App Development Using SAP Business Application Studio](../03_Get-Started/app-development-using-sap-business-application-studio-6bbad66.md).

For more information about SAP Web IDE, see the documentation for SAP Web IDE on the SAP Help Portal at [https://help.sap.com/viewer/p/SAP\_Web\_IDE](https://help.sap.com/viewer/p/SAP_Web_IDE).



### How to Find the Resource File of Your Application Component

SAP Web IDE automatically generates the following folders and files when you create an app with SAP Fiori elements:

-   <root-folder\>

-   |—i18n

-   |—<shortened template component name\>, for example, List Report and Object Page

-   |—<entitySet\>

-   |—i18n.properties

    > ### Note:  
    > This file contains instructions on how to find the standard UI texts for your application. You need them for the step *How to Replace the Standard UI Texts with Application-Specific Texts* in this topic.


The folder path to the resource model appears as shown below. Since the `manifest.json` file also refers to the title and description of the app, there is a general `i18n.properties` file on the top level:

-   `i18n.properties`
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



### How to Replace the Standard UI Texts with Application-Specific Texts

To replace the standard UI texts, perform the following steps:

1.  Go to the final block of the standard UI texts that starts as follows: `#---Final block: texts to be redefined by the application -------`

2.  Copy this block to the corresponding i18n property file of your app under `webapp/i18n`.

    Consider the detailed instructions that you find as comments in the original property file: For example, a text might be relevant only for the root object, or it might also be relevant for detail pages of subitems. In the latter case, if you have defined multiple object pages in your app, you have to copy and adapt each of them.

3.  After copying the blocks to the relevant files, adjust the texts as described in the comment. For example, replace the generic text *object* by your entity type name.




<a name="loiob8cb649973534f08a6047692f8c6830d__section_qty_nb1_zlb"/>

## Additional Features in SAP Fiori Elements for OData V4

When you have created your specific application component, standard UI texts are available from a specific template component \(`sap.fe.templates`\) and from the generic template component.

> ### Tip:  
> You can also use the building blocks provided by SAP Fiori elements in applications built without using one of our floorplans. If none of our floorplans suit your use case, you can build a custom app that still runs on the SAP Fiori elements framework, but where all pages are treated like custom pages. For more information about how to override the standard UI texts when you're using building blocks, see [Adapt i18n](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/buildingBlocks/guidance/adaptI18n).



### What You Can Override

Applications can currently choose to override any key from the list below. Check the last column in the following table for a recommendation about which default texts to override. Only the keys given in the table are allowed to be overridden by application developers using the custom i18n file approach:

<a name="loiob8cb649973534f08a6047692f8c6830d__table_snl_wcj_cmb"/>Keys You Can Override


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

 `C_EDIT_FLOW_GENERIC_LOCKED_OBJECT_POPOVER_TEXT_OWNER_INFO` 



</td>
<td valign="top">

This object is currently being edited by \{0\}.



</td>
<td valign="top">

Draft information text displayed to a user for an object that is already being edited by another user, provided that the information about the owner is available.



</td>
<td valign="top">

Applications should overwrite the default text with the concrete object that is being edited.



</td>
</tr>
<tr>
<td valign="top">

 `C_EDIT_FLOW_GENERIC_LOCKED_OBJECT_POPOVER_TEXT_ADDITIONAL_USER` 



</td>
<td valign="top">

This object is currently being edited by another user.



</td>
<td valign="top">

Draft information text displayed to a user for an object that is already being edited by another user, when no information about the owner is available.



</td>
<td valign="top">

Applications should overwrite the default text with the concrete object that is being edited.



</td>
</tr>
<tr>
<td valign="top">

 `C_EDIT_FLOW_LAST_CHANGE_USER_TEXT_OWNER_INFO` 



</td>
<td valign="top">

This object has unsaved changes made by \{0\}.



</td>
<td valign="top">

Information about the user who has made the unsaved changes or who is currently editing the draft, provided that the information about the user making the changes is available.



</td>
<td valign="top">

Applications should overwrite the default text with the concrete object that is being edited.



</td>
</tr>
<tr>
<td valign="top">

 `C_EDIT_FLOW_LAST_CHANGE_USER_TEXT_ADDITIONAL_USER` 



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

 `C_COMMON_APPLY_ERROR` 



</td>
<td valign="top">

An error occurred while submitting the changes. Please navigate back to discard the changes or try to submit the changes again.



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

This object is currently locked by \{0\} and cannot be deleted.



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

Message text used in the confirmation message box when a user clicks the *Delete* button to delete multiple selected objects that have no title.



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

Another user edited this object without saving the changes: \{0\}.

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

Other users have edited the selected objects without saving the changes.

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

Do you still want to delete the remaining \{0\} objects?



</td>
<td valign="top">

Message text used in the confirmation message box when a user clicks the *Delete* button for multiple selected objects, some of which cannot be deleted.

Parameter: \{0\} = number of objects that can be deleted



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

1 out of \{0\} objects cannot be deleted.



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

\{0\} out of \{1\} objects cannot be deleted.



</td>
<td valign="top">

Message text used in the confirmation message box when a user clicks the *Delete* button for multiple selected objects, only some of which can be deleted.

Parameters: \{0\} = number of objects that cannot be deleted, \{1\} = total number of selected objects



</td>
<td valign="top">

Applications should overwrite the default text with the concrete objects.



</td>
</tr>
<tr>
<td valign="top">

`C_TRANSACTION_HELPER_CONFIRM_DELETE_WITH_OBJECTINFO_AND_FEW_OBJECTS_LOCKED`

\(deprecated key: `C_TRANSACTION_HELPER_OBJECT_PAGE_CONFIRM_DELETE_WITH_OBJECTINFO_AND_FEW_OBJECTS_LOCKED_AND_NON_DELETABLE`\)



</td>
<td valign="top">

\{0\} out of \{1\} objects are currently locked.



</td>
<td valign="top">

Message text used in the confirmation message box when a user clicks the *Delete* button.

Parameters: \{0\} = number of objects that are locked, \{1\} = number of selected objects



</td>
<td valign="top">

Applications should overwrite the default text with the concrete objects.



</td>
</tr>
<tr>
<td valign="top">

`C_TRANSACTION_HELPER_CONFIRM_DELETE_WITH_OBJECTINFO_AND_ONE_OBJECT_LOCKED`

\(deprecated key: `C_TRANSACTION_HELPER_OBJECT_PAGE_CONFIRM_DELETE_WITH_OBJECTINFO_AND_ONE_OBJECT_LOCKED_AND_NON_DELETABLE`\)



</td>
<td valign="top">

1 out of \{0\} objects is currently locked.



</td>
<td valign="top">

Message text used in the confirmation message box when a user clicks the *Delete* button.

Parameters: \{0\} = number of selected objects



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

The remaining object has unsaved changes made by another user.

Do you still want to delete it?



</td>
<td valign="top">

Warning message text on the delete popover when a user tries to delete an object that has unsaved changes from another user.



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

Also delete object with unsaved changes?



</td>
<td valign="top">

Text used for the checkbox in the delete confirmation dialog to confirm if a user also wants to delete the single object from the selected objects that has changes from other users.



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

Also delete objects with unsaved changes?



</td>
<td valign="top">

Text used for the checkbox in the delete confirmation dialog to confirm if a user also wants to delete those objects from the selected objects that have changes from other users.



</td>
<td valign="top">

Applications should overwrite the default text with the concrete objects.



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

Applications should overwrite the default text with the concrete objects.



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

There are no items for the selected filter criteria and table view.



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

For overriding actions that have parameters, some of the text in the action parameter popovers can be overridden. Confirmation actions also get a confirmation popover that has text that can be overridden. To override these texts, the action name along with the entity set name \(or the navigation property name in case of navigation entity set\) has to be provided. This is a mandatory piece of information, even if the application needs the custom text for an action that is used in only 1 entity set. If the entity set name is not appended, the resource bundle text from SAP Fiori elements is used as a fallback.

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

-   **[Support for Terminologies](support-for-terminologies-5f224ec.md "By defining terminologies together with additional resource bundles, an application can easily be switched from one scenario or industry
		to another.")**  
By defining terminologies together with additional resource bundles, an application can easily be switched from one scenario or industry to another.
-   **[Maintaining Standard Texts for Tables](maintaining-standard-texts-for-tables-aacfac5.md "In a table, if the system does not find any entries when using the filter, standard UI texts are displayed, which you can adapt in the
		i18n file of your app.")**  
In a table, if the system does not find any entries when using the filter, standard UI texts are displayed, which you can adapt in the i18n file of your app.
-   **[Maintaining Standard Texts for Charts](maintaining-standard-texts-for-charts-37cd601.md "For charts in analytical list pages, list reports, and object pages, if the system does not find any entries when using the filters,
		standard UI texts are displayed, which you can adapt in the i18n file of your app.")**  
For charts in analytical list pages, list reports, and object pages, if the system does not find any entries when using the filters, standard UI texts are displayed, which you can adapt in the i18n file of your app.

