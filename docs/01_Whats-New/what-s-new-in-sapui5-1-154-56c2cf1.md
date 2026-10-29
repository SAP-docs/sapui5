<!-- loio56c2cf1bbbfa45cfa22fccb09639d3e5 -->

<link rel="stylesheet" type="text/css" href="../css/sap-icons.css"/>

# What's New in SAPUI5 1.154

With this release SAPUI5 is upgraded from version 1.153 to 1.154.

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

**End of Cloud Provisioning for SAPUI5 Versions \(Q4/2026\)** 

</td>
<td valign="top">

**End of Cloud Provisioning for SAPUI5 Versions \(Q4/2026\)**

The following SAPUI5 versions will be removed from the SAPUI5 Content Delivery Network \(CDN\) after the end of Q4/2026.

**Minor Versions Reaching Their End of Cloud Provisioning**

The following versions including all patches will be removed entirely:

-   1.84
-   1.140
-   1.141

**Action**: Upgrade to a version that is still in maintenance.

**Patch Versions Reaching Their End of Cloud Provisioning**

The following patches will be removed:

-   1.38.65
-   1.71.77 to 1.71.78
-   1.96.43 to 1.96.44
-   1.108.46 to 1.108.48
-   1.120.38 to 1.120.39
-   1.136.8 to 1.136.12
-   1.139.0 to 1.139.3
-   1.142.0 to 1.142.1
-   1.143.0 to 1.143.1

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

1.154 

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

A new `footer` aggregation \(`sap.ui.core.Control`\) has been added to `sap.ui.mdc.Table`. Table types that support a footer \(for example, `GridTableType`\) display it below the table. This allows applications to display messages to guide users in analytical edit scenarios. With `ResponsiveTableType`, the footer has no effect but it is retained and applied automatically when the table type is switched. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.mdc.Table%23methods/getFooter) and the [Sample](https://ui5.sap.com/#/entity/sap.ui.mdc.Table/sample/sap.ui.mdc.demokit.sample.table.TableTypes).

<sub>Changed•Control•Info Only•1.154</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-10-29

</td>
</tr>
<tr>
<td valign="top">

1.154 

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

<sub>Deprecated•Feature•Info Only•1.154</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-10-29

</td>
</tr>
<tr>
<td valign="top">

1.154 

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

The new version of the SAPUI5 OData V4 model introduces experimental support for the following features when using data aggregation with group levels:

-   Creating, updating, and deleting single, unaggregated records as well as calling bound actions for these records. For more information, see *Editing* in [Data Aggregation and Recursive Hierarchy](../04_Essentials/data-aggregation-and-recursive-hierarchy-7d91431.md).
-   Automatically expanding the visually grouped hierarchy by a given number of group levels using the `MultiLevelExpand` function. For more information, see [`MultiLevelExpand`](https://github.com/SAP/odata-vocabularies/blob/main/vocabularies/Analytics.md#MultiLevelExpand) and the `expandTo` parameter in the [API Reference](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding%23methods/setAggregation).
-   The `isOutdated` method introduced in SAPUI5 1.147 for header contexts and grand total row contexts is now also available for contexts of group headers. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context%23methods/isOutdated).

<sub>Changed•Feature•Info Only•1.154</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-10-29

</td>
</tr>
<tr>
<td valign="top">

1.154 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**Using Native HTML in XML Views** 

</td>
<td valign="top">

**Using Native HTML in XML Views**

You can now use native HTML tags directly in XML views via the new `sap.html` library, freely mixing them with SAPUI5 controls while staying in the SAPUI5 programming model. The library replaces the XHTML namespace approach, which has been deprecated since SAPUI5 1.120.

For more information, see [Using Native HTML in XML Views](../04_Essentials/using-native-html-in-xml-views-be54950.md).

<sub>Changed•Feature•Info Only•1.154</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-10-29

</td>
</tr>
<tr>
<td valign="top">

1.154 

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

-   You can now hide the *Summarize* button in all object pages in an app by setting `visibility` to `HideOnAllPages` in the `manifest.json` file. For more information, see [Generative AI Features](../06_SAP_Fiori_Elements/generative-ai-features-3ac93d8.md) \(for SAP Fiori Elements for OData V2\) and [Generative AI Features](../06_SAP_Fiori_Elements/generative-ai-features-0ec03d4.md) \(for SAP Fiori Elements for OData V4\)
-   We've changed the keyboard shortcut for *Create* to [Alt\] + [Ctrl\] + [N\]  on Windows and [Ctrl\] + [Option\] + [N\]  on macOS. For more information, see [Keyboard Shortcuts](../06_SAP_Fiori_Elements/keyboard-shortcuts-875e8af.md) \(for SAP Fiori Elements for OData V2\) and [Keyboard Shortcuts](../06_SAP_Fiori_Elements/keyboard-shortcuts-0cd318c.md) \(for SAP Fiori Elements for OData V4\).


<sub>Changed•SAP Fiori Elements•Info Only•1.154</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-10-29

</td>
</tr>
<tr>
<td valign="top">

1.154 

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

-   The keyboard shortcut [Ctrl\] + [Enter\]  on Windows or [CMD\] + [Enter\]  on macOS now triggers *Go* or primary action on analytical list pages and list report pages. On object pages and subobject pages, this shortcut triggers relevant actions depending on whether the application is draft-enabled and the page mode. For more information, see [Keyboard Shortcuts](../06_SAP_Fiori_Elements/keyboard-shortcuts-875e8af.md).

-   Users can now use the keyboard shortcut [Alt\] + [Enter\]  on Windows or [Option\] + [Enter\]  on macOS to navigate from a focused row or cell in a table to the corresponding page or application. This keyboard shortcut is supported on analytical list page, list report page, and object page. For more information, see [Keyboard Shortcuts](../06_SAP_Fiori_Elements/keyboard-shortcuts-875e8af.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.154</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-10-29

</td>
</tr>
<tr>
<td valign="top">

1.154 

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

-   You can now configure filter fields in custom variants of the overview page to dynamically retrieve user default values maintained in SAP Fiori launchpad. For more information, see [Configuring Default Filter Values on the Overview Page](../06_SAP_Fiori_Elements/configuring-default-filter-values-on-the-overview-page-b1ba10c.md).

-   You can now define grouping for dropdown-based fields using `UI.PresentationVariant`. For more information, see [Value Help as a Dropdown List](../06_SAP_Fiori_Elements/value-help-as-a-dropdown-list-2a0a630.md).

-   You can now use the `AddViaValueHelp` creation mode to enable users to add rows to a table through a value help dialog. For more information, see [Enabling Creation Using the Add Button and Value Help](../06_SAP_Fiori_Elements/enabling-creation-using-the-add-button-and-value-help-90e4e13.md).

-   You can now use editable analytical tables with an ABAP back end. For more information, see [Configuring Analytical Tables](../06_SAP_Fiori_Elements/configuring-analytical-tables-41957ec.md).

-   Error messages are now displayed only after a user moves focus away from an inline creation row that requires more than one field. For more information, see [Enabling Inline Creation Mode or Empty Row Mode for Table Entries](../06_SAP_Fiori_Elements/enabling-inline-creation-mode-or-empty-row-mode-for-table-entries-cfb04f0.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.154</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-10-29

</td>
</tr>
<tr>
<td valign="top">

1.154 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.IconTabFilter`** 

</td>
<td valign="top">

**`sap.m.IconTabFilter`**

The `interactionMode` property of `sap.m.IconTabFilter` and the associated `sap.m.IconTabFilterInteractionMode` enum are no longer experimental and are now available for productive use. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.IconTabFilter) and the [Samples](https://ui5.sap.com/#/entity/sap.m.IconTabFilter).

<sub>Changed•Control•Info Only•1.154</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-10-29

</td>
</tr>
<tr>
<td valign="top">

1.154 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.Popover`** 

</td>
<td valign="top">

**`sap.m.Popover`**

`sap.m.Popover` now supports keyboard-based resizing. When the resizable property is set to true and the popover has focus, you can resize it using the [Shift\] + [Arrow\]  keys. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.Popover) and the [Sample](https://ui5.sap.com/#/entity/sap.m.Popover/sample/sap.m.sample.Popover).

<sub>Changed•Control•Info Only•1.154</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-10-29

</td>
</tr>
<tr>
<td valign="top">

1.154 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.mdc.Link`** 

</td>
<td valign="top">

**`sap.ui.mdc.Link`**

`sap.ui.mdc.Link` now supports a standalone navigation popover pattern: the link can be opened programmatically from any control using `Link.open()`, without being placed inside an `mdc:Field`. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.mdc.Link) and the [Sample](https://ui5.sap.com/#/entity/sap.ui.mdc.Link/sample/sap.ui.mdc.demokit.sample.LinkCustomControl).

<sub>Changed•Control•Info Only•1.154</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-10-29

</td>
</tr>
<tr>
<td valign="top">

1.154 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.ObjectNumber`** 

</td>
<td valign="top">

**`sap.m.ObjectNumber`**

`sap.m.ObjectNumber` now supports a `displayMode` property that enables column-aligned display of numbers, making values easier to compare. Use `Currency` mode for currency values, `Unit` mode for other numeric values, or keep the existing behavior with `Default` mode. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.ObjectNumber) and the [Samples](https://ui5.sap.com/#/entity/sap.m.ObjectNumber).

<sub>Changed•Control•Info Only•1.154</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-10-29

</td>
</tr>
<tr>
<td valign="top">

1.154 

</td>
<td valign="top">

New 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.NumericInput`** 

</td>
<td valign="top">

**`sap.m.NumericInput`**

The new `sap.m.NumericInput` control provides a reliable, dedicated input for numeric values, including support for minimum and maximum values, step size, and decimal precision.

This control is experimental and its API may change in future versions. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.NumericInput) and the [Samples](https://ui5.sap.com/#/entity/sap.m.NumericInput).

<sub>New•Control•Info Only•1.154</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-10-29

</td>
</tr>
<tr>
<td valign="top">

1.154 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.Panel`** 

</td>
<td valign="top">

**`sap.m.Panel`**

The `sap.m.Panel` now supports a new `None` value for the `accessibleRole` property. This allows developers to remove the landmark role from purely presentational panels to avoid unnecessary noise for screen reader users. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.Panel).

<sub>Changed•Control•Info Only•1.154</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-10-29

</td>
</tr>
</table>

