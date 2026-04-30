<!-- loioed9aa41c563a44b18701529c8327db4d -->

# Draft Handling

You can configure how your SAP Fiori elements app handles drafts.

A draft is an interim version of a business entity that has not yet been explicitly saved as an active version. SAP Fiori elements supports the creation of apps that use draft handling.

Drafts are used as follows:

-   To keep unsaved changes when an editing activity is interrupted. This lets users resume editing later.

-   To prevent data loss if an app terminates unexpectedly.

-   As a locking mechanism to prevent multiple users from editing the same object at the same time, and to inform users about unsaved changes by another user.


When a user starts creating a new business entity or edits an existing one, a draft is created in the background. This enables field validation and dynamic field control \(showing additional fields based on user interaction\) and provides default values for fields based on recent data entry. A draft can be validated for consistency and completeness at any time. This returns a list of messages.

While the user is modifying a business entity, an indicator shows when a draft is saved implicitly. The user still needs to choose *Save* to incorporate the changes into an active business document.

There are two kinds of drafts :

-   Exclusive draft: only one user can create the draft for the business entity. Other users cannot see the changes before the user saves the draft.

-   Collaborative draft: all users who have access to a business object can access the draft and change the business entity.


Drafts are saved automatically in the background whenever users add or change information within a business entity while it's in edit mode.

You can use a keyboard shortcut to execute a `PreparationAction` or global side effects in the draft mode.



<a name="loioed9aa41c563a44b18701529c8327db4d__section_oll_ghj_gvb"/>

## Preparing the Draft for Activation by Pressing [Enter\]

On a draft version of a document, if you press [Enter\] on input fields, one of the following actions is triggered:

-   Global side effects \(`SideEffects` without `SourceProperties` and `SourceEntities`\) are executed if these side effects are defined in the entity related to the field, that is, the page entity in a form or the table entity in a cell.

-   If a `PreparationAction` is defined in the `DraftRoot` entity and the message is annotated, that `PreparationAction` is triggered and the messages are requested.


For more information, see [Using Global Side Effects](using-global-side-effects-955ae31.md) and our live example in the SAP Fiori development portal at [Global Patterns - Draft Validation](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/advancedFeatures/guidance/draftValidation).



<a name="loioed9aa41c563a44b18701529c8327db4d__section_mvv_ts2_pmb"/>

## Using the *Apply* Button

The footer bar of a subobject page contains an *Apply* button in create mode and edit mode. When users choose this button they can conclude their current create or edit activity, apply the changes or entries to the draft, and navigate one step up in the object hierarchy.

When a user edits an object, the system behavior of the *Apply* button is as follows: ![](images/Apply_button_36204dc.png)

1.  On an object page, the user chooses *Edit*.

2.  The system creates a draft version of the object.

3.  The user makes changes to the draft version of the object and navigates to a detail page. When the user chooses *Apply*, the changes are applied to the draft.

4.  When the user chooses *Save*, the changes are saved to the active version of the object.


> ### Note:  
> If the `DiscardAction` has been defined in the `DraftRoot` annotation, the `DiscardAction` is called if the user chooses to delete the draft. If the `DiscardAction` has not been defined, the `Delete` call is triggered instead.



<a name="loioed9aa41c563a44b18701529c8327db4d__section_ysr_zrm_mtb"/>

## Switching Between the Draft and Saved Version

Users can switch between the draft and saved version using a dropdown in applications that have the dynamic header.

  
  
**Dynamic Header**

![](images/Dynamic_Header_-_Draft_Handling_6c69105.png "Dynamic Header")



### Preparing the Draft for Activation on Tablet and Mobile Devices

The object page displays the *Validate* button to execute the `PreparationAction` call. The side effects, if configured, are also triggered along with the validate action.



## Filtering Draft-Related Data

Filtering draft-related data is enabled by default. The available filters are *Draft Created By*, *Draft Created On*, *Draft Last Changed By*, and *Draft Last Changed On*. Semantic operators are used by default for the time-related filters, displaying only past values.

> ### Note:  
> This feature is not available with a CAP service.



<a name="loioed9aa41c563a44b18701529c8327db4d__section_qvv_ts2_pmb"/>

## Handling Inconsistent Input

Users might enter data that is so inconsistent that the system cannot store it in the draft. For example, characters are entered in a number field, or more characters than the field length allows are entered. If this is the case, the contents of the UI differ from the contents of the draft. Before the draft can be saved by the user, the system displays a message prompting the users to solve these errors. After all errors have been solved, the draft can be saved.

This system behavior is also valid when using the *Apply* button. When choosing *Apply*, the system has to make sure that the contents on the UI and the stored contents of the draft are identical. If the errors described above occur, the system displays the same message prompting the user to solve them.

> ### Note:  
> This message lists only errors related to technical inconsistencies, not to logical inconsistencies. For example, if a user enters a business partner that does not exist, this error is not displayed. These types of errors are displayed in a state message when saving the object.



## Using the Collaborative Draft

If the service supports the collaborative draft using a `ShareAction` annotation, all drafts are automatically shared with all users who have access to draft data of the business object. In this case, users can edit the entity as long as the draft exists. If the user isn't authorized to modify draft data of the business object, a warning is displayed, and the draft is opened in display mode.

Avatars of all the users who are currently accessing this draft are displayed in the object page header.

When a user starts typing in a field or sets the focus in a specific field, it is locked for all the other users. An indicator appears next to the field to show who is modifying it.

When a user changes a field or performs an action, such as creating a new subitem, deleting a subitem, or calling an action, the new changes are immediately visible to the other users. When a user saves or discards the draft, the other users are notified.

Clicking the *Invite* button next to the user avatars shows a list of users who are currently editing the draft or have previously edited it. Users can also add other users to the list, asking them to join the collaborative draft. Note that adding a user to this list does not change their authorization. Only users with access to the business object can be invited.

When a user is added to the list, the draft appears in their *Own Draft* list.

> ### Caution:  
> The collaborative draft uses WebSocket for the synchronization between the participants, which extends the browser session timeout until all users have either navigated away from the draft, closed the session, or closed the application.
> 
> Please be aware of this behavior and also inform users of the app accordingly.

> ### Restriction:  
> -   This feature is only supported when using the ABAP RESTful Application Programming Model \(RAP\).
> 
> -   The lock mechanism is automatically built by native app extensions using the SAP Fiori elements for OData V4 building blocks. For freestyle app extensions, use the `CollaborativeDraftHandler` API. For information about the `CollaborativeDraftHandler` API, see the [API Reference](https://ui5.sap.com/#/api/sap.fe.macros.CollaborativeDraftHandler%23overview).
> 
> -   The mass edit feature is not supported on object pages when collaborative draft is enabled.



## Hiding Draft-Related Features

In applications that have only a limited number of editable fields, draft handling adds unnecessary overhead for users. For such applications, all features related to draft handling can be hidden from the UI while the draft functionality remains active in the background. To achieve this, enable the `hideDraft` property in the `manifest.json` file, as shown in the following sample code:

> ### Sample Code:  
> `manifest.json`
> 
> ```
> "sap.fe": {
>   "app": {
>     "hideDraft": {
>       "enabled": true
>     }
>   }
> }
> 
> ```

These applications work as follows:

-   List report page

    The *Editing Status* filter field is hidden.

-   Object page

    -   In create mode, when a user attempts to navigate away without saving the object, the application does not display the standard confirmation popup for activating the draft. Instead, it only displays the *Save* and *Cancel* actions.

    -   In edit mode, after a user modifies a field in the object page, the *Draft updated* message doesn't appear in the footer.


    The default navigation behavior navigates the user to the root object page after canceling or saving an object. You can modify the behavior to retain the user on the same page by configuring specific settings in the `manifest.json` file, as shown in the following sample code:

    > ### Sample Code:  
    > `manifest.json`
    > 
    > ```
    > "sap.fe": {
    >   "app": {
    >     "hideDraft": {
    >       "enabled": true,
    >       "stayOnCurrentPageAfterSave": true,
    >       "stayOnCurrentPageAfterCancel": true
    >     }
    >   }
    > }
    > 
    > ```

    > ### Tip:  
    > To ensure a consistent experience, set `stayOnCurrentPageAfterSave` and `stayOnCurrentPageAfterCancel` to the same value.

    The *Create Next* button allows a user to quickly create new objects. This button is visible by default. However, you can control its visibility by setting `hideCreateNext: true` in the `manifest.json` file, as shown in the following sample code:

    > ### Sample Code:  
    > `manifest.json`
    > 
    > ```
    > "sap.fe": {
    >   "app": {
    >     "hideDraft": {
    >       "enabled": true,
    >       "hideCreateNext": true
    >     }
    >   }
    > }
    > 
    > ```

-   Sub-object page

    The *Apply* button is hidden.




## Draft Handling with `editFlow`

The `editFlow` API is the main controller extension for draft handling in SAP Fiori elements for OData V4. You can use it to do the following:

-   Add custom logic in standard draft actions \(create, delete, edit, save, and discard\).

    For more information and live examples, see the SAP Fiori development portal at [Global Patterns - Draft Handling](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/controllerExtensions/editFlow).

-   Implement draft handling on custom pages.

    For more information and live examples, see the SAP Fiori development portal at [Custom Page - Draft Handling](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/controllerExtensions/customEditFlow).


For information about the `editFlow` API, see the [API Reference](https://ui5.sap.com/#/api/sap.fe.core.controllerextensions.EditFlow).



> ### Note:  
> For information about SAP Fiori elements for OData V2, see [Draft Handling](draft-handling-b0eb3cc.md).

**Related Information**  


[https://experience.sap.com/fiori-design-web/draft-handling/](https://experience.sap.com/fiori-design-web/draft-handling/)

[https://help.sap.com/docs/SAP\_NETWEAVER\_AS\_ABAP\_752/cc0c305d2fab47bd808adcad3ca7ee9d/d36820f082c84085b6634be4576e351a.html](https://help.sap.com/docs/SAP_NETWEAVER_AS_ABAP_752/cc0c305d2fab47bd808adcad3ca7ee9d/d36820f082c84085b6634be4576e351a.html)

[Confirmation Popups](confirmation-popups-9a53662.md "You can configure confirmation popups for various use cases on the list report page and the object page.")

[Using Global Side Effects](using-global-side-effects-955ae31.md "You can configure global side effects.")

[Toggling Between Draft and Saved Values](toggling-between-draft-and-saved-values-fd3950a.md "You can toggle between draft and saved values.")

