<!-- loio52d065ab8bb740c58c834a0c985e3b9e -->

# The `Chart` Building Block

The `Chart` building block provides an easy way to instantiate a chart based on an `entitySet` or a specific navigation property.



<a name="loio52d065ab8bb740c58c834a0c985e3b9e__section_qdt_23s_j5b"/>

## Usage

Make sure that the entity set referred for the `Chart` building block supports aggregation, as described under *Enabling Aggregation in the Back End* in the section *Additional Features in SAP Fiori Elements for OData V4* in [Configuring Charts](configuring-charts-653ed0f.md).

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

Applications can link the chart building block with the filter building block, enable chart building block for variant management, and allow custom actions. Check out our live example in the flexible programming model explorer at [Chart Title](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/buildingBlocks/chart/chartDefault).



<a name="loio52d065ab8bb740c58c834a0c985e3b9e__section_qqf_ljs_j5b"/>

## API

For information about the `Chart` API, see the [API Reference](https://ui5.sap.com/#/api/sap.fe.macros.Chart).

