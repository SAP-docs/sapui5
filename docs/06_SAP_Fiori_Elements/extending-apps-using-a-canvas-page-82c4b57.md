<!-- loio82c4b57424804ae2bc7f937c9b403525 -->

# Extending Apps Using a Canvas Page

You can embed content into a canvas page within an app.

> ### Note:  
> This topic is currently only applicable to SAP Fiori elements for OData V2.

A canvas page is an empty custom page in a SAP Fiori elements-based app. The content needs to be provided by an embedded implementing component.

The corresponding section in the manifest looks like this:

> ### Sample Code:  
> ```
> 
> ...     
>  "sap.ui.generic.app": {   
>     ...   
>         "pages": {
>             "thePageName": {     
>                 "component": {          
>                     "name": "sap.suite.ui.generic.template.Canvas",
>                     "settings": {
>                     }   
>                 },
>                 "implementingComponent": {                              
>                     "componentName": "theImplementingComponentQualifiedName",
>                         "settings": {                                   
>                         ...                             
>                     }
>                 }
>             }                       
>         },
>         ...
> }
> ...
> 
> ```

You can use the `componentUsage` property instead of `componentName` to facilitate a [component usage](https://ui5.sap.com/#/api/sap.ui.core.Component/methods/createComponent) that has been defined in the corresponding section of the manifest.

There are two settings sections:

-   The settings section placed in the `component` section contains properties that are specific to the canvas component.

-   The settings section placed in the `implementingComponent` section can be used to define a data binding between public properties of the embedding component and context information. This corresponds to embedding a reuse component on an object page. See [Including Reuse Components on an Object Page](including-reuse-components-on-an-object-page-d869d7a.md).


For example, the following snippet allows the implementing component to use the [`addFooterBarToPage`](https://ui5.sap.com/#/api/sap.suite.ui.generic.template.Canvas.extensionAPI.ExtensionAPI/methods/addFooterBarToPage) method to add the standard footer bar to the canvas page:

> ### Sample Code:  
> ```
> 
> ...       
> "sap.ui.generic.app": {     
>     ...         
>         "pages": {
>             "thePageName": {                
>                 "component": {                          
>                     "name": "sap.suite.ui.generic.template.Canvas",             
>                     "settings": { 
>                         "requiredControls": {                    
>                             "footerBar": true      
>                         } 
>                     }   
>                 },
>                 "implementingComponent": {                              
>                     "componentName": "theImplementingComponentQualifiedName",
>                             "settings": {                                   
>                         ...                             
>                     }
>                 }
>             }                       
>         },
>         ...
> }
> ...
> 
> ```

If the canvas page is to include flexible column action buttons \(via [`getFlexibleColumnLayoutActionButtons`](https://ui5.sap.com/#/api/sap.suite.ui.generic.template.Canvas.extensionAPI.ExtensionAPI/methods/getFlexibleColumnLayoutActionButtons)\), replace the `footerBar` setting by `flexibleColumnLayoutActions` in the snippet mentioned here. You can also use both controls.



<a name="loio82c4b57424804ae2bc7f937c9b403525__section_bsx_vg3_4fb"/>

## Navigating to a Canvas Page

To implement navigation to a canvas page, you need to add an additional section to the manifest:

> ### Sample Code:  
> ```
> 
> ...       
> "sap.ui.generic.app": {     
>     ...         
>         "pages": {
>             "thePageName": {                
>                 "component": {                          
>                     "name": "sap.suite.ui.generic.template.Canvas",             
>                     "settings": { 
>                         "requiredControls": {                    
>                             "footerBar": true      
>                         } 
>                     }   
>                 },
>                 "implementingComponent": {                              
>                     "componentName": "theImplementingComponentQualifiedName",
>                             "settings": {                                   
>                         ...                             
>                     }
>                 },
>                 "routingSpec": {
>                     "noOData": true,
>                     "noKey": true,
>                     "routeName": "theRouteName"
>                 }
>             }                       
>         },
>         ...
> }
> ...
> 
> ```

`theRouteName` is used to build a route name within the app. Therefore, the same name must not be used twice within an app. Additionally, the name of this route must not be identical with the name of any entity set or any navigation property within the OData service on which the app is based. You can find an exception from this rule here.

The `routingSpec` as defined in the mentioned sample code enables navigation to the canvas page. You must use the extension API to trigger navigation, as shown in the following code snippet. Place this piece of code in an appropriate event handler \(for example, in the press-handler of a button\) in the controller extension of the source page of the navigation.

> ### Sample Code:  
> ```
> 
> ...
> var oApi = this.extensionAPI;   
> var oNavigationController = oApi.getNavigationController();   
> oNavigationController.navigateInternal("", {     routeName: "theRouteName"   });  
> 
> ...
> 
> ```

> ### Note:  
> The instance of the extension API used for this purpose must belong to the parent page of the canvas page the navigation leads to.

For example, the corresponding structure in the manifest look like this:

> ### Sample Code:  
> ```
> 
> ...       
> "sap.ui.generic.app": {     
> ...
>     "pages": {
>         "theParentPageName": {
>             "entitySet": "theMainEntitySet",
>             "component": {
>                 "name": "sap.suite.ui.generic.template.ObjectPage",
>                 "settings": {
>                     ...
>                 }
>             }           
>             "pages": {
>                 "thePageName": {                
>                     "component": {                          
>                         "name": "sap.suite.ui.generic.template.Canvas",             
>                         "settings": { 
>                             ...
>                         } 
>                     },  
>                     "implementingComponent": {                              
>                         "componentName": "theImplementingComponentQualifiedName",
>                                 "settings": {                                   
>                             ...                             
>                         }
>                     },
>                     "routingSpec": {
>                         "noOData": true,
>                         "noKey": true,
>                         "routeName": "theRouteName"
>                     }
>                 },
>                 ...                         
>             }
> 
>         },
>         ...
>     }
> ...
> }
> 
> ```

In this case, only the extension API that belongs to the `theParentPageName` page can be used to navigate to the `thePageName` canvas page. Note that the context of the parent page is passed to the canvas page in this scenario. In this example, controls that are embedded in the `theImplementingComponentQualifiedName` component can be directly bound to properties of `theMainEntitySet`. This context is also passed to the standard lifecycle methods `stStart`and `stRefresh` of the `theImplementingComponentQualifiedName` component.



### Navigating to a Canvas Page with an Additional Key

The navigation techniques described enable you to add a canvas page that shows additional information for the same object as its parent page.

If you want the canvas page to display information that depends on what a user has chosen on the parent page, you need to set the `noKey` parameter in the `routingSpec` to false. The manifest of the app then looks like this:

> ### Sample Code:  
> ```
> 
> ...       
> "sap.ui.generic.app": {     
> ...
>     "pages": {
>         "theParentPageName": {
>             "entitySet": "theMainEntitySet",
>             "component": {
>                 "name": "sap.suite.ui.generic.template.ObjectPage",
>                 "settings": {
>                     ...
>                 }
>             }           
>             "pages": {
>                 "thePageName": {                
>                     "component": {                          
>                         "name": "sap.suite.ui.generic.template.Canvas",             
>                         "settings": { 
>                             ...
>                         } 
>                     },  
>                     "implementingComponent": {                              
>                         "componentName": "theImplementingComponentQualifiedName",
>                                 "settings": {                                   
>                             ...                             
>                         }
>                     },
>                     "routingSpec": {
>                         "noOData": true,
>                         "noKey": false,
>                         "routeName": "theRouteName"
>                     }
>                 },
>                 ...                         
>             }
> 
> 
>         },
>         ...
>     }
> ...
> }
> 
> ```

In this case, the information about the users' choice can be passed as a parameter in the navigation.

You can place the code in a suitable event handler, as described in the mentioned sample code. Alternatively, if the canvas page is the target of the standard navigation provided in one of the tables displayed on the source page, the `onListNavigationExtension` \(list report, object page\) function is used to place this code.

In this alternative scenario, choose the value of the `routeName` manifest property carefully, based on the following decision options:

-   The standard object page for the corresponding entity is still in place. It means that the standard navigation is only redirected to the canvas page on a case-by-case basis. In this case, the normal rules for choosing `theRouteName` apply.

-   The standard object page for the corresponding entity set isn't there. In this case, choose the name of the corresponding entity set as the `theRouteName`. It overrules the guideline that `theRouteName` is different from all entity set names. If there's more than one canvas page \(and the correct one is chosen on a case-by-case basis\), only one value of the `routeName` property is set to the name of the entity set.


In all scenarios, the code for executing the navigation looks like this:

> ### Sample Code:  
> ```
> 
> ...
> var oApi = this.extensionAPI;   
> var oNavigationController = oApi.getNavigationController();
> var sUsersChoice = ... // do whatever is necessary to determine the users choice   
> oNavigationController.navigateInternal(sUsersChoice, {     routeName: "theRouteName"   });  
> 
> ...
> 
> ```

Note that only one string can be passed to the canvas page in this fashion. If the information to be passed to the canvas page is complex, the application needs to encode this information in one string.

The following piece of code shows how the information about the user's choice can be evaluated in the implementing component of the canvas page:

> ### Sample Code:  
> ```
> 
> ...
> 
>   stRefresh: function(oModel, oBindingContext, oExtensionAPI) {
>     var oNavigationController = oExtensionAPI.getNavigationController();    
>     var aKeys = oNavigationController.getCurrentKeys();    
>     var sUserChoice = aKeys[aKeys.length - 1];
>     var oComponentModel = this.getComponentModel();    
>     oComponentModel.setProperty("/UsersChoice", sUserChoice);     
> }
> 
> ...
> ```

You can pass a navigation context from a table row in a list report to a canvas page. It can be used to bind smart controls in a canvas page. See the following sample code from `component.js`:

> ### Sample Code:  
> ```
> 
> stStart: function(oModel, oBindingContext, oExtensionAPI) {
>             var oComponentModel = this.getComponentModel();
>             var sPath = oExtensionAPI.getNavigationController().getCurrentKeys()[1];
>             var sBindingPath = "/C_STTA_SalesOrder_WD_20(" + sPath + ")";
>             var oPathSpec = {
>                 path: sBindingPath
>             };
>             var oCanvasView = oComponentModel.getProperty("/View");
>             oCanvasView.bindElement(oPathSpec);
>         },
> ```



### Navigating to a Canvas Page That Is Not a Child of Current Canvas Page

We can navigate to a canvas page that is not a child of current canvas page, by setting the `oNavigationData.isAbsolute` property as `true` while invoking the `navigateInternal` method. In this case, the target of the navigation can also be a child of any of the hierarchical ancestors of the current page.

Following is the manifest settings for the canvas page:

> ### Sample Code:  
> ```
> ...       
> "sap.ui.generic.app": {     
> ...
>     "pages": {
>         "theParentPageName": {
>             "entitySet": "theMainEntitySet",
>             "component": {
>                 "name": "sap.suite.ui.generic.template.ObjectPage",
>                 "settings": {
>                     ...
>                 }
>             }           
>             "pages": {
>                 "thePageName": {                
>                     "component": {                          
>                         "name": "sap.suite.ui.generic.template.Canvas",             
>                         "settings": { 
>                             ...
>                         } 
>                     },  
>                     "implementingComponent": {                              
>                         "componentName": "theImplementingComponentQualifiedName",
>                                 "settings": {                                   
>                             ...                             
>                         }
>                     },
>                     "routingSpec": {
>                         "noOData": true,
>                         "noKey": false,
>                         "routeName": "theRouteName"
>                     }
>                 },
>                 ...                         
>             }
> 
> 
>         },
>         ...
>     }
> ...
> }
> 
> ```

In the following code sample, the navigation stays on the same canvas page, but exchanges the user’s choice \(for example, as a result of some user interaction\).

> ### Sample Code:  
> ```
> ...
> var oApi = this.extensionAPI;   
> var oNavigationController = oApi.getNavigationController();
> var sUsersChoice = ... //do whatever is necessary to determine the user’s choice 
> oNavigationController.navigateInternal(sUsersChoice, {
> 	routeName: "theRouteName",
> 	isAbsolute: true
> });  
> ...
> 
> ```

**Related Information**  


[Developing Reuse Components](developing-reuse-components-6314fcd.md "Follow these guidelines when developing reuse components that are to be included as sections in object pages.")

