<!-- loio95cf4b16762a465b9237b18d033f0cd2 -->

# Creating Bindings

The OData V4 model offers the factory methods `bindList`, `bindContext` and `bindProperty` for creating bindings. Typically, these methods are not called directly in applications, but indirectly by the following:

-   Binding an SAPUI5 control through an API such as `oForm.bindElement("{/SalesOrderList('0500000000')}");`

    This sample binds a form to a certain sales order so that form elements can be bound to display or change single properties of the sales order.

    > ### Note:  
    > Note that binding expressions can be complex so that they can take additional properties to specify the binding further in addition to the path:
    > 
    > ```js
    > 
    > oForm.bindElement({path : "/SalesOrderList('0500000000')", parameters : {$expand : "SO_2_SOITEM", ...}, events : {dataReceived : '.onDataEvents', ...}});
    > ```
    > 
    > This allows you, for instance, to specify [OData V4 binding parameters](parameters-1ab4f62.md) such as `$expand` or attach to OData V4 [Binding Events](binding-events-1a010d3.md) such as `dataReceived`.

    For a complete example, see the `onSalesOrderSelect` method \(file: `Main.controller.js`\) in the [SalesOrders sample](https://ui5.sap.com/#/sample/sap.ui.core.sample.odata.v4.SalesOrders/preview) in the Demo Kit.

-   Declaring a binding for a control property in an XML view such as the following:

    ```xml
    
    <Table items="{path : '/SalesOrderList', parameters : { $expand : 'SO_2_BP', $filter : 'BuyerName ge \'M\'', ...}, events : {dataReceived : '.onDataEvents', ... } }">
    ```

    For a complete example, see the `Main.view.xml` file in the [SalesOrders sample](https://ui5.sap.com/#/sample/sap.ui.core.sample.odata.v4.SalesOrders/preview) in the Demo Kit.


