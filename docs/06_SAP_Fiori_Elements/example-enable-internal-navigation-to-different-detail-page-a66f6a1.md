<!-- loioa66f6a11d4a7425a91a5354c157646d8 -->

# Example: Enable Internal Navigation to Different Detail Page

You can enable internal navigation to a different detail page \(that is, using different entity sets\) for a list report or an object page.

In the extension function, you can define the logic or condition that triggers the navigation to the detail page. If none of the conditions mentioned in the extension are met, navigation to the default detail page is triggered.

The figure below shows a sample navigation scenario:

![](images/Internal_Navigation_11d89ac.png)

Enabling conditional navigation to a different detail page can be achieved using the `onListNavigationExtension` method. The code snippet below shows a sample implementation of the `onListNavigationExtension`.

> ### Sample Code:  
> ```
> onListNavigationExtension: function(oEvent) {
> 			var oBindingContext = oEvent.getSource().getBindingContext();
> 			var oObject = oBindingContext.getObject();
> 			var sNavigationProperty;
> 			switch (oObject.Column3){
> 				case "100":
> 					sNavigationProperty = "NavigationProperty1";
> 					break;
> 				case "200":
> 					sNavigationProperty = "NavigationProperty2";
> 					break;
> 			}
> 			if (sNavigationProperty){
> 				var oExtensionAPI = this.extensionAPI;
> 				var fnNavigate = function(){
> 					return new Promise(function(fnResolve, fnReject){
> 						var oModel = oBindingContext.getModel();
> 						var oTarget;
> 						oModel.createBindingContext(sNavigationProperty, oBindingContext, {}, function(oTarget){
> 							var oNavigationController = oExtensionAPI.getNavigationController();
> 							oNavigationController.navigateInternal(oTarget);
> 							fnResolve();
> 						});
> 					});
> 				};
> 			oExtensionAPI.securedExecution(fnNavigate, {
>                 busy: {
>                                check: false
>                 },
>                 dataloss: {
>                              popup: false
>                 }
> });
> 
> 				return true;				
> 			}
> 			return false;
> 		}
> 
> Sample Implementation of Manifest changes:
> 		"pages": {
> 					"ObjectPage|EntitySet1 ": {
> 						"entitySet": " EntitySet1",
> 						"component": {
> 							"name": "sap.suite.ui.generic.template.ObjectPage"
> 						}
> 					},					
> 					"ObjectPage| EntitySet2 ": {
> 						"entitySet": " EntitySet2",
> 						"component": {
> 							"name": "sap.suite.ui.generic.template.ObjectPage"
> 						}
> 					},
> 					"ObjectPage| EntitySet3": {
> 						"entitySet": " EntitySet3",
> 						"component": {
> 							"name": "sap.suite.ui.generic.template.ObjectPage"
> 						}
> 					}
> 
> ```



<a name="loioa66f6a11d4a7425a91a5354c157646d8__section_jkm_vh5_ghc"/>

## Visual Indication for Table Rows when Navigated Using `onListNavigationExtension`

You can implement the `onChildOpenedExtension` function within the list report/object page controller extension, where you can pass the binding path of corresponding list item to `fnSetPath`.

> ### Sample Code:  
> ```
> onChildOpenedExtension: function(oSelectionInfo, fnSetPath) {
> 	//oSelectionInfo - Information about the child page instance opened last.
> 	//oSelectionInfo.keys – The array of keys (one on each hierarchy level) used for last opened child page.
> 	//fnSetPath - pass the binding path of the corresponding list item to this function if it is not identical 	to oSelection.path.
> 	var oModel = this.getView().getModel();
>           oModel.createBindingContext(oSelectionInfo.path + "NavigationProperty", null, null, function(oContext) { 
>                 fnSetPath(oContext.getPath());
> 	});
> },  
> 
> ```

**Related Information**  


[Example: Replacing Standard Navigation in a Responsive Table in the List Report](example-replacing-standard-navigation-in-a-responsive-table-in-the-list-report-5ae7b0c.md "You can replace the standard navigation from the list report to the object page with your own navigation to an external or internal target.")

[Example: Replacing Standard Navigation in a Responsive Table on the Object Page](example-replacing-standard-navigation-in-a-responsive-table-on-the-object-page-e87763d.md "You can replace the standard navigation from the object page with your own navigation to an external or internal target.")

[Configuring Internal Navigation](configuring-internal-navigation-666b503.md "SAP Fiori elements control the navigation within an app (internal navigation). This section describes the configuration options that you have.")

