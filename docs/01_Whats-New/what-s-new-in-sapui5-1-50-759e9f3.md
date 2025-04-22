<!-- loio759e9f3aa50d4fd08538655f373b0038 -->

# What's New in SAPUI5 1.50

With this release SAPUI5 is upgraded from version 1.48 to 1.50.

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

1.50 

</td>
<td valign="top">

New 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**New Demo Kit \(already available as of version 1.48.5\)** 

</td>
<td valign="top">

**New Demo Kit \(already available as of version 1.48.5\)**

The Demo Kit app has a new modern design that is intuitive and can be used on both desktop and mobile devices.

The global search has been improved and the results are now displayed in categories. They also include results from the *Samples* section, which was not possible with the old Demo Kit since the *Explored* app was a decoupled app.

The new Demo Kit contains the following sections:

-   Landing page with getting started information

-   *Documentation* with detailed information

-   *API Reference* with JavaScript documentation about the framework and the UI controls, including details for the corresponding properties, aggregations, associations, events, and methods

-   *Samples*, showcasing almost all controls with ability to download the sample code

-   *Demo Apps*, showcasing real-life scenarios that can easily be downloaded




<sub>New•Feature•Info Only•1.50</sub>

</td>
<td valign="top">

Info Only

</td>
<td valign="top">

2017-11-09

</td>
</tr>
<tr>
<td valign="top">

1.50

</td>
<td valign="top">

New 

</td>
<td valign="top">

User Documentation 

</td>
<td valign="top">

**Tutorials** 

</td>
<td valign="top">

**Tutorials**

The new *Ice Cream Machine* tutorial shows you how to use SAPUI5 controls like Generic Tiles, Micro Charts, and Process Flow: [Ice Cream Machine Tutorial](../03_Get-Started/ice-cream-machine-tutorial-e5b7f8a.md)

<sub>New•User Documentation•Info Only•1.50</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2017-11-09

</td>
</tr>
<tr>
<td valign="top">

1.50

</td>
<td valign="top">

New 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**Unicode Common Locale Data Repository \(CLDR\)** 

</td>
<td valign="top">

**Unicode Common Locale Data Repository \(CLDR\)**

The Unicode Common Locale Data Repository \(CLDR\) has been updated to version 31.

The correct plural category for a given number is now handled by the locale-specific plural rules offered by CLDR. Different languages use different plural forms, some languages have only singular and plural, others require additional forms, for example, dual \(two\), paucal \(few\), or many.

<sub>New•Feature•Info Only•1.50</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2017-11-09

</td>
</tr>
<tr>
<td valign="top">

1.50

</td>
<td valign="top">

New 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**Date Interval Types** 

</td>
<td valign="top">

**Date Interval Types**

Date interval types are introduced to format two date-related properties from a model for displaying in the UI. Additionally they are used to parse and validate the values in UI controls before they are saved back to the model. The new interval types are:

-   `sap.ui.model.type.DateInterval` - a date interval \(without time\)

-   `sap.ui.model.type.DateTimeInterval` - a date interval with the exact point of time

-   `sap.ui.model.type.TimeInterval` - a time interval \(without date\)


For more information, see [sap.ui.model.type.DateTimeInterval](../04_Essentials/sap-ui-model-type-datetimeinterval-94658aa.md) and the [API Reference](https://ui5.sap.com/#/api/sap.ui.model.type). 

<sub>New•Feature•Info Only•1.50</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2017-11-09

</td>
</tr>
<tr>
<td valign="top">

1.50

</td>
<td valign="top">

New 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**`animationMode`** 

</td>
<td valign="top">

**`animationMode`**

The configuration option `animationMode` replaces `animation`, which is now deprecated. The new option supports several states \(`full`, `basic`, `minimal`, `none`\), which allow controls to extend support for animations in a more granular way instead of a binary `on`/`off` state. For more information, see [Configuration Options and URL Parameters](../04_Essentials/configuration-options-and-url-parameters-91f2d03.md), [Implementing Animation Modes](../09_Developing_Controls/implementing-animation-modes-76b7d50.md), and the [API Reference](https://ui5.sap.com/#/api/sap.ui.core.Configuration.AnimationMode). 

<sub>New•Feature•Info Only•1.50</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2017-11-09

</td>
</tr>
<tr>
<td valign="top">

1.50

</td>
<td valign="top">

New 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**`sap.ui.export`** 

</td>
<td valign="top">

**`sap.ui.export`**

This new library provides APIs for exporting a client-side spreadsheet using an XLSX file format.For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.export).

<sub>New•Feature•Info Only•1.50</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2017-11-09

</td>
</tr>
<tr>
<td valign="top">

1.50

</td>
<td valign="top">

New 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.PlanningCalendarLegend`** 

</td>
<td valign="top">

**`sap.m.PlanningCalendarLegend`**

`sap.m.PlanningCalendarLegend` enables two types of items to be displayed in the `sap.m.PlanningCalendar` as a legend - types of days \(for example, special dates and holidays\) and appointments.For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.PlanningCalendarLegend).

![](images/WhatsNew_150_PlanningCalendarLegend_e8f3d35.png)

<sub>New•Control•Info Only•1.50</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2017-11-09

</td>
</tr>
<tr>
<td valign="top">

1.50

</td>
<td valign="top">

New 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.suite.ui.commons.networkgraph`** 

</td>
<td valign="top">

**`sap.suite.ui.commons.networkgraph`**

You can use this control to visualize data as a graph that illustrates how individual records are related. Displaying data as a network graph may also help you to highlight some of the data discrepancies that might be overlooked when the same data is displayed as a list or any other form of text.

The network graph supports both directed and undirected graphs and even graphs that contain cycles. The control provides broad customization options, enabling you to separate the graph layout from its rendering and to position individual graph elements freely, for example, when displaying geospatial data on top of a map.

For more information, see [Network Graph](../10_More_About_Controls/network-graph-b5649c8.md), the [API Reference](https://ui5.sap.com/#/api/sap.suite.ui.commons.networkgraph) and the [samples](https://ui5.sap.com/#/entity/sap.suite.ui.commons.networkgraph.Graph).

![](images/Whats_New_150_NetworkGraph1_05f571a.png)

<sub>New•Control•Info Only•1.50</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2017-11-09

</td>
</tr>
<tr>
<td valign="top">

1.50

</td>
<td valign="top">

New 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.suite.ui.commons.statusindicator`** 

</td>
<td valign="top">

**`sap.suite.ui.commons.statusindicator`**

You can use the `StatusIndicator` control to display a percentage value in the form of a fillable shape, translating plain numbers into meaningful shapes that visually convey the status of the items they represent.

You can fully customize the control by setting fill direction and fill color and by picking a shape that matches the value measured. In addition to the library of standard shapes, you can define your own custom SVG shapes. This allows you to create a powerful connection between your data and business by using symbols from a particular domain—for example, a half-filled truck shape may represent a real delivery truck filled up to 50% of its capacity.

The status indicator is best used in tiles, tables, and object pages.

For more information, see [Status Indicator](../10_More_About_Controls/status-indicator-8d5664a.md), the [API Reference](https://ui5.sap.com/#/api/sap.suite.ui.commons.statusindicator.StatusIndicator) and the [sample](https://ui5.sap.com/#/entity/sap.suite.ui.commons.StatusIndicator).

![](images/Whats_New_150_Status_Indicator_9ce1ff0.png)

<sub>New•Control•Info Only•1.50</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2017-11-09

</td>
</tr>
<tr>
<td valign="top">

1.50

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

The new version of the SAPUI5 OData V4 model introduces an adapter that allows you to use an OData V2 service together with the OData V4 model in read scenarios. The adapter offers the following features:

-   Metadata is converted, including some V2 annotations.

-   Data in the response is converted.

-   Literals in the request URI are converted, except for `Edm.DateTime`, `Edm.DateTimeOffset`, `Edm.Time`, and `Edm.Binary`.

-   `$select`, `$expand`, and `$orderby` are handled. Cases that are not supported by OData V2, like `$orderby` in `$expand`, lead to an error.

-   All unsupported query options lead to an error.


> ### Caution:  
> **Incompatibility Due to a Bug Fix**
> 
> The following bug has been reported: If you call the [sap.ui.model.odata.v4.Context\#getObject\(\)](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context/methods/getObject) or the [sap.ui.model.odata.v4.Context\#requestObject\(\)](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context/methods/requestObject) methods without a parameter, the expected and documented behavior is that the same result is returned as if the parameter `sPath=""` had been specified. However, due to the bug, the return value wraps the expected output that can then only be accessed via `.value[0]`, for example `oContext.getObject().value[0]`.
> 
> **If you have used this workaround, your application will break starting with SAPUI5 version 1.44.7.**
> 
> **Solution**: If your application needs to run with both the fixed and unfixed versions of SAPUI5, specify the `sPath=""` parameter, for the `sPath` parameter. In both cases, you **must not** use the workaround with `.value[0]` any longer.

> ### Restriction:  
> Due to the limited feature scope of this version of the SAPUI5 OData V4 model, check that all required features are in place before developing applications. Check the detailed documentation of the features, as certain parts of a feature may be missing. While we aim to be compatible with existing controls, some controls might not work due to small incompatibilities compared to `sap.ui.model.odata.(v2.)ODataModel`, or due to missing features in the model \(such as tree binding\). This also applies to Smart Controls \(`sap.ui.comp` library\) and SAP Fiori elements that do not support the SAPUI5 OData V4 model, as well as controls such as `TreeTable` and `AnalyticalTable`, which are not supported together with the SAPUI5 OData V4 model. The interface for applications has been changed for easier and more efficient use of the model. For a summary of these changes, see [Changes Compared to OData V2 Model](../04_Essentials/changes-compared-to-odata-v2-model-abd4d7c.md).

For more information, see [OData V4 Model](../04_Essentials/odata-v4-model-5de13cf.md), the [API Reference](https://ui5.sap.com/#/api/sap.ui.model.odata.v4), and the [sample](https://ui5.sap.com/#/entity/sap.ui.model.odata.v4.ODataModel) in the Demo Kit.

<sub>Changed•Feature•Info Only•1.50</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2017-11-09

</td>
</tr>
<tr>
<td valign="top">

1.50

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**Support Assistant: OPA Test Sample Added** 

</td>
<td valign="top">

**Support Assistant: OPA Test Sample Added**

With the roll-out of Support Assistant in version 1.48, we introduced the possibility to use the tool in OPA tests to check if there are issues in the different states of an application. This is possible by enabling the available OPA extension.

As of this version, there is now a sample of the OPA integration in the Demo Kit. It demonstrates how you can extend existing OPA tests by making calls to the assertions in the Support Assistant extension. These assertions may have different severity, execution scope and subset of rules which are taken into consideration. The sample also shows how to execute rule checks and how to get reports.

As of this version, there is now a sample of the OPA integration in the Demo Kit. For more information, see [Integrating the Rules in OPA Tests](../04_Essentials/integrating-the-rules-in-opa-tests-cfabbd4.md) and the [Sample](https://ui5.sap.com/#/sample/sap.ui.core.sample.OpaWithSupportAssistant/preview).

<sub>Changed•Feature•Info Only•1.50</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2017-11-09

</td>
</tr>
<tr>
<td valign="top">

1.50

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.f.DynamicPage`** 

</td>
<td valign="top">

**`sap.f.DynamicPage`**

**`sap.f.DynamicPage`** has the following new features:

-   You can now define the priority of the `DynamicPageTitle` areas with the use of the new `primaryArea` property. The primary area shrinks at a slower rate, remaining visible as long as possible.

-   With the new content aggregation of the `DynamicPageTitle`, you can add content in the middle area of the title. This content is displayed both in the expanded and collapsed states of the `DynamicPageHeader`.


For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.f.DynamicPageTitle). 

<sub>Changed•Control•Info Only•1.50</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2017-11-09

</td>
</tr>
<tr>
<td valign="top">

1.50

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.f.semantic.SemanticPage`** 

</td>
<td valign="top">

**`sap.f.semantic.SemanticPage`**

To align with the latest SAP Fiori design guidelines, the following changes were implemented:

-   The position of the draft indicator is changed to be the first one before the finalizing actions in the footer toolbar of the page.

-   A new *Edit* button was added as the main action and the order of the actions changed to *Edit*, *Delete*, *Copy*, and *Add*.


For more information, see [Semantic Page \(sap.f\)](../10_More_About_Controls/semantic-page-sap-f-47dc868.md), the [API Reference](https://ui5.sap.com/#/api/sap.f.semantic), and the [sample](https://ui5.sap.com/#/sample/sap.f.sample.SemanticPage/preview). 

<sub>Changed•Control•Info Only•1.50</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2017-11-09

</td>
</tr>
<tr>
<td valign="top">

1.50

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.gantt`** 

</td>
<td valign="top">

**`sap.gantt`**

**`sap.gantt`** has the following new features:

-   Relative time: You can configure the time label as relative time in the `GanttChart` header, for example, *Day 1*, *Day 2*.

-   The new `ghostAlignment` interface enables you to define how `GanttChart` adjusts the relative position between a shape and the mouse pointer. Using this interface, you can make the start time or end time of the shape align with the cursor line through the whole drag-and-drop process.

-   Shape resize: You can resize a shape by dragging the left or right edge of the shape and dropping it at a new position along the timeline.


<sub>Changed•Control•Info Only•1.50</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2017-11-09

</td>
</tr>
<tr>
<td valign="top">

1.50

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.Label`** 

</td>
<td valign="top">

**`sap.m.Label`**

**`sap.m.Label`** has the following new properties:

-   `wrapping`: Determines whether text within a label is wrapped. The default value is `false`. If set to `false`, the label text only uses one line and any exceeding text is truncated and replaced with an ellipsis. When you use the `Label` within a `sap.m.Form` the label text is automatically displayed as wrapped.

    ![](images/WhatsNew_150_LabelWrapping_a18049e.png)

-   `displayOnly`: Determines whether the label is in `displayOnly` mode. Controls in this mode are non-interactive, non-focusable, cannot be edited, and do not form part of the tab chain. The `displayOnly` property is used in `Form` controls when they are in preview mode.


For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.Label) and the [Samples](https://ui5.sap.com/#/entity/sap.m.Label). 

<sub>Changed•Control•Info Only•1.50</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2017-11-09

</td>
</tr>
<tr>
<td valign="top">

1.50

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

**`sap.m.MessageStrip`** now supports a limited set of formatting tags for the text. The available tags are `<a>`, `<em>`, `<strong>`, and `<u>`. To enable the additional formatting tags, you have to set the `enableFormattedText` property to `true`. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.MessageStrip) and the [Samples](https://ui5.sap.com/#/sample/sap.m.sample.MessageStripWithEnableFormattedText/preview).

<sub>Changed•Control•Info Only•1.50</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2017-11-09

</td>
</tr>
<tr>
<td valign="top">

1.50

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

**`sap.m.Panel`** has a new parameter for the `expand` event that identifies whether the user or the application is expanding or collapsing the `Panel` control. The parameter is called `triggeredByInteraction` and is `true` when the panel is expanded as a result of a user action. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.Panel) and the [Samples](https://ui5.sap.com/#/sample/sap.m.sample.PanelExpanded/preview).

<sub>Changed•Control•Info Only•1.50</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2017-11-09

</td>
</tr>
<tr>
<td valign="top">

1.50

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.PlanningCalendar`** 

</td>
<td valign="top">

**`sap.m.PlanningCalendar`**

-   You can now directly navigate to a date with fewer clicks.

-   With the use of the new `builtInViews` property the app developer can now define which of the built-in views are displayed. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.PlanningCalendar) and the [sample](https://ui5.sap.com/#/sample/sap.m.sample.PlanningCalendarViews/preview).

-   To save space, the days are now displayed on the same line as the dates. If you want to display the day names on a separate line, set the `showDayNamesLine` property to `true`.For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.PlanningCalendar) and the [sample](https://ui5.sap.com/#/sample/sap.m.sample.PlanningCalendarSingle/preview).


<sub>Changed•Control•Info Only•1.50</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2017-11-09

</td>
</tr>
<tr>
<td valign="top">

1.50

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.ProgressIndicator`** 

</td>
<td valign="top">

**`sap.m.ProgressIndicator`**

You can now set the control in a display-only state using the new `displayOnly` property. When set to `true`, the control has different visualization and is not active, not editable, and cannot be focused. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.ProgressIndicator) and the [Samples](https://ui5.sap.com/#/sample/sap.m.sample.ProgressIndicator/preview).

<sub>Changed•Control•Info Only•1.50</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2017-11-09

</td>
</tr>
<tr>
<td valign="top">

1.50

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.RatingIndicator`** 

</td>
<td valign="top">

**`sap.m.RatingIndicator`**

A new state can be set using the `displayOnly` property. It enables visually distinguishable rendering of the `RatingIndicator` \(gray color\), denoting it as non-interactive in forms. All controls in this mode are also non-focusable and not part of the tab chain. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.RatingIndicator) and the [Sample](https://ui5.sap.com/#/sample/sap.m.sample.RatingIndicator/preview).

![](images/Whats_New_150_RatingIndicator_e38d042.png)

<sub>Changed•Control•Info Only•1.50</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2017-11-09

</td>
</tr>
<tr>
<td valign="top">

1.50

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.semantic.SemanticPage`** 

</td>
<td valign="top">

**`sap.m.semantic.SemanticPage`**

You can now set the background color of the page using the new `backgroundDesign` property. For more information, see [Semantic Page \(sap.m\)](../10_More_About_Controls/semantic-page-sap-m-4a97a07.md) and the [API Reference](https://ui5.sap.com/#/api/sap.m.semantic.SemanticPage).

<sub>Changed•Control•Info Only•1.50</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2017-11-09

</td>
</tr>
<tr>
<td valign="top">

1.50

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.UploadCollection`** 

</td>
<td valign="top">

**`sap.m.UploadCollection`**

`UploadCollectionItem` has been extended to display folders in the `UploadCollection` control. When you click the file name or item thumbnail, you can perform custom actions by adding an event handler to the `press` event. With the `deletePress` event, you can control the deletion of an item. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.UploadCollectionItem) and the [sample](https://ui5.sap.com/#/sample/sap.m.sample.UploadCollectionFolderHierarchy/preview).

<sub>Changed•Control•Info Only•1.50</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2017-11-09

</td>
</tr>
<tr>
<td valign="top">

1.50

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.Tree`** 

</td>
<td valign="top">

**`sap.m.Tree`**

The `toggleOpenState` event has been added. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.Tree) and the [sample](https://ui5.sap.com/#/sample/sap.m.sample.TreeJSONLazyLoading/preview).

<sub>Changed•Control•Info Only•1.50</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2017-11-09

</td>
</tr>
<tr>
<td valign="top">

1.50

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.suite.ui.commons.ProcessFlow`** 

</td>
<td valign="top">

**`sap.suite.ui.commons.ProcessFlow`**

The nodes of `ProcessFlow` that are stored in the `nodes` aggregation can be used now as containers for arbitrary content. You can add content to `ProcessFlowNode` by using the `zoomLevelOneContent`, `zoomLevelTwoContent`, `zoomLevelThreeContent`, and `zoomLevelFourContent` aggregations.

For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.suite.ui.commons.ProcessFlowNode), the [Process Flow Node as Container](https://ui5.sap.com/#/sample/sap.suite.ui.commons.sample.ProcessFlowNodeContainer/preview), and the [Process Flow with Image Content](https://ui5.sap.com/#/sample/sap.suite.ui.commons.sample.ProcessFlowImageContent/preview) samples.

<sub>Changed•Control•Info Only•1.50</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2017-11-09

</td>
</tr>
<tr>
<td valign="top">

1.50

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.suite.ui.microchart.Interactive*Chart`** 

</td>
<td valign="top">

**`sap.suite.ui.microchart.Interactive*Chart`**

You can use semantic colors to highlight important data points in interactive charts. Semantic colors can be enabled by using the `color` property.

This feature was implemented for `InteractiveBarChart`, `InteractiveDonutChart`, and `InteractiveLineChart`.

For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.suite.ui.microchart.InteractiveBarChart) and the [sample](https://ui5.sap.com/#/sample/sap.suite.ui.microchart.sample.InteractiveBarChartSemanticColors/preview).

<sub>Changed•Control•Info Only•1.50</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2017-11-09

</td>
</tr>
<tr>
<td valign="top">

1.50

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

The days of the previous/next month are no longer visible whenever the `sap.ui.unified.Calendar` displays multiple months. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.unified.Calendar) and the [sample](https://ui5.sap.com/#/sample/sap.ui.unified.sample.CalendarMultipleMonth/preview).

<sub>Changed•Control•Info Only•1.50</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2017-11-09

</td>
</tr>
<tr>
<td valign="top">

1.50

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.comp.smartvariantmanagement.SmartVariantManagement`** 

</td>
<td valign="top">

**`sap.ui.comp.smartvariantmanagement.SmartVariantManagement`**

You can now define favorites for variants by selecting *Add* in the *Manage Variants* dialog box if the `useFavorites` property in the `VariantManagement` control has been set to `true`.

For more information, see [Smart Variant Management](../10_More_About_Controls/smart-variant-management-06a4c3a.md), the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smartvariants.SmartVariantManagement) and the [sample](https://ui5.sap.com/#/sample/sap.ui.comp.sample.smartfilterbar/preview).

<sub>Changed•Control•Info Only•1.50</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2017-11-09

</td>
</tr>
<tr>
<td valign="top">

1.50

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.layout.form.Form/sap.ui.layout.form.SimpleForm`** 

</td>
<td valign="top">

**`sap.ui.layout.form.Form/sap.ui.layout.form.SimpleForm`**

The samples, including the descriptions, have been simplified and are now more consistent. For more information, see the [Form](https://ui5.sap.com/#/entity/sap.ui.layout.form.Form) and the [SimpleForm](https://ui5.sap.com/#/entity/sap.ui.layout.form.SimpleForm) samples.

<sub>Changed•Control•Info Only•1.50</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2017-11-09

</td>
</tr>
<tr>
<td valign="top">

1.50

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.comp.navpopover.SmartLink`** 

</td>
<td valign="top">

**`sap.ui.comp.navpopover.SmartLink`**

The usability of the samples for the popover has been improved. For more information, see the [sample](https://ui5.sap.com/#/sample/sap.ui.comp.sample.smartlink.example_08/preview).

<sub>Changed•Control•Info Only•1.50</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2017-11-09

</td>
</tr>
<tr>
<td valign="top">

1.50

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**Smart Controls** 

</td>
<td valign="top">

**Smart Controls**

Columns in the value help can now be sorted in all smart controls that use value help dialog boxes. For more information, see the [sample](https://ui5.sap.com/#/sample/sap.ui.comp.sample.smartfilterbar/preview).

<sub>Changed•Control•Info Only•1.50</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2017-11-09

</td>
</tr>
<tr>
<td valign="top">

1.50

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

SAP Fiori Elements 

</td>
<td valign="top">

**SAP Fiori Elements** 

</td>
<td valign="top">

**SAP Fiori Elements**

**List Report and Object Page**

-   General Features

    -   You can now enable quick views by adding information to the popovers for smart link navigation. For more information, see [Enabling Quick Views for Link Navigation](../06_SAP_Fiori_Elements/enabling-quick-views-for-link-navigation-307ced1.md).


    -   You can enable apps to display a flexible column layout. This allows users to see more details on a page, and to expand and collapse the screen areas. For more information, see [Enabling the Flexible Column Layout](../06_SAP_Fiori_Elements/enabling-the-flexible-column-layout-e762257.md).

    -   You can use the `SecuredExecution` method in the API for developers of template extensions, for example, to send custom messages. For more information, see [Using the SecuredExecution Method](../06_SAP_Fiori_Elements/using-the-securedexecution-method-6a39150.md).

    -   You can use the `tableType` setting in the `manifest.json` descriptor file to choose which table type to render. For more information, see [Setting the Table Type](../06_SAP_Fiori_Elements/setting-the-table-type-7f844f1.md).

    -   The editing flow in non-draft apps has been optimized. The following features are now available:

        -   For object pages and sub-object pages, the *Delete* button is available in the header on each page.

        -   After the user clicks the *Cancel* button a quick confirmation popover is displayed instead of a warning message.


        For more information about non-draft apps, see [Non-Draft Apps](../06_SAP_Fiori_Elements/non-draft-apps-a90c558.md).


-   List Report View

    You can use extension points to add global custom actions to the list report.For more information, see [Adding Custom Actions Using Extension Points](../06_SAP_Fiori_Elements/adding-custom-actions-using-extension-points-7619517.md).

-   Object Page View

    -   You can hide and display sections based on properties. For more information, see [Defining and Adapting Sections](../06_SAP_Fiori_Elements/defining-and-adapting-sections-facfea0.md).

    -   During inline creation of a table entry, new linesYou can now use tree tables on the object page, in are highlighted in blue. read-only mode.

    -   For more information, see [Setting the Table Type](../06_SAP_Fiori_Elements/setting-the-table-type-7f844f1.md).

    -   The refreshAncestors method is now available in the API for developers of template extensions. Applications can use it to set the root page to dirty. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.suite.ui.generic.template.ObjectPage.extensionAPI.ExtensionAPI).

    -   You can use an extension point to replace the standard navigation from the object page with your own navigation to an external or internal target. For more information, see [Example: Replacing Standard Navigation in a Responsive Table on the Object Page](../06_SAP_Fiori_Elements/example-replacing-standard-navigation-in-a-responsive-table-on-the-object-page-b20dc7a.md).



**Worklist**

You can now use this new SAP Fiori element to create worklist applications. For more information see [Worklist](../06_SAP_Fiori_Elements/worklist-d1d588f.md).

**Analytic List Page \(ALP\)**

ALP has been enhanced with the following features:

-   Semantic coloring for visual filter measure values \(see [Visual Filters](../06_SAP_Fiori_Elements/visual-filters-1714720.md)\)

    ![](images/Whats_New_150_ALP_Semantic_Coloring_d0bdf6b.png)

-   Flexible column layout

-   Custom actions to appear on the header area \(see [Defining Custom Actions](../06_SAP_Fiori_Elements/defining-custom-actions-c3de5c0.md)\)

-   The `tableType` property in the descriptor file to configure a table type \(see [Configuring the Table-Only View as the Default Option](../06_SAP_Fiori_Elements/configuring-the-table-only-view-as-the-default-option-d074e26.md)\)

-   User preference for displaying the currency type by passing the SAP Fiori launchpad user setting in the `DisplayCurrency` field of an application \(see [Visual Filters](../06_SAP_Fiori_Elements/visual-filters-1714720.md)\)


**Overview Pages \(OVP\)**

OVP has been enhanced with the following features:

-   Dynamic show/hide rows in link list card, based on the user authorization for the related navigation link \(see [Link List Cards](../06_SAP_Fiori_Elements/link-list-cards-0326f91.md)\)

-   Smart link control in table card \(see [Table Cards](../06_SAP_Fiori_Elements/table-cards-167bf7c.md)\)

    ![](images/Whats_New_150_OVP_SmartLink_019b66a.png)

-   User preference for displaying the currency type by passing the SAP Fiori launchpad user setting in the `DisplayCurrency` field of an application \(see [Configuring Card Filters](../06_SAP_Fiori_Elements/configuring-card-filters-ecde99f.md)\)

-   Saving of page variants as a tile on the SAP Fiori launchpad \(see [Sharing Overview Pages](../06_SAP_Fiori_Elements/sharing-overview-pages-f9d88b5.md)\)

-   Accessibility for screen reader

-   Tooltips for all chart cards \(see [Analytical Cards](../06_SAP_Fiori_Elements/analytical-cards-d7b0b42.md)\)

-   Display of numbers and percentage values on donut charts and the possibility to disable the navigation from the graph \(see [Chart Cards Used in Overview Pages](../06_SAP_Fiori_Elements/chart-cards-used-in-overview-pages-68e62ad.md)\)

-   Header navigation in analytical chart cards \(see [Configuring Card Navigation](../06_SAP_Fiori_Elements/configuring-card-navigation-530f9e6.md)\)


<sub>Changed•SAP Fiori Elements•Info Only•1.50</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2017-11-09

</td>
</tr>
<tr>
<td valign="top">

1.50

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Analysis Path Framework \(APF\) 

</td>
<td valign="top">

**Analysis Path Framework \(APF\)** 

</td>
<td valign="top">

**Analysis Path Framework \(APF\)**

APF has the following new feature:

-   If you want to configure several SAP Fiori tiles for one APF-based app to access data from multiple back-end systems, you can use the `sap-system` parameter to ensure that SAP Gateway directs the OData service requests to the correct back-end system. This is useful, for example, if you have a system landscape with regional back-end systems.

    For more information, see [Working with Multiple Back-End Systems](../07_APF/working-with-multiple-back-end-systems-9072139.md).


APF has been enhanced with the following features:

-   The export function has been enhanced so that you can now download a configuration file and a text properties file directly without having to copy and paste the content to a new file.

    For more information, see [Export](../07_APF/export-7de4975.md).

-   If a smart filter bar has mandatory fields, you can now start your analysis only if these mandatory fields are filled. Otherwise the *Add Analysis Step* button is inactive.

    For more information, see [Smart Filter Bar](../07_APF/smart-filter-bar-594f111.md).

-   The demo app for the APF runtime in the Demo Kit is now also available in German. To open the demo app in German, add the parameter `sap-language=de` to the URL: [Demo App with URL parameter **?sap-language=de**](https://ui5.sap.com/test-resources/sap/apf/newDemokit/runtime/index.html?sap-language=de).


<sub>Changed•Analysis Path Framework \(APF\)•Info Only•1.50</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2017-11-09

</td>
</tr>
</table>

**Related Information**  


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

[What's New in SAPUI5 1.48](what-s-new-in-sapui5-1-48-fa1efac.md "With this release SAPUI5 is upgraded from version 1.46 to 1.48.")

[What's New in SAPUI5 1.46](what-s-new-in-sapui5-1-46-6307539.md "With this release SAPUI5 is upgraded from version 1.44 to 1.46.")

[What's New in SAPUI5 1.44](what-s-new-in-sapui5-1-44-a0cb7a0.md "With this release SAPUI5 is upgraded from version 1.42 to 1.44.")

[What's New in SAPUI5 1.42](what-s-new-in-sapui5-1-42-468b05d.md "With this release SAPUI5 is upgraded from version 1.40 to 1.42.")

[What's New in SAPUI5 1.40](what-s-new-in-sapui5-1-40-fbab50e.md "With this release SAPUI5 is upgraded from version 1.38 to 1.40.")

[What's New in SAPUI5 1.38](what-s-new-in-sapui5-1-38-f218918.md "With this release SAPUI5 is upgraded from version 1.36 to 1.38.")

