<!-- loio533f7e7f59854cb08ce8074814ae83c5 -->

# Form Entry Object Page

The form entry object page is a variation of the standard object page layout in which the header and navigation bar aren't displayed.

> ### Note:  
> This topic is only applicable to SAP Fiori elements for OData V4.

You can use the form entry object page as an alternative to a list report object page pattern when you only want to provide a page for data entry.

The form entry object page supports the same content and considers the same annotations as a standard object page template.

For a page to be considered a form entry object page, you must make the following target settings:

> ### Sample Code:  
> ```
> "FormRootObjectPage": {                      
>     "type": "Component",                     
>     "id": "FormRootObjectPage",              
>     "name": "sap.fe.templates.ObjectPage",   
>     "options": {                             
>         "settings": {                        
>             "contextPath": "/FormRoot",         
>             "editableHeaderContent": false,  
>             "content": {                     
>                 "header": {                  
>                     "visible": false,        
>                     "anchorBarVisible": false
>                 }                            
>             }                                
>         }                                    
>     }                                        
> }  
> ```

In addition, if you want your application to start automatically in creation mode, you must specify the following in your main application `Component.js` file:

> ### Sample Code:  
> ```
> getStartupParameters: function() {
>     return Promise.resolve({      
>         preferredMode: ["create"] 
>     });                           
> }                                 
>  
> Such as 
>  
> sap.ui.define(["sap/fe/core/AppComponent"], function(AppComponent) 
>     "use strict";                                                  
>                                                         
>     return AppComponent.extend("FormTemplate.Component", {         
>         metadata: {                                                
>             manifest: "json"                                       
>         },                                                         
>         getStartupParameters: function() {                         
>             return Promise.resolve({                               
>                 preferredMode: ["create"]                          
>             });                                                    
>         }                                                          
>     });                                                            
> }); 
> ```



<a name="loio533f7e7f59854cb08ce8074814ae83c5__section_nbq_l5d_2zb"/>

## Enabling the `singleDraftForCreate` Setting

You can enable the `singleDraftForCreate` setting in the `manifest.json` file, as shown in the following code:

> ### Sample Code:  
> `manifest.json`
> 
> ```
> "sap.fe": {
>     "app": {
>         "singleDraftForCreate": true
>     }
> }
> ```

This setting ensures that end users can create a new entity only after they've actively saved the changes they've made to the current entity. Whenever an end user attempts to create a new entity, the application checks for entities with the properties `IsActiveEntity=false` and `HasActiveEntity=false`. If an entity matches these properties, it's considered as a draft and the application displays the entity in edit mode.

If there are no unsaved entities, the end user can create a new entity.



<a name="loio533f7e7f59854cb08ce8074814ae83c5__section_tcx_53c_lzb"/>

## Enabling the `singleDraftForCreate` Setting Using Extensions

You can enable the `singleDraftForCreate` setting using the `EditFlow` controller extension. If the `editFlow.createDocument(ListBinding, {singleDraftForCreate: true})` setting is enabled, it allows end users to create a new entity. The application launches the newly created entity in edit mode only if no unsaved drafts exist. If any unsaved draft exists, the application opens the latest unsaved draft in edit mode instead.

