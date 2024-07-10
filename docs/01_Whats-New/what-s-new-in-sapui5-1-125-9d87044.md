<!-- loio9d87044050f44763a2aeabff0a7a6bb2 -->

<link rel="stylesheet" type="text/css" href="../css/sap-icons.css"/>

# What's New in SAPUI5 1.125

With this release SAPUI5 is upgraded from version 1.124 to 1.125.

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

1.125 

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

In the table in the `View Settings` dialog \(`P13n`\), you can now use the `Select All` option to select all columns at once to make them visible. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.ui.mdc.Table/sample/sap.ui.mdc.demokit.sample.TableJson).

<sub>Changed•Control•Info Only•1.125</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-06-13

</td>
</tr>
<tr>
<td valign="top">

1.125 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.mdc.filterbar.vh.FilterBar`, `sap.ui.mdc.filterbar.vh.CollectiveSearchSelect`** 

</td>
<td valign="top">

**`sap.ui.mdc.filterbar.vh.FilterBar`, `sap.ui.mdc.filterbar.vh.CollectiveSearchSelect`**

To make it easier to find value-help-related entities, we have moved these controls to the `sap.ui.mdc.valuehelp` namespace.

<sub>Changed•Control•Info Only•1.125</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-06-13

</td>
</tr>
<tr>
<td valign="top">

1.125 

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

To enable automatic resizing of columns, we have introduced the `autoResizeColumn` function. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.table.Column%23methods/getAutoResizable).

<sub>Changed•Control•Info Only•1.125</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-06-13

</td>
</tr>
<tr>
<td valign="top">

1.125 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**`sap.m.p13n.Engine` ** 

</td>
<td valign="top">

**`sap.m.p13n.Engine`**

We have added a tutorial that allows you to build and try out your own artifacts based on the controls in the <code><code>P13n</code></code> class. For more information, see the [P13nify Everything - Personalization for Any Control](https://github.com/SAP-samples/ui5-p13n-tutorial).



<sub>Changed•Feature•Info Only•1.125</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-06-13

</td>
</tr>
<tr>
<td valign="top">

1.125 

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

We have added a tutorial that allows you to build and try out your own artifacts based on the controls in the `sap.ui.mdc` library. For more information, see the [SAPUI5 MDC Tutorial](https://github.com/SAP-samples/ui5-mdc-json-tutorial).

<sub>Changed•Feature•Info Only•1.125</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-06-13

</td>
</tr>
<tr>
<td valign="top">

1.125 

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

**`sap.ui.mdc.Table`, `sap.ui.mdc.table.DragDropConfig`**

-   We have enhanced the `DropInfo` configuration: You can now use `preventDefault` for the `dragover` event. This way, you can disable dropping on a specific location, for example, between two table rows. To help consumers find out whether to prevent the default of the `dragenter` event when dragging over the edge of two DOM nodes, we have also added the `dropPosition` parameter to the event. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.core.dnd.DropInfo%23events/dragOver) for the `dragOver` event and the [API Reference](https://ui5.sap.com/#/api/sap.ui.mdc.table.DragDropConfig%23events/Summary) for `DragDropConfig`. 

-   We have introduced the `browserEvent` parameter for all drag-and-drop-related events in `DragDropConfig` allowing consumers to access the `DataTransfer` object. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.mdc.table.DragDropConfig).


<sub>Changed•Control•Info Only•1.125</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-06-13

</td>
</tr>
<tr>
<td valign="top">

1.125 

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

-   We have now improved the documentation for the `paste` and `beforePaste` events, and these entities are no longer experimental. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smarttable.SmartTable%23events/Paste) for the `paste` event, the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smarttable.SmartTable%23events/beforePaste) for the `beforePaste` event, and the [Sample](https://ui5.sap.com/#/entity/sap.ui.comp.smarttable.SmartTable/sample/sap.ui.comp.sample.smarttable.tablePasteEvent).

-   To support time stamps with a long format in the back end, we now convert time stamps with *equal to* conditions to *between* conditions in the *Define Conditions* dialog of *View Settings*.


<sub>Changed•Control•Info Only•1.125</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-06-13

</td>
</tr>
<tr>
<td valign="top">

1.125 

</td>
<td valign="top">

Deprecated 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**SAPUI5 Resource Model** 

</td>
<td valign="top">

**SAPUI5 Resource Model**

We have deprecated the `async` parameter of the `sap.ui.model.resource.ResourceModel` API. A warning is now logged if the `async` parameter is not set to `true`.

<sub>Deprecated•Feature•Info Only•1.125</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-06-13

</td>
</tr>
<tr>
<td valign="top">

1.125 

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

The maintenance of recursive hierarchies is no longer experimental; you can now use it in productive applications. For more information, see [Recursive Hierarchy](../04_Essentials/data-aggregation-and-recursive-hierarchy-7d91431.md#loio7d914317c0b64c23824bf932cc8a4ae1__section_RCH).

<sub>Changed•Feature•Info Only•1.125</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-06-13

</td>
</tr>
<tr>
<td valign="top">

1.125 

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

For better readability, we have refined the text of the error messages associated with OData type constraints. These messages appear when a smart field has both the `com.sap.vocabularies.UI.v1.TextArrangement` annotation and a `ValueList` annotation with fixed values \(`sap.m.ComboBox`\).

<sub>Changed•Control•Info Only•1.125</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-06-13

</td>
</tr>
<tr>
<td valign="top">

1.125 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**Icon Explorer** 

</td>
<td valign="top">

**Icon Explorer**

We have added the following new icons to the SAP Fiori Tools icon font:

-   business-application-studio
-   clone-from-git
-   business-accelerator

Find the icon that fits your needs using the [Icon Explorer](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/iconExplorer/webapp/index.html) tool. 

<sub>Changed•Feature•Info Only•1.125</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-06-13

</td>
</tr>
<tr>
<td valign="top">

1.125 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.Carousel`** 

</td>
<td valign="top">

**`sap.m.Carousel`**

You can now display the carousel’s page indicator over the content. To enable this behavior, we have created a new `sap.m.CarouselPageIndicatorPlacementType` enumeration, that replaces the old `sap.m.PlacementType`. The new enumeration has two additional values that you can use for this purpose - `OverContentTop` and `OverContentBottom`. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.Carousel) and the [Sample](https://ui5.sap.com/#/entity/sap.m.Carousel/sample/sap.m.sample.CarouselWithDisplayOptions).

<sub>Changed•Control•Info Only•1.125</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-06-13

</td>
</tr>
<tr>
<td valign="top">

1.125 

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

Using the new `noData` aggregation, you can now set the control to display an illustrated message when there is no data available. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.PlanningCalendar).

<sub>Changed•Control•Info Only•1.125</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-06-13

</td>
</tr>
<tr>
<td valign="top">

1.125 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.SinglePlanningCalendar`** 

</td>
<td valign="top">

**`sap.m.SinglePlanningCalendar`**

-   To enhance the accessibility of the control, we have enabled screen readers to announce information about the number of appointments hidden in the *More* button, along with the corresponding date of these appointments.
-   We have added a new `sourceLink` property to the `moreLinkPress` event. The new property enables developers to identify the exact *More* button that has been pressed. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.SinglePlanningCalendar).

<sub>Changed•Control•Info Only•1.125</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-06-13

</td>
</tr>
<tr>
<td valign="top">

1.125 

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

-   You can now set the card to display a custom image loaded from the extension, rather than the default illustrated message. For more information, see the [Custom Image Message](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/component/customImage) sample in the Card Explorer.
-   The rendered card now has a `data-help-id` attribute set on its root element. This `data-help-id` is useful when you want to connect the card with a help system for the end user, for example SAP Companion. For more information, see the [Help ID](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/configuration/helpId) section in the Card Explorer.

<sub>Changed•Control•Info Only•1.125</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-06-13

</td>
</tr>
</table>

