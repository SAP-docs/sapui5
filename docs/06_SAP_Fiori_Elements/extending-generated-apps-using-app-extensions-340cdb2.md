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

For information about the `ExtensionAPI`, see [API Reference](https://ui5.sap.com/#/api/sap.fe.core.ExtensionAPI).



> ### Note:  
> For information about SAP Fiori elements for OData V2, see [Extending Generated Apps Using App Extensions](extending-generated-apps-using-app-extensions-9d133a4.md).

