<!-- loioc8a9a40a5cee4fb4bcdf97d09420de5e -->

# Toggling the Editability of Header Fields

You can enable an option to make fields in the object page header editable.

The editability of header fields can be controlled by the manifest property `editableHeaderContent`. If edit is enabled, the editability of the individual fields or facets still depends on whether the actual individual field or facet is editable. For example, micro chart facets are not editable, and a text field marked as `ReadOnly` will not be editable.

> ### Note:  
> Please note the different default behavior:
> 
> -   In SAP Fiori elements for OData V2, the header is **not** editable by default. You can enable it, if required, by setting `editableHeaderContent` to `true`.
> 
> -   In SAP Fiori elements for OData V4, the header is editable by default. You can switch this off, if required, by setting `editableHeaderContent` to `false`.



<a name="loioc8a9a40a5cee4fb4bcdf97d09420de5e__section_btq_ypr_4lb"/>

## Additional Features in SAP Fiori Elements for OData V2

> ### Sample Code:  
> ```
> "sap.ui.generic.app": {
>         "pages": [
>             {
>                 "entitySet": "SEPMRA_C_PD_Product",
>                 "component": {
>                     "name": "sap.suite.ui.generic.template.ListReport",
>                     "list": true
>                 },
>                 "pages": [
>                     {
>                         "entitySet": "SEPMRA_C_PD_Product",
>                         "component": {
>                             "name": "sap.suite.ui.generic.template.ObjectPage",
>                             "settings": {
>                                 "editableHeaderContent": true
>                             }
>                         },
>                         "pages": [
>                             {
>                                 "navigationProperty": "to_ProductText",
>                                 "entitySet": "SEPMRA_C_PD_ProductText",
>                                 "component": {
>                                     "name": "sap.suite.ui.generic.template.ObjectPage"
>                                 }
>                             }
>                         ]
>                     }
>                 ]
>             }
>         ]
>     },
> 
> ```



<a name="loioc8a9a40a5cee4fb4bcdf97d09420de5e__section_zvr_v55_dnb"/>

## Additional Features in SAP Fiori Elements for OData V4

> ### Sample Code:  
> ```
> "sap.ui5": {
>         ...
>         "routing": {
>                 ...
>                 {
>                     "pattern": "SalesOrderManage({key})/_Item({key2}):?query:",
>                     "name": "SalesOrderItemObjectPage",
>                     "target": "SalesOrderItemObjectPage"
>                 }
>             ],
>             "targets": {
>                 "SalesOrderItemObjectPage": {
>                     "type": "Component",
>                     "id": "SalesOrderItemObjectPage",
>                     "name": "sap.fe.templates.ObjectPage",
>                     "options": {
>                         "settings": {
>                             "entitySet": "SalesOrderItem",
>                             "editableHeaderContent": true,
>                             ...
>                         }
>                     }
>                 }
>             }
>         }
>     }
> 
> ```

