<!-- loio8efa0ea4bd1444ccb514a738b532bbe8 -->

# Controlling the Table Initialization

The `initialLoad` parameter controls when table data loads in relation to filter bar state in SAP Fiori elements for OData V4. Use it to enable immediate data loading when mandatory filters are satisfied or defer loading until filters are applied.

If the `Table` building block is linked to a filter bar which doesn't use live mode, the table loads the data after the filters are filled.

You can control the data loading behavior using the `initialLoad` parameter as shown in the following sample code:

> ### Sample Code:  
> Fragment Definition
> 
> ```
> <macros:FilterBar 
>     metaPath="@com.sap.vocabularies.UI.v1.SelectionFields" 
>     id="FilterBar"
> />
> <macros:Table 
>     metaPath="@com.sap.vocabularies.UI.v1.LineItem" 
>     id="LineItemTable"
>     filterBar="FilterBar"
>     initialLoad="true"
> />
> ```

See the following table for the supported values of the `initialLoad` parameter and their behavior:

**Behavior of the InitialLoad Parameter**


<table>
<tr>
<th valign="top">

Value

</th>
<th valign="top">

Behavior

</th>
</tr>
<tr>
<td valign="top">

`false` \(default\)

</td>
<td valign="top">

The table loads the data only after the filter bar is filled.

</td>
</tr>
<tr>
<td valign="top">

`true`

</td>
<td valign="top">

The table loads the data if the filter bar has no mandatory filters or if the mandatory filters are filled.

</td>
</tr>
</table>

