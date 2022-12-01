<!-- loio851bde42e4e1410c96abbe402fa9128c -->

# Step 1: Ready...

Let's get you ready for your journey! We bootstrap SAPUI5 in an HTML page and implement a simple "Hello World" example.



<a name="loio851bde42e4e1410c96abbe402fa9128c__section_cpm_14c_1gb"/>

## Preview

   
  
**The browser shows a "Ready" button that triggers a "Hello World" message**

 ![](images/Tutorial_Quick_Start_Step_1_9c157e9.png "The browser shows a "Ready" button that triggers a "Hello World" message") 



<a name="loio851bde42e4e1410c96abbe402fa9128c__section_zzy_mpc_1gb"/>

## Coding

You can view and download all files at [Quick Start - Step 1](https://ui5.sap.com/#/sample/sap.m.tutorial.quickstart.01/preview).



## webapp/index.html \(new\)

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Quickstart Tutorial</title>
	<script id="sap-ui-bootstrap"
		src="https://sdk.openui5.org/resources/sap-ui-core.js"
		data-sap-ui-theme="sap_belize"
		data-sap-ui-libs="sap.m"
		data-sap-ui-resourceroots='{"Quickstart": "./"}'
		data-sap-ui-onInit="module:Quickstart/index"
		data-sap-ui-compatVersion="edge"
		data-sap-ui-async="true">
	</script>
</head>
<body class="sapUiBody" id="content"></body>
</html>
```

In your development environment, create the folder `webapp`. In this folder, create an `index.html` file, and paste the above code to this file.

With the `script` tag, we load and initialize SAPUI5 with typical bootstrap parameters. We define, for example, a theme, control libraries, as well as performance and compatibility flags.

First, we need a source to load SAPUI5 from. To keep things convenient, we use the path to our Content Delivery Network \(CDN\) for OpenUI5.

The bootstrap property `resourceroots` defines the namespace for all resources of the app. This way, we can easily reference additional files that we are about to create in this step.

The `index` module that we load with the `onInit` parameter will hold the application logic.

The `body` tag is defined with the `sapUiBody` class and the `content` ID. This is where we will add the content of the app in the next steps.

> ### Tip:  
> For more information about bootstrapping from the CDN, see [Variant for Bootstrapping from Content Delivery Network](../04_Essentials/variant-for-bootstrapping-from-content-delivery-network-2d3eb2f.md).



<a name="loio851bde42e4e1410c96abbe402fa9128c__section_fh4_t23_1gb"/>

## webapp/index.js \(New\)

```js
sap.ui.define([
	"sap/m/Button",
	"sap/m/MessageToast"
], function (Button, MessageToast) {
	"use strict";

	new Button({
		text: "Ready...",
		press: function () {
			MessageToast.show("Hello World!");
		}
	}).placeAt("content");

});
```

In your `webapp` folder, create a new file `index.js` that will be called as soon as SAPUI5 is loaded and initialized.

We load two UI controls - a button and a message toast - and place the button in the element with the `content` ID. The button is defined with a `text` property and a callback attached to its `press` event.

Now, start the webserver, serve the sources of the \`webapp\` folder, and open the `index.html` file in your browser. When the button is pressed, a message toast with the "Hello World" message is shown at the bottom of the screen.

**Related Information**  


[Development Environment](../05_Developing_Apps/development-environment-7bb04e0.md "This part of the documentation introduces you to some common and recommended use cases for the installation, configuration, and setup of SAPUI5 development environments.")

[Variant for Bootstrapping from Content Delivery Network](../04_Essentials/variant-for-bootstrapping-from-content-delivery-network-2d3eb2f.md "SAPUI5 can either be loaded locally with a relative path from an SAP Web server or externally from a Content Delivery Network (CDN).")

