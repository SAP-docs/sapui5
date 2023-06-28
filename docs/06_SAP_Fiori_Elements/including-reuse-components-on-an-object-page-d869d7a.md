<!-- loiod869d7ab3caa48b2a20dc20dfa248380 -->

# Including Reuse Components on an Object Page

You can embed a reuse component as a section in the object page of your app.

A reuse component is an encapsulated UI area that can be included \(embedded\) into an SAP Fiori elements-based application. Reuse components are mainly used for reusable UIs which are used consistently across several applications, for example, output management or attachment services. However, you can also create a one-time reuse component which is used in only one application on one page.

Not every piece of reusable code should be encapsulated into a reuse component. Reuse components are always rectangular UI areas.

Reuse components that are used on an object page are often used on several pages. If this is not the case, consider whether they can be realized via view or fragment extensions.

To include a reuse component on an object page, adapt the `manifest.json` of your app, in the pages section of the object page which is to contain the reuse component.

The sample definitions given in the separate sections below show two options for addressing a reuse component:

-   Facilitating a use of the component that has been defined in the corresponding section of the manifest. For more information, see the *API Reference* for [`createComponent`](https://ui5.sap.com/#/api/sap.ui.core.Component/methods/createComponent).

-   Directly addressing the component name within the definition


Use the `title` property to provide a title for the section that is to contain the reuse component. To provide a translatable title, this property must point to a key in the i18n file of the app.

If the reuse component exposes properties other than the predefined ones, the embedding may contain binding information for these properties. See the property settings under `myFirstComponentEmbedding` above. The corresponding property in this case is `documentNumber`. The value for this property can be any valid binding string, for example, "`{documentNumber}`" can also be replaced by an expression binding like "`{= ${documentNumber} || ${documentId} }`" if relevant for your app.

The reuse component instance cannot only receive information about the object that is on the embedding object page by transferring dedicated properties. The binding context that has been set for the OData model for the embedding page is also valid for the reuse component.



<a name="loiod869d7ab3caa48b2a20dc20dfa248380__section_bmg_ypt_kmb"/>

## Additional Features in SAP Fiori Elements for OData V2

> ### Note:  
> A reuse component that can be used within an SAP Fiori elements-based application cannot be used in a freestyle application. If reuse component owners want to provide the functionality for both types of applications, they need to provide two components, one for each use case.
> 
> We recommend factoring out as much coding as possible into artifacts that are shared by both components.

The following example embeds two reuse components:

> ### Sample Code:  
> `manifest.json`
> 
> ```
> ...   
>  "sap.ui.generic.app": { 
>     ...  
>     "pages": {
>         "ListReport|myRootEntity": {    
> 
>             "entitySet": "myRootEntity",    
>             "component": {      
>                 "name": "sap.suite.ui.generic.template.ListReport",      
>                 "list": true,      
>                 ...
>             },
>             "pages": {      
>                 "ObjectPage|myRootEntity": {       
>                     "entitySet": "myRootEntity",       
>                     "component": {        
>                         "name": "sap.suite.ui.generic.template.ObjectPage",
>                         ...
>                     },        
>                     "embeddedComponents": {        
>                         "myFirstComponentEmbedding": {         
>                             "id": "myFirstComponentEmbedding",         
>                             "componentUsage": "myUsage",         
>                             "title": "{{I18N_KEY_FOR_FIRST_REUSE_COMPONENT_TITLE}}",
>                             "settings": {
>                                 "documentNumber": "{documentNumber}"
>                             }                 
>                         },        
>                         "mySecondComponentEmbedding": {         
>                             "id": "mySecondComponentEmbedding",         
>                             "componentName": "theOtherReuseComponentQualifiedName",         
>                             "title": "{{I18N_KEY_FOR_SECOND_REUSE_COMPONENT_TITLE}}",
>                             "binding": "myNavProperty",     
>                         }       
>                     },
>                     "pages": {
>                         // add list of sub-pages of the root object page here
>                     }
>                 }
>             }
>         }
>     }
> ```

The logical names of the embedded components \(`myFirstComponentEmbedding` and `mySecondComponentEmbedding`\) each appear twice within the codeblock. This is because the name of the property \(within `embeddedComponents`\) which defines the reuse component instance and the value of the property ID in this definition must be identical.

Within the definition of the embedding, the binding context might be modified using the `binding` property. See the second embedding definition for this. The path that is in the value for this property defines a path relative to the current binding context for the whole object page. Thus, the binding context that is valid for the second reuse component instance is determined by applying this relative path to the binding context that is valid for the whole page.



### Defining the Default Visibility

Most reuse components are always visible on the object page they have been placed on. However, you can define that a reuse component is only visible for specific instances of the corresponding entity. In your reuse component implementation, use the `setSectionHidden` method of the extensionAPI to show or hide the reuse component on the object page. For more information, see [Developing Reuse Components](developing-reuse-components-6314fcd.md).

Set the default visibility to the value that is correct for most cases. You can use the `hiddenByDefault` property for this purpose, on the same level as ID, title, settings, and so on. If this property is set to `true`, the section is hidden by default when the object page is opened with a new instance. It is only visible when the reuse component unhides itself using the `setSectionHidden` method.



### Placing Reuse Component Instances

Each reuse component instance defined for an object page of a SAP Fiori elements-based app is realized by a section that contains a sub-section which in turn contains the content of the reuse component. By default, these sections are added to the end of the object page in the same order the reuse component instances are defined in the manifest. You can move these sections using the SAP Visual Editor. For more options, see [Placing Reuse Component Instances on the Object Page](placing-reuse-component-instances-on-the-object-page-1ba7f88.md).



### Dependencies

If the reuse component uses its own OData service, make sure you declare it as a dependency both under `"sap.ui5"/"dependencies"/"libs"` and under`"sap.ui5"/"dependencies"/"component"`.



<a name="loiod869d7ab3caa48b2a20dc20dfa248380__section_ky1_nqt_kmb"/>

## Additional Features in SAP Fiori Elements for OData V4

> ### Note:  
> SAP Fiori elements for OData V4 is compatible with freestyle reuse components, but incompatible with SAP Fiori elements for OData V2 reuse components.

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



### Defining the Default Visibility

SAP Fiori elements for OData V4 uses the standard SAPUI5 reuse component visibility. If there is a value set for a sales order, for example, and you want the reuse component to be visible, use the following setting: `visible="{= !!${SalesOrder}"`.

