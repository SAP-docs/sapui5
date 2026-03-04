<!-- loio55d81bc6997349f29e7b401ec1e16454 -->

# Save and Navigation Options on the Object Page

When creating, editing, and saving draft or non-draft records, the user stays on the object page by default.



<a name="loio55d81bc6997349f29e7b401ec1e16454__section_mqv_ypc_yhc"/>

## Additional Features in SAP Fiori Elements for OData V2



### Save and Close Feature - Navigation to List Report Page

You can add a save-and-close logic to the *Save* button on the object page to enable users to navigate directly back to the list report page. If the user clicks the button, the draft record is saved and the user automatically navigates to the list report page.

To enable this feature, set the `navToListOnSave` property to `true` in the `manifest.json` file.

> ### Sample Code:  
> `manifest.json`
> 
> ```
> 
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
>                 
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
> 
> ```

If the property is set to `true`, the user automatically navigates to the list report page as soon as the draft record has been saved.

If the property is set to `false` or if the property is not set at all, the user stays on object page which is also the default behavior.



<a name="loio55d81bc6997349f29e7b401ec1e16454__section_sph_wpc_yhc"/>

## Additional Features in SAP Fiori Elements for OData V4



### Enabling *Save and Leave* and *Create and Leave*

You can configure the *Save* and *Create* buttons on the object page to enable users to navigate directly back to the list report page when saving or creating an object.

When enabled, this feature adds the *Save and Leave* menu option to the *Save* button, and the *Create and Leave* menu option to the *Create* button. When the user clicks either of the buttons, the draft record is saved, and the user is automatically taken back to the list report page.

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

