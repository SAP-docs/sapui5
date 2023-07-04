<!-- loio340cdb2ba97c4843979f905a70a327ee -->

# Extending Generated Apps Using App Extensions

You can use framework extension points to extend your generated app during the creation process.

The extensions are made, for example, using manifest changes or SAPUI5 extension points, depending on the floorplan.

> ### Note:  
> Make sure you have read the following information: [Read Before Extending a Generated App](read-before-extending-a-generated-app-d9c146a.md).
> 
> > ### Caution:  
> > Use app extensions with caution and only if you cannot produce the required behavior by other means, such as manifest settings or annotations. To correctly integrate your app extension coding with SAP Fiori elements, use only the `extensionAPI` of SAP Fiori elements. For more information, see [Using the extensionAPI](using-the-extensionapi-bd2994b.md).
> > 
> > After you've created an app extension, its display \(for example, control placement and layout\) and system behavior \(for example, model and binding usage, busy handling\) lies within the application's responsibility. SAP Fiori elements provides support only for the official `extensionAPI` functions. Don't access or manipulate controls, properties, models, or other internal objects created by the SAP Fiori elements framework.



<a name="loio340cdb2ba97c4843979f905a70a327ee__section_llp_frp_znb"/>

## Additional Features in SAP Fiori Elements for OData V2

You can use [SAP Fiori tools](https://help.sap.com/viewer/product/SAP_FIORI_tools/Latest/en-US), which is a set of extensions for SAP Business Application Studio and Visual Studio Code, to create app extensions.

For more information on creating app extensions, see:

-   [Configure Page Elements](https://help.sap.com/docs/SAP_FIORI_tools/17d50220bcd848aa854c9c182d65b699/047507c86afa4e96bb3d284adb9f4726.html)

-   [Extending List Reports and Object Pages Using App Extensions](extending-list-reports-and-object-pages-using-app-extensions-a892eb8.md)

-   [Configuring Analytical List Page App Extensions](configuring-analytical-list-page-app-extensions-9504fb4.md)

-   [Configuring Overview Page App Extensions](configuring-overview-page-app-extensions-b240f61.md)

-   [Extending Apps](../08_Extending_SAPUI5_Applications/extending-apps-a264a9a.md)




<a name="loio340cdb2ba97c4843979f905a70a327ee__section_lgr_krp_znb"/>

## Additional Features in SAP Fiori Elements for OData V4

For information about the `ExtensionAPI`, see [API Reference](https://ui5.sap.com/#/api/sap.fe.templates.ExtensionAPI).

