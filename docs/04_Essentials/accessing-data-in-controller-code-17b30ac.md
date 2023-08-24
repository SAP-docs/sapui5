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

