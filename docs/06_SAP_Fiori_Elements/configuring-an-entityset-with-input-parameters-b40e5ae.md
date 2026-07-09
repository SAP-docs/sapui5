<!-- loiob40e5ae5cdd647c490bd03b9d5f98d56 -->

# Configuring an `EntitySet` with Input Parameters

Some OData entity sets require input parameters before they return data. You can configure these parameters using the `com.sap.vocabularies.UI.v1.SelectionVariant` annotation term by setting the `Parameters` section.



When an entity set requires input parameters, it is paired with a separate parameter entity set. The parameter entity set defines the required inputs, and the data entity set returns the corresponding records. An association connects these two entity sets.

In the following code samples, there are two entity sets:

-   `SalesShare`: Contains the OData information shown in the cards.

-   `SalesShareParameters`: Defines the input parameters required to retrieve data from the `SalesShare`.


The `com.sap.vocabularies.UI.v1.SelectionVariant` annotation term supplies the parameter values that trigger the query at runtime.



## Procedure

To configure a card with a parameterized entity set, proceed as follows:

1.  Define the OData metadata.

    The metadata must define both entity sets and the association between them. The parameter entity type is marked with `sap:semantics="parameters"`, and each parameter property is marked with `sap:parameter="mandatory"` \(or `"optional"`\).

    > ### Sample Code:  
    > ```
    > <?xml version="1.0" encoding="utf-8" standalone="yes" ?>
    > <edmx:Edmx Version="1.0" xmlns:edmx="http://schemas.microsoft.com/ado/2007/06/edmx" xmlns:sap="http://www.sap.com/Protocols/SAPData">
    >     <edmx:DataServices xmlns:m="http://schemas.microsoft.com/ado/2007/08/dataservices/metadata" m:DataServiceVersion="2.0">
    >         <Schema Namespace="sap.smartbusinessdemo.services" xmlns:d="http://schemas.microsoft.com/ado/2007/08/dataservices" xmlns:m="http://schemas.microsoft.com/ado/2007/08/dataservices/metadata" xmlns="http://schemas.microsoft.com/ado/2008/09/edm">
    >             <EntityType Name="SalesShareType" sap:semantics="aggregate">
    >                 <Key>
    >                     <PropertyRef Name="ID" />
    >                 </Key>
    >                 <Property Name="ID" Type="Edm.String" Nullable="false" MaxLength="2147483647" sap:filterable="false" />
    >                 <Property Name="Country" Type="Edm.String" MaxLength="3" sap:label="Country" sap:aggregation-role="dimension" />
    >                 <Property Name="Region" Type="Edm.String" MaxLength="4" sap:label="Region" sap:aggregation-role="dimension" />
    >                 <Property Name="ProductID" Type="Edm.String" MaxLength="10" sap:label="Product ID" sap:aggregation-role="dimension" />
    >                 <Property Name="Currency" Type="Edm.String" MaxLength="5" sap:label="Currency" sap:aggregation-role="dimension" />
    >                 <Property Name="Product" Type="Edm.String" MaxLength="1024" sap:label="Product" sap:aggregation-role="dimension" />
    >                 <Property Name="SupplierCompany" Type="Edm.String" MaxLength="80" sap:label="Supplier Company" sap:aggregation-role="dimension" />
    >                 <Property Name="BuyerCompany" Type="Edm.String" MaxLength="80" sap:label="Buyer Company" sap:aggregation-role="dimension" />
    >                 <Property Name="Year" Type="Edm.String" MaxLength="4" sap:label="Year" sap:aggregation-role="dimension" />
    >                 <Property Name="Quarter" Type="Edm.String" MaxLength="2" sap:label="Quarter" sap:aggregation-role="dimension" />
    >                 <Property Name="Month" Type="Edm.String" MaxLength="2" sap:label="Month" sap:aggregation-role="dimension" />
    >                 <Property Name="TotalSales_CURRENCY" Type="Edm.String" MaxLength="5" sap:semantics="currency-code" />
    >                 <Property Name="Sales_CURRENCY" Type="Edm.String" MaxLength="5" sap:semantics="currency-code" />
    >                 <Property Name="TotalSales" Type="Edm.Decimal" Precision="15" Scale="2" sap:filterable="false" sap:label="Total Sales" sap:aggregation-role="measure" sap:unit="TotalSales_CURRENCY" />
    >                 <Property Name="Sales" Type="Edm.Decimal" Precision="15" Scale="2" sap:filterable="false" sap:label="Sales" sap:aggregation-role="measure" sap:unit="Sales_CURRENCY" />
    >                 <Property Name="SalesShare" Type="Edm.Decimal" Precision="12" Scale="5" sap:filterable="false" sap:label="Sales Share" sap:aggregation-role="measure" />
    >             </EntityType>
    >             <EntityType Name="SalesShareParametersType" sap:semantics="parameters">
    >                 <Key>
    >                     <PropertyRef Name="P_Currency"/>
    >                     <PropertyRef Name="P_Country"/>
    >                 </Key>
    >                 <Property Name="P_Currency" Type="Edm.String" Nullable="false" MaxLength="5" sap:label="Currency" sap:parameter="mandatory"/>
    >                 <Property Name="P_Country" Type="Edm.String" Nullable="false" DefaultValue="3" MaxLength="20" sap:label="CountryCode" sap:parameter="mandatory"/>
    >                 <NavigationProperty Name="Results" Relationship="sap.smartbusinessdemo.services.SalesShareParameters_SalesShareType" FromRole="SalesShareParametersPrincipal" ToRole="SalesShareDependent"/>
    >             </EntityType>
    >  
    >             <Association Name="SalesShareParameters_SalesShareType">
    >                 <End Type="sap.smartbusinessdemo.services.SalesShareParametersType" Role="SalesShareParametersPrincipal" Multiplicity="*"/>
    >                 <End Type="sap.smartbusinessdemo.services.SalesShareType" Role="SalesShareDependent" Multiplicity="*"/>
    >             </Association>
    >  
    >  
    >             <EntityContainer Name="SalesShare" m:IsDefaultEntityContainer="true">
    >  
    >                 <EntitySet Name="SalesShare" EntityType="sap.smartbusinessdemo.services.SalesShareType"/>
    >                 <EntitySet Name="SalesShareParameters" EntityType="sap.smartbusinessdemo.services.SalesShareParametersType" sap:addressable="false"/>
    >                 <AssociationSet Name="SalesShareParameters_SalesShare" Association="sap.smartbusinessdemo.services.SalesShareParameters_SalesShareType">
    >                     <End Role="SalesShareParametersPrincipal" EntitySet="SalesShareParameters"/>
    >                     <End Role="SalesShareDependent" EntitySet="SalesShare"/>
    >                 </AssociationSet>
    >  
    >             </EntityContainer>
    >         </Schema>
    >     </edmx:DataServices>
    > </edmx:Edmx>
    > ```

2.  Define the `SelectionVariant` annotation.

    The `SelectionVariant` annotation lists the parameter values to use. Each parameter is defined as a `com.sap.vocabularies.UI.v1.Parameter` record with a `PropertyName` and a `PropertyValue`.

    > ### Sample Code:  
    > XML Annotation
    > 
    > ```xml
    > <Annotations Target="sap.smartbusinessdemo.services.SalesShareType">
    >     <Annotation Term="com.sap.vocabularies.UI.v1.SelectionVariant" Qualifier="params">
    >         <Record>
    >             <PropertyValue Property="SelectOptions">
    >                 <Collection>
    >                 </Collection>
    >             </PropertyValue>
    >             <PropertyValue Property="Parameters">
    >                 <Collection>
    >                     <Record Type="com.sap.vocabularies.UI.v1.Parameter">
    >                         <PropertyValue Property="PropertyName" PropertyPath="P_Currency" />
    >                         <PropertyValue Property="PropertyValue" String="EUR" />
    >                     </Record>
    >                     <Record Type="com.sap.vocabularies.UI.v1.Parameter">
    >                         <PropertyValue Property="PropertyName" PropertyPath="P_Country" />
    >                         <PropertyValue Property="PropertyValue" String="IN" />
    >                     </Record>
    >                 </Collection>
    >             </PropertyValue>
    >         </Record>
    >     </Annotation>
    >     ...
    > </Annotations>
    > ```

    > ### Sample Code:  
    > ABAP CDS Annotation
    > 
    > No ABAP CDS annotation sample is available. Please use the local XML annotation.

    > ### Sample Code:  
    > CAP CDS Annotation
    > 
    > ```
    > 
    > annotate sap.smartbusinessdemo.services.SalesShareType @(
    >   UI.SelectionVariant #params : {
    >     SelectOptions : [
    >     ],
    >     Parameters : [
    >         {
    >             $Type : 'UI.Parameter',
    >             PropertyName : P_Currency,
    >             PropertyValue : 'EUR'
    >         },
    >         {
    >             $Type : 'UI.Parameter',
    >             PropertyName : P_Country,
    >             PropertyValue : 'IN'
    >         }
    >     ]
    >   }
    > );
    > ```

3.  Reference the `SelectionVariant` in the card definition.

    In `manifest.json`, point the card's `selectionAnnotationPath` to the qualified `SelectionVariant`, as shown in the following sample code:

    > ### Sample Code:  
    > ```
    > "sap.ovp": {
    >     ...
    >     "cards": {
    >         ...
    >         "card04": {
    >             "model": "salesShare",
    >             "template": "sap.ovp.cards.list",
    >             "settings": {
    >                 ...
    >                 "selectionAnnotationPath" : "com.sap.vocabularies.UI.v1.SelectionVariant#params",
    >                 "entitySet": "SalesShare"
    >             }
    >         },
    >         ...
    >     }
    > }
    > ```




## Entity sets with Optional Input Parameters

If an entity set has only **optional** input parameters, you don't need to define a `SelectionVariant` annotation for them. When no parameter value is supplied, an empty string is used by default.

> ### Sample Code:  
> ```
> <EntityType Name="SalesShareParametersType" sap:semantics="parameters">
>     <Key>          
>         <PropertyRef Name="P_Currency"/>
>         <PropertyRef Name="P_Country"/>
>         <PropertyRef Name="P_Optional"/>
>     </Key>
>     <Property Name="P_Currency" Type="Edm.String" Nullable="false" MaxLength="5" sap:label="Currency" sap:parameter="mandatory"/>
>     <Property Name="P_Country" Type="Edm.String" Nullable="false" DefaultValue="3" MaxLength="20" sap:label="CountryCode" sap:parameter="mandatory"/>
>     <Property Name="P_Optional" Type="Edm.String" Nullable="false" MaxLength="5" sap:label="Optional" sap:parameter="optional"/>
>     <NavigationProperty Name="Results" Relationship="sap.smartbusinessdemo.services.SalesShareParameters_SalesShareType" FromRole="SalesShareParametersPrincipal" ToRole="SalesShareDependent"/>
> </EntityType>
> ```

> ### Note:  
> Optional parameters support only the `Edm.String` type.



## Multiple Cards with Analytical Parameter

If multiple cards on the same overview page use analytical parameters, each card must have its own `SelectionVariant` annotation defined.

When the user applies a parameter from the filter bar at runtime, this parameter value is passed to every card whose `SelectionVariant` defines a parameter with the same name. Cards whose annotations don't reference the parameter remain unaffected.



**Related Information**  


[Configuring Card Properties](configuring-card-properties-53b0791.md "This section describes the configuration items relevant for all overview page cards. All cards inherit a set of generic capabilities such as a card header, content area, and navigation support.")

