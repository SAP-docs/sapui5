<!-- loioa7de88354fa649b5bdfa979b5e8691ed -->

# Time Series Chart Card

You can render the chart as a time series chart, which contains a time axis instead of a categorical axis. This chart type represents a time-based dimension that is more responsive to a change in card size.

  
  
**Example of a Time Series Chart Card**

![](images/Time_Series_Chart_Card_2ae1caf.png "Example of a Time Series Chart Card")

Analytical cards use the time axis automatically when all the following conditions are met:

-   The chart type is one of vertical bullet, stacked column, scatter, line, bubble, column, waterfall, combination, or dual combination.

-   Data type of the dimension is either `edm.datetime` or `edm.string`. If the data type is `edm.string`, then it must have the additional annotation in the OData metadata annotation: `sap:semantics:"year (YYYY) or yearweek (YYYYWW) or yearmonth (YYYYMM) or yearquarter (YYYYQ)"`.

-   Number of dimensions are based on the following chart types:

    -   Bubble, column, waterfall, and combination charts: These charts must only one dimension.

    -   Line charts: This chart must have up to two dimensions. The second dimension can be a color dimension. The dimension with the `uid` color has to have the **Series** role assigned to it.


-   Number of measures are based on the following chart types:

    -   Bubble charts: This chart must have exactly two measures.

    -   Combination charts: This chart must have at least two measures.

    -   Vertical bullet, stacked column, and scatter charts: These charts must be have at least one measure and one dimension.



> ### Note:  
> Extra color and shape dimensions are supported only in scatter charts.

> ### Sample Code:  
> Metadata Sample
> 
> ```
> <Property Name="Date" Type="Edm.DateTime" sap:display-format="Date" sap:label="Date" sap:aggregation-role="dimension"/>
> ```

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotation Term="UI.Chart" Qualifier="Line-Time_-Currency">
>     <Record Type="UI.ChartDefinitionType">
>         <PropertyValue Property="Title" String="View1" />
>         <PropertyValue Property="ChartType" EnumMember="UI.ChartType/Line"/>
>         <PropertyValue Property="MeasureAttributes">
>             <Collection>
>                 <Record Type="UI.ChartMeasureAttributeType">
>                     <PropertyValue Property="Measure" PropertyPath="SalesShare" />
>                     <PropertyValue Property="Role"
>                                    EnumMember="UI.ChartMeasureRoleType/Axis1" />
>                     <PropertyValue Property="DataPoint" AnnotationPath="@UI.DataPoint#Eval_by_CtryCurr_-SalesShare"/>
>                 </Record>
>             </Collection>
>         </PropertyValue>
>         <PropertyValue Property="DimensionAttributes">
>             <Collection>
>                 <Record Type="UI.ChartDimensionAttributeType">
>                     <PropertyValue Property="Dimension" PropertyPath="Date" />
>                     <PropertyValue Property="Role"
>                                    EnumMember="UI.ChartDimensionRoleType/Category" />
>                 </Record>
>                 <Record Type="UI.ChartDimensionAttributeType">
>                     <PropertyValue Property="Dimension" PropertyPath="Sales_CURRENCY"/>
>                     <PropertyValue Property="Role"
>                                    EnumMember="UI.ChartDimensionRoleType/Series"/>
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
>     title: 'View1',
>     chartType: #LINE,
>     measureAttributes: [
>       {
>         measure: 'SalesShare',
>         role: #AXIS_1,
> 		asDataPoint: true
>       }
>     ],
>     dimensionAttributes: [
>       {
>         dimension: 'Date',
>         role: #CATEGORY
>       },
>       {
>         dimension: 'Sales_CURRENCY',
>         role: #SERIES
>       }
>     ],
>     qualifier: 'Line-Time-Currency'
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
> UI.Chart #Line-Time-Currency : {
>     $Type : 'UI.ChartDefinitionType',
>     Title : 'View1',
>     ChartType : #Line,
>     MeasureAttributes : [
>         {
>             $Type : 'UI.ChartMeasureAttributeType',
>             Measure : SalesShare,
>             Role : #Axis1,
>             DataPoint : '@UI.DataPoint#Eval_by_CtryCurr-SalesShare'
>         }
>     ],
>     DimensionAttributes : [
>         {
>             $Type : 'UI.ChartDimensionAttributeType',
>             Dimension : Date,
>             Role : #Category
>         },
>         {
>             $Type : 'UI.ChartDimensionAttributeType',
>             Dimension : Sales_CURRENCY,
>             Role : #Series
>         }
>     ]
> }
> 
> ```



<a name="loioa7de88354fa649b5bdfa979b5e8691ed__section_swr_4lw_2hc"/>

## Configuring Time Granularity

You can also configure the granularity of time displayed on the chart using the `chartProperties.timeAxis.levels` property. The levels can include any combination of `year`, `month`, `day`, `hour`, or `minute` time units.

This property can be defined at the following levels:

-   Chart-level settings: Applies to the entire chart.

-   Tab-level settings. Defines the time-based drill down for individual tabs.




### Chart-Level Configuration

The following sample code shows the `chartProperties.timeAxis.levels` property added at the chart-level settings:

> ### Sample Code:  
> `manifest.json`
> 
> ```
> {
>       "sap.ovp": {
>             "cards": {
>                   "cardchartsline": {
>                         "model": "sales",
>                         "template": "sap.ovp.cards.v4.charts.analytical",
>                         "settings": {
>                               "entitySet": “salesSet",
>                               "chartProperties": {
>                                     "timeAxis": {
>                                           "levels": ["year", "month", "day", "hour", "minute"]
>                                     }
>                               }
>                         }
>                   }
>             }
>       }
> },
> 
> ```



### Tab-Level Configuration

The following sample code shows the `chartProperties.timeAxis.levels` property added at the tab-level setting:

> ### Sample Code:  
> `manifest.json`
> 
> ```
> "card_11_v4": {
>       "model": "sales",
>       "template": "sap.ovp.cards.v4.charts.analytical",
>       "settings": {
>             "title": "{{TIME_SERIES_ANALYTICAL_CARD}}",
>             "subTitle": "{{COMMON_ANALYTICAL_CARD_SUBTITLE_V4}}",
>             "entitySet": "salesSet",
>             "tabs": [
>             {
>                   "chartAnnotationPath": "com.sap.vocabularies.UI.v1.Chart#year",
>                   "value": "With CalenderYear"
>             },
>             {
>                   "chartAnnotationPath": "com.sap.vocabularies.UI.v1.Chart#year",
>                   "value": "With TimeAxis",
>                   "chartProperties": {
>                         "timeAxis": {
>                               "levels": ["year", "month", "day", "hour"]
>                         }
>                   }
>             }
>         ]
>     }
> }
> 
> ```

> ### Note:  
> The template setting in the `manifest.json` file depends on your OData version. Use `sap.ovp.cards.v4.<cardType>` for SAP Fiori elements for OData V4 and `sap.ovp.cards.<cardType>` for SAP Fiori elements for OData V2.

The levels can include any combination of the time units, such as `year`, `month`, `day`, `hour`, or `minute`, depending on the required granularity of your dataset. To display the data correctly on the chart, it is recommended to increase the granularity of the dataset until there are no repeating values.



<a name="loioa7de88354fa649b5bdfa979b5e8691ed__v4-time-series-chart"/>

## Additional Features in SAP Fiori Elements for OData V4

The time axis is also automatically enabled in the following two additional cases:

-   When the chart dimension's data type is `Edm.Date`.

-   When the chart dimension is of type `Edm.String` and is annotated with one of the following annotations:

    -   `@Common.IsFiscalYear`
    -   `@Common.IsFiscalYearPeriod`
    -   `@Common.IsCalendarYearMonth`
    -   `@Common.IsCalendarYearQuarter`
    -   `@Common.IsCalendarYearWeek`
    -   `@Common.IsCalendarDate`


