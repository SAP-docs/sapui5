<!-- loiod68df5a614984a6482e645012d8ba612 -->

# Vertical Bullet Chart Card

You can render the chart as vertical bullet charts, which actual values against a target value. It accepts at least one measure and one dimension.

  
  
**Example of a Vertical Bullet Chart Card**

![](../01_Whats-New/images/WhatsNew_138_OVP_VerticalBullet_f2d9418.png "Example of a Vertical Bullet Chart Card")

A vertical bullet chart has the following requirements:

-   At least one measure.

-   At least one dimension.


All dimensions, regardless of their role, are assigned to the **axis** category. All measures with the **axis1** role are represented as solid-colored columns, which represent actual values. All measures with **axis2** role are shown as a solid black line, which represents the target value.

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotation Term="UI.Chart" Qualifier="Eval_by_Currency_VerticalBullet">
> 					<Record Type="UI.ChartDefinitionType">
> 						<PropertyValue Property="Title" String="Sales by Country and Region" />
> 						<PropertyValue Property="ChartType" EnumMember="UI.ChartType/VerticalBullet" />
> 						<PropertyValue Property="Measures">
> 							<Collection>
> 								<PropertyPath>Sales</PropertyPath>
> 								<PropertyPath>TotalSales</PropertyPath>
> 							</Collection>
> 						</PropertyValue>
> 						<PropertyValue Property="Dimensions">
> 							<Collection>
> 								<PropertyPath>StatusCriticality</PropertyPath>
> 								<PropertyPath>Region</PropertyPath>
> 							</Collection>
> 						</PropertyValue>
> 						<PropertyValue Property="MeasureAttributes">
> 							<Collection>
> 								<Record Type="UI.ChartMeasureAttributeType">
> 									<PropertyValue Property="Measure" PropertyPath="Sales" />
> 									<PropertyValue Property="Role" EnumMember="UI.ChartMeasureRoleType/Axis1" />
> 								</Record>
> 								<Record Type="UI.ChartMeasureAttributeType">
> 									<PropertyValue Property="Measure" PropertyPath="TotalSales"/>
> 									<PropertyValue Property="Role" EnumMember="UI.ChartMeasureRoleType/Axis2"/>
> 								</Record>
> 							</Collection>
> 						</PropertyValue>
> 						<PropertyValue Property="DimensionAttributes">
> 							<Collection>
> 								<Record Type="UI.ChartDimensionAttributeType">
> 									<PropertyValue Property="Dimension" PropertyPath="StatusCriticality" />
> 									<PropertyValue Property="Role" EnumMember="UI.ChartDimensionRoleType/Series" />
> 								</Record>
> 								<Record Type="UI.ChartDimensionAttributeType">
> 									<PropertyValue Property="Dimension" PropertyPath="Region" />
> 									<PropertyValue Property="Role" EnumMember="UI.ChartDimensionRoleType/Category" />
> 								</Record>
> 							</Collection>
> 						</PropertyValue>
> 					</Record>
> 				</Annotation>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> @UI.chart: [{
>     qualifier: 'Eval_by_Currency_VerticalBullet',
>     title: 'Sales by Country and Region',
>     chartType: #VERTICAL_BULLET,
> 
>     measures: [
>         'Sales',
>         'TotalSales'
>     ],
> 
>     dimensions: [
>         'StatusCriticality',
>         'Region'
>     ],
> 
>     measureAttributes: [
>         {
>             measure: 'Sales',
>             role: #AXIS_1
>         },
>         {
>             measure: 'TotalSales',
>             role: #AXIS_2
>         }
>     ],
> 
>     dimensionAttributes: [
>         {
>             dimension: 'StatusCriticality',
>             role: #SERIES
>         },
>         {
>             dimension: 'Region',
>             role: #CATEGORY
>         }
>     ]
> }]
> 
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> annotate service.SalesEntity with @(
>     UI.Chart #Eval_by_Currency_VerticalBullet : {
>         Title              : 'Sales by Country and Region',
>         ChartType          : #VerticalBullet,
> 
>         Measures           : [
>             Sales,
>             TotalSales
>         ],
> 
>         Dimensions         : [
>             StatusCriticality,
>             Region
>         ],
> 
>         MeasureAttributes  : [
>             {
>                 Measure : Sales,
>                 Role    : #Axis1
>             },
>             {
>                 Measure : TotalSales,
>                 Role    : #Axis2
>             }
>         ],
> 
>         DimensionAttributes : [
>             {
>                 Dimension : StatusCriticality,
>                 Role      : #Series
>             },
>             {
>                 Dimension : Region,
>                 Role      : #Category
>             }
>         ]
>     }
> );
> ```

