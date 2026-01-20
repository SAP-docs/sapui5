<!-- loio21515f09c0324218bb705b27407f5d61 -->

# Controller Extensions

Controller extensions enable you to enhance existing controller functionality without modifying the original application code, making them one of the most versatile and commonly used extension mechanisms in SAPUI5. This approach allows you to add custom business logic, override existing methods, and integrate seamlessly with the standard controller lifecycle.

SAPUI5 offers two distinct approaches to implement controller extensions, both configurable through the `manifest.json`:


<table>
<tr>
<th valign="top">

Extension Type

</th>
<th valign="top">

Overview

</th>
<th valign="top">

When to Use

</th>
</tr>
<tr>
<td valign="top">

**[Object Mixins](controller-extensions-21515f0.md#loio21515f09c0324218bb705b27407f5d61__section_OMI)**

</td>
<td valign="top">

A straightforward approach that only supports single-level extensions. Once a controller has been extended using this method, it cannot be extended again by another layer.

</td>
<td valign="top">

Simple extensions with basic method overrides without complex inheritance requirements.

</td>
</tr>
<tr>
<td valign="top">

**[Class-based Extensions](controller-extensions-21515f0.md#loio21515f09c0324218bb705b27407f5d61__section_CBE)**

</td>
<td valign="top">

Using the `sap.ui.core.mvc.ControllerExtension` class, this approach enables multi-level extensions, allowing for more complex scenarios with fine granular method overriding.

</td>
<td valign="top">

Complex extension scenarios, multi-layer inheritance, TypeScript projects, reusable extension libraries, or when you need fine-grained control over your method execution order and custom lifecycle hooks.

</td>
</tr>
</table>



<a name="loio21515f09c0324218bb705b27407f5d61__section_MC"/>

## Manifest Configuration

Controller extensions can be configured declaratively in your application's `manifest.json` file within the `sap.ui5/extends/extensions/sap.ui.controllerExtensions` section.

The `manifest.json` configuration maps the fully qualified name of the controller that you want to extend to create your custom extension implementation. You specify the module containing your controller extensions via the `controllerName` property, again as a fully qualified module name.

When you need to apply multiple extensions to the same controller, you can use the `controllerNames` property \(note the plural suffix "`s`"\) with a string array. The extensions will be applied in the same order as they appear in the array.

> ### Remember:  
> Every fully qualified controller extension is loaded at runtime with the `.controller` suffix. In the example below, that would be a file named `samples/components/ext/customer/CustomMain.controller.js`.
> 
> Alternatively, you can specify your controller extension modules in SAPUI5's module syntax, in which case you can omit the suffix. For example, `module:my/sample/Extension` maps to a file named `my/sample/Extension.js`.
> 
> The file type suffix can of course be omitted in all cases and is always `.js`.

```json
{
  "sap.ui5": {
    "extends": {
      "extensions": {
        "sap.ui.controllerExtensions": {
          "samples.components.ext.sap.Main": {
            "controllerName": "samples.components.ext.customer.CustomMain"
          },
          "samples.components.ext.sap.Other": {
            "controllerNames": ["samples.components.ext.customer.CustomOther1", "samples.components.ext.customer.CustomOther2"]
          },
          "samples.components.ext.sap.Details": {
            "controllerName": "module:samples/components/ext/customer/CustomDetails"
          },
        }
      }
    }
  }
}
```



<a name="loio21515f09c0324218bb705b27407f5d61__section_OMI"/>

## Object Mixins

Object-based controller extensions work with a simple JavaScript object containing functions that get mixed into the base controller you're extending. This approach is straightforward and powerful enough to handle many common use cases, but it comes with an important constraint:

Object mixins don't support the hierarchical inheritance of methods within a controller chain. Instead, they follow a simple override pattern, where methods in your extension object completely replace any methods with the same name in the standard controller. This also means you cannot specify the execution order when multiple extensions are involved – that level of control is only available with [class-based extensions](controller-extensions-21515f0.md#loio21515f09c0324218bb705b27407f5d61__section_CBE).

However, there's an important exception for the core controller lifecycle methods `onInit`, `onExit`, `onBeforeRendering`, and `onAfterRendering`. For these special methods, SAPUI5 ensures your custom application methods are called *in addition to* \(not instead of\) the standard methods:

-   `onInit` and `onAfterRendering` are called **after** the standard methods.

-   `onExit` and `onBeforeRendering` are called **before** the standard methods.




### How to Use Object Mixins

The following examples demonstrate how the manifest-based controller extension concept works in practice.

**Standard Controller**

Let's start with a basic controller that we want to extend. The following snippet shows our sample standard controller \(implemented in a file called `Details.controller.js`\):

**`Details.controller.js`** \(JavaScript\):

```js
sap.ui.define(["sap/ui/core/mvc/Controller"], function(Controller) {
    "use strict";
    return Controller.extend("samples.components.ext.sap.Details", {
        onInit : function () {
            console.log("samples.components.ext.sap.Details - onInit");
        },

        onExit : function () {
            console.log("samples.components.ext.sap.Details - onExit");
        },

        doSomething: function() {
            alert("this is an original standard action");
        },

        doSomeStandardAction: function() {
            alert("this is another original standard action");
        }
    });
});
```

**`Details.controller.ts`** \(TypeScript equivalent\):

```js
import Controller from "sap/ui/core/mvc/Controller";

/**
 * @namespace samples.components.ext.sap
 */
export default class Details extends Controller {

    onInit(): void {
        console.log("samples.components.ext.sap.Details - onInit");
    }

    onExit(): void {
        console.log("samples.components.ext.sap.Details - onExit");
    }

    doSomething(): void {
        alert("this is an original standard action");
    }

    doSomeStandardAction(): void {
        alert("this is another original standard action");
    }
}
```

**Controller Extension**

Now let's look at the actual extension we configured in the `manifest.json` snippet above.

Object mixin controller extensions must be implemented as plain JavaScript objects, not as `sap.ui.core.mvc.Controller` subclasses. By default, SAPUI5 expects controller files to have the `.controller` suffix, so your extension files must follow this convention. However, you can also use SAPUI5's module syntax \(prefixed with `module:`\), which allows you to omit the suffix. For example, `module:my/sample/Extension` maps to a file named `my/sample/Extension.js`.

The following example uses the module syntax approach, so we'll omit the `.controller` suffix.

> ### Note:  
> If you need typed controllers, consider using [Controller Replacement](controller-replacement-b0b14bf.md).

Here's our controller extension, implemented in `CustomDetails.js`:

**`CustomDetails.js`** \(JavaScript\):

```js
sap.ui.define([], function() {
  "use strict";
  return {
    onInit : function () {
      console.log("samples/components/ext/customer/CustomDetails - onInit");
    },

    onExit : function () {
      console.log("samples/components/ext/customer/CustomDetails - onExit");
    },

    doSomething: function() {
      alert("this is a customer action");
    },

    doSomeCustomAction: function() {
      alert("this is another customer action");
    }
  };
});
```

**`CustomDetails.ts`** \(TypeScript equivalent\):

> ### Note:  
> Object mixins in TypeScript work similarly to JavaScript, but you need to ensure proper typing manually. Since object mixins are plain objects, TypeScript support is limited compared to class-based extensions.

```js
/**
 * Controller extension object for CustomDetails
 * @namespace samples.components.ext.customer
 */
const CustomDetails = {
  onInit(): void {
    console.log("samples/components/ext/customer/CustomDetails - onInit");
  },

  onExit(): void {
    console.log("samples/components/ext/customer/CustomDetails - onExit");
  },

  doSomething(): void {
    alert("this is a customer action");
  },

  doSomeCustomAction(): void {
    alert("this is another customer action");
  }
};

export default CustomDetails;
```

The above extension can now be referenced in your `manifest.json` like this:

```json
{
  "sap.ui5": {
    "extends": {
      "extensions": {
        "sap.ui.controllerExtensions": {
          "samples.components.ext.sap.Details": {
            "controllerName": "module:samples/components/ext/customer/CustomDetails"
          }
        }
      }
    }
  }
}
```

**Result**

When the standard controller `samples.components.ext.sap.Details` is instantiated, the methods from our extension are automatically mixed in, overriding the corresponding methods of the same name.

After initialization, the console log will show:

```
samples.components.ext.sap.Details - onInit
samples/components/ext/customer/CustomDetails - onInit
```

When the controller is destroyed, the `onExit` lifecycle methods are called in reverse order \(extension first, then standard\):

```
samples/components/ext/customer/CustomDetails - onExit
samples.components.ext.sap.Details - onExit
```

Here are some other behavioral changes you can expect for the non-lifecycle methods:

-   The `doSomething` method from our extension completely replaces the original method. When called, it displays: *"this is a customer action"*

-   The `doSomeStandardAction` method remains unchanged since we didn't override it.

-   The `doSomeCustomAction` method is newly available and can be used in view extensions or other parts of your application.




<a name="loio21515f09c0324218bb705b27407f5d61__section_CBE"/>

## Class-Based Extensions

Controller extensions using `sap.ui.core.mvc.ControllerExtension` offer a structured and multi-layered way to extend applications. This approach provides **custom lifecycle hooks** that execute alongside the standard controller lifecycle, letting you seamlessly integrate your logic without disrupting the original flow. You can **override existing methods** while still maintaining the original behavior. **Custom methods** let you add entirely new functionality to existing controllers when you need completely new capabilities.

However, the most important use case for modern controller extensions is their **hierarchical support**. Unlike [Object Mixins](controller-extensions-21515f0.md#loio21515f09c0324218bb705b27407f5d61__section_OMI), class-based controller extensions allow you to create nested extensions and also inherit from other extensions.

Additionally, this class-based approach supports **TypeScript**, allowing for type-safe inheritance.

-   **Pro**: Powerful and fine-granular approach for structured overrides, support for multiple layered extensions, TypeScript support.

-   **Con**: More complex in its definition, needs additional coding and documentation.




### Defining a Controller Extension and Layering

The following sample code demonstrates how to define an extension for an existing controller and shows the layering capabilities of class-based extensions.

We'll start with a `manifest.json` configuration that defines two controller extensions working together. The code snippets below illustrate not only how to define the controller extension itself but also how different extensions can be layered on top of each other to override APIs provided by previous extensions, enabling fine-grained behavior modeling.

In this example, `SampleExtension2` adds an additional layer on top of `SampleExtension1` by overriding one of its methods.

```json
{
  "sap.ui5": {
    "extends": {
      "extensions": {
        "sap.ui.controllerExtensions": {
          "samples.components.ext.sap.Main": {
            "controllerNames": ["my.extension.SampleExtension1", "my.extension.SampleExtension2"]
          }
        }
      }
    }
  }
}
```

**`SampleExtension1.js`** \(JavaScript\):

```js
sap.ui.define(['sap/ui/core/mvc/ControllerExtension', 'sap/ui/core/mvc/OverrideExecution'], function(ControllerExtension, OverrideExecution) {
  "use strict";
  return ControllerExtension.extend("my.extension.SampleExtension1", {
    metadata: {
      // Extension can declare public methods.
      // Methods starting with "_" are considered private.
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

    // The following method implementations correspond to the definitions above

    // This private method is only accessible from this controller extension.
    _privateMethod: function() {},
    // This public method can be called from or overridden by other controller extensions.
    publicMethod: function() {},
    // This public method marked as final can be called from, but not overridden by other controller extensions.
    finalMethod: function() {},
    // This hook method can be called from but not overridden by other controller extensions.
    // Overriding these method does not replace the implementation, but executes after the original method.
    onMyHook: function() {},
    // This method is public by default, but made private via metadata above.
    couldBePrivate: function() {},

    // This section allows to extend lifecycle hooks or override public methods of the base controller.
    override: {
      // We override onInit of the base controller.
      onInit: function() {},
      // We override a public method of the base controller.
      basePublicMethod: function() {}
    }
  });
});
```

**`SampleExtension2.js`** \(JavaScript\):

The `extension` section within the `override` metadata allows one controller extension to override methods from other controller extensions in the same extension chain. This enables fine-grained layering where later extensions can selectively modify the behavior of earlier extensions without affecting the base controller.

In the example below, `SampleExtension2` uses this mechanism to override the `publicMethod` from`SampleExtension1`. The key is the fully qualified name of the target extension \(`"my.extension.SampleExtension1"`\) which maps to the specific method you want to override.

```js
sap.ui.define(['sap/ui/core/mvc/ControllerExtension'], function(ControllerExtension) {
  "use strict";
  return ControllerExtension.extend("my.extension.SampleExtension2", {
    metadata: {
      override: {
        extension: {
          "my.extension.SampleExtension1": {
            publicMethod: function() {
              console.log("overridden by SampleExtension2");
            }
          }
        }
      }
    }
  });
});
```



### TypeScript Variants

Below are the snippets for the TypeScript equivalents of the above JavaScript sample.

**`SampleExtension1.ts`** \(TypeScript equivalent\):

```js
import ControllerExtension from "sap/ui/core/mvc/ControllerExtension";
import OverrideExecution from "sap/ui/core/mvc/OverrideExecution";

/**
 * @namespace my.extension
 */
export default class SampleExtension1 extends ControllerExtension {

  static readonly metadata = {
    // Extension can declare public methods.
    // Methods starting with "_" are considered private.
    methods: {
      publicMethod: {
        public: true /*default*/,
        final: false /*default*/,
        overrideExecution: OverrideExecution.Instead /*default*/
      },
      finalMethod: {
        final: true
      },
      onMyHook: {
        public: true /*default*/,
        final: false /*default*/,
        overrideExecution: OverrideExecution.After
      },
      couldBePrivate: {
        public: false
      }
    }
  };

  // The following method implementations correspond to the definitions above

  // This private method is only accessible from this controller extension.
  private _privateMethod(): void {}

  // This public method can be called from or overridden by other controller extensions.
  public publicMethod(): void {}

  // This public method marked as final can be called from, but not overridden by other controller extensions.
  public finalMethod(): void {}

  // This hook method can be called from but not overridden by other controller extensions.
  // Overriding these method does not replace the implementation, but executes after the original method.
  public onMyHook(): void {}

  // This method is public by default, but made private via metadata above.
  public couldBePrivate(): void {}

  // This section allows to extend lifecycle hooks or override public methods of the base controller.
  static readonly overrides = {
    // We override onInit of the base controller.
    onInit: function() {},
    // We override a public method of the base controller.
    basePublicMethod: function() {}
  };
}
```

**`SampleExtension2.ts`** \(TypeScript equivalent\):

```js
import ControllerExtension from "sap/ui/core/mvc/ControllerExtension";

/**
 * @namespace my.extension
 */
export default class SampleExtension2 extends ControllerExtension {

  static readonly metadata = {
    override: {
      extension: {
        "my.extension.SampleExtension1": {
          publicMethod: function() {
            console.log("overridden by SampleExtension2");
          }
        }
      }
    }
  };
}
```

For more information on lifecycle hooks and controller metadata, see [Controller](../04_Essentials/controller-121b8e6.md).



### Custom Lifecycle Events

If you want to provide a similar behavior for your custom hooks as for the framework-provided `onInit` or `onExit` lifecycle events, you can define them using the `overrideExecution` property.

Custom lifecycle hooks differ from regular methods in how they handle multiple extensions. Instead of replacing the original implementation, they allow multiple extensions to contribute to the same lifecycle event, creating a chain of calls that execute in a predictable order.

Here's how to define a custom lifecycle hook:

**`ReuseExtension.js`** \(JavaScript\):

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

**`ReuseExtension.ts`** \(TypeScript equivalent\):

```js
import ControllerExtension from "sap/ui/core/mvc/ControllerExtension";
import OverrideExecution from "sap/ui/core/mvc/OverrideExecution";

/**
 * @namespace sap.my
 */
export default class ReuseExtension extends ControllerExtension {

  static readonly metadata = {
    methods: {
      "onFilterHook": {
        "public": true, 
        "final": false, 
        overrideExecution: OverrideExecution.After
      }
    }
  };

  /**
   * @abstract
   */
  public onFilterHook(aFilter: any[]): void {
  }
}
```

The `overrideExecution` metadata setting controls the execution behavior:

-   **`OverrideExecution.After`**: Extensions are called in the order they are defined. Your original hook implementation executes first, followed by any extensions.

-   **`OverrideExecution.Before`**: Extensions are called in reverse order. Extensions execute first, then your original hook implementation.

-   **`OverrideExecution.Instead`**: The extensions completely replace the original method. **This is the default behavior.**




### Final Methods in Controller Extensions

Adding `"final": true` to the metadata of a public method allows it to be called, but not overridden, in another controller extension.

**`ReuseExtension.js`** \(JavaScript\):

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

**`ReuseExtension.ts`** \(TypeScript equivalent\):

```js
import ControllerExtension from "sap/ui/core/mvc/ControllerExtension";

/**
 * @namespace sap.my
 */
export default class ReuseExtension extends ControllerExtension {

  static readonly metadata = {
    methods: {
      "myPublicMethod": {"public": true, "final": true}
    }
  };

  public myPublicMethod(): void { }
}
```



### Accessing Controls in Controller Extensions

When working with controls in controller extensions, you have access to two different scopes of controls depending on your needs.

-   **Extension-specific controls**: Only controls that belong to your extension are accessible through the extension's `byId` function. These controls must be prefixed with your extension's namespace, which you can retrieve by calling `getMetadata().getNamespace()`. For example, a valid control ID would be `my.controller.extension.MyControlId`.

-   **Base controller controls**: To access all controls of the corresponding view, use the base controller's `byId` function by calling `this.base.byId(myControlId)`. This gives you access to the entire view's control hierarchy. The special `base` property provides a reference to the base controller instance that your extension is extending, allowing you to call any of its methods or access any of its properties.




### Integrating Controller Extensions into Controllers

In addition to defining controller extensions in the `manifest.json`, you can also directly integrate them into your controllers. This approach is particularly useful when you want to create reusable controller extensions that can be shared across multiple controllers.

**Direct Integration**

To include a controller extension as a member of your controller, simply add it as a property during the controller definition:

**`Main.controller.js`** \(JavaScript\):

```js
sap.ui.define(['sap/ui/core/mvc/Controller', 'my/extension/SampleExtension'], function(Controller, SampleExtension) {
    "use strict";
    return Controller.extend("sample.Main", {
        // Include the extension as a member
        sample: SampleExtension,

        _basePrivateMethod: function() {
            // Your private controller logic (can't be extended)
        },

        basePublicMethod: function() {
            // Your public controller logic
            // You can now access extension methods via this.sample
            this.sample.extensionMethod();
        }
    });
});
```

**`Main.controller.ts`** \(TypeScript equivalent\):

```js
import Controller from "sap/ui/core/mvc/Controller";
import SampleExtension from "my/extension/SampleExtension";
import ControllerExtension from "sap/ui/core/mvc/ControllerExtension";

/**
 * @namespace sample
 */
export default class Main extends Controller {

    // Include the extension as a member
    sample = ControllerExtension.use(SampleExtension);

    private _basePrivateMethod(): void {
        // Your private controller logic (can't be extended)
    }

    public basePublicMethod(): void {
        // Your public controller logic
        // You can now access extension methods via this.sample
        this.sample.extensionMethod();
    }
}
```

When the controller is instantiated, SAPUI5 automatically detects all members that are `ControllerExtension` classes and creates instances of these extensions. This means you can access the extension's methods and properties through the member name \(e.g., `this.sample.methodName()`\).

**Inline Extension Override**

You can also override specific methods of a controller extension directly within your controller definition:

**`Main.controller.js`** \(JavaScript\):

```js
sap.ui.define(['sap/ui/core/mvc/Controller', 'my/extension/SampleExtension'],
    function(Controller, SampleExtension) {
    "use strict";
    return Controller.extend("sample.Main", {
        // Override extension methods inline to provide custom implementations
        sample: SampleExtension.override({
            someHook: function() {
                // Custom hook implementation specific to this controller
            },
            someOtherMethod: function() {
                // Custom method implementation
            }
        }),

        onLifecycleHook: function() {
            // Your controller's lifecycle logic
        }
    });
});
```

**`Main.controller.ts`** \(TypeScript equivalent\):

```js
import Controller from "sap/ui/core/mvc/Controller";
import SampleExtension from "my/extension/SampleExtension";
import ControllerExtension from "sap/ui/core/mvc/ControllerExtension";

/**
 * @namespace sample
 */
export default class Main extends Controller {

    // Override extension methods inline to provide custom implementations
    sample = ControllerExtension.use(SampleExtension.override({
        someHook: function() {
            // Custom hook implementation specific to this controller
        },
        someOtherMethod: function() {
            // Custom method implementation
        }
    }));

    public onLifecycleHook(): void {
        // Your controller's lifecycle logic
    }
}
```

The `override()` method allows you to selectively customize behavior without creating a separate extension class.

For information on integrating controller extensions into controllers in TypeScript, see *Assigning Controller Extensions* and *Overriding Controller Extension Behavior* in [More About Controller Extension Subclasses and TypeScript](controller-extensions-21515f0.md#loio21515f09c0324218bb705b27407f5d61__section_UCETS).



<a name="loio21515f09c0324218bb705b27407f5d61__section_UCETS"/>

## More About Controller Extension Subclasses and TypeScript

When working with TypeScript, controller extensions require special handling due to language-specific constraints. In regular JavaScript, controller extensions use an `override` definition block, containing methods like `onInit` which are to be overridden by the extension. However, in TypeScript, this approach creates technical challenges.

The main issue is that having a definition block with the same name as a static member of an ES6 class would clash with the static UI5 method `sap.ui.core.mvc.ControllerExtension.override`. Additionally, even if you used a different name, specifying this block as a static member wouldn't work because the [transformer](https://github.com/ui5-community/babel-plugin-transform-modules-ui5/) would assign it as a static member to the transformed UI5 class instead of moving it **into** the definition block of `BaseClass.extend("ClassName", { ... })` where it's expected.

To solve this, UI5 provides the `overrides` keyword as an alternative name for this definition block. This allows controller extensions to be written as ES6 classes in TypeScript, and the transformer has been updated to handle the `overrides` definition block correctly.

> ### Sample Code:  
> ```js
> 
> /**
>  * @namespace my.sample
>  */
> export default class AppExtension extends ControllerExtension {
>    static readonly overrides = {
>      onInit: function() {
>        // Your initialization logic here
>      }
>    }
> }
> ```

> ### Note:  
> The `@namespace` comment is required for the extension class to be known by its full name at runtime, allowing it to be referenced in the `manifest.json` when applying the controller extension.

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

When using controller extensions in TypeScript, there's an important difference in how you assign them compared to JavaScript.

In JavaScript, when a controller uses a pre-defined controller extension, you simply assign the extension class to a property under any name you choose. In TypeScript, however, the class property must contain an extension instance rather than the class itself, since your controller code needs to interact with an instance — not the class — of the extension.

To bridge this gap, SAPUI5 provides the helper method `ControllerExtension.use(...)` in its type definitions. This method takes an extension class as its argument and appears to return an instance, allowing you to work with this instance in your controller while maintaining proper TypeScript typing.

Behind the scenes, the `ControllerExtension.use(...)` method call is removed by the UI5 Babel transformer plugin when your TypeScript code is converted to JavaScript. This ensures the UI5 runtime gets the extension class it needs to create a new instance of the extension for each controller instance.

> ### Example:  
> ```js
> import SomeControllerExtension from "my/some/SomeControllerExtension";
> import ControllerExtension from "sap/ui/core/mvc/ControllerExtension";
> 
> /**
>  * @namespace my.sample
>  */
> class MyController extends Controller {
>   someControllerExtension = ControllerExtension.use(SomeControllerExtension); // Helper method: Use the "SomeControllerExtension" extension
>   
>   someMethod() {
>     this.someControllerExtension.doSomething(...);
>   }
> }
> ```

> ### Note:  
> `ControllerExtension.use(...)` requires `babel-plugin-transform-modules-ui5` version 7.5.0 or higher. If you use `ui5-tooling-transpile` instead, you have to make sure to execute `npm update` in your project.
> 
> To have the transformer plugin recognize and remove the helper method call, you must do the following:
> 
> -   Call it on the `ControllerExtension` base class \(imported from `sap/ui/core/mvc/ControllerExtension`\), not on a class deriving from it.
> 
> -   Assign the extension right in the class definition using an equal sign \(not a colon as in JavaScript\).



### Overriding Controller Extension Behavior

Some controller extensions provide hooks or allow you to override their behavior. This customization works just as well in TypeScript as it does in JavaScript:

> ### Example:  
> ```js
> import SomeControllerExtension from "my/some/SomeControllerExtension";
> import ControllerExtension from "sap/ui/core/mvc/ControllerExtension";
> /**
>  * @namespace my.sample
>  */
> class MyController extends Controller {
>   someControllerExtension = ControllerExtension.use(SomeControllerExtension.override({
>     someHook: function() { 
>       // Your custom hook implementation
>     }
>   })); // Adapt the "SomeControllerExtension" extension behavior
>   
>   someMethod() {
>     this.someControllerExtension.doSomething(...);
>   }
> }
> ```

**Related Information**  


[UI5 Babel Transformer Plugin](https://github.com/ui5-community/babel-plugin-transform-modules-ui5/)

[API Reference: `sap.ui.core.mvc.ControllerExtension.override`](https://ui5.sap.com/#/api/sap.ui.core.mvc.ControllerExtension%23methods/sap.ui.core.mvc.ControllerExtension.override)

