<!-- loio51d8373277184eb5bb1ba0110025cfaf -->

# Extension Points for Object Page Header Facets

You can use extension points to add additional header facets to the object page.

> ### Note:  
> For information about SAP Fiori elements for OData V4, see [Extension Points for Object Page Header Facets](extension-points-for-object-page-header-facets-61cf0ee.md).

You define application-specific header facets using annotations, but in some cases it might be necessary to integrate components in the front end that are not available with annotations.

> ### Caution:  
> Use app extensions with caution and only if you cannot produce the required behavior by other means, such as manifest settings or annotations. To correctly integrate your app extension coding with SAP Fiori elements, use only the `extensionAPI` of SAP Fiori elements. For more information, see [Using the extensionAPI](using-the-extensionapi-a5a4ec6.md).
> 
> After you've created an app extension, its display \(for example, control placement and layout\) and system behavior \(for example, model and binding usage, busy handling\) lies within the application's responsibility. SAP Fiori elements provides support only for the official `extensionAPI` functions. Don't access or manipulate controls, properties, models, or other internal objects created by the SAP Fiori elements framework.

On the object page, you can use extension points to add additional header facets in the following places:

-   Before header facet: The extension is inserted before a given facet.

-   Replace header facet: The extension is rendered instead of an existing facet.

-   After header facet: The extension is inserted after a given facet.


You must use a view inside the extension to create a header facet extension. Enter the extension information in the following format in the `manifest.json` of your application:

`<Different_Scenario>|<EntitySet_Name>|headerEditable::<Annotation_Information>`

Specify the extension facet in the form of its annotation path. In addition, you must specify the entity set name, as the same annotation may exist for various entity sets. You also need to define the `className`, `viewName`, type and the optional parameter `bVisibleOnEdit`.

> ### Note:  
> You only set this optional parameter to `false` if the entire header extension is to be hidden when the object page is edited.

> ### Sample Code:  
> `manifest.json`
> 
> ```
> 
> "extends": {
>     "extensions": {
>         "sap.ui.viewExtensions": {
>             "sap.suite.ui.generic.template.ObjectPage.view.Details": {
>                 "BeforeHeaderFacet|STTA_C_MP_Product|headerEditable::com.sap.vocabularies.UI.v1.Chart::SpecificationWidthBulletChart": {
>                     "className": "sap.ui.core.mvc.View",
>                     "viewName": "STTA_MP.ext.fragments.HeaderExtensionFacet",
>                     "type": "XML",
>                     "bVisibleOnEdit": true
>                 }
>             }
>         }
>     }
> }
> 
> ```

The following extension options are available:

-   Standard object header facet: Before replace, and after scenario:

    -   `BeforeHeaderFacet|<EntitySet Name>|headerEditable::<Annotation information>`

    -   `ReplaceHeaderFacet|<EntitySet Name>|headerEditable::<Annotation information>`

    -   `AfterHeaderFacet|<EntitySet Name>|headerEditable::<Annotation information>`


-   Simple object header facet: Before replace, and after scenario:

    `BeforeSimpleHeaderFacet|<EntitySet Name>|headerEditable::<Annotation information>` 

    `ReplaceSimpleHeaderFacet|<EntitySet Name>|headerEditable::<Annotation information>`

    `AfterSimpleHeaderFacet|<EntitySet Name>|headerEditable::<Annotation information>`

-   Replace the complete object page header with an extension. This means that the `UI.HeaderFacet` annotation is not there. If it is there, remove it from the annotations. The manifest entry should look like this:

    `ReplaceHeaderExtensionFacet|<EntitySet Name>`

-   Standard object header: If there is no image in the object page header, you can include an extension instead of an image. The manifest entry should look like this:

    `NoImageExtensionFacet|<EntitySet Name>`

    > ### Note:  
    > You can only use this scenario if there is no value for the `ImageUrl` or `TypeImageUrl` property of the `UI.HeaderInfo` annotation.

    If there is an image in the object page header, you can enter an extension after the image. The manifest entry should look like this:

    `AfterImageExtensionFacet|<EntitySet Name>`

-   Object page header containing only a `DataPoint` annotation: Before replace, and after scenario:

    -   `BeforeHeaderDataPoint|<EntitySet Name> | <Annotation Information>`

    -   `ReplaceHeaderDataPoint|<EntitySet Name> | <Annotation Information>`

    -   `AfterHeaderDataPoint|<EntitySet Name> | <Annotation Information>`





<a name="loio51d8373277184eb5bb1ba0110025cfaf__section_xs5_kq5_rnb"/>

## Showing Custom Status Message of the Object on the Object Page Header

You can display a custom status message of an object as a message strip on the object page header using the `setCustomMessage` extension API. By using the `setCustomMessage` extension in the `extensionAPI` class, you can define the custom message in `messagetext` and `messagetype`. The following example shows how to define a custom status message:

> ### Sample Code:  
> ```
> 
> sap.ui.define([
> ], function () {
>     return {
>         onInit: function () {
>             this.extensionAPI.attachPageDataLoaded(this.onPageDataLoaded.bind(this));
>         },
>         onPageDataLoaded: function(oEvent) {
>             var quantity = oEvent.context.getObject().quantity;
>             var oMsg = {
>                 message: quantity == 0 ? "Product Not Available!" : "Product Available!",
>                 type: quantity == 0 ? sap.ui.core.MessageType.Error : sap.ui.core.MessageType.Success
>             }
>             this.extensionAPI.setCustomMessage(oMsg);
>         }
>         ....
>     }
> });
> 
> ```

For more information, see [Setting Up the Object Page Header](setting-up-the-object-page-header-c4e45a3.md).

