<!-- loio10ca58b701414f7f93cd97156f898f80 -->

# Automatic determination of $expand and $select

With automatic determination of `$expand` and `$select` \("auto-$expand/$select" in short\), the OData V4 Model computes `$expand` and `$select` query options for service requests from binding paths specified for control properties. This has the following advantages:

1.  You don't have to add or change `$select` or `$expand` in the binding parameters yourself.

2.  Auto-$expand/$select only selects data needed for the UI, so that you get a minimal response size and improved performance.


You switch on auto-$expand/$select by setting the flag `autoExpandSelect` during [model construction](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel/constructor).

It is still possible to specify `$expand` and `$select` in the binding parameters. This is useful if you need to access properties which are not bound on the UI. When auto-$expand/$select is switched on, you may add any path to a simple or structured property to `$select`, even if this path contains navigation properties. The binding converts this `$select` to a `$expand` if necessary. It is not possible to change `$expand` and `$select` via the binding's [changeParameters](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding/methods/changeParameters) API. You don't have to specify **key properties** in the binding's `$select` parameter if they aren't bound on the UI. These are selected automatically because keys are required in many scenarios, for example, to compute the edit-URL to update an entity.

In auto-$expand/$select mode, a parent binding aggregates the binding paths and query options of its child bindings in its `$select` and `$expand` options, so that they do not send own data services requests. This aggregation works as follows:

1.  If the request for the parent binding is **not sent** and the child binding is a list or context binding which has only OData system query options in its parameters, or is a property binding, the `$expand` and `$select` of the parent binding is extended to include the required properties of the child binding.

2.  If the request for the parent binding is **already sent** and the request already contains the aggregation for the child binding in its `$expand` and `$select`, the child binding's data is requested through the parent binding as in **1**.

3.  If the request for the parent binding is already sent but the request does not contain the aggregation for the child binding in its `$expand` and `$select`, and the additional binding paths do not contain collection-valued navigation properties, the parent binding will send an additional request for the missing data. In case of a list binding, these additional properties are not requested in normal list requests, e.g. when scrolling down in the table, but may be reread using `sap.ui.model.odata.v4.Context#requestSideEffects`.


In other cases the child binding is not aggregated and sends an own request.

The list binding for the table in the following sample leads to the following request \(reduced to `$expand` and `$select` parameters\):

`SalesOrderList?$select=BuyerName,LifecycleStatus,Note,SalesOrderID&$expand=SO_2_BP($select=BusinessPartnerID,CompanyName)`

```xml
<Table items="{/SalesOrderList}"
  ...
  <items>
    <ColumnListItem>
      <cells> <Text text="{BuyerName}"/> </cells>
      <cells> <Text text="{SO_2_BP/CompanyName}"/> </cells>
      <cells> <Input enabled="{= %{LifecycleStatus} === 'N' }" value="{Note}"/> </cells>
    </ColumnListItem>
  </items>
</Table>
```

If you use a list binding with factory function with auto-$expand/$select, you need to specify the binding parameters `$expand` and `$select` for all properties that may be needed by the factory function.

> ### Note:  
> During automatic determination of `$expand` and `$select` the factory function is called with a "virtual" context, that returns `undefined` for <code><a href="https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context/methods/getProperty">getProperty</a></code> calls.

For auto-$expand/$select the model metadata must be analyzed before sending the request. This allows further optimization of the request, also enabling access to the parent entity by reducing partner navigation properties in the path.

**Example:** A view shows a sales order together with its line items, with a line item binding that is relative to the sales order binding. Any property binding relative to the line item can then access a property of the sales order without causing a `$expand`. This even works if the property is needed only after the sales order data has been requested. This feature can be used to control the visibility or editability of a line item property based on the state of the sales order, or for value help at the line item.

This path reduction of partner navigation properties is also performed in `sap.ui.model.odata.v4.Context#requestSideEffects`, so that side effects on the sales order can be requested via the context of a line item.

