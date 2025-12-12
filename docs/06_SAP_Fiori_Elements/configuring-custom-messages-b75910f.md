<!-- loiob75910f6d7eb48a58d83267be2c71385 -->

# Configuring Custom Messages

You can configure messages for success, success with no data, and error scenarios. Additionally, you can add an icon for success scenarios. For error scenarios, a default icon is displayed.



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

