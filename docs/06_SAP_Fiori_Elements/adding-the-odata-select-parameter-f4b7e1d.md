<!-- loiof4b7e1de668949fc92f3081a3009d395 -->

# Adding the OData Select Parameter

You can use the `select` parameter to specify the list of properties required by the application. This prevents unnecessary properties from being returned by the OData request.



> ### Note:  
> This topic is relevant to SAP Fiori elements for OData V2. For information about SAP Fiori elements for OData V4, see [Adding the OData Select Parameter](adding-the-odata-select-parameter-be12099.md).



The `select` parameter is not added automatically to the OData request in list cards and table cards, as it can impact navigation behavior. However, in some cases where Smart Business OData services are used, the `select` parameter might be necessary to display aggregated values to the user. In such cases, you must set the `addODataSelect` property in the `manifest.json` file for the relevant card.

> ### Sample Code:  
> `manifest.json`
> 
> ```
> "sap.ovp": {
>     "globalFilterModel": "salesOrder",
>     "globalFilterEntitySet": "GlobalFilters",
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

