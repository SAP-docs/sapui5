<!-- loioc512d71312e54b77809ba62b813239a1 -->

# What's New in SAPUI5 1.134

With this release SAPUI5 is upgraded from version 1.133 to 1.134.

> ### Tip:  
> If you want to do a search across all versions of the What's New content, you can also find it in the [SAPUI5 What's New viewer](https://help.sap.com/whats-new/67f60363b57f4ac0b23efd17fa192d60).

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

**Related Information**  


[What's New in SAPUI5 1.141](what-s-new-in-sapui5-1-141-a7ed66d.md "With this release SAPUI5 is upgraded from version 1.140 to 1.141.")

[What's New in SAPUI5 1.140](what-s-new-in-sapui5-1-140-26a106c.md "With this release SAPUI5 is upgraded from version 1.139 to 1.140.")

[What's New in SAPUI5 1.139](what-s-new-in-sapui5-1-139-e10db71.md "With this release SAPUI5 is upgraded from version 1.138 to 1.139.")

[What's New in SAPUI5 1.138](what-s-new-in-sapui5-1-138-8f6a92b.md "With this release SAPUI5 is upgraded from version 1.136 to 1.138.")

[What's New in SAPUI5 1.136](what-s-new-in-sapui5-1-136-a82754d.md "With this release SAPUI5 is upgraded from version 1.135 to 1.136.")

[What's New in SAPUI5 1.135](what-s-new-in-sapui5-1-135-93d7630.md "With this release SAPUI5 is upgraded from version 1.134 to 1.135.")

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

[What's New in SAPUI5 1.101](what-s-new-in-sapui5-1-101-7733b00.md "With this release SAPUI5 is upgraded from version 1.100 to 1.101.")

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

