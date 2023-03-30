<!-- loio0a2bd79036fe48708687526413ef9e8c -->

# What's New in SAPUI5 1.91

With this release SAPUI5 is upgraded from version 1.90 to 1.91.



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

 1.91 



</td>
<td valign="top">

 Changed 



</td>
<td valign="top">

 Feature 



</td>
<td valign="top">

 **SAPUI5 OData V2 Model** 



</td>
<td valign="top">

**SAPUI5 OData V2 Model**

A `Content-ID` header has been added to all non-read requests in a batch request. For failing change sets, the `Content-ID` of individual messages in the error response is used to map the message to the correct request. This allows you to calculate the correct target.

<sub>Changed•Feature•Info Only•1.91</sub>



</td>
<td valign="top">

Info Only



</td>
<td valign="top">

2021-06-17



</td>
</tr>
<tr>
<td valign="top">

 1.91 



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

-   For a list binding with visual grouping, that is with a `groupLevels` list provided in the `$$aggregation` binding parameter, you can now request the `$count` parameter. The resulting count represents the number of records at the leaf level. The `$count` parameter can be accessed through the header context as described in [Binding Collection Inline Count](../04_Essentials/binding-collection-inline-count-77d2310.md).

-   We now provide a new `sap.ui.model.odata.v4.ODataListBinding#getCount` method that allows you to get the count of elements or leaves in your collection.For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding/methods/getCount).


<sub>Changed•Feature•Info Only•1.91</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2021-06-17



</td>
</tr>
<tr>
<td valign="top">

 1.91 



</td>
<td valign="top">

 Changed 



</td>
<td valign="top">

 Feature 



</td>
<td valign="top">

 **New Data Type Property for Spreadsheet Export** 



</td>
<td valign="top">

**New Data Type Property for Spreadsheet Export**

The additional `utc` property is now available for date and time information. It determines whether column definitions of type `sap.ui.export.EdmType.Date/DateTime/Time` are exported as UTC time or as the local time of the user.For more information, see [Spreadsheet Export](../04_Essentials/spreadsheet-export-2691788.md), the [API Reference](https://ui5.sap.com/#/api/sap.ui.export.Spreadsheet/overview), and the [Samples](https://ui5.sap.com/#/entity/sap.ui.export.Spreadsheet).

<sub>Changed•Feature•Info Only•1.91</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2021-06-17



</td>
</tr>
<tr>
<td valign="top">

 1.91 



</td>
<td valign="top">

 Changed 



</td>
<td valign="top">

 Control 



</td>
<td valign="top">

 **`sap.m.App`** 



</td>
<td valign="top">

**`sap.m.App`**

Until now, `sap.m.App` assumed that it wasn't nested and always appeared as the top-level root DOM element for apps. With the new `isTopLevel` property, you can now disable this behavior for different use cases, such as nested components and standalone usage.For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.App).

<sub>Changed•Control•Info Only•1.91</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2021-06-17



</td>
</tr>
<tr>
<td valign="top">

 1.91 



</td>
<td valign="top">

 Changed 



</td>
<td valign="top">

 Control 



</td>
<td valign="top">

 **`sap.m.ExpandableText`** 



</td>
<td valign="top">

**`sap.m.ExpandableText`**

Тhe control now also implements the new `emptyIndicatorMode` property. It allows developers to display an empty text as a language-dependent “-” symbol.For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.ExpandableText).

<sub>Changed•Control•Info Only•1.91</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2021-06-17



</td>
</tr>
<tr>
<td valign="top">

 1.91 



</td>
<td valign="top">

 Changed 



</td>
<td valign="top">

 Control 



</td>
<td valign="top">

 **`sap.m.Table`** 



</td>
<td valign="top">

**`sap.m.Table`**

We introduced the `ColumnResizer` plugin that handles column resizing for a responsive table.For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.plugins.ColumnResizer%23methods/Summary)

<sub>Changed•Control•Info Only•1.91</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2021-06-17



</td>
</tr>
<tr>
<td valign="top">

 1.91 



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

The `SmartField` control now supports currency and unit of measure custom lists in the model. In these custom lists you can define supported currency and units of measure, and decimal number requirements. This function is enabled by adding the `com.sap.vocabularies.CodeList.v1.CurrencyCodes` annotation for currency and `com.sap.vocabularies.CodeList.v1.UnitsOfMeasure` for units of measure. Once the annotations are added, `SmartField` handles the validation and formatting of the values according to the definitions in the list.

<sub>Changed•Control•Info Only•1.91</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2021-06-17



</td>
</tr>
<tr>
<td valign="top">

 1.91 



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

-   We have added the `showPasteButton`*Paste* button in the table and use the paste feature based on the `sap.m.plugins.PasteProvider` plugin. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smarttable.SmartTable%23methods/getShowPasteButton) for the method, the [API Reference](https://ui5.sap.com/#/api/sap.m.plugins.PasteProvider) for the plugin, and the [Sample](https://ui5.sap.com/#/entity/sap.ui.comp.smarttable.SmartTable/sample/sap.ui.comp.sample.smarttable.smartMTableWithCriticality).

-   We have enabled the `enableAutoColumnWidth` property for the calculation of custom column width. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smarttable.SmartTable%23methods/getEnableAutoColumnWidth) and the [Sample](https://ui5.sap.com/#/entity/sap.ui.comp.smarttable.SmartTable/sample/sap.ui.comp.sample.smarttable.mtableCustom). 


<sub>Changed•Control•Info Only•1.91</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2021-06-17



</td>
</tr>
<tr>
<td valign="top">

 1.91 



</td>
<td valign="top">

 Changed 



</td>
<td valign="top">

 SAP Fiori Elements 



</td>
<td valign="top">

 **SAP Fiori elements for OData V4** 



</td>
<td valign="top">

**SAP Fiori elements for OData V4**

The following changes and new features are available for SAP Fiori elements for OData V4:

-   Application developers can now use building blocks in custom sections, that allow you, for example, to create a visual representation of your data in a convenient way. For more information, see [Building Blocks](../06_SAP_Fiori_Elements/building-blocks-24c1304.md).

-   Application developers can now specify a dimension or a measure using `"GroupableProperties"` and `"AggregatableProperties"` at an entity set level. For more information, see [Configuring Charts](../06_SAP_Fiori_Elements/configuring-charts-653ed0f.md).

-   List report and object page templates now also support parametrized entities. For more information, see [Configuring Filter Bars](../06_SAP_Fiori_Elements/configuring-filter-bars-4bd7590.md).

-   The values of parameters in the action dialog can be prefilled using an extension function. For more information, see the section *Default Values Defined at the Front End* in the topic [Actions](../06_SAP_Fiori_Elements/actions-cbf16c5.md).

-   Application developers can now use value help collections for draft-enabled entities. For more information, see [Field Help](../06_SAP_Fiori_Elements/field-help-a5608ea.md).

-   Application developers can now use the `FetchValues` property to define if values in the value list are loaded immediately or when a user chooses the *Go* button. For more information, see [Field Help](../06_SAP_Fiori_Elements/field-help-a5608ea.md).

-   The values of parameters in the action dialog can now be prefilled by an extension function. For more information, see [Actions](../06_SAP_Fiori_Elements/actions-cbf16c5.md).

-   The 'Share' functionality is now automatically hidden for new drafts. For more information, see ["Share" Functionality](../06_SAP_Fiori_Elements/share-functionality-022bf0d.md).

-   Application developers can now set a default value for semantic date range filter fields on the filter bar. For more information, see [Enabling Semantic Operators in the Filter Bar](../06_SAP_Fiori_Elements/enabling-semantic-operators-in-the-filter-bar-fef65d0.md).

-   Application developers can now configure a confirmation popup for discarding drafts. For more information, see [Confirmation Popups](../06_SAP_Fiori_Elements/confirmation-popups-9a53662.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.91</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2021-06-17



</td>
</tr>
<tr>
<td valign="top">

 1.91 



</td>
<td valign="top">

 Changed 



</td>
<td valign="top">

 User Documentation 



</td>
<td valign="top">

 **`sap.m.Table` Documentation Enhancement** 



</td>
<td valign="top">

**`sap.m.Table` Documentation Enhancement**

We have enhanced the existing documentation for the `sap.m.Table` control and related entities with details about column width handling, such as the strict layout and the pop-in feature.

For more information, see [Configuring Responsive Behavior of a Table](../10_More_About_Controls/configuring-responsive-behavior-of-a-table-38855e0.md), [Defining Column Width](../10_More_About_Controls/defining-column-width-6f778a8.md), and [Table Design](../10_More_About_Controls/table-design-d3234bc.md).

<sub>Changed•User Documentation•Info Only•1.91</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2021-06-17



</td>
</tr>
</table>

**Related Information**  


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

