<!-- loiof194b411027e4402a0be0537fa7b803b -->

# Configuring the Manifest for the Overview Page

You can use the `manifest.json` file to initialize an overview page application.



The `manifest.json` file defines static information about the application and contains configuration parameters that control the application's behavior, layout, and data handling.

The overview page settings are defined in the `sap.ovp` section of the `manifest.json` file. The `sap.ovp` section contains two kinds of settings as follows:

-   Application-level properties: They control the overall behavior of the overview page.

-   Card-level properties: They're defined within the `cards` object that configure each individual card.


Please note that, as opposed to other floorplans for SAP Fiori elements for OData V4, the overview page uses smart controls.

> ### Sample Code:  
> `manifest.json`
> 
> ```
> "sap.ovp": {
>     "globalFilterModel": "ZModelName",
>     "globalFilterEntitySet": "ZFilterEntitySet",
>     "containerLayout": "resizable",
>     "smartVariantRequired": true,
>     "showDateInRelativeFormat": false,
>     "enableLiveFilter": false,
>     "dataLoadSettings": {
>         "loadDataOnAppLaunch": "ifAnyFilterExist"
>     },
>     "imageSupported": true,
>     "refreshIntervalInMinutes": 2,
>     "useDateRangeType": true,
>     "enableLazyRendering": true,
>     "cards": {
>         "card01": {
>             "model": "ZCard1Model",
>             "template": "sap.ovp.cards.v4.list",
>             "settings": {
>                 "title": "card title",
>                 "subTitle": "sub title",
>                 "entitySet": "zCard1EntitySet",
>                 "valueSelectionInfo": "text for KPI Header",
>                 "listFlavor": "Standard",
>                 "listType": "Extended",
>                 "sortBy": "zPropertyForSort",
>                 "sortOrder": "Ascending",
>                 "showRefresh": false,
>                 "staticContent": {},
>                 "annotationPath": "",
>                 "kpiAnnotationPath": "com.sap.vocabularies.UI.v1.KPI#AllActualCosts",
>                 "chartAnnotationPath": "",
>                 "presentationAnnotationPath": "",
>                 "dataPointAnnotationPath": "",
>                 "identificationAnnotationPath": "",
>                 "dynamicSubtitleAnnotationPath": "dynamicSubtitle",
>                 "requireAppAuthorization": "",
>                 "chartAnnotationPath": "com.sap.vocabularies.UI.v1.Chart#SalesShareBubble",
>                 "presentationAnnotationPath": "com.sap.vocabularies.UI.v1.PresentationVariant#SalesShareBubble",
>                 "identificationAnnotationPath": "com.sap.vocabularies.UI.v1.Identification#Eval_by_Currency_Scatter",
>                 "selectionAnnotationPath": "com.sap.vocabularies.UI.v1.SelectionVariant#Eval_by_Currency_ColumnStacked",
>                 "navigation": "noHeaderNav",
>                 "enableTextWrapping": true
>             }
>         }
>     }
> }
> ```

> ### Note:  
> The template setting in the `manifest.json` file depends on your OData version. Use `sap.ovp.cards.v4.<cardType>` for SAP Fiori elements for OData V4 and `sap.ovp.cards.<cardType>` for SAP Fiori elements for OData V2.

SAP Fiori elements for OData V2 supports the `considerAnalyticalParameters` flag, which enables analytical parameter support for the smart filter bar.



### Application-Level Properties

The following properties configure the overall behavior of the overview page app:

**Overview Page Manifest Properties**


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

`globalFilterModel` 

</td>
<td valign="top">

OData model that contains entity definitions used by the global filter.

</td>
</tr>
<tr>
<td valign="top">

`globalFilterEntitySet` 

</td>
<td valign="top">

Entity set used by the filter bar control as the global filter.

</td>
</tr>
<tr>
<td valign="top">

`containerLayout` 

</td>
<td valign="top">

Layout of the card container. The supported values are `fixed` and `resizable`.

</td>
</tr>
<tr>
<td valign="top">

`smartVariantRequired` 

</td>
<td valign="top">

Activates smart variant management in the global filters. Default: `true`.

</td>
</tr>
<tr>
<td valign="top">

`showDateInRelativeFormat` 

</td>
<td valign="top">

Enables or disables relative date formatting.

</td>
</tr>
<tr>
<td valign="top">

`enableLiveFilter` 

</td>
<td valign="top">

Enables live update in the global filters. When `false`, users must click *Go* to apply filters.

</td>
</tr>
<tr>
<td valign="top">

`dataLoadSettings.loadDataOnAppLaunch` 

</td>
<td valign="top">

Defines loading behavior of data on app launch. The acceptable values are `ifAnyFilterExist`, `always`, `never`.

</td>
</tr>
<tr>
<td valign="top">

`imageSupported` 

</td>
<td valign="top">

Allows the condensed list card to show images or icons.

</td>
</tr>
<tr>
<td valign="top">

`refreshIntervalInMinutes` 

</td>
<td valign="top">

Interval \(in minutes\) for automatic refresh of card models.

</td>
</tr>
<tr>
<td valign="top">

`useDateRangeType` 

</td>
<td valign="top">

Enables or disables the semantic date range control for the filter bar. The default value is `false`.

</td>
</tr>
<tr>
<td valign="top">

`enableLazyRendering` 

</td>
<td valign="top">

When `true`, only cards in the visible viewport are rendered initially; additional cards render on scroll. The default value is `false`.

</td>
</tr>
<tr>
<td valign="top">

`considerAnalyticalParameters` 

</td>
<td valign="top">

Enables analytical parameter support for the smart filter bar. This setting applies to SAP Fiori elements for OData V2.

</td>
</tr>
</table>

> ### Tip:  
> To improve performance, you can also enable lazy loading by setting the URL parameter `sap-fe-xx-lazyloadingtest=true`. This mimics the behavior of `"enableLazyRendering": true`.



### Card- Level Properties

Each card is defined as an entry inside the `cards` object. The card key for example, `card01` is the unique ID used to reference the card.

**Card Properties**


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

`model` 

</td>
<td valign="top">

Model used by the card.

</td>
</tr>
<tr>
<td valign="top">

`template` 

</td>
<td valign="top">

Card component path.

</td>
</tr>
<tr>
<td valign="top">

`settings.title` 

</td>
<td valign="top">

Language-dependent title shown in the card header.

</td>
</tr>
<tr>
<td valign="top">

`settings.subTitle` 

</td>
<td valign="top">

Language-dependent subtitle shown in the card header.

</td>
</tr>
<tr>
<td valign="top">

`settings.entitySet` 

</td>
<td valign="top">

Entity set displayed in this card.

</td>
</tr>
<tr>
<td valign="top">

`settings.valueSelectionInfo` 

</td>
<td valign="top">

Additional information shown in the KPI header.

</td>
</tr>
<tr>
<td valign="top">

`settings.listFlavor` 

</td>
<td valign="top">

List flavor: `bar` or `Standard`.

</td>
</tr>
<tr>
<td valign="top">

`settings.listType` 

</td>
<td valign="top">

List type: `Extended` \(more information\) or `Condensed` \(less space\).

</td>
</tr>
<tr>
<td valign="top">

`settings.sortBy` 

</td>
<td valign="top">

Property name used to sort the entity set.

</td>
</tr>
<tr>
<td valign="top">

`settings.sortOrder` 

</td>
<td valign="top">

Sort order: `Ascending` or `Descending`.

</td>
</tr>
<tr>
<td valign="top">

`settings.showRefresh` 

</td>
<td valign="top">

Shows or hides the *Refresh* option under *More Actions*. Default: `true`.

</td>
</tr>
<tr>
<td valign="top">

`settings.staticContent` 

</td>
<td valign="top">

Applicable to static link list cards.

</td>
</tr>
<tr>
<td valign="top">

`settings.annotationPath` 

</td>
<td valign="top">

Generic annotation path.

</td>
</tr>
<tr>
<td valign="top">

`settings.kpiAnnotationPath` 

</td>
<td valign="top">

Path to a `UI.KPI` annotation.

</td>
</tr>
<tr>
<td valign="top">

`settings.selectionAnnotationPath` 

</td>
<td valign="top">

Path to a `UI.SelectionVariant` annotation.

</td>
</tr>
<tr>
<td valign="top">

`settings.chartAnnotationPath` 

</td>
<td valign="top">

Path to a `UI.Chart` annotation.

</td>
</tr>
<tr>
<td valign="top">

`settings.presentationAnnotationPath` 

</td>
<td valign="top">

Path to a `UI.PresentationVariant` annotation.

</td>
</tr>
<tr>
<td valign="top">

`settings.dataPointAnnotationPath` 

</td>
<td valign="top">

Path to a `UI.DataPoint` annotation.

</td>
</tr>
<tr>
<td valign="top">

`settings.identificationAnnotationPath` 

</td>
<td valign="top">

Path to a `UI.Identification` annotation.

</td>
</tr>
<tr>
<td valign="top">

`settings.dynamicSubtitleAnnotationPath` 

</td>
<td valign="top">

Path to a dynamic subtitle annotation.

</td>
</tr>
<tr>
<td valign="top">

`settings.requireAppAuthorization` 

</td>
<td valign="top">

Indicates that authorization is required for this card.

</td>
</tr>
<tr>
<td valign="top">

`settings.navigation` 

</td>
<td valign="top">

Set to `noHeaderNav` to disable navigation from the analytical list card header.

</td>
</tr>
<tr>
<td valign="top">

`settings.enableTextWrapping` 

</td>
<td valign="top">

Enables text wrapping in the card. Default: `false`.

</td>
</tr>
</table>



## Configuring the Overview Page Layout

The following card layouts are available for overview pages:


<table>
<tr>
<th valign="top">

Layout

</th>
<th valign="top">

Behavior

</th>
<th valign="top">

How to enable

</th>
</tr>
<tr>
<td valign="top">

Fixed card layout

</td>
<td valign="top">

Cards have a fixed width. You can configure each card with specific size requirements by defining a default size in its definition. The grid supports up to four columns.

</td>
<td valign="top">

Set `"containerLayout": "fixed"`

</td>
</tr>
<tr>
<td valign="top">

Resizable card layout

</td>
<td valign="top">

Users can resize cards horizontally and vertically within the grid.

</td>
<td valign="top">

Set `"containerLayout": "resizable"`

</td>
</tr>
</table>

> ### Note:  
> The fixed card layout has been deprecated as of SAPUI5 1.142. So, the resizable card layout becomes the default layout.

When switching from fixed card layout to resizable card layout in an application, the following changes made in the fixed card layout are not retained:

-   Card arrangements modified by users using drag and drop.

-   Card order changes made by key users using cut and paste.


**Related Information**  


[Configuring Dependencies to SAPUI5 Libraries](configuring-dependencies-to-sapui5-libraries-ef5f16b.md "You can define dependencies to SAPUI5 libraries required by your app. Defining dependencies allow the framework to preload libraries efficiently, which can improve the loading time of the app.")

[Configuring the Global Filter on the Overview Page](configuring-the-global-filter-on-the-overview-page-73d9693.md "You can configure the global filter to allow users to filter the data displayed on one or more cards.")

[Refresh Entity Sets in sap-keep-alive Mode in the Overview Pages](refresh-entity-sets-in-sap-keep-alive-mode-in-the-overview-pages-0c35c87.md "You can use the sap-keep-alive feature in SAP Fiori launchpad to preserve the view state of an overview page when users navigate away from it.")

[The FilterBar Building Block](the-filterbar-building-block-7838611.md "You can user the FilterBar building block to add a filter bar to your application in SAP Fiori elements for OData V4.")

[Smart Filter Bar](../10_More_About_Controls/smart-filter-bar-7bcdffc.md "The sap.ui.comp.smartfilterbar.SmartFilterBar control analyzes the $metadata document of an OData service and renders a FilterBar control that can be used to filter, for example, a table or a chart.")

