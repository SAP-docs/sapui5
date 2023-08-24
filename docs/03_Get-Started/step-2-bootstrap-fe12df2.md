<!-- loiofe12df2e338e43598977d09f3d191b7b -->

# Step 2: Bootstrap

Before we can do something with SAPUI5, we need to load and initialize it. This process of loading and initializing SAPUI5 is called **bootstrapping**. Once this bootstrapping is finished, we simply display an alert.



## Preview

  
  
**An alert "UI5 is ready" is displayed**

![](images/SAPUI5_Walkthrough_Step_02_f997780.png "An alert "UI5 is ready" is displayed")



## Coding

You can view and download all files at [Walkthrough - Step 2](https://ui5.sap.com/#/entity/sap.m.tutorial.walkthrough/sample/sap.m.tutorial.walkthrough.02).

> ### Note:  
> SAPUI5 is a JavaScript library that can either be loaded from the same Web server where the app resides, or from a different server. If SAPUI5 is deployed somewhere else on the server or you want to use a different server, then you need to adjust the corresponding paths in the bootstrap \(here: `src="/resources/sap-ui-core.js"`\) in this tutorial according to your own requirements.
> 
> You can use this reference to the latest stable version of SAPUI5 for the tutorial or for testing purposes, but never use this for productive use. In an actual app, you always have to specify an SAPUI5 version explicitly.
> 
> For more information about the CDN, see [Variant for Bootstrapping from Content Delivery Network](../04_Essentials/variant-for-bootstrapping-from-content-delivery-network-2d3eb2f.md).



## webapp/index.html

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>SAPUI5 Walkthrough</title>
	<script
		id="sap-ui-bootstrap"
		src="https://sdk.openui5.org/resources/sap-ui-core.js"
		data-sap-ui-theme="sap_belize"
		data-sap-ui-libs="sap.m"
		data-sap-ui-compatVersion="edge"
		data-sap-ui-async="true"
		data-sap-ui-onInit="module:sap/ui/demo/walkthrough/index"
		data-sap-ui-resourceroots='{
			"sap.ui.demo.walkthrough": "./"
		}'>

	</script>
</head>
<body>
<div>Hello World</div>

</body>
</html>
```

In this step, we load the SAPUI5 framework from our local webserver and initialize the core modules with the following configuration options:

-   The `src` attribute of the `<script>` tag tells the browser where to find the SAPUI5 core library – it initializes the SAPUI5 runtime and loads additional resources, such as the libraries specified in the `data-sap-ui-libs` attribute.

-   The SAPUI5 controls support different themes, we choose `sap_belize` as our default theme.

-   We specify the required UI library `sap.m` containing the UI controls we need for this tutorial.

-   To make use of the most recent functionality of SAPUI5 we define the compatibility version as `edge`.

-   We configure the process of “bootstrapping” to run asynchronously.

    This means that the SAPUI5 resources can be loaded simultaneously in the background for performance reasons.

-   We define the module to be loaded initially in a declarative way. With this, we avoid directly executable JavaScript code in the HTML file. This makes your app more secure. We will create the script that this references to further down in this step.
-   We tell SAPUI5 core that resources in the `sap.ui.demo.walkthrough` namespace are located in the same folder as `index.html`. This is, for example, necessary for apps that run in the SAP Fiori launchpad.




<a name="loiofe12df2e338e43598977d09f3d191b7b__section_ks2_1bv_xfb"/>

## webapp/index.js \(New\)

```js
sap.ui.define([

], function () {
	"use strict";


	alert("UI5 is ready");
});

```

Now, we create a new `index.js` script that will contain the application logic for this tutorial step. We do this to avoid having executable code directly in the HTML file for security reasons. This script will be called by the `index.html`. We defined it there as a module in a declarative way.

**Related Information**  


[Bootstrapping: Loading and Initializing](../04_Essentials/bootstrapping-loading-and-initializing-a04b0d1.md "To use SAPUI5 features in your HTML page, you have to load and initialize the SAPUI5 library.")

[Standard Variant for Bootstrapping](../04_Essentials/standard-variant-for-bootstrapping-91f1f45.md "The standard variant for bootstrapping loads all JavaScript modules of a library in advance with one single request for performance reasons.")

[Compatibility Version Information](../04_Essentials/compatibility-version-information-9feb96d.md "Compatibility version flags allow applications to react to incompatible changes in SAPUI5.")

[Variant for Bootstrapping from Content Delivery Network](../04_Essentials/variant-for-bootstrapping-from-content-delivery-network-2d3eb2f.md "SAPUI5 can either be loaded locally with a relative path from an SAP Web server or externally from a Content Delivery Network (CDN).")

[https://jquery.org/](https://jquery.org/)

[Content Security Policy](../05_Developing_Apps/content-security-policy-fe1a6db.md "Content Security Policy (CSP) adds an additional layer of security that can detect and mitigate certain types of attacks, such as cross-site scripting and data injection.")

