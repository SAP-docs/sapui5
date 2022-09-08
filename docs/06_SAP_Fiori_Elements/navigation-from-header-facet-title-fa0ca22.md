<!-- loiofa0ca22de375490a84aa3375b617592f -->

# Navigation from Header Facet Title

Applications can configure header facets so that end users can perform both in-page navigation and the navigation to an external application.

> ### Note:  
> This topic is currently only applicable to SAP Fiori elements for OData V4.



<a name="loiofa0ca22de375490a84aa3375b617592f__section_fvl_d5h_gnb"/>

## In-Page Navigation

This allows end user to click on the title of the header facet and navigate to a section/sub section in the same page.

Users can navigate within a page from a data point or micro chart in the header to a section or a subsection. In-page navigation is facilitated by rendering the title of the header item \(data point or micro chart\) as a link. To enable in-page navigation, you must add the control configuration for the header item in the `manifest.json` file:

> ### Sample Code:  
> ```xml
> 
> "SalesOrderManageObjectPage":{
>     "type": "Component",
>     "id": "SalesOrderManageObjectPage",
>     "name": "sap.fe.templates.ObjectPage",
>     "options":{
>         “settings":{
>             "controlConfiguration":{
>                 "@com.sap.vocabularies.UI.v1.DataPoint#NetValue":{ // path to the header item
>                     "navigation":{
>                         "targetSections":{
>                             "sectionId": "SalesOrder::SalesOrderManageObjectPage--fe::FacetSection::HeaderInfo", // section ID
>                             "subSectionId": "SalesOrder::SalesOrderManageObjectPage--fe::FacetSubSection::SalesOrderHeaderPartner" // subsection ID
>                         }
>                     }
>                 }
>             }
>         }
>     }
> }
> ```

You can provide either the section ID or the subsection ID in the control configuration. In-page navigation to a custom section is also supported. If only the section ID is given, the user is shown the first subsection. The following controls support in-page navigation:

-   data point

-   rating indicator

-   progress indicator

-   micro chart


Given an incorrect configuration, the user is shown an error message indicating that the specified section could not be found.



<a name="loiofa0ca22de375490a84aa3375b617592f__section_fjz_q1p_gnb"/>

## External Navigation

This allows end users to click on the title of the header facet and navigate to an external application as configured by the app developer.



### Enabling Navigation from a Data Point

External navigation from the header data point can be achieved by configuring the `targetOutbound` in the manifest.

> ### Sample Code:  
> Manifest changes for navigation in data point of OP header
> 
> ```
> "SalesOrderManageObjectPage" : {
>     ....
>     ....
>     ....
>     "options": {
>         "settings": {
>             "controlConfiguration": {
>                 "@com.sap.vocabularies.UI.v1.DataPoint#NetValue": {
>                     "navigation": {
>                         "targetOutbound": {               
>                             "outbound": "ExternalNavigation"
>                         }
>                     }
>                 }
>             }
>         }
>     }
> }
> ```

The qualifier given in the `targetOutbound` must be used to reference the `outbound` in the cross-navigation section – the external app you want to navigate to:

> ### Sample Code:  
> Outbound section
> 
> ```
> "crossNavigation": {          
>     "outbounds": {   
>         "ExternalNavigation": {           
>             "semanticObject": "SalesOrder",   
>             "action": "display",   
>             "parameters": {              
>                 "SoldToParty": {                                          
>                     "value": {                                                      
>                         "value": "CustomerName",                                              
>                         "format": "binding"                                  
>                     }                           
>                 }                                 
>             }                     
>         }         
>     }
> }
> ```

Semantic object mappings can be configured in the parameters section of the qualified outbound. In the example above, the value of the `"CustomerName"` field in the navigation context is passed as `"SoldToParty"` to the target app. When the app is launched with this configuration, the title of the data point is rendered as a link. Clicking on this link allows users to navigate to a target application with a context that is a combination of the object page and the data point contexts.



### Enabling Navigation from a Micro Chart

External navigation from the micro chart can be achieved by specifying the chart in the `controlConfiguration` in the manifest.

> ### Sample Code:  
> Manifest changes for enabling navigation to micro chart
> 
> ```
> "SalesOrderManageObjectPage" : {
>     ....
>     ....
>     ....
>     "options": {
>         "settings": {
>             "controlConfiguration": {
>                 "@com.sap.vocabularies.UI.v1.Chart#CreditLimitDetails": {                                 
>                     "navigation": {
>                         "targetOutbound": {               
>                             "outbound": "ExternalNavigation"
>                         }
>                     }
>                 }
>             }
>         }
>     }
> }
> ```

Navigation is done via the x-app state, and the page context is merged with the chart context and passed to the external navigation.

> ### Note:  
> -   For a 1:n based micro chart, more than 1 record can be displayed in the chart \(a stacked bar micro chart, for example\) and each record has its own technical ID. So the chart context has multiple values for the technical IDs and all of these are passed to the target app using the OR operator.
> 
> -   If the external application is not configured correctly, or in case of missing authorization for the application, the title of the micro chart header appears as text instead of as a link.

> ### Note:  
> If both external navigation and in-page navigation are configured for a header data point, then external navigation wins.
> 
> Only a single target is supported for external navigation.

