<!-- loio2a9df06673d34f72b238549d49da8bfb -->

# Configuring the Manifest for the Analytical List Page

You can use the ***manifest.json*** file to configure the analytical list page.



The analytical list page \(ALP\) isn't a separate floorplan, but rather a 'flavor' of the list report page. When you configure a list report page template, you can choose to create the template using the 'ALP flavor'. You must then add the "views" configuration, as shown in the following sample code:



> ### Sample Code:  
> ALP Configuration in `manifest.json`
> 
> ```json
> 
> "targets": {
>     "BusinessPartnersList": {
>         ...
>         "name": "sap.fe.templates.ListReport",
>         "options": {
>             "settings": {
>                 "contextPath": "/BusinessPartners",
>                 ...
>                 "views": {
>                     "paths": [{
>                         "primary": [{
>                             "annotationPath": "com.sap.vocabularies.UI.v1.PresentationVariant#ProductSalesPV"
>                         }],
>                         "secondary": [{
>                             "annotationPath": "com.sap.vocabularies.UI.v1.LineItem"
>                         }],
>                         "defaultPath": "both"
>                     }]
>                 },
>                 ...
>             }
>         }
>     }
> }
> ```

The primary annotation path can be either `UI.Chart`, `UI.PresentationVariant`, or `UI.SelectionPresentationVariant`. If you specify a `UI.PresentationVariant` or `UI.SelectionPresentationVariant`, SAP Fiori elements picks the first chart visualization and renders it. If the primary annotation path leads to a `PresentationVariant` that has no chart visualization, SAP Fiori elements looks for the default chart \(`Ui.Chart` without a qualifier\) and renders it. If the default chart is not found, SAP Fiori elements renders a blank chart.

> ### Tip:  
> If the specified primary or secondary `annotationPath` is not found, there is no fallback and the application will fail to load.

The secondary annotation path can be either `UI.LineItem`, `UI.PresentationVariant`, or `UI.SelectionPresentationVariant`. If you specify `UI.PresentationVariant` or `UI.SelectionPresentationVariant`, SAP Fiori elements picks the first `LineItem` visualization and renders it. If the secondary annotation path leads to a `PresentationVariant` that has no table visualization, SAP Fiori elements looks for the default table \(`UI.LineItem` w/o qualifier\) and renders it. If the default table is not found, SAP Fiori elements renders a blank table.

`"defaultPath"` can be `"primary"`, `"secondary"`, or `"both"`. If it is `"primary"`, SAP Fiori elements loads the app in chart-only view. If it is `"secondary"`, SAP Fiori elements loads the app in table-only view. If it is `"both"`, SAP Fiori elements loads the app in hybrid view.

> ### Note:  
> Do not use arrays for the `"paths"`, `"primary"` and `"secondary"` properties even though they are provided in the manifest, because SAP Fiori elements does not support this.



> ### Note:  
> For information about SAP Fiori elements for OData V2, see [Configuring the Manifest for the Analytical List Page](configuring-the-manifest-for-the-analytical-list-page-c4ebbae.md).

**Related Information**  


[Analytical List Page](analytical-list-page-3d33684.md "You can build apps that require visualization and reporting of data using filters, interactive charts, and other data points such as KPIs (key performance indicators).")

