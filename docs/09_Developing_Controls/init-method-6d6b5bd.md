<!-- loio6d6b5bda5727419eadcc9cbac1f6e6a1 -->

# init\(\) Method

The `init()` method can be used to set up, for example, internal variables or subcontrols of a composite control.

If the `init()` method is implemented, SAPUI5 invokes the method for each control instance directly after the `constructor` method.

> ### Note:  
> Values that are given in the `constructor` method are **not** yet available in the `init` method. This is to prevent that a control only works when the values are set initially, but not when the values are changed.

The `init` method is considered a private method that must be called by the SAPUI5 core only.

```js
SomeControl.extend("myorg.mylib.MyControl", {
   // ...

   init() {
      SomeControl.prototype.init.apply(this, arguments);
      this._bSearchHasBeenTriggered = false;
      this._oSearchButton = new Button(this.getId() + "-searchBtn", {
         text: "Search"
      });
   },

   // ...
});
```

> ### Note:  
> Any method in your inheriting control overrides methods with the same name in the superclass. If, for example, your control implements the `init()` method, the `init()` of the superclass will no longer be executed. The control is then no longer properly initialized and this typically causes an error. To avoid breaking the control, call the superclass method.
> 
> Consider also that the superclass might implement the method later on, or removes its own method implementation because it is not needed anymore. While lifecycle methods and hooks such as `init`, `onBeforeRendering`, `onAfterRendering`, and `exit` are generally available from `sap.ui.core.Control`, we recommend that you check for the existence of other superclass methods before calling them, for example `SomeControl.prototype.someSuperMethod?.apply(this, arguments)`.

**Related Information**

[Composite Controls](composite-controls-d6bab27.md)

