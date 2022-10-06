<!-- loioa04b0d10fb494d1cb722b9e341b584ba -->

# Bootstrapping: Loading and Initializing

To use SAPUI5 features in your HTML page, you have to load and initialize the SAPUI5 library.

You can use the SAPUI5 bootstrap script in your page to initialize SAPUI5 runtime automatically as soon as the script is loaded and executed by the browser. For simple use cases as well as the default SAPUI5 installation, this is sufficient to build and run UIs. In addition to this, you can specify the set of SAPUI5 libraries and the theme used for your application in the configuration settings.

> ### Note:  
> If you run your app standalone, the bootstrap is added to your HTML page. In an SAP Fiori launchpad environment, the launchpad executes the bootstrap and no additional HTML page is needed to display the app.

The following code snippet shows a typical bootstrap script tag:

```html
<script id="sap-ui-bootstrap" 
     type="text/javascript"
     src="resources/sap-ui-core.js"
     data-sap-ui-theme="sap_belize"
     data-sap-ui-libs="sap.m"
     data-sap-ui-compatVersion="edge">
</script>
```

The attributes `data-sap-ui-theme="sap_belize"` and `data-sap-ui-libs="sap.m"` already provide examples of how SAPUI5 runtime can be configured to the needs of an application.



## Overview of Bootstrap Files

SAPUI5 provides several bootstrap files for different use cases. The following table gives an overview of the most important resources and the respective use cases. The resource names refer to the `resources/` folder in the SAPUI5 installation. The actual base URL depends on your platform and administrative setup.


<table>
<tr>
<th valign="top">

Resource



</th>
<th valign="top">

Description



</th>
</tr>
<tr>
<td valign="top">

`sap-ui-core.js`



</td>
<td valign="top">

This is the standard bootstrap file, which we recommend to use for typical use cases. It already contains jQuery, `jquery-ui-position` and only the minimum required parts of the core library \(`sap.ui.core`\). Required files are loaded dynamically using XMLHttpRequest \(XHR\).

For more information, see [Standard Variant for Bootstrapping](standard-variant-for-bootstrapping-91f1f45.md).



</td>
</tr>
<tr>
<td valign="top">

Content Delivery Network \(CDN\)



</td>
<td valign="top">

You can access the libraries externally from a CDN. For more information see [Variant for Bootstrapping from Content Delivery Network](variant-for-bootstrapping-from-content-delivery-network-2d3eb2f.md).



</td>
</tr>
<tr>
<td valign="top">

`sap-ui-core-nojQuery.js`



</td>
<td valign="top">

You use this bootstrap file for applications with their own jQuery version. It also contains the minimum required parts of the core library, but **not** jQuery and `jquery-ui-position`.

For more information, see [noJQuery Variant for Bootstrapping](nojquery-variant-for-bootstrapping-91f1dd0.md).



</td>
</tr>
<tr>
<td valign="top">

`sap/ui/core/library-preload.js`



</td>
<td valign="top">

This file contains most of the modules that are contained in the `sap.ui.core` library, but the modules are parsed and executed only on demand, and not immediately.

> ### Caution:  
> An application must not reference this file. If the configuration option is set to `preload`, SAPUI5 automatically loads the file.

For more information, see [Standard Variant for Bootstrapping](standard-variant-for-bootstrapping-91f1f45.md).



</td>
</tr>
<tr>
<td valign="top">

`sap-ui-core-lean.js`



</td>
<td valign="top">

This bootstrap file is similar to the `sap-ui-core.js` file, but in this use case only the jQuery and one SAPUI5 file are loaded immediately and the other files are loaded dynamically.

> ### Caution:  
> This use case is usually **not** used and may be removed in future.



</td>
</tr>
<tr>
<td valign="top">

`sap-ui-custom*.js`



</td>
<td valign="top">

File names that match this pattern are reserved for custom merged files used by the application.

> ### Note:  
> The proposed naming scheme for these files needs to be adapted in future versions for the same encapsulation reasons as mentioned above.



</td>
</tr>
</table>

