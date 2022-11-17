<!-- loioecdf1d6b2bda47b2accd369046c4936d -->

# Extension Points for Pages

You can use extension points to enhance pages in SAP Fiori elements apps.

> ### Note:  
> This topic is currently only applicable to SAP Fiori elements for OData V4.



<a name="loioecdf1d6b2bda47b2accd369046c4936d__section_l4n_3h5_3qb"/>

## Using Custom Pages

Custom pages provide the following features:

-   simple configuration by adding a routing target of type ‘component’ to the manifest, using component `sap.fe.core.fpm` and referring to a custom XML view

-   availability of the binding context for the OData model in custom XML view and page controller

-   context-based navigation from a custom page to an SAP Fiori elements-based list report or object page via the controller extension `sap.fe.core.controllerextensions.Routing`

-   support for building blocks as part of the flexible programming model


To define a custom page, the routing configuration in the manifest is extended by adding a routing target. The structure is as follows:

> ### Sample Code:  
> Routing Configuration
> 
> ```
> {
>    "sap.ui5": {
>         "routing": {
>             "routes": [
>                 {
>                     "pattern": ":?query:",
>                     "name": "customPage",
>                     "target": "customPage"
>                 },
>                 {
>                     "pattern": "/RootEntity({key}):?query:",
>                     "name": "objectPage",
>                     "target": "objectPage"
>                 },
>                 {
>                     "pattern": "/RootEntity({key})/items({key2}):?query:",
>                     "name": "customDetailPage",
>                     "target": "customDetailPage"
>                 }
>             ],
>             "targets": {
>                 "customPage": {
>                     "type": "Component",
>                     "id": "customPage",
>                     "name": "sap.fe.core.fpm",
>                     "options": {
>                         "settings": {
>                             "viewName": "sap.fe.core.fpmExplorer.customPageContent.CustomPage",
>                             "entitySet": "RootEntity",
>                             "navigation": {
>                                 "RootEntity": {
>                                     "detail": {
>                                         "route": "objectPage"
>                                     }
>                                 }
>                             }
>                         }
>                     }
>                 },
>                 "objectPage": {
>                     "type": "Component",
>                     "id": "objectPage",
>                     "name": "sap.fe.templates.ObjectPage",
>                     "options": {
>                         "settings": {
>                             "entitySet": "RootEntity",
>                             "editableHeaderContent": false,
>                             "navigation": {
>                                 "items": {
>                                     "detail": {
>                                         "route": "customDetailPage"
>                                     }
>                                 }
>                             }
>                         }
>                     }
>                 },
>                 "customDetailPage": {
>                     "type": "Component",
>                     "id": "customDetailPage",
>                     "name": "sap.fe.core.fpm",
>                     "options": {
>                         "settings": {
>                             "viewName": "sap.fe.core.fpmExplorer.customPageContent.CustomDetailPage",
>                             "entitySet": "ChildEntity",
>                             "navigation": {}
>                         }
>                     }
>                 }
>             }
>         }
>    }
> }
> ```

The previous example configuration defines a custom page as the entry page of the app, offering navigation to an object page. The latter offers navigation to a subsequent custom page.



<a name="loioecdf1d6b2bda47b2accd369046c4936d__section_m1m_4h5_3qb"/>

## Settings for Custom Pages

You can define your custom pages by implementing an XML view and using the following properties:

**Properties of a Custom Page**


<table>
<tr>
<th valign="top">

Property Name



</th>
<th valign="top">

Supported Values



</th>
<th valign="top">

Description



</th>
</tr>
<tr>
<td valign="top">

type



</td>
<td valign="top">

"Component"



</td>
<td valign="top">

Type of the custom page, where the usage of `"Component"` ensures the support of features provided with the flexible programming model.



</td>
</tr>
<tr>
<td valign="top">

id



</td>
<td valign="top">

"<unique\_page\_id\>"



</td>
<td valign="top">

Unique page identifier



</td>
</tr>
<tr>
<td valign="top">

name



</td>
<td valign="top">

"sap.fe.core.fpm"



</td>
<td valign="top">

The usage of `"sap.fe.core.fpm"` ensures the support of features provided with the flexible programming model.



</td>
</tr>
<tr>
<td valign="top">

viewName



</td>
<td valign="top">

"<name\_of\_custom\_xml\_view\>"



</td>
<td valign="top">

The name contains `sap.app.id` as a prefix, followed by the path in the app/webapp folder and the name of the XML view.



</td>
</tr>
<tr>
<td valign="top">

entitySet



</td>
<td valign="top">

"<name\_of\_entity\_set\>"



</td>
<td valign="top">

The name of the entity set.



</td>
</tr>
</table>



## Using the Binding Context

By default, the binding context is available in the XML view of the custom page and its controller. You can find a usage example in the following sample code:

> ### Sample Code:  
> Custom XML View
> 
> ```
> <mvc:View
>     id="application-product"
>     height="100%"
>     controllerName="sap.fe.core.fpmExplorer.customPageContent.CustomPage"
>     xmlns="sap.m"
>     xmlns:core="sap.ui.core"
>     xmlns:mvc="sap.ui.core.mvc"
>     xmlns:l="sap.ui.layout"
>     xmlns:macros="sap.fe.macros"
> >
>     <Page>
>         <content>
>                 <l:HorizontalLayout id="TileContainerExpanded" allowWrapping="true" content="{/RootEntity}" class="sapUiTinyMarginTopBottom">
>                     <GenericTile header="{TitleProperty}" subheader="{DescriptionProperty}" press="onPressed" class="sapUiTinyMarginEnd">
>                         <TileContent unit="{unit}" footer="{footer}">
>                             <NumericContent withMargin="false" value="{kpivalue}" valueColor="{color}" indicator="{trend}" scale="{scale}" />
>                         </TileContent>
>                     </GenericTile>
>                 </l:HorizontalLayout>
>         </content>
>     </Page>
> </mvc:View>
> ```



<a name="loioecdf1d6b2bda47b2accd369046c4936d__section_ysm_qh5_3qb"/>

## Context-Based Navigation

As shown in the previous example, you can define a press handler on the `sap.m.GenericTile`. In the corresponding custom controller implementation shown in the following example, the binding context of the press event is used to navigate to an object page via the routing controller extension:

> ### Sample Code:  
> Custom View Controller
> 
> ```
> sap.ui.define(["sap/fe/core/PageController", "sap/ui/core/UIComponent"], function(PageController, UIComponent) {
>     "use strict";
>  
>     return PageController.extend("sap.fe.core.fpmExplorer.customPageContent.CustomPage", {
>         onPressed: function(oEvent) {
>             var oContext = oEvent.getSource().getBindingContext();
>             this.routing.navigate(oContext);
>         }
>     });
> });
> ```



<a name="loioecdf1d6b2bda47b2accd369046c4936d__section_egq_yj5_3qb"/>

## Using Building Blocks as Part of the Flexible Programming Model

With the flexible programming model, its inherent building blocks make use of existing UI annotations, the standard routing mechanisms, and the draft edit flow for the page. When you use the table building block, for example, in a custom page, it behaves just like you'd expect from any standard table – only you're using it within an extension point.

You can find a usage example in the following sample code:

> ### Sample Code:  
> Usage of Building Blocks in Custom XML View
> 
> ```
> <mvc:View
>     id="application-product"
>     height="100%"
>     controllerName="sap.fe.core.fpmExplorer.customPageContent.CustomPage"
>     xmlns="sap.m"
>     xmlns:core="sap.ui.core"
>     xmlns:mvc="sap.ui.core.mvc"
>     xmlns:l="sap.ui.layout"
>     xmlns:macros="sap.fe.macros"
> >
>     <Page>
>         <content>
>             <macros:Table contextPath="/RootEntity" metaPath="@com.sap.vocabularies.UI.v1.LineItem" id="macroTable" />
>         </content>
>     </Page>
> </mvc:View>
> ```

When you use the table building block in a custom page the standard routing mechanism is automatically available, allowing in-app navigation without having to define an explicit press handler for the table.



### Live Example: Custom Page with `Table` Building Block Including Navigation

You can explore and work with the coding yourself. Check out the live example in the flexible programming model explorer at [Custom Page](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/customElements/customElementsOverview/customPageContent).

