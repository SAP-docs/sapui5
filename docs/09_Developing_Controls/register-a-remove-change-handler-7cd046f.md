<!-- loio7cd046f2fd6d4bdd87a46395cdf719ab -->

# Register a *Remove* Change Handler

Register a *Remove* change type with its change handler to a control.

In the `library.js` file of the control library, map the change type for the *remove* action to the corresponding change handler.

If the default change type and change handler of the SAPUI5 flexibility library are suitable for the *remove* action of your control, simply enter `default` as the change handler. However, if at least one change type for a control does **not** use the `default` change handler, create a `<control\>.flexibility.js` file and refer to it as in the `RemoveGroup` example in the next code sample.

Let's take a look at an example. In the case of `sap.ui.comp.smartform.Group`, the change type `hideControl` is used, along with the default handler for this change type. On the other hand, for `sap.ui.comp.smartform.SmartForm`, a custom change handler is used to remove a group.

> ### Sample Code:  
> Snippet of library.js
> 
> ```
> sap.ui.define(['sap/ui/core/Lib'], function(Library) {
>   /**
>   * SAPUI5 library with smart controls.
>   *
>   * @namespace
>   * @name sap.ui.comp
>   * @public
>   */
>   Library.init({
>     extensions: {
>         flChangeHandlers: {
>             "sap.ui.comp.smartform.SmartForm": {
>                 "removeGroup": "sap/ui/comp/smartform/flexibility/changes/RemoveGroup",
>             },
>             "sap.ui.comp.smartform.Group": {
>                 "hideControl": "default"
>             }
>         }
>     }
>   });
> });
> ```



<a name="loio7cd046f2fd6d4bdd87a46395cdf719ab__section_yxq_hbd_gyb"/>

## The Default SAPUI5 Flexibility Change Handler

Whenever the *Remove* action on a control can be performed by simply setting its `visible` attribute to `false`, we recommend to reuse the default change handler `HideControl` for the implementation.



<a name="loio7cd046f2fd6d4bdd87a46395cdf719ab__section_ysx_pbd_gyb"/>

## Custom Change Handler Implementation

If the default `HideControl` change handler is not sufficient, you can implement a change handler for removing a control \(see [Writing a Custom Change Handler](writing-a-custom-change-handler-6a346a2.md)\).

The change handler will get the following information as change-specific information:

> ### Sample Code:  
> Change specific info for the remove action
> 
> ```
> {
>     removedElement : <element being removed>
> }
> ```

Usually the `removedElement` equals the selector, but for some composite controls where you tweaked the design-time metadata you can deviate from this.

