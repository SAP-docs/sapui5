<!-- loio3f606dff02074eabaae9816c69662f6d -->

# Register a *Settings* Change Handler

Register the *settings* change types with change handlers to a control.

In the `library.js` file of the control's library, map one or more change types to one or more corresponding change handlers and the control type. You can have multiple change handlers for multiple actions.

Here's an example:

> ### Sample Code:  
> `library.js`
> 
> ```
> sap.ui.define(['sap/ui/core/Lib'], function(Library) {
>   Library.init({
>     extensions: {
>         flChangeHandlers: {
>             "sap.ui.yourlibrary.YourControl": {
>                 "action1": "sap/ui/yourlibrary/yourcontrol/action1ChangeHandler",
>                 "action2": "sap/ui/yourlibrary/yourcontrol/action2ChangeHandler",
>             },
>         }
>     }
>   });
> });
> ```

For more information, see [Registering Change Handlers for UI Changes](registering-change-handlers-for-ui-changes-d5f4de8.md).



<a name="loio3f606dff02074eabaae9816c69662f6d__section_ycy_4bt_hyb"/>

## Custom Change Handler Implementation

Implement a change handler for modifying the settings of a control. For more information, see [Writing a Custom Change Handler](writing-a-custom-change-handler-6a346a2.md).

Here's the change-specific information:

> ### Sample Code:  
> Change-specific info for the *settings* action
> 
> ```
> {
>     changeType : <change type as registered in the library.js file>,
>     content : <object containing everything needed for a change>
> }
> ```

> ### Note:  
> Modifying the settings of a control can require a popover, dialog, or similar to offer the user the option to make changes.

