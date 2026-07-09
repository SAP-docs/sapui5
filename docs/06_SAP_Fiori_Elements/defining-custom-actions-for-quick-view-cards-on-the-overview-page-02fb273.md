<!-- loio02fb273ee1024fec914b11befe2b1887 -->

# Defining Custom Actions for Quick View Cards on the Overview Page

You can assign custom actions to quick view cards that open in the object stream of the stack card. These custom actions are displayed as buttons in the card footer. You can also add custom global actions to the filter bar.



## Procedure

Custom actions for quick view cards consist of the following steps:

1.  Create a Javascript file that defines the press handlers.

    Create a Javascript file in your project folder. For example, `customConfiguration.controller.js`. Define the custom actions and the `onCustomActionPress` hook, as shown in the following sample code:

    > ### Sample Code:  
    > ```
    > 
    > sap.ui.define([], function () {
    >     "use strict";
    >     return {
    >         /*
    >         The following Hook function "onCustomActionPress" accepts only one argument name of the press handler as a string and return the press handler function defined in the custom controller.       
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

2.  Reference the Javascript file in the `manifest.json` file.

    In the `manifest.json` file, add the controller extension that points to your Javascript file:

    > ### Sample Code:  
    > `manifest.json`
    > 
    > ```
    > "extends": {
    >         "extensions": {
    >              "sap.ui.controller.Extensions": {
    >                      "sap.ovp.app.Main": {
    >                                  "controllerName": "my_app.ext.controller.OverViewPageExt"
    >                       }
    >               }
    >         }
    > }
    > 
    > ```

3.  Configure the custom actions in the stack card.

    Under `objectStreamCardsSettings` property of the stack card settings, add the `customActions` property, and define the following mandatory properties:

    ****


    <table>
    <tr>
    <th valign="top">

    Property
    
    </th>
    <th valign="top">

    Description
    
    </th>
    </tr>
    <tr>
    <td valign="top">
    
    `text` 
    
    </td>
    <td valign="top">
    
    The string shown in the quick view action footer.
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `press` 
    
    </td>
    <td valign="top">
    
    The name of a press handler defined in your JavaScript file.
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `position` 
    
    </td>
    <td valign="top">
    
    A numeric value that determine the order of actions in the quick view action footer.
    
    </td>
    </tr>
    </table>
    
    > ### Sample Code:  
    > `manifest.json`
    > 
    > ```
    > "card007_ProductsOutOfStock": {
    >   "model": "salesOrder",
    >   "template": "sap.ovp.cards.v4.stack",
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

    > ### Note:  
    > The template setting in the `manifest.json` file depends on your OData version. Use `sap.ovp.cards.v4.<cardType>` for SAP Fiori elements for OData V4 and `sap.ovp.cards.<cardType>` for SAP Fiori elements for OData V2.




<a name="loio02fb273ee1024fec914b11befe2b1887__section_zfy_m3p_k2b"/>

## Adding Global Actions on the Filter Bar

You can add custom global actions on the filter bar by configuring the `manifest.json` file, defining a fragment for the action button, and creating a controller to handle the action's event.

Please note that, as opposed to other floorplans for SAP Fiori elements for OData V4, the overview page uses smart controls.

> ### Note:  
> The type of filter bar is determined by the service \(entity\) bound to the filter configuration of the overview page application. If the service is an OData V4 service, a `FilterBar` building block is rendered; for OData V2, a smart filter bar is rendered.

1.  Configure `manifest.json` file with controller and view extensions, as shown in the following sample code:

    > ### Sample Code:  
    > `manifest.json`
    > 
    > ```
    > "sap.ui5": {
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

2.  Create a fragment for example, `customAction.fragment.xml` that contains the button shown on the filter bar, as shown in the following sample code:

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

3.  Implement the press handle in a controller

    Create a controller file for example, `customFilter.controller.js` with the press handler referenced in the fragment, as shown in the following sample code:

    > ### Sample Code:  
    > `customFilter.controller.js`
    > 
    > ```
    > sap.ui.define("sap.ovp.demo.ext.customFilter", [
    >     "sap/ui/model/Filter",
    >     "sap/m/MessageToast"
    > ], function (Filter, MessageToast) {
    >     "use strict";
    > 
    >     // Extension controller for OVP demo app
    >     return {
    >         /**
    >          * This is for Custom Global Action
    >          */
    >         handleCustomAction: function() {
    >             var msg = 'Custom Global Action clicked';
    >             MessageToast.show(msg);
    >         }
    >     };
    > });
    > ```


