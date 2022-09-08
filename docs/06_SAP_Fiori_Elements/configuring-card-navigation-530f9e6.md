<!-- loio530f9e6f66104d5888ade79b5cf417e0 -->

# Configuring Card Navigation

All cards support navigation, both to a different SAP Fiori application using intent based navigation, and to external applications and websites via a direct URL which opens in a new browser tab. To trigger the navigation, users click or tap on a card header and in some cases, on an item within the card.



Navigation information is taken from the `com.sap.vocabularies.UI.v1.Identification` and

-   `com.sap.vocabularies.UI.v1.DataFieldForIntentBasedNavigation` should be used to define intent based navigation to SAP Fiori application.
-   `com.sap.vocabularies.UI.v1.DataFieldWithUrl term` should be used to configure navigation to external apps and websites.

The recommended way to configure intent-based navigation is to use `DataFieldForIntentBasedNavigation`. However, for navigation to a specific application route that is not configured as target mapping, you can also use `DataFieldWithUrl` to construct the specific application route. The overview page will identify that this is an intent-based navigation and open the application in the relevant context, in the same tab.

Note that information about the single record selected can only be passed on to the navigation destination from list or table cards. To support this option, provide navigation configuration in the `com.sap.vocabularies.UI.v1.LineItem` term used by that specific card.

If more than one navigation record is provided in the `com.sap.vocabularies.UI.v1.Identification` or `com.sap.vocabularies.UI.v1.LineItem` terms, the first one will be used for each term. The navigation records would be sorted according to importance, set in the`com.sap.vocabularies.UI.v1.ImportanceType` annotation, and their order of entry. The `com.sap.vocabularies.UI.v1.Identification` term can be configured in the application manifest file by setting the `identificationAnnotationPath` property with a qualifier, as shown in the example below. If the `identificationAnnotationPath` property is not configured, the `com.sap.vocabularies.UI.v1.Identification` term, without a qualifier, is used.

> ### Sample Code:  
> ```
> "sap.ovp": {
>     ...
>     "cards": {
>         ...
>         "card04": {
>             "model": "ZCD204_EPM_DEMO_SRV",
>             "template": "sap.ovp.cards.list",
>             "settings": {
>                 "sortBy": "Price",
>                 "sortOrder": "descending",
>                 "listFlavor": "bar",
>                 "annotationPath": "com.sap.vocabularies.UI.v1.LineItem#bar",
>                 "identificationAnnotationPath": "com.sap.vocabularies.UI.v1.Identification#bar",
>                 "category": "{{card04_category}}",
>                 "entitySet": "Products"
>             }
>         },
>         ...
>     }
> }
> ```



<a name="loio530f9e6f66104d5888ade79b5cf417e0__section_h2m_v12_ldb"/>

## Custom Navigation

Overview pages support navigation breakouts \(extension points\) that let you configure multiple navigation targets from different areas of a card \(different targets from different line items\).

To use navigation breakouts:

1.  Configure your app descriptor for controller extension.

    > ### Sample Code:  
    > ```
    > 
    > "extends": {
    >             "extensions": {
    >                 "sap.ui.controllerExtensions": {
    >                     "sap.ovp.app.Main": {
    >                         "controllerName": "my_app.ext.controller.OverViewPageExt"
    >                     }
    >                 }
    >             }
    >         }
    > 
    > ```

2.  In the custom controller, define the `doCustomNavigation` function with following input parameters:
    -   `Card ID`: Enter a string as defined in the app descriptor

    -   `Context`: Enter the object that defines the context on click of a card

    -   `Navigation Entry`: Enter the object that has standard navigation defined by annotations


3.  Ensure that the `doCustomNavigation` method returns an object that is similar to input `Navigation Entry` and can contain following attributes \(all of type String\):
    -   `type`: \(Mandatory\) Possible values are `com.sap.vocabularies.UI.v1.DataFieldWithUrl` and `com.sap.vocabularies.UI.v1.DataFieldForIntentBasedNavigation`.

    -   `semanticObject`: Required when type is `DataFieldForIntentBasedNavigation`

    -   `action`: Required when type is `DataFieldForIntentBasedNavigation`

    -   `url`: Required when type is `DataFieldWithUrl`

    -   `label`: Optional


4.  If custom targets are required for a particular set of input parameters, return an object from the `doCustomNavigation` method.

    > ### Sample Code:  
    > ```
    > doCustomNavigation: function (sCardId, oContext, oNavigationEntry) {
    >          var oCustomNavigationEntry;
    >          var oEntity = oContext && oContext.getProperty(oContext.sPath);
    > 
    >          if (sCardId === "card001" && oEntity.PurchaseOrder === "4500003575") {
    >               oCustomNavigationEntry = {};
    >               oCustomNavigationEntry.type = "com.sap.vocabularies.UI.v1.DataFieldForIntentBasedNavigation";
    >               oCustomNavigationEntry.semanticObject = "Action";
    >               oCustomNavigationEntry.action = "toappnavsample2";
    >               oCustomNavigationEntry.url = "";
    >               oCustomNavigationEntry.label = ""; 
    >          }
    >          return oCustomNavigationEntry;
    >  }
    > ```




<a name="loio530f9e6f66104d5888ade79b5cf417e0__section_llf_nxf_wgb"/>

## Adding Static Parameters

Static parameters are objects containing key value pairs. They provide navigation parameters during `IntentBasedNavigation` from overview page to an application. To add navigation parameters, define the card settings `staticParameters` in the descriptor file.

> ### Sample Code:  
> ```
> "staticParameters": {
>               "parameter1": "parameterValue1",
>               "parameter2": "parameterValue2",
>             },
> 
> ```

