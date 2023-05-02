<!-- loio74332d5d829b413f9d7c0950dc6a71d2 -->

# Overview Page Card

A card is a smart component that uses UI annotation to render its content. It contains a header area and a footer area.



Each card is bound to a single entity set in a data source and configuration is provided in the `"sap.ovp"..."cards"` object. The cards object contains the list of cards to display in the application.

The card ID is the property name and the card configuration is provided in an object as the value. At runtime, cards are displayed in the order that they appear in the application descriptor.



<a name="loio74332d5d829b413f9d7c0950dc6a71d2__section_nsk_34p_31b"/>

## Card Header

All cards have a static header section that can be configured in the descriptor configuration file. The card header includes the following properties: `category`, `title`, `subTitle` and card actions.

The title of a card is mandatory. The subtitle is only mandatory if the card contains data point annotations \(such as a KPI header\). The title and subtitle can contain a maximum of two lines. The header also contains counter information that displays how many records are being presented in the card out of the total existing records, according to the current filter.

> ### Note:  
> The count information displays only in table and list cards. For more information, see [Table Cards](table-cards-167bf7c.md) and [List Cards](list-cards-56f39e0.md).

> ### Sample Code:  
> ```
> "sap.ovp": {
>     "_version": "1.1.0",
>     "globalFilterModel": "ZCD204_EPM_DEMO_SRV",
>     "globalFilterEntityType": "SalesOrder",
>     "cards": {
>         "card00": {
>             "model": "ZCD204_EPM_DEMO_SRV",
>             "template": "sap.ovp.cards.stack",
>             "settings": {
>                 ...
>                 "category": "{{card00_category}}",
>                 "title": "{{card00_title}}",
>                 "subTitle ": "{{card00_subTitle}}",
>                 ...
>             }
>         },
>         "card01": {
>             "model": "ZCD204_EPM_DEMO_SRV",
>             "template": "sap.ovp.cards.table",
>             "settings": {
>                 "title": "{{card01_category}}",
>                 ...
>             }
>         },
>         ...
>     }
> }
> ```



### **KPI Headers**

The generic card provides a dynamic section that can display a key performance indicator \(KPI\), and related information, in the header. The KPI is an aggregated value, as defined in the annotation file. To display a KPI header in a card, make sure that your OData service supports aggregation of values and the data is coming from the backend only. The KPI header can contain a KPI value, including its unit of measure, its trend, and percentage of change, and KPI header description.

The KPI extension uses the following annotation terms:

-   `com.sap.vocabularies.UI.v1.DataPoint`: Used to retrieve information about the title and the value of the KPI.
-   `com.sap.vocabularies.UI.v1.PresentationVariant`: Used to retrieve information about the fields by which to group, and sorting information.
-   `com.sap.vocabularies.UI.v1.SelectionVariant`: Used to retrieve information about the filters.

> ### Note:  
> For more information about these annotations, see [Annotations Used in Overview Pages](annotations-used-in-overview-pages-65731e6.md).

These annotation terms can be configured in the application manifest file, as shown in the following example:

> ### Sample Code:  
> ```
> 
> "sap.ovp": {
>     ...
>     "cards": {
>         ...
>         "card02": {
>             "model": "ZCD204_EPM_DEMO_SRV",
>             "template": "sap.ovp.cards.charts.bubble",
>             "settings": {
>                 "entitySet": "SalesOrders",
>                 "identificationAnnotationPath": "com.sap.vocabularies.UI.v1.Identification#bubble",
>                 "selectionAnnotationPath": "com.sap.vocabularies.UI.v1.SelectionVariant#bubble",
>                 "chartAnnotationPath": "com.sap.vocabularies.UI.v1.Chart#bubble",
>                 "presentationAnnotationPath": "com.sap.vocabularies.UI.v1.PresentationVariant#bubble",
>                 "dataPointAnnotationPath": "com.sap.vocabularies.UI.v1.DataPoint#bubble"
>             }
>         },
>         ...
>     }
> }
> 
> ```



<a name="loio74332d5d829b413f9d7c0950dc6a71d2__section_bd1_gyx_5wb"/>

## Card Actions

Card actions are available as of SAPUI5 1.110. You can access and perform the card actions from the card header. The following card actions are available:

-   *Refresh*: this action retrieves the the entity bound to the card and reloads the card, displaying the latest data.

-   *Add card to Insights*: this action shows a preview of the card so that it can be added to the *Insights* section directly from the overview. Note that this action is only available if the *Insights* service is enabled. If it is not enabled, this option will not be shown.

-   *Manage Cards*: this action opens the *Manage Cards* dialog where you can hide or show the available cards.




<a name="loio74332d5d829b413f9d7c0950dc6a71d2__section_qhh_dkw_z5b"/>

## Cards in *Insights*

You can add and use cards within the *Insights* section of the new *My Home* in SAP S/4HANA Cloud. The objective of displaying cards on the entry page is to visualize charts, KPI´s and counters in form of interest cards. The analytical, list and table cards are supported and can be used in the *Insights* section of the entry page.

To add a card to the *Insights* section, select the more option present on your card and choose *Add to Insights*. From the subsequent dialog box, you can add the selected card to your *Insights* section. You can update the *Title* and the *Subtitle* of the card before choosing *Add*.

Note that you can add only eight cards to your *Insights* section at a given time. If eight cards are already being displayed, the selected card is added to *Edit Insights* dialog box. You can choose to select/deselect cards by editing the *Insights* section. For more information, see [*My Home* in SAP S/4HANA Cloud](https://help.sap.com/docs/SAP_S4HANA_CLOUD/4fc8d03390c342da8a60f8ee387bca1a/8a60279e8d2041b5ad8d3455fab0f3ef.html).



### Disabling Card Generation

An application can also decide to restrict the generation of individual analytical, list, and table cards. To do so, you can configure the card manifest setting by turning `enableAddToInsights` to `false`. With this, the option to add cards to the *Insights* section is removed.

> ### Sample Code:  
> ```
> "card01": {
>         "model": "MODEL",
>         "template": "sap.ovp.cards.charts.analytical",
>         "settings": {
>           "title": "{{card01_title}}",
>           "subTitle": "{{card01_subTitle}}",
>           "entitySet": "C_EntitySet",
>           "enableAddToInsights": false,
>           "selectionAnnotationPath": "com.sap.vocabularies.UI.v1.SelectionVariant#SV",
>           "chartAnnotationPath": "com.sap.vocabularies.UI.v1.Chart#Chart",
>           "presentationAnnotationPath": "com.sap.vocabularies.UI.v1.PresentationVariant#PV",
>           "dataPointAnnotationPath": "com.sap.vocabularies.UI.v1.DataPoint#DP",
>           "identificationAnnotationPath": "com.sap.vocabularies.UI.v1.Identification"
>         }
>       },
> ```

