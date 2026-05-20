<!-- loio82e27ffdc7804561970e9e84e2b4a4ef -->

# Requesting Additional Properties

You can request additional OData properties to be fetched with the table's data binding even if these properties aren't displayed in the table in SAP Fiori elements for OData V4.

The additional property values are available at runtime but aren't exposed as visible columns. For example, this is useful for custom actions, conditional formatting, or calculations.

To request additional properties at the table level, use any of the following:

-   ​The `com.sap.vocabularies.UI.v1.PresentationVariant` annotation term and the `RequestAtLeast` property

-   The `additionalProperties` parameter


> ### Note:  
> You can request direct and navigation properties using the `additionalProperties` parameter, but you can't request 1:n navigation properties or use an absolute path to a singleton.

You can also request additional properties at the page level. For more information, see [Requesting Additional Properties on the Object Page and Custom Page](requesting-additional-properties-on-the-object-page-and-custom-page-c5e38f9.md).



## Using the `com.sap.vocabularies.UI.v1.PresentationVariant` Annotation Term and the `RequestAtLeast` Property

Use the `com.sap.vocabularies.UI.v1.PresentationVariant` annotation term and the `RequestAtLeast` property to request additional properties for tables, as shown in the following sample code:

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

> ### Caution:  
> Including 1:n properties in the `RequestAtLeast` property results in performance issues and prevents exporting tables to a spreadsheet.



## Using the `additionalProperties` Parameter

You can request additional properties using the `additionalProperties` parameter in the following ways:

-   In the `Table` building block
-   In the `manifest.json` file

In the following sample code, the `Upvotes` and `Ratings` direct properties and the `_Downvotes/count` navigation property are fetched in the table request of the `Table` building block even if the properties aren't displayed as columns in the `LineItem` annotation:

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

