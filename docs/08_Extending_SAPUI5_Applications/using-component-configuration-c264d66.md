<!-- loioc264d66d6e3c4104818bc52c174a000c -->

# Using Component Configuration

SAPUI5 supports the extension of a base controller by merging the delivered standard controller with a custom controller on JavaScript object level.

SAPUI5 supports two different extension variants. The latest and recommended variant is called [Controller Extension](../04_Essentials/controller-extensions-21515f0.md). The old variant called **Component Configuration** is described on the following pages.

The SAPUI5 Component Configuration concept does not support hierarchical inheritance of methods within a chain of controllers. Instead, methods of the custom controller override any methods of the standard controller with the same name. The following controller lifecycle methods are, however, an exception to this rule: `onInit`, `onExit`, `onBeforeRendering`, `onAfterRendering`. For these methods, the controller methods of your custom application are called either after \(for `onInit` and `onAfterRendering`\), or before \(for `onExit` and `onBeforeRendering`\) the standard lifecycle methods.

> ### Restriction:  
> When using the SAPUI5 Component Configuration concept, only the standard controller can be extended, but a custom controller can **not** be extended again. Only one level of controller extension is allowed; nested controller extension is not supported. We recommend using the more recent [Controller Extension](../04_Essentials/controller-extensions-21515f0.md) approach for such a use case.

The following examples show how the Component Configuration concept in SAPUI5 works. The following code snippet shows the standard controller `Main.controller.js` of the delivered standard application:

```js
sap.ui.define(["sap/ui/core/mvc/Controller"], function(Controller) {
    "use strict";
    return Controller.extend("samples.components.ext.sap.Main", {
        onInit : function () {
            console.log("samples.components.ext.sap.Main - onInit");
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

The controller extension must not be typed as a controller, but as a plain object. If you prefer to use typed controllers, you can follow the [Controller Replacement](controller-replacement-b0b14bf.md) approach. The following code snippet represents the custom controller `CustomMain.controller.js`:

```js
sap.ui.define([], function() {
    "use strict";
    return {
       onInit : function () {
            console.log("samples.components.ext.customer.CustomMain - onInit");
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

The following extension in component configuration merges the two controllers:

```js
extensions: {  
    "sap.ui.controllerExtensions": {
        "samples.components.ext.sap.Main": {
            controllerName: "samples.components.ext.customer.CustomMain"
        }
        }
    // .....some more content
}
```

As a result, the `samples.components.ext.customer.CustomMain` controller functions are merged when the controller `samples.components.ext.sap.Main` is called. After initialization, the log contains the following messages:

```
samples.components.ext.sap.Main - onInit
samples.components.ext.customer.CustomMain - onInit
```

The `doSomething` method of the new controller overwrites the `doSomething` method of the standard controller. Thus, if the method is invoked, an alert popup with the following text appears: *this is a customer action*.

The `doSomeStandardAction` method remains available without changes, as no method with the same name exists in the new controller.

The `doSomeCustomAction` method is additionally available and you can use it, for example, in a view extension.

