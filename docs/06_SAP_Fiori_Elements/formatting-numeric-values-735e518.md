<!-- loio735e518fcadb44c2b434f5f7b49bfcde -->

# Formatting Numeric Values

Numeric values in overview pages appear in their short format, using the SAPUI5 `sap.ui.core.format.NumberFormat` utility. You can configure the number of decimal points to display by using information provided in the OData metadata file, or by using annotations.



In the following example, the `scale` attribute in the OData metadata is set to 3, indicating that the properties `Price`, `Width`, `Depth`, and `Height` will be displayed with three decimal points.

> ### Sample Code:  
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

You can also provide number formatting information in the annotation document in the `com.sap.vocabularies.UI.v1.DataPoint` term, by using the `ValueFormat` property. The `NumberOfFractionalDigits` property can be used to determine the number of decimal points.

In the following example, using the `com.sap.vocabularies.UI.v1.DataPoint ValueFormat` property, the number of decimal points displayed for the `Price` property is 1, as defined in the `NumberOfFractionalDigits` property.

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

