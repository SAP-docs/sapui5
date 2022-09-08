<!-- loio41af842da7694ef1918fc06b75679ecc -->

# Configuring Sort Properties

All cards support sorting using the `com.sap.vocabularies.UI.v1.PresentationVariant` annotation term.



List, table, and stack cards support sorting by using the `sortBy` and `sortOrder` properties in the application manifest file.

The following example shows sort configuration in the application manifest file. The records are sorted by the `Price` property in descending order.

> ### Sample Code:  
> ```
> "sap.ovp": {
>     ...
>     "cards": {
>         ...
>         "card04": {
>             "model": "ZCD204_EPM_DEMO_SRV",
>             "template": "sap.ovp.cards.list",
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

The following example shows sort configuration in the annotation file. The records are sorted by the `Sales` property in descending order. You can configure multiple sorts by defining multiple properties in the `SortOrder` collection.

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
>         by: 'SALES'
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
> Overview pages allow you to share sort parameters defined in the presentation variant to any target SAP Fiori Elements application. The target applications can use these parameters to sort data accordingly. For more information, see [Configuring External Navigation](configuring-external-navigation-1d4a0f9.md).

