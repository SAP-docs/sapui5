<!-- loio6c0637c0dc1d40ab9ea62131852728f9 -->

# Column Chart Card

You can render the chart as a column chart to display data, such as total product sales over a period of years in columns.

  
  
**Example of a Column Chart Card**

![](../01_Whats-New/images/WhatsNew_138_OVP_ColumnChart_d3b0ca9.png "Example of a Column Chart Card")

Column charts have the following requirements:

-   At least one measure.

-   At least one dimension.


The number of columns is equal to the number of measures in the annotation file.

Irrespective of the role defined for the measure in the annotation file, every measure is represented as a separate column. Similarly, regardless of the role defined in the annotation file, every dimension is added to the **axis** category \(x-axis\).

The following code samples show how to configure a column chart:

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

