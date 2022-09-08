<!-- loio8bd546e27a5f41cea6e251ba04534d70 -->

# Changing Navigation to Object Page

Navigation from the list report view to the object page in the same app is enabled by default. If required, you can disable this navigation or replace it with navigation to another app \(external navigation\).



<a name="loio8bd546e27a5f41cea6e251ba04534d70__section_as3_thj_vlb"/>

## Disable Navigation



### SAP Fiori Elements for OData V2

You can use the `manifest.json` file to control whether it is possible to navigate to a detail page by keeping the predefined definition of a subpage. If you wish to disable navigation, follow the instructions in the example below to remove the appropriate code.

**Example with Navigation**

```js
"sap.ui.generic.app": {
			"pages":[{
				"entitySet": "Zfarvd_Bs_Hd_Bo",
				"component": {
					"name": "sap.suite.ui.generic.template.ListReport",
					"list": true,
					"settings": {
						"gridTable": false, 
						"hideTableVariantManagement": false
					}
				},
//Navigation to detail page: eliminate this block if no navigation is needed
				"pages": [{
					"entitySet": "Zfarvd_Bs_Hd_Bo",
					"component": {
						"name": "sap.suite.ui.generic.template.ObjectPage"
					},	
```



### SAP Fiori Elements for OData V4

You can use the `manifest.json` file to remove the navigation option to an object page or a sub-object page. To do this, just remove the `navigation` section from the corresponding `target` in the `manifest.json` file.



<a name="loio8bd546e27a5f41cea6e251ba04534d70__section_xtw_fjj_vlb"/>

## Enable External Navigation



### SAP Fiori Elements for OData V2

You can define an external navigation target using intent-based navigation in the `manifest.json` file by modifying the `navigation` \> `display` entry. This allows you to overwrite existing internal navigation with external navigation, for example, from a line item in the list report to an object page in a different app, or from an object page to a subpage in another app.

In the example below, the standard navigation from the list report to the object page has been replaced with navigation to an object page in another app.

```js
    "sap.app": {
        "_version": "1.2.0",
        ...
        "crossNavigation": {
            "inbounds": {},
            "outbounds": {
                "ExampleNavigationTarget":
                {
                    "semanticObject": "EPMProduct",
                    "action": "manage_st"
                }
            }
        }
    ...
...
    "sap.ui.generic.app": {
        "_version": "1.2.0",
        "pages": [{
            "entitySet": "STTA_C_MP_Product",
            "component": {
                "name": "sap.suite.ui.generic.template.ListReport",
                "list": true
            },
            "pages": [{
                "entitySet": "STTA_C_MP_Product",
                "component": {
                    "name": "sap.suite.ui.generic.template.ObjectPage"
                },
// Navigation to an external target instead of a detail page: Add this block to set up external navigation.
                "navigation": {
                    "display": {
                        "path": "sap.apps.crossNavigation.outbounds",
                        "target": "ExampleNavigationTarget"

            
```

> ### Note:  
> -   The example above applies to `sap.ui.generic.app->_version` 1.2.0.
> 
> -   The path and target you specify for external navigation must point to an existing `outbounds` entry.
> 
>     For more information about the `crossNavigation` attribute in the `sap.app` namespace, see [Descriptor for Applications, Components, and Libraries \(manifest.json\)](../04_Essentials/descriptor-for-applications-components-and-libraries-manifest-json-be0cf40.md). In *Sample code 2: Attributes in the sap.app namespace*, go to the `crossNavigation` attribute and see the description for `outbounds`.



### SAP Fiori Elements for OData V4

You can define an external navigation using intent-based navigation in the `manifest.json` file. This allows end user to navigate to an external FLP-based application instead of the normal internal navigation to an object page or sub-object page. to remove the navigation option to an object page or a sub-object page. The `manifest.json` snippet below shows an example change that would be needed to navigate to an intent-based external navigation instead of the regular sub-object page navigation. The same can also be done at any sub-object level or at the object page level..

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
>                         "entitySet" : "Artists",                          
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
> ```json
> "navigation": {                              
>     "_Publication": {
>         "display":{                                      
>             “path”:”sap.apps.crossNavigation.outbounds”,
>             "target":"ProductDetails"
>         }                              
>     }
> }
> ```

> ### Note:  
> If both `display` and `detail` are given the manifest, then `display` has priority for the outbound navigation.

