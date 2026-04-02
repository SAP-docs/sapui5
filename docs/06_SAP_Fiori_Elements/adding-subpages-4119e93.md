<!-- loio4119e9387d10436db5c7d697d96fb393 -->

# Adding Subpages

You can add additional subpages based on the object page template to your app, and, if required, remove them again.

> ### Note:  
> For information about SAP Fiori elements for OData V4, see [Navigation to Subpages](navigation-to-subpages-5d49e31.md).

We recommend that you use [SAP Fiori tools](https://help.sap.com/viewer/product/SAP_FIORI_tools/Latest/en-US), which is a set of extensions for SAP Business Application Studio and Visual Studio Code, to add, remove, and configure pages with the Page Map tool.



<a name="loio4119e9387d10436db5c7d697d96fb393__section_aqf_fpr_1mb"/>

## Adding and Removing Further Subpages

You can add further subpages manually in the `manifest.json` file post-generation.

You can also use the SAP Fiori generator to create a subpage \(detail page\) for the object page when you create your app. This is expressed in the code as a 1:n association to the root entity and is rendered as a table on the page.

```json

"sap.ui.generic.app":{
   "pages":{
      "entitySet":"SEPMRA_I_ProductWithDraft",
      "component":{
         "name":"sap.suite.ui.generic.template.ListReport",
         "list":true
      },
      "pages":{
         "entitySet":"SEPMRA_I_ProductWithDraft",
         "component":{
            "name":"sap.suite.ui.generic.template.ObjectPage"
         },
         "pages":{
            "entitySet":"SEPMRA_I_ProductTextWithDraft",
            "navigationProperty":"to_ProductText",
            "component":{
               "name":"sap.suite.ui.generic.template.ObjectPage"
            }
         }
      }
   }
},
```

When first and second level entities are selected during app creation, navigation from the object page to the subpage is automatic based on the configuration. You can remove this configuration from the manifest to delete the subpage and its corresponding link from the object page.

> ### Caution:  
> SAP Web IDE is no longer available from SAP Business Technology Platform trial accounts. Any references to SAP Web IDE in this documentation are only relevant for you if you have access to SAP Web IDE through a productive SAP BTP account. Please consider SAP Business Application Studio as an alternative. See [App Development Using SAP Business Application Studio](../05_Developing_Apps/app-development-using-sap-business-application-studio-6bbad66.md).



<a name="loio4119e9387d10436db5c7d697d96fb393__section_tcd_xsm_bmb"/>

## Related Links

For information about defining an external navigation target using intent-based navigation, see [Changing Navigation to Object Page](changing-navigation-to-object-page-1154c02.md).

