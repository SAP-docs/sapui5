<!-- loioa892eb8ae1fb498a9bc6c5194432e820 -->

# Extending List Reports and Object Pages Using App Extensions

Various framework extension points are available for list reports and object pages.

Make sure you have read the following information: [Read Before Extending a Generated App](read-before-extending-a-generated-app-d9c146a.md).

> ### Caution:  
> Use app extensions with caution and only if you cannot produce the required behavior by other means, such as manifest settings or annotations. To correctly integrate your app extension coding with SAP Fiori elements, use only the `extensionAPI` of SAP Fiori elements. For more information, see [Using the extensionAPI](using-the-extensionapi-bd2994b.md).
> 
> After you've created an app extension, its display \(for example, control placement and layout\) and system behavior \(for example, model and binding usage, busy handling\) lies within the application's responsibility. SAP Fiori elements provides support only for the official `extensionAPI` functions. Don't access or manipulate controls, properties, models, or other internal objects created by the SAP Fiori elements framework.



<a name="loioa892eb8ae1fb498a9bc6c5194432e820__section_p1t_2px_znb"/>

## Additional Features in SAP Fiori Elements for OData V2

You can either use the extension wizard in the SAP Web IDE to create extensions or you can create them manually.

> ### Caution:  
> SAP Web IDE is no longer available via SAP Business Technology Platform trial accounts. Any references to SAP Web IDE in this documentation are only relevant for you if you have access to SAP Web IDE through a productive SAP BTP account. Please consider SAP Business Application Studio as an alternative. See [App Development Using SAP Business Application Studio](../05_Developing_Apps/app-development-using-sap-business-application-studio-6bbad66.md).

For more information about SAP Web IDE, see the documentation for SAP Web IDE on the SAP Help Portal at [https://help.sap.com/viewer/p/SAP\_Web\_IDE](https://help.sap.com/viewer/p/SAP_Web_IDE).

In list reports and object pages, you can use SAP Web IDE to add the following extensions:

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



While this documentation describes how to manually define app extensions, the following how-to video shows you how to create a section extension on the object page using the extension wizard: .

**Related Information**  


[Adding a Custom Message Strip to List Report and Analytical List Page](adding-a-custom-message-strip-to-list-report-analytical-list-page-and-object-page-tables-0fdbefb.md "You can show your custom texts in the message strip above the table.")

