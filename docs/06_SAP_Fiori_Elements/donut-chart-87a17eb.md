<!-- loio87a17ebef87c4b769783c57e50cc04c5 -->

# Donut Chart

You can render the chart as a donut chart in SAP Fiori elements for OData V4.

A donut chart displays data as differently colored sections of a donut.

  
  
**Example of a Donut Chart**

![](images/Donut_Chart_0750575.png "Example of a Donut Chart")

The value of the measure determines the size of each section. Donut charts help the viewer to quickly determine the key area that needs attention. For example, you can view numbers and percentages.



Donut charts require exactly one measure. You can provide more than one dimension. If this is the case, the dimensions are stacked so that the sections of the chart represent the combination of all dimensions. For example, if you define **Sales** as your measure, and provide two dimensions: **Year** and **Country**, the chart displays the sales data of each combination of year and country as a separate colored section.

> ### Sample Code:  
> XML Annotation
> 
> ```
> <Annotation Term="UI.Chart" Qualifier="DonutChartSales">
>   <Record Type="UI.ChartDefinitionType">
>     <PropertyValue Property="Title"       String="Sales Distribution"/>
>     <PropertyValue Property="Description" String="Sales by Region"/>
>     <PropertyValue Property="ChartType"   EnumMember="UI.ChartType/Donut"/>
>     <PropertyValue Property="Measures">
>       <Collection>
>         <PropertyPath>NetSales</PropertyPath>
>       </Collection>
>     </PropertyValue>
>     <PropertyValue Property="Dimensions">
>       <Collection>
>         <PropertyPath>Region</PropertyPath>
>       </Collection>
>     </PropertyValue>
>     <PropertyValue Property="MeasureAttributes">
>       <Collection>
>         <Record Type="UI.ChartMeasureAttributeType">
>           <PropertyValue Property="Measure" PropertyPath="NetSales"/>
>           <PropertyValue Property="Role"    EnumMember="UI.ChartMeasureRoleType/Axis1"/>
>         </Record>
>       </Collection>
>     </PropertyValue>
>     <PropertyValue Property="DimensionAttributes">
>       <Collection>
>         <Record Type="UI.ChartDimensionAttributeType">
>           <PropertyValue Property="Dimension" PropertyPath="Region"/>
>           <PropertyValue Property="Role"      EnumMember="UI.ChartDimensionRoleType/Category"/>
>         </Record>
>       </Collection>
>     </PropertyValue>
>   </Record>
> </Annotation>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> @UI.chart: [
>   {
>     qualifier:   'DonutChartSales',
>     title:       'Sales Distribution',
>     description: 'Sales by Region',
>     chartType:   #DONUT,
>     measures:    ['NetSales'],
>     dimensions:  ['Region'],
>     measureAttributes: [
>       {
>         measure: 'NetSales',
>         role:    #AXIS_1
>       }
>     ],
>     dimensionAttributes: [
>       {
>         dimension: 'Region',
>         role:      #CATEGORY
>       }
>     ]
>   }
> ]
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> @UI.Chart #DonutChartSales: {
>   Title:       'Sales Distribution',
>   Description: 'Sales by Region',
>   ChartType:   #Donut,
>   Measures:    [NetSales],
>   Dimensions:  [Region],
>   MeasureAttributes: [
>     {
>       Measure: NetSales,
>       Role:    #Axis1
>     }
>   ],
>   DimensionAttributes: [
>     {
>       Dimension: Region,
>       Role:      #Category
>     }
>   ]
> }
> ```



> ### Note:  
> For information about donut chart cards on the overview page, see [Donut Chart Card](donut-chart-card-ee36513.md).

