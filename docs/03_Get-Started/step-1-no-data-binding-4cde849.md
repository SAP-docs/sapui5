<!-- loio4cde849dc18949b69bbe152a0aaa19c6 -->

# Step 1: No Data Binding

In this step, we simply place some text on the screen using a standard `sap.m.Text` control. The text in this control is a hard-coded part of the control's definition; therefore, this is not an example of data binding!



## Preview

  
  
**Screen with text**

![](images/Tutorial_Data_Binding_Step_1_6d391d5.png "Screen with text")



## Coding

You can view and download all files in the Demo Kit at [Data Binding - Step 1](https://ui5.sap.com/#/entity/sap.ui.core.tutorial.databinding/sample/sap.ui.core.tutorial.databinding.01).

1.  Create a folder on your local machine which will contain all the sources of the app we're going to build. We'll refer to this folder as the “app root folder”.
2.  Create a new file called `package.json` which will enable you to execute commands and consume packages from the[npm registry](https://www.npmjs.com/) via the npm command line interface. Enter the following content:

    **package.json \(New\)**

    ```
    {
      "name": "ui5.databinding",
      "version": "1.0.0",
      "description": "The UI5 data binding application",
      "scripts": {
          "start": "ui5 serve -o index.html"
      }
    }
    
    ```

3.  Create a new folder named `webapp` in the app root folder. It will contain all the sources that become available in the browser later. We'll refer to this folder as the "webapp folder".

4.  Create a new HTML file named `index.html` in your webapp folder and enter the following content:

    **webapp/index.html \(New\)**

    ```html
    <!DOCTYPE HTML>
    <html>
    <head>
    	<meta charset="utf-8">
    	<meta name="viewport" content="width=device-width, initial-scale=1.0">
    	<title>Data Binding</title>
    	<script id="sap-ui-bootstrap"
    		src="resources/sap-ui-core.js"
    		data-sap-ui-theme="sap_horizon"
    		data-sap-ui-libs="sap.m, sap.ui.layout"
    		data-sap-ui-resourceroots='{"ui5.databinding": "./"}'
    		data-sap-ui-compatVersion="edge"
    		data-sap-ui-async="true">
    	</script>
    	<script src="index.js"></script>
    </head>
    <body class="sapUiBody" id="content"></body>
    </html>
    ```

5.  Create a new `index.js` file that will contain the application logic for this tutorial. We start by placing the `sap.m.Text` control into the html content. Since the value of the control's text property has been hard-coded, it is unrelated to any data that might exist within a model object. Therefore, data binding is **not** used here.

    **webapp/index.js \(New\)**

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

6.  Create a new file named `manifest.json` in the webapp folder; it's also known as the "app descriptor". All application-specific configuration options which we'll introduce in this tutorial will be added to this file. Enter the following content:

    **webapp/manifest.json \(New\)**

    ```
    {
      "_version": "1.58.0",
      "sap.app": {
        "id": "ui5.databinding"
      }
    }
    ```

7.  Open a terminal in the app root folder and execute `npm i -D @ui5/cli` to install UI5 Tooling.

8.  Execute `ui5 init` in the app root folder.

9.  Execute `ui5 use OpenUI5`

10. Execute `ui5 add sap.m sap.ui.core sap.ui.layout themelib_sap_horizon`

11. Execute `npm start` to start the web server and to open a new browser window hosting your newly created `index.html`.


