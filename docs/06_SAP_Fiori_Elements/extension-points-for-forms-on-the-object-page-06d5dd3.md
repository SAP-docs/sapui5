<!-- loio06d5dd3a9065439ca9d71f570bdd609c -->

# Extension Points for Forms on the Object Page

On the object page, you can use extension points to extend forms in sections.

> ### Caution:  
> Use app extensions with caution and only if you cannot produce the required behavior by other means, such as manifest settings or annotations. To correctly integrate your app extension coding with SAP Fiori elements, use only the `extensionAPI` of SAP Fiori elements. For more information, see [Using the extensionAPI](using-the-extensionapi-a5a4ec6.md).
> 
> After you've created an app extension, its display \(for example, control placement and layout\) and system behavior \(for example, model and binding usage, busy handling\) lies within the application's responsibility. SAP Fiori elements provides support only for the official `extensionAPI` functions. Don't access or manipulate controls, properties, models, or other internal objects created by the SAP Fiori elements framework.

Use the `"SmartFormExtension|<entity name>|<fieldgroup annotation>"` key in the manifest entry to add new fields to an existing field group. In the example below, an extension is added to the *General Information* field group.

> ### Sample Code:  
> ```
> 
> "sap.suite.ui.generic.template.ObjectPage.view.Details": {
>     "SmartFormExtension|STTA_C_MP_Product|com.sap.vocabularies.UI.v1.FieldGroup::GeneralInformation": {
>         "className": "sap.ui.core.Fragment",
>         "fragmentName": "STTA_MP.ext.fragments.SmartFormGroupElement",
>         "type": "XML"
>     }
> }
> ```

> ### Note:  
> `SmartForm Extension` supports only `sap.ui.core.Fragment` for the `className`.

For more information, see [Defining and Adapting Sections](defining-and-adapting-sections-b72681d.md).

