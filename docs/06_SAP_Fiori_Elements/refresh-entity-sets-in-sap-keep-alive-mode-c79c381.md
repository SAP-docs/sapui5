<!-- loioc79c38178aa241fab3507fe3c3d46505 -->

# Refresh Entity Sets in `sap-keep-alive` Mode

`sap-keep-alive` is an SAP Fiori launchpad feature that ensures that a view is not destroyed in the view cache when navigating away from the application.

The feature ensures improved performance when you reload the same view again once you navigate back to the application. For more information, see [Keeping SAPUI5 Apps Alive](https://help.sap.com/viewer/a7b390faab1140c087b8926571e942b7/202009.002/en-US/921e7e2e45494f9a87ae70624155fd7c.html).

If you make changes in an external application that you navigated to, then when you navigate back and reactivate the application view, the changes that you made are reflected without rebinding the control. It means that the application still shows the latest data, but the control is not rebound. This allows the earlier state \(scroll position, selections\) to be retained.

You can configure the entity sets that you want to refresh. To do so, upon navigating back to the source application from the target application, you can use the manifest configurations described below. SAP Fiori Elements defines default refresh mechanisms when the application configured with the `sap-keep-alive` parameter is activated again by SAP Fiori launchpad \(for example, upon a back navigation following an external navigation\).



<a name="loioc79c38178aa241fab3507fe3c3d46505__section_lyg_rv3_3cc"/>

## Entity Set Configuration

The following configurations are supported for entity sets:


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



<a name="loioc79c38178aa241fab3507fe3c3d46505__section_umb_yv3_3cc"/>

## Source Application Behavior



### External Create Navigation

Refresh occurs for the entity set of the table that gets triggered from the navigation, while moving back to the source application. You can't override this behavior.



### External Chevron Navigation

Refresh occurs for the entity set of the table that gets triggered from the navigation, while moving back to the source application. However, you can switch it off or override it by configuring the `manifest.json` file.

To switch the refresh off, the `entitySets` parameter must be empty. Otherwise, you can override it with your refresh requirements.

> ### Sample Code:  
> `manifest.json`
> 
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



### Other External Navigation Including Navigation Using Extension APIs

Refresh is not performed by default. You can override the default behavior and refresh specific entity sets using the manifest configuration. You can configure the refresh strategies defined for specific outbound navigation by configuring the `manifest.json` file.

The following sample code shows you how to configure `manifest.json` to define refresh strategies for specific outbound navigation. You can also define the default refresh strategies for external navigation for cases wherein an outbound navigation doesn't have specific refresh strategies.

> ### Sample Code:  
> `manifest.json`
> 
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



### Navigation Using Extensions

While navigating back to the source application, if an external navigation is triggered using the `navigateExternal` API, the refresh strategies of the outbound target that is passed to the API is considered for refreshing the entity set. The entity sets specified in the manifest under `refreshStrategyOnAppRestore` of that specific outbound configuration are considered for refresh. The refresh mechanism is exactly the same as defined for the external navigation section.

The following sample code shows you how to use extensions to navigate back to the source application:

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
> `manifest.json`
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

> ### Note:  
> If the back-end service isn't ETag enabled, and the table in List Report is configured to be refreshed in Flexible Column Layout mode, the refresh is triggered for all of the table's entity set dependents. To avoid this, enable ETag for your back-end service.



### Navigation from Reuse Component or Extension View

Applications can also configure refresh on back navigation when the navigation was triggered using smart link from the reuse component or an extension view.

The following sample code shows you a `stStart` function of a reuse component where extension API `setRefreshBehaviour` is used to refresh an entity set:

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

**Related Information**  


[Refresh Data Set for Back Navigation when `sap-keep-alive` is Set to True](refresh-dataset-for-back-navigation-when-sap-keep-alive-is-set-to-true-0c41fcd.md "When sap-keep-alive is set to true, and the user navigates from one application to another, modifies some common data and navigates back to the source app, the data isn't refreshed automatically. You can add a custom code to perform a refresh of specific data.")

