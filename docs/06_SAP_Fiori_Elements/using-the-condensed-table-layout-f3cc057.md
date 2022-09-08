<!-- loiof3cc057e405c4fd58ee2ed42c557797c -->

# Using the Condensed Table Layout

You can set the content density to `condensed` for `ui.table` on the list report and object page applications.

To do so, in the `manifest.json` under the relevant section, set `"condensedTableLayout" : true`. Make this setting for the section in which you want the UI table to adapt the condensed style.

SAP Fiori Elements for OData V2

> ### Sample Code:  
> Object Page Table
> 
> ```
> "ObjectPage|STTA_C_MP_Product": {
>                                         "entitySet": "STTA_C_MP_Product",
>                                         "component": {
>                                                "name": "sap.suite.ui.generic.template.ObjectPage",
>                                                "settings": {
>                                                      "sections": {
>                                                              "to_ProductText::com.sap.vocabularies.UI.v1.LineItem": {
>                                                                    "condensedTableLayout": true,
>                                                             }
>                                                      }
>                                                }
>                                         }
> 
> ```

SAP Fiori Elements for OData V4

> ### Sample Code:  
> Object Page Table
> 
> ```
> "SalesOrderManageObjectPageCondensedTable": {
> 	"type": "Component",
> 	"id": "SalesOrderManageObjectPage",
> 	"name": "sap.fe.templates.ObjectPage",
> 	"options": {
> 		"settings": {
> 			"entitySet": "SalesOrderManage",
> 			...
> 			},
> 			"controlConfiguration": {
> 				"_Item/@com.sap.vocabularies.UI.v1.LineItem": {
> 					"tableSettings": {
> 						"type": "GridTable",
> 						"condensedTableLayout": true,
> 					}
> 				}
> 			}
> 		}
> }
> ```

> ### Note:  
> -   Condensed mode applies only to the Grid table \(`sap.ui.table`\), not to the Responsive table \(`sap.m.table`\).
> 
> -   The app needs to run in compact mode. If it runs in cozy mode, the class is not set, even if the manifest key is set to true.
> 
> -   On an object page, the `condensedTableLayout` class can be set only if there is just one section that contains a Grid table \(`sap.ui.table`\) or if the icon tab bar is used for navigation between sections, and any section has only one table in it. Otherwise, the class is not applied for the Grid table \(`sap.ui.table`\), even if the manifest key is set to true.

**Related Information**  


[Content Densities](../04_Essentials/content-densities-e54f729.md "The devices used to run apps that are developed with SAPUI5 run on various different operating systems and have very different screen sizes. SAPUI5 contains different content densities for certain controls that allow your app to adapt to the device in question, allowing you to display larger controls for touch-enabled devices and a smaller, more compact design for devices that are operated by mouse.")

