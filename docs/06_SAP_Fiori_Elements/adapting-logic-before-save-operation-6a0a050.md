<!-- loio6a0a050e91474d4780dd5e3604642928 -->

# Adapting Logic Before Save Operation

You can use an extension API to execute any logic before the save operation.

The extension API is triggered just before starting the save operations.

When this extension API returns a promise, it can be resolved or rejected.

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
> 					text: "This is an example to check the beforeSaveExtension"
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



> ### Note:  
> For information about SAP Fiori elements for OData V2, see  <?sap-ot O2O class="- topic/xref " href="d4bd0e4f9ba64e478e4d94314cac7be8.xml" text="" desc="" xtrc="xref:2" xtrf="file:/home/builder/src/dita-all/lgp1768808003240/loioa82e269bbb584cfcbdbd3ae8765d8e7f_en-US/src/content/localization/en-us/6a0a050e91474d4780dd5e3604642928.xml" output-class="" outputTopicFile="file:/home/builder/tp.net.sf.dita-ot/2.3/plugins/com.elovirta.dita.markdown_1.3.0/xsl/dita2markdownImpl.xsl" ?> .

