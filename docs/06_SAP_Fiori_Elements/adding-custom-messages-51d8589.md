<!-- loio51d85893e4b6461e97cc5e869360207d -->

# Adding Custom Messages

You can use the `securedExecution` method to add and display custom messages.

> ### Note:  
> For information about SAP Fiori elements for OData V4, see [Adding Custom Messages](adding-custom-messages-5a9a2a0.md).

This concept for message handling is based on the SAPUI5 Messaging. For more information, see the API Reference for [Messaging](https://ui5.sap.com/#/api/module:sap/ui/core/Messaging).

SAP Fiori elements provides the `securedExecution` method that starts a 'busy session'.

When a busy session starts, all transition messages are removed automatically, since the system assumes that they belong to previous user interaction.

When the busy session ends, all transition messages that have been collected by the `Messaging` are automatically displayed to the user in a well-defined way, based on the severity of the message. This applies to \(transition\) messages that have been pushed into the `Messaging` automatically \(for example, because they come from the OData model\), and also to transition messages that are pushed to the `Messaging` explicitly by way of application coding.

> ### Sample Code:  
> ```
> onCustomButtonPressed: function(oEvent){
>   var oSource = oEvent.getSource();
>   var oModel = oSource.getModel();
>   var sBindingPath = ...; // binding path to retrieve some information
>   var fnFunction = function(){
>     return new Promise(function(fnResolve, fnReject){
>       oModel.read(sBindingPath, {
>         success: function(oResponse){
>           var oMessage = new sap.ui.core.message.Message({
>             message: "We have received the following response: " + oResponse,
>             persistent: true, // create message as transition message
>             type: sap.ui.core.MessageType.Success
>           });
>           //"Messaging" required from module "sap/ui/core/Messaging";
>           Messaging.addMessages(oMessage);
>           fnResolve();
>         },
>         error: fnReject
>     });  
>   };
>   var mParameters = {
>         sActionLabel:  oSource.getText() // or "Your custom text" 
>    };
>   this.extensionAPI.securedExecution(fnFunction, mParameters);
> } 
> ```

The sample code shows that a message is created as a transition message by setting the attribute `persistent` to `true`. This attribute describes the lifetime of this message from the perspective of the SAPUI5 `Messaging`. The lifecycle of transition messages is not relevant to the `Messaging`. This means that they are persisted until another agent deletes them from the `Messaging`. The SAP Fiori elements framework triggers the deletions, which effectively limits the lifetime of these messages.

The lifecycle of messages with the attribute `persistent` : `false` is controlled by the `Messaging`. This kind of message is automatically removed when the entity this message has been bound to is reloaded from the back end.

> ### Tip:  
> The `sActionLabel`*Messages*. For a single transition info message, `sActionLabel` has no effect, since a message toast is shown.

In some cases, you may need to display messages, even though no asynchronous operation is executed. The following code snippet shows how you can display messages in such a scenario:

> ### Sample Code:  
> ```
> onCustomButtonPressed: function(oEvent){
>     var oSource = oEvent.getSource();
>     var fnAddMessage = function(){
>     return new Promise(function(fnResolve){
>           var oMessage = new sap.ui.core.message.Message({
>             message: "Custom button was pressed",
>             persistent: true, // create message as transition message
>             type: sap.ui.core.MessageType.Success
>           });
>           //"Messaging" required from module "sap/ui/core/Messaging";
>           Messaging.addMessages(oMessage);
>           fnResolve();
>    });
> };
> var mParameters = {
>       sActionLabel:  oSource.getText() // or "Your custom text" 
>  };
> this.extensionAPI.securedExecution(fnAddMessage, mParameters);
> } 
> 
> ```



<a name="loio51d85893e4b6461e97cc5e869360207d__section_hyn_xjx_gpb"/>

## Related Links

For more information on the `securedExecution` method, see [Using the SecuredExecution Method](using-the-securedexecution-method-5239ecd.md) and the API Reference for [securedExecution](https://ui5.sap.com/#/api/sap.suite.ui.generic.template.ListReport.extensionAPI.ExtensionAPI/methods/securedExecution).

For general information on messages, see [Using Messages](using-messages-99cdc0c.md).

