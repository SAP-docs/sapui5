<!-- loio6769ec319ef54d07b9e2aa6062c11431 -->

# Enabling Table Personalization

You can use table personalization to modify table settings.

> ### Note:  
> For information about SAP Fiori elements for OData V4, see [Enabling Table Personalization](enabling-table-personalization-3e2b4d2.md).

You can control the table personalization options that end users see.



<a name="loio6769ec319ef54d07b9e2aa6062c11431__section_jpy_ctx_gqb"/>

## Filter Option

The default settings for filtering are as follows:

-   Disabled in the page-level variant

-   Enabled in the control-level variant


> ### Note:  
> The filter option is available in the table personalization settings for responsive tables. For other table types, the filter option, when enabled, is also available after selecting the column header in addition to the personalization settings.



<a name="loio6769ec319ef54d07b9e2aa6062c11431__section_a2h_ntx_gqb"/>

## Enabling Table Filters

In harmonized variant management, by default, end users cannot set a filter in the table personalization settings. To enable filtering for users, set the `enableTableFilterInPageVariant` property in the manifest. If `smartVariantManagement` is set to `false`, then table filter is enabled by default.

> ### Sample Code:  
> `manifest.json`
> 
> ```
> 
> "sap.ui.generic.app": {
>         "settings": {
>         "forceGlobalRefresh": true
>         },
>         "pages": {
>             "ListReport|STTA_C_MP_Product": {
>                 "entitySet": "STTA_C_MP_Product",
>                 "component": {
>                     "name": "sap.suite.ui.generic.template.ListReport",
>                     "list": true,
>                     "settings": {
>                         "smartVariantManagement": true,
>                         "enableTableFilterInPageVariant": true
>                     }
>                 },
> ```

