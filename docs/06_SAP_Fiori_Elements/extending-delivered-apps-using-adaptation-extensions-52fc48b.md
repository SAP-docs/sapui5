<!-- loio52fc48b479314d0688be24f699778c47 -->

# Extending Delivered Apps Using Adaptation Extensions

You can extend delivered apps based on SAP Fiori elements by using the SAPUI5 Visual Editor in SAP Web IDE.



## Context

> ### Note:  
> This topic is currently only applicable to SAP Fiori elements for OData V2.

You can implement extension functions as part of a UI adaptation project by using the SAPUI5 Visual Editor in SAP Web IDE. The adaptation project references the applications delivered by SAP as base or parent applications.

> ### Note:  
> This procedure is relevant only for list reports, object pages, overview pages, and analytical list pages.
> 
> The flexible column layout is not supported by the SAPUI5 Visual Editor in SAP Web IDE.

> ### Caution:  
> SAP Web IDE is no longer available via SAP Business Technology Platform trial accounts. Any references to SAP Web IDE in this documentation are only relevant for you if you have access to SAP Web IDE through a productive SAP BTP account. Please consider SAP Business Application Studio as an alternative. See [App Development Using SAP Business Application Studio](../03_Get-Started/app-development-using-sap-business-application-studio-6bbad66.md).

You can try the adaptation extensions by creating an adaptation projecs using [Create the Adaptation Project](https://help.sap.com/viewer/DRAFT/bcbb716c051b427cbe8ec7fe8362c9e5/DEV2/en-US/ff97fe714edf42b78a1cbfc2996a0f25.html).

You can use adaptation extensions for these extension points:

-   List report and analytical list page

    -   Add additional fields to the smart filter bar

    -   Add additional columns to tables

    -   Add additional table toolbar buttons and extension controller logic. For an example, see [Adaptation Extension Example: Adding a Button to the Table Toolbar in the List Report](adaptation-extension-example-adding-a-button-to-the-table-toolbar-in-the-list-report-a269671.md)

           
          
        <a name="loio52fc48b479314d0688be24f699778c47__fig_m3h_nzd_wfb"/>Adaptation Extension Options in the List Report

         ![](images/List_Report_Adaptation_extensions_d09b292.png "Adaptation Extension Options in the List Report") 

    -   Override extension functions

        -   `onInitSmartFilterBar`

        -   `provideExtensionAppStateData`

        -   `restoreExtensionAppStateData`

        -   `ensureFieldsForSelect`

        -   `addFilters`



    These extension functions can be consumed as a part of `ControllerExtension`, by overriding the `templateBasedExtension` points.

    > ### Sample Code:  
    > Overriding `addFilters` extension function
    > 
    > ```
    > override: {	
    >                   // 	override public method of the ListReport controller 
    >                   templateBaseExtension: {	
    > 				          addFilters: function(fnAddFilter, sControlId){							
    >                               // custom logic
    >                 				}
    > 		}
    > 
    > ```

-   Object page

    -   Toolbar actions

    -   Additional sections

    -   Add additional fields to the header facet

    -   Add additional fields and field groups to forms

           
          
        <a name="loio52fc48b479314d0688be24f699778c47__fig_ufb_rzd_wfb"/>Adaptation Extension Options on the Object Page

         ![](images/Object_Page_Adaptation_Extensions_07345eb.png "Adaptation Extension Options on the Object Page") 

    -   Override extension functions

        -   `provideExtensionStateData`

        -   `restoreExtensionStateData`

        -   `ensureFieldsForSelect`

        -   `addFilters`


        These extension functions can be consumed as part of the `ControllerExtension`, by overriding the `templateBasedExtension` points.


    > ### Note:  
    > The extension points mentioned in the [API Reference](https://ui5.sap.com/#/api/sap.suite.ui.generic.template.ListReport.controllerFrameworkExtensions%23overview) cannot be consumed as a part of the adaptation project.

-   Overview page

    -   Add additional fields to the smart filter bar

    -   Add global actions to the filter bar

    -   Add additional extension controller logic

    -   Add cards

    -   Clone cards

    -   Edit cards

    -   Override extension functions

        -   `provideExtensionAppStateData`

        -   `restoreExtensionAppStateData`

        -   `addFilters`

        -   `provideStartupExtension`

        -   `provideExtensionNavigation`

        -   `provideCustomActionPress`

        -   `provideCustomParameter`




In SAP Web IDE, here's what you do:



## Procedure

1.  Choose *File* \> *New* \> *Adaptation Project*.

2.  Enter the project name and the application title and choose *Next*.

3.  Select the system and the base application. Make sure you deselect *Enable Safe Mode* and choose *Finish*.

    The system generates the adaptation project in your workspace.

4.  Right-click your adaptation project and choose SAPUI5*Visual Editor*.

    The system starts the editor. You can make your adaptations on the *Edit* tab.

    For information about adapting the UI in SAP Web IDE, choose *Help* \> *Documentation* \> *Developing* \> *Developing Web Applications* \> *SAPUI5 Visual Editor*.


**Related Information**  


[Details of Extension Functions for Extending Delivered Apps Using Adaptation Extensions](details-of-extension-functions-used-for-extending-delivered-apps-82630e5.md "In this document, you can find the details of all the extension functions that can be used for extending delivered apps using adaptation extensions.")

