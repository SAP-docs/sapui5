<!-- loio1bfddc3619dd42d7b938d4bebbca4b89 -->

# Extension Points for Sections on the Object Page

You can use extension points to add additional sections to the object page.

> ### Note:  
> For information about SAP Fiori elements for OData V4, see [Extension Points for Sections on the Object Page](extension-points-for-sections-on-the-object-page-92ad996.md).

> ### Caution:  
> Use app extensions with caution and only if you cannot produce the required behavior by other means, such as manifest settings or annotations. To correctly integrate your app extension coding with SAP Fiori elements, use only the `extensionAPI` of SAP Fiori elements. For more information, see [Using the extensionAPI](using-the-extensionapi-a5a4ec6.md).
> 
> After you've created an app extension, its display \(for example, control placement and layout\) and system behavior \(for example, model and binding usage, busy handling\) lies within the application's responsibility. SAP Fiori elements provides support only for the official `extensionAPI` functions. Don't access or manipulate controls, properties, models, or other internal objects created by the SAP Fiori elements framework.

You define application-specific sections in the form of annotations. However, in some cases you might need to integrate components into the front end, for example charts or attachments.

> ### Tip:  
> Use the term `facet` to add a section to the object page in the `manifest.json` file.

On the object page, you can use extension points to add additional sections in these places:

-   `BeforeFacet`: The extension is inserted before a given section.

-   `ReplaceFacet`: The extension is rendered instead of an existing section.

-   `AfterFacet`: The extension is inserted after a given section.


You need to specify the section in the form of its annotation path. In addition, you must specify the `entitySet` name, as the same annotation path may exist for various entity sets.

You add this information to the `manifest.json` file, as shown in the following sample code:

```

"extends": {
    "extensions": {
        "sap.ui.viewExtensions": {
	   "sap.suite.ui.generic.template.ObjectPage.view.Details":
      "BeforeFacet|SEPMRA_C_PD_Product|to_ProductText::com.sap.vocabularies.UI.v1.LineItem": {
      "className": "sap.ui.core.Fragment",
      "fragmentName": "nw.epm.refapps.st.prod.manage.ext.BeforeFacetTest",
      "type": "XML",
      "sap.ui.generic.app": {
         "title": "Facet Breakout before Product Text LineItem"
      }
     },
     "BeforeFacet|SEPMRA_C_PD_Product|to_ProductText::com.sap.vocabularies.UI.v1.LineItem|1": {
      "className": "sap.ui.core.Fragment",
      "fragmentName": "nw.epm.refapps.st.prod.manage.ext.BeforeFacetTestNew",
      "type": "XML",
      "sap.ui.generic.app": {
         "title": "Facet Breakout before Product Text LineItem",
          "key" : "1"
      }
     }
     "AfterFacet|SEPMRA_C_PD_Product|to_Supplier::com.sap.vocabularies.UI.v1.Identification": {
      "className": "sap.ui.core.Fragment",
      "fragmentName": "nw.epm.refapps.st.prod.manage.ext.AfterFacetTest",
      "type": "XML",
      "sap.ui.generic.app": {
         "title": "Facet Breakout after Supplier Identification"
      }
     },
     "AfterFacet|SEPMRA_C_PD_Product|to_Supplier::com.sap.vocabularies.UI.v1.Identification|1": {
      "className": "sap.ui.core.Fragment",
      "fragmentName": "nw.epm.refapps.st.prod.manage.ext.AfterFacetTest",
      "type": "XML",
      "sap.ui.generic.app": {
         "title": "Facet Breakout after Supplier Identification",
         "key": 1
      }
}
}

```

> ### Note:  
> You can specify either a view or a fragment contained in the additional section. Either way, you do not need to use the object page \(uxap\) tags `ObjectPageSection`, `subSections`, or `ObjectPageSubSection`. These definitions are already part of the template for the object page view. Additional sections are rendered if an extension exists.

For an example with step-by-step instructions, see [Adding a Custom Section to an Object Page](adding-a-custom-section-to-an-object-page-b75af69.md).

For more information, see [Extension Points](../08_Extending_SAPUI5_Applications/extension-points-403c050.md).

