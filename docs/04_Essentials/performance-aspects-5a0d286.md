<!-- loio5a0d286c5606424b8e0d663c87445733 -->

# Performance Aspects

The OData V4 model offers the features described below which influence performance.



## `odata.metadata=minimal`

The OData V4 model uses an `odata.metadata=minimal` header in its requests to reduce the amount of data that is sent from server to client. For more information, see section "3.1.1 odata.metadata=minimal" in the [OData JSON Format Version 4.0](http://docs.oasis-open.org/odata/odata-json-format/v4.0/os/odata-json-format-v4.0-os.html) specification.



## `$expand` and `$select`

An application can either specify `$expand` and `$select` parameters to read all data to be displayed in one request, or create bindings dynamically to load only part of the data with one request per binding. The application needs to decide whether to have less roundtrips with a bigger payload or more roundtrips with smaller payload.

To reduce payload, applications should only select properties that are needed using `$select` \(see the code sample in the [Parameters](parameters-1ab4f62.md) topic\). Besides the properties needed on the UI, the binding must select key properties to support features such as read requests sent from a child binding, write requests, or bound operations on the respective entity.



## Batching Requests or Not

By default, the OData V4 model collects all requests made to the OData service in a batch request to reduce the number of roundtrips. The disadvantage of a batch request is that it cannot be cached by the browser. If some of the requests \(e.g. value help requests\) are "cacheable", it is a good idea to request these resources directly and use the browser cache to improve the performance of the application. In such cases, use the `$direct` group as described in the section [Batch Control](batch-control-74142a3.md). For that reason, unit and currency code lists are fetched with `$direct` by the model. See also [Currency and Unit Customizing in OData V4](currency-and-unit-customizing-in-odata-v4-4d1b9d4.md) for more information on unit and currency code lists.



## Data Reuse

The reuse of data in different bindings may help to avoid unnecessary requests. The available options are described in detail in the chapter [Data Reuse](data-reuse-648e360.md).



<a name="loio5a0d286c5606424b8e0d663c87445733__section_ER4MST"/>

## Early Requests for Metadata and Security Token

The requests for the service's root `$metadata` document and annotation files and for the security token may be on the "critical invocation path": By default, these requests are sent lazily when the SAPUI5 application starts, for example only when the corresponding information is needed. This delays application startup until these requests have returned.

If you construct the model with an `earlyRequests` parameter, the requests are sent as early as possible and application startup performance may improve. Consider using the [Manifest Model Preload](manifest-model-preload-26ba6a5.md), so that the requests are submitted even earlier.

> ### Note:  
> Modern browsers typically can process up to six parallel requests. If and how much the performance improves therefore strongly depends on the number of requests sent initially by the application.

> ### Remember:  
> The default value for `earlyRequests` is `false` in SAPUI5 1.54. This may, however, change in later releases. If you wish to ensure that requests are not sent early, do not rely on the default and explicitly set `earlyRequests` to `false`.

**Related Information**  


[OData JSON Format Version 4.0](http://docs.oasis-open.org/odata/odata-json-format/v4.0/os/odata-json-format-v4.0-os.html)

[Bindings](bindings-54e0ddf.md "Bindings connect SAPUI5 view elements to model data, allowing changes in the model to be reflected in the view element and vice versa.")

[Batch Control](batch-control-74142a3.md "OData V4 allows you to group multiple operations into a single HTTP request payload, as described in the official OData V4 specification Part 1, Batch Requests (see the link under Related Information for more details).")

[Loading Large Amounts of Data](../05_Developing_Apps/performance-issues-966d67c.md#loio966d67c8cc5046419d1b35556cd9e447__section_LLAOD)

