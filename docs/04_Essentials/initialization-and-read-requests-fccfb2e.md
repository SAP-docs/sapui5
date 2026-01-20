<!-- loiofccfb2eb41414f0792c165e69a878717 -->

# Initialization and Read Requests



Bindings are called **absolute** if their path starts with a forward slash "/"; otherwise they are called **relative**. Relative bindings are initial meaning that they have no data as long as they have no context. They obtain a context either from a list binding where the context represents an entity for a certain index in an entity collection or from a context binding where the context represents the one entity of the context binding. The binding which created the context is called the **parent binding** of the relative binding; the relative binding is a **child binding** of its parent binding. Dependent bindings of a binding are the set of child bindings of the binding itself and the dependent bindings of its children. If the binding has no child bindings, it is the empty set.

An absolute binding creates a data service request to read data once data is requested by a bound control or a child control with a relative binding. The read URL path is the model's service URL concatenated with the binding's path. The read URL query options are the union of the binding's and model query options; query options specified for the binding overwrite model query options.

For the absolute property bindings of singletons, see [Absolute Property Bindings of Singletons](data-reuse-648e360.md#loio648e360fa22d46248ca783dc6eb44531__section_APBS).

A relative list or context binding creates a data service request once it has a context in the following cases:

-   The relative binding has parameters, such as OData query options like `$select`, or binding-specific parameters with a name starting with `$$`; for more information, see [Parameters](parameters-1ab4f62.md). If you want a relative binding to create its own data service request, use the binding-specific parameter `$$ownRequest`.

-   You specify a dynamic filter or dynamic sorter for a list binding and use `sap.ui.model.odata.OperationMode.Server`, see sections [Filtering](filtering-5338bd1.md) and [Sorting](sorting-d2ce3f5.md).


> ### Note:  
> If the model is configured to compute `$expand` and `$select` automatically, this behaviour changes, see [Automatic determination of $expand and $select](automatic-determination-of-expand-and-select-10ca58b.md).

> ### Note:  
> A relative property binding never creates a data service request; its binding parameters are ignored in this case.

In all other cases, a relative binding reads data from its parent binding that created the context. In case of an own data service request, the read URL path is the model's service URL concatenated with the path of the binding's context and the binding's path. Set the binding-specific parameter `$$canonicalPath` to `true` to use the canonical path computed from the context's path instead of the context's path in the read URL.

> ### Caution:  
> A relative list binding cannot share data that another list binding has created on the client. Only data that has been read via a data service request can be shared.

The point in time that is used to actually send the request is determined as explained in the section [Batch Control](batch-control-74142a3.md). Bindings which create own data service requests cache data from data service responses. They do not send a data service request if data can be served from this cache.

> ### Note:  
> List bindings read data in pages, i.e. they only access a certain index range from their bound collection; they only initiate a new data service request if indexes are accessed which have not yet been read.

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
> Refresh is only allowed if there are no pending changes for the context and all its dependent bindings. If you have a relative binding with changes and this binding loses its context, the former parent binding does not report pending changes: the changes are kept, but the relation between these bindings is lost. You can do the following:
> 
> -   To find out if there are pending changes, use `sap.ui.model.odata.v4.ODataModel#hasPendingChanges`.
> 
> -   To save the changes, use `sap.ui.model.odata.v4.ODataModel#submitBatch`; to reset the changes, use `sap.ui.model.odata.v4.ODataModel#resetChanges`, `sap.ui.model.odata.v4.ODataListBinding#resetChanges`, `sap.ui.model.odata.v4.ODataContextBinding#resetChanges`, or `sap.ui.model.odata.v4.Context#resetChanges`. To get rid of a transient entity you can use `sap.ui.model.odata.v4.Context#delete`.
> 
> -   If you set a context at the relative binding, the new parent binding will report the pending changes again.



### Allow removal of a single entity when refreshing

After updating an entity, it may no longer match the query options for the collection which loaded the entity, in particular `$filter`. You can decide whether the refresh on the context of a list binding should ignore the query options or not: The corresponding context may be removed from the list binding for the collection by setting the parameter `bAllowRemoval` to `true`.

Note that changes to the list like a different sort order require a refresh of the whole list.

An example can be seen in the [SalesOrders](https://ui5.sap.com/#/sample/sap.ui.core.sample.odata.v4.SalesOrders/preview) application. The table has a filter applied to show only the sales orders with *Life Cycle Status = "New"*. When confirming a sales order, its status will change to *In Process* and does not match the filter anymore. This sales order is then refreshed and will be removed from the list as the `bAllowRemoval` flag is set to `true`. This is shown in the following code snippet:

> ### Example:  
> refresh with allow removal
> 
> ```js
> oAction.invoke("confirmSalesOrderActionGroup").then(function () {
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

The lower table for the line items has a relative binding. As it has parameters defined, it initiates its own data service request once it receives its binding context.



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



<a name="loiofccfb2eb41414f0792c165e69a878717__section_PBOV"/>

## Property Binding With an Object Value

A property binding can have an object value if the target type specified in the corresponding control property's binding info is "any" and the binding is relative or points to metadata. The binding's mode has to be `OneTime`, see [sap.ui.model.BindingMode](https://ui5.sap.com/#/api/sap.ui.model.BindingMode), unless the binding is for an action advertisement.

A `OneWay` binding mode is also supported for relative read-only data \(not metadata!\) bindings to complex types and collections thereof; for entity types, use a context binding instead.

**Example: Using the controller method `'formatPhoneNumbersAsCSV'` to show a comma-separated list of phone numbers for business partner contacts**

```js
<SimpleForm binding="{/BusinessPartnerList('42')}">
	<Label text="Phone number list" />
	<Text text="{path : 'BP_2_CONTACT', mode : 'OneTime', targetType : 'any', formatter : '.formatPhoneNumbersAsCSV'}" />
</SimpleForm>
```

For details, see [`sap.ui.model.odata.v4.ODataModel#bindProperty`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel/methods/bindProperty).



<a name="loiofccfb2eb41414f0792c165e69a878717__section_PBAE"/>

## Property Binding To an Array Element

A property binding can target an array element inside a collection of primitive type via a hard-coded index. For a use case, see [Geography And Geometry Types](type-determination-53cdd55.md#loio53cdd55a77ce4f33a14bd0767a293063__section_GGT). In general, such a binding needs to be read-only, for example, because it belongs to a text control, involves a formatter function, or is an expression binding. There is no need to explicitly set its binding mode to `OneTime` or `OneWay`\(see [`sap.ui.model.BindingMode`](https://ui5.sap.com/#/api/sap.ui.model.BindingMode)\). Both [auto-`$expand/$select`](automatic-determination-of-expand-and-select-10ca58b.md) as well as automatic [Type Determination](type-determination-53cdd55.md) are supported.

You can also address the entire array, for example within an [Expression Binding](expression-binding-daf6852.md) like "\{= JSON.stringify\(%\{coordinates\}\) \}", but you need to take care to avoid automatic [Type Determination](type-determination-53cdd55.md) in this case.

> ### Example:  
> Binding to an array \(element\)
> 
> ```
> <FlexBox binding="{/Person('42')/Address/GeoLocation}">
>     <Text id="coordinates" text="{= JSON.stringify(%{coordinates}) }"/>
>     <Text id="longitude" text="{coordinates/0}"/>
>     <Text id="latitude" text="{coordinates/1}"/>
> </FlexBox>
> ```



<a name="loiofccfb2eb41414f0792c165e69a878717__section_SE"/>

## Side Effects

Editing properties of an entity sometimes causes side effects on other properties within the same or a related entity. Normally, a `PATCH` request which sends the user's input to the server includes side effects for the same entity \(if relevant for the UI\) within its response. Sometimes, however, an application needs more control on how and when this happens, or needs side effects on related entities as well.

You can use [sap.ui.model.odata.v4.Context\#requestSideEffects](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context/methods/requestSideEffects) to load side effects. This method can be called on the bound context of a context binding, a row context of a list binding, the header context of a list binding, or on the return value context of an operation binding. Collection-valued navigation properties are fully supported, so an efficient request is sent instead of a simple refresh. The `validateFieldGroup` event provides a suitable point in time to request side effects after a certain group of fields has been changed. Using the `validateFieldGroup` event allows to initiate the side effect request early enough, so that it is sent in the same batch request as the `PATCH` request. For more information, see [Field Groups](field-groups-5b07753.md). The API strikes a balance between the generic annotation-based use and specific hard-coded uses. The `TargetEntities` and `TargetProperties` of the `com.sap.vocabularies.Common.v1.SideEffects` annotation can be used directly as input for `sap.ui.model.odata.v4.Context#requestSideEffects`. Note that the OData V4 model does not evaluate the `SourceEntities` and`SourceProperties` of the `com.sap.vocabularies.Common.v1.SideEffects` annotation. When requested from the OData V4 meta model, the annotation value looks as follows:

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

An additional paging mechanism is Server-Driven Paging, for which the server returns only a part of the requested data in order to limit the response size. This mechanism is supported by the OData V4 model since SAPUI5 1.72. The model will provide the data retrieved with the response to the control or application. A follow-up request is not initiated automatically but only once the control or application request additional data from the model.



<a name="loiofccfb2eb41414f0792c165e69a878717__section_ENPL"/>

## Expensive Navigation Properties in Lists

When working with collections, expanding certain navigation properties can significantly impact performance. This is especially true if these properties require the loading of large or complex datasets. To improve performance, the `ODataListBinding` provides the [`$$separate`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel%23methods/bindList) binding parameter. This parameter lets you specify expensive navigation property names that are omitted from the main list request. These properties are loaded in parallel via separate batch requests. As a result, the main list loads more quickly, making the table interactive sooner. The expensive navigation properties are fetched in the background and merged as soon as their data becomes available.

The following oversimplified XML view shows a table. Its list binding specifies two expensive navigation properties within `$$separate`. For the initial loading and subsequent paging requests, three parallel batch requests are sent: one for the main list and one for each specified navigation property. As soon as the main list is received, data is displayed in the table. The columns for the expensive navigation properties remain empty until their respective requests complete. Optionally, to indicate that certain cells are still loading, the `busy` property of a control \(e.g. `Text` control\) can be bound to the relevant path of the expensive navigation property. For example, `busy="{= %{EMPLOYEE_2_MANAGER === undefined} }"` shows a busy indicator for cells that are still loading, because `undefined` means that the data is not yet loaded.

```xml
<Table items="{
        path: '/EMPLOYEES',
        parameters: {
            $$separate: ['EMPLOYEE_2_MANAGER', 'EMPLOYEE_2_TEAM']
        }
    }">
    <columns>
        <Column><Label text="ID"/></Column>
        <Column><Label text="Employee"/></Column>
        <Column><Label text="Manager"/></Column>
        <Column><Label text="Team Budget"/></Column>
    </columns>
    <ColumnListItem>
        <Text text="{ID}"/>
        <Text text="{Name}"/>
        <Text text="{EMPLOYEE_2_MANAGER/Name}"/>
        <Text text="{EMPLOYEE_2_TEAM/Budget}"/>
    </ColumnListItem>
</Table>
```

In addition to the simple data binding, the completion of a separate request can be handled by implementing the [`separateReceived`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding%23events/separateReceived) event. This event provides parameters to help retrieve the loaded data or handle a failed request.

```js

oListBinding.attachEvent("separateReceived", async (oEvent) => {
    const {property, start, length, messagesOnError} = oEvent.getParameters();
 
    if (messagesOnError) {
        const aMessages = messagesOnError.map((oMessage) => oMessage.getMessage());
        MessageBox.error(aMessages.join("\n"));
        oEvent.preventDefault();
        return;
    }
 
    const aContexts = await oListBinding.requestContexts(start, length);
    const aResults = aContexts.map((oContext) => oContext.getObject(property));
});
```

If an expensive request is successful, the `property`, `start`, and `length` parameters can be used in combination with [`ODataListBinding#requestContexts`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding%23methods/requestContexts) to retrieve the loaded data of the corresponding expensive request. The `start` and `length` correspond to the request’s `$skip` and `$top` system query options. If an expensive request fails, the additional `messagesOnError` parameter provides the messages of the failed batch request as UI5 messages. By calling `oEvent.preventDefault()`, you can suppress the automatic reporting of these messages to the message model, allowing for custom error handling.

