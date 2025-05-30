<!-- loio52d065ab8bb740c58c834a0c985e3b9e -->

# The `Chart` Building Block

The `Chart` building block provides an easy way to instantiate a chart based on an `entitySet` or a specific navigation property.



Ensure that the entity set referred for the `Chart` building block supports aggregation. For more information, see the [Enabling Aggregation in the Back End](configuring-charts-653ed0f.md#loio653ed0f4f0d743dbb33ace4f68886c4e__enabling_aggregation_subsection) subsection in [Configuring Charts](configuring-charts-653ed0f.md).

> ### Sample Code:  
> `Chart` Building Block
> 
> ```
> <macros:Chart
>     id="chartDefault"
>     contextPath="/RootEntitySet"
>     metaPath="@com.sap.vocabularies.UI.v1.Chart"
>     dataPointsSelected=".onChartSelectionChanged"
>     personalization="Sort,Type,Item"
>     selectionMode="Multiple"
> ></macros:Chart>
> ```

> ### Note:  
> The `contextPath` is optional if `metaPath` is provided with an absolute path. If `metaPath` is relative and there is no `contextPath` given, then we consider the parent binding path as the value of `contextPath`.

You can do the following with the `Chart` building block:

-   Link `Chart` building block with the `FilterBar` building block.

-   Enable `Chart` building block for variant management.

-   Add custom actions.

-   Configure the chart title and control header visibility.

-   Control the visibility of tabs within the chart personalization options.

-   Get and set the presentation variants associated with the `Chart` building block using the public APIs: `getPresentationVariant()` and `setPresentationVariant()`.

    Get and set the selection variants associated with the `Chart` building block using the public APIs: `getSelectionVariant()` and `setSelectionVariant()`. The `getSelectionVariant()` method considers only the variants that are applied directly to the table and excludes the variants that are applied to a bound model.

    Check out our live example in the flexible programming model explorer at [Chart - Interacting via APIs](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/buildingBlocks/chart/chartPublicAPIs).

    > ### Note:  
    > The get and set selection variant methods only work if the chart personalization is enabled. For more information, see [Enabling Table Personalization](enabling-table-personalization-3e2b4d2.md).

-   Get and set the currently visible variant ID.


Check out our live example in the flexible programming model explorer at [Chart Title](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/buildingBlocks/chart/chartDefault).

> ### Note:  
> Chart properties such as `headerVisible`, `header`, and `selectionMode` can be defined in both the `Chart` building block and `manifest.json` file. In such cases, the values in the `manifest.json` file take precedence over those in the `Chart` building block.



<a name="loio52d065ab8bb740c58c834a0c985e3b9e__section_qqf_ljs_j5b"/>

## API

For information about the `Chart` API, see the [API Reference](https://ui5.sap.com/#/api/sap.fe.macros.Chart).

