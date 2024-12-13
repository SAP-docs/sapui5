<!-- loioe7796ab7ae2846e78b78e49f56c4e837 -->

# Implement and Register an *AddViaDelegate* Change Handler WITHOUT *BaseAddViaDelegate* Utility

Implement and register an *addViaDelegate* change type with its change handler to a control without the *BaseAddViaDelegate* utility.

As for *addViaDelegate* no default change handler exists, a custom change handler has to be created. For more information, see [Writing a Custom Change Handler](writing-a-custom-change-handler-6a346a2.md).

The change handler gets the following information from SAPUI5 flexibility as change-specific information:

> ### Sample Code:  
> Change-specific info for the *addViaDelegate* action
> 
> ```
> {
>     newControlId: <ID for the newly created control>,
>     index : <index where to add the OData property>,
>     bindingString : <binding path>, // The name "bindingPath" conflicts with getBindingPath() method from ManagedObject
>     parentId : <ID of the parent for the newly created control>,
>     oDataServiceVersion : <version of the OData Service> // For example "2.0"
> }
> ```

You can then register it in the `library.js` file of the control's library, where you map the change type to the corresponding change handler and the control type. Register the change type for this action in the `<control>.flexibility.js` file. For more information, see [Registering Change Handlers for UI Changes](registering-change-handlers-for-ui-changes-d5f4de8.md).

