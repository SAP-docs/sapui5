<!-- loio931f92df1cd145b88f8214f0ce4ae8bb -->

# Configuring View Switch

You can configure view switch on a card to give users a dropdown list that allows them to filter or view data within the same card. Each view can use its own annotations and entity set.



> ### Note:  
> You can extend this feature to react dynamically to filter conditions or custom configuration. For more information, see [Extending Custom View Switch](extending-custom-view-switch-ecd9f10.md).

You can configure a view switch with either a single entity set or multiple entity sets.

When all tabs share the same entity set, define the `entitySet` once at the `settings` level. This allows each tab to inherit the entity set automatically, as shown in the following sample code:

> ### Sample Code:  
> `manifest.json` 
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

When tabs use different entity sets, define the `entitySet` inside each tab, as shown in the following sample code:

> ### Sample Code:  
> `manifest.json` 
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

> ### Note:  
> When `entitySet` is defined at both the settings level and tab level, the tab-level `entitySet` takes precedence. If no `entitySet` is defined at the tab level, the settings-level `entitySet` is used.

The following sample code shows two tabs share the same entity set `SalesOrderSet`, while another tab uses the `ProductSet` entity set:

> ### Sample Code:  
> `manifest.json` 
> 
> ```
> "card009": {
>   "model": "salesOrder",
>   "template": "sap.ovp.cards.v4.list",
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

> ### Note:  
> The template setting in the `manifest.json` file depends on your OData version. Use `sap.ovp.cards.v4.<cardType>` for SAP Fiori elements for OData V4 and `sap.ovp.cards.<cardType>` for SAP Fiori elements for OData V2.

**Related Information**  


[Configuring Card Properties](configuring-card-properties-53b0791.md "This section describes the configuration items relevant for all overview page cards. All cards inherit a set of generic capabilities such as a card header, content area, and navigation support.")

