<!-- loio7f77c3f5ccf4497b9746488318e087cc -->

# What's New in SAPUI5 1.124

With this release SAPUI5 is upgraded from version 1.123 to 1.124.

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

1.124 

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

<sub>Deprecated•Feature•Info Only•1.124</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-05-16

</td>
</tr>
<tr>
<td valign="top">

1.124 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature

</td>
<td valign="top">

**`sap.m.plugins.CellSelector`** 

</td>
<td valign="top">

**`sap.m.plugins.CellSelector`**

-   The `sap.m.plugins.CellSelector` plugin is no longer experimental. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.plugins.CellSelector).

-   We have made the `getSelection` function public. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.plugins.CellSelector%23methods/getSelection).


<sub>Changed•Feature•Info Only•1.124</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-05-16

</td>
</tr>
<tr>
<td valign="top">

1.124 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**Decoupling of `sap_bluecrystal` Theme** 

</td>
<td valign="top">

**Decoupling of `sap_bluecrystal` Theme**

The `sap_bluecrystal` theme has now been decoupled from the base theme so that changes of the base theme CSS do not affect the theme any longer.

<sub>Changed•Feature•Info Only•1.124</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-05-16

</td>
</tr>
<tr>
<td valign="top">

1.124 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.Table`** 

</td>
<td valign="top">

**`sap.m.Table`**

You can now use `sap.m.plugins.CellSelector` for cell selection in a responsive table. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.plugins.CellSelector) and the [Sample](https://ui5.sap.com/#/entity/sap.m.Table/sample/sap.m.sample.TableSelectCopy).

<sub>Changed•Control•Info Only•1.124</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-05-16

</td>
</tr>
<tr>
<td valign="top">

1.124 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.table.AnalyticalTable`, `sap.ui.table.Table`, `sap.ui.table.TreeTable` ** 

</td>
<td valign="top">

**`sap.ui.table.AnalyticalTable`, `sap.ui.table.Table`, `sap.ui.table.TreeTable` **

We have extended the `MultiSelectionPlugin`: If the number of selected rows is smaller than the set limit of rows, all these rows can be selected at once with a single operation. If there are more rows than the set limit, the first x rows are selected until the limit x has been reached. Now a *Complete* icon is shown to indicate that all rows have been selected. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.table.plugins.MultiSelectionPlugin%23methods/setLimit) and the [Sample](https://ui5.sap.com/#/entity/sap.ui.table.Table/sample/sap.ui.table.sample.MultiSelectionPlugin).

<sub>Changed•Control•Info Only•1.124</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-05-16

</td>
</tr>
<tr>
<td valign="top">

1.124 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**`sap.ui.mdc` library** 

</td>
<td valign="top">

**`sap.ui.mdc` library**

The library is now no longer experimental. To demonstrate the features of the controls in this library, we have also added more samples in the Demo Kit.

> ### Note:  
> The `Chart` control is still experimental.

For more information, see [sap.ui.mdc](../10_More_About_Controls/sap-ui-mdc-1dd2aa9.md), the [API Reference](https://ui5.sap.com/#/api/sap.ui.mdc), and the [Samples](https://ui5.sap.com/#/entity/sap.ui.mdc). 

<sub>Changed•Feature•Info Only•1.124</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-05-16

</td>
</tr>
<tr>
<td valign="top">

1.124 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

SAP Fiori Elements 

</td>
<td valign="top">

**SAP Fiori Elements for OData V2 and SAP Fiori Elements for OData V4** 

</td>
<td valign="top">

**SAP Fiori Elements for OData V2 and SAP Fiori Elements for OData V4**

The following changes and new features are available for SAP Fiori elements for OData V2 and SAP Fiori elements for OData V4:

-   Responsive tables now support cell-level paste. For more information, see [Copying and Pasting from External Applications to Tables](../06_SAP_Fiori_Elements/copying-and-pasting-from-external-applications-to-tables-f6a8fd2.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.124</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-05-16

</td>
</tr>
<tr>
<td valign="top">

1.124 

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

-   The list report, object page, and analytical list page applications now support a context menu. For more information, see [Tables](../06_SAP_Fiori_Elements/tables-c0f6592.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.124</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-05-16

</td>
</tr>
<tr>
<td valign="top">

1.124 

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

-   The section title is now merged with the control title in custom sections if the custom section has only one control. For more information, see [Adding a Section to an Object Page](../06_SAP_Fiori_Elements/adding-a-section-to-an-object-page-a357047.md).

-   We now support the mass edit feature for fields using a value help with a dropdown list or a rating indicator. For more information, see [Enabling Editing Using a Dialog \(Mass Edit\)](../06_SAP_Fiori_Elements/enabling-editing-using-a-dialog-mass-edit-965ef5b.md).

-   We now support the `value` property on the field building block for JSON model binding. For more information, see [The Field Building Block](../06_SAP_Fiori_Elements/the-field-building-block-5260b9c.md).

-   You can allow end users to choose to hide the label of the `TextArea` control if it is the only control within a section or a subsection. For more information, see [Grouping of Fields](../06_SAP_Fiori_Elements/grouping-of-fields-7d7a0c4.md).

-   We now support dynamic expressions in semantic object annotations. For more information, see [Enabling Quick Views for Link Navigation](../06_SAP_Fiori_Elements/enabling-quick-views-for-link-navigation-307ced1.md).

-   You can now refresh the count and the view content in a list report while using it in multi-view mode. For more information, see [Multiple Views on List Report Tables](../06_SAP_Fiori_Elements/multiple-views-on-list-report-tables-a37df40.md).

-   You can now perform edit operations such as cut and paste, drag and drop, and create on tree tables within a list report or an object page. For more information, see [Tree Tables](../06_SAP_Fiori_Elements/tree-tables-7cf7a31.md).

-   You can now perform certain configurations to define how columns are exported to a spreadsheet. For more information, see [Using the Export Feature](../06_SAP_Fiori_Elements/using-the-export-feature-4bab6f2.md).

-   We now support a new building block for the tree table. For more information, see [Tree Tables](../06_SAP_Fiori_Elements/tree-tables-7cf7a31.md).

-   You can now define a `Common.ExternalID` annotation that displays a readable identifier of an item on the UI instead of the `Edm.Guid` value. The `Common.ExternalID` annotation is supported for both the fields and filter fields. For more information, see [Further Features of the Field](../06_SAP_Fiori_Elements/further-features-of-the-field-f49a0f7.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.124</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-05-16

</td>
</tr>
<tr>
<td valign="top">

1.124 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.comp.filterbar.FilterBar/sap.ui.comp.smartfilterbar.SmartFilterBar`** 

</td>
<td valign="top">

**`sap.ui.comp.filterbar.FilterBar/sap.ui.comp.smartfilterbar.SmartFilterBar`**

We've improved accessibility by altering the focus handling in the filter bar and the smart filter bar. This specifically applies to the change in focus position once the filters dialog is closed. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.ui.comp.smartfilterbar.SmartFilterBar/sample/sap.ui.comp.sample.smartfilterbar.Basic).

<sub>Changed•Control•Info Only•1.124</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-05-16

</td>
</tr>
<tr>
<td valign="top">

1.124 

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

To improve performance, we've introduced the `suppressEmptyStringRequest` property that determines if a query is sent to the back еnd if there is an empty string. Now the query is suppressed by default. To override this setting, set the property to `false`.

<sub>Changed•Control•Info Only•1.124</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-05-16

</td>
</tr>
<tr>
<td valign="top">

1.124 

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

We've enhanced the rendering performance by optimizing the internal structure of the smart filter bar layout. Have in mind that with these modifications, the internal structure of the control has changed, so do not use private methods.

<sub>Changed•Control•Info Only•1.124</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-05-16

</td>
</tr>
<tr>
<td valign="top">

1.124 

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

We have \(experimentally\) introduced a new `data-help-id` attribute that you can use to connect the card with an end-user help system. Its default value is equal to the `sap.app/id` from the card's manifest. For more information, see the [Help ID](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/configuration/helpId) section in the Card Explorer.

<sub>Changed•Control•Info Only•1.124</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-05-16

</td>
</tr>
<tr>
<td valign="top">

1.124 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.ActionTile`** 

</td>
<td valign="top">

**`sap.m.ActionTile`**

We've now introduced the `enableDynamicHeight` \(experimental\) property to `sap.m.ActionTile`. If this property is enabled, the height of a tile increases based on the content maintained within the tile.

For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.ActionTile).

<sub>Changed•Control•Info Only•1.124</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-05-16

</td>
</tr>
<tr>
<td valign="top">

1.124 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.GenericTile`** 

</td>
<td valign="top">

**`sap.m.GenericTile`**

We have the following updates for `sap.m.GenericTile`:

-   We've added `badge` \(experimental\) as a new aggregation that renders a badge on top of the `GenericTile`. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.GenericTile).

-   We've introduced `TileInfo` as a new element that includes all the essential properties required for the `badge` \(experimental\) aggregation. Using this property, developers can create their own type of `badge`.

    For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.TileInfo).


<sub>Changed•Control•Info Only•1.124</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-05-16

</td>
</tr>
<tr>
<td valign="top">

1.124 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.HeaderContainer`** 

</td>
<td valign="top">

**`sap.m.HeaderContainer`**

We've now enabled the `snapToRow` property that, if set to `true`, adjusts the height of all the items to match with the largest item in the row within the `HeaderContainer`. The default value of the property is set to `false`.

For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.HeaderContainer).

<sub>Changed•Control•Info Only•1.124</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-05-16

</td>
</tr>
<tr>
<td valign="top">

1.124 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.plugins.UploadSetwithTable` \(experimental\)** 

</td>
<td valign="top">

**`sap.m.plugins.UploadSetwithTable` \(experimental\)**

The `UploadSetwithTable` plugin \(experimental\) can seamlessly integrate with various types of tables including MDC, Responsive, and Grid tables. It allows you to upload or download one or more files from your device \(desktop, tablet, or phone\).

You can preview your files using the `sap.m.upload.FilePreviewDialog` control. The `FilePreviewDialog` control only works with the experimental `UploadSetwithTable` plugin.

For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.plugins.UploadSetwithTable) and the [Sample](https://ui5.sap.com/#/entity/sap.m.plugins.UploadSetwithTable).

<sub>Changed•Control•Info Only•1.124</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-05-16

</td>
</tr>
<tr>
<td valign="top">

1.124 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**TypeScript** 

</td>
<td valign="top">

**TypeScript**

You can now use the*dts-generator* tool to generate TypeScript type definitions for any custom SAPUI5 library written in JavaScript. This is the same tool that is used for generating the productive type definitions for SAPUI5 and all its libraries.

For more information, see the [GitHub repo](https://github.com/SAP/ui5-typescript/tree/main/packages/dts-generator) and the [npm package](https://www.npmjs.com/package/@ui5/dts-generator).

<sub>Changed•Feature•Info Only•1.124</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-05-16

</td>
</tr>
<tr>
<td valign="top">

1.124 

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

-   You can now use the experimental feature of moving nodes of a recursive hierarchy using`sap.ui.model.odata.v4.Context#move` with any initial expansion state of the hierarchy. An expansion state can be provided via the `expandTo` property of either the `$$aggregation` binding parameter or the `sap.ui.model.odata.v4.ODataListBinding#setAggregation` API.

    For more information, see the API Reference for [`v4.Context#move`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context%23methods/move), [`v4.ODataModel#bindList`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel%23methods/bindList), and [`v4.ODataListBinding#setAggregation`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding%23methods/setAggregation).

-   If you move a node with the experimental `sap.ui.model.odata.v4.Context#move` API and the moved node has siblings, it is now shown by default at a position assigned by the back end. Alternatively, you now have the option of moving the node to a position before a specified sibling or to the last position among its siblings.

    For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context%23methods/move).

-   The tree state is now kept when sorting or filtering a recursive hierarchy.

-   We have introduced the new `$$clearSelectionOnFilter` list binding parameter. When a filter or search is changed, it allows you to automatically deselect records that were selected via the experimental `sap.ui.model.odata.v4.Context#setSelected` API.

    For more information, see the API Reference for [`v4.ODataModel#bindList`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel%23methods/bindList) and [`v4.Context#setSelected`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context%23methods/setSelected).


<sub>Changed•Feature•Info Only•1.124</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-05-16

</td>
</tr>
<tr>
<td valign="top">

1.124 

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

You can now use the `preventDefault` method to stop the export process for entities that have a `beforeExport` event without retrieving any data or generating an export file. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.export.ExportHandler%23events/beforeExport).

<sub>Changed•Feature•Info Only•1.124</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-05-16

</td>
</tr>
<tr>
<td valign="top">

1.124 

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

We have introduced the `enableCopy` property in the `SmartTable` control. This property is set to `true` by default and enables the copy-to-clipboard functionality. If it is set, a `sap.m.plugins.CopyProvider` and a `sap.m.plugins.CellSelector` are automatically created and added to the control, unless they already exist.

> ### Note:  
> Apps can set the property to `false` if this behavior is not desired. Refer to the API Reference for further details.

For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smarttable.SmartTable%23methods/getEnableCopy) and the [Sample](https://ui5.sap.com/#/entity/sap.ui.comp.smarttable.SmartTable/sample/sap.ui.comp.sample.smarttable). 

<sub>Changed•Control•Info Only•1.124</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-05-16

</td>
</tr>
<tr>
<td valign="top">

1.124 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**Accessibility** 

</td>
<td valign="top">

**Accessibility**

We are now using JAWS 2024 as a reference testing environment in SAPUI5. For more information, see the *Assistive technologies reference testing environment for SAPUI5* SAP Note [2564165](https://me.sap.com/notes/2564165).

<sub>Changed•Feature•Info Only•1.124</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-05-16

</td>
</tr>
</table>

**Related Information**  


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

