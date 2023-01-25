<!-- loio58713934229948c79509f5d40966df3c -->

# Combination Chart Card

A combination chart lets you combine and view two or more chart types in a single chart.



For example, combining a column and line chart in the same visualization lets you compare values of different categories. This provides a clear view and helps you compare categories.

For combination charts:

-   The first measure is used for the column format and the subsequent measure is displayed as a line within the chart.

-   We recommend only using one time-based dimension for the **category** axis.

-   All measures, irrespective of their roles, are assigned to the feed's UID value axis. You need to have at least two measures for combination chart cards.

-   For all dimensions with a role:

    -   A **Category** is assigned to the category axis with the default role. You need to have at least one role assigned to the category axis.

    -   A **Series** is assigned to the feed UID's color and is displayed within the chart area with a differently colored column and line combinations for each of its members.



> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotation Term="UI.Chart" Qualifier="Eval_by_Currency_Combination">
>     <Record Type="UI.ChartDefinitionType">
>         <PropertyValue Property="Title" String="Sales and Total Sales" />
>         <PropertyValue Property="ChartType" EnumMember="UI.ChartType/Combination"/>
>         <PropertyValue Property="MeasureAttributes">
>             <Collection>
>                 <Record Type="UI.ChartMeasureAttributeType">
>                         <PropertyValue Property="Measure" PropertyPath="sales" />
>                         <PropertyValue Property="Role" EnumMember="UI.ChartMeasureRoleType/Axis1" />
>                 </Record>
>                 <Record Type="UI.ChartMeasureAttributeType">
>                     <PropertyValue Property="Measure" PropertyPath="totalsales" />
>                     <PropertyValue Property="Role" EnumMember="UI.ChartMeasureRoleType/Axis1" />
>                 </Record>
>             </Collection>
>         </PropertyValue>
>         <PropertyValue Property="DimensionAttributes">
>             <Collection>
>                 <Record Type="UI.ChartDimensionAttributeType">
>                     <PropertyValue Property="Dimension" PropertyPath="quarter_1" />
>                     <PropertyValue Property="Role" EnumMember="UI.ChartDimensionRoleType/Category" />
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
> 
> @UI.Chart: [
>   {
>     title: 'Sales and Total Sales',
>     chartType: #COMBINATION,
>     measureAttributes: [
>       {
>         measure: 'sales',
>         role: #AXIS_1
>       },
>       {
>         measure: 'totalsales',
>         role: #AXIS_1
>       }
>     ],
>     dimensionAttributes: [
>       {
>         dimension: 'quarter_1',
>         role: #CATEGORY
>       }
>     ],
>     qualifier: 'Eval_by_Currency_Combination'
>   }
> ]
> annotate view VIEWNAME with { }
> 
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> 
> UI.Chart #Eval_by_Currency_Combination : {
>     $Type : 'UI.ChartDefinitionType',
>     Title : 'Sales and Total Sales',
>     ChartType : #Combination,
>     MeasureAttributes : [
>         {
>             $Type : 'UI.ChartMeasureAttributeType',
>             Measure : sales,
>             Role : #Axis1
>         },
>         {
>             $Type : 'UI.ChartMeasureAttributeType',
>             Measure : totalsales,
>             Role : #Axis1
>         }
>     ],
>     DimensionAttributes : [
>         {
>             $Type : 'UI.ChartDimensionAttributeType',
>             Dimension : quarter_1,
>             Role : #Category
>         }
>     ]
> }
> 
> ```

  
  
**Example of a Combination Chart Card**

 ![](../01_Whats-New/images/Whats_New_140_OVP_Combination_Chart_55139a9.png "Example of a Combination Chart Card") 

