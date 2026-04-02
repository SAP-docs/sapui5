<!-- loio2a01415748214653934a768a342e7062 -->

# Passing Variant IDs as URL Parameters

You can pass the variant ID as part of the navigation context \(or as a URL parameter\) while navigating between an application and an analytical list page or a list report page.

> ### Note:  
> For information about SAP Fiori elements for OData V4, see [Passing Variant IDs as URL Parameters](passing-variant-ids-as-url-parameters-4132ffa.md).

The URL parameter value should be an ID of the variant that exists in the target app. Ensure that the variant name is not passed as the URL parameter.

> ### Note:  
> To find the variant ID, find the instance of the control for the control level variant, and the instance of the filter bar for the page level variant. For example, find `Element.getElementById` where `Element` is required from module `sap/ui/core/Element`, which is the stable ID of the control, and call `getCurrentVariantId()`, which is the API on the control instance. This gives the variant ID to be used in the source app's manifest.

You can choose to pass a page variant or a control variant using these parameters:

-   `sap-ui-fe-variant-id`: Page variant ID you want to set

    > ### Example:  
    > https://abc.com/ui\#SalesOrder-analyze\_deliv\_perf?sap-ui-fe-variant-id=`id_1542011587281_980_page`

-   `sap-ui-fe-filterbar-variant-id`: Parameter for the filter bar control variant

    > ### Example:  
    > https://abc.com/ui\#SalesOrder-analyze\_deliv\_perf?sap-ui-fe-filterbar-variant-id=`id_1542011587281_230_page`

-   `sap-ui-fe-chart-variant-id`: Parameter for the chart control variant

    > ### Example:  
    > https://abc.com/ui\#SalesOrder-analyze\_deliv\_perf?sap-ui-fe-chart-variant-id=`id_1574157179885_675_chart`

-   `sap-ui-fe-table-variant-id`: Parameter for the table control variant

    > ### Example:  
    > https://abc.com/ui\#SalesOrder-analyze\_deliv\_perf?sap-ui-fe-table-variant-id=`id_1574157179595_331_table`

    When both the chart variant and table variant are passed:

    > ### Example:  
    > https:/abc.com/ui\#SalesOrder-analyze\_deliv\_perf?sap-ui-fe-chart-variant-id=`id_1574157179885_675_chart`&sap-ui-fe-table-variant-id=`id_1574157179595_331_table`


> ### Note:  
> -   If you add both a page variant and a control variant to a URL:
> 
>     -   The page variant-based analytical list page or list report page ignore the control variant ID and apply the page level variant.
> 
>     -   The control variant-based analytical list page or list report page apply the control variant ID. If the control variant ID is missing, the page variant ID applies to the control.
> 
>     -   If the variant ID passed is invalid, the default or standard variant is considered.
> 
> 
> -   Adding the variant ID to the URL overrides the user's default variant ID

You can pass the variant ID as the URL parameter by updating the `manifest.json` as follows:

> ### Sample Code:  
> `manifest.json`
> 
> ```
> "crossNavigation": {
>     "inbounds": {
>         ...
>     },
>     "outbounds": {
>         "EPMProductManage": {
>             "parameters": {
>                 "sap-ui-fe-variant-id":"id_1542011587281_980_page"
>             }
>         }
>     }
> }
> ```

**Related Information**  


[Managing Variants](managing-variants-b82d987.md "You can manage variants with different structures in the filter and content areas.")

