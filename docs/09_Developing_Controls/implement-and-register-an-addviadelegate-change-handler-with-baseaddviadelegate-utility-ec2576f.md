<!-- loioec2576f00ca54fedb63bae227fb5b559 -->

# Implement and Register an *AddViaDelegate* Change Handler WITH *BaseAddViaDelegate* Utility

Implement and register an *addViaDelegate* change type with its change handler to a control with the *BaseAddViaDelegate* utility.

With this utility you can use write-delegate functionality for creating new controls using the *addViaDelegate* action. *BaseAddViaDelegate* is a generic change handler generator utility. The `BaseAddViaDelegate.createAddViaDelegateChangeHandler` function creates a complete change handler with all the relevant change handler functionality. You just need to pass some callback functionality.

The change handler generated in this way uses the control-specific write delegate to create the controls to be added. This delegate needs to be registered in the `<Control>.flexibility.js` file \(see the example below\). You can use existing write delegates or define a delegate yourself. The `controlType` property should reference the control type that defines the *addViaDelegate* action in the design time or the `relevantContainer` defined in the action declaration.

> ### Sample Code:  
> Control-specific **write delegate** definition \(part of `<Control>.flexibility.js`\)
> 
> ```
> ```
>     DelegateMediatorAPI.registerWriteDelegate({
>         controlType: "sap.ui.layout.form.SimpleForm",
>         delegate: "sap/ui/comp/smartfield/flexibility/SmartFieldWriteDelegate",
>         requiredLibraries: {
>             "sap.ui.comp": {
>                 minVersion: "1.81",
>                 lazy: false
>             }
>         }
>     });
> ```
> ```



<a name="loioec2576f00ca54fedb63bae227fb5b559__section_vq5_fwm_2bc"/>

## Quick Summary

-   Select or create existing write delegate. Example: `sap.ui.comp.smartfield.flexibility.SmartFieldWriteDelegate`

-   Register the write delegate into your `<Control>.flexibility.js` file \(see above\). If the flexibility file is newly created, you need to reference it in the `library.js` file.

-   Create your own change handler using the `BaseAddViaDelegate` utility.

-   Register your change handler in the `<Control.flexibility.js` file. See [Registering Change Handlers for UI Changes](registering-change-handlers-for-ui-changes-d5f4de8.md).


