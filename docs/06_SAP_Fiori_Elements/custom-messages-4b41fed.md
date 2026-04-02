<!-- loio4b41fed6d4994601841a329b9d7891d9 -->

# Custom Messages

You can customize messages for success, success with no data, and error scenarios. Additionally, you can add an icon for success scenarios. For error scenarios, a default icon is displayed.



> ### Note:  
> For information about SAP Fiori elements for OData V4, see [Configuring Custom Messages on the Overview Page](configuring-custom-messages-on-the-overview-page-b75910f.md).



To configure custom messages, define `getCustomMessage` in your extension controller file.

> ### Sample Code:  
> ```
> getCustomMessage: function (oResponse, sCardId) {
>  if (sCardId == "card001") {
>   if (oResponse && oResponse.getParameters() && oResponse.getParameters().success) {
>     return {
>        sMessage: "My Custom Message for No Data", //message in case of success and no data
>        sIcon: "sap-icon://message-information"    //icon in case of success and no data
>      }
>   } else {
>     return {
>        sMessage: "My Custom Message for Error" //message in case of error
>            }
>          }
>   }
> },
> ```

