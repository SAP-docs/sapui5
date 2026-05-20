<!-- loio9c63472d0c8542ef89f054046de5d053 -->

# Save and Navigation Options on the Object Page

You can configure navigation options on the object page.

> ### Note:  
> This topic is relevant to SAP Fiori elements for OData V2. For information about SAP Fiori elements for OData V4, see [Save and Navigation Options on the Object Page](save-and-navigation-options-on-the-object-page-55d81bc.md).

When creating, editing, and saving draft or non-draft records, the user stays on the object page by default.



<a name="loio9c63472d0c8542ef89f054046de5d053__section_fk1_njb_1cb"/>

## Enabling *Save and Back* and *Create and Back*

You can configure the footer toolbar of the object page to include buttons enabling users to navigate directly back to the list report page when saving or creating an object. These buttons are added next to the *Save* button.

When enabled, this feature adds the following secondary action buttons to the footer toolbar of the object page:

-   *Save and Back*: available on the object page in edit mode
-   *Create and Back*: available on the object page in create mode

On object page in edit mode, enabling the feature replaces the default *Save* button with the *Save and Back* button.

When users click the *Save and Back* or *Create and Back* button, the draft record is saved, and the users are automatically taken back to the list report page.

To enable the feature, set the `navToListOnSave` property to `true` in the `manifest.json` file.

> ### Sample Code:  
> `manifest.json`
> 
> ```
> 
> {
>     "sap.ui.generic.app": {
>         "pages": {
>             "ListReport|C_STTA_SalesOrder_WD_20": {
>                 "component": {
>                     "settings": {
>                         "editFlow": "display"
>                     }
>                 },
>                 "pages": {
>                     "ObjectPage|C_STTA_SalesOrder_WD_20": {
>                         "component": {
>                             "settings": {
>                                 "navToListOnSave": true,
>                             }
>                         }
>                     }
>                 }
>             }
>         }
>     }
> }
> ```

