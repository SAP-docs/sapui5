<!-- loio0b1903a1fcf04cb588985d7f01b0796e -->

# What's New in SAPUI5 1.119

With this release SAPUI5 is upgraded from version 1.118 to 1.119.

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

1.119 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.p13n.Popup`** 

</td>
<td valign="top">

**sap.m.p13n.Popup**

To select all columns in the personalization dialog, the user can now use the *Select All* option. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.p13n.SelectionPanel%23methods/setMultiSelectMode). 

<sub>Changed•Control•Info Only•1.119</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2023-10-05

</td>
</tr>
<tr>
<td valign="top">

1.119 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**`sap.ui.table.AnalyticalTable, sap.ui.table.Table, sap.ui.table.TreeTable`** 

</td>
<td valign="top">

**`sap.ui.table.AnalyticalTable, sap.ui.table.Table, sap.ui.table.TreeTable` **

-   You can now use `sap.m.plugins.CellSelector` \(experimental\) for cell selection in a table. It can also be used for the `sap.ui.mdc.Table` control \(experimental\). For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.plugins.CellSelector). 

-   We have made the different row mode elements of the tables available. They replace the various properties \(now deprecated\) that used to define, for example, whether a fixed number of rows is displayed in a table, or whether the user can change the number of displayed rows. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.table.rowmodes) and the [Sample](https://ui5.sap.com/#/entity/sap.ui.table.Table/sample/sap.ui.table.sample.RowModes).


<sub>Changed•Feature•Info Only•1.119</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2023-10-05

</td>
</tr>
<tr>
<td valign="top">

1.119 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**`sap.m.plugins.CopyProvider`** 

</td>
<td valign="top">

**`sap.m.plugins.CopyProvider`**

Users can now copy a cell block they have selected. To provide the required settings, we have introduced the `sap.m.plugins.CopyPreference` enumeration that allows users to either only copy selected cells or both rows and cells that they have selected. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.plugins.CopyPreference).

<sub>Changed•Feature•Info Only•1.119</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2023-10-05

</td>
</tr>
<tr>
<td valign="top">

1.119 

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

We have deprecated the following entities for `sap.ui.table*`:

-   `visibleRowCountMode`

-   `visibleRowCount`

-   `fixedRowCount`

-   `fixedBottomRowCount`

-   `rowHeight`

-   `minAutoRowCount`


<sub>Deprecated•Feature•Info Only•1.119</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2023-10-05

</td>
</tr>
<tr>
<td valign="top">

1.119 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.mdc.Table` \(experimental\)** 

</td>
<td valign="top">

**`sap.ui.mdc.Table` \(experimental\)**

Drag and drop has been enabled for the rows of the \(experimental\) `sap.ui.mdc.Table` control. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.mdc.table.DragDropConfig).

<sub>Changed•Control•Info Only•1.119</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2023-10-05

</td>
</tr>
<tr>
<td valign="top">

1.119 

</td>
<td valign="top">

Deprecated 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`valueHelpOnly` functionality** 

</td>
<td valign="top">

**`valueHelpOnly` functionality**

We have deprecated the `valueHelpOnly` functionality in the `sap.m.Input` control and its usage is discouraged. The reason is linked to the proper accessibility state of the control, therefore we advise against its further use.

<sub>Deprecated•Control•Info Only•1.119</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2023-10-05

</td>
</tr>
<tr>
<td valign="top">

1.119 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

SAP Fiori Elements 

</td>
<td valign="top">

**SAP Fiori elements for OData V2 and SAP Fiori elements for OData V4** 

</td>
<td valign="top">

**SAP Fiori elements for OData V2 and SAP Fiori elements for OData V4**

The following changes and new features are available for SAP Fiori elements for OData V2 and SAP Fiori elements for OData V4:

-   List report applications with responsive tables now display the *Select All* option instead of the *Clear All* option by default. For more information, see [Enabling Multiple Selection in Tables](../06_SAP_Fiori_Elements/enabling-multiple-selection-in-tables-116b5d8.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.119</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2023-10-05

</td>
</tr>
<tr>
<td valign="top">

1.119 

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

-   You can now enable lazy loading of cards on the overview page by setting `enableLazyRendering` to `true` in the `manifest.json`. For more information, see [Descriptor Configuration for the Overview Page](../06_SAP_Fiori_Elements/descriptor-configuration-for-the-overview-page-f194b41.md).

-   The empty row mode now indicates if the required fields in the tables of the object page don't have a value. For more information, see [Enabling Inline Creation Mode or Empty Row Mode for Table Entries](../06_SAP_Fiori_Elements/enabling-inline-creation-mode-or-empty-row-mode-for-table-entries-cfb04f0.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.119</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2023-10-05

</td>
</tr>
<tr>
<td valign="top">

1.119 

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

-   In edit mode, we now indicate if a table column contains required fields. For more information, see [Enabling Inline Creation Mode or Empty Row Mode for Table Entries](../06_SAP_Fiori_Elements/enabling-inline-creation-mode-or-empty-row-mode-for-table-entries-cfb04f0.md).

-   Application developers can now incorporate the column header in the calculation of the column width. For more information, see [Tables](../06_SAP_Fiori_Elements/tables-c0f6592.md).

-   End users can now use the copy to clipboard feature for multiple rows and ranges in list report and object page tables. For more information, see [Tables](../06_SAP_Fiori_Elements/tables-c0f6592.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.119</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2023-10-05

</td>
</tr>
<tr>
<td valign="top">

1.119 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**SAPUI5 Data Types** 

</td>
<td valign="top">

**SAPUI5 Data Types**

The `getPlaceholderText` method is no longer experimental and can be used productively. It was introduced with SAPUI5 1.114 and is used with the following data types:

-   `sap.ui.model.odata.type.ODataType` and any OData types inheriting from it
-   `sap.ui.model.odata.type.DateTimeWithTimezone`
-   `sap.ui.model.type.Date`
-   `sap.ui.model.type.DateInterval`

<sub>Changed•Feature•Info Only•1.119</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2023-10-05

</td>
</tr>
<tr>
<td valign="top">

1.119 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**SAPUI5 Client Models** 

</td>
<td valign="top">

**SAPUI5 Client Models**

Client models like `sap.ui.model.json.JSONModel` now support the `ignoreMessages` binding parameter for property bindings.

For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.model.ClientModel%23methods/bindProperty).

<sub>Changed•Feature•Info Only•1.119</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2023-10-05

</td>
</tr>
<tr>
<td valign="top">

1.119 

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

For the `tokenHandling` parameter of the `v2.ODataModel`, we now support the additional `skipServerCache` string value. If you provide this value, the security token is not cached with the server as a key. This prevents failing `$batch` requests when accessing services running on different back-end systems behind a reverse proxy. Use this option only if the system landscape is known.

<sub>Changed•Feature•Info Only•1.119</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2023-10-05

</td>
</tr>
<tr>
<td valign="top">

1.119 

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

-   **Experimental:** You can now move nodes in recursive hierarchies. This experimental feature must not be used in productive applications yet.

    For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context%23methods/move).

-   **Experimental:** The `sap.ui.model.odata.v4.ODataContextBinding#execute` method can now also return a so-called return value context if the path of the binding parameter contains a navigation property. This experimental feature must not be used in productive applications yet.

    For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataContextBinding%23methods/execute).


<sub>Changed•Feature•Info Only•1.119</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2023-10-05

</td>
</tr>
<tr>
<td valign="top">

1.119 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.comp.smartchart.SmartChart`** 

</td>
<td valign="top">

**`sap.ui.comp.smartchart.SmartChart`**

We have improved the samples for the calendar and fiscal annotations.

For more information, see the [Samples](https://ui5.sap.com/#/entity/sap.ui.comp.smartchart.SmartChart).

<sub>Changed•Control•Info Only•1.119</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2023-10-05

</td>
</tr>
<tr>
<td valign="top">

1.119 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**`sap.ui.export.ExportHandler`** 

</td>
<td valign="top">

**`sap.ui.export.ExportHandler`**

We now support the export of time zones to a PDF file with the required formatting for columns of type `DateTime`. The `timezone` and `timezoneProperty` properties will be converted into the PDF-specific `IANATimezone` and `IANATimezoneProperty` formats. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.export.ExportHandler).

<sub>Changed•Feature•Info Only•1.119</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2023-10-05

</td>
</tr>
<tr>
<td valign="top">

1.119 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.MenuButton`** 

</td>
<td valign="top">

**`sap.m.MenuButton`**

The `beforeMenuOpen` event, which was previously fired in split button mode only, now also fires in regular mode. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.MenuButton).

<sub>Changed•Control•Info Only•1.119</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2023-10-05

</td>
</tr>
<tr>
<td valign="top">

1.119 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.PlanningCalendar`** 

</td>
<td valign="top">

**`sap.m.PlanningCalendar`**

We have introduced a new `rowHeaderPress` event that is fired when the row header is pressed with a mouse click or when reached by the keyboard. This new event replaces the deprecated `rowHeaderClick` event, which was fired on mouse click only. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.PlanningCalendar).

<sub>Changed•Control•Info Only•1.119</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2023-10-05

</td>
</tr>
<tr>
<td valign="top">

1.119 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.integration.widgets.Card`** 

</td>
<td valign="top">

**`sap.ui.integration.widgets.Card`**

-   We have updated the Adaptive type `sap.ui.integration.widgets.Card` to support the newest markdown features available for Microsoft Adaptive Cards. Тhe markdown third-party packages are now updated to version 12.3.2. For more information, see the [Adaptive Card](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/typesOther/adaptive) Learn section and [Markdown](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/adaptive/markdown) Samples in the Card Explorer.
-   Client-side pagination now provides access to the paginator model. Before, access was available only for server-side pagination. Card developers can now leverage the power of `skip`, `size`, and `pageIndex` model values to create more informative cards using data binding. For more information, see the [Pagination](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/features/pagination) Learn section and [Samples](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/pagination) in the Card Explorer.
-   The \(experimental\) `ShowCard` action is used to show another card with more details or additional actions. We have introduced two new \(experimental\) properties to control the card:
    -   `closeButton` - shows or hides a *Close* button in the header of the card. For more information, see the [Default Header](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/headers/default) and [Numeric Header](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/headers/numeric) Learn sections in the Card Explorer.
    -   `resizable` - controls whether the card can be resized. For more information, see the [Show Card](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/actions/showCard) Learn section in the Card Explorer.


<sub>Changed•Control•Info Only•1.119</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2023-10-05

</td>
</tr>
<tr>
<td valign="top">

1.119 

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

The control now supports `CustomData` configuration that defines how to calculate and display calendar weeks. This configuration includes both the first day of the week and the first week of the year. To use it, you can set `CustomData` with `key="calendarWeekSettings"`. Possible values are listed in the [CalendarWeekNumbering](https://ui5.sap.com/#/api/sap.ui.core.date.CalendarWeekNumbering) enum.

<sub>Changed•Control•Info Only•1.119</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2023-10-05

</td>
</tr>
</table>

**Related Information**  


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

