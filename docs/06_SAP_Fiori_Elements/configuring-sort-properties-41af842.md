<!-- loio41af842da7694ef1918fc06b75679ecc -->

# Configuring Sort Properties

You can enable sorting for all card types displayed on the overview page using the `com.sap.vocabularies.UI.v1.PresentationVariant` annotation.



## Using the Manifest for Sorting

List, table, and stack cards support sorting by using the `sortBy` and `sortOrder` properties in the `manifest.json` file. The following sample code shows the sort configuration, where the records are sorted using the `Price` property in descending order.

> ### Sample Code:  
> `manifest.json`
> 
> ```
> "sap.ovp": {
>     ...
>     "cards": {
>         ...
>         "card04": {
>             "model": "ZCD204_EPM_DEMO_SRV",
>             "template": "sap.ovp.cards.v4.list",
>             "settings": {
>                 "sortBy": "Price",
>                 "sortOrder": "descending",
>                 "listFlavor": "bar",
>                 "annotationPath": "com.sap.vocabularies.UI.v1.LineItem#bar",
>                 "identificationAnnotationPath": "com.sap.vocabularies.UI.v1.Identification#bar",
>                 "category": "{{card04_category}}",
>                 "entitySet": "Products"
>             }
>         },
>         ...
>     }
> }
> ```

> ### Note:  
> The template setting in the `manifest.json` file depends on your OData version. Use `sap.ovp.cards.v4.<cardType>` for SAP Fiori elements for OData V4 and `sap.ovp.cards.<cardType>` for SAP Fiori elements for OData V2.


<table>
<tr>
<th valign="top">

Property

</th>
<th valign="top">

Description

</th>
</tr>
<tr>
<td valign="top">

`sortBy` 

</td>
<td valign="top">

Name of the property used to sort the records.

</td>
</tr>
<tr>
<td valign="top">

`sortOrder` 

</td>
<td valign="top">

Sort direction. The supported values are `ascending` and `descending`.

</td>
</tr>
</table>





## Using `PresentationVariant` Annotation for Sorting

For all card types, you can configure sorting using the `com.sap.vocabularies.UI.v1.PresentationVariant` annotation. You can define each sort criterion as an entry in the `SortOrder` collection. To sort by multiple properties, add multiple entries.

The following sample code shows a sort configuration where the records are sorted by the `Sales` property in descending order.

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotation Term="com.sap.vocabularies.UI.v1.PresentationVariant" Qualifier="Eval_by_Country">
>    <Record>
>       <PropertyValue Property="GroupBy">
>          <Collection>
>             <PropertyPath>Country</PropertyPath>
>          </Collection>
>       </PropertyValue>
>       <PropertyValue Property="SortOrder">
>          <Collection>
>             <Record>
>                <PropertyValue Property="Property" PropertyPath="Sales" />
>                <PropertyValue Property="Descending" Boolean="true" />
>             </Record>
>          </Collection>
>       </PropertyValue>
>       <PropertyValue Property="Visualizations">
>          <Collection>
>             <AnnotationPath>@UI.Chart#Eval_by_Country</AnnotationPath>
>          </Collection>
>       </PropertyValue>
>    </Record>
> </Annotation>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> 
> @UI.PresentationVariant: [
>   {
>     groupBy: [
>       'COUNTRY'
>     ],
>     sortOrder: [
>       {
>         by: 'SALES',
>         direction: #DESC
>       }
>     ],
>     visualizations: [
>       {
>         type: #AS_CHART,
>         qualifier: 'Eval_by_Country'
>       }
>     ],
>     qualifier: 'Eval_by_Country'
>   }
> ]
> annotate view VIEWNAME with { 
> 
> }
> 
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> 
> UI.PresentationVariant #Eval_by_Country : {
>     GroupBy : [
>         Country
>     ],
>     SortOrder : [
>         {
>             Property : Sales,
>             Descending : true
>         },
>     ],
>     Visualizations : [
>         '@UI.Chart#Eval_by_Country'
>     ]
> },
> 
> ```

> ### Note:  
> You can share sort parameters defined in the `com.sap.vocabularies.UI.v1.PresentationVariant`to any target SAP Fiori elements application. The target applications can use these parameters to sort data accordingly. For more information, see [Configuring External Navigation](configuring-external-navigation-1d4a0f9.md).

**Related Information**  


[Configuring Card Properties](configuring-card-properties-53b0791.md "This section describes the configuration items relevant for all overview page cards. All cards inherit a set of generic capabilities such as a card header, content area, and navigation support.")

