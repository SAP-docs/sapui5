<!-- loio346599f0890d4dfaaa11c6b4ffa96312 -->

# Using and Nesting Components

You can use a `ComponentContainer` to wrap a `UIComponent` and reuse it anywhere within the SAPUI5 control tree. With the `ComponentContainer` you can nest components inside other components.



<a name="loio346599f0890d4dfaaa11c6b4ffa96312__section_oqk_jhc_zz"/>

## Component Containers

To render UI components, you must wrap them in a `sap/ui/core/ComponentContainer`. You **cannot** use the `placeAt` method to place UI components directly in a page. A `ComponentContainer` carries specific settings and also contains the lifecycle methods of a regular control, such as the `onBeforeRendering` and `onAfterRendering` methods. The lifecycle methods of the `ComponentContainer` are forwarded to the corresponding methods of the nested component.

The `ComponentContainer` separates the application and the nested component. The control tree and data binding of the inner component are decoupled from the outer component.

If you want to share data with the inner component, you can use the `propagateModel` property on the `ComponentContainer` to forward models and binding contexts to the inner component.

You load and create a `UIComponent` in one of the following ways:

-   Load the component asynchronously in "manifest first" mode by specifying the component name:

    ```js
    	
    	// "ComponentContainer" required from module "sap/ui/core/ComponentContainer"
    	var oContainer = new sap.ui.core.ComponentContainer({
    		name: "samples.components.sample",
    		manifest: true,
    		async: true
    	});
    	oContainer.placeAt("target");
    	
    ```

-   Load and create the component asynchronously before creating the container:

    ```js
    	// "Component" required from module "sap/ui/core/Component"
    	// "ComponentContainer" required from module "sap/ui/core/ComponentContainer"
    	Component.create({
    		name: "samples.components.sample",
    	}).then(function(oComponent) {
    		var oContainer = new ComponentContainer({
    			component: oComponent
    		});
    		oContainer.placeAt("target");
    	});
    ```

-   Load and create the component asynchronously with "manifest first" mode by specifying the URL of the descriptor \(`manifest.json`\):

    ```js
    	// "Component" required from module "sap/ui/core/Component"
    	// "ComponentContainer" required from module "sap/ui/core/ComponentContainer"
    	Component.create({
    		manifest: "samples/components/sample/manifest.json",
    	}).then(function(oComponent) {
    		var oContainer = new ComponentContainer({
    			component: oComponent
    		});
    		oContainer.placeAt("target");
    	});
    ```


> ### Note:  
> You can use the `lifecycle` property to determine whether the container or your application code will take care of destroying the component.
> 
> For a detailed explanation of the `lifecycle` property and its possible values, see the[API Reference](https://ui5.sap.com/#/api/sap.ui.core.ComponentContainer%23controlProperties).



### Using a Component Container to Load Components from a Different Location

You may want to load components from a location that is different from the location where the SAPUI5 libraries are located or a location that is not registered as a resource root in the SAPUI5 bootstrap.

You can do so by defining the URL of the additional components as a setting for the component factory or the component container.

-   Loading and creating the component asynchronously before creating the container:

    ```js
    	// "Component" required from module "sap/ui/core/Component"
    	// "ComponentLifecycle" required from module "sap/ui/core/ComponentLifecycle"
    	Component.create({
    		name: "samples.components.sample",
    		url: "./myComponents"
    	}).then(function(oComponent) {
    		var oContainer = new ComponentContainer({
    			component: oComponent
    		});
    		oContainer.placeAt("target");
    	});
    ```

-   Loading and creating the component asynchronously when creating the container:

    ```js
    	// "ComponentContainer" required from module "sap/ui/core/ComponentContainer"
    	// "coreLibrary" required from module "sap/ui/core/library"
    	var oContainer = new ComponentContainer({
    		name: "samples.components.sample",
    		lifecycle: coreLibrary.ComponentLifecycle.Container,
    		async: true,
    		url: "./myComponents"
    	});
    	oContainer.placeAt("target");
    ```

    Here you use the `lifecycle` property to make sure that the component is destroyed when the container is destroyed.




<a name="loio346599f0890d4dfaaa11c6b4ffa96312__section_fph_13c_zz"/>

## Reuse Components

To be able to reuse a component, the component has to be declared in the `componentUsages` section of the `manifest.json` descriptor file as follows:

```json
"sap.ui5": {
  "componentUsages": {
    "myreuse": {
      "name": "sap.reuse.component",
      "settings": {},
      "componentData": {},
      "lazy": false
    }
  }
}
```

The reuse component is declared via its `componentUsage` ID as the key and the supported values are `name` \(name of the component\), `settings`, `componentData` and `lazy`. The values defined in the `manifest.json` file will be merged with the values specified in the instance-specific component factory function An exception to this is the lazy flag which is an indicator for the Component factory function how to handle the dependency. Allowed values in the instance-specific factory function are `settings`, `componentData`, `async`, and `id`.

The `lazy` flag is used to indicate whether the Component should be already preloaded or not. By default, the Components defined in the usage are lazy. A Component preloaded with the flag `lazy: false` has to be explicitly maintained in the `manifest.json`.

For more information, see [Descriptor for Applications, Components, and Libraries \(manifest.json\)](descriptor-for-applications-components-and-libraries-manifest-json-be0cf40.md).

If you want to exchange the reuse component, for example, to extend an app, you simple exchange the reuse component in the `manifest.json` descriptor file.

The [SAPUI5 Application Index](../05_Developing_Apps/sapui5-application-index-c5e7098.md) can also access the information in the `manifest.json` file and optimize the determination of dependencies when loading components.

A reuse of components can be achieved by their inclusion into a library that is used by various applications. Reuse components that are embedded by a library must have an explicit entry in the `manifest.json` in the `sap.app/embeddedBy` section:

```
"sap.app": {
  "embeddedBy": "../"
}
```

Under `embeddedBy`, you specify the relative path to the namespace root of the library. This ensures that tools like the application index can discover embedded libraries and won't include them in the transitive scope \(otherwise you would get unwanted 404 requests\). Additionally tools should declare a library dependency to the embedding library. This will ensure that the library containing the component preload will be loaded automatically instead of the trying to load the component preload by itself.



### Instantiation

To instantiate the reuse component in the current component, you use an instance-specific factory function. The factory function requires at least the `componentUsage ID` as a parameter \(simplified usage\) or a configuration object that contains the `usage` and optionally `settings` and `componentData` \(extended usage\).

-   Example for simplified usage \(Async\):

    ```js
    this.createComponent("myreuse").then(function(oComponent) {
      // ...
    });
    ```

-   Example for extended usage \(Async\):

    ```js
    var oComponentPromise = this.createComponent({
      usage: "myreuse"
      settings: {},
      componentData: {},
      async: true
    });
    ```




### Declarative Usage

You can also declare a reuse component directly, for example, in your JavaScript or XML code. In an XML view, the local service factory can only be used via the `ComponentContainer` that has a superordinate component.

```xml
<mvc:View xmlns:mvc="sap.ui.core.mvc" xmlns:core="sap.ui.core" ...>
  <core:ComponentContainer usage="myreuse" async="true" />
</View>
```



### Migration

If you have been reusing components before we introduced the reuse feature described above, we recommend that you refactor your code and implement the new logic.

If you use a component that is embedded in a library, and the application declares a dependency to that library, remove the dependency to the library from the embedding application. Make sure that the application code does not contain any direct references to the component or the embedding application.


<table>
<tr>
<th valign="top">

Old Code

</th>
<th valign="top">

Recommended Code

</th>
</tr>
<tr>
<td valign="top">

`manifest.json` with dependency declaration only:

```json
{
  "sap.ui5": {
    "dependencies": {
      "components": {
        "sap.reuse.component": {}
      }
    }
  }
}
```



</td>
<td valign="top">

`manifest.json` with declaration of reuse components:

```json
{
  "sap.ui5": {
    "dependencies": {
      "components": {
        "sap.reuse.component": {}
      }
    },
    "componentUsages": {
      "reuse": {
        "name": "sap.reuse.component",
        "lazy": false
      }
    }

  }
}
```

> ### Note:  
> As of version 1.56 it is sufficient to declare the component usage and to indicate whether the component should be lazy loaded or not. The declaration of the component dependencies can and should be avoided in this case.



</td>
</tr>
<tr>
<td valign="top">

`Component.js` with nested reuse component:

```js
createContent: function() {
   
  var oReuseComponent = sap.ui.component({
    "name": "sap.reuse.component"
  });
 
}
```



</td>
<td valign="top">

`Component.js` that loads the reuse component

```js
createContent: function() {
   
  var oReuseComponentPromise = this.createComponent({ /* this = Component instance */
    "usage": "reuse"
  });
 
}
```



</td>
</tr>
</table>

**Related Information**  


[Enabling Routing in Nested Components](enabling-routing-in-nested-components-fb19f50.md "Every SAPUI5 component can define routing configuration in its manifest and a UI5 router instance will be created automatically after the component is instantiated.")

[API Reference: `sap.ui.core.ComponentContainer`](https://ui5.sap.com/#/api/sap.ui.core.ComponentContainer)

[API Reference: `sap.ui.core.ComponentContainer.setLifecycle`](https://ui5.sap.com/#/api/sap.ui.core.ComponentContainer/methods/setLifecycle)

[Descriptor for Applications, Components, and Libraries \(manifest.json\)](descriptor-for-applications-components-and-libraries-manifest-json-be0cf40.md "The descriptor for applications, components, and libraries (in short: app descriptor) is inspired by the WebApplication Manifest concept introduced by the W3C. The descriptor provides a central, machine-readable, and easy-to-access location for storing metadata associated with an application, an application component, or a library.")

