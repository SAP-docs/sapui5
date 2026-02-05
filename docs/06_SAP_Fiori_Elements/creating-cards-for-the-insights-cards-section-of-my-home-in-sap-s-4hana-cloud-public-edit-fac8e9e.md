<!-- loiofac8e9ea74364bbda42ccaefd80944af -->

# Creating Cards for the Insights Cards Section of **My Home** in SAP S/4HANA Cloud Public Edition and **My Home** in SAP S/4HANA

An option for tables in the list report or charts in the analytical list page allows end users to create cards that can be added to the *Insights* section of **My Home** in SAP S/4HANA Cloud Public Edition and **My Home** in SAP S/4HANA.

**Prerequisites**

The administrator must enable **My Home** in SAP S/4HANA Cloud Public Edition and **My Home** in SAP S/4HANA to create and add cards.

Once **My Home** in SAP S/4HANA Cloud Public Edition and **My Home** in SAP S/4HANA is enabled, the *Add Card to Insights* option automatically appears in the overflow toolbar of the table in list report applications and the overflow toolbar of the chart in analytical list page applications.

  
  
**Add Card to Insights Option in the Table Toolbar of List Report**

![](images/Add_Cards_to_Insights_New_fe526c6.png "Add Card to Insights Option in the Table Toolbar of List
				Report ")

  
  
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

Using the `manifest.json`, list report applications can choose to hide this feature by setting the `addCardtoInsightsHidden` property within `tableSettings` to `true`, as displayed in the following sample code:

> ### Sample Code:  
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

