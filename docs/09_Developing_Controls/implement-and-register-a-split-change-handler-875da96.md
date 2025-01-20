<!-- loio875da96a6a034bdf9181ca8cc17bed25 -->

# Implement and Register a *Split* Change Handler

Implement and register a *split* change type with its change handler to the control.

To ensure that you can enable different controls with different behaviors for the *split* action, there's no default change handler for this action. You have to implement your own change handler for splitting controls \(see [Writing a Custom Change Handler](writing-a-custom-change-handler-6a346a2.md)\).

The change handler gets the following change-specific information from SAPUI5 flexibility:

> ### Sample Code:  
> Change-specific info for the *split* action
> 
> ```
> {
>     newElementIds : <array of strings which are the unique ids for the new controls to be created>
>     sourceControlId : <control ID, which should be splitted>
>     parentId : <parent control ID>
> }
> ```

Find a full example on GitHub at [https://github.com/SAP/openui5/blob/master/src/sap.m/src/sap/m/changeHandler/SplitMenuButton.js](https://github.com/SAP/openui5/blob/master/src/sap.m/src/sap/m/changeHandler/SplitMenuButton.js).

You can then register it in the `library.js` file of the control's library, where you map the change type to the corresponding change handler and the control type. For more information, see [Registering Change Handlers for UI Changes](registering-change-handlers-for-ui-changes-d5f4de8.md).

Here's an example:

> ### Sample Code:  
> Snippet of `library.js`
> 
> ```
> sap.ui.define(['sap/ui/core/Lib'], function(Library) {
>     Library.init({
>         extensions: {
>             flChangeHandlers: {
>                 "sap.ui.comp.smartform.SmartForm": {
>                     "splitField": "sap/ui/comp/smartform/flexibility/changes/SplitField",
>                 }
>             }
>         }
>   });
> });
> ```

