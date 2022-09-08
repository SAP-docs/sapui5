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

Adding `“final”: true` metadata to the public method makes it available for execution \(call\) but not for overriding in the next controller extension.

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

