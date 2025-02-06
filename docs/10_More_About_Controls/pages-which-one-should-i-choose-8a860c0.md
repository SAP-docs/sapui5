<!-- loio8a860c05f38145029c4dcab75ac11ba7 -->

# Pages: Which One Should I Choose?

SAPUI5 applications are used in different environments: They can either be embedded within shells that come with their own header or they are displayed standalone without such a shell around them. This has implications on how the header area of an SAPUI5 application should look like.



<a name="loio8a860c05f38145029c4dcab75ac11ba7__section_s33_lmb_ffb"/>

## Standalone App

A **standalone SAPUI5 application** could use `sap.m.Page` controls as root controls of its views. The `Page` control provides a visually distinguished header bar with space for an application \(or page\) title and has a built-in *Back* button allowing the user to navigate back to the previous page. You can enable the *Back* button by setting the `Page`'s `showNavButton` property to `true`.



<a name="loio8a860c05f38145029c4dcab75ac11ba7__section_dtc_x2m_3fb"/>

## Embedded App

An **embedding shell** \(like SAP Build Work Zone or the SAP Fiori launchpad\) might already come with its own header containing a *Back* button and space for a title. Using an `sap.m.Page` control would then lead to a duplicate header and possibly even a duplicate *Back* button.

The `sap.f.DynamicPage` control could be your preferred alternative in such a scenario as it comes without a header bar and *Back* button but still offers the option to configure a title if needed, as well as many other features on top of a plain `sap.m.Page`.

Further alternatives are `sap.f.semantic.SemanticPage` and `sap.uxap.ObjectPageLayout`, depending on your use case. Note that these are part of control libraries other than `sap.m`, so you would need to add the respective library to your application setup. For some scenarios, the `sap.tnt.ToolPage` may also be a suitable alternative. But you could also configure the `sap.m.Page` to have its header hidden.



<a name="loio8a860c05f38145029c4dcab75ac11ba7__section_pln_lng_ldc"/>

## Conclusion

There is no one-size-fits-all recommendation on which page type to use for your app, so it's important to be aware of the above considerations. For further guidance, refer to the [SAP Fiori for Web Design Guidelines regarding page layouts and floorplans](https://experience.sap.com/fiori-design-web/floorplan-overview/).

**Related Information**  


[API Reference: sap.m.Page](https://ui5.sap.com/#/api/sap.m.Page)

[API Reference: sap.f.DynamicPage](https://ui5.sap.com/#/api/sap.f.DynamicPage)

[API Reference: sap.f.semantic.SemanticPage](https://ui5.sap.com/#/api/sap.f.semantic.SemanticPage)

[API Reference: sap.uxap.ObjectPageLayout](https://ui5.sap.com/#/api/sap.uxap.ObjectPageLayout)

[API Reference: sap.tnt.ToolPage](https://ui5.sap.com/#/api/sap.tnt.ToolPage)

