<!-- loiof1430c0337534d469da3a56307ff76af -->

<link rel="stylesheet" type="text/css" href="../css/sap-icons.css"/>

# SAPUI5 Flexibility: Enable Your App for UI Adaptation

Here's what you have to consider when developing apps that support UI adaptation.



UI adaptation is a feature of SAPUI5 flexibility that allows key users without technical knowledge to easily make UI changes for all users of an app, end users to personalize controls, and developers to extend the UIs of SAPUI5 applications. For more information, see [SAPUI5 Flexibility: Adapting UIs Made Easy](../04_Essentials/sapui5-flexibility-adapting-uis-made-easy-a8e55aa.md).

You can enable your application for UI adaptation by following a few simple steps.



<a name="loiof1430c0337534d469da3a56307ff76af__section_syd_hwt_5hb"/>

## Use the `flexEnabled` flag

This flag in the `manifest.json` indicates that your application is enabled for UI adaptation. As of app descriptor schema version 12 \(`_version: 1.11`\), which was introduced with SAPUI5 version 1.56, the `flexEnabled` flag in the `sap.ui5` section of the `manifest.json` indicates if the application supports UI adaptation.

If you set this flag, make sure that you provide stable IDs and follow the rules and guidance on this page.



### Example

Please note that the `_version` property must be at least `1.11.0`.

```json
{    "_version": "1.11.0"    […]    "sap.ui5": {        "flexEnabled": true,    […]}
```

> ### Caution:  
> If you set the flag to `false`, your application won't work with any UI adaptation tool. In certain scenarios it can make sense to do this, for example, for a beta release when you still expect major changes for the app. However, do not change the `flexEnabled` flag to `false` **after** your application has been delivered. This would lead to incompatibilities and regressions if a key user has adapted the UI in the meantime.

> ### Tip:  
> In case you want certain parts of your app to remain unchanged, you can restrict adaptation for the corresponding controls, see [Restrict Adaptation for Certain Controls](enabling-ui-adaptation-other-things-to-consider-de9fd55.md#loiode9fd55c69af4b46863f5d26b5d796c4__section_restrictadaptation).



<a name="loiof1430c0337534d469da3a56307ff76af__section_sxm_gyt_5hb"/>

## Very important: Use stable IDs

Stable IDs are used to identify the controls that can be changed via UI adaptation or personalization. For this reason, every control and view in your application must have a stable ID. For more information, see [Stable IDs: All You Need to Know](stable-ids-all-you-need-to-know-f51dbb7.md). Here, you also find information on how to check if all your IDs are stable.

If your app is based on SAP Fiori elements, it automatically generates IDs for its controls. You only have to set stable IDs if you use extension points to modify it, for example to add an additional view.

> ### Caution:  
> Never change or delete the IDs when you're creating the next version of your app if the app was already delivered. Otherwise you'd risk inconsistencies and the loss of UI changes that a developer \(in an adaptation project\) or a key user might have done in the delivered version.

> ### Note:  
> Even if you don't want a control to be adaptable, it still should have a stable ID. To deactivate the adaptation of a certain control in your application, see the section *Restrict adaptation for certain controls* in [Enabling UI Adaptation: Other Things to Consider](enabling-ui-adaptation-other-things-to-consider-de9fd55.md).

> ### Tip:  
> With the <code>Stable control IDs are required for SAPUI5 flexibility services</code> rule in the Support Assistant, you can check whether all controls have stable IDs. For more information, see [Stable IDs: All You Need to Know](stable-ids-all-you-need-to-know-f51dbb7.md).



<a name="loiof1430c0337534d469da3a56307ff76af__section_emz_s3n_2jb"/>

## Use SAPUI5 controls supported by UI adaptation

More than 60 controls, such as forms, pages, tool bars, and input elements, support UI adaptation and the number is growing.

If you want to know whether a control is enabled for key user adaptation, go to the [Samples](https://ui5.sap.com/#/controls). Pick a control, open the sample, and choose :wrench: \(*Adapt UI*\) at the top right. If UI elements in the sample are highlighted when you hover over or select them, it's an indicator that the control is enabled for UI adaptation. You can also try out the UI adaptation features directly in the sample.

> ### Note:  
> Table, filter bar and chart controls from the `sap.ui.comp` library can't be adapted. However, you use a `sap.ui.comp.VariantManagement` control, key users can create variants for these controls \(called "views"\) and make them available for certain or all end users. End users themselves can personalize such controls on the UI and save views for themselves. End users can also share personalized views with other end users. For more information see [Smart Variant Management](../10_More_About_Controls/smart-variant-management-06a4c3a.md).



<a name="loiof1430c0337534d469da3a56307ff76af__section_async"/>

## Stashed-based lazy loading: Load your views asynchronously

If you use stashing to load pages \(`stashed=true`\), you need to load your views asynchronously. Otherwise key user changes will get lost as soon as the app is reloaded. Asynchronous loading is a good idea anyway to improve the performance of your app, but make sure that asynchronicity is in place when you use stashing. For more information, see the [API Reference for `sap.uxap.ObjectPageLazyLoader`](https://ui5.sap.com/#/api/sap.uxap.ObjectPageLazyLoader) as well as [Instantiating Views](../04_Essentials/instantiating-views-68d0e58.md)



<a name="loiof1430c0337534d469da3a56307ff76af__section_ControllerCode"/>

## Controller Code

Normally, UI changes should win over binding and application coding. However, there is no distinct point in time when all controls are available. This consequently means that there is also no single event when all changes have been applied, because, for example, new changes can be introduced through user interactions.

The following mechanisms ensure that changes usually win over application coding:

-   For controls in the XML view, changes are applied during the XML view processing.
-   For controls that are created by your controller code, for example controls that are part of a group and are later placed inside an existing control, the changes are applied when the control is added to the SAPUI5 control tree.

However, with too many complexities or dynamics in the controller code, you can inadvertently overrule changes done by the key user. Example: If a key user removes \(i.e., hides\) a control and your controller code overwrites its visibility property afterwards, the key user change doesn't have an effect. If you cannot avoid this case because of some app-specific reasons, you should at least restrict the availability of certain actions as described under [Restrict Adaptation for Certain Controls](enabling-ui-adaptation-other-things-to-consider-de9fd55.md#loiode9fd55c69af4b46863f5d26b5d796c4__section_restrictadaptation).

Keep in mind that the positions of controls can change if the key user moves them on the UI. Controls might end up in different aggregations and at different index positions from what you specified. Therefore, you should only access controls by their ID.

> ### Note:  
> If you access `ObjectPageSections` and controls within `ObjectPageSections`, they might be stashed after the key user removes them. In this case, the stashed control \(i.e. the `ObjectPageSection`\) will remain as an empty placeholder, but any controls within the stashed control will be removed. This means that the control is not processed and therefore not instantiated. Your code shouldn't break in this case.

It's okay to create additional controls dynamically, for example, as a result of user interaction. If you dynamically add controls to the UI, make sure to set all properties before you add them to an aggregation of a parent control, ideally as part of the constructor. With this, you prevent that changes that key user made to the control are overridden.

> ### Tip:  
> Use data binding whenever possible to express UI state changes.



<a name="loiof1430c0337534d469da3a56307ff76af__section_hfx_t14_2jb"/>

## How can I change my app without breaking the key user's changes?

In general, you can change your app without any problems, as long as you keep the following in mind:

-   Don't change control IDs. If you change control IDs, the app will still start, but any existing changes related to this ID will not be applied anymore.
-   Don't change view hierarchies, because the control IDs depend on the view IDs or fragment IDs.
-   Don't remove controls that had a stable ID before.



<a name="loiof1430c0337534d469da3a56307ff76af__section_szb_d1n_myb"/>

## Enabling UI Adaptation for Apps Running Standalone

In addition, for SAPUI5 apps running standalone \(not in an SAP Fiori launchpad\), you need the following:

-   A back end needs to be available, and you need to set it up.

    If you're developing on SAP BTP, Cloud Foundry environment, you need to set up the [UI5 flexibility service for key users](https://help.sap.com/docs/ui5-flexibility-for-key-users).

-   Make sure that the `sap.ui.fl` library is loaded. You can do this in either of the following ways:

    -   Configure the KeyUserConnector in the SAPUI5 bootstrap. For more information, see [Bootstrapping SAPUI5 Flexibility](../04_Essentials/bootstrapping-sapui5-flexibility-642dab2.md).

    -   Declare a dependency to the `sap.ui.fl` library in the `manifest.json` file, under `sap.ui5/dependencies/libs`.

        > ### Sample Code:  
        > manifest.json
        > 
        > ```
        >     "sap.ui5": {        "dependencies": {            …            "libs": {                "sap.ui.fl": {},                …            }        },        …
        > ```





<a name="loiof1430c0337534d469da3a56307ff76af__section_jfn_ctd_ygb"/>

## Something isn't working like it should?

Please check the troubleshooting information.

> ### Caution:  
> UI changes, similar to any UI coding, cannot replace back-end validations and authorizations. For example, when an action is hidden via a change, the change processing could be blocked or the action could be reached by the browser console, so that the action could still be triggered.

For more information, see [Troubleshooting](troubleshooting-3527428.md).

You can also check out our [Enabling UI Adaptation: Other Things to Consider](enabling-ui-adaptation-other-things-to-consider-de9fd55.md) page for additional tips and tricks..

For more information about how key user adaptation works for key users and how it gets enabled in the SAP Fiori launchpad, search for `Adapting SAP Fiori UIs at Runtime` and `Enabling UI Adaptation at Runtime` in the documentation for your [SAP NetWeaver](https://help.sap.com/viewer/p/SAP_NETWEAVER) version on the SAP Help Portal.

For more information on SAPUI5 flexibility in SAP Fiori Elements, see [Adapting the UI](../06_SAP_Fiori_Elements/adapting-the-ui-59bfd31.md) and [Enabling an App for Key User Adaptation](../06_SAP_Fiori_Elements/enabling-an-app-for-key-user-adaptation-ccd45ba.md).

**Related Information**  


[SAPUI5 Flexibility: Adapting UIs Made Easy](../04_Essentials/sapui5-flexibility-adapting-uis-made-easy-a8e55aa.md "Modification-free, cost-saving, easy to use, and performant: Discover the new flexibility when adapting SAP Fiori UIs using SAPUI5 flexibility.")

[Manifest \(Descriptor for Applications, Components, and Libraries\)](../04_Essentials/manifest-descriptor-for-applications-components-and-libraries-be0cf40.md "The manifest (also known as descriptor for applications, components, and libraries, in short: app descriptor) is inspired by the WebApplication Manifest concept introduced by the W3C. The manifest provides a central, machine-readable, and easy-to-access location for storing metadata associated with an application, an application component, or a library.")

[Stable IDs: All You Need to Know](stable-ids-all-you-need-to-know-f51dbb7.md "Stable IDs are IDs for controls, elements, or components that you set yourself in the respective id property or attribute as opposed to IDs that are generated by SAPUI5. Stable means that the IDs are concatenated with the application component ID and do not have any auto-generated parts.")

[Extending an SAP Fiori Application](https://help.sap.com/viewer/584e0bcbfd4a4aff91c815cefa0bce2d/Cloud/en-US/ada9567b767941aba8d49fdb4fdedea7.html)

