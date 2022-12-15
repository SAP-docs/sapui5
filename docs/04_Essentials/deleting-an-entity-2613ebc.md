<!-- loio2613ebc835764abd9aefd2e6fa8b7392 -->

# Deleting an Entity

The `v4.Context.delete` method deletes an entity on the server and updates the user interface accordingly.

When you delete the entity from a list binding, the corresponding row is removed immediately, even if an [API group](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.SubmitMode) is used and the request waits for the [`submitBatch`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel%23methods/submitBatch). If the request fails, or the deletion is canceled via [`ODataModel#resetChanges`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel%23methods/resetChanges) or [`ODataListBinding#resetChanges`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding%23methods/resetChanges), the row is re-inserted.

Bound messages targeting the entity, one of its properties, or its navigation properties, are also removed immediately; this applies to both state and transition messages. If you cancel the deletion, these messages are restored. If the deletion fails, only the state messages are restored; the transition messages are dropped to make room for new transition messages resulting from the failed deletion.

As soon as a context is deleted on the client, [`#isDeleted`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context/methods/isDeleted) returns `true` and the context must not be used anymore \(except by status APIs like [`#isDeleted`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context/methods/isDeleted), `#isKeepAlive`, `#hasPendingChanges`, `#resetChanges`\). If the context is used as a binding context of a control or view, be sure to unbind it using `setBindingContext(null)`. If the context is restored due to a failure or reset, you might want to rebind this control or view again.

Once the entity is finally deleted on the server \(i.e. the promise of `#delete` is resolved\), no method of the context may be used anymore.

**Example: Delete from a table with an object page**

```js
onDeleteSalesOrder : function () {
    var oTable = this.getView().byId("SalesOrders"),
        oSalesOrderContext = oTable.getSelectedItem().getBindingContext(),
        oObjectPage = this.getView().byID("objectPage");

    if (oObjectPage.getBindingContext() === oSalesOrderContext) {
        oObjectPage.setBindingContext(null);
    }
    oSalesOrderContext.delete().then(function () {
        MessageBox.alert("Deleted Sales Order",
            {icon : MessageBox.Icon.SUCCESS, title : "Success"});
    }, function (oError) {
        if (oSalesOrderContext === that.oLastSelectedSalesOrderContext) {
            oObjectPage.setBindingContext(oSalesOrderContext);
        }
        MessageBox.alert("Could not delete Sales Order: "
            + oError.message, {icon : MessageBox.Icon.ERROR, title : "Error"});
    });
},
```

You can also delete an entity from the model and all its bindings via  [`v4.ODataModel#delete`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel%23methods/delete) using a canonical binding path to the entity. The model then sends a `DELETE` request to the server. If this request succeeds, the entity is removed from all its bindings. The conditions for identifying these bindings are described in the API documentation.

**Related Information**  


[Context.delete](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context/methods/delete)

