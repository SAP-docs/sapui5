<!-- loio6a0a050e91474d4780dd5e3604642928 -->

# Adapting Logic Before Save Operation

You can use an extension API to execute any logic before the save operation.

The extension API is triggered just before starting the save operations.

When this extension API returns a promise, it can be resolved or rejected.



<a name="loio6a0a050e91474d4780dd5e3604642928__section_ulw_k5g_fsb"/>

## Additional Features in SAP Fiori Elements for OData V2

> ### Note:  
> In draft applications, the extension API is called only once while saving the root object page. For non-draft applications, the extension API is called for save operations from any object page.

If the extension does not return a result, the save operation starts without waiting for the extension to be completed.

> ### Sample Code:  
> ```
> 
> beforeSaveExtension: function () {
> 			var fnResolve, fnReject;
> 			var oPromise = new Promise(function (resolve, reject){
> 				fnResolve = resolve;
> 				fnReject = reject;
> 			});
> 			this.oDialog = new sap.m.Dialog({
> 				title: "BeforeSaveExtension",
> 				content: new sap.m.Text({
> 					text: "This is an exmpale to check the beforeSaveExtension"
> 				}),
> 				beginButton: new sap.m.Button({
> 					text: "Continue to Save",
> 					press: function () {
> 						fnResolve();
> 						this.oDialog.close();
> 					}.bind(this)
> 				}),
> 				endButton: new sap.m.Button({
> 					text: "Cancel Save",
> 					press: function () {
> 						fnReject();
> 						this.oDialog.close();
> 					}.bind(this)
> 				})
> 			});
> 			this.getView().addDependent(this.oDialog);
> 			this.oDialog.open();
> 			return oPromise;
> 		}
> 
> 
> ```

For more information, see [beforeSaveExtension](https://ui5.sap.com/#/api/sap.suite.ui.generic.template.ObjectPage.controllerFrameworkExtensions/methods/sap.suite.ui.generic.template.ObjectPage.controllerFrameworkExtensions.beforeSaveExtension) in the Demo Kit.



<a name="loio6a0a050e91474d4780dd5e3604642928__section_zt2_fvg_fsb"/>

## Additional Features in SAP Fiori Elements for OData V4

For more information, see [Using Custom Code Before Standard Operations](using-custom-code-before-standard-operations-877e5ff.md).

