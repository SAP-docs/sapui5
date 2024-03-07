<!-- loio8956f0a223284d729900ebad4ca88356 -->

# Message Model

The message model contains all messages and is used to bind to the messages to display them.

The message model is retrieved from the message manager by calling the `getMessageModel()` method. You can use it directly in the application, or you can use it as a reference implementation.



## Using the Message Model

You use the message model like any other model to bind an aggregation to a root path \("`/`"\), for example the items in a list, and add filters and sorters. Each item in the collection for "`/`" represents an [`sap.ui.core.message.Message`](https://ui5.sap.com/#/api/sap.ui.core.message.Message) object, so that you can bind to all properties specified for such an object. The `MessagePopover` control is used to display the messages to the user:

```
// "Messaging" required from "sap/ui/core/Messaging"
// "Button" required from "sap/m/Button"
// "MessagePopover" required from "sap/m/MessagePopover"
// "MessagePopoverItem" required from "sap/m/MessagePopoverItem"

const oMessagePopoverButton = new Button({
    text: "Show MessagePopover",
    type: "Accept",
    press: function() {
        oMP.openBy(this);
    }
});

const oMP = new MessagePopover({
    items: {
        path:"message>/",
        template: new MessagePopoverItem({ 
            description: "{message>description}", 
            type: "{message>type}", 
            title: "{message>message}"
        })
    }
});

const oMessageModel = Messaging.getMessageModel();
oMP.setModel(oMessageModel(),"message");

oMessagePopoverButton.placeAt("content");
```

> ### Note:  
> For an example how to bind to the message model and show the messages to the user, see `sap.m.MessagePopover` in the API reference.

**Related Information**  


[API Reference: `sap.ui.model.message.MessageModel`](https://ui5.sap.com/#/api/sap.ui.model.message.MessageModel)

[API Reference: `sap.ui.core.message.MessageManager`](https://ui5.sap.com/#/api/sap.ui.core.message.MessageManager)

[API Reference: `sap.ui.core.message.MessagePopover`](https://ui5.sap.com/#/api/sap.ui.core.message.MessagePopover)

