<!-- loio1a010d3b92c34226a96f202ec27e9217 -->

# Binding Events

The OData V4 model supports certain events intended for applications, and others that are to be used for controls, as outlined in this section.



## Events for Applications

For applications, the OData V4 model supports the following events:

-   The `dataRequested` and `dataReceived` events are typically used by applications to display and hide a busy indicator or to process a back-end error which happened when requesting data. The events are fired by `ODataPropertyBinding`, `ODataContextBinding` and `ODataListBinding` and bubbled up to the model when reading data:

    -   The `dataRequested` event is fired directly after data has been requested from a back end.

    -   The `dataReceived` event is fired after the back-end data has been processed. Note that the `dataReceived` event is also fired after a back-end request has failed. The error of the failed request is passed to the event handler as an `error` parameter. If multiple requests are processed within a single $batch \(or even a single change set\), the order of `dataReceived` events is not guaranteed. For requests which are not processed because a previous request failed, `error.cause` points to the root cause error - you should either ignore these events or unwrap the error to access the root cause immediately.


    An event handler attached to the binding can prevent the event from bubbling up to the model by calling [`oEvent.cancelBubble()`](https://ui5.sap.com/#/api/sap.ui.base.Event%23methods/cancelBubble).

    The events are also fired, but only by the model, when additional properties are requested for an existing entity, for example after binding the row context of a list as a binding context for an object page \(which typically displays many more properties\). Note that this includes all requests for a context obtained via [`ODataModel#getKeepAliveContext`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel%23methods/getKeepAliveContext). Timing and parameters are exactly the same as described above. The application can use this event to be notified when data for the object page could not be requested.

    For more details, see the corresponding API documentation for [`ODataModel`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel) and the specific bindings [ODataPropertyBinding](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataPropertyBinding), [ODataContextBinding](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataContextBinding) and [ODataListBinding](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding) in the Demo Kit.

-   The `createSent` and `createCompleted` events at the `ODataListBinding` are typically used by applications to lock the UI for the created entity to avoid modifications while the data for the created entity is sent to the back end, but the response from the back end is not yet processed on the client. For each `createSent` event, a `createCompleted` event is fired.

    -   The `createSent` event is fired each time a POST request that is initiated for an `ODataListBinding#create` is sent to the backend.

    -   The `createCompleted` event is fired each time the back end has responded to a POST request initiated for an `ODataListBinding#create`.


    For more information, see [`ODataListBinding#create`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding/methods/create).

-   The `patchSent` and `patchCompleted` events are typically used by applications that are using update groups with submit mode [Auto](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.SubmitMode) \(which is the default\) and which need to be informed when PATCH requests are sent to the back end and when they are processed. For example, these events can be used to display a `DraftIndicator` to inform the user that his changes are being saved and when saving is finished.

    The `patchSent` and `patchCompleted` events are fired by `ODataContextBinding` and `ODataListBinding` if they send their own service request:

    -   The `patchSent` event is fired when the first PATCH request for this binding is sent to the backend.

    -   The `patchCompleted` event is fired when the backend has responded to the last PATCH request for this binding.


    If `ODataContextBinding` and `ODataListBinding` use the service request of a superordinate binding, the events are fired by the superordinate binding.

    For more details, see the corresponding API documentation for the specific bindings [ODataContextBinding](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataContextBinding) and [ODataListBinding](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding) in the Demo Kit.




## Events for Controls

The events `change` and `refresh` are meant for controls only, and not available for app development. They indicate that the respective binding has new data which can be accessed by the control:

-   When the binding is initialized, it fires a `change` event with the parameter `reason` set to `sap.ui.model.ChangeReason.Change`.

-   When a relative binding gets a new context, it fires a `change` event with the parameter `reason` set to `sap.ui.model.ChangeReason.Context`.

-   When a binding is refreshed, the event fired depends on the binding type, as follows:

    a\) `ODataPropertyBinding` and `ODataContextBinding` fire a `change` event with the parameter `reason` set to `sap.ui.model.ChangeReason.Refresh`.

    b\) `ODataListBinding` fires a `refresh` event.


For more details, see the corresponding API documentation for the specific bindings [ODataPropertyBinding](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataPropertyBinding), [ODataContextBinding](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataContextBinding) and [ODataListBinding](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding), as well as [sap.ui.model.ChangeReason](https://ui5.sap.com/#/api/sap.ui.model.ChangeReason) in the Demo Kit.

**Related Information**  


[ODataPropertyBinding](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataPropertyBinding)

[ODataContextBinding](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataContextBinding)

[ODataListBinding](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding)

[sap.ui.model.ChangeReason](https://ui5.sap.com/#/api/sap.ui.model.ChangeReason)

