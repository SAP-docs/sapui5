<!-- loiof665d0de4dba405f9af4294de824b03b -->

# Step 6: Modules

In SAPUI5, resources are often referred to as modules. In this step, we replace the alert from the last exercise with a proper Message Toast from the `sap.m` library. The required modules are enabled to be loaded asynchronously.



## Preview

   
  
<a name="loiof665d0de4dba405f9af4294de824b03b__fig_r1j_pst_mr"/>A message toast displays the "Hello World" message

 ![](images/SAPUI5_Walkthrough_Step_06_7c11ea9.png "A message toast displays the "Hello World" message") 



## Coding

You can view and download all files at [Walkthrough - Step 6](https://ui5.sap.com/#/entity/sap.m.tutorial.walkthrough/sample/sap.m.tutorial.walkthrough.06).

```js
sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast"
], function (Controller, MessageToast) {
   "use strict";
   return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
      onShowHello : function () {
         MessageToast.show("Hello World");
      }
   });
});
```

We extend the array of required modules with the fully qualified path to `sap.m.MessageToast`. Once both modules, `Controller` and `MessageToast`, are loaded, the callback function is called and we can make use of both objects by accessing the parameters passed on to the function.

This Asynchronous Module Definition \(AMD\) syntax allows to clearly separate the module loading from the code execution and greatly improves the performance of the application. The browser can decide when and how the resources are loaded prior to code execution.



## Conventions

-   Use `sap.ui.define` for controllers and all other JavaScript modules to define a global namespace. With the namespace, the object can be addressed throughout the application.

-   Use `sap.ui.require` for asynchronously loading dependencies but without declaring a namespace, for example code that just needs to be executed, but does not need to be called from other code.

-   Use the name of the artifact to load for naming the function parameters \(without namespace\).


**Parent topic:** [Walkthrough](walkthrough-3da5f4b.md "In this tutorial we will introduce you to all major development paradigms of SAPUI5.")

**Next:** [Step 5: Controllers](step-5-controllers-50579dd.md "In this step, we replace the text with a button and show the “Hello World” message when the button is pressed. The handling of the button's press event is implemented in the controller of the view.")

**Previous:** [Step 7: JSON Model](step-7-json-model-70ef981.md "Now that we have set up the view and controller, it’s about time to think about the M in MVC.")

**Related Information**  


[API Reference: `sap.ui.define`](https://ui5.sap.com/#/api/sap.ui/methods/sap.ui.define)

[API Reference: `sap.ui.require`](https://ui5.sap.com/#/api/sap.ui/methods/sap.ui.require)

