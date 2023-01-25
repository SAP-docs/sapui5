<!-- loio5a9a2a0f2c054b9686acb3497ba32ae2 -->

# Adding Custom Messages

You can use the `securedExecution` method from the API for developers of template extensions to add and display custom messages.

This concept for message handling is based on the SAPUI5 MessageManager. For more information, see the API Reference for [MessageManager](https://ui5.sap.com/#/api/sap.ui.core.message.MessageManager).

SAP Fiori elements provides the `securedExecution` method that starts a 'busy session'.

When a busy session starts, all transition messages that are still in the `MessageManager` are removed automatically, since the system assumes that they belong to previous user interaction.

When the busy session ends, all transition messages that have been collected by the `MessageManager` are automatically displayed to the user in a well-defined way, based on the severity of the message. This applies to \(transition\) messages that have been pushed into the `MessageManager` automatically \(for example, because they come from the OData model\), and also to transition messages that are pushed to the `MessageManager` explicitly by way of application coding.

See the separate sections for SAP Fiori elements for OData V2 and SAP Fiori elements for OData V4 for sample codes and further details.

For more information on the `securedExecution` method, see [Using the SecuredExecution Method](using-the-securedexecution-method-6a39150.md) and the API Reference for [securedExecution](https://ui5.sap.com/#/api/sap.suite.ui.generic.template.ListReport.extensionAPI.ExtensionAPI/methods/securedExecution).

For general information on messages, see [Using Messages](using-messages-239b192.md).



<a name="loio5a9a2a0f2c054b9686acb3497ba32ae2__section_hyn_xjx_gpb"/>

## Additional Features in SAP Fiori Elements for OData V2

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
>           var oMessageManager = sap.ui.getCore().getMessageManager();
>           oMessageManager.addMessages(oMessage);
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

The sample code shows that a message is created as a transition message by setting the attribute `persistent` to `true`. This attribute describes the lifetime of this message from the perspective of the SAPUI5 `MessageManager`. The lifecycle of transition messages is not relevant to the `MessageManager`. This means that they are persisted until another agent deletes them from the `MessageManager`. The SAP Fiori elements framework triggers the deletions, which effectively limits the lifetime of these messages.

The lifecycle of messages with the attribute `persistent` : `false` is controlled by the `MessageManager`. This kind of message is automatically removed when the entity this message has been bound to is reloaded from the back end.

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
>           var oMessageManager = sap.ui.getCore().getMessageManager();
>           oMessageManager.addMessages(oMessage);
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



<a name="loio5a9a2a0f2c054b9686acb3497ba32ae2__section_ejz_jkx_gpb"/>

## Additional Features in SAP Fiori Elements for OData V4

> ### Sample Code:  
> ```
> securedExecution: function(oContext, aSelectedContexts) {
>    this.editFlow.securedExecution( 
>       function() { 
>          sap.ui.getCore().getMessageManager().addMessages( 
>                      new sap.ui.core.message.Message({
>                         message: "Server says hello", 
>                         target: "", 
>                         persistent: true, 
>                         type: sap.ui.core.MessageType.Success, 
>                         code: "123" 
>                      }) 
>                   ); 
>       } 
>    ); 
> }, 
> ```

The sample code shows that a message is created as a transition message by setting the attribute `persistent` to `true`. This attribute describes the lifetime of this message from the perspective of the SAPUI5 `MessageManager`. The lifecycle of transition messages is not relevant to the `MessageManager`. This means that they are persisted until another agent deletes them from the `MessageManager`. The SAP Fiori elements framework triggers the deletions, which effectively limits the lifetime of these messages.

> ### Note:  
> Both a code and a target are mandatory. If a target doesn't exist, you must provide an empty string.

**Related Information**  


[Using the SecuredExecution Method](using-the-securedexecution-method-6a39150.md "The API for developers of extensions for SAP Fiori elements provides the securedExecution method that can be used for various purposes.")

[Using Messages](using-messages-239b192.md "The system generates messages in response to what users do in the SAP system. A message presents information, an instruction, or a warning to users in a given situation.")

