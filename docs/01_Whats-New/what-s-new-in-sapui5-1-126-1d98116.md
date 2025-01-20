<!-- loio1d981160daf94bbfb0324311f1b35716 -->

# What's New in SAPUI5 1.126

With this release SAPUI5 is upgraded from version 1.125 to 1.126.

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

1.126 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.comp.navpopover.SmartLink`** 

</td>
<td valign="top">

**`sap.ui.comp.navpopover.SmartLink`**

We have replaced the `navigationTargetsObtained` event with the `navigationTargetsObtainedCallback` property. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.navpopover.SmartLink%23methods/getNavigationTargetsObtainedCallback).

<sub>Changed•Control•Info Only•1.126</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-07-11

</td>
</tr>
<tr>
<td valign="top">

1.126 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**Document Export** 

</td>
<td valign="top">

**Document Export**

We have restructured and improved the documentation for exporting data: We have renamed the former *Spreadsheet Export* to *Document Export* and included information about exporting files to PDF.

For more information, see [Document Export](../04_Essentials/document-export-d4ff3b9.md), the [API Reference](https://ui5.sap.com/#/api/sap.ui.export.Spreadsheet) for the spreadsheet export, and the [API Reference](https://ui5.sap.com/#/api/sap.ui.export.ExportHandler%23overview) for the export handler.

<sub>Changed•Feature•Info Only•1.126</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-07-11

</td>
</tr>
<tr>
<td valign="top">

1.126 

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

-   You can now include filter fields from navigation entities by configuring the `manifest.json` file. For more information, see [Adapting the Filter Bar](../06_SAP_Fiori_Elements/adapting-the-filter-bar-609c39a.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.126</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-07-11

</td>
</tr>
<tr>
<td valign="top">

1.126 

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

-   In a tree table, you can now show newly created nodes at the position computed by the back end, for example by taking sorting into account. For more information, see [Tree Tables](../06_SAP_Fiori_Elements/tree-tables-7cf7a31.md).

-   You can now use buttons in the tree table toolbar to move a selected node before its previous sibling or after its next sibling. For more information, see [Tree Tables](../06_SAP_Fiori_Elements/tree-tables-7cf7a31.md).

-   We now support specifying which fields can be included or excluded from the Mass Edit dialog. For more information, see [Enabling Editing Using a Dialog \(Mass Edit\)](../06_SAP_Fiori_Elements/enabling-editing-using-a-dialog-mass-edit-965ef5b.md).

-   You can now specify the operation grouping mode for mass edit changes in the `manifest.json` file. For more information, see [Enabling Editing Using a Dialog \(Mass Edit\)](../06_SAP_Fiori_Elements/enabling-editing-using-a-dialog-mass-edit-965ef5b.md).

-   We now support a `manifest.json` file parameter to set the default creation mode in tables to `InlineCreationRows`. For more information, see [Enabling Inline Creation Mode or Empty Row Mode for Table Entries](../06_SAP_Fiori_Elements/enabling-inline-creation-mode-or-empty-row-mode-for-table-entries-cfb04f0.md).

-   You can now use semantic single date operators such as `"TODAY"` or `"TOMORROW"` as parameter values when using *FROM* or *TO* operations. For more information, see [Enabling Semantic Operators in the Filter Bar](../06_SAP_Fiori_Elements/enabling-semantic-operators-in-the-filter-bar-fef65d0.md).

-   We now support masked input fields that only accept values in a specified format. For more information, see [Different Representations of a Field](../06_SAP_Fiori_Elements/different-representations-of-a-field-c18ada4.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.126</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-07-11

</td>
</tr>
<tr>
<td valign="top">

1.126 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.Avatar`** 

</td>
<td valign="top">

**`sap.m.Avatar`**

-   You can now add badges without requiring a press event.

-   When the `sap.m.Avatar` with a badge is in focus, the `badgeTooltip` is now announced by screen readers.


<sub>Changed•Control•Info Only•1.126</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-07-11

</td>
</tr>
<tr>
<td valign="top">

1.126 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.InputBase`** 

</td>
<td valign="top">

**`sap.m.InputBase`**

We have exposed the `setPreferredUserInteraction` method to allow application developers to set the preferred interaction type for the input controls. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.InputBase). 

<sub>Changed•Control•Info Only•1.126</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-07-11

</td>
</tr>
<tr>
<td valign="top">

1.126 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.RadioButton`** 

</td>
<td valign="top">

**`sap.m.RadioButton`**

The control now supports wrapping. By default, the wrapping is disabled, and the label text is truncated without hyphenation. You can control its behavior using the new `wrapping` and `wrappingType` properties. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.RadioButton) and the [Sample](https://ui5.sap.com/#/entity/sap.m.Carousel/sample/sap.m.sample.RadioButton).

<sub>Changed•Control•Info Only•1.126</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-07-11

</td>
</tr>
<tr>
<td valign="top">

1.126 

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

-   We have added a new `displayZeroValue` property to the \(experimental\) StackedBar micro chart. When set to `true` \(default\), each bar of the chart is displayed, even if its corresponding value is zero. For more information, see the [Card Micro Charts](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/features/microcharts) section and the [Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/microCharts/stackedBarZeroValues) in the Card Explorer.

-   We have added a new `fitType` property to the icons in List and Table cards. Using the new property, you can now control how the image fits in the available icon space. For more information, see the [List Card Charts](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/typesDeclarative/list) and the [Table Card](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/typesDeclarative/table) sections in the Card Explorer.

-   We have \(experimentally\) enhanced the responsive behavior of the cards. For more information, see the [Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/progressive) in the Card Explorer.


<sub>Changed•Control•Info Only•1.126</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-07-11

</td>
</tr>
<tr>
<td valign="top">

1.126 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**SAPUI5 OData Models** 

</td>
<td valign="top">

**SAPUI5 OData Models**

We have adapted the calculation of the `$top` and `$skip` query options for both the `sap.ui.model.odata.v2.ODataModel` and the `sap.ui.model.odata.v4.ODataModel` so that more data is requested when scrolling in a list. These requests now typically have a `$top` value that corresponds to the threshold parameter set for the `sap.ui.table.Table` control.

For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.table.Table%23controlProperties).

<sub>Changed•Feature•Info Only•1.126</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-07-11

</td>
</tr>
<tr>
<td valign="top">

1.126 

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

-   When you use the experimental selection feature, a `selectionChanged` event is now raised by the `sap.ui.model.odata.v4.ODataListBinding` if the selection is either changed via `sap.ui.model.odata.v4.Context#setSelected` or by changing the value of the `@$ui5.context.isSelected` client-side annotation.

    For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding%23events/selectionChanged).

-   We have provided the experimental `createInPlace` parameter for the `$$aggregation / sap.ui.model.odata.v4.ODataListBinding#setAggregation` binding parameter. When set, newly created nodes are shown in the back-end position and not in first position among their siblings.

    For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding%23methods/setAggregation).

-   As an experimental feature, we now allow `OneWay` property bindings for structural properties that have a complex type. Certain restrictions apply.

    For more information, see [Property Binding With an Object Value](../04_Essentials/initialization-and-read-requests-fccfb2e.md#loiofccfb2eb41414f0792c165e69a878717__section_PBOV).


<sub>Changed•Feature•Info Only•1.126</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-07-11

</td>
</tr>
<tr>
<td valign="top">

1.126 

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

The smart table settings dialog now supports the `sap.m.DynamicDateRange` control for filtering. With the new `useDateRangeType` property, you can set the filter restriction interval to all date fields in the filter panel of the settings dialog. Once this setting is applied, they will be displayed as dynamic date range filters. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smarttable.SmartTable) and the [Sample](https://ui5.sap.com/#/entity/sap.ui.comp.smarttable.SmartTable/sample/sap.ui.comp.sample.smarttable.mtableFilterControlConfiguration).

<sub>Changed•Control•Info Only•1.126</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-07-11

</td>
</tr>
<tr>
<td valign="top">

1.126 

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

<sub>Deprecated•Feature•Info Only•1.126</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-07-11

</td>
</tr>
<tr>
<td valign="top">

1.126 

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

We have now added keyboard support for reordering columns in this control. The reordering is done using drag and drop, which is why the keyboard support is offered via the aggregations of the drag and drop implementation. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.core.dnd.DragDropBase%23methods/setKeyboardHandling). 

<sub>Changed•Control•Info Only•1.126</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-07-11

</td>
</tr>
<tr>
<td valign="top">

1.126 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.table.columnmenu.Menu`** 

</td>
<td valign="top">

**`sap.m.table.columnmenu.Menu`**

We have adapted the entities of the `sap.m.table.columnmenu` class: The `IColumnHeaderMenu` interface is now no longer experimental and offers some new methods and events. We have also improved the documentation and provided a new sample with a custom column menu. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.table.columnmenu.MenuBase) and the [Sample](https://ui5.sap.com/#/entity/sap.m.Table/sample/sap.m.sample.TableIColumnHeaderMenu).

<sub>Changed•Control•Info Only•1.126</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-07-11

</td>
</tr>
<tr>
<td valign="top">

1.126 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.comp.smartmultiinput.SmartMultiInput`** 

</td>
<td valign="top">

**`sap.ui.comp.smartmultiinput.SmartMultiInput`**

We’ve now made `initialToken` a public aggregation of the `SmartMultiInput` control. A user can add any token of `sap.m.token` type by using the required information, such as a key and text. To use this feature, `SmartMultiInput` must be rendered in a no data binding scenario. It is only applicable when `SmartMultiInput` is rendered as a `MultiInput` with `ValueHelp`. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smartmultiinput.SmartMultiInput).

<sub>Changed•Control•Info Only•1.126</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-07-11

</td>
</tr>
</table>

**Related Information**  


[What's New in SAPUI5 1.129](what-s-new-in-sapui5-1-129-d22b8af.md "With this release SAPUI5 is upgraded from version 1.128 to 1.129.")

[What's New in SAPUI5 1.128](what-s-new-in-sapui5-1-128-1f76220.md "With this release SAPUI5 is upgraded from version 1.127 to 1.128.")

[What's New in SAPUI5 1.127](what-s-new-in-sapui5-1-127-e5e1317.md "With this release SAPUI5 is upgraded from version 1.126 to 1.127.")

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

