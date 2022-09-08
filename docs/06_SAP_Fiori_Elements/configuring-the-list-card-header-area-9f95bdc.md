<!-- loio9f95bdc13b6f410db22069ad8bb946c8 -->

# Configuring the List Card Header Area

Configure card header properties.



1.  Configure card title and subtitle in the descriptor file as shown here:

    Card `title` and `subTitle`

    ```
    	"sap.ovp": {
    		"globalFilterModel": "salesOrder",
    		"globalFilterEntityType": "GlobalFilters",
                  ...
                  ...
    		"cards": {
              "sap.ovp.test_card.card002": {
                "model": "salesOrder",
                "template": "sap.ovp.cards.list",
                "settings": {
                  "title": "Purchase History",
                  "subTitle": "SubTitle",
                  "entitySet": "SalesOrderSet",
                  ...
                  ...
                    }
                  ]
                }
              }
    ```

2.  Configure KPI value

    Descriptor Settings

    ```
    "sap.ovp": {//section for ovp-specific app descriptor settings
    	...
    
    	"kpiAnnotationPath":"com.sap.vocabularies.UI.v1.KPI#AllActualCosts", // Represents the KPI annotation path
    	
         ...
    }
    ```

    **KPI Annotation**

    > ### Sample Code:  
    > XML Annotation
    > 
    > ```xml
    > <Annotation Term="UI.KPI" Qualifier="AllActualCosts">
    >    <Record Type="UI.KPIType">
    >       <PropertyValue Property="Detail">
    >          <Record Type="UI.KPIDetailType">
    >             <PropertyValue Property="DefaultPresentationVariant" Path="@UI.PresentationVariant#Eval_by_Currency1" />
    >             <PropertyValue Property="AlternativePresentationVariants">
    >                <Collection>
    >                   <Path>@UI.PresentationVariant#Eval_by_Currency_Column</Path>
    >                </Collection>
    >             </PropertyValue>
    >             <PropertyValue Property="SemanticObject" String="Action" />
    >             <PropertyValue Property="Action" String="toappnavsample" />
    >          </Record>
    >       </PropertyValue>
    >       <PropertyValue Property="SelectionVariant" Path="@UI.SelectionVariant#Eval_by_Currency_1" />
    >       <PropertyValue Property="DataPoint" Path="@UI.DataPoint#Eval_by_Country_Generic" />
    >       <PropertyValue Property="ID" String="String for KPI Annotation" />
    >    </Record>
    > </Annotation>
    > ```

    > ### Sample Code:  
    > ABAP CDS Annotation
    > 
    > ```
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
    >     qualifier: 'AllActualCosts'
    >   }
    > ]
    > Eval_by_Country-Generic;
    > ```

    > ### Sample Code:  
    > CAP CDS Annotation
    > 
    > ```
    > UI.KPI #AllActualCosts : {
    >     $Type : 'UI.KPIType',
    >     Detail : {
    >         $Type : 'UI.KPIDetailType',
    >         DefaultPresentationVariant : ![@UI.PresentationVariant#Eval_by_Currency1],
    >         AlternativePresentationVariants : [
    >             ![@UI.PresentationVariant#Eval_by_Currency_Column]
    >         ],
    >         SemanticObject : 'Action',
    >         Action : 'toappnavsample',
    >     },
    >     SelectionVariant : ![@UI.SelectionVariant#Eval_by_Currency_1],
    >     DataPoint : ![@UI.DataPoint#Eval_by_Country-Generic],
    >     ID : 'String for KPI Annotation'
    > },
    > ```

    **Associated Presentation Variant Annotation**

    > ### Sample Code:  
    > XML Annotation
    > 
    > ```
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
    >                <PropertyValue Property="Descending" Bool="true" />
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
    > UI.PresentationVariant #Eval_by_Currency1 : {
    >     MaxItems : 5,
    >     GroupBy : [
    >         Country,
    >         Currency,
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

    **Associated Selection Variant Annotation**

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
    > @UI.SelectionVariant: [
    >   {
    >     qualifier: 'Eval_by_Currency_1',
    > 	parameters: [
    > 	  {name: 'PropertyName', value: 'CompanyCurrency' },
    > 	  { name: 'PropertyValue', value: 'EUR'}
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
    > },
    > ```

    Define the `DataPoint` annotation to complete configuring KPI information on the card header area. The following are the annotation properties:

    -   Add `Title` property to display as a title on the KPI header

    -   Add `Value` property to display KPI measure

    -   Add `ValueFormat` to define number format

    -   Add criticality to highlight the KPI measure value. You can define criticality as a path or enum value. The supported enum values are:

        -   `com.sap.vocabularies.UI.v1.CriticalityType/Neutral` - default neutral color is considered

        -   `com.sap.vocabularies.UI.v1.CriticalityType/Negative` - Red is considered

        -   `com.sap.vocabularies.UI.v1.CriticalityType/Critical` - Orange is considered

        -   `com.sap.vocabularies.UI.v1.CriticalityType/Positive` - Green is considered



    You can also define criticality using a path property that returns value:

    -   0 for Neutral- default neutral colour is considered

    -   1 for Negative – Red is considered

    -   2 for Critical – Orange is considered

    -   3 for Positive – Green is considered


    **Associated DataPoint annotation**

    > ### Sample Code:  
    > XML Annotation
    > 
    > ```xml
    > <Annotation Term="UI.DataPoint" Qualifier="Eval_by_Country_Generic">
    >    <Record Type="UI.DataPointType">
    >       <PropertyValue Property="Title" String="Sales India - Generic Card" />
    >       <PropertyValue Property="Value" Path="Sales" />
    >       <PropertyValue Property="ValueFormat">
    >          <Record>
    >             <PropertyValue Property="ScaleFactor" Decimal="2" />
    >             <PropertyValue Property="NumberOfFractionalDigits" Int="1" />
    >          </Record>
    >       </PropertyValue>
    >       <PropertyValue Property="CriticalityCalculation">
    >          <Record>
    >             <PropertyValue Property="ImprovementDirection" EnumMember="UI.ImprovementDirectionType/Minimize" />
    >             <PropertyValue Property="DeviationRangeHighValue" String="7300" />
    >             <PropertyValue Property="ToleranceRangeHighValue" String="7200" />
    >          </Record>
    >       </PropertyValue>
    >       <PropertyValue Property="TargetValue" String="2.000 " />
    >       <PropertyValue Property="TrendCalculation">
    >          <Record>
    >             <PropertyValue Property="ReferenceValue" String="5201680" />
    >             <PropertyValue Property="DownDifference" Decimal="10000000.0" />
    >          </Record>
    >       </PropertyValue>
    >    </Record>
    > </Annotation>
    > ```

    > ### Sample Code:  
    > ABAP CDS Annotation
    > 
    > ```
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
    > ```

    > ### Sample Code:  
    > CAP CDS Annotation
    > 
    > ```
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
    > },
    > 
    > ```

3.  Configure `tabs` property \(view switch\) in the descriptor settings to filter/view data at the card level.

    ```
    "cards": {
          "card00": {
            "model": "salesOrder",
            "template": "sap.ovp.cards.list",
            "settings": {
              "category" : "Sales Orders With Analytical Header",
              "listFlavor": "bar",
              "listType": "extended",
              "entitySet": "SalesOrderSet",
              "tabs": [
                    {
                        "annotationPath": "com.sap.vocabularies.UI.v1.LineItem#View1",
                        "selectionAnnotationPath": "com.sap.vocabularies.UI.v1.SelectionVariant#line1",
                        "presentationAnnotationPath": "com.sap.vocabularies.UI.v1.PresentationVariant#line",
                        "identificationAnnotationPath": "com.sap.vocabularies.UI.v1.Identification",
                        "dataPointAnnotationPath": "com.sap.vocabularies.UI.v1.DataPoint#line",
                        "value": "{{dropdown_value1}}"
                    },
                    {
                        "annotationPath": "com.sap.vocabularies.UI.v1.LineItem#View2",
                        "presentationAnnotationPath": "com.sap.vocabularies.UI.v1.PresentationVariant#customer",
                        "selectionAnnotationPath": "com.sap.vocabularies.UI.v1.SelectionVariant#SP2",
                        "identificationAnnotationPath": "com.sap.vocabularies.UI.v1.Identification#item2",
                        "dataPointAnnotationPath": "com.sap.vocabularies.UI.v1.DataPoint#line",
                        "value": "{{dropdown_value2}}"
                    },
    ```

4.  Configure list header navigation.

    The identification annotation lets you configure navigation \(from header and list area\) within an application.

    > ### Note:  
    > In case of list area navigation, the navigation settings configured using the `LineItem` annotation takes precedence over the navigation settings configured using the identification annotation.


