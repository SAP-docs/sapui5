<!-- loio022bf0dcae1d4d90961ebe23d642fca3 -->

# The *Share* Functionality

The *Share* functionality allows users to share the current application state using options such as *Send Email* and *Save as Tile*.

-   *Send Email*

    When a user chooses this option, the link to the page opens in the default email client that is configured in the system. When a user chooses the link, the application page opens in the same state in which it was shared: filter settings, personalization options, and selections for charts and tables, as well app-specific button states such as the filter mode or view mode, are all transferred.

-   *Share in SAP Jam*

    You can also share the current application state using *Share in SAP Jam*. A dialog appears to allow users to select an existing Jam group, comments can be added, and Jam users can be tagged. Please note that this option is only available on platforms that are integrated with SAP Jam.

-   *Save as Tile*

    When a user chooses this option, the corresponding *Save as Tile*When a user chooses this option, the link to the page opens in the default email client that is configured in the system. When a dialog is displayed. When a user chooses the tile, the application page opens in the same state in which the tile was created. Application developers can customize the title and the sub-title of the tile. In the list report, a dynamic tile with a record count is created, where the applied filter is also taken into account.

-   *Share: Microsoft Teams*

    ![](images/Share_Microsoft_Teams_-_All_Options_None_Selected_f6ca832.png)

    When a user clicks the *Share* button and then the *Share: Microsoft Teams* option, a separate window opens with the available sharing options:

    -   As Chat

        Collaborate and quickly resolve issues, if necessary, simply by using Microsoft Teams chat to share a direct link with co-workers. You can provide them with access to a specific state of an SAP Fiori application, for example, so they can easily process any requests you have or tasks that come up.

    -   As Tab

        Work efficiently with a group of co-workers on specific content that you share in the form of a Microsoft Teams tab. Use the Microsoft Teams environment to work on the same context of an SAP Fiori application, and use the tab conversation option in parallel to share ideas, discuss, and collaborate.

    -   As Card

        Communicate better with your co-workers using Microsoft Teams by providing a collaborative view that shows application content in a new window and enables you to have a meaningful conversation.

        > ### Caution:  
        > If your application contains sensitive and personal data, enabling the *Share: Microsoft Teams* › *As Card* option results in the transfer of this information outside the SAP S/4HANA environment. Application teams need to carefully consider whether such data should be excluded by providing the corresponding annotation. For sensitive personal data, you can use `com.sap.vocabularies.PersonalData.v1.IsPotentiallySensitive`, and for personal data you can use `com.sap.vocabularies.PersonalData.v1.IsPotentiallyPersonal`. If you enable this feature for your business users, use the applicable information channels to inform them accordingly.


    Please note the following:

    The *Share: Microsoft Teams* option is only available if the required settings have been made by a system administrator. The *Share: Microsoft Teams* option is part of collaborative ERP \(enterprise resource planning\) within the SAP S/4HANA family of products. So this option is not available for all users.

    -   System administrators for SAP S/4HANA Cloud can find the required information at [Integrating Microsoft Teams](https://help.sap.com/docs/SAP_S4HANA_CLOUD/0f69f8fb28ac4bf48d2b57b9637e81fa/257ec7408db6420682462cd1d000e744.html).

    -   System administrators for SAP S/4HANA can find the required information at [Integration with Microsoft Teams](https://help.sap.com/docs/SAP_S4HANA_ON-PREMISE/8308e6d301d54584a33cd04a9861bc52/849465e69b7a490a88049fe0b24fb01e.html?version=2023.000).



> ### Note:  
> -   The *Share* functionality is available for the list report, object page, and subobject page.
> 
> -   For applications using the flexible column layout, the *Share* functionality is shown on the highest view level.
> 
> -   The *Share* functionality is not available for newly created objects in draft mode, so the button is not visible.
> 
> -   In SAP Fiori elements for OData V2, for draft objects with an existing active instance the *Share* functionality will directly share the URL of the active instance.
> 
>     In SAP Fiori elements for OData V4, for draft objects with an existing active instance the *Share* functionality will use the semantic bookmarking feature \(see the corresponding section in this topic below\), but if semantic keys are not defined then the URL of the active instance is shared.
> 
> -   The *Share: Microsoft Teams* functionality uses application states to shorten long URLs. These application state records are cleaned up in case they aren't accessed for a long time. For more information, see [Cleanup of Expired Application State](https://help.sap.com/docs/ABAP_PLATFORM_NEW/a7b390faab1140c087b8926571e942b7/6107ee41f89a43c9af0aa279fe039cca.html).
> 
> -   Users who want to use the *Share: Microsoft Teams* feature in incognito mode will receive an error of type ***Authentication Information HTTP Status 401- Unauthorized***. To resolve this, users must allow third-party cookies for the incognito session.



<a name="loio022bf0dcae1d4d90961ebe23d642fca3__section_t52_jql_ymb"/>

## Additional Features in SAP Fiori Elements for OData V2

The *Share* functionality is hidden for the creation pages of non-draft objects.

During tile creation, you can change the tile type from dynamic to static using an extension. For more information, see [Extending the Bookmark Function to Save Static Tiles to the SAP Fiori Launchpad](extending-the-bookmark-function-to-save-static-tiles-to-the-sap-fiori-launchpad-7e34ea9.md).



<a name="loio022bf0dcae1d4d90961ebe23d642fca3__section_r4n_lql_ymb"/>

## Additional Features in SAP Fiori Elements for OData V4



### Send Email

You can also use controller extension methods to change the subject line of the email.

For information about the `controllerextensions.Share` API, see the [API Reference](https://ui5.sap.com/#/api/sap.fe.core.controllerextensions.Share).

Make the following changes in the `manifest.json` file:

> ### Sample Code:  
> ```
> "sap.ui5": {
>         "extends": { 
>             "extensions": {
>                 "sap.ui.controllerExtensions": {
>                     "sap.fe.templates.ObjectPage.ObjectPageController": {
>                         "controllerName": "SalesOrder.ext.OPExtend"
>                     }
>                 }
>             }
>         },
> ```

Make the following changes in the `OPExtend.controller.js` file:

> ### Sample Code:  
> ```
> sap.ui.define(["sap/ui/core/mvc/ControllerExtension"], function(ControllerExtension) {
>         "use strict";
>         return ControllerExtension.extend("SalesOrder.ext.OPExtend", {
>             // this section allows to extend lifecycle hooks or override public methods of the base controller
>             override: {
>                onInit: function() {},
>                share: {
>                     adaptShareMetadata: function(oShareMetadata) {
>                         oShareMetadata.email.title = "test email subject"; // customise or change email subject
>                         return oShareMetadata;
>                     }
>                 }
>             }
>         });
>     }
> );
> ```



### Hiding Specific *Share* Menu Options

You can control the visibility of the share options displayed in the *Share* menu. You cannot hide the *Save as Tile* option, as it is always visible to end users. However, you can control the visibility of the *Send E-mail* and *Share: Microsoft Teams* options by configuring the `manifest.json` file.

This configuration can be done at both application level and page level. If the application-level settings for the share options’ visibility is set to `true` \(or is undefined\), then its visibility is inherited from the page-level settings. If the application-level settings for the share options’ visibility is set to `false`, then the specific share option is hidden, and the page-level settings aren't considered.

In the following sample code, the *Share: Microsoft Teams* option is hidden by setting `showMsTeamsOptions` to `false`, whereas the `showSendEmail` setting depends on the expression value, which can be either `true` or `false`.

> ### Sample Code:  
> Application-level settings
> 
> ```
> "sap.fe": {
>         "app": {
>             "share": {
>                 "showSendEmail": "{= !${isVerified} }",
>                 "teams": {
>                     "showMsTeamsOptions": false
>                 }
>             },
>             ...
>         }
>     }
> ```

The following sample code shows you how the share options' visibility setting is configured at page level:

The *Send E-mail* option is only hidden in the list report. The *Share: Microsoft Teams* option is displayed on the object page but is conditionally shown in the list report.

> ### Sample Code:  
> Page-level settings
> 
> ```
> "sap.ui5": {
>         "routing": {
>             "targets": {
>                 "SalesOrderManageList": {
>                     "type": "Component",
>                     "id": "SalesOrderManageList",
>                     "name": "sap.fe.templates.ListReport",
>                     "options": {
>                         "settings": {
>                             "share": {
>                              "showSendEmail": false,
>                                 "teams": {
>                                     "showMsTeamsOptions": "{= ${Delivered} }"
>                                 },
>                                 …
>                             }
>                         }
>                     },
>                     …
>                 },
>                 "SalesOrderManageObjectPage": {
>                     "type": "Component",
>                     "id": "SalesOrderManageObjectPage",
>                     "name": "sap.fe.templates.ObjectPage",
>                     "options": {
>                         "settings": {
>                             "share": {
>                                 "teams": {
>                                     "showMsTeamsOptions": true
>                                 },
>                             },
>                             …
>                         }
>                     },
>                     …
>                 },
>                 …
>             }
>         }
>     }
> 
> 
> ```

> ### Note:  
> -   The visibility of the *Share: Microsoft Teams › As Card* option, that is enabled using the `asCard` setting, is overridden if the visibility setting of the *Share: Microsoft Teams* option using `showMsteamsOptions` evaluates to `false` in the manifest.
> 
> -   The `showMsTeamsOptions` property is applicable only to apps that run on SAP Fiori launchpad, where the integration with *Share: Microsoft Teams* is available. The *Share: Microsoft Teams* option is a part of collaborative ERP \(enterprise resource planning\) within the SAP S/4HANA family of products and requires `ushell` and SAP Fiori launchpad configuration.



### Semantic Bookmarking

Semantic bookmarking enables the sharing of an object page even while it is being edited by a user, that is, even when the object page has the status `draft`.

When a user clicks on the chevron in a list report table and navigates to an object page, the URL contains technical keys or semantic keys \(depending on whether the application developer has defined semantic keys in the metadata for the entity set of the list report\).

Here’s an annotation snippet showing the semantic key annotation:

> ### Sample Code:  
> XML Annotation
> 
> ```xml
> <Annotation Term="Common.SemanticKey">
>    <Collection>
>       <PropertyPath>SalesOrder</PropertyPath>
>    </Collection>
> </Annotation>
> ```

> ### Sample Code:  
> ABAP CDS Annotation
> 
> ```
> 
> @ObjectModel: {
>   semanticKey: [ 'SalesOrder' ]
> }
> 
> define view SALESORDERMANAGE {
> 
> }
> ```

> ### Sample Code:  
> CAP CDS Annotation
> 
> ```
> 
> Common.SemanticKey : [
>     SalesOrder
> ],
> ```

If the application developer does not define the annotations for the semantic keys, the URL contains only the technical keys. In this case, if user A shares the URL via the *Share* functionality with user B, user B will only be able to open the list report page if user A shares while being in display mode. If user A is already in edit mode when the URL is shared, then user B will not be able to open the link, since user B cannot access the draft of user A.

If, however, the application developer has defined semantic keys, the URL only contains semantic keys. In this case, user B will be able to open the shared URL, irrespective of whether user A shares the active copy \(display mode\) or the draft copy \(edit mode\). If user A shares the draft copy, then user B sees the corresponding active copy of the object.

> ### Note:  
> Semantic bookmarking is currently not supported in the following cases:
> 
> -   for subobject pages
> 
> -   if not all of the semantic keys defined for the entity set are part of the available context
> 
> 
> In these cases, changing to edit mode results in the technical keys being added to the URL. If user A now shares the URL while in edit mode, then user B will not be able to open the link, since user B cannot access the draft of user A for the same record.

