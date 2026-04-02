<!-- loiof1c2704cc302401ba935f18e6303f123 -->

# Refresh Dataset for Back Navigation When `sap-keep-alive` Is Set to `True`

You can add a custom code to perform a refresh of specific data.

When `sap-keep-alive` is set to true, and the user navigates from one application to another, modifies some common data and navigates back to the source app, the data isn't refreshed automatically. You can add a custom code to perform a refresh of specific data.

SAP Fiori elements provides two extension methods for applications that run in `sap-keep-alive` mode. Application developers can then add custom code when the application is suspended or restored during an external navigation.

-   `onSuspend`: This extension API is called for all the visited pages when the app that runs in `sap-keep-alive` mode is suspended \(that is, when an external navigation from such an application is triggered\).

-   `onRestore`: This extension API is called for all the visited pages when the app that runs in `sap-keep-alive` mode is restored \(for example, when using the back navigation to such an application\).


> ### Sample Code:  
> List report page extension implementing `sap-keep-alive` extension APIs
> 
> ```
> return ControllerExtension.extend("SalesOrder.ext.LRExtend", {
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



> ### Note:  
> For information about SAP Fiori elements for OData V2, see [Refresh Dataset for Back Navigation When sap-keep-alive Is Set to True](refresh-dataset-for-back-navigation-when-sap-keep-alive-is-set-to-true-0c41fcd.md).

