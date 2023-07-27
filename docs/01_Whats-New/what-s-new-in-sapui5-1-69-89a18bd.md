<!-- loio89a18bd5d8574cbd8dd0a2da7023f597 -->

# What's New in SAPUI5 1.69

With this release SAPUI5 is upgraded from version 1.68 to 1.69.

** **


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

 1.69 



</td>
<td valign="top">

 New 



</td>
<td valign="top">

 Feature 



</td>
<td valign="top">

 **New Themes for SAP Fiori 3 User Experience** 



</td>
<td valign="top">

**New Themes for SAP Fiori 3 User Experience**

The High Contrast White \(HCW\) and High Contrast Black \(HCB\) themes \(`sap_fiori_3_hcw`/`sap_fiori_3_hcb`\) are now delivered with all SAP Fiori-related libraries. They offer a better visual experience for people with visual impairments.

<sub>New•Feature•Info Only•1.69</sub>



</td>
<td valign="top">

Info Only



</td>
<td valign="top">

2019-08-15



</td>
</tr>
<tr>
<td valign="top">

 1.69 



</td>
<td valign="top">

 New 



</td>
<td valign="top">

 Feature 



</td>
<td valign="top">

 **Require Modules in XML Views and Fragments** 



</td>
<td valign="top">

**Require Modules in XML Views and Fragments**

Modules can now be required in XML views and fragments and assigned to aliases which can be used as variables in properties, event handlers, and bindings. Such a declarative approach can help to avoid global variables and allows to reuse certain helper classes without a detour via Controller code.

The new `require` attribute with namespace URI `sap.ui.core` can be used to define the module aliases and paths. This attribute can be used at every element of an XML view or fragment. You can specify a list of required modules as Unified Resource Names, similar to `sap.ui.require` and assign aliases to them using a JSON-like syntax.

For details and examples, see [Require Modules in XML View and Fragment](../04_Essentials/require-modules-in-xml-view-and-fragment-b11d853.md).

<sub>New•Feature•Info Only•1.69</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2019-08-15



</td>
</tr>
<tr>
<td valign="top">

 1.69 



</td>
<td valign="top">

 Changed 



</td>
<td valign="top">

 Feature 



</td>
<td valign="top">

 **Rule Builder: Migrate projects from expression language 1.0 to expression language 2.0** 



</td>
<td valign="top">

**Rule Builder: Migrate projects from expression language 1.0 to expression language 2.0**

Migrate your project from expression language 1.0 \(Rule expression language\) to expression language 2.0 \(DMN SFEEL\) using Business Rules API.

For more information, see [Rule Builder Control Tutorial](../03_Get-Started/rule-builder-control-tutorial-67fcb30.md).

<sub>Changed•Feature•Info Only•1.69</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2019-08-15



</td>
</tr>
<tr>
<td valign="top">

 1.69 



</td>
<td valign="top">

 Changed 



</td>
<td valign="top">

 Feature 



</td>
<td valign="top">

 **Rule Builder: Vocabulary Rules** 



</td>
<td valign="top">

**Rule Builder: Vocabulary Rules**

In expression language 2.0, you can include rules in a rule condition to consume the result that the rules return. For more information, see [Rule Builder Control Tutorial](../03_Get-Started/rule-builder-control-tutorial-67fcb30.md).

<sub>Changed•Feature•Info Only•1.69</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2019-08-15



</td>
</tr>
<tr>
<td valign="top">

 1.69 



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

-   The original of a bound message is available in the message model as `technicalDetails.originalMessage`. This can be used to transport additional information.

-   When calling `sap.ui.model.odata.v4.Context.requestSideEffects`, you can now specify a group ID. You can use this to read side-effects that load slowly in a separate request. Note that you have to ensure in the application that no pending changes for the affected properties exist.

-   You can now use the Partner attribute of navigation properties to automatically shorten paths by removing Partner :n and :1 navigation properties that are adjacent in the path. This allows to access already available data in parent bindings.

-   The `caseSensitive` flag is now supported for `sap.ui.model.Filter`. Note that if case-insensitive filtering is requested, the OData function `tolower` is used for all operands.

-   To asynchronously access data in controller code through bindings, you can now use the `sap.ui.model.odata.v4.ODataContextBinding.requestObject` and `sap.ui.model.odata.v4.ODataPropertyBinding.requestValue` functions.


> ### Restriction:  
> Due to the limited feature scope of this version of the SAPUI5 OData V4 model, check that all required features are in place before developing freestyle and Fiori elements applications. Double check the detailed documentation of the features, as certain parts of a feature may be missing. While we aim to be compatible with existing controls, some controls might not work due to small incompatibilities compared to `sap.ui.model.odata.(v2.)ODataModel`, or due to missing features in the model \(such as tree binding\). This also applies to smart controls \(`sap.ui.comp` library\) that do not support the SAPUI5 OData V4 model, as well as controls such as `TreeTable` and `AnalyticalTable`, which are not supported together with the SAPUI5 OData V4 model. The interface for applications has been changed for easier and more efficient use of the model. For a summary of these changes, see [Changes Compared to OData V2 Model](../04_Essentials/changes-compared-to-odata-v2-model-abd4d7c.md).

For more information, see [OData V4 Model](../04_Essentials/odata-v4-model-5de13cf.md), the [API Reference](https://ui5.sap.com/#/api/sap.ui.model.odata.v4), and the [Samples](https://ui5.sap.com/#/entity/sap.ui.model.odata.v4.ODataModel).

<sub>Changed•Feature•Info Only•1.69</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2019-08-15



</td>
</tr>
<tr>
<td valign="top">

 1.69 



</td>
<td valign="top">

 Changed 



</td>
<td valign="top">

 Control 



</td>
<td valign="top">

 **`sap.f.Avatar`** 



</td>
<td valign="top">

**`sap.f.Avatar`**

-   You can now set background color for the `Avatar` control through the new `backgroundColor` property. There are 10 predefined colors and an option to set a random one.

-   You can now set a border to be displayed for the `Avatar` by setting the new `showBorder` boolean property to `true`.


For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.f.Avatar) and the [Sample](https://ui5.sap.com/#/entity/sap.f.Avatar/sample/sap.f.sample.Avatar).

<sub>Changed•Control•Info Only•1.69</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2019-08-15



</td>
</tr>
<tr>
<td valign="top">

 1.69 



</td>
<td valign="top">

 Changed 



</td>
<td valign="top">

 Control 



</td>
<td valign="top">

 **`sap.m.Breadcrumbs`** 



</td>
<td valign="top">

**`sap.m.Breadcrumbs`**

You can now choose different separator styles to be displayed between the `Breadcrumbs` elements. You can set them through the new `separatorStyle` property.For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.Breadcrumbs) and the [Sample](https://ui5.sap.com/#/entity/sap.m.Breadcrumbs/sample/sap.m.sample.Breadcrumbs).

<sub>Changed•Control•Info Only•1.69</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2019-08-15



</td>
</tr>
<tr>
<td valign="top">

 1.69 



</td>
<td valign="top">

 Changed 



</td>
<td valign="top">

 Control 



</td>
<td valign="top">

 **`sap.m.ListBase` / `sap.m.ListItemBase`** 



</td>
<td valign="top">

**`sap.m.ListBase` / `sap.m.ListItemBase`**

These controls now support a range selection with key combinations if the `MultiSelect` mode is set. For more information, see the *API Reference* for [`sap.m.ListBase`](https://ui5.sap.com/#/api/sap.m.ListBase) and [`sap.m.ListItemBase`](https://ui5.sap.com/#/api/sap.m.ListItemBase).

<sub>Changed•Control•Info Only•1.69</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2019-08-15



</td>
</tr>
<tr>
<td valign="top">

 1.69 



</td>
<td valign="top">

 Changed 



</td>
<td valign="top">

 Control 



</td>
<td valign="top">

 **`sap.m.NavContainer`** 



</td>
<td valign="top">

**`sap.m.NavContainer`**

We have improved the fade and slide animations when navigating forward and backward in `sap.m.NavContainer`.For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.m.NavContainer/sample/sap.m.sample.NavContainer).

<sub>Changed•Control•Info Only•1.69</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2019-08-15



</td>
</tr>
<tr>
<td valign="top">

 1.69 



</td>
<td valign="top">

 Changed 



</td>
<td valign="top">

 Control 



</td>
<td valign="top">

 **`sap.m.QuickViewPage`** 



</td>
<td valign="top">

**`sap.m.QuickViewPage`**

We have introduced a new `fallbackIcon` property. It allows you to define an icon that will be displayed in case of loading errors of the `icon`. The `fallbackIcon` should be part of the SAP icon font. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.QuickViewPage) and the [Sample](https://ui5.sap.com/#/entity/sap.m.QuickView/sample/sap.m.sample.QuickViewFallbackIcon).

<sub>Changed•Control•Info Only•1.69</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2019-08-15



</td>
</tr>
<tr>
<td valign="top">

 1.69 



</td>
<td valign="top">

 Changed 



</td>
<td valign="top">

 Control 



</td>
<td valign="top">

 **`sap.m.SearchField`** 



</td>
<td valign="top">

**`sap.m.SearchField`**

We have made some changes in the suggestions dialog for the `SearchField` control on mobile devices. The `Cancel` button is now moved to the top, next to the search field, and the button in the footer is changed from `Cancel` to `OK`. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.SearchField) and the [Sample](https://ui5.sap.com/#/entity/sap.m.SearchField/sample/sap.m.sample.SearchFieldSuggestions).

<sub>Changed•Control•Info Only•1.69</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2019-08-15



</td>
</tr>
<tr>
<td valign="top">

 1.69 



</td>
<td valign="top">

 Changed 



</td>
<td valign="top">

 Control 



</td>
<td valign="top">

 **`sap.m.Select`** 



</td>
<td valign="top">

**`sap.m.Select`**

The items in the select list now have a maximum width. If the text of the items is longer than the maximum width, it either truncates or wraps on multiple lines depending on the new `wrapItemsText` property.For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.Select) and the [Samples](https://ui5.sap.com/#/entity/sap.m.Select).

<sub>Changed•Control•Info Only•1.69</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2019-08-15



</td>
</tr>
<tr>
<td valign="top">

 1.69 



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

A new *Month* view is now available for the control. It displays a calendar month that always starts from the first week of the month. To set it up, use the new `sap.m.SinglePlanningCalendarMonthView` class in the `views` aggregation of the `SinglePlanningCalendar` control.For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.SinglePlanningCalendar) and the [Sample](https://ui5.sap.com/#/entity/sap.m.SinglePlanningCalendar/sample/sap.m.sample.SinglePlanningCalendar).

<sub>Changed•Control•Info Only•1.69</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2019-08-15



</td>
</tr>
<tr>
<td valign="top">

 1.69 



</td>
<td valign="top">

 Changed 



</td>
<td valign="top">

 Control 



</td>
<td valign="top">

 **`sap.ui.comp.smartfilterbar.SmartFilterBar`** 



</td>
<td valign="top">

**`sap.ui.comp.smartfilterbar.SmartFilterBar`**

Values in single input fields are now validated against the keys available in the related value list. If no match can be found, the input control gets an error state, and filtering in `SmartFilterBar` is no longer possible.

<sub>Changed•Control•Info Only•1.69</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2019-08-15



</td>
</tr>
<tr>
<td valign="top">

 1.69 



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

The sorting for multiple currencies has been improved. For more information, see [Smart Table](../10_More_About_Controls/smart-table-bed8274.md), the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smarttable.SmartTable/annotations/ApplyMultiUnitBehaviorForSortingAndFiltering), and the [Sample](https://ui5.sap.com/#/entity/sap.ui.comp.smarttable.SmartTable/sample/sap.ui.comp.sample.smarttable.smartMTableWithCriticality).

<sub>Changed•Control•Info Only•1.69</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2019-08-15



</td>
</tr>
<tr>
<td valign="top">

 1.69 



</td>
<td valign="top">

 Changed 



</td>
<td valign="top">

 Control 



</td>
<td valign="top">

 **`sap.ui.table.plugins.MultiSelectionPlugin`** 



</td>
<td valign="top">

**`sap.ui.table.plugins.MultiSelectionPlugin`**

The plugin for the `sap.ui.table.AnalyticalTable`, the `sap.ui.table.Table`, and the `sap.ui.table.TreeTable` tables now offers various selection modes for applications \(new `selectionMode` property\), for example, the selection of single or multiple rows. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.table.plugins.MultiSelectionPlugin) and the [Sample](https://ui5.sap.com/#/entity/sap.ui.table.Table/sample/sap.ui.table.sample.MultiSelectionPlugin).

<sub>Changed•Control•Info Only•1.69</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2019-08-15



</td>
</tr>
<tr>
<td valign="top">

 1.69 



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

We have implemented year range in the `Calendar` control to help the user navigate quickly to a year that is outside the visible range. When the year button is selected, there's an additional year range button that enables the interaction.For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.ui.unified.Calendar).

<sub>Changed•Control•Info Only•1.69</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2019-08-15



</td>
</tr>
<tr>
<td valign="top">

 1.69 



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

-   Enhanced message handling: If a `delete` event is successful, the system displays a message from the back-end in the application. If there is no message from the back-end system, an i18n message is displayed as a fallback.


The object page has these new features:

-   The `condensedTableLayout` for `sap.ui.table` is now also available for object page tables with multiple sections in tab mode. For more information, see [Using the Condensed Table Layout](../06_SAP_Fiori_Elements/using-the-condensed-table-layout-f3cc057.md).
-   In sections that just contain a table, the available space is now used completely. For more information, see [Defining and Adapting Sections](../06_SAP_Fiori_Elements/defining-and-adapting-sections-facfea0.md).


**Overview Page**

The overview page has these new features or enhancements:

-   You can now add cards using new data sources in SAPUI5 Visual Editor. For more information, see [Extending Delivered Apps Using Adaptation Extensions](../06_SAP_Fiori_Elements/extending-delivered-apps-using-adaptation-extensions-52fc48b.md) and [Customize Overview Page Cards](https://help.sap.com/viewer/825270ffffe74d9f988a0f0066ad59f0/CF/en-US/6d11445e3cb2428ead1b0743e36aa275.html).

**Analytical List Page**

-   You can now use the `NumberOfFractionalDigits` property to determine the number of fraction digits in the Visual filter and Key Performance Indicators tag. For more information, see [Visual Filters](../06_SAP_Fiori_Elements/visual-filters-1714720.md) and [Creating Key Performance Indicator Tags](../06_SAP_Fiori_Elements/creating-key-performance-indicator-tags-d80a360.md).

-   You can now enable the multi-select feature that limits the number of lines in grid tables and analytical tables using the new manifest settings. For more information, see [Descriptor Configuration for the Analytical List Page](../06_SAP_Fiori_Elements/descriptor-configuration-for-the-analytical-list-page-2a9df06.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.69</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2019-08-15



</td>
</tr>
</table>

**Related Information**  


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

