<!-- loiofc7d73c3044649e8839925558afc2079 -->

# Configuring the Content Area

Visualize data from the main entity set and seamlessly navigate to an application. Define a valid `chart` or `LineItem` annotation to render content for the chart area and table area.



You can choose to view the main entity set data in the following view modes:

-   Table only
-   Chart only
-   Hybrid \(chart and table\)



<a name="loiofc7d73c3044649e8839925558afc2079__section_k5n_c3x_1lb"/>

## Additional Features in SAP Fiori Elements for OData V2

If you've configured the content tile in the descriptor file, the `FilterableKPI` view appears along with the segmented buttons \(Hybrid/Chart/Table\) and the content area tile.

Configure the `contentTitle` property in the descriptor configuration file to add a title for the content area.



### Dynamic Page Header

The dynamic page header is pinnable when the app has a responsive table in desktops, hybrid, and ‘M' size devices such as tablets. A pin toggle button is available allowing the header content to remain expanded when scrolling the page.

> ### Note:  
> For all other table types, the pin button is not available in an analytical list page.
> 
> Although the table is defaulted as responsive for all analytical list pages, the pin button is not available for 'S' size devices such as mobile phones.

**Related Information**  


[Analytical List Page](analytical-list-page-3d33684.md "The analytical list page (ALP) offers a unique way to analyze data step by step from different perspectives, to investigate a root cause through drilldown, and to act on transactional content.")

[Configuring the Table-Only View as the Default Option](configuring-the-table-only-view-as-the-default-option-d074e26.md "In this mode, the data is displayed in the table format.")

[Configuring the Chart-Only View as the Default Option](configuring-the-chart-only-view-as-the-default-option-8e6e885.md "Uses a chart that provides visual representation of analytical data.")

[Hybrid View](hybrid-view-6615668.md "The hybrid view is the default data display mode in the ALP content area. It lets you view both analytical data (chart format) and transactional data (table format).")

[Configuring Default Settings \(Visualizations, Sort Order, Filter Values\)](configuring-default-settings-visualizations-sort-order-filter-values-49a6ba5.md "SAP Fiori elements allows you to specify a UI.SelectionPresentationVariant.")

