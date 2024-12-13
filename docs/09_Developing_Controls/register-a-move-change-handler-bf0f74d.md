<!-- loiobf0f74dc55854b7abaddc31629339daa -->

# Register a *Move* Change Handler

Register a *move* change type with its change handler to a control.

Register a change type in the `library.js` file of the underlying control library for the *move* action and map it to the corresponding change handler.

The change type for this action can be named "`moveControls`", for example. Register it in the `<Control>.flexibility.js` file as explained in [Registering Change Handlers for UI Changes](registering-change-handlers-for-ui-changes-d5f4de8.md).



<a name="loiobf0f74dc55854b7abaddc31629339daa__section_xq5_1jm_hyb"/>

## The Default SAPUI5 Flexibility Change Handler

Whenever the *move* action can be performed by simply removing the element from the source aggregation and inserting it to a target aggregation at the target control, we recommend reusing the default change handler `moveControls` for the implementation.



<a name="loiobf0f74dc55854b7abaddc31629339daa__section_xbk_cjm_hyb"/>

## Custom Change Handler Implementation

If the default `moveControls` handler isn't sufficient, for example if you need to move different elements or trigger some other methods on your control, implement a change handler for moving a control \(see [Writing a Custom Change Handler](writing-a-custom-change-handler-6a346a2.md)\).

The change handler gets the following information from SAPUI5 flexibility as change-specific information:

> ### Sample Code:  
> Change specific info for the move action
> 
> ```
> {
>     movedElements: [{
>         element: <ID of the moved element in the living view>  // Moved element: Use oView.byId( sId ) to calculate
>         sourceIndex: <source index>,                           // Original index of moved element in source aggregation of source parent control
>         targetIndex: <target index>                            // Target index of moved element in target aggregation of target parent control
>     }],
>     source: {
>             aggregation: "<source aggregation>",                // Name of source aggregation which contains the moved element
>             parent: <source parent>                             // Source parent control: Use oView.byId( sId ) to calculate
>     },
>     target: {
>         aggregation: "<target aggregation>",                    // Target information similar as source
>         parent: <target parent>
>     }
> }
> ```

