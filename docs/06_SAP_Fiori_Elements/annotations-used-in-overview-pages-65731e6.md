<!-- loio65731e6b823240398e33133908efdaa1 -->

# Annotations Used in Overview Pages

This topic provides a list of the annotations used in overview pages. They are as follows:



-   com.sap.vocabularies.UI.v1.HeaderInfo
-   com.sap.vocabularies.UI.v1.DataField
-   com.sap.vocabularies.UI.v1.DataFieldForAnnotation
-   com.sap.vocabularies.UI.v1.DataFieldForAction
-   com.sap.vocabularies.UI.v1.DataFieldForIntentBasedNavigation
-   com.sap.vocabularies.UI.v1.DataFieldWithUrl
-   com.sap.vocabularies.UI.v1.DataPoint
-   com.sap.vocabularies.UI.v1.Identification
-   com.sap.vocabularies.UI.v1.LineItem
-   com.sap.vocabularies.UI.v1.Facets
-   com.sap.vocabularies.UI.v1.FieldGroup
-   com.sap.vocabularies.UI.v1.SelectionVariant
-   com.sap.vocabularies.UI.v1.PresentationVariant
-   com.sap.vocabularies.UI.v1.SelectionPresentationVariant
-   com.sap.vocabularies.UI.v1.Chart
-   com.sap.vocabularies.UI.v1.KPI
-   com.sap.vocabularies.Common.v1.Text
-   com.sap.vocabularies.PersonalData.v1



## `com.sap.vocabularies.UI.v1.HeaderInfo`

The following properties are supported:

-   `TypeName`
-   `TypeNamePlural`
-   `ImageUrl`
-   `Title`
-   `Description`

    > ### Note:  
    > The value of `dynamicSubtitleAnnotationPath` is picked from the value of the `path`, if pointed to the descriptor file \( `manifest.json` \). For more information, see [Descriptor Configuration for the Overview Page](descriptor-configuration-for-the-overview-page-f194b41.md).


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



## `com.sap.vocabularies.UI.v1.DataField`

`DataField` is used to display simple text fields. The following properties are supported:

-   `Label`: the label of the field
-   `Value`: the value of the field, usually pointing to a path in the metadata

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



## `com.sap.vocabularies.UI.v1.DataFieldForAnnotation`

`DataFieldForAnnotation` can be used to reference a different annotation term, using the `Target` property. The following properties are supported:

-   `Label`: the label of the field
-   `Target`: reference to a different term in the annotation document

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



## `com.sap.vocabularies.UI.v1.DataFieldForAction`

`DataFieldForAction` is used for OData actions that can be preformed on an entity, and refer to a `FunctionImport` action definition in the OData metadata. The following properties are supported:

-   `Label`: the navigation label displayed in the footer of the quick view card.
-   `Action`: name of the `FunctionImport` action definition to use

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Record Type="com.sap.vocabularies.UI.v1.DataFieldForAction">
>     <Annotation Term="com.sap.vocabularies.UI.v1.Importance" EnumMember="com.sap.vocabularies.UI.v1.ImportanceType/Medium" />
>     <PropertyValue Property="Label" String="Confirm" />
>     <PropertyValue Property="Action" String="GWSAMPLE_BASIC.GWSAMPLE_BASIC_Entities/SalesOrder_Confirm" />
> </Record>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> 
>   {
>     importance: #MEDIUM,
>     label: 'Confirm',
>     dataAction: 'GWSAMPLE_BASIC.GWSAMPLE_BASIC_Entities/SalesOrder_Confirm',
>     type: #FOR_ACTION
>   }
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> 
> {
>     $Type : 'UI.DataFieldForAction',
>     Label : 'Confirm',
>     Action : 'GWSAMPLE_BASIC.GWSAMPLE_BASIC_Entities/SalesOrder_Confirm',
>     ![@UI.Importance] : #Medium
> }
> ```



## `com.sap.vocabularies.UI.v1.DataFieldForIntentBasedNavigation`

The `DataFieldForIntentBasedNavigation` record type supports the following properties:

-   `SemanticObject`: intent semantic object
-   `Action`: action of the intent
-   `Label`: the navigation label displayed in the footer of the quick view card

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Record Type="com.sap.vocabularies.UI.v1.DataFieldForIntentBasedNavigation">
>     <PropertyValue Property="SemanticObject" String="SemanticObject1"/>
>     <PropertyValue Property="Action" String="Action1"/>
>      can also contain an intent based navigation with
>      route (static or dynamic with arguments).<PropertyValue Property="Label" String="App1"/>
>     <Annotation Term="com.sap.vocabularies.UI.v1.Importance" EnumMember="com.sap.vocabularies.UI.v1.ImportanceType/Medium"/>
> </Record><Record Type="com.sap.vocabularies.UI.v1.DataFieldForIntentBasedNavigation"
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> 
> @Consumption.semanticObject: 'SemanticObject1'
> annotate view VIEWNAME with { 
> 
>  @UI.lineItem: [
>  {
>     importance: #MEDIUM,
>     semanticObjectAction: 'Action1',
>     label: 'App1',
>     type: #FOR_INTENT_BASED_NAVIGATION
>   },
>   {
>     type: #FOR_INTENT_BASED_NAVIGATION
>   }
>  ]
>  property_name;
> 
> }
> 
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> 
> {
>     $Type : 'UI.DataFieldForIntentBasedNavigation',
>     SemanticObject : 'SemanticObject1',
>     Action : 'Action1',
>     Label : 'App1',
>     ![@UI.Importance] : #Medium
> }
> ```



<a name="loio65731e6b823240398e33133908efdaa1__section_iwl_hwq_n2b"/>

## com.sap.vocabularies.UI.v1.DataFieldWithUrl

The `com.sap.vocabularies.UI.v1.DataFieldWithUrl` record type supports the following properties:

-   `Url`: Use this property to configure the URL details.

    > ### Note:  
    > `Url`

-   `Label`\>: Use this property to specify the navigation label. The label appears in the quick view card's action footer area for the stack card type.


> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Record Type="com.sap.vocabularies.UI.v1.DataFieldWithUrl">
>     <PropertyValue Property="Label" String="Link to"/>
>     <PropertyValue Property="Value" String="Google Maps"/>
>     <PropertyValue Property="Url">
>         <Apply Function="odata.fillUriTemplate">
>             <String>https://www.google.de/maps/place/{street},{city}</String>
>             <LabeledElement Name="street">
>                 <Apply Function="odata.uriEncode">
>                     <Path>Address/Street</Path>
>                 </Apply>
>             </LabeledElement>
>             <LabeledElement Name="city">
>                 <Apply Function="odata.uriEncode">
>                     <Path>Address/City</Path>
>                 </Apply>
>             </LabeledElement>
>         </Apply>
>     </PropertyValue>
> </Record>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> 
>   {
>     label: 'Link to',
>     type: #WITH_URL
>   }
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> 
> {
>   $Type : 'UI.DataFieldWithUrl',
>   Value : 'Google Maps',
>   Label : 'Link to',
>   Url   : {
>              $edmJson : {
>               $Apply: [
>                 'https://www.google.de/maps/place/{street},{city}',
>                 {
>                   $LabeledElement : {
>                       $Apply    : [{$Path : 'Address/Street'}],
>                       $Function : 'odata.uriEncode'
>                    },
>                    $Name           : 'street'
>                 },
>                 {
>                   $LabeledElement : {
>                      $Apply    : [{$Path : 'Address/City'}],
>                      $Function : 'odata.uriEncode'
>                   },
>                   $Name           : 'city'
>                 },
>             ],
>             $Function : 'odata.fillUriTemplate'
>            }
>          }
> }
> 
> ```



## `com.sap.vocabularies.UI.v1.DataPoint`

The `DataPoint` term is used to display fields with special formatting. The following properties are supported:

-   `Title`: Used in table cards for the column name
-   `Value`: Field to display
-   `ValueFormat`: Used with the `NumberFormat` annotation to format a decimal value
    -   `com.sap.vocabularies.UI.v1.NumberFormat`:

        -   `ScaleFactor`: Scale factor for large numbers.
        -   `NumberOfFractionalDigits`: Number of decimal points to display.


-   `com.sap.vocabularies.UI.v1.Criticality`: An enumeration value that can be used to highlight the value with a certain color. The following values are supported:

    -   `com.sap.vocabularies.UI.v1.CriticalityType/Neutral`: Value is displayed using a neutral color \(default\).
    -   `com.sap.vocabularies.UI.v1.CriticalityType/Negative`: Value is displayed using a color for errors \(red\).
    -   `com.sap.vocabularies.UI.v1.CriticalityType/Critical`: Value is displayed using a color for critical values \(orange\).
    -   `com.sap.vocabularies.UI.v1.CriticalityType/Positive`: Value is displayed using a color for positive values \(green\).

-   `com.sap.vocabularies.UI.v1.CriticalityCalculation`: Used to color the value dynamically according to the value in the `com.sap.vocabularies.UI.v1.CriticalityCalculationType` record type. It supports the following values:

    -   `ImprovementDirection`: Defines what is considered a positive value. Possible values are:
        -   `Minimize`: If `Minimize` is the improvement direction, the `DeviationRangeHighValue` and `ToleranceRangeHighValue` properties are required. and

            -   If the value is less than the `ToleranceRangeHighValue`, the value is considered positive and is displayed in green.
            -   If the value is between the `ToleranceRangeHighValue` and the `DeviationRangeHighValue`, the value is considered critical and is displayed in orange.
            -   If the value is greater than the `ToleranceRangeHighValue` the value is considered negative and is displayed in red.

        -   `Target`: If `Target` is the improvement direction, the `DeviationRangeLowValue`, `DeviationRangeHighValue`, `ToleranceRangeLowValue`, and `ToleranceRangeHighValue` properties are required.

            -   If the value is between the `ToleranceRangeHighValue` and `ToleranceRangeLowValue`, the value is considered positive and is displayed in green.
            -   If the value is between `DeviationRangeLowValue` and `DeviationRangeLowValue`, or between `DeviationRangeHighValue` and `ToleranceRangeHighValue`, the value is considered critical and is displayed in orange.
            -   If the value is lower than the `DeviationRangeLowValue` or higher than `DeviationRangeHighValue`, the value is considered negative and is displayed in red.

        -   `Maximize`: If `Maximize` is the improvement direction, the `DeviationRangeLowValue` and `ToleranceRangeLowValue` properties are required.

            -   If the value is greater than the `ToleranceRangeLowValue`, the value is considered positive and is displayed in green.
            -   If the value is between `ToleranceRangeLowValue` and the `DeviationRangeLowValue`, the value is considered critical and is displayed in orange.
            -   If the value is lower than `ToleranceRangeLowValue`, the value is considered negative and is displayed in red.



-   `com.sap.vocabularies.UI.v1.TargetValue`: A reference value for trend calculation. Use this value to calculate the deviation percent value. For example, `Deviation = (DataPoint Value - ReferenceValue) / ReferenceValue.`


> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotation Term="UI.DataPoint" Qualifier="Eval_by_Country">
> 	<Record Type="UI.DataPointType">
> 		<PropertyValue Property="Title" String="Sales India - Line Card" />
> 		<PropertyValue Property="Value" Path="Sales" />
> 		<PropertyValue Property="NumberValueFormat">
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



## `com.sap.vocabularies.UI.v1.Identification`

This term is used as a container for card actions. The following record types are supported:

-   `com.sap.vocabularies.UI.v1.DataFieldForAction` 
-   `com.sap.vocabularies.UI.v1.DataFieldForIntentBasedNavigation`
-   `com.sap.vocabularies.UI.v1.DataFieldWithUrl`

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotation Term="com.sap.vocabularies.UI.v1.Identification">
>     <Collection>
>         <Record Type="com.sap.vocabularies.UI.v1.DataFieldForIntentBasedNavigation">
>             <PropertyValue Property="SemanticObject" String="Action"/>
>             <PropertyValue Property="Action" String="toappnavsample"/>
>             <PropertyValue Property="Label" String="SO Navigation (M)"/>
>             <Annotation Term="com.sap.vocabularies.UI.v1.Importance" EnumMember="com.sap.vocabularies.UI.v1.ImportanceType/Medium"/>
>         </Record>
>         <Record Type="com.sap.vocabularies.UI.v1.DataField">
>             <PropertyValue Property="Label" String="Sales Order ID"/>
>             <PropertyValue Property="Value" Path="SalesOrderID"/>
>         </Record>
>     </Collection>
> </Annotation>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> 
> @UI.identification: [
>   {
>     importance: #MEDIUM,
>     semanticObjectAction: 'toappnavsample',
>     label: 'SO Navigation (M)',
>     type: #FOR_INTENT_BASED_NAVIGATION,
>     position: 10
>   }
> ]
> PROPERT_NAME;
> 
> @UI.identification: [
>   {
>     label: 'Sales Order ID',
>     position: 20
>   }
> ]
> SALESORDERID;
> 
> @Consumption.semanticObject: 'Action'
> annotate view VIEWNAME with { 
> 
> }
> 
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> 
> UI.Identification : [
>     {
>         $Type : 'UI.DataFieldForIntentBasedNavigation',
>         SemanticObject : 'Action',
>         Action : 'toappnavsample',
>         Label : 'SO Navigation (M)',
>         ![@UI.Importance] : #Medium
>     },
>     {
>         $Type : 'UI.DataField',
>         Label : 'Sales Order ID',
>         Value : SalesOrderID
>     }
> ]
> 
> ```



## `com.sap.vocabularies.UI.v1.LineItem`

This term is used to display lists of fields in a list or a table. The following record types are supported:

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



## `com.sap.vocabularies.UI.v1.Facets`

The `Facets` term contains a collection of facets.

> ### Note:  
> Overview pages only support the `com.sap.vocabularies.UI.v1.ReferenceFacet` record type.

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



## `com.sap.vocabularies.UI.v1.FieldGroup`

This term consists of a label and a collection of `com.sap.vocabularies.UI.v1.DataFieldAbstract` fields.

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



## `com.sap.vocabularies.UI.v1.SelectionVariant`

This term consists of a combination of parameters and filters that query the annotated entity set. You can use `SelectionVariant` separately, or together with the `SelectionPresentationVariant` annotation. The following properties are supported:

-   `ID`: Can contain an identifier to reference this instance from external context
-   `Text`: Name of the selection variant
-   `Parameters`: Collection of `com.sap.vocabularies.UI.v1.ParameterAbstract` terms
-   `SelectOptions`: Collection of `com.sap.vocabularies.UI.v1.SelectOptionType` terms used to define filters on this entity set

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



## `com.sap.vocabularies.UI.v1.PresentationVariant`

Defines the way in which the result of a queried collection of entities is displayed in the KPI header. You can use `PresentationVariant` separately, or together with `SelectionPresentationVariant` annotation. The following properties are supported:

-   `ID`: Can contain an identifier to reference this instance from external context
-   `Text`: Name of the presentation variant
-   `SortOrder`: Collection of `com.sap.vocabularies.Common.v1.SortOrderType` records
-   `RequestAtLeast`: Collection of fileds that must be part of selection fields. The `requestAtLeast` lets you receive additional dimensions from backend. The additional dimensions are added to the result of a queried collection for further navigation.

    > ### Note:  
    > In an aggregated service, additional dimensions may cause issues while rendering the chart..

-   `Visualizations`: Supports the `LineItem` or `Chart` annotation path

    > ### Note:  
    > You can only define this property when it is used together with the `SelectionPresentationVariant` annotation.


> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotation Term="com.sap.vocabularies.UI.v1.PresentationVariant">
>    <Record>
>       <PropertyValue Property="GroupBy">
>          <Collection>
>             <PropertyPath>Status</PropertyPath>
>          </Collection>
>       </PropertyValue>
>       <PropertyValue Property="SortOrder">
>          <Collection>
>             <Record>
>                <PropertyValue Property="Property" PropertyPath="TotalSum" />
>                <PropertyValue Property="Descending" Bool="true" />
>             </Record>
>          </Collection>
>       </PropertyValue>
>       <PropertyValue Property="RequestAtLeast">
>           <Collection>
>              <Record>
>                 <PropertyPath>CustomerID</PropertyPath>
>              </Record>
>           </Collection>
>        </PropertyValue>
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
>     groupBy: [
>       'STATUS'
>     ],
>     sortOrder: [
>       {
>         by: 'TOTALSUM',
>         direction: #DESC
>       }
>     ],
> 	requestAtLeast: ['CustomerID'],
> 	
>   }
> ]
> annotate view VIEWNAME with { 
> 
> }
> 
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> 
> UI.PresentationVariant : {
>     GroupBy : [
>         Status
>     ],
>     SortOrder : [
>         {
>             Property : TotalSum,
>             Descending : true
>         },
>     ],
>     RequestAtLeast : [
>         {
>             CustomerID
>         }
>     ]
> }
> 
> ```



## `com.sap.vocabularies.UI.v1.SelectionPresentationVariant`

Provides a combination of capabilities from `SelectionVariant` and `PresentationVariant`. The `SelectionPresentationVariant` supports the following properties:

-   `SelectionVariant`: specify the `SelectionVariant` annotation path.
-   `PresentationVariant`: specify the `PresentationVariant` annotation path.

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotation Term="com.sap.vocabularies.UI.v1.SelectionPresentationVariant" Qualifier="BothSelectionAndPresentation">
>     <Record>
>         <PropertyValue Property="SelectionVariant" Path="@UI.SelectionVariant#SP2"/>
>         <PropertyValue Property="PresentationVariant" Path="@UI.PresentationVariant#customer"/>
>     </Record>
> </Annotation>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> 
> @UI.SelectionPresentationVariant: [
>   {
>     selectionvariantqualifier: 'SP2',
>     presentationvariantqualifier: 'customer',
>     qualifier: 'BothSelectionAndPresentation'
>   }
> ]
> annotate view VIEWNAME with { 
> 
> }
> 
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> 
> UI.SelectionPresentationVariant #BothSelectionAndPresentation : {
>     SelectionVariant : ![@UI.SelectionVariant#SP2],
>     PresentationVariant : ![@UI.PresentationVariant#customer]
> },
> 
> ```



### `SelectionVariant`

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotation Term="com.sap.vocabularies.UI.v1.SelectionVariant" Qualifier="SP2">
>     <Record>
>         <PropertyValue Property="SelectOptions">
>             <Collection>
>                 <Record>
>                     <PropertyValue Property="PropertyName" PropertyPath="CustomerName"/>
>                     <PropertyValue Property="Ranges">
>                         <Collection>
>                             <Record>
>                                 <PropertyValue Property="Sign"
>                                                EnumMember="com.sap.vocabularies.UI.v1.SelectionRangeSignType/I"/>
>                                 <PropertyValue Property="Option"
>                                                EnumMember="com.sap.vocabularies.UI.v1.SelectionRangeOptionType/EQ"/>
>                                 <PropertyValue Property="Low" String="Asia High tech"/>
>                             </Record>
>                         </Collection>
>                     </PropertyValue>
>                 </Record>
>             </Collection>
>         </PropertyValue>
>     </Record>
> </Annotation>
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> 
> UI.SelectionVariant #SP2 : {
>     SelectOptions : [
>         {
>             PropertyName : CustomerName,
>             Ranges : [
>                 {
>                     Sign : #I,
>                     Option : #EQ,
>                     Low : 'Asia High tech'
>                 }
>             ]
>         }
>     ]
> }
> ```



### `PresentationVariant`

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotation Term="com.sap.vocabularies.UI.v1.PresentationVariant" Qualifier="customer">
>     <Record>
>         <PropertyValue Property="GroupBy">
>             <Collection>
>                 <PropertyPath>BillingStatusDescription</PropertyPath>
>                 <PropertyPath>DeliveryStatusDescription</PropertyPath>
>             </Collection>
>         </PropertyValue>
>         <PropertyValue Property="Visualizations">
>             <Collection>
>                 <AnnotationPath>@UI.LineItem#View2</AnnotationPath>
>             </Collection>
>         </PropertyValue>
>         <PropertyValue Property="SortOrder">
>             <Collection>
>                 <Record>
>                     <PropertyValue Property="Property" PropertyPath="CustomerName" />
>                     <PropertyValue Property="Descending" Boolean="true" />
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
> @UI.PresentationVariant: [
>   {
>     groupBy: [
>       'BILLINGSTATUSDESCRIPTION',
>       'DELIVERYSTATUSDESCRIPTION'
>     ],
>     visualizations: [
>       {
>         type: #AS_LINEITEM,
>         qualifier: 'View2'
>       }
>     ],
>     sortOrder: [
>       {
>         by: 'CUSTOMERNAME'
>       }
>     ],
>     qualifier: 'customer'
>   }
> ]
> annotate view VIEWNAME with { 
> 
> }
> 
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> 
> UI.PresentationVariant #customer : {
>     GroupBy : [
>         BillingStatusDescription,
>         DeliveryStatusDescription,
>     ],
>     Visualizations : [
>         '@UI.LineItem#View2'
>     ],
>     SortOrder : [
>         {
>             Property : CustomerName,
>             Descending : true
>         }
>     ]
> }
> 
> ```



## `com.sap.vocabularies.UI.v1.Chart`

Defines the dimensions and measures used in charts. The following properties are supported:

-   `Title` 
-   `Description` 
-   `ChartType`
-   `Measures`: Collection of `PropertyPath` properties.
-   `MeasureAttributes`: A collection of `com.sap.vocabularies.UI.v1.ChartMeasureAttributeType` records describing attributes for measures. All measures used in this collection must also be part of the `Measures` property.
-   `Dimensions`: Collection of `PropertyPath` properties
-   `DimensionAttributes`: Collection of `com.sap.vocabularies.UI.v1.ChartDimensionAttributeType` records describing attributes for dimensions. All dimensions used in this collection must also be part of the `Dimensions` property.

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



<a name="loio65731e6b823240398e33133908efdaa1__section_v4w_ttq_n2b"/>

## KPI Annotation

Use this annotation to create KPI tags for your overview page cards. The KPI information appears on the header area of the card and reacts to the filter conditions you set. This annotation provides the capabilities of `SelectionVariant`, `PresentationVarint`, and `DataPoint` annotations. Additionally, the KPI annotation has the semantic object property and action to configure the navigation parameters.

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



### `PresentationVariant`

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



### `SelectionVariant`

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



### `DataPoint`

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



<a name="loio65731e6b823240398e33133908efdaa1__section_kjl_wvq_n2b"/>

## Text Arrangement

The text arrangement annotation lets you format text.

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

In the preceding example, the text `Customer` is bound to the `ContactID` property and appears as shown in the table:


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



<a name="loio65731e6b823240398e33133908efdaa1__section_f2b_ysk_sfb"/>

## Potentially Sensitive Personal Data

To define a property as sensitive data, configure the target property and set it as personally sensitive.

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

