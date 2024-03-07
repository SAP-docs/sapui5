<!-- loio17b30ac2d5474078be31e695e97450cc -->

# Accessing Data in Controller Code

In the OData V4 model, bindings are used to access and modify back-end data also if the data is accessed or modified in controller code.

You can create bindings that are independent of controls using the factory methods [sap.ui.model.odata.v4.ODataModel\#bindContext](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel/methods/bindContext) , [sap.ui.model.odata.v4.ODataModel\#bindList](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel/methods/bindList) , and [sap.ui.model.odata.v4.ODataModel\#bindProperty](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel/methods/bindProperty) .



<a name="loio17b30ac2d5474078be31e695e97450cc__section_acw_zcc_v3b"/>

## Contexts

[sap.ui.model.odata.v4.Context](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context) is central for CRUD operations in the controller code. `sap.ui.model.odata.v4.Context` provides the following functions:

-   `requestObject`: Returns a promise on the value for the given path relative to the context.

-   `requestProperty`: Returns a promise on the property value\(s\) for the given path\(s\) relative to the context. The value\(s\) will be requested from the back end if necessary.

-   `getObject`: Returns the value for the given path relative to this context

-   `getProperty`: Returns the property value for the given path relative to this context.

-   `setProperty`: Sets a new value for the property identified by the given path.

-   `delete`: Deletes the record.




<a name="loio17b30ac2d5474078be31e695e97450cc__section_h4x_1dc_v3b"/>

## Lists

A list binding is obtained either with `sap.ui.model.odata.v4.ODataModel#bindList`, or by getting an existing list binding bound to a control. Entities of the list can be requested using [sap.ui.model.odata.v4.ODataModel.ODataListBinding\#requestContexts](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding/methods/requestContexts). The function returns a promise resolving with an array of the requested contexts. The data of each context can be accessed using the `requestObject`, `requestProperty`, `getObject`, and `getProperty` methods of `sap.ui.model.odata.v4.Context`. To modify the data, `sap.ui.model.odata.v4.Context#setProperty` can be used. For retrieving all available contexts without sending any request, [`sap.ui.model.odata.v4.ODataListBinding#getAllCurrentContexts`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding%23methods/getAllCurrentContexts) can be used.

```js
var oList = oModel.bindList("/SalesOrderList");

oList.requestContexts(10, 20).then(function (aContexts) {
    aContexts.forEach(function (oContext) {
        // As we have fetched the data already, we can access "Note" through getProperty
        var sNote = oContext.getProperty("Note"); 
        if (!sNote) {
            oContext.setProperty("Note", "No notes");
        }
    });
});
```

New entities can be created with [sap.ui.model.odata.v4.ODataModel.ODataListBinding\#create](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding/methods/create) . It is not required to read existing records before.

```js
var oList = oModel.bindList("/SalesOrderList"),
    oNewContext = oList.create();
```



### Relative Access

To access a list relative to an existing [sap.ui.model.odata.v4.Context](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context), use [`#getObject`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context%23methods/getObject) if that list is already loaded on the client by that context's binding. For example, when all items have been expanded in a list binding of sales orders,`oSalesOrderContext.getObject("SO_2_SOITEM")` would return them. Note that [`#requestObject`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context%23methods/requestObject) cannot be used to fetch additional entities. To access a list that is not already loaded on the client, you need to create a new relative list binding as follows. You can also $expand further navigation properties; see [sap.ui.model.odata.v4.ODataModel\#bindList](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel/methods/bindList) .

```js
 // assuming oContext already exists
const oListBinding = oContext.getModel().bindList("SO_2_SOITEM", oContext, [
        new Sorter("ItemPosition")
    ], [
        new Filter("Quantity", FilterOperator.GT, "0")
    ], {
        $expand : {SOITEM_2_SCHDL : {$select : ["Quantity"]}},
        $select : ["ItemPosition"]
    });
const aContexts = await oListBinding.requestContexts();
// now access aContexts[0].getObject().ItemPosition etc.
```



<a name="loio17b30ac2d5474078be31e695e97450cc__section_tvt_bdc_v3b"/>

## Single Entities

A context binding is obtained either with [sap.ui.model.odata.v4.ODataModel\#bindContext](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel/methods/bindContext), or by getting an existing context binding from the control tree. Data can be accessed through the bound context, see [sap.ui.model.odata.v4.ODataContextBinding\#getBoundContext](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataContextBinding/methods/getBoundContext) . Using `sap.ui.model.odata.v4.ODataContextBinding#requestObject` is a shortcut for `oBinding.getBoundContext().requestObject()`. sap.ui.model.odata.v4.Context\#setProperty is used to modify data.

> ### Note:  
> Relative bindings need to be resolved, meaning that a context must have been set before data access is possible.

```js
var oContextBinding = oModel.bindContext("/SalesOrderList('0500000000')");

oContextBinding.requestObject("Note").then(function (sNote) {
    if (!sNote) {
        oContextBinding.getBoundContext().setProperty("Note", "No notes");
    }
});
```



### Relative Access

To access a single entity relative to an existing [sap.ui.model.odata.v4.Context](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context), use [`#getObject`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context%23methods/getObject) if that entity is already loaded on the client by that context's binding. Note that [`#requestObject`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context%23methods/requestObject) cannot be used to fetch additional entities. To access a single entity that is not already loaded on the client, you need to create a new relative context binding as follows. You can also $expand further navigation properties; see [sap.ui.model.odata.v4.ODataModel\#bindContext](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel/methods/bindContext) .

```js

// assuming oContext already exists
const oContextBinding = oContext.getModel().bindContext("toOther", oContext, {
    $expand : {"toYetAnother" : {$select : ["A", "B", "C"]},
    $select : ["AProperty", "AnotherProperty", "YetAnotherProperty"]
});
const oOtherEntity = await oContextBinding.getBoundContext().requestObject();
// now access oOtherEntity.AProperty, oOtherEntity.toYetAnother.A etc.
```



<a name="loio17b30ac2d5474078be31e695e97450cc__section_hg5_cdc_v3b"/>

## Single Properties

The access to single properties may either be done using a context binding as described above in the *Single Entities* section, or by using a property binding. The property binding is obtained with [sap.ui.model.odata.v4.ODataModel\#bindProperty](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel/methods/bindProperty) , or by getting an existing property binding bound to a control. The value can be requested using [sap.ui.model.odata.v4.ODataPropertyBinding\#requestValue](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataPropertyBinding/methods/requestValue). A synchronous access is possible with sap.ui.model.odata.v4.ODataPropertyBinding\#getValue, if the value is already available.

The value of a property binding can be modified using `sap.ui.model.odata.v4.ODataPropertyBinding#setValue`.

```js
var oNote = oModel.bindProperty("/SalesOrderList('0500000000')/Note");
 
 
oNote.requestValue().then(function (sValue) {
    // do something with sValue
    // Note: We cannot use setValue as oNote is an absolute property binding
});
```



### Relative Access

To access single properties relative to an existing [sap.ui.model.odata.v4.Context](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context), use [`#getProperty`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context%23methods/getProperty) for access to already loaded properties, or [`#requestProperty`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context%23methods/requestProperty) in order to fetch additional properties not yet loaded on the client. You can also use [`#getObject`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context%23methods/getObject) to access the complete data the context points to or any part thereof, but [`#requestObject`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context%23methods/requestObject) cannot be used to fetch additional properties. The value of a property can be modified using [`#setProperty`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context%23methods/setProperty).

