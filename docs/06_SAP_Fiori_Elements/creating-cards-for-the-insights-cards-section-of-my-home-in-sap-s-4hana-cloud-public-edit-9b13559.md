<!-- loio9b13559ef978405a99e8b624a87daf31 -->

# Creating Cards for the Insights Cards Section of **My Home** in SAP S/4HANA Cloud Public Edition and **My Home** in SAP S/4HANA

Users can add insights cards in *My Home*.

> ### Note:  
> This topic describes how to use the building block within SAP Fiori elements floorplans. If the functionality isn't available when you use the building block in custom pages or custom sections, you can try achieving the functionality through other means, such as the following:
> 
> -   Properties or methods exposed by the building block
> 
> -   Custom code using extensions

In tables on the list report page or in charts on the analytical list page, users can create cards that can be added to the *Insights* section of **My Home** in SAP S/4HANA Cloud Public Edition and **My Home** in SAP S/4HANA.

**Prerequisites**

The administrator must enable **My Home** in SAP S/4HANA Cloud Public Edition and **My Home** in SAP S/4HANA to create and add cards.

Once **My Home** in SAP S/4HANA Cloud Public Edition and **My Home** in SAP S/4HANA is enabled, the *Add Card to Insights* option automatically appears in the overflow toolbar of the table in list report page applications and the overflow toolbar of the chart in analytical list page applications.

  
  
**Add Card to Insights Option in the Table Toolbar of List Report Page**

![](images/Add_Cards_to_Insights_New_fe526c6.png "Add Card to Insights Option in the Table Toolbar of List
				Report
				Page
			")

  
  
**Add Card to Insights Option in the Chart Toolbar of Analytical List Page**

![](images/Add_Cards_to_Insights_ALP_401e0b0.png "Add Card to Insights Option in the Chart Toolbar of
				Analytical List Page")

> ### Note:  
> -   Cards cannot be created when a semantic date filter is applied.
> 
> -   The card creation dialog shows only those columns that are supported for a card. The card supports single-valued `DataField` based columns. It also supports columns with field values displayed as links such as `DataFieldWithUrl`, semantic links, and `DataField` with `QuickViewFacets`. In addition, SAP Fiori elements for OData V4 also supports `DataFieldWithIntentBasedNavigation` and `DataFieldWithNavigationPath` columns.
> 
>     The columns that are not supported by the card creation dialog include:
> 
>     -   Image
> 
>     -   Multi-valued based columns
> 
>     -   `FieldGroup` based columns
> 
>     -   Columns with inline action
> 
>     -   Columns with navigation button
> 
>     -   `DataFieldForAnnotation` based columns \(for contact or address fields\)
> 
>     -   Custom columns
> 
> 
> -   The card creation feature only supports single view scenarios and single entity-multi view scenarios with responsive tables in list report page applications.

Application developers can hide the *Add Card to Insights* option from the overflow toolbar by configuring specific settings in the `manifest.json` file.

To hide the *Add Card to Insights* option in the table toolbar, add the following settings into the `manifest.json` file:

> ### Sample Code:  
> `manifest.json`
> 
> ```
> "controlConfiguration": {
>      "@com.sap.vocabularies.UI.v1.LineItem": {
>          "tableSettings": {
>              "type": "ResponsiveTable",
>              "enableAddCardToInsights": false
>          }
>      }
> }
> ```

To hide the *Add Card to Insights* option in the chart toolbar, add the following settings into the `manifest.json` file:

> ### Sample Code:  
> `manifest.json`
> 
> ```
> "controlConfiguration": {
>     "@com.sap.vocabularies.UI.v1.Chart": {
>         enableAddCardToInsights: false
>     }
> }
> ```

> ### Restriction:  
> -   When creating an integration card from the list report page table, the following changes aren't retained when navigating back from the card:
> 
>     -   The filter fields or table columns that were removed
> 
>     -   Changes in the position of filter fields or table columns
> 
> 
> -   Cards don't have the same formatting for unit of measure fields as seen in the list report page table.



> ### Note:  
> For information about SAP Fiori elements for OData V2, see [Creating Cards for the Insights Cards Section of My Home in SAP S/4HANA Cloud Public Edition and My Home in SAP S/4HANA](creating-cards-for-the-insights-cards-section-of-my-home-in-sap-s-4hana-cloud-public-edit-fac8e9e.md).

**Related Information**  


[**My Home** in SAP S/4HANA Cloud Public Edition ](https://help.sap.com/docs/SAP_S4HANA_CLOUD/4fc8d03390c342da8a60f8ee387bca1a/8a60279e8d2041b5ad8d3455fab0f3ef.html)

[**My Home** in SAP S/4HANA](https://help.sap.com/docs/ABAP_PLATFORM_NEW/a7b390faab1140c087b8926571e942b7/8a60279e8d2041b5ad8d3455fab0f3ef.html)

