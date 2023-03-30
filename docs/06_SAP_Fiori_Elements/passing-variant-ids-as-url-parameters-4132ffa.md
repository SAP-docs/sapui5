<!-- loio4132ffa02f1148058a78dfb11c8567b0 -->

# Passing Variant IDs as URL Parameters

You can pass the variant ID as part of the navigation context \(or as a URL parameter\) while navigating from an application to the analytical list page or to the list report, or vice versa.

The URL parameter value should be an ID of the variant that exists in the target app. Ensure that the variant name is not passed as the URL parameter.

> ### Note:  
> To find the variant ID, find the instance of the control for the control level variant, and the instance of the filter bar for the page level variant. For example, find `sap.ui.getCore().byId`, which is the stable ID of the control, and call `getCurrentVariantId()`, which is the API on the control instance. This gives the variant ID to be used in the source app's manifest.

You can choose to pass a page variant or a control variant using these parameters:

-   `sap-ui-fe-variant-id`: Page variant ID you want to set

    > ### Example:  
    > https://abc.com/ui\#SalesOrder-analyze\_deliv\_perf?sap-ui-fe-variant-id=***id\_1542011587281\_980\_page***

-   `sap-ui-fe-filterbar-variant-id`: Parameter for the filter bar control variant

    > ### Example:  
    > https://abc.com/ui\#SalesOrder-analyze\_deliv\_perf?sap-ui-fe-filterbar-variant-id=***id\_1542011587281\_230\_page***

-   `sap-ui-fe-chart-variant-id`: Parameter for the chart control variant

    > ### Example:  
    > https://abc.com/ui\#SalesOrder-analyze\_deliv\_perf?sap-ui-fe-chart-variant-id=***id\_1574157179885\_675\_chart***

-   `sap-ui-fe-table-variant-id`: Parameter for the table control variant

    > ### Example:  
    > https://abc.com/ui\#SalesOrder-analyze\_deliv\_perf?sap-ui-fe-table-variant-id=***id\_1574157179595\_331\_table***

    When both the chart variant and table variant are passed:

    > ### Example:  
    > https:/abc.com/ui\#SalesOrder-analyze\_deliv\_perf?sap-ui-fe-chart-variant-id=***id\_1574157179885\_675\_chart***&sap-ui-fe-table-variant-id=***id\_1574157179595\_331\_table***


> ### Note:  
> -   If you add both a page variant and a control variant to a URL:
> 
>     -   The page variant-based analytical list page or list report ignores the control variant ID and applies the page level variant
> 
>     -   The control variant-based analytical list page or list report applies the control variant ID. If the control variant ID is missing, the page variant ID applies to the control
> 
>     -   If the variant ID passed is invalid, the default or standard variant is considered.
> 
> 
> -   Adding the variant ID to the URL overrides the user's default variant ID



<a name="loio4132ffa02f1148058a78dfb11c8567b0__section_fkd_lsk_jrb"/>

## Additional Features in SAP Fiori Elements for OData V2

Application developers can pass the variant ID as the URL parameter by updating the `manifest.json` as follows:

> ### Sample Code:  
> ```
> ...
> "crossNavigation": {
>   "inbounds": {
> ...
>  },
> "outbounds": {
>   "EPMProductManage": {
>     "parameters": {
>     "sap-ui-fe-variant-id":"id_1542011587281_980_page"
>     }
>   }
> }
> } 
> ```



<a name="loio4132ffa02f1148058a78dfb11c8567b0__section_gf3_xsk_jrb"/>

## Additional Features in SAP Fiori Elements for OData V4

Application developers can pass the variant ID as the URL parameter by updating the `manifest.json` as follows:

> ### Sample Code:  
> Passing Variant IDs
> 
> ```
> "outbounds": {
>     "ProductDetails": {
>         "semanticObject": "Manage",
>         "action": "items",
>         "parameters": {
>             "sap-ui-fe-variant-id": {
>                 "value": {
>                     "value": "id_1633600133090_222",
>                     "format": "plain"
>                 }
>             }
>         }
>     }
> }
> ```

**Related Information**  


[Managing Variants](managing-variants-8ce658e.md "Lets you manage variants with different structures in the filter and content areas.")

