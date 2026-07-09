<!-- loiod0fac68e772743de8c52209b00c1fc03 -->

# Navigation and Action Annotations

You can make a card interactive by executing OData actions, enabling intent-based navigation, or adding hyperlinks.



## Navigation and Actions

These annotations make a card interactive. Use them when users need to perform an action, open another app, or follow a link to an external resource.



### Triggering an OData Action

You can use `com.sap.vocabularies.UI.v1.DataFieldForAction` to trigger an OData action defined as a `FunctionImport` in the OData metadata. The following properties are supported:

-   `Label`: Navigation label displayed in the footer of a quick view card.
-   `Action`: Name of the `FunctionImport` action definition.

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



### Configuring Intent-Based Navigation

You can use the `com.sap.vocabularies.UI.v1.DataFieldForIntentBasedNavigation` annotation to navigate to another app pr view based on a semantic object and action. The following properties are supported: record type supports the following properties:

-   `SemanticObject`: The intent-based semantic object
-   `Action`: The intent action
-   `Label`: Navigation label displayed in the footer of a quick view card

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



### Rendering a Field as a Hyperlink

You can use the `com.sap.vocabularies.UI.v1.DataFieldWithUrl` annotation to render a field as a hyperlink. The following properties are supported:

-   `Url`: URL configuration. It can also contain an intent-based navigation route, either static or dynamic with arguments.

-   `Label`: Navigation label shown in the action footer of a quick view card for the stack card.


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



### Defining Card Actions

You can use the`com.sap.vocabularies.UI.v1.Identification` annotation as a container for card actions. The following record types are supported:

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

**Related Information**  


[Annotations Used in Overview Pages](annotations-used-in-overview-pages-65731e6.md "Annotations define how data is presented, navigated, and visualized in cards of overview pages. You can use these annotations to control how entity data is displayed, formatted, and interacted with SAP Fiori applications.")

[Data Querying and Visualization Annotations](data-querying-and-visualization-annotations-5c287de.md "You can configure which data appears on a card and visualize it as charts or KPI tags.")

[Data Display and Formatting Annotations](data-display-and-formatting-annotations-57e417c.md "You can define the structure and formatting of card content, including headers, fields, lists, groups, and data values.")

