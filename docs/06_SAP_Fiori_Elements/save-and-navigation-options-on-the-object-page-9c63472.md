<!-- loio9c63472d0c8542ef89f054046de5d053 -->

# Save and Navigation Options on the Object Page

You can configure navigation options on the object page.

> ### Note:  
> For information about SAP Fiori elements for OData V4, see [Save and Navigation Options on the Object Page](save-and-navigation-options-on-the-object-page-55d81bc.md).

When creating, editing, and saving draft or non-draft records, the user stays on the object page by default.



<a name="loio9c63472d0c8542ef89f054046de5d053__section_fk1_njb_1cb"/>

## Save and Close Feature - Navigation to List Report Page

You can add a save and close logic to the *Save* button on the object page to enable users to navigate directly back to the list report page. If the user clicks the button, the draft record is saved and the user automatically navigates to the list report page.

To enable this feature, set the `navToListOnSave` flag to `true` in the `manifest.json` file.

> ### Sample Code:  
> `manifest.json`
> 
> ```
> "pages": {
>     "ObjectPage|STTA_C_MP_Product": {
>         "entitySet": "STTA_C_MP_Product",
>         "component": {
>             "name": "sap.suite.ui.generic.template.ObjectPage",
>             "settings": {
>                 "navToListOnSave": true,
>                 "showRelatedApps": true,
>                 "tableType": "ResponsiveTable",
>                 "editableHeaderContent": true,
>                 "showConfirmationOnDraftActivate": true,
>                 "sections": {
>                     "to_ProductText::com.sap.vocabularies.UI.v1.LineItem": {
>                         "navigationProperty": "to_ProductText",
>                         "entitySet": "STTA_C_MP_ProductText",
>                         "multiSelect": true,
>                         "createMode": "inline",
>                         "tableType": "ResponsiveTable"
>                     }
>                 }
>             }
>         }
>     }
> }
> ```

If the flag is set to `true`, the user automatically navigates to the list report page as soon as the draft record has been saved.

If the flag is set to `false` or if the flag is not set at all, the user stays on object page which is also the default behavior.

