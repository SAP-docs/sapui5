<!-- loio55d81bc6997349f29e7b401ec1e16454 -->

# Save and Navigation Options on the Object Page

When creating, editing, and saving draft or non-draft records, the user stays on the object page by default.

> ### Note:  
> This topic is currently only applicable to SAP Fiori elements for OData V2.



<a name="loio55d81bc6997349f29e7b401ec1e16454__section_fk1_njb_1cb"/>

## Save and Close Feature - Navigation to List Report

You can add save and close logic to the *Save* button on the object page to enable users to navigate directly back to the list report. If the user clicks the button, the draft record is saved and the user automatically navigates to the list report page.

To enable this feature, set the `navToListOnSave` flag to `true` in the `manifest.json`.

```
"pages": {
                                  "ObjectPage|STTA_C_MP_Product": {
                                         "entitySet": "STTA_C_MP_Product",
                                         "component": {
                                                "name": "sap.suite.ui.generic.template.ObjectPage",
                                                "settings": {
                                                       "navToListOnSave": true,
                                                       "showRelatedApps": true,
                                                       "tableType": "ResponsiveTable",
                                                       "editableHeaderContent": true,
                                                      
                                                       "sections": {
                                                              "to_ProductText::com.sap.vocabularies.UI.v1.LineItem": {
                                                                     "navigationProperty": "to_ProductText",
                                                                     "entitySet": "STTA_C_MP_ProductText",
                                                                     "multiSelect": true,
                                                                     "createMode": "inline",
                                                                     "tableType": "ResponsiveTable"
                                                              }
                                                       }
                                                }
                                         },

```

If the flag is set to `true`, the user automatically navigates to the list report page as soon as the draft record has been saved.

If the flag is set to `false` or if the flag is not set at all, the user stays on object page which is also the default behavior.

