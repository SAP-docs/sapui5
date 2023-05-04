<!-- loio02fb273ee1024fec914b11befe2b1887 -->

# Custom Actions

You can assign custom actions to quick view cards that open in the object stream of the stack card. These custom actions are displayed as buttons in the card footer.



## Procedure

To define a custom action in quick view cards, proceed as follows:

1.  Create a JavaScript file in your project folder for defining custom controls. For example, `customConfiguration.controller.js`.

2.  Open the JavaScript file you created and define the custom actions, as shown in the following sample code:

    > ### Sample Code:  
    > ```
    > 
    > sap.ui.define([], function () {
    >     "use strict";
    >     return {
    >         /*
    >         The following Hook function “onCustomActionPress” accepts only one argument name of the press handler as a string and return the press handler function defined in the custom controller.       
    >         */
    >         onCustomActionPress: function(sCustomAction) {
    >             if (sCustomAction === "press1") {
    >                 return this.press1;
    >             } else if (sCustomAction === "press2") {
    >                 return this.press2;
    >             }
    >         },
    >         /*
    >         The following Press Handler contains the custom actions to be performed on click of the button in quickview action footer.
    >         */
    >         press1: function(oEvent) {
    >             window.open("https://www.google.co.in");
    >         },
    >         press2: function(oEvent) {
    >             window.open("http://www.sap.com/index.html");
    >         }
    >     };
    > });
    > 
    > ```

3.  Configure the application descriptor file by performing the following steps:

4.  1.  Add your JavaScript filepath in the `extends` section of the descriptor, as shown in the following sample code:

    ```
    
    "extends": {
            "extensions": {
                 "sap.ui.controller.Extensions": {
                         "sap.ovp.app.Main": {
                                     "controllerName": "my_app.ext.controller.OverViewPageExt"
                          }
                  }
            }
    }
    
    ```

2.  Add the `customActions` property under the stack card settings `objectStreamCardsSettings` property and define the following mandatory properties:

    -   `text`: Enter the string to be shown in the quick view action footer

    -   `press`: Enter the name of a press handler defined in the JavaScript file

    -   `position`: Enter a numeric value to position the order of actions in the quick view action footer


    Check out the following sample code:

    > ### Sample Code:  
    > ```
    > "card007_ProductsOutOfStock": {
    >   "model": "salesOrder",
    >   "template": "sap.ovp.cards.stack",
    >   "settings": {
    >     "itemText": "{{stackCard_itemText}}",
    >     "title": "Products Out of Stock",
    >     "subTitle": "SalesOrderSet Stack Card",
    >     "requireAppAuthorization": "#Action-toappnavsample",
    >     "entitySet": "SalesOrderSet",
    >     "identificationAnnotationPath": "com.sap.vocabularies.UI.v1.Identification,com.sap.vocabularies.UI.v1.Identification#item2",
    >     "objectStreamCardsSettings": {
    >       "showFirstActionInFooter": false,
    >       "customActions": [
    >         {
    >           "text": "text1",
    >           "press": "press1",
    >           "position": 1
    >         },
    >         {
    >           "text": "text2",
    >           "press": "press2",
    >           "position": 10
    >         },
    >         {
    >           "text": "text3",
    >           "press": "press1",
    >           "position": 3
    >         },
    >         {
    >           "text": "text4",
    >           "press": "press2",
    >           "position": 8
    >         },
    >         {
    >           "text": "text5",
    >           "press": "press1",
    >           "position": 5
    >         },
    >         {
    >           "text": "text6",
    >           "press": "press2",
    >           "position": 6
    >         }
    >       ]
    >     }
    >   }
    > }, 
    > ```





<a name="loio02fb273ee1024fec914b11befe2b1887__section_zfy_m3p_k2b"/>

## Global Actions on the Filter Bar

To add custom global actions on the smart filter bar, you need to configure the descriptor file, define a fragment in the view extension, and create a `controller.js` file to handle the events. For example:

> ### Sample Code:  
> Descriptor Setting
> 
> ```
> "sap.ui5": {
>    "_version": "1.1.0",
>        "dependencies": {
>          "libs": {
>            "sap.ovp": {}
>          }
>        },
>    "models": {
>       "i18n": {
>          "type": "sap.ui.model.resource.ResourceModel",
>          "uri": "i18n/i18n.properties"
>       },
>       "salesOrder": {
>          "dataSource": "salesOrder",
>          "settings": {}
>       }
>        },
>        "extends": {
>          "extensions": {
>            "sap.ui.controllerExtensions": {
>              "sap.ovp.app.Main": {
>                "controllerName": "sap.ovp.demo.ext.customFilter"
>              }
>            },
>            "sap.ui.viewExtensions": {
>              "sap.ovp.app.Main": {
>                "SmartFilterBarControlConfigurationExtension|GlobalFilters": {
>                  "className": "sap.ui.core.Fragment",
>                  "fragmentName": "sap.ovp.demo.ext.customFilter",
>                  "type": "XML"
>                },
>                "SmartFilterBarGlobalActionExtension": {
>                  "className": "sap.ui.core.Fragment",
>                  "fragmentName": "sap.ovp.demo.ext.customAction",
>                  "type": "XML"
>                }
>              }
>  
>            }
>          }
>        }
>    },
> ```

Add controller and view extensions with a path to the custom controller name and fragment name.

> ### Sample Code:  
> Fragment for view extension: `customAction.fragment.xml`
> 
> ```
> <core:FragmentDefinition xmlns="sap.m" xmlns:smartfilterbar="sap.ui.comp.smartfilterbar" xmlns:core="sap.ui.core">
>  
>     <Button text="Action" press="handleCustomAction" type="Transparent"></Button>
>  
> </core:FragmentDefinition>
> ```

> ### Sample Code:  
>  `customFilter.controller.js`
> 
> ```
> sap.ui.define("sap.ovp.demo.ext.customFilter", [
>     "sap/ui/model/Filter",
>     "sap/m/MessageToast"
> ], function (Filter, MessageToast) {
>     "use strict";
>  
>     //Extension controller for ovp demo app
>     return {
>          *  /*
>             This is for Custom Global Action
>          */
>         handleCustomAction : function(){
>              var msg = 'Custom Global Action clicked';
>              MessageToast.show(msg);
>         }
>     };
> });
> ```

