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
> SAP Web IDE is no longer available via SAP Business Technology Platform trial accounts. Any references to SAP Web IDE in this documentation are only relevant for you if you have access to SAP Web IDE through a productive SAP BTP account. Please consider SAP Business Application Studio as an alternative. See [App Development Using SAP Business Application Studio](../03_Get-Started/app-development-using-sap-business-application-studio-6bbad66.md).

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

-   **[Read Before Extending a Generated App](read-before-extending-a-generated-app-d9c146a.md "Before you start creating an extension for your app, make sure you have read the information provided in this topic.")**  
Before you start creating an extension for your app, make sure you have read the information provided in this topic.
-   **[Using the extensionAPI](using-the-extensionapi-bd2994b.md "The extensionAPI consists of several elements that are described below. It can be used for the list report and object
		page.")**  
The `extensionAPI` consists of several elements that are described below. It can be used for the list report and object page.
-   **[Adapting Transient Messages that Come from the Back End](adapting-transient-messages-that-come-from-the-back-end-db3b70d.md "You can use an extension point to adapt transient messages that come from the back-end
		system for the list report and object page as well as for the analytical list page. ")**  
You can use an extension point to adapt transient messages that come from the back-end system for the list report and object page as well as for the analytical list page.
-   **[Extending the Bookmark Function to Save Static Tiles to the SAP Fiori Launchpad](extending-the-bookmark-function-to-save-static-tiles-to-the-sap-fiori-launchpad-7e34ea9.md "You can extend the standard bookmark function by adding an extension point to the list
		report or analytical list page controller extension. Static tiles are then saved to the SAP
		Fiori launchpad  instead of dynamic tiles.")**  
You can extend the standard bookmark function by adding an extension point to the list report or analytical list page controller extension. Static tiles are then saved to the SAP Fiori launchpad instead of dynamic tiles.
-   **[Modifying Startup Parameters Using an Extension](modifying-startup-parameters-using-an-extension-4564eed.md "You can modify startup parameters using an extension method.")**  
You can modify startup parameters using an extension method.
-   **[Creating an Extension to Modify Properties in the Navigation Context](creating-an-extension-to-modify-properties-in-the-navigation-context-199a496.md "Application
		developers can use this extension to modify (add/remove/change) the information available in
		the navigation context just before the external outbound navigation is
		triggered.")**  
Application developers can use this extension to modify \(add/remove/change\) the information available in the navigation context just before the external outbound navigation is triggered.
-   **[Refresh Data Set for Back Navigation When sap-keep-alive Is Set to True](refresh-data-set-for-back-navigation-when-sap-keep-alive-is-set-to-true-f1c2704.md "When sap-keep-alive is set to true, and the user navigates from one application to another, modifies some common data and
		navigates back to the source app, the data isn't refreshed automatically. You can add a custom code to perform a refresh of specific
		data.")**  
When `sap-keep-alive` is set to true, and the user navigates from one application to another, modifies some common data and navigates back to the source app, the data isn't refreshed automatically. You can add a custom code to perform a refresh of specific data.
-   **[Adding a Custom Message Strip to List Report, Analytical List Page and Object Page Tables](adding-a-custom-message-strip-to-list-report-analytical-list-page-and-object-page-tables-0fdbefb.md "You can show your custom texts in the message strip above the table. ")**  
You can show your custom texts in the message strip above the table.

**Related Information**  


[Extending List Reports and Object Pages Using App Extensions](extending-list-reports-and-object-pages-using-app-extensions-a892eb8.md "Various framework extension points are available for list reports and object pages.")

[Configuring Analytical List Page App Extensions](configuring-analytical-list-page-app-extensions-9504fb4.md "This section provides some of the advance configurations and extensions for your application.")

[Configuring Overview Page App Extensions](configuring-overview-page-app-extensions-b240f61.md "Lets you customize the card and filter area to design a robust application.")

[Extending Apps](../08_Extending_SAPUI5_Applications/extending-apps-a264a9a.md "You can adapt an SAPUI5 app to your specific requirements. For example, you can adapt or replace views, extend or replace controllers, or change language-specific texts.")

