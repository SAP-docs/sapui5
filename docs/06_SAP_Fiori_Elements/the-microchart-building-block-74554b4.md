<!-- loio74554b4ca1de49aea42e2c309946ba05 -->

# The `MicroChart` Building Block

You can use the `MicroChart` building block stand alone in any container as shown in the following sample code:

> ### Sample Code:  
> Consuming the `MicroChart` building block
> 
> ```
> <macros:MicroChart
>     id="bar"
>     metaPath="@com.sap.vocabularies.UI.v1.Chart#BarStackedPath"
>     contextPath="/RootEntity/_Item"
>     batchGroupId="$auto.abc"
> />
> ```

> ### Note:  
> The `contextPath` is optional if `metaPath` is provided with an absolute path. If `metaPath` is relative and there is no `contextPath` given, then we consider the parent binding path as the value of `contextPath`.

Applications can control the size of the rendered micro chart with `size`, and hide the micro chart labels with `showOnlyChart`.

For more information and live examples, see the SAP Fiori development portal at [Building Blocks - Micro Chart - Overview](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/buildingBlocks/microchart/microChartDefault).



<a name="loio74554b4ca1de49aea42e2c309946ba05__section_w21_dfs_j5b"/>

## API

For information about the `MicroChart` API, see the [API Reference](https://ui5.sap.com/#/api/sap.fe.macros.MicroChart).

