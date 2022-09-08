<!-- loio05887bd915b4410db59784d07de45446 -->

# Configuring the Table Card Header Area \(Optional\)

You can configure the header area from the app descriptor file and annotations.



1.  Configure card header properties \(card title, subtitle, KPI value, and view switch settings in the descriptor file as shown here\):

    -   Card `title` and `subTitle`

        ```
        "sap.ovp": {
        "globalFilterModel": "salesOrder",
        "globalFilterEntityType": "GlobalFilters",
              ...
              ...
        "cards": {
          "card014": {
            "model": "salesOrder",
            "template": "sap.ovp.cards.table",
            "settings": {
               "title": "Sales Forecast",
               "subTitle": "per Supplier",
               "entitySet": "SalesShare",
            ...
            ...
              }
            ]
          }
        },
        ```

    -   KPI information

        **Annotation Sample**

        ```
        "sap.ovp": {//section for ovp-specific app descriptor settings
        	...
        
        	"kpiAnnotationPath":"com.sap.vocabularies.UI.v1.KPI#AllActualCosts", // Represents the KPI annotation path
        	
             ...
        }
        }
        
        ```

        **`DataPoint` annotation**

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
        > ```

    -   View switch: Configuring this property allows you to define a dropdown list to filter/view data at the card level.

        ```
        "sap.ovp": {
        	"globalFilterModel": "salesOrder",
        	"globalFilterEntityType": "GlobalFilters",
        	"showDateInRelativeFormat": false,
        	"disableTableCardFlexibility": false,
        	"considerAnalyticalParameters": true,
        	"useDateRangeType": false,
        	"cards": {
             "card014": {
                 "model": "salesOrder",
                 "template": "sap.ovp.cards.table",
                 "settings": {
             "title": "Sales Forecast",
             "subTitle": "per Supplier",
             "valueSelectionInfo": "Value Selection Info",
             "entitySet": "SalesShare",
             "tabs": [
                   {
             "dynamicSubtitleAnnotationPath": "com.sap.vocabularies.UI.v1.HeaderInfo#dynamicSubtitle",
             "annotationPath": "com.sap.vocabularies.UI.v1.LineItem#View1",
             "selectionAnnotationPath": "com.sap.vocabularies.UI.v1.SelectionVariant#line1",
             "presentationAnnotationPath": "com.sap.vocabularies.UI.v1.PresentationVariant#line",
             "identificationAnnotationPath": "com.sap.vocabularies.UI.v1.Identification",
             "dataPointAnnotationPath": "com.sap.vocabularies.UI.v1.DataPoint#line",
             "value": "{{dropdown_value2}}"
                   },
                   {
             "dynamicSubtitleAnnotationPath": "com.sap.vocabularies.UI.v1.HeaderInfo#dynamicSubtitle",
             "annotationPath": "com.sap.vocabularies.UI.v1.LineItem#View4",
             "identificationAnnotationPath": "com.sap.vocabularies.UI.v1.Identification#item2",
             "dataPointAnnotationPath": "com.sap.vocabularies.UI.v1.DataPoint#line",
             "value": "{{dropdown_value4}}"
            }
           ]
          }
        },Descriptor
        									Settings
        ```


2.  Define the `DataPoint`Descriptor annotation to complete configuring KPI information on the card header area. The following are the annotation properties:

    -   Add `Title` property to configure the table column name, and also to display as a title on the KPI header

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





<a name="loio05887bd915b4410db59784d07de45446__section_kcq_1g2_2fb"/>

## Configuring the Table Header Navigation \(Optional\)

The identification annotation lets you configure navigation \(from header and table area\) within an application.

> ### Note:  
> In case of table area navigation, the navigation settings configured using the `LineItem` annotation takes precedence over the navigation settings configured using the identification annotation.

