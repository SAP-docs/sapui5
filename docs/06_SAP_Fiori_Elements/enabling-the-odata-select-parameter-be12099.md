<!-- loiobe1209991f4e483ebc7f3d647a5f5427 -->

# Enabling the OData `select` Parameter

You can use the OData `select` parameter to specify which properties an application needs from a service. This prevents unnecessary properties from being returned by the OData request.



The `select` parameter is not added automatically to the OData request in list cards and table cards, as it can impact navigation behavior. However, in some cases where Smart Business OData services are used, the `select` parameter might be necessary to display aggregated values to the user. In such cases, you must set the `addODataSelect` property in the `manifest.json` file for the relevant card.

Please note that, as opposed to other floorplans for SAP Fiori elements for OData V4, the overview page uses smart controls.

The following sample code shows how to add the `addODataSelect` parameter:

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
>         "template": "sap.ovp.cards.v4.list",
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

> ### Note:  
> The template setting in the `manifest.json` file depends on your OData version. Use `sap.ovp.cards.v4.<cardType>` for SAP Fiori elements for OData V4 and `sap.ovp.cards.<cardType>` for SAP Fiori elements for OData V2.

**Related Information**  


[Configuring Card Properties](configuring-card-properties-53b0791.md "This section describes the configuration items relevant for all overview page cards. All cards inherit a set of generic capabilities such as a card header, content area, and navigation support.")

