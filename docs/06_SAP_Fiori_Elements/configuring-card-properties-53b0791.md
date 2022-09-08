<!-- loio53b07912070f4e52babd516d7e4e8074 -->

# Configuring Card Properties

This section provides the configuration items relevant for all overview page cards.



All cards inherit the generic capabilities that are shared across all cards, such as a card header, card footer, navigation support, and more. The following are the card properties mandatory for all cards:

-   `model`: Name of the model to provide to the card instance
-   `template`: Card type \(card component package\) to instantiate
-   `settings`: Iternal card configuration passed to the card instance
-   `entitySet`: Entity set to use in the card

-   **[Configuring an EntitySet with Input Parameters](configuring-an-entityset-with-input-parameters-b40e5ae.md "Some entity sets require input parameters. You can configure these parameters using the
            com.sap.vocabularies.UI.v1.SelectionVariant annotation term by setting the Parameters
        section.")**  
Some entity sets require input parameters. You can configure these parameters using the `com.sap.vocabularies.UI.v1.SelectionVariant` annotation term by setting the `Parameters` section.
-   **[Configuring Card Navigation](configuring-card-navigation-530f9e6.md "All cards support navigation, both to a different SAP Fiori application using intent
		based navigation, and to external applications and websites via a direct URL which opens in
		a new browser tab. To trigger the navigation, users click or tap on a card header and in
		some cases, on an item within the card. ")**  
All cards support navigation, both to a different SAP Fiori application using intent based navigation, and to external applications and websites via a direct URL which opens in a new browser tab. To trigger the navigation, users click or tap on a card header and in some cases, on an item within the card.
-   **[Configuring Card Filters](configuring-card-filters-ecde99f.md "You can add filters to all card types, by using the
         com.sap.vocabularies.UI.v1.SelectionVariant annotation term or by passing
      filter parameter in the URL.")**  
You can add filters to all card types, by using the `com.sap.vocabularies.UI.v1.SelectionVariant` annotation term or by passing filter parameter in the URL.
-   **[Configuring Sort Properties](configuring-sort-properties-41af842.md "All cards support sorting using the
            com.sap.vocabularies.UI.v1.PresentationVariant annotation
        term.")**  
All cards support sorting using the `com.sap.vocabularies.UI.v1.PresentationVariant` annotation term.
-   **[Adding the OData Select Parameter](adding-the-odata-select-parameter-be12099.md "OData supports the select parameter, where you can specify lists of
    properties that are needed by the application, so that unnecessary properties are not returned
    by the OData request.")**  
OData supports the `select` parameter, where you can specify lists of properties that are needed by the application, so that unnecessary properties are not returned by the OData request.
-   **[Configuring View Switch](configuring-view-switch-931f92d.md "Configuring this property lets you define a drop-down list to filter/view data at the
        card level.")**  
Configuring this property lets you define a drop-down list to filter/view data at the card level.
-   **[Setting Units of Measure](setting-units-of-measure-0d6c1d5.md "You can display the unit of measure next to numeric values by providing the
			sap:unit attribute in the OData metadata file or by annotating the unit
		in the annotation document.")**  
You can display the unit of measure next to numeric values by providing the `sap:unit` attribute in the OData metadata file or by annotating the unit in the annotation document.
-   **[Formatting Numeric Values](formatting-numeric-values-735e518.md "Numeric values in overview pages appear in their short format, using the SAPUI5
			sap.ui.core.format.NumberFormat utility. You can configure the number
		of decimal points to display by using information provided in the OData metadata file, or by
		using annotations.")**  
Numeric values in overview pages appear in their short format, using the SAPUI5 `sap.ui.core.format.NumberFormat` utility. You can configure the number of decimal points to display by using information provided in the OData metadata file, or by using annotations.
-   **[Highlighting Numeric Values](highlighting-numeric-values-f6a5a28.md "You can highlight a numeric value (for example, with a color) by providing
			Criticality or CriticalityCalculation information in
		the com.sap.vocabularies.UI.v1.DataPoint annotation.")**  
You can highlight a numeric value \(for example, with a color\) by providing `Criticality` or `CriticalityCalculation` information in the `com.sap.vocabularies.UI.v1.DataPoint` annotation.
-   **[Coloring Cards Based on Threshold Values](coloring-cards-based-on-threshold-values-02c53f4.md "With overview pages, column chart cards can be semantically colored based on threshold
		values.")**  
With overview pages, column chart cards can be semantically colored based on threshold values.
-   **[Setting Authorizations for Cards](setting-authorizations-for-cards-00683f9.md "By setting authorization on cards, you can ensure that a user only sees cards or a
		preview of content from an application for which they have the proper
		authorization.")**  
By setting authorization on cards, you can ensure that a user only sees cards or a preview of content from an application for which they have the proper authorization.

