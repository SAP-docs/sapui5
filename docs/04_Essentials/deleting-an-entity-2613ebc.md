<!-- loio2613ebc835764abd9aefd2e6fa8b7392 -->

# Deleting an Entity

The `v4.Context.delete` method deletes an entity on the server and updates the user interface accordingly.

When you delete the entity from a list binding, the corresponding row is removed immediately, even if an [API group](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.SubmitMode) is used and the request waits for the [`submitBatch`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel%23methods/submitBatch). If the request fails, or the deletion is canceled via [`ODataModel#resetChanges`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel%23methods/resetChanges) or [`ODataListBinding#resetChanges`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding%23methods/resetChanges), the row is re-inserted.

When you delete the entity from a context binding, the binding and all dependent bindings lose the reference.

**Example: Delete From a Table**

```js

onDeleteSalesOrder : function () {
    var oTable = this.getView().byId("SalesOrders"),
        oSalesOrderContext = oTable.getSelectedItem().getBindingContext();
 
    oSalesOrderContext.delete("$auto").then(function () {
        oTable.removeSelections();
        MessageBox.alert("Deleted Sales Order",
            {icon : MessageBox.Icon.SUCCESS, title : "Success"});
    }, function (oError) {
        MessageBox.alert("Could not delete Sales Order: "
            + oError.message, {icon : MessageBox.Icon.ERROR, title : "Error"});
    });
},
```

You can also delete an entity from the model and all its bindings via  [`v4.ODataModel#delete`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel%23methods/delete) using a canonical binding path to the entity. The model then sends a `DELETE` request to the server. If this request succeeds, the entity is removed from all its bindings. The conditions for identifying these bindings are described in the API documentation.

**Related Information**  


[Context.delete](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context/methods/delete)

