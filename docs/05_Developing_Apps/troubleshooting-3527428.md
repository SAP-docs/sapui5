<!-- loio35274280504f42cd87cc4fd3d403ca91 -->

# Troubleshooting

Click the sections below, to find tips and solutions to some common problems.



<a name="loio35274280504f42cd87cc4fd3d403ca91__visualization"/>

## Some key user changes can't be visualized

A key user wants to visualize their UI changes, but the overview of visualizations says that some changes can't be visualized. Possible reasons:

-   The non-visualized changes are part of a dialog or a popover that is currently not displayed.
-   The section, group, or form that contained the non-visualized change is no longer available \(for example, because the key user has deleted it\).
-   The change visualization feature doesn't support certain UI changes yet, such as table or filter changes.



<a name="loio35274280504f42cd87cc4fd3d403ca91__section_gwc_l5d_zz"/>

## I can't add an OData property

Check the following:

-   Is the field control invisible? If yes, the field doesn't get displayed in the list of available fields.

-   Ensure that the appropriate entity type is bound to the control.




<a name="loio35274280504f42cd87cc4fd3d403ca91__section_bmb_v5d_zz"/>

## I've changed a UI element, but the change is not applied everywhere

UI elements that you change in one place might not be changed in all other places where they are used. Reason: Key user adaptation allows to change controls, not data or metadata. For example, if you rename a label defined in the OData metadata \(annotations\), the label is not changed everywhere in the app, and you must rename each occurrence individually.



<a name="loio35274280504f42cd87cc4fd3d403ca91__section_hbc_2xd_zz"/>

## The control has a stable ID, but the new group I've created doesn't

If you create a control ID within fragments or controller code, the ID of the parent view might not be part of the control ID. Thus, the control can have a stable ID, but the view doesn't. As the view ID is needed to create the ID for a new container when using *Create Group*, the view ID has to be stable \(otherwise the container ID is not stable\).



<a name="loio35274280504f42cd87cc4fd3d403ca91__section_s4v_tl1_h2b"/>

## UI Adaptation cannot be started, because the application version is missing or incorrect

This error refers to the `applicationVersion` attribute in the app descriptor \(`manifest.json` file\). If this mandatory attribute is missing or invalid, the UI cannot be adapted.

For more information about the app descriptor and its attributes, see [Manifest \(Descriptor for Applications, Components, and Libraries\)](../04_Essentials/manifest-descriptor-for-applications-components-and-libraries-be0cf40.md)



<a name="loio35274280504f42cd87cc4fd3d403ca91__section_ufg_pfb_chb"/>

## My key users and/or end users get a message that says the app is not enabled for adaptation or personalization

Reason: In the `sap.ui5` section of the `manifest.json`, the `flexEnabled` flag is set to `false`. To enable adaptation/personalization for your users, set this flag to `true`.



> ### Tip:  
> For more information about the FAQ for users of key user adaptation, search for `Something Isn't Working like It Should?` in the documentation for your [SAP NetWeaver](https://help.sap.com/viewer/p/SAP_NETWEAVER) version on the SAP Help Portal.

**Related Information**  


[SAPUI5 Flexibility: Enable Your App for UI Adaptation](sapui5-flexibility-enable-your-app-for-ui-adaptation-f1430c0.md "Here's what you have to consider when developing apps that support UI adaptation.")

