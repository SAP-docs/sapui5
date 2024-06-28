<!-- loio2a9df06673d34f72b238549d49da8bfb -->

# Descriptor Configuration for the Analytical List Page

The descriptor file \(`manifest.json`\) is an application configuration file that contains valid entries for initializing the analytical list page \(ALP\).



## Enabling the ALP in SAP Fiori Elements for OData V2

The following code sample provides the descriptor configuration with the default values relevant for the ALP.

> ### Note:  
> The Analytical List Page \(ALP\) works only for analytical services

```json
"sap.ui.generic.app": {
 "_version": "1.2.0",

      "settings":{  
         "flexibleColumnLayout":{  
            "defaultTwoColumnLayoutType":"TwoColumnsBeginExpanded"
         }
      },

 "pages": [{ // This can have multiple page definitions within it. ALP currently only consumes the first page.
   "entitySet": "SEPMRA_C_ALP_SlsOrdItemCube",

/* Represents the entity set that is used to populate the main content area. 
For parametrized entity set, use result entity set name instead of parametrized entity set. */

   "component": {
   "name": "sap.suite.ui.generic.template.AnalyticalListPage", // Should not be changed.
     "list":true,
   "settings": {
   "tableSettings": {
   "type": "GridTable or AnalyticalTable or ResponsiveTable",

/*Use these settings to select a table in ALP. Supports three table types: "AnalyticalTable", "GridTable" & "ResponsiveTable".
By default, ALP determines the table type when undefined or if there is an incorrect value.
Note: Do not set "tableType" to "AnalyticalTable" if the underlying service for the main entity set
is not an aggregate service.*/

     "multiSelect": true,

/* When true, multiple records in the tabular display can be 
selected. This setting takes effect only if the service has
defined Actions in annotation or inside ControllerExtension.
Else, the selection is always single.*/

     "selectAll": true

/*Use this setting to select all the rows that are available in the back end with the current filters.
It triggers only one batch call to select all the records.*/

     "selectionLimit": 20

/*You can only select 20 rows at a time while selecting a range of rows in the table.
If selectionLimit is not provided, then a default value of 200 is set to selectionLimit.
Note: Select all and selection limit are applicable only for GridTable and AnalyticalTable*/
}


     "qualifier": "DefaultPresentationVariant" 

/* Represents the SelectionPresentationVariant qualifier. 
ALP looks for SelectionPresentationVariant with this qualifier 
and if not found, it looks for PresentationVariant with this qualifier.

This setting is optional, if this is not provided ALP looks for 
Default LineItem and Chart without qualifiers. */

      "condensedTableLayout": true, // When set to false, compact style will be used to render the table.

      "smartVariantManagement": true, // When false, control level variant management is used instead of page level variant management
      "defaultContentView": "charttable", // Determines the visualization of content area. Possible other values: chart or table.
      "defaultFilterMode": "visual", // Determines the filter mode that is used. Possible other value: compact	   
      "showGoButtonOnFilterBar": false, // Go button is displayed for compact filters when this is set to true
        "contentTitle": "{{contentAreaTitle}}", //Lets you define title for the content area. Ensure that the contentAreaTitle is also defined in i18n.properties
        "autoHide":false,
      "filterDefaultsFromSelectionVariant":false, //Lets you to add default values for FilterBar using SelectionVariant annotation. 
        
      "allFiltersAsInParameters": true, //All filter fields will be set as in parameter.

      "keyPerformanceIndicators": { // The first 3 KPIs listed here show up in the KPI tags
         "KPIRevenue": { // First KPI
            "model": "kpi",

/* Links to the item in "models" section which provides additional information,
for example, the data source for the KPI from which we could further obtain the
data source and annotation corresponding to this KPI. This property must not be empty.  */

            "entitySet": "SEPMRA_C_ALP_TotalSalesKPI", // Entity set used for bringing up the details displayed within the KPI tag/card.
            "qualifier": "KPIRevenue",

/* Refers to the UI.KPI annotation. */

            "detailNavigation": "OverviewPage", 

/* Points to an element within "outbounds" property of the
"crossNavigation" section. The details there help us in determining
the target application as well as the parameters that need to be passed
upon navigation from the KPI card footer. */

            "groupId": "mainKpiGroup"

/* To achieve faster end-to-end response time within analytical list page, enable 
batching of KPIs by defining groupId in the KPI section of the descriptor 
configuration file. You can determine which KPIs should be grouped together in a 
given batch call. 
Note: 
-> The KPIs with same data source are batched together. KPIs with same 
groupId and different data source triggers different batch calls.

-> Batching of KPIs may increase the number of batch calls to the back end.
*/

         }
      } // End of KPIs
   } // End of settings
  },
  "pages": [{ //ALP does an inner app navigation to the smart template specified below
         "entitySet": "SEPMRA_C_ALP_SlsOrdItemCube",
         "component": {
            "name": "<

<sap.suite.ui.generic.template.ObjectPage>>"
         }
         "navigation": { //Optional (If specified ALP navigates to the target Application specified below through external app navigation)
            "display": {
               "path": "sap.apps.crossNavigation.outbounds",
               "target": "<
    
    <NavigateToCTRItem>>"
             }
            }

   }]
}] // End of outer pages
}
```



<a name="loio2a9df06673d34f72b238549d49da8bfb__section_b3f_qhf_1qb"/>

## Enabling the ALP in SAP Fiori Elements for OData V4

In SAP Fiori elements for OData V4, the ALP is not a separate floorplan, but rather a 'flavor' of the list report. When application developers configure a list report template, they can decide to create the template using the 'ALP flavor'. Application developers must then add the "views" configuration as shown in the following sample code:

> ### Sample Code:  
> ALP Configuration in `manifest.json`
> 
> ```json
> "targets": {
>      "BusinessPartnersList": {
>           ………
>           "name": "sap.fe.templates.ListReport",
>           "options": {
>                "settings": {
>                     "contextPath": "/BusinessPartners",
>                     ………
>                     "views": {
>                          "paths": [{
>                               "primary": [{
>                                    "annotationPath": "com.sap.vocabularies.UI.v1.PresentationVariant#ProductSalesPV"
>                               }],
>                               "secondary": [{
>                                    "annotationPath": "com.sap.vocabularies.UI.v1.LineItem"
>                               }],
>                               "defaultPath": "both"
>                          }]
>                     },
>                     ………
>                     ………
>                }
>           }
>      }
> }
> ```

The primary annotation path can be either `UI.Chart`, `UI.PresentationVariant`, or `UI.SelectionPresentationVariant`. If you specify a `UI.PresentationVariant` or `UI.SelectionPresentationVariant`, SAP Fiori elements picks the first chart visualization and renders it. If the primary annotation path leads to a `PresentationVariant` that has no chart visualization, SAP Fiori elements looks for the default chart \(`Ui.Chart` without a qualifier\) and renders it. If the default chart is not found, SAP Fiori elements renders a blank chart.

> ### Tip:  
> If the specified primary or secondary `annotationPath` is not found, there is no fallback and the application will fail to load.

The secondary annotation path can be either `UI.LineItem`, `UI.PresentationVariant`, or `UI.SelectionPresentationVariant`. If you specify `UI.PresentationVariant` or `UI.SelectionPresentationVariant`, SAP Fiori elements picks the first `LineItem` visualization and renders it. If the secondary annotation path leads to a `PresentationVariant` that has no table visualization, SAP Fiori elements looks for the default table \(`UI.LineItem` w/o qualifier\) and renders it. If the default table is not found, SAP Fiori elements renders a blank table.

`"defaultPath"` can be `"primary"`, `"secondary"`, or `"both"`. If it is `"primary"`, SAP Fiori elements loads the app in chart-only view. If it is `"secondary"`, SAP Fiori elements loads the app in table-only view. If it is `"both"`, SAP Fiori elements loads the app in hybrid view.

> ### Note:  
> Do not use arrays for the `"paths"`, `"primary"` and `"secondary"` properties even though they are provided in the manifest, because SAP Fiori elements currently does not support this.

**Related Information**  


[Analytical List Page](analytical-list-page-3d33684.md "The analytical list page (ALP) offers a unique way to analyze data step by step from different perspectives, to investigate a root cause through drilldown, and to act on transactional content.")

