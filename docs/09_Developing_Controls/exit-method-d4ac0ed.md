<!-- loiod4ac0edbc467483585d0c53a282505a5 -->

# exit\(\) Method

The `exit()` method is used to clean up resources and to deregister event handlers.

If the `exit()` method is implemented, SAPUI5 core invokes the method for each control instance when it is destroyed.

> ### Note:  
> Any method in your inheriting control overrides methods with the same name in the superclass. If, for example, your control implements the `exit()` method, the `exit()` of the superclass will no longer be executed. The control is then no longer properly destroyed, and this typically causes issues. To avoid breaking the control or causing memory leaks, call the superclass method.
> 
> Consider also that the superclass might implement the method later on, or removes its own method implementation because it is not needed anymore. We recommend that you check for the existence of the superclass method before calling it:
> 
> ```js
> 
> SomeControl.extend("my.OwnControl", {
>        ...
>        exit: function() {
>              //... do any further cleanups of your subclass, e.g. detach events ...
>              this.$().off("click", this.handleClick);
> 
>              if (SomeControl.prototype.exit) { // check whether superclass implements the method
>                     SomeControl.prototype.exit.apply(this, arguments); // call the method with the original arguments
>              }
>        } 
> }
> ```

**Related Information**  


[Browser Events](browser-events-91f1b38.md "To react to browser events, a control needs to register for the event either explicitly, or by implementing the event handler.")

