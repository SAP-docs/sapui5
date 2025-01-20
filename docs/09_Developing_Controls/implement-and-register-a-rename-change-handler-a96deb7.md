<!-- loioa96deb7731784299a3a1bd94b997891c -->

# Implement and Register a *Rename* Change Handler

Implement and register a *rename* change type with its change handler to a control.

The *rename* action doesn't have a default change handler because the property being renamed can differ between controls. However, we offer the base class `sap.ui.fl.changeHandler.BaseRename`, which includes an implementation of the change handler. You simply need to provide the necessary parameters to the `createRenameChangeHandler` method.

If the implementation of the base class doesn't meet your needs, you can implement a new change handler for renaming a control \(see [Writing a Custom Change Handler](writing-a-custom-change-handler-6a346a2.md)\). The change handler gets the following information from SAPUI5 flexibility as change-specific information:

> ### Sample Code:  
> Change-specific info for the *rename* action
> 
> ```
> {
>     renamedElement : {
>         id : <ID of the control being renamed>
>     },
>     value : <String with the new value for the renamed property of the control>
> }
> ```

Here's an example of how you can rename a control using the `BaseRename` class. If you want to implement your own change handler instead of using the `BaseRename` class, you can refer to its implementation to find the relevant methods.

> ### Sample Code:  
> Button.flexibility.js
> 
> ```
> sap.ui.define([
>     "sap/ui/fl/changeHandler/Base"
> ], function (BaseRename) {
>     "use strict";
>     return {
>         "rename": BaseRename.createRenameChangeHandler({ // It should be always the rename change type
>             propertyName : "text", // Property of the control that should be renamed
>             translationTextType : "XBUT" // See https://github.com/SAP/openui5/blob/master/docs/guidelines/translationfiles.md
>         })
>     };
> })
> ```

You can then register your change handler in the `library.js` file of the control's library, where you map the change type to the corresponding change handler and the control type.

Here's an example:

> ### Sample Code:  
> Library.js
> 
> ```
> sap.ui.define(['sap/ui/core/Lib'], function(Library) {
>   Library.init({
>     name: "sap.m",
>     apiVersion: 2,
>     version: "${version}",
>     //...
>     extensions: {
>         flChangeHandlers: {
>             "sap.m.Button": "sap/m/flexibility/Button",
>             //...
>         }
>     }
>   });
> });
> ```

