<!-- loiocb1748ea9b984251addc03718d98df35 -->

# Grouping of Fields

Application developers can group fields that should be shown together, such as various address fields \(street name, house number, and postal code\).

The grouping can be done in several ways, depending on the use case.



<a name="loiocb1748ea9b984251addc03718d98df35__section_lhq_n1g_k4b"/>

## Grouping Fields Using the `FieldGroup` Annotation

Using a `FieldGroup` allows the grouped fields to be shown in a similar manner. The fields are typically arranged one beneath the other, but they can also spill over to the next column if, for example, a form is used.



<a name="loiocb1748ea9b984251addc03718d98df35__section_m2z_jqt_n4b"/>

## Form Implementation

Use an OData form and pass the `UI.ReferenceFacet` to it. This, in turn, has a `UI.FieldGroup` associated with it.



### `UI.FieldGroup Definition` in Object Page

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotation Term="UI.FieldGroup" Qualifier="Dimensions">
>    <Record>
>       <PropertyValue Property="Label" String="Dimensions"/>
>       <PropertyValue Property="Data">
>          <Collection>
>             <Record Type="UI.DataField">
>                <PropertyValue Property="Value" Path="BaseUnit"/>
>             </Record>
>             <Record Type="UI.DataField">
>                <PropertyValue Property="Value" Path="Height"/>
>             </Record>
>             <Record Type="UI.DataField">
>                <PropertyValue Property="Value" Path="Width"/>
>             </Record>
>             <Record Type="UI.DataField">
>                <PropertyValue Property="Value" Path="Depth"/>
>             </Record>
>             <Record Type="UI.DataField">
>                <PropertyValue Property="Value" Path="Weight"/>
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
> @UI.fieldGroup: [
>   {
>     type: #STANDARD,
>     position: 1 ,
>     qualifier: 'Dimensions',
>     groupLabel: 'Dimensions'
>   }
> ]
> BaseUnit;
> 
> @UI.fieldGroup: [
>   {
>     type: #STANDARD,
>     position: 2 ,
>     qualifier: 'Dimensions'
>   }
> ]
> Height;
> 
> @UI.fieldGroup: [
>   {
>     type: #STANDARD,
>     position: 3 ,
>     qualifier: 'Dimensions'
>   }
> ]
> Width;
> 
> @UI.fieldGroup: [
>   {
>     type: #STANDARD,
>     position: 4 ,
>     qualifier: 'Dimensions'
>   }
> ]
> Depth;
> 
> @UI.fieldGroup: [
>   {
>     type: #STANDARD,
>     position: 5 ,
>     qualifier: 'Dimensions'
>   }
> ]
> Weight;
> 
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> UI.FieldGroup #Dimensions : {
>     $Type : 'UI.FieldGroupType',
>     Label : 'Dimensions',
>     Data : [
>         {
>             $Type : 'UI.DataField',
>             Value : BaseUnit
>         },
>         {
>             $Type : 'UI.DataField',
>             Value : Height
>         },
>         {
>             $Type : 'UI.DataField',
>             Value : Width
>         },
> 	{
>             $Type : 'UI.DataField',
>             Value : Depth
>         },
> 	{
>             $Type : 'UI.DataField',
>             Value : Weight
>         }
>     ]
> }
> 
> ```



### Reference of `UI.FieldGroup` in `UI.Facets`

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotation Term="UI.Facets">
>    <Collection>
>       <Record Type="UI.ReferenceFacet">
>          <PropertyValue Property="Label" String="Dimensions" />
>          <PropertyValue Property="Target"AnnotationPath="@UI.FieldGroup#Dimensions"/>
>       </Record>
>    </Collection>
> </Annotation>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> @UI.Facet: [
>   {
>     label: 'Dimensions',
>     targetQualifier: 'Dimensions',
>     type: #FIELDGROUP_REFERENCE,
>     purpose: #STANDARD
>   }
> ]
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> UI.Facets : [
>     {
>         $Type : 'UI.ReferenceFacet',
>         Label : 'Dimensions',
>         Target : '@UI.FieldGroup#Dimensions'
>     }
> ]
> ```

This groups the fields in a form-like display, as shown in the following screenshot:

 ![](images/Related_Fields_Using_a_Form_Implementation_b9b30bd.png) 

> ### Note:  
> -   If there is no `Headerfacet` annotation and if the `Headerinfo` annotation doesn’t contain any images, then the expand or collapse button and the pin button are hidden from the object page header.
> 
> -   If a subsection contains only one group, and the subsection title is same as group title, then the group title is hidden.



<a name="loiocb1748ea9b984251addc03718d98df35__section_fmx_nrt_n4b"/>

## Table Implementation

> ### Tip:  
> Don't use a grid table because the row height truncates the UI elements.

The fields are displayed beneath each other within the table cell. Application developers can add multiple field types within the cell. The annotation-driven design that is used here uses `UI.FieldGroup` inside a `UI.LineItem`.

To enable this feature, do the following:

1.  Add a `UI.DataFieldForAnnotation` under the `LineItem` annotation for the table.

2.  Ensure that the `DataFieldForAnnotation` record refers to a `UI.FieldGroup` annotation, where you can define multiple fields.


The following annotation types are currently supported:

-   `DataField`

-   `DataFieldForAction`

-   `DataFieldForAnnotation`

    This points either to a data point \(in combination with rating indicators and progress indicators\), or a contact card.


> ### Note:  
> If you use multiple `DataFieldForAction` buttons, you must ensure that you do not show a column header. You achieve this by not specifying a “Label” for the `DataFieldForAnnotation` that is under the `LineItem` definition and holds the `FieldGroup`.



### Linking a `FieldGroup` in the `LineItem` Annotations

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotation Term="UI.LineItem">
>     <Collection>
>         …………
>         …………
>         <Record Type="UI.DataFieldForAnnotation">
>             <PropertyValue Property="Target" AnnotationPath="@UI.FieldGroup#FieldGroup1" />
>             <PropertyValue Property="Label" String="Type Information"/>
>         </Record>
>         …………
>         …………
>     </Collection>
> </Annotation>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> @UI.lineItem: [
>   {
>     label: 'Type Information',
>     type: #AS_FIELDGROUP,
>     valueQualifier: 'FieldGroup1'
>   }
> ]
> producttype;
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> UI.LineItem : [
>     {
>         $Type : 'UI.DataFieldForAnnotation',
>         Target : '@UI.FieldGroup#FieldGroup1',
>         Label : 'Type Information'
>     }
> ]
> 
> ```



### `FieldGroup` Annotation

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotation Term="UI.FieldGroup" Qualifier="FieldGroup1">
>     <Record>
>         <PropertyValue Property="Data">
>             <Collection>
>                 <Record Type="UI.DataField">
>                     <PropertyValue Property="Value" Path="ContractType"/>
>                 </Record>
>                 <Record Type="UI.DataFieldForAction">
>                     <PropertyValue Property="Label" String="Dummy Button"/>
>                     <PropertyValue Property="Action" String="com.sap.gateway.srvd.sadl_gw_appmusicdr_definition.v0001.SOME_ACTION_2"/>
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
> @UI.fieldGroup: [
>   {
>     type: #STANDARD,
>     position: 1 ,
>     qualifier: 'FieldGroup1'
>   }
> ]
> ContractType;
> 
> @UI.fieldGroup: [
>   {
>     label: 'Dummy Button',
>     dataAction: 'com.sap.gateway.srvd.sadl_gw_appmusicdr_definition.v0001.SOME_ACTION_2',
>     type: #FOR_ACTION,
>     position: 2 ,
>     qualifier: 'FieldGroup1'
>   }
> ]
> contractName;
> 
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> UI.FieldGroup #FieldGroup1 : {
>     Data : [
>         {
>             $Type : 'UI.DataField',
>             Value : ContractType
>         },
>         {
>             $Type : 'UI.DataFieldForAction',
>             Label : 'Dummy Button',
>             Action : 'com.sap.gateway.srvd.sadl_gw_appmusicdr_definition.v0001.SOME_ACTION_2'
>         }
>     ]
> }
> ```

This displays a `DataField` and a dummy button, as shown in the following screenshot:

 ![](images/DataField_with_Dummy_Button_8c91e4e.png) 

> ### Note:  
> -   The `FieldGroup` is not supported in grid tables.
> 
> -   If you use a table personalization, users can only filter, sort, and group the semantically connected columns based on the individual properties \(of the same entity type as the `UI.LineItem`\) given in the `UI.FieldGroup` collection.



<a name="loiocb1748ea9b984251addc03718d98df35__section_uzp_41g_k4b"/>

## Semantically Connected Fields

Semantically connected fields are displayed side by side to reflect their data relation. Fields can be displayed under a single display name but can be edited separately.

You use the `UI.ConnectedFields` annotation to display two fields side by side.

> ### Example:  
> You can maintain date and time as two properties in the back end and show this information in a single form. You can use a delimiter to separate the two values.

 ![](images/Semantically_Connected_Fields_eb0b024.png) 



<a name="loiocb1748ea9b984251addc03718d98df35__section_hmt_lb2_4tb"/>

## Additional Features in SAP Fiori Elements for OData V2



### Table Implementation

> ### Note:  
> You can't use a table implementation if you need to display a label alongside each field value.



### Semantically Connected Fields

> ### Sample Code:  
> Annotation for a Connected Field
> 
> ```
> <Annotation Term="com.sap.vocabularies.UI.v1.ConnectedFields" Qualifier="ConnectedDateTime">
>     <Record >
>         <PropertyValue Property="Data">
>             <Record >
>                 <PropertyValue Property="SalesOrderDate">
>                     <Record Type="com.sap.vocabularies.UI.v1.DataField”>
>                         <PropertyValue Property="Value" Path="SalesOrderDate"/>
>                     </Record>
>                 </PropertyValue>
>                 <PropertyValue Property="SalesOrderTime">
>                     <Record Type="com.sap.vocabularies.UI.v1.DataField”>
>                         <PropertyValue Property="Value" Path="TrialTOD"/>
>                     </Record>
>                 </PropertyValue>
>             </Record>
>         </PropertyValue>
>         <PropertyValue Property="Label" String="Connected DateTime"/>
>         <PropertyValue Property="Template" String="{SalesOrderDate} / {SalesOrderTime}"/>
>     </Record>
> </Annotation>
>  
> <Annotation Term="com.sap.vocabularies.UI.v1.ConnectedFields" Qualifier="ConnectedData">
>     <Record >
>         <PropertyValue Property="Data">
>             <Record >
>                 <PropertyValue Property="PurchaseOrderByCustomer">
>                     <Record Type="com.sap.vocabularies.UI.v1.DataField”>
>                         <PropertyValue Property="Value" Path="PurchaseOrderByCustomer"/>
>                     </Record>
>                 </PropertyValue>
>                 <PropertyValue Property="ShippingCondition">
>                     <Record Type="com.sap.vocabularies.UI.v1.DataField”>
>                         <PropertyValue Property="Value" Path="ShippingCondition"/>
>                     </Record>
>                 </PropertyValue>
>             </Record>
>         </PropertyValue>
>         <PropertyValue Property="Label" String="Connected Data"/>
>         <PropertyValue Property="Template" String="{ShippingCondition} - {PurchaseOrderByCustomer}"/>
>     </Record>
> </Annotation>
>  
> .....
> <Annotation Term="com.sap.vocabularies.UI.v1.FieldGroup" Qualifier="OrderData">
>     <Record >
>         <PropertyValue Property="Data">
>             <Collection>
>                 <Record Type="com.sap.vocabularies.UI.v1.DataFieldForAnnotation">
>                     <PropertyValue Property="Target" AnnotationPath="@UI.ConnectedFields#ConnectedDateTime"/>
>                     <Annotation Term="UI.Importance" EnumMember="UI.ImportanceType/High"/>
>                 </Record>
>                 <Record Type="com.sap.vocabularies.UI.v1.DataFieldForAnnotation">
>                     <PropertyValue Property="Target" AnnotationPath="@UI.ConnectedFields#ConnectedData"/>
>                     <Annotation Term="UI.Importance" EnumMember="UI.ImportanceType/High"/>
>                 </Record>
>             </Collection>
>         </PropertyValue>
>     </Record>
> </Annotation>
> ```



<a name="loiocb1748ea9b984251addc03718d98df35__section_fc5_rb2_4tb"/>

## Additional Features in SAP Fiori Elements for OData V4



### Showing Field Labels in a Field Group inside a Table

You can show the labels of fields inside the table columns when you show a `FieldGroup`. To enable the display of a field label, you can use the `showDataFieldsLabel` setting in the manifest as shown in the following sample code:

> ### Sample Code:  
> ```
> "controlConfiguration": {
>    "@com.sap.vocabularies.UI.v1.LineItem": {
>       columns: {
>          "DataFieldForAnnotation::FieldGroup::myFieldGroup": {
>             "showDataFieldsLabel": true
>          }
>       }
>    }
> }
> ```

You can see what the result looks like in the following screenshot:

   
  
**FieldGroup Column "Sold-To Party" with Field Labels**

 ![](images/FieldGroup_Column_Sold-To_Party_with_Field_Labels_81e38b2.png "FieldGroup Column "Sold-To Party" with Field
                        Labels") 

For more information about how to find the right key for a column, see [Finding the Right Key for the Anchor](finding-the-right-key-for-the-anchor-6ffb084.md).



### Semantically Connected Fields

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotation Term="UI.ConnectedFields" Qualifier="ConnectedDateTime">
>     <Record Type="UI.ConnectedFieldsType">
>         <PropertyValue Property="Data">
>             <Record Type="Core.Dictionary">
>                 <PropertyValue Property="SalesOrderDate">
>                     <Record Type="UI.DataField">
>                         <Annotation Term="UI.Importance" EnumMember="UI.ImportanceType/High"/>
>                         <PropertyValue Property="Value" Path="SalesOrderDate"/>
>                     </Record>
>                 </PropertyValue>
>                 <PropertyValue Property="SalesOrderTime">
>                     <Record Type="UI.DataField">
>                         <Annotation Term="UI.Importance" EnumMember="UI.ImportanceType/High"/>
>                         <PropertyValue Property="Value" Path="TrialTOD"/>
>                     </Record>
>                 </PropertyValue>
>             </Record>
>         </PropertyValue>
>         <PropertyValue Property="Label" String="Connected DateTime"/>
>         <PropertyValue Property="Template" String="{SalesOrderDate} / {SalesOrderTime}"/>
>     </Record>
> </Annotation>
>  
> <Annotation Term="UI.ConnectedFields" Qualifier="ConnectedData">
>     <Record Type="UI.ConnectedFieldsType">
>         <PropertyValue Property="Data">
>             <Record Type="Core.Dictionary">
>                 <PropertyValue Property="PurchaseOrderByCustomerr">
>                     <Record Type="UI.DataField">
>                         <Annotation Term="UI.Importance" EnumMember="UI.ImportanceType/High"/>
>                         <PropertyValue Property="Value" Path="PurchaseOrderByCustomer"/>
>                     </Record>
>                 </PropertyValue>
>                 <PropertyValue Property="ShippingCondition">
>                     <Record Type="UI.DataField">
>                         <Annotation Term="UI.Importance" EnumMember="UI.ImportanceType/High"/>
>                         <PropertyValue Property="Value" Path="ShippingCondition"/>
>                     </Record>
>                 </PropertyValue>
>             </Record>
>         </PropertyValue>
>         <PropertyValue Property="Label" String="Connected Data"/>
>         <PropertyValue Property="Template" String="{ShippingCondition} - {PurchaseOrderByCustomerr}"/>
>     </Record>
> </Annotation>
>  
> .....
> <Annotation Term="UI.FieldGroup" Qualifier="OrderData">
>     <Record Type="UI.FieldGroupType">
>         <PropertyValue Property="Data">
>             <Collection>
>                 <Record Type="UI.DataFieldForAnnotation">
>                     <PropertyValue Property="Target" AnnotationPath="@UI.ConnectedFields#ConnectedDateTime"/>
>                 </Record>
>                 <Record Type="UI.DataFieldForAnnotation">
>                     <PropertyValue Property="Target" AnnotationPath="@UI.ConnectedFields#ConnectedData"/>
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
> @UI.connectedFields: [
>   {
>     importance: #HIGH,
>     name: 'SalesOrderDate',
>     qualifier: 'ConnectedDateTime',
>     template: '{SalesOrderDate} / {SalesOrderTime}',
>     groupLabel: 'Connected DateTime'
>   }
> ]
> SALESORDERDATE;
> 
> @UI.connectedFields: [
>   {
>     importance: #HIGH,
>     name: 'SalesOrderTime',
>     qualifier: 'ConnectedDateTime'
>   }
> ]
> TRIALTOD;
> 
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> ConnectedFields #ConnectedData   : {
>         Label : 'Connected Data',
>         Template: '{ShippingCondition} - {PurchaseOrderByCustomerr}',
>         Data: {
>          ShippingCondition:   {
>                 $Type             : 'UI.DataField',
>                 Value             : ShippingCondition,
>                 ![@UI.Importance] : #High
>             },
>         PurchaseOrderByCustomerr: {
>                 $Type             : 'UI.DataField',
>                 Value             : PurchaseOrderByCustomer,
>                 ![@UI.Importance] : #High
>             }
>         }
>     },
>     ConnectedFields #ConnectedDateTime   : {
>         Label : 'Connected DateTime',
>         Template: '{SalesOrderDate} / {SalesOrderTime}',
>         Data: {
>          SalesOrderDate:   {
>                 $Type             : 'UI.DataField',
>                 Value             : SalesOrderDate,
>                 ![@UI.Importance] : #High
>             },
>         SalesOrderTime: {
>                 $Type             : 'UI.DataField',
>                 Value             : TrialTOD,
>                 ![@UI.Importance] : #High
>             }
>         }
>     },
> 
> FieldGroup #OrderData                           : {Data : [
> ….
> {
>         $Type           : 'UI.DataFieldForAnnotation',
>         Target          : '@UI.ConnectedFields#ConnectedDateTime'
>     },
> {
>         $Type           : 'UI.DataFieldForAnnotation',
>         Target          : '@UI.ConnectedFields#ConnectedData'
>     } 
> ….
> ]}
> 
> ```

> ### Restriction:  
> -   Connected fields can only be configured in sections that belong to a form, so connected fields cannot be configured in a header section.
> 
> -   Connected fields cannot be rendered in a table.



### Navigation with Semantically Connected Fields

You can render semantically connected fields as a link to enable navigation using these fields. Note that you need to define the navigation details for the data fields that make up the semantically connected fields \(that is, are part of the `ConnectedFields` annotation\).

The following types of navigation are allowed:

-   `DataFieldWithURL`
-   `SemanticObject` associated with the data field
-   `DataFieldWithIntentBasedNavigation` \(with `Action` as an optional term\)
-   `DataFieldWithNavigationPath`

For more information about how to configure navigation using fields, see [Navigation from an App \(Outbound Navigation\)](navigation-from-an-app-outbound-navigation-d782acf.md).



<a name="loiocb1748ea9b984251addc03718d98df35__section_yr3_gt2_m4b"/>

## More Information

For more information, see the section about [forms and form groups](https://experience.sap.com/fiori-design-web/form/), and about [forms in the object page](https://experience.sap.com/fiori-design-web/object-page/#forms) in the SAP Fiori design guidelinesc.

