<!-- loio5f215c172f9644758cbb2b21c6c87926 -->

# How to Enable Personalization for SAPUI5 Controls

Here's how control developers can enable their controls for personalization by end users.

Personalization allows users without any special roles or permissions to make changes to controls. This personalization is applied on top of existing changes made with SAPUI5 flexibility by a developer or a key user.

In general, to enable personalization you need to ensure that the control provides the user interface and calls the APIs offered by SAPUI5 flexibility.

An example for a personalization UI is the *View Settings* dialog for a SmartTable. The user can change the visibility and the order of the columns and can personalize the sorting and filtering of the table's content.

The lifecycle of UI changes created with personalization depends on whether the corresponding control operates in the context of a `VariantManagement` control. For more information, see [Calling the Personalization API to Apply and Persist the Changes](how-to-enable-personalization-for-sapui5-controls-5f215c1.md#loio5f215c172f9644758cbb2b21c6c87926__section_fwf_mzt_qbc).



<a name="loio5f215c172f9644758cbb2b21c6c87926__section_rcf_syt_qbc"/>

## Providing the Change Handler

To correctly set up change handlers for personalization, you need to register them in the `library.js` file. You need to define a new change handler for each change type. Set the `"layers"` property explicitly to `"USER": true`. If you want to use a default change handler, set the `"changeHandler"` property to `"default"`. Otherwise, provide the path to the custom change handler as shown below:

> ### Sample Code:  
> ```
> extensions: {
>     flChangeHandlers: {
>         "sap.ui.comp.smartform.Group": {
>             // with default change handler
>             "hideControl": {
>                 "changeHandler": "default",
>                 "layers": {
>                     "USER": true
>                 }
>             },
>             // with custom change handler
>             "newChangeType": {
>                 "changeHandler": "sap/ui/comp/smartform/flexibility/changeHandler/NewChangeHandler",
>                 "layers": {
>                     "USER": true
>                 }
>             },
>         },
>         // ... other components ...
>     },
>     // ... other extensions ...
> }
> ```
> ```



<a name="loio5f215c172f9644758cbb2b21c6c87926__section_fwf_mzt_qbc"/>

## Calling the Personalization API to Apply and Persist the Changes

The `ControlPersonalizationWriteAPI` provides all the relevant actions that you need to handle personalization changes.

To ensure proper processing by the `ControlPersonalizationWriteAPI`, the `PersonalizationChange` must be structured as follows:

-   `selectorElement`: Control to be used as the selector for the change
-   `changeSpecificData`: Map of change-specific data to create a flex change
-   `changeType`: Type of change for which a change handler is registered
-   `content`: Content for the change
-   `transient` \(optional, default = false\): Transient changes are not persisted

For more information about the change content, see [How to Enable Different Actions](how-to-enable-different-actions-41c6962.md).

For more detailed information, see the [API Reference: `ControlPersonalizationWriteApi`](https://ui5.sap.com/#/api/sap.ui.fl.write.api.ControlPersonalizationWriteAPI).



### Personalization Without Variant Management

For personalization without variant management, the control must provide a user interface for saving and independently invoke the `ControlPersonalizationWriteApi.save` method.



### Personalization With Variant Management

If you have a variant management control in your application and you want personalization changes to be saved with it, you need to link the variant management control to the control on which personalization is enabled.

Example:

> ### Sample Code:  
> ```
> <sap.ui.fl.variants:VariantManagement id="<VariantManagementId>" for="<ControlId>"/>
> ```

