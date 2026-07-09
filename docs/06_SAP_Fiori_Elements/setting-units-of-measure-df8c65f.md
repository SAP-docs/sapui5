<!-- loiodf8c65f8de9b466b883742ba3814350f -->

# Setting Units of Measure

You can display the unit of measure next to numeric values by in cards. You can define it in the OData metadata file using the `sap:unit` attribute or the annotation document using the `Org.OData.Measures.V1.Unit`or `Org.OData.Measures.V1.ISOCurrency`.

> ### Note:  
> Overview pages support both `sap:unit` and `Org.OData.Measures.V1.*` annotations to ensure seamless compatibility with OData V2 and OData v4 services. When both annotations are defined, the OData V4 annotations take precedence over OData V2 ones. The recommended annotation depends on the OData version used:
> 
> -   OData V2: Use `sap:unit` for both units and currencies.
> 
> -   OData V4: Use `Org.OData.Measures.V1.Unit` for units and `Org.OData.Measures.V1.ISOCurrency` for currencies.



## Defining Units of Measure in the OData Metadata

In the OData metadata, define the unit by linking the numeric property to a separate property that contains the unit value. Use the following properties:

-   `sap:unit` on the numeric property to point to its unit property.

-   `sap:semantics="unit-of-measure"` on the unit property itself.

-   `sap:semantics="currency-code"` on a property that holds an ISO currency code.


In the following sample code of the `Product` entity type uses these annotations:.

-   The `Price` property uses the `CurrencyCode` property as its unit of measure.

-   `Width`, `Depth`, and `Height` properties have the `DimUnit` property as their unit of measure.

-   `WeightMeasure` property has the `WeightUnit` property as its unit of measure.


> ### Sample Code:  
> XML Annotation
> 
> ```
> <EntityType Name="Product" sap:content-version="1">
>     <Key>
>         <PropertyRef Name="ProductID"/>
>     </Key>
>     <Property Name="ProductID" Type="Edm.String" Nullable="false" MaxLength="10" sap:label="Product ID" sap:updatable="false"/>
>     <Property Name="TypeCode" Type="Edm.String" MaxLength="2" sap:label="Prod. Type Code"/>
>     <Property Name="Category" Type="Edm.String" MaxLength="40" sap:label="Prod. Cat."/>
>     <Property Name="Name" Type="Edm.String" MaxLength="255" sap:label="Product Name" sap:sortable="false" sap:filterable="false"/>
>     <Property Name="NameLanguage" Type="Edm.String" MaxLength="1" sap:label="Language" sap:creatable="false" sap:updatable="false" sap:sortable="false" sap:filterable="false"/>
>     <Property Name="Description" Type="Edm.String" MaxLength="255" sap:label="Prod.Descrip." sap:sortable="false" sap:filterable="false"/>
>     <Property Name="DescriptionLanguage" Type="Edm.String" MaxLength="1" sap:label="Language" sap:creatable="false" sap:updatable="false" sap:sortable="false" sap:filterable="false"/>
>     <Property Name="SupplierID" Type="Edm.String" MaxLength="10" sap:label="Bus. Part. ID"/>
>     <Property Name="SupplierName" Type="Edm.String" MaxLength="80" sap:label="Company Name" sap:creatable="false" sap:updatable="false"/>
>     <Property Name="TaxTarifCode" Type="Edm.Byte" sap:label="Prod. Tax Code"/>
>     <Property Name="MeasureUnit" Type="Edm.String" MaxLength="3" sap:label="Qty. Unit" sap:semantics="unit-of-measure"/>
>     <Property Name="WeightMeasure" Type="Edm.Decimal" Precision="13" Scale="3" sap:unit="WeightUnit" sap:label="Wt. Measure"/>
>     <Property Name="WeightUnit" Type="Edm.String" MaxLength="3" sap:label="Qty. Unit" sap:semantics="unit-of-measure"/>
>     <Property Name="CurrencyCode" Type="Edm.String" MaxLength="5" sap:label="Currency" sap:semantics="currency-code"/>
>     <Property Name="Price" Type="Edm.Decimal" Precision="16" Scale="3" sap:unit="CurrencyCode" sap:label="Unit Price"/>
>     <Property Name="Width" Type="Edm.Decimal" Precision="13" Scale="3" sap:unit="DimUnit" sap:label="Dimensions"/>
>     <Property Name="Depth" Type="Edm.Decimal" Precision="13" Scale="3" sap:unit="DimUnit" sap:label="Dimensions"/>
>     <Property Name="Height" Type="Edm.Decimal" Precision="13" Scale="3" sap:unit="DimUnit" sap:label="Dimensions"/>
>     <Property Name="DimUnit" Type="Edm.String" MaxLength="3" sap:label="Dim. Unit" sap:semantics="unit-of-measure"/>
>     <Property Name="CreatedAt" Type="Edm.DateTime" Precision="7" sap:label="Time Stamp" sap:creatable="false" sap:updatable="false"/>
>     <Property Name="ChangedAt" Type="Edm.DateTime" Precision="7" ConcurrencyMode="Fixed" sap:label="Time Stamp" sap:creatable="false" sap:updatable="false"/>
>     <NavigationProperty Name="ToSalesOrderLineItems" Relationship="GWSAMPLE_BASIC.Assoc_Product_SalesOrderLineItems" FromRole="FromRole_Assoc_Product_SalesOrderLineItems" ToRole="ToRole_Assoc_Product_SalesOrderLineItems"/>
>     <NavigationProperty Name="ToSupplier" Relationship="GWSAMPLE_BASIC.Assoc_BusinessPartner_Products" FromRole="ToRole_Assoc_BusinessPartner_Products" ToRole="FromRole_Assoc_BusinessPartner_Products"/>
> </EntityType>
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
> 
> 
> ```



## Defining Units of Measure in the Annotation File

You can define units of measure using the following OData annotations:

**Annotations for Units of Measure**


<table>
<tr>
<th valign="top">

Annotation

</th>
<th valign="top">

Used For

</th>
</tr>
<tr>
<td valign="top">

`Org.OData.Measures.V1.Unit` 

</td>
<td valign="top">

A standard unit of measure. For example, kg, cm.

</td>
</tr>
<tr>
<td valign="top">

`Org.OData.Measures.V1.ISOCurrency` 

</td>
<td valign="top">

An ISO currency code. For example, EUR, USD.

</td>
</tr>
</table>

The following sample code use these annotations:

-   `WeightMeasure` is annotated with `Org.OData.Measures.V1.Unit` and refers to the `WeightUnit` property.

-   `Depth`, and `Height` properties are annotated with `Org.OData.Measures.V1.Unit` and refers to the `DimUnit` property.

-   the `Price` property is annotated in the annotation document with `Org.OData.Measures.V1.ISOCurrency` and refers to the `CurrencyCode` property.


> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotations Target="GWSAMPLE_BASIC.Product/WeightMeasure">
>     <Annotation Term="Org.OData.Measures.V1.Unit" Path="WeightUnit"/>
> </Annotations>
> <Annotations Target="GWSAMPLE_BASIC.Product/Width">
>     <Annotation Term="Org.OData.Measures.V1.Unit" Path="DimUnit"/>
> </Annotations>
> <Annotations Target="GWSAMPLE_BASIC.Product/Depth">
>     <Annotation Term="Org.OData.Measures.V1.Unit" Path="DimUnit"/>
> </Annotations>
> <Annotations Target="GWSAMPLE_BASIC.Product/Height">
>     <Annotation Term="Org.OData.Measures.V1.Unit" Path="DimUnit"/>
> </Annotations>
> <Annotations Target="GWSAMPLE_BASIC.Product/Price">
>     <Annotation Term="Org.OData.Measures.V1.ISOCurrency" Path="CurrencyCode"/>
> </Annotations>
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
> annotate GWSAMPLE_BASIC.Product with {
>   @Measures.Unit : WeightUnit
>   WeightMeasure
> };
> 
> annotate GWSAMPLE_BASIC.Product with {
>   @Measures.Unit : DimUnit
>   Width
> };
> 
> annotate GWSAMPLE_BASIC.Product with {
>   @Measures.Unit : DimUnit
>   Depth
> };
> 
> annotate GWSAMPLE_BASIC.Product with {
>   @Measures.Unit : DimUnit
>   Height
> };
> 
> annotate GWSAMPLE_BASIC.Product with {
>   @Measures.ISOCurrency : CurrencyCode
>   Price
> };
> 
> ```

**Related Information**  


[Configuring Card Properties](configuring-card-properties-53b0791.md "This section describes the configuration items relevant for all overview page cards. All cards inherit a set of generic capabilities such as a card header, content area, and navigation support.")

