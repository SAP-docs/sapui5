<!-- loio89f63ef59d4440958a27b636c500ffbc -->

# Defining Filter Facets

You can use `FilterFacets` annotations to display filter groups in the *Adapt Filter* dialog.

For an example of a `FilterFacets` annotation on the target entity type, see the following sample code:

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
> CAP CDS Annotation
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

Only the filter fields defined as part of the `UI.SelectionFields` annotation and the mandatory filters are displayed in the filter bar by default. The other filter fields appear only in the *Adapt Filters* dialog and are grouped using the following logic:

-   Field group: Filter fields that are listed under a `FieldGroup` annotation, as shown above, but are not part of `UI.SelectionFields`.

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
    > CAP CDS Annotation
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

-   Entity type name group: Filter fields that are not part of the `UI.SelectionField` or the `FieldGroup` annotation are grouped together in a group named `<EntityTypeName>`. If there are multiple `entityTypes`, multiple `entityTypeName` groups are created.




> ### Note:  
> For information about SAP Fiori elements for OData V2, see [Defining Filter Facets](defining-filter-facets-9e7310b.md).

