<!-- loio2a9df06673d34f72b238549d49da8bfb -->

# Descriptor Configuration for the Analytical List Page

The descriptor file \(`manifest.json`\) is an application configuration file that contains valid entries for initializing the analytical list page \(ALP\).



## Enabling the ALP in SAP Fiori Elements for OData V2

The following code sample provides the descriptor configuration with the default values relevant for the ALP.

```

   "component": {
	"name": "sap.suite.ui.generic.template.AnalyticalListPage", // Should not be changed.

```

> ### Note:  
> The Analytical List Page \(ALP\) works only for analytical services.
> 
> > ### Sample Code:  
> > ```
> > "sap.ui.generic.app": {
> >    "_version": "1.3.0",
> >    "pages": {
> >        "AnalyticalListPage": {
> >            "entitySet": "SEPMRA_C_ALP_SlsOrdItemCubeALPResult",
> >            "component": {
> >                  "name": "sap.suite.ui.generic.template.AnalyticalListPage",
> >                  …..
> >                  ……
> > 
> > ```



<a name="loio2a9df06673d34f72b238549d49da8bfb__section_b3f_qhf_1qb"/>

## Enabling the ALP in SAP Fiori Elements for OData V4

In SAP Fiori elements for OData V4, the ALP is not a separate floorplan, but rather a 'flavor' of the list report. When application developers configure a list report template, they can decide to create the template using the 'ALP flavor'. Application developers must then add the "views" configuration as shown in the following sample code:

> ### Sample Code:  
> ALP Configuration in `manifest.json`
> 
> ```
> "targets": {
>      "BusinessPartnersList": {
>           ………
>           "name": "sap.fe.templates.ListReport",
>           "options": {
>                "settings": {
>                     "entitySet": "BusinessPartners",
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

