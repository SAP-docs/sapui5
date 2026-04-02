<!-- loiocda632b01c1e4a988ccecab759d19380 -->

# Upgrading Your OData Model

**On this page:**

-   [Transition to OData V4.01](upgrading-your-odata-model-cda632b.md#loiocda632b01c1e4a988ccecab759d19380__section_OD401)
-   [Transition from OData V2 to OData V4](upgrading-your-odata-model-cda632b.md#loiocda632b01c1e4a988ccecab759d19380__section_OD2OD4)
-   [Migration of Deprecated OData Model](upgrading-your-odata-model-cda632b.md#loiocda632b01c1e4a988ccecab759d19380__section_ODOD2)



<a name="loiocda632b01c1e4a988ccecab759d19380__section_OD401"/>

## Transition to OData V4.01

OData Version 4.01 comes with many new features; for details, see [What's New in OData Version 4.01](https://docs.oasis-open.org/odata/new-in-odata/v4.01/new-in-odata-v4.01.html). Once 4.01 will be supported by SAPUI5's `v4.ODataModel`, you'll need to consider various aspects. You can already start preparing your application for this transition.

While [2.7 Improved: Case-Insensitive System Query Options without $ prefix](https://docs.oasis-open.org/odata/new-in-odata/v4.01/cn04/new-in-odata-v4.01-cn04.html#sec_ImprovedCaseInsensitiveSystemQueryOp) may offer convenience for handwritten requests, it's a challenge for `v4.ODataModel`'s handling of system query options. Features like auto-$expand/$select need to take an application's $expand and $select parameters into account. Paging takes care of $top and $skip while data aggregation computes its own $apply. Thus the only supported syntax for system query options will continue to be lowercase with a leading dollar sign.

Starting with SAPUI5 1.141.0, an option that is considered an OData V4 custom query option today and might be treated as a system query option with 4.01 in the future thus causes a "\[FUTURE FATAL\]" warning, which will become an error when your application runs with a 4.01 service. This affects the following names: `apply, compute, count, expand, filter, format, id, index, levels, orderby, schemaversion, search, select, skip, top`

In general, there is a number of new features which are passed through by `v4.ODataModel`, but some may be incompatible for or unsupported by other parts of a client-side stack including application code. Keep in mind that switching to 4.01 requires extensive testing of your application! The following is a list of changes to pay attention to, but this is in no way meant to be complete:

-   [8.1 Improved: Exponential Notation for Decimals](https://docs.oasis-open.org/odata/new-in-odata/v4.01/cn04/new-in-odata-v4.01-cn04.html#sec_ImprovedExponentialNotationforDecima)

-   [8.2 Improved: Control Information without prefix odata](https://docs.oasis-open.org/odata/new-in-odata/v4.01/cn04/new-in-odata-v4.01-cn04.html#sec_ImprovedControlInformationwithoutpre)

    > ### Note:  
    > This change is taken care of by SAPUI5's `v4.ODataModel` and transformed back to the 4.0 format. No changes in your application code are needed here.

-   [8.3 Improved: @type for Built-In Primitive Types](https://docs.oasis-open.org/odata/new-in-odata/v4.01/cn04/new-in-odata-v4.01-cn04.html#sec_ImprovedtypeforBuiltInPrimitiveTypes)

    > ### Note:  
    > This change is taken care of by SAPUI5's `v4.ODataModel` and transformed back to the 4.0 format. No changes in your application code are needed here.

-   [8.4 New: Inlined JSON Streams](https://docs.oasis-open.org/odata/new-in-odata/v4.01/cn04/new-in-odata-v4.01-cn04.html#sec_NewInlinedJSONStreams)




<a name="loiocda632b01c1e4a988ccecab759d19380__section_OD2OD4"/>

## Transition from OData V2 to OData V4

This section outlines the main differences between the OData V2 and OData V4 models. While some of them are due to features that have not yet been implemented, many differences are due to the following issues:

-   Protocol incompatibility between OData V4 and OData V2

-   API cleanup and simplification

-   Adherence to OData V4 standards regarding the names and terms used in APIs


These differences will therefore remain even after all features have been implemented. The table below gives you an overview of these changes, as well as the reason behind them and \(if applicable\) how the OData V2 model mechanism is supported in the OData V4 model.


<table>
<tr>
<th valign="top">

Change

</th>
<th valign="top">

Reason

</th>
</tr>
<tr>
<td valign="top">

Binding parameter names: The binding parameter name for an OData system query option is identical to the system query option name: `$expand`, `$select`, ... \(V2 uses `expand`, `select`\).

</td>
<td valign="top">

Simplification: The OData V4 model simplifies the binding parameter structure to just one map where all entries in the map are OData query options, with the exception of entries that have a key starting with "$$" \(binding-specific parameters\). In all cases, the names of the binding parameters are exactly the same as in the OData URL sent to the server.

</td>
</tr>
<tr>
<td valign="top">

The model does not support the methods `getData`, `getObject`, `getOriginalProperty`, `getProperty`. For data access, use the context API instead of methods on the model.

</td>
<td valign="top">

OData requires asynchronous data retrieval: Synchronous data access requires that data has already been loaded from the server. This means there is no way of knowing whether this already happened, meaning the result of a synchronous access method is quite often unpredictable.

The OData V4 context API offers ansynchronous and synchronous access to the data of a specific context. It is no longer necessary to construct a path for data access as needed by the methods on the model. For more information, see the section *Context API* in [Bindings](bindings-54e0ddf.md).

</td>
</tr>
<tr>
<td valign="top">

Minimize APIs required for batch control: Model does not support the methods `getChangeBatchGroups`, `getChangeGroups`, `getDeferredGroups`, `setChangeBatchGroups`, `setChangeGroups`, `setDeferredBatchGroups`, `setDeferredGroups`, `setUseBatch` \(and corresponding model construction parameters\).

</td>
<td valign="top">

Simplification: Batch groups are solely defined via binding parameters with the corresponding parameters on the model as default. Application groups are by default deferred; there is no need to set or get deferred groups. You just need the `submitBatch` method on the model to control invocation of the batch. You can use the predefined batch group `"$direct"` to switch off batch either for the complete model or for a specific binding \(only possible for the complete model in V2\). For more information, see [Batch Control](batch-control-74142a3.md).

</td>
</tr>
<tr>
<td valign="top">

OData operations invoked via binding: Model does not support the method `callFunction`.

</td>
<td valign="top">

Simplification: Use an operation binding instead; it is now much easier to bind operation invocation results to controls.

</td>
</tr>
<tr>
<td valign="top">

No CRUD methods on model: Model does not support the methods `create`, `read`, `remove`, `update`.

</td>
<td valign="top">

Simplification: `read`, `update`, `create` and `remove` operations are available implicitly via the bindings. Bindings can also be used without controls. It is not possible to initiate requests for specific OData URLs. For more information, see [Accessing Data in Controller Code](accessing-data-in-controller-code-17b30ac.md).

</td>
</tr>
<tr>
<td valign="top">

No metadata access via model: Model does not support methods `getServiceAnnotations`, `getServiceMetadata`, `refreshMetadata` as well as methods corresponding to the events `metadataFailed`, `metadataLoaded`.

</td>
<td valign="top">

Simplification: Metadata is only accessed via `ODataMetaModel`. Metadata is only loaded when needed \(e.g. for type detection or to compute URLs for write requests\); the corresponding methods on the `v4.ODataMetaModel` use promises instead of events.

</td>
</tr>
<tr>
<td valign="top">

[sap.ui.model.odata.AnnotationHelper](https://ui5.sap.com/#/api/sap.ui.model.odata.AnnotationHelper) is not supported for OData V4.

</td>
<td valign="top">

Simplification: Much of the functionality in [sap.ui.model.odata.AnnotationHelper](https://ui5.sap.com/#/api/sap.ui.model.odata.AnnotationHelper) is provided by [sap.ui.model.odata.v4.ODataMetaModel](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataMetaModel)and [sap.ui.model.odata.v4.ODataModel](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel). You can find the remaining functionality in the OData V4 specific [sap.ui.model.odata.v4.AnnotationHelper](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.AnnotationHelper.html).

> ### Example:  
> The path syntax supported by the v4.ODataMetaModel, see [sap.ui.model.odata.v4.ODataMetaModel](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataMetaModel), method `requestObject` allows for navigation in the model's metadata; there is no need to use `AnnotationHelper` methods for this.



</td>
</tr>
<tr>
<td valign="top">

The property binding automatically determines the appropriate type depending on the property's metadata, unless a type is specified explicitly.

</td>
<td valign="top">

For more information, see [Type Determination](type-determination-53cdd55.md).

> ### Note:  
> By default, a property binding delivers a value formatted according to the target type of the control property it applies to, for example`boolean` in case of `<Icon src="sap-icon://message-warning" visible="{path: 'DeliveryDate', formatter: '.isOverdue'}">`. This leads to errors, because type determination adds the correct type for the `DeliveryDate` property, which is `DateTimeOffset`, and cannot format its value as `boolean`. In such cases, use `targetType: 'any'` as follows:
> 
> ```xml
> <Icon 
> 	src="sap-icon://message-warning" 
> 	visible="{
> 		path: 'DeliveryDate', 
> 		targetType: 'any', 
> 		formatter: '.isOverdue'
> 	}"/>
> ```
> 
> The above also applies to [Expression Bindings](expression-binding-daf6852.md). In this case, there is a convenience notation `%{binding}`, which is a shortcut for `${path: 'binding', targetType: 'any'}`.

> ### Note:  
> A property binding can have an object value. For more information, see [Property Binding With an Object Value](initialization-and-read-requests-fccfb2e.md#loiofccfb2eb41414f0792c165e69a878717__section_PBOV):
> 
> ```xml
> <SimpleForm binding="{/BusinessPartnerList('42')}">
> 	<Label text="Phone number list"/>
> 	<Text
> 		text="{
> 			path: 'BP_2_CONTACT', 
> 			mode: 'OneTime', 
> 			targetType: 'any', 
> 			formatter: '.formatPhoneNumbersAsCSV'
> 		}"/>
> </SimpleForm>
> ```



</td>
</tr>
<tr>
<td valign="top">

There is no `AnalyticalBinding` and no `ODataTreeBinding` available. Data aggregation and recursive hierarchy support are available with the `sap.ui.model.odata.v4.ODataListBinding` using the `$$aggregate` binding parameter and the related [`sap.ui.model.odata.v4.ODataListBinding#setAggregation`](https://ui5.sap.com/#api/sap.ui.model.odata.v4.ODataListBinding/methods/setAggregation) method.

</td>
<td valign="top">

Aggregated data as well as hierarchical data is displayed in a table or list. As a result, the interface of the table or list control and the list binding is reused and enhanced without providing new binding classes. This allows to reuse functionality of the `sap.ui.model.odata.v4.ODataListBinding`.

</td>
</tr>
<tr>
<td valign="top">

There is no global cache of entities. Instead, data is kept with respect to bindings and different data for the same entity may be displayed. As a consequence, it is important to use relative bindings as described in [Data Reuse](data-reuse-648e360.md) if the same data should be displayed.

</td>
<td valign="top">

It is now possible to show different states of the same entity, e.g. to allow comparison between the data states before and after a change.

</td>
</tr>
<tr>
<td valign="top">

A selection is managed by the `ODataModel` and not by the table.

</td>
<td valign="top">

The `ODataModel` is responsible for fetching data for the client and caching data on the client. It is important for the model to know which records are selected, so that the respective `sap.ui.model.odata.v4.Context` instances remain available. Also, possible future improvements require the handling of record selection in the `ODataModel`.

</td>
</tr>
<tr>
<td valign="top">

Data of selected contexts may not be available synchronously.

</td>
<td valign="top">

In applications, a user may continue editing after selecting a record. This might cause side effects; see [`sap.ui.model.odata.v4.Context#requestSideEffects`](https://ui5.sap.com/#api/sap.ui.model.odata.v4.Context%23methods/requestSideEffects). The user may also refresh, change, sort, or filter. In all these cases, the expectation is that the client shows up-to-date data. For selected contexts, this means that, instead of keeping their data up to date all the time, their data needs to be accessed asynchronously when needed.

</td>
</tr>
</table>

**Related Information:**

-   [`sap.ui.model.odata.AnnotationHelper`](https://ui5.sap.com/#/api/sap.ui.model.odata.AnnotationHelper)
-   [`sap.ui.model.odata.v4.ODataMetaModel`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataMetaModel)
-   [`sap.ui.model.odata.v4.ODataModel`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel)



<a name="loiocda632b01c1e4a988ccecab759d19380__section_ODOD2"/>

## Migration of Deprecated OData Model

> ### Note:  
> The `sap.ui.model.odata.ODataModel` is deprecated and may be removed in a future major SAPUI5 version. As alternatives, we provide the `sap.ui.model.odata.v2.ODataModel` \(OData V2 model\) and the [`sap.ui.model.odata.v4.ODataModel`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel) \(OData V4 model\). If you're using the `sap.ui.model.odata.ODataModel`, migrate your OData model to either OData Version 2.0 or OData Version 4.0.

The following table shows the supported features for the `sap.ui.model.odata.v2.ODataModel` and `sap.ui.model.odata.ODataModel`:


<table>
<tr>
<th valign="top">

Feature

</th>
<th valign="top">

`sap.ui.model.odata.v2.ODataModel` 

</th>
<th valign="top">

`sap.ui.model.odata.ODataModel` 

</th>
</tr>
<tr>
<td valign="top">

OData version support

</td>
<td valign="top">

2.0

</td>
<td valign="top">

2.0

</td>
</tr>
<tr>
<td valign="top">

JSON format

</td>
<td valign="top">

Yes \(default\)

</td>
<td valign="top">

Yes

</td>
</tr>
<tr>
<td valign="top">

XML format

</td>
<td valign="top">

Yes

</td>
<td valign="top">

Yes \(default\)

</td>
</tr>
<tr>
<td valign="top">

Support of two-way binding mode

</td>
<td valign="top">

Yes; for property changes only, not yet implemented for aggregations

</td>
<td valign="top">

Experimental; only properties of one entity can be changed at the same time

</td>
</tr>
<tr>
<td valign="top">

Default binding mode

</td>
<td valign="top">

One-way binding

</td>
<td valign="top">

One-way binding

</td>
</tr>
<tr>
<td valign="top">

Client-side sorting and filtering

</td>
<td valign="top">

Yes

For more information, see [API Reference: sap.ui.model.odata.OperationMode](https://ui5.sap.com/#/api/sap.ui.model.odata.OperationMode). 

</td>
<td valign="top">

No

</td>
</tr>
<tr>
<td valign="top">

$batch

</td>
<td valign="top">

Yes; all requests can be batched

</td>
<td valign="top">

Only manual batch requests are possible

</td>
</tr>
<tr>
<td valign="top">

Data cache in model

</td>
<td valign="top">

All data is cached in the model

</td>
<td valign="top">

Manually requested data is **not** cached

</td>
</tr>
<tr>
<td valign="top">

Automatic refresh

</td>
<td valign="top">

Yes \(default\)

</td>
<td valign="top">

Yes

</td>
</tr>
<tr>
<td valign="top">

Message handling

</td>
<td valign="top">

Yes, see [Error, Warning, and Info Messages](error-warning-and-info-messages-62b1481.md) 

</td>
<td valign="top">

No

</td>
</tr>
</table>

