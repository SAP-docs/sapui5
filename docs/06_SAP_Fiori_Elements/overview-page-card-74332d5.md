<!-- loio74332d5d829b413f9d7c0950dc6a71d2 -->

# Overview Page Card

A card is a smart component that uses UI annotation to render its content. It contains a header area and a footer area.



Each card is bound to a single entity set in a data source and configuration is provided in the `"sap.ovp"..."cards"` object. The cards object contains the list of cards to display in the application.

The card ID is the property name and the card configuration is provided in an object as the value. At runtime, cards are displayed in the order that they appear in the application descriptor.



<a name="loio74332d5d829b413f9d7c0950dc6a71d2__section_nsk_34p_31b"/>

## Card Header

All cards have a static header section that can be configured in the descriptor configuration file. The card header includes the properties: `category`, `title`, and `subTitle`.

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

-   **[Types of Cards](types-of-cards-8ed3f76.md "Overview pages may contain transactional cards, such as table, list, stack, quick view
		cards, and analytical chart cards such as line, bubble, donut, column, and bullet chart
		cards. ")**  
Overview pages may contain transactional cards, such as table, list, stack, quick view cards, and analytical chart cards such as line, bubble, donut, column, and bullet chart cards.
-   **[Configuring Card Properties](configuring-card-properties-53b0791.md " This section provides the configuration items relevant for all overview page
        cards.")**  
 This section provides the configuration items relevant for all overview page cards.

