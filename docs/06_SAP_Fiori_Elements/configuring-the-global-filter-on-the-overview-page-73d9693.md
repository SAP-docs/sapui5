<!-- loio73d96937ae94468da04cf0d32eb4c6ee -->

# Configuring the Global Filter on the Overview Page

You can configure the global filter to allow users to filter the data displayed on one or more cards.



The global filter displays filterable properties based on the configured entity type. It applies to all cards that share the same property name in their entity type. Users can persist their preferred filters and share them with other users. You can also define filters that appear on the filter bar by default by using the `UI.SelectionFields` configuration in the annotations file.

You configure the global filter in the `"sap.ovp"` section of the `manifest.json` file using the following properties:

-   `globalFilterModel`: The OData model to use for the global filter.

-   `globalFilterEntitySet`: The entity set that contains the filterable properties.


> ### Sample Code:  
> `manifest.json` 
> 
> ```
> "sap.ovp": {
>     "globalFilterModel": "ZCD204_EPM_DEMO_SRV",
>     "globalFilterEntitySet": "SalesOrders",
>     "cards": {
>         ...
>     }
> }
> 
> ```



## Enabling Basic Search

The search field on the filter bar lets users search for a value across all searchable entity sets. To enable the search field, set `"showBasicSearch":"true"` in the `manifest.json` file.

The search functionality applies to entity types where either of the following is configured:

-   `sap:searchable="true"` in the metadata file.

-   `SearchRestrictions` annotation in the entity set.




## Additional Features in SAP Fiori Elements for OData V4

The global filter is implemented using the `FilterBar` building block. For more information, see [The FilterBar Building Block](the-filterbar-building-block-7838611.md).

Please note that, as opposed to other floorplans for SAP Fiori elements for OData V4, the overview page uses smart controls.



### Enabling Semantic Operators in Filter Fields

You can use semantic operators in filter fields to define relative date values. For more information about semantic operators, see [Enabling Semantic Operators in the Filter Bar](https://help.sap.com/docs/SAPUI5/b1cda5dc7a7644eb886bc6ac04c0b438/fef65d03d01a4b2baca28983a5449cf7.html?locale=en-US&state=DRAFT&version=SAP_FE_Res_2025).



## Additional Features in SAP Fiori Elements for OData V2

The global filter is implemented using the `ap.ui.comp.smartfilterbar.SmartFilterBar` control. For more information, see [Smart Filter Bar](../10_More_About_Controls/smart-filter-bar-7bcdffc.md).



### Enabling Semantic Date Ranges in the Smart Filter Bar

You can add semantic date ranges, such as `lastYear` or `nextQuarter`, on the smart filter bar from the template.

> ### Sample Code:  
> `manifest.json`
> 
> ```
> sap.ovp: {
>     "filterSettings": {
>         "dateSettings": {
>             "selectedValues": "DAYS,WEEK,MONTH,DATERANGE,QUARTER,YEAR",
>             "fields": {
>                 "DateProperty1": {
>                     "selectedValues": "TOMORROW,NEXT,LASTYEAR,LAST2WEEKS,LAST3WEEKS,LAST4WEEKS,LAST5WEEKS,YEARTODATE,QUARTER1,QUARTER2,QUARTER3,QUARTER4",
>                     "exclude": true
>                 },
>                 "DateProperty2": {
>                     "customDateRangeImplementation": "SOMULTIENTITY.ext.controller.customDateRangeType",
>                     "selectedValues": "FROM,TO,DAYS,WEEK,MONTH,DATERANGE,TODAY,TOMORROW,YEAR,YESTERDAY",
>                     "exclude": true
>                 },
>                 "DateProperty3": {
>                     "selectedValues": "YESTERDAY",
>                     "exclude": false
>                 }
>             }
>         }
>     }
> }
> ```

The `useDateRange` property behaves as follows:

-   The property defined in the `dateSettings` always takes precedence.

-   If the property is not defined in `dateSettings`, but is defined under `sap.ovp`, the application takes its value.

-   If both are defined, the application stops loading and shows an error message.

-   When the property is set to `false`, other settings defined under `dateSettings` are included when configuring the date filters.


You can configure the following settings either at the property level or at the default level:

****


<table>
<tr>
<th valign="top">

Setting

</th>
<th valign="top">

Description

</th>
</tr>
<tr>
<td valign="top">

`customDateRangeImplementation`

</td>
<td valign="top">

References a JS class used to modify the date range value list. Use this to remove standard date range values or add custom ones.

</td>
</tr>
<tr>
<td valign="top">

`selectedValues`

</td>
<td valign="top">

A set of standard date range values to include or exclude. The behavior of `selectedValues` depends on the`exclude` property:

-   `exclude: true`: This is the default value. The values listed in `selectedValues` are excluded from the list of date range filters.

-   `exclude: false`: Only the values listed in `selectedValues` are shown in the list of date range filters.




</td>
</tr>
<tr>
<td valign="top">

`exclude`

</td>
<td valign="top">

Defaults to `true`, which excludes all values listed in `selectedValues` from the date range filters. Set to `false` to show only the selected values.

</td>
</tr>
</table>

> ### Note:  
> If both `customDateRangeImplementation` and `selectedValues`/`exclude` are configured, `customDateRangeImplementation` takes precedence.
> 
> > ### Example:  
> > In the preceding sample code, there are five date filters: `DateProperty1`, `DateProperty2`, `DateProperty3`, `DateProperty4`, and `DateProperty5`.
> > 
> > -   `DateProperty1`, `DateProperty2`, and `DateProperty3` use the settings defined for each respective property.
> > 
> > -   `DateProperty4` and `DateProperty5` use the settings defined in `customDateRangeImplementation` as the default.



**Related Information**  


[Configuring the Manifest for the Overview Page](configuring-the-manifest-for-the-overview-page-f194b41.md "You can use the manifest.json file to initialize an overview page application.")

[Configuring Dependencies to SAPUI5 Libraries](configuring-dependencies-to-sapui5-libraries-ef5f16b.md "You can define dependencies to SAPUI5 libraries required by your app. Defining dependencies allow the framework to preload libraries efficiently, which can improve the loading time of the app.")

[Refresh Entity Sets in sap-keep-alive Mode in the Overview Pages](refresh-entity-sets-in-sap-keep-alive-mode-in-the-overview-pages-0c35c87.md "You can use the sap-keep-alive feature in SAP Fiori launchpad to preserve the view state of an overview page when users navigate away from it.")

