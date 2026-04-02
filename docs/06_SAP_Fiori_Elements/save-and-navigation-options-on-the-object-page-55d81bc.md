<!-- loio55d81bc6997349f29e7b401ec1e16454 -->

# Save and Navigation Options on the Object Page

You can configure navigation options on the object page.

When creating, editing, and saving draft or non-draft records, the users stay on the object page by default. However, you can configure additional navigation options.



<a name="loio55d81bc6997349f29e7b401ec1e16454__section_sph_wpc_yhc"/>

## Enabling *Save and Back* and *Create and Back*

You can configure the footer toolbar of the object page to include buttons, which enable users to navigate directly back to the list report page when saving or creating an object.

When enabled, this feature adds the following secondary action buttons to the footer toolbar of the object page:

-   *Save and Back*: available on the object page in edit mode
-   *Create and Back*: available on the object page in create mode

When the users click the *Save and Back* or *Create and Back* button, the draft record is saved, and they are automatically taken back to the list report page.

To enable the buttons, set the `enableSaveAndLeave` property to `true` in the `manifest.json` file.

> ### Sample Code:  
> `manifest.json`
> 
> ```
> 
> {
>     "sap.fe": {
>         "app": {
>             "enableSaveAndLeave": true
>         }
>     }
> }
> 
> ```



> ### Note:  
> For information about SAP Fiori elements for OData V2, see [Save and Navigation Options on the Object Page](save-and-navigation-options-on-the-object-page-9c63472.md).

