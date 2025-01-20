<!-- loiob17d217660934f79a22101e0eb2e4fce -->

# Implement and Register a *Resize* Change Handler

Implement and register a *resize* change type with its change handler to a control.

For the *resize* action no default change handler exists and a custom change handler has to be created, see [Writing a Custom Change Handler](writing-a-custom-change-handler-6a346a2.md).

The change handler gets the following information from the SAPUI5 flexibility tool as change-specific information:

> ### Sample Code:  
> Change-specific info for the rename action
> 
> ```
> {  
>     changeType: <changeType defined on the DT Metadata>,
>     content: {
>         resizedElementId: <ID of the element being resized>,
>         newWidth: <integer with new width in pixels>
>     }
> }
> ```

You can then register it in the `library.js` file of the control's library, where you map the change type to the corresponding change handler and the control type. Register the change type for this action in the `<control>.flexibility.js` file. For more information, see [Registering Change Handlers for UI Changes](registering-change-handlers-for-ui-changes-d5f4de8.md).

The resize action also supports handler functions to create changes - similar to *settings* - which returns a promise with an array of objects including change-specific data. See more details in the next section.

