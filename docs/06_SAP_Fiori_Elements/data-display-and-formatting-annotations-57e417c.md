<!-- loio57e417c110ca4f89ba0ed58ff298e3c0 -->

# Data Display and Formatting Annotations

You can define the structure and formatting of card content, including headers, fields, lists, groups, and data values.



## Header and Display

These annotations control what users see first on a card such as title, subtitle, image, and individual data values. Use them when you need to define the visual identity of an entity or display field values with optimal formatting.



### Defining the Entity Header

You can use `com.sap.vocabularies.UI.v1.HeaderInfo` to define the header information of an entity. The following properties are supported:

-   `TypeName`: Singular name of the entity type

-   `TypeNamePlural`: Plural name of the entity type

-   `ImageUrl`: URL of the header image
-   `Title`: Main title
-   `Description`: Subtitle or description text.


> ### Note:  
> The value of `dynamicSubtitleAnnotationPath` is derived from the value of the `path`, if pointed to the `manifest.json` file. For more information, see [Configuring the Manifest for the Overview Page](configuring-the-manifest-for-the-overview-page-f194b41.md).

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotation 
> 	    Term="com.sap.vocabularies.UI.v1.HeaderInfo"
>     	Qualifier="dynamicSubtitle">
> 		<Record>
>         	<PropertyValue Property="TypeName" String="Product"/>
>         	<PropertyValue Property="TypeNamePlural" String="Products"/>
>         	<PropertyValue Property="Title">
>             	<Record Type="com.sap.vocabularies.UI.v1.DataField">
>                 	<PropertyValue Property="Value" Path="Name"></PropertyValue>
>             	</Record>
>         	</PropertyValue>
>         	<PropertyValue Property="Description">
>             	<Record Type="com.sap.vocabularies.UI.v1.DataField">
>                 	<PropertyValue Path="Description" Property="Value"/>
>            	 </Record>
>         	</PropertyValue>
>         	<PropertyValue Property="ImageUrl" Path="ProductPicUrl"/>
>     	</Record>
> 	</Annotation>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> 
> @UI.headerInfo: {
>   typeName: 'Product',
>   typeNamePlural: 'Products',
>   title: {
>     value: 'NAME',
>     type: #STANDARD
>   },
>   description: {
>     value: 'DESCRIPTION',
>     type: #STANDARD
>   },
>   imageUrl: 'PRODUCTPICURL'
> }
> annotate view VIEWNAME with { 
> 
> }
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> 
> UI.HeaderInfo #dynamicSubtitle : {
>     TypeName : 'Product',
>     TypeNamePlural : 'Products',
>     Title : {
>         $Type : 'UI.DataField',
>         Value : Name
>     },
>     Description : {
>         $Type : 'UI.DataField',
>         Value : Description
>     },
>     ImageUrl : ProductPicUrl
> }
> ```



### Displaying a Simple Text Field

You can use the `com.sap.vocabularies.UI.v1.DataField` annotation to display a simple text field. The following properties are supported:

-   `Label`: The label of the field

-   `Value`: The value of the field, usually pointing to a path in the metadata


> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Record Type="com.sap.vocabularies.UI.v1.DataField">
>     <PropertyValue Property="Label" String="Total Sum"/>
>     <PropertyValue Property="Value" Path="TotalSum"/>
> </Record>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> 
> { label: 'Total Sum' }
>   TOTALSUM;
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> 
> {
>     $Type : 'UI.DataField',
>     Label : 'Total Sum',
>     Value : TotalSum
> }
> ```



### Referencing Another Annotation

You can use `com.sap.vocabularies.UI.v1.DataFieldForAnnotation`to reference a different annotation term using the `Target` property. The following properties are supported:

-   `Label`: The label of the field

-   `Target`: Reference to a different term in the annotation document


> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Record Type="com.sap.vocabularies.UI.v1.DataFieldForAnnotation" Qualifier="WeightMeasure">
>     <PropertyValue Property="Label" String="Weight Measure"/>
>     <PropertyValue Property="Target" AnnotationPath="@com.sap.vocabularies.UI.v1.DataPoint#WeightMeasure"/>
> </Record>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> 
>   {
>     label: 'Weight Measure',
>     valueQualifier: 'WeightMeasure',
>     type: #AS_DATAPOINT
>   }
>   Weight;
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> 
> {
>     $Type : 'UI.DataFieldForAnnotation',
>     Label : 'Weight Measure',
>     Target : '@UI.DataPoint#WeightMeasure'
> }
> ```



### Displaying Values with Formatting and Criticality

You can use `com.sap.vocabularies.UI.v1.DataPoint` annotation to display values with formatting, criticality, or trend information. The following properties are supported:

-   `Title` – Used as the column name in table cards.

-   `Value` – The field to display.

-   `ValueFormat` – Used with `NumberFormat` to format decimal values.

-   `com.sap.vocabularies.UI.v1.NumberFormat`:

    -   `ScaleFactor` – Scale factor for large numbers.

    -   `NumberOfFractionalDigits` – Number of decimal digits to display.


-   `com.sap.vocabularies.UI.v1.Criticality` – Highlights the value with a static color \(`Neutral`, `Negative`, `Critical`, `Positive`\).

-   `com.sap.vocabularies.UI.v1.CriticalityCalculation` – Calculates color dynamically based on `ImprovementDirection` \(`Minimize`, `Target`, `Maximize`\).

-   `com.sap.vocabularies.UI.v1.TargetValue` – Reference value for trend calculation.


> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotation Term="UI.DataPoint" Qualifier="Eval_by_Country">
> 	<Record Type="UI.DataPointType">
> 		<PropertyValue Property="Title" String="Sales India - Line Card" />
> 		<PropertyValue Property="Value" Path="Sales" />
> 		<PropertyValue Property="ValueFormat">
> 			<Record>
> 				<PropertyValue Property="ScaleFactor" IntDecimal="0" />
> 				<PropertyValue Property="NumberOfFractionalDigits"
> 					Int="3" />
> 			</Record>
> 		</PropertyValue>
> 		<PropertyValue Property="CriticalityCalculation">
> 			<Record>
> 				<PropertyValue Property="ImprovementDirection"
> 					EnumMember="UI.ImprovementDirectionType/Minimizinge" />
> 				<PropertyValue Property="DeviationRangeHighValue"
> 					String="7300" />
> 				<PropertyValue Property="ToleranceRangeHighValue"
> 					String="7200" />
> 			</Record>
> 		</PropertyValue>
> 		<PropertyValue Property="TargetValue" String="2.000 " />
> 		<PropertyValue Property="TrendCalculation">
> 			<Record>
> 				<PropertyValue Property="ReferenceValue" String="5201680" />
> 				<PropertyValue Property="DownDifference" IntDecimal="10000000.0" />
> 			</Record>
> 		</PropertyValue>
> 	</Record>
> </Annotation>
> 
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> 
> @UI.dataPoint: { 
> 	 title: 'Sales India - Line Card',
> 	 valueFormat: { scaleFactor: 0,
> 	 numberOfFractionalDigits: 3 },
> 	 criticalityCalculation: { 
> 	   improvementDirection: #MINIMIZE,
> 	   deviationRangeHighValue: 7300,
> 	   toleranceRangeHighValue: 7200
> 	 },
> 	 targetValue: 2.000,
> 	 trendCalculation: { 
> 	 referenceValue: 'refValElement', 
> 	 downDifference: 10000000.0 }
> }
> Sales;
> 
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> 
> UI.DataPoint #Eval_by_Country : {
>     $Type : 'UI.DataPointType',
>     Title : 'Sales India - Line Card',
>     Value : Sales,
>     NumberFormat : {
>         ScaleFactor : 0,
>         NumberOfFractionalDigits : 3
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



## Lists and Groups

These annotations helps to organize multiple fields into structural layouts. Use them when a card needs to display tablular data, grouped attributes, or multi-section content rather than a single value.



### Displaying Fields in Lists and Tables

You can use the `com.sap.vocabularies.UI.v1.LineItem` annotation to define fields shown in lists or tables. The following record types are supported:

-   `com.sap.vocabularies.UI.v1.DataField`
-   `com.sap.vocabularies.UI.v1.DataFieldForAnnotation`
-   `com.sap.vocabularies.UI.v1.DataFieldForIntentBasedNavigation` 
-   `com.sap.vocabularies.UI.v1.DataFieldWithUrl`

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotation Term="com.sap.vocabularies.UI.v1.LineItem">
>     <Collection>
>         <Record Type="com.sap.vocabularies.UI.v1.DataField">
>             <PropertyValue Property="Label" String="Sales Order ID"/>
>             <PropertyValue Property="Value" Path="SalesOrderID"/>
>         </Record>
>         <Record Type="com.sap.vocabularies.UI.v1.DataField">
>             <PropertyValue Property="Label" String="Customer Name"/>
>             <PropertyValue Property="Value" Path="CustomerName"/>
>         </Record>
>         <Record Type="com.sap.vocabularies.UI.v1.DataField">
>             <PropertyValue Property="Label" String="Status"/>
>             <PropertyValue Property="Value" Path="Status"/>
>         </Record>
>         <Record Type="com.sap.vocabularies.UI.v1.DataField">
>             <PropertyValue Property="Label" String="Note"/>
>             <PropertyValue Property="Value" Path="Note"/>
>         </Record>
>         <Record Type="com.sap.vocabularies.UI.v1.DataFieldForAnnotation" Qualifier="TotalSum">
>             <PropertyValue Property="Label" String="Total Sum"/>
>             <PropertyValue Property="Target" AnnotationPath="@com.sap.vocabularies.UI.v1.DataPoint#TotalSum"/>
>         </Record>
>         <Record Type="com.sap.vocabularies.UI.v1.DataFieldForAnnotation" Qualifier="NetSum">
>             <PropertyValue Property="Label" String="Net Sum"/>
>             <PropertyValue Property="Target" AnnotationPath="@com.sap.vocabularies.UI.v1.DataPoint#NetSum"/>
>         </Record>
>         <Record Type="com.sap.vocabularies.UI.v1.DataFieldForAnnotation" Qualifier="Tax">
>             <PropertyValue Property="Label" String="Tax"/>
>             <PropertyValue Property="Target" AnnotationPath="@com.sap.vocabularies.UI.v1.DataPoint#Tax"/>
>         </Record>
>         <Record Type="com.sap.vocabularies.UI.v1.DataFieldForIntentBasedNavigation">
>             <PropertyValue Property="SemanticObject" String="Action"/>
>             <PropertyValue Property="Action" String="toappnavsample2"/>
>             <PropertyValue Property="Label" String="SO Navigation (M)"/>
>             <Annotation Term="com.sap.vocabularies.UI.v1.Importance" EnumMember="com.sap.vocabularies.UI.v1.ImportanceType/Medium"/>
>         </Record>
>     </Collection>
> </Annotation>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> 
> @UI.lineItem: [
>   {
>     label: 'Sales Order ID',
>     position: 10
>   }
> ]
> SALESORDERID;
> 
> @UI.lineItem: [
>   {
>     label: 'Customer Name',
>     position: 20
>   }
> ]
> CUSTOMERNAME;
> 
> @UI.lineItem: [
>   {
>     label: 'Status',
>     position: 30
>   }
> ]
> STATUS;
> 
> @UI.lineItem: [
>   {
>     label: 'Note',
>     position: 40
>   }
> ]
> NOTE;
> 
> @UI.lineItem: [
>   {
>     label: 'Total Sum',
>     valueQualifier: 'TotalSum',
>     type: #AS_DATAPOINT,
>     position: 50 
>   },
>   {
>     label: 'Net Sum',
>     valueQualifier: 'NetSum',
>     type: #AS_DATAPOINT,
>     position: 60
>   },
>   {
>     label: 'Tax',
>     valueQualifier: 'Tax',
>     type: #AS_DATAPOINT,
>     position: 70
>   },
>   {
>     importance: #MEDIUM,
>     semanticObjectAction: 'toappnavsample2',
>     label: 'SO Navigation (M)',
>     type: #FOR_INTENT_BASED_NAVIGATION,
>     position: 80
>   }
> ]
> PROPERT_NAME;
> 
> @Consumption.semanticObject: 'Action'
> annotate view VIEWNAME with { }
> 
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> 
> UI.LineItem : [
>     {
>         $Type : 'UI.DataField',
>         Label : 'Sales Order ID',
>         Value : SalesOrderID
>     },
>     {
>         $Type : 'UI.DataField',
>         Label : 'Customer Name',
>         Value : CustomerName
>     },
>     {
>         $Type : 'UI.DataField',
>         Label : 'Status',
>         Value : Status
>     },
>     {
>         $Type : 'UI.DataField',
>         Label : 'Note',
>         Value : Note
>     },
>     {
>         $Type : 'UI.DataFieldForAnnotation',
>         Label : 'Total Sum',
>         Target : '@UI.DataPoint#TotalSum'
>     },
>     {
>         $Type : 'UI.DataFieldForAnnotation',
>         Label : 'Net Sum',
>         Target : '@UI.DataPoint#NetSum'
>     },
>     {
>         $Type : 'UI.DataFieldForAnnotation',
>         Label : 'Tax',
>         Target : '@UI.DataPoint#Tax'
>     },
>     {
>         $Type : 'UI.DataFieldForIntentBasedNavigation',
>         SemanticObject : 'Action',
>         Action : 'toappnavsample2',
>         Label : 'SO Navigation (M)',
>         ![@UI.Importance] : #Medium
>     }
> ]
> 
> ```



### Grouping Data Fields Under a Label

You can use the `com.sap.vocabularies.UI.v1.FieldGroup` annotation to group data fields under a label. The group consists of a label and a collection of `com.sap.vocabularies.UI.v1.DataFieldAbstract` fields.

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotation Term="com.sap.vocabularies.UI.v1.FieldGroup" Qualifier="Amounts">
>     <Record Type="com.sap.vocabularies.UI.v1.FieldGroupType">
>         <PropertyValue Property="Label" String="Amounts"/>
>         <PropertyValue Property="Data">
>             <Collection>
>                 <Record Type="com.sap.vocabularies.UI.v1.DataField">
>                     <PropertyValue Property="Label" String="Total Sum"/>
>                     <PropertyValue Property="Value" Path="TotalSum"/>
>                 </Record>
>                 <Record Type="com.sap.vocabularies.UI.v1.DataField">
>                     <PropertyValue Property="Label" String="Net Sum"/>
>                     <PropertyValue Property="Value" Path="NetSum"/>
>                 </Record>
>                 <Record Type="com.sap.vocabularies.UI.v1.DataField">
>                     <PropertyValue Property="Label" String="Tax"/>
>                     <PropertyValue Property="Value" Path="Tax"/>
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
> @UI.fieldGroup: [
>   {
>     label: 'Total Sum',
>     position: 10,
>     qualifier: 'Amounts',
>     groupLabel: 'Amounts'
>   }
> ]
> TOTALSUM;
> 
> @UI.fieldGroup: [
>   {
>     label: 'Net Sum',
>     position: 20,
>     qualifier: 'Amounts'
>   }
> ]
> NETSUM;
> 
> @UI.fieldGroup: [
>   {
>     label: 'Tax',
>     position: 30,
>     qualifier: 'Amounts'
>   }
> ]
> TAX;
> 
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> 
> UI.FieldGroup #Amounts : {
>     $Type : 'UI.FieldGroupType',
>     Label : 'Amounts',
>     Data : [
>         {
>             $Type : 'UI.DataField',
>             Label : 'Total Sum',
>             Value : TotalSum
>         },
>         {
>             $Type : 'UI.DataField',
>             Label : 'Net Sum',
>             Value : NetSum
>         },
>         {
>             $Type : 'UI.DataField',
>             Label : 'Tax',
>             Value : Tax
>         }
>     ]
> }
> 
> ```



### Grouping Content with Facets

You can use the `com.sap.vocabularies.UI.v1.Facets` annotation to define a collection of facets.

> ### Note:  
> Overview pages only support `com.sap.vocabularies.UI.v1.ReferenceFacet` record type.

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotation Term="com.sap.vocabularies.UI.v1.Facets">
>     <Collection>
>         <Record Type="com.sap.vocabularies.UI.v1.ReferenceFacet">
>             <Annotation Term="com.sap.vocabularies.UI.v1.IsSummary"/>
>             <PropertyValue Property="Label" String="Amounts"/>
>             <PropertyValue Property="Target" AnnotationPath="@com.sap.vocabularies.UI.v1.FieldGroup#Amounts"/>
>         </Record>
>         <Record Type="com.sap.vocabularies.UI.v1.ReferenceFacet">
>             <Annotation Term="com.sap.vocabularies.UI.v1.IsSummary"/>
>             <PropertyValue Property="Label" String="Note1"/>
>             <PropertyValue Property="Target" AnnotationPath="@com.sap.vocabularies.UI.v1.FieldGroup#Status"/>
>         </Record>
>     </Collection>
> </Annotation>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> 
> @UI.Facet: [
>   {
>     isSummary: true,
>     label: 'Amounts',
>     targetQualifier: 'Amounts',
>     type: #FIELDGROUP_REFERENCE,
>     purpose: #STANDARD
>   },
>   {
>     isSummary: true,
>     label: 'Note1',
>     targetQualifier: 'Status',
>     type: #FIELDGROUP_REFERENCE,
>     purpose: #STANDARD
>   }
> ]
> PROPERT_NAME;
> 
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> 
> UI.Facets : [
>     {
>         $Type : 'UI.ReferenceFacet',
>         Label : 'Amounts',
>         Target : '@UI.FieldGroup#Amounts',
>         ![@UI.IsSummary]
>     },
>     {
>         $Type : 'UI.ReferenceFacet',
>         Label : 'Note1',
>         Target : '@UI.FieldGroup#Status',
>         ![@UI.IsSummary]
>     }
> ]
> ```



## Helpers

These annotations support special formatting and privacy scenarios that apply across multiple cards. Use them when you need to control how text values are displayed, or when handling sensitive data.



### Configuring Text Arrangement

You can use the `com.sap.vocabularies.UI.v1.TextArrangement` \(used with `com.sap.vocabularies.Common.v1.Text`\) annotation to format how a code value and its descriptive text appear together.

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotations xmlns="http://docs.oasis-open.org/odata/ns/edm" Target="GWSAMPLE_BASIC.SalesOrder/CustomerID">
>     <Annotation Term="com.sap.vocabularies.Common.v1.Text" Path="Supplier_Name"/>
>     <Annotation Term="com.sap.vocabularies.UI.v1.TextArrangement" EnumMember="com.sap.vocabularies.UI.v1.TextArrangementType/TextLast" />
> </Annotations>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> 
> annotate view SALESORDER with {
>   @UI.TextArrangement: #TEXT_LAST
>   customerid;
> }
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> 
> annotate GWSAMPLE_BASIC.SalesOrder with {
>   @Common.Text : Supplier_Name
>   @UI.TextArrangement : #TextLast
>   CustomerID
> };
> ```

In the preceding code sample, the text `Customer` is bound to the `ContactID` property. The result depends on the text arrangement type:


<table>
<tr>
<th valign="top">

Text Arrangement Type

</th>
<th valign="top">

Result

</th>
</tr>
<tr>
<td valign="top">

`TextLast` 

</td>
<td valign="top">

ContractID \(Customer\)

</td>
</tr>
<tr>
<td valign="top">

`TextFirst` 

</td>
<td valign="top">

Customer \(ContractID\)

</td>
</tr>
<tr>
<td valign="top">

`TextOnly` 

</td>
<td valign="top">

Customer

</td>
</tr>
</table>



### Configuring Properties as Potentially Sensitive Data

You can use the `com.sap.vocabularies.PersonalData.v1.IsPotentiallySensitive` annotation to mark a property as potentially sensitive personal data. Configure the target property and set it as potentially sensitive

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotations Target="SEPMRA_OVW.SEPMRA_C_OVW_SalesOrderType/CompanyCode">
>            <Annotation Term="com.sap.vocabularies.PersonalData.v1.IsPotentiallySensitive"/>
> </Annotations>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> 
> @Semantics.personalData.isPotentiallySensitive: true
> CompanyCode;
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> 
> annotate SEPMRA_OVW.SEPMRA_C_OVW_SalesOrderType with {
>   @PersonalData.IsPotentiallySensitive
>   CompanyCode
> };
> ```

**Related Information**  


[Annotations Used in Overview Pages](annotations-used-in-overview-pages-65731e6.md "Annotations define how data is presented, navigated, and visualized in cards of overview pages. You can use these annotations to control how entity data is displayed, formatted, and interacted with SAP Fiori applications.")

[Navigation and Action Annotations](navigation-and-action-annotations-d0fac68.md "You can make a card interactive by executing OData actions, enabling intent-based navigation, or adding hyperlinks.")

[Data Querying and Visualization Annotations](data-querying-and-visualization-annotations-5c287de.md "You can configure which data appears on a card and visualize it as charts or KPI tags.")

