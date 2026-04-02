<!-- loio1559b2bb30134d8c9240bdd378d6543e -->

# Navigation to the Next Level

You can use the table chevron navigation to navigate from the table that lists the entries from an associated entity set.

You can configure an object page and subobject page to enable normal navigation from a list report page to an object page, and from an object page to a subobject page, as shown in the following sample code:

> ### Sample Code:  
> `manifest.json`
> 
> ```json
> {
>    "targets":{
>       "SalesOrderManageList":{
>          "type":"Component",
>          "id":"SalesOrderManageList",
>          "name":"sap.fe.templates.ListReport",
>          "options":{
>             "settings":{
>                "contextPath":"/SalesOrderManage",
>                "variantManagement":"Page",
>                ...
>                ...
>             },
>             "navigation":{
>                "SalesOrderManage":{
>                   "detail":{
>                      "route":"SalesOrderManageObjectPage"
>                   }
>                }
>             }
>          }
>       },
>       "SalesOrderManageObjectPage":{
>          "type":"Component",
>          "id":"SalesOrderManageObjectPage",
>          "name":"sap.fe.templates.ObjectPage",
>          "options":{
>             "settings":{
>                "contextPath":"/SalesOrderManage",
>                "navigation":{
>                   "_Item":{
>                      "detail":{
>                         "route":"SalesOrderItemObjectPage" // For sub object page navigation
>                      }
>                   }
>                },
>                "variantManagement":"Control",
>                ...
>                ...
>             }
>          }
>       }
>    }
> }
> ```



> ### Note:  
> For information about SAP Fiori elements for OData V2, see [Navigation to the Next Level](navigation-to-the-next-level-5e71be8.md).

