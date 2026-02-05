<!-- loiof26d42bea11c4deda82c7a2e00c9bc05 -->

# Enabling Variant Management on the Object Page

You can enable and disable variant management on the object page.



## Context

You can enable and disable variant management for tables.

Variant management is disabled by default. You can enable it on the object page by setting `"variantManagement"` to `"Control"`.

> ### Sample Code:  
> ```
> "SalesOrderManageObjectPage": {
>     "options": {
>         "settings": {
>             "variantManagement": "Control",                        
>             "controlConfiguration": {
>                 "_Item/@com.sap.vocabularies.UI.v1.LineItem": {
>                     "tableSettings": {
>                         "personalization": {
>                             "column": true,
>                             "sort" : false
>                         }
>                     }
>                 },
>                 "_Partner/@com.sap.vocabularies.UI.v1.LineItem": {
>                     "tableSettings": {
>                         "personalization":
>                             "column": true,
>                             "sort" : false
>                         }
>                     }
>                 }
>             }
>         }
>     }
> }
> ```

If you've enabled variant management, you can disable it again by setting `"variantManagement"` to `"None"`.

You can turn personalization on or off for each table individually. Personalization is independent of variant management. You can't enable variant management if personalization is turned off.

> ### Note:  
> Don't change the variant management settings after delivering the application. Making changes to the settings after an application has been delivered results in end users losing their personalization settings.

**Related Information**  


[Creating a List Report without Variant Management](creating-a-list-report-without-variant-management-094fe8c.md "The applications generated using the SAP Fiori elements includes the variant management option by default. However, you can also choose to create one without variant management.")

<a name="concept_ech_15p_c3c"/>

<!-- concept\_ech\_15p\_c3c -->

## 

> ### Note:  
> For information about SAP Fiori elements for OData V2, see [Enabling Variant Management on the Object Page](enabling-variant-management-on-the-object-page-ca0eb16.md).

