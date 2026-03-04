<!-- loio5b6538cf293c4bc3aebfb210fd87b884 -->

# Adapting Texts for Confirmation Dialog Box When Deleting Lines in a Table

When a user deletes a line in a table on the object page, a confirmation dialog box is displayed. You can adapt the displayed default texts for every table.

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

