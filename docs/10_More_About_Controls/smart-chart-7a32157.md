<!-- loio7a32157697474864b041fa739fcc51ba -->

# Smart Chart

The `sap.ui.comp.smartchart.SmartChart` control can be used to create complex diagrams.

The frequently asked questions section aims at answering some basic questions that you might have when using this control.

> ### Note:  
> The code samples in this section reflect examples of possible use cases and might not always be suitable for your purposes. Therefore, we recommend that you do not copy and use them directly.

For more information about this control, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smartchart.SmartChart) and the [samples](https://ui5.sap.com/#/entity/sap.ui.comp.smartchart.SmartChart).

For more information about annotations for this control, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smartchart.SmartChart/annotations/Summary).



## Overview

You can select a chart type, such as a pie chart, column chart or a chart with an x and a y-axis or two y-axes, and define the dimensions and measures for the chart and how you want to display them. A drilldown enables you to display even more information about a dimension.

On the UI, the `SmartChart` control consists of a toolbar and a chart area. The control uses the `sap.chart.Chart` control, which is shown in the chart area. The toolbar offers you various functions, such as the selection of various types of charts, the drilldown/drillup and maximize/minimize functions as well as zooming in and out of a chart, and a download. In addition, the control allows you to navigate to the related semantic object for the chart by clicking `Jump To` after selecting the relevant part of the chart, such as a column \(or, alternatively, you can also use a similar feature by clicking the `Details` button if this feature is enabled\).



## Details

The `SmartChart` control offers further functions by integrating other smart controls: You can save a chart as a view using the `SmartVariantManagement` control or make chart-specific personalization settings using the `sap.m.P13nDialog` control.

In the personalization dialog, you can select a number of chart-specific features in the *Chart* panel, such as selecting various dimensions and measures. You can also sort the data in the chart or filter it based on the conditions you define here. The *Filter* panel shows the filter criteria that have been defined here manually. For more information about other, related smart controls, see [sap.ui.comp](sap-ui-comp-0cbbeba.md).

If a chart is changed several times, the final outcome of the changes can be persisted as a view once the chart looks as required by the user. When the view is loaded the next time, the final outcome of the changes will be shown, but not each single step of the changes.

If the `showDownloadButton` property is set to `true`, you can download the part of the chart that is currently visible by clicking the `Download Chart` button. The chart will be downloaded in PNG format.



## Annotations

The following table shows a selection of the annotations used by the `SmartChart` control:

**Annotations**


<table>
<tr>
<th valign="top">

Element



</th>
<th valign="top">

Annotation



</th>
<th valign="top">

Value



</th>
<th valign="top">

Mandatory



</th>
<th valign="top">

Description



</th>
</tr>
<tr>
<td valign="top">

Entity type



</td>
<td valign="top">

 `sap:semantics` 



</td>
<td valign="top">

aggregate



</td>
<td valign="top">

Yes



</td>
<td valign="top">

Enables the aggregation of dimensions and measures.



</td>
</tr>
<tr>
<td valign="top">

Dimensions



</td>
<td valign="top">

 `sap:aggregation-role` 



</td>
<td valign="top">

dimension



</td>
<td valign="top">

Yes



</td>
<td valign="top">

Defines the dimensions.



</td>
</tr>
<tr>
<td valign="top">

Measures



</td>
<td valign="top">

 `sap:aggregation-role` 



</td>
<td valign="top">

measure



</td>
<td valign="top">

Yes



</td>
<td valign="top">

Defines the measures.



</td>
</tr>
</table>

A property can be annotated with attribute `sap:aggregation-role` if it has an aggregation role. The attribute can have the value `"dimension"` if the property represents the key of a dimension or `"measure"` if the property represents a measure whose values are aggregated according to the aggregation behavior of the entity type that contains the control. Both values are only valid for properties of an entity type that is annotated with `sap:semantics="aggregate"`.

```xml

<EntityType Name="Product" sap:service-schema-version="1" sap:service-version="1" sap:semantics="aggregate" sap:content-version="1"> 
	<Property Name="Category" Type="Edm.String" Nullable="false" MaxLength="40" sap:aggregation-role="dimension" sap:label="Product Category" sap:creatable="false" sap:updatable="false" sap:sortable="true" sap:filterable="true" />
	<Property Name="Quantity" Type="Edm.Decimal" Nullable="false" MaxLength="3" sap:aggregation-role="measure" sap:label="Quantity"
 	sap:creatable="false" sap:updatable="false" sap:sortable="true" sap:filterable="true" />
 	...
</EntityType>


```

The `com.sap.vocabularies.UI.v1.Chart` annotation is used to specify the chart type and the visible measures and dimensions of the chart.

```xml

<Annotations Target="EPM_DEVELOPER_SCENARIO_SRV.Product"
      xmlns="http://docs.oasis-open.org/odata/ns/edm">
      <Annotation Term="com.sap.vocabularies.UI.v1.Chart">
            <Record>
                  <PropertyValue Property="ChartType"
                        EnumMember="com.sap.vocabularies.UI.v1.ChartType/Column" />
                  <PropertyValue Property="Dimensions">
                        <Collection>
                              <PropertyPath>Name</PropertyPath>
                              <PropertyPath>Category</PropertyPath>
                        </Collection>
                  </PropertyValue>
                  <PropertyValue Property="Measures">
                        <Collection>
                              <PropertyPath>Price</PropertyPath>
                              <PropertyPath>Quantity</PropertyPath>
                        </Collection>
                  </PropertyValue>
            </Record>
      </Annotation>
</Annotations>


```



## FAQ



### Can I use annotations with qualifiers in the `SmartChart` control? And, in particular, how can I use the annotations with a qualifier within the control?

As a general rule, the `SmartChart` control looks for annotations **without** a qualifier, the primary annotations. However, you can also use the `PresentationVariant` and `Chart` annotations with qualifiers as mentioned below.

We first look for `PresentationVariant` and try to get the `Chart` annotation from there. If no such annotation exists, we look for the `Chart` annotation directly on the entity.

You can use `chartQualifier` for the `SmartChart` control:

```js

<SmartChart customData:chartQualifier=”Customer360” …>
```

Or use the following:

```js

<SmartChart customData:presentationVariantQualifier=”Customer360” …>
```

If **no qualifier** has been defined for the presentation variant, you can use the fallback option and check if there is a `Chart` annotation with or without a qualifier, as specified by the application developer.

> ### Note:  
> `customData` is the shortcut notation for specifying custom data for the control, provided you have added the following to the XML view: `customData="http://schemas.sap.com/sapui5/extension/sap.ui.core.CustomData/1"`.
> 
> For more information on how to use custom data in XML views, see [Custom Data - Attaching Data Objects to Controls](../04_Essentials/custom-data-attaching-data-objects-to-controls-91f0c3e.md).



### Why does the `initialise` event of `SmartTable` not get fired in my scenario?

The `SmartTable` control fires the `initialise` event just **once** after it has completed analyzing the metadata and has initialised its inner state for the first time. Therefore, using `attachInitialise` does not help. However, the `isInitialised` method can be used in such scenarios.

You can also use the following code sample to handle scenarios where you need to trigger some function after this control has been initialized. It should work in scenarios where the event has already been fired:

```js

if (oSmartControl.isInitialised()){
  runSomeCodeAfterInit();
} else {
  oSmartControl.attachInitialise(runSomeCodeAfterInit);
}

```

