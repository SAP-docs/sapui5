<!-- loio20299419b76645ff8ece0e529145afa9 -->

# Store/Restore the Application State

SAP Fiori elements uses the `iAppState` mechanism for storing or restoring the application state.

> ### Note:  
> For information about SAP Fiori elements for OData V4, see [Store/Restore the Application State](store-restore-the-application-state-46bf248.md).

This mechanism enables a smooth user experience when navigating back and forth between apps developed using SAP Fiori elements and other apps.

The state of the application is preserved when users refresh or navigate away from an application created using SAP Fiori elements \(either a list report page or an object page\) and then navigate back to this page. The application state is also preserved when the URL of the application is shared with another user who then opens the link. For more information, see [The Share Functionality](the-share-functionality-2a20b31.md).



<a name="loio20299419b76645ff8ece0e529145afa9__section_nkf_5ff_ymb"/>

## What Is Stored/Restored

-   Any filter field values in the list report page filter bar. The *Go* button state, when available, is also considered.

-   Any change in a chosen variant.

    The chosen variant is always restored if it was stored in a 'clean' state. If the variant was marked as 'dirty', restoring leads to the loading of a *Standard* variant with a 'dirty' indicator.

-   Object page details such as tab selection, personalization of chart/table. For more information about object page handling, see [Enabling Discovery/Persistence Mode](enabling-discovery-persistence-mode-69503c2.md).

-   Data from custom UI elements. For more information, see [Custom State Handling for Extended Apps](custom-state-handling-for-extended-apps-aa853c3.md).


> ### Note:  
> -   If a potentially sensitive field \(a property that is annotated using the `PersonalData.v1.IsPotentiallySensitive` annotation\) is changed, SAP Fiori elements doesn't store/restore this information. Any changes added by users are therefore lost upon refresh. This is not applicable if the field is used in filter context.
> 
> -   Changes to the visibility of filter fields in the filter bar aren't stored/restored. However, if any new filter fields containing values are added from the *Adapt Filters* dialog, then they're stored as a part of the `iAppState`. The order of the filter fields in the smart filter fields is not stored or restored from the `iAppState`.
> 
> -   Selections in a chart and a table, as well as the scroll position in a table, are not stored/restored.
> 
> -   Refreshing the browser doesn't restore the `iAppState` if SAP Fiori launchpad isn't configured to persist it in the back end.

