<!-- loioca0eb1627d98400885bdc82e0d2eabc0 -->

# Enabling Variant Management on the Object Page

You can enable and disable variant management on the object page.

You can enable and disable variant management for tables and charts.

Variant management is enabled by default for tables and charts on the object page. To disable variant management for all tables and charts on an object page, make these manifest settings on component level:

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

**Related Information**  


[Creating a List Report Page Without Variant Management](creating-a-list-report-page-without-variant-management-e3b12f4.md "The applications generated using the SAP Fiori elements includes the variant management option by default. However, you can also choose to create one without variant management.")

