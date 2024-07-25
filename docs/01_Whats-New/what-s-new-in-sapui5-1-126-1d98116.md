<!-- loio1d981160daf94bbfb0324311f1b35716 -->

<link rel="stylesheet" type="text/css" href="../css/sap-icons.css"/>

# What's New in SAPUI5 1.126

With this release SAPUI5 is upgraded from version 1.125 to 1.126.

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

**End of Cloud Provisioning for SAPUI5 Versions \(Q3/2024\)** 

</td>
<td valign="top">

**End of Cloud Provisioning for SAPUI5 Versions \(Q3/2024\)**

> ### Note:  
> The following information concerns important upcoming changes for end users. These changes may require end users to adjust and/or test cases to be adapted, but they won't stop or disrupt software or processes.

The following SAPUI5 versions will be removed from the SAPUI5 Content Delivery Network \(CDN\) after the end of Q3/2024.

**Minor Versions Reaching Their End of Cloud Provisioning**

The following versions including all patches will be removed entirely:

-   1.114
-   1.115
-   1.116
-   1.117
-   1.118

**Action**: Upgrade to a version that is still in maintenance.

**Patch Versions Reaching Their End of Cloud Provisioning**

The following patches will be removed:

-   Long-term maintenance versions:

    -   1.71.58
    -   1.84.35 to 1.84.36
    -   1.96.23 to 1.96.24
    -   1.108.19 to 1.108.22

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

