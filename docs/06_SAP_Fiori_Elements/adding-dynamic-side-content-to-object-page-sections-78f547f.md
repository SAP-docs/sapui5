<!-- loio78f547fb03bc483d93e76bc142b15947 -->

# Adding Dynamic Side Content to Object Page Sections

Sometimes it might be necessary to add additional information that is not available with annotations to object page sections or subsections.

You can use extension points to add additional content to sections.

> ### Caution:  
> Use app extensions with caution and only if you cannot produce the required behavior by other means, such as manifest settings or annotations. To correctly integrate your app extension coding with SAP Fiori elements, use only the `extensionAPI` of SAP Fiori elements. For more information, see [Using the extensionAPI](using-the-extensionapi-a5a4ec6.md).
> 
> After you've created an app extension, its display \(for example, control placement and layout\) and system behavior \(for example, model and binding usage, busy handling\) lies within the application's responsibility. SAP Fiori elements provides support only for the official `extensionAPI` functions. Don't access or manipulate controls, properties, models, or other internal objects created by the SAP Fiori elements framework.

You can use extension points to add additional content to sections in the following places:

-   `BeforeMainContent`: The extension is added before a sections' main content.

-   `AfterMainContent`: The extension is added after the section's main content.


Main content refers to the information that comes from the annotations.

Enter the extension information in the `manifest.json` file of your application in the following format: `<Different_Scenario>|<EntitySet_Name>|<Annotation_Information_of_Subsection>`

Specify the extension facet in the form of the annotation information of the subsection where side content needs to be placed. In addition, specify the entity set name, as the same annotation may exist for various entity sets. You also need to define the `className`, `viewName`, `type`, and the optional parameter `equalSplit`.

To enable the equal split mode \(50:50 percent for main content vs. side content\), add the `"equalSplit": true` setting to the manifest.

If `"equalSplit"` is set to `false` or is not defined, the percentage of main content and side content depends on the device on which the app is running.

> ### Sample Code:  
> ```
> "extends": {
>    "extensions": {
>          "sap.ui.viewExtensions": {
>                  "sap.suite.ui.generic.template.ObjectPage.view.Details": {
>                            "AfterMainContent|STTA_C_MP_Product|GeneralInformationForm":{
>                "className": "sap.ui.core.Fragment",
>                "fragmentName": "STTA_MP.ext.fragments.SideContentExtension",
>                "type": "XML",
> 		"equalSplit": true
>                },
> "BeforeMainContent|STTA_C_MP_Product|to_ProductSalesData::com.sap.vocabularies.UI.v1.Chart":{
>               "className": "sap.ui.core.Fragment",
>               "fragmentName": "STTA_MP.ext.fragments.SideContentExtension",
>               "type": "XML"
>                }
>                         }
>            }
>      }
> }
> 
> ```

You can specify either a view or a fragment contained in the section. You do not need to use the object page \(uxap\) tags, `ObjectPageSection`, `subSections`, or `ObjectPageSubSection`. These definitions are already part of the template for the object page view.

After you have added side content, the system displays a button in the subsection toolbar to show or hide the side content. The default texts for this button are *Show Details* or *Hide Details*. If you want to provide a custom text, specify it by adding the key value pair of the custom label to the i18n.properties file of the specific entity set of the object page. The key uniquely defines the subsection for whose side content button you provide the custom text. The structure of the key is as follows:

> ### Note:  
> In the annotation information of the subsection, replace all separators \(-- , :: etc.\) with a | \(vertical bar\) while forming the key.

-   Show the side content button

    `ShowSideContent|<EntitySet>|<Annotation Info of the Subsection>`

    Example: `ShowSideContent|STTA_C_MP_Product|to_ProductSalesData|com.sap.vocabularies.UI.v1.Chart`

    `ShowSideContent|STTA_C_MP_Product|GeneralInformationForm`

-   Hide the side content button

    `HideSideContent|<EntitySet>|<Annotation Info of the Subsection>`

    Example: `HideSideContent|STTA_C_MP_Product|to_ProductSalesData|com.sap.vocabularies.UI.v1.Chart`

    `HideSideContent|STTA_C_MP_Product|GeneralInformationForm`


  
  
**Side Content Added to the Object Page**

![](images/Dynamic_Side_Content_9cb9e88.jpg "Side Content Added to the Object Page")

> ### Note:  
> -   Use dynamic side content for small previews. Do not consider it as an extension of the main panel's content.
> 
> -   Do not use tables in the side content panel.
> 
> -   Avoid any content that may introduce a horizontal scroll bar.
> 
> -   For better content visualization of the dynamic side content, use the 50% screen display of the dynamic side content.

