<!-- loio4cde849dc18949b69bbe152a0aaa19c6 -->

# Step 1: No Data Binding

In this step, we simply place some text on the screen using a standard `sap.m.Text` control. The text in this control is a hard-coded part of the control's definition; therefore, this is not an example of data binding!



## Preview

  
  
**Screen with text**

![](images/Tutorial_Data_Binding_Step_1_6d391d5.png "Screen with text")



## Coding

You can view and download all files in the Demo Kit at [Data Binding - Step 1](https://ui5.sap.com/#/entity/sap.ui.core.tutorial.databinding/sample/sap.ui.core.tutorial.databinding.01).



<a name="loio4cde849dc18949b69bbe152a0aaa19c6__section_ic3_zll_5fb"/>

## webapp/index.html \(New\)

```html
<!DOCTYPE HTML>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Data Binding</title>
	<script id="sap-ui-bootstrap"
		src="resources/sap-ui-core.js"
		data-sap-ui-theme="sap_belize"
		data-sap-ui-libs="sap.m"
		data-sap-ui-resourceroots='{"sap.ui.demo.db": "./"}'
		data-sap-ui-compatVersion="edge"
		data-sap-ui-async="true">
	</script>
	<script src="index.js"></script>
</head>
<body class="sapUiBody" id="content"></body>
</html>
```

Create a new folder `webapp` which will contain all sources of the app that we will create throughout this tutorial, and create the `index.html` file within this folder.



<a name="loio4cde849dc18949b69bbe152a0aaa19c6__section_jc3_zll_5fb"/>

## webapp/index.js \(New\)

```js
sap.ui.require([
	"sap/m/Text"
], function (Text) {
	"use strict";

	// Attach an anonymous function to the SAPUI5 'init' event
	sap.ui.getCore().attachInit(function () {
		// Create a text UI element that displays a hardcoded text string
		new Text({text: "Hi, my name is Harry Hawk"}).placeAt("content");
	});
});
```

Create a new `index.js` file that will contain the application logic for this tutorial. We start by placing the `sap.m.Text` control into the html content. Since the value of the control's text property has been hard-coded, it is unrelated to any data that might exist within a model object. Therefore, data binding is **not** being used here.

