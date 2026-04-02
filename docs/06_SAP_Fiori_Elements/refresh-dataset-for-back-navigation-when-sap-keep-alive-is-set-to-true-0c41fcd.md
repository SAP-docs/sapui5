<!-- loio0c41fcda148848d692051760471be1fc -->

# Refresh Dataset for Back Navigation When `sap-keep-alive` Is Set to `True`

You can add a custom code to perform a refresh of specific data.

> ### Note:  
> For information about SAP Fiori elements for OData V4, see [Refresh Dataset for Back Navigation When sap-keep-alive Is Set to True](refresh-dataset-for-back-navigation-when-sap-keep-alive-is-set-to-true-f1c2704.md).

When `sap-keep-alive` is set to `true`, and the user navigates from one application to another, modifies some common data and navigates back to the source app, the data isn't refreshed automatically.

You can use `onLeaveAppExtension` API to refresh the required dataset as shown in sample below:

> ### Sample Code:  
> ```
> onLeaveAppExtension: function (bIsDestroyed) {
> 	Log.info("onLeaveAppExtension called!");
> 	var fnReactivate = function () {
> 		sap.m.MessageToast("onLeaveAppExtension is called here").show();
> 	};
> 	return fnReactivate;
> }
> ```

For information about the `onLeaveAppExtension` API, see the [API Reference](https://ui5.sap.com/#/api/sap.suite.ui.generic.template.ObjectPage.controllerFrameworkExtensions). 

