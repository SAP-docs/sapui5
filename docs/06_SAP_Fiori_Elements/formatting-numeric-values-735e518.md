<!-- loio735e518fcadb44c2b434f5f7b49bfcde -->

# Formatting Numeric Values

You can control how numbers are displayed in cards, specifically the number of decimal points, using either the OData metadata file or annotations.



> ### Note:  
> Numeric values in overview pages appear in their short format, using the SAPUI5 `sap.ui.core.format.NumberFormat` utility.



## Formatting Numeric Values Using OData Metadata

In the OData metadata, the `Scale` attribute defines the number of decimal digits for a numeric property. Cards use this value when displaying the property.

In the following code sample, setting `Scale="3"` for the `Price`, `Width`, `Depth`, and `Height` properties results in three decimal places being displayed for all four properties.

> ### Sample Code:  
> XML Annotation
> 
> ```
> <EntityType Name="Product" sap:content-version="1">
>     ...
>     <Property Name="Price" Type="Edm.Decimal" Precision="16" Scale="3" sap:unit="CurrencyCode" sap:label="Unit Price"/>
>     <Property Name="Width" Type="Edm.Decimal" Precision="13" Scale="3" sap:unit="DimUnit" sap:label="Dimensions"/>
>     <Property Name="Depth" Type="Edm.Decimal" Precision="13" Scale="3" sap:unit="DimUnit" sap:label="Dimensions"/>
>     <Property Name="Height" Type="Edm.Decimal" Precision="13" Scale="3" sap:unit="DimUnit" sap:label="Dimensions"/>
>     ...
> </EntityType>
> ```



## Formatting Numeric Values Using Annotations

You can also define formatting of numeric values using the `ValueFormat` property in the `com.sap.vocabularies.UI.v1.DataPoint` annotation.

The `ValueFormat` is a `NumberFormat` property with the following properties:

**Properties for Formatting Numbers**


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

`ScaleFactor` 

</td>
<td valign="top">

A scale factor applied to large numbers \(for example, divide by 1000 to display values in thousands\).

</td>
</tr>
<tr>
<td valign="top">

`NumberOfFractionalDigits` 

</td>
<td valign="top">

Number of decimal digits to display.

</td>
</tr>
</table>

The following sample code shows the `Price` property formatted with one decimal digit and a scale factor of 1000:

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotation Term="com.sap.vocabularies.UI.v1.DataPoint" Qualifier="Price">
>     <Record Type="com.sap.vocabularies.UI.v1.DataPointType">
>         <PropertyValue Property="Title" String="Unit Price"/>
>         <PropertyValue Property="Description" Path="Name"/>
>         <PropertyValue Property="Value" Path="Price"/>
>         <PropertyValue Property="ValueFormat">
>             <Record Type="com.sap.vocabularies.UI.v1.NumberFormat">
>                 <PropertyValue Property="ScaleFactor" Decimal="1000"/>
>                 <PropertyValue Property="NumberOfFractionalDigits" Iint="1"/>
>             </Record>
>         </PropertyValue>
>     </Record>
> </Annotation>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> 
> @UI.dataPoint: {
>   title: 'Unit Price',
>   description: 'Name',
>   valueFormat: {
>     scaleFactor: 1000,
> 	numberOfFractionalDigits: 1
>   }
> }
> Price;
> 
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> 
> UI.DataPoint #Price : {
>     $Type : 'UI.DataPointType',
>     Title : 'Unit Price',
>     Description : Name,
>     Value : Price,
>     ValueFormat : {
>         $Type : 'UI.NumberFormat',
>         ScaleFactor : 1000,
>         NumberOfFractionalDigits : 1
>     }
> }
> 
> ```

**Related Information**  


[Configuring Card Properties](configuring-card-properties-53b0791.md "This section describes the configuration items relevant for all overview page cards. All cards inherit a set of generic capabilities such as a card header, content area, and navigation support.")

