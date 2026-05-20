<!-- loio6b940b30f1294aaabfab8f918281fc94 -->

<link rel="stylesheet" type="text/css" href="../css/sap-icons.css"/>

# What's New in SAPUI5 1.148

With this release SAPUI5 is upgraded from version 1.147 to 1.148.

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

**End of Cloud Provisioning for SAPUI5 Versions \(Q1/2026\)** 

</td>
<td valign="top">

**End of Cloud Provisioning for SAPUI5 Versions \(Q1/2026\)**

The following SAPUI5 versions will be removed from the SAPUI5 Content Delivery Network \(CDN\) after the end of Q1/2026.

**Minor Versions Reaching Their End of Cloud Provisioning**

The following versions including all patches will be removed entirely:

-   1.124
-   1.127
-   1.130
-   1.131
-   1.132
-   1.134

**Action**: Upgrade to a version that is still in maintenance.

**Patch Versions Reaching Their End of Cloud Provisioning**

The following patches will be removed:

-   1.38.63
-   1.71.72 to 1.71.73
-   1.84.51 to 1.84.52
-   1.96.38 to 1.96.39
-   1.108.39 to 1.108.41
-   1.120.24 to 1.120.27
-   1.124.11
-   1.127.7
-   1.130.4 to 1.130.7
-   1.131.1
-   1.132.0 to 1.132.1
-   1.134.0

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

1.148 

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

<sub>Deprecated•Feature•Info Only•1.148</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-05-11

</td>
</tr>
<tr>
<td valign="top">

1.148 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.mdc.Table` ** 

</td>
<td valign="top">

**`sap.ui.mdc.Table`**

-   The `ResponsiveTable` type of `sap.ui.mdc.Table` now supports all row action types: `Navigation`, `Delete`, and `Custom`. This brings it to feature parity with the `GridTable` type. Previously, only `Navigation` was supported.

    You can now define multiple row actions per row, including delete buttons. Two new enum values \(`Custom` and `Delete`\) have been added to `TableRowActionType`. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.mdc.enums.TableRowActionType) .

-   Applications can now configure default export dialog settings via a new `defaultExportSettings` aggregation. Starting with the file name, developers can pre-populate the export dialog with default values shown to users. Additionally, any values the user has already modified in the export dialog are now preserved when `beforeExport` event handlers run, preventing those handlers from unintentionally overriding the user's input. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.export.TableExportSettings) and the [Sample](https://ui5.sap.com/#/entity/sap.ui.mdc.Table/sample/sap.ui.mdc.demokit.sample.table.TableExport).

<sub>Changed•Control•Info Only•1.148</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-05-11

</td>
</tr>
<tr>
<td valign="top">

1.148 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.comp.smartfilterbar.SmartFilterBar` ** 

</td>
<td valign="top">

**`sap.ui.comp.smartfilterbar.SmartFilterBar` **

The `SmartFilterBar` control now supports setting default filter values via the new `setDefaultValues` method, allowing applications to pre-populate filter fields with user-specific default values — for example, from FLP user default parameters — so that filters reflect the user's typical working context from the very beginning. In the Value Help Dialog, these values appear as a dedicated `DefaultValues` group in the *Define Conditions* tab, together with the existing *Include* and *Exclude* groups. This feature is currently available for freestyle apps only. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smartfilterbar.SmartFilterBar%23methods/Summary).

<sub>Changed•Control•Info Only•1.148</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-05-11

</td>
</tr>
<tr>
<td valign="top">

1.148 

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

We've introduced a new `maxHeight` property in `sap.m.Popover`, giving you precise control over the popover's total height — including its header, content, and footer. This prevents the popover from growing too large or exceeding the `viewport` height in constrained layouts. When content exceeds the defined limit, scrolling is enabled automatically. The value accepts any CSS size unit, such as pixels \(300px\) or percentages \(50%\). For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.Popover).

<sub>Changed•Control•Info Only•1.148</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-05-11

</td>
</tr>
<tr>
<td valign="top">

1.148 

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

Integration Cards now automatically disable buttons and links that have no valid action configured, making it immediately clear to users which controls are interactive. Previously, such buttons appeared enabled but had no effect when selected.

<sub>Changed•Control•Info Only•1.148</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-05-11

</td>
</tr>
<tr>
<td valign="top">

1.148 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.MultiInput`** 

</td>
<td valign="top">

**`sap.m.MultiInput`**

The tokens popover in `sap.m.MultiInput` no longer displays an arrow when the control contains an input field. In such cases, the token list opens as a dropdown attached to the input. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.m.MultiInput/sample/sap.m.MultiInput). 

<sub>Changed•Control•Info Only•1.148</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-05-11

</td>
</tr>
<tr>
<td valign="top">

1.148 

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

Integration Cards now support an optional separator line between the content and footer areas using the new `showSeparator` property in the card manifest footer configuration. This improves visual clarity, particularly for cards with dense content or multiple footer actions. The default value of this property is `false` to maintain backward compatibility with existing cards. For more information, see the [Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/footer/listWithSeparator) and the [API Reference](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/footer) in the Card Explorer.

<sub>Changed•Control•Info Only•1.148</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-05-11

</td>
</tr>
<tr>
<td valign="top">

1.148 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.MessageStrip`** 

</td>
<td valign="top">

**`sap.m.MessageStrip`**

`sap.m.MessageStrip` now supports rendering SAP icons inline within formatted text when `enableFormattedText` is set to `true`. This allows you to enrich message content with contextual icons, making messages more expressive and easier to understand at a glance. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.MessageStrip%23controlProperties).

<sub>Changed•Control•Info Only•1.148</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-05-11

</td>
</tr>
<tr>
<td valign="top">

1.148 

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

`sap.m.MenuButton` now implements the `sap.ui.core.IFormContent` interface, allowing it to be used as content in the `sap.ui.layout.form.Form`, `sap.ui.layout.form.SimpleForm`, and `sap.ui.mdc.Field` aggregations — the same way the `Button` and `SegmentedButton` controls already can. This enables use cases such as placing a `MenuButton` in the toolbar of an `sap.ui.mdc.Table` to trigger actions like opening multi-select value help dialogs. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.MenuButton%23methods/Summary).

<sub>Changed•Control•Info Only•1.148</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-05-11

</td>
</tr>
<tr>
<td valign="top">

1.148 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.mdc.Chart`** 

</td>
<td valign="top">

**`sap.ui.mdc.Chart`**

The `sap.ui.mdc.Chart` control now correctly handles multi-value criticality objects defined via the `@UI.ValueCriticality` annotation, rendering the appropriate semantic colors for each criticality level in both the chart and its legend. This allows users to visually distinguish between different criticality states at a glance, even when multiple values share the same level. Both single-value and multi-value criticality structures are supported.

<sub>Changed•Control•Info Only•1.148</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-05-11

</td>
</tr>
<tr>
<td valign="top">

1.148 

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

Applications can now configure default export dialog settings via a new `defaultExportSettings` aggregation. Starting with the file name, developers can pre-populate the export dialog with default values shown to users. Additionally, any values the user has already modified in the export dialog are now preserved when `beforeExport` event handlers run, preventing those handlers from unintentionally overriding the user's input. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.export.TableExportSettings).

<sub>Changed•Control•Info Only•1.148</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-05-11

</td>
</tr>
<tr>
<td valign="top">

1.148 

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

-   You can now enable the save and back feature to allow users to save an object page and navigate back to the list report page. For more information, see [Save and Navigation Options on the Object Page](../06_SAP_Fiori_Elements/save-and-navigation-options-on-the-object-page-9c63472.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.148</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-05-11

</td>
</tr>
<tr>
<td valign="top">

1.148 

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

-   Application developers can now enable text wrapping for table cards and list cards on the overview page by configuring the `enableTextWrapping` property at the card level in the `manifest.json` file. Additionally, both application developers and key users can enable this property at runtime by choosing the *Adapt UI* option in the *User Menu*. For more information, see [Configuring the Manifest for the Overview Page](../06_SAP_Fiori_Elements/configuring-the-manifest-for-the-overview-page-f194b41.md), [Key User Capabilities](../06_SAP_Fiori_Elements/key-user-capabilities-4966938.md), [Table Cards](../06_SAP_Fiori_Elements/table-cards-167bf7c.md), and [List Cards](../06_SAP_Fiori_Elements/list-cards-56f39e0.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.148</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-05-11

</td>
</tr>
<tr>
<td valign="top">

1.148 

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

-   We now dynamically adjust the decimal padding for currencies based on the currency codelist. For more information, see [Displaying Amount with Currency or Unit of Measure in Tables](../06_SAP_Fiori_Elements/displaying-amount-with-currency-or-unit-of-measure-in-tables-f6cf715.md).
-   We now use the multi-input field in the value help dialog. For more information, see [Value Help](../06_SAP_Fiori_Elements/value-help-48e5fa7.md).

-   You can now add custom logic to override the default event processing using the `onEventDrivenSideEffectsReceived` hook in a controller extension. For more information, see [Event-Driven Side Effects](../06_SAP_Fiori_Elements/event-driven-side-effects-27c9c3b.md).

-   You can now merge adjacent cells with identical values in responsive tables. For more information, see [Merging Table Cells](../06_SAP_Fiori_Elements/merging-table-cells-75f7500.md).

-   You can now set up navigation from a table row to a specific section or subsection of an object page. For more information, see [Navigation to an Object Page Section or Subsection](../06_SAP_Fiori_Elements/navigation-to-an-object-page-section-or-subsection-93e74b4.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.148</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-05-11

</td>
</tr>
<tr>
<td valign="top">

1.148 

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

-   You can now provide `groupPaths` for an `sap.ui.model.Sorter` when creating a list binding. The binding adds these paths to the `$select` and `$expand` query options if you use auto-$expand/$select.For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.model.Sorter%23constructor).

-   When you use data aggregation without group levels, the following features are supported experimentally:

    -   You can now create inactive single entity instances at the end of a list by providing the `bAtEnd` parameter with a value of `true` in the first call.For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding%23methods/create).

    -   The grand total now updates automatically unless it is marked as outdated after changes.For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context%23methods/isOutdated).

    -   When you change a property, the header context is marked as outdated only if that property is used in a `Sorter` or `Filter` object, or if a `$search` or custom query option is set. The grand total's context is marked as outdated if the changed property is used in a `Filter` object, or if a `$search` or custom query option is set.



<sub>Changed•Feature•Info Only•1.148</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-05-11

</td>
</tr>
<tr>
<td valign="top">

1.148 

</td>
<td valign="top">

New 

</td>
<td valign="top">

User Documentation 

</td>
<td valign="top">

**Modernization Guide** 

</td>
<td valign="top">

**Modernization Guide**

We've added a new Modernization Guide to help you move your SAPUI5 applications away from legacy code and prepare them for the future. The guide provides a consolidated, library-by-library overview of deprecated items, such as APIs, controls, themes, and patterns, along with their modern replacements and migration guidance. For more information, see [Modernization Guide](../02_Read-Me-First/modernization-guide-db49236.md).

<sub>New•User Documentation•Info Only•1.148</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-05-11

</td>
</tr>
<tr>
<td valign="top">

1.148 

</td>
<td valign="top">

New 

</td>
<td valign="top">

User Documentation 

</td>
<td valign="top">

**Documentation on ID Handling** 

</td>
<td valign="top">

**Documentation on ID Handling**

We have updated our documentation on how SAPUI5 handles IDs. Understanding ID handling is essential for building maintainable, testable, and adaptable applications. For more information, see [ID Handling in SAPUI5: The Complete Guide](../05_Developing_Apps/id-handling-in-sapui5-the-complete-guide-f51dbb7.md).

<sub>New•User Documentation•Info Only•1.148</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-05-11

</td>
</tr>
<tr>
<td valign="top">

1.148 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

User Documentation 

</td>
<td valign="top">

**Walkthrough and Quickstart Tutorials on GitHub** 

</td>
<td valign="top">

**Walkthrough and Quickstart Tutorials on GitHub**

You can now find a dedicated UI5 Tutorials repository on the UI5 GitHub organization. It contains the introductory Walkthrough and Quickstart tutorials, available in both JavaScript and TypeScript versions:

-   [Walkthrough tutorial \(JavaScript\)](https://ui5.github.io/tutorials/walkthrough/?lang=js) and [Walkthrough tutorial \(TypeScript\)](https://ui5.github.io/tutorials/walkthrough/?lang=ts)
-   [Quickstart tutorial \(JavaScript\)](https://ui5.github.io/tutorials/quickstart/?lang=js) and [Quickstart tutorial \(TypeScript\)](https://ui5.github.io/tutorials/quickstart/?lang=ts)

We're continuously adding more SAPUI5 tutorials to the repository. For more information, see [UI5 Tutorials](https://ui5.github.io/tutorials/).

<sub>Changed•User Documentation•Info Only•1.148</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-05-11

</td>
</tr>
<tr>
<td valign="top">

1.148 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**Sandbox Redesigned** 

</td>
<td valign="top">

**Sandbox Redesigned**

The SAP Fiori launchpad sandbox was redesigned to be compatible with the 1.x-legacy-free versions. The sandbox can be used for local application development and testing. For installation and migration information, see [SAP Fiori Launchpad Sandbox](../05_Developing_Apps/sap-fiori-launchpad-sandbox-9307656.md).

<sub>Changed•Feature•Info Only•1.148</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-05-11

</td>
</tr>
</table>

