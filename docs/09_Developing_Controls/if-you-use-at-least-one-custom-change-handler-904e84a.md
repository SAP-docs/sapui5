<!-- loio904e84ae5a6042c2bd26e36743a1c3c2 -->

# If You Use at Least One Custom Change Handler

Here's how to proceed if you want to use one or more custom custom change handlers that you've written.

If you use at least one custom change handler, create the `<control>.flexibility.js` file to register and implement the change handlers for a control.

We recommend that you create the following structure:

-   `/flexibility` - Folder for the flexibility files where to include the implementations of custom change handlers and their registration.

    -   `<control>.flexibility.js`



In the `<control>.flexibility.js` file, for each change type, you can enter `"default"` to use the default change handler provided by `sap.ui.fl`, or you can add your own change handler if needed. For example, there is no default change handler for the *rename* action. If a change handler implementation is used for several controls, you can also require it and use it, like in the following example:

> ### Sample Code:  
> Panel.flexibility.js
> 
> ```
> sap.ui.define([
>     "sap/ui/fl/changeHandler/BaseRename",
>     "sap/ui/<..>/<ReusedChangeHandler>"
> ], function (BaseRename, ReusedChangeHandler) {
>     "use strict";
> 
>     // Reuse functionality for several change handlers can be placed here
>     function commonStuffNeededInAFewChangeHandlers(){
>         //...
>     }
>     return {
>         "renamePanel": BaseRename.createRenameChangeHandler({
>             propertyName: "headerText",
>             changePropertyName: "panelHeaderText",
>             translationTextType: "XHED"
>         }),
>         "hideControl": "default",
>         "unhideControl": "default",
>         "<changeType>: ReusedChangeHandler,
>         "<changeType>": {
>             "applyChange": function(oChange, oPanel, mPropertyBag) {
>                 //...
>             },
>             "revertChange": function(oChange, oPanel, mPropertyBag) {
>                 //...
>             },
>             "completeChangeContent": function(oChange, oSpecificChangeInfo, mPropertyBag) {
>                 //...
>             }
>         }
>         // + other change types relevant to the control (addFields, combineFields, etc...)
>     };
> });
> ```

Additionally, you must register the flexibility file in the `library.js` file under `extensions > flChangeHandlers`.

> ### Sample Code:  
> library.js
> 
> ```
> ...
> extensions: {
> >     flChangeHandlers: {
> >         "sap.m.Panel": "sap/m/flexibility/Panel"
> > }
> ...
> ```

