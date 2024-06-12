<!-- loio7f77c3f5ccf4497b9746488318e087cc -->

<link rel="stylesheet" type="text/css" href="../css/sap-icons.css"/>

# What's New in SAPUI5 1.124

With this release SAPUI5 is upgraded from version 1.123 to 1.124.

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

**End of Cloud Provisioning for SAPUI5 Versions \(Q2/2024\)** 

</td>
<td valign="top">

**End of Cloud Provisioning for SAPUI5 Versions \(Q2/2024\)**

> ### Note:  
> The following information concerns important upcoming changes for end users. These changes may require end users to adjust and/or test cases to be adapted, but they won't stop or disrupt software or processes.

The following SAPUI5 versions will be removed from the SAPUI5 Content Delivery Network \(CDN\) after the end of Q2/2024.

**Minor Versions Reaching Their End of Cloud Provisioning**

The following versions including all patches will be removed entirely:

-   1.111
-   1.112
-   1.113
-   1.115

**Action**: Upgrade to a version that is still in maintenance.

**Patch Versions Reaching Their End of Cloud Provisioning**

The following patches will be removed:

-   Long-term maintenance versions:

    -   1.38.60 to 1.38.61
    -   1.71.55 to 1.71.56
    -   1.84.32 to 1.84.34
    -   1.96.20 to 1.96.22
    -   1.108.11 to 1.108.18

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

