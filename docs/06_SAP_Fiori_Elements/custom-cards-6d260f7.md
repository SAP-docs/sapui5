<!-- loio6d260f7708ca4c4a9ff45e846402aebb -->

# Custom Cards

Overview page allows application developers to create custom cards and integrate them to the overview page application.



<a name="loio6d260f7708ca4c4a9ff45e846402aebb__section_btg_5l3_3xb"/>

## Procedure

To create a custom card:

1.  Create a new folder under `webapp/ext`. For example: `webapp/ext/myCustomCard`.

2.  Create the following files in the new folder.

    -   `Component.js` file

    -   `MyCustomCard.controller.js` file

    -   `MyCustomCard.fragment.xml` file

    -   `MyCustomCardHeader.fragment.xml` file. The header fragment file is an optional file. It is required only if you want to customize the header of your card. For example, you can choose a folder name instead of the name `myCustomCard`.


3.  To extend the overview page custom card component, under the `webapp/ext/myCustomCard`, create a new `component.js` file.

    > ### Sample Code:  
    > ```
    > sap.ui.define(["sap/ovp/cards/custom/Component"],
    >     function (CustomCardComponent) {
    >         "use strict";
    >          return CardComponent.extend("test.testovp.ext.myCustomCard.Component", {
    >             // use inline declaration instead of component.json to save 1 round trip
    >             metadata: {
    >                 properties: {
    >                     "contentFragment": {
    >                         "type": "string",
    >                         "defaultValue": "test.testovp.ext.myCustomCard.MyCustomCard"
    >                     },
    >                     "controllerName": {
    >                         "type": "string",
    >                         "defaultValue": "test.testovp.ext.myCustomCard.MyCustomCard"
    >                     },
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
    > ```

4.  To define your view, under the `webapp/ext/myCustomCard folder`, create a new fragment file `MyCustomCard.fragment.xml`.

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

5.  In the `webapp/ext/myCustomCard` folder, create a new controller file `MyCustomCard.controller.js` and define the controller.

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

6.  You can then configure the descriptor file to point to the newly created component for custom card.

    > ### Sample Code:  
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




### Extension to Refresh Cards

Refreshing the card data is available as an action on the card. You must maintain the `onRefresh` extension to refresh custom cards, For more information on card actions, see [Overview Page Card](overview-page-card-74332d5.md).

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

> ### Note:  
> Card templates beginning with `sap.ovp.cards` is reserved for standard overview page cards.



