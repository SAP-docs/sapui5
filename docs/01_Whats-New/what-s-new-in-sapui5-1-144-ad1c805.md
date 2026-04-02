<!-- loioad1c8056995148148cb398d318c8f5b9 -->

# What's New in SAPUI5 1.144

With this release SAPUI5 is upgraded from version 1.143 to 1.144.

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

1.144 

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

We have provided a more comprehensive documentation on `p13nData` settings for custom columns in `SmartTable`, with a detailed reference of the properties, their effect on the UI, how to use them, and examples for their usage. This enhanced clarity and better structure of the documentation makes it easier for developers to implement and customize columns effectively, improving the overall functionality and user experience of `SmartTable`. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smarttable.SmartTable%23faq).

<sub>Changed•Control•Info Only•1.144</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-01-22

</td>
</tr>
<tr>
<td valign="top">

1.144 

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

-   When copying a node of a recursive hierarchy, the non-canonical path is now used.

-   Executing overloaded unbound functions is now supported.

-   Deleting a record from a flat list of unaggregated records with a grand total is now supported as an experimental feature. Note that the grand total is not updated.

-   Setting a context to keep-alive is now supported for single records in data aggregation scenarios.This is an experimental feature and subject to the restrictions listed in the [API Reference](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context%23methods/setKeepAlive).


<sub>Changed•Feature•Info Only•1.144</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-01-22

</td>
</tr>
<tr>
<td valign="top">

1.144 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**Localization** 

</td>
<td valign="top">

**Localization**

We now use the localization content of the Unicode Common Locale Data Repository \(CLDR\) version 48.0.0.

<sub>Changed•Feature•Info Only•1.144</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-01-22

</td>
</tr>
<tr>
<td valign="top">

1.144 

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

The `sap.m.Panel` control now expands and collapses when the [Space\] key is released \(`keyup` event\) rather than when it is pressed down \(`keydown` event\), enhancing usability. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.m.Panel/sample/sap.m.sample.PanelExpanded).

<sub>Changed•Control•Info Only•1.144</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-01-22

</td>
</tr>
<tr>
<td valign="top">

1.144 

</td>
<td valign="top">

New 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.mdc.Geomap`** 

</td>
<td valign="top">

**`sap.ui.mdc.Geomap`**

We've introduced a new experimental `sap.ui.mdc.Geomap` control within the MDC library. This control provides a native UI5 surface for displaying interactive maps, visualizing `GeoJSON` data, and integrating vector and raster tiles from multiple providers, including ESRI, HERE, OpenStreetMap, and SAP HANA Spatial Services. Leveraging `MapLibre GL` for high-performance rendering, it includes features such as clustering, drawing and selection tools, various layer types \(fill, line, circle, heatmap, symbol\), and supports responsive pan, zoom, rotate, and tilt capabilities. The control integrates with standard UI5 lifecycle, data binding, events, and aggregations. Note that as an experimental API, its features and interfaces may be subject to change. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.mdc.Geomap) and the [Samples](https://ui5.sap.com/#/entity/sap.ui.mdc.Geomap). You can also check out the tutorial [How to Use MDC GeoMap](https://github.com/SAP-samples/ui5-mdc-json-tutorial/tree/main/u2/ex1).

<sub>New•Control•Info Only•1.144</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-01-22

</td>
</tr>
<tr>
<td valign="top">

1.144 

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

-   You can now enable lazy loading at the object page or application level. Lazy loading delays the loading of object page sections that are not yet in the visible area. For more information, see [Defining the Loading Behavior of Object Pages](../06_SAP_Fiori_Elements/defining-the-loading-behavior-of-object-pages-ac03570.md).

-   You can now enable the "save and back" feature to allow users to save an object page and navigate back to the list report page. For more information, see [Save and Navigation Options on the Object Page](../06_SAP_Fiori_Elements/save-and-navigation-options-on-the-object-page-55d81bc.md).

-   You can now use inclusive semantic date ranges, such as 'Last X Months to Date' and 'Next X Months to Date'. For more information, see [Enabling Semantic Operators in the Filter Bar](../06_SAP_Fiori_Elements/enabling-semantic-operators-in-the-filter-bar-fef65d0.md).

-   We now support pasting content into table columns using the `Text_Only` text arrangement.


<sub>Changed•SAP Fiori Elements•Info Only•1.144</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-01-22

</td>
</tr>
<tr>
<td valign="top">

1.144 

</td>
<td valign="top">

Deleted 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.richtexteditor.RichTextEditor`** 

</td>
<td valign="top">

**`sap.ui.richtexteditor.RichTextEditor`**

-   TinyMCE 5 has been entirely removed across all relevant long-term maintenance SAPUI5 versions, including 1.96, 1.108, 1.120, 1.136, and 1.142. The `RichTextEditor` has now been adapted to use TinyMCE 7.
-   TinyMCE 6 has been deprecated in all relevant long-term maintenance SAPUI5 versions, including 1.96, 1.108, 1.120, 1.136, and 1.142. Upgrade to TinyMCE 7. For more information, see [Migrating from TinyMCE 6 to TinyMCE 7.0](https://www.tiny.cloud/docs/tinymce/latest/migration-from-6x/).

<sub>Deleted•Control•Required•1.144</sub>

</td>
<td valign="top">

Required 

</td>
<td valign="top">

2026-01-22

</td>
</tr>
<tr>
<td valign="top">

1.144 

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

The network graph now supports real-time editing capabilities. You can do the following:

-   Switch to edit mode to modify relationships and nodes visually.

-   Drag and drop nodes to reposition them or create new ones from external lists.

-   Draw connections between different nodes to update the dependencies.

-   Use the keyboard as an alternative means to create connections.


We've also added new properties, associations, and events to `sap.suite.ui.commons.networkgraph.Graph` and `sap.suite.ui.commons.networkgraph.Line`.

For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.suite.ui.commons.networkgraph.Graph) and the [Sample](https://ui5.sap.com/#/entity/sap.suite.ui.commons.networkgraph.Graph/sample/sap.suite.ui.commons.sample.NetworkGraphDND).

<sub>Changed•Control•Info Only•1.144</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-01-22

</td>
</tr>
<tr>
<td valign="top">

1.144 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.unified.ColorPicker`** 

</td>
<td valign="top">

**`sap.ui.unified.ColorPicker`**

We have improved the accessibility of the control by updating label attributes and grouping logic. Additionally, clicking the *Change Color Mode* button now prompts the screen reader to announce the values for RGBA or HSL modes, enhancing accessibility feedback.

<sub>Changed•Control•Info Only•1.144</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-01-22

</td>
</tr>
<tr>
<td valign="top">

1.144 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.unified.FileUploader`** 

</td>
<td valign="top">

**`sap.ui.unified.FileUploader`**

The redesigned control now features a modern input-like appearance, enhancing user experience by replacing the browse button with a `Value-help` icon and adding a *Clear* icon for removing selected files. Selected files are now displayed as tokens, providing a more intuitive and visually appealing interface while keeping all existing functionalities. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.unified.FileUploader).

<sub>Changed•Control•Info Only•1.144</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-01-22

</td>
</tr>
<tr>
<td valign="top">

1.144 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.PlanningCalendar, sap.m.SinglePlanningCalendar`** 

</td>
<td valign="top">

**`sap.m.PlanningCalendar, sap.m.SinglePlanningCalendar`**

We have improved the accessibility of the controls by converting the invisible reference for the *View* switch into a visible label. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.m.PlanningCalendar/sample/sap.m.sample.PlanningCalendar).

<sub>Changed•Control•Info Only•1.144</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-01-22

</td>
</tr>
<tr>
<td valign="top">

1.144 

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

We have improved the accessibility of the control. The *Next* and *Previous* buttons in the header are now focusable and have titles. The `aria-label` attributes for date range selections now offer detailed information about the range, and an announcement is added when focusing on a day within the range.

<sub>Changed•Control•Info Only•1.144</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-01-22

</td>
</tr>
<tr>
<td valign="top">

1.144 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.StepInput`** 

</td>
<td valign="top">

**`sap.m.StepInput`**

Flexible input precision is now enabled, allowing users to enter numbers with varying decimal places, regardless of the `displayValuePrecision` setting. If the input precision does not match the specified `displayValuePrecision`, the `ValueState` property is set to `Error`. If `ValidationMode` is set to `FocusOut`, the error state applies on focus out; if it is set to `LiveChange`, it updates immediately. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.m.StepInput/sample/sap.m.sample.StepInput).

<sub>Changed•Control•Info Only•1.144</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-01-22

</td>
</tr>
<tr>
<td valign="top">

1.144 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.Switch`** 

</td>
<td valign="top">

**`sap.m.Switch`**

We have improved focus padding and overflow properties to ensure that focus outlines are consistently visible and properly aligned. This enhancement boosts visual accessibility and user interaction by maintaining clear visibility of critical UI elements. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.m.Switch/sample/sap.m.sample.Switch).

<sub>Changed•Control•Info Only•1.144</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-01-22

</td>
</tr>
<tr>
<td valign="top">

1.144 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.tnt.ToolPage`** 

</td>
<td valign="top">

**`sap.tnt.ToolPage`**

The responsiveness of `sap.tnt.ToolPage` has been changed from device-based detection to screen-width breakpoints. There are now two main scenarios: screen widths of 599 pixels or less \(*ToolPage* is collapsed by default\), and those of 600 pixels or more \(*ToolPage* is expanded by default\). This automatic behavior can be overridden by setting the `sideExpanded` property. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.tnt.ToolPage/sample/sap.tnt.sample.ToolPage) and the [API Reference](https://ui5.sap.com/#/api/sap.tnt.ToolPage).

<sub>Changed•Control•Info Only•1.144</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-01-22

</td>
</tr>
<tr>
<td valign="top">

1.144 

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

-   To align with the latest theming design updates, the Card Explorer has been updated to replace static card screenshots with interactive UI5 Integration Cards. This change enhances the user experience by enabling direct interaction with the cards within the demo pages. Additionally, deep-link synchronization with the browser URL is now enabled to improve the navigation experience. For more information, see the [Card Explorer](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/overview/introduction). 

-   UI Integration Cards of declarative card type Analytical now support click detection on individual chart segments, providing detailed information about exactly what users clicked. When `actionableArea` is set to "Chart," card developers can now use the new `chartEventData` model to access specific event data within the action parameter binding, including measurement names. This event data contains information about which specific sector of the chart is clicked. For more information, see the [Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/analytical/stackedColumnWithMeasureActions) and the [Documentation](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/typesDeclarative/analytical) in Card Explorer.
-   UI Integration Cards of declarative card type Object now support radio buttons as input controls, offering greater flexibility in user interaction. This functionality is accomplished by setting the `type=”RadioButtonGroup”` for the Object card group item that contains a set of radio button options with attributes `key`, `title`, and `enabled`. For more information, see the [Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/object/form) and the [Documentation](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/typesDeclarative/object) in Card Explorer.
-   Tile-like cards now have improved accessibility, ensuring a better user experience for individuals relying on screen readers. By adjusting roles and labels, the update prevents redundant announcements, making navigation and information retrieval more efficient.
-   The `sap.ui.integration.widgets.CardFacade` API is no longer experimental. This release stabilizes the facade, enhances its long-term support, and aligns it with modern Integration Card usage patterns. As part of the cleanup, several methods were deprecated to ensure consistent and future-proof development, including `getParameters`, `getDomRef`, `setVisible`, and `getModel`. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.integration.widgets.CardFacade).
-   UI Integration Cards of declarative card type Analytical can now display tooltips. Users can now view tooltips when hovering over individual points on the charts, provided this feature is configured in the `manifest.json` file by setting the `tooltip` property. For more information, see the [Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/analytical/tooltips) and the [Documentation](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/typesDeclarative/analytical) in Card Explorer.
-   The UI5 MCP Server now supports the development of UI Integration Cards. In its latest version, v0.2.1, it introduces three new tools dedicated to UI Integration Cards. These tools assist Large Language Models in creating new UI Integration Cards from scratch or editing existing ones, following the best practices for card development. The new tools include:

    -   Best practice guidance for your agent: `get_integration_cards_guidelines`.
    -   Scaffolding a new card: `create_integration_card`.
    -   Validating the card’s manifest: `run_manifest_validation`.


<sub>Changed•Control•Info Only•1.144</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2026-01-22

</td>
</tr>
</table>

**Related Information**  


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

