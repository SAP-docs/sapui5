<!-- loio340cdb2ba97c4843979f905a70a327ee -->

# Extending Generated Apps Using App Extensions

You can use framework extension points to extend your generated app during the creation process.

The extensions are made, for example, using manifest changes or SAPUI5 extension points, depending on the floorplan.

> ### Note:  
> Make sure you have read the following information: [Read Before Extending a Generated App](read-before-extending-a-generated-app-d9c146a.md).
> 
> > ### Caution:  
> > Use app extensions with caution and only if you cannot produce the required behavior by other means, such as manifest settings or annotations. To correctly integrate your app extension coding with SAP Fiori elements, use only the extensionAPI of SAP Fiori elements. For more information, see [Using the extensionAPI](using-the-extensionapi-bd2994b.md).
> > 
> > After you've created an app extension, its display \(for example, control placing, CSS\) and system behavior \(for example, model and binding usage, busy handling\) of the app extension lies within the application's responsibility. SAP Fiori elements provides support only for the official extensionAPI functions. Don't access or manipulate SAP Fiori elements' internal coding.



<a name="loio340cdb2ba97c4843979f905a70a327ee__section_llp_frp_znb"/>

## Additional Features in SAP Fiori Elements for OData V2

For list reports, object pages, and analytical list pages, you can either use the extension wizard in the SAP Web IDE to create app extensions or you can create them manually.

> ### Caution:  
> SAP Web IDE is no longer available via SAP Business Technology Platform trial accounts. Any references to SAP Web IDE in this documentation are only relevant for you if you have access to SAP Web IDE through a productive SAP BTP account. Please consider SAP Business Application Studio as an alternative. See [App Development Using SAP Business Application Studio](../05_Developing_Apps/app-development-using-sap-business-application-studio-6bbad66.md).

You can use SAP Web IDE to add the following app extensions:

-   List report

    -   Filter

    -   Action

    -   Column


-   Object page
    -   Action

    -   Facet

    -   Column

    -   Header

    -   Form


-   Analytical list page

    -   Filter

    -   Action

    -   Column




<a name="loio340cdb2ba97c4843979f905a70a327ee__section_lgr_krp_znb"/>

## Additional Features in SAP Fiori Elements for OData V4

For information about the `ExtensionAPI`, see [API Reference](https://ui5.sap.com/#/api/sap.fe.templates.ExtensionAPI).

**Related Information**  


[Extending List Reports and Object Pages Using App Extensions](extending-list-reports-and-object-pages-using-app-extensions-a892eb8.md "Various framework extension points are available for list reports and object pages.")

[Configuring Analytical List Page App Extensions](configuring-analytical-list-page-app-extensions-9504fb4.md "This section provides some of the advance configurations and extensions for your application.")

[Configuring Overview Page App Extensions](configuring-overview-page-app-extensions-b240f61.md "Lets you customize the card and filter area to design a robust application.")

[Extending Apps](../08_Extending_SAPUI5_Applications/extending-apps-a264a9a.md "You can adapt an SAPUI5 app to your specific requirements. For example, you can adapt or replace views, extend or replace controllers, or change language-specific texts.")

