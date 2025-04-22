<!-- loio51eb56989df94267a75ebeff24093a5e -->

# Radial Micro Chart

Radial micro charts displays a single percentage value.

The chart consists of a colored radial bar with a percentage value inside.

![](images/Radial_Micro_Chart_551f7f3.png)

> ### Note:  
> For more information about this chart type, see [Samples](https://ui5.sap.com/1.82.5/#/entity/sap.suite.ui.microchart.RadialMicroChart).



<a name="loio51eb56989df94267a75ebeff24093a5e__section_cfx_s3q_qmb"/>

## `UI.Chart` Annotation

The `UI.Chart Title` property is used for the title. The `UI.Chart Description` property is used for the subtitle.

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotation Term="UI.Chart" Qualifier="SpecificationWidthRadialChart">
>     <Record Type="UI.ChartDefinitionType">
>         <PropertyValue Property="Title" String="Product Width Specification"/>
>         <PropertyValue Property="Description" String="No navigation with qualifier"/>
>         <PropertyValue Property="ChartType" EnumMember="UI.ChartType/Donut"/>
>         <PropertyValue Property="Measures">
>             <Collection>
>                 <PropertyPath>Width</PropertyPath>
>             </Collection>
>         </PropertyValue>
>         <PropertyValue Property="MeasureAttributes">
>             <Collection>
>                 <Record Type="UI.ChartMeasureAttributeType">
>                     <PropertyValue Property="Measure" PropertyPath="Width"/>
>                     <PropertyValue Property="Role" EnumMember="UI.ChartMeasureRoleType/Axis1"/>
>                     <PropertyValue Property="DataPoint" AnnotationPath="@UI.DataPoint#Width"/>
>                 </Record>
>             </Collection>
>         </PropertyValue>
>     </Record>
> </Annotation>
> 
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> 
> @UI.Chart: [
>   {
>     title: 'Product Width Specification',
>     description: 'No navigation with qualifier',
>     chartType: #DONUT,
>     measures: [
>       'WIDTH'
>     ],
>     measureAttributes: [
>       {
>         measure: 'Width',
>         role: #AXIS_1,
>         asDataPoint: true
>       }
>     ],
>     qualifier: 'SpecificationWidthRadialChart'
>   }
> ]
> annotate view STTA_C_MP_PRODUCT with {
> 
> }
> 
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> 
> UI.Chart #SpecificationWidthRadialChart : {
>     $Type : 'UI.ChartDefinitionType',
>     Title : 'Product Width Specification',
>     Description : 'No navigation with qualifier',
>     ChartType : #Donut,
>     Measures : [
>         Width
>     ],
>     MeasureAttributes : [
>         {
>             $Type : 'UI.ChartMeasureAttributeType',
>             Measure : Width,
>             Role : #Axis1,
>             DataPoint : '@UI.DataPoint#Width'
>         }
>     ]
> }
> 
> ```



<a name="loio51eb56989df94267a75ebeff24093a5e__section_w1x_s3q_qmb"/>

## `UI.DataPoint` Annotation

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotation Term="UI.DataPoint" Qualifier="Width">
>     <Record>
>         <PropertyValue Property="Value" Path="Width"/>
>         <PropertyValue Property="TargetValue" Path="Weight"/>
>         <PropertyValue Property="Criticality" Path="criticalityValue"/>
>     </Record>
> </Annotation>
> 
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> 
> @UI.dataPoint: {
>   criticality: 'criticalityValue'
> }
> Width;
> 
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> 
> UI.DataPoint #Width : {
>     Value : Width,
>     TargetValue : Weight,
>     Criticality : criticalityValue
> }
> 
> 
> 
> ```

> ### Note:  
> The radial micro chart displays percentage values. This means that the unit of measure label is invalid and not rendered.

For semantic coloring, both the `Criticality` and `CriticalityCalculation` annotations are supported. However, the `Criticality` annotation overrides the `CriticalityCalculation` annotation.

The following annotations are mandatory and must be used in the radial micro chart:

-   `UI.Chart` → `ChartType`: `"Donut"`

-   `UI.Chart` → `Measures`

-   `UI.Chart` → `MeasureAttributes` → `DataPoint`

-   `UI.DataPoint` → `Value`

-   In case the `CriticalityCalculation` annotation is used for semantic coloring, then:

    -   `UI.DataPoint` → `CriticalityCalculation`

    -   `UI.DataPoint` → `CriticalityCalculation/ImprovementDirection`



