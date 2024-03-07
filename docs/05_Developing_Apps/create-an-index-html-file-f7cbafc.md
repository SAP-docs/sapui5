<!-- loiof7cbafc9a76140ec8fc55b51a63cf467 -->

# Create an index.html File

A minimalistic `index.html` file is needed to test the project configuration. This file contains the SAPUI5 bootstrap and an `sap.m.Text` control that displays the text "**SAPUI5 is loaded successfully!**".

> ### Caution:  
> SAP Web IDE is no longer available via SAP Business Technology Platform trial accounts. Any references to SAP Web IDE in this documentation are only relevant for you if you have access to SAP Web IDE through a productive SAP BTP account. Please consider SAP Business Application Studio as an alternative. See [App Development Using SAP Business Application Studio](app-development-using-sap-business-application-studio-6bbad66.md).

1.  Choose the *New Folder* icon in the header toolbar and enter `src` as the folder name.
2.  Select the newly created folder and create a new `index.html` file inside it by choosing the *New File* icon.
3.  Paste the following code in the newly created `index.html` file and select *Save*:

    **index.html**

    ```html
    <!DOCTYPE html>
    <html>
    	<head>
    		<meta charset="utf-8">
    		<title>SAPUI5 Walkthrough</title>
    		<script
    			id="sap-ui-bootstrap"
    			src="/resources/sap-ui-core.js"
    			data-sap-ui-theme="sap_horizon"
    			data-sap-ui-libs="sap.m"
    			data-sap-ui-compatVersion="edge"
                   data-sap-ui-async="true"
                   data-sap-ui-onInit="module:my/app/main"
                   data-sap-ui-resourceRoots='{"my.app": "./"}'
     			></script>
    	</head>
    	<body class="sapUiBody" id="content">
    	</body>
    </html>
    ```

4.  Create new file `main.js` and paste the following code into it:

    **main.js**

    ```js
    sap.ui.define(['sap/m/Text'], function(Text) {
        new Text({
            text: "OpenUI5 is loaded successfully!"
        }).placeAt("content");
    });
    ```


> ### Caution:  
> Adapt the path where the resources are located \(`src="/resources/sap-ui-core.js"`\) according to your installation. For OpenUI5 you can use `src="https://sdk.openui5.org/resources/sap-ui-core.js"`. For accessing SAPUI5 on the SAP Business Technology Platform, for example, use `src="https://ui5.sap.com/resources/sap-ui-core.js"`. 
> 
> You can use this reference to the latest stable version of SAPUI5 for the tutorial or for testing purposes, but never use this for productive use. In an actual app, you always have to specify an SAPUI5 version explicitly.
> 
> For more information, see [Variant for Bootstrapping from Content Delivery Network](../04_Essentials/variant-for-bootstrapping-from-content-delivery-network-2d3eb2f.md).

