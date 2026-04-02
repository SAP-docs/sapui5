<!-- loio8bd546e27a5f41cea6e251ba04534d70 -->

# Changing Navigation to Object Page

You can disable the navigation from the list report page to the object page or replace it with external navigation.

Navigation from the list report page to the object page in the same app is enabled by default. If required, you can disable this navigation or replace it with navigation to another app \(external navigation\).



<a name="loio8bd546e27a5f41cea6e251ba04534d70__section_as3_thj_vlb"/>

## Disable Navigation

You can use the `manifest.json` file to remove the navigation option to an object page or a sub-object page. To do this, just remove the `navigation` section from the corresponding `target` in the `manifest.json` file.



<a name="loio8bd546e27a5f41cea6e251ba04534d70__EnableExternalNavigation"/>

## Enable External Navigation

You can define an external navigation using intent-based navigation in the `manifest.json` file. This allows users to navigate to an external FLP-based application instead of the normal internal navigation to an object page or subobject page, to remove the navigation option to an object page or a subobject page. The `manifest.json` snippet below shows an example change that would be needed to navigate to an intent-based external navigation instead of the regular subobject page navigation. The same can also be done at any subobject level or at the object page level..

> ### Sample Code:  
> `manifest.json`
> 
> ```json
> {
> …
> …
>  "sap.app": {
>         "crossNavigation": {
>             "outbounds": {
>                 "ProductDetails": {
>                     "semanticObject": "ProductDetails",
>                     "action": "manage"
>                 }
>             }
>         }
>  },
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
>                         "contextPath": "/Artists",
>                         "navigation": {                              
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
>                     "settings" : {                          
>                         "contextPath": "/Artists",                          
>                         "_tableType" : "Table",                          
>                         "navigation": {                              
>                             "_Publication": {                                  
>                                 "detail": {                                      
>                                     "outbound": "ProductDetails" // This triggers the external navigation to "ProductDetails" instead of the regular internal navigation to the sub-object page
>                                 }
>                             }                          
>                         }
>                     }
>                 }
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

You can also use a `display` section within the `navigation` section instead of the `detail` section shown in the sample above. The `display` section looks as follows:

> ### Sample Code:  
> `manifest.json`
> 
> ```json
> "navigation": {                              
>     "_Publication": {
>         "display":{                                      
>             "path":"sap.apps.crossNavigation.outbounds",
>             "target":"ProductDetails"
>         }                              
>     }
> }
> ```

> ### Note:  
> If both `display` and `detail` are given in the manifest, then `display` has priority for the outbound navigation.



> ### Note:  
> For information about SAP Fiori elements for OData V2, see [Changing Navigation to Object Page](changing-navigation-to-object-page-1154c02.md).

**Related Information**  


[Handling of the preferredMode Parameter](handling-of-the-preferredmode-parameter-bfaf3cc.md "You can use the preferredMode parameter to configure the mode in which the object page is initially launched.")

