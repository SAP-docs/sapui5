<!-- loiofc7d73c3044649e8839925558afc2079 -->

# Configuring the Content Area

You can visualize data from the main entity set and seamlessly navigate to an application.

Define a valid `UI.Chart` or `UI.LineItem` annotation to render content for the chart area and table area. For more information, see [Configuring the Manifest for the Analytical List Page](configuring-the-manifest-for-the-analytical-list-page-c4ebbae.md).

You can choose to view the main entity set data in the following view modes:

-   Table only

-   Chart only

-   Hybrid \(chart and table\)


If you've configured the content tile in the `manifest.json` file, the `FilterableKPI` view appears along with the segmented buttons \(Hybrid/Chart/Table\) and the content area tile.

Configure the `contentTitle` property in the `manifest.json` file to add a title for the content area.



<a name="loiofc7d73c3044649e8839925558afc2079__section_utl_3gv_ghc"/>

## Dynamic Page Header

The dynamic page header is pinnable when the app has a responsive table in desktops, hybrid, and 'M' size devices such as tablets. A pin toggle button is available allowing the header content to remain expanded when scrolling the page.

> ### Note:  
> For all other table types, the pin button is not available in an analytical list page.
> 
> Although the table is defaulted as responsive for all analytical list pages, the pin button is not available for 'S' size devices such as mobile phones.

**Related Information**  


[Analytical List Page](analytical-list-page-ff056b4.md "You can build apps that require visualization and reporting of data using filters, interactive charts, and other data points such as KPIs (key performance indicators).")

[Configuring the Table-Only View as the Default Option](configuring-the-table-only-view-as-the-default-option-d074e26.md "You can display data on the analytical list page in a table format.")

[Configuring the Chart-Only View as the Default Option](configuring-the-chart-only-view-as-the-default-option-8e6e885.md "You can display data on the analytical list page in a chart format.")

[Hybrid View](hybrid-view-6615668.md "You can view both analytical data (chart format) and transactional data (table format) using the hybrid view.")

[Configuring Default Settings \(Visualizations, Sort Order, Filter Values\)](configuring-default-settings-visualizations-sort-order-filter-values-22e32b7.md "You can configure several settings of the main content area, such as sort order or filter values, with UI.SelectionPresentationVariant.")

