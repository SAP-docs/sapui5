<!-- loiode25ca72c0b0448fba2d0708527dbd77 -->

# Enabling Lazy Loading for Custom Sections

You can enable lazy loading for the sections you've added using an extension point.

> ### Note:  
> This topic is applicable only to SAP Fiori elements for OData V2.

By default, lazy loading is enabled for the standard sections on the object page. For sections added using extension points, you need to enable lazy loading by setting the `enableLazyLoading` parameter to `true` in the `manifest.json` file of your application. To do so, proceed as shown in the following sample code:

```
"sap.suite.ui.generic.template.ObjectPage.view.Details": {
  "AfterFacet|STTA_C_MP_Producttext|ProductTextCollectionFacetID":{
    "className": "sap.ui.core.Fragment",
    "fragmentName": "STTA_MP.ext.fragments.ApplicationLogBreakout",
    "type": "XML",
    "sap.ui.generic.app": {
      "title": "{{xtit.applicationLog}}",
      "enableLazyLoading": true
    }
  },

```

> ### Note:  
> Set the parameter only for those sections that have no impact on other sections or on the object page header.

For more information about lazy loading, see the [SAP Fiori Design Guidelines](https://experience.sap.com/fiori-design-web/object-page/#structure) and the *API Reference* for [`ObjectPageLayout`](https://ui5.sap.com/#/api/sap.uxap.ObjectPageLayout).

