<!-- loio6c47b2b39db9404582994070ec3d57a2 -->

# OData V2 Model

The OData V2 Model enables binding of controls to data from OData services.

The OData model is a server-side model, meaning that the data set is only available on the server and the client only knows the currently visible \(requested\) data. Operations, such as sorting and filtering, are done on the server. The client sends a request to the server and shows the returned data.

> ### Note:  
> Requests to the back end are triggered by list bindings \(`ODataListBinding`\), context bindings \(`ODataContextBinding`\), and CRUD functions provided by the `ODataModel`. Property bindings \(`ODataPropertyBindings`\) do not trigger requests.

The OData model currently supports OData version 2.0.

The following two versions of the OData model are implemented: `sap.ui.model.odata.ODataModel` and `sap.ui.model.odata.v2.ODataModel`. The `v2.ODataModel` has an improved feature set and new features will only be implemented in this model. `sap.ui.model.odata.ODataModel` is deprecated. We recommend to only use `v2.ODataModel`.

The following table shows the supported features for both OData models:


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

> ### Note:  
> Be aware of the Same-Origin-Policy security concept which prevents access to back ends on different domains or sites.

The requests to the service to fetch data are made automatically based on the data bindings that are defined for the controls.

**Related Information**  


[API Reference: `sap.ui.model.odata.v2.ODataModel`](https://ui5.sap.com/#/api/sap.ui.model.odata.v2.ODataModel)

 <a name="loio218afa0780da42fd982b72e992fb57d2"/>

<!-- loio218afa0780da42fd982b72e992fb57d2 -->

## Creating the Model Instance

One OData model instance can only cover one OData service. For accessing multiple services, you have to create multiple OData model instances.

The only mandatory parameter when creating an `ODataModel` instance is the service URL. It can be passed as first parameter or within the `mParameters` map to the constructor.



```js
// "ODataModel" required from module "sap/ui/model/odata/v2/ODataModel"
var oModel = new ODataModel("http://services.odata.org/Northwind/Northwind.svc/");
var oModel = new ODataModel({serviceUrl: "http://services.odata.org/Northwind/Northwind.svc"});
```

When creating an `ODataModel` instance, a request is sent to retrieve the service metadata:

```
http://services.odata.org/Northwind/Northwind.svc/$metadata
```

 <a name="loio71a3ae02691147abaf6d78a553d50161"/>

<!-- loio71a3ae02691147abaf6d78a553d50161 -->

## Service Metadata

The service metadata is cached per service URL. Multiple OData models that are using the same service can share this metadata.

Only the first model instance triggers a `$metadata` request. A JSON representation of the service metadata can be accessed by calling the `getServiceMetadata()` method on an OData model instance.

```js

var oMetadata = oModel.getServiceMetadata();
```

> ### Note:  
> In the `v2.ODataModel`, the service metadata is loaded asynchronously. It is not possible to load it synchronously. To get notified when the loading is finished, attach the `metadataLoaded` event.

 <a name="loio82afe9152177428290cc9d5dbd90e245"/>

<!-- loio82afe9152177428290cc9d5dbd90e245 -->

## Adding Additional URL Parameters

For OData services, you can use URL parameters for configuration. SAPUI5 sets most URL parameters automatically, according to the respective binding.

For authentication tokens or general configuration options, for example, you can add additional arguments to the request URL. Some of the parameters must not be included in every request, but should only be added to specific list or context bindings, such as `$expand` or `$select`. For this, the binding methods provide the option to pass a map of parameters, which are then included in all requests for this specific binding. The OData model currently only supports `$expand` and `$select`.

There are different ways to add URL parameters to the requests:

-   Appending parameters to the service URL:

    ```js
    // "ODataModel" required from module "sap/ui/model/odata/v2/ODataModel"
    var oModel = new ODataModel("http://myserver/MyService.svc/?myParam=value&myParam2=value");
    ```

    These parameters will be included in every request sent to the OData server.

-   Passing URL parameters with the `mparameters` map

    You can pass URL parameters that are used for `$metadata` requests only \(`metadataUrlParams`\) as well as URL parameters that are included only in data requests \(`serviceUrlParams`\). The parameters are passed as maps:

    ```js
    // "ODataModel" required from module "sap/ui/model/odata/v2/ODataModel"
    var oModel = new ODataModel({ 
        serviceUrl: "http://services.odata.org/Northwind/Northwind.svc",    
        serviceUrlParams: {
            myParam: "value1",
            myParam2: "value2"
        },
        metadataUrlParams: {
            myParam: "value1",
            myParam2: "value2"
        }
    });
    ```


 <a name="loio7370a173015e49929e011d6ab6b4885c"/>

<!-- loio7370a173015e49929e011d6ab6b4885c -->

## Custom HTTP Headers

You can add custom headers which are sent with each request.

To do this, provide a map of headers to the OData model constructor or use the `setHeaders()` function:

-   Passing custom headers with the `mparameters` map

    ```js
    var oModel = new sap.ui.model.odata.v2.ODataModel({
        headers: {
            "myHeader1" : "value1",
            "myHeader2" : "value2"
        }
    });
    ```

-   Setting custom headers globally on a model instance

    ```js
    oModel.setHeaders({"myHeader1" : "value1", "myHeader2" : "value2"});
    ```

    > ### Note:  
    > When you add custom headers, all previous custom headers are removed if not specified again in the headers map. Some headers are private, that is, they are set by the OData model internally and cannot be set:
    > 
    > ```
    > "accept"
    > "accept-language"
    > "maxdataserviceversion"
    > "dataserviceversion"
    > "x-csrf-token"
    > ```
    > 
    > For additional methods and parameters, see the [API Reference: sap.ui.model.odata.v2.ODataModel](https://ui5.sap.com/#/api/sap.ui.model.odata.v2.ODataModel). 


 <a name="loioc4be40ce21ff4d0485b1d8f8114f7426"/>

<!-- loioc4be40ce21ff4d0485b1d8f8114f7426 -->

## Addressing Entities: Binding Path Syntax

The binding path syntax for OData models matches the URL path relative to the service URL used in OData to access specific entities or entity sets.

You access the data provided by the OData model according to the structure of the OData service as defined in the metadata of a service. URL parameters, such as filters, cannot be added to a binding path. A binding path can be absolute or relative. Absolute binding paths are resolved immediately. A relative path can only be resolved if it can be automatically converted into an absolute binding path. If, for example, a property is bound to a relative path and the parent control is then bound to an absolute path, the relative property path can be resolved to an absolute path.



The following binding samples within the `ODataModel` are taken from the Northwind demo service.

Absolute binding path \(starting with a slash \('/'\)\):

```
"/Customers"
"/Customers('ALFKI')/Address"
```

Relative binding paths that can be resolved with a context \(for example `"/Customer('ALFKI')"`\):

```
"CompanyName"
"Address"
"Orders"
```

Resolved to:

```
"/Customer('ALFKI')/CompanyName"
"/Customer('ALFKI')/Address"
"/Customer('ALFKI')/Orders"
```

Navigation properties, used to identify a single entity or a collection of entities:

```
"/Customers('ALFKI')/Orders"
"/Products(1)/Supplier"
```

For more information on addressing OData entries, see the URI conventions documentation on [http://www.odata.org](http://www.odata.org).

 <a name="loioadd47c3966dd40489e952bb4f5f74a7c"/>

<!-- loioadd47c3966dd40489e952bb4f5f74a7c -->

## Accessing Data from an OData Model

The data requested from an OData service is cached in the OData model.

It can be accessed by the `getProperty()` method, which returns the entity object or value. This method does not request data from the back end, so you can only access already requested and cached entities:

```js
oModel.getProperty("/Customer('ALFKI')/Address");
```

You can only access single entities and properties with this method. To access entity sets, you can get the binding contexts of all read entities via a list binding. The values returned by this method are copies of the data in the model, not references as in the JSONModel.

> ### Caution:  
> Do **not** modify objects or values inside the model manually; always use the provided API to change data in the model, or use two-way binding \(see *Two-way Binding* section below\).

> ### Note:  
> The ODataModel uses the `$skip` and `$top` URL parameters for paging. It is possible that data is modified between two paging requests, for example entities could be added or removed, and this may lead to data inconsistencies.

 <a name="loio4c4cd99af9b14e08bb72470cc7cabff4"/>

<!-- loio4c4cd99af9b14e08bb72470cc7cabff4 -->

## Creating Entities

Three different approaches exist to create new entities in the OData V2 model. The approach that suits best depends on the application use case.

For all approaches, the corresponding APIs take a `groupId` that specifies a batch group in order to control when the POST request for entity creation is sent to the back end; by default, the deferred batch group "changes" is used. For more information, see [Batch Processing](odata-v2-model-6c47b2b.md#loio8a6ae1d390534d05a560bf350af59c29).



<a name="loio4c4cd99af9b14e08bb72470cc7cabff4__section_xdj_4tx_gsb"/>

## ODataModel\#createEntry

[`ODataModel#createEntry`](https://ui5.sap.com/#/api/sap.ui.model.odata.v2.ODataModel%23methods/createEntry) creates an entry and returns a [context](https://ui5.sap.com/#/api/sap.ui.model.odata.v2.Context) corresponding to it. Use this approach in the following cases:

-   You have a form or popup where the end user can view and modify the data of the new entry, but there is no table or list control where the entry should appear.

-   You want to create an entry without displaying it on the UI.


The method takes the `path` to the entity set for creation, and optionally initial `properties` for the created entry; both the path and the property names used in the `properties` parameter must exist in the metadata definition of the OData service. Take care when creating the initial data as a copy of an existing data object retrieved via [`getObject`](https://ui5.sap.com/#/api/sap.ui.model.odata.v2.ODataModel%23methods/getObject) from the model: You need to remove the`__metadata` property from the copy, as this must not be sent in the payload of a creation request.

The context returned by this method is **transient**. This means the corresponding entity only exists on the client until it is persisted \(for a deferred batch group, use the [`submitChanges`](https://ui5.sap.com/#/api/sap.ui.model.odata.v2.ODataModel%23methods/submitChanges) API\), thus changing its state to **persisted**, or it is deleted with the [`resetChanges`](https://ui5.sap.com/#/api/sap.ui.model.odata.v2.ODataModel%23methods/resetChanges) API. Note that when the creation request sent on `submitChanges` fails, it is automatically retried with the next call to `submitChanges`, which may then succeed, e.g. because missing properties are added.

Use the promise returned by the [`created`](https://ui5.sap.com/#/api/sap.ui.model.odata.v2.Context%23methods/created) API on the returned context to get notified when it is persisted or reset. With the [`isTransient`](https://ui5.sap.com/#/api/sap.ui.model.odata.v2.Context%23methods/isTransient) API you can determine whether a created context is transient or persisted; note that the API returns `undefined` for contexts which have not been created on the client but have been read from the back end.

The transient context is typically used to bind a form or popup, so that the end user can view or modify data of the created entry before it is persisted in the back end. The data of the context is updated from the response of the creation request on success. Note that the transient context's path contains a client-side generated UID as a temporary key predicate, e.g. `ProductSet('id-1641815139894-99')`. Take care when using this path in application coding, as it becomes invalid once the context is persisted; the context then changes its path based on the canonical URL of the persisted entity, e.g. to `ProductSet('4711')`.

All examples for entity creation below assume that the model runs in batch mode, i.e. is constructed with `useBatch = true` .

> ### Example:  
> `createEntry` and related APIs
> 
> ```js
> // create an entry in the Products collection with the specified properties and values as initial data
> var oContext = oModel.createEntry("/ProductSet", {
>     properties : {Name : "Laptop X", Description:"New Laptop", Price:"1000", CurrencyCode : "USD"}
> });
> // bind a form against the transient context for the newly created entity
> oForm.setBindingContext(oContext);
>  
> // submit the changes: creates entity in the back end
> oModel.submitChanges({success: mySuccessHandler, error: myErrorHandler});
> // handle successful creation or reset
> oContext.created().then(
>   function () { /* successful creation */ },
>   function () { /* deletion of the created entity before it is persisted */ }
> );
>  
> // delete the created entity by resetting the corresponding change
> oModel.resetChanges([oContext.getPath()], undefined, /*bDeleteCreatedEntities*/true);
> ```

The `createEntry` method takes the optional `refreshAfterChange` parameter, which determines whether all affected bindings are refreshed after successful creation in the back end. This parameter is used to update list bindings with the new entity after creation, so that it is displayed in the bound table controls. In scenarios where such an update is required, we recommend to use the `ODataListBinding#create` API described below instead of `ODataModel#createEntry`.

If you want to request navigation properties of the created entry on persisting it, use the optional `expand` parameter to do this efficiently in the same batch request as the POST request for entity creation.

The optional `inactive` parameter determines whether an **inactive** transient context is created. Such a context only becomes an *active* transient context on a property update. Before that, it is no pending change, i.e. it is not considered by the [`hasPendingChanges`](https://ui5.sap.com/#/api/sap.ui.model.odata.v2.ODataModel%23methods/hasPendingChanges) API nor can it be deleted with `resetChanges`; the `submitChanges` API will not trigger a creation request for inactive contexts.

*Deep create*, i.e. creation of an entity as a child to a newly created parent entity with one single API call resp. one single request, is not supported. To achieve this, you may chain two API calls to create parent and child entities with two *sequential* requests as shown in the following sample, which creates both a sales order and a sales order item:

> ### Example:  
> Two sequential requests to mimic deep create
> 
> ```js
> var oParentContext,
>     oModel = this.getView().getModel();
>  
> oParentContext = oModel.createEntry("/SalesOrderSet");
> oParentContext.created().then(function () {
>   var oChildContext = oModel.createEntry("ToLineItems", {
>     context : oParentContext
>   });
>  
>   oModel.submitChanges(); // triggers request for creation of item
> });
>  
> oModel.submitChanges(); // triggers request for creation of sales order
> ```



<a name="loio4c4cd99af9b14e08bb72470cc7cabff4__section_qyp_stx_gsb"/>

## ODataListBinding\#create

[`ODataListBinding#create`](https://ui5.sap.com/#/api/sap.ui.model.odata.v2.ODataListBinding%23methods/create) creates an entry and inserts it at the beginning or end of a list of entries. The entry is visible at the corresponding position of the bound control without the need to first save it to the back end and then refresh the binding; this is an advantage compared to the `ODataModel#createEntry` API.

Use this approach if you have a list or table control showing the collection of entries and one of the following conditions applies:

-   Created entries should appear in this table even before they are stored in the back end, so that the end user can view and modify their data.

-   Created entries should be shown at the same position in the table even after they have been persisted to the back end; just their data is updated based on the response to create a POST request.

-   You want to offer *inline creation rows* for a quick creation of new entries.


`ODataListBinding#create` uses `ODataModel#createEntry` to create the new entry; hence it supports the same parameters as this method, with the following exceptions:

-   `sPath` - The path to the entity set for creation is set to the list binding's path

-   `mParameters.context` - The context to resolve the path is set to the list binding's context

-   `mParameters.created` - `ODataListBinding#create` expects that service metadata is already loaded, so the method always returns the created context synchronously and there is no need for this callback.

-   `mParameters.headers` - Not supported by `ODataListBinding#create`

-   `mParameters.properties` - The initial data for the created entity is given in the separate `oInitialData` parameter

-   `mParameters.refreshAfterChange` - Not supported by `ODataListBinding#create`; the method defaults this parameter to `false`, as the list already contains the created entry before persisting it.

-   `mParameters.urlParameters` - Not supported by `ODataListBinding#create`


New entries are inserted according to the `bAtEnd` parameter. When they are persisted, they retain their position in the list as long as there is no call to a method typically related to a user interaction, such as `ODataListBinding#filter`, `ODataListBinding#sort`, `ODataListBinding#refresh`, or a re-binding of the bound list or table control. In these cases, the persisted entries are shown in the position provided by the back end.

With **inactive** entries, you can build **inline creation rows** in a table that allow for a quick creation of new entries *within* the table without separate forms or popups: Once the table data is loaded, you can add one or more inactive entries; use [`ODataListBinding#isFirstCreateAtEnd`](https://ui5.sap.com/#/api/sap.ui.model.odata.v2.ODataListBinding%23methods/isFirstCreateAtEnd) to determine whether such entries have already been created. On activation of an entry, the list binding fires the [`createActivate`](https://ui5.sap.com/#/api/sap.ui.model.odata.v2.ODataListBinding%23events/createActivate) event; with this event, you can create a new inactive entry.

> ### Example:  
> Inline creation rows
> 
> ```js
> <!-- sap.ui.table.Table control declared in XML view -->
> <Table id="ToLineItems" rows="{
>     events : {createActivate : '.onCreateActivateLineItem'}
>     path : 'ToLineItems'
> }">
>  
> // controller coding
>  
> // initial creation of inline creation rows when data has been loaded
> onInit : function () {
>   var oItemsBinding = this.getView().byId("ToLineItems").getBinding("rows");
>  
>   oItemsBinding.attachEvent("dataReceived", function () {
>     // check that length is final before creating at end and only create inactive entry once
>     if (oItemsBinding.isLengthFinal() && oItemsBinding.isFirstCreateAtEnd() === undefined) {
>       that.onCreateActivateLineItem();
>     }
>   });
> },
>  
> // event handler for createActivate
> onCreateActivateLineItem : function () {
>   var oItemsBinding = this.getView().byId("ToLineItems").getBinding("rows");
>  
>   oItemsBinding.create({/* initial data*/}, /*bAtEnd*/ true, {inactive : true});
> }
> ```



<a name="loio4c4cd99af9b14e08bb72470cc7cabff4__section_fcd_ttx_gsb"/>

## ODataModel\#create

[`ODataModel#create`](https://ui5.sap.com/#/api/sap.ui.model.odata.v2.ODataModel%23methods/create) triggers a POST request with the given initial data to the OData service to create an entity. This API does not provide a binding context to bind controls to the newly created entry nor does it store the created entry data in model's data cache. As a consequence, **data binding to the created entry is not possible**.

Use this approach only if you just want to send a creation request to the back end and do not want to bind the created entry on the UI. In all other cases, use the APIs described above.

The method returns an abort handle to abort the creation POST request. To find out whether such a request is pending, use `ODataModel#hasPendingChanges` with the `bAll` parameter set to `true`. Note that, contrary to `ODataModel#createEntry` and `ODataListBinding#create`, failed creation requests are not automatically retried.

 <a name="loioff667e12b8714f3595e68f3e7c0e7a14"/>

<!-- loioff667e12b8714f3595e68f3e7c0e7a14 -->

## CRUD Operations

The OData model allows manual CRUD \(create, read, update, delete\) operations on the OData service. If a manual operation returns data, the data is imported into the data cache of the OData model. All operations require a mandatory `sPath` parameter as well as an optional `mParameters` map.



The `create` and `update` methods also require a mandatory `oData` parameter for passing the created or changed data object. Each operation returns an object containing a function abort, which can be used to abort the request. If the request is aborted, the error handler is called. This ensures that the success or the error handler is executed for every request. It is also possible to pass additional header data, URL parameters, or an eTag.

-   Creating entities

    See the separate topic [Creating Entities](odata-v2-model-6c47b2b.md#loio4c4cd99af9b14e08bb72470cc7cabff4).

-   Reading entities

    The `read` function triggeres a `GET` request to a specified path. The path is retrieved from the OData service which was specified at creation of the OData model. The retrieved data is returned in the `success` callback handler function.

    ```js
    oModel.read("/Products(999)", {success: mySuccessHandler, error: myErrorHandler});
    ```

-   Updating entities

    The `update` function triggers a `PUT`/`MERGE` request to an OData service which was specified at creation of the OData model. After a successful request to update the bindings in the model, the refresh is triggered automatically.

    ```js
    
    var oData = {
        ProductId: 999,
        ProductName: "myProductUpdated"
    }
    oModel.update("/Products(999)", oData, {success: mySuccessHandler, error: myErrorHandler});
    ```

-   Deleting entities

    The `remove` function triggers a `DELETE` request to an OData service which was specified at creation of the OData model. The application has to specify the path to the entry which should be deleted.

    ```js
    oModel.remove("/Products(999)", {success: mySuccessHandler, error: myErrorHandler});
    ```

    The [`sap.ui.model.odata.v2.Context#delete`](https://ui5.sap.com/#/api/sap.ui.model.odata.v2.Context%23methods/delete) function uses `ODataModel#remove` to remove a persisted entry. It will also remove transient and inactive entries. With this function, a developer does not need to know the status \(inactive, transient, persisted\) of the context pointing to the entry to be removed.

-   Refresh after change

    The model provides a mechanism to automatically refresh bindings that depend on changed entities. If you carry out a `create`, `update` or `remove` function, the model identifies the bindings and triggers a refresh for these bindings. If the model runs in batch mode, the refresh requests are bundled together with the changes in the same batch request. You can disable the auto refresh by calling `setRefreshAfterChange(false)`. If the auto refresh is disabled, the application has to take care of refreshing the respective bindings.

    ```js
    oModel.setRefreshAfterChange(false);
    ```


 <a name="loio94e302455f8044e79de759c86bb295a2"/>

<!-- loio94e302455f8044e79de759c86bb295a2 -->

## Concurrency Control and ETags

OData uses HTTP ETags for optimistic concurrency control. The service must be configured to provide them. The ETag can be passed within the parameters map for every CRUD request. If no ETag is passed, the ETag of the cached entity is used, if it is loaded already.

 <a name="loio30362c1cafd244dd86752e28993bbcdd"/>

<!-- loio30362c1cafd244dd86752e28993bbcdd -->

## XSRF Token

To address cross-site request forgery, an OData service may require XSRF tokens for change requests by the client application. In this case, the client has to fetch a token from the server and send it with each change request to the server. The OData model fetches the XSRF token when reading the metadata and then automatically sends it with each write request header. If the token is no longer valid, a new token can be fetched by calling the `refreshSecurityToken` function on the OData model. The token is fetched with a request to the service root URL, which usually responds with the service document. To get a valid token, make sure that the response is **not** cached.

 <a name="loio66a130fa4d10411b8fc90df00185554b"/>

<!-- loio66a130fa4d10411b8fc90df00185554b -->

## Refreshing the Model

The `refresh` function refreshes all data within an OData model. Each binding reloads its data from the server. For list or context bindings, a new request to the back end is triggered. If the XSRF token is no longer valid, it has to be fetched again with a `read` request to the service document. Data that has been imported via manual CRUD requests is **not** reloaded automatically.

 <a name="loio8a6ae1d390534d05a560bf350af59c29"/>

<!-- loio8a6ae1d390534d05a560bf350af59c29 -->

## Batch Processing

The [`v2.ODataModel`](https://ui5.sap.com/#/api/sap.ui.model.odata.v2.ODataModel) supports batch processing \(`$batch`\) in two different ways:

-   Default: All requests in a thread are collected and bundled in batch requests, meaning that request is sent in a timeout immediately after the current call stack is finished. This includes all manual CRUD requests as well as requests triggered by a binding.

-   Deferred: The requests are stored and can be submitted with a manual `submitChanges()` call by the application. This also includes all manual CRUD requests as well as requests triggered by a binding.


The model cannot decide how to bundle the requests. For this, SAPUI5 provides the `groupId`. For each Context and List Binding and each manual request, a `groupId` can be specified. All requests belonging to the same group are bundled into one batch request. Request without a `groupId` are bundled in the default batch group. You can use a `changeSetId` for changes. The same principle applies: Each change belonging to the same `changeSetId` is bundled into one `changeSet` in the batch request. Per default, all changes have their own `changeSet`.

The OData V2 model automatically puts all change sets at the beginning of a batch request. All GET requests are put after it.

You can use the `setDeferredGroups()` method to set a subset of previously defined groups to deferred.

> ### Note:  
> The same is also valid for `setChangeGroups()` and `getChangeGroups()`.

All requests belonging to the `group` are then stored in a request queue. The deferred batch group must then be submitted manually by means of the `submitChanges()` method. If you do **not** specify a batch group ID when calling `submitChanges`, all deferred batch groups are submitted.

> ### Example:  
> Set a subset of groups to deferred:
> 
> ```js
> // "ODataModel" required from module "sap/ui/model/odata/v2/ODataModel"
> var oModel = new ODataModel(myServiceUrl);
> ```
> 
> Pass the `groupId` to a binding:
> 
> ```js
> {path:"/myEntities", parameters: {groupId: "myId"}}
> ```
> 
> Set the `groupId` to deferred:
> 
> 1.  Get the list of deferred groups:
> 
>     ```js
>     var aDeferredGroups = oModel.getDeferredGroups();
>     ```
> 
> 2.  Append your `groupId` to the list:
> 
>     ```js
>     aDeferredGroups=aDeferredGroups.concat(["myId"]);
>     ```
> 
> 3.  Set all groups to deferred:
> 
>     ```js
>     oModel.setDeferredGroups(aDeferredGroups);
>     ```
> 
> 
> Submit all deferred groups:
> 
> ```js
> oModel.submitChanges({success: mySuccessHandler, error: myErrorHandler});
> ```

 <a name="loio42b3ca19a47d49a3b4ba5f34ca0d1f7e"/>

<!-- loio42b3ca19a47d49a3b4ba5f34ca0d1f7e -->

## Two-Way Binding

The `v2.ODataModel` enables two-way binding. Per default, all changes are collected in a batch group called "changes" which is set to deferred.

To submit the changes, use `submitChanges()`. The data changes are made on a data copy. This enables you to reset the changes without sending a new request to the backend to fetch the old data again. With `resetChanges()` you can reset all changes. You can also reset only specific entities by calling `resetChanges` with an array of entity paths.

> ### Note:  
> Filtering and sorting is not possible if two-way changes are present as this would cause inconsistent data on the UI. Therefore, before you carry out sorting or filtering, you have to submit or reset the changes.

You can collect the changes for different entities or types in different batch groups. To configure this, use the `setChangeGroups()` method of the model:

```js
// "ODataModel" required from module "sap/ui/model/odata/v2/ODataModel"
var oModel = new ODataModel(myServiceUrl);
oModel.setDeferredGroups(["myGroupId", "myGroupId2"]);
oModel.setChangeGroups({
    "EntityTypeName": {
        groupId: "myGroupId",  
        changeSetId: "ID",/*optional*/
        single: true, /*optional, can be true or false*/
    }
});
oModel.submitChanges({groupId: "myGroupId", success: mySuccessHandler, error: myErrorHandler});
```

To collect the changes for all entity types in the same batch group, use '\*’ as `EntityType`. If the change is not set to deferred, the changes are sent to the backend immediately. By setting the `single` parameter for `changeSet` to true or false, you define if each change results in its own change set \(`true`\) or if all changes are collected in one change set \(`false`\). The model only takes care of the `changeSetId` if `single` is set to `false`.

> ### Note:  
> The first change of an entity defines the order in the change set.

**Example**

Reset changes:

```js
// "ODataModel" required from module "sap/ui/model/odata/v2/ODataModel"
var oModel = new ODataModel(myServiceUrl);
//do a change
oModel.setProperty("/myEntity(0)", oValue);

//reset the change
oModel.resetChanges(["/myEntity(0)"]);
```

 <a name="loiobf1fc3b4c9ab4bbc845a3f0e0940c004"/>

<!-- loiobf1fc3b4c9ab4bbc845a3f0e0940c004 -->

## Binding-specific Parameters

The OData protocol specifies different URL parameters.



You can use these parameters in bindings in addition to the parameters described above:

-   Expand parameter

    The `expand` parameter allows the application to read associated entities with their navigation properties:

    ```js
    oControl.bindElement("/Category(1)", {expand: "Products"}); 
    
    oTable.bindRows({
        path: "/Products",
        parameters: {expand: "Category"}
    });
    ```

    In this example, all products of `"Category(1)"` are embedded inline in the server response and loaded in one request. The category for all `"Products"` is embedded inline in the response for each product.

-   Select parameter

    The `select` parameter allows the application to define a subset of properties that is read when requesting an entity.

    ```js
    oControl.bindElement("/Category(1)", {expand: "Products", select: "Name,ID,Products"}); 
    
    oTable.bindRows({
        path: "/Products",
        parameters: {select: "Name,Category"}
    });
    ```

    In this example, the properties `Name`, `ID` and `ofCategory(1)` as well as all properties of the embedded products are returned. The properties `Name` and `Category` are included for each product. The `Category` property contains a link to the related category entry.

-   Custom query options

    You can use custom query options as input parameters for service operations. When creating the list binding, specify these custom parameter as follows:

    ```js
    oTable.bindRows({
            path: "/Products", 
            parameters: {
            custom: {
                param1: "value1",
                param2: "value2"
            }
        },
        template: rowTemplate
    });
    ```

    If you use `bindElement`, you can specify custom parameters as follows:

    ```js
    oTextField.bindElement("/GetProducts", {
        custom: {
            "price" : "500"
        }
    });
    ```


 <a name="loio62149734b5c24507868e722fe87a75db"/>

<!-- loio62149734b5c24507868e722fe87a75db -->

## Optimizing Dependent Bindings

In its constructor the OData V2 model supports a flag called `preliminaryContext`. With this option set to `true`, the model is able to bundle OData calls for dependent bindings into fewer $batch requests.



<a name="loio62149734b5c24507868e722fe87a75db__section_mjn_51f_zbb"/>

## Introduction

A relative binding depends on a different binding \(its **parent binding**\) if the parent binding reads the OData entity corresponding to the context that is set for the dependent binding.

By default, data for the dependent binding is only read once the data for its binding context has been read via the parent binding. This leads to two sequential requests, where the first one reads data for the parent binding leading to the **creation** of the context, and the second reads data for the dependent binding which **uses** this context.

In case the parent binding is a context binding, you can improve performance by bundling these two read requests into one. You can achieve this by specifying that the single context associated with the binding is a preliminary context. For this, you need to set the `createPreliminaryContext` parameter on construction of the parent binding. Dependent list or context bindings can then use the path of this preliminary context before data has been read for it in order to construct the path for their own request to read data. This is done by setting the `usePreliminaryContext` parameter on construction of the dependent binding.



<a name="loio62149734b5c24507868e722fe87a75db__section_svw_z1f_zbb"/>

## Settings and Usage

You may set the `preliminaryContext` parameter when creating an OData V2 model. This switches on preliminary contexts for **all** bindings created for this model. The following then applies:

-   All context bindings have the `createPreliminaryContext` parameter set to `true`.
-   All context bindings and all list bindings have the `usePreliminaryContext` parameter set to `true`.

You can overrule this default by the corresponding parameters of the [`ODataContextBinding`](https://ui5.sap.com/#/api/sap.ui.model.odata.v2.ODataContextBinding) constructor or  [`ODataListBinding`](https://ui5.sap.com/#/api/sap.ui.model.odata.v2.ODataListBinding) constructor. In addition, it is possible not to use the general `preliminaryContext` parameter on the model \(which affects all bindings\), but just switch on preliminary context handling for pairs of parent and depending binding instances using these parameters.

The following example shows a context binding with the path **"/Products\(1\)"** \(e.g. created as element binding of an `sap.m.Panel` control\) which is the parent binding. The dependent relative binding with the path **"Supplier"** is a list binding created for a table showing all suppliers of the product \(e.g. created for the `rows` aggregation of a `sap.ui.table.Table` control\).

   
  
<a name="loio62149734b5c24507868e722fe87a75db__fig_h54_vhf_zbb"/>Simple Binding Example: Default Binding Resolution

 ![](images/Simple_Binding_Example_e2fe691.png "Simple Binding Example: Default Binding Resolution") 

Without using preliminary contexts, two consecutive OData requests will be issued, one for `Binding 0`, and afterwards one for `Binding 1`, as shown in the following table:

<a name="loio62149734b5c24507868e722fe87a75db__table_xww_51z_zbb"/>Simple Binding Example: Default Binding Resolution


<table>
<tr>
<th valign="top">

Request Number



</th>
<th valign="top">

Content



</th>
</tr>
<tr>
<td valign="top">

1



</td>
<td valign="top">

 `GET Products(1)` 



</td>
</tr>
<tr>
<td valign="top">

2



</td>
<td valign="top">

 `GET Products(1)/Supplier` 



</td>
</tr>
</table>

You can optimize the requests by setting the binding parameters as shown below:

   
  
<a name="loio62149734b5c24507868e722fe87a75db__fig_nym_hgz_zbb"/>Simple Binding Example: Binding Resolution Optimized

 ![](images/Simple_Binding_Example_Optimized_57a4d12.png "Simple Binding Example: Binding Resolution Optimized") 

Here, `Binding 1` uses the preliminary context created by `Binding 0`, and thus the request URL can directly be resolved.

This now results in a single `$batch` request:

<a name="loio62149734b5c24507868e722fe87a75db__table_mwj_pgz_zbb"/>Simple Binding Example: Binding Resolution Optimized


<table>
<tr>
<th valign="top">

Request Number



</th>
<th valign="top">

Content



</th>
</tr>
<tr>
<td valign="top">

1



</td>
<td valign="top">

`GET Products(1)`

`GET Products(1)/Supplier`



</td>
</tr>
</table>

> ### Note:  
> If either `createPreliminaryContext` or `usePreliminaryContext` is set to `false`, the default behavior is active.

> ### Note:  
> With the `$expand` query option you can load all associated entities of another entity. In the previous example we requested the `Product` list of a certain `Supplier` via a separate request. When using a `$expand` query instead, you could retrieve the same information with one single request:
> 
> `GET Products(1)?$expand=Supplier/Products`
> 
> Using `$expand` has several drawbacks, however. In OData V2, you cannot use additional filters and sorters for the expanded entries of a `$expand` query. In addition, the `$expand` option always loads **all** associated entities, so paging with `$skip` or `$top` isn't possible, either.
> 
> Using the preliminary context feature allows you to to circumvent these restrictions. You can merge multiple sub-requests into a single `$batch` query, yet you can easily include additional filters and sorters on the related subordinate entries.

 <a name="loio6cb8d585ed594ee4b447b5b560f292a4"/>

<!-- loio6cb8d585ed594ee4b447b5b560f292a4 -->

## Function Import

The `ODataModel` supports the invoking of function imports or actions by the `callFunction` method.

```xml
oModel.callFunction("/GetProductsByRating",{method:"GET", urlParameters:{"rating":3}, success:fnSuccess, error: fnError})
```

If the `callFunction` request is deferred, it can be submitted via the `submitChangesmethod`.

> ### Note:  
> Only "IN" parameters of function imports are currently supported.



<a name="loio6cb8d585ed594ee4b447b5b560f292a4__section_qwk_mtz_xbb"/>

## Binding of Function Import Parameters

OData Model V2 supports the binding against function import parameters. This is similar to the `createEntry` method which supports binding against entity properties. The `callFunction` method returns a request handle that has a `promise`. This `promise` is resolved when the context to which it is bound is created successfully or is rejected if not:

```xml
var oHandle = oModel.callFunction("/GetProductsByRating", {urlParameters: {rating:3}});
oHandle.contextCreated().then(function(oContext) {
      oView.setBindingContext(oContext);
});
```

If the function import returns result data, then the result data can be accessed and bound against in the `$result` property using the context:

```xml
<form:SimpleForm>
   <core:Title text="Parameters" />
   <Label text="Rating" />
   <Input value="{rating}" />
   <Button text="Submit" press=".submit" />
   <core:Title text="Result" />
   <List items="{$result}">
    <StandardListItem title="{Name}" />
   </List>
</form:SimpleForm>
```

 <a name="loioc40fc72612754bad877f374bdeb0f893"/>

<!-- loioc40fc72612754bad877f374bdeb0f893 -->

## Language

SAPUI5 uses the concept of a "current language" \(see [Identifying the Language Code / Locale](identifying-the-language-code-locale-91f21f1.md)\). This language is automatically propagated to the OData service by the OData V2 model. For this reason, applications must not hard code the language themselves, e.g. they must not specify the `"sap-language"` URL parameter as a custom query option.

 <a name="loio341823349ed04df1813197f2a0d71db2"/>

<!-- loio341823349ed04df1813197f2a0d71db2 -->

## Meta Model for OData V2

The implementation `sap.ui.model.odata.ODataMetaModel` offers a unified access to both OData Version 2.0 metadata and Version 4.0 annotations.

It uses the existing `sap.ui.model.odata.ODataMetadata` as a foundation and merges the OData Version 4.0 annotations from the existing `sap.ui.model.odata.ODataAnnotations` directly into the corresponding entity or property.

You can get an instance of `sap.ui.model.odata.ODataMetaModel` from an instance of `sap.ui.model.odata.v2.ODataModel`, see [XML Templating](xml-templating-5ee619f.md).



## Basic Structure

The basic structure of `sap.ui.model.odata.ODataMetadata` is shown in the following code snippet. It shows you how the most important elements of the entity model are nested. Each of these elements \(except *association set end*\) can have `extensions`, that is, XML attribute values from some namespace. The code snippets below show how these extensions are stored and processed.

```
"dataServices": {
    "schema": [{
      "association": [{
        "end": []
      }],
      "complexType": [{
        "property": []
      }],
      "entityContainer": [{
        "associationSet": [{
          "end": []
        }],
        "entitySet": [],
        "functionImport": [{
          "parameter": []
        }]
      }],
      "entityType": [{
        "property": [],
        "navigationProperty": []
      }]
    }]
  }
}
```

The following code snippet gives a closer look and has more properties:

```
{
  "version": "1.0",
  "dataServices": {
    "dataServiceVersion": "2.0",
    "schema": [{
      "namespace": "GWSAMPLE_BASIC",
      "entityType": [{
        "name": "BusinessPartner",
        "key": {
          "propertyRef": [{
            "name": "BusinessPartnerID"
          }]
        },
        "property": [{
          "name": "BusinessPartnerID",
          "type": "Edm.String",
          "nullable": "false",
          "maxLength": "10"
        }],
        "navigationProperty": [{
          "name": "ToSalesOrders",
          "relationship": "GWSAMPLE_BASIC.Assoc_BusinessPartner_SalesOrders",
          "fromRole": "FromRole_Assoc_BusinessPartner_SalesOrders",
          "toRole": "ToRole_Assoc_BusinessPartner_SalesOrders"
        }]
      }],
      "complexType": [{
        "name": "CT_Address",
        "property": [{
          "name": "City",
          "type": "Edm.String",
          "maxLength": "40"
        }]
      }],
      "association": [{
        "name": "Assoc_BusinessPartner_SalesOrders",
        "end": [{
          "type": "GWSAMPLE_BASIC.BusinessPartner",
          "multiplicity": "1",
          "role": "FromRole_Assoc_BusinessPartner_SalesOrders"
        }, {
          "type": "GWSAMPLE_BASIC.SalesOrder",
          "multiplicity": "*",
          "role": "ToRole_Assoc_BusinessPartner_SalesOrders"
        }],
        "referentialConstraint": {
          "principal": {
            "role": "FromRole_Assoc_BusinessPartner_SalesOrders",
            "propertyRef": [{
              "name": "BusinessPartnerID"
            }]
          },
          "dependent": {
            "role": "ToRole_Assoc_BusinessPartner_SalesOrders",
            "propertyRef": [{
              "name": "CustomerID"
            }]
          }
        }
      }],
      "entityContainer": [{
        "name": "GWSAMPLE_BASIC_Entities", 
        "isDefaultEntityContainer": "true",
        "entitySet": [{
          "name": "BusinessPartnerSet",
          "entityType": "GWSAMPLE_BASIC.BusinessPartner"
        }],
        "associationSet": [{
          "name": "Assoc_BusinessPartner_SalesOrders_AssocS",
          "association": "GWSAMPLE_BASIC.Assoc_BusinessPartner_SalesOrders",
          "end": [{
            "entitySet": "BusinessPartnerSet",
            "role": "FromRole_Assoc_BusinessPartner_SalesOrders"
          }, {
            "entitySet": "SalesOrderSet",
            "role": "ToRole_Assoc_BusinessPartner_SalesOrders"
          }]
        }],
        "functionImport": [{
          "name": "SalesOrder_Confirm",
          "returnType": "GWSAMPLE_BASIC.SalesOrder",
          "entitySet": "SalesOrderSet",
          "httpMethod": "POST",
          "parameter": [{
            "name": "SalesOrderID",
            "type": "Edm.String",
            "mode": "In",
            "maxLength": "10"
          }]
        }]
      }]
    }]
  }}
```



## Accessing Objects and Properties

The objects in the OData meta model are arranged in arrays. `/dataServices/schema`, for example, is an array of schemas where each schema has an `entityType` property with an array of entity types, and so on. So, `/dataServices/schema/0/entityType/16` can be the path to the entity type with name "Order" in the schema with namespace "MySchema".

However, these paths are not stable: If an entity type with lower index is removed from the schema, the path to "Order" changes to `/dataServices/schema/0/entityType/15`. To avoid problems with changing indexes, `getObject` and `getProperty` support XPath-like queries for the indexes. Each index can be replaced by a query in square brackets. You can, for example, address the schema by using the path `/dataServices/schema/[${namespace}==='MySchema']` or address the entity by using the path `/dataServices/schema/[${namespace}==='MySchema']/entityType/[${name}==='Order'`\].

The syntax inside the square brackets corresponds to the expression binding syntax. The query is executed for each object in the array until the result is true \(truthy\) for the first time. This object is then chosen. To embed such a path into an expression binding, use a complex binding syntax: `${path:'...'}`. Example: `{:= ${path:'target>extensions/[${name} === \'semantics\']/value'} === 'email'}`

Each of these queries is self-contained. The query can refer to properties of the current candidate via a relative path, for example `${name}`, but it **cannot** refer to variables such as `${meta>}` that are available in XML templating at that point.



## Extensions

`extensions` array and transformed from objects into simple properties with an `sap:` prefix added to their name, see line number 8 in the following code snippet.

> ### Note:  
> As this happens in addition, the following example shows both representations. By this, the respective annotations can be addressed via a simple relative path instead of searching an array.

```
1  {
2    "name": "BusinessPartnerID",
3    "extensions": [{
4      "name": "label",
5      "value": "Bus. Part. ID",
6      "namespace": "http://www.sap.com/Protocols/SAPData"
7    }],
8    "sap:label": "Bus. Part. ID"
9  }
```



## OData v4 Annotations

Each element of the entity model \(except *association set end*\) can be annotated. These annotations from the existing `sap.ui.model.odata.ODataAnnotations` are merged directly into the corresponding element. The following code snippet shows how the structure from the existing `sap.ui.model.odata.ODataMetadata`, as explained above and including extensions and constraints such as `nullable` or `maxLength`, is fleshed out with lifted v2 annotations and inlined v4 annotations, such as `Org.OData.Measures.V1.Unit` or `com.sap.vocabularies.UI.v1.Identification`. If you want to navigate the structure, for example for XML templating, it is important to understand this structure.

ODataMetaModel JSON Format:

```js

"dataServices" : {
    "schema" : [{
        "namespace" : "GWSAMPLE_BASIC",
        "entityType" : [{
            "name" : "Product",
            "property" : [{
                "name" : "ProductID",
                "type" : "Edm.String",
                "nullable" : "false",
                "maxLength" : "10"
            }, {
                "name" : "SupplierName",
                "type" : "Edm.String",
                "maxLength" : "80",
                "extensions" : [{
                  "name" : "label",
                  "value" : "Company Name",
                  "namespace" : "http://www.sap.com/Protocols/SAPData"
                }, {
                  "name" : "creatable",
                  "value" : "false",
                  "namespace" : "http://www.sap.com/Protocols/SAPData"
                }, {
                  "name" : "updatable",
                  "value" : "false",
                  "namespace" : "http://www.sap.com/Protocols/SAPData"
                }],
                "sap:label" : "Company Name",
                "sap:creatable" : "false",
                "sap:updatable" : "false"
                "Org.OData.Core.V1.Computed" : {
                    "Bool" : "true"
                }
            }, {
                "name" : "WeightMeasure",
                "type" : "Edm.Decimal",
                "precision" : "13",
                "scale" : "3",
                "Org.OData.Measures.V1.Unit" : {
                    "Path" : "WeightUnit"
                }
            }, {
                "name" : "WeightUnit",
                "type" : "Edm.String",
                "maxLength" : "3"
            }],
            "com.sap.vocabularies.UI.v1.DataPoint" : {
                "Value" : {
                    "Path" : "WeightMeasure",
                    "EdmType" : "Edm.Decimal"
                }
            },
            "com.sap.vocabularies.UI.v1.Identification" : [{
                "Value" : {"Path" : "ProductID"}
            }, {
                "Value" : {"Path" : "SupplierName"}
            }, {
                "Value" : {"Path" : "WeightMeasure"}
            }]
        }]
    }]
}
```



<a name="loio341823349ed04df1813197f2a0d71db2__Enhancement"/>

## Enhancement of the OData Meta Model

In addition to the easy access to the SAP-specific OData annotations, such as `sap:label`, corresponding vocabulary-based annotations are mixed in if they are not yet defined in the OData Version 4.0 annotations of the existing `sap.ui.model.odata.ODataAnnotations`.

> ### Note:  
> Annotation terms are not merged, but replaced as a whole \("PUT" semantics\). If the same annotation term with the same target is also contained in an annotation file, the complete OData V4 annotation converted from the OData V2 annotation is replaced by the one contained in the annotation file for the specified target. Converted annotations never use a qualifier and are only overwritten by the same annotation term without a qualifier.

The following tables show the transformations that are implemented with version 1.30 of SAPUI5 \(variatons of this are marked accordingly\). In the examples shown below, `AnyPath` is a path expression as defined in the [OData Version 4.0 specification](http://docs.oasis-open.org/odata/odata/v4.0/os/part3-csdl/odata-v4.0-os-part3-csdl.html), section 14.5.12.

Transformations defined at `EntitySet`:


<table>
<tr>
<th valign="top">

OData V2 SAP Extension



</th>
<th valign="top">

Resulting OData V4 Annotation



</th>
</tr>
<tr>
<td valign="top">

```
sap:creatable = "false"

```



</td>
<td valign="top">

```
"Org.OData.Capabilities.V1.InsertRestrictions": { "Insertable" : { "Bool" : "false" } }

```



</td>
</tr>
<tr>
<td valign="top">

```
sap:deletable = "false"

```



</td>
<td valign="top">

```
"Org.OData.Capabilities.V1.DeleteRestrictions": { "Deletable" : { "Bool" : "false" } }

```

> ### Note:  
> If both, `sap:deletable` and `sap:deletable-path` are given, the service is broken and it is handled as `sap:deletable="false"`.



</td>
</tr>
<tr>
<td valign="top">

```
sap:deletable-path = "AnyPath"
```

Where `AnyPath` is a path expression that identifies a Boolean property in the context of the entity type of the entity set. The value of this property indicates whether the entity can be deleted or not.



</td>
<td valign="top">

```
"Org.OData.Capabilities.V1.DeleteRestrictions": { "Deletable" : { "Path" : "AnyPath" } }
```

> ### Note:  
> If both, `sap:deletable` and `sap:deletable-path` are given, the service is broken and it is handled as `sap:deletable="false"`.



</td>
</tr>
<tr>
<td valign="top">

```
sap:label = "foo"
```

Where `foo` is any text.



</td>
<td valign="top">

```
"com.sap.vocabularies.Common.v1.Label": {"String" : "foo" }
```



</td>
</tr>
<tr>
<td valign="top">

```
sap:pageable = "false"

```



</td>
<td valign="top">

```
"Org.OData.Capabilities.V1.SkipSupported": {"Bool" : "false" },
"Org.OData.Capabilities.V1.TopSupported": {"Bool" : "false" }

```



</td>
</tr>
<tr>
<td valign="top">

```
sap:requires-filter = "true"

```



</td>
<td valign="top">

```
"Org.OData.Capabilities.V1.FilterRestrictions": { "RequiresFilter" : { "Bool" : "true" } }

```



</td>
</tr>
<tr>
<td valign="top">

```
sap:searchable = "false"

```

Alternatively, do not use the `sap:searchable` annotation.



</td>
<td valign="top">

```
"Org.OData.Capabilities.V1.SearchRestrictions": { "Searchable" : { "Bool" : "false" } }

```



</td>
</tr>
<tr>
<td valign="top">

```
sap:topable = "false"

```



</td>
<td valign="top">

```
"Org.OData.Capabilities.V1.TopSupported": {"Bool" : "false" }

```



</td>
</tr>
<tr>
<td valign="top">

```
sap:updatable = "false"

```



</td>
<td valign="top">

```
"Org.OData.Capabilities.V1.UpdateRestrictions": { "Updatable" : { "Bool" : "false" } }

```

> ### Note:  
> If both, `sap:updatable` and `sap:updatable-path` are given, the service is broken and it is handled as `sap:updatable="false"`.



</td>
</tr>
<tr>
<td valign="top">

```
sap:updatable-path = "AnyPath"
```

Where `AnyPath` is a path expression that identifies a Boolean property in the context of the entity type of the entity set. The value of this property indicates whether the entity can be updated or not.



</td>
<td valign="top">

```
"Org.OData.Capabilities.V1.UpdateRestrictions": { "Updatable" : { "Path" : "AnyPath" } }
```

> ### Note:  
> If both, `sap:updatable` and `sap:updatable-path` are given, the service is broken and it is handled as `sap:updatable="false"`.



</td>
</tr>
</table>

Transformations defined at `Property`:


<table>
<tr>
<th valign="top">

OData V2 SAP Extension



</th>
<th valign="top">

Resulting OData V4 Annotation



</th>
</tr>
<tr>
<td valign="top">

```
sap:label = "foo"
```

Where `foo` is any text.



</td>
<td valign="top">

```
"com.sap.vocabularies.Common.v1.Label": {"String" : "foo" }
```

> ### Note:  
> The resulting annotation is added at different places, not to the `Property`.



</td>
</tr>
<tr>
<td valign="top">

```
sap:creatable = "true" 
```

and

```
sap:updatable = "false"
```



</td>
<td valign="top">

```
"Org.OData.Core.V1.Immutable": { "Bool" : "true" }

```



</td>
</tr>
<tr>
<td valign="top">

```
sap:creatable = "false"
```

and

```
sap:updatable = "false"
```



</td>
<td valign="top">

```
"Org.OData.Core.V1.Computed": { "Bool" : "true"}

```



</td>
</tr>
<tr>
<td valign="top">

```
sap:display-format = "NonNegative"
```

> ### Note:  
> `NonNegative` indicates that only non-negative numeric values are provided and persisted, other input leads to errors; intended for `Edm.String` fields that are internally stored as `NUMC`.



</td>
<td valign="top">

```
"com.sap.vocabularies.Common.v1.IsDigitSequence": { "Bool" : "true" }
```



</td>
</tr>
<tr>
<td valign="top">

```
sap:display-format = "UpperCase"
```



</td>
<td valign="top">

```
"com.sap.vocabularies.Common.v1.IsUpperCase": { "Bool" : "true" }
```



</td>
</tr>
<tr>
<td valign="top">

```
sap:field-control = "AnyPath"
```

Where `AnyPath` is a path expression that identifies a property containing a numeric value that controls visibility..



</td>
<td valign="top">

```
"com.sap.vocabularies.Common.v1.FieldControl": { "Path" : "AnyPath" }

```



</td>
</tr>
<tr>
<td valign="top">

```
sap:filterable = "false"
```



</td>
<td valign="top">

```
"Org.OData.Capabilities.V1.FilterRestrictions":
{ "NonFilterableProperties" : [
{ "PropertyPath" : "PropA " },
{ "PropertyPath" : "PropC " }] }
```

For example, if `sap:filterable` is set to `false` for properties `PropA` and `PropC`.

> ### Note:  
> The resulting annotation is added to the `EntitySet`, not to the `Property`.



</td>
</tr>
<tr>
<td valign="top">

```
sap:filter-restriction="multi-value"
```

For example, at a `BusinessPartnerID` property of a `BusinessPartner` type.



</td>
<td valign="top">

```
"com.sap.vocabularies.Common.v1.FilterExpressionRestrictions":
[{ "Property" : { "PropertyPath" : "BusinessPartnerID" },
"AllowedExpressions" : { "EnumMember":
"com.sap.vocabularies.Common.v1.FilterExpressionType/MultiValue" } }]
```

At the corresponding entity set, for example, `BusinessPartnerSet.multi-value` is mapped to `MultiValue`, `single-value` is mapped to `SingleValue`, and `interval` is mapped to `SingleInterval`.

> ### Note:  
> The resulting annotation is added to the `EntitySet`, not to the `Property`.



</td>
</tr>
<tr>
<td valign="top">

```
sap:heading = "foo"
```

Where `foo` is any text.



</td>
<td valign="top">

```
"com.sap.vocabularies.Common.v1.Heading": { "String" : "foo" }
```



</td>
</tr>
<tr>
<td valign="top">

```
sap:precision = "AnyPath"

```

Where `AnyPath` is a path expression that identifies a property in the context of the entity type containing the number of significant decimal places for a numeric value.



</td>
<td valign="top">

```
"Org.OData.Measures.V1.Scale": { "Path" : "AnyPath" }

```



</td>
</tr>
<tr>
<td valign="top">

```
sap:quickinfo = "foo"
```

Where `foo` is any text.



</td>
<td valign="top">

```
"com.sap.vocabularies.Common.v1.QuickInfo": { "String" : "foo" }
```



</td>
</tr>
<tr>
<td valign="top">

```
sap:required-in-filter = "true"

```



</td>
<td valign="top">

If `sap:required-in-filter` is set to `TRUE` for the `PropA` and `PropC` properties:

```
"Org.OData.Capabilities.V1.FilterRestrictions": {
"RequiredProperties" : [
{ "PropertyPath" : "PropA " },
 { "PropertyPath" : "PropC " }] }
```

> ### Note:  
> The resulting annotation is added to the `EntitySet`, not to the `Property`.



</td>
</tr>
<tr>
<td valign="top">

```
sap:sortable = "false"
```



</td>
<td valign="top">

If `sap:sortable` is set to `FALSE` for the `PropA` and `PropC` properties:

```
"Org.OData.Capabilities.V1.SortRestrictions": {
"NonSortableProperties" : [ 
{ "PropertyPath" : "PropA " }, 
{ "PropertyPath" : "PropC " }]}
```

> ### Note:  
> The resulting annotation is added to the `EntitySet`, not to the `Property`.



</td>
</tr>
<tr>
<td valign="top">

```
sap:text = "AnyPath"
```

Where `AnyPath` is a path expression that identifies a property in the context of the entity type containing a human-readable text for the value of this property.



</td>
<td valign="top">

```
"com.sap.vocabularies.Common.v1.Text":{ "Path" : "AnyPath" }

```



</td>
</tr>
<tr>
<td valign="top">

```
sap:unit="WeightUnit"
```

or

```
sap:unit="CurrencyCode"
```

Where `WeightUnit` and `CurrencyCode` are names of properties in the same entity and `WeightUnit` points to a property with `sap-semantics:unit-of-measure` and `CurrencyCode`points to a property with `sap-semantics:currency-code`.



</td>
<td valign="top">

```
"Org.OData.Measures.V1.Unit": { "Path" : "WeightUnit" }
```

or

```
"Org.OData.Measures.V1.ISOCurrency": { "Path" : "CurrencyCode" }

```



</td>
</tr>
<tr>
<td valign="top">

```
sap:visible="false"
```



</td>
<td valign="top">

```
"com.sap.vocabularies.UI.v1.Hidden" : { "Bool" : "true" }
```

Deprecated as of SAPUI5 1.44:

```
"com.sap.vocabularies.Common.v1.FieldControl": { "EnumMember" :
"com.sap.vocabularies.Common.v1.FieldControlType/Hidden" }
```



</td>
</tr>
<tr>
<td valign="top">

```
sap:aggregation-role="dimension"
```



</td>
<td valign="top">

```
"com.sap.vocabularies.Analytics.v1.Dimension" : { "Bool" : "true" }
```

> ### Note:  
> Implemented with version 1.46.



</td>
</tr>
<tr>
<td valign="top">

```
sap:aggregation-role="measure"
```



</td>
<td valign="top">

```
"com.sap.vocabularies.Analytics.v1.Measure" : { "Bool" : "true" }
```

> ### Note:  
> Implemented with version 1.46.



</td>
</tr>
<tr>
<td valign="top">

```
sap:semantics="year"
```



</td>
<td valign="top">

```
"com.sap.vocabularies.Common.v1.IsCalendarYear" : {"Bool" : "true"}
```

> ### Note:  
> Implemented with version 1.50.



</td>
</tr>
<tr>
<td valign="top">

```
sap:semantics="yearmonth"
```



</td>
<td valign="top">

```
"com.sap.vocabularies.Common.v1.IsCalendarYearMonth" : {"Bool" : "true"}
```

> ### Note:  
> Implemented with version 1.50.



</td>
</tr>
<tr>
<td valign="top">

```
sap:semantics="yearmonthday"
```



</td>
<td valign="top">

```
"com.sap.vocabularies.Common.v1.IsCalendarDate" : {"Bool" : "true"}
```

> ### Note:  
> Implemented with version 1.50.



</td>
</tr>
<tr>
<td valign="top">

```
sap:semantics = url
```



</td>
<td valign="top">

```
"Org.OData.Core.V1.IsURL" : { "Bool" : "true" }

```

> ### Note:  
> Implemented with version 1.52.



</td>
</tr>
<tr>
<td valign="top">

```
sap:semantics="yearquarter"
```



</td>
<td valign="top">

```
"com.sap.vocabularies.Common.v1.IsCalendarYearQuarter" : {"Bool" : "true"}
```

> ### Note:  
> Implemented with version 1.54.



</td>
</tr>
<tr>
<td valign="top">

```
sap:semantics="yearweek"
```



</td>
<td valign="top">

```
"com.sap.vocabularies.Common.v1.IsCalendarYearWeek" : {"Bool" : "true"}
```

> ### Note:  
> Implemented with version 1.54.



</td>
</tr>
<tr>
<td valign="top">

```
sap:semantics="fiscalyear"
```



</td>
<td valign="top">

```
"com.sap.vocabularies.Common.v1.IsFiscalYear" : {"Bool" : "true"}
```

> ### Note:  
> Implemented with version 1.54.



</td>
</tr>
<tr>
<td valign="top">

```
sap:semantics="fiscalyearperiod"
```



</td>
<td valign="top">

```
"com.sap.vocabularies.Common.v1.IsFiscalYearPeriod" : {"Bool" : "true"}
```

> ### Note:  
> Implemented with version 1.54.



</td>
</tr>
</table>

Transformations defined at `NavigationProperty`:


<table>
<tr>
<th valign="top">

OData V2 SAP Extension



</th>
<th valign="top">

Resulting OData V4 Annotation



</th>
</tr>
<tr>
<td valign="top">

```
sap:filterable = "false"
```



</td>
<td valign="top">

```
"Org.OData.Capabilities.V1.FilterRestrictions": {
    "NonFilterableProperties" : [
    { "PropertyPath" : "PropA " },
    { "PropertyPath" : "PropC " }
    ]
}
```

For example, if `sap:filterable` is set to `false` for properties `PropA` and `PropC`

> ### Note:  
> The resulting annotation is added to the `EntitySet`, **not** to the `NavigationProperty`.

> ### Note:  
> Implemented with version 1.42.

> ### Caution:  
> Deprecated with version 1.54. See entry below.



</td>
</tr>
<tr>
<td valign="top">

```
sap:filterable = "false"
```



</td>
<td valign="top">

```
"Org.OData.Capabilities.V1.NavigationRestrictions": {
  "RestrictedProperties": [
    {
      "FilterRestrictions": {"Filterable": false},
      "NavigationProperty": {"NavigationPropertyPath": "NavPropA"}
    },
    {
      "FilterRestrictions": {"Filterable": false},
      "NavigationProperty": {"NavigationPropertyPath": "NavPropB"}
    }
  ]
}
```

For example, if `sap:filterable` is set to false for navigation properties `NavPropA` and `NavPropB`.

> ### Note:  
> The resulting annotation is added to the `EntitySet`, **not** to the `NavigationProperty`.

> ### Note:  
> Implemented with version 1.54.



</td>
</tr>
<tr>
<td valign="top">

```
sap:creatable = "false"
```



</td>
<td valign="top">

```
"Org.OData.Capabilities.V1.InsertRestrictions": {

    "NonInsertableNavigationProperties" : [
    { "NavigationPropertyPath" : "NavPropA " },
    { "NavigationPropertyPath" : "NavPropC " }
    ]

}
```

For example, if `sap:creatable` is set to `false` for navigation properties `NavPropA` and `NavPropC`

> ### Note:  
> The resulting annotation is added to the `EntitySet`, **not** to the `NavigationProperty`.

> ### Note:  
> If `sap:creatable` and `sap:creatable-path` are given, the service is broken and it is handled as `sap:creatable="false"`.

> ### Note:  
> Implemented with version 1.42.



</td>
</tr>
<tr>
<td valign="top">

```
sap:creatable-path="Creatable"
```



</td>
<td valign="top">

```
"Org.OData.Capabilities.V1.InsertRestrictions": {

    "NonInsertableNavigationProperties" : [{
        "IF" : [{
            "Not" : {
                "Path" : "Creatable"
            }
        }, {
            "NavigationPropertyPath" : "NavPropA"
        }]
    }]
}
```

> ### Note:  
> The resulting annotation is added to the `EntitySet`, **not** to the `NavigationProperty`.

> ### Note:  
> If `sap:creatable` and `sap:creatable-path` are given, the service is broken and it is handled as `sap:creatable="false"`.

> ### Note:  
> Implemented with version 1.42.



</td>
</tr>
</table>

Transformations defined at `Schema`:


<table>
<tr>
<th valign="top">

OData V2 SAP Extension



</th>
<th valign="top">

Resulting OData V4 Annotation



</th>
</tr>
<tr>
<td valign="top">

```
schema-version="foo"
```



</td>
<td valign="top">

```
"@Org.Odata.Core.V1.SchemaVersion" : "foo"
```

> ### Note:  
> Implemented with version 1.54.



</td>
</tr>
</table>

Depending on the value of the `sap:semantics` annotation, different vocabulary-based annotations are generated. The following transformations are implemented and defined at `property`. In the examples of the resulting JSON at the "defined at" object, `PROPERTY` is a placeholder for the name of the property at which the `sap:semantics` annotation is defined.


<table>
<tr>
<th valign="top">

OData V2 SAP Extension



</th>
<th valign="top">

Resulting OData V4 Annotation



</th>
</tr>
<tr>
<td valign="top">

```
sap:semantics = "currency-code"
```



</td>
<td valign="top">

see `sap:unit` above



</td>
</tr>
<tr>
<td valign="top">

```
sap:semantics = "unit-of-measure"
```



</td>
<td valign="top">

see `sap:unit` above



</td>
</tr>
<tr>
<td valign="top">

```
sap:semantics = "name"
```



</td>
<td valign="top">

```
"com.sap.vocabularies.Communication.v1.Contact" : { "fn" : { "Path" : "PROPERTY" } }
```



</td>
</tr>
<tr>
<td valign="top">

```
sap:semantics = "givenname"
```



</td>
<td valign="top">

```
"com.sap.vocabularies.Communication.v1.Contact" : { "n" : { "given" : { "Path" : "PROPERTY" } } }
```



</td>
</tr>
<tr>
<td valign="top">

```
sap:semantics = "middlename"
```



</td>
<td valign="top">

```
"com.sap.vocabularies.Communication.v1.Contact" : { "n" : { "additional" : { "Path" : "PROPERTY" } } }
```



</td>
</tr>
<tr>
<td valign="top">

```
sap:semantics = "familyname"
```



</td>
<td valign="top">

```
"com.sap.vocabularies.Communication.v1.Contact" : { "n" : { "surname" : { "Path" : "PROPERTY" } } }
```



</td>
</tr>
<tr>
<td valign="top">

```
sap:semantics = "nickname"
```



</td>
<td valign="top">

```
"com.sap.vocabularies.Communication.v1.Contact" : { "nickname" : { "Path" : "PROPERTY" } }
```



</td>
</tr>
<tr>
<td valign="top">

```
sap:semantics = "honorific"
```



</td>
<td valign="top">

```
"com.sap.vocabularies.Communication.v1.Contact" : { "n" : { "prefix" : { "Path" : "PROPERTY" } } }
```



</td>
</tr>
<tr>
<td valign="top">

```
sap:semantics = "suffix"
```



</td>
<td valign="top">

```
"com.sap.vocabularies.Communication.v1.Contact" : { "n" : { "suffix" : { "Path" : "PROPERTY" } } }
```



</td>
</tr>
<tr>
<td valign="top">

```
sap:semantics = "note"
```



</td>
<td valign="top">

```
"com.sap.vocabularies.Communication.v1.Contact" : { "note" : { "Path" : "PROPERTY" } }
```



</td>
</tr>
<tr>
<td valign="top">

```
sap:semantics = "photo"
```



</td>
<td valign="top">

```
"com.sap.vocabularies.Communication.v1.Contact" : { "photo" : { "Path" : "PROPERTY" } }
```



</td>
</tr>
<tr>
<td valign="top">

```
sap:semantics = "city"
```



</td>
<td valign="top">

```
"com.sap.vocabularies.Communication.v1.Contact" : { "adr" : { "locality" : { "Path" : "PROPERTY" } } }
```



</td>
</tr>
<tr>
<td valign="top">

```
sap:semantics = "street"
```



</td>
<td valign="top">

```
"com.sap.vocabularies.Communication.v1.Contact" : { "adr" : { "street" : { "Path" : "PROPERTY" } } }
```



</td>
</tr>
<tr>
<td valign="top">

```
sap:semantics = "country"
```



</td>
<td valign="top">

```
"com.sap.vocabularies.Communication.v1.Contact" : { "adr" : { "country" : { "Path" : "PROPERTY" } } }
```



</td>
</tr>
<tr>
<td valign="top">

```
sap:semantics = "region"
```



</td>
<td valign="top">

```
"com.sap.vocabularies.Communication.v1.Contact" : { "adr" : { "region" : { "Path" : "PROPERTY" } } }
```



</td>
</tr>
<tr>
<td valign="top">

```
sap:semantics = "zip"
```



</td>
<td valign="top">

```
"com.sap.vocabularies.Communication.v1.Contact" : { "adr" : { "code" : { "Path" : "PROPERTY" } } }
```



</td>
</tr>
<tr>
<td valign="top">

```
sap:semantics = "pobox"
```



</td>
<td valign="top">

```
"com.sap.vocabularies.Communication.v1.Contact" : { "adr" : { "pobox" : { "Path" : "PROPERTY" } } }
```



</td>
</tr>
<tr>
<td valign="top">

```
sap:semantics = "org"
```



</td>
<td valign="top">

```
"com.sap.vocabularies.Communication.v1.Contact" : { "org" : { "Path" : "PROPERTY" } }
```



</td>
</tr>
<tr>
<td valign="top">

```
sap:semantics = "org-unit"
```



</td>
<td valign="top">

```
"com.sap.vocabularies.Communication.v1.Contact" : { "orgunit" : { "Path" : "PROPERTY" } }
```



</td>
</tr>
<tr>
<td valign="top">

```
sap:semantics = "org-role"
```



</td>
<td valign="top">

```
"com.sap.vocabularies.Communication.v1.Contact" : { "role" : { "Path" : "PROPERTY" } }
```



</td>
</tr>
<tr>
<td valign="top">

```
sap:semantics = "title"
```



</td>
<td valign="top">

```
"com.sap.vocabularies.Communication.v1.Contact" : { "title" : { "Path" : "PROPERTY" } }
```



</td>
</tr>
<tr>
<td valign="top">

```
sap:semantics = "bday"
```



</td>
<td valign="top">

```
"com.sap.vocabularies.Communication.v1.Contact" : { "bday" : { "Path" : "PROPERTY" } }
```



</td>
</tr>
<tr>
<td valign="top">

```
sap:semantics = "dtstart"
```



</td>
<td valign="top">

```
"com.sap.vocabularies.Communication.v1.Event" : { "dtstart" : { "Path" : "PROPERTY" } }
```



</td>
</tr>
<tr>
<td valign="top">

```
sap:semantics = "dtend"
```



</td>
<td valign="top">

```
"com.sap.vocabularies.Communication.v1.Event" : { "dtend" : { "Path" : "PROPERTY" } }
```



</td>
</tr>
<tr>
<td valign="top">

```
sap:semantics = "duration"
```



</td>
<td valign="top">

```
"com.sap.vocabularies.Communication.v1.Event" : { "duration" : { "Path" : "PROPERTY" } }
```



</td>
</tr>
<tr>
<td valign="top">

```
sap:semantics = "class"
```



</td>
<td valign="top">

```
"com.sap.vocabularies.Communication.v1.Event" : { "class" : { "Path" : "PROPERTY" } }
```



</td>
</tr>
<tr>
<td valign="top">

```
sap:semantics = "status"
```



</td>
<td valign="top">

```
"com.sap.vocabularies.Communication.v1.Event" : { "status" : { "Path" : "PROPERTY" } }
```



</td>
</tr>
<tr>
<td valign="top">

```
sap:semantics = "transp"
```



</td>
<td valign="top">

```
"com.sap.vocabularies.Communication.v1.Event" : { "transp" : { "Path" : "PROPERTY" } }
```



</td>
</tr>
<tr>
<td valign="top">

```
sap:semantics = "fbtype"
```



</td>
<td valign="top">

```
"com.sap.vocabularies.Communication.v1.Event" : { "fbtype" : { "Path" : "PROPERTY" } }
```



</td>
</tr>
<tr>
<td valign="top">

```
sap:semantics = "wholeday"
```



</td>
<td valign="top">

```
"com.sap.vocabularies.Communication.v1.Event" : { "wholeday" : { "Path" : "PROPERTY" } }
```



</td>
</tr>
<tr>
<td valign="top">

```
sap:semantics = "location"
```



</td>
<td valign="top">

```
"com.sap.vocabularies.Communication.v1.Event" : { "location" : { "Path" : "PROPERTY" } }
```



</td>
</tr>
<tr>
<td valign="top">

```
sap:semantics = "due"
```



</td>
<td valign="top">

```
"com.sap.vocabularies.Communication.v1.Task" : { "due" : { "Path" : "PROPERTY" } }
```



</td>
</tr>
<tr>
<td valign="top">

```
sap:semantics = "completed"
```



</td>
<td valign="top">

```
"com.sap.vocabularies.Communication.v1.Task" : { "completed" : { "Path" : "PROPERTY" } }
```



</td>
</tr>
<tr>
<td valign="top">

```
sap:semantics = "percent-complete"
```



</td>
<td valign="top">

```
"com.sap.vocabularies.Communication.v1.Task" : { "percentcomplete" : { "Path" : "PROPERTY" } }
```



</td>
</tr>
<tr>
<td valign="top">

```
sap:semantics = "priority"
```



</td>
<td valign="top">

```
"com.sap.vocabularies.Communication.v1.Task" : { "priority" : { "Path" : "PROPERTY" } }
```



</td>
</tr>
<tr>
<td valign="top">

```
sap:semantics = "from"
```



</td>
<td valign="top">

```
"com.sap.vocabularies.Communication.v1.Message" : { "from" : { "Path" : "PROPERTY" } }
```



</td>
</tr>
<tr>
<td valign="top">

```
sap:semantics = "sender"
```



</td>
<td valign="top">

```
"com.sap.vocabularies.Communication.v1.Message" : { "sender" : { "Path" : "PROPERTY" } }
```



</td>
</tr>
<tr>
<td valign="top">

```
sap:semantics = "subject"
```



</td>
<td valign="top">

```
"com.sap.vocabularies.Communication.v1.Message" : { "subject" : { "Path" : "PROPERTY" } }
```



</td>
</tr>
<tr>
<td valign="top">

```
sap:semantics = "body"
```



</td>
<td valign="top">

```
"com.sap.vocabularies.Communication.v1.Message" : { "body" : { "Path" : "PROPERTY" } }
```



</td>
</tr>
<tr>
<td valign="top">

```
sap:semantics = "received"
```



</td>
<td valign="top">

```
"com.sap.vocabularies.Communication.v1.Message" : { "received" : { "Path" : "PROPERTY" } }
```



</td>
</tr>
<tr>
<td valign="top">

```
sap:semantics = "tel"
```



</td>
<td valign="top">

At the `EntityType` or `ComplexType`:

```
"com.sap.vocabularies.Communication.v1.Contact" : { 
"tel" : [{
"uri" : { "Path" : "ATTRIBUTE" }
}]}
```

Where `ATTRIBUTE` is the name of the annotated attribute of an `EntityType` or `ComplexType`.

At `Property`:

```
"com.sap.vocabularies.Communication.v1.IsPhoneNumber" : { "Bool" : "true" }
```



</td>
</tr>
<tr>
<td valign="top">

```
sap:semantics = "tel";type=cell,work
```



</td>
<td valign="top">

At the `EntityType` or `ComplexType`:

```
"com.sap.vocabularies.Communication.v1.Contact" : { 
"tel" : [{
"type" : {
"EnumMember": "com.sap.vocabularies.Communication.v1.PhoneType/cell"
+ " com.sap.vocabularies.Communication.v1.PhoneType/work"
},
"uri" : { "Path" : "ATTRIBUTE" }
}]}
```

Where `ATTRIBUTE` is the name of the annotated attribute of an `EntityType` or `ComplexType`.

At `Property`:

```
"com.sap.vocabularies.Communication.v1.IsPhoneNumber" : { "Bool" : "true" }
```



</td>
</tr>
<tr>
<td valign="top">

```
sap:semantics = "email"
```



</td>
<td valign="top">

At the `EntityType` or `ComplexType`:

```
"com.sap.vocabularies.Communication.v1.Contact" : { 
"address" : [{
"uri" : { "Path" : "ATTRIBUTE" }
}]}
```

Where `ATTRIBUTE` is the name of the annotated attribute of an `EntityType` or `ComplexType`.

At `Property`:

```
"com.sap.vocabularies.Communication.v1.IsEmailAddress" : { "Bool" : "true" }
```



</td>
</tr>
<tr>
<td valign="top">

```
sap:semantics = "email";type=work,pref
```



</td>
<td valign="top">

At the `EntityType` or `ComplexType`:

```
"com.sap.vocabularies.Communication.v1.Contact" : { 
"email" : [{
"address" : { "Path" : "ATTRIBUTE" },
"type" : {
"EnumMember" : "com.sap.vocabularies.Communication.v1.ContactInformationType/work"
+ "com.sap.vocabularies.Communication.v1.ContactInformationType/preferred"
}
}]}
```

Where `ATTRIBUTE` is the name of the annotated attribute of an `EntityType` or `ComplexType`.

At `Property`:

```
"com.sap.vocabularies.Communication.v1.IsEmailAddress" : { "Bool" : "true" }
```



</td>
</tr>
</table>

**Related Information**  


[XML Templating](xml-templating-5ee619f.md "The XML templating concept enables you to use an XML view as a template. This template is transformed by an XML preprocessor on the source level, the XML DOM, at runtime just before an SAPUI5 control tree is created from the XML source.")

[OData V2 Model](odata-v2-model-6c47b2b.md#loio6c47b2b39db9404582994070ec3d57a2 "The OData V2 Model enables binding of controls to data from OData services.")

[Class `sap.ui.model.odata.ODataMetaModel`](https://ui5.sap.com/#/api/sap.ui.model.odata.ODataMetaModel)

 <a name="loioaa9024c7c5444822a68daeb21a92bd51"/>

<!-- loioaa9024c7c5444822a68daeb21a92bd51 -->

## Currency and Unit Customizing in OData V2

For amounts or measures you may sometimes need different currencies or units than defined in the CLDR. The `sap.ui.model.odata.type.Currency` and `sap.ui.model.odata.type.Unit` data types enable you to use code lists with customizing for currency codes and units.

For code lists with currency or unit customizing you need to define the following annotations:

-   Currencies: `com.sap.vocabularies.CodeList.v1.CurrencyCodes`

-   Units: `com.sap.vocabularies.CodeList.v1.UnitsOfMeasure`


In contrast to the [OData V4 scenario](currency-and-unit-customizing-in-odata-v4-4d1b9d4.md), OData V2 does not allow for a separate code list service. All metadata information must therefore be contained in the main metadata.xml file, and the code list URL must point to this file only. This is achieved by specifying the `Url` property as follows:

```xml
<PropertyValue Property="Url" String="./$metadata" />

```

Code lists that are referenced by the `com.sap.vocabularies.CodeList.v1.CurrencyCodes` or `com.sap.vocabularies.CodeList.v1.UnitsOfMeasure` annotations need the following:

-   The internal code as its only key property

-   A language-dependent description

-   A numeric property with the unit-specific number of significant fractional digits

-   Optional: An external code that should be visualized instead of the internal code

-   Optional: A standard code


The key property is annotated with:

-   `com.sap.vocabularies.Common.v1.Text` pointing to the description property

-   `com.sap.vocabularies.Common.v1.UnitSpecificScale` pointing to the numeric property

-   Optional: `com.sap.vocabularies.CodeList.v1.StandardCode` pointing to the standard code property


Keep in mind that `Path` attributes in annotations have to reference properties in the target `EntityType`. Paths containing navigation properties are not supported.

The entity type is optionally annotated with `Org.OData.Core.V1.AlternateKeys` pointing to another property that should be used for visualization.

If an alternate key is available, the type uses the alternate key as the key of the currency or unit. In this case, the service has to contain the alternate key representation in the currency or unit property. The key is used and expected in the data if no alternate key is annotated. Note that there must be at most one alternate key, and that the key and alternate key must have exactly one property.

The property annotated as `com.sap.vocabularies.CodeList.v1.StandardCode` is interpreted as an ISO code by `sap.ui.model.odata.type.Currency` and used to find currency symbols. The currency symbols may be used for entering data.

**Code list annotations for currency codes and units in the service's metadata.xml file:**

```xml

...
<edmx:Include Namespace="com.sap.vocabularies.Common.v1" Alias="SAP__common"/>
<edmx:Include Namespace="Org.OData.Core.V1" Alias="SAP__core"/>
<edmx:Include Namespace="com.sap.vocabularies.CodeList.v1" Alias="SAP__CodeList"/>
...
<EntityType Name="Product">
    ...
    <Property Name="WeightMeasure" Type="Edm.Decimal" Precision="13" Scale="3" />
    <Property Name="WeightUnit" Type="Edm.String" MaxLength="3" />
    <Property Name="CurrencyCode" Type="Edm.String" Nullable="false" MaxLength="5" />
    <Property Name="Price" Type="Edm.Decimal" Precision="16" Scale="3" /> 
    ...
</EntityType>
...
<EntityType Name="SAP__Currency" sap:content-version="1">
<Key>
    <PropertyRef Name="CurrencyCode"/>
</Key>
    <Property Name="CurrencyCode" Type="Edm.String" Nullable="false" MaxLength="5" sap:label="Currency" sap:semantics="currency-code"/>
    <Property Name="ISOCode" Type="Edm.String" Nullable="false" MaxLength="3" sap:label="ISO Code"/>
    <Property Name="Text" Type="Edm.String" Nullable="false" MaxLength="15" sap:label="Short Text"/>
    <Property Name="DecimalPlaces" Type="Edm.Byte" Nullable="false" sap:label="Decimals"/>
</EntityType>
 
<EntityType Name="SAP__UnitOfMeasure" sap:content-version="1">
<Key>
    <PropertyRef Name="UnitCode"/>
</Key>
    <Property Name="UnitCode" Type="Edm.String" Nullable="false" MaxLength="3" sap:label="Internal UoM" sap:semantics="unit-of-measure"/>
    <Property Name="ISOCode" Type="Edm.String" Nullable="false" MaxLength="3" sap:label="ISO Code"/>
    <Property Name="ExternalCode" Type="Edm.String" Nullable="false" MaxLength="3" sap:label="Commercial"/>
    <Property Name="Text" Type="Edm.String" Nullable="false" MaxLength="30" sap:label="UoM Text"/>
    <Property Name="DecimalPlaces" Type="Edm.Int16" sap:label="Decimal Places"/>
</EntityType>
...
<EntityContainer Name="GWSAMPLE_BASIC_Entities" m:IsDefaultEntityContainer="true" sap:message-scope-supported="true" sap:supported-formats="atom json xlsx">
<EntitySet Name="ProductSet" EntityType="GWSAMPLE_BASIC.Product" sap:content-version="1"/>
...
<EntitySet Name="SAP__Currencies" EntityType="GWSAMPLE_BASIC.SAP__Currency" sap:creatable="false" sap:updatable="false" sap:deletable="false" sap:pageable="false" sap:content-version="1"/>
<EntitySet Name="SAP__UnitsOfMeasure" EntityType="GWSAMPLE_BASIC.SAP__UnitOfMeasure" sap:creatable="false" sap:updatable="false" sap:deletable="false" sap:pageable="false" sap:content-version="1"/>
...
<Annotations
    xmlns="http://docs.oasis-open.org/odata/ns/edm"
    Target="GWSAMPLE_BASIC.GWSAMPLE_BASIC_Entities"> 
    <Annotation Term="SAP__CodeList.CurrencyCodes">
        <Record>
            <PropertyValue Property="Url" String="./$metadata"/>
            <PropertyValue Property="CollectionPath" String="SAP__Currencies"/>
        </Record>
    </Annotation>
    <Annotation Term="SAP__CodeList.UnitsOfMeasure">
        <Record>
            <PropertyValue Property="Url" String="./$metadata"/>
            <PropertyValue Property="CollectionPath" String="SAP__UnitsOfMeasure"/>
        </Record>
    </Annotation>
</Annotations>

<Annotations Target="SAP__self.Currency/CurrencyCode">
    <Annotation Term="Common.Text" Path="Text" />
    <Annotation Term="Common.UnitSpecificScale" Path="DecimalPlaces" />
    <Annotation Term="CodeList.StandardCode" Path="ISOCode" />
</Annotations>
  
<Annotations
    xmlns="http://docs.oasis-open.org/odata/ns/edm"
    Target="GWSAMPLE_BASIC.SAP__UnitOfMeasure/UnitCode">
    <Annotation Term="Common.Text" Path="Text" />
    <Annotation Term="Common.UnitSpecificScale" Path="DecimalPlaces" />
    <Annotation Term="CodeList.StandardCode" PropertyPath="ISOCode" />
    <Annotation Term="CodeList.ExternalCode" PropertyPath="ExternalCode" />
</Annotations>
  
<Annotations 
    xmlns="http://docs.oasis-open.org/odata/ns/edm"
    Target="GWSAMPLE_BASIC.SAP__UnitOfMeasure">
    <Annotation Term="Core.AlternateKeys">
      <Collection>
        <Record>
          <PropertyValue Property="Key">
            <Collection>
              <Record>
                <PropertyValue Property="Name" PropertyPath="ExternalCode" />
                <PropertyValue Property="Alias" String="ExternalCode" />
              <Record>
            </Collection>
          </PropertyValue>
        <Record>
      </Collection>
    </Annotation>
</Annotations>
...
```

With the metadata above, you can use the `sap.ui.model.odata.type.Currency` and `sap.ui.model.odata.type.Unit` data types in an input field as shown in the following example. The data types use a composite binding with the amount or measure as its first part, the currency code or unit as its second part, and the information about the code list customizing that has to be used as its third part.

**Example how to use currency and unit types in a freestyle application:**

```js
...
<Input value="{
   mode:'TwoWay', 
   parts:[
      'WeightMeasure', 
      'WeightUnit', 
      {
         mode:'OneTime', 
         path:'/##@@requestUnitsOfMeasure', 
         targetType:'any'}], 
   type:'sap.ui.model.odata.type.Unit'}"/>
...
<Input value="{
   mode:'TwoWay', 
   parts:[
      'Price', 
      'CurrencyCode', 
      {
         mode:'OneTime', 
         path:'/##@@requestCurrencyCodes', 
         targetType:'any'}], 
   type:'sap.ui.model.odata.type.Currency'}"/>
...
```

The code lists are automatically requested only once per browser session and code list URL.

