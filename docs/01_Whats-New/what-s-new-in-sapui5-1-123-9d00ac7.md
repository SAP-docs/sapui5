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

