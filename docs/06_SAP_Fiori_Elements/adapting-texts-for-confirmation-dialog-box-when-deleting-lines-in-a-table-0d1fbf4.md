<!-- loio0d1fbf4f4d0048949f4335007fb5a856 -->

# Adapting Texts for Confirmation Dialog Box When Deleting Lines in a Table

When a user deletes a line in a table on the object page, a confirmation dialog box is displayed. You can adapt the displayed default texts for every table.

For details about how to adapt the displayed default texts for every table, refer to the separate sections below.



<a name="loio0d1fbf4f4d0048949f4335007fb5a856__section_ml2_ygc_2nb"/>

## Additional Features in SAP Fiori Elements for OData V2

To adapt the displayed default texts for every table, you have to provide these custom texts in the application's i18n file, under the respective `entitySet`. This is the key for those texts:

`<i18n_Key>|<EntitySet>|<navigationProperty>|com.sap.vocabularies.UI.v1.LineItem`

If the annotation has a qualifier for the line item annotation, then the i18n key should be:

`<i18n_Key>|<EntitySet>|<navigationProperty>|com.sap.vocabularies.UI.v1.LineItem|<qualifier>`

> ### Example:  
> `DELETE_SELECTED_ITEM|STTA_C_MP_Product|to_ProductText|com.sap.vocabularies.UI.v1.LineItem=Delete this row?`

You can use these i18n keys:


<table>
<tr>
<td valign="top">

\#YMSG, 100: Delete selected item text. "item" to be redefined.

DELETE\_SELECTED\_ITEM=Delete the selected item?



</td>
</tr>
<tr>
<td valign="top">

\#YMSG, 100: Delete selected items text. "items" to be redefined.

DELETE\_SELECTED\_ITEMS=Delete the selected items?



</td>
</tr>
<tr>
<td valign="top">

\#YMSG, 30: Delete success message. Parameter: \{0\}= deleted items count. "items" to be redefined.

DELETE\_SUCCESS\_PLURAL\_WITH\_COUNT=\{0\} items have been deleted.



</td>
</tr>
<tr>
<td valign="top">

\#YMSG, 30: Delete success message. Parameter: \{0\}= deleted item as count \(1\). "item" to be redefined.

DELETE\_SUCCESS\_WITH\_COUNT=\{0\} item has been deleted.



</td>
</tr>
<tr>
<td valign="top">

\#YMSG, 30: Delete error message. Parameter: \{0\}= non-deleted items as count."items" to be redefined.

DELETE\_ERROR\_PLURAL\_WITH\_COUNT=\{0\} items cannot be deleted.



</td>
</tr>
<tr>
<td valign="top">

\#YMSG, 30: Delete error message. Parameter: \{0\}= non-deleted item as count \(1\)."item" to be redefined.

DELETE\_ERROR\_WITH\_COUNT=\{0\} item cannot be deleted.



</td>
</tr>
<tr>
<td valign="top">

\#YMSG, 30: Delete error message. "items" to be redefined.

DELETE\_ERROR\_PLURAL=The selected items cannot be deleted.



</td>
</tr>
<tr>
<td valign="top">

\#YMSG, 30: Delete error message. "item" to be redefined.

DELETE\_ERROR=The selected item cannot be deleted.



</td>
</tr>
<tr>
<td valign="top">

\#YMSG, 30: Delete success message. "items" to be redefined.

DELETE\_SUCCESS\_PLURAL=The selected items have been deleted.



</td>
</tr>
<tr>
<td valign="top">

\#XMSG: Message box text after successfully deleting an object or sub-item. "item" to be redefined.

ITEM\_DELETED=Item deleted



</td>
</tr>
<tr>
<td valign="top">

\#YMSG, 100: Delete undeletable items text: \{0\}=digit, \{1\}=digit

DELETE\_UNDELETABLE\_ITEMS=\{0\} of \{1\} items cannot be deleted.



</td>
</tr>
</table>



<a name="loio0d1fbf4f4d0048949f4335007fb5a856__section_olp_khc_2nb"/>

## Additional Features in SAP Fiori Elements for OData V4

Only the keys given below are allowed to be overridden in the custom i18n file for deleting lines in a table:

**Keys and Values**


<table>
<tr>
<td valign="top">

C\_TRANSACTION\_HELPER\_OBJECT\_PAGE\_CONFIRM\_DELETE\_WITH\_OBJECTTITLE\_SINGULAR=Delete this object?



</td>
</tr>
<tr>
<td valign="top">

C\_TRANSACTION\_HELPER\_OBJECT\_PAGE\_CONFIRM\_DELETE\_WITH\_UNSAVED\_CHANGES=Another user edited this object without saving the changes:\{0\} Delete anyway?



</td>
</tr>
<tr>
<td valign="top">

C\_TRANSACTION\_HELPER\_OBJECT\_PAGE\_CONFIRM\_DELETE\_WITH\_UNSAVED\_CHANGES\_MULTIPLE\_OBJECTS=Other users have edited the selected objects without saving the changes. Delete anyway?



</td>
</tr>
<tr>
<td valign="top">

C\_TRANSACTION\_HELPER\_OBJECT\_PAGE\_CONFIRM\_DELETE\_WITH\_OBJECTTITLE\_PLURAL=Delete the selected objects?



</td>
</tr>
<tr>
<td valign="top">

C\_TRANSACTION\_HELPER\_OBJECT\_PAGE\_CONFIRM\_DELETE\_WITH\_OBJECTINFO\_AND\_FEW\_OBJECTS\_NON\_DELETABLEC\_TRANSACTION\_HELPER\_OBJECT\_PAGE\_CONFIRM\_DELETE\_WITH\_OBJECTINFO\_AND\_FEW\_OBJECTS\_NON\_DELETABLE=\{0\} of \{1\} objects cannot be deleted.



</td>
</tr>
<tr>
<td valign="top">

C\_TRANSACTION\_HELPER\_OBJECT\_PAGE\_CONFIRM\_DELETE\_WITH\_OBJECTINFO\_AND\_FEW\_OBJECTS\_LOCKED=\{0\} of \{1\} objects are currently locked.



</td>
</tr>
<tr>
<td valign="top">

C\_TRANSACTION\_HELPER\_OBJECT\_PAGE\_CONFIRM\_DELETE\_WITH\_UNSAVED\_AND\_FEW\_OBJECTS\_LOCKED\_SINGULAR=The remaining object has unsaved changes. Do you still want to delete it?



</td>
</tr>
<tr>
<td valign="top">

C\_TRANSACTION\_HELPER\_OBJECT\_PAGE\_CONFIRM\_DELETE\_WITH\_UNSAVED\_AND\_FEW\_OBJECTS\_LOCKED\_PLURAL=The remaining objects have unsaved changes. Do you still want to delete them?



</td>
</tr>
<tr>
<td valign="top">

C\_TRANSACTION\_HELPER\_OBJECT\_PAGE\_CONFIRM\_DELETE\_WITH\_OBJECTINFO\_AND\_FEW\_OBJECTS\_UNSAVED\_SINGULAR=Also delete object with unsaved changes?



</td>
</tr>
<tr>
<td valign="top">

C\_TRANSACTION\_HELPER\_OBJECT\_PAGE\_CONFIRM\_DELETE\_WITH\_OBJECTINFO\_AND\_FEW\_OBJECTS\_UNSAVED\_PLURAL=Also delete objects with unsaved changes?



</td>
</tr>
<tr>
<td valign="top">

C\_TRANSACTION\_HELPER\_OBJECT\_PAGE\_CONFIRM\_DELETE\_WITH\_OBJECTINFO\_AND\_FEW\_OBJECTS\_LOCKED\_AND\_NON\_DELETABLE=\{0\} out of \{2\} objects cannot be deleted. \{1\} of \{2\} objects are currently locked.



</td>
</tr>
</table>

**Manifest Changes**

Changes must be made in the manifest file of the application. Add `enhanceI18n` to the `settings`  of the corresponding section as shown below:

> ### Sample Code:  
> ```
> "targets":{
>    "SalesOrderManageList":{
>       "type": "Component",
>       "id": "SalesOrderManageList",
>       "name": "sap.fe.templates.ListReport",
>       "options":{
>          "settings":{
>             "entitySet": "SalesOrderManage",
>             "enhanceI18n": "i18n/customSalesOrderLR.properties", // This is the line to be added - it provides Fiori Elements with the name of the custom resource bundle
>             .
>             .
>             .
>          }
>       }
>    }
> }
> ```

> ### Example:  
> **SAP Fiori elements default values \(in the resource bundle of SAP Fiori elements\):**
> 
> `C_TRANSACTION_HELPER_OBJECT_PAGE_CONFIRM_DELETE_WITH_OBJECTTITLE_PLURAL=Delete the selected objects?` 
> 
> `C_TRANSACTION_HELPER_OBJECT_PAGE_CONFIRM_DELETE_WITH_OBJECTTITLE_SINGULAR=Delete this object?`
> 
> **Text values from** `i18n/customSalesOrderLR.properties` **\(custom resource bundle of the application\):**
> 
> `C_TRANSACTION_HELPER_OBJECT_PAGE_CONFIRM_DELETE_WITH_OBJECTTITLE_PLURAL|SalesOrderManage=Do you want to delete the selected Sales Orders?` 
> 
> `C_TRANSACTION_HELPER_OBJECT_PAGE_CONFIRM_DELETE_WITH_OBJECTTITLE_SINGULAR|SalesOrderManage=Do you want to delete this Sales Order?` 

**Format of Custom Keys**

For resources which are not shared across multiple entities or by multiple controls \(for example, you want the same OK text in all OK confirmation popovers\), do not append anything to the existing key.

> ### Example:  
> `C_COMMON_DIALOG_OK=OK?` \(resource bundle of SAP Fiori elements\)
> 
> `C_COMMON_DIALOG_OK=Okie?` \(custom resource bundle of the application\)

For resources which are shared across multiple entity sets, append the `entitySet` name. For instance, you want different delete messages based on the entity being deleted.

> ### Example:  
> `C_TRANSACTION_HELPER_OBJECT_PAGE_CONFIRM_DELETE_WITH_OBJECTTITLE_SINGULAR=Delete this object?` \(resource bundle of SAP Fiori elements\)
> 
> `C_TRANSACTION_HELPER_OBJECT_PAGE_CONFIRM_DELETE_WITH_OBJECTTITLE_SINGULAR |_Items=Do you want to delete this Sales Order Item?` 

For overriding actions that have parameters, some of the text in the action parameter popovers can be overridden. Confirmation actions also get a confirmation popover which has text that can be overridden. To override these texts, the action name along with the entity set name has to be provided. The entity set name is a mandatory piece of information, even if the application needs the custom text for an action that is used in only one entity set. If the entity set name is not appended, the resource bundle text from SAP Fiori elements will be used as a fallback.

> ### Example:  
> `C_OPERATIONS_ACTION_CONFIRM_MESSAGE=Are you sure that you want to execute this action?`
> 
> \(resource bundle of SAP Fiori elements - this text will be shown for all confirmation actions, irrespective of the action name or the entity\)
> 
> `C_OPERATIONS_ACTION_CONFIRM_MESSAGE|SalesOrderManage|ReturnInProcess=Can you please confirm if you really want to trigger the returns?`

In the above example, the developer wants to show the custom message only when a user clicks the `ReturnsInProcess` action of the `SalesOrderManage` entity set. For a second action in the same entity set the last part of the key will be different, since the action name will be different.

If the action name is the same but the entity differs, then the second part of the key name above will be different and SAP Fiori elements will, based on the entity set to which the clicked action is associated, use the correct key.

> ### Example:  
> `C_OPERATIONS_ACTION_CONFIRM_MESSAGE|_Items|ReturnInProcess=Can you please confirm if you really want to trigger the returns for the chosen items?` 

If you don't provide any custom texts, the system uses the default texts listed above.

