<!-- loio1154c0254d734730930ea633048a9038 -->

# Changing Navigation to Object Page

Navigation from the list report view to the object page in the same app is enabled by default. If required, you can disable this navigation or replace it with navigation to another app \(external navigation\).



<a name="loio1154c0254d734730930ea633048a9038__section_as3_thj_vlb"/>

## Disable Navigation

You can use the `manifest.json` file to control whether it is possible to navigate to a detail page by keeping the predefined definition of a subpage. If you wish to disable navigation, follow the instructions in the example below to remove the appropriate code.

**Example with Navigation**

```json
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



<a name="loio1154c0254d734730930ea633048a9038__EnableExternalNavigation"/>

## Enable External Navigation

You can define an external navigation target using intent-based navigation in the `manifest.json` file by modifying the `navigation` \> `display` entry. This allows you to overwrite existing internal navigation with external navigation, for example, from a line item in the list report to an object page in a different app, or from an object page to a subpage in another app.

In the example below, the standard navigation from the list report to the object page has been replaced with navigation to an object page in another app.

```json
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
>     For more information about the `crossNavigation` attribute in the `sap.app` namespace, see [Manifest \(Descriptor for Applications, Components, and Libraries\)](../04_Essentials/manifest-descriptor-for-applications-components-and-libraries-be0cf40.md). In *Sample code 2: Attributes in the sap.app namespace*, go to the `crossNavigation` attribute and see the description for `outbounds`.

