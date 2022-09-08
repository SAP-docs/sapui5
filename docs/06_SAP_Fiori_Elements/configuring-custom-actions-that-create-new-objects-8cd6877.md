<!-- loio8cd6877568094e9daac480f6171dbafd -->

# Configuring Custom Actions that Create New Objects

Applications can configure custom actions that create new objects.

If a user triggers the action, note the following behavior in a draft application: if the back-end system returns a draft object as the result of the action, the front-end system automatically navigates to the object page where the new draft object is opened in edit mode.



<a name="loio8cd6877568094e9daac480f6171dbafd__section_j3j_m3q_nsb"/>

## Additional Features in SAP Fiori Elements for OData V4

For sticky applications, the object page is opened in edit mode if you have defined the action in the `StickySessionSupported` annotation term for the properties `NewAction` or `AdditionalNewActions`. Otherwise, the object page is opened by default in display mode.

