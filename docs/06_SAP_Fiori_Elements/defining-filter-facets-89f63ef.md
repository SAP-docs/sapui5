<!-- loio89f63ef59d4440958a27b636c500ffbc -->

# Defining Filter Facets

You can use `FilterFacets` annotations to display filter groups in filter bars.

Below is an example of a `FilterFacets` annotation on the target entity type:

> ### Sample Code:  
> XML Annotation
> 
> ```
> <Annotations Target="STTA_PROD_MAN.STTA_C_MP_SupplierType">
>    <Annotation Term="UI.FilterFacets">
>       <Collection>
>             <Record Type="UI.ReferenceFacet">
>                 <PropertyValue Property="Target" AnnotationPath="@UI.FieldGroup#MyFilterGroup"/>
>             </Record>
>       </Collection>
>    </Annotation>
> </Annotations>
> 
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> annotate view STTA_C_MP_SUPPLIERTYPE with {
> @UI.Facet: [
>   {
>     targetQualifier: 'MyFilterGroup',
>     type: #FIELDGROUP_REFERENCE,
>     purpose: #FILTER
>   }
> ]
> Supplier; 
> }
> 
> ```

> ### Sample Code:  
> CAPCDS Annotation
> 
> ```
> @UI.FilterFacets                                    : [
>     {
>         $Type             : 'UI.ReferenceFacet',   
>         Target            : '_SoldToParty/@UI.FieldGroup#MyFilterGroup'
>     }
> ]
> 
> ```

Only the filter fields defined as part of the `UI.SelectionFields` annotation and the mandatory filters appear by default in the filter bar. The other filter fields appear only in the *Adapt Filters* dialog and are grouped via the following logic:



**Basic Group**

All filter fields listed as part of the `UI.SelectionFields` annotation are part of this group. In addition, all filter fields that are part of the `UI.FieldGroup` annotation with qualifier `"_BASIC"` under the `FilterFacets` structure, as shown above, are part of this group.

> ### Restriction:  
> This feature is only available in SAP Fiori elements for OData V2.



**Field Group**

Filter fields listed under a `FieldGroup` annotation, as shown above, but are not part of `UI.SelectionFields` belong to this group.



**Entity Type Name Group**

Filter fields that are not part of the `UI.SelectionField` or the `FieldGroup` annotation are grouped together in a group with the name `<EntityTypeName>`.. If there are multiple `entityTypes`, multiple `entityTypeName` groups are created.

> ### Sample Code:  
> XML Annotation
> 
> ```
> <Annotation Term="UI.FieldGroup" Qualifier="Group_Name">
>     <Record>
>         <PropertyValue Property="Data">
>             <Collection>
>                 <Record Type="UI.DataField">
>                     <PropertyValue Property="Value" Path="Name"/>
>                 </Record>
>             </Collection>
>         </PropertyValue>
>         <PropertyValue Property="Label" String="Group Name"/>
>     </Record>
> </Annotation>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> @UI.fieldGroup: [{ qualifier: 'Group Name', groupLabel: 'Group Name' }]
> PROPERTY_NAME;
> ```

> ### Sample Code:  
> CAPCDS Annotation
> 
> ```
> UI.FieldGroup #GroupName : {
>     Data : [
>         {
>             $Type : 'UI.DataField',
>             Value : PropertyName
>         }
>     ],
>     Label : 'Group Name'
> }
> ```

