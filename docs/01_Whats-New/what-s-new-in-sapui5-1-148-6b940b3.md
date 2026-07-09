<!-- loio6b940b30f1294aaabfab8f918281fc94 -->

# What's New in SAPUI5 1.148

With this release SAPUI5 is upgraded from version 1.147 to 1.148.

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

2026-05-14

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

2026-05-14

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

2026-05-14

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

**Accessibility** 

</td>
<td valign="top">

**Accessibility** 

SAPUI5 is now using JAWS 2026 as a reference testing environment in SAPUI5. For more information, see the *Assistive technologies reference testing environment for SAPUI5* SAP Note [2564165](https://me.sap.com/notes/2564165).

<sub>Changed • Control • Info Only • 1.148 </sub> 

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-05-14

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

2026-05-14

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

2026-05-14

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

2026-05-14

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

2026-05-14

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

2026-05-14

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

2026-05-14

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

2026-05-14

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

2026-05-14

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

2026-05-14

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

2026-05-14

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

2026-05-14

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

2026-05-14

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

2026-05-14

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

2026-05-14

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

2026-05-14

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

2026-05-14

</td>
</tr>
</table>

**Related Information**  


[What's New in SAPUI5 1.147](what-s-new-in-sapui5-1-147-88df9d3.md "With this release SAPUI5 is upgraded from version 1.146 to 1.147.")

[What's New in SAPUI5 1.146](what-s-new-in-sapui5-1-146-6ccfe05.md "With this release SAPUI5 is upgraded from version 1.145 to 1.146.")

[What's New in SAPUI5 1.145](what-s-new-in-sapui5-1-145-7676a2a.md "With this release SAPUI5 is upgraded from version 1.144 to 1.145.")

[What's New in SAPUI5 1.144](what-s-new-in-sapui5-1-144-ad1c805.md "With this release SAPUI5 is upgraded from version 1.143 to 1.144.")

[What's New in SAPUI5 1.143](what-s-new-in-sapui5-1-143-ad08c66.md "With this release SAPUI5 is upgraded from version 1.142 to 1.143.")

[What's New in SAPUI5 1.142](what-s-new-in-sapui5-1-142-92ed100.md "With this release SAPUI5 is upgraded from version 1.141 to 1.142.")

[What's New in SAPUI5 1.141](what-s-new-in-sapui5-1-141-a7ed66d.md "With this release SAPUI5 is upgraded from version 1.140 to 1.141.")

[What's New in SAPUI5 1.140](what-s-new-in-sapui5-1-140-26a106c.md "With this release SAPUI5 is upgraded from version 1.139 to 1.140.")

[What's New in SAPUI5 1.139](what-s-new-in-sapui5-1-139-e10db71.md "With this release SAPUI5 is upgraded from version 1.138 to 1.139.")

[What's New in SAPUI5 1.138](what-s-new-in-sapui5-1-138-8f6a92b.md "With this release SAPUI5 is upgraded from version 1.136 to 1.138.")

[What's New in SAPUI5 1.136](what-s-new-in-sapui5-1-136-a82754d.md "With this release SAPUI5 is upgraded from version 1.135 to 1.136.")

[What's New in SAPUI5 1.135](what-s-new-in-sapui5-1-135-93d7630.md "With this release SAPUI5 is upgraded from version 1.134 to 1.135.")

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

