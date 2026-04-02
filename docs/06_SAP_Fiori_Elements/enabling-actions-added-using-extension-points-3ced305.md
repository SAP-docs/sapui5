<!-- loio3ced305a78a740b0965e5c6f993091ce -->

# Enabling Actions Added Using Extension Points

You can enable actions added to the list report page and the object page using extension points through certain settings in the `manifest.json` file.

> ### Note:  
> For information about SAP Fiori elements for OData V4, see [Enabling Actions Added Using Extension Points](enabling-actions-added-using-extension-points-dd78aca.md).

> ### Caution:  
> Use app extensions with caution and only if you cannot produce the required behavior by other means, such as manifest settings or annotations. To correctly integrate your app extension coding with SAP Fiori elements, use only the `extensionAPI` of SAP Fiori elements. For more information, see [Using the extensionAPI](using-the-extensionapi-a5a4ec6.md).
> 
> After you've created an app extension, its display \(for example, control placement and layout\) and system behavior \(for example, model and binding usage, busy handling\) lies within the application's responsibility. SAP Fiori elements provides support only for the official `extensionAPI` functions. Don't access or manipulate controls, properties, models, or other internal objects created by the SAP Fiori elements framework.

On the list report page and in tables on the object page, you can specify that a user must make a selection before an action button is enabled. In addition, you can use the `applicablePath` setting for the action, which will then use data from the back-end system to determine whether the action is valid for the selection, and thus whether the button should be enabled or disabled.

If more than one row is selected on the list report page or table, or if one `applicablePath` setting from a selection evaluates to `true`, the action button will be enabled. The back-end system must then return the appropriate message for cases in which the action cannot be performed.

When an action is placed in the header or footer of the object page, it is enabled by default. In this case, the actions consider only the `applicablePath` setting for the product represented by the object page, as in this instance the object page itself is considered the selection. Therefore, when the `applicablePath` for the product evaluates to `false`, the action button is hidden \(not visible\) on the object page.

> ### Note:  
> Using the `applicablePath` setting is optional. If you do not use it, the action is always enabled.



<a name="loio3ced305a78a740b0965e5c6f993091ce__section_vgs_xl5_ghc"/>

## Code Samples

To set up and control the display of your actions, in the `manifest.json` file, use the properties `requiresSelection` and `applicablePath`.



### List Report Page \(Action in Table Header\)

The following code sample shows how to enable an action based on a row selection and an applicable path

> ### Sample Code:  
> `manifest.json`
> 
> ```
> 
> "sap.ui5": {
>     "extends": {
>         "extensions": {
>             "sap.ui.controllerExtensions": {
>                 "sap.suite.ui.generic.template.ListReport.view.ListReport": {
>                     "controllerName": "my_app.ext.controller.ListReportExtension",
>                     "sap.ui.generic.app": {
>                         "<entity set>": {
>                             "EntitySet": "<entity set>",
>                             "Actions": {
>                                 "<Action 1>": {
>                                     "id": "<id>",
>                                     "text": "<button text>",
>                                     "press": "<handler function>",
>                                     "requiresSelection": true,
>                                     "applicablePath": "<entity type property>"
>                                 },
>                                 "<Action 2>": {
>                                     "id": "<id>",
>                                     "text": "<button text>",
>                                     "press": "<handler function>",
>                                     "requiresSelection": true
>                                 }
>                             }
>                         }
>                     }
>                 }
>             }
>         }
>     }
> }
> ```



### Object Page \(Action in Header or Table Within a Section\)

The following code sample shows examples of how to set up your `manifest.json` file for application-specific actions in the object page header and table toolbar button in a section. The enable/disable behavior of the button is determined by the applicable path and row selection.

> ### Sample Code:  
> `manifest.json`
> 
> ```
> "sap.ui5": {
>     "extends": {
>         "extensions": {
>             "sap.ui.controllerExtensions": {
>                 "sap.suite.ui.generic.template.ObjectPage.view.Details#my_app::sap.suite.ui.generic.template.ObjectPage.view.Details::<entity set>": {
>                     "controllerName": "my_app.ext.controller.DetailsExtension",
>                     "sap.ui.generic.app": {
>                         "<entity set>": {
>                             "EntitySet": "<entity set>",
>                             "Header": {
>                                 "Actions": {
>                                     "<Action 1>": {
>                                         "id": "<id>",
>                                         "text": "<button text>",
>                                         "press": "<handler function>",
>                                         "applicablePath": "<entity type property>"
>                                     }
>                                 }
>                             },
>                             "Sections": {
>                                 "<entity type association>::com.sap.vocabularies.UI.v1.LineItem": {
>                                     "id": "<SmartTable Facet ID>",
>                                     "Actions": {
>                                         "<Action 2>": {
>                                             "id": "<id>",
>                                             "text": "<button text>",
>                                             "press": "<handler function>",
>                                             "requiresSelection": true,
>                                             "applicablePath": "<entity type property>"
>                                         }
>                                     }
>                                 }
>                             }
>                         }
>                     }
>                 }
>             }
>         }
>     }
> }
> ```



<a name="loio3ced305a78a740b0965e5c6f993091ce__section_z3w_dm5_ghc"/>

## Displaying Custom Action Buttons Depending on the Mode

In case of draft-enabled applications, if the draft information of the object page needs to be found out in the controller / view extension \(if the object page is an own draft version or an active version with an existing own draft\), you can use the `DraftAdministrativeData` navigation property. For example, you might want to show a custom action button on the object page only in edit mode.

> ### Sample Code:  
> ```
> 
>  // "Element" required from module "sap/ui/core/Element"
> > onAfterRendering: function(oEvent) {
> >     var oButton = Element.getElementbyId("STTA_MP::sap.suite.ui.generic.template.ObjectPage.view.Details::STTA_C_MP_Product--action::ObjectPageCustomAction");
> >     oButton.bindElement("DraftAdministrativeData");
> >     oButton.bindProperty("visible", {
> >         path: "DraftIsCreatedByMe"
> ```

