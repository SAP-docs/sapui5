<!-- loio46b2d747b61c478691f6b878cc214c6d -->

# Enabling Controls for SAPUI5 Flexibility

If you develop your own SAPUI5 controls and want to provide personalization and key user adaptation to your users, you should enable your controls for SAPUI5 flexibility.

SAPUI5 flexibility offers a set of actions that users can perform on UI elements, like moving, removing, or renaming them. SAPUI5 flexibility defines how these actions can be performed in a way that business users can understand easily \(WYSIWYG behavior\). SAPUI5 flexibility creates overlays, registers event handlers, and displays context menus and dialogs consistently across controls.

This guide is aimed at control developers looking to enable their controls for SAPUI5 flexibility and application developers who want to influence control behavior in their applications \(usually to exclude certain controls from adaptation, or to restrict certain actions\).

Among others, SAPUI5 Flexibility includes the following::

-   Key user adaptation
-   Personalization

For key user adaptation and personalization to work, they need different control-specific information.



<a name="loio46b2d747b61c478691f6b878cc214c6d__section_lyb_vst_qbc"/>

## Enabling Controls for Key User Adaptation

Here's what you have to provide to enable your SAPUI5 controls for key user adaptation actions:

-   **Design-time metadata**

    Design-time metadata is a description of the actions that are possible for a control. Usually this is a file of the format `<control_name>.designtime.js`. See [Providing Design-Time Metadata](providing-design-time-metadata-5866a47.md).

    Design-time metadata can also be set for instances of controls to override the predefined behavior. See [Instance-Specific Design-Time Metadata](instance-specific-design-time-metadata-8fa2324.md).

    The information contained in design-time metadata is relevant for key user adaptation as well as in SAP Business Application Studio.

-   **Change handlers**

    Change handlers are classes containing the logic to apply the information contained in a `.change` file to the control. The change handler interface is defined in [Implementing a Change Handler](implementing-a-change-handler-139a71f.md).

    Change handlers are used for all personas of SAPUI5 flexibility - developers, key users, and end users - and can be reused, if an action is available for multiple personas.

    For many actions, SAPUI5 flexibility provides default change handlers that you can register. See [Registering Change Handlers for UI Changes](registering-change-handlers-for-ui-changes-d5f4de8.md).

    If the default handler for an action does not satisfy your requirements, you can develop your own change handlers. See [Writing a Custom Change Handler](writing-a-custom-change-handler-6a346a2.md).




<a name="loio46b2d747b61c478691f6b878cc214c6d__section_lcg_3tt_qbc"/>

## Enabling Controls for Personalization

Here's what you have to provide to enable your SAPUI5 controls for personalization actions:

-   **Provide the UI**

    The controls need to provide the UI to trigger the application and creation of personalization changes. The save can be handled in two ways: either by the control itself or or by the responsible variant management.

-   **Call the specific personalization APIs to handle the changes**

    The `ControlPersonalizationWriteAPI` provides all the required methods to handle the personalization changes. For more information see [How to Enable Personalization for SAPUI5 Controls](how-to-enable-personalization-for-sapui5-controls-5f215c1.md).

-   **Change handlers**

    See above.


**Related Information**  


[Which Action Has to Be Enabled for Which Control?](which-action-has-to-be-enabled-for-which-control-f269c0b.md "There are various actions and recommendations for implementing them in different types of controls.")

[Enable a Library for Design-Time Usage](enable-a-library-for-design-time-usage-196a7cd.md "To enable a library for design-time usage, follow the steps described here.")

[Enable a Control for Design-Time Usage](enable-a-control-for-design-time-usage-6888c17.md "To enable a control for design-time usage, follow the steps described here.")

