<!-- loiob408bfbd895d4123a90f95a088d53dfa -->

# Configuring the Table Area

You can configure the columns of a table card, their header and valies, by using the `com.sap.vocabularies.UI.v1.LineItem` annotation.



Each column is defined as a record within the annotation, with a `Label` for the header and a `Value` for the data path. You can also include numeric data points, contact information, and navigation links in the table area.



## Defining Table Columns with `DataField`

Use `DataField` to display text values in the table. Each `DataField` becomes one column where `Label` is the column header and `Value` is the property path that supplies the column data.

The following sample code defines four columns: `Order ID`, `Customer` referencing a navigation property, `Customer` referencing a direct property, and `Taxamount` that users a `DataPoint`.

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> 
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
>     position: 10 ,
>     qualifier: 'View4'
>   }
> ]
> SALESORDERID;
> 
> @UI.lineItem: [
>   {
>     label: 'Customer',
>     value: '_BUSINESSPARTNER.EMAILADDRESS',
>     position: 20 ,
>     qualifier: 'View4'
>   }
> ]
> _BUSINESSPARTNER;
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



## Defining Table Columns using `DataFieldForAnnotation`

For columns that aren't simple text values, use `DataFieldForAnnotation`. These column types are optional.


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



### Numeric values with `DataPoint`

The following annotation defines a `DataPoint` for `TaxAmount`. A `DataFieldForAnnotation` in the `LineItem` references this `DataPoint` to render the column.

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> 
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
> 
> UI.DataPoint #TaxAmount : {
>     $Type : 'UI.DataPointType',
>     Title : 'TaxAmount',
>     Value : TaxAmount
> }
> 
> ```



### Contact information with `Contact`

You can display quick-view contact information in a table column using the `com.sap.vocabularies.Communication.v1.Contact` annotation. The annotation can include phone numbers, email addresses, and other contact properties.

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
>                <PropertyValue Property="type" EnumMember="com.sap.vocabularies.Communication.v1.PhoneType/work com.sap.vocabularies.Communication.v1.PhoneType/preferred"/>
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
> No ABAP CDS annotation sample is available. Please use the local XML annotation.

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> 
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
> 
> ```



## Defining Table Columns For Navigation

You can also configure table columns that trigger navigation when a user clicks them. Use one of the following annotation terms:


<table>
<tr>
<th valign="top">

Annotation term

</th>
<th valign="top">

Used for

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
> The recommended way to configure intent-based navigation is by using `DataFieldForIntentBasedNavigation` property. However, use `DataFieldWithUrl` only when it requires to navigate to a specific application route that isn't configured as a target mapping. The overview page recognizes these URL's as intent-based navigation and opens the target application in the same tab, with relevant context.

**Related Information**  


[Table Cards](table-cards-167bf7c.md "You can use a table card to display a list of records in a three-column table layout.")

[Configuring the Table Card](configuring-the-table-card-9bc298e.md "You can configure the content on the table area with text alignment, filtering or grouping information.")

[Configuring the Table Card Header Area \(Optional\)](configuring-the-table-card-header-area-optional-05887bd.md "You can optionally configure the header area including the title, subtitle, KPI value, view switch, and navigation of a table card using the annotations and manifest.json file.")

