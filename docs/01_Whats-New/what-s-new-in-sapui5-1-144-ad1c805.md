<!-- loioad1c8056995148148cb398d318c8f5b9 -->

<link rel="stylesheet" type="text/css" href="../css/sap-icons.css"/>

# What's New in SAPUI5 1.144

With this release SAPUI5 is upgraded from version 1.143 to 1.144.

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

Upcoming 

</td>
<td valign="top">

UI Changed 

</td>
<td valign="top">

Announcement 

</td>
<td valign="top">

**Accessible Personalization for Table Filters** 

</td>
<td valign="top">

**Accessible Personalization for Filters**

> ### Note:  
> The following information concerns important upcoming changes for end users. These changes may require end users to adjust and/or test cases to be adapted, but they won't stop or disrupt software or processes.

We will revamp the personalization in the *Adapt Filters* dialog to allow users to personalize filter bars even more easily while ensuring accessibility compliance, enhancing user efficiency and satisfaction. For example, we will provide additional screenreader announcements, improve the usability of the screen content, and the display of certain UI elements.

<sub><span style="color:#666666;"><span class="SAP-icons-V5"></span></span>**[Preview](https://help.sap.com/docs/whats-new-disclaimer)**•UI Changed•Announcement•Info Only•Upcoming</sub>

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

