<!-- loio0fdbefb48d6446bb9ed20ca42942aa10 -->

# Adding a Custom Message Strip to List Report Page, Analytical List Page and Object Page

You can show a custom text in a message strip.

On list report pages and analytical list pages, the message strip is displayed above the table. On object pages, you can choose in which message strip the custom text is displayed:

-   A message strip at page level is displayed in the header of the object page.

-   A message strip at table level is displayed above the table.


To add a custom message to the list report page and the analytical list page, you can use the `setCustomMessage` function on the `ListReport` controller extension.

The `setCustomMessage` function can have the following optional parameters:

-   A message object containing the following:

    -   `message`: the message text,

    -   `type`: the message type.


    If the parameter is omitted, existing messages are removed.

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

To add a custom message to the object page in the page-level message strip, you can use the `showMessages` API. For information about the `showMessages` API, see the [API Reference](https://sapui5.hana.ondemand.com/#/api/sap.fe.templates.ObjectPage.ExtensionAPI%23methods/showMessages).

To add a custom message to a table on the object page, in the table-level message strip, you can use the `addMessage` function on the Table building block.

For more information and live examples, see the SAP Fiori development portal at [Building Blocks - Table - Extensions - Table APIs](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/buildingBlocks/table/tablePublicAPIs).



> ### Note:  
> For information aboutSAP Fiori elements for OData V2, see [Adding a Custom Message Strip to List Report, Analytical List Page and Object Page Tables](adding-a-custom-message-strip-to-list-report-analytical-list-page-and-object-page-tables-ac540d3.md).

**Related Information**  


[Extending List Reports and Object Pages Using App Extensions](extending-list-reports-and-object-pages-using-app-extensions-a892eb8.md "Various framework extension points are available for list reports and object pages.")

[Configuring Analytical List Page App Extensions](configuring-analytical-list-page-app-extensions-9504fb4.md "This section provides some of the advance configurations and extensions for your application.")

