<!-- loio6d260f7708ca4c4a9ff45e846402aebb -->

# Creating Custom Cards on the Overview Page

You can create custom cards and integrate them into an overview page application.



<a name="loio6d260f7708ca4c4a9ff45e846402aebb__section_btg_5l3_3xb"/>

## Procedure

A custom card consists of a component, a view fragment, a controller, and an optional header fragment. You can create these files in your project, then register the card in `manifest.json` file.

To create a custom card, proceed as follows:

1.  Create the custom card folder and files.

    Create a new folder under `webapp/ext`. For example: `webapp/ext/myCustomCard`.

    > ### Note:  
    > `myCustomCard` is a placeholder name. You can replace it with any custom name as per your requirement.

2.  Create the following files in the new folder:

    **Component Files of Custom Cards**


    <table>
    <tr>
    <th valign="top">

    File
    
    </th>
    <th valign="top">

    Purpose
    
    </th>
    </tr>
    <tr>
    <td valign="top">
    
    `Component.js` 
    
    </td>
    <td valign="top">
    
    Extends the standard custom component.
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `MyCustomCard.controller.js` 
    
    </td>
    <td valign="top">
    
    Implements the card's lifecycle hooks and event handlers.
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `MyCustomCard.fragment.xml` 
    
    </td>
    <td valign="top">
    
    Defines the content area of the card
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    <code><code>MyCustomCardHeader.fragment.xml</code></code> 
    
    </td>
    <td valign="top">
    
    Defines a custom header for the card.

    This is required only if you want to configure the header
    
    </td>
    </tr>
    </table>
    
3.  Extend the custom card component.

    In the `webapp/ext/myCustomCard`, create a new `component.js` file, as shown in the following sample code:

    > ### Sample Code:  
    > `component.js`
    > 
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

4.  Define your view fragment.

    In the same folder, create a `MyCustomCard.fragment.xml` file for content area of the card, as shown in the following sample code:

    > ### Sample Code:  
    > `MyCustomCard.fragment.xml`
    > 
    > ```
    > <core:FragmentDefinition
    >          xmlns="sap.m"
    >          xmlns:core="sap.ui.core"
    >          xmlns:ovp="sap.ovp.ui"
    >          xmlns:template="http://schemas.sap.com/sapui5/extension/sap.ui.core.template/1">
    >      <!-- Here you can put your Card's Content Area -->
    > </core:FragmentDefinition>
    > ```

5.  Define the controller.

    In the same folder, create a new controller file `MyCustomCard.controller.js` and then configure the controller, as shown in the following sample code:

    > ### Sample Code:  
    > `MyCustomCard.controller.js`
    > 
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

6.  Register the custom card in the `manifest.json` file:

    In the `manifest.json` file, add an entry for the card under `cards` and refer your custom component using the `template` property, as shown in the following sample code:

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

    > ### Note:  
    > Card templates that begin with `sap.ovp.cards` are for standard cards. Always use your own namespace for custom cards.




### Refreshing Custom Card Data using an Extension API

Users can refresh the data on a custom card from the action menu of the card. To enable the refresh action on custom cards, application developers must implement the `onRefresh` extension hook in your custom card controller, as shown in the following sample code:

> ### Sample Code:  
> `onRefresh`
> 
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



## Additional Features in SAP Fiori Elements for OData V2

You can also use the `setRelevantFilters` extension API to apply card-specific filters based on the entities that are relevant to the card. Add the API in your custom card controller, as shown in the following code sample:

> ### Sample Code:  
> `setRelevantFilters`
> 
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

