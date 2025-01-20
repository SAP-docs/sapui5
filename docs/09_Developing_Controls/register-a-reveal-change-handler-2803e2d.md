<!-- loio2803e2d911404ed890ed36adf7d22431 -->

# Register a *Reveal* Change Handler

Register a *Reveal* change type with its change handler to a control.

Register a change type in the `library.js` file of the underlying control library for the *reveal* action, and map it to the corresponding change handler.

In the following example of `sap.ui.comp.smartform.GroupElement`, the default change type `unhideControl` under the default change handler `sap.ui.fl.changeHandler.UnhideControl` is used.

> ### Sample Code:  
> Library.js
> 
> ```
> sap.ui.define(["sap/ui/core/Lib"], function(Library) {
>   Library.init({
>      extensions: {
>         flChangeHandlers: {
>             "sap.ui.comp.smartform.GroupElement": {
>                 "unhideControl": "default",
>             },
>         }
>      }
>   });
> });
> ```



<a name="loio2803e2d911404ed890ed36adf7d22431__section_ikq_hxr_gyb"/>

## The Default SAPUI5 Flexibility Change Handler

Whenever the *reveal* action on a control can be performed by simply setting its `visible` attribute to `true`, we recommend reusing the default change handler `UnhideControl` for the implementation.



<a name="loio2803e2d911404ed890ed36adf7d22431__section_tkj_rxr_gyb"/>

## Custom Change Handler Implementation

If the default `UnhideControl` change handler isn't sufficient, you have to implement a change handler for revealing a control \(see [Writing a Custom Change Handler](writing-a-custom-change-handler-6a346a2.md)\).

The change-specific information is usually empty, as the selector control is to be revealed, but for some composite controls where you tweaked the design-time metadata you can deviate from this. You can then get the following information from SAPUI5 flexibility as change-specific information:

> ### Sample Code:  
> Change-specific info for the reveal action
> 
> ```
> {
>     revealedElementId : <ID of the element being revealed>
>     directParent:       <parent control>
> };
> ```

