<!-- loio2d617f97e1d949c6a9ccc107ab0037bb -->

# Configuring the Initial Expansion Level for Tree Tables

The initial expansion level determines how many hierarchy levels display expanded when a tree table initially loads in SAP Fiori elements for OData V4. Use the `initialExpansionLevel` property to configure this behavior.

Tree tables are initially displayed fully collapsed. If this doesn't suit your needs, you can configure the initial expansion level of tree tables.

To set the number of expanded levels for tree tables, use the `initialExpansionLevel` property of the `PresentationVariant` annotation as shown in the following sample code:

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotation Term="UI.PresentationVariant" Qualifier="Default">
>     <Record>
>         <PropertyValue Property="Visualizations">
>             <Collection>
>                 <AnnotationPath>@UI.LineItem#DefaultLineItem</AnnotationPath>
>             </Collection>
>         </PropertyValue>
>         <PropertyValue Property="GroupBy">
>             <Collection>
>                 <PropertyPath>ProductId</PropertyPath>
>             </Collection>
>         </PropertyValue>
>         <PropertyValue Property="InitialExpansionLevel" Int="1"/>
>         <PropertyValue Property="SortOrder">
>             <Collection>
>                 <Record>
>                     <PropertyValue Property="Property" PropertyPath="ProductCategory" />
>                     <PropertyValue Property="Descending" Bool="false" />
>                 </Record>
>             </Collection>
>         </PropertyValue>
>     </Record>
> </Annotation>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> 
> @UI.presentationVariant: [
>     {
>         visualizations: [
>             {
>                 type: #AS_LINEITEM,
>                 qualifier: 'DefaultLineItem'
>             }
>         ],
>         groupBy: [
>             'PRODUCTID'
>         ],
>         initialExpansionLevel: 1,
>         sortOrder: [
>             {
>                 by: 'PRODUCTCATEGORY',
>                 direction: #ASC
>             }
>         ],
>         qualifier: 'Default'
>     }
> ]
> annotate view STTA_C_MP_Product with {
> 
> }
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> UI.PresentationVariant #Default : {
>     Visualizations : [
>         '@UI.LineItem#DefaultLineItem',
>     ],
>     GroupBy : [
>         ProductId
>     ],
>     InitialExpansionLevel : 1,
>     SortOrder : [
>         {
>             Property : ProductCategory,
>             Descending : false
>         }
>     ]
> }
> ```

