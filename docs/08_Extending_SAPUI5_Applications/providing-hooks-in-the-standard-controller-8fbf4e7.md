<!-- loio8fbf4e728bd146fcb2053aeb6ca741f9 -->

# Providing Hooks in the Standard Controller

Hooks are extension points in the controller code that are used to make controller extensions more stable.

The controller extension concept enables you to override any method. This is a powerful but also fragile feature. Extension points, so-called hooks, can be provided in the controller code. These hooks can be documented and kept stable, thus providing more robust hooks across application updates for controller extensions.

The process for this is as follows:

1.  In the application, identify a strategic location within the controller code where customers may want to plug in and execute their customized code.
2.  In the application, define a new function name which is reserved for the extension, document the function and any arguments the function may receive or return.
3.  Add code lines in the application \(see code snippet below\) to check whether the function has been implemented, and, if so, to call the function. We also recommend to implement sanity checks for return values.
4.  The customer can then configure a controller extension, implementing exactly this one function.
5.  SAPUI5 runtime merges the new controller extension into the standard controller. If customizing is enabled, the new function can be executed.



## Example

By receiving the data object `oSomeData` from the server, the application enables you to access and modify the data object. The extension function name is `onDataReceived` and gets a reference to the data object as argument.

Code of the standard controller:

```js

// ...data object oSomeData has been received, possibly from an Ajax response...
   if (this.onDataReceived) {         // check whether any extension has implemented the hook...
      this.onDataReceived(oSomeData); // ...and call it
   }
   // ...continue working with the (now possibly modified) data...
```

Code of the custom controller:

```js
sap.ui.define("customer.xy.Sub2ControllerExtension", [], function () {
   "use strict";
   return {
      onDataReceived: function(oData){ // oSomeData will be passed in
         if (oData && oData.status === "important") {
            oData.message = oData.message + "!!!"; // modify some part of the data object, adding exclamation marks to a message text
         }
      } // no need to return anything as in this example the original object is modified
   };
});
```

> ### Note:  
> This only works for one extension layer as the most specific or last extension overrides any other hook implementations. To allow multi-layer extensions, we recommend that middle-layer extensions provide and document their own hook functions.
> 
> This also requires flat, non-inherited controllers defined as a module used as extension controller, and not with typed controllers.

