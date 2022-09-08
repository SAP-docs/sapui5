<!-- loioa892eb8ae1fb498a9bc6c5194432e820 -->

# Extending List Reports and Object Pages Using App Extensions

Various framework extension points are available for list reports and object pages.

Make sure you have read the following information: [Read Before Extending a Generated App](read-before-extending-a-generated-app-d9c146a.md).

> ### Caution:  
> Use app extensions with caution and only if you cannot produce the required behavior by other means, such as manifest settings or annotations. To correctly integrate your app extension coding with SAP Fiori elements, use only the extensionAPI of SAP Fiori elements. For more information, see [Using the extensionAPI](using-the-extensionapi-bd2994b.md).
> 
> After you've created an app extension, its display \(for example, control placing, CSS\) and system behavior \(for example, model and binding usage, busy handling\) of the app extension lies within the application's responsibility. SAP Fiori elements provides support only for the official extensionAPI functions. Don't access or manipulate SAP Fiori elements' internal coding.



<a name="loioa892eb8ae1fb498a9bc6c5194432e820__section_p1t_2px_znb"/>

## Additional Features in SAP Fiori Elements for OData V2

You can either use the extension wizard in the SAP Web IDE to create extensions or you can create them manually.

> ### Caution:  
> SAP Web IDE is no longer available via SAP Business Technology Platform trial accounts. Any references to SAP Web IDE in this documentation are only relevant for you if you have access to SAP Web IDE through a productive SAP BTP account. Please consider SAP Business Application Studio as an alternative. See [App Development Using SAP Business Application Studio](../03_Get-Started/app-development-using-sap-business-application-studio-6bbad66.md).

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

-   **[Extension Points for Object Page Header Facets](extension-points-for-object-page-header-facets-61cf0ee.md "You define application-specific header facets using annotations, but in some cases it might be necessary to integrate components in the
		front end that are not available with annotations.")**  
You define application-specific header facets using annotations, but in some cases it might be necessary to integrate components in the front end that are not available with annotations.
-   **[Extension Points for Sections on the Object Page](extension-points-for-sections-on-the-object-page-92ad996.md "You define application-specific sections in the form of annotations.
      However,
      in some cases you might need to integrate components into the front end, for
      example charts or
      attachments.")**  
You define application-specific sections in the form of annotations. However, in some cases you might need to integrate components into the front end, for example charts or attachments.
-   **[Extension Points for Subsections on the Object Page](extension-points-for-subsections-on-the-object-page-ce8d468.md "On the object page, you can use extension points to add additional
		subsections.")**  
On the object page, you can use extension points to add additional subsections.
-   **[Extension Points for Forms on the Object Page](extension-points-for-forms-on-the-object-page-4e49753.md "On the object page, you can use extension points to extend forms in
		sections.")**  
On the object page, you can use extension points to extend forms in sections.
-   **[Finding the Right Key for the Anchor](finding-the-right-key-for-the-anchor-6ffb084.md "For the correct positioning of your custom elements, you need to identify an anchor element using the browser's developer
		tools.")**  
For the correct positioning of your custom elements, you need to identify an anchor element using the browser's developer tools.
-   **[Extension Points for Tables](extension-points-for-tables-d525522.md "You can use extension points to enhance tables in SAP Fiori elements
		apps.")**  
You can use extension points to enhance tables in SAP Fiori elements apps.
-   **[Extension Points for Pages](extension-points-for-pages-ecdf1d6.md "You can use extension points to enhance pages in SAP Fiori elements apps.")**  
You can use extension points to enhance pages in SAP Fiori elements apps.
-   **[Extension Points for Views in the List Report](extension-points-for-views-in-the-list-report-eb37203.md "You can use extension points to enhance views in the list report in SAP Fiori elements apps.")**  
You can use extension points to enhance views in the list report in SAP Fiori elements apps.
-   **[Adding Custom Actions Using Extension Points](adding-custom-actions-using-extension-points-7619517.md "You can use extension points to add custom actions to the list report and the object
		page.")**  
You can use extension points to add custom actions to the list report and the object page.
-   **[Adding Custom Fields to the Filter Bar](adding-custom-fields-to-the-filter-bar-5fb9f57.md "You can extend the filter bar by using a custom filter field.")**  
You can extend the filter bar by using a custom filter field.
-   **[Adapting Texts in the Delete Dialog Box Using Extensions \(List Report\)](adapting-texts-in-the-delete-dialog-box-using-extensions-list-report-25885b6.md "You can adapt the text of the Delete dialog box that is displayed
		when you delete list report items.")**  
You can adapt the text of the *Delete* dialog box that is displayed when you delete list report items.
-   **[Adapting Texts in the Delete Dialog Box \(Object Page Header\)](adapting-texts-in-the-delete-dialog-box-object-page-header-1fd8e52.md "You can adapt the text of the Delete dialog box that is
		displayed when you delete the entire object page.")**  
You can adapt the text of the *Delete* dialog box that is displayed when you delete the entire object page.
-   **[Adapting Texts in the Delete Dialog Box \(Object Page with Nested Smart Table\)](adapting-texts-in-the-delete-dialog-box-object-page-with-nested-smart-table-b95adf3.md "You can adapt the text of the Delete dialog box that is
		displayed when you delete items from nested smart tables on the object page.")**  
You can adapt the text of the *Delete* dialog box that is displayed when you delete items from nested smart tables on the object page.
-   **[Adapting Logic Before Save Operation](adapting-logic-before-save-operation-6a0a050.md "You can use an extension API to execute any logic
		before the save operation.")**  
You can use an extension API to execute any logic before the save operation.
-   **[Using Custom Code Before Standard Operations](using-custom-code-before-standard-operations-877e5ff.md "You can add custom coding before calling standard methods provided by SAP Fiori elements.")**  
You can add custom coding before calling standard methods provided by SAP Fiori elements.
-   **[Prefilling Fields When Creating a New Entity Using an Extension Point](prefilling-fields-when-creating-a-new-entity-using-an-extension-point-189e2d8.md "When you create a new entity, y can prefill fields with specific values. ")**  
When you create a new entity, y can prefill fields with specific values.
-   **[Custom State Handling for Extended Apps](custom-state-handling-for-extended-apps-89fa878.md "You can perform inner app-state handling for custom UI elements.")**  
You can perform inner app-state handling for custom UI elements.
-   **[Replacing the Standard Save Functionality in the Mass Edit Dialog](replacing-the-standard-save-functionality-in-the-mass-edit-dialog-492d8a9.md "You can enable custom save functionality for the mass edit dialog.")**  
You can enable custom save functionality for the mass edit dialog.
-   **[Adding a Custom ViewExtension in the Mass Edit Dialog](adding-a-custom-viewextension-in-the-mass-edit-dialog-fd26fee.md "You can add
        a custom ViewExtension
        to
        the mass edit dialog by defining it in the manifest.")**  
You can add a custom `ViewExtension` to the mass edit dialog by defining it in the manifest.

**Related Information**  


[Adding a Custom Message Strip to List Report and Analytical List Page](adding-a-custom-message-strip-to-list-report-analytical-list-page-and-object-page-tables-0fdbefb.md "You can show your custom texts in the message strip above the table.")

