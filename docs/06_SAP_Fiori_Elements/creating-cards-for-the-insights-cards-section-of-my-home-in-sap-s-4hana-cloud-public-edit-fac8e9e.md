<!-- loiofac8e9ea74364bbda42ccaefd80944af -->

# Creating Cards for the Insights Cards Section of **My Home** in SAP S/4HANA Cloud Public Edition and **My Home** in SAP S/4HANA

Users can add insights cards in *My Home*.

> ### Note:  
> For information about SAP Fiori elements for OData V4, see [Creating Cards for the Insights Cards Section of My Home in SAP S/4HANA Cloud Public Edition and My Home in SAP S/4HANA](creating-cards-for-the-insights-cards-section-of-my-home-in-sap-s-4hana-cloud-public-edit-9b13559.md).

In tables on the list report page or in charts on the analytical list page, users can create cards that can be added to the *Insights* section of **My Home** in SAP S/4HANA Cloud Public Edition and **My Home** in SAP S/4HANA.

**Prerequisites**

The administrator must enable **My Home** in SAP S/4HANA Cloud Public Edition and **My Home** in SAP S/4HANA to create and add cards.

Once **My Home** in SAP S/4HANA Cloud Public Edition and **My Home** in SAP S/4HANA is enabled, the *Add Card to Insights* option automatically appears in the overflow toolbar of the table in list report page applications and the overflow toolbar of the chart in analytical list page applications.

  
  
**Add Card to Insights Option in the Table Toolbar of List Report Page**

![](images/Add_Cards_to_Insights_New_fe526c6.png "Add Card to Insights Option in the Table Toolbar of List Report
				Page")

  
  
**Add Card to Insights Option in the Chart Toolbar of Analytical List Page**

![](images/Add_Cards_to_Insights_ALP_401e0b0.png "Add Card to Insights Option in the Chart Toolbar of
				Analytical List Page")

> ### Note:  
> The card creation dialog shows only those columns that are supported for a card. The card supports single-valued `DataField` based columns. It also supports columns with field values displayed as links such as `DataFieldWithUrl`, semantic links, and `DataField` with `QuickViewFacets`.
> 
> The columns that are not supported by the card creation dialog include:
> 
> -   Image
> 
> -   Multi-valued based columns
> 
> -   `FieldGroup` based columns
> 
> -   Columns with inline action
> 
> -   Columns with navigation button
> 
> -   `DataFieldForAnnotation` based columns \(for contact or address fields\)
> 
> -   Custom columns

Application developers can hide the *Add Card to Insights* option from the overflow toolbar by configuring specific settings in the `manifest.json` file.

Using the `manifest.json`, list report page applications can choose to hide this feature by setting the `addCardtoInsightsHidden` property within `tableSettings` to `true`, as displayed in the following sample code:

> ### Sample Code:  
> `manifest.json`
> 
> ```
> "sap.ui.generic.app": {
>     "pages": [{
>         "entitySet": "Zfarvd_Bs_Hd_Bo",
>         "component": {
>             "name": "sap.suite.ui.generic.template.ListReport",
>             "list": true,
>             "settings": {
>                 "tableSettings": { 
>                     "addCardtoInsightsHidden": "true" //default value false
>                 }
>             }
>         }
>     }]
> }
> ```

Similarly, using the `manifest.json`, analytical list page applications can choose to hide this feature by setting the `addCardtoInsightsHidden` property within `chartSettings` to `true`, as displayed in the following sample code:

> ### Sample Code:  
> `manifest.json`
> 
> ```
> "sap.ui.generic.app": {
>     "pages": [{
>         "entitySet": "Zfarvd_Bs_Hd_Bo",
>         "component": {
>             "name": "sap.suite.ui.generic.template.AnalyticalListPage",
>             "list": true,
>             "settings": {
>                "chartSettings": { 
>                     "addCardtoInsightsHidden": "true" //default value false
>                }
>             }
>         }
>     }]
> }
> ```

