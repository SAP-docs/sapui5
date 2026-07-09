<!-- loio530f9e6f66104d5888ade79b5cf417e0 -->

# Configuring Card Navigation

You can configure both internal and external navigation in overview page cards.



All cards support two types of navigation. They're as follows:

-   Intent-based navigation to another SAP Fiori application, which opens in the same tab.

-   Direct URL navigation to external applications and websites, which opens in a new browser tab.


Users can trigger the navigation by clicking or tapping the card header, and in some cases, on an item within the card.

Navigation information comes from the `com.sap.vocabularies.UI.v1.Identification` annotations, which contains the following types:

**Annotations For Defining Navigation**


<table>
<tr>
<th valign="top">

Annotation Type

</th>
<th valign="top">

User For

</th>
</tr>
<tr>
<td valign="top">

`com.sap.vocabularies.UI.v1.DataFieldForIntentBasedNavigation` 

</td>
<td valign="top">

Intent-based navigation to SAP Fiori application.

</td>
</tr>
<tr>
<td valign="top">

`com.sap.vocabularies.UI.v1.DataFieldWithUrl term` 

</td>
<td valign="top">

Configuring navigation to external apps and websites.

</td>
</tr>
</table>

> ### Tip:  
> Use `DataFieldForIntentBasedNavigation` to configure intent-based navigation.
> 
> Use `DataFieldWithUrl` only when you need to navigate to a specific application route that isn't defined as a target mapping. The overview page identifies this as a intent-based navigation and opens the target application in the correct context within the same tab.

> ### Note:  
> Information about the selected record can only be passed to the navigation destination only from list cards or table cards. To enable this behavior, configure navigation in the `com.sap.vocabularies.UI.v1.LineItem` annotation used by the card.

If `com.sap.vocabularies.UI.v1.Identification` or `com.sap.vocabularies.UI.v1.LineItem` annotation contains more than one navigation record, the first record is used. The navigation records are sorted in the following ways:

-   The importance defined in the `com.sap.vocabularies.UI.v1.ImportanceType` annotation.

-   Their order of entry in the annotation.


In the `manifest.json` file, configure the `com.sap.vocabularies.UI.v1.Identification` annotation by setting the `identificationAnnotationPath` property with a qualifier, as shown in the following sample code:

> ### Sample Code:  
> `manifest.json`
> 
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



If `identificationAnnotationPath` is not configured, `com.sap.vocabularies.UI.v1.Identification` without a qualifier is used.



<a name="loio530f9e6f66104d5888ade79b5cf417e0__section_h2m_v12_ldb"/>

## Configuring Custom Card Navigation

Overview pages support navigation breakouts \(extension points\) that let you configure multiple navigation targets from different areas of a card \(different targets from different line items\).

To configure custom card navigation, proceed as follows:

1.  Register a controller extension in the `manifest.json` file.

    > ### Sample Code:  
    > `manifest.json`
    > 
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

    **Card Parameters**


    <table>
    <tr>
    <th valign="top">

    Parameter
    
    </th>
    <th valign="top">

    Type
    
    </th>
    <th valign="top">

    Description
    
    </th>
    </tr>
    <tr>
    <td valign="top">
    
    `Card ID` 
    
    </td>
    <td valign="top">
    
    String
    
    </td>
    <td valign="top">
    
    The card ID is defined in the `manifest.json` file.
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `Context` 
    
    </td>
    <td valign="top">
    
    Object
    
    </td>
    <td valign="top">
    
    The context bound to the clicked area of the card.
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `Navigation Entry` 
    
    </td>
    <td valign="top">
    
    Object
    
    </td>
    <td valign="top">
    
    The standard navigation defined by annotations.
    
    </td>
    </tr>
    </table>
    
    The `doCustomNavigation` method must return an object that is similar to `Navigation Entry`. The returned object can contain following attributes, all of type `string`:

    **Navigation Properties**


    <table>
    <tr>
    <th valign="top">

    Property
    
    </th>
    <th valign="top">

    Requirement
    
    </th>
    <th valign="top">

    Description
    
    </th>
    </tr>
    <tr>
    <td valign="top">
    
    `type` 
    
    </td>
    <td valign="top">
    
    Mandatory
    
    </td>
    <td valign="top">
    
    Navigation type.

    Possible values are `com.sap.vocabularies.UI.v1.DataFieldWithUrl` and `com.sap.vocabularies.UI.v1.DataFieldForIntentBasedNavigation`.
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `semanticObject` 
    
    </td>
    <td valign="top">
    
    Required when type is `DataFieldForIntentBasedNavigation`.
    
    </td>
    <td valign="top">
    
    The target semantic object.
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `action` 
    
    </td>
    <td valign="top">
    
    Required when type is `DataFieldForIntentBasedNavigation`.
    
    </td>
    <td valign="top">
    
    The intent action.
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `url` 
    
    </td>
    <td valign="top">
    
    Required when type is `DataFieldWithUrl`.
    
    </td>
    <td valign="top">
    
    The target URL.
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    `label` 
    
    </td>
    <td valign="top">
    
    Optional
    
    </td>
    <td valign="top">
    
    A label for navigation.
    
    </td>
    </tr>
    </table>
    
    If custom targets are required for a particular set of input parameters, return an object from the `doCustomNavigation` method.

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

Static parameters are objects containing key-value pairs passed as navigation parameters during intent-based navigation from the overview page to a target application. To add static parameters, define `staticParameters` in the `manifest.json` file.

> ### Sample Code:  
> `manifest.json`
> 
> ```
> card04: {
>     ...
>     settings: {
>         ....
>         identificationAnnotationPath: "com.sap.vocabularies.UI.v1.Identification#identify1",
>         staticParameters: {
>             "parameter1": "parameterValue1",
>             "parameter2": "parameterValue2"
>         }
>     }
> },
> 
> 
> ```

**Related Information**  


[Configuring Card Properties](configuring-card-properties-53b0791.md "This section describes the configuration items relevant for all overview page cards. All cards inherit a set of generic capabilities such as a card header, content area, and navigation support.")

