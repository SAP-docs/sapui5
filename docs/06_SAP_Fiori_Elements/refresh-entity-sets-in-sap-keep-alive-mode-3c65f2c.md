<!-- loio3c65f2cc630c472da8328a6f3c193683 -->

# Refresh Entity Sets in `sap-keep-alive` Mode

`sap-keep-alive` is an SAP Fiori launchpad feature that ensures that a view is not destroyed in the view cache when navigating away from the application.

The feature ensures improved performance when you reload the same view again once you navigate back to the application. For more information, see [Keeping SAPUI5 Apps Alive](https://help.sap.com/viewer/a7b390faab1140c087b8926571e942b7/202009.002/en-US/921e7e2e45494f9a87ae70624155fd7c.html).

If you make changes in an external application that you navigated to, then when you navigate back and reactivate the application view, the changes that you made are reflected without rebinding the control. It means that the application still shows the latest data, but the control is not rebound. This allows the earlier state \(scroll position, selections\) to be retained.

You can configure the entity sets that you want to refresh. To do so, upon navigating back to the source application from the target application, you can use the manifest configurations described below. SAP Fiori Elements defines default refresh mechanisms when the application configured with the `sap-keep-alive` parameter is activated again by SAP Fiori launchpad \(for example, upon a back navigation following an external navigation\).



<a name="loio3c65f2cc630c472da8328a6f3c193683__section_nfx_4gn_5tb"/>

## Additional Features in SAP Fiori Elements for OData V2



### Entity Set Configuration

The following configurations are supported for entity sets:

****


<table>
<tr>
<td valign="top">

EntitySet1: self



</td>
<td valign="top">

Only <EntitySet1\> is to be refreshed



</td>
</tr>
<tr>
<td valign="top">

EntitySet2: `includingDependents` 



</td>
<td valign="top">

Refresh <EntitySet2\> along with all its dependents \(navigation property\)



</td>
</tr>
</table>

> ### Tip:  
> `includingDependents` doesn't mean that data for child navigation entities gets refreshed, even if the UI has no control that is bound to the navigation entity. It only refreshes the data for the child navigation entity, if there is a control in the UI that is bound to the child navigation entity.



### Source Application Behavior

**External Create Navigation**

Refresh occurs for the entity set of the table that gets triggered from the navigation, while moving back to the source application. You can't override this behavior in SAP Fiori elements for OData V2.

**External Chevron Navigation**

Refresh occurs for the entity set of the table that gets triggered from the navigation, while moving back to the source application. However, you can switch it off or override it by using the following manifest configuration:

> ### Sample Code:  
> ```
> "sap.app": {
> 	...
> 	"crossNavigation": {
> 		"outbounds": {
> 			"<OutboundTarget>": {
> 				"semanticObject": "<SemanticObject>",
> 				"action": "<Action>"
> 			}
> 		}
> 	}
> }
> 
> ....
> ....
> 
> "sap.ui.generic.app": {
> 	...
> 	"pages": {
> 			"ListReport|<ListReportEntitySet>": {
> 				...
> 				"pages": {
> 					"ObjectPage|<ObjectPageEntitySet>": {
> 						...
> 						"navigation": {
> 							"display": {
> 								"path": "sap.apps.crossNavigation.outbounds",
> 								"target": "<OutboundTarget>",
> 								"refreshStrategyOnAppRestore": {
> 									"entitySets": {			
> 										"<EntitySetToRefresh>": "<self/includingDependents>",
> 										"<AnotherEntitySetToRefresh>": "<self/includingDependents>"
> 									}
> 								}
> 							}
> 						}
> 					}
> 				}
> 			}
> 		}
> }
> ```

If you want to **switch off** the default refresh behavior, leave the `entitySets` parameter empty. Otherwise, you can override it with your refresh requirements.

**Other External Navigation Including Navigation Using Extension APIs**

Refresh is not performed by default. You can override the default behavior and refresh specific entity sets using manifest configuration. You can configure the refresh strategies defined for specific outbound navigation as shown in the following code sample:

> ### Sample Code:  
> ```
> "sap.app": {
>    ...
>    "crossNavigation": {
>       "outbounds": {
>          "<OutboundTarget1>": {
>             "semanticObject": "<SemanticObject1>",
>             "action": "<Action1>"
>          },
>          "<OutboundTarget2>": {
>             "semanticObject": "<SemanticObject2>",
>             "action": "<Action2>"
>          }
>       }
>    }
> }
> 
> ....
> ....
> ```
> 
> ```
> 
> 
> "sap.ui.generic.app": {
>       "_version": "1.3.0",
>       "settings": {
>          "externalNavigationSettings": {
>             "defaultOutboundSettings": {
>                "refreshStrategyOnAppRestore": {
>                   "entitySets": {
>                      "<EntitySetToRefresh>": "<self/includingDependents>",
>                      "<AnotherEntitySetToRefresh>": "<self/includingDependents>"
>                   }
>                }
>             },
>             "outbounds": {
>                "<OutboundTarget1>": {
>                   "refreshStrategyOnAppRestore": {
>                      "entitySets": {
>                         "<EntitySetToRefresh>": "<self/includingDependents>",
>                         "<AnotherEntitySetToRefresh>": "<self/includingDependents>"
>                      }
>                   }
>                },
>                "<OutboundTarget2>": {
>                   "refreshStrategyOnAppRestore": {
>                      "entitySets": {
>                         "<EntitySetToRefresh>": "<self/includingDependents>",
>                         "<AnotherEntitySetToRefresh>": "<self/includingDependents>"
>                      }
>                   }
>                }
>             }
>          }
>       }
>       ...
>       ...
>    }
> 
> ```

As shown above, you can also define the default refresh strategies for external navigation for cases wherein an outbound navigation doesn’t have specific refresh strategies.

**Navigation Using Extensions**

While navigating back to the source application, if an external navigation is triggered using the `navigateExternal` API, the refresh strategies of the outbound target that is passed to the API is considered for refreshing the entity set. The entity sets specified in the manifest under `refreshStrategyOnAppRestore` of that specific outbound configuration are considered for refresh. You can check the following code:

> ### Sample Code:  
> Extension Class
> 
> ```
> onListNavigationExtension: function (oEvent) {
> 	var oNavigationController = this.extensionAPI.getNavigationController();
> 	oNavigationController.navigateExternal("<OutboundTarget>");
> 	return true;
> }
> ```

> ### Sample Code:  
> Manifest File
> 
> ```
> 
> 
> 
> "sap.app": {
>    ...
>    "crossNavigation": {
>       "outbounds": {
>          "<OutboundTarget>": {
>             "semanticObject": "<SemanticObject>",
>             "action": "<Action>"
>          }
>       }
>    }
> }
> 
> ....
> ....
> 
> "sap.ui.generic.app": {
>       "settings": {
>          "externalNavigationSettings": {
>             "outbounds": {
>                "<OutboundTarget>": {
>                   "refreshStrategyOnAppRestore": {
>                      "entitySets": {
>                         "<EntitySetToRefresh>": "<self/includingDependents>",
>                         "<AnotherEntitySetToRefresh>": "<self/includingDependents>"
>                      }
>                   }
>                }
>             }
>          }
>     }
>       ...
>       ...
>    }
> 
> ```

The refresh mechanism is exactly the same as defined for the external navigation section.

> ### Note:  
> For SAP Fiori elements for OData V2, if the back-end service isn’t ETag enabled, and the table in List Report is configured to be refreshed in Flexible Column Layout mode, the refresh is triggered for all of the table’s entity set dependents. To avoid this, enable ETag for your back-end service.

**Refresh in Scenarios Involving Navigation from Reuse Component or Extension View**

Applications can also configure refresh on back navigation when the navigation was triggered using smart link from the reuse component or an extension view.

Following is a sample code on a `stStart` function of a reuse component where extension API `setRefreshBehaviour` is used to refresh an entity set:

> ### Sample Code:  
> ```
> stStart: function(oModel, oBindingContext, oExtensionAPI) {
>             var oComponentModel = this.getComponentModel();
>             var oBinding = oComponentModel.bindProperty("/state");
>             oBinding.attachChange(function(){
>                 oExtensionAPI.onCustomStateChange();
>                 this.setMessage();
>             }.bind(this));
>             this.adaptToBindingContext(oBindingContext);
>             var oNavPopOverLink = this.getRootControl().getContent()[0].getContent()[7];
>             var oNavigationController = oExtensionAPI.getNavigationController();
>             oNavPopOverLink.setBeforeNavigationCallback(oNavigationController.setRefreshBehaviour.bind(null,"EPMSalesOrder"));
>         },
> 
> ```



<a name="loio3c65f2cc630c472da8328a6f3c193683__section_sb4_tsp_brb"/>

## Additional Features in SAP Fiori Elements for OData V4



### Overriding the Default Refresh Mechanism

The configuration is specified for each page and the most specific configuration, based on the external navigation that is performed, is considered. The following logic is applied:

-   If there is a configuration specified for the exact semantic object-action that matches the external navigation, then this configuration is used.

-   If no such configuration is found, but if there is a configuration for the same semantic object, then this is used.

-   If this is also not found, then the default configuration of the page level is used \(if defined\).


Examples of the applied logic are shown in the following sample code:

> ### Sample Code:  
> Manifest configuration for the refresh strategies in `sap-keep-alive` mode
> 
> ```
> {
>     "sap.ui5": {
>         "routing": {
>             "targets": {
>                 "SalesOrderManageList": {
>                     "type": "Component",
>                     "id": "SalesOrderManageList",
>                     "name": "sap.fe.templates.ListReport",
>                     "options": {
>                         "settings": {
>                             ...
>                             "refreshStrategyOnAppRestore": {
>                                 "defaultBehavior": {
>                                     "SalesOrderManage": "self"
>                                 }
>                             }
>                         }
>                     }
>                 },
>                 "SalesOrderManageObjectPage": {
>                     "options": {
>                         "settings": {
>                             ...
>                             "refreshStrategyOnAppRestore": {
>                                 "intents": {
>                                     "v4Freestyle": { // This block is considered if the block above is NOT matched but the external navigation before we landed on this page only matches the Semantic Object specified here and NOT the action part
>                                         "SalesOrderItem": "includingDependents" 
>                                     },
>                                     "v4Freestyle-Inbound": { // This block is considered if the external navigation before we landed on this page matches exactly the Semantic Object-Action specified here
>                                         "SalesOrderItem": "includingDependents"
>                                     }
>                                 },
>                                 "defaultBehavior": { // This block is used if the external navigation before we landed on this page does NOT match the above blocks. This can happen for navigations where the Semantic Object is different from what is specified above.
>                                     "SalesOrderManage/_Item": "includingDependents"
>                                 }
>                             }
>                         }
>                     }
>                 }
>             }
>         }
>     }
> }
> ```



### Switching Off the Default Refresh Behavior During Chevron Navigation

Applications can choose to switch off the default refresh behavior that happens when an external chevron navigation is triggered. To achieve this, keep an empty block within the manifest configuration as shown in the following sample code:

> ### Sample Code:  
> Switching off the default refresh behavior
> 
> ```
> "refreshStrategyOnAppRestore": {
>     "intents": {
>         "v4Freestyle-Inbound": {
>             "SalesOrderItem": "includingDependents" // Due to this override, only SalesOrderItem and dependents are refreshed for V4FreeStyle-Inbound So-Action external navigation
>         },
>         "v4Freestyle": {} // Due to this override, for all other intents from V4FreeStyle SO other than Inbound, no refresh is done (including when going to such a target via chevron navigation which normally triggers a default refresh of the table)
>     }  
> }
> ```

This does **not** affect the default refresh behavior of the table entity set when external navigation is triggered for a Create case.

> ### Remember:  
> -   The refresh mechanism explained earlier is **only** for refreshing the data seen on that page after navigating back from an external target. After the user navigates back from the external target, if the user then navigates forward via the standard internal navigation provided by SAP Fiori elements \(for example, to a detail page\), a data request is always sent to the back end – irrespective of the configuration given above. For back navigation within the app \(internal navigation\), the refresh is based on the refresh strategy for the page from where the external navigation was triggered.
> 
> -   When specifying an entity set, application developers must note the following:
> 
>     -   Begin with a forward slash \("/"\) if the entity is a containment-based entity \(a parameterized entity\) and if you need to specify the full path of the resulting entity \("/Customer/Set"\) in the same manner as specified via the `"contextPath"` manifest property. For more information, see the section *Supporting Parameterized Entities* under *Additional Features in SAP Fiori Elements for OData V4* in [Configuring Filter Bars](configuring-filter-bars-4bd7590.md).
> 
>     -   If it is not a containment scenario/parameterized entity but a regular entity set, then the slash is not required at the beginning \(`"SalesOrderItem"`\).

**Related Information**  


[Refresh Data Set for Back Navigation when `sap-keep-alive` is Set to True](refresh-data-set-for-back-navigation-when-sap-keep-alive-is-set-to-true-f1c2704.md "When sap-keep-alive is set to true, and the user navigates from one application to another, modifies some common data and navigates back to the source app, the data isn't refreshed automatically. You can add a custom code to perform a refresh of specific data.")

