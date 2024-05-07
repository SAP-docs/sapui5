<!-- loioddbceecd7d3d42eea9cf78a820a238fb -->

# Step 3: Controls

Now it is time to build our first little UI by replacing the “Hello World” text in the HTML body by the SAPUI5 control `sap/m/Text`. In the beginning, we will use the JavaScript control API to set up the UI, the control instance is then placed into the HTML body.



## Preview

  
  
**The "Hello World" text is now displayed by a SAPUI5 control**

![Hello World](images/UI5_Walkthrough_Step_03_30a42d3.png "The "Hello World" text is now displayed by a SAPUI5
					control")



<a name="loioddbceecd7d3d42eea9cf78a820a238fb__section_ccm_jyv_xfb"/>

## Coding

You can view and download all files at [Walkthrough - Step 3](https://ui5.sap.com/#/entity/sap.m.tutorial.walkthrough/sample/sap.m.tutorial.walkthrough.03).



<a name="loioddbceecd7d3d42eea9cf78a820a238fb__section_dcm_jyv_xfb"/>

## webapp/index.html

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>UI5 Walkthrough</title>
	<script
		id="sap-ui-bootstrap"
		src="resources/sap-ui-core.js"
		data-sap-ui-theme="sap_horizon"
		data-sap-ui-libs="sap.m"
		data-sap-ui-compat-version="edge"
		data-sap-ui-async="true"
		data-sap-ui-on-init="module:ui5/walkthrough/index"
		data-sap-ui-resource-roots='{
			"ui5.walkthrough": "./"
		}'>
	</script>
</head>
<body class="sapUiBody" id="content">
</body>
</html>
```

The class `sapUiBody` adds additional theme-dependent styles for displaying SAPUI5 apps.



<a name="loioddbceecd7d3d42eea9cf78a820a238fb__section_yk4_kyv_xfb"/>

## webapp/index.js

```js
sap.ui.define([
	"sap/m/Text"
], (Text) => {
	"use strict";

	new Text({
		text: "Hello World"
	}).placeAt("content");
});
```

Instead of using native JavaScript to display a dialog we want to use a simple SAPUI5 control. Controls are used to define appearance and behavior of parts of the screen.

In the example above, the callback of the `init` event is where we now instantiate a SAPUI5 text control. The name of the control is prefixed by the namespace of its control library `sap/m/` and the options are passed to the constructor with a JavaScript object. For our control we set the `text` property to the value “Hello World”.

We chain the constructor call of the control to the standard method `placeAt` that is used to place SAPUI5 controls inside a node of the document object model \(DOM\) or any other SAPUI5 control instance. We pass the ID of a DOM node as an argument. As the target node we use the body tag of the HTML document and give it the ID `content`.

All controls of SAPUI5 have a fixed set of properties, aggregations, and associations for configuration. You can find their descriptions in the Demo Kit. In addition, each control comes with a set of public functions that you can look up in the API reference.

Don’t forget to remove the `<div>Hello World</div>` from the `index.html`.

> ### Note:  
> Only instances of `sap.ui.core.Control` or their subclasses can be rendered stand-alone and have a `placeAt` function. Each control extends `sap.ui.core.Element` that can only be rendered inside controls. Check the API reference to learn more about the inheritance hierarchy of controls. The API documentation of each control refers to the directly known subclasses.

**Related Information**  


[Working with Controls](../04_Essentials/working-with-controls-91f0a22.md "Controls are used to define the appearance and behavior of screen areas.")

[API Reference: `sap.m.Text`](https://ui5.sap.com/#/api/sap.m.Text)

[Samples: `sap.m.Text` ](https://ui5.sap.com/#/entity/sap.m.Text)

[API Reference: `sap.ui.core.Control`](https://ui5.sap.com/#/api/sap.ui.core.Control)

[API Reference: `sap.ui.core.Element`](https://ui5.sap.com/#/api/sap.ui.core.Element)

[API Reference: `sap.ui.base.ManagedObject`](https://ui5.sap.com/#/api/sap.ui.base.ManagedObject)

