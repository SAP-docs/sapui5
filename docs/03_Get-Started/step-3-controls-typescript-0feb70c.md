<!-- loio0feb70c39c5e4074893c294667b3f36b -->

# Step 3: Controls \(TypeScript\)

Now it is time to build our first little UI by replacing the “Hello World” text in the HTML body by the SAPUI5 control `sap/m/Text`. In the beginning, we will use the TypeScript control API to set up the UI, the control instance is then placed into the HTML body.



## Preview

  
  
**The "Hello World" text is now displayed by a SAPUI5 control**

![Hello World](images/UI5_Walkthrough_Step_03_30a42d3.png "The "Hello World" text is now displayed by a SAPUI5
					control")



<a name="loio0feb70c39c5e4074893c294667b3f36b__section_ccm_jyv_xfb"/>

## Coding

You can view all files at [OpenUI5 TypeScript Walkthrough - Step 3: Controls](https://github.com/sap-samples/ui5-typescript-walkthrough/tree/main/steps/03) and [download the solution as a zip file](https://sap-samples.github.io/ui5-typescript-walkthrough/ui5-typescript-walkthrough-step-03.zip).



<a name="loio0feb70c39c5e4074893c294667b3f36b__section_yk4_kyv_xfb"/>

## webapp/package.json

First, we need to install `@types/openui5` to get the type definitions for OpenUI5. Open a terminal in the app root folder and execute the following command:

`npm install @types/openui5 --save-dev`

This will install the type definitions for OpenUI5 and update the `package.json` file with this new development dependency.



<a name="loio0feb70c39c5e4074893c294667b3f36b__section_rpg_y4q_nzb"/>

## webapp/index.ts

We then make some changes to our `index.ts` file: We remove the `alert` method and instantiate an SAPUI5 `Text` control instead; its options are passed to the constructor with a TypeScript object. For our control we set the `text` property to the value “Hello World”.

We chain the constructor call of the control to the standard `placeAt` method that is used to place SAPUI5 controls inside a node of the document object model \(DOM\) or any other SAPUI5 control instance. We pass the `content` ID as an argument.

```js
import Text from "sap/m/Text";

new Text({
    text: "Hello World"
}).placeAt("content");
```

Controls are used to define appearance and behavior of parts of the screen.

All controls of SAPUI5 have a fixed set of properties, aggregations, and associations for configuration. You can find their descriptions in the Demo Kit. In addition, each control comes with a set of public functions that you can look up in the API reference.

> ### Note:  
> Only instances of `sap.ui.core.Control` or their subclasses can be rendered stand-alone and have a `placeAt` function. Each control extends `sap.ui.core.Element` that can only be rendered inside controls. Check the API reference to learn more about the inheritance hierarchy of controls. The API documentation of each control refers to the directly known subclasses.



<a name="loio0feb70c39c5e4074893c294667b3f36b__section_dcm_jyv_xfb"/>

## webapp/index.html

We replace the `<div>` tags in our `webapp/index.html` file with a `<body>` tag and assign it the ID `content`. The body tag of the HTML document thus becomes the target node for the text control we defined in the `index.ts` script.

We also add the `sapUiBody` class, which provides additional theme-dependent styles.

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
		data-sap-ui-compatVersion="edge"
		data-sap-ui-async="true"
		data-sap-ui-onInit="module:ui5/walkthrough/index"
		data-sap-ui-resourceroots='{
			"ui5.walkthrough": "./"
		}'>
	</script>
</head>
<body class="sapUiBody" id="content">
</body>
</html>
```

In the example above, the callback of the `init` event is where we now instantiate an SAPUI5 text control.



<a name="loio0feb70c39c5e4074893c294667b3f36b__section_anl_htd_lzb"/>

## UI5 Tooling

As we now use the `sap.m` library with our app, we need to update our UI5 Tooling setup with a dependency to this library.

Open a terminal in the app root folder and execute the following command:

`ui5 add sap.m`

This will configure the `sap.m` OpenUI5 library as a dependency in our `ui5.yaml`.

**Related Information**  


[Working with Controls](../04_Essentials/working-with-controls-91f0a22.md "Controls are used to define the appearance and behavior of screen areas.")

[API Reference: `sap.m.Text`](https://ui5.sap.com/#/api/sap.m.Text)

[Samples: `sap.m.Text` ](https://ui5.sap.com/#/entity/sap.m.Text)

[API Reference: `sap.ui.core.Control`](https://ui5.sap.com/#/api/sap.ui.core.Control)

[API Reference: `sap.ui.core.Element`](https://ui5.sap.com/#/api/sap.ui.core.Element)

[API Reference: `sap.ui.base.ManagedObject`](https://ui5.sap.com/#/api/sap.ui.base.ManagedObject)

[TypeScript Definitions for OpenUI5](https://www.npmjs.com/package/@types/openui5)

