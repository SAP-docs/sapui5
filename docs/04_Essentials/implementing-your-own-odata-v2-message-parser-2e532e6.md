<!-- loio2e532e6288854e5897a819a2ab6cc910 -->

# Implementing Your Own OData V2 Message Parser

A message parser is a simple interface that is implemented to allow the propagation of messages from back end services. For messages from OData V2 services, the `sap.ui.model.odata.ODataMessageParser` is used.

If you have your own service implementation, for example, a JSON-based back end that also sends messages, you can implement your own message parser by implementing the `sap.ui.core.message.MessageParser` interface.The interface is very simple: It has only the `parse` and the `setProcessor` method. The `parse` method takes at least one parameter, that is, the `response` object from the server. The method can take more model-specific arguments. The `setProcessor` method takes only one argument, the `processor` object that is used to propagate the messages, this is usually the `model` instance.

The main task of the message parser is to retrieve the messages from the back end response and then calculate the message delta that is handed over to the message processor by means of the two parameters `oldMessages` and `newMessages` of the `messageChange` event. The `oldMessages` parameter specifies the messages that are to be removed, and the `newMessages` parameter specifies the messages that are to be added.

```js
this.getProcessor().fireMessageChange({
    oldMessages: aRemovedMessages,
    newMessages: aNewMessages
});
```

The delta calculation must be a back end-specific implementation. In the OData implementation, for example, all messages for the requested resource\(s\) must be returned from the back end on every request. This means that all messages that were available before with a target that corresponds to the requested resources must be put in the `oldMessages` parameter of the event.

**Related Information**  


[sap.ui.model.odata.ODataMessageParser](https://ui5.sap.com/#/api/sap.ui.model.odata.ODataMessageParser)

[sap.ui.model.odata.v2.ODataModel](https://ui5.sap.com/#/api/sap.ui.model.odata.v2.ODataModel)

[sap.ui.core.message.MessageParser](https://ui5.sap.com/#/api/sap.ui.core.message.MessageParser)

