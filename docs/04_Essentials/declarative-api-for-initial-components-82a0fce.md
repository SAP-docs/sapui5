<!-- loio82a0fcecc3cb427c91469bc537ebdddf -->

# Declarative API for Initial Components

The declarative API enables you to define the initially started component directly in the HTML markup.



<a name="loio82a0fcecc3cb427c91469bc537ebdddf__section_p1l_4by_jkb"/>

## Using the `ComponentSupport` Module

With the declarative `sap/ui/core/ComponentSupport` API it is possible to define the initially started component directly in the HTML markup instead of the imperative way using JavaScript. The declarative `ComponentSupport` is not activated by default, but must be enabled via the bootstrap:

```html
<!-- index.html -->
<script id="sap-ui-bootstrap"
    src="/resources/sap-ui-core.js"
    ...
    data-sap-ui-oninit="module:sap/ui/core/ComponentSupport"
    ...>
</script>
```

This module scans the DOM for HTML elements containing a special data attribute named `data-sap-ui-component`. All DOM elements marked with this data attribute will be regarded as container elements into which a `sap/ui/core/ComponentContainer` is inserted. Additional data attributes are then used to define the constructor arguments of the created `ComponentContainer` instance, e.g. `data-name` for the name of the component which should be instantiated:

```html
<!-- index.html -->
<body id="content" class="sapUiBody sapUiSizeCompact" role="application">
    ...
    <div data-sap-ui-component
        data-id="container"
        data-name="sap.ui.core.samples.formatting"
        ...
        data-handle-validation="true"
        ...>
    </div>
    ...
</body>
```



<a name="loio82a0fcecc3cb427c91469bc537ebdddf__section_tks_rby_jkb"/>

## Declarative Configuration of `ComponentContainer`

> ### Caution:  
> As HTML is case-insensitive, in order to define a property with upper-case characters you have to "escape" them with the hyphen character. This is similar to CSS attributes. In the following sample the `handleValidation` argument of the `ComponentContainer` constructor is used:
> 
> ```html
> 
> <div data-sap-ui-component ... data-handle-validation="true" ...></div>
> 
> ```



### Asynchronouos loading with `ComponentSupport`

The `ComponentSupport` module enforces asynchronous module loading of the component with "manifest first". This means, that the `manifest.json` file is loaded before evaluating the component to optimize loading behavior. In this way libraries and other dependencies can be loaded asynchronously and in parallel. To achieve this, the following settings for the ComponentContainer are applied by default:

-   `async` \{\*boolean\*\} \(forced to `true`\)
-   `manifest` \{\*boolean|string\*\} \(forced to `true` if no string is provided to ensure manifest first\)
-   `lifecycle` \{\*sap.ui.core.ComponentLifecycle\*\} \(defaults to `Container`\)
-   `autoPrefixId` \{\*boolean\*\} \(defaults to `true`\)

For details on the manifest, see [Descriptor for Applications, Components, and Libraries \(manifest.json\)](descriptor-for-applications-components-and-libraries-manifest-json-be0cf40.md).

See also [ `ComponentSupport`](https://ui5.sap.com/#/api/module:sap/ui/core/ComponentSupport) and [ `ComponentContainer`](https://ui5.sap.com/#/api/sap.ui.core.ComponentContainer) for more information. 



<a name="loio82a0fcecc3cb427c91469bc537ebdddf__section_zmp_rwc_kkb"/>

## Delay the Initial Component Instantiation

In some cases, the component initialisation must wait until all pre-required modules have been loaded. If this is the case, the `ComponentSupport` module needs to be executed later, and you have to replace the `onInit` module execution in the bootstrap with a custom module:

```html
<!-- index.html -->
<script id="sap-ui-bootstrap"
    src="resources/sap-ui-core.js"
    data-sap-ui-onInit="module:sap/ui/demo/myBootstrap"> <!-- Execute custom module on init -->
</script>
```

The custom module can load dependencies and execute code before activating the `ComponentSupport` module:

```js

// sap/ui/demo/myBootstrap.js
sap.ui.define(["sap/ui/demo/MyModule"], function(MyModule) {

    // Execute code which needs to be executed before component initialization
    MyModule.init().then(function() {
        // Requiring the ComponentSupport module automatically executes the component initialisation for all declaratively defined components
        sap.ui.require(["sap/ui/core/ComponentSupport"]);
    });

});
```

