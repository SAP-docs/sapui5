<!-- loio0fdbefb48d6446bb9ed20ca42942aa10 -->

# Adding a Custom Message Strip to List Report, Analytical List Page and Object Page Tables

You can show your custom texts in the message strip above the table.



## Additional Features in SAP Fiori Elements for OData V2

For the list report and analytical list page, you can choose to add a custom message as shown here:

> ### Sample Code:  
> `ListReportExtension.controller.js` / `AnaliticalListPageExt.controller.js`
> 
> ```
> onBeforeRebindTableExtension: function () {
>           
>   var oMessage = {
>                 message: "Custom message on table",
>                 type: sap.ui.core.MessageType.Success
>             };
> 
>    this.extensionAPI.setCustomMessage(oMessage);
>   }
> 
> ```

When you have multiple tabs, you can choose to display the message only in a specified tab or in all the tabs as shown here:

> ### Sample Code:  
> ```
> this.extensionAPI.setCustomMessage(oMessage, ”1”);         	        // Displays message only on 1st tab
> 
> 			or
> 
> this.extensionAPI.setCustomMessage(oMessage, [“1”,”2”]);        // Displays message only on 1st and 2nd tab
> 
> 			or
> 
> this.extensionAPI.setCustomMessage(oMessage); 		        // Displays message on all the tabs
> 
> ```

In case you have multiple tabs, you can call `setCustomMessage` as mentioned here:

> ### Sample Code:  
> ```
> onBeforeRebindTableExtension: function () {
>             if (this.extensionAPI.setCustomMessage) {
>                 var oMsg1 = {
>                     message: "Custom message on object page tab 1",
>                     type: sap.ui.core.MessageType.Success
>                 };
>                 var oMsg2 = {
>                     message: "Custom message on object page tab 2",
>                     type: sap.ui.core.MessageType.Error
>                 };
> this.extensionAPI.setCustomMessage(oMsg1,"STTASOMVLR::sap.suite.ui.generic.template.ObjectPage.view.Details::C_STTA_SalesOrder_WD_20--SalesOrderItemsID::Table", "_tab1");    //Displays message on 1st tab
>                     this.extensionAPI.setCustomMessage(oMsg2,"STTASOMVLR::sap.suite.ui.generic.template.ObjectPage.view.Details::C_STTA_SalesOrder_WD_20--SalesOrderItemsID::Table", "_tab2");       //Displays message on 2nd tab
> }
> }
> 
> ```

The extension API `setCustomMessage` function takes two optional parameters:

-   Message Object

-   Tab Key

There can be four types of messages:

-   `sap.ui.core.MessageType.Success`

-   `sap.ui.core.MessageType.Warning`

-   `sap.ui.core.MessageType.Error`

-   `sap.ui.core.MessageType.Information`


To add a custom message to the object page table, you must add the table ID as shown here:

> ### Sample Code:  
> ```
> ObjectPageExtension.controller.js
> onBeforeRebindTableExtension: function () {
>             if (this.extensionAPI.setCustomMessage) {
>                 var oMsg = {
>                     message: "Custom message on object page tab 1",
>                     type: sap.ui.core.MessageType.Success
>                 };
> this.extensionAPI.setCustomMessage(oMsg,"STTASOMVLR::sap.suite.ui.generic.template.ObjectPage.view.Details::C_STTA_SalesOrder_WD_20--SalesOrderItemsID::Table");           
>             }
>         }
> 
> ```

> ### Restriction:  
> We don't recommend using this extension API with the multiple view scenarios. We also don't support this for smart charts and lists.



<a name="loio0fdbefb48d6446bb9ed20ca42942aa10__section_asl_gk4_mwb"/>

## Additional Features in SAP Fiori Elements for OData V4

To add a custom message to the list report and the analytical list page, you can use the `setCustomMessage` function on the `ListReport` controler extension.

The `setCustomMessage` function can have the following optional parameters:

-   A message object containing:

    -   `message`: the message text,

    -   `type`: the message type.


    If the parameter is omitted, existing messages will be removed.

-   `tabKey` identifying the tab where the custom message is displayed. If the parameter is empty, the message is displayed in all tabs. If `tabKey=['1','2']`, the message is only displayed in tabs 1 and 2.
-   A function to be called when closing the message.


> ### Sample Code:  
> ```xml
> routing: {
>     onAfterBinding: function (oBindingContext, mParameters) {
>         var oMessage = {
>                 message: "onAfterBinding: Context bound. Have a nice day",
>                 type: sap.ui.core.MessageType.Information
>             },
>             extensionAPI = this.base.getExtensionAPI();
> 
>         function fnOnClose() {
>             MessageToast.show("Custom message closed");
>         }
> 
>         extensionAPI.setCustomMessage(oMessage, null, fnOnClose);
> 
>     }
> }
> ```

To add a custom message to the object page, you can use the `addMessage` function on the Table building block. Check out our live example in the flexible programming model explorer at [Table - Messages](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/buildingBlocks/table/tableMessages).

**Related Information**  


[Extending List Reports and Object Pages Using App Extensions](extending-list-reports-and-object-pages-using-app-extensions-a892eb8.md "Various framework extension points are available for list reports and object pages.")

[Configuring Analytical List Page App Extensions](configuring-analytical-list-page-app-extensions-9504fb4.md "This section provides some of the advance configurations and extensions for your application.")

