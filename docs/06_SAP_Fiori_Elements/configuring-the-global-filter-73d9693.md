<!-- loio73d96937ae94468da04cf0d32eb4c6ee -->

# Configuring the Global Filter

The global filter lets end users filter the data displayed on one or more cards.



The global filter is implemented using the `sap.ui.comp.smartfilterbar.SmartFilterBar` control. This control enables end users to persist their preferred filters and share them with other users. The filter presents filterable properties according to the configured entity type. It's applied to all cards that have the same property name in their entity type. You can also define filters that you want to add to the filter bar by default with the `UI.SelectionFields` configuration in the annotations file.

You configure the global filter in the `"sap.ovp"` section using the following properties:

-   `globalFilterModel`: the OData model to use for the global filter

-   `globalFilterEntityType`: the entity type that contains the filterable properties


> ### Sample Code:  
> ```
> "sap.ovp": {
>     "_version": "1.1.0",
>     "globalFilterModel": "ZCD204_EPM_DEMO_SRV",
>     "globalFilterEntityType": "SalesOrder",
>     "cards": { 
>         ...
>     }
> }
> ```



<a name="loio73d96937ae94468da04cf0d32eb4c6ee__section_bfb_ykp_k2b"/>

## Enabling Basic Search

The search field on the smart filter bar lets you search for a value across all searchable entity sets. To enable the search field, set the `"showBasicSearch":"true"` property in the descriptor file.

The search functionality is applicable for entity types that have:

-   `sap:searchable=“true”` in the metadata file

-   `SearchRestrictions` annotation in the entity set




<a name="loio73d96937ae94468da04cf0d32eb4c6ee__section_cvd_psg_blb"/>

## Enabling Semantic Date Range in Smart Filter Bar

You can add semantic date ranges, such as lastYear or nextQuarter, on the Smart Filter Bar from the template.

You can set this in the card's manifest settings. See the sample code below:

> ### Sample Code:  
> useDateRange
> 
> ```
> 
> sap.ovp: {
> . . . .
> 		"filterSettings": {
>                 "dateSettings":{
>                     "selectedValues": "DAYS,WEEK,MONTH,DATERANGE,QUARTER,YEAR",
>                     "fields": {
>                         "DatePropert1": {
>                             "selectedValues": "TOMORROW,NEXT,LASTYEAR,LAST2WEEKS,LAST3WEEKS,LAST4WEEKS,LAST5WEEKS,YEARTODATE,QUARTER1,QUARTER2,QUARTER3,QUARTER4",
>                             "exclude": true
>                         },
>                         "DateProperty2": {
>                             "customDateRangeImplementation": "SOMULTIENTITY.ext.controller.customDateRangeType",
>                             "selectedValues": "FROM,TO,DAYS,WEEK,MONTH,DATERANGE,TODAY,TOMORROW,YEAR,YESTERDAY",
>                             "exclude": true
>                         },
>                         "DateProperty3": { 
>                             "selectedValues": "YESTERDAY",
>                             "exclude": false 
>         }
>     }
> }
> . . . .
> }
> ```

> ### Note:  
> The `useDateRange` property defined in the `dateSettings` always takes precedence.
> 
> If the `useDateRange` property in `dateSettings` is not defined, and the `useDateRangeType` property under `sap.ovp` is defined, the system takes the `useDateRangeType` value. If both are defined, the application stops loading and shows an error message.

When the `useDateRange` property is set to `False`, other settings defined under the `dateSettings` property are included when configuring the date filters.

The following types of settings exist, either at property level or at default level, under `dateSettings`:

-   `customDateRangeImplementation`: This property references a JS class, which you use to modify the date range value list. You can either can remove standard data range values or add custom values.

-   `selectedValues` and `exclude`: The `SelectedValues` property is a set of standard date range values that you want to include or exclude. The `exclude` property is set to `True` by default. This means excluding all values given as `selectedValues` from the list of date range filters. If the `exclude` property is set to `False`, the application shows only selected values in the list of date range filters.

    > ### Note:  
    > If you make both of the settings mentioned above, the `customDateRangeImplementation` property takes precedence over the `selectedValues` and `exclude` properties.
    > 
    > > ### Example:  
    > > In the *Sample Code: useDateRange*, there are 5 date filters: `DateProperty1`, `DateProperty2`, `DateProperty3`, `DateProperty4`, and `DateProperty5`. As shown by the sample code, DateProperty1, DateProperty2, and DateProperty3 take the settings defined for the respective properties, whereas DateProperty4 and DateProperty5 take the settings made in the `customDateRangeImplementation` property as the default.


