<!-- loioca00ee45fe344a73998f482cb2e669bb -->

# Hiding Features Using the UI.Hidden Annotation

You can use the `UI.Hidden` annotation to hide or display specific features on the object page.

The default value of the `UI.Hidden` annotation is `true`, that is, a feature using the `UI.Hidden` annotation term isn't visible on the UI. These are the values you can set:


<table>
<tr>
<th valign="top">

Annotation



</th>
<th valign="top">

System Behavior



</th>
</tr>
<tr>
<td valign="top">

`Hiding Features Using<Annotation Term="UI.Hidden" Bool="false"/>`



</td>
<td valign="top">

The feature is visible



</td>
</tr>
<tr>
<td valign="top">

`<Annotation Term="UI.Hidden" Bool="true"/>`



</td>
<td valign="top">

The feature is not visible



</td>
</tr>
<tr>
<td valign="top">

`<Annotation Term="UI.Hidden" Path="Edit_ac"/>`



</td>
<td valign="top">

The feature is visible if the path evaluates to `false` and is not visible if the path evaluates to `true`.

> ### Note:  
> The path must point to a Boolean property. Expression bindings, for instance, using a negation with !, are not supported behind the path. For more information, see [Expression Binding](../04_Essentials/expression-binding-daf6852.md).



</td>
</tr>
<tr>
<td valign="top">

`<Annotation Term="UI.Hidden" />` 



</td>
<td valign="top">

The default value is `true` so the feature will not be visible



</td>
</tr>
</table>



<a name="loioca00ee45fe344a73998f482cb2e669bb__section_wr1_hxz_dnb"/>

## Header Facets on Object Page

You can hide header facets on the object page.

> ### Sample Code:  
> XML Annotation
> 
> ```
> <Annotation Term="UI.HeaderFacets">
>     <Collection>
>         <Record Type="UI.ReferenceFacet">
>             <PropertyValue Property="Label" String="Net Amount" />
>             <PropertyValue Property="ID" String="NetValueDataHeader" />
>             <PropertyValue Property="Target" AnnotationPath="@UI.DataPoint#NetValue" />
>             <Annotation Term="UI.Hidden" Bool="true" />
>         </Record>
>         <Record Type="UI.ReferenceFacet">
>             <PropertyValue Property="Label" String="Contact Info" />
>             <PropertyValue Property="ID" String="ContactHeader" />
>             <PropertyValue Property="Target" AnnotationPath="_SoldToParty/@Communication.Contact" />
>              <Annotation Term="UI.Hidden" />
>         </Record>
>         <Record Type="UI.ReferenceFacet">
>             <PropertyValue Property="Label" String="Credit Limit Consumption" />
>             <PropertyValue Property="ID" String="CreditLimitChartHeader" />
>             <PropertyValue Property="Target" AnnotationPath="_CreditLimitDetails/@UI.Chart#CreditLimitChart" />
>              <Annotation Term="UI.Hidden" Path="editActionIsEnabled" />
>         </Record>                       
>     </Collection>
> </Annotation>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> @UI.Facet: [
>   {
>     hidden: true,
>     label: 'Net Amount',
>     id: 'NetValueDataHeader',
>     targetQualifier: 'NetValue',
>     type: #DATAPOINT_REFERENCE,
>     purpose: #HEADER
>   },
>   {
>     hidden: true,
>     label: 'Contact Info',
>     id: 'ContactHeader',
>     targetElement: '_SOLDTOPARTY',
>     type: #CONTACT_REFERENCE,
>     purpose: #HEADER
>   },
>   {
>     hidden: #(‘editActionIsEnabled’),
>     label: 'Credit Limit Consumption',
>     id: 'CreditLimitChartHeader',
>     targetQualifier: 'CreditLimitChart',
>     targetElement: '_CREDITLIMITDETAILS',
>     type: #CHART_REFERENCE,
>     purpose: #HEADER
>   }
> ]
> Test;
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> HeaderFacets                                    : [
>     {
>         $Type             : 'UI.ReferenceFacet',
>         Label             : 'Net Amount',
>         ID                : 'NetValueDataHeader',
>         Target            : '@UI.DataPoint#NetValue',
>         ![@UI.Hidden] : true   
>      },
>     {
>         $Type             : 'UI.ReferenceFacet',
>         Label             : Contact Info',
>         ID                : 'ContactHeader',
>         Target            : ‘_SoldToParty/@Communication.Contact’,
>         ![@UI.Hidden] : true 
>     },
>     {
>         $Type             : 'UI.ReferenceFacet',
>         Label             : 'Credit Limit Consumption',
>         ID                : 'CreditLimitChartHeader',
>         Target            : '_CreditLimitDetails/@UI.Chart#CreditLimitChart',
>         ![@UI.Hidden] : editActionIsEnabled
>     }
>     ]
> ```



<a name="loioca00ee45fe344a73998f482cb2e669bb__section_ng3_mxz_dnb"/>

## Sections on Object Page

You can hide an entire section. To hide one subsection, you can hide content within a section. See also the section about DataField Records in Header Facets in this topic.

   
  
**Sections on Object Page**

 ![](images/Section_Object_Page_1_4d0d970.png "Sections on Object Page") 

> ### Sample Code:  
> XML Annotation
> 
> ```
> <Annotation Term="UI.Facets">
>     <Collection>
>         <Record Type="UI.CollectionFacet">
>             <PropertyValue Property="Label" String="Header" />
>             <PropertyValue Property="ID" String="HeaderInfo" />
>             <PropertyValue Property="Facets">
>                 <Collection>
>                     <Record Type="UI.CollectionFacet">
>                         <PropertyValue Property="ID" String="GeneralInfo" />
>                         <PropertyValue Property="Label" String="General Information" />
>                         <PropertyValue Property="Facets">
>                             <Collection>
>                                 ……..
>                                …….
>                             </Collection>
>                         </PropertyValue>
>                        <Annotation Term="UI.Hidden" Bool="true" />
>                    </Record>
>                </Collection>
>            </PropertyValue>
>        </Record>
>     </Collection>
> </Annotation>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> @UI.Facet: [
>   {
>     label: 'Header',
>     id: 'HeaderInfo',
>     type: #COLLECTION,
>     purpose: #STANDARD
>   },
>   {
>     hidden: true,
>     id: 'GeneralInfo',
>     label: 'General Information',
>     parentId: 'HeaderInfo',
>     purpose: #STANDARD
>   },
>   …..
>   …..
> ]
> Test;
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> Facets                                          : [
> {
>         $Type  : 'UI.CollectionFacet',
> s
>         Label  : 'Header',
>         ID     : 'HeaderInfo',
>         Facets : [
>         {
>                 $Type             : 'UI.CollectionFacet',
>                 ID                : 'GeneralInfo',
>                 Label             : 'General Information',
>                 Facets            : [
>                     ……
>                    ……
>                 ],
>                 ![@UI.Hidden]     : true
>         }]
> }]
> 
> ```



<a name="loioca00ee45fe344a73998f482cb2e669bb__section_mxq_rxz_dnb"/>

## Content in Quick Views

You can hide content in quick views, such as field groups like this:

   
  
**Field Groups in Quick Views on Object Page**

 ![](images/Content_in_Quick_Views_1_5ee9d69.png "Field Groups in Quick Views on Object Page") 

> ### Sample Code:  
> XML Annotation
> 
> ```
> <Annotation Term="UI.QuickViewFacets">
>     <Collection>
>         <Record Type="UI.ReferenceFacet">
>             <PropertyValue Property="Label" String="Material" />
>             <PropertyValue Property="Target" AnnotationPath="@Communication.Contact" />
>             <Annotation Term="UI.Hidden" Bool="true" />
>         </Record>
>         <Record Type="UI.ReferenceFacet">
>             <PropertyValue Property="Label" String="Address" />
>             <PropertyValue Property="Target" AnnotationPath="@UI.FieldGroup#SoldToQuickView" />
>             <Annotation Term="UI.Hidden" Path="edit_Ac" />
>         </Record>
>     </Collection>
> </Annotation>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> @UI.Facet: [
>   {
>     hidden: true,
>     label: 'Material',
>     type: #CONTACT_REFERENCE,
>     purpose: #QUICK_VIEW
>   },
>   {
>     hidden: #(‘edit_Ac’),
>     label: 'Address',
>     targetQualifier: 'SoldToQuickView',
>     type: #FIELDGROUP_REFERENCE,
>     purpose: #QUICK_VIEW
>   }
> ]
> Test;
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> UI.QuickViewFacets        : [
>    {
>         $Type  : 'UI.ReferenceFacet',
>         Label  : 'Material',
>         Target : ‘@Communication.Contact’,
>         ![@UI.Hidden]     : true
>     },
>     {
>         $Type  : 'UI.ReferenceFacet',
>         Label  : 'Address',
>         Target : ‘@UI.FieldGroup#SoldToQuickView’,
>         ![@UI.Hidden]     : edit_Ac
>    }
> ]
> ```

You can also use this annotation to hide the content in quick views in the list report.



<a name="loioca00ee45fe344a73998f482cb2e669bb__section_ivf_xxz_dnb"/>

## DataField Records in Header Facets

You can hide DataField records, for example, UI.DataField, UI.DataFieldForAnnotation in facets as shown below:

   
  
**DataField Records in Header Facets**

 ![](images/Header_Facets_1_ba72afc.png "DataField Records in Header Facets") 

> ### Sample Code:  
> XML Annotation
> 
> ```
> <Annotation Term="UI.FieldGroup" Qualifier="OrgData">
>     <Record Type="UI.FieldGroupType">
>         <PropertyValue Property="Data">
>             <Collection>
>                 <Record Type="UI.DataField">
>                     <PropertyValue Property="Value" Path="SalesOrganization" />
>                     <Annotation Term="UI.Hidden" Bool="true" />
>                 </Record>
>                <Record Type="UI.DataField">
>                    <PropertyValue Property="Value" Path="DistributionChannel" />
>                    <Annotation Term="UI.Hidden" Path="Delivered" />
>                </Record>
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
>     hidden: true,
>     value: 'SALESORGANIZATION',
>     type: #STANDARD,
>     qualifier: 'OrgData'
>   }
> ]
> SALESORGANIZATION;
> 
> @UI.fieldGroup: [
>   {
>     hidden: #(‘Delivered’),
>     value: 'DISTRIBUTIONCHANNEL',
>     type: #STANDARD,
>     qualifier: 'OrgData'
>   }
> ]
> DISTRIBUTIONCHANNEL;
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> FieldGroup #OrgData                             : [
> {
>         Label : 'Org Data',
>         Data  : [
>         {
>             $Type             : 'UI.DataField',
>             Value             : SalesOrganization,
>             ![@UI.Hidden]     : true
>         }
>         {
>             $Type             : 'UI.DataField',
>             Value             : DistributionChannel,
>             ![@UI.Hidden]     : Delivered
>         }]
> }]
> 
>  
> ```



<a name="loioca00ee45fe344a73998f482cb2e669bb__section_odp_cyz_dnb"/>

## DataField Records in Facets

You can hide DataField records, for example, UI.DataField, UI.DataFieldForAnnotation in facets as shown below:

   
  
**DataField Records in Facets**

 ![](images/DataField_Records_in_Facets_1_b6dea7a.png "DataField Records in Facets") 

> ### Sample Code:  
> XML Annotation
> 
> ```
> <Annotation Term="UI.FieldGroup" Qualifier="OrderData">
>      <Record Type="UI.FieldGroupType">
>          <PropertyValue Property="Data">
>             <Collection>
>                 <Record Type="UI.DataField">
>                     <PropertyValue Property="Value" Path="SoldToParty" />
>                     <Annotation Term="UI.Hidden" Bool="true" />
>                 </Record>
>                 <Record Type="UI.DataField">
>                     <PropertyValue Property="Value" Path="ImageUrl" />
>                     <Annotation Term="UI.Hidden" Path="edit_Ac" />
>                 </Record>
>                  …..
>                    ……
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
>     hidden: true,
>     value: 'SOLDTOPARTY',
>     type: #STANDARD,
>     qualifier: 'OrderData'
>   }
> ]
> SOLDTOPARTY;
> 
> @UI.fieldGroup: [
>   {
>     hidden: #(‘edit_Ac’),
>     value: 'IMAGEURL',
>     type: #STANDARD,
>     qualifier: 'OrderData'
>   }
> ]
> IMAGEURL;
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> FieldGroup #OrderData                           : {Data : [
>    {
>         $Type             : 'UI.DataField',
>         Value             : SoldToParty,
>         ![@UI.Hidden]     : true
>    },
>    {
>         $Type             : 'UI.DataField',
>         Value             : ImageUrl,
>         ![@UI.Hidden]     : edit_Ac
>     },
>     …..
>    ……
> ]}
> ```



<a name="loioca00ee45fe344a73998f482cb2e669bb__section_f3c_sv2_vwb"/>

## DataField Records in Tables

If `UI.Hidden` is provided a static `true` value for any field, then the column isn't rendered at all.

> ### Sample Code:  
> XML Annotation
> 
> ```
> <Annotation Term="UI.LineItem">
>     <Collection>
>         <Record Type="UI.DataFieldForAction">
>             <PropertyValue Property="Label" String="Bound Action with params" />
>             <PropertyValue Property="Action" String="com.c_salesordermanage_sd_aggregate.CreateWithSalesOrderType" />
>             <Annotation Term="UI.Hidden" Bool="true" />
>         </Record>
>     </Collection>
> </Annotation>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> @UI.lineItem: [
>   {
>     hidden: true,
>     label: 'Bound Action with params',
>     dataAction: 'com.c_salesordermanage_sd_aggregate.CreateWithSalesOrderType',
>     type: #FOR_ACTION
>   },
> ]
> TEST;
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> LineItem                                        : {
>         $value             : [
>         {
>             $Type  : 'UI.DataFieldForAction',
>             Label  : 'Bound Action with params',
>             Action : 'com.c_salesordermanage_sd.CreateWithSalesOrderType',
>             ![@UI.Hidden] : true
>         },    
> ]
> ```

> ### Note:  
> Even if you hide all determining actions in the footer, the footer is still displayed on the UI since it is required to show any bound messages coming from the back end.



<a name="loioca00ee45fe344a73998f482cb2e669bb__section_bnn_hyz_dnb"/>

## Additional Features in SAP Fiori Elements for OData V2

**Header Facets on the Object Page**

You cannot use the `UI.Hidden` annotation to hide the entire `UI.FieldGroup` and `UI.Identification`. If you want to hide these, you have to hide all `DataField` records in them.

**DataField Records in Facets**

You cannot use the `UI.Hidden` annotation to hide the entire `UI.FieldGroup` and `UI.Identification`. If you want to hide these, you have to hide all `DataField` records within them or use the `UI.Hidden` to hide the wrapper around the `FieldGroup` which is normally the `ReferenceFacet` or the `DataFieldForAnnotation` as shown in the examples in this page.

**DataField Records in Tables**

To hide table columns, the `UI.Hidden` path needs to refer to the property of the header instance, for example:

`<Annotation Term="UI.Hidden" Path="to_Product/Edit_ac">`

In the following example, `STTA_C_MP_Product` is the entity set of the object page header and `STTA_C_MP_ProductText` is the entity set of the smart table on the object page, and `to_Product` is the navigation property from `STTA_C_MP_ProductText` to `STTA_C_MP_Product`.

  
  
**DataField Records in Tables**

 ![](images/Data_Field_Records_Smart_Tables_74a9d75.png "DataField Records in Tables") 

> ### Note:  
> Hiding DataField Records
> 
> The *See More* button is visible even if the content within it is hidden.



<a name="loioca00ee45fe344a73998f482cb2e669bb__section_lvf_5yz_dnb"/>

## Additional Features in SAP Fiori Elements for OData V4

**Header Facets on the Object Page**

You cannot use the `UI.Hidden` annotation to hide the entire `UI.FieldGroup` and `UI.Identification`. If you want to hide these, you have to hide all `DataField` records in them or use the `UI.Hidden` to hide the wrapper around the `FieldGroup` which is normally the `ReferenceFacet` or the `DataFieldForAnnotation` as shown in the examples in this page.

**DataField Records in Facets**

You cannot use the `UI.Hidden` annotation to hide the entire `UI.FieldGroup` and `UI.Identification`. If you want to hide these, you've to hide all `DataField` records within them or use the `UI.Hidden` to hide the wrapper around the `FieldGroup` which is normally the `ReferenceFacet` or the `DataFieldForAnnotation` as shown in the examples in this page.

**DataField Records in Tables**

If `UI.Hidden` is provided a static `true` value for any field, then the column isn't rendered at all. But if there is a path based value for this, the field isn't shown for the instances for which the `UI.Hidden` evaluates to `true`.

> ### Note:  
> For a path based value for `UI.Hidden`, even if the path evaluates to `true` for all the rows, only the field is hidden and not the entire table column.

  
  
**DataField Records in Tables**

 ![](images/DataFieldRecords1_bd2e691.png "DataField Records in Tables") 

> ### Sample Code:  
> ```
> <Annotation Term="UI.LineItem">
>     <Collection>
>         <Record Type="UI.DataFieldForAnnotation">
>             <PropertyValue Property="Target" AnnotationPath="@UI.FieldGroup#multipleActionFields" />
>             <PropertyValue Property="Label" String="Sold-To Party" />
>             <Annotation Term="UI.Hidden" Path="Delivered" />
>         </Record>
>     </Collection>
> </Annotation>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> @UI.lineItem: [
>   {
>     hidden: true,
>     label: ‘Sold-To Party’,
>     type: #AS_FIELDGROUP, 
>     hidden: #(‘Delivered’),
>     valueQualifier: ' multipleActionFields'
>   }
> ]
> TEST;
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> LineItem                                        : {
>         $value             : [
>         {
>             $Type             : 'UI.DataFieldForAnnotation',
>             Target            : '@UI.FieldGroup#multipleActionFields',
>             Label             : 'Sold-To Party,
>             ![@UI.Hidden] : Delivered
>         }
> ]
> ```

