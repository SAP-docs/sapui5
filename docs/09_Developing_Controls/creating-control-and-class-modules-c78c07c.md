<!-- loioc78c07c094e04ccfaab659378a1707c7 -->

# Creating Control and Class Modules

Modules not only require and use functionality from other modules, they can also expose their own functionality.

In asynchronous module definition \(AMD\) syntax, there are several ways to do this. When working with SAPUI5, we recommend using the "module return value".

> ### Note:  
> It is best practice to avoid the usage of global names. For more information, see [Best Practices for Developers](../03_Get-Started/best-practices-for-developers-28fcd55.md).

If you want to export the "module value" of an AMD module under a global name, you can rely on the SAPUI5 methods that already do the exposure as a side effect, such as:

-   Classes created by the `extend` method

-   Renderers that are created with `sap/ui/core/Renderer.extend("…")`


In control and class modules, you should not use global variables at all. When you derive a custom control from an existing superclass via the `extend` method, the resulting subclass is returned.

You can store the return value of the extend function in a local variable, make changes to the prototype and then return this variable as the module's return value.

JSDoc for the class should use the `@alias` tag to make sure that the variable is known under the global name in the generated JSDoc.

The `extend` function makes sure that the respective namespace is created:

```js
sap.ui.define(["sap/ui/base/Object"], function(BaseObject) {

    /**
     * Constructor for a new MyClass instance.
     *
     * @class
     * Description for MyClass
     * @extends sap.ui.base.Object
     * @alias foo.bar.MyClass
     */  
    const Foo = BaseObject.extend("foo.bar.MyClass", /** @lends foo.bar.MyClass.prototype */ {
      constructor: function() {
      }
    });

    Foo.prototype.ownMethod = function(a) {
        return a * 2;
    };

    // return the module value, in this example a class
    return Foo;
});
```

