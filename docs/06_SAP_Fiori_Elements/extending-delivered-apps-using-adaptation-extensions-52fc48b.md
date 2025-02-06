<!-- loio52fc48b479314d0688be24f699778c47 -->

# Extending Delivered Apps Using Adaptation Extensions

You can extend delivered apps based on SAP Fiori elements by using the Adaptation Editor in SAP Business Application Studio. It allows you to create adaptation projects on top of delivered apps.



<a name="loio52fc48b479314d0688be24f699778c47__context_ijc_3wz_5zb"/>

## Context

You can implement extension functions as part of a UI adaptation project by using the Adaptation Editor in SAP Business Application Studio. The adaptation project references the applications delivered by SAP as base or parent applications.

> ### Note:  
> This procedure is relevant only for list reports, object pages, overview pages, and analytical list pages.
> 
> The flexible column layout is not supported by the Adaptation Editor.

You can try the adaptation extensions by creating an adaptation project described in [Extending an SAP Fiori Application](https://help.sap.com/docs/bas/developing-sap-fiori-app-in-sap-business-application-studio/extending-sap-fiori-application).

<a name="task_u52_ds1_34b"/>

<!-- task\_u52\_ds1\_34b -->

## Additional Features in SAP Fiori Elements for OData V2



## Context

You can use adaptation extensions for the following extension points:

-   List report and analytical list page

    -   Add additional fields to the smart filter bar

    -   Add additional columns to tables

    -   Add additional table toolbar buttons and extension controller logic. For an example, see [Adaptation Extension Example: Adding a Button to the Table Toolbar in the List Report](adaptation-extension-example-adding-a-button-to-the-table-toolbar-in-the-list-report-a269671.md)

          
          
        **Adaptation Extension Options in the List Report**

        ![](images/List_Report_Adaptation_extensions_d09b292.png "Adaptation Extension Options in the List
        											Report")

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

          
          
        **Adaptation Extension Options on the Object Page**

        ![](images/Object_Page_Adaptation_Extensions_07345eb.png "Adaptation Extension Options on the Object
        											Page")

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






### More Information

For more information, see [Details of Extension Functions Used for Extending Delivered Apps](details-of-extension-functions-used-for-extending-delivered-apps-82630e5.md).

<a name="task_yb4_1s1_34b"/>

<!-- task\_yb4\_1s1\_34b -->

## Additional Features in SAP Fiori Elements for OData V4



<a name="task_yb4_1s1_34b__context_p3h_bs1_34b"/>

## Context

You can use the `controllerextensions` API to override the existing behavior of the SAP Fiori elements framework, and to implement hooks to implement your custom logic. For information about the `controllerextensions` API, see the [API Reference](https://ui5.sap.com/#/api/sap.fe.core.controllerextensions). You can also explore and work with the coding yourself in the flexible programming model explorer at [Overview of Controller Extensions](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/controllerExtensions/controllerExtensionsOverview).

As a developer you can adapt your UI in Safe Mode. For more information, see [SAPUI5 Flexibility: Adapting UIs Made Easy](../04_Essentials/sapui5-flexibility-adapting-uis-made-easy-a8e55aa.md).

<a name="topic_gds_rdg_vzb"/>

<!-- topic\_gds\_rdg\_vzb -->

## Related Information

-   [SAPUI5 Flexibility: Enable Your App for UI Adaptation](../05_Developing_Apps/sapui5-flexibility-enable-your-app-for-ui-adaptation-f1430c0.md)

-   [SAPUI5 Flexibility: Adapting UIs Made Easy](../04_Essentials/sapui5-flexibility-adapting-uis-made-easy-a8e55aa.md)

-   [Adapting the UI](adapting-the-ui-59bfd31.md)

-   [Extending SAP Fiori Applications](https://help.sap.com/docs/bas/developing-sap-fiori-app-in-sap-business-application-studio/extending-sap-fiori-application?locale=en-US)


