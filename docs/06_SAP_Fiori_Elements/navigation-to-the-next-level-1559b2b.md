<!-- loio1559b2bb30134d8c9240bdd378d6543e -->

# Navigation to the Next Level

Use the table chevron navigation to navigate from the table that lists the entries from an associated entity set. The required annotations for enabling this navigation to object pages and subobject pages are provided in the separate sections below.



<a name="loio1559b2bb30134d8c9240bdd378d6543e__section_xtf_jdd_hmb"/>

## Additional Features in SAP Fiori Elements for OData V2

For more information about navigating from a list report to an object page, see [Configuring Internal Navigation](configuring-internal-navigation-2c65f07.md).



<a name="loio1559b2bb30134d8c9240bdd378d6543e__section_wp1_4dd_hmb"/>

## Additional Features in SAP Fiori Elements for OData V4

You can configure an object page and subobject page to enable normal navigation from a list report to an object page, and from an object page to a subobject page, as shown in the following sample code:

> ### Sample Code:  
> manifest.json
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

