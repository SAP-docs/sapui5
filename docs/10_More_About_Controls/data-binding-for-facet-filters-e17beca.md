<!-- loioe17becae8bf446ac92f169b726373f0a -->

# Data Binding for Facet Filters

`FacetFilter` fully supports the SAPUI5 data binding concept.

As the information for the facet filter usually resides in the application backend, data binding is commonly used to populate the `FacetFilter` properties and aggregations.

Applications using OData do not bind the `FacetFilterItem.selected` property since this is not available from the backend service. Fortunately, selections are maintained internally on the client by the `FacetFilterList` until the list is destroyed.

**Related Information**  


[Facet Filter Selection](facet-filter-selection-ef860fc.md "The FacetFilterList.getSelectedItems() method returns a copy of each selected facet filter item. You use the method to get the selected filter items when filtering the target data set.")

