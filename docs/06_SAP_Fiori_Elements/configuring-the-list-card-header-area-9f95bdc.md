<!-- loio9f95bdc13b6f410db22069ad8bb946c8 -->

# Configuring the List Card Header Area

You can configure several properties of a list card header, including the title, subtitle, KPI value, view switch, and navigation.



## Card Title and Subtitle

You can configure the title and subtitle of a list card in the `manifest.json` file, as shown in the following sample code:

> ### Sample Code:  
> `manifest.json`
> 
> ```
> 
>   "sap.ovp": {
>     "globalFilterModel": "salesOrder",
>     "globalFilterEntitySet": "GlobalFilters",
>               ...
>               ...
>     "cards": {
>       "sap.ovp.test_card.card002": {
>         "model": "salesOrder",
>         "template": "sap.ovp.cards.v4.list",
>         "settings": {
>           "title": "Purchase History",
>           "subTitle": "SubTitle",
>           "entitySet": "SalesOrderSet"
>           "enableTextWrapping": true //The default value is false
> 
>         }
>       }
>     }
>   }
> }
> ```



## View Switch

You can configure the view switch using the ***tabs*** property in the manifest settings to filter and view data at the card level, as shown in the following sample code:

> ### Sample Code:  
> ```
> "cards": {
>       "card00": {
>         "model": "salesOrder",
>         "template": "sap.ovp.cards.list",
>         "settings": {
>           "category" : "Sales Orders With Analytical Header",
>           "listFlavor": "bar",
>           "listType": "extended",
>           "entitySet": "SalesOrderSet",
>           "enableTextWrapping": true //The default value is false
>           "tabs": [
>                 {
>                     "annotationPath": "com.sap.vocabularies.UI.v1.LineItem#View1",
>                     "selectionAnnotationPath": "com.sap.vocabularies.UI.v1.SelectionVariant#line1",
>                     "presentationAnnotationPath": "com.sap.vocabularies.UI.v1.PresentationVariant#line",
>                     "identificationAnnotationPath": "com.sap.vocabularies.UI.v1.Identification",
>                     "dataPointAnnotationPath": "com.sap.vocabularies.UI.v1.DataPoint#line",
>                     "value": "{{dropdown_value1}}"
>                 },
>                 {
>                     "annotationPath": "com.sap.vocabularies.UI.v1.LineItem#View2",
>                     "presentationAnnotationPath": "com.sap.vocabularies.UI.v1.PresentationVariant#customer",
>                     "selectionAnnotationPath": "com.sap.vocabularies.UI.v1.SelectionVariant#SP2",
>                     "identificationAnnotationPath": "com.sap.vocabularies.UI.v1.Identification#item2",
>                     "dataPointAnnotationPath": "com.sap.vocabularies.UI.v1.DataPoint#line",
>                     "value": "{{dropdown_value2}}"
>                 },
> ```

> ### Note:  
> The template setting in the `manifest.json` file depends on your OData version. Use `sap.ovp.cards.v4.<cardType>` for SAP Fiori elements for OData V4 and `sap.ovp.cards.<cardType>` for SAP Fiori elements for OData V2.



## Configuring KPI Values

You configure a KPI tag in the list card header by setting the `kpiAnnotationPath` property in the`manifest.json` file, then defining a `KPI` annotation that references a `DataPoint`, a `SelectionVariant`, and a `PresentationVariant`.

> ### Sample Code:  
> `manifest.json`
> 
> ```
> "sap.ovp": {
>     ...
>     "kpiAnnotationPath": "com.sap.vocabularies.UI.v1.KPI#AllActualCosts", // Represents the KPI annotation path
>     ...
> }
> 
> ```



### KPI Annotation

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



### Associated Presentation Variant Annotation

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
> ```

> ### Sample Code:  
> CAPCDS Annotation
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



### Associated Selection Variant Annotation

> ### Sample Code:  
> XML Annotation
> 
> ```
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



### Associated Data Point Annotation

The `DataPoint` annotation completes configuring KPI information on the card header area. It supports the following properties:


<table>
<tr>
<th valign="top">

Property

</th>
<th valign="top">

Description

</th>
</tr>
<tr>
<td valign="top">

`Title`

</td>
<td valign="top">

Title shown on the KPI header.

</td>
</tr>
<tr>
<td valign="top">

`Value`

</td>
<td valign="top">

Property that supplies the KPI measure.

</td>
</tr>
<tr>
<td valign="top">

`ValueFormat`

</td>
<td valign="top">

Number format settings \(scale factor, fractional digits\).

</td>
</tr>
<tr>
<td valign="top">

`Criticality` or `CriticalityCalculation`

</td>
<td valign="top">

Color highlighting based on the value.

</td>
</tr>
</table>

You can specify criticality either as an `enum` value or as a path that returns a numeric criticality code.

**Static Enum Values**


<table>
<tr>
<th valign="top">

`Enum` value

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

`com.sap.vocabularies.UI.v1.CriticalityType/Critical`

</td>
<td valign="top">

Orange

</td>
</tr>
<tr>
<td valign="top">

`com.sap.vocabularies.UI.v1.CriticalityType/Positive`

</td>
<td valign="top">

Green

</td>
</tr>
</table>

**Path-Based Numeric Values**


<table>
<tr>
<th valign="top">

Return value

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

> ### Sample Code:  
> XML Annotation
> 
> ```
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
> ```



<a name="loio9f95bdc13b6f410db22069ad8bb946c8__section_zqb_w4c_mfc"/>

## Configuring List Header Navigation

You can configure the navigation from the card header and content area using the `Identification` annotation. annotation.

> ### Note:  
> For navigation from the list area, the navigation settings configured using the `LineItem` annotation takes precedence over those configured using the `Identification` annotation.



## Additional Features in SAP Fiori Elements for OData V2



### Configuring the Header Counter

You can configure a counter on the card header using the `defaultCountMode` property in `manifest.json` file.

> ### Sample Code:  
> `manifest.json`
> 
> ```
> "Card_Model_Name": {
>                 "settings": {
>                     "defaultCountMode": "None"
>                 }
>             }
> ```

**Related Information**  


[Configuring the List Card](configuring-the-list-card-7f65716.md "You can configure several attributes of a list card, including text formatting, filtering, sorting.")

[Configuring the List Area](configuring-the-list-area-f57373d.md "You can configure the list area by defining values, navigation properties, and numeric data points and contact information.")

