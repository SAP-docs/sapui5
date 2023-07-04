<!-- loiofccfb2eb41414f0792c165e69a878717 -->

# Initialization and Read Requests



Bindings are called **absolute** if their path starts with a forward slash "/"; otherwise they are called **relative**. Relative bindings are initial meaning that they have no data as long as they have no context. They obtain a context either from a list binding where the context represents an entity for a certain index in an entity collection or from a context binding where the context represents the one entity of the context binding. The binding which created the context is called the **parent binding** of the relative binding; the relative binding is a **child binding** of its parent binding. Dependent bindings of a binding are the set of child bindings of the binding itself and the dependent bindings of its children. If the binding has no child bindings, it is the empty set.

An absolute binding creates a data service request to read data once data is requested by a bound control or a child control with a relative binding. The read URL path is the model's service URL concatenated with the binding's path. The read URL query options are the union of the binding's and model query options; query options specified for the binding overwrite model query options.

For the absolute property bindings of singletons, see [Absolute Property Bindings of Singletons](data-reuse-648e360.md#loio648e360fa22d46248ca783dc6eb44531__section_APBS).

A relative list or context binding creates a data service request once it has a context in the following cases:

-   The relative binding has parameters, such as OData query options like `$select`, or binding-specific parameters with a name starting with `$$` see the *Parameters* subsection below. If you want a relative binding to create its own data service request, use the binding-specific parameter `$$ownRequest`.

-   You specify a dynamic filter or dynamic sorter for a list binding and use `sap.ui.model.odata.OperationMode.Server`, see sections [Filtering](filtering-5338bd1.md) and [Sorting](sorting-d2ce3f5.md).


> ### Note:  
> If the model is configured to compute `$expand` and `$select` automatically, this behaviour changes, see [Automatic determination of $expand and $select](automatic-determination-of-expand-and-select-10ca58b.md).

> ### Note:  
> A relative property binding never creates a data service request; its binding parameters are ignored in this case.

In all other cases, a relative binding reads data from its parent binding that created the context. In case of an own data service request, the read URL path is the model's service URL concatenated with the path of the binding's context and the binding's path. Set the binding-specific parameter `$$canonicalPath` to `true` to use the canonical path computed from the context's path instead of the context's path in the read URL.

The point in time that is used to actually send the request is determined as explained in the section [Batch Control](batch-control-74142a3.md). Bindings which create own data service requests cache data from data service responses. They do not send a data service request if data can be served from this cache.

> ### Note:  
> List bindings read data in pages, i.e. they only access a certain index range from their bound collection; they only trigger a new data service request if indexes are accessed which have not yet been read.

You can delete the cache for an absolute binding using its `refresh` method. The method also deletes the caches of child bindings of the absolute binding.

> ### Note:  
> There must be no pending property changes for a binding and its child bindings when calling the `refresh` method. Use the binding's `hasPendingChanges` method to check for pending changes before you delete the cache. To reset pending changes, use `sap.ui.model.odata.v4.ODataModel#resetChanges`, `sap.ui.model.odata.v4.ODataListBinding#resetChanges`,`sap.ui.model.odata.v4.ODataContextBinding#resetChanges`, or `sap.ui.model.odata.v4.Context#resetChanges`. To get rid of a transient entity you can use `sap.ui.model.odata.v4.Context#delete`.

You can refresh all bindings with `ODataModel.refresh`, see [ODataModel.refresh](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel/methods/refresh) in the Demo Kit.



### Refresh a single entity

You can refresh a **single** entity by calling [`sap.ui.model.odata.v4.Context#refresh`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context/methods/refresh) or the bound context or return value context of an [`sap.ui.model.odata.v4.ODataListBinding`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding/overview) which corresponds to this entity. This also refreshes all dependent bindings of its contexts.

> ### Example:  
> Usage of Context\#refresh for a context in a list binding
> 
> ```
> onRefreshSelectedSalesOrder : function () {
>     // within a sap.m.Table bound to a OData V4 list binding get the OData V4 context for the selected entity
>     var oSalesOrderContext = this.byId("SalesOrders").getSelectedItem().getBindingContext();
>       
>     if (!oSalesOrderContext.hasPendingChanges()) {
>         oSalesOrderContext.refresh();
>     }
> },
> ```

> ### Note:  
> -   Contexts of an [`sap.ui.model.odata.v4.ODataListBinding`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding/overview) and the bound context of an [`sap.ui.model.odata.v4.ODataContextBinding`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataContextBinding/overview) can only be refreshed if the binding is not relative to an [`sap.ui.model.odata.v4.Context`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Contex/overview).
> 
> -   Refresh is only allowed if there are no pending changes for the context and all its dependent bindings. If you have a relative binding with changes and this binding loses its context, the former parent binding does not report pending changes: the changes are kept, but the relation between these bindings is lost. You can do the following:
> 
>     -   To find out if there are pending changes, use `sap.ui.model.odata.v4.ODataModel#hasPendingChanges`.
> 
>     -   To save the changes, use `sap.ui.model.odata.v4.ODataModel#submitBatch`; to reset the changes, use `sap.ui.model.odata.v4.ODataModel#resetChanges`, `sap.ui.model.odata.v4.ODataListBinding#resetChanges`, `sap.ui.model.odata.v4.ODataContextBinding#resetChanges`, or `sap.ui.model.odata.v4.Context#resetChanges`. To get rid of a transient entity you can use `sap.ui.model.odata.v4.Context#delete`.
> 
>     -   If you set a context at the relative binding, the new parent binding will report the pending changes again.



### Allow removal of a single entity when refreshing

After updating an entity, it may no longer match the query options for the collection which loaded the entity, in particular `$filter`. You can decide whether the refresh on the context of a list binding should ignore the query options or not: The corresponding context may be removed from the list binding for the collection by setting the parameter `bAllowRemoval` to `true`.

Note that changes to the list like a different sort order require a refresh of the whole list.

An example can be seen in the [SalesOrders](https://ui5.sap.com/#/sample/sap.ui.core.sample.odata.v4.SalesOrders/preview) application. The table has a filter applied to show only the sales orders with *Life Cycle Status = "New"*. When confirming a sales order, its status will change to *In Process* and does not match the filter anymore. This sales order is then refreshed and will be removed from the list as the `bAllowRemoval` flag is set to `true`. This is shown in the following code snippet:

> ### Example:  
> refresh with allow removal
> 
> ```js
> oAction.execute("confirmSalesOrderActionGroup").then(function () {
>     oConfirmedSalesOrderContext.refresh(undefined, true); // bAllowRemoval = true
> });
> ```

For details, see [ODataListBinding.refresh](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding/methods/refresh), [ODataContextBinding.refresh](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataContextBinding/methods/refresh) and [ODataPropertyBinding.refresh](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataPropertyBinding/methods/refresh) in the Demo Kit.

**Example: Absolute and relative bindings created by an XML view**

```js

<Table items="{
 path : '/SalesOrderList',
 parameters : {
  $expand : 'SO_2_BP',
  $select : 'BuyerName,CurrencyCode,GrossAmount,Note,SalesOrderID'
 }}">
 ...
 <items>  
  <ColumnListItem>
   <cells> 
    <Text text="{SalesOrderID}"/> 
    <Text text="{SO_2_BP/CompanyName}"/>
    <Text text="{BillingStatus}"/> 
   </cells>
  </ColumnListItem>

 </items>
</Table>

<Table items="{
 path : 'SO_2_SOITEM',
 parameters : {
    $select: "DeliveryDate,GrossAmount,SalesOrderID"
 }
>
...
</Table>

```

The above sample shows an absolute list binding: A table's `items` aggregation is bound to `/SalesOrderList` using the `$expand` and `$select` query options as binding parameters. The columns define relative bindings with paths `SalesOrderID`, `SO_2_BP/CompanyName`, and `BillingStatus` with the absolute list binding as parent binding.

> ### Note:  
> The `BillingStatus` remains empty and logs an error to the browser console as this structural property is not part of the `$select` specified for the list binding.

The lower table for the line items has a relative binding. As it has parameters defined, it triggers its own data service request once it receives its binding context.



<a name="loiofccfb2eb41414f0792c165e69a878717__section_fkt_g1r_mgb"/>

## Property Binding to Metadata

You can use `##` in a property binding's path to branch from data into metadata.

**Example: Determine label from the corresponding annotation for property `GrossAmount`**

```js

<SimpleForm binding="{/SalesOrderList('42')}">
	<Label text="{GrossAmount##@com.sap.vocabularies.Common.v1.Label}" />
	<Text text="{GrossAmount}" />
</SimpleForm>


```

For details, see [`sap.ui.model.odata.v4.ODataModel#bindProperty`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel/methods/bindProperty).



<a name="loiofccfb2eb41414f0792c165e69a878717__section_g5j_v1r_mgb"/>

## Property Binding With an Object Value

A property binding can have an object value, if the target type specified in the corresponding control property's binding info is "any" and the binding is relative or points to metadata. The binding's mode has to be `OneTime`, see [sap.ui.model.BindingMode](https://ui5.sap.com/#/api/sap.ui.model.BindingMode), unless the binding is for an action advertisement.

**Example: Using the controller method `'formatPhoneNumbersAsCSV'` to show a comma-separated list of phone numbers for business partner contacts**

```js
<SimpleForm binding="{/BusinessPartnerList('42')}">
	<Label text="Phone number list" />
	<Text text="{path : 'BP_2_CONTACT', mode : 'OneTime', targetType : 'any', formatter : '.formatPhoneNumbersAsCSV'}" />
</SimpleForm>
```

For details, see [`sap.ui.model.odata.v4.ODataModel#bindProperty`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel/methods/bindProperty).



<a name="loiofccfb2eb41414f0792c165e69a878717__section_SE"/>

## Side Effects

Editing properties of an entity sometimes causes side effects on other properties within the same or a related entity. Normally, a `PATCH` request which sends the user's input to the server includes side effects for the same entity \(if relevant for the UI\) within its response. Sometimes, however, an application needs more control on how and when this happens, or needs side effects on related entities as well.

You can use [sap.ui.model.odata.v4.Context\#requestSideEffects](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context/methods/requestSideEffects) to load side effects. This method can be called on the bound context of a context binding, a row context of a list binding, the header context of a list binding, or on the return value context of an operation binding. Collection-valued navigation properties are fully supported, so an efficient request is sent instead of a simple refresh. The `validateFieldGroup` event provides a suitable point in time to request side effects after a certain group of fields has been changed. Using the `validateFieldGroup` event allows to trigger the side effect request early enough, so that it is sent in the same batch request as the `PATCH` request. For more information, see [Field Groups](field-groups-5b07753.md). The API strikes a balance between the generic annotation-based use and specific hard-coded uses. The `TargetEntities` and `TargetProperties` of the `com.sap.vocabularies.Common.v1.SideEffects` annotation can be used directly as input for `sap.ui.model.odata.v4.Context#requestSideEffects`. Note that the OData V4 model does not evaluate the `SourceEntities` and`SourceProperties` of the `com.sap.vocabularies.Common.v1.SideEffects` annotation. When requested from the OData V4 meta model, the annotation value looks as follows:

```json
{
    "SourceEntities" : [{
        "$NavigationPropertyPath" : ""
    }, ...],
    "SourceProperties" : [{
        "$PropertyPath" : "Name"
    }, ...],
    "TargetEntities" : [{
        "$NavigationPropertyPath" : "DraftAdministrativeData"
    }, ...],
    "TargetProperties" : ["DraftAdministrativeData/*", ...]
}
```

Consider using the binding-specific `$$patchWithoutSideEffects` parameter when using `sap.ui.model.odata.v4.Context#requestSideEffects`. This parameter may be used to prevent the implicit loading of side effects with the `PATCH` response, see e.g. [sap.ui.model.odata.v4.ODataModel\#bindContext](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel/methods/bindContext). It can be set on context bindings and list bindings. If the parameter is not specified in a relative binding, the parameter value from the parent binding is used.

The `sap.ui.model.odata.v4.Context#requestSideEffects` API requires a single array as parameter, namely the concatenation of `TargetEntities` and `TargetProperties`.



<a name="loiofccfb2eb41414f0792c165e69a878717__section_uz4_fzq_xlb"/>

## Paging

The OData V4 model automatically determines the system query options `$top` and `$skip` based on the data range requested by the control or the application. In the example below, the resulting first request is `GET People('angelhuffman')/Friends?$expand=Friends&$skip=0&$top=107`. The value for `$top` is calculated from the length of the requested data \(7\) plus the prefetch size provided by the control \(100\). Note that adding `$top` and`$skip` for a nested collection is not supported.

```xml

<table:Table id="PeopleTable" width="auto" title="People" visibleRowCount="7"
        rows="{
            path:'/People(\'angelhuffman\')/Friends',
            parameters: {
                $expand:'Friends'
            }
        }">
 
    <table:columns>
    ...
    </table:columns>
</table:Table>

```

An additional paging mechanism is Server-Driven Paging, for which the server returns only a part of the requested data in order to limit the response size. This mechanism is supported by the OData V4 model since SAPUI5 1.72. The model will provide the data retrieved with the response to the control or application. A follow-up request is not triggered automatically, but only once the control or application request additional data from the model.

