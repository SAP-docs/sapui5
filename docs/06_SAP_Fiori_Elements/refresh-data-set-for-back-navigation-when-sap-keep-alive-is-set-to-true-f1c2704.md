<!-- loiof1c2704cc302401ba935f18e6303f123 -->

# Refresh Data Set for Back Navigation When `sap-keep-alive` Is Set to True

When `sap-keep-alive` is set to true, and the user navigates from one application to another, modifies some common data and navigates back to the source app, the data isn't refreshed automatically. You can add a custom code to perform a refresh of specific data.



<a name="loiof1c2704cc302401ba935f18e6303f123__section_tq2_jyk_jrb"/>

## Additional Features in SAP Fiori Elements for OData V2

You can use `onLeaveAppExtension` API to refresh the required data set as shown in sample below:

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



<a name="loiof1c2704cc302401ba935f18e6303f123__section_tpp_jzk_jrb"/>

## Additional Features in SAP Fiori Elements for OData V4

SAP Fiori elements provides two extension methods for applications that run in `sap-keep-alive` mode. Application developers can then add custom code when the application is suspended or restored during an external navigation.

-   `onSuspend`: This extension API is called for all the visited pages when the app that runs in `sap-keep-alive` mode is suspended \(that is, when an external navigation from such an application is triggered\).

-   `onRestore`: This extension API is called for all the visited pages when the app that runs in `sap-keep-alive` mode is restored \(for example, when using the back navigation to such an application\).


> ### Sample Code:  
> List report extension implementing `sap-keep-alive` extension APIs
> 
> ```
> return ControllerExtension.extend("SalesOrder.custom.LRExtend", {
>     // this section allows to extend lifecycle hooks or override public methods of the base controller
>     override: {
>         viewState: {
>             onSuspend: function() {
>                 // Applications can add their custom code here
>             },
>             onRestore: function() {
>                 // Applications can add their custom code here
>             }
>         }
>     }  
> }
> ```

