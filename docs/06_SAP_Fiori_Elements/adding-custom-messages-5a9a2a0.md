<!-- loio5a9a2a0f2c054b9686acb3497ba32ae2 -->

# Adding Custom Messages

You can use the `securedExecution` method from the API for developers of template extensions to add and display custom messages.

This concept for message handling is based on the SAPUI5 Messaging. For more information, see the API Reference for [Messaging](https://ui5.sap.com/#/api/module:sap/ui/core/Messaging).

SAP Fiori elements provides the `securedExecution` method that starts a 'busy session'.

When a busy session starts, all transition messages are removed automatically, since the system assumes that they belong to previous user interaction.

When the busy session ends, all transition messages that have been collected by the `Messaging` are automatically displayed to the user in a well-defined way, based on the severity of the message. This applies to \(transition\) messages that have been pushed into the `Messaging` automatically \(for example, because they come from the OData model\), and also to transition messages that are pushed to the `Messaging` explicitly by way of application coding.

> ### Sample Code:  
> ```
> securedExecution: function(oContext, aSelectedContexts) {
>    this.editFlow.securedExecution( 
>       function() { 
> >          // "Messaging" required from module "sap/ui/core/Messaging"
> >          // "Message" required from module "sap/ui/core/message/Message"
> >          Messaging.addMessages(new Message({
> >             message: "Server says hello", 
> >             target: "", 
> >             persistent: true, 
> >             type: sap.ui.core.MessageType.Success, 
> >             code: "123" 
> >          }));
>       } 
>    ); 
> }, 
> ```

The sample code shows that a message is created as a transition message by setting the attribute `persistent` to `true`. This attribute describes the lifetime of this message from the perspective of the SAPUI5 `Messaging`. The lifecycle of transition messages is not relevant to the `Messaging`. This means that they are persisted until another agent deletes them from the `Messaging`. The SAP Fiori elements framework triggers the deletions, which effectively limits the lifetime of these messages.

> ### Note:  
> Both a code and a target are mandatory. If a target doesn't exist, you must provide an empty string.

For more information about the `securedExecution` method, see [Using the SecuredExecution Method](using-the-securedexecution-method-6a39150.md) and the API Reference for [securedExecution](https://ui5.sap.com/#/api/sap.fe.core.controllerextensions.EditFlow%23methods/securedExecution).

For general information about messages, see [Using Messages](using-messages-239b192.md).

> ### Note:  
> For information about SAP Fiori elements for OData V2, see [Adding Custom Messages](adding-custom-messages-51d8589.md).

**Related Information**  


[Using the SecuredExecution Method](using-the-securedexecution-method-6a39150.md "You can use the securedExecution method to extend SAP Fiori elements applications.")

[Using Messages](using-messages-239b192.md "Get to know the message types supported by SAP Fiori elements.")

