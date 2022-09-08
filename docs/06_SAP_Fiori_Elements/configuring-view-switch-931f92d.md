<!-- loio931f92df1cd145b88f8214f0ce4ae8bb -->

# Configuring View Switch

Configuring this property lets you define a drop-down list to filter/view data at the card level.



> ### Note:  
> You can extend this feature to react based on filter conditions or custom configuration. For more information, see Custom View Switch[Custom View Switch](custom-view-switch-ecd9f10.md).

You can define view switch with a single entity set or with multiple entity sets.

> ### Sample Code:  
> View Switch Definition with Single Entity Set
> 
> ```
> "settings": {
>     "entitySet": "SalesOrderSet"
>     "tabs": [
>         {
>             ...
>         },
>         {
>             ...
>         }
>     ]
> }
> ```

> ### Sample Code:  
> View Switch Definition with Multiple Entity Sets
> 
> ```
> "settings": {
>     "tabs": [
>         {
>             "entitySet": "SalesOrderSet"
> 		  ...
>         },
>         {
>             "entitySet": " ProductSet"
> 		  ...
>         }
>     ]
> }
> ```

> ### Sample Code:  
> View Switch Sample
> 
> ```
> "card009": {
>   "model": "salesOrder",
>   "template": "sap.ovp.cards.list",
>   "settings": {
>     "title": "Contract Monitoring",
>     "subTitle": "Per Supplier",
>     "valueSelectionInfo": "Total contract volume",
>     "listFlavor": "bar",
>     "listType": "extended",
>     "showLineItemDetail":true,
>     "tabs": [
>       {
>         "entitySet": "SalesOrderSet",
>         "dynamicSubtitleAnnotationPath": "com.sap.vocabularies.UI.v1.HeaderInfo#dynamicSubtitle",
>         "annotationPath": "com.sap.vocabularies.UI.v1.LineItem#View1",
>         "selectionAnnotationPath": "com.sap.vocabularies.UI.v1.SelectionVariant#line1",
>         "presentationAnnotationPath": "com.sap.vocabularies.UI.v1.PresentationVariant#line",
>         "identificationAnnotationPath": "com.sap.vocabularies.UI.v1.Identification",
>         "dataPointAnnotationPath": "com.sap.vocabularies.UI.v1.DataPoint#line",
>         "value": "{{dropdown_value2}}"
>        },
>       {
>         "entitySet": "SalesOrderSet",
>         "dynamicSubtitleAnnotationPath": "com.sap.vocabularies.UI.v1.HeaderInfo#dynamicSubtitle",
>         "annotationPath": "com.sap.vocabularies.UI.v1.LineItem#View3",
>         "presentationAnnotationPath": "com.sap.vocabularies.UI.v1.PresentationVariant#SP3",
>         "identificationAnnotationPath": "com.sap.vocabularies.UI.v1.Identification",
>         "dataPointAnnotationPath": "com.sap.vocabularies.UI.v1.DataPoint#line",
>         "value": "{{dropdown_value3}}"
>        },
>       {
>         "entitySet": "ProductSet",
>         "annotationPath": "com.sap.vocabularies.UI.v1.LineItem",
>         "identificationAnnotationPath": "com.sap.vocabularies.UI.v1.Identification#identify1",
>         "value": "{{dropdown_value1}}"
>        }
>     ]
>   }
> }
> ```

