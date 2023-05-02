<!-- loio2c65f07f44094012a511d6bd83f50f2d -->

# Configuring Internal Navigation

SAP Fiori elements control the navigation within an app \(internal navigation\). This section describes the configuration options that you have.



<a name="loio2c65f07f44094012a511d6bd83f50f2d__section_x13_lz5_pnb"/>

## Navigation After Executing an Action

By default, when executing an action defined via the `UI.DataFieldForAction` annotation, navigation is automatically triggered after the action is executed. This happens if a single instance is returned by the action and if the returned instance is not the same as the instance used when the action was triggered. The navigation is only triggered if the action was executed successfully and if the manifest has navigation defined for the context that is returned. In addition, when a user selects multiple contexts for a table or chart toolbar action, the navigation is **not** triggered, even if the action returns the context.



<a name="loio2c65f07f44094012a511d6bd83f50f2d__section_lzb_ncj_vlb"/>

## Standard Navigation Within an App



### SAP Fiori Elements for OData V2

The pages structure of the app should always be a tree, with the root as either a list report or an analytical list page. All the other nodes would be object pages or canvas pages, that are uniquely identified by their entity sets. This means that no two object pages can share the same entity set.

You can control whether it is possible to navigate to a detail page. It simply depends on whether you keep the predefined definition of a subpage:

> ### Sample Code:  
> ```
> "sap.ui.generic.app": {
>   "pages": {
>     "MyListReport": {
>       "entitySet": "MyEntitySet",
>       "component": {
>         "name": "sap.suite.ui.generic.template.ListReport",
>         "list": true
>       },
>       // Navigation to detail page: eliminate this block if no navigation is needed
>       "pages": {
>         "MyObjectPageOnFirstLevel":          {
>           "entitySet": "MyEntitySet",
>           "component": {
>             "name": "sap.suite.ui.generic.template.ObjectPage"
>           },
>           "pages": {
>                                    "MyFirstObjectPageOnSecondLevel": {
>               "navigationProperty": "to_MyFirstEntitySet",
>               "entitySet": "MyFirstEntitySet",
>               "component": {
>                 "name": "sap.suite.ui.generic.template.ObjectPage"
>               },
>             }, 
>                                                "MySecondObjectPageOnSecondLevel": {
>               "navigationProperty": "to_MySecondEntitySetNavigation",
>               "entitySet": "MMySecondEntitySet",
>               "component": {
>                 "name": "sap.suite.ui.generic.template.ObjectPage"
>               },
>             }, 
>                                                "MyThirdObjectPageOnSecondLevel": {
>               "navigationProperty": "to_MyThirdEntitySet",
>               "entitySet": "MyThirdEntitySet",
>               "component": {
>                 "name": "sap.suite.ui.generic.template.ObjectPage"
>               }
>             }
>           }
>         }
>       }
>     }
>   }
> }
> 
> 
> ```

The same holds true for the navigation to a second object page. This is possible only when the definition is kept in the manifest. If you want to have multiple subpages on the same level, you need to have multiple definitions.

In addition to an entity set which identifies a subpage, we recommend you to also specify the navigation property which defines the connection between the object page and the subpage.

 

A chevron indicates the navigation options. The user can navigate by clicking on the line.

> ### Note:  
> In a non-draft app, if the user is in edit mode on an object page and has made changes before the navigation has been executed, the system displays a message indicating that the changes will be lost if the user navigates without saving first.

The chevron navigation from a list report can also be modified using [onListNavigationExtension](https://ui5.sap.com/#/api/sap.suite.ui.generic.template.ListReport.controllerFrameworkExtensions) to navigate to deeper-hierarchy child pages of the same app. However, it is not recommended to do so. For more information on configuring navigation restrictions, refer to [Adding Actions to Tables](adding-actions-to-tables-b623e0b.md).

 **Show item list in a list report and parent on an object page** 

Users can enable applications to display item lists in a list report, and parent/main object along with its child entities on an object page. This can be achieved by mapping child entity to a list report page and enabling navigation to the parent/main object.

Add the below configuration in the manifest to direct the *Create* action in a list report to the main entity:

> ### Sample Code:  
> ```
> "component": {
> "name": "sap.suite.ui.generic.template.ListReport",
> "list": true,
> "settings": {
> // Create of parent entity: Provide the parent entity set name.
> "creationEntitySet": "C_MPPurchasingSource"
> }
> },
> ```

For more information, see [List Report Elements](list-report-elements-1cf5c7f.md).



### SAP Fiori Elements for OData V4

In the `manifest.json`, you define the "navigation" section for each "target". This controls if the navigation is enabled or not. If navigation is enabled, a chevron comes for the record in the table indicating a further navigation to the detail page \(object page or subobject page\).

> ### Sample Code:  
> ```json
> {
> …
> …
> "sap.ui5": {
>     ....
>     ....
>     ....
>     "routing": {
> …
> …
>         "routes": [{
>             "pattern": ":?query:",
>             "name": "ArtistList",
>             "target": "ArtistList"
>         }, {
>             "pattern": "Artists({key}):?query:",
>             "name": "ArtistDetail",
>             "target": "ArtistObjectPage"
>         }],
>         "targets":{
>             "ArtistList": {
>                 "type": "Component",
>                 "id": "ArtistList",
>                 "name": "sap.fe.templates.ListReport",
>                 "options": {
>                     "settings" :{                          
>                         "entitySet": "Artists",
>                         "navigation": {                              // Navigation Section to detail page: Eliminate if no navigation is required.
>                             "Artists": {                                 
>                                 "detail": {                                      
>                                     "route": "ArtistObjectPage" // This triggers the regular internal navigation to OP from LR table record
>                                 }                           
>                             }                          
>                         }
>                     }
>                 }
>             }, // End of ArtistList
>             "ArtistObjectPage": {
>                 "type": "Component",
>                 "id":  "ArtistDetail",                  
>                 "name": "sap.fe.templates.ObjectPage",
>                 ...
>                 ...
>             } // End of ArtistObjectPage
>         } // End of Targets
>      }, // End of routing
>     .....
>     .....
>     .....
>   } // End of sap.ui
> …
> …
> }
> ```

The same holds true for the navigation to any level of subobject pages.



<a name="loio2c65f07f44094012a511d6bd83f50f2d__section_cpp_wdj_vlb"/>

## Navigation Between Entities of an App

You can link entities within an app. This allows users to navigate between the entities within the application. You can use this app-internal linking in the object header, in sections, and in tables. For example, within a sales order app, you can link from a sales order to another sales order, from a sales order item to the sales order header, or from a sales order schedule line to a schedule line of another sales order.

> ### Note:  
> This feature is available only on the object page.



### Determining the Navigation Target

As shown in the manifest example, the `"navigation"` section of the routing target points to the UI5 route you want to navigate to.

The appropriate navigation target is identified by the `'Target'` property of the `UI.DataFieldWithNavigationPath` annotation.

The parameters in the routing pattern are resolved using the relative binding paths defined in the navigation target.

> ### Sample Code:  
> `manifest.json`
> 
> ```
> "routing": {
> "routes": [
>         {                 
>             "pattern": "SalesOrderManage({key}):?query:",                                                                                 
>             "name": "SalesOrderManageObjectPage",                                                                                                 
>             "target": "SalesOrderManageObjectPage"
>         }
>     ],
> "targets": {                
>     "SalesOrderManageObjectPage":
>         {
>             "type": "Component",
>             "id": "SalesOrderManageObjectPage",
>             "name": "sap.fe.templates.ObjectPage",
>             "options": {
>                 "settings": {
>                     "entitySet":    "SalesOrderManage",
>                     "navigation": {
>                         "to_SalesOrder": {  // ‘Target’ of UI.DataFieldWithNavigationPath annotation
>                             "detail": {
>                                 "route": "SalesOrderManageObjectPage",
>                                 "parameters": {
>                                     "key":  "{_ReferencedSalesOrder/ID}"
>                                 }
>                            }
>                       }   
>                  }                  
>             }
>     }
> }
>         }
>     }
> }
> ```

The following example shows how to use the `DataFieldWithNavigationPath` annotation to link entities:

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotation Term="UI.FieldGroup" Qualifier="NavExample">
>     <Record>
>         <PropertyValue Property="Data">
>             <Collection>
>                 <Record Type="UI.DataFieldWithNavigationPath">
>                     <PropertyValue Property="Label" String="Ref. Sales Order" />
>                     <PropertyValue Property="Value" Path="RefSalesOrderID" />
>                     <PropertyValue Property="Target" NavigationPropertyPath="to_SalesOrder" />
>                 </Record>
>             </Collection>
>         </PropertyValue>
>     </Record>
> </Annotation>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> @UI.fieldGroup: [
>   {
>     targetelement: 'TO_SALESORDER',
>     label: 'Ref. Sales Order',
>     value: 'REFSALESORDERID',
>     type: #WITH_NAVIGATION_PATH,
>     position: 1 ,
>     qualifier: 'NavExample'
>   }
> ]
> REFSALESORDERID;
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> UI.FieldGroup #NavExample : {
>     Data : [
>         {
>             $Type : 'UI.DataFieldWithNavigationPath',
>             Label : 'Ref. Sales Order',
>             Value : RefSalesOrderID,
>             Target : to_SalesOrder
>         }
>     ]
> }
> ```



### Additional Features in SAP Fiori Elements for OData V4

**Navigation After Executing an Action**

Application developers can disable the navigation using the setting `navigateToInstance` in the manifest:

> ### Sample Code:  
> `navigateToInstance`
> 
> ```
> 
> ```

The key should always start with `DataFieldForAction::`, followed by the action name.

For inline actions, you must make the following configuration at columns level:

> ### Sample Code:  
> `navigateToInstance` for Inline Actions
> 
> ```
> “com.sap.vocabularies.UI.v1.LineItem": {
>     "tableSettings": {
>         ...,
>         ...
>     },
>     "columns": {
>         "DataFieldForAction::com.c_salesordermanage_sd.AddRandomItem": {
>             "afterExecution": {
>                 "navigateToInstance": false
>             }
>         },
>         "DataFieldForAction::com.c_salesordermanage_sd.DummyBoundAction": {
>             "afterExecution": {
>                 "navigateToInstance": false
>                 }
>             }
>         }
>      }
> }
> ```

> ### Note:  
> Navigation after executing an action works in the following cases:
> 
> -   If the returned context belongs to the same entity as the context that triggered the action. For example, navigation is not triggered if the table action \(with the table pointing to a navigation entity\) returns an object that belongs to the header entity.
> 
> -   For bound actions in the table toolbar, inline actions, header and footer actions, and form actions.
> 
> -   For annotation-based custom actions.
> 
> -   For navigation to the next level, as defined via routing.
> 
> 
> Navigation after executing an action currently doesn't work in the following cases:
> 
> -   For the chart toolbar.
> 
> -   For subobject pages and tables in the object page. In these cases the control associated with the action is refreshed, since navigation is currently not possible.
> 
> -   For standard actions in SAP Fiori elements, such as *Save*, *Edit*, or *Create*.
> 
> -   For manifest-based actions.
> 
> -   For external navigation.



### In-Page Navigation

Header facets supports in-page navigation. For more information, see [Navigation from Header Facet Title](navigation-from-header-facet-title-fa0ca22.md)

