<!-- loio73d96937ae94468da04cf0d32eb4c6ee -->

# Configuring the Global Filter on the Overview Page

You can configure the global filter to allow users to filter the data displayed on one or more cards.



The global filter is implemented using the `FilterBar` building block. This building block enables users to persist their preferred filters and share them with other users. The filter presents filterable properties according to the configured entity type. It's applied to all cards that have the same property name in their entity type. You can also define filters that you want to add to the filter bar by default with the `UI.SelectionFields` configuration in the annotations file.

You configure the global filter in the `"sap.ovp"` section using the following properties:

-   `globalFilterModel`: The OData model to use for the global filter.

-   `globalFilterEntitySet`: The entity set that contains the filterable properties.


> ### Sample Code:  
> `manifest.json` 
> 
> ```
> "sap.ovp": {
>     "globalFilterModel": "ZCD204_EPM_DEMO_SRV",
>     "globalFilterEntitySet": "SalesOrders",
>     "cards": {
>         ...
>     }
> }
> 
> ```



<a name="loio73d96937ae94468da04cf0d32eb4c6ee__section_bfb_ykp_k2b"/>

## Enabling Basic Search

The search field on the filter bar lets you search for a value across all searchable entity sets. To enable the search field, set the `"showBasicSearch":"true"` property in the `manifest.json` file.

The search functionality is applicable for entity types that have:

-   `sap:searchable="true"` in the metadata file

-   `SearchRestrictions` annotation in the entity set






> ### Note:  
> For information about SAP Fiori elements for OData V2, see [Configuring the Global Filter](configuring-the-global-filter-da583d1.md).

