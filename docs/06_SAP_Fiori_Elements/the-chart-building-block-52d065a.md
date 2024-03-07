<!-- loio52d065ab8bb740c58c834a0c985e3b9e -->

# The `Chart` Building Block

The `Chart` building block provides an easy way to instantiate a chart based on an `entitySet` or a specific navigation property.



<a name="loio52d065ab8bb740c58c834a0c985e3b9e__section_qdt_23s_j5b"/>

## Usage

Ensure that the entity set referred for the `Chart` building block supports aggregation. For more information, see the subsection *Enabling Aggregation in the Back End* in [Configuring Charts](configuring-charts-653ed0f.md).

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

Applications can do the following with the chart building block:

-   Link chart building block with the filter building block.

-   Enable chart building block for variant management.

-   Add custom actions.

-   Configure the chart title and control header visibility.

-   Control the visibility of tabs within the chart personalization options.

-   Get and set the presentation variants associated with the chart building block using the public APIs: `getPresentationVariant()` and `setPresentationVariant()`.

-   Get and set the currently visible variant ID.


Check out our live example in the flexible programming model explorer at [Chart Title](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/buildingBlocks/chart/chartDefault).



<a name="loio52d065ab8bb740c58c834a0c985e3b9e__section_qqf_ljs_j5b"/>

## API

For information about the `Chart` API, see the [API Reference](https://ui5.sap.com/#/api/sap.fe.macros.Chart).

