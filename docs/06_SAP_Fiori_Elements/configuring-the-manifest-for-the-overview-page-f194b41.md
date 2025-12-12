<!-- loiof194b411027e4402a0be0537fa7b803b -->

# Configuring the Manifest for the Overview Page

You can use the `manifest.json` file for initializing an overview page application.



It defines static information about the application such as its name and the location of various files, and contains configuration parameters that control the application’s behavior, layout, and data handling.

> ### Sample Code:  
> `manifest.json`
> 
> ```
> "sap.ovp" : { //section for ovp-specific app manifest settings
>     "globalFilterModel": "ZModelName", //OData model that contains entity definitions relevant for global filters
>     "globalFilterEntityType": "ZFilterEntityType", //Represents the entity to use as a global filter in the smart filter bar control. Deprecated since SAPUI5 1.54.
>     "globalFilterEntitySet": "ZFilterEntitySet", //Represents the entity set to use as a global filter in the smart filter bar control. Available from SAPUI5 1.54 onwards.
>     "containerLayout": "resizable", //Represents the layout of the card container.
>     "smartVariantRequired": true, //Represents a switch to activate smart variant management in the global filters. The default value is true.
>     "showDateInRelativeFormat": false, //Represents a switch to enable or disable relative/normal date formatting in OVP applications.
>     "enableLiveFilter": false, //Represents the switch to activate live update in the global filters, otherwise a manual update is required by clicking the Go button.
>     "dataLoadSettings": {
>         "loadDataOnAppLaunch": "ifAnyFilterExist" //Defines the data load behaviour on app launch. Values: 'ifAnyFilterExist'/'always' to auto load data and 'never' to stop the auto data load during application launch.
>     },
>     "imageSupported": true, //Allows the condensed list card to show images or icons.	
>     "considerAnalyticalParameters": true, //Flag to enable/disable analytical parameter support for the smart filter bar.
>     "refreshIntervalInMinutes": 2, //Time interval in minutes to auto refresh the card models.
>     "useDateRangeType": true, //Flag to enable or disable the semantic date range control for the smart filter bar. The default value is false.
>     "enableLazyRendering": true, //Cards in the visible view port get rendered. Additional cards are rendered when scrolling. Default value is false.
>     
>     "cards": { //An object of cards 
>         "card01": { //each card contains the following 
>             "model": "ZCard1Model", //Model for the card
>             "template": "sap.ovp.cards.list", //Card component path to use for this card.
>             "settings": {
>                 "title": "card title", //Language-dependent title of the card - used in the card header.
>                 "subTitle": "sub title", //Language-dependent subtitle of the card - used in the card header.
>                 "entitySet": "zCard1EntitySet", //Entity set displayed in this card.
>                 "valueSelectionInfo": "text for KPI Header", //Additional information relevant for the KPI Header.
>                 "listFlavor": "Standard", //Represents the flavor of the list to use in this card. The flavor can be bar or standard.
>                 "listType": "Extended", //Represents the type of list to use for this card. The list can be extended to display more information or condensed to take up less space on the card.
>                 "sortBy": "zPropertyForSort", //Property name to sort by this entity set.
>                 "sortOrder": "Ascending", //Sort order - ascending or descending.
>                 "showRefresh": false, // Show or hide the Refresh option under More Actions. The default value is true.
>                 "staticContent": {}, //Applicable for static link list cards.
>                 "annotationPath": "", // Represents the annotation path.
>                 "kpiAnnotationPath": "com.sap.vocabularies.UI.v1.KPI#AllActualCosts", // Represents the KPI annotation path "selectionAnnotationPath": "", // Represents the selection annotation path.
>                 "chartAnnotationPath": "", //Represents the chart annotation path.
>                 "presentationAnnotationPath": "", //Represents the presentation annotation path.
>                 "dataPointAnnotationPath": "", //Represents the data point annotation path.
>                 "identificationAnnotationPath": "", //Represents the identification annotation path.
>                 "dynamicSubtitleAnnotationPath": "dynamicSubtitle", //Represents the dynamic subtitle annotation path.
>                 "requireAppAuthorization": "", //Represents the cards for which authorization is required.
>                 "chartAnnotationPath": "com.sap.vocabularies.UI.v1.Chart#SalesShareBubble",
>                 "presentationAnnotationPath": "com.sap.vocabularies.UI.v1.PresentationVariant#SalesShareBubble",
>                 "identificationAnnotationPath": "com.sap.vocabularies.UI.v1.Identification#Eval_by_Currency_Scatter",
>                 "selectionAnnotationPath": "com.sap.vocabularies.UI.v1.SelectionVariant#Eval_by_Currency_ColumnStacked",
>                 "navigation": "noHeaderNav" //Allows you to disable navigation from the analytical list card header area.
>             }
>         }
>     }
> }
> ```

> ### Note:  
> To improve the performance of overview page applications, you can enable lazy loading of cards by setting the URL parameter `sap-fe-xx-lazyloadingtest=true`. This parameter mimics the behavior of setting `"enableLazyRendering": true` in the manifest configuration.



### Configuring the Overview Page Layout

The following card layouts are available for overview pages:

-   Fixed card layout - Set the `containerLayout` parameter to `fixed` to enable this layout. In this card layout, the cards have a fixed width. You can configure them to load with specific size requirements by defining a default size within each card definition. The grid supports up to four columns, determining how many cards can be displayed side by side.

    > ### Note:  
    > The fixed card layout has been deprecated as of SAPUI5 1.142.

-   Resizable card layout - Set the `containerLayout` parameter to `resizable` to enable this layout. End users can adjust the size of cards by expanding or contracting them both horizontally and vertically within the grid-based layout.


When switching from fixed card layout to resizable card layout in an app, the following changes made in the fixed card layout are not retained:

-   Card arrangements modified by end users using drag and drop.

-   Card order changes made by key users using cut and paste.




