<!-- loio97b86c47d6c043a3a45ccd4cc945951d -->

# Line Chart Card

You can render the chart as a line chart to display information as a series of data points connected by straight-line segments. Line charts are commonly used to visualize trends in data over time.

  
  
**Example of a Line Chart Card**

![](images/Line_Chart_aacfae2.png "Example of a Line Chart Card")

Line charts need at least one measure and one dimension. The role assigned to each measure and dimension determines how it's represented in the chart.


<table>
<tr>
<th valign="top">

Element

</th>
<th valign="top">

Role

</th>
<th valign="top">

Result

</th>
</tr>
<tr>
<td valign="top">

Dimension

</td>
<td valign="top">

`category`

</td>
<td valign="top">

Forms the x-axis \(category axis\). If no dimension has this role, the first dimension is used. We recommend using time-based dimensions \(for example, day, date, quarter, or year\).

</td>
</tr>
<tr>
<td valign="top">

Dimension

</td>
<td valign="top">

`series`

</td>
<td valign="top">

Forms separate line segments, each colored differently. If multiple dimensions have this role, their values are combined into one dimension.

</td>
</tr>
<tr>
<td valign="top">

Measure

</td>
<td valign="top">

\(any\)

</td>
<td valign="top">

Forms the y-axis \(value axis\). If there are multiple measures, each appears as a separate colored line.

</td>
</tr>
</table>

The line chart supports a color palette for semantic coloring. For more information, see [Configuring Charts on the Overview Page](configuring-charts-on-the-overview-page-c7c5a82.md).

The following code samples show how to configure a line chart:

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotation Term="UI.Chart" Qualifier="LineMaxPath">
>     <Record Type="UI.ChartDefinitionType">
>         <PropertyValue Property="Title" String="Items Line Chart"/>
>         <PropertyValue Property="Description" String="Testing Line Chart"/>
>         <PropertyValue Property="ChartType" EnumMember="UI.ChartType/Line"/>
>         <PropertyValue Property="Measures">
>             <Collection>
>                 <PropertyPath>NetAmount</PropertyPath>
>                 <PropertyPath>TargetAmount</PropertyPath>
>             </Collection>
>         </PropertyValue>
>         <PropertyValue Property="Dimensions">
>             <Collection>
>                 <PropertyPath>SalesOrderItem</PropertyPath>
>             </Collection>
>         </PropertyValue>
>         <PropertyValue Property="MeasureAttributes">
>             <Collection>
>                 <Record Type="UI.ChartMeasureAttributeType">
>                     <PropertyValue Property="Measure" PropertyPath="NetAmount"/>
>                     <PropertyValue Property="Role" EnumMember="UI.ChartMeasureRoleType/Axis1"/>
>                     <PropertyValue Property="DataPoint" AnnotationPath="@UI.DataPoint#LineValueCriticality"/>
>                 </Record>
>                 <Record Type="UI.ChartMeasureAttributeType">
>                     <PropertyValue Property="Measure" PropertyPath="TargetAmount"/>
>                     <PropertyValue Property="Role" EnumMember="UI.ChartMeasureRoleType/Axis1"/>
>                     <PropertyValue Property="DataPoint" AnnotationPath="@UI.DataPoint#LineTargetCriticality"/>
>                 </Record>
>             </Collection>
>         </PropertyValue>
>     </Record>
> </Annotation>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> No ABAP CDS annotation sample is available. Please use the local XML annotation.
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> Chart #LineChart                                        : {
>       $Type              : 'UI.ChartDefinitionType',
>       Title              : 'Line Chart (Time based)',
>       Description        : 'Testing Line Chart',
>       ChartType          : #Line,
>       Measures           : [maxPricing],
>       DynamicMeasures    : ['@Analytics.AggregatedProperty#max'],
>       Dimensions         : [Processed_Date],
>       MeasureAttributes  : [{
>         $Type    : 'UI.ChartMeasureAttributeType',
>         Measure  : maxPricing,
>         Role     : #Axis1,
>         DataPoint: '@UI.DataPoint#LineChartTimeDataPoint'
>       }],
>       DimensionAttributes: []
>     },
> ```

