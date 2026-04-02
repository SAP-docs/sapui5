<!-- loioac035701f0f94bcca2d051bba9f1880d -->

# Defining the Loading Behavior of Object Pages

You can configure the loading behavior of object pages using request groups and lazy loading.



<a name="loioac035701f0f94bcca2d051bba9f1880d__section_fcv_5l5_nnb"/>

## Request Groups

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

You can use the above-mentioned group names to group their `DataPoint` and `MicroChart` requests from the header of the object page. To do so, set control configurations in the `manifest.json` file for the corresponding header elements, using the annotation path as the key.

> ### Note:  
> -   SAP Fiori elements fires these batch groups in parallel, but cannot control whether the model also allows this. In practice, the requests are fired with a slight delay.
> 
> -   With the `groupID` property, SAP Fiori elements recommends bundling all requests marked with a particular manifest request group \('Heroes', for example\) in one batch request. However, since SAP Fiori elements cannot control the model, it may happen that the batch request is fired while other requests from the same group are still being prepared.
> 
>     Example: An application adds a `DataPoint` request from the object page header to the request group 'Workers'. The `DataPoint` request is fired before the table request, even though they are both part of the same batch group.

> ### Recommendation:  
> Push all KPIs from the 'LongRunners' request group to the right-most end of their header, so that the information that is visible first in the left part of the header is always loaded with the faster standard request groups supported by SAP Fiori elements.

The following sample code is for an object page with configured header elements:

> ### Sample Code:  
> `manifest.json`
> 
> ```json
> 
> 
> "SalesOrderManageObjectPage": {
>     "type": "Component",
>     "id": "SalesOrderManageObjectPage",
>     "name": "sap.fe.templates.ObjectPage",
>     "options": {
>         "settings": {
>             "contextPath": "/SalesOrderManage",
>             …
>             "controlConfiguration": {
>                 …
>                 "@com.sap.vocabularies.UI.v1.DataPoint#NetValue": {
>                     "requestGroupId": "Workers"
>                 },
>                 "_CreditLimitDetails/@com.sap.vocabularies.UI.v1.Chart#CreditLimitChart": {
>                     "requestGroupId": "LongRunners"
>                 }
>                 …
>             }
>         }
>     }
> }
> 
> ```



<a name="loioac035701f0f94bcca2d051bba9f1880d__section_unx_xl5_nnb"/>

## Lazy Loading

Data calls for object page sections that are not yet in the visible area are delayed. This behavior is referred to as lazy loading.

The data calls are made only when a user scrolls through the page and brings the sections into the visible area. Lazy loading is enabled by default in the object page, and applications cannot disable it.

The behavior is as follows:

-   Simple scenario \(applies to a header with no micro charts and where none of the form sections have a table\) with two batch requests:

    -   Header request

    -   Section data request

        Only the visible subsections in the visible area are requested.


-   Complex scenario \(applies to a header with one or more micro charts or where one of the form sections has a table\) with two additional calls:

    -   The table request goes in a separate batch request.

    -   All 1:n micro charts in a separate batch, but in parallel to the other calls.


-   When scrolling to the remaining subsections, separate batch requests are sent for the scrolled-to subsections.

    > ### Note:  
    > If at least one subsection has its visibility defined using a binding expression, the data for all subsections is be loaded only after that visibility is resolved. As a result, the request for the object page header, which also includes the properties used in the section’s visibility expression, and the requests for the subsections are executed sequentially.




## Optimizing the Rendering of Sections

To improve the loading performance of object pages, section rendering can be deferred until a section enters the visible area.

You can optimize section rendering in the `manifest.json` file at either the application level or the object page level.

The following sample code shows the `manifest.json` setting at the application level:

> ### Sample Code:  
> `manifest.json`
> 
> ```
> 
> "sap.fe": {
>     "app": {
>         "enableLazyLoading": true
>     }
> }
> 
> ```

The following sample code shows the `manifest.json` setting at the object page level:

> ### Sample Code:  
> `manifest.json`
> 
> ```
> 
> "sap.ui5": {
>     "routing": {
>         "targets": {
>             "ObjectPageTarget": {
>                 "options": {
>                     "settings": {
>                         "enableLazyLoading": true
>                     }
>                 }
>             }
>         }
>     }
> }
> ```

> ### Note:  
> The first three sections with the `visible` property set to `true` are always rendered, even if they are outside of the visible area. Rendering is deferred only for the remaining sections.

