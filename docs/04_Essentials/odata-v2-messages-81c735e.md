<!-- loio81c735e69d354de98b0bd139e4bd4e10 -->

# OData V2 Messages

OData V2 messages are created automatically by `sap.ui.model.odata.ODataMessageParser` and processed by the `sap.ui.model.odata.v2.ODataModel`.



## Target

The target of these messages can be empty. In this case, the message has no specific target and is relevant for the whole application. If a target is set, it must correspond to a binding path which is then used to propagate the message to the corresponding bindings. If these bindings belong to a control that implements the `refreshDataState` function, the control is able to react to data state changes.



## Lifecycle

OData V2 messages are kept until a message from the server for the same path arrives. The server always sends all messages for a specific target which means that all current messages are replaced with the ones sent by the server, except for `persistent` UI messages. Back-end messages with the `transition` property set to `true` are parsed to `persistent` UI messages.



<a name="loio81c735e69d354de98b0bd139e4bd4e10__section_ypv_nbj_rhb"/>

## Automatically Created Messages

The `sap.ui.model.odata.v2.ODataModel` supports automatic parsing of OData V2 messages by means of `sap.ui.model.odata.ODataMessageParser`.

For other back-end service types, an application can implement its own parser, see [Implementing Your Own OData V2 Message Parser](implementing-your-own-odata-v2-message-parser-2e532e6.md).



<a name="loio81c735e69d354de98b0bd139e4bd4e10__section_ydt_pbj_rhb"/>

## OData V2 Message Parser

The `ODataMessageParser` is created automatically for all `v2.ODataModel` instances and parses all responses from the server. The `ODataModel` implements the message processor interface and is used to propagate the messages to the `sap.ui.core.Messaging` module. In case of an error response, the response body is parsed for error messages. In case of a successful response, the "sap-message" header is parsed as a JSON-formatted error object. The name of the header field can be changed by calling the `setHeaderField()` method on the `ODataMessageParser`.



<a name="loio81c735e69d354de98b0bd139e4bd4e10__section_mzk_rbj_rhb"/>

## Troubleshooting for the OData V2 Message Parser

In this section you find known restrictions of the `ODataMessageParser` and how you can resolve issues with unexpected numbers of UI messages.



### Duplicate messages with different targets

Mulitple OData changes that are part of the same change set are send as batch request to the back end, for example:

-   Change operation \(POST Product\('id=123'\)\)

-   Change operation \(POST Product\('id=456'\)\)


If one change operation fails, the back end rolls back all operations of the change set, but returns only a single message, for example:

```js
{
  "code": "MYCODE/111",
  "message": "Invalid input!",
  "severity": "error",
  "target": ""
}
```

This leads to two UI message objects with the following message targets:

-   "/Product\('id=123'\)"

-   "/Product\('id=456'\)"


**Solution**: The message target has to be defined in the back-end error message. By this, only one UI message which represents the failed change is created and pushed into the central message model. Otherwise, the `ODataMessageParser` creates a separate error message for every change included in the change set.



### Duplicate messages with the same target

The OData service error response can also contain multiple inner-errors to deliever more than one error message to the front end. The inner-error messages should generally be used to describe the problem in more detail, for example

```js
{
  "code": "MYCODE/111",
  "message": "Failed operations!",
  "severity": "error",
    "details": [
    {
      "code": "MYCODE/222",
      "message": "Object 1 already exists!"
      "severity": "error"
    },
    {
      "code": "MYCODE/222",
      "message": "Object 2 already exists!"
      "severity": "error"
    },
    ...
  ]
}
```

**Solution**: The outer-error will also be parsed into a separate UI error message. These general error messages, such as *Failed operations*, can be confusing for end users. To prevent these general UI messages, the outer-error message has to have the same error code and error message text \("message" property\) as an inner-error. This way, the outer message information is ignored, that is, not parsed into a UI message, since there already is an inner-error message with more details that represents the same issue.

**Hint**: The duplicate detection only works for request body error messages. For request header error messages, the unwanted outer-error must be filtered out in the front end. As an alternative, the outer-error could already represent the first detailed error, see the example error with message *Object 1 already exists*.



### Scenario 3: Missing UI messages

This can happen when an OData entity is changed and the same entity is requested again shortly afterwards. The change and the read operation could also be part of the same batch request, for example:

-   Change operation \('POST' request with target "Product\('id=123'\)"\)

-   Read operation \('GET' request with target "Products"\)


If the change operation fails, a UI message is created. But this UI message is deleted directly afterwards via the messaging lifecycle since the read operation of the same entity does not return any message. There are two options to get the expected behavior in this scenario:

**Solution 1**: Mark the UI message as persistent. By this, the message lifecycle will not delete the UI message, but the application has to take care of cleaning up such messages by using the `sap.ui.core.Messaging` APIs.

**Solution 2**: Defer the read operation. By this, the UI message is also not deleted, but the application has to make sure the read operation is triggered at an appropriate point in time.

**Hint**: The read operation is often automatically triggered by the `v2.ODataModel`. To prevent this request from being sent, you can use the model parameter `refreshAfterChange`.

**Related Information**  


[API Reference: `sap.ui.model.odata.v2.ODataModel`](https://ui5.sap.com/#/api/sap.ui.model.odata.v2.ODataModel)

[API Reference: `sap.ui.core.Messaging`](https://ui5.sap.com/#/api/module:sap/ui/core/Messaging)

[API Reference: `sap.ui.model.message.MessageModel`](https://ui5.sap.com/#/api/sap.ui.model.message.MessageModel)

[API Reference: `sap.ui.mode.odata.ODataMessageParser`](https://ui5.sap.com/#/api/sap.ui.model.odata.ODataMessageParser)

[Server Messages in the OData V4 Model](server-messages-in-the-odata-v4-model-fbe1cb5.md "The OData V4 model supports server messages sent via an OData V4 service.")

