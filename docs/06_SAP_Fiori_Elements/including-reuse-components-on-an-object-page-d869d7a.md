<!-- loiod869d7ab3caa48b2a20dc20dfa248380 -->

# Including Reuse Components on an Object Page

You can embed a reuse component as a section in the object page of your app.

A reuse component is an encapsulated UI area that can be included \(embedded\) into an SAP Fiori elements-based application. Reuse components are mainly used for reusable UIs which are used consistently across several applications, for example, output management or attachment services. However, you can also create a one-time reuse component which is used in only one application on one page.

Not every piece of reusable code should be encapsulated into a reuse component. Reuse components are always rectangular UI areas.

Reuse components that are used on an object page are often used on several pages. If this is not the case, consider whether they can be realized through view or fragment extensions.

To include a reuse component on an object page, adapt the `manifest.json` of your app, in the pages section of the object page which is to contain the reuse component.

The sample definitions given in the separate sections below show two options for addressing a reuse component:

-   Facilitating a use of the component that has been defined in the corresponding section of the manifest. For more information, see the *API Reference* for [`createComponent`](https://ui5.sap.com/#/api/sap.ui.core.Component/methods/createComponent).

-   Directly addressing the component name within the definition


Use the `title` property to provide a title for the section that is to contain the reuse component. To provide a translatable title, this property must point to a key in the i18n file of the app.

If the reuse component exposes properties other than the predefined ones, the embedding may contain binding information for these properties. See the property settings under `myFirstComponentEmbedding` above. The corresponding property in this case is `documentNumber`. The value for this property can be any valid binding string, for example, "`{documentNumber}`" can also be replaced by an expression binding like "`{= ${documentNumber} || ${documentId} }`" if relevant for your app.

The reuse component instance cannot only receive information about the object that is on the embedding object page by transferring dedicated properties. The binding context that has been set for the OData model for the embedding page is also valid for the reuse component.

> ### Note:  
> SAP Fiori elements for OData V4 is compatible with freestyle SAPUI5 reuse components, but incompatible with SAP Fiori elements for OData V2 reuse components.

The following example embeds one reuse component:

> ### Sample Code:  
> `manifest.json`
> 
> ```
> {
>     "sap.ui5": {
>         "routing": {
>             "routes": [
>                 {
>                     "pattern": "myEntitySet({key}):?query:",
>                     "name": "myObjectPage",
>                     "target": "myObjectPage"                }
>             ],
>             "targets": {
>                 "myObjectPage": {
>                     "options": {
>                         "settings": {
>                             "content": {
>                                 "body": {
>                                     "sections": {
>                                         "customSectionReuse": {
>                                             "title": "{i18n>customSectionReuse}",
>                                             "embeddedComponent": {
>                                                 "name": "path.to.reuseComponent",
>                                                 "settings": {
>                                                     "exampleSettings": "{somePropertyName}"                                                }
>                                             },
>                                             "position": {
>                                                 "placement": "After",
>                                                 "anchor": "someOtherSection"                                            }
>                                         }
>                                     }
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

We recommend using the above example. If you prefer, however, you can also add all settings directly using SAPUI5.

> ### Sample Code:  
> `manifest.json`
> 
> ```
> {
> 	"sap.ui5": {
> 		"routing": {
> 			"routes": [
> 				{
> 					"pattern": "myEntitySet({key}):?query:",
> 					"name": "myObjectPage",
> 					"target": ["myObjectPage", "ReuseComponent"]
> 				}
> 			],
> 			"targets": {
> 				"myObjectPage": {
> 					"type": "Component",
> 					"id": "myObjectPage",
> 					"name": "sap.fe.templates.ObjectPage",
> 					"options": {
> 						"settings": {
> 							"content": {
> 								"body": {
> 									"sections": {
> 										"ReuseComponentContainer": {
> 											"position": {
> 												"placement": "Before",
> 												"anchor": "GeneralInfo"
> 											},
> 											"title": "Reuse Container",
> 											"subSections": {
> 												"ReuseContainer": {
> 													"id": "ReuseComponentContainer"
> 												}
> 											}
> 										}
> 									}
> 								}
> 							}
> 						}
> 					}
> 				},
> 				"ReuseComponent": {
> 					"type": "Component",
> 					"id": "Reuse",
> 					"name": "path.to.reuseComponent",
> 					"options": {
> 						"settings": {
> 							"exampleSettings": "{somePropertyName}"
> 						}
> 					},
> 					"parent": "myObjectPage",
> 					"controlId": "ReuseComponentContainer",
> 					"controlAggregation": "blocks",
> 					"clearControlAggregation": true
> 				}
> 			}
> 		}
> 	}
> }
> ```



<a name="loiod869d7ab3caa48b2a20dc20dfa248380__section_ky1_nqt_kmb"/>

## Defining the Default Visibility

SAP Fiori elements for OData V4 uses the standard SAPUI5 reuse component visibility. If there is a value set for a sales order, for example, and you want the reuse component to be visible, use the following setting: `visible="{= !!${SalesOrder}"`.



> ### Note:  
> For information about SAP Fiori elements for OData V2, see [Including Reuse Components on an Object Page](including-reuse-components-on-an-object-page-344cd94.md).

