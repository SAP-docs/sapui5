<!-- loio955b2133de7b4a5583f1bca0c40d3a35 -->

# Toggling the Editability of Header Fields

You can make the object page header content editable.

> ### Note:  
> For information about SAP Fiori elements for OData V4, see [Toggling the Editability of Header Fields](toggling-the-editability-of-header-fields-c8a9a40.md).

To make the object page header content editable, set the manifest property `editableHeaderContent` to `true`. Note that the editability of individual header fields and facets depends on their type and properties. For example, micro chart facets aren't editable in general, and neither are text fields set to `ReadOnly` .

> ### Note:  
> By default, the header is **not** editable.

> ### Sample Code:  
> `manifest.json`
> 
> ```
> 
> "sap.ui.generic.app": {
>     "pages": [
>         {
>             "entitySet": "SEPMRA_C_PD_Product",
>             "component": {
>                 "name": "sap.suite.ui.generic.template.ListReport",
>                 "list": true
>             },
>             "pages": [
>                 {
>                     "entitySet": "SEPMRA_C_PD_Product",
>                     "component": {
>                         "name": "sap.suite.ui.generic.template.ObjectPage",
>                         "settings": {
>                             "editableHeaderContent": true
>                         }
>                     },
>                     "pages": [
>                         {
>                             "navigationProperty": "to_ProductText",
>                             "entitySet": "SEPMRA_C_PD_ProductText",
>                             "component": {
>                                 "name": "sap.suite.ui.generic.template.ObjectPage"
>                             }
>                         }
>                     ]
>                 }
>             ]
>         }
>     ]
> }
> 
> ```

