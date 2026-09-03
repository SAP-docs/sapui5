<!-- loioe824a0e2e4ad4de9b5c0892eae43746a -->

# What's New in SAPUI5 1.151

With this release SAPUI5 is upgraded from version 1.150 to 1.151.

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

1.151 

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

<sub>Deprecated•Feature•Info Only•1.151</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-08-06

</td>
</tr>
<tr>
<td valign="top">

1.151 

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

A table of type `ResponsiveTable` bound to OData V4 can now be grouped by invisible columns through all regular personalization channels \(for example, the settings dialog, column menu, and `StateUtil`\). Previously, only visible columns could be grouped because properties for invisible columns might not have been loaded. This restriction has now been removed.

<sub>Changed•Control•Info Only•1.151</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-08-06

</td>
</tr>
<tr>
<td valign="top">

1.151 

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

-   When you use data aggregation without group levels, the experimental restriction is removed for `v4.Context#setKeepAlive`, `v4.ODataListBinding#create`, `v4.Context#delete`, and `v4.Context#requestSideEffects`.

-   The `v4.ODataModel#getKeepAliveContext` and `v4.ODataListBinding#getKeepAliveContext` methods now support data aggregation.
-   The `v4.ODataMetaModel#requestValueListInfo` method no longer throws an error if several value lists with fixed values are used together with the `ValueListRelevantQualifiers` annotation, but no context is provided to evaluate the `ValueListRelevantQualifiers`. In this case, all value list mappings are returned, leaving it to the application to pick the one to use. For more information, see [`ValueListRelevantQualifiers`](https://github.com/SAP/odata-vocabularies/blob/main/vocabularies/Common.md#ValueListRelevantQualifiers).
-   The `Promise` returned by `v4.ODataContextBinding#invoke` now resolves with an object containing the body with the stream and the return headers if the return type of the action or function is `Edm.Stream` and the `groupId` `$stream` is used.For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataContextBinding%23methods/invoke).


<sub>Changed•Feature•Info Only•1.151</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-08-06

</td>
</tr>
<tr>
<td valign="top">

1.151 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**`sap.ui.core.message.Message` and `sap/ui/core/Messaging`** 

</td>
<td valign="top">

**`sap.ui.core.message.Message` and `sap/ui/core/Messaging`**

`sap.ui.core.message.Message` now provides a public `isValidation()` method that returns `true` for messages produced by client-side type validation or parse errors \(`validationError`, `parseError`, `formatError` binding events\). Previously, this information was tracked internally but had no stable API. Use this method to distinguish framework-generated validation messages from application-created ones. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.core.message.Message%23methods/isValidation).

`sap/ui/core/Messaging` now provides a public `getMessages()` method that returns all current messages as a flat array. Previously, retrieving all messages required going through `getMessageModel().getData()`. This convenience API removes that indirection. For more information, see the [API Reference](https://ui5.sap.com/#/api/module:sap/ui/core/Messaging%23methods/sap/ui/core/Messaging.getMessages).

<sub>Changed•Feature•Info Only•1.151</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-08-06

</td>
</tr>
<tr>
<td valign="top">

1.151 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

User Documentation 

</td>
<td valign="top">

**Documentation on Composite Controls** 

</td>
<td valign="top">

**Documentation on Composite Controls**

We have updated our documentation on how composite controls are implemented in SAPUI5. The revised version provides improved guidance for building composite controls and for migrating away from the deprecated `sap.ui.core.XMLComposite` class. A new topic, *Synchronizing Properties via a `$this` Model*, introduces a reusable helper pattern that reconstructs `XMLComposite`'s implicit `$this` model on a standard `sap.ui.core.Control`.

For more information, see [Composite Controls](../09_Developing_Controls/composite-controls-d6bab27.md) and [Synchronizing Properties via a $this Model](../09_Developing_Controls/synchronizing-properties-via-a-this-model-8b9014d.md).

<sub>Changed•User Documentation•Info Only•1.151</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-08-06

</td>
</tr>
<tr>
<td valign="top">

1.151 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

User Documentation 

</td>
<td valign="top">

**OData V4, Data Binding, and Navigation & Routing Tutorials on GitHub** 

</td>
<td valign="top">

**OData V4, Data Binding, and Navigation & Routing Tutorials on GitHub**

The tutorials mentioned above are now available in the dedicated UI5 Tutorials repository on the UI5 GitHub organization. Each tutorial is available in both JavaScript and TypeScript versions:

-   [OData V4 tutorial \(JavaScript\)](https://ui5.github.io/tutorials/odatav4/?lang=js) and [OData V4 tutorial \(TypeScript\)](https://ui5.github.io/tutorials/odatav4/?lang=ts)
-   [Data Binding tutorial \(JavaScript\)](https://ui5.github.io/tutorials/databinding/?lang=js) and [Data Binding tutorial \(TypeScript\)](https://ui5.github.io/tutorials/databinding/?lang=ts)
-   [Navigation & Routing tutorial \(JavaScript\)](https://ui5.github.io/tutorials/navigation/?lang=js) and [Navigation & Routing tutorial \(TypeScript\)](https://ui5.github.io/tutorials/navigation/?lang=ts)

More SAPUI5 tutorials are continuously added to the repository. For more information, see [UI5 Tutorials](https://ui5.github.io/tutorials/).

<sub>Changed•User Documentation•Info Only•1.151</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-08-06

</td>
</tr>
<tr>
<td valign="top">

1.151 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.gantt.simple.GanttRowSettings`** 

</td>
<td valign="top">

**`sap.gantt.simple.GanttRowSettings`**

You can now configure the `UseParentShapeOnExpand` and `ShowParentRowOnExpand` properties at the row level using the corresponding enum values, giving each row its own expansion behavior. Previously, these properties applied globally to all rows in the Gantt table.

For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.gantt.simple.GanttRowSettings) and the [Sample](https://ui5.sap.com/#/entity/sap/gantt/multiactivity/GanttChartMultiActivity).

<sub>Changed•Control•Info Only•1.151</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-08-06

</td>
</tr>
<tr>
<td valign="top">

1.151 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.suite.ui.commons.networkgraph.Graph`** 

</td>
<td valign="top">

**`sap.suite.ui.commons.networkgraph.Graph`**

The network graph now supports the `enableEnhancedLineRouting` property which detects and separates overlapping horizontal segments. Users can independently distinguish and select individual lines.

For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.suite.ui.commons.networkgraph.Graph) and the [Sample](https://ui5.sap.com/#/entity/sap.suite.ui.commons.networkgraph.Graph/sample/sap.suite.ui.commons.sample.NetworkGraph).

<sub>Changed•Control•Info Only•1.151</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-08-06

</td>
</tr>
<tr>
<td valign="top">

1.151 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.tnt.SideNavigation`** 

</td>
<td valign="top">

**`sap.tnt.SideNavigation`**

`sap.tnt.SideNavigation` now supports search and filtering of navigation items via a new `filterSection` aggregation. Add a `sap.tnt.SideNavigationSearchField` to this aggregation to let users quickly locate items in large navigation structures — the list filters dynamically and matching items are highlighted. When search is active, footer items either move to the main list or are hidden if no matches are found. Note that search is not available when the side navigation is collapsed. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.tnt.SideNavigation/sample/sap.tnt.sample.SideNavigationSearch).

<sub>Changed•Control•Info Only•1.151</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-08-06

</td>
</tr>
<tr>
<td valign="top">

1.151 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`UI Integration Cards`** 

</td>
<td valign="top">

**`UI Integration Cards`**

-   The Object Card group item now supports a `valueEntries` property, allowing a single item to display multiple values stacked vertically. This is useful for displaying multi-line addresses, multiple email links, or current versus previous values. Each entry supports its own tooltip, actions, and visibility. When provided, `valueEntries` takes precedence over `value`. Note that this property works with `Default` item types only. For more information, see the [Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/object/valueEntries) and the [API Reference](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/typesDeclarative/object) in the Card Explorer.
-   The `sap.ui.integration.widgets.Card` control now provides a `getContextDependencies()` method that returns an array of context paths the card depends on from its manifest. This allows host applications to detect context dependencies early and activate loading placeholders before the card renders. Note that this method is experimental and its API may change in future versions. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.integration.widgets.Card/methods/getContextDependencies).
-   The card manifest now supports a `badges` property in `sap.card/badges`, allowing card developers to define badges declaratively. This lets the back end determine which badges to display at render time without requiring host application code. For more information, see the [Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/badges/basic) and the [API Reference](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/features/badges) in the Card Explorer.


<sub>Changed•Control•Info Only•1.151</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-08-06

</td>
</tr>
<tr>
<td valign="top">

1.151 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.mdc.Geomap`** 

</td>
<td valign="top">

**`sap.ui.mdc.Geomap`**

`GeomapLegendControl` is now available in `sap.ui.mdc.Geomap` for displaying map legends. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.ui.mdc.Geomap/sample/sap.ui.mdc.demokit.sample.Geomap.choroplethMap).

<sub>Changed•Control•Info Only•1.151</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-08-06

</td>
</tr>
<tr>
<td valign="top">

1.151 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.unified.Calendar`** 

</td>
<td valign="top">

**`sap.ui.unified.Calendar`**

`sap.ui.unified.Calendar` and `sap.ui.unified.calendar.Month` now support a `showWeekNumbersHeader` Boolean property that controls whether a "Calendar Week" abbreviation \(*CW*\) is shown in the header cell of the week number column. This helps users identify the column more easily, improving usability. The abbreviation is hidden by default. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.unified.Calendar).

<sub>Changed•Control•Info Only•1.151</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-08-06

</td>
</tr>
<tr>
<td valign="top">

1.151 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

SAP Fiori Elements 

</td>
<td valign="top">

SAP Fiori Elements for OData V2 and SAP Fiori Elements for OData V4 

</td>
<td valign="top">

**SAP Fiori Elements for OData V2 and SAP Fiori Elements for OData V4**

The following changes and new features are available for SAP Fiori elements for OData V2 and SAP Fiori elements for OData V4:

-   You can now configure filter fields in custom variants to dynamically retrieve user default values from SAP Fiori launchpad. For more information, see [Configuring Default Filter Values](../06_SAP_Fiori_Elements/configuring-default-filter-values-b221ce0.md) \(for SAP Fiori Elements for OData V2\) and [Configuring Default Filter Values](../06_SAP_Fiori_Elements/configuring-default-filter-values-f27ad7b.md) \(for SAP Fiori Elements for OData V4\).

-   SAP Fiori elements-based apps used in SAP S/4HANA Cloud Public Edition 2608 now provide the AI-assisted easy fill, which allows users to fill multiple fields simultaneously using natural language. For more information, see [Generative AI Features](../06_SAP_Fiori_Elements/generative-ai-features-3ac93d8.md) \(for SAP Fiori Elements for OData V2\) and [Generative AI Features](../06_SAP_Fiori_Elements/generative-ai-features-0ec03d4.md) \(for SAP Fiori Elements for OData V4\) .


<sub>Changed•SAP Fiori Elements•Info Only•1.151</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-08-06

</td>
</tr>
<tr>
<td valign="top">

1.151 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

SAP Fiori Elements 

</td>
<td valign="top">

SAP Fiori Elements for OData V2 

</td>
<td valign="top">

**SAP Fiori Elements for OData V2**

The following changes and new features are available for SAP Fiori elements for OData V2:

-   You can now configure filter fields in custom variants of the overview page to dynamically retrieve user default values maintained in SAP Fiori launchpad. For more information, see [Configuring Default Filter Values on the Overview Page](../06_SAP_Fiori_Elements/configuring-default-filter-values-on-the-overview-page-b1ba10c.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.151</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-08-06

</td>
</tr>
<tr>
<td valign="top">

1.151 

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

-   You can now use IN mapping to pass parameter values from the entity to a parameterized value help entity set. For more information, see [Configuring Filter Bars](../06_SAP_Fiori_Elements/configuring-filter-bars-4bd7590.md).

-   You can now define a virtual date-range filter field that can be mapped to individual date-based filter fields to allow users to filter records where either the start or end dates fall within the defined date range. For more information, see [Configuring Filter Bars](../06_SAP_Fiori_Elements/configuring-filter-bars-4bd7590.md).

-   You can now define the visible and enabled properties of standard actions in tables using the `manifest.json` file. For more information, see [Configuring Standard Actions in Tables](../06_SAP_Fiori_Elements/configuring-standard-actions-in-tables-e951d05.md).

-   You can now disable the persistence of user personalization in the `Chart`,`FilterBar`, and `Table` building blocks. When disabled, user personalization isn't restored when loaded in a different context. For more information, see [Disabling Personalization Persistence in Building Blocks](../06_SAP_Fiori_Elements/disabling-personalization-persistence-in-building-blocks-32259bd.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.151</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-08-06

</td>
</tr>
</table>

