<!-- loio491bd9c70b9f4c4d913c8c7b4a970833 -->

# Deprecated Factories Replacement

Overview of the replacement of global functions with the factory functions

The AMD module syntax already avoids Globals and enforces the strict dependency declaration. The following table shows how APIs which use synchronous requests to fetch modules or resources internally, can be replaced with asynchronous alternatives. The WHATWG has already deprecated the use of synchronous requests in the browser main thread, so this replacement prepares your applications for the removal of synchronous requests.

The SAPUI5 framework by default uses synchronous requests internally in several places. Most have already been replaced by asynchronous alternatives, or prepared to exchange the synchronous behaviour shown below. The asynchronous adoption starts from the beginning with the bootstrap script tag, where the `async` configuration parameter should be set to `true`. The examples below show only the most frequently used synchronous APIs. There are more of these APIs, and most often the asynchronous alternatives return a `Promise` that can be used to retrieve the former return value.


<table>
<tr>
<th valign="top">

Legacy, synchronous API

</th>
<th valign="top">

Modern API

</th>
</tr>
<tr>
<td valign="top" colspan="2">

Components

</td>
</tr>
<tr>
<td valign="top">

```
var oComponentInstance = sap.ui.component({
    name: "my.comp"
});
```



</td>
<td valign="top">

```
sap.ui.require(["sap/ui/core/Component"], (Component)=> {
    Component.create({
        name: "my.comp"
    }).then((oComp) => {/*...*/});
});
```

Alternatively, migrate to `componentUsages` with an additional adaption in the `manifest.json` file:

```
createContent: function() {
   var oReuseComponentPromise = this.createComponent({
      "usage": "reuse"
  }).then((oComp) => {/*...*/});
}
```



</td>
</tr>
<tr>
<td valign="top">

```
var oComponentClass = sap.ui.component.load({
    name: "my.comp"
});
```



</td>
<td valign="top">

```
sap.ui.require(["sap/ui/core/Component"], (Component) => {
    Component.load({
        name: "my.comp"
    }).then((oClass) => {
        var oComponentInstance = new oClass({/*...*/});
    });
});
```



</td>
</tr>
<tr>
<td valign="top">

```
var oComponentInstance = sap.ui.component("my-comp-id");
```



</td>
<td valign="top">

```
sap.ui.require(["sap/ui/core/Component"], (Component) => {
    var oComponentInstance = Component.get("my-comp-id");
});
```



</td>
</tr>
<tr>
<td valign="top" colspan="2">

i18n texts

</td>
</tr>
<tr>
<td valign="top">

```
jQuery.sap.resources({
    url: "mybundle.properties"
});
```



</td>
<td valign="top">

```
// sap/ui/Resources -> sap/base/i18n/ResourceBundle

sap.ui.require(["sap/base/i18n/ResourceBundle"], (Resource) => {
    ResourceBundle.create({
        url: "mybundle.properties",
	   async: true
    }).then((oResource) => {/*...*/});
});
```



</td>
</tr>
<tr>
<td valign="top" colspan="2">

Views

</td>
</tr>
<tr>
<td valign="top">

```
var oView = sap.ui.view({
    viewName: "my.View",
    type: "XML"
});
```



</td>
<td valign="top">

```
sap.ui.require(["sap/ui/core/mvc/View"], (View) => {
    View.create({ 
        viewName: "my.View",
        type: "XML"
    }).then((oView) => {/*...*/});
});
```



</td>
</tr>
<tr>
<td valign="top">

```
var oView = sap.ui.xmlview({
    viewName: "my.View"
});
```



</td>
<td valign="top">

```
sap.ui.require(["sap/ui/core/mvc/XMLView"], (XMLView) => {
    XMLView.create({ 
        viewName: "my.View"
    }).then((oView) => {/*...*/});
});
```



</td>
</tr>
<tr>
<td valign="top">

```
var oView = sap.ui.jsview({							
    viewName: "my.View"						
});
```



</td>
<td valign="top">

For defining views, use `View.extend`. For loading and creating a view instance, use `View.create`. Refer also to the dedicated [Typed View](typed-view-e6bb33d.md) documentation and the [code sample](https://ui5.sap.com/#/entity/sap.ui.core.mvc.View/sample/sap.ui.core.sample.View.navigationTypedView).

```
sap.ui.define(["sap/ui/core/mvc/View", "sap/m/Panel"], function(View, Panel){					
    return View.extend("my.View", {

		// define, which controller to use
		getControllerName: function() {
			return "my.Controller";
		},

		// whether the ID of content controls should be prefixed automatically with the view ID
		getAutoPrefixId: function() {
			return true; // default is false
		},

		// create view content and return the root control(s)
		createContent: async function() {
			const someControl = await somethingAsync();
			return new Panel({
				content: [someControl, /*...*/]
			});
    	}						
    });
});
```

```
sap.ui.require(["sap/ui/core/mvc/View"], (View) => {
    View.create({ 		
        viewName: "module:my/View"			
    }).then((oView) => {/*...*/});
});
```



</td>
</tr>
<tr>
<td valign="top" colspan="2">

Controllers

</td>
</tr>
<tr>
<td valign="top">

```
var oController = sap.ui.controller({/*...*/});
```



</td>
<td valign="top">

To define an `sap/ui/core/mvc/Controller` subclass, you can simply extend it:

```
sap.ui.require(["sap/ui/core/mvc/Controller"], (Controller) => {
    return Controller.extend("my.sample.ControllerClass", {

        /* lifecycle hooks, controller methods etc. */
        onInit: function() {/*...*/}
    });
});
```

To manually instantiate a Controller class, you can use the `Controller.create()` factory function:

```
sap.ui.require(["sap/ui/core/mvc/Controller"], (Controller) => {
    Controller.create({ 
        // ...
    }).then((oController) => {/*...*/});
});
```



</td>
</tr>
<tr>
<td valign="top" colspan="2">

Extension Points

</td>
</tr>
<tr>
<td valign="top">

```
var aControls = sap.ui.extensionpoint(/*...*/);
```



</td>
<td valign="top">

```
sap.ui.require(["sap/ui/core/ExtensionPoint"], (ExtensionPoint) => {
    ExtensionPoint.load({ 
        async: true;
        // ...
    }).then((aControls) => {/*...*/});
});
```



</td>
</tr>
<tr>
<td valign="top" colspan="2">

Fragments

</td>
</tr>
<tr>
<td valign="top">

```
// generic factory function
var aControls = sap.ui.fragment({ 
    name: "my.fragment",
    type: "XML"
});
```

```
// JS fragments
var aControls = sap.ui.jsfragment({ 
    name: "my.fragment"
});
```

```
// XML Fragments
var aControls = sap.ui.xmlfragment({ 
    name: "my.fragment"
});
```



</td>
<td valign="top">

If you're instantiating your fragment inside a controller which extends `sap.ui.core.mvc.Controller`, you can use the `loadFragment` function:

```
sap.ui.define(["sap/ui/core/mvc/Controller"], (Controller) => {
    return Controller.extend("my.MyController", {

        onInit: function() {
            // Beware: The controller's "onInit" lifecycle hook is NOT an async function;
            //         returning a Promise is not supported by the framework.
            //         Any asynchronous behavior must be handled manually.
            this.loadFragment({
                name: "my.fragment",
                // ...
            }).then((oControl) => {/*...*/});
        }
    });
});
```

If you're instantiating your fragment outside a controller, you can use the static `Fragment.load` function:

```
sap.ui.require([
    "sap/ui/core/Component", 
    "sap/ui/core/Fragment"
], (Component, Fragment) => {
    // ...

    // "oPage" is an exemplary sap.m.Page control
    const oComponent = Component.getOwnerComponentFor(oPage);

    oComponent.runAsOwner(function() {
        Fragment.load({
            name: "my.fragment",
            type: "XML" // or type: "JS"
        }).then((oControl) => {/*...*/});
    });
});
```

> ### Caution:  
> -   Make sure you assign the correct owner component by running the `runAsOwner()` call on the Component instance. See [The Owner Component](the-owner-component-a7a3138.md) for more information.
> 
> -   Make sure that you are correctly chaining to the `loadFragment` or `Fragment.load` Promise! Calling `oController.byId("...")` will result in `undefined` if called before the`loadFragment` or `Fragment.load` Promise is resolved.



</td>
</tr>
<tr>
<td valign="top" colspan="2">

Version Info

</td>
</tr>
<tr>
<td valign="top">

```
var oVersionInfo = sap.ui.getVersionInfo();
```



</td>
<td valign="top">

```
sap.ui.require(["sap/ui/core/VersionInfo"], (VersionInfo) => {
    VersionInfo.load({ 
        // ...
    }).then((oVersionInfo) => {/*...*/});
});
```



</td>
</tr>
</table>

