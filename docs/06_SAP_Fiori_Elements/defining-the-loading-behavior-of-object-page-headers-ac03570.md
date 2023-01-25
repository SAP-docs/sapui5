<!-- loioac035701f0f94bcca2d051bba9f1880d -->

# Defining the Loading Behavior of Object Page Headers

Object pages can make use of request groups and lazy loading.

> ### Note:  
> This topic is currently only applicable to SAP Fiori elements for OData V4.



<a name="loioac035701f0f94bcca2d051bba9f1880d__section_fcv_5l5_nnb"/>

## Grouping of Headers

You can bundle requests so they are sent out as batch requests. SAP Fiori elements supports four request groups, as shown in the following table:

**Request Groups**


<table>
<tr>
<th valign="top">

Name



</th>
<th valign="top">

Used for...



</th>
</tr>
<tr>
<td valign="top">

Heroes



</td>
<td valign="top">

1.  Requests for all fields coming directly from the main entity set

2.  All 1:1 \(multiplicity\) fields from all header forms or KPIs \(data points and micro charts\) and visible sections forms




</td>
</tr>
<tr>
<td valign="top">

Workers



</td>
<td valign="top">

All tables



</td>
</tr>
<tr>
<td valign="top">

Decoration



</td>
<td valign="top">

All 1-n \(multiplicity\) micro charts in the header



</td>
</tr>
<tr>
<td valign="top">

LongRunners



</td>
<td valign="top">

Specific KPIs that are considered to be 'slower', like those from a complex analytical service.

> ### Note:  
> This request group is not used by SAP Fiori elements. However, applications can use it to bundle requests into a batch group that is fired separately from the three request groups listed above, so that the performance of the UI is not impacted.



</td>
</tr>
</table>

Application developers can use the above-mentioned group names to group their `DataPoint` and `MicroChart` requests from the header of the object page. To do so, set control configurations in the manifest for the corresponding header elements, using the annotation path as the key.

> ### Note:  
> -   SAP Fiori elements fires these batch groups in parallel, but cannot control whether the model also allows this. In practice, the requests are fired with a slight delay.
> 
> -   With the `groupID` property, SAP Fiori elements recommends bundling all requests marked with a particular manifest request group \('Heroes', for example\) in one batch request. However, since SAP Fiori elements cannot control the model, it may happen that the batch request is fired while other requests from the same group are still being prepared.
> 
>     Example: An application adds a `DataPoint` request from the object page header to the request group 'Workers'. The `DataPoint` request is fired before the table request, even though they are both part of the same batch group.

> ### Recommendation:  
> Push all KPIs from the 'LongRunners' request group to the right-most end of their header, so that the information that is visible first in the left part of the header is always loaded via the faster standard request groups supported by SAP Fiori elements.

The following sample code is for an object page with configured header elements:

> ### Sample Code:  
> ```xml
> "SalesOrderManageObjectPage": {                  
>     "type": "Component",                 
>     "id": "SalesOrderManageObjectPage",                  
>     "name": "sap.fe.templates.ObjectPage",                  
>     "options":{               
>        "settings": {                         
>             "entitySet": "SalesOrderManage",                         
>             …                          
>             "controlConfiguration": {                                
>                 …                             
>                 "@com.sap.vocabularies.UI.v1.DataPoint#NetValue": {                                  
>                     "requestGroupId": "Workers"                   
>                },                              
>                 "_CreditLimitDetails/@com.sap.vocabularies.UI.v1.Chart#CreditLimitChart": {                                  
>                     "requestGroupId": "LongRunners"                              
>                }                                
>                 …
> ```



<a name="loioac035701f0f94bcca2d051bba9f1880d__section_unx_xl5_nnb"/>

## Lazy Loading

Data calls for object page sections that are not yet in the visible area are delayed. This behavior is referred to as lazy loading.

The data calls are made only when a user scrolls through the page and brings the sections into the viewable area. Lazy loading is enabled by default in the object page for SAP Fiori elements for OData V4 and applications currently cannot disable it.

The behavior is as follows:

-   Simple scenario \(applies to a header with no micro charts AND where none of the form sections have a table\) with two batch requests

    -   Header request

    -   Section data request

        The first three subsections for desktops, and only the visible subsections for touch-enabled devices \(including tablets/mobile devices\)


-   Complex scenario \(applies to a header with one or more micro charts OR where one of the form sections has a table\) with two additional calls

    -   Table request goes in a separate batch request, but in parallel to the other calls

    -   All micro charts in a separate batch, but in parallel to the other calls


-   On scrolling to the remaining subsections, separate batch request are sent for the scrolled-to subsection

    > ### Note:  
    > In case there are error messages from the back end for fields that are not visible in the current section, lazy loading is switched off and one or more of the other sections are loaded. This is done to identify the field related to the back-end message and to enable the user to navigate there directly by clicking on the message.

-   On the subsequent load of the object page, for example going back to the list report and then coming again to a different object page instance, the header and visible subsection requests go in a single batch with a single `GET` request


