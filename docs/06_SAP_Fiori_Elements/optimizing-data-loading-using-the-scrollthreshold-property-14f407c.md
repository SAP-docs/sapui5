<!-- loio14f407cd1d584b1ab7e8379bcbc70394 -->

# Optimizing Data Loading Using the `scrollThreshold` Property

You can modify the number of records that are dynamically loaded as users scroll a table in SAP Fiori elements for OData V4.

As users scroll within grid tables, tree tables, or analytical tables, the application dynamically loads additional records from the back-end system. By default, it loads 300 additional records while scrolling.

You can modify this value by configuring the `scrollThreshold` property.

For analytical tables and tree tables, `scrollThreshold` must be higher than `threshold` to take effect.



## Configuring the `scrollThreshold` Property for Dynamic Data Loading

You can configure the `scrollThreshold` property in the `manifest.json` file as shown in the following sample code:

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
>                                     "type": "GridTable",
>                                     "scrollThreshold": 200
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

Key users can configure the `scrollThreshold` property using the UI adaptation mode. For more information, see [Extending Delivered Apps With Key User Adaptation](extending-delivered-apps-with-key-user-adaptation-59bfd31.md).

