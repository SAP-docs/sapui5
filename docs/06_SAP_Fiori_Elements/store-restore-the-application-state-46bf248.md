<!-- loio46bf248182ed47cb85a05610abe361f7 -->

# Store/Restore the Application State

SAP Fiori elements uses the `iAppState` mechanism for storing or restoring the application state. This enables a smooth user experience when navigating back and forth between SAP Fiori elements and other apps.

The state of the application is generally preserved when users refresh or navigate away from an application created using SAP Fiori elements \(either a list report or an object page\) and then navigate back to this page. This is also the case when the URL of the application is shared with another user who then opens the link. For more information, see ["Share" Functionality](share-functionality-022bf0d.md).



<a name="loio46bf248182ed47cb85a05610abe361f7__section_nkf_5ff_ymb"/>

## What Is Stored/Restored

-   Any filter field values in the list report filter bar. The *Go* button state, when available, is also considered.

-   Any change in a chosen variant.

    In SAP Fiori elements for OData V2, the chosen variant is always restored, if it was stored in a 'clean' state. If the variant was marked as 'dirty', restoring leads to the loading of a *Standard* variant with a 'dirty' indicator.

    In SAP Fiori elements for OData V4, the chosen variant is always restored and the fallback to the *Standard Variant* only happens when the chosen variant isn't available at the time of the restore.

-   If users click on a section or subsection in an object page, then the section ID is stored/restored. Note that the section ID that is in focus is **not** stored in the `iAppState` if users simply scroll to this section via a regular page scroll.

    > ### Note:  
    > -   If a potentially sensitive filter field \(a property that is annotated via the `PersonalData.v1.IsPotentiallySensitive` annotation\) is changed, SAP Fiori elements does not store/restore this. Any changes added by users are therefore lost upon refresh.
    > 
    > -   Changes to the visibility of filter fields in the filter bar aren't stored/restored. However, if any new filter fields containing values are added from the *Adapt Filters* dialog, then they are stored as a part of the `iAppState`.
    > 
    > -   Selections in a chart and a table, as well as the scroll position in a table, are not stored/restored.
    > 
    > -   Refreshing the browser doesn't restore the `iAppState` if SAP Fiori launchpad isn't configured to persist it in the back end.




<a name="loio46bf248182ed47cb85a05610abe361f7__section_o53_dgf_ymb"/>

## Additional Features in SAP Fiori Elements for OData V2

You can perform inner app state handling for custom UI elements. For more information, see [Custom State Handling for Extended Apps](custom-state-handling-for-extended-apps-89fa878.md).



<a name="loio46bf248182ed47cb85a05610abe361f7__section_bkt_vyl_mtb"/>

## Additional Features in SAP Fiori Elements for OData V4

> ### Restriction:  
> -   Drilldown filters applied to the chart using the *View By* options are currently not stored/restored.
> 
> -   Chart and table personalization changes done on an object page are currently not stored/restored.

For more information about storing/restoring custom data in the `iAppState`, see the methods described in [Custom State Handling for Extended Apps](custom-state-handling-for-extended-apps-89fa878.md).

