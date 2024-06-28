<!-- loio9d00ac7f35734554ac9d11de5f3d4dbe -->

# What's New in SAPUI5 1.123

With this release SAPUI5 is upgraded from version 1.122 to 1.123.

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

1.123 

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

-   You can now set a request size limit for the export in a table using the `exportRequestSize` parameter defined in the manifest or the `Table` building block. For more information, see [Using the Export Feature](../06_SAP_Fiori_Elements/using-the-export-feature-4bab6f2.md).

-   For the `Table` building block and the `Chart` building block, we now provide getter and setter methods for the `SelectionVariant`. For more information, see [The Table Building Block](../06_SAP_Fiori_Elements/the-table-building-block-3801656.md) and [The Chart Building Block](../06_SAP_Fiori_Elements/the-chart-building-block-52d065a.md).

-   We now support a time axis for a chart based on its dimension type. For more information, see [The Chart Building Block](../06_SAP_Fiori_Elements/configuring-charts-653ed0f.md).

-   You can now disable the setting for the history of recently entered values. For more information, see [Enabling the History of Recently Entered Values](../06_SAP_Fiori_Elements/enabling-the-history-of-recently-entered-values-37dbf1f.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.123</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-04-18

</td>
</tr>
<tr>
<td valign="top">

1.123 

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

-   Value help input fields now support the `TextArrangement` annotation in the *Create* dialog. For more information, see [Displaying Text and ID for Value Help Input Fields](../06_SAP_Fiori_Elements/displaying-text-and-id-for-value-help-input-fields-080886d.md).

-   We now ensure that the fields annotated with intent-based navigation support the `TextArrangement` annotation. For more information, see [Displaying Text and ID for Value Help Input Fields](../06_SAP_Fiori_Elements/displaying-text-and-id-for-value-help-input-fields-080886d.md).

-   The tables on list reports and object pages now support context menus. For more information, see [Tables](../06_SAP_Fiori_Elements/tables-c0f6592.md).

-   End users can now paste data from the clipboard into a single cell or a range of cells within a grid table. For more information, see [Copying and Pasting from External Applications to Tables](../06_SAP_Fiori_Elements/copying-and-pasting-from-external-applications-to-tables-f6a8fd2.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.123</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-04-18

</td>
</tr>
<tr>
<td valign="top">

1.123 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**Spreadsheet Export** 

</td>
<td valign="top">

**Spreadsheet Export**

We have introduced the `downloadLimit` property. Using this property, you can determine how many rows are exported based on your specific needs. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.export.Spreadsheet%23constructor). 

<sub>Changed•Feature•Info Only•1.123</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-04-18

</td>
</tr>
<tr>
<td valign="top">

1.123 

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

<sub>Deprecated•Feature•Info Only•1.123</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-04-18

</td>
</tr>
<tr>
<td valign="top">

1.123 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.MenuItem` and `sap.ui.unified.MenuItem`** 

</td>
<td valign="top">

**`sap.m.MenuItem`, `sap.ui.unified.MenuItem`**

We have added a new `shortcutText` property to the menu items of both controls. It allows developers to provide users with a quick reference about the available keyboard shortcuts. The shortcut text is displayed after the regular menu item text. Additionally, when the `shortcutText` property is set, the `aria-keyshortcuts` attribute is automatically rendered in the menu item's DOM element. This attribute holds the same value as the `shortcutText` property, thereby improving accessibility for users who rely on assistive technologies. For more information, see the API References of [sap.m.MenuItem](https://ui5.sap.com/#/api/sap.m.MenuItem) and [sap.ui.unified.MenuItem](https://ui5.sap.com/#/api/sap.ui.unified.MenuItem) controls.

<sub>Changed•Control•Info Only•1.123</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-04-18

</td>
</tr>
<tr>
<td valign="top">

1.123 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.SinglePlanningCalendar`** 

</td>
<td valign="top">

**`sap.m.SinglePlanningCalendar`**

-   We have introduced a way to place custom content inside calendar appointments in the same way as it was already possible in the `sap.m.PlanningCalendar`. Using the `customContent` aggregation you can now add suitable controls in the `sap.ui.unified.CalendarAppointment` and these controls will be rendered instead of the original `title`, `text`, `description`, and `icon` properties of the appointment. The custom content will be displayed in all views of the `SinglePlanningCalendar`. As an application developer, you must ensure that all the accessibility requirements are met, and that the height of the content conforms with the height provided by the appointment For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.unified.CalendarAppointment).
-   We have introduced two new events triggered from the Month view:

    -   `weekNumberPress` - fired when a calendar week number is pressed. It carries information about the number of the selected week.
    -   `selectedDatesChange` - fired when a new day, or a sequence of days, is selected. If the event is prevented, the change will not occur.

    For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.SinglePlanningCalendar).


<sub>Changed•Control•Info Only•1.123</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-04-18

</td>
</tr>
<tr>
<td valign="top">

1.123 

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

-   We have improved the control when used with flexible time formats. We have changed the default behavior of the mask and now, if the `maskMode` property is set to `On`, the mask is only applied to time formats with a fixed length, but it’s disabled when the time format doesn't have a fixed length. Additionally, we have added a new `maskMode` option, `Enforce`, with which the mask will always be enforced, regardless of whether the length of the time format is fixed or variable.
-   The flexible time periods that are specified with date patterns with the `B` symbol in the display format can now be used in the control’s value help. Date patterns specified with the `B` symbol are using values like `midnight`, `noon`, `in the morning`, `in the afternoon`, and others. These values are now adapted to AM/PM when a 12-hour format is used.

For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.TimePicker).

<sub>Changed•Control•Info Only•1.123</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-04-18

</td>
</tr>
<tr>
<td valign="top">

1.123 

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

-   We have introduced the `sap.ui.model.odata.v4.ODataContextBinding#invoke` method, replacing the now deprecated `#execute` method.

-   If you use the experimental feature of recursive hierarchy maintenance and call the `sap.ui.model.odata.v4.Context#requestSideEffects` API with an empty navigation property path on the header context of a list binding, the expansion state of nodes is now kept, and created nodes are still shown preceding their siblings.

    For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context%23methods/requestSideEffects).

-   If you use the experimental feature of selecting all records by calling `sap.ui.model.odata.v4.Context#setSelected` on the header context of a list binding, all loaded contexts are now selected accordingly.

    For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context%23methods/setSelected).


<sub>Changed•Feature•Info Only•1.123</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-04-18

</td>
</tr>
<tr>
<td valign="top">

1.123 

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

The `SmartField` control now renders `ObjectStatus` in a smart table when it is annotated with the `com.sap.vocabularies.UI.v1.Criticality` annotation.

The criticality is configured through the `com.sap.vocabularies.UI.v1.DataFieldDefault` and `com.sap.vocabularies.UI.v1.LineItem` annotations.

For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smartfield.SmartField%23annotations). 

<sub>Changed•Control•Info Only•1.123</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-04-18

</td>
</tr>
<tr>
<td valign="top">

1.123 

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

-   The copy functionality of tokens for multi-value filter fields of the smart filter bar has been improved. Now, when tokens contain values with an ID and description, they are separated in the clipboard. This way, the user can paste either just the ID or the ID with the description.

-   We have improved the error messages that you receive when searching for an ID in the `sap.m.Input` and `sap.m.ComboBox` fields with the `textOnly` setting \(where only the description is shown\).


<sub>Changed•Control•Info Only•1.123</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-04-18

</td>
</tr>
<tr>
<td valign="top">

1.123 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.InputBase`,`sap.m.ComboBox`** 

</td>
<td valign="top">

**`sap.m.InputBase`, `sap.m.ComboBox`**

We have enhanced the behavior to display the value state message when clicking the input if it was moved out of the viewport or hidden for any other reason.

<sub>Changed•Control•Info Only•1.123</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-04-18

</td>
</tr>
<tr>
<td valign="top">

1.123 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.Input`, `sap.m.ComboBox` ** 

</td>
<td valign="top">

**`sap.m.Input`, `sap.m.ComboBox`**

We have improved the behavior of type-ahead and selection of dynamically added items when users edit or delete input or suggestions. When users delete characters and the remaining text exactly matches an item, that item is now selected.

<sub>Changed•Control•Info Only•1.123</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-04-18

</td>
</tr>
</table>

**Related Information**  


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

