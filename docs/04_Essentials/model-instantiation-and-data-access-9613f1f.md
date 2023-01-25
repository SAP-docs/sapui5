<!-- loio9613f1f2d88747cab21896f7216afdac -->

# Model Instantiation and Data Access

One OData V4 model instance can only cover one OData service. This section describes the creation of a model instance in more detail.

The OData V4 model is primarily designed for OData V4 services. Nevertheless, OData V2 services may be used through an adapter as well. For more information see: [Consuming OData V2 Services with the OData V4 Model](consuming-odata-v2-services-with-the-odata-v4-model-365bdbd.md)

When creating an OData V4 model instance, the only parameter you actually need is a map. This map must contain at least the properties `serviceUrl` and `synchronizationMode`. For more information, see the [sap.ui.model.odata.v4.ODataModel constructor](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel/constructor) API documentation in the Demo Kit.

**OData V4 model instantiation:**

```js

sap.ui.define(["sap/ui/model/odata/v4/ODataModel"], function (ODataModel) {
    var oModel = new ODataModel({
        serviceUrl : "/sap/opu/odata4/IWBEP/V4_SAMPLE/default/IWBEP/V4_GW_SAMPLE_BASIC/0001/",
        synchronizationMode : "None"
    });
});
```



## OData Custom Query Options

An OData service accepts query options placed in the service URL query part, as explained on the URL conventions page [OData Version 4.0 Part 2: URL Conventions](http://docs.oasis-open.org/odata/odata/v4.0/odata-v4.0-part2-url-conventions.html) in chapter 2 *URL Components*. The OData V4 model accepts OData custom query options only as explained in section 5.2 *Custom Query Options* of the URL conventions page; you must not provide OData system query options \(starting with "$"\) or OData parameter aliases \(starting with "@"\) at model level, see sections 5.1 *System Query Options* and 5.3 *Parameter Aliases* in the URL conventions page.

> ### Note:  
> Note that it's possible to specify certain system query options for OData V4 model bindings. For more information, see [Bindings](bindings-54e0ddf.md).

**OData V4 model instantiation with service URL parameters:**

```js

sap.ui.define(["sap/ui/model/odata/v4/ODataModel"], function (ODataModel) {
    var oModel = new ODataModel({
    	serviceUrl : "/sap/opu/odata4/IWBEP/V4_SAMPLE/default/IWBEP/V4_GW_SAMPLE_BASIC/0001/?customParam=foo", 
    	synchronizationMode : "None"
    });
});
```



## Default Groups for Batch Control

The OData V4 model allows you to specify whether or not requests are bundled and sent as a batch request, and when the requests are sent. For more information, see [Batch Control](batch-control-74142a3.md).

The parameter `groupId` specifies the default batch group and defaults to `"$auto"`. You can use the parameter `updateGroupId` to set a batch group for update requests only. If you do not set this parameter, the `groupId` will be used.

The following code instantiates a model that bundles all update requests in the batch group `"myAppUpdateGroup"`; the batch request can then be sent using `oModel.submitBatch("myAppUpdateGroup")`.

**OData V4 model with `updateGroupId`:**

```js

sap.ui.define(["sap/ui/model/odata/v4/ODataModel"], function (ODataModel) {
    var oModel = new ODataModel({
        serviceUrl : "/sap/opu/odata4/IWBEP/V4_SAMPLE/default/IWBEP/V4_GW_SAMPLE_BASIC/0001/",
        synchronizationMode : "None",
        updateGroupId : "myAppUpdateGroup"
    });
});
```



## Instantiating an OData V4 Model Using the Descriptor File \(`manifest.json`\)

The code sample below shows the parts of a [Descriptor for Applications, Components, and Libraries \(manifest.json\)](descriptor-for-applications-components-and-libraries-manifest-json-be0cf40.md) \(`manifest.json`\) that are relevant for instantiating an OData V4 model:

```js

{
    "sap.app" : {
        "dataSources" : {
            "default" : {
                "uri" : "/sap/opu/odata4/IWBEP/V4_SAMPLE/default/IWBEP/V4_GW_SAMPLE_BASIC/0001/",
                "type" : "OData",
                "settings" : {
                    "odataVersion" : "4.0"
                }
            }
        }
    },
    "sap.ui5" : {
        "models" : {
            "" : {
                "dataSource" : "default",
                "settings" : {
                    "synchronizationMode" : "None",
                    "updateGroupId" : "myAppUpdateGroup"
                }
            }
        }
    }
}
```



## Data Access

The OData V4 model only supports data access using bindings. It does not provide any direct access to the data. For more information, see [Unsupported Superclass Methods and Events](unsupported-superclass-methods-and-events-1232241.md). One exception is [sap.ui.model.odata.v4.Context\#setProperty](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context/methods/setProperty). It allows to update a property without using a property binding, even without reading the data first. You can create bindings that are independent of controls. For more information, see [Accessing Data in Controller Code](accessing-data-in-controller-code-17b30ac.md).



## Language

SAPUI5 uses the concept of a "current language" \(see [Identifying the Language Code / Locale](identifying-the-language-code-locale-91f21f1.md)\). This language is automatically propagated to the OData service by the OData V4 model. For this reason, applications must not hard code the language themselves, e.g. they must not specify the `"sap-language"` URL parameter as a custom query option.



<a name="loio9613f1f2d88747cab21896f7216afdac__section_oyf_bpb_fjb"/>

## Set HTTP Header Fields

You can set headers for HTTP requests sent by the OData V4 model: This is possible statically by adding them to the `manifest.json`, or dynamically with the method [ODataModel\#changeHttpHeaders](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel). These headers are applied to data and metadata requests sent by the model. The `ODataModel` propagates its HTTP headers to value list models created via [ODataMetaModel\#createValueListInfo](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataMetaModel); when changing HTTP headers for the model, however, these changes are not applied to existing value list models: If value list models require the new headers, you have to additionally call `ODataModel#changeHttpHeaders` for each of them. For details, see [ODataModel\#changeHttpHeaders](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel).

Sample: Set HTTP header `custom` in manifest.json:

```js
{
    "sap.app" : {
        "dataSources" : {
            "default" : {
                "uri" : "/sap/opu/odata4/IWBEP/V4_SAMPLE/default/IWBEP/V4_GW_SAMPLE_BASIC/0001/",
                "type" : "OData",
                "settings" : {
                    "odataVersion" : "4.0"
                }
            }
        }
    },
    "sap.ui5" : {
        "models" : {
            "" : {
                "dataSource" : "default",
                "settings" : {
                    "autoExpandSelect" : true,
                    "httpHeaders" : {
                        "custom" : "foo"
                    },
                    "synchronizationMode" : "None",
                     
                }
            }
        }
    }
}

```



<a name="loio9613f1f2d88747cab21896f7216afdac__section_STH"/>

## Security Token Handling

The OData V4 model automatically handles a security token via an "X-CSRF-Token" header if needed by its service. To achieve this, the "X-CSRF-Token" header starts with a value of "Fetch" and will be included in every data request. If a data response contains the "X-CSRF-Token" header, that new value will be remembered and used from that time on. If a data request fails with status 403 and an "X-CSRF-Token" response header value "required" \(case insensitive\), a new security token will be fetched and the data request will be repeated automatically and transparently.

A new security token is fetched via a HEAD request on the service URL using an "X-CSRF-Token" header value "Fetch". The response header value of "X-CSRF-Token" is remembered if present, or else that header will not be used any longer.

If a service does not require an "X-CSRF-Token" header, it should ignore that request header, and everything will be fine.



### Early requests

Often, the first request is a POST to $batch and would fail for services requiring an "X-CSRF-Token" header. To improve performance, you should enable [Early Requests for Metadata and Security Token](performance-aspects-5a0d286.md#loio5a0d286c5606424b8e0d663c87445733__section_ER4MST).



### Security token handlers

Some services do not support an "X-CSRF-Token" request header value "Fetch", for example because the "X-CSRF-Token" header value is fixed, known from the beginning, not fetched via the OData service, or does not expire. In other cases, a different header name might be needed. Sometimes it is enough to call [v4.ODataModel\#changeHttpHeaders](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel/methods/changeHttpHeaders) early on. At other times you might need to provide your own security token handler. You can do so before the OData model is created via [SAPUI5's "securityTokenHandlers" configuration option](configuration-options-and-url-parameters-91f2d03.md). You can provide a list of functions which are invoked one by one with the model's service URL as the only argument. The first handler which does not return `undefined` wins and is expected to return a `Promise` that resolves with a map of header names and values. This works much like [v4.ODataModel\#changeHttpHeaders](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel/methods/changeHttpHeaders), but overriding the "X-CSRF-Token" : "Fetch" pair. This means you either provide your own "X-CSRF-Token" value, or that header is not used at all. Note that expiration is currently only supported for the "X-CSRF-Token" header.



<a name="loio9613f1f2d88747cab21896f7216afdac__section_RHD"/>

## Response Headers

The OData model processes some of the response headers, namely:

-   `DataServiceVersion` \(only when consuming an OData V2 service\),
-   `Date`,
-   `ETag`,
-   `OData-Version`,
-   `Preference-Applied`,
-   `Retry-After`,
-   `SAP-Messages`,
-   `X-CSRF-Token`.

Some SAP applications will also require the processing of `SAP-ContextId`, `SAP-Err-Id`, and `SAP-Http-Session-Timeout`. When using cross-origin resource sharing \(CORS\), it is important to add all these headers to the `Access-Control-Expose-Headers` response header.

**Related Information**  


[Constructor: sap.ui.model.odata.v4.ODataModel](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel%23constructor)

[OData Version 4.0 Part 2: URL Conventions](http://docs.oasis-open.org/odata/odata/v4.0/odata-v4.0-part2-url-conventions.html)

[Bindings](bindings-54e0ddf.md "Bindings connect SAPUI5 view elements to model data, allowing changes in the model to be reflected in the view element and vice versa.")

[Batch Control](batch-control-74142a3.md "OData V4 allows you to group multiple operations into a single HTTP request payload, as described in the official OData V4 specification Part 1, Batch Requests (see the link under Related Information for more details).")

[Descriptor for Applications, Components, and Libraries \(manifest.json\)](descriptor-for-applications-components-and-libraries-manifest-json-be0cf40.md "The descriptor for applications, components, and libraries (in short: app descriptor) is inspired by the WebApplication Manifest concept introduced by the W3C. The descriptor provides a central, machine-readable, and easy-to-access location for storing metadata associated with an application, an application component, or a library.")

[Unsupported Superclass Methods and Events](unsupported-superclass-methods-and-events-1232241.md "Certain methods derived from SAPUI5 model and binding superclasses are not supported in OData V4 model classes or have limited support.")

