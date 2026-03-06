<!-- loio955b2133de7b4a5583f1bca0c40d3a35 -->

# Toggling the Editability of Header Fields

You can enable an option to make fields in the object page header editable.

The editability of header fields can be controlled by the manifest property `editableHeaderContent`. If edit is enabled, the editability of the individual fields or facets still depends on whether the actual individual field or facet is editable. For example, micro chart facets are not editable, and a text field marked as `ReadOnly` will not be editable.

> ### Note:  
> The header is **not** editable by default. You can enable it, if required, by setting `editableHeaderContent` to `true`.

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

