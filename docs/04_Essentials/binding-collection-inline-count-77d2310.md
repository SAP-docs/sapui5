<!-- loio77d2310b637b490495d78b393ed6aa64 -->

# Binding Collection Inline Count

The OData V4 model allows for binding the inline count of the entity collection read by an `ODataListBinding` which has the parameter `$count` set to `true`. Inactive contexts do not contribute to this count; for more information see [Creating an Entity in a Collection](creating-an-entity-in-a-collection-c9723f8.md). In the example below, the table title is bound to `"$count"`, thus representing the number of sales order entities in the collection bound to the table.

**Example: Table with title bound to `$count`**

```js

<Table id="SalesOrders"
    items="{
        path : '/SalesOrderList',
        parameters : {
            $count : true
        }
    }"
>
    <headerToolbar>
        <Toolbar>
            <content>
                <Title id="SalesOrdersTitle" text="{$count} Sales Orders"/>
            </content>
        </Toolbar>
    </headerToolbar>
    ...
</Table>
```

The `ODataListBinding` provides a header context which holds header information like inline count for the list. Set the binding context for the relative property binding with path `"$count"` to the header context, see [ODataListBinding\#getHeaderContext](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding%23methods/getHeaderContext). With this, the property binding's value is the list's inline count.

> ### Note:  
> In the same way, the list's [selection count](selection-ec55312.md#loioec55312f796f45e8883810af3b68b46c__section_SCN) can be bound as well.

**Example: Setting the header context for a property binding to $count**

```js

setHeaderContext : function () {
    var oView = this.getView();
    oView.byId("SalesOrdersTitle").setBindingContext(
        oView.byId("SalesOrders").getBinding("items").getHeaderContext());
}
```

> ### Note:  
> The header context needs to be set when the list binding has been resolved, for example after a relative binding has been given its context with [`sap.ui.base.ManagedObject#setBindingContext`](https://ui5.sap.com/#/api/sap.ui.base.ManagedObject/methods/setBindingContext) or by binding on a parent element with [`sap.ui.core.Element#bindElement`](https://ui5.sap.com/#/api/sap.ui.core.Element/methods/bindElement). In case the list binding is resolved initially, it is sufficient to set the header context in [`sap.ui.core.mvc.Controller#onBeforeRendering`](https://ui5.sap.com/#/api/sap.ui.core.mvc.Controller/methods/onBeforeRendering).

> ### Note:  
> A property binding bound to the path `"$count"` may be part of a control hierarchy. When a parent control receives a different binding context than the list's header context, this binding context is propagated to the property binding. The property binding then fails to read its value as the context is not the header context and a console error is written.
> 
> Example: On selection in the *Sales Orders* table, the application controller code sets the binding context of the table for the corresponding *Sales Order Items* table with relative binding path `"SalesOrderItems"` to the context corresponding to the selected sales order. The title of the *Sales Order Items* table which is bound to `"$count"` fails to read its value.
> 
> To circumvent this issue, proceed as follows:
> 
> 1.  Define the `ODataModel` as an additional named model with a specific name, such as `"headerContext"`.
> 
> 2.  Bind the property binding to this model using the path `"headerContext>$count"`.
> 
> 3.  Set the property binding's context with the model name `"headerContext"`.
> 
> 
> To see this solution for the above example, search for `"headerContext"` in the code of the *OData V4 "Sales Orders"* sample app.

> ### Note:  
> In addition to binding the inline count of the entity collection read by an `ODataListBinding` you can also use an `ODataPropertyBinding` with an absolute path to read a count separately:
> 
> ```xml
> <Title text="{/SalesOrderList/$count} Sales Orders"/>
> ```
> 
> The OData system query options `$apply`, `$filter`, and `$search` are supported:
> 
> ```xml
> 
> <Title 
> 	text="{
> 		path: '/SalesOrderList/$count', 
> 		parameters: {$filter: 'LifecycleStatus eq \'N\''}
> 		  } New Sales Orders"/>
> ```

