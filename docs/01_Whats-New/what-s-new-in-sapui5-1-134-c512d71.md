<!-- loioc512d71312e54b77809ba62b813239a1 -->

<link rel="stylesheet" type="text/css" href="../css/sap-icons.css"/>

# What's New in SAPUI5 1.134

With this release SAPUI5 is upgraded from version 1.133 to 1.134.

> ### Tip:  
> If you want to do a search across all versions of the What's New content, you can also find it in the [SAPUI5 What's New viewer](https://help.sap.com/whats-new/67f60363b57f4ac0b23efd17fa192d60).

> ### Note:  
> Content marked as <span style="color:#666666;"><span class="SAP-icons-V5"></span></span>**[Preview](https://help.sap.com/docs/whats-new-disclaimer)** is provided as a courtesy, without a warranty, and may be subject to change. For more information, see the [preview disclaimer](https://help.sap.com/docs/whats-new-disclaimer).

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

Upcoming 

</td>
<td valign="top">

Deleted 

</td>
<td valign="top">

Announcement 

</td>
<td valign="top">

**End of Cloud Provisioning for SAPUI5 Versions \(Q1/2025\)** 

</td>
<td valign="top">

**End of Cloud Provisioning for SAPUI5 Versions \(Q1/2025\)**

The following SAPUI5 versions will be removed from the SAPUI5 Content Delivery Network \(CDN\) after the end of Q1/2025.

**Minor Versions Reaching Their End of Cloud Provisioning**

The following versions including all patches will be removed entirely:

-   1.114
-   1.117
-   1.121

**Action**: Upgrade to a version that is still in maintenance.

**Patch Versions Reaching Their End of Cloud Provisioning**

The following patches will be removed:

-   Long-term maintenance versions:

    -   1.71.61 to 1.71.62
    -   1.84.41 to 1.84.43
    -   1.96.27 to 1.96.29
    -   1.108.26 to 1.108.29
    -   1.120.3 to 1.120.10

    **Action**: Upgrade to the latest available patch for the respective SAPUI5 version.


For more information, see [Version Overview](https://ui5.sap.com/versionoverview.html).

<sub><span style="color:#666666;"><span class="SAP-icons-V5"></span></span>**[Preview](https://help.sap.com/docs/whats-new-disclaimer)**•Deleted•Announcement•Info Only•Upcoming</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

9999-01-01

</td>
</tr>
<tr>
<td valign="top">

1.134 

</td>
<td valign="top">

Deprecated 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**Deprecations** 

</td>
<td valign="top">

**Deprecations**

There are currently no major deprecations. For a complete list of all deprecations, see [Deprecated APIs](https://ui5.sap.com/#/api/deprecated).

<sub>Deprecated•Feature•Info Only•1.134</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-03-20

</td>
</tr>
<tr>
<td valign="top">

1.134 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.mdc.Table`** 

</td>
<td valign="top">

**`sap.ui.mdc.Table`**

Up to now, the `p13n` data and the variants did not save the information about whether details are displayed or hidden in a table \(*Show More per Row*/*Show Less per Row* buttons\). The state of this data is now persisted for responsive tables when the user presses the *Show More per Row* or the *Show Less per Row* button, when a new column is added or a variant is changed, or via `sap.ui.mdc.p13n.StateUtil`. Depending on what happens in the scenario, the state gets updated or stays the same, for example, for a new column that is hidden in the popin, `showDetails` is set to `true` and a change is created or, if it isn't hidden, the state stays the same.

<sub>Changed•Control•Info Only•1.134</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-03-20

</td>
</tr>
<tr>
<td valign="top">

1.134 

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

In alignment with OData V4, the `SmartFilterBar` control now ensures that multiple pasted values adhere to the maximum length defined in the metadata, preventing back-end errors caused by excessive input. This feature is useful for maintaining data integrity and avoiding errors when users paste data into filter fields. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.ui.comp.smartfilterbar.SmartFilterBar/sample/sap.ui.comp.sample.smartfilterbar.Basic). 

<sub>Changed•Control•Info Only•1.134</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-03-20

</td>
</tr>
<tr>
<td valign="top">

1.134 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.uxap.ObjectPageLayout`** 

</td>
<td valign="top">

**`sap.uxap.ObjectPageLayout`**

We've improved accessibility by removing default labels for untitled subsections and sections in the `ObjectPageLayout` control. This change ensures a cleaner and more intuitive navigation experience, as labeling now occurs at the section level or is derived from the anchor bar, improving usability for screen-reader users.

<sub>Changed•Control•Info Only•1.134</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-03-20

</td>
</tr>
<tr>
<td valign="top">

1.134 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.Select`** 

</td>
<td valign="top">

**`sap.m.Select`**

The `sap.m.Select` control now supports both [Space\] and [Enter\] keys to open its dropdown menu. This update enhances keyboard navigation, making it easier and more efficient for users to interact with breadcrumb elements. For more information, see [Accessibility for End Users](https://help.sap.com/viewer/bc5a64aac808463baa95b4230f221716/1.134/en-US).

<sub>Changed•Control•Info Only•1.134</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-03-20

</td>
</tr>
<tr>
<td valign="top">

1.134 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.MessageView`** 

</td>
<td valign="top">

**`sap.m.MessageView`**

The `MessageView` control has been enhanced to improve message display by enabling text wrapping and truncating long messages and subtitles after 140 characters. This feature allows users to access full message details by navigating to a detailed view, enhancing user experience and interface clarity. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.m.MessageView/sample/sap.m.sample.MessageViewInsideResponsivePopover).

<sub>Changed•Control•Info Only•1.134</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-03-20

</td>
</tr>
<tr>
<td valign="top">

1.134 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

SAP Fiori Elements 

</td>
<td valign="top">

**SAP Fiori Elements for OData V4** 

</td>
<td valign="top">

**SAP Fiori Elements for OData V4**

The following changes and new features are available for SAP Fiori elements for OData V4:

-   We've simplified draft handling in applications that only contain a very limited number of editable fields by hiding all features related to draft handling from the UI. For more information, see [Draft Handling](../06_SAP_Fiori_Elements/draft-handling-ed9aa41.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.134</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-03-20

</td>
</tr>
<tr>
<td valign="top">

1.134 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

SAP Fiori Elements 

</td>
<td valign="top">

**SAP Fiori Elements for OData V2** 

</td>
<td valign="top">

**SAP Fiori Elements for OData V2**

The following changes and new features are available for SAP Fiori elements for OData V2:

-   Side effects can now be triggered by custom fields in forms or custom table columns. For more information, see [Side Effects](../06_SAP_Fiori_Elements/side-effects-18b17bd.md).

-   Key users can now configure features that require modifications in the`manifest.json` file. This option is also available for legacy applications that use an array structure in the `manifest.json` file. For more information, see [Adapting the UI](../06_SAP_Fiori_Elements/adapting-the-ui-59bfd31.md).

-   We’ve added the *Share to SAP Collaboration Manager* option to the context menu of tables.


<sub>Changed•SAP Fiori Elements•Info Only•1.134</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-03-20

</td>
</tr>
<tr>
<td valign="top">

1.134 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.unified.Calendar`** 

</td>
<td valign="top">

**`sap.ui.unified.Calendar`** 

-   Year range selections are now presented in two columns instead of three. This change enhances accessibility and prevents numbers from being cut off when a text spacing tool is used.
-   Months, years, and year ranges now show as selected in their respective pickers if there is a selected date within the month, year, or year range. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.ui.unified.Calendar/sample/sap.ui.unified.sample.CalendarMultipleDaySelection).

<sub>Changed • Control • Info Only • 1.134 </sub> 

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-03-20

</td>
</tr>
<tr>
<td valign="top">

1.134 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.Button`** 

</td>
<td valign="top">

**`sap.m.Button`**

We have added a visible focus outline to `sap.m.Button` when the control receives focus on a mobile device from an external keyboard. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.m.Button/sample/sap.m.sample.Button).

<sub>Changed•Control•Info Only•1.134</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-03-20

</td>
</tr>
<tr>
<td valign="top">

1.134 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.DynamicDateRange`** 

</td>
<td valign="top">

**`sap.m.DynamicDateRange`**

We have simplified the display of date ranges of type *Last X Minutes / Hours / Days / Weeks / Months / Quarters / Years* and *Next X Minutes / Hours / Days / Weeks / Months / Quarters / Years* that are accessible from the control's *Choose date range* dropdown list. We have removed from the display of the date ranges in the *Select* dropdown *Unit of Time* in cases when it has become redundant because only one unit of time \(for example *Last X Minutes*\) has been specified by the application developer. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.DynamicDateRange).

<sub>Changed•Control•Info Only•1.134</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-03-20

</td>
</tr>
<tr>
<td valign="top">

1.134 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.ColorPalette`** 

</td>
<td valign="top">

**`sap.m.ColorPalette`**

If a color is selected in the `ColorPalette` or a color is selected in the `selectedColor` property, and subsequently the *More Colors* button is pressed to open the `ColorPicker`, the `ColorPicker` now inherits the selected color and displays it. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.ColorPalette).

<sub>Changed•Control•Info Only•1.134</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-03-20

</td>
</tr>
<tr>
<td valign="top">

1.134 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.TimePicker`** 

</td>
<td valign="top">

**`sap.m.TimePicker`**

Based on user testing feedback, we have implemented several improvements:

-   The clock dial in 24-hour format is now reprogrammed as a single circular interface.
-   Hovering over a number or a dot in the clock dial now highlights and visualizes the number for the respective hour.
-   Dots in the clock dial are now selectable.
-   To enhance visual interaction, we have improved animations for transitions between different clock dial visualization states \(hours, minutes, seconds\).

For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.m.TimePicker/sample/sap.m.sample.TimePicker). 

<sub>Changed•Control•Info Only•1.134</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-03-20

</td>
</tr>
<tr>
<td valign="top">

1.134 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.tnt.SideNavigation`** 

</td>
<td valign="top">

**`sap.tnt.SideNavigation`**

The new Overlay Mode allows `SideNavigation` to reside in `sap.m.ResponsivePopover` and function as a standard `SideNavigation`. To activate Overlay Mode, set the `verticalScrolling` property of the `ResponsivePopover` to `false`. In addition, we have created a new `design` property in `SideNavigation`. The `design` property handles the control’s container styling and we strongly recommend setting it to `Plain` in Overlay Mode. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.tnt.SideNavigation/sample/sap.tnt.sample.SideNavigationOverlayMode). 

<sub>Changed•Control•Info Only•1.134</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-03-20

</td>
</tr>
<tr>
<td valign="top">

1.134 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.FlexBox, sap.m.HBox, sap.m.VBox`** 

</td>
<td valign="top">

**`sap.m.FlexBox, sap.m.HBox, sap.m.VBox`**

The new `gap` property offers a simple and consistent approach to defining space between flex items \(rows and columns\), ensuring visual separation and enhancing the layout structure. Additionally, the `rowGap` and `columnGap` longhand properties can be used for more precision and take precedence over `gap` if both `gap` and either `rowGap` or `columnGap` are specified. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.m.FlexBox/sample/sap.m.sample.FlexBoxGap).

<sub>Changed•Control•Info Only•1.134</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-03-20

</td>
</tr>
<tr>
<td valign="top">

1.134 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.upload.UploadItem`** 

</td>
<td valign="top">

**`sap.m.upload.UploadItem`**

We've introduced the `uploadProgress` and the `uploadTerminated` events in the `sap.m.upload.UploadItem` element within the `sap.m.plugins.UploadSetwithTable` plugin. The `uploadProgress` event provides the progress details of a file upload. The `uploadTerminated` event notifies if a file upload has been terminated.

We’ve also introduced the `terminateUpload` public API to terminate an ongoing file upload. When users terminate a file upload using the `terminateUpload` API, the termination is confirmed and notified through the `uploadTerminated` event.

For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.upload.UploadItem) and the [Sample](https://ui5.sap.com/#/entity/sap.m.plugins.UploadSetwithTable/sample/sap.m.sample.UploadSetwithTablePlugin.ResponsiveTableProgressIndicator).

<sub>Changed•Control•Info Only•1.134</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-03-20

</td>
</tr>
<tr>
<td valign="top">

1.134 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**SAPUI5 OData V4 Model and OData V2 Model** 

</td>
<td valign="top">

**SAPUI5 OData V4 Model and OData V2 Model**

We have provided the `sap.ui.model.odata.v4.ODataModel#setRetryAfterHandler` and `sap.ui.model.odata.v2.ODataModel#setRetryAfterHandler` APIs. For more information, see *Handling of Temporarily Unavailable Back Ends* for the [OData V4](../04_Essentials/handling-of-temporarily-unavailable-back-ends-b3422ec.md) and [OData V2](../04_Essentials/odata-v2-model-6c47b2b.md#loio262f75165c3d43b1817f6469aaad453c) model, and the API Reference for [`v4.ODataModel#setRetryAfterHandler`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel%23methods/setRetryAfterHandler) and [`v2.ODataModel#setRetryAfterHandler`](https://ui5.sap.com/#/api/sap.ui.model.odata.v2.ODataModel%23methods/setRetryAfterHandler).

<sub>Changed•Feature•Info Only•1.134</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-03-20

</td>
</tr>
</table>

