<!-- loio4393cc4a27374834aad72af92d584601 -->

# Configuring Filters

APF-based applications can use filters that narrow down the data of an entire analysis path. You can either configure each filter individually or you can use a smart filter bar:

-   Individually configured filters

    You can configure separate filters that are rendered using the `FacetFilter` control. This option is useful if you don't have a service available that you can use to configure a smart filter bar and if you don't require features such as range selections, date picker, or paging, which are supported by the `SmartFilterBar` control only.

-   Smart filter bar

    You can configure an entire filter bar in just one step using the `SmartFilterBar` control. This option is useful if you have an entity type that provides all of the properties that you want to offer as filters as well as the required annotations to configure the smart filter bar. The `SmartFilterBar` control uses the OData metadata of the entity type to create the filter bar. The possible filter criteria by which you can filter are automatically derived based on the annotations of the used service.

    The advanced options of the smart filter bar include the following:

    -   Rule-based filtering using operators such as “contains”, “between”, or “greater than”

    -   Use of the `DatePicker` control

    -   Paging for value lists, which can avoid performance issues in the case of very large lists.



For each configuration, you define whether you want to use individually configured filters, or the smart filter bar, or no filters at all. Once you have chosen one of the filter types, the tree structure of your configuration is adapted accordingly.

> ### Note:  
> When you switch between the two filter types or from one of the filter types to no filter, you lose the current settings. When you switch the filter type and then want to switch back again, you have to define your settings once more.

-   **[Individually Configured Filters](individually-configured-filters-f8c73e1.md "")**  

-   **[Smart Filter Bar](smart-filter-bar-594f111.md "")**  


