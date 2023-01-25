<!-- loiobc05d353d2c44854b1ea228b99e922a2 -->

# Initial Expansion Level for Tables in List Reports & Analytical List Pages

You can set the number of expanded levels for tables in List Reports and Analytical List Pages using the `initialExpansionLevel` property of the `PresentationVariant` annotation.

> ### Note:  
> This topic is currently only applicable to SAP Fiori elements for OData V2.



<a name="loiobc05d353d2c44854b1ea228b99e922a2__section_gpy_d5f_lkb"/>

## Expected Behavior of Table Types

**Table Types**


<table>
<tr>
<th valign="top">

Table Type



</th>
<th valign="top">

Expected Behavior



</th>
</tr>
<tr>
<td valign="top">

Analytical Table



</td>
<td valign="top">

The default `initialExpansionLevel` is 0.



</td>
</tr>
<tr>
<td valign="top">

Responsive Table



</td>
<td valign="top">

Irrespective of the value of the `initialExpansionLevel`, the responsive table expands to one level. The groups are always expanded and you can group using table settings.



</td>
</tr>
<tr>
<td valign="top">

Tree Table



</td>
<td valign="top">

In List Reports, the first level is automatically expanded.

In Analytical List Pages, the default `initialExpansionLevel` is 0.



</td>
</tr>
</table>

The `initialExpansionLevel` should never exceed the number of grouped columns.



<a name="loiobc05d353d2c44854b1ea228b99e922a2__section_h1l_x5f_lkb"/>

## Defining Initial Expansion Level in PresentationVariant

For `initialExpansionLevel` to be supported, `PresentationVariant` annotations must exist for the content area in Analytical List Pages/ List Reports and multiple tabs in a List Reports.

> ### Note:  
> If tabs are not defined for a List Reports, the default `PresentationVariant` \(without the qualifier\) is considered.
> 
> The content area in Analytical List Pages can be associated directly with the `PresentationVariant` in these cases:
> 
> -   The qualifier is defined in the manifest: There is no matching `SelectionPresentationVariant` with the qualifier but there is a matching `PresentationVariant`.
> 
> -   The qualifier is not defined in the manifest: There is no default `SelectionPresentationVariant` but there is a default `PresentationVariant`.

The tabs in a List Reports can be associated directly with the `PresentationVariant` when the annotation path of the tab defined in the manifest points to a `PresentationVariant` annotation. In this case, the required `PresentationVariant` has to be defined as shown in the sample code below:

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
> 
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> 
> @UI.presentationVariant: [
>   {
>     visualizations: [
>       {
>         type: #AS_LINEITEM,
>         qualifier: 'DefaultLineItem'
>       }
>     ],
>     groupBy: [
>       'PRODUCTID'
>     ],
>     initialExpansionLevel: 1,
>     sortOrder: [
>       {
>         by: 'PRODUCTCATEGORY',
>         direction: #ASC
>       }
>     ],
>     qualifier: 'Default'
>   }
> ]
> annotate view STTA_C_MP_Product with {
> 
> }
> 
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> 
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



<a name="loiobc05d353d2c44854b1ea228b99e922a2__section_drg_nvf_lkb"/>

## Defining the Initial Expansion Level in the`SelectionPresentationVariant` 

If the content area in the Analytical List Pages and tabs in the List Reports are associated with a `SelectionPresentationVariant` that references a `PresentationVariant`, ensure that the `PresentationVariant` is not defined inline but referred to using a path as shown in the sample code below:

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotation Term="UI.SelectionPresentationVariant" Qualifier="MainContent">
>     <Record>
>         <PropertyValue Property="ID" String=""/>
>         <PropertyValue Property="Text" String=""/>
>         <PropertyValue Property="SelectionVariant" Path="@UI.SelectionVariant#Default"/>
>         <PropertyValue Property="PresentationVariant" Path="@UI.PresentationVariant#Default"/>
>     </Record>
> </Annotation>
> 
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> 
> @UI.selectionPresentationVariant: [{
>   id: '',
>   text: '',
>   selectionVariantQualifier: 'Default',
>   presentationVariantQualifier: 'Default',
>   qualifier: 'MainContent'
> }]
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> 
> UI.SelectionPresentationVariant #MainContent : {
>     ID : '',
>     Text : '',
>     SelectionVariant : ![@UI.SelectionVariant#Default],
>     PresentationVariant : ![@UI.PresentationVariant#Default]
> },
> 
> ```

**Related Information**  


[Configuring Tables](configuring-tables-f4eb70f.md "You can use the annotations and entries in the manifest.json to control various aspects of tables.")

[Configuring the Table-Only View as the Default Option](configuring-the-table-only-view-as-the-default-option-d074e26.md "In this mode, the data is displayed in the table format.")

[Configuring Default Settings \(Visualizations, Sort Order, Filter Values\)](configuring-default-settings-visualizations-sort-order-filter-values-49a6ba5.md "SAP Fiori elements allows you to specify a UI.SelectionPresentationVariant.")

