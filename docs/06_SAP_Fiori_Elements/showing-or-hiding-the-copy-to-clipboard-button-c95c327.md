<!-- loioc95c327e63a5401eb813416d129615e8 -->

# Showing or Hiding the *Copy to Clipboard* Button

You can configure the visibility of the *Copy to Clipboard* button in SAP Fiori elements for OData V4.

By default, the *Copy to Clipboard* button is displayed in the table toolbar. However, you can also configure the visibility of the *Copy to Clipboard* button by defining the `disableCopyToClipboard` property in the `manifest.json` file. To hide the *Copy to Clipboard* button, set `disableCopytoClipboard` to `true` as shown in the following sample code:

> ### Sample Code:  
> `manifest.json`
> 
> ```
> "sap.ui5": {
>     "routing": {
>         "targets": {
>             "SalesOrderManageList": {
>                 "options": {
>                     "settings": {
>                         "controlConfiguration": {
>                             "@com.sap.vocabularies.UI.v1.LineItem": {
>                                 "tableSettings": {
>                                     "disableCopyToClipboard": true
>                                 }
>                             }
>                         }
>                     }
>                 }
>             }
>         }
>     }
> }
> 
> ```

For more security-related information, see [Security Configuration](security-configuration-ba0484b.md).

The `Table` building block also supports the copy to clipboard option. For more information, see [API Reference](https://ui5.sap.com/#/api/sap.fe.macros.Table%23overview).

