<!-- loiob0b14bf4dcdb476fb0d63877c1beff7c -->

# Controller Replacement

Standard controller can be replaced by specifying a new controller name in a replacement View and implementing this Controller.

For a view replacement, you can either use the standard controller of the replaced view by setting its name as `controllerName`, or use and extend the standard controller, or you can replace the controller by specifying a new controller name in the new view and implementing the new controller.

An extension option is available that allows to replace an original controller without replacing its view. This is especially useful for typed controllers, that is, controllers that have been defined with the `extend` syntax:

```js
sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller) {
    "use strict";
 
    return Controller.extend("samples.components.ext.customer.CustomMain", {
        onInit: function() { /* do something */ },
        onBeforeRendering: function() { /* do something */ },
        onAfterRendering: function() { /* do something */ },
        onExit: function() { /* do something */ },
        myEventHandler: function(oEvent) { /* do something */ }
    });
 
});
```



<a name="loiob0b14bf4dcdb476fb0d63877c1beff7c__section_zwn_zkg_3mb"/>

## Controller Extension with Controller Replacement Confguration

Typed controllers cannot be used in the controller extension configuration \(`sap.ui.controllerExtensions`\). Instead, you have to use the controller replacement configuration \(`sap.ui.controllerReplacements`\) to extend a typed controller with the `extend` syntax and call the original methods in the custom implementation:

```js
sap.ui.define([
    "samples/components/ext/sap/Main.controller"
], function(MainController) {
    "use strict";
  
    return MainController.extend("samples.components.ext.customer.CustomMain", {
        onInit: function() { 
            MainController.prototype.onInit.apply(this, arguments);
            /* do something */ 
        },
        onBeforeRendering: function() { 
            MainController.prototype.onBeforeRendering.apply(this, arguments);
            /* do something */ 
        },
        onAfterRendering: function() {
            /* do something */
            MainController.prototype.onAfterRendering.apply(this, arguments);
        },
        onExit: function() {
            /* do something */
            MainController.prototype.onExit.apply(this, arguments);
        },
        myEventHandler: function(oEvent) {
            MainController.prototype.myEventHandler.apply(this, arguments);
            /* do something */ 
        }
    });
  
});
```

To replace the controller of the standard application with the custom controller, use the following extension configuration:

```js
extensions: { 
    "sap.ui.controllerReplacements": {
        "samples.components.ext.sap.Main": "samples.components.ext.customer.CustomMain"
    },
    .....some more content
```

The chaining of the lifecycle methods is **not** done automatically. You can control on your own, if or when to call the parent lifecycle methods. In addition, you can always access the methods defined in the original controller.

