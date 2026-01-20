<!-- loio6d260f7708ca4c4a9ff45e846402aebb -->

# Creating Custom Cards

In overview pages, you can create custom cards and integrate them into the overview page application.



<a name="loio6d260f7708ca4c4a9ff45e846402aebb__section_btg_5l3_3xb"/>

## Procedure

To create a custom card, proceed as follows:

1.  Create a new folder under `webapp/ext`. For example: `webapp/ext/myCustomCard`.

2.  Create the following files in the new folder:

    -   `Component.js` file

    -   `MyCustomCard.controller.js` file

    -   `MyCustomCard.fragment.xml` file

    -   `MyCustomCardHeader.fragment.xml` file. The header fragment file is an optional file. It is required only if you want to configure the header of your card. For example, you can choose a folder name instead of the name `myCustomCard`.


3.  Extend the custom card component on the overview page: In the `webapp/ext/myCustomCard`, create a new `component.js` file.

    > ### Sample Code:  
    > ```
    > sap.ui.define(["sap/ovp/cards/custom/Component"],
    >     function (CustomCardComponent) {
    >         "use strict";
    >          return CardComponent.extend("test.testovp.ext.myCustomCard.Component", {
    > 
    >             metadata: {
    >                 properties: {
    >                     "contentFragment": {
    >                         "type": "string",
    >                         "defaultValue": "test.testovp.ext.myCustomCard.MyCustomCard"
    >                     },
    >                     customizing: {
    >                         "sap.ui.controllerExtensions": {
    >                              "sap.ovp.cards.generic.Card": {
    >                                   controllerName: "test.testovp.ext.myCustomCard.MyCustomCard"
    >                    }
    >                }
    >            }
    >                     "annotationPath": {
    >                         "type": "string",
    >                         "defaultValue": "com.sap.vocabularies.UI.v1.LineItem"
    >                     },
    >                     "countHeaderFragment": {
    >                         "type": "string",
    >                         "defaultValue": "sap.ovp.cards.generic.CountHeader"
    >                     },
    >                     "headerExtensionFragment": {
    >                         "type": "string",
    >                         "defaultValue": "sap.ovp.cards.generic.KPIHeader"
    >                     }
    >                 },
    >                  version: "${version}",
    >                  library: "sap.ovp",
    >                  includes: [],
    >                  dependencies: {
    >                     libs: ["sap.suite.ui.microchart"],
    >                     components: []
    >                 },
    >                 config: {}
    >             }
    >         });
    >     }
    > );
    > 
    > ```

4.  Define your view: In the `webapp/ext/myCustomCard` folder, create a new fragment file `MyCustomCard.fragment.xml`.

    > ### Sample Code:  
    > ```
    > <core:FragmentDefinition
    >          xmlns="sap.m"
    >          xmlns:core="sap.ui.core"
    >          xmlns:ovp="sap.ovp.ui"
    >          xmlns:template="http://schemas.sap.com/sapui5/extension/sap.ui.core.template/1">
    >      <!-- Here you can put your Card's Content Area -->
    > </core:FragmentDefinition>
    > ```

5.  Define the controller: In the `webapp/ext/myCustomCard` folder, create a new controller file `MyCustomCard.controller.js` and then configure the controller.

    > ### Sample Code:  
    > ```
    >  (function () {
    >      "use strict";
    >      /*global sap, jQuery */
    >     
    >      sap.ui.define([], function() {
    >          return {
    >              onInit: function () {
    >                  ...
    >              },
    >     
    >              onAfterRendering: function () {
    >                 ...
    >             }
    >         }
    >     });
    >  })();
    > 
    > ```

6.  Link to the newly created component for the custom card: To do this, configure the `manifest.json` file, as shown in the following sample code:

    > ### Sample Code:  
    > `manifest.json`
    > 
    > ```
    > "card008_HereIsMyCustomCard": {
    >    "model": "myModel",
    >    "template": "test.testovp.ext.myCustomCard",
    >    "settings": {
    >      "title": "Custom Card Title",
    >      "entitySet": "MyEntity",
    >      ...
    >  	...
    > ```




### Using an Extension API to Refresh Custom Card Data

End users can refresh the data on the custom cards. Refreshing the card data is available as an action on the card.

To enable the refresh action on custom cards, application developers must configure the `onRefresh` extension, as shown in the following sample code:

> ### Sample Code:  
> ```
>      (function () {
>          "use strict";
>          /*global sap, jQuery */
>         
>          sap.ui.define([], function() {
>              return {
>                  onInit: function () {
>                      ...
>                  },
>                  onAfterRendering: function () {
>                     ...
>                  },
>                  onRefresh: function () {
>                     ...
>                  }
>             }
>         });
>      })();
> ```

For more information on card actions, see [Overview Page Card](overview-page-card-74332d5.md).

> ### Note:  
> Card templates that begin with `sap.ovp.cards` are designated for standard cards on overview page applications.



<a name="loio6d260f7708ca4c4a9ff45e846402aebb__section_yrj_pcj_p1c"/>

## Additional Features in SAP Fiori Elements for OData V2



### Using an Extension API to Apply Filters on Custom Cards

You can use an extension API to apply the filters for a custom card based on the entities that are relevant to the card. To do so, add the `setRelevantFilters` extension API in your custom card controller, as shown in the following sample code:

> ### Sample Code:  
> ```
> (function () {
>     "use strict";
>     /*global sap, jQuery */
>     sap.ui.define([], function () {
>         return {
>             onInit: function () { },
>             onAfterRendering: function () {},
>             /**
>              * Extension function to receive card relevant filters
>              * @param {sap.ui.model.Filter} oFilters - Relevant filters
>              * @returns {void}
>              */
>             setRelevantFilters: function (oFilters) {
>                 var oView = this.getView().byId("cardView");
>                 if (oFilters[0] && oFilters[0].aFilters && oFilters[0].aFilters.length > 0) {
>                     // Apply filters to the card
>                     oView.getBinding("items").filter(oFilters);
>                 } else {
>                     oView.getBinding("items").filter([]);
>                 }
>             }
>         });
> })();
> 
> ```

