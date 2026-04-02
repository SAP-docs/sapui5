<!-- loio33f3d807c10b47d9a8141692d2619dc2 -->

# Configuring the Visual Filter Bar

You can enable and configure the visual filter bar on the analytical list page.

> ### Note:  
> This topic describes how to use the building block within SAP Fiori elements floorplans. If the functionality isn't available when you use the building block in custom pages or custom sections, you can try achieving the functionality through other means, such as the following:
> 
> -   Properties or methods exposed by the building block
> 
> -   Custom code using extensions



The visual filter bar enables users to select filter values based on measure values in addition to the filters and filter values already selected in the regular filter bar.

To make the visual filter bar visible, applications must define visual filters. The filter values applied for every field are always synchronized across the different filter bars.

To define visual filters, you must define value list annotations for the filter fields. For more information, see [Enhancing ValueList Annotations for Visual Filters](enhancing-valuelist-annotations-for-visual-filters-16d43eb.md).

> ### Note:  
> -   Visual filters are only applicable for filter fields that accept single or multiple values, and not for range-based fields.
> 
> -   Semantic dates are not supported.
> 
> -   This topic describes how to use the building block within SAP Fiori elements floorplans. If the functionality isn't available when you use the building block in custom pages or custom sections, you can try achieving the functionality through other means, such as the following:
> 
>     -   Properties or methods exposed by the building block
> 
>     -   Custom code using extensions

You must ensure that there's a manifest property for each visual filter that is to be rendered:

> ### Sample Code:  
> `manifest.json` setting for visual filters
> 
> ```json
> "settings" : {  
>    "contextPath" : "/SalesOrderManage",
>    "controlConfiguration" : {
>       "@com.sap.vocabularies.UI.v1.SelectionFields" : {
>          "layout": "CompactVisual" , // Possible Values: "Compact" (if only compact filter is present) and "CompactVisual" if both compact and visual filters are present
>          "initialLayout": "Visual" , // Specifies the default filter mode on initial load. Possible values: "Visual" and "Compact"
>          "filterFields": {
>             "ItemRating": { // Below this are all the settings for "ItemRating" filter field
>                "availability": "Default", // see below for possible values
>                "visualFilter": { // Only available if there is a visual filter configured for this filter field and holds all information specific to visual filter configuration
>                   "valueList": "<pathToValueList>" // Should point to the valuelist annotation corresponding to the visual filter representation
>                }
>             }
>          }
>       }
>    }
> }
> ```



### Possible Values for `"availability"`

The following values are possible for the `"availability"` property:

-   `"Default"`: This is the default value if no value is specified for the `"availability"` property. The filter field is shown by default in the filter bar \(both the regular filter fields as well as the corresponding visual filter fields, if defined\).

-   `"Adaptation"`: The filter field is initially not shown in the filter bar, but only available under *Adapt Filters*.

-   `"Hidden"`: The filter field is not visible in the filter bar or within the *Adapt Filters* dialog.

    You must ensure that the entity corresponding to the visual filter \(which comes from the `valueList` property that is set in the manifest\) is enabled for aggregation. For more information, see the [Enabling Aggregation in the Back End](configuring-charts-653ed0f.md#loio653ed0f4f0d743dbb33ace4f68886c4e__enabling_aggregation_subsection) section in [Configuring Charts](configuring-charts-653ed0f.md).

    > ### Remember:  
    > In addition to the settings described in [Configuring Charts](configuring-charts-653ed0f.md), ensure that the aggregation annotations are defined in the correct place:
    > 
    > -   If a non-parameterized `valueList` entity is used, define the aggregation at the level of the entity set for visual filters.
    > 
    > -   If a parameterized `valueList` entity is used, define the aggregation against the `EntityType.`.




## Enabling Visual Filters from a Draft-Enabled Entity

You can also define charts against a draft-enabled entity. In this case only active data is used for the chart display.

> ### Note:  
> -   When you use draft-enabled entities or charts, sorting on virtual properties and measures causes issues if you use CAP NodeJs. This is because of a CAP limitation that is fixed as of @sap/cds 6.0.0.
> 
> -   Aggregations on draft-enabled entities are not supported in ABAP CDS, since `$apply` with or without a filter on draft or transactional entities isn't supported by SADL.



> ### Restriction:  
> -   Donut charts are not supported.
> 
> -   Properties \(measures, dimensions, text associations\) coming from "associated entity sets" are not supported. "Associated entity set" is with reference to the value help entity set corresponding to the visual filter.
> 
> -   Use only fields of type `Edm.Date`, `Edm.Time`, or `Edm.DateTime` for line charts. String-based fields that are time/date-based are not supported.
> 
> -   The selection of values outside of the chart is only enabled for value help-based fields. It's not enabled for drop-down lists or date/time-based fields.
> 
> -   Visual filters within the *Adapt Filters* dialog are not supported.
> 
> -   Visual Filters don't support the correct formatting for fiscal periods or for string-based dimensions that are annotated as time-based.
> 
> -   Path-based values for the `UI.Criticality` annotation and semantic coloring based on the `CriticalityCalculation` annotation are not supported.
> 
> -   You can't configure visual filters for a filter field for which a custom filter has already been defined.



> ### Note:  
> For information about SAP Fiori elements for OData V2, see [Configuring the Visual Filter Bar](configuring-the-visual-filter-bar-b44fe77.md).

**Related Information**  


[Analytical List Page](analytical-list-page-3d33684.md "You can build apps that require visualization and reporting of data using filters, interactive charts, and other data points such as KPIs (key performance indicators).")

[Visual Filters](visual-filters-1714720.md "You can configure visual filters by enhancing the ValueList annotation associated with the filter field.")

[Enhancing ValueList Annotations for Visual Filters](enhancing-valuelist-annotations-for-visual-filters-16d43eb.md "You can specify a value help entity for a field and maintain the value help configuration with a ValueList annotation.")

