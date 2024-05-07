<!-- loio2a46b7567a73457c81b1b67741146063 -->

# Step 10: Descriptor for Applications \(TypeScript\)

All application-specific configuration settings will now further be put in a separate descriptor file called `manifest.json`. This clearly separates the application coding from the configuration settings and makes our app even more flexible. For example, all SAP Fiori applications are realized as components and come with a descriptor file in order to be hosted in the SAP Fiori launchpad.

The SAP Fiori launchpad acts as an application container and instantiates the app without having a local HTML file for the bootstrap. Instead, the descriptor file will be parsed and the component is loaded into the current HTML page. This allows several apps to be displayed in the same context. Each app can define local settings, such as language properties, supported devices, and more. And we can also use the descriptor file to load additional resources and instantiate models like our `i18n` resource bundle.



## Preview

  
  
**An input field and a description displaying the value of the input field \(No visual changes to last step\)**

![An input field and a description displaying the value of the input field (No visual changes to last step)](images/UI5_Walkthrough_Step_10_7b2aef8.png " An input field and a description displaying the value of the input field (No
					visual changes to last step)")



## Coding

You can view all files at [OpenUI5 TypeScript Walkthrough - Step 10: Descriptor for Applications](https://github.com/sap-samples/ui5-typescript-walkthrough/tree/main/steps/10) and [download the solution as a zip file](https://sap-samples.github.io/ui5-typescript-walkthrough/ui5-typescript-walkthrough-step-10.zip).



<a name="loio2a46b7567a73457c81b1b67741146063__section_oxj_qkk_lzb"/>

## webapp/i18n/i18n.properties

In our text bundle, we include two new name-value pairs: `appTitle` for the title of our app and `appDescription` for a brief description. These texts will be used in our app descriptor later on. To improve readability, we also add comments to separate the bundle texts based on their meaning.

```ini
# App Descriptor
appTitle=Hello World
appDescription=A simple walkthrough app that explains the most important concepts of UI5

# Hello Panel
showHelloButtonText=Say Hello
helloMsg=Hello {0}

```



## webapp/manifest.json

As mentioned in Step 1 the manifest file is used by SAPUI5 to instantiate the component. We have already configured the essential attributes of the file so that it can be used with UI5 Tooling. Now, we'll add further attributes that are important for creating a proper UI component in SAPUI5.

We enhance the `sap.app` namespace by adding configuration for the following application-specific attributes:

-   `i18n`: This property is an attribute to configure internationalization settings. It is optional and only necessary if the manifest contains text symbols \(placeholders in `{{...}}` syntax\). The `i18n` property has the following subsettings:

    -   The `bundleName` parameter specifies the name of the resource bundle file that contains the text symbols for the descriptor. The file is referenced using a dot-notation namespace. We store our texts for the app descriptor in the same resource bundle as the remaining texts, so we reference the properties file stored in the `i18n` folder.

    -   The `supportedLocales` property defines an array of locales supported by the application \(for example, `en_GB`, `en-GB`, or `en`\). This helps optimizing the loading performance of resource bundles as it controls the language fallback chain and prevents unnecessary and potentially failing requests. In our application, we only use the base `i18n.properties` file for simplicity, so we set this property to an empty string. This ensures that the browser does not attempt to load additional `i18n_*.properties` files based on your browser's settings and your locale.

    -   The `fallbackLocale` property specifies the fallback locale to be used if the user's locale is not present in the list of supported locales or if the required text can't be found in any other resource bundle. The fallback locale must be listed in the `supportedLocales`. In our application, we specify an empty string as per default the `fallbackLocale` is set to "`en`"


-   `title`: In Step 1 we recommended making the title language-dependent. We now implement this by referencing the `appTitle` text from the resource bundle using the handlebar syntax: `{{key}}`

-   `description`: Similarly, we make the description text language-dependent by referencing the `appDescription` text from the resource bundle using the handlebar syntax: `{{key}}`

    > ### Remember:  
    > Properties of the resource bundle are enclosed in two curly brackets in the descriptor. This is not an SAPUI5 data binding syntax, but a variable reference to the resource bundle in the descriptor in handlebars syntax. The referred texts are not visible in the app built in this tutorial but can be read by an application container like the SAP Fiori launchpad.


In addition to the `sap.app` namespace, there are two other important namespaces:

The **`sap.ui`** namespace is used for UI-specific attributes and comes with the following main attributes:

-   `technology`: This property specifies the technology used for the application; its value is `UI5`

-   `deviceTypes` \(mandatory\): This property defines the supported device types for the application. It's an object that contains three Boolean properties: `desktop`, `tablet`, and `phone`. Each property indicates whether the application is designed to be used on that particular device type. We define all three device types as `true`, which means that our application is intended to be used on desktops, tablets, and phones.

    > ### Note:  
    > By configuring the `deviceTypes` property, you can ensure that your application's user interface is optimized for different device types, providing a consistent and responsive experience across various devices.


The **`sap.ui5`** namespace adds SAPUI5-specific configuration parameters that are automatically processed by SAPUI5. The most important parameters are:

-   `dependencies` \(mandatory\): This section defines the dependencies of the component. It comes with the following subsettings:

    -   The `minUI5Version` property is mandatory and specifies the minimum version of SAPUI5 required by the component. Our component requires SAPUI5 version 1.20 as a minimum.

    -   The `libs` settings declare the libraries that the SAPUI5 core should load for use in the component. To benefit from the asynchronous library preload, it's essential to add all obligatory libraries here. You can set the `lazy` parameter to `true` to indicate that the lib shall be lazy-loaded, so that it only gets loaded once needed. If your app requires a minimum version of the lib, you also need to specify the `minVersion` for information purposes. We declare here the two libraries `sap.ui.core` and `sap.m` as dependencies to be loaded directly when starting the component.


    > ### Note:  
    > Make sure that you don't load too many dependencies. In most apps it's enough to load the `sap.ui.core` and `sap.m` libraries by default, and add any additional libraries only when needed.

-   `rootView`: This section defines the root view of the application. The root view is the initial view that is displayed when the component is loaded. It specifies either the view name as a string for XML views, or a view configuration object with the properties `viewName` for the view name as a string, `type` for the view type, `id` for the view ID, and possibly `async` as well as other properties of `sap.ui.core.mvc.view`. We configure our app view as the root view and add the `app` ID to it.

-   `models`: This section is used to define the models that will be created or destroyed during the lifecycle of the app. Each model is identified by a unique key, and an empty string \(`""`\) as key is used to represent the default model. For each model, you need to specify its type, and depending on your chosen type, you may also need to provide additional settings.

    In our current scenario, we only have one model called `i18n`, which is a resource model. To configure it, we set its name as its key and specify its type as `sap.ui.model.resource.ResourceModel`. We can reuse the same settings that we already defined for the `i18n` properties in the `sap.app` namespace.


```
{
    "_version": "1.60.0",
    "sap.app": {
        "id": "ui5.walkthrough",
        "type": "application",
        "i18n": {
            "bundleName": "ui5.walkthrough.i18n.i18n",
            "supportedLocales": [
                ""
            ],
            "fallbackLocale": ""
        },
        "title": "{{appTitle}}",
        "description": "{{appDescription}}",
        "applicationVersion": {
            "version": "1.0.0"
        }
    },
    "sap.ui": {
        "technology": "UI5",
        "deviceTypes": {
            "desktop": true,
            "tablet": true,
            "phone": true
        }
    },
    "sap.ui5": {
        "dependencies": {
            "minUI5Version": "1.120",
            "libs": {
                "sap.ui.core": {},
                "sap.m": {}
            }
        },
        "rootView": {
            "viewName": "ui5.walkthrough.view.App",
            "type": "XML",
            "id": "app"
        },
        "models": {
            "i18n": {
                "type": "sap.ui.model.resource.ResourceModel",
                "settings": {
                    "bundleName": "ui5.walkthrough.i18n.i18n",
                    "supportedLocales": [
                        ""
                    ],
                    "fallbackLocale": ""
                }
            }
        }
    }
}
```

> ### Note:  
> In this tutorial, we only introduce the most important settings and parameters of the descriptor file. In some development environments you may get validation errors because some settings are missing - you can ignore those in this context.



## webapp/Component.ts

To apply the settings specified in the app descriptor to the component, we need to include the descriptor file in the component's metadata. To do this, we add a `manifest` property to the `metadata` section of the component and set it to `json`. This property acts as a reference to the `manifest.json` file that will be loaded and used.

Now that the resource model is automatically instantiated based on the configuration in the app descriptor, we can safely remove the corresponding code block from the `init` method in our component controller. This also means that we can remove the import statement for the `ResourceModel` module from `sap/ui/model/resource/ResourceModel`, as it is no longer needed. Additionally, we can remove the `createContent` call, since the configuration of the rootView is specified in the app descriptor and therefore makes the implementation in this method unnecessary.

```js
import UIComponent from "sap/ui/core/UIComponent";
import JSONModel from "sap/ui/model/json/JSONModel";

/**
 * @namespace ui5.walkthrough
 */
export default class Component extends UIComponent {
    public static metadata = {
        "interfaces": ["sap.ui.core.IAsyncContentCreation"],
        "manifest": "json" 
    };
    init(): void {
        // call the init function of the parent
        super.init();
        
        // set data model
        const data = {
            recipient: {
                name: "World"
            }
        };
        const dataModel = new JSONModel(data);
        this.setModel(dataModel);
    };
};
```



<a name="loio2a46b7567a73457c81b1b67741146063__section_ok2_4n5_zgb"/>

## webapp/index.html

Let's explore how we can create a component in a simple and straightforward way directly in the HTML markup of our `index.html` file. To do this, we need to make a few changes in our HTML document.

First, we need to remove the reference to the `ui5/walkthrough/index` module from the `data-sap-ui-on-init` attribute. Instead, we set it to the `sap/ui/core/ComponentSupport` module. Next, we add a `div` tag to the body of our HTML file. Inside, we add a special data attribute called `data-sap-ui-component`. This attribute is important because the `sap/ui/core/ComponentSupport` module scans the HTML elements for it. Any element marked with it will be considered a container element into which a `sap/ui/core/ComponentContainer` is inserted. We can also use additional data attributes to define the constructor arguments for the `ComponentContainer` instance. We transfer the arguments used to configure the `CompontentContainer` instance in the `index.ts` file to data attributes on our `div` tag.

It's worth noting that the `ComponentSupport` module enforces asynchronous loading of the respective component, so we don't need to set the `async` attribute to `true` in this case. It also sets the `autoPrefixId` property to `true` by default, so we don't need to set this attribute here either.

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>UI5 TypeScript Walkthrough</title>
	<script
		id="sap-ui-bootstrap"
		src="resources/sap-ui-core.js"
		data-sap-ui-theme="sap_horizon"
		data-sap-ui-compat-version="edge"
		data-sap-ui-async="true"
		data-sap-ui-on-init="module:sap/ui/core/ComponentSupport"
		data-sap-ui-resource-roots='{
			"ui5.walkthrough": "./"
		}'>
	</script>
</head>
<body class="sapUiBody" id="content">
	<div data-sap-ui-component data-name="ui5.walkthrough" data-id="container" data-settings='{"id" : "walkthrough"}'></div>
</body>
</html>
```

We can delete our `index.ts`, because the descriptor now takes care of everything.



## Conventions

-   The descriptor file is named `manifest.json` and stored as a JSON file.

-   The descriptor file is located in the `webapp` folder.

-   Use translatable strings for the title and the description of the app.


**Related Information**  


[Descriptor for Applications, Components, and Libraries \(manifest.json\)](../04_Essentials/descriptor-for-applications-components-and-libraries-manifest-json-be0cf40.md "The descriptor for applications, components, and libraries (in short: app descriptor) is inspired by the WebApplication Manifest concept introduced by the W3C. The descriptor provides a central, machine-readable, and easy-to-access location for storing metadata associated with an application, an application component, or a library.")

[Supported Locales and Fallback Chain](../04_Essentials/supported-locales-and-fallback-chain-ec753bc.md "You can configure a list of supported locales and a fallback locale in your app’s manifest to control the loading of resource bundles and avoid ‘404 Not Found’ network responses.")

[Terminologies](../04_Essentials/terminologies-eba8d25.md "By defining terminologies together with additional resource bundles, an application can easily be switched from one scenario or industry to another.")

[Declarative API for Initial Components](../04_Essentials/declarative-api-for-initial-components-82a0fce.md "The declarative API enables you to define the initially started component directly in the HTML markup.")

[API Reference: `sap.ui.core.ComponentSupport`](https://ui5.sap.com/#/api/sap.ui.core.ComponentSupport)

[Make Your App CSP Compliant](make-your-app-csp-compliant-1f81a09.md "CSP stands for Content Security Policy and is a security standard to prevent cross-site scripting or other code injection attacks.")

