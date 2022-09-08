<!-- loio6615668828a7431c9ae38abe04d63feb -->

# Hybrid View

The hybrid view is the default data display mode in the ALP content area. It lets you view both analytical data \(chart format\) and transactional data \(table format\).



Users can interact with both the chart and the table. The initial view of the chart visualizes the most important aspects of the whole data set. Selecting a dimension within a chart area automatically filters all relevant information in the table area. For example, if a chart selection is Country=ABC, then all records associated with this country selection are filtered in the table.

> ### Note:  
> Hybrid mode is not available for tablets or smartphones.



<a name="loio6615668828a7431c9ae38abe04d63feb__section_bcb_5q2_hqb"/>

## Additional Features in SAP Fiori Elements for OData V2

Make the following setting:

> ### Sample Code:  
> ```
> "settings": {
>               "defaultContentView": "charttable",
> }
> 
> ```

The *Auto-hide*

> ### Note:  
> Ensure that the chart context dimensions are set as visible columns in the table for optimal accuracy of highlights. feature is displayed in the hybrid view \(chart and table\). When the feature is turned off, the table records that are not affected by the chart selection are also displayed in the table. If the feature is turned on, then only the records that are affected by the chart selection \(for example, only the highlighted records\) are displayed in the table. In this case, chart selection acts as an additional filter. The table records that match the selected chart context are highlighted.

> ### Tip:  
> Note that the hybrid view is available in laptops with a screen height that is larger than 900px.
> 
> The hybrid view is disabled for analytical and grid table types in cozy mode and with a resolution that is less than 900px. However, this restriction doesn't apply to responsive tables.



<a name="loio6615668828a7431c9ae38abe04d63feb__section_dmq_dqj_sqb"/>

## Additional Features in SAP Fiori Elements for OData V4

Make the following entries in the manifest:

> ### Sample Code:  
> ```
> "views": {
>     "paths": [{
> ...
>         "defaultPath": "both"
>     }]
> },
> ```

Setting the `"defaultPath"` to `"both"` ensures that the default view that is loaded shows the chart at the top and the table at the bottom..

**Related Information**  


[Configuring the Content Area](configuring-the-content-area-fc7d73c.md "Visualize data from the main entity set and seamlessly navigate to an application. Define a valid chart or LineItem annotation to render content for the chart area and table area.")

