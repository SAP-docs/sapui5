<!-- loio91e016c0335f4d3b81c647c34dcd30c3 -->

# Searching for Rows in a Table on an Object Page

Users can use the search bar to search for particular rows in the table in SAP Fiori elements for OData V4.

A search field is displayed in the table toolbar if the used entity set is searchable.



## Handling of Search Restrictions

The search field is displayed in the toolbar of a responsive table or grid table if the entity is searchable. To define an entity as searchable, use the annotation `Capabilities.SearchRestrictions`. The search restriction for a table is first looked up in the parent entity \(using `NavigationRestrictions` at the parent entity, with the `NavigationProperty` pointing to the association of the table entity\).



### Navigation Restrictions at Parent Entity

> ### Sample Code:  
> XML Annotation \(non-containment scenario\): `/SalesOrderManage/_Items`
> 
> ```xml
> <Annotations Target="com.c_salesordermanage_sd.Container/SalesOrderManage">
>     <Annotation Term="Capabilities.NavigationRestrictions">
>         <Record>
>             <PropertyValue Property="RestrictedProperties">
>                 <Collection>
>                     <Record>
>                         <PropertyValue Property="NavigationProperty" NavigationPropertyPath="_Items" />
>                         <PropertyValue Property="SearchRestrictions">
>                             <Record>
>                                 <PropertyValue Property="Searchable" Bool="false" />
>                             </Record>
>                         </PropertyValue>
>                     </Record>
>                 </Collection>
>             </PropertyValue>
>         </Record>
>     </Annotation>
> </Annotations>
> 
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> No ABAP CDS annotation sample is available. Please use the local XML annotation.

> ### Sample Code:  
> CAP CDS Annotation \(non-containment scenario\)
> 
> ```
> entity SalesOrderManage
>     @(Capabilities: {
>         NavigationRestrictions: {
>             RestrictedProperties: [{
>                 NavigationProperty: '_Items',
>                 SearchRestrictions: {
>                     Searchable: false
>                 }
>             }]
>         }
>     })
> 
> ```

In a containment scenario \(for example, where the main entity set is from a parameterized entity\), you can maintain the annotations as shown in the following sample code:

> ### Sample Code:  
> XML Annotation \(containment scenario\): `/Customer/Set/_PartnerItems`
> 
> ```xml
> <Annotations Target="sap.fe.test.MyService.EntityContainer/Customer">
>     <Annotation Term="Capabilities.NavigationRestrictions">
>         <Record>
>             <PropertyValue Property="RestrictedProperties">
>                 <Collection>
>                     <Record>
>                         <PropertyValue Property="NavigationProperty" NavigationPropertyPath="Set/_PartnerItems" />
>                         <PropertyValue Property="SearchRestrictions">
>                             <Record>
>                                 <PropertyValue Property="Searchable" Bool="false" />
>                             </Record>
>                         </PropertyValue>
>                     </Record>
>                 </Collection>
>             </PropertyValue>
>         </Record>
>     </Annotation>
> </Annotations>
> 
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> No ABAP CDS annotation sample is available. Please use the local XML annotation.

> ### Sample Code:  
> CAP CDS Annotation \(containment scenario\)
> 
> ```
> service MyService {
>     @Capabilities.NavigationRestrictions.RestrictedProperties: [{
>         $Type              : 'Capabilities.NavigationPropertyRestriction',
>         NavigationProperty : 'Set/_PartnerItems',
>         SearchRestrictions : { Searchable: false }
>     }]
> }
> 
> ```



### Restrictions Directly at Child Entity

If no search restriction is defined at the parent entity using `NavigationRestriction`, the search restriction defined directly on the table entity set \(child entity\) is considered.

> ### Sample Code:  
> XML Annotation \(non-containment scenario\): `/SalesOrderManage/_Items`
> 
> ```xml
> <Annotations Target="com.c_salesordermanage_sd.Container/SalesOrderItem">
>     <Annotation Term="SAP__capabilities.SearchRestrictions">
>         <Record>
>             <PropertyValue Property="Searchable" Bool="false" />
>         </Record>
>     </Annotation>
> </Annotations>
> 
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> @Search.searchable: false
> define view entity SalesOrderItem
>     as select from ztsalesorderitem
> {
>     ...
> }
> 
> ```

> ### Sample Code:  
> CAP CDS Annotation \(non-containment scenario\)
> 
> ```
> entity SalesOrderItem
>     @(Capabilities: {
>         SearchRestrictions: {
>             Searchable: false
>         }
>     })
> 
> ```

In a containment scenario \(for example, where the main entity set is from a parameterized entity\), you can maintain the annotations as shown in the following sample code:

> ### Sample Code:  
> XML Annotation \(containment scenario\): `/Customer/Set/_PartnerItems`
> 
> ```xml
> <Annotations Target="SAP__self.Container/ItemPartner">
>     <Annotation Term="SAP__capabilities.SearchRestrictions">
>         <Record>
>             <PropertyValue Property="Searchable" Bool="false" />
>         </Record>
>     </Annotation>
> </Annotations>
> 
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> No ABAP CDS annotation sample is available. Please use the local XML annotation.

> ### Sample Code:  
> CAP CDS Annotation \(containment scenario\)
> 
> ```
> entity ItemPartner
>     @(Capabilities: {
>         SearchRestrictions: {
>             Searchable: false
>         }
>     })
> 
> ```

The search field is displayed in the toolbar of an analytical table or tree table if the entity is searchable. To define an entity as searchable, use the search transformation in the `Transformations` of the `ApplySupported` annotation. If no `Transformations` are available, then the search field is enabled as well.

> ### Sample Code:  
> ```
> 
> <Annotation Term="SAP__aggregation.ApplySupported">
>     <Record>
>         <PropertyValue Property="Transformations">
>             <Collection>
>                 <String>filter</String>
>                 <String>orderby</String>
>                 <String>search</String>
>                 <String>descendants</String>
>             </Collection>
>         </PropertyValue>
>     </Record>
> </Annotation>
> 
> ```

