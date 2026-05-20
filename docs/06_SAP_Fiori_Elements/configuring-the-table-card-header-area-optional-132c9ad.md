<!-- loio132c9adcbfed4f0dbf909485a3cb9ba9 -->

# Configuring the Table Card Header Area \(Optional\)

You can configure the header area using the annotations and `manifest.json` file.



> ### Note:  
> This topic is relevant to SAP Fiori elements for OData V2. For information about SAP Fiori elements for OData V4, see [Configuring the Table Card Header Area \(Optional\)](configuring-the-table-card-header-area-optional-05887bd.md).



1.  Configure card header properties \(card title, subtitle, KPI value, and view switch settings\) in the `manifest.json` file, as shown in the following sample code:

    -   Card `title` and `subTitle`

        > ### Sample Code:  
        > `manifest.json`
        > 
        > ```
        > "sap.ovp": {
        > "globalFilterModel": "salesOrder",
        > "globalFilterEntitySet": "GlobalFilters",
        >       ...
        >       ...
        > "cards": {
        >   "card014": {
        >     "model": "salesOrder",
        >     "template": "sap.ovp.cards.table",
        >     "settings": {
        >        "title": "Sales Forecast",
        >        "subTitle": "per Supplier",
        >        "entitySet": "SalesShare",
        >        "enableTextWrapping": true //The default value is false
        >     ...
        >     ...
        > 
        >       }
        >     ]
        >   }
        > },
        > ```

    -   KPI information

        **Annotation Sample**

        > ### Sample Code:  
        > ```
        > "sap.ovp": {//section for ovp-specific app descriptor settings
        > 	...
        > 	"kpiAnnotationPath":"com.sap.vocabularies.UI.v1.KPI#AllActualCosts", // Represents the KPI annotation path	
        >      ...
        > }
        > }
        > ```

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

        > ### Sample Code:  
        > ```
        > "sap.ovp": {
        >     "globalFilterModel": "salesOrder",
        >     "globalFilterEntitySet": "GlobalFilters",
        >     "showDateInRelativeFormat": false,
        >     "disableTableCardFlexibility": false,
        >     "considerAnalyticalParameters": true,
        >     "useDateRangeType": false,
        >     "cards": {
        >         "card014": {
        >             "model": "salesOrder",
        >             "template": "sap.ovp.cards.table",
        >             "settings": {
        >                 "title": "Sales Forecast",
        >                 "subTitle": "per Supplier",
        >                 "valueSelectionInfo": "Value Selection Info",
        >                 "entitySet": "SalesShare",
        >                 "enableTextWrapping": true //The default value is false
        >                 "tabs": [
        >                     {
        >                         "dynamicSubtitleAnnotationPath": "com.sap.vocabularies.UI.v1.HeaderInfo#dynamicSubtitle",
        >                         "annotationPath": "com.sap.vocabularies.UI.v1.LineItem#View1",
        >                         "selectionAnnotationPath": "com.sap.vocabularies.UI.v1.SelectionVariant#line1",
        >                         "presentationAnnotationPath": "com.sap.vocabularies.UI.v1.PresentationVariant#line",
        >                         "identificationAnnotationPath": "com.sap.vocabularies.UI.v1.Identification",
        >                         "dataPointAnnotationPath": "com.sap.vocabularies.UI.v1.DataPoint#line",
        >                         "value": "{{dropdown_value2}}"
        >                     },
        >                     {
        >                         "dynamicSubtitleAnnotationPath": "com.sap.vocabularies.UI.v1.HeaderInfo#dynamicSubtitle",
        >                         "annotationPath": "com.sap.vocabularies.UI.v1.LineItem#View4",
        >                         "identificationAnnotationPath": "com.sap.vocabularies.UI.v1.Identification#item2",
        >                         "dataPointAnnotationPath": "com.sap.vocabularies.UI.v1.DataPoint#line",
        >                         "value": "{{dropdown_value4}}"
        >                     }
        >                 ]
        >             }
        >         }
        >     }
        > }
        > ```


2.  Define the `DataPoint` annotation to complete configuring KPI information on the card header area. The following annotation properties are added:

    -   `Title` - Configure the table column name, and also to display as a title on the KPI header.

    -   `Value` - Displays KPI measure.

    -   `ValueFormat` - Defines number format.

    -   Criticality - Highlights the KPI measure value. You can define criticality as a path or `enum` value.


    **Criticality using enum values**


    <table>
    <tr>
    <th valign="top">

    Enum Value
    
    </th>
    <th valign="top">

    Color
    
    </th>
    </tr>
    <tr>
    <td valign="top">
    
    `com.sap.vocabularies.UI.v1.CriticalityType/Neutral`
    
    </td>
    <td valign="top">
    
    Default neutral color
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `com.sap.vocabularies.UI.v1.CriticalityType/Negative`
    
    </td>
    <td valign="top">
    
    Red
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `com.sap.vocabularies.UI.v1.CriticalityType/Negative`
    
    </td>
    <td valign="top">
    
    Orange
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `com.sap.vocabularies.UI.v1.CriticalityType/Negative`
    
    </td>
    <td valign="top">
    
    Green
    
    </td>
    </tr>
    </table>
    
    **Criticality using a path property**


    <table>
    <tr>
    <th valign="top">

    Return Value
    
    </th>
    <th valign="top">

    Criticality
    
    </th>
    <th valign="top">

    Color
    
    </th>
    </tr>
    <tr>
    <td valign="top">
    
    `0`
    
    </td>
    <td valign="top">
    
    Neutral
    
    </td>
    <td valign="top">
    
    Default neutral color
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `1`
    
    </td>
    <td valign="top">
    
    Negative
    
    </td>
    <td valign="top">
    
    Red
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `2`
    
    </td>
    <td valign="top">
    
    Critical
    
    </td>
    <td valign="top">
    
    Orange
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `3`
    
    </td>
    <td valign="top">
    
    Positive
    
    </td>
    <td valign="top">
    
    Green
    
    </td>
    </tr>
    </table>
    



<a name="loio132c9adcbfed4f0dbf909485a3cb9ba9__section_kcq_1g2_2fb"/>

## Configuring the Table Header Navigation \(Optional\)

The identification annotation lets you configure navigation \(from header and table area\) within an application.

> ### Note:  
> In case of table area navigation, the navigation settings configured using the `LineItem` annotation takes precedence over the navigation settings configured using the identification annotation.

