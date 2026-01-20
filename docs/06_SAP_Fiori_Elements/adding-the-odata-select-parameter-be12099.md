<!-- loiobe1209991f4e483ebc7f3d647a5f5427 -->

# Adding the OData Select Parameter

OData supports the `select` parameter, allowing you to specify a list of properties that are required by the application. This prevents unnecessary properties from being returned by the OData request.



The `select` parameter is not added automatically to the OData request in list cards and table cards, as it can impact navigation behavior. However, in some cases where Smart Business OData services are used, the `select` parameter might be necessary to display aggregated values to the user. In such cases, you must set the `addODataSelect` property in the `manifest.json` file for the relevant card.

> ### Sample Code:  
> `manifest.json`
> 
> ```
> "sap.ovp": {
>     "globalFilterModel": "salesOrder",
>     "globalFilterEntityType": "GlobalFilters", //Deprecated since SAPUI5 1.54
>     "globalFilterEntitySet": "GlobalFilters",  //Available from SAPUI5 1.54
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

