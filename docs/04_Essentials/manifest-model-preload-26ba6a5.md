<!-- loio26ba6a5c1e5c417f8b21cce1411dba2c -->

# Manifest Model Preload

The `preload` flag enables a preload mode for a model, thus improving the startup performance of an app or component.

The `preload` flag is located in `manifest.json` under `sap.ui5/models`:

```json
"sap.ui5": {
    ...
    "models": {
        "mymodel": {
            "preload": true,
            "type": "name.of.my.ModelClass"
            ...
```

The flag is not active by default, as there are some prerequisites:

-   `sap.ui.component` is set to `"async=true"` and `manifest` \(API parameter name of `sap.ui.component`\).

-   Make sure that the specific model implementation class \(e.g. `name.of.my.ModelClass`\) is loaded before calling one of the available component factories, e.g. `Component.create` or `sap.ui.core.Component#createComponent`; otherwise the model implementation class will be loaded synchronously.

-   As model events \(for example `attachMetadataLoaded`\) may be missed because they are fired before the component coding runs, we recommend using the `Promise` API \(e.g. `metadataLoaded`\) instead, depending on the model type.

-   Use the model preload flag for `sap.ui.model.resource.ResourceModel` if one of the following applies:

    -   There is no component preload.

    -   The corresponding resource files are not part of the component preload.



This means: The preload flag only makes sense for models which load their data from other locations than the component itself. For a local JSON, XML or resource model it does not make sense as it interferes with the component preload, which will result in loading the model data twice, and should be omitted. But for the OData model \(V2 or V4\), for example, using the preload option speeds up performance, as the OData metadata can already be loaded in parallel to the component preload.

Before enabling the preload for the OData model \(V2 or V4\), make sure that you listen properly to metadata loaded by using the `Promise` API instead of the `Event` API \(`metadataLoaded`\), since the preload could have loaded the metadata already before the application code is executed. The Promise will be executed even if the metadata loaded event has been raised already.

For the OData V2 model, also consider using the model parameter `earlyTokenRequest`. For more information, see the [API Reference: `sap.ui.model.odata.v2.ODataModel`](https://ui5.sap.com/#/api/sap.ui.model.odata.v2.ODataModel). 

For the OData V4 model, set the model parameter `earlyRequests` to `true`, so that the root metadata and security token are requested directly after creating the model instance. For more information, see the [API Reference: `sap.ui.model.odata.v4.ODataModel`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel). 

Listen properly to metadata loaded by using the Promise:

```js

var oModel  = this.oModel, // sap.ui.model.odata.v2.ODataModel
    that = this;
oModel.metadataLoaded(true).then(
    function () {
        // model is ready now
        oModel.createKey("PERSON", {"ID" : 4711, "TASK_GUID": "myguid"});
    },
    function () {
        // Display error information so that the user knows that the application does not work.
        that.navigateToErrorPage();
    });
```

