<!-- loioc8a9a40a5cee4fb4bcdf97d09420de5e -->

# Toggling the Editability of Header Fields

You can enable an option to make fields in the object page header editable.

> ### Note:  
> This topic describes how to use the building block within SAP Fiori elements object pages. If the functionality isn't available when you use the building block in other floorplans, custom pages, or custom sections, you can try achieving the functionality through other means, such as the following:
> 
> -   Properties or methods exposed by the building block
> 
> -   Custom code using extensions

The editability of header fields can be controlled by the manifest property `editableHeaderContent`. If edit is enabled, the editability of the individual fields or facets still depends on whether the actual individual field or facet is editable. For example, micro chart facets are not editable, and a text field marked as `ReadOnly` will not be editable.

> ### Note:  
> The header is editable by default. You can switch this off, if required, by setting `editableHeaderContent` to `false`.

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
>                             "contextPath": "/SalesOrderItem",
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



> ### Note:  
> For information about SAP Fiori elements for OData V2, see [Toggling the Editability of Header Fields](toggling-the-editability-of-header-fields-955b213.md).

