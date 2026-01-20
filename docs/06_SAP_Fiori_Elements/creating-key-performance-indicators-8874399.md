<!-- loio88743992c11d4fb7bb5d39a667ff9f79 -->

# Creating Key Performance Indicators

You can add key performance indicators \(KPI\) in SAP Fiori elements.

The key performance indicator \(KPI\) tag is an abbreviated and clickable title with a KPI value.

In SAP Fiori elements, you can create KPI tags using annotations in an analytical service. For more information, see [Creating Key Performance Indicator Tags](creating-key-performance-indicator-tags-d80a360.md).

In SAP Fiori elements for OData V4, you can also create KPI tags that do not require an analytical service using manifest-based configuration. To create the tags, add a `keyPerformanceIndicators` section to the `manifest.json` file, define the name of the KPI, and add the fragment with the KPI definition.

> ### Sample Code:  
> `manifest.json`
> 
> ```
> {
>   "targets": {
>     "mainPage": {
>       "type": "Component",
>       "id": "Default",
>       "name": "sap.fe.templates.ListReport",
>       "options": {
>         "settings": {
>           "contextPath": "/RootEntity",
>           "variantManagement": "None",
>           "initialLoad": true,
>           "keyPerformanceIndicators": {
>             "myKPITag": {
>               "template": "sap.fe.core.fpmExplorer.customKPIContent.CustomKPITag"
>             },
>             "myKPIWithPress": {
>               "template": "sap.fe.core.fpmExplorer.customKPIContent.CustomKPITagWithPress"
>             }
>           }
>         }
>       }
>     }
>   }
> }
> 
> ```

You can use any fragment, but we recommend using the KPI building block to use the same design as KPI in an analytical service. For more information, see [class sap.fe.macros.KPITag](https://ui5.sap.com/#/api/sap.fe.macros.KPITag).

> ### Sample Code:  
> Building block
> 
> ```
> <core:FragmentDefinition 
>   xmlns="sap.m" 
>   xmlns:core="sap.ui.core" 
>   xmlns:macros="sap.fe.macros">
>   
>   <macros:KPITag
>     number="0"
>     unit="Days"
>     status="Error"
>     showIcon="true"
>     press=".extension.sap.fe.core.fpmExplorer.customKPIContent.LRExtend.onKPIPressed"
>   />
>   
> </core:FragmentDefinition>
> ```

For more information and live examples, see the SAP Fiori development portal at [Standard Floorplans - Extensions - Extensions for List-Based Pages - Custom KPI Tag](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/topic/floorplanListReport/customKPI).

