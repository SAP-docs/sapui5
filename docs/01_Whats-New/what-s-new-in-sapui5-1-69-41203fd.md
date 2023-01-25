<!-- loio41203fd3272b479d8c665357e3b21a43 -->

# What's New in SAPUI5 1.69

With this release SAPUI5 is upgraded from version 1.68 to 1.69.



<a name="loio41203fd3272b479d8c665357e3b21a43__section_yxw_pxt_zcb"/>

## New Features


<table>
<tr>
<td valign="top">

**New Themes for SAP Fiori 3 User Experience**

The High Contrast White \(HCW\) and High Contrast Black \(HCB\) themes \(`sap_fiori_3_hcw`/`sap_fiori_3_hcb`\) are now delivered with all SAP Fiori-related libraries. They offer a better visual experience for people with visual impairments.



</td>
</tr>
<tr>
<td valign="top">

**Require Modules in XML Views and Fragments**

Modules can now be required in XML views and fragments and assigned to aliases which can be used as variables in properties, event handlers, and bindings. Such a declarative approach can help to avoid global variables and allows to reuse certain helper classes without a detour via Controller code.

The new `require` attribute with namespace URI `sap.ui.core` can be used to define the module aliases and paths. This attribute can be used at every element of an XML view or fragment. You can specify a list of required modules as Unified Resource Names, similar to `sap.ui.require` and assign aliases to them using a JSON-like syntax.

For details and examples, see [Require Modules in XML View and Fragment](../04_Essentials/require-modules-in-xml-view-and-fragment-b11d853.md).



</td>
</tr>
</table>



<a name="loio41203fd3272b479d8c665357e3b21a43__section_qwl_pb5_zcb"/>

## Improved Features


<table>
<tr>
<td valign="top">

**Rule Builder: Migrate projects from expression language 1.0 to expression language 2.0**

Migrate your project from expression language 1.0 \(Rule expression language\) to expression language 2.0 \(DMN SFEEL\) using Business Rules API.

For more information, see [Rule Builder Control](../03_Get-Started/rule-builder-control-67fcb30.md).



</td>
</tr>
<tr>
<td valign="top">

**Rule Builder: Vocabulary Rules**

In expression language 2.0, you can include rules in a rule condition to consume the result that the rules return. For more information, see [Rule Builder Control](../03_Get-Started/rule-builder-control-67fcb30.md).



</td>
</tr>
<tr>
<td valign="top">

**SAPUI5 OData V4 Model**

The new version of the SAPUI5 OData V4 model introduces the following features:

-   The original of a bound message is available in the message model as `technicalDetails.originalMessage`. This can be used to transport additional information.

-   When calling `sap.ui.model.odata.v4.Context.requestSideEffects`, you can now specify a group ID. You can use this to read side-effects that load slowly in a separate request. Note that you have to ensure in the application that no pending changes for the affected properties exist.

-   You can now use the Partner attribute of navigation properties to automatically shorten paths by removing Partner :n and :1 navigation properties that are adjacent in the path. This allows to access already available data in parent bindings.

-   The `caseSensitive` flag is now supported for `sap.ui.model.Filter`. Note that if case-insensitive filtering is requested, the OData function `tolower` is used for all operands.

-   To asynchronously access data in controller code through bindings, you can now use the `sap.ui.model.odata.v4.ODataContextBinding.requestObject` and `sap.ui.model.odata.v4.ODataPropertyBinding.requestValue` functions.


> ### Restriction:  
> Due to the limited feature scope of this version of the SAPUI5 OData V4 model, check that all required features are in place before developing freestyle and Fiori elements applications. Double check the detailed documentation of the features, as certain parts of a feature may be missing. While we aim to be compatible with existing controls, some controls might not work due to small incompatibilities compared to `sap.ui.model.odata.(v2.)ODataModel`, or due to missing features in the model \(such as tree binding\). This also applies to smart controls \(`sap.ui.comp` library\) that do not support the SAPUI5 OData V4 model, as well as controls such as `TreeTable` and `AnalyticalTable`, which are not supported together with the SAPUI5 OData V4 model. The interface for applications has been changed for easier and more efficient use of the model. For a summary of these changes, see [Changes Compared to OData V2 Model](../04_Essentials/changes-compared-to-odata-v2-model-abd4d7c.md).

For more information, see [OData V4 Model](../04_Essentials/odata-v4-model-5de13cf.md), the [API Reference](https://ui5.sap.com/#/api/sap.ui.model.odata.v4), and the [Samples](https://ui5.sap.com/#/entity/sap.ui.model.odata.v4.ODataModel).



</td>
</tr>
</table>



<a name="loio41203fd3272b479d8c665357e3b21a43__section_rqn_wd5_zcb"/>

## Improved Controls


<table>
<tr>
<td valign="top">

**`sap.f.Avatar`**

-   You can now set background color for the `Avatar` control through the new `backgroundColor` property. There are 10 predefined colors and an option to set a random one.

-   You can now set a border to be displayed for the `Avatar` by setting the new `showBorder` boolean property to `true`.


For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.f.Avatar) and the [Sample](https://ui5.sap.com/#/entity/sap.f.Avatar/sample/sap.f.sample.Avatar).



</td>
</tr>
<tr>
<td valign="top">

**`sap.m.Breadcrumbs`**

You can now choose different separator styles to be displayed between the `Breadcrumbs` elements. You can set them through the new `separatorStyle` property.For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.Breadcrumbs) and the [Sample](https://ui5.sap.com/#/entity/sap.m.Breadcrumbs/sample/sap.m.sample.Breadcrumbs).



</td>
</tr>
<tr>
<td valign="top">

**`sap.m.ListBase`, `sap.m.ListItemBase`**

These controls now support a range selection with key combinations if the `MultiSelect` mode is set. For more information, see the *API Reference* for [`sap.m.ListBase`](https://ui5.sap.com/#/api/sap.m.ListBase) and [`sap.m.ListItemBase`](https://ui5.sap.com/#/api/sap.m.ListItemBase).



</td>
</tr>
<tr>
<td valign="top">

**`sap.m.NavContainer`**

We have improved the fade and slide animations when navigating forward and backward in `sap.m.NavContainer`.For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.m.NavContainer/sample/sap.m.sample.NavContainer).



</td>
</tr>
<tr>
<td valign="top">

**`sap.m.QuickViewPage`**

We have introduced a new `fallbackIcon` property. It allows you to define an icon that will be displayed in case of loading errors of the `icon`. The `fallbackIcon` should be part of the SAP icon font. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.QuickViewPage) and the [Sample](https://ui5.sap.com/#/entity/sap.m.QuickView/sample/sap.m.sample.QuickViewFallbackIcon).



</td>
</tr>
<tr>
<td valign="top">

**`sap.m.SearchField`**

We have made some changes in the suggestions dialog for the `SearchField` control on mobile devices. The `Cancel` button is now moved to the top, next to the search field, and the button in the footer is changed from `Cancel` to `OK`. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.SearchField) and the [Sample](https://ui5.sap.com/#/entity/sap.m.SearchField/sample/sap.m.sample.SearchFieldSuggestions).



</td>
</tr>
<tr>
<td valign="top">

**`sap.m.Select`**

The items in the select list now have a maximum width. If the text of the items is longer than the maximum width, it either truncates or wraps on multiple lines depending on the new `wrapItemsText` property.For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.Select) and the [Samples](https://ui5.sap.com/#/entity/sap.m.Select).



</td>
</tr>
<tr>
<td valign="top">

**`sap.m.SinglePlanningCalendar`**

A new *Month* view is now available for the control. It displays a calendar month that always starts from the first week of the month. To set it up, use the new `sap.m.SinglePlanningCalendarMonthView` class in the `views` aggregation of the `SinglePlanningCalendar` control.For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.SinglePlanningCalendar) and the [Sample](https://ui5.sap.com/#/entity/sap.m.SinglePlanningCalendar/sample/sap.m.sample.SinglePlanningCalendar).



</td>
</tr>
<tr>
<td valign="top">

**`sap.ui.comp.smartfilterbar.SmartFilterBar`**

Values in single input fields are now validated against the keys available in the related value list. If no match can be found, the input control gets an error state, and filtering in `SmartFilterBar` is no longer possible.



</td>
</tr>
<tr>
<td valign="top">

<code><b>sap.ui.comp.smarttable.SmartTable</b></code>

The sorting for multiple currencies has been improved . For more information, see [Smart Table](../10_More_About_Controls/smart-table-bed8274.md), the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smarttable.SmartTable/annotations/ApplyMultiUnitBehaviorForSortingAndFiltering), and the [Sample](https://ui5.sap.com/#/entity/sap.ui.comp.smarttable.SmartTable/sample/sap.ui.comp.sample.smarttable.smartMTableWithCriticality).



</td>
</tr>
<tr>
<td valign="top">

**`sap.ui.table.plugins.MultiSelectionPlugin`**

The plugin for the `sap.ui.table.AnalyticalTable`, the `sap.ui.table.Table`, and the `sap.ui.table.TreeTable` tables now offers various selection modes for applications \(new `selectionMode` property\), for example, the selection of single or multiple rows. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.table.plugins.MultiSelectionPlugin) and the [Sample](https://ui5.sap.com/#/entity/sap.ui.table.Table/sample/sap.ui.table.sample.MultiSelectionPlugin).



</td>
</tr>
<tr>
<td valign="top">

**`sap.ui.unified.Calendar`**

We have implemented year range in the `Calendar` control to help the user navigate quickly to a year that is outside the visible range. When the year button is selected, there's an additional year range button that enables the interaction.For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.ui.unified.Calendar).



</td>
</tr>
</table>



<a name="loio41203fd3272b479d8c665357e3b21a43__section_g3r_bf5_zcb"/>

## SAP Fiori Elements


<table>
<tr>
<td valign="top">

**List Report and Object Page**

-   Enhanced message handling: If a `delete` event is successful, the system displays a message from the back-end in the application. If there is no message from the back-end system, an i18n message is displayed as a fallback.


The object page has these new features:

-   The `condensedTableLayout` for `sap.ui.table` is now also available for object page tables with multiple sections in tab mode. For more information, see [Using the Condensed Table Layout](../06_SAP_Fiori_Elements/using-the-condensed-table-layout-f3cc057.md).
-   In sections that just contain a table, the available space is now used completely. For more information, see [Defining and Adapting Sections](../06_SAP_Fiori_Elements/defining-and-adapting-sections-facfea0.md).


**Overview Page**

The overview page has these new features or enhancements:

-   You can now add cards using new data sources in SAPUI5 Visual Editor. For more information, see [Extending Delivered Apps Using Adaptation Extensions](../06_SAP_Fiori_Elements/extending-delivered-apps-using-adaptation-extensions-52fc48b.md) and [Customize Overview Page Cards](https://help.sap.com/viewer/825270ffffe74d9f988a0f0066ad59f0/CF/en-US/6d11445e3cb2428ead1b0743e36aa275.html).

**Analytical List Page**

-   You can now use the `NumberOfFractionalDigits` property to determine the number of fraction digits in the Visual filter and Key Performance Indicators tag. For more information, see [Visual Filter Setup](../06_SAP_Fiori_Elements/visual-filters-1714720.md) and [Creating Key Performance Indicator Tags](../06_SAP_Fiori_Elements/creating-key-performance-indicator-tags-d80a360.md).

-   You can now enable the multi-select feature that limits the number of lines in grid tables and analytical tables using the new manifest settings. For more information, see [Descriptor Configuration](../06_SAP_Fiori_Elements/descriptor-configuration-for-the-analytical-list-page-2a9df06.md).




</td>
</tr>
</table>

**Related Information**  


[What's New in SAPUI5 1.107](what-s-new-in-sapui5-1-107-b88b40e.md "With this release SAPUI5 is upgraded from version 1.106 to 1.107.")

[What's New in SAPUI5 1.106](what-s-new-in-sapui5-1-106-c70bb90.md "With this release SAPUI5 is upgraded from version 1.105 to 1.106.")

[What's New in SAPUI5 1.105](what-s-new-in-sapui5-1-105-5567dcc.md "With this release SAPUI5 is upgraded from version 1.104 to 1.105.")

[What's New in SAPUI5 1.104](what-s-new-in-sapui5-1-104-f01ebd4.md "With this release SAPUI5 is upgraded from version 1.103 to 1.104.")

[What's New in SAPUI5 1.103](what-s-new-in-sapui5-1-103-7534ae8.md "With this release SAPUI5 is upgraded from version 1.102 to 1.103.")

[What's New in SAPUI5 1.102](what-s-new-in-sapui5-1-102-b530db3.md "With this release SAPUI5 is upgraded from version 1.101 to 1.102.")

[What's New in SAPUI5 1.101](what-s-new-in-sapui5-1-101-5a18410.md "With this release SAPUI5 is upgraded from version 1.100 to 1.101.")

[What's New in SAPUI5 1.100](what-s-new-in-sapui5-1-100-5deb78f.md "With this release SAPUI5 is upgraded from version 1.99 to 1.100.")

[What's New in SAPUI5 1.99](what-s-new-in-sapui5-1-99-5e35c25.md "With this release SAPUI5 is upgraded from version 1.98 to 1.99.")

[What's New in SAPUI5 1.98](what-s-new-in-sapui5-1-98-7aacb4e.md "With this release SAPUI5 is upgraded from version 1.97 to 1.98.")

[What's New in SAPUI5 1.97](what-s-new-in-sapui5-1-97-f21858f.md "With this release SAPUI5 is upgraded from version 1.96 to 1.97.")

[What's New in SAPUI5 1.96](what-s-new-in-sapui5-1-96-b39a11b.md "With this release SAPUI5 is upgraded from version 1.95 to 1.96.")

[What's New in SAPUI5 1.95](what-s-new-in-sapui5-1-95-1b09465.md "With this release SAPUI5 is upgraded from version 1.94 to 1.95.")

[What's New in SAPUI5 1.94](what-s-new-in-sapui5-1-94-2d6ffdd.md "With this release SAPUI5 is upgraded from version 1.93 to 1.94.")

[What's New in SAPUI5 1.93](what-s-new-in-sapui5-1-93-e9c8356.md "With this release SAPUI5 is upgraded from version 1.92 to 1.93.")

[What's New in SAPUI5 1.92](what-s-new-in-sapui5-1-92-1492551.md "With this release SAPUI5 is upgraded from version 1.91 to 1.92.")

[What's New in SAPUI5 1.91](what-s-new-in-sapui5-1-91-75777da.md "With this release SAPUI5 is upgraded from version 1.90 to 1.91.")

[What's New in SAPUI5 1.90](what-s-new-in-sapui5-1-90-b475202.md "With this release SAPUI5 is upgraded from version 1.89 to 1.90.")

[What's New in SAPUI5 1.89](what-s-new-in-sapui5-1-89-0805036.md "With this release SAPUI5 is upgraded from version 1.88 to 1.89.")

[What's New in SAPUI5 1.88](what-s-new-in-sapui5-1-88-bda141b.md "With this release SAPUI5 is upgraded from version 1.87 to 1.88.")

[What's New in SAPUI5 1.87](what-s-new-in-sapui5-1-87-e315108.md "With this release SAPUI5 is upgraded from version 1.86 to 1.87.")

[What's New in SAPUI5 1.86](what-s-new-in-sapui5-1-86-067e2fb.md "With this release SAPUI5 is upgraded from version 1.85 to 1.86.")

[What's New in SAPUI5 1.85](what-s-new-in-sapui5-1-85-eeb5bd9.md "With this release SAPUI5 is upgraded from version 1.84 to 1.85.")

[What's New in SAPUI5 1.84](what-s-new-in-sapui5-1-84-ccf76b7.md "With this release SAPUI5 is upgraded from version 1.82 to 1.84.")

[What's New in SAPUI5 1.82](what-s-new-in-sapui5-1-82-f081cf0.md "With this release SAPUI5 is upgraded from version 1.81 to 1.82.")

[What's New in SAPUI5 1.81](what-s-new-in-sapui5-1-81-f71563c.md "With this release SAPUI5 is upgraded from version 1.80 to 1.81.")

[What's New in SAPUI5 1.80](what-s-new-in-sapui5-1-80-3294c68.md "With this release SAPUI5 is upgraded from version 1.79 to 1.80.")

[What's New in SAPUI5 1.79](what-s-new-in-sapui5-1-79-edf8e35.md "With this release SAPUI5 is upgraded from version 1.78 to 1.79.")

[What's New in SAPUI5 1.78](what-s-new-in-sapui5-1-78-d176be3.md "With this release SAPUI5 is upgraded from version 1.77 to 1.78.")

[What's New in SAPUI5 1.77](what-s-new-in-sapui5-1-77-2ec6b6b.md "With this release SAPUI5 is upgraded from version 1.76 to 1.77.")

[What's New in SAPUI5 1.76](what-s-new-in-sapui5-1-76-b9b0a3f.md "With this release SAPUI5 is upgraded from version 1.75 to 1.76.")

[What's New in SAPUI5 1.75](what-s-new-in-sapui5-1-75-dc3d3ce.md "With this release SAPUI5 is upgraded from version 1.74 to 1.75.")

[What's New in SAPUI5 1.74](what-s-new-in-sapui5-1-74-21fc6cb.md "With this release SAPUI5 is upgraded from version 1.73 to 1.74.")

[What's New in SAPUI5 1.73](what-s-new-in-sapui5-1-73-7b82664.md "With this release SAPUI5 is upgraded from version 1.72 to 1.73.")

[What's New in SAPUI5 1.72](what-s-new-in-sapui5-1-72-25e5326.md "With this release SAPUI5 is upgraded from version 1.71 to 1.72.")

[What's New in SAPUI5 1.71](what-s-new-in-sapui5-1-71-609fd01.md "With this release SAPUI5 is upgraded from version 1.70 to 1.71.")

[What's New in SAPUI5 1.70](what-s-new-in-sapui5-1-70-4e89fee.md "With this release SAPUI5 is upgraded from version 1.69 to 1.70.")

[What's New in SAPUI5 1.68](what-s-new-in-sapui5-1-68-5531aef.md "With this release SAPUI5 is upgraded from version 1.67 to 1.68.")

[What's New in SAPUI5 1.67](what-s-new-in-sapui5-1-67-0968958.md "With this release SAPUI5 is upgraded from version 1.66 to 1.67.")

[What's New in SAPUI5 1.66](what-s-new-in-sapui5-1-66-ebe7fda.md "With this release SAPUI5 is upgraded from version 1.65 to 1.66.")

[What's New in SAPUI5 1.65](what-s-new-in-sapui5-1-65-9d2b189.md "With this release SAPUI5 is upgraded from version 1.64 to 1.65.")

[What's New in SAPUI5 1.64](what-s-new-in-sapui5-1-64-1975e30.md "With this release SAPUI5 is upgraded from version 1.63 to 1.64.")

[What's New in SAPUI5 1.63](what-s-new-in-sapui5-1-63-77e1dcc.md "With this release SAPUI5 is upgraded from version 1.62 to 1.63.")

[What's New in SAPUI5 1.62](what-s-new-in-sapui5-1-62-27eea38.md "With this release SAPUI5 is upgraded from version 1.61 to 1.62.")

[What's New in SAPUI5 1.61](what-s-new-in-sapui5-1-61-de4d50b.md "With this release SAPUI5 is upgraded from version 1.60 to 1.61.")

[What's New in SAPUI5 1.60](what-s-new-in-sapui5-1-60-2a70354.md "With this release SAPUI5 is upgraded from version 1.58 to 1.60.")

[What's New in SAPUI5 1.58](what-s-new-in-sapui5-1-58-b28edde.md "With this release, SAPUI5 is upgraded from version 1.56 to 1.58.")

[What's New in SAPUI5 1.56](what-s-new-in-sapui5-1-56-53b4b5e.md "With this release, SAPUI5 is upgraded from version 1.54 to 1.56.")

[What's New in SAPUI5 1.54](what-s-new-in-sapui5-1-54-f29023e.md "With this release, SAPUI5 is upgraded from version 1.52 to 1.54.")

[What's New in SAPUI5 1.52](what-s-new-in-sapui5-1-52-a09dd79.md "With this release, SAPUI5 is upgraded from version 1.50 to 1.52.")

[What's New in SAPUI5 1.50](what-s-new-in-sapui5-1-50-a844984.md "With this release, SAPUI5 is upgraded from version 1.48 to 1.50.")

[What's New in SAPUI5 1.48](what-s-new-in-sapui5-1-48-2818f80.md "With this release, SAPUI5 is upgraded from version 1.46 to 1.48.")

[What's New in SAPUI5 1.46](what-s-new-in-sapui5-1-46-4cf0986.md "With this release, SAPUI5 is upgraded from version 1.44 to 1.46.")

[What's New in SAPUI5 1.44](what-s-new-in-sapui5-1-44-05ce1dc.md "With this release, SAPUI5 is upgraded from version 1.42 to 1.44.")

[What's New in SAPUI5 1.42](what-s-new-in-sapui5-1-42-4768f1a.md "With this release, SAPUI5 is upgraded from version 1.40 to 1.42.")

[What's New in SAPUI5 1.40](what-s-new-in-sapui5-1-40-e659bd2.md "With this release, SAPUI5 is upgraded from version 1.38 to 1.40.")

[What's New in SAPUI5 1.38](what-s-new-in-sapui5-1-38-6a875f9.md#loio6a875f998994489483e8085705347d72 "With this release, SAPUI5 is upgraded from version 1.36 to 1.38.")

