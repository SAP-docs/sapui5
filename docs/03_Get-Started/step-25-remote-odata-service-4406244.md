<!-- loio44062441f3bd4c67a4f665ae362d1109 -->

# Step 25: Remote OData Service

So far we have worked with local JSON data, but now we will access a real OData service to visualize remote data.



In the real world, data often resides on remote servers and is accessed via an OData service. We will add a data source configuration to the manifest and replace the JSONModel type for our `invoice` model with the publicly available Northwind OData service to visualize remote data. You will be surprised how little needs to be changed in order to make this work!

> ### Note:  
> If you cannot get it to run, don't worry too much, the remaining steps will also work with the local JSON data you have used so far. In [Step 26: Mock Server Configuration](step-26-mock-server-configuration-bae9d90.md), you will learn how to simulate a back-end system to achieve a similar working scenario. However, you should at least read this chapter about remote OData services to learn about non-local data sources.



## Preview

  
  
**Products from the OData invoices test service are now shown within our app**

![The graphic has an explanatory text.](images/UI5_Walkthrough_Step_25_5b76bb4.png "Products from the OData invoices test service are now shown within our
					app")



<a name="loio44062441f3bd4c67a4f665ae362d1109__section_umn_sdl_syb"/>

## Coding

You can view and download all files at [Walkthrough - Step 25](https://ui5.sap.com/#/entity/sap.m.tutorial.walkthrough/sample/sap.m.tutorial.walkthrough.25).



<a name="loio44062441f3bd4c67a4f665ae362d1109__section_q14_5fl_syb"/>

## Install Proxy Server

In this step, we want to use the publicly available Northwind OData service located at `https://services.odata.org/V2/Northwind/Northwind.svc/`. Therefore, our URI points to the official Northwind OData service. In order to avoid cross-origin resource sharing, the typical procedure is to use a proxy in UI5 Tooling and maintain only a path in the `URI` property of the data source of our app.

A bunch of proxy solutions are available from the UI5 community as [UI5 Tooling custom middleware extensions](https://bestofui5.org/#/packages?tokens=proxy:tag). In this tutorial we'll use [ui5-middleware-simpleproxy](https://bestofui5.org/#/packages/ui5-middleware-simpleproxy). Open a new terminal window in your app root folder and execute `npm i -D ui5-middleware-simpleproxy` to install this package as a new development dependency in your `package.json`.



<a name="loio44062441f3bd4c67a4f665ae362d1109__section_mcv_bhl_syb"/>

## ui5.yaml

```
specVersion: '3.0'
metadata:
  name: ui5.walkthrough
type: application
framework:
  name: OpenUI5
  version: "1.125.1"
  libraries:
    - name: sap.m
    - name: sap.ui.core
    - name: themelib_sap_horizon
server:
  customMiddleware:
  - name: ui5-middleware-simpleproxy
    afterMiddleware: compression
    mountPath: /V2
    configuration:
      baseUri: "https://services.odata.org"
```

The `ui5.yaml` configuration file was automatically generated in the app root folder during Step 1 of this tutorial when we executed the `ui5 init` command. We now configure our proxy in the `ui5.yaml` file. The `mountPath` property configures which URLs will be caught by the proxy. The `configuration/baseUri` property stores the real server address.



<a name="loio44062441f3bd4c67a4f665ae362d1109__section_vmn_sdl_syb"/>

## webapp/manifest.json

```
{
	...
	"sap.app": {
		...,
		"dataSources": {
			"invoiceRemote": {
				"uri": "V2/Northwind/Northwind.svc/",
				"type": "OData",
				"settings": {
					"odataVersion": "2.0"
				}
			}
		}
	},
	...
	"sap.ui5": {
		...
		"models": {
			...
			"invoice": {
				"dataSource": "invoiceRemote"
			}
		}
		...
```

In the `sap.app` section of the descriptor file, we add a data source configuration. With the `invoiceRemote` key, we specify a configuration object that allows automatic model instantiation. We specify the type of the service \(`OData`\) and the model version \(`2.0`\).

In the `models` section, we replace the content of the `invoice` model. This key is still used as model name when the model is automatically instantiated during the component initialization. However, the `invoiceRemote` value of the `dataSource` key is a reference to the data source section that we specified above. This configuration allows the component to retrieve the technical information for this model during the start-up of the app.

Our component now automatically creates an instance of `sap.ui.model.odata.v2.ODataModel` according to the settings we specified above, and makes it available as a model named `invoice`. When you use the `invoiceRemote` data source, the `ODataModel` fetches the data from the real Northwind OData service. The invoices we receive from the Northwind OData service have identical properties as the JSON data we used previously \(except for the `status` property, which is not available in the Northwind OData service\).

> ### Note:  
> If you want to have a default model on the component, you can change the name of the model to an empty string in the descriptor file. Automatically instantiated models can be retrieved by calling `this.getModel` in the component. In the controllers of component-based apps you can call `this.getView().getModel()` to get the automatically instantiated model. For retrieving a named model you have to pass on the model name defined in the descriptor file to `getModel`, that is, in the component you would call `this.getModel("invoice")` to get our automatically generated `invoice` model that we defined in the descriptor.

**Related Information**  


[OData Home Page](http://www.odata.org/)

[API Reference: `sap.ui.model.odata.v2.ODataModel`](https://ui5.sap.com/#/api/sap.ui.model.odata.v2.ODataModel)

[First-Aid Kit](../04_Essentials/first-aid-kit-dfe4f79.md "This section contains the most common issues that you might face when developing SAPUI5 apps and how to solve them.")

[UI5 simple proxy middleware](https://bestofui5.org/#/packages/ui5-middleware-simpleproxy)

