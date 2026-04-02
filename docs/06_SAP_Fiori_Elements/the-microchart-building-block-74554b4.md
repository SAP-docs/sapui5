<!-- loio74554b4ca1de49aea42e2c309946ba05 -->

# The `MicroChart` Building Block

You can use the `MicroChart` building block to render different types of micro charts.

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

For more information and live examples, see the SAP Fiori development portal at [Building Blocks - Micro Chart - Overview](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/buildingBlocks/microchart/microChartDefault).



## Configuring the `MicroChart` Building Block Using Manifest Settings

You can use manifest settings to configure the `MicroChart` building block, as shown in the following sample code:

> ### Sample Code:  
> `manifest.json`
> 
> ```
> 
> {
>   "requestGroupId": "LongRunners",
>   "hideOnNoData": false,
>   "showOnlyChart": false,
>   "size": "Auto"
> }
> 
> ```

The following settings are available:


<table>
<tr>
<th valign="top">

Manifest Setting

</th>
<th valign="top">

Description

</th>
</tr>
<tr>
<td valign="top">

`requestGroupId`

</td>
<td valign="top">

String. The ID of the request group. For more information, see [Defining the Loading Behavior of Object Pages](defining-the-loading-behavior-of-object-pages-ac03570.md).

</td>
</tr>
<tr>
<td valign="top">

`hideOnNoData`

</td>
<td valign="top">

Boolean. When set to `true`, shows a blank space when the chart doesn't contain any data.

</td>
</tr>
<tr>
<td valign="top">

`showOnlyChart`

</td>
<td valign="top">

Boolean. When set to `true`, renders only the chart and the chart title.

The default value is `false`.

</td>
</tr>
<tr>
<td valign="top">

`size`

</td>
<td valign="top">

Defines the size of the chart. The available values are:

-   `XS`
-   `S`
-   `M`
-   `L`
-   `Auto`



</td>
</tr>
</table>



## Configuring the Title as a Link

You can configure the title of the building block as a link, which can be clicked to navigate to a specified section of the page, or to another application, as shown in the following sample code:

> ### Sample Code:  
> ```
> 
> <macros:MicroChart
>     id="microChartNavigateToSubSection"
>     metaPath="@com.sap.vocabularies.UI.v1.Chart#MicroChart"
>     contextPath="{contextPath>}"
>     batchGroupId="$auto.def"
>     titleAsLink="true"
>     linkAriaText="Custom ARIA text for section navigation"
>     titlePress=".extension.sap.fe.core.fpmExplorer.customHeaderFacet.OPExtend.onMicroChartTitlePressInPage"
> />
> 
> ```

The `MicroChart` building block provides a hook when the user clicks the link, but the handler must be maintained by the application.

For more information and live examples, see the SAP Fiori development portal at [Standard Floorplans - Extensions - Extensions for Object Pages - Custom Header Facet](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/topic/floorplanObjectPage/customHeaderFacet).



<a name="loio74554b4ca1de49aea42e2c309946ba05__section_w21_dfs_j5b"/>

## API

For information about the `MicroChart` API, see the [API Reference](https://ui5.sap.com/#/api/sap.fe.macros.MicroChart).

