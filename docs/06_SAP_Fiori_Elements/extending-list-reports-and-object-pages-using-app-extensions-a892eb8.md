<!-- loioa892eb8ae1fb498a9bc6c5194432e820 -->

# Extending List Reports and Object Pages Using App Extensions

Various framework extension points are available for list reports and object pages.

Make sure you have read the following information: [Read Before Extending a Generated App](read-before-extending-a-generated-app-d9c146a.md).

> ### Caution:  
> Use app extensions with caution and only if you cannot produce the required behavior by other means, such as manifest settings or annotations. To correctly integrate your app extension coding with SAP Fiori elements, use only the `extensionAPI` of SAP Fiori elements. For more information, see [Using the extensionAPI](using-the-extensionapi-bd2994b.md).
> 
> After you've created an app extension, its display \(for example, control placement and layout\) and system behavior \(for example, model and binding usage, busy handling\) lies within the application's responsibility. SAP Fiori elements provides support only for the official `extensionAPI` functions. Don't access or manipulate controls, properties, models, or other internal objects created by the SAP Fiori elements framework.

You can either use [SAP Fiori tools](https://help.sap.com/viewer/product/SAP_FIORI_tools/Latest/en-US), which is a set of extensions for SAP Business Application Studio and Visual Studio Code to create extensions, or you can create them manually.

For more information, see [Configure Page Elements](https://help.sap.com/docs/SAP_FIORI_tools/17d50220bcd848aa854c9c182d65b699/047507c86afa4e96bb3d284adb9f4726.html).

> ### Note:  
> We've removed videos showing step-by-step procedures using SAP Web IDE, which SAP no longer actively supports. You can still access the video using an older version of this document.

**Related Information**  


[Adding a Custom Message Strip to List Report and Analytical List Page](adding-a-custom-message-strip-to-list-report-analytical-list-page-and-object-page-tables-0fdbefb.md "You can show your custom texts in the message strip above the table.")

