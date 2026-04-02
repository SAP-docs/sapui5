<!-- loio2c65f07f44094012a511d6bd83f50f2d -->

# Configuring Internal Navigation

You can configure internal navigation within an SAP Fiori elements app.



<a name="loio2c65f07f44094012a511d6bd83f50f2d__section_lzb_ncj_vlb"/>

## Standard Navigation Within an App

In the `manifest.json` file, you define the "navigation" section for each "target". This controls if the navigation is enabled or not. If navigation is enabled, a chevron comes for the record in the table indicating a further navigation to the detail page \(object page or subobject page\).The pages structure of the app should always be a tree, with the root as either a list report page or an analytical list page. All the other nodes would be object pages or canvas pages, that are uniquely identified by their entity sets. This means that no two object pages can share the same entity set.

> ### Sample Code:  
> `manifest.json`
> 
> ```json
> 
> ...
> "sap.ui5": {
>     ...
>     "routing": {
>     ...
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
>                         "contextPath": "/Artists",
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
>                 "options": {
>                     "setting": {
>                         ...
>                         "navigation": {               // Navigation Section to SubOP detail page: Eliminate if no navigation is required.
>                             "_Records": {       // NOTE: This should refer to navigation path and NOT navigation entity name                         
>                                 "detail": {                                     
>                                     "route": "RecordSubObjectPage" // This triggers the regular internal navigation from OP "Records" table record to SubOP
>                                 }                         
>                             },
>                             "_Publishers": {    // NOTE: This should refer to navigation path and NOT navigation entity name                            
>                                 "detail": {                                     
>                                     "route": "PublisherSubObjectPage" // This triggers the regular internal navigation from OP "Publisher" table record to SubOP
>                                 }                         
>                             }                         
>                         }
>                     }
>                 }
>                 ...
>             } // End of ArtistObjectPage
>         } // End of Targets
>     }, // End of routing
>     ...
> }
> 
> ```

The same holds true for the navigation to any level of subobject pages.

> ### Note:  
> While defining navigation targets for object pages and subobject pages, application developers must ensure that they specify the navigation property path instead of the navigation entity set name.
> 
> In the preceding sample code, under `navigation`, the `_Records` is the navigation path to the navigation entity linked to `ArtistObjectPage`. You must not use `Records` as the navigation target because it is the navigation entity set name.

You can disable the navigation from a table with the `availability` property. You can use the `availability` property in the `manifest.json` file for a specified route either as a simple binding expression, or using a formatter, as shown in the following sample codes:

> ### Sample Code:  
> `manifest.json`
> 
> ```
> 
> "Travel": {
>     "detail": {
>         "route": "objectPage",
> 	    "availability": "{= ${TravelStatus_code} === 'O'}"
>     }
> }
> 
> ```

> ### Sample Code:  
> `manifest.json`
> 
> ```
> 
> "Travel": {
> 	"detail": {
> 		"route": "objectPage",
> 		"availability": "{path: 'TravelStatus_code', formatter: '.extension.sap.fe.core.fpmExplorer.customHeaderListReport.LRExtend.isNavigable'}"
> 	}
> }
> ...
> isNavigable: function(travelStatus, context) {
> 	return travelStatus !== "O"
> }
> 
> ```



<a name="loio2c65f07f44094012a511d6bd83f50f2d__section_cpp_wdj_vlb"/>

## Navigation Between Entities of an App

You can link entities within an app by defining an appropriate `UI.DataFieldWithNavigationPath` annotation . Linking entities within an app allows users to navigate between the entities within the application. You can use this app-internal linking in the object header, in sections, and in tables. For example, within a sales order app, you can link from a sales order to another sales order, from a sales order item to the sales order header, or from a sales order schedule line to a schedule line of another sales order.

> ### Note:  
> This feature is available only on the object page.



### Determining the Navigation Target

The following code samples show a possible use case of the `UI.DataFieldWithNavigationPath` annotation. In this use case, an object page displays the details of a sales order. One of the fields in a form facet is the reference sales order. The requirement is to display the reference sales order as a link. Clicking the link would then navigate to the object page, where the reference sales order is displayed as a sales order.

As shown in the manifest example below, the `"navigation"` section of the routing target points to the UI5 route you want to navigate to.

The appropriate ID in the navigation section of the `manifest.json` file must be identical to the `'Target'` property of the `UI.DataFieldWithNavigationPath` annotation.

The parameters in the routing pattern of the manifest must be provided as well and are resolved using the relative binding paths defined in the navigation target.

> ### Sample Code:  
> `manifest.json`
> 
> ```json
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
>                     "contextPath":    "/SalesOrderManage",
>                     "navigation": {
>                         "to_SalesOrder": {  // 'Target' of UI.DataFieldWithNavigationPath annotation
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



### Navigation After Executing an Action

Application developers can disable the navigation using the setting `navigateToInstance` in the manifest:

> ### Sample Code:  
> `navigateToInstance`
> 
> ```
> "com.sap.vocabularies.UI.v1.LineItem": {
>     "tableSettings": {
>         ...,
>         ...
>     },
>     "actions": {
>         "DataFieldForAction::com.c_salesordermanage_sd.AddRandomItem": {
>             "afterExecution": {
>                 "navigateToInstance": false
>             }
>         },
>         "DataFieldForAction::com.c_salesordermanage_sd.DummyBoundAction": {
>             "afterExecution": {
>                 "navigateToInstance": false
>             }
>         }
>     }
> }
> ```

The key should always start with `DataFieldForAction::`, followed by the action name.

For inline actions, you must make the following configuration at columns level:

> ### Sample Code:  
> `navigateToInstance` for Inline Actions
> 
> ```
> "com.sap.vocabularies.UI.v1.LineItem": {
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
> -   For navigation to the next level, as defined through routing.
> 
> 
> Navigation after executing an action doesn't work in the following cases:
> 
> -   For the chart toolbar.
> 
> -   For subobject pages, the control associated with the action is refreshed, since navigation isn't possible.
> 
> -   For standard actions in SAP Fiori elements, such as *Save*, *Edit*, or *Create*.
> 
> -   For manifest-based actions.
> 
> -   For external navigation.



### In-Page Navigation

Header facets supports in-page navigation. For more information, see [Navigation from Header Facet Title](navigation-from-header-facet-title-fa0ca22.md)



> ### Note:  
> For information about SAP Fiori elements for OData V2, see [Configuring Internal Navigation](configuring-internal-navigation-666b503.md).

