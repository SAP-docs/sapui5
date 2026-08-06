<!-- loio78b00dc4385744ada865e5cbb9209eba -->

# Copying Multiple Rows and Range Selections

Users can copy multiple rows as well as ranges of rows and columns to the clipboard from an app based on SAP Fiori elements for OData V4.

The selected content \(rows or ranges\) can then be pasted to another application such as Microsoft Excel, Microsoft Word, or to another table in SAP Fiori elements for OData V4.

> ### Note:  
> When using custom columns, the cell content is the properties listed in the `property` array of the custom column definition. For more information, see [Extension Points for Tables](extension-points-for-tables-d525522.md).

To select a range with the mouse, click and hold while dragging to make a selection. As tables can have cells with editable fields, these fields automatically gain focus upon cell selection. To prevent this, press [CTRL\] on Microsoft Windows or [CMD\] on macOS before selecting a cell with the mouse. Keyboard shortcuts are also available as an alternative for cell selection.


<table>
<tr>
<th valign="top">

Key Combination

</th>
<th valign="top">

Behavior

</th>
</tr>
<tr>
<td valign="top">

[Space\]

</td>
<td valign="top">

Selects the cell that the focus is set on. If used inside a selection, removes the selection.

</td>
</tr>
<tr>
<td valign="top">

[Shift\] + [Arrow keys\] 

</td>
<td valign="top">

Adjusts an existing selection. If used outside a selection, creates a new selection.

</td>
</tr>
<tr>
<td valign="top">

[Shift\] + [Space\] 

</td>
<td valign="top">

Transforms the current selection into a row selection, based on the selection mode applied to the table.

</td>
</tr>
<tr>
<td valign="top">

[Control\] + [Space\] 

</td>
<td valign="top">

Expands the selection to all cells in a column \(up to the range limit\).

</td>
</tr>
<tr>
<td valign="top">

[Control\] + [Shift\] + [A\] 

</td>
<td valign="top">

Clears the selection.

</td>
</tr>
</table>

For more information about pasting data to tables and the expected format, see [Copying and Pasting from External Applications to Tables](copying-and-pasting-from-external-applications-to-tables-f6a8fd2.md).

