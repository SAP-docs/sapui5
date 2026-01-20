<!-- loio7733b001a3714bbe8bf1bbb524cf1221 -->

# What's New in SAPUI5 1.101

With this release SAPUI5 is upgraded from version 1.100 to 1.101.



****


<table>
<tr>
<th valign="top">

Version

</th>
<th valign="top">

Type

</th>
<th valign="top">

Category

</th>
<th valign="top">

Title

</th>
<th valign="top">

Description

</th>
<th valign="top">

Action

</th>
<th valign="top">

Available as of

</th>
</tr>
<tr>
<td valign="top">

1.101 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**Drag and Drop** 

</td>
<td valign="top">

**Drag and Drop**

We have now enabled drag and drop for use on mobile devices for iOS 15.1 and higher releases and the latest Chrome 98 for Android.

> ### Note:  
> The availability of drag and drop depends on whether the respective browser supports drag and drop.

For more information, see [Drag and Drop](../04_Essentials/drag-and-drop-3ddb6cd.md).

<sub>Changed•Feature•Info Only•1.101</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-04-21

</td>
</tr>
<tr>
<td valign="top">

1.101 

</td>
<td valign="top">

UI Changed 

</td>
<td valign="top">

Announcement 

</td>
<td valign="top">

**Draft-Enabled Apps: Draft Toggle Button Moved** 

</td>
<td valign="top">

**Draft-Enabled Apps: Draft Toggle Button Moved**

> ### Note:  
> The following information concerns important changes for end users. These changes may require end users to adjust and/or test cases to be adapted, but they won't stop or disrupt software or processes.

To improve the user experience, we've changed the handling of the draft concept in SAP Fiori elements for OData V4. For more information, see the **SAP Fiori elements for OData V4** what's new entry for SAPUI5 version 1.101.

<sub>UI Changed•Announcement•Info Only•1.101</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-04-21

</td>
</tr>
<tr>
<td valign="top">

1.101 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**High Contrast Themes** 

</td>
<td valign="top">

**High Contrast Themes**

We have prevented the overwriting of the high contrast setting of Windows for all SAPUI5 themes when using Chrome and Edge browsers.

<sub>Changed•Feature•Info Only•1.101</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-04-21

</td>
</tr>
<tr>
<td valign="top">

1.101 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**SAPUI5 OData V2 Model** 

</td>
<td valign="top">

**SAPUI5 OData V2 Model**

The new `sap.ui.model.odata.v2.Context#delete` method deletes a binding's `Context` irrespective of its status, including inactive, transient, and persisted contexts.For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.model.odata.v2.Context%23methods/delete).

<sub>Changed•Feature•Info Only•1.101</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-04-21

</td>
</tr>
<tr>
<td valign="top">

1.101 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**SAPUI5 OData V4 Model** 

</td>
<td valign="top">

**SAPUI5 OData V4 Model**

The new version of the SAPUI5 OData V4 model introduces the following features:

-   We now support the setting of a different binding context for a relative list binding with transient contexts.

-   `sap.ui.model.odata.v4.AnnotationHelper#format` now evaluates the `com.sap.vocabularies.common.v1.Timezone` annotation of properties of the `Edm.DateTimeOffset` type. A composite binding with an `sap.ui.model.odata.type.DateTimeWithTimezone` type is generated, showing the date/time and the time zone. For more information, see [AnnotationHelper](../04_Essentials/meta-model-for-odata-v4-7f29fb3.md#loio7f29fb3ce5964d8090038a9d3cdf5060__section_AnnoHelp).

-   We provide a new sample application that demonstrates how data in different controls can be kept in sync. The application also shows important aspects of consuming a draft-enabled back-end service.For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.ui.model.odata.v4.ODataModel/sample/sap.ui.core.sample.odata.v4.Draft).


<sub>Changed•Feature•Info Only•1.101</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-04-21

</td>
</tr>
<tr>
<td valign="top">

1.101 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.List, sap.m.Table, sap.m.Tree`** 

</td>
<td valign="top">

**`sap.m.List, sap.m.Table, sap.m.Tree`**

For better user experience with a more visual approach and a more conversational tone, these tables can now use another control, for example, the `sap.m.IllustratedMessage` control, based on the new `noData` aggregation. This control can be used if no data is available for a table. For more information, see the [API Reference for the `noData` aggregation](https://ui5.sap.com/#/api/sap.m.ListBase) and the [API Reference for `IllustratedMessage`](https://ui5.sap.com/#/api/sap.m.IllustratedMessage). 

<sub>Changed•Control•Info Only•1.101</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-04-21

</td>
</tr>
<tr>
<td valign="top">

1.101 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.upload.UploadSet`** 

</td>
<td valign="top">

**`sap.m.upload.UploadSet`**

You can now sort, group, and filter the items within `UploadSet`.For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.upload.UploadSet) and the [Samples](https://ui5.sap.com/#/entity/sap.m.upload.UploadSet).

<sub>Changed•Control•Info Only•1.101</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-04-21

</td>
</tr>
<tr>
<td valign="top">

1.101 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.Wizard`** 

</td>
<td valign="top">

**`sap.m.Wizard`**

-   We have introduced the `navigationChange` event. It is fired when the current visible step is changed by either tapping on the `sap.m.WizardProgressNavigator` or scrolling through the steps. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.Wizard) and the [Sample](https://ui5.sap.com/#/entity/sap.m.Wizard/sample/sap.m.sample.WizardSingleStep). 

-   We have also removed the experimental flag for the `sap.m.WizardRenderMode` property. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.WizardRenderMode).


<sub>Changed•Control•Info Only•1.101</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-04-21

</td>
</tr>
<tr>
<td valign="top">

1.101 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.comp.smartfield.SmartField`** 

</td>
<td valign="top">

**`sap.ui.comp.smartfield.SmartField`**

`SmartField` can now show an empty indicator when the field in display mode doesn't contain a value. Until now, this was only possible when `SmartField` was used within a `SmartForm`. To see the empty indicator when you use `SmartField` standalone, you need to add the `sapMShowEmpty-CTX` context class to one of its parents. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smartfield.SmartField%23faq).

<sub>Changed•Control•Info Only•1.101</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-04-21

</td>
</tr>
<tr>
<td valign="top">

1.101 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.comp.smartfilterbar.SmartFilterBar`** 

</td>
<td valign="top">

**`sap.ui.comp.smartfilterbar.SmartFilterBar`**

Users can now rearrange the filters in the *Adapt Filters* dialog. With this improvement, the option to rearrange the filters is shown if filter items are available. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smartfilterbar.SmartFilterBar) and the [Sample](https://ui5.sap.com/#/entity/sap.ui.comp.smartfilterbar.SmartFilterBar/sample/sap.ui.comp.sample.smartfilterbar.example1).

<sub>Changed•Control•Info Only•1.101</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-04-21

</td>
</tr>
<tr>
<td valign="top">

1.101 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.comp.smartform.SmartForm`** 

</td>
<td valign="top">

**`sap.ui.comp.smartform.SmartForm`**

The `SemanticGroupElement` control now supports currency and unit of measure smart fields.

<sub>Changed•Control•Info Only•1.101</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-04-21

</td>
</tr>
<tr>
<td valign="top">

1.101 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.comp.smarttable.SmartTable`** 

</td>
<td valign="top">

**`sap.ui.comp.smarttable.SmartTable`**

We have improved the usability of the [Show Details\]/[Hide Details\] buttons and adapted the buttons and tooltips based on the SAP Design System guidelines. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smarttable.SmartTable%23methods/getShowDetailsButton) and the [Sample](https://ui5.sap.com/#/entity/sap.ui.comp.smarttable.SmartTable/sample/sap.ui.comp.sample.smarttable.mtableShowDetails).

<sub>Changed•Control•Info Only•1.101</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-04-21

</td>
</tr>
<tr>
<td valign="top">

1.101 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

SAP Fiori Elements 

</td>
<td valign="top">

**SAP Fiori elements for OData V2** 

</td>
<td valign="top">

**SAP Fiori elements for OData V2**

The following changes and new features are available for SAP Fiori elements for OData V2:

-   Partial processing is now supported in the mass edit dialog. Also, apps can add custom fields to the mass edit dialog. For more information, see [Adding Custom Input Fields to the Mass Edit Dialog](../06_SAP_Fiori_Elements/adding-custom-input-fields-to-the-mass-edit-dialog-fd26fee.md).

-   You can now display addresses in the contact facet. For more information, see [Adding a Contact Facet](../06_SAP_Fiori_Elements/adding-a-contact-facet-a6a8c0c.md).

-   You can now enable scrollable containers in the object page header, with improved facet order in the desktop screens. For more information, see [Header Facets](../06_SAP_Fiori_Elements/header-facets-17dbd5b.md).

-   We now support custom message strips in the list report and the analytical list page tables. For more information, see [Adding a Custom Message Strip to List Report, Analytical List Page and Object Page Tables](../06_SAP_Fiori_Elements/adding-a-custom-message-strip-to-list-report-analytical-list-page-and-object-page-tables-0fdbefb.md).

-   The variant name now gets stored and restored from the `iAppState` when it is in a clean state. For more information, see [Store/Restore the Application State](../06_SAP_Fiori_Elements/store-restore-the-application-state-46bf248.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.101</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-04-21

</td>
</tr>
<tr>
<td valign="top">

1.101 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

SAP Fiori Elements 

</td>
<td valign="top">

**SAP Fiori elements for OData V4** 

</td>
<td valign="top">

**SAP Fiori elements for OData V4**

The following changes and new features are available for SAP Fiori elements for OData V4:

-   When you're using the flexible column layout and switch to edit mode, the subobject page is now kept open. For more information, see [Enabling the Flexible Column Layout](../06_SAP_Fiori_Elements/enabling-the-flexible-column-layout-e762257.md).

-   We've enhanced the `Table` building block to support the `isSearchable` property. For more information, see [Building Blocks](../06_SAP_Fiori_Elements/building-blocks-24c1304.md).

-   We've changed the handling of the draft concept in SAP Fiori elements for OData V4, which results in the following UI changes:

    -   When users edit an object page, we've changed how they switch between the draft and the saved version of a document, to make it more intuitive.

        Until now, when working with the draft version of the document the user could switch to the saved version using the following button:

        ![](images/Object_page_-_draft_version_of_the_object_is_shown_using_button_text_Display_Saved_Version_6337dc4.png)

        Likewise, when working with the saved version of the document the user could switch to the draft using the following button:

        ![](images/Object_page_-_saved_version_of_the_object_is_shown_using_button_text_Return_to_Draft_8556812.png)

        As of SAPUI5 1.101, when working with the draft version of the document the user can switch to the saved version using the following popover:

        ![](images/Object_page_new_concept_-_draft_version_of_the_object_is_shown_using_button_text_Draft_0971995.png)

        Likewise, when working with the saved version of the document the user can switch to the draft version:

        ![](images/Object_page_new_concept_-_saved_version_of_the_object_is_displayed_746ff83.png)

        The highlighting and labels clearly indicate which version the user is currently working on.

    -   We've changed the dialog for handling draft changes, for example in case of navigation, to better explain the available options.

        Until now we showed the following confirmation dialog:

        ![](images/Object_page_new_concept_-_Draft_toggling_Warning_confirmation_dialog_in_old_version_457b83f.png)

        As of SAPUI5 1.101 we're showing the following confirmation dialog with the new default action *Save*:

        ![](images/Object_page_new_concept_-_Draft_toggling_Warning_confirmation_dialog_in_new_version_70024f1.png)


    For more information, see [Toggling Between Draft and Saved Values](../06_SAP_Fiori_Elements/toggling-between-draft-and-saved-values-fd3950a.md).

-   We've replaced some keys that can be overridden by application developers using the custom i18n file approach. If you're using any of the deprecated keys in the application resource bundles, replace them with the new ones.

    **Changed i18n Keys**


    <table>
    <tr>
    <th valign="top">

    Deprecated Key
    
    </th>
    <th valign="top">

    New Key
    
    </th>
    </tr>
    <tr>
    <td valign="top">
    
    T\_OP\_TABLE\_AND\_CHART\_NO\_DATA\_TEXT
    
    </td>
    <td valign="top">
    
    T\_TABLE\_AND\_CHART\_NO\_DATA\_TEXT
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    T\_OP\_TABLE\_AND\_CHART\_NO\_DATA\_TEXT\_WITH\_FILTER
    
    </td>
    <td valign="top">
    
    T\_TABLE\_AND\_CHART\_NO\_DATA\_TEXT\_WITH\_FILTER
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    M\_OP\_TABLE\_AND\_CHART\_NO\_DATA\_TEXT\_WITH\_FILTER\_MULTI\_VIEW
    
    </td>
    <td valign="top">
    
    M\_TABLE\_AND\_CHART\_NO\_DATA\_TEXT\_MULTI\_VIEW
    
    </td>
    </tr>
    <tr>
    <td valign="top">
    
    M\_OP\_TABLE\_AND\_CHART\_OP\_NO\_FILTERS\_NO\_DATA\_TEXT
    
    </td>
    <td valign="top">
    
    M\_TABLE\_AND\_CHART\_NO\_FILTERS\_NO\_DATA\_TEXT
    
    </td>
    </tr>
    </table>
    
    For more information, see [Localization of UI Texts](../06_SAP_Fiori_Elements/localization-of-ui-texts-b8cb649.md).

-   SAP Fiori elements for OData V4 now also supports charts in draft-enabled entity sets. For more information, see [Configuring Charts](../06_SAP_Fiori_Elements/configuring-charts-653ed0f.md).

-   SAP Fiori elements for OData V4 applications can now use extension APIs to execute custom code before the standard functionality of SAP Fiori elements for OData V4 is triggered. For more information, see [Using Custom Code Before Standard Operations](../06_SAP_Fiori_Elements/using-custom-code-before-standard-operations-877e5ff.md).

-   The filter bar of the value help is now expanded under certain conditions. For more information, see the *Filter Fields Within the Value Help Dialog* section in [Field Help](../06_SAP_Fiori_Elements/field-help-a5608ea.md).

-   You can now specify a timezone for a `DateTimeOffset` field. For more information, see [Field Help](../06_SAP_Fiori_Elements/field-help-a5608ea.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.101</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-04-21

</td>
</tr>
</table>

**Related Information**  


[What's New in SAPUI5 1.141](what-s-new-in-sapui5-1-141-a7ed66d.md "With this release SAPUI5 is upgraded from version 1.140 to 1.141.")

[What's New in SAPUI5 1.140](what-s-new-in-sapui5-1-140-26a106c.md "With this release SAPUI5 is upgraded from version 1.139 to 1.140.")

[What's New in SAPUI5 1.139](what-s-new-in-sapui5-1-139-e10db71.md "With this release SAPUI5 is upgraded from version 1.138 to 1.139.")

[What's New in SAPUI5 1.138](what-s-new-in-sapui5-1-138-8f6a92b.md "With this release SAPUI5 is upgraded from version 1.136 to 1.138.")

[What's New in SAPUI5 1.136](what-s-new-in-sapui5-1-136-a82754d.md "With this release SAPUI5 is upgraded from version 1.135 to 1.136.")

[What's New in SAPUI5 1.135](what-s-new-in-sapui5-1-135-93d7630.md "With this release SAPUI5 is upgraded from version 1.134 to 1.135.")

[What's New in SAPUI5 1.134](what-s-new-in-sapui5-1-134-c512d71.md "With this release SAPUI5 is upgraded from version 1.133 to 1.134.")

[What's New in SAPUI5 1.133](what-s-new-in-sapui5-1-133-86d7605.md "With this release SAPUI5 is upgraded from version 1.132 to 1.133.")

[What's New in SAPUI5 1.132](what-s-new-in-sapui5-1-132-bd2e61f.md "With this release SAPUI5 is upgraded from version 1.131 to 1.132.")

[What's New in SAPUI5 1.131](what-s-new-in-sapui5-1-131-7d24d94.md "With this release SAPUI5 is upgraded from version 1.130 to 1.131.")

[What's New in SAPUI5 1.130](what-s-new-in-sapui5-1-130-85609d4.md "With this release SAPUI5 is upgraded from version 1.129 to 1.130.")

[What's New in SAPUI5 1.129](what-s-new-in-sapui5-1-129-d22b8af.md "With this release SAPUI5 is upgraded from version 1.128 to 1.129.")

[What's New in SAPUI5 1.128](what-s-new-in-sapui5-1-128-1f76220.md "With this release SAPUI5 is upgraded from version 1.127 to 1.128.")

[What's New in SAPUI5 1.127](what-s-new-in-sapui5-1-127-e5e1317.md "With this release SAPUI5 is upgraded from version 1.126 to 1.127.")

[What's New in SAPUI5 1.126](what-s-new-in-sapui5-1-126-1d98116.md "With this release SAPUI5 is upgraded from version 1.125 to 1.126.")

[What's New in SAPUI5 1.125](what-s-new-in-sapui5-1-125-9d87044.md "With this release SAPUI5 is upgraded from version 1.124 to 1.125.")

[What's New in SAPUI5 1.124](what-s-new-in-sapui5-1-124-7f77c3f.md "With this release SAPUI5 is upgraded from version 1.123 to 1.124.")

[What's New in SAPUI5 1.123](what-s-new-in-sapui5-1-123-9d00ac7.md "With this release SAPUI5 is upgraded from version 1.122 to 1.123.")

[What's New in SAPUI5 1.122](what-s-new-in-sapui5-1-122-5d078da.md "With this release SAPUI5 is upgraded from version 1.121 to 1.122.")

[What's New in SAPUI5 1.121](what-s-new-in-sapui5-1-121-91a4a2f.md "With this release SAPUI5 is upgraded from version 1.120 to 1.121.")

[What's New in SAPUI5 1.120](what-s-new-in-sapui5-1-120-2359b63.md "With this release SAPUI5 is upgraded from version 1.119 to 1.120.")

[What's New in SAPUI5 1.119](what-s-new-in-sapui5-1-119-0b1903a.md "With this release SAPUI5 is upgraded from version 1.118 to 1.119.")

[What's New in SAPUI5 1.118](what-s-new-in-sapui5-1-118-3eecbde.md "With this release SAPUI5 is upgraded from version 1.117 to 1.118.")

[What's New in SAPUI5 1.117](what-s-new-in-sapui5-1-117-029d3b4.md "With this release SAPUI5 is upgraded from version 1.116 to 1.117.")

[What's New in SAPUI5 1.116](what-s-new-in-sapui5-1-116-ebd6f34.md "With this release SAPUI5 is upgraded from version 1.115 to 1.116.")

[What's New in SAPUI5 1.115](what-s-new-in-sapui5-1-115-409fde8.md "With this release SAPUI5 is upgraded from version 1.114 to 1.115.")

[What's New in SAPUI5 1.114](what-s-new-in-sapui5-1-114-890fce1.md "With this release SAPUI5 is upgraded from version 1.113 to 1.114.")

[What's New in SAPUI5 1.113](what-s-new-in-sapui5-1-113-a9553fe.md "With this release SAPUI5 is upgraded from version 1.112 to 1.113.")

[What's New in SAPUI5 1.112](what-s-new-in-sapui5-1-112-34afc69.md "With this release SAPUI5 is upgraded from version 1.111 to 1.112.")

[What's New in SAPUI5 1.111](what-s-new-in-sapui5-1-111-7a67837.md "With this release SAPUI5 is upgraded from version 1.110 to 1.111.")

[What's New in SAPUI5 1.110](what-s-new-in-sapui5-1-110-71a855c.md "With this release SAPUI5 is upgraded from version 1.109 to 1.110.")

[What's New in SAPUI5 1.109](what-s-new-in-sapui5-1-109-3264bd2.md "With this release SAPUI5 is upgraded from version 1.108 to 1.109.")

[What's New in SAPUI5 1.108](what-s-new-in-sapui5-1-108-66e33f0.md "With this release SAPUI5 is upgraded from version 1.107 to 1.108.")

[What's New in SAPUI5 1.107](what-s-new-in-sapui5-1-107-d4ff916.md "With this release SAPUI5 is upgraded from version 1.106 to 1.107.")

[What's New in SAPUI5 1.106](what-s-new-in-sapui5-1-106-5b497b0.md "With this release SAPUI5 is upgraded from version 1.105 to 1.106.")

[What's New in SAPUI5 1.105](what-s-new-in-sapui5-1-105-4d6c00e.md "With this release SAPUI5 is upgraded from version 1.104 to 1.105.")

[What's New in SAPUI5 1.104](what-s-new-in-sapui5-1-104-69e567c.md "With this release SAPUI5 is upgraded from version 1.103 to 1.104.")

[What's New in SAPUI5 1.103](what-s-new-in-sapui5-1-103-0e98c76.md "With this release SAPUI5 is upgraded from version 1.102 to 1.103.")

[What's New in SAPUI5 1.102](what-s-new-in-sapui5-1-102-f038c99.md "With this release SAPUI5 is upgraded from version 1.101 to 1.102.")

[What's New in SAPUI5 1.100](what-s-new-in-sapui5-1-100-27dec1d.md "With this release SAPUI5 is upgraded from version 1.99 to 1.100.")

[What's New in SAPUI5 1.99](what-s-new-in-sapui5-1-99-4f35848.md "With this release SAPUI5 is upgraded from version 1.98 to 1.99.")

[What's New in SAPUI5 1.98](what-s-new-in-sapui5-1-98-d9f16f2.md "With this release SAPUI5 is upgraded from version 1.97 to 1.98.")

[What's New in SAPUI5 1.97](what-s-new-in-sapui5-1-97-fa0e282.md "With this release SAPUI5 is upgraded from version 1.96 to 1.97.")

[What's New in SAPUI5 1.96](what-s-new-in-sapui5-1-96-7a9269f.md "With this release SAPUI5 is upgraded from version 1.95 to 1.96.")

[What's New in SAPUI5 1.95](what-s-new-in-sapui5-1-95-a1aea67.md "With this release SAPUI5 is upgraded from version 1.94 to 1.95.")

[What's New in SAPUI5 1.94](what-s-new-in-sapui5-1-94-c40f1e6.md "With this release SAPUI5 is upgraded from version 1.93 to 1.94.")

[What's New in SAPUI5 1.93](what-s-new-in-sapui5-1-93-f273340.md "With this release SAPUI5 is upgraded from version 1.92 to 1.93.")

[What's New in SAPUI5 1.92](what-s-new-in-sapui5-1-92-1ef345d.md "With this release SAPUI5 is upgraded from version 1.91 to 1.92.")

[What's New in SAPUI5 1.91](what-s-new-in-sapui5-1-91-0a2bd79.md "With this release SAPUI5 is upgraded from version 1.90 to 1.91.")

[What's New in SAPUI5 1.90](what-s-new-in-sapui5-1-90-91c10c2.md "With this release SAPUI5 is upgraded from version 1.89 to 1.90.")

[What's New in SAPUI5 1.89](what-s-new-in-sapui5-1-89-e56cddc.md "With this release SAPUI5 is upgraded from version 1.88 to 1.89.")

[What's New in SAPUI5 1.88](what-s-new-in-sapui5-1-88-e15a206.md "With this release SAPUI5 is upgraded from version 1.87 to 1.88.")

[What's New in SAPUI5 1.87](what-s-new-in-sapui5-1-87-b506da7.md "With this release SAPUI5 is upgraded from version 1.86 to 1.87.")

[What's New in SAPUI5 1.86](what-s-new-in-sapui5-1-86-4c1c959.md "With this release SAPUI5 is upgraded from version 1.85 to 1.86.")

[What's New in SAPUI5 1.85](what-s-new-in-sapui5-1-85-1d18eb5.md "With this release SAPUI5 is upgraded from version 1.84 to 1.85.")

[What's New in SAPUI5 1.84](what-s-new-in-sapui5-1-84-dc76640.md "With this release SAPUI5 is upgraded from version 1.82 to 1.84.")

[What's New in SAPUI5 1.82](what-s-new-in-sapui5-1-82-3a8dd13.md "With this release SAPUI5 is upgraded from version 1.81 to 1.82.")

[What's New in SAPUI5 1.81](what-s-new-in-sapui5-1-81-f5e2a21.md "With this release SAPUI5 is upgraded from version 1.80 to 1.81.")

[What's New in SAPUI5 1.80](what-s-new-in-sapui5-1-80-8cee506.md "With this release SAPUI5 is upgraded from version 1.79 to 1.80.")

[What's New in SAPUI5 1.79](what-s-new-in-sapui5-1-79-99c4cdc.md "With this release SAPUI5 is upgraded from version 1.78 to 1.79.")

[What's New in SAPUI5 1.78](what-s-new-in-sapui5-1-78-f09b63e.md "With this release SAPUI5 is upgraded from version 1.77 to 1.78.")

[What's New in SAPUI5 1.77](what-s-new-in-sapui5-1-77-c46b439.md "With this release SAPUI5 is upgraded from version 1.76 to 1.77.")

[What's New in SAPUI5 1.76](what-s-new-in-sapui5-1-76-aad03b5.md "With this release SAPUI5 is upgraded from version 1.75 to 1.76.")

[What's New in SAPUI5 1.75](what-s-new-in-sapui5-1-75-5cbb62d.md "With this release SAPUI5 is upgraded from version 1.74 to 1.75.")

[What's New in SAPUI5 1.74](what-s-new-in-sapui5-1-74-c22208a.md "With this release SAPUI5 is upgraded from version 1.73 to 1.74.")

[What's New in SAPUI5 1.73](what-s-new-in-sapui5-1-73-231dd13.md "With this release SAPUI5 is upgraded from version 1.72 to 1.73.")

[What's New in SAPUI5 1.72](what-s-new-in-sapui5-1-72-521cad9.md "With this release SAPUI5 is upgraded from version 1.71 to 1.72.")

[What's New in SAPUI5 1.71](what-s-new-in-sapui5-1-71-a93a6a3.md "With this release SAPUI5 is upgraded from version 1.70 to 1.71.")

[What's New in SAPUI5 1.70](what-s-new-in-sapui5-1-70-f073d69.md "With this release SAPUI5 is upgraded from version 1.69 to 1.70.")

[What's New in SAPUI5 1.69](what-s-new-in-sapui5-1-69-89a18bd.md "With this release SAPUI5 is upgraded from version 1.68 to 1.69.")

[What's New in SAPUI5 1.68](what-s-new-in-sapui5-1-68-f94bf93.md "With this release SAPUI5 is upgraded from version 1.67 to 1.68.")

[What's New in SAPUI5 1.67](what-s-new-in-sapui5-1-67-a6b1472.md "With this release SAPUI5 is upgraded from version 1.66 to 1.67.")

[What's New in SAPUI5 1.66](what-s-new-in-sapui5-1-66-c9896e9.md "With this release SAPUI5 is upgraded from version 1.65 to 1.66.")

[What's New in SAPUI5 1.65](what-s-new-in-sapui5-1-65-0f5acfd.md "With this release SAPUI5 is upgraded from version 1.64 to 1.65.")

[What's New in SAPUI5 1.64](what-s-new-in-sapui5-1-64-0e30822.md "With this release SAPUI5 is upgraded from version 1.63 to 1.64.")

[What's New in SAPUI5 1.63](what-s-new-in-sapui5-1-63-e8d9da7.md "With this release SAPUI5 is upgraded from version 1.62 to 1.63.")

[What's New in SAPUI5 1.62](what-s-new-in-sapui5-1-62-771f4d5.md "With this release SAPUI5 is upgraded from version 1.61 to 1.62.")

[What's New in SAPUI5 1.61](what-s-new-in-sapui5-1-61-d991552.md "With this release SAPUI5 is upgraded from version 1.60 to 1.61.")

[What's New in SAPUI5 1.60](what-s-new-in-sapui5-1-60-5a0e1f7.md "With this release SAPUI5 is upgraded from version 1.58 to 1.60.")

[What's New in SAPUI5 1.58](what-s-new-in-sapui5-1-58-7c927aa.md "With this release SAPUI5 is upgraded from version 1.56 to 1.58.")

[What's New in SAPUI5 1.56](what-s-new-in-sapui5-1-56-108b7fd.md "With this release SAPUI5 is upgraded from version 1.54 to 1.56.")

[What's New in SAPUI5 1.54](what-s-new-in-sapui5-1-54-c838330.md "With this release SAPUI5 is upgraded from version 1.52 to 1.54.")

[What's New in SAPUI5 1.52](what-s-new-in-sapui5-1-52-849e1b6.md "With this release SAPUI5 is upgraded from version 1.50 to 1.52.")

[What's New in SAPUI5 1.50](what-s-new-in-sapui5-1-50-759e9f3.md "With this release SAPUI5 is upgraded from version 1.48 to 1.50.")

[What's New in SAPUI5 1.48](what-s-new-in-sapui5-1-48-fa1efac.md "With this release SAPUI5 is upgraded from version 1.46 to 1.48.")

[What's New in SAPUI5 1.46](what-s-new-in-sapui5-1-46-6307539.md "With this release SAPUI5 is upgraded from version 1.44 to 1.46.")

[What's New in SAPUI5 1.44](what-s-new-in-sapui5-1-44-a0cb7a0.md "With this release SAPUI5 is upgraded from version 1.42 to 1.44.")

[What's New in SAPUI5 1.42](what-s-new-in-sapui5-1-42-468b05d.md "With this release SAPUI5 is upgraded from version 1.40 to 1.42.")

[What's New in SAPUI5 1.40](what-s-new-in-sapui5-1-40-fbab50e.md "With this release SAPUI5 is upgraded from version 1.38 to 1.40.")

[What's New in SAPUI5 1.38](what-s-new-in-sapui5-1-38-f218918.md "With this release SAPUI5 is upgraded from version 1.36 to 1.38.")

