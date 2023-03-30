<!-- loiof26d42bea11c4deda82c7a2e00c9bc05 -->

# Enabling Variant Management in the Object Page

The variant management is enabed by default for tables and charts on the object page. However, you can choose to disable it.



## Context

You can disable variant management for tables.

In SAP Fiori Elements for OData V2, you can also disable variant management for charts.



### Additional Features in SAP Fiori Elements for OData V2

To disable variant management for all tables and charts on an object page, make these manifest settings on component level:

> ### Sample Code:  
> ```
> 
> "component": {
> 	"name": "sap.suite.ui.generic.template.ObjectPage",
> 	"settings": {
> 		"tableSettings": {
> 			"variantManagement": false
> 		},
> 		"chartSettings": {
> 			"variantManagement": false
> 		}
> 	}
> }
> 
> ```

You can disable variant management for a specific table on an object page by adding the following manifest switch:

> ### Sample Code:  
> ```
> 
> "component": {
> 	"name": "sap.suite.ui.generic.template.ObjectPage",
> 	"settings": {
> 		"sections": {
> 			"to_ProductText::com.sap.vocabularies.UI.v1.LineItem ": {
> 				"tableSettings": {
> 					"variantManagement": false
> 				}
> 			}
> 		}
> 	}
> }
> 
> ```

You can disable variant management for a specific chart on an object page by adding the following manifest switch:

> ### Sample Code:  
> ```
> "component": {
> 	"name": "sap.suite.ui.generic.template.ObjectPage",
> 	"settings": {
> 		"sections": {
> 			"to_ProductSalesData::com.sap.vocabularies.UI.v1.Chart ": {
> 				"chartSettings": {
> 					"variantManagement": false
> 				}
> 			}
> 		}
> 	}
> }
> 
> ```

> ### Note:  
> -   When variant management is enabled, the selected variant is stored in the inner app state and restored. When you switch to a different object, the default variant for that particular object is selected.
> 
> -   As of SAPUI5 1.108, variant management is enabled by default. You must not explicitly set `"variantManagement"` to `"true"` in the manifest to enable it.
> 
> -   If you enabled variant management in the manifest prior to SAPUI5 1.108, then you can continue with the same settings.



### Additional Features in SAP Fiori Elements for OData V4

In SAP Fiori elements for OData V4, variant management is enabled by default. You can disable it on the object page by setting `"variantManagement"` to `"None"`.

> ### Sample Code:  
> ```
> "SalesOrderManageObjectPage": {
>     "options": {
>         "settings": {
>             "variantManagement": "None",                        
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

If you've disabled variant management, you can enable it again by setting `"variantManagement"` to `"Control"`.

You can turn the personalization on or off for each table individually. Personalization is independent of variant management. You can't enable variant management if personalization is turned off

**Related Information**  


[Creating a List Report without Variant Management](creating-a-list-report-without-variant-management-094fe8c.md "The applications generated using the SAP Fiori elements includes the variant management option by default. However, you can also choose to create one without variant management.")

