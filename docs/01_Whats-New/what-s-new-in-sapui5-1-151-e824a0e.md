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

**Related Information**  


[What's New in SAPUI5 1.150](what-s-new-in-sapui5-1-150-65d4973.md "With this release SAPUI5 is upgraded from version 1.149 to 1.150.")

[What's New in SAPUI5 1.149](what-s-new-in-sapui5-1-149-8591ff4.md "With this release SAPUI5 is upgraded from version 1.148 to 1.149.")

[What's New in SAPUI5 1.148](what-s-new-in-sapui5-1-148-6b940b3.md "With this release SAPUI5 is upgraded from version 1.147 to 1.148.")

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

