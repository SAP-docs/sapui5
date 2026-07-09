<!-- loio5c287de698334e6187d8a4249eb84248 -->

# Data Querying and Visualization Annotations

You can configure which data appears on a card and visualize it as charts or KPI tags.



## Querying and Displaying Data

These annotations control which data appears on a card and how it is presented. Use them when you need to filter the underlying entity set, sort or group the results, or define reusable query and display configurations.



### Defining Query Parameters and Filters

You can use `com.sap.vocabularies.UI.v1.SelectionVariant` annotation to defined parameters and filters used to query the annotated entity set. It can be used standalone or in combination with the selection parameter variant. The following properties are supported:

-   `ID`: Can contain an identifier to reference this instance from external context

-   `Text`: The name of the selection variant

-   `Parameters`: A collection of `com.sap.vocabularies.UI.v1.ParameterAbstract` terms

-   `SelectOptions`: A collection of `com.sap.vocabularies.UI.v1.SelectOptionType` terms used to define filters on this entity set


> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotation Term="com.sap.vocabularies.UI.v1.SelectionVariant">
>    <Record>
>       <PropertyValue Property="SelectOptions">
>          <Collection>
>             <Record>
>                <PropertyValue Property="PropertyName" PropertyPath="TotalSum" />
>                <PropertyValue Property="Ranges">
>                   <Collection>
>                      <Record>
>                         <PropertyValue Property="Sign"
>                            EnumMember="com.sap.vocabularies.UI.v1.SelectionRangeSignType/I" />
>                         <PropertyValue Property="Option"
>                            EnumMember="com.sap.vocabularies.UI.v1.SelectionRangeOptionType/BT" />
>                         <PropertyValue Property="Low" String="0" />
>                         <PropertyValue Property="High" String="8000" />
>                      </Record>
>                   </Collection>
>                </PropertyValue>
>             </Record>
>          </Collection>
>       </PropertyValue>
>    </Record>
> </Annotation>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> 
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> 
> UI.SelectionVariant : {
>     SelectOptions : [
>         {
>             PropertyName : TotalSum,
>             Ranges : [
>                 {
>                     Sign : #I,
>                     Option : #BT,
>                     Low : '0',
>                     High : '8000'
>                 }
>             ]
>         }
>     ]
> }
> ```



### Defining How Query Results are Displayed

You can use the `com.sap.vocabularies.UI.v1.PresentationVariant` annotation to define how the results of a queried entity collection is displayed in the KPI header. It can be used as standalone or together with the `SelectionPresentationVariant` annotation. The following properties are supported:

-   `ID`: Identifier for referencing this instance from an external context.
-   `Text`: Name of the presentation variant
-   `SortOrder`: A collection of `com.sap.vocabularies.Common.v1.SortOrderType` records.
-   `RequestAtLeast`: A collection of fields that must be included in the selection. Use this property to retrieve additional dimensions from the back end for further navigation.

    > ### Note:  
    > In an aggregated service, additional dimensions may cause issues while rendering the chart.

-   `Visualizations`: Supports the `LineItem` or `Chart` annotation path

    > ### Note:  
    > You can only define this property when it is used together with the `SelectionPresentationVariant` annotation.




## Visualizations

These annotations turn raw data into charts and KPI tags on overview page cards. Use them when numeric trends, comparisons, or summary metrics communicate more effectively than tables or text.



### Defining Chart Dimensions and Measures

You can use the `com.sap.vocabularies.UI.v1.Chart` annotation to define the dimensions and measures used in charts. the following properties are supported:

-   `Title`: Title of the chart.

-   `Description`: Description of the chart.
-   `ChartType`: Type of chart to render
-   `Measures`: A collection of `PropertyPath` properties that define the measures shown in the chart
-   `MeasureAttributes`: A collection of `com.sap.vocabularies.UI.v1.ChartMeasureAttributeType` records that describe attributes for the measures. All measures used in this collection must also be listed in the `Measures` property.
-   `Dimensions`: A collection of `PropertyPath` properties that define dimensions shown in the chart.
-   `DimensionAttributes`: A collection of `com.sap.vocabularies.UI.v1.ChartDimensionAttributeType` records that describe attributes for dimensions. All dimensions used in this collection must be listed in the `Dimensions` property.

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotation Term="com.sap.vocabularies.UI.v1.Chart">
>    <Record Type="com.sap.vocabularies.UI.v1.ChartDefinitionType">
>       <PropertyValue Property="Title" String="View1" />
>       <PropertyValue Property="MeasureAttributes">
>          <Collection>
>             <Record Type="com.sap.vocabularies.UI.v1.ChartMeasureAttributeType">
>                <PropertyValue Property="Measure" PropertyPath="TotalSum" />
>                <PropertyValue Property="Role" EnumMember="com.sap.vocabularies.UI.v1.ChartMeasureRoleType/Axis1" />
>             </Record>
>          </Collection>
>       </PropertyValue>
>       <PropertyValue Property="DimensionAttributes">
>          <Collection>
>             <Record Type="com.sap.vocabularies.UI.v1.ChartDimensionAttributeType">
>                <PropertyValue Property="Dimension" PropertyPath="Status" />
>                <PropertyValue Property="Role" EnumMember="com.sap.vocabularies.UI.v1.ChartDimensionRoleType/Series" />
>             </Record>
>          </Collection>
>       </PropertyValue>
>    </Record>
> </Annotation>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> 
> @UI.Chart: [
>   {
>     title: 'View1',
>     measureAttributes: [
>       {
>         measure: 'TotalSum',
>         role: #AXIS_1
>       }
>     ],
>     dimensionAttributes: [
>       {
>         dimension: 'Status',
>         role: #SERIES
>       }
>     ]
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
> UI.Chart : {
>     $Type : 'UI.ChartDefinitionType',
>     Title : 'View1',
>     MeasureAttributes : [
>         {
>             $Type : 'UI.ChartMeasureAttributeType',
>             Measure : TotalSum,
>             Role : #Axis1
>         },
>     ],
>     DimensionAttributes : [
>         {
>             $Type : 'UI.ChartDimensionAttributeType',
>             Dimension : Status,
>             Role : #Series
>         }
>     ]
> }
> 
> ```



### Configuring KPI Tags

You can use the <code><code>com.sap.vocabularies.UI.v1.KPI</code></code> annotation to create KPI tags for your overview page cards. The KPI information appears in the header area of the card and reacts to the filter conditions you set.

This annotation combines the capabilities of the `SelectionVariant`, `PresentationVariant`, and `DataPoint` annotations. It also provides `SemanticObject` and `Action` properties to configure navigation parameters.

The following code samples show how to configure a KPI tag that displays a filtered value, supports alternative visualizations, and navigates to another app when selected.

> ### Sample Code:  
> XML Annotation
> 
> ```
> <Annotation Term="UI.KPI" Qualifier="Eval_by_Country_-Generic">
>     <Record>
>         <PropertyValue Property="DataPoint" Path="@UI.DataPoint#Eval_by_Country_-Generic" />
>         <PropertyValue Property="Detail">
>             <Record Type="UI.KPIDetailType">
>                 <PropertyValue Property="DefaultPresentationVariant" Path="@UI.PresentationVariant#Eval_by_Currency1" />
>                 <PropertyValue Property="AlternativePresentationVariants">
>                     <Collection>
>                         <Path>@UI.PresentationVariant#Eval_by_Currency_Column</Path>
>                     </Collection>
>                 </PropertyValue>
>                 <PropertyValue String="Action" Property="SemanticObject" />
>                 <PropertyValue String="toappnavsample" Property="Action" />
>             </Record>
>         </PropertyValue>
>         <PropertyValue String="String for KPI Annotation" Property="ID" />
>         <PropertyValue Property="SelectionVariantQualifier" Path="@UI.SelectionVariant#Eval_by_Currency_1" />
>     </Record>
> </Annotation>
> <Annotation Term="UI.DataPoint" Qualifier="Eval_by_Country_-Generic">
>     <Record>
>         <PropertyValue Property="Value" Path="Currency" />
>         <PropertyValue String="test" Property="Title" />
>     </Record>
> </Annotation>
> 
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> 
> @UI.KPI: [
>   {
>     detail: {
>       defaultPresentationVariantQualifier: 'Eval_by_Currency1',
>       alternativePresentationVariantQualifiers: [
>         'Eval_by_Currency_Column'
>       ],
>       semanticObject: 'Action',
>       semanticObjectAction: 'toappnavsample'
>     },
>     selectionVariantQualifier: 'Eval_by_Currency_1',
>     id: 'String for KPI Annotation',
>     qualifier: 'Eval_by_Country-Generic',
>     dataPoint.title: 'test'
>   }
> ]
> Eval_by_Country-Generic;
> 
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> 
> UI.KPI #AllActualCosts : {
>     $Type : 'UI.KPIType',
>     Detail : {
>         $Type : 'UI.KPIDetailType',
>         DefaultPresentationVariant : ![@UI.PresentationVariant#Eval_by_Currency1],
>         AlternativePresentationVariants : [
>             ![@UI.PresentationVariant#Eval_by_Currency_Column],
>         ],
>         SemanticObject : 'Action',
>         Action : 'toappnavsample',
>     },
>     SelectionVariant : ![@UI.SelectionVariant#Eval_by_Currency_1],
>     DataPoint : ![@UI.DataPoint#Eval_by_Country-Generic],
>     ID : 'String for KPI Annotation'
> },
> 
> ```

**Referenced Presentation Variant**

Defines how the underlying data of the KPI is sorted, grouped, and visualized.

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotation Term="UI.PresentationVariant" Qualifier="Eval_by_Currency1">
>    <Record>
>       <PropertyValue Property="MaxItems" Int="5" />
>       <PropertyValue Property="GroupBy">
>          <Collection>
>             <PropertyPath>Country</PropertyPath>
>             <PropertyPath>Currency</PropertyPath>
>          </Collection>
>       </PropertyValue>
>       <PropertyValue Property="SortOrder">
>          <Collection>
>             <Record>
>                <PropertyValue Property="Property" PropertyPath="TotalSales" />
>                <PropertyValue Property="Descending" Boolean="true" />
>             </Record>
>          </Collection>
>       </PropertyValue>
>       <PropertyValue Property="Visualizations">
>          <Collection>
>             <AnnotationPath>@UI.Chart#Eval_by_Currency_Donut</AnnotationPath>
>          </Collection>
>       </PropertyValue>
>    </Record>
> </Annotation>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> 
> @UI.PresentationVariant: [
>   {
>     maxItems: 5,
>     groupBy: [
>       'COUNTRY',
>       'CURRENCY'
>     ],
>     sortOrder: [
>       {
>         by: 'TOTALSALES'
>       }
>     ],
>     visualizations: [
>       {
>         type: #AS_CHART,
>         qualifier: 'Eval_by_Currency_Donut'
>       }
>     ],
>     qualifier: 'Eval_by_Currency1'
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
> UI.PresentationVariant #Eval_by_Currency1 : {
>     MaxItems : 5,
>     GroupBy : [
>         Country,
>         Currency
>     ],
>     SortOrder : [
>         {
>             Property : TotalSales,
>             Descending : true
>         },
>     ],
>     Visualizations : [
>         '@UI.Chart#Eval_by_Currency_Donut'
>     ]
> },
> 
> ```

**Referenced Selection Variant**

Defines the parameters and filters applied to the KPI's underlying data.

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotation Term="UI.SelectionVariant" Qualifier="Eval_by_Currency_1">
>    <Record>
>       <PropertyValue Property="SelectOptions">
>          <Collection>
>             <Record>
>                <PropertyValue Property="PropertyName" PropertyPath="Country" />
>                <PropertyValue Property="Ranges">
>                   <Collection>
>                      <Record>
>                         <PropertyValue Property="Sign" EnumMember="UI.SelectionRangeSignType/I" />
>                         <PropertyValue Property="Option" EnumMember="UI.SelectionRangeOptionType/EQ" />
>                         <PropertyValue Property="Low" String="IN" />
>                      </Record>
>                   </Collection>
>                </PropertyValue>
>             </Record>
>          </Collection>
>       </PropertyValue>
>       <PropertyValue Property="Parameters">
>          <Collection>
>             <Record Type="UI.Parameter">
>                <PropertyValue Property="PropertyName" PropertyPath="Currency_Target" />
>                <PropertyValue Property="PropertyValue" String="EUR" />
>             </Record>
>             <Record Type="UI.Parameter">
>                <PropertyValue Property="PropertyName" PropertyPath="UoM_Target" />
>                <PropertyValue Property="PropertyValue" String="KGM" />
>             </Record>
>          </Collection>
>       </PropertyValue>
>    </Record>
> </Annotation>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> 
> @UI.SelectionVariant: [
>   {
>     qualifier: 'Eval_by_Currency_1',
> 	parameters: [
> 	  {name: 'PropertyName', value: 'Currency_Target' },
> 	  { name: 'PropertyValue', value: 'EUR'},
> 	  { name: 'PropertyValue', value: 'UoM_Target'},
> 	  { name: 'PropertyValue', value: 'KGM'}
> 	]
>   }
> ]
> annotate view VIEWNAME with { 
> 
> }
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> 
> UI.SelectionVariant #Eval_by_Currency_1 : {
>     SelectOptions : [
>         {
>             PropertyName : Country,
>             Ranges : [
>                 {
>                     Sign : #I,
>                     Option : #EQ,
>                     Low : 'IN'
>                 }
>             ]
>         }
>     ],
>     Parameters : [
>         {
>             $Type : 'UI.Parameter',
>             PropertyName : Currency_Target,
>             PropertyValue : 'EUR'
>         },
>         {
>             $Type : 'UI.Parameter',
>             PropertyName : UoM_Target,
>             PropertyValue : 'KGM'
>         }
>     ]
> }
> 
> ```

**Referenced Data Point**

Defines the value, formatting, and criticality shown by the KPI tag.

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotation Term="UI.DataPoint" Qualifier="Eval_by_Country_-Generic">
>    <Record Type="UI.DataPointType">
>       <PropertyValue Property="Title" String="Sales India - Generic Card" />
>       <PropertyValue Property="Value" Path="Sales" />
>       <PropertyValue Property="ValueFormat">
>          <Record>
>             <PropertyValue Property="ScaleFactor" IntDecimal="2" />
>             <PropertyValue Property="NumberOfFractionalDigits" Int="1" />
>          </Record>
>       </PropertyValue>
>       <PropertyValue Property="CriticalityCalculation">
>          <Record>
>             <PropertyValue Property="ImprovementDirection" EnumMember="UI.ImprovementDirectionType/Minimizinge" />
>             <PropertyValue Property="DeviationRangeHighValue" String="7300" />
>             <PropertyValue Property="ToleranceRangeHighValue" String="7200" />
>          </Record>
>       </PropertyValue>
>       <PropertyValue Property="TargetValue" String="2.000 " />
>       <PropertyValue Property="TrendCalculation">
>          <Record>
>             <PropertyValue Property="ReferenceValue" String="5201680" />
>             <PropertyValue Property="DownDifference" IntDecimal="10000000.0" />
>          </Record>
>       </PropertyValue>
>    </Record>
> </Annotation>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> 
> @UI.dataPoint: { 
> 	 title: 'Sales India - Generic Card',
> 	 valueFormat: { scaleFactor: 2, numberOfFractionalDigits: 1 },
> 	 criticalityCalculation: { 
> 	   improvementDirection: #MINIMIZE,
> 	   deviationRangeHighValue: 7300,
> 	   toleranceRangeHighValue: 7200
> 	 },
> 	 targetValue: 2.000,
> 	 trendCalculation: { referenceValue: 'refValElement', downDifference: 10000000.0 }
> }
> Sales;
> 
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> 
> UI.DataPoint #Eval_by_Country-Generic : {
>     $Type : 'UI.DataPointType',
>     Title : 'Sales India - Generic Card',
>     Value : Sales,
>     ValueFormat : {
>         ScaleFactor : 2,
>         NumberOfFractionalDigits : 1
>     },
>     CriticalityCalculation : {
>         ImprovementDirection : #Minimizing,
>         DeviationRangeHighValue : '7300',
>         ToleranceRangeHighValue : '7200'
>     },
>     TargetValue : '2.000 ',
>     TrendCalculation : {
>         ReferenceValue : '5201680',
>         DownDifference : 10000000.0
>     }
> }
> 
> ```

**Related Information**  


[Annotations Used in Overview Pages](annotations-used-in-overview-pages-65731e6.md "Annotations define how data is presented, navigated, and visualized in cards of overview pages. You can use these annotations to control how entity data is displayed, formatted, and interacted with SAP Fiori applications.")

[Navigation and Action Annotations](navigation-and-action-annotations-d0fac68.md "You can make a card interactive by executing OData actions, enabling intent-based navigation, or adding hyperlinks.")

[Data Display and Formatting Annotations](data-display-and-formatting-annotations-57e417c.md "You can define the structure and formatting of card content, including headers, fields, lists, groups, and data values.")

