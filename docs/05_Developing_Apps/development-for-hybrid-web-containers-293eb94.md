<!-- loio293eb945f0e945aaa776812481b4c533 -->

# Development for Hybrid Web Containers

You can develop mobile apps as hybrid app consisting of a native app wrapper, for example PhoneGap, and an HTML viewer to display the content on the user interface.

Hybrid apps have the advantage that you can publish them in app stores. Also, by embedding the application code and the SAPUI5 library files into the hybrid container, the user needs to install the files only once and does **not** need to download them every time he starts the application. But then the library size becomes important, because every user has to install the files, whereas in web applications, the library is deployed on a server and the user only needs to download the required parts of the library at runtime.

To include the resources you need in your hybrid app, you can use the static mobile runtime package `openui5-runtime-mobile*.zip`. The package is **not** contained in SAPUI5, but in the Open Source version OpenUI5.

The library size of these packages is rather small because the content that is most likely not needed has been removed, for example test pages. A package contains the debug version of all JavaScript files and the optimized and minimized version. Thus, you can use the package for productive use as well as for debugging purposes. To use this package in an app wrapper, such as PhoneGap, unzip the package in the respective resource location of the app development project. The app wrapper build then includes the files and makes them available at runtime.

To ensure that the file is small, it only contains the control libraries that are most likely used and not all control libraries. Depending on the hybrid app it may be necessary to add libraries by copying them from the respective folder of the runtime, or to delete libraries to reduce the package size and, thus, also reduce the installation size for the user.

The file contains the following control libraries:

-   `sap.f`

-   `sap.m`

-   `sap.tnt`

-   `sap.ui.core`

-   `sap.ui.layout`

-   `sap.ui.suite`

-   `sap.ui.unified`

-   `sap.uxap`


The decision, which libraries to include or not may be disputed. It is only based on a rule of thumb, and adaptations are required anyway for many apps.

Also, the mobile/hybrid package excludes certain types of files which are typically not needed. Your mileage may vary, so you might need to add the respective files for the requirements of your specific app. The `library-preload.js` files which contain all controls from a library to reduce the number of HTTP requests are not required in hybrid apps because there is no HTTP latency. SAPUI5 will by default try to access them, so you might see a failed attempt to load these files in the log file or developer tools. These error messages do not hurt, though, and you can get rid of them by declaring that no such files exist and by setting the following configuration in the SAPUI5 bootstrap script tag:

```
data-sap-ui-preload=""
```



## Optimization of the Package Size

Although the static package is small enough to be included in hybrid apps, you can reduce the size further and optimize the content for a specific application by deleting additional files. The following list gives some examples:

-   You can delete all library folders if the respective control library is not needed. For example, in the OpenUI5 version you can delete the `suite` and the `unified` folder.

-   In each of the `/resources/sap/* ... */themes` folders, you can delete all theme folders except the one for the theme you are using.


> ### Note:  
> For all JavaScript files, an optimized version and a debug \(`dbg`\) version exists. If you delete the files, make sure that you always delete both versions. If you can do without easy debugging and want to achieve a minimum installation size, we recommend to delete all `*-dbg.js` files.

You can delete further files, but the size reduction is limited and to find out the files that are not required gets increasingly difficult.



<a name="loio293eb945f0e945aaa776812481b4c533__section_N10018_N10011_N10001"/>

## Device Ready Event

The hybrid web container needs some time for initialization. During this time, the sending of AJAX requests is blocked, meaning that JavaScript code stops once an AJAX request is sent and the code execution stops as well. This leads to a UI freeze effect.

The OData model in SAPUI5 uses AJAX requests internally and the OData model initialization must therefore be done after the hybrid container is ready to avoid a user interface freeze. After initialization, the hybrid web containers fires an event, which is called `deviceready` in PhoneGap. To fix this issue, move the code where the OData model is created and set to the core object or any other controls' model property to the `deviceready` event listener.

Example:

```html
<script>
<!-- put the following code in the beginning of the application code -->
function appReady(){
    // your code with AJAX requests
}
<!-- bind to the deviceready event -->
document.addEventListener("deviceready", appReady, false);
</script>
```



<a name="loio293eb945f0e945aaa776812481b4c533__section_N1003A_N10011_N10001"/>

## Cross Domain Restrictions

If you load data from an external server or service using AJAX, the external domain has to be configured inside the hybrid web container to make the AJAX request go through the cross domain restriction. The following findings result from an integration of the demo applications into PhoneGap:

-   Android

    If the AJAX code runs inside the webview in Android, no cross domain restriction exists. This means that you can load data using AJAX from everywhere. The PhoneGap documentation, however, still says that the domain needs to be configured in one XML file.

-   iOS

    The restriction in webview in iOS still exists and you need to add the domain that is visited using AJAX to an allowlist file to bypass the restriction. For detailed information about the allowlist file, see the PhoneGap documentation on the PhoneGap website.


