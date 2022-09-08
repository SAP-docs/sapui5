<!-- loio533f7e7f59854cb08ce8074814ae83c5 -->

# Form Entry Object Page

The form entry object page is a variation of the standard object page layout in which the header and navigation bar are not displayed.

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
>             "entitySet": "FormRoot",         
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

In addition, if you want your application to start automatically in creation mode you have to specify the following in your main application Component.js:

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

