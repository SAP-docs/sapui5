<!-- loio6d6b5bda5727419eadcc9cbac1f6e6a1 -->

# init\(\) Method

The `init()` method can be used to set up, for example, internal variables or subcontrols of a composite control.

If the `init()` method is implemented, SAPUI5 invokes the method for each control instance directly after the constructor method.

> ### Note:  
> Values that are given in the `constructor` method are **not** yet available in the `init` method. This is to prevent that a control only works when the values are set initially, but not when the values are changed.

The `init` method is considered a private method that must only be called by the SAPUI5 core.

```js
   init: function() {

      this._bSearchHasBeenTriggered = false;

      this._oSearchButton = new sap.m.Button(this.getId() + "-searchBtn", {text: "Search"});

   }
```

> ### Note:  
> Any method in your inheriting control overrides methods with the same name in the superclass. If, for example, your control implements the `init()` method, the `init()` of the superclass will no longer be executed. The control is then no longer properly initialized and this typically causes an error. To avoid breaking the control, call the superclass method.
> 
> Consider also that the superclass might implement the method later on, or removes its own method implementation because it is not needed anymore. We recommend that you check for the existence of the superclass method before calling it:
> 
> ```js
> 
> SomeControl.extend("my.OwnControl", {
>        ...
>        init: function() {
>              if (SomeControl.prototype.init) { // check whether superclass implements the method
>                     SomeControl.prototype.init.apply(this, arguments); // call the method with the original arguments
>              }
> 
>              //... do any further initialization of your subclass, e.g. 
>              this.$().on("click", this.handleClick);
>        } 
>        ...
> }
> ```

