<!-- loio7d41330f363c49edb778821dc58fb0b1 -->

# Enabling Chart Personalization

You can use personalization to modify the settings of a chart.



<a name="loio7d41330f363c49edb778821dc58fb0b1__section_ktk_3zy_swb"/>

## Filter Option

The filter option is available via chart personalization settings, if personalization is enabled.

The default state of the filter option is as follows:

-   It is disabled in the page-level variant or if variant management is not enabled.

-   It is enabled in the control-level variant.




<a name="loio7d41330f363c49edb778821dc58fb0b1__section_vgq_5pz_swb"/>

## Additional Features in SAP Fiori Elements for OData V4



### Enabling and Disabling Chart Personalization

You can control the visibility of chart personalization options using the variant management settings. The default visibility is as follows:

-   With the `"Page"` level setting, the following chart personalization options are available: *Item*, *Sort* and *Type*.

-   With the `"None"` setting, the following chart personalization options are available: *Item*, *Sort* and *Type*.

-   With the `"Control"` setting, the following chart personalization options are available: *Item*, *Sort*, *Type*. and *Filter*.


You can switch off personalization using the following setting:

> ### Sample Code:  
> Manifest Setting to Switch Off Personalization
> 
> ```
> "BusinessPartnersList": {
>    "type": "Component",
>    "id": "BusinessPartnersList",
>    "name": "sap.fe.templates.ListReport",
>    "options": {
>       "settings": {
>          "entitySet": "BusinessPartners",
>          .....
>          .....    
>          "controlConfiguration": {
>             "@com.sap.vocabularies.UI.v1.Chart": {
>                "chartSettings": {
>                   "personalization": false         
>                }
>             }
>          }
>       }
>    }
> },
> ```

The `"personalization"` setting can have the following values:

-   `true` \(the default value\): all chart settings are enabled. If you add a new feature, such as `sort`, it is also enabled.

-   `false`: all chart settings are disabled.

-   `object`: when using this value, you must also define the following values: `column`, `sort`, `type` and `filter`. If you omit a setting, it is treated as false, which prevents apps from getting new features in upcoming releases. You can see this in the sample code above, where the object is used as a value.


> ### Sample Code:  
> Manifest Setting for Finer Control of Chart Personalization
> 
> ```
> "BusinessPartnersList": {
>    "type": "Component",
>    "id": "BusinessPartnersList",
>    "name": "sap.fe.templates.ListReport",
>    "options": {
>       "settings": {
>          "entitySet": "BusinessPartners",
>          ....
>          ....
>          "controlConfiguration": {
>             "@com.sap.vocabularies.UI.v1.Chart": {
>                "chartSettings": {
>                   "personalization": {
>                     "column" : true,
>                     "sort" : false, // Sort option is not visible
>                     "filter" : true,
>                     "type": true
>                   }
>                }
>             }
>          }
>       }
>    }
> },
> ```



### Filter Option

The following fields are excluded from the `"Filter"` option under chart personalization:

-   Fields annotated with `@com.sap.vocabularies.UI.v1.HiddenFilter`.

-   Fields coming from the navigation entity set.

-   Properties annotated as measures, that is, annotated with `Analytics.AggregatedProperty`, or those marked with `Aggregation.CustomAggregate`. For more information, see [Configuring Charts](configuring-charts-653ed0f.md).


