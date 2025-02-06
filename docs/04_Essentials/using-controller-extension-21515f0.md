<!-- loio21515f09c0324218bb705b27407f5d61 -->

# Using Controller Extension

Controller extensions allow you to add functionality to existing applications. They can be used for extensibility purposes, for example by a customer wishing to extend SAP-delivered applications, or as a reusable part that is added to the original application.



<a name="loio21515f09c0324218bb705b27407f5d61__section_p4y_nvy_32b"/>

## Overview

The following sample code shows how to define an extension for an existing controller.

```js
sap.ui.define(['sap/ui/core/mvc/ControllerExtension', 'sap/ui/core/mvc/OverrideExecution'], function(ControllerExtension, OverrideExecution) {
  "use strict";
  return ControllerExtension.extend("my.extension.SampleExtension", {
    metadata: {
      // extension can declare the public methods
      // in general methods that start with "_" are private
      methods: {
        publicMethod: {
          public: true /*default*/ ,
          final: false /*default*/ ,
          overrideExecution: OverrideExecution.Instead /*default*/
        },
        finalMethod: {
          final: true
        },
        onMyHook: {
          public: true /*default*/ ,
          final: false /*default*/ ,
          overrideExecution: OverrideExecution.After
        },
        couldBePrivate: {
          public: false
        }
      }
    },

    // adding a private method, only accessible from this controller extension
    _privateMethod: function() {},
    // adding a public method, might be called from or overridden by other controller extensions as well
    publicMethod: function() {},
    // adding final public method, might be called from, but not overridden by other controller extensions as well
    finalMethod: function() {},
    // adding a hook method, might be called from but not overridden by other controller extensions
    // overriding these method does not replace the implementation, but executes after the original method
    onMyHook: function() {},
    // method public by default, but made private via metadata
    couldBePrivate: function() {},
    // this section allows to extend lifecycle hooks or override public methods of the base controller
    override: {
      // override onInit of base controller
      onInit: function() {},
      // override public method of the base controller
      basePublicMethod: function() {}
    }
  });
});

```

For more detailed information on lifecycle hooks and controller metadata, see [Controller](controller-121b8e6.md).



### Custom Lifecycle Events

If you want to have additional lifecycle events like the standard `onInit` or `onExit` for developers extending the controller, you can define them as described in this section.

Controller extensions allow you to define custom lifecycle hooks. In the sample below, a custom lifecycle hook is defined by specifying an `overrideExecution` function:

```js
return ControllerExtension.extend("sap.my.ReuseExtension", {
        metadata: {
            methods: {
                "onFilterHook": {"public": true, "final": false, overrideExecution: OverrideExecution.After}
            }
        },
        //...
        /**
         * @abstract
         */
        onFilterHook: function(aFilter) {
        }
    });

```

With `OverrideExecution.After`, the extensions are called in the order they are provided, with `OverrideExecution.Before` the order is reversed and the last extension is called first.



### Final Methods in Controller Extensions

Adding `"final": true` metadata to the public method makes it available for execution \(call\) but not for overriding in the next controller extension.

```js
return ControllerExtension.extend("sap.my.ReuseExtension", {
        metadata: {
            methods: {
                "myPublicMethod": {"public": true, "final": true}
            }
        },
        myPublicMethod: function() {
        }
    });

```





### Accessing Controls in Controller Extensions

Only controls that belong to an extension are accessible by the `byId` function in a controller extension. These controls must be prefixed by the namespace of the controller extension. The namespace can be retrieved by calling `getMetadata().getNamespace()`. Here is an example of a valid ID: `my.controller.extension.MyControlId`.

Using the `byId` of the base controller allows the accessing of all controls of the corresponding view by calling `this.base.byId(myControlId)`.



<a name="loio21515f09c0324218bb705b27407f5d61__section_hrv_gcz_32b"/>

## Integrating Controller Extensions into Controllers

Controller extensions can serve for reuse purposes. You can achieve this by including a controller extension to your controller as a member.

```js
sap.ui.define(['sap/ui/core/mvc/Controller', 'my/extension/SampleExtension'], function(Controller, SampleExtension) {
    "use strict";
    return Controller.extend("sample.Main", {
        //include the extension
        sample: SampleExtension,
         
        _basePrivateMethod: function() {
            ...
        },
        basePublicMethod: function() {
     ...
    });
});

```

If the controller is instantiated, all members that have a `ControllerExtension` associated will create an instance of these controller extensions.

You can also override an extension directly in a controller.

> ### Sample Code:  
> ```js
> sap.ui.define(['sap/ui/core/mvc/Controller', 'my/extension/SampleExtension'],
>     function(Controller, SampleExtension) {
>     "use strict";
>     return MainController = Controller.extend("sample.Main", {
>         //inline override of an extension. E.g. to provide a hook implementation
>         sample: SampleExtension.override({
>             someHook: function() {},
>             someOtherMethod: function() {}
>         }),
>         onLifecycleHook: function() {
>         }
>     });
> });
> 
> ```

For information on integrating controller extensions into controllers in TypeScript, see *Assigning Controller Extensions* and *Overriding Controller Extension Behavior* in [Using Controller Extension with TypeScript](using-controller-extension-21515f0.md#loio21515f09c0324218bb705b27407f5d61__section_UCETS).



<a name="loio21515f09c0324218bb705b27407f5d61__section_UCETS"/>

## Using Controller Extension with TypeScript

In UI5 JavaScript code, controller extensions may have an `override` definition block, containing methods like `onInit` which are to be overridden by the extension. In TypeScript, the presence of a definition block with the same name as a static member of an ES6 class would lead to a name clash with the static UI5 method `sap.ui.core.mvc.ControllerExtension.override`. Furthermore, specifying this block as a static member would not work — regardless of its name — because the[transformer](https://github.com/ui5-community/babel-plugin-transform-modules-ui5/) would assign this block as a static member to the transformed UI5 class instead of moving it **into** the definition block of `BaseClass.extend("ClassName", { ... })` where it is expected.

We therefore offer the `overrides` keyword as an additional name for this definition block, so that controller extensions can be specified as ES6 classes in TypeScript as shown below. The transformer has been changed to handle the `overrides` definition block in the correct way.

> ### Sample Code:  
> ```js
> 
> /**
>  * @namespace my.sample
>  */
> export default class AppExtension extends ControllerExtension {
>    static readonly overrides = {
>      onInit: function() {
>        // ...
>      }
>    }
> }
> ```

> ### Note:  
> The `@namespace` comment is required for the extension class to be known by its full name at runtime, so it can e.g. be referenced in the `manifest.json` when applying the controller extension.

> ### Note:  
> The `overrides` keyword is only recognized by UI5 runtime versions 1.112 and higher.
> 
> When using the UI5 Babel transformer plugin, the `overridesToOverride` option must be set to enable its use with older versions. It then changes the `overrides` keyword back to `override`, which is recognized by older UI5 runtime versions.
> 
> When using the ui5-tooling-transpile task and middleware, which is recommended for the most convenient TypeScript setup and internally uses the aforementioned UI5 Babel transformer plugin, you can enable this option by adding the required configuration for ui5-tooling-transpile directly to the `ui5.yaml` file as follows:
> 
> ```
> builder:
>   customTasks:
>   - name: ui5-tooling-transpile-task
>     afterTask: replaceVersion
>     configuration:
>       transformModulesToUI5:
>         overridesToOverride: true
> 
> [...]
> server:
>   customMiddleware:
>   - name: ui5-tooling-transpile-middleware
>     afterMiddleware: compression
>     configuration:
>       transformModulesToUI5:
>         overridesToOverride: true
> ```



### Assigning Controller Extensions

In JavaScript, when a controller uses a pre-defined controller extension, the respective extension class needs to be assigned to the `extend` object under an arbitrary property name. In TypeScript, however, the class property should contain an extension instance, as the controller code should interact with an instance — not the class — of the extension.

To support this, the dummy method `ControllerExtension.use(...)` is introduced in the UI5 type definitions. This method takes an extension class as its argument and claims to return an instance, allowing you to work with this instance in your controller.

Behind the scenes, the `ControllerExtension.use(...)` method call is removed by the UI5 Babel transformer plugin when your TypeScript code is converted to JavaScript, so the UI5 runtime gets the extension class it needs to create a new instance of the extension for each controller instance.

> ### Example:  
> ```js
> import Routing from "sap/fe/core/controllerextensions/Routing";
> import ControllerExtension from "sap/ui/core/mvc/ControllerExtension";
> 
> /**
>  * @namespace my.sample
>  */
> class MyController extends Controller {
>   routing = ControllerExtension.use(Routing); // use the "Routing" extension provided by sap.fe
>   
>   someMethod() {
>     this.routing.navigate(...);
>   }
> }
> 
> ```

> ### Note:  
> `ControllerExtension.use(...)` requires `babel-plugin-transform-modules-ui5` version 7.5.0 or higher. If you use `ui5-tooling-transpile` instead, you have to make sure to execute `npm update` in your project.
> 
> To have the transformer plugin recognize and remove the dummy method call, you must do the following:
> 
> -   Call it on the `ControllerExtension` base class \(imported from `sap/ui/core/mvc/ControllerExtension`\), not on a class deriving from it.
> 
> -   Assign the extension right in the class definition using an equal sign \(not a colon as in JavaScript\).



### Overriding Controller Extension Behavior

Some controller extensions allow implementing hooks or overriding their behavior. This can be done equally well in TypeScript:

> ### Example:  
> ```js
> import Routing from "sap/fe/core/controllerextensions/Routing";
> import ControllerExtension from "sap/ui/core/mvc/ControllerExtension";
> 
> /**
>  * @namespace my.sample
>  */
> class MyController extends Controller {
>   routing = ControllerExtension.use(Routing.override({
>     someHook: function(...) { ... }
>   })); // adapt the "Routing" extension provided by sap.fe
>   
>   someMethod() {
>     this.routing.navigate(...);
>   }
> }
> 
> ```

**Related Information**  


[UI5 Babel Transformer Plugin](https://github.com/ui5-community/babel-plugin-transform-modules-ui5/)

[API Reference: `sap.ui.core.mvc.ControllerExtension.override`](https://ui5.sap.com/#/api/sap.ui.core.mvc.ControllerExtension%23methods/sap.ui.core.mvc.ControllerExtension.override)

