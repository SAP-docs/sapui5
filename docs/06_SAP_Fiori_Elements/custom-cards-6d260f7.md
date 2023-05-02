<!-- loio6d260f7708ca4c4a9ff45e846402aebb -->

# Custom Cards

Create custom cards to view custom information relevant to your overview page.



## Procedure

To create a custom card:

1.  Create the following files in your project folder:

    -   `Component.js` file

    -   `Cardtype.controller.js` file. For example: `List.controller.js`

    -   `Cardtype.fragment.xml` file. For example: `List.fragment.xml`

    -   `CardtypeHeader.fragment.xml` file. For example: `ListHeader.fragment.xml`


2.  Extend the custom overview page component in your component file.

    ```
    sap.ui.define(["sap/ovp/cards/ext/Component"],
     
        function (CardComponent) {
            "use strict";
     
            return CardComponent.extend("test.testovp.ext.list.Component", {
                // use inline declaration instead of component.json to save 1 round trip
                metadata: {
                    properties: {
                        "contentFragment": {
                            "type": "string",
                            "defaultValue": "sap.ovp.cards.list.List"
                        },
                        "controllerName": {
                            "type": "string",
                            "defaultValue": "sap.ovp.cards.list.List"
                        },
                        "annotationPath": {
                            "type": "string",
                            "defaultValue": "com.sap.vocabularies.UI.v1.LineItem"
                        },
                        "countHeaderFragment": {
                            "type": "string",
                            "defaultValue": "sap.ovp.cards.generic.CountHeader"
                        },
                        "headerExtensionFragment": {
                            "type": "string",
                            "defaultValue": "sap.ovp.cards.generic.KPIHeader"
                        }
                    },
     
                    version: "${version}",
     
                    library: "sap.ovp",
     
                    includes: [],
     
                    dependencies: {
                        libs: ["sap.suite.ui.microchart"],
                        components: []
                    },
                    config: {}
                }
            });
        }
    );
    ```

3.  Define the fragment file content.

    > ### Sample Code:  
    > List.fragment.xml
    > 
    > ```
    > <core:FragmentDefinition
    >         xmlns="sap.m"
    >         xmlns:core="sap.ui.core"
    >         xmlns:ovp="sap.ovp.ui"
    >         xmlns:template="http://schemas.sap.com/sapui5/extension/sap.ui.core.template/1">
    >     <!-- Here you can put your Card's Content Area -->
    > </core:FragmentDefinition>
    > ```

    > ### Sample Code:  
    > ExtendedBarList.fragment.xml
    > 
    > ```
    > 
    > <core:FragmentDefinition
    >         xmlns="sap.m"
    >         xmlns:core="sap.ui.core"
    >         xmlns:ovp="sap.ovp.ui"
    >         xmlns:template="http://schemas.sap.com/sapui5/extension/sap.ui.core.template/1">
    >     <!-- Here you can put your Card's Header Area -->
    > </core:FragmentDefinition>
    > ```

4.  Define the content of the controller file.

    > ### Sample Code:  
    > ```
    > (function () {
    >     "use strict";
    >     /*global sap, jQuery */
    >     
    >    /*
    >    Here you can put Controller code
    >    */
    >  
    >     sap.ui.define([], function() {
    >         return {
    >             onInit: function () {
    >                 
    >             },
    >     
    >             onAfterRendering: function () {
    >                 
    >             }
    >     }
    >     });
    > })();
    > 
    > ```

5.  Configure the descriptor file.

    > ### Sample Code:  
    > ```
    > "card008_UrgentPurchaseOrdersk": {
    >   "model": "purchaseOrder",
    >   "template": "sap.ovp.demo.ext.list",
    >   "settings": {
    >     "title": "Custom Card for purchased items",
    >     "subTitle": "PurchaseOrderSet custom card",
    >     "listType": "extended",
    >     "entitySet": "PurchaseOrderSet",
    >     ...
    > 	...
    > ```


