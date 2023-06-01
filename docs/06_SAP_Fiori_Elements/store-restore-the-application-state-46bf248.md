<!-- loio46bf248182ed47cb85a05610abe361f7 -->

# Store/Restore the Application State

SAP Fiori elements uses the `iAppState` mechanism for storing or restoring the application state. This mechanism enables a smooth user experience when navigating back and forth between SAP Fiori elements and other apps.

The state of the application is preserved when users refresh or navigate away from an application created using SAP Fiori elements \(either a list report or an object page\) and then navigate back to this page. The application state is also preserved when the URL of the application is shared with another user who then opens the link. For more information, see ["Share" Functionality](share-functionality-022bf0d.md).



<a name="loio46bf248182ed47cb85a05610abe361f7__section_nkf_5ff_ymb"/>

## What Is Stored/Restored

-   Any filter field values in the list report filter bar. The *Go* button state, when available, is also considered.

-   Any change in a chosen variant.

    In SAP Fiori elements for OData V2, the chosen variant is always restored, if it was stored in a 'clean' state. If the variant was marked as 'dirty', restoring leads to the loading of a *Standard* variant with a 'dirty' indicator.

    In SAP Fiori elements for OData V4, the chosen variant is always restored and the fallback to the *Standard* variant only happens when the chosen variant isn't available at the time of the restore.

-   Object page details such as tab selection, personalization of chart/table. For more information about object page handling, see [Enabling Discovery/Persistence Mode](enabling-discovery-persistence-mode-7c62084.md).

-   Data from custom UI elements. For more information, see [Custom State Handling for Extended Apps](custom-state-handling-for-extended-apps-89fa878.md).

-   > ### Note:  
    > -   If a potentially sensitive filter field \(a property that is annotated via the `PersonalData.v1.IsPotentiallySensitive` annotation\) is changed, SAP Fiori elements does not store/restore this information. Any changes added by users are therefore lost upon refresh.
    > 
    > -   Changes to the visibility of filter fields in the filter bar aren't stored/restored. However, if any new filter fields containing values are added from the *Adapt Filters* dialog, then they are stored as a part of the `iAppState`.
    > 
    > -   Selections in a chart and a table, as well as the scroll position in a table, are not stored/restored.
    > 
    > -   Refreshing the browser doesn't restore the `iAppState` if SAP Fiori launchpad isn't configured to persist it in the back end.




<a name="loio46bf248182ed47cb85a05610abe361f7__section_bkt_vyl_mtb"/>

## Additional Features in SAP Fiori Elements for OData V4

Note the following restrictions related to the content provided in the generic *What is Stored/Restored* section in this topic:

> ### Restriction:  
> -   Drilldown filters applied to the chart using the *View By* options are not stored/restored.
> 
> -   Chart and table personalization changes done on an object page are stored/restored only for apps that use flexible column layout.



### Handling Changes from Other Layers

Changes coming in from other flex layers, such as changes made by key users, are merged with user personalization changes coming from the `iAppState`. For more information, see [SAPUI5 Flexibility: Adapting UIs Made Easy](../04_Essentials/sapui5-flexibility-adapting-uis-made-easy-a8e55aa.md).

> ### Note:  
> Restoring a shared URL reinstates the last state of the control if variant management isn't enabled. For example, consider the following scenario:
> 
> -   A key user adds two columns to a table in a list report-based application.
> 
> -   User A loads the application and adds two new columns. To share the application link as an email to user B, user A clicks the *Share* menu button and then *Send Email*.
> 
> -   When user B accesses this application, they can see the table with the columns added by user A, but not the columns added by the key user. User B doesn't see the changes made by the key user .

> ### Restriction:  
> Changes coming in from other flex layers, such as changes made by key users, are not considered for charts.

> ### Note:  
> -   Any filter field value coming from other layers is still overwritten by values for this field coming from SAP Fiori launchpad. For more information, see [Configuring Default Filter Values](configuring-default-filter-values-f27ad7b.md).
> 
> -   The logic that allows changes from other layers to be merged by the flex layer with the changes coming from an end user is only applied if the variant within the `iAppState` is available at the time when the restore takes place. If this is not the case, for example when the page was shared to another user and the target user doesn't have access to the variant shared in the `iAppState`, then the app loads using the *Standard* variant and the full state of the page when it is shared is applied on top, meaning without any other layer changes.
> 
> -   For a single-valued field, the merge logic always has priority over the other layer value \(the value of the key user, for example\) and the changes made by the end user for the same field are ignored.
> 
> -   If a user navigates to the list report via a dynamic tile created using the *Save as Tile* feature in the list report, the changes from other layers \(such as changes made by the key user, for example\) are not applied.

