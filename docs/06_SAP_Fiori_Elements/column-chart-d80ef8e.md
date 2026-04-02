<!-- loiod80ef8e964cc48a69989fb61815e151d -->

# Column Chart

You can render the chart as a column chart to display data, such as total product sales over a period of years in columns.

  
  
**Example of a Column Chart**

![](../01_Whats-New/images/WhatsNew_138_OVP_ColumnChart_d3b0ca9.png "Example of a Column Chart")

The number of columns is equal to the number of measures in the annotation file.

Column charts need to have at least one measure and one dimension. Irrespective of the role defined for the measure in the annotation file, every measure is represented as a separate column. Similarly, regardless of the role defined in the annotation file, every dimension is added to the **axis** category \(x-axis\).

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotation Term="UI.Chart" Qualifier="ColumnMaxPath">
>     <Record Type="UI.ChartDefinitionType">
>         <PropertyValue Property="Title" String="Items Column Chart"/>
>         <PropertyValue Property="Description" String="Testing Column Chart"/>
>         <PropertyValue Property="ChartType" EnumMember="UI.ChartType/Column"/>
>         <PropertyValue Property="Measures">
>             <Collection>
>                 <PropertyPath>NetAmount</PropertyPath>
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
>                     <PropertyValue Property="DataPoint" AnnotationPath="@UI.DataPoint#ColumnMaxPath"/>
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
> Chart #ColumnMaxPath                  : {
>     $Type            : 'UI.ChartDefinitionType',
>     Title            : 'Items Column Chart',
>     Description      : 'Testing Column Chart',
>     ChartType        : #Column,
>     Measures         : [NetAmount],
>     Dimensions       : [SalesOrderItem],
>     MeasureAttributes: [{
>         $Type    : 'UI.ChartMeasureAttributeType',
>         Measure  : NetAmount,
>         Role     : #Axis1,
>         DataPoint: '@UI.DataPoint#ColumnMaxPath'
>     }]
> },
> ```



> ### Note:  
> For information about SAP Fiori elements for OData V2, see [Column Chart Card](column-chart-card-6c0637c.md).

