<!-- loiof57373d38df5413aab9422e185c9c9a6 -->

# Configuring the List Area

You can configure the list area by defining values, navigation properties, and numeric data points and contact information.



## Defining List Values with `DataField`

Use the `DataField` property to display text values in the list. Each `DataField` becomes one entry, where `Label` is the field label and `Value` is the property path that supplies the data.

The following sample code defines four list entries: `Order ID`, two `Customer` entries where one references a navigation property and the other references a direct property, and a `TaxAmount` entry that uses a `DataPoint`.

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotation Term="com.sap.vocabularies.UI.v1.LineItem" Qualifier="View4">
>    <Collection>
>       <Record Type="com.sap.vocabularies.UI.v1.DataField">
>          <PropertyValue Property="Label" String="Order ID" />
>          <PropertyValue Property="Value" Path="SalesOrderID" />
>       </Record>
>       <Record Type="com.sap.vocabularies.UI.v1.DataField">
>          <PropertyValue Property="Label" String="Customer" />
>          <PropertyValue Property="Value" Path="ToBusinessPartner/EmailAddress" />
>       </Record>
>       <Record Type="com.sap.vocabularies.UI.v1.DataField">
>          <PropertyValue Property="Label" String="Customer" />
>          <PropertyValue Property="Value" Path="CustomerName" />
>       </Record>
>       <Record Type="com.sap.vocabularies.UI.v1.DataFieldForAnnotation">
>          <PropertyValue Property="Label" String="TaxAmount" />
>          <PropertyValue Property="Target" AnnotationPath="@com.sap.vocabularies.UI.v1.DataPoint#TaxAmount" />
>       </Record>
>    </Collection>
> </Annotation>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> 
> @UI.lineItem: [
>   {
>     label: 'Order ID',
>     position: 10,
>     qualifier: 'View4'
>   }
> ]
> SALESORDERID;
> 
> @UI.lineItem: [
>   {
>     label: 'Customer',
>     value: '_BUSINESSPARTNER.EMAILADDRESS',
>     position: 20,
>     qualifier: 'View4'
>   }
> ]
> TOBUSINESSPARTNER/EMAILADDRESS;
> 
> @UI.lineItem: [
>   {
>     label: 'Customer',
>     position: 30,
>     qualifier: 'View4'
>   }
> ]
> CUSTOMERNAME;
> 
> @UI.lineItem: [
>   {
>     label: 'TaxAmount',
>     valueQualifier: 'TaxAmount',
>     type: #AS_DATAPOINT,
>     position: 40,
>     qualifier: 'View4'
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
> UI.LineItem #View4 : [
>     {
>         $Type : 'UI.DataField',
>         Label : 'Order ID',
>         Value : SalesOrderID
>     },
>     {
>         $Type : 'UI.DataField',
>         Label : 'Customer',
>         Value : ToBusinessPartner.EmailAddress
>     },
>     {
>         $Type : 'UI.DataField',
>         Label : 'Customer',
>         Value : CustomerName
>     },
>     {
>         $Type : 'UI.DataFieldForAnnotation',
>         Label : 'TaxAmount',
>         Target : '@UI.DataPoint#TaxAmount'
>     }
> ]
> 
> ```



## Defining List Entries with `DataFieldForAnnotation`

For list entries that aren't simple text values, use `DataFieldForAnnotation` to reference a richer annotation.


<table>
<tr>
<th valign="top">

Use case

</th>
<th valign="top">

Annotation

</th>
<th valign="top">

Result

</th>
</tr>
<tr>
<td valign="top">

Numeric values with formatting

</td>
<td valign="top">

`com.sap.vocabularies.UI.v1.DataPoint`

</td>
<td valign="top">

A formatted value with optional criticality and trend.

</td>
</tr>
<tr>
<td valign="top">

Contact information

</td>
<td valign="top">

`com.sap.vocabularies.Communication.v1.Contact`

</td>
<td valign="top">

Quick-view contact details such as phone, email.

</td>
</tr>
</table>



### Numeric Values with `DataPoint`

The following annotation defines a `DataPoint` for `TaxAmount`. A `DataFieldForAnnotation` in the `LineItem` \(shown in the previous section\) references this `DataPoint` to render the entry.

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotation Term="com.sap.vocabularies.UI.v1.DataPoint" Qualifier="TaxAmount">
>    <Record Type="com.sap.vocabularies.UI.v1.DataPointType">
>       <PropertyValue Property="Title" String="TaxAmount" />
>       <PropertyValue Property="Value" Path="TaxAmount" />
>    </Record>
> </Annotation>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> 
> @UI.dataPoint: {
>   title: 'TaxAmount'
> }
> TaxAmount;
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> UI.DataPoint #TaxAmount : {
>     $Type : 'UI.DataPointType',
>     Title : 'TaxAmount',
>     Value : TaxAmount
> }
> ```



### Contact Information with `Contact`

You can display quick-view contact information in a list entry using the `com.sap.vocabularies.Communication.v1.Contact` annotation. The annotation can include phone numbers, email addresses, and other contact properties.

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotation Term="com.sap.vocabularies.Communication.v1.Contact">
>    <Record>
>       <PropertyValue Property="tel">
>          <Collection>
>             <Record>
>                <PropertyValue Property="type" EnumMember="com.sap.vocabularies.Communication.v1.PhoneType/fax" />
>                <PropertyValue Property="uri" Path="FaxNumber" />
>             </Record>
>             <Record>
>                <PropertyValue Property="type" EnumMember="com.sap.vocabularies.Communication.v1.PhoneType/work com.sap.vocabularies.Communication.v1.PhoneType/preferred" />
>                <PropertyValue Property="uri" Path="PhoneNumber" />
>             </Record>
>          </Collection>
>       </PropertyValue>
>       <PropertyValue Property="email">
>          <Collection>
>             <Record>
>                <PropertyValue Property="type" EnumMember="com.sap.vocabularies.Communication.v1.ContactInformationType/preferred com.sap.vocabularies.Communication.v1.ContactInformationType/work" />
>                <PropertyValue Property="address" Path="EmailAddress" />
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
> define view VIEWNAME
> {
>   @Semantics.eMail.address: true
>   @Semantics.eMail.type:  [#WORK]
>   EmailAddress,
>    
>   @Semantics.telephone.type:  [ #FAX ] 
>   FaxNumber,
>   
>   @Semantics.telephone.type:  [ #WORK]
>   PhoneNumber
> }
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> Communication.Contact : {
>     tel : [
>         {
>             type : #fax,
>             uri : FaxNumber
>         },
>         {
>             type : [ #work, #pref ],
>             uri : PhoneNumber
>         }
>     ],
>     email : [
>         {
>             type : [ #pref, #work ],
>             address : EmailAddress
>         }
>     ]
> }
> ```



## Configuring Navigation in the List Area

You can configure list entries that trigger navigation when a user clicks them. Use one of the following annotation terms:


<table>
<tr>
<th valign="top">

Annotation term

</th>
<th valign="top">

Use for

</th>
</tr>
<tr>
<td valign="top">

`com.sap.vocabularies.UI.v1.DataFieldForIntentBasedNavigation`

</td>
<td valign="top">

Intent-based navigation to another SAP Fiori application.

</td>
</tr>
<tr>
<td valign="top">

`com.sap.vocabularies.UI.v1.DataFieldWithUrl`

</td>
<td valign="top">

Navigation to an external app or website.

</td>
</tr>
</table>

> ### Note:  
> The recommended way to configure intent-based navigation using `DataFieldForIntentBasedNavigation` property. However, use `DataFieldWithUrl` only when you need to navigate to a specific application route that isn't configured as a target mapping. The overview page recognizes these URLs as an intent-based navigation and opens the application in the same tab, with relevant context.

**Related Information**  


[List Cards](list-cards-56f39e0.md "You can use list cards to display lists of records according to the configuration in the com.sap.vocabularies.UI.v1.LineItem term. List cards display up to six fields of data in each list item.")

[Configuring the List Card Header Area](configuring-the-list-card-header-area-9f95bdc.md "You can configure several properties of a list card header, including the title, subtitle, KPI value, view switch, and navigation.")

[Configuring the List Card](configuring-the-list-card-7f65716.md "You can configure several attributes of a list card, including text formatting, filtering, sorting.")

