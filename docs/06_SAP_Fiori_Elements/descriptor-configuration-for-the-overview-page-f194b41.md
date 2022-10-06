<!-- loiof194b411027e4402a0be0537fa7b803b -->

# Descriptor Configuration for the Overview Page

The descriptor file \(`manifest.json`\) is an application configuration file that contains valid entries for initializing an application.



The `manifest.json` file defines static information about the application, such as the name of the application or the location of various files. It is written in JavaScript Object Notation \(JSON\) format.

> ### Sample Code:  
> Descriptor Sample Settings
> 
> ```
> "sap.ovp": {//section for ovp-specific app descriptor settings
> 	"globalFilterModel": "ZModelName", //OData model that contains entity definitions relevant for global filters
> 	"globalFilterEntityType": "ZFilterEntityType", //Represents the entity to use as a global filter in the smart filter bar control
> 	“globalFilterEntitySet”: “ZFilterEntitySet”, //Represents the entity set to use as a global filter in the smart filter bar control
> 	"containerLayout": "resizable", //Represents the layout of the card container, as fixed or resizable. The default value is fixed.
> 	“smartVariantRequired”: true, //Represents a switch to activate smart variant management in the global filters. The default value is true.
> 	“showDateInRelativeFormat”: false, //Represents a switch to enable or disable relative/normal date formatting in OVP applications
> 	"enableLiveFilter": false, //Represents the switch to activate live update in the global filters, else manual update is required by clicking the Go button
> 	”imageSupported": true, //Allows the condensed list card to show images or icons	
> 	"considerAnalyticalParameters": true, //Flag to enable/disable analytical parameter support for smart filter bar
> 	“refreshIntervalInMinutes”: 2, //Time interval in minutes to auto refresh the card models
> 	“useDateRangeType”: true, //Flag to enable or disable semantic date range control for the Smart filter bar. The default value is false.
> 
> 	“cards”: {  //An object of cards 
> 	“card01”: { //each card will contain the following 
> 	"model": “ZCard1Model”, //Model for the card
> 	"template": “sap.ovp.cards.list”,//Card component path to use for this card
> 	“settings”: {
> 	“title”: “card title”, //Language-dependent title of the card - used in the card header
> 	“subTitle”: “sub title”, //Language-dependent subtitle of the card - used in the card header
> 	“entitySet”: “zCard1EntitySet”, //Entity set displayed in this card
> 	“"valueSelectionInfo": “text for KPI Header”, //Additional information relevant for the KPI Header
> 	"listFlavor": “Standard”, //Represents the flavor of the list to use in this card. The flavor can be bar or standard.
> 	“listType”: “Extended”, //Represents the type of list to use for this card. The list can be extended to display more information or condensed to take up less space on the card
> 	“sortBy”: “zPropertyForSort”,//Property name to sort by this entity set
> 	“sortOrder“: “Ascending”//Sort order (ascending or descending)
> 	"staticContent": {}, //Applicable for static link list cards
> 	"annotationPath": “”, // Represents the annotation path
> 	"kpiAnnotationPath":"com.sap.vocabularies.UI.v1.KPI#AllActualCosts", // Represents the KPI annotation path"selectionAnnotationPath": “”, // Represents the selection annotation path
>         		"chartAnnotationPath": “”,//Represents the chart annotation path
>        		 "presentationAnnotationPath": “”, //Represents the presentation annotation path
> 
>        		 "dataPointAnnotationPath": “”, //Represents the data point annotation path
> 
>        		 "identificationAnnotationPath": “”, //Represents the identification annotation path
>        		 "dynamicSubtitleAnnotationPath": “dynamicSubtitle”, //Represents the dynamic subtitle annotation path
>         		"requireAppAuthorization": “” //Represents the cards for which authorization is required
> 	"chartAnnotationPath": "com.sap.vocabularies.UI.v1.Chart#SalesShareBubble",
>     			"presentationAnnotationPath": "com.sap.vocabularies.UI.v1.PresentationVariant#SalesShareBubble",
>     			"identificationAnnotationPath": "com.sap.vocabularies.UI.v1.Identification#Eval_by_Currency_Scatter",
>     			"selectionAnnotationPath" : "com.sap.vocabularies.UI.v1.SelectionVariant#Eval_by_Currency_ColumnStacked",
>     			"navigation": "noHeaderNav" //Allows you to disable navigation from the analytical list card header area
>  
>   }
> }
> 
> }
> }
> 
> ```

Users can resize the card area \(increase or decrease\) in the resizable card layout. It is a grid-based layout that allows you to resize a card in horizontal and vertical directions. Configure the OVP section in the descriptor file with the `"containerLayout": "resizable"` property.

To load cards with specific requirements, define a default size as part of the card definition in the descriptor file.

```
"defaultSpan": {
  "rows": 7, \\Number of line items to display for table and list cards
  "cols": 2  \\Card width calculated based on window width
  "showOnlyHeader": true/false, \\To render only the card header
  "minimumTitleRow": 1/2/3, \\Display more text in the title, number of lines to be shown
  "minimumSubTitleRow": 1/2 \\Display more text in the subtitle, number of lines to be shown
}
```

