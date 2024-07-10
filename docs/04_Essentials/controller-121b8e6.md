<!-- loio121b8e6337d147af9819129e428f1f75 -->

# Controller

A controller contains methods that define how models and views interact.

You define a simple controller as follows:

```js
sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller) {
    "use strict";
    return Controller.extend("sap.hcm.Address", {
        // controller logic goes here
    });
});
```

The string in quotes specifies the controller name. The controller file's name should be named as the string in the quotes, `Address.controller.js`.

> ### Note:  
> The suffix `.controller.js` is mandatory for controllers.



<a name="loio121b8e6337d147af9819129e428f1f75__section_EF7E041513E34F3FAB23FCF5F5BB1F8B"/>

## Lifecycle Hooks

SAPUI5 provides predefined lifecycle hooks for implementation. You can add event handlers or other functions to the controller and the controller can fire events, for which other controllers or entities can register.

SAPUI5 provides the following lifecycle hooks:

-   `onInit()`: Called when a view is instantiated and its controls \(if available\) have already been created; used to modify the view before it is displayed to bind event handlers and do other one-time initialization

-   `onExit()`: Called when the view is destroyed; used to free resources and finalize activities

-   `onAfterRendering()`: Called when the view has been rendered, and therefore, its HTML is part of the document; used to do post-rendering manipulations of the HTML. SAPUI5 controls get this hook after being rendered.

-   `onBeforeRendering()`: Called every time the view is rendered, before the renderer is called and the HTML is placed in the DOM tree.


> ### Note:  
> For controllers without a view, no lifecycle hooks are called.

> ### Example:  
> ```js
> sap.ui.define([
>     "sap/ui/core/mvc/Controller"
> ], function(Controller) {
>     "use strict";
>     return Controller.extend("sap.hcm.Address", {
>         onInit: function() {
>             this.counter = 0;
>         }
>     });
> });
> ```



<a name="loio121b8e6337d147af9819129e428f1f75__section_F8A9D332F0C347529B0C97330B1C9B2F"/>

## Event Handlers and Other Functions

In addition to lifecycle hooks, a controller can define additional methods that serve as event handlers or additional functionality offered by the controller.

> ### Example:  
> ```js
> sap.ui.define([
>     "sap/ui/core/mvc/Controller"
> ], function(Controller) {
>     "use strict";
>     return Controller.extend("sap.hcm.Address", {
>         increaseCounter: function() {
>             this.counter++;
>         }
>     });
> });
> ```



<a name="loio121b8e6337d147af9819129e428f1f75__section_vsy_gkm_n2b"/>

## `Methods` Section in the Controller Metadata

By default, all methods that **do not** start with an underscore or with prefix "on", "init" or "exit" are public. You can get all public methods of a controller by using the `oController.getMetadata().getPublicMethods()` API.

When you use the new `methods` section in the controller metadata, only functions prefixed by "\_" become private by default. In addition, you get the possibility to control the visibility, flag methods as final, or define an `overrideExecution` strategy. The same applies for the new controller extension metadata. This makes the definition of a public interface more flexible.

Only public methods and methods that are not flagged as final could be overridden by a controller extension.

> ### Note:  
> If you don't use the new `methods` definition for controllers, you could override the `onInit`, `onExit`, `onAfterRendering` and `onBeforeRendering` methods of the controller even if they are private by default.

The following sample code shows how to define an extension to an existing controller.

> ### Example:  
> Sample controller extension:
> 
> ```js
> sap.ui.define(['sap/ui/core/mvc/Controller', 'sap/ui/core/mvc/OverrideExecution'], function (Controller, OverrideExecution) {
>     "use strict";
>     return Controller.extend("sap.hcm.Address", {
>         metadata: {
>             // extension can declare the public methods
>             // in general methods that start with "_" are private
>             methods:{
>                 publicMethod: {public: true /*default*/, final: false /*default*/, overrideExecution: OverrideExecution.Instead /*default*/},
>                 finalMethod: {final: true},
>                 onMyHook: {public: true /*default*/, final: false /*default*/, overrideExecution: OverrideExecution.After},
>                 couldBePrivate: {public: false}
>             }
>         },
> 
>         // adding a private method, only accessible from this controller
>         _privateMethod: function() {
>         },
>         // adding a public method, might be called from, but not overridden by other controllers or controller extensions as well
>         publicMethod: function() {
>         },
>         // adding a final method, might be called from, but not overridden by other controllers or controller extensions as well
>         finalMethod: function() {
>         },
>         // adding a hook method, might be called from, but not overridden by a controller extension
>         // override these method does not replace the implementation, but executes after the original method
>         onMyHook: function() {
>         },
>         // method public by default, but made private via metadata
>         couldBePrivate: function() {
>         }
>        
>     });
> });
> 
> ```



<a name="loio121b8e6337d147af9819129e428f1f75__section_nbl_l1p_42b"/>

## Controller Extensions Implementation Guidelines

All public methods need to stay compatible:

-   Parameters of the method can be enhanced only with new optional parameters.

-   It is recommended to use a JS object to pass the parameters. Extension can be done by adding an optional key, while working with parameters needs to stick to the sequence.

-   Documentation should be maintained for all public methods.

-   Use the `@since` version to tell the consumer on which version this method was introduced.


> ### Note:  
> Within the methods of a controller extension, the reserved `base` member allows access to the public functions of the extended controller.
> 
> Functionality can be called by using `this.base.basePublicMethod()`.



For more information on how to use controller extensions, see [Using Controller Extension](using-controller-extension-21515f0.md).



## API Reference

[sap.ui.core.mvc.Controller](https://ui5.sap.com/#/api/sap.ui.core.mvc.Controller)

