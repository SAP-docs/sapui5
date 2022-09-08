<!-- loio0d6c1d5f9e1e4aab950f7b528c59fa5d -->

# Setting Units of Measure

You can display the unit of measure next to numeric values by providing the `sap:unit` attribute in the OData metadata file or by annotating the unit in the annotation document.



In the following example of the `Product` entity type definition in the OData metadata file, the `Price` property has the `CurrencyCode` property as its unit of measure; `Width`, `Depth`, and `Height` have the `DimUnit` property as their unit of measure; and the `WeightMeasure` property has the `WeightUnit` property as its unit of measure.

> ### Sample Code:  
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

In the following example, the `Price` property is annotated in the annotation document with `Org.OData.Measures.V1.ISOCurrency` to indicate that the currency is displayed using the `CurrencyCode` property; the `Width`, `Depth`, and `Height` properties are annotated with `Org.OData.Measures.V1.Unit` to indicate that the unit is displayed using the `DimUnit` property; and `WeightMeasure` is annotated with `Org.OData.Measures.V1.Unit` to indicate that the unit is displayed using the `WeightUnit` property.

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
> CAP CDS Annotation
> 
> ```
> 
> annotate GWSAMPLE_BASIC.Product with {
>   @MeasuresUnit : WeightUnit
>   WeightMeasure
> };
> 
> annotate GWSAMPLE_BASIC.Product with {
>   @MeasuresUnit : DimUnit
>   Width
> };
> 
> annotate GWSAMPLE_BASIC.Product with {
>   @MeasuresUnit : DimUnit
>   Depth
> };
> 
> annotate GWSAMPLE_BASIC.Product with {
>   @MeasuresUnit : DimUnit
>   Height
> };
> 
> annotate GWSAMPLE_BASIC.Product with {
>   @MeasuresISOCurrency : CurrencyCode
>   Price
> };
> 
> ```

