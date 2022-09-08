<!-- loiobe1209991f4e483ebc7f3d647a5f5427 -->

# Adding the OData Select Parameter

OData supports the `select` parameter, where you can specify lists of properties that are needed by the application, so that unnecessary properties are not returned by the OData request.



The `select` parameter is not added automatically to the OData request in list and table cards as this can affect navigation behavior. However, in some cases where Smart Business OData services are used, the `select` parameter might be required to show aggregated values to the user. In these cases, the `addODataSelect` property must be set in the application manifest file for the relevant card.

> ### Sample Code:  
> The card configuration in the application manifest file looks like this:
> 
> ```
> "sap.ovp": {
>     "globalFilterModel": "salesOrder",
>     "globalFilterEntityType": "GlobalFilters",
>     "cards": {
>       "card00": {
>         "model": "salesOrder",
>         "template": "sap.ovp.cards.list",
>         "settings": {     
>           "entitySet": "SalesOrderSet",
>           "category": "Sales Orders with filters",
>           "listType": "extended",
>           "addODataSelect": true
>         }
>       }
>     }
> }
> ```

