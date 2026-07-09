<!-- loio05887bd915b4410db59784d07de45446 -->

# Configuring the Table Card Header Area \(Optional\)

You can optionally configure the header area including the title, subtitle, KPI value, view switch, and navigation of a table card using the annotations and `manifest.json` file.



## Card Title and Subtitle

The following code sample shows how to define the title and subtitle for a table card in the `manifest.json` file:

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
>     "template": "sap.ovp.cards.v4.table",
>     "settings": {
>        "title": "Sales Forecast",
>        "subTitle": "per Supplier",
>        "entitySet": "SalesShare",
>        "enableTextWrapping": true //The default value is false
>     ...
>     ...
>       }
>     ]
>   }
> },
> ```

> ### Note:  
> The template setting in the `manifest.json` file depends on your OData version. Use `sap.ovp.cards.v4.<cardType>` for SAP Fiori elements for OData V4 and `sap.ovp.cards.<cardType>` for SAP Fiori elements for OData V2.



## View Switch

The following example shows how to configure multiple tabs in a table card using the `tabs` array within the card settings:

> ### Sample Code:  
> `manifest.json`
> 
> ```
> "sap.ovp": {
>     "globalFilterModel": "salesOrder",
>     "globalFilterEntitySet": "GlobalFilters",
>     "showDateInRelativeFormat": false,
>     "disableTableCardFlexibility": false,
>     "useDateRangeType": false,
>     "cards": {
>         "card014": {
>             "model": "salesOrder",
>             "template": "sap.ovp.cards.v4.table",
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



## Configuring KPI Information

You add a KPI tag to the card header by setting the `kpiAnnotationPath` property in `manifest.json`, then defining a corresponding `DataPoint` annotation that supplies the value, formatting, and criticality.

> ### Sample Code:  
> `manifest.json`
> 
> ```
> "sap.ovp": {//section for ovp-specific app descriptor settings
> 	...
> 	"kpiAnnotationPath":"com.sap.vocabularies.UI.v1.KPI#AllActualCosts", // Represents the KPI annotation path	
>      ...
> }
> }
> ```

The `DataPoint` annotation defines the following properties:

-   `Title` : KPI title shown in the header.
-   `Value`: Property that provides the KPI value.
-   `ValueFormat`: Number format settings such as scale factor, fractional digits.
-   `Criticality` or `CriticalityCalculation`: Color highlighting based on the value.

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

Criticality color mapping: You can specify criticality either as an `enum` value or as a path that returns a numeric criticality code.

**Criticality using static enum values**


<table>
<tr>
<th valign="top">

`Enum` Value

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

**Criticality using a path-based numeric values**


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



## Configuring the Table Header Navigation \(Optional\)

The identification annotation lets you configure navigation \(from header and table area\) within an application.

> ### Note:  
> In case of table area navigation, the navigation settings configured using the `LineItem` annotation takes precedence over the navigation settings configured using the identification annotation.

**Related Information**  


[Table Cards](table-cards-167bf7c.md "You can use a table card to display a list of records in a three-column table layout.")

[Configuring the Table Area](configuring-the-table-area-b408bfb.md "You can configure the columns of a table card, their header and valies, by using the com.sap.vocabularies.UI.v1.LineItem annotation.")

[Configuring the Table Card](configuring-the-table-card-9bc298e.md "You can configure the content on the table area with text alignment, filtering or grouping information.")

