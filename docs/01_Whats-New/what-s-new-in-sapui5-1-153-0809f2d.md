<!-- loio0809f2d07bee4782bfb322b452ab3ae3 -->

<link rel="stylesheet" type="text/css" href="../css/sap-icons.css"/>

# What's New in SAPUI5 1.153

With this release SAPUI5 is upgraded from version 1.152 to 1.153.

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

**End of Cloud Provisioning for SAPUI5 Versions \(Q3/2026\)** 

</td>
<td valign="top">

**End of Cloud Provisioning for SAPUI5 Versions \(Q3/2026\)**

The following SAPUI5 versions will be removed from the SAPUI5 Content Delivery Network \(CDN\) after the end of Q3/2026.

**Minor Versions Reaching Their End of Cloud Provisioning**

The following versions including all patches will be removed entirely:

-   1.130
-   1.133
-   1.138

**Action**: Upgrade to a version that is still in maintenance.

**Patch Versions Reaching Their End of Cloud Provisioning**

The following patches will be removed:

-   1.71.75 to 1.71.76
-   1.84.54
-   1.96.41 to 1.96.42
-   1.108.44 to 1.108.45
-   1.120.32 to 1.120.37
-   1.130.11
-   1.133.5
-   1.136.3 to 1.136.7
-   1.138.0 to 1.138.1

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

1.153 

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

<sub>Deprecated•Feature•Info Only•1.153</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-10-01

</td>
</tr>
<tr>
<td valign="top">

1.153 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.mdc.ValueHelp`** 

</td>
<td valign="top">

**`sap.ui.mdc.ValueHelp`**

Stakeholders can now consume the control in stand-alone fashion \(for example, triggered by pressing a button\) through newly public APIs. The enhancement makes APIs for connecting controls, clearing conditions, and retrieving the control available to developers.

<sub>Changed•Control•Info Only•1.153</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-10-01

</td>
</tr>
<tr>
<td valign="top">

1.153 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.mdc.Table`, `sap.ui.mdc.Chart`** 

</td>
<td valign="top">

**`sap.ui.mdc.Table`, `sap.ui.mdc.Chart`**

Toolbar action separators are now enabled by default for these controls, visually grouping related actions according to the SAP Design System guidelines. Separators are automatically inserted between action groups based on the `ActionLayoutData` position property. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.ui.mdc.Table/sample/sap.ui.mdc.demokit.sample.table.TableActions).

<sub>Changed•Control•Info Only•1.153</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-10-01

</td>
</tr>
<tr>
<td valign="top">

1.153 

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

A new `enabled` property in the `aggregationConfiguration` payload allows explicit control of data aggregation behavior, overriding the automatic detection. Setting it to `true` forces aggregation \(for supported table types\), `false` disables it completely \(ignoring variants and `p13n` modes\), and `undefined` preserves the existing auto-detection behavior. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.mdc.odata.v4.TableDelegate.Payload).

<sub>Changed•Control•Info Only•1.153</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-10-01

</td>
</tr>
<tr>
<td valign="top">

1.153 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.table.Table`** 

</td>
<td valign="top">

**`sap.ui.table.Table`**

The vertical scrollbar now includes a position indicator and draggable scroll handle that shows the current viewport range \(visible rows\). The handle appears during scrolling and automatically hides after 3 seconds of inactivity. The feature is controlled via the new `showScrollHandle` property. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.ui.table.Table/sample/sap.ui.table.sample.Basic).

<sub>Changed•Control•Info Only•1.153</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-10-01

</td>
</tr>
<tr>
<td valign="top">

1.153 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.Table`, `sap.ui.table.Table` ** 

</td>
<td valign="top">

**`sap.m.Table`, `sap.ui.table.Table` **

Keyboard shortcuts [Ctrl\] + [A\]  and [Ctrl\] + [Shift\] + [A\]  for selecting and deselecting all rows in `sap.m.Table` now function from any focused element within the table, including cells, headers, and controls like checkboxes or buttons. This enhancement provides consistent, reliable row selection behavior without requiring users to first focus a specific row.

<sub>Changed•Control•Info Only•1.153</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-10-01

</td>
</tr>
<tr>
<td valign="top">

1.153 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Announcement 

</td>
<td valign="top">

**API AppState Is an Internal Service** 

</td>
<td valign="top">

**API AppState Is an Internal Service**

Note that AppState is an internal service that can't be accessed directly by SAP Fiori apps. Apps using any of the following are affected:

-   `Container.getServiceAsync("AppState")`
-   `CrossApplicationNavigation.createEmptyAppState`
-   `CrossApplicationNavigation.getAppState`
-   `CrossApplicationNavigation.getStartupAppState` 
-   `Navigation.createEmptyAppState`
-   `Navigation.getAppState`
-   `Navigation.getStartupAppState` 

If you currently use it, migrate to the designated public APIs:

-   `sap.fe.navigation.NavigationHandler#storeInnerAppStateAsync`.This is the only supported way to store inner app state. It provides a stable contract and is safe to use in production applications \(see [sap.fe.navigation.NavigationHandler – storeInnerAppStateAsync](https://ui5.sap.com/#/api/sap.fe.navigation.NavigationHandler%23methods/storeInnerAppStateAsync)\)

-   `sap.fe.navigation.NavigationHandler#parseNavigation`. This is the only supported way to safely parse the navigation \(see [sap.fe.navigation.NavigationHandler – parseNavigation](https://ui5.sap.com/#/api/sap.fe.navigation.NavigationHandler%23methods/parseNavigation)\)

Read the Knowledge Base Article [0003794190](https://me.sap.com/notes/0003794190) for detailed information and examples.

<sub>Changed•Announcement•Info Only•1.153</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-10-01

</td>
</tr>
<tr>
<td valign="top">

1.153 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

SAP Fiori Elements 

</td>
<td valign="top">

SAP Fiori Elements for OData V4 

</td>
<td valign="top">

**SAP Fiori Elements for OData V4**

The following changes and new features are available for SAP Fiori elements for OData V4:

-   You can now render images and full HTML in the display mode of fields by using the `RichTextEditor` building block together with the `displayType` property. For more information, see [The RichTextEditor Building Block](../06_SAP_Fiori_Elements/the-richtexteditor-building-block-7bd2767.md).

-   You can now add custom toolbar content to tables and object page headers. For more information, see [Adding Custom Content to the Header Toolbar of the Object Page](../06_SAP_Fiori_Elements/adding-custom-content-to-the-header-toolbar-of-the-object-page-3bde79d.md) and [Adding Custom Content to the Table Toolbar](../06_SAP_Fiori_Elements/adding-custom-content-to-the-table-toolbar-c452fa6.md).

-   You can now configure a field as dynamically mandatory using the `FieldControl` annotation. You can either define a path to a property or use extended OData annotations to control the mandatory behavior based on specific conditions. For table columns, the mandatory setting applies to the entire column and must point to a property on the parent entity or a singleton entity. For more information, see [Additional Features of the Field](../06_SAP_Fiori_Elements/additional-features-of-the-field-f49a0f7.md).

-   You can now use `editFlow` APIs and `editFlow` hooks to invoke or override standard, annotation-based, and custom actions. For more information, see [Extending Standard, Annotation-Based, and Custom Actions](../06_SAP_Fiori_Elements/extending-standard-annotation-based-and-custom-actions-17ab7f9.md).

-   You can now dynamically show or hide filter fields using either the `UI.HiddenFilter` annotation with a dynamic expression or the API of the `FilterBar` building block. For more information, see [Configuring Dynamic Visibility for Filter Fields](../06_SAP_Fiori_Elements/configuring-dynamic-visibility-for-filter-fields-fad707f.md).

-   You can now dynamically show or hide table columns in analytical list page, list report page, and object page tables. You can use the `UI.Hidden` annotation with a dynamic expression or the `Table` API to control column visibility based on defined conditions. For more information, see [Hiding or Showing Table Columns](../06_SAP_Fiori_Elements/hiding-or-showing-table-columns-fe45346.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.153</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-10-01

</td>
</tr>
<tr>
<td valign="top">

1.153 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.Input`** 

</td>
<td valign="top">

**`sap.m.Input`**

The `sap.m.Input` control has a new `descriptionAlign` property that controls the alignment of the description text within the input wrapper. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.Input).

<sub>Changed•Control•Info Only•1.153</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-10-01

</td>
</tr>
<tr>
<td valign="top">

1.153 

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

`sap.m.Select` now supports grouped list items. Use `sap.ui.core.SeparatorItem` with a text property to define group headers, or the new `addItemGroup` method for programmatic grouping. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.Select) and the [Samples](https://ui5.sap.com/#/entity/sap.m.Select).

<sub>Changed•Control•Info Only•1.153</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-10-01

</td>
</tr>
<tr>
<td valign="top">

1.153 

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

The spreadsheet export now supports multi-value fields \(1:N navigation properties\). Values from collections are exported as comma-separated texts in a single cell, respecting text arrangement templates. The separator is configurable via `exportSettings` in `PropertyInfo`. Multi-value export works seamlessly with multi-property columns and configurations of `sap.ui.comp.smarttable.SmartTable` and `sap.ui.mdc.Table`. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.export.Column) and the [Sample](https://ui5.sap.com/#/entity/sap.ui.comp.smartmultiinput.SmartMultiInput/sample/sap.ui.comp.sample.smartmultiinput.inSmartTable).

<sub>Changed•Feature•Info Only•1.153</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-10-01

</td>
</tr>
<tr>
<td valign="top">

1.153 

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

You can now filter properties of `EnumType` using `sap.ui.model.Filter`. For more information, see [EnumTypes](../04_Essentials/filtering-5338bd1.md#loio5338bd1f9afb45fb8b2af957c3530e8f__section_enumType).

<sub>Changed•Feature•Info Only•1.153</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-10-01

</td>
</tr>
</table>

