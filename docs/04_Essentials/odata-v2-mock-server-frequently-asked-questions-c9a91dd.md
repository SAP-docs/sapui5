<!-- loioc9a91ddaef47461c9c44bfc2198ea3f0 -->

# OData V2 Mock Server: Frequently Asked Questions



## Is the mock server a real server?

No. The mock server runs on the client and only uses the server terminology of "start" and "stop". It does **not** require a network connection since there is no actual server involved.



## What module is needed?

The mock server is contained in module `sap/ui/core/util/MockServer`. The module can either be added to the list of dependencies in a `sap.ui.define` call or it can be required with a call to `sap.ui.require`:

```js
sap.ui.define([…, "sap/ui/core/util/MockServer", …], function(…, MockServer, …) { 
    const oMyMockServer = new MockServer(…);
});

sap.ui.require(["sap/ui/core/util/MockServer"], function(MockServer) {
    const oMyMockServer = new MockServer(…);
});
```



## Can we use one mock server instance to mock multiple OData services?

No. Each OData service needs its own mock server. Create one `MockServer` instance per service.



## How to obtain metadata xml?

Call the metadata of the service in a browser and save it into a file.



## How to obtain mock data? What options do I have for mock data?

You can let the mock server generate random mock data automatically based on services metadata. For this, provide only the path to the metadata file and omit the second parameter of the simulate function as follows:

```js
// url to the service metadata document 
const sMetadataUrl = "testdata/rmtsampleflight/metadata.xml"; 
oMockServer.simulate(sMetadataUrl);
```

You can provide your own mock data in .json files, which can either be created manually or saved from an OData service response. Mock data in JSON format can be generated from an OData service by adding the `$format=json` parameter to the URL. Save the browser response which is called `<entity set name>.json`, for example `FlightCollection.json` and put it into the model folder. Add the path to the simulate function:

```js
// url to the service metadata document 
const sMetadataUrl = "testdata/rmtsampleflight/metadata.xml";
// base url which contains the mockdata
const sMockdataBaseUrl = "testdata/rmtsampleflight/";
oMockServer.simulate(sMetadataUrl, sMockdataBaseUrl);
```

You can specify a path to .json mock data and let the mock server generate data for the rest of the service entities:

```js
const sMetadataUrl = "testdata/rmtsampleflight/metadata.xml"; // url to the service metadata document
const sMockdataBaseUrl = "testdata/rmtsampleflight/"; // base url which contains the mockdata
oMockServer.simulate(sMetadataUrl, {
    sMockdataBaseUrl: sMockdataBaseUrl,
    bGenerateMissingMockData: true
});
```

You can specify the names of the entity sets that are needed, and the mock server will load data only for the specified service entities:

```js
const sMetadataUrl = "testdata/rmtsampleflight/metadata.xml"; // url to the service metadata document
const sMockdataBaseUrl = "testdata/rmtsampleflight/"; // base url which contains the mockdata
oMockServer.simulate(sMetadataUrl, {
    sMockdataBaseUrl: sMockdataBaseUrl,
    bGenerateMissingMockData: true,
    aEntitySetsNames: ["EntitySetName1", " EntitySetName2"]
});
```



## I'm using the OData model and I get the following error in the console: *The following problem occurred: no handler for data*

The OData model uses JSON to fetch the data:

```js
// "ODataModel" required from module "sap/ui/model/odata/v2/ODataModel"
const oModel = new ODataModel(sUri, true);
```



## What do I put in the `rootUri`?

Verify that you use the exact same URI prefix in the request as in the `rootUri` you define for the mock server. If a root URI is set, all request path URIs are prefixed with this root URI. The root URI has to be relative and requires a trailing "/". It also needs to match the URI set in OData/JSON models or simple XHR calls in order for the mock server to intercept them.

The code snippet shows an example:

```js
sap.ui.define([…, 
    "sap/ui/core/util/MockServer",
    "sap/ui/model/odata/v2/ODataModel",
    …
], function(…, MockServer, ODataModel, …) {
    const sUri = "/mock/";
    const oMockServer = new MockServer({rootUri: sUri});
    const oModel = new ODataModel(sUri, true);
    …
});
```



## Can the mock server be used for more than for OData service simulation?

Yes. The mock server can be used to help you fake server response on any given API and stub all AJAX access to resources such as OData service, metadata, annotation files \(XML\), other JSON or \*.properties files.



## Is OData navigation supported?

The mock server supports navigation via association also if no referential constraint is defined. However, the result of the navigation is the entire collection of the navigation, or the first entry of the collection according to the association multiplicity. So, if you want the navigation to return "correct" results according to keys, define a respective referential constraint.



## How can I use the mock server in a QUnit?

You can set up the mock server in the setup function. For example:

```js
sap.ui.define(["sap/ui/core/util/MockServer"], function(MockServer) {
    …
        QUnit.module("OData data provider", {
            beforeEach() {
                this._oMockServer = new MockServer({ rootUri: "/model/"});
                this._oMockServer.simulate("../../../../qunit/service/metadata.xml");
                this._oMockServer.start();
            },
            afterEach() {
                this._oMockServer.stop();
            }
        });
    …
});
```



## How can I provide exit functions as pre/post functions of requests?

Mock Server has APIs to provide more flexibility and control over its current request processing. During request processing, the callbacks are called before or after native handling of the Mock Server using the SAPUI5 eventing mechanism. You can add a callback in all requests of a specific HTTP method, for example in all `get` requests, but additionally also on a specific entity set name, for example, `POST` to `SaleOrders`\).

```js
// add a callback in all requests of a specific http method
oMockServer.attachAfter(sap.ui.core.util.MockServer.HTTPMETHOD.GET, fnCbPost);
```

```js
// on a specific entityset name
oMockServer.attachAfter(sap.ui.core.util.MockServer.HTTPMETHOD.GET, fnCbPost, "CarrierCollection");

```

```js
// remove the callback
oMockServer.detachAfter(sap.ui.core.util.MockServer.HTTPMETHOD.GET, fnCbPost);
```

If you add additional request handlers and want to use this hooks mechanism inside your response function, just call:

```js
this.fireEvent(sap.ui.core.util.MockServer.HTTPMETHOD.GET + "sEntityset" + ":before" , {oXhr: oXhr, sUrlParameters: sUrlParameters});
```



## What do I need to do to run an OPA test with mock server

Start your app in mock mode. It is not possible to declare a mock server outside the app context.

