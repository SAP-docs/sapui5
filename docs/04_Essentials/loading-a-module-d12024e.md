<!-- loiod12024e38385472a89c1ad204e1edb48 -->

# Loading a Module

For loading \(requiring\) a module, SAPUI5, you use the `sap.ui.require` function, which takes over the dependency resolution for you.

You can either load modules asynchronously or synchonously.



<a name="loiod12024e38385472a89c1ad204e1edb48__section_r1g_rlx_dz"/>

## Asynchronous Loading

If the arguments of the `sap.ui.require` call consist of an array of one or more strings \(module names\) and an optional callback function, the string array is interpreted as a list of dependent modules.

The corresponding modules are loaded and the callback function is called asynchronously once all required modules are loaded.

```js
// the callback function will be executed once the JSONModel, and the UIComponent modules are loaded
sap.ui.require(['sap/ui/model/json/JSONModel', 'sap/ui/core/UIComponent'], function(JSONModel, UIComponent) {
 
    var MyComponent = UIComponent.extend('MyComponent', {
      ...
    });
    ...
 });
```

> ### Caution:  
> If necessary, you can load a module synchronously. Be aware, that synchronous requests are already deprecated in some modern browsers and may not be supported in future. It is a better practice to load modules asynchronously.



<a name="loiod12024e38385472a89c1ad204e1edb48__section_cvl_zlx_dz"/>

## Synchronous Retrieval of a Single Module Value

When calling `sap.ui.require` with a single string as argument, the respective module has to be loaded already.

If the module is not yet loaded or it is not a SAPUI5 module \(third-party module\), the return value is `undefined`.

By using `sap.ui.require`, you can synchronously access modules without triggering a loading request in case the module is not present.

```js
// If JSONModel class is loaded, it is returned. If the module is not loaded yet, there will be no additional loading request.
// The variable JSONModel might be undefined after making this call.
var JSONModel = sap.ui.require("sap/ui/model/json/JSONModel");
```



<a name="loiod12024e38385472a89c1ad204e1edb48__section_r1s_5mx_dz"/>

## Loading Dependencies

You can load dependencies at different points in time.



### Constructor and `init`

If a module is needed during the constructor call or initialization of a class, you declare the dependency as a static dependency in the `sap.ui.define` call.

If the dependency is required in the constructor, the instantiation is of course delayed until the dependency is loaded.



### User interaction

Some modules can be required dynamically on user interaction. An example could be a dialog, which is not needed in most cases, but needs to be loaded only in case the user performs a certain interaction.

Other modules might be required dynamically while a data request is running to minimize the overall load time, as the user has to wait on the data anyway.



<a name="loiod12024e38385472a89c1ad204e1edb48__section_a5y_knx_dz"/>

## Checking the Availability of Modules

The `sap.ui.require` function can not only be used to load modules, but also to check the availability of modules.

The return value of the following function call is either a reference on the already loaded module or `undefined`. If `undefined` is returned, the module was not loaded yet and the `sap.ui.require` call without a callback function will not trigger a load.

```js
var ModuleInQuestion = sap.ui.require("name/of/module/in/Question");
```



<a name="loiod12024e38385472a89c1ad204e1edb48__section_blt_qnx_dz"/>

## `instanceof` Checks

Since the above `sap.ui.require` call retrieves a module reference, you can use the reference not only to instantiate instances of classes but also to perform JavaScript instanceof checks.

```js
sap.ui.define(['sap/ui/core/mvc/View', 'sap/ui/core/Fragment'], function(View, Fragment) {
    ...
    if (oControl instanceof View) {
        ...
    } else if (oControl instanceof Fragment) {
        ...
    }
});
```



<a name="loiod12024e38385472a89c1ad204e1edb48__section_f3y_tnt_3mb"/>

## Checks for Dynamically Required Modules

You can use one of the following approaches to perform a type check on your module:

If the module is a descendant of `sap.ui.base.Object`, the object method `isA` can be used. With this approach the respective class does not need to be loaded. Furthermore, it is possible to check multiple classes by passing the respective class names as an array to the `isA` method. In scenarios where it's unproven that the module is a descendant of `sap.ui.base.Object`, the static method `sap.ui.base.Object.isA` can be used, which checks for descendance from `sap.ui.base.Object`.

```js
sap.ui.define(['sap/ui/base/Object'], function(Object) {
    ...
    if (oControl.isA('sap.ui.core.mvc.View')) {
        ...
    } else if (Object.isA(oControl, ['sap.ui.core.Fragement', 'sap.ui.core.Control'])) {
        ...
    }
});
```

If it's proven that the respective class is not a descendant of `sap.ui.base.Object`, the `instanceof` approach can be enhanced. To perform an `instanceof` check, the respective class does not need to be loaded. If the class module is not loaded, there can never be an instance of that class. The `sap.ui.require` call returns `undefined` in case the module is not loaded.

The `lazyInstanceOf` convenience function makes sure that the `instanceof` check is performed against a function and not `undefined`, in case the module or class was not loaded yet.

```js

function lazyInstanceof(obj, module) {
    var FNClass = sap.ui.require(module);
    return typeof FNClass === 'function' ? obj instanceof FNClass : false;
}
  
if (lazyInstanceof(oControl, 'sap/ui/base/DataType')) {
                …
}
```

