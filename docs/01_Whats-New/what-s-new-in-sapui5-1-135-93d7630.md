<!-- loio93d76303615a428fb9e92e8ef1878a83 -->

<link rel="stylesheet" type="text/css" href="../css/sap-icons.css"/>

# What's New in SAPUI5 1.135

With this release SAPUI5 is upgraded from version 1.134 to 1.135.

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

1.135 

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

<sub>Deprecated•Feature•Info Only•1.135</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-04-17

</td>
</tr>
<tr>
<td valign="top">

1.135 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.layout.form*` ** 

</td>
<td valign="top">

**`sap.ui.layout.form*`**

To improve the accessibility of screen reader announcements, we have adapted the rendering of the `sap.ui.layout.form*` elements in forms with read-only content for the `columnLayout`. To enable this, the form is now rendered as a description list \(`<dl>` tag used\).

<sub>Changed•Control•Info Only•1.135</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-04-17

</td>
</tr>
<tr>
<td valign="top">

1.135 

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

-   You can now use an extension point to add custom content to the header of the list report. For more information, see [Extension Point for List Report Header](../06_SAP_Fiori_Elements/extension-point-for-list-report-header-1ab83e6.md).

-   We've enhanced the performance of the mass edit dialog, reducing the opening time for large selections. For more information, see [Enabling Editing Using a Dialog \(Mass Edit\)](../06_SAP_Fiori_Elements/enabling-editing-using-a-dialog-mass-edit-965ef5b.md).

-   We now call the `onBeforeNavigation` extension point when an end user clicks *Apply* or *Close* in draft mode. For more information, see [Example: Replacing Standard Navigation in a Responsive Table on the Object Page](../06_SAP_Fiori_Elements/example-replacing-standard-navigation-in-a-responsive-table-on-the-object-page-b20dc7a.md).

-   Forms and tables in list reports and object pages now support the `Common.Masked` annotation. For more information, see [Different Representations of a Field](../06_SAP_Fiori_Elements/different-representations-of-a-field-c18ada4.md).

-   You can define the same table properties either in the `manifest.json` file or in the `Table` building block.

-   You can now define the same chart properties either in the `manifest.json` file or in the `Chart` building block. For more information, see [Configuring Charts](../06_SAP_Fiori_Elements/configuring-charts-653ed0f.md) and [The Chart Building Block](../06_SAP_Fiori_Elements/the-chart-building-block-52d065a.md).

-   The *Editing Status* field in the list report now uses a select control instead of a combo box. As a result, when *All* is selected, the *Adapt Filters* button no longer shows a count, but selecting other options updates the filter count.

-   App developers can now enable the optimistic batch with a controller extension by setting `disableRequestCache` to `False` in the `manifest.json` file. For more information, see [Caching the Last Executed Request](../06_SAP_Fiori_Elements/caching-the-last-executed-request-4215eca.md).
-   We now support file uploads as action parameters using the `Edm.Stream` properties. For more information, see [Enabling Stream Support](../06_SAP_Fiori_Elements/enabling-stream-support-b236d32.md).
-   You can now use the `watchProperty` method of the `ExtensionAPI` to trigger reactions when selected properties are set in the back end. For more information, see [Extension Point for Reacting When Properties Are Updated in the Back End](../06_SAP_Fiori_Elements/extension-point-for-reacting-when-properties-are-updated-in-the-back-end-ee31761.md).

<sub>Changed•SAP Fiori Elements•Info Only•1.135</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-04-17

</td>
</tr>
<tr>
<td valign="top">

1.135 

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

Up to now, the `p13n` data and the variants did not save the information about whether details are displayed or hidden in a table \(*Show More per Row*/*Show Less per Row* buttons\). The state of this data is now persisted for responsive tables when the user presses the *Show More per Row* or the *Show Less per Row* button, when a new column is added or a variant is changed, or via `sap.ui.comp.state.UIState`. Depending on what happens in the scenario, the state gets updated or stays the same, for example, for a new column that is hidden in the popin, `showDetails` is set to `true` and a change is created or, if it isn't hidden, the state stays the same. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.ui.comp.smarttable.SmartTable/sample/sap.ui.comp.sample.smarttable.mtableShowDetails).

<sub>Changed•Control•Info Only•1.135</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-04-17

</td>
</tr>
<tr>
<td valign="top">

1.135 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**Enhanced Module Name Syntax for Factory APIs** 

</td>
<td valign="top">

**Enhanced Module Name Syntax for Factory APIs**

You can now use module name syntax when creating typed views, controllers, or JS fragments via a factory API. This removes the need for strict filename suffixes like `.view.js`, `.controller.js`, or `.fragment.js`, offering you more flexibility in naming and organizing your entities. For an example, see [Controller](../04_Essentials/controller-121b8e6.md).

<sub>Changed•Feature•Info Only•1.135</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-04-17

</td>
</tr>
<tr>
<td valign="top">

1.135 

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

-   We now support read-only bindings for Geometry types. This includes the possibility to address elements of collections via their indexes in read-only bindings.

-   We now evaluate [`com.sap.vocabularies.Common.v1.AddressViaNavigationPath`](https://github.com/SAP/odata-vocabularies/blob/main/vocabularies/Common.md) for PATCH and DELETE requests.

-   When reloading a list binding's data, the selection state is now validated if the `$$clearSelectionOnFilter` list binding parameter is set and if `$$aggregation` is not set. The selection state of contexts no longer matching the filter is reset.

-   We have introduced the experimental `copy` parameter to `sap.ui.model.odata.v4.Context#move`. It must not be set to `true` for productive applications yet.For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context%23methods/move).

-   We have provided the `sap.ui.model.odata.v4.ODataListBinding#getSelectionCount` method to return the number of selected items. The selection count may be bound by using the `$selectionCount` parameter in a similar way as for binding the `$count`. For more information, see [Binding Collection Inline Count](../04_Essentials/binding-collection-inline-count-77d2310.md).


<sub>Changed•Feature•Info Only•1.135</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-04-17

</td>
</tr>
<tr>
<td valign="top">

1.135 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.Input, sap.m.MultiInput`** 

</td>
<td valign="top">

**`sap.m.Input, sap.m.MultiInput`**

Speech output for table suggestions in `sap.m.Input` and `sap.m.MultiInput` now includes column headers, not just cell values. This enhancement improves accessibility for screen-reader users.

<sub>Changed•Control•Info Only•1.135</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-04-17

</td>
</tr>
<tr>
<td valign="top">

1.135 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.comp.smartfield.SmartField, sap.ui.comp.smartfilterbar.SmartFilterBar, sap.ui.comp.smartform.SmartForm`** 

</td>
<td valign="top">

**`sap.ui.comp.smartfield.SmartField, sap.ui.comp.smartfilterbar.SmartFilterBar, sap.ui.comp.smartform.SmartForm`**

`TextArrangement` is now customizable at the EDM property level. Users can change text arrangements for fields throughout their applications from a single location. Any modifications made to the field text arrangement in *Adapt UI* mode apply across the application, ensuring consistent display and editing.

<sub>Changed•Control•Info Only•1.135</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-04-17

</td>
</tr>
<tr>
<td valign="top">

1.135 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.richtextEditor.RichTextEditor`** 

</td>
<td valign="top">

**`sap.ui.richtextEditor.RichTextEditor`**

We've implemented a footer in the `RichTextEditor` control. This change enhances the editor's functionality and layout, making it more adaptable for future developments.

<sub>Changed•Control•Info Only•1.135</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-04-17

</td>
</tr>
<tr>
<td valign="top">

1.135 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.suite.ui.commons.networkgraph`** 

</td>
<td valign="top">

**`sap.suite.ui.commons.networkgraph`**

We've made the following updates to the network graph control:

-   **Tooltips for Nodes**

    We've now introduced a feature to display tooltips for nodes within the network graph. To configure a tooltip, you can pass the `tooltip` parameter in the node definition, either as a fixed value or as a property. The tooltip is then displayed when you hover over the corresponding node.

    For more information, see [API Reference](https://ui5.sap.com/#/api/sap.suite.ui.commons.networkgraph.Graph) and the [Sample](https://ui5.sap.com/#/entity/sap.suite.ui.commons.networkgraph.Graph/sample/sap.suite.ui.commons.sample.NetworkGraph).

-   **`nodeTitleBackground` Property**

    We've now added the `nodeTitleBackground` property to the network graph node. The property provides an appropriate background with a 0.9 opacity for circular node titles. The change significantly enhances the readability of node titles.

    For more information, see [API Reference](https://ui5.sap.com/#/api/sap.suite.ui.commons.networkgraph.Graph) and the [Sample](https://ui5.sap.com/#/entity/sap.suite.ui.commons.networkgraph.Graph/sample/sap.suite.ui.commons.sample.NetworkGraphStaticForce).


<sub>Changed•Control•Info Only•1.135</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-04-17

</td>
</tr>
</table>

