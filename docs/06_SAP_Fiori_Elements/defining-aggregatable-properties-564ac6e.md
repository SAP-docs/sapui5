<!-- loio564ac6e999a04097b227dd469c4a4d4f -->

# Defining Aggregatable Properties

Aggregatable properties enable data aggregation in analytical tables using the `@Aggregation.CustomAggregate` annotation with the property name as qualifier in SAP Fiori elements for OData V4. Use this to define how numerical data should be aggregated.

When working with analytical tables that display aggregated business data, you can define custom aggregation functions for specific properties. For example, in a business partner management scenario, you can calculate the total sales amount across multiple business partners by summing individual sales values. By defining aggregatable properties, you enable the analytical table to perform these calculations automatically and display meaningful aggregated results to users.

Define aggregatable properties in the metadata using the `@Aggregation.CustomAggregate` annotation, which has the property name as the qualifier.

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotations Target="sap.fe.managepartners.ManagePartnersService.BusinessPartners/SalesAmount">
>     <Annotation Term="Aggregation.default" EnumMember="Aggregation.defaultType/SUM"/>
>     <Annotation Term="Analytics.Measure" Bool="true"/>
> </Annotations>
> ...
> <Annotations Target="sap.fe.managepartners.ManagePartnersService.EntityContainer">
>     <Annotation Term="Aggregation.CustomAggregate" Qualifier="SalesAmount" String="Edm.Decimal"/>
> </Annotations>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> @Aggregation.default: #SUM
> 
> SalesAmount
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> SalesAmount @Analytics.Measure : true @Aggregation.default : #SUM; //use the aggregation function you want
> // At the entity level you must also define the Aggregation.CustomAggregate annotation which has the property name as the qualifier: 
> @Aggregation.CustomAggregate #SalesAmount : 'Edm.Decimal'
> ```

