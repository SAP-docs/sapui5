<!-- loioec55312f796f45e8883810af3b68b46c -->

# Selection

The OData V4 Model supports \(de-\)selection of individual rows and of all rows at once.

Individual rows can be \(de-\)selected via `sap.ui.model.odata.v4.Context#setSelected`. If the selection state changes, a [`selectionChanged`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding%23events/selectionChanged) event is fired on the list binding which this context belongs to. While a context is currently [deleted](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context%23methods/isDeleted) on the client, it does not appear as [selected](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context%23methods/isSelected).

The selection state of **all rows at once** \("select all"\) can be defined logically by calling [`v4.Context#setSelected`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context%23methods/setSelected) on the list binding's [header context](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding%23methods/getHeaderContext). The new selection state is propagated to all row contexts. If the selection state of the header context changes, a [`selectionChanged`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding%23events/selectionChanged) event is fired for that header context. The setter can be called again with the same value to again select all row contexts. For example, if a row context was deselected explicitly in between, it is selected again by selecting the header context again - even if the header context is already selected. If the selection state of any row context changes in this way, a `selectionChanged` event is nevertheless fired for that header context but not for the row context. When no selection state changes, no event is fired. When all rows are \(de-\)selected, this same selection state is applied to any new rows which are loaded due to scrolling or paging.

A list binding's selection state is thus defined by the "select all" state of its [header context](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding%23methods/getHeaderContext) in combination with all "exceptions to the rule" \(as illustrated above\). If the preconditions of [`#setKeepAlive`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context%23methods/setKeepAlive) hold, a best effort is made to implicitly keep those exceptions alive in order to preserve the binding's selection state. Once a row selection is no longer needed, for example because you perform an operation on this context which logically removes it from its list, you need to reset that context's selection.

Because the selection state is kept, you can easily describe the current selection as follows \(assuming there is a key property `ID` and a non-key property `Name`\). Of course, your controller code can also operate on this information in any other way, for example including some back-end call. Note that you can only rely on the key properties being available synchronously. Due to side effects, invisible \(de-\)selected rows may not be kept up to date, and thus non-key properties should be requested asynchronously.

**Select All with exceptions** 

```js
const bSelectAll = oListBinding.getHeaderContext().isSelected();
 
const aIDs = oListBinding.getAllCurrentContexts()
    .filter((oContext) => oContext.isSelected() !== bSelectAll)
    .map((oContext) => oContext.getProperty("ID"));
MessageBox.information((bSelectAll ? "All except " : "") + aIDs.join(", "),
    {title : "Selected IDs"});
 
const aNames = await Promise.all(
    oListBinding.getAllCurrentContexts()
        .filter((oContext) => oContext.isSelected() !== bSelectAll)
        .map((oContext) => oContext.requestProperty("Name"))
);
MessageBox.information((bSelectAll ? "All except " : "") + aNames.join(", "),
    {title : "Selected Names"});
```

A context's selection state can also be accessed via data binding to the `"@$ui5.context.isSelected"` client-side annotation, even as a two-way binding and also for a header context. Two-way binding means that updates to the binding are reflected as updates to that context's selection state, just like calls to [`v4.Context#setSelected`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context%23methods/setSelected).

Note that list-based controls may use the OData V4 model's selection state implicitly; check the corresponding control documentation for more information. For advanced features, you can access the OData V4 model's APIs directly as outlined above.

