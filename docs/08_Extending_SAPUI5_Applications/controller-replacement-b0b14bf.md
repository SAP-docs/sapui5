<!-- loiob0b14bf4dcdb476fb0d63877c1beff7c -->

# Controller Replacement

Controller replacement lets you completely substitute an existing controller with a custom implementation. This approach gives you full control over the controller logic.

> ### Tip:  
> Before opting for controller replacement, consider whether [Controller Extensions](controller-extensions-21515f0.md) would meet your needs. Controller extensions offer better maintainability, support multiple layers of extensions, and are preferred for most scenarios.

To replace a controller without altering the view, simply configure it in the `sap.ui.controllerReplacements` section of your component's `manifest.json` file:

```
{
    "sap.ui5": {
        "extends": {
            "extensions": {
                "sap.ui.controllerReplacements": {
                    "samples.components.ext.sap.Main": "samples.components.ext.customer.CustomMain"
                }
            }
        }
    }
}
```



<a name="loiob0b14bf4dcdb476fb0d63877c1beff7c__section_t4f_3xl_bhc"/>

## Best Practices



### When to Use Controller Replacement

-   **Complete controller logic overhaul**: Use it when the original controller logic requires fundamental changes that a simple controller extension can't handle.

-   **Typed controllers**: Use it when you need to subclass controllers using the `extend` syntax.




### Lifecycle Method Handling

Unlike in controller extensions, lifecycle method chaining is **not** automatic in controller replacement. You have full control over when and whether to call the parent lifecycle methods. The example below shows how to overwrite the `onAfterRendering` lifecycle method in your replacement controller:

```js
// You have to determine the execution order manually when overwriting a lifecycle function
onAfterRendering() {
    // Custom logic first
    this.customLogic();

    // Then parent logic
    super.onAfterRendering();

    // Or additional logic after parent's lifecycle function
    this.finalizeCustomSetup();
}
```



## Complete Replacement of Controllers

The following examples show how to completely replace a controller with a new `sap.ui.core.Controller` subclass.



### JavaScript Implementation

For JavaScript-based controllers, you can extend the original controller using the `extend` syntax:

```js
sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("samples.components.ext.customer.CustomMain", {
        onInit() { 
            // Custom initialization logic
        },
        onBeforeRendering() { 
            // Custom pre-rendering logic
        },
        onAfterRendering() {
            // Custom post-rendering logic
        },
        onExit() {
            // Custom cleanup logic
        },
        myEventHandler(oEvent) { 
            // Custom event handling
        }
    });
});
```



### TypeScript Implementation

For TypeScript projects, use the ES6 class syntax, which provides better type safety and code completion:

```js
import Controller from "sap/ui/core/mvc/Controller";

/**
 * @namespace samples.components.ext.customer
 */
export default class CustomMainController extends Controller {

    onInit(): void {
        // Custom initialization logic
    }

    onBeforeRendering(): void {
        // Custom pre-rendering logic
    }

    onAfterRendering(): void {
        // Custom post-rendering logic  
    }

    onExit(): void {
        // Custom cleanup logic
    }

    myEventHandler(evt: Event): void {
        // Custom event handling with proper typing
    }
}
```



## Subclassing Existing Controllers via Replacement

Instead of replacing a controller with a fresh `sap.ui.core.Controller` subclass, you can also extend the existing controller to preserve its original functionality.



### JavaScript Implementation

```js
sap.ui.define([
    "samples/components/ext/sap/Main.controller"
], (MainController) => {
    "use strict";

    return MainController.extend("samples.components.ext.customer.CustomMain", {
        onInit() { 
            // Call parent method using super
            super.onInit();
            // Add custom logic
        },
        onBeforeRendering() { 
            super.onBeforeRendering();
            // Add custom logic
        },
        onAfterRendering() {
            // Add custom logic first
            super.onAfterRendering();
        },
        onExit() {
            // Add custom cleanup
            super.onExit();
        },
        myEventHandler(oEvent) {
            super.myEventHandler(oEvent);
            // Add custom logic 
        }
    });
});
```



### TypeScript Implementation

```js
import MainController from "samples/components/ext/sap/Main.controller";

/**
 * @namespace samples.components.ext.customer
 */
export default class CustomMainController extends MainController {

    onInit(): void {
        super.onInit();
        // Add your custom initialization logic
    }

    onBeforeRendering(): void {
        super.onBeforeRendering();
        // Add your custom pre-rendering logic
    }

    onAfterRendering(): void {
        // Execute custom logic first, then parent
        super.onAfterRendering();
    }

    onExit(): void {
        // Custom cleanup
        super.onExit();
    }

    myEventHandler(evt: Event): void {
        super.myEventHandler(evt);
        // Add your custom event handling
    }
}
```

> ### Note:  
> Modern SAPUI5 supports the `super` keyword for accessing parent methods, which is cleaner and more readable than the native JavaScript `prototype.apply()` call. The `super` keyword is available in both JavaScript \(ES6+\) and TypeScript implementations.

**Related Information**  


[Controller Extensions](controller-extensions-21515f0.md "Controller extensions enable you to enhance existing controller functionality without modifying the original application code, making them one of the most versatile and commonly used extension mechanisms in SAPUI5. This approach allows you to add custom business logic, override existing methods, and integrate seamlessly with the standard controller lifecycle.")

[Configuration in the manifest.json](configuration-in-the-manifest-json-c264d66.md "SAPUI5's extension configuration works through a Component's manifest.json file, where you define your customization logic within the sap.ui5/extends/extensions section. This declarative approach allows you to specify which views, controllers, or UI elements you want to extend or replace, without the need to modify the original application code.")

[View Replacement](view-replacement-98861cf.md "View replacement lets you completely substitute an existing view in a standard application with your own custom implementation. This powerful extension mechanism gives you full control over the UI structure and behavior when other customization approaches aren't sufficient.")

[TypeScript Support](../02_Read-Me-First/typescript-support-a7ee961.md "TypeScript is an extension of JavaScript that adds type information to the language. It helps developers catch errors early through type checking and by providing code assist in supporting code editors, for example through code completion and inline documentation.")

