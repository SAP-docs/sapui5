<!-- loio8e9edbd2d04240f8961ff1e0937a2a4c -->

# Configuring Dependencies to SAPUI5 Libraries

You can define dependencies to SAPUI5 libraries required by your app to improve the loading time.



> ### Note:  
> For information about SAP Fiori elements for OData V4, see [Configuring Dependencies to SAPUI5 Libraries](configuring-dependencies-to-sapui5-libraries-ef5f16b.md).



Overview page application instances are dependent on the `sap.ovp` SAPUI5 library, and the dependencies are configured in the `"sap.ui5"` dependencies section.

> ### Sample Code:  
> ```
> "sap.ui5": {
>     ...
>     "dependencies": {
>         "minUI5Version": "1.146.0",
>         "libs": {
>             "sap.ovp": {
>                 "minVersion": "1.32.0"
>             }
>         }
>     },
>     ...
> }
> ```

