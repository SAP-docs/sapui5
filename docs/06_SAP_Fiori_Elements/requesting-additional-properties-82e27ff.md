<!-- loio82e27ffdc7804561970e9e84e2b4a4ef -->

# Requesting Additional Properties

You can request additional OData properties to be fetched with the table's data binding even if these properties are not displayed in the table.

This is useful when you need property values to be available at runtime, for example, for custom actions, conditional formatting, or calculations without exposing them as visible columns.

Additional properties for tables can be requested by using the `com.sap.vocabularies.UI.v1.PresentationVariant` annotation term and the `RequestAtLeast` property.

> ### Caution:  
> Including 1:n properties in the `RequestAtLeast` property results in performance issues and prevents exporting tables to a spreadsheet.

> ### Sample Code:  
> XML Annotation
> 
> ```
> <Annotations xmlns=http://docs.oasis-open.org/odata/ns/edm Target="ZFAR_CUSTOMER_LINE_ITEMS2_SRV.Item">
>     <Annotation Term="com.sap.vocabularies.UI.v1.PresentationVariant">
>         <Record>
>             <PropertyValue Property="Visualizations">
>                 <Collection>
>                     <AnnotationPath>@UI.LineItem</AnnotationPath>
>                 </Collection>
>             </PropertyValue>
>             <PropertyValue Property="RequestAtLeast">
>                 <Collection>
>                     <PropertyPath>Customer</PropertyPath>
>                     <PropertyPath>CompanyCode</PropertyPath>
>                </Collection>
>             </PropertyValue>
>         </Record>
>     </Annotation>
> </Annotations>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> @UI.PresentationVariant: [
>   {
>     requestAtLeast: [
>       'CUSTOMER',
>       'COMPANYCODE'
>     ],
>     visualizations: [{type: #AS_LINEITEM }]
>   }
> ]
> annotate view ITEM with {
>  
> }
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> annotate ZFAR_CUSTOMER_LINE_ITEMS2_SRV.Item @(
>   com.sap.vocabularies.UI.v1.PresentationVariant : {
>     Visualizations : [
>         '@UI.LineItem'
>     ],
>     RequestAtLeast : [
>         Customer,
>         CompanyCode
>     ]
>   }
> );
> ```

If you cannot use the `com.sap.vocabularies.UI.v1.PresentationVariant` annotation, additional properties can also be requested using the `additionalProperties` parameter.

> ### Note:  
> You can request direct and navigation properties but you cannot request 1:n navigation properties or use an absolute path to a singleton.

You can request additional properties using the `additionalProperties` parameter in the following ways:

-   In the `Table` building block
-   In the `manifest.json` file

In the following sample code, the `Upvotes` and `Ratings` direct properties and the `_Downvotes/count` navigation property are fetched in the table request of the `Table` building block even if the properties are not displayed as columns in the `LineItem` annotation:

> ### Sample Code:  
> Requesting Additional Properties in the `Table` Building Block
> 
> ```
> <macros:Table
>     xmlns:macros="sap.fe.macros"
>     id="ItemsTable"
>     metaPath="items/@com.sap.vocabularies.UI.v1.LineItem"
>     additionalProperties="Upvotes,Rating,_Downvotes/count"
> />
> ```

In the following sample code, the `Upvotes` direct property and `_Downvotes/count` navigation property are fetched in the table request of the `controlConfiguration` section of the `manifest.json` file:

> ### Sample Code:  
> `manifest.json`
> 
> ```
> {
>     "sap.ui5": {
>         "routing": {
>             "targets": {
>                 "ObjectPage": {
>                     "options": {
>                         "settings": {
>                             "controlConfiguration": {
>                                 "items/@com.sap.vocabularies.UI.v1.LineItem": {
>                                     "tableSettings": {
>                                         "additionalProperties": [
>                                             "Upvotes",
>                                             "_Downvotes/count"
>                                         ]
>                                     }
>                                 }
>                             }
>                         }
>                     }
>                 }
>             }
>         }
>     }
> }
> ```

You can also request additional properties at the page level. For more information, see [Requesting Additional Properties on the Object Page and Custom Page](requesting-additional-properties-on-the-object-page-and-custom-page-c5e38f9.md).

