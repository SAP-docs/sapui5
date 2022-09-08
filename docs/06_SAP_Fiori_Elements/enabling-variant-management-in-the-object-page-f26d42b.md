<!-- loiof26d42bea11c4deda82c7a2e00c9bc05 -->

# Enabling Variant Management in the Object Page

You can enable variant management in the object page.



## Context

You can enable variant management for tables in the object page. By default, variant management is not enabled.

In SAP Fiori Elements for OData V2, you can also enable variant management for charts.



### Additional Features in SAP Fiori Elements for OData V2

To enable variant management for all tables and charts on an object page, make these manifest settings on component level:

> ### Sample Code:  
> ```
> 
> "component": {
> 	"name": "sap.suite.ui.generic.template.ObjectPage",
> 	"settings": {
> 		"tableSettings": {
> 			"variantManagement": true
> 		},
> 		"chartSettings": {
> 			"variantManagement": true
> 		}
> 	}
> }
> 
> ```

You can enable variant management for a specific table on an object page by adding this manifest switch:

> ### Sample Code:  
> ```
> 
> "component": {
> 	"name": "sap.suite.ui.generic.template.ObjectPage",
> 	"settings": {
> 		"sections": {
> 			"to_ProductText::com.sap.vocabularies.UI.v1.LineItem ": {
> 				"tableSettings": {
> 					"variantManagement": true
> 				}
> 			}
> 		}
> 	}
> }
> 
> ```

You can enable variant management for a specific chart on an object page by adding this manifest switch:

> ### Sample Code:  
> ```
> 
> "component": {
> 	"name": "sap.suite.ui.generic.template.ObjectPage",
> 	"settings": {
> 		"sections": {
> 			"to_ProductSalesData::com.sap.vocabularies.UI.v1.Chart ": {
> 				"chartSettings": {
> 					"variantManagement": true
> 				}
> 			}
> 		}
> 	}
> }
> 
> ```

> ### Note:  
> When variant management is enabled, the selected variant is stored in the inner app state and restored. When you switch to a different object, the default variant for that particular object is selected.



### Additional Features in SAP Fiori Elements for OData V4

To enable variant management for the object page, you must set it to `Control`.

You can turn the personalization on or off for each table individually. Personalization is independent of variant management.

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

**Related Information**  


[Creating a List Report without Variant Management](creating-a-list-report-without-variant-management-094fe8c.md "The applications generated using the SAP Fiori elements includes the variant management option by default. However, you can also choose to create one without variant management.")

