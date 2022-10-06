<!-- loio75777daa78734f2db4e4c8a8124c0644 -->

# What's New in SAPUI5 1.91

With this release SAPUI5 is upgraded from version 1.90 to 1.91.



<a name="loio75777daa78734f2db4e4c8a8124c0644__section_qwl_pb5_zcb"/>

## Improved Features


<table>
<tr>
<td valign="top">

**New Data Type Property for Spreadsheet Export**

The additional `utc` property is now available for date and time information. It determines whether column definitions of type `sap.ui.export.EdmType.Date/DateTime/Time` are exported as UTC time or as the local time of the user.

For more information, see [Spreadsheet Export](../04_Essentials/spreadsheet-export-2691788.md), the [API Reference](https://ui5.sap.com/#/api/sap.ui.export.Spreadsheet/overview), and the [Samples](https://ui5.sap.com/#/entity/sap.ui.export.Spreadsheet).



</td>
</tr>
<tr>
<td valign="top">

**SAPUI5 OData V2 Model**

A `Content-ID` header has been added to all non-read requests in a batch request. For failing change sets, the `Content-ID` of individual messages in the error response is used to map the message to the correct request. This allows you to calculate the correct target.



</td>
</tr>
<tr>
<td valign="top">

**SAPUI5 OData V4 Model**

The new version of the SAPUI5 OData V4 model introduces the following features:

-   For a list binding with visual grouping, that is with a `groupLevels` list provided in the `$$aggregation` binding parameter, you can now request the `$count` parameter. The resulting count represents the number of records at the leaf level. The `$count` parameter can be accessed through the header context as described in [Binding Collection Inline Count](../04_Essentials/binding-collection-inline-count-77d2310.md).

-   We now provide a new [`sap.ui.model.odata.v4.ODataListBinding#getCount`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding/methods/getCount) method that allows you to get the count of elements or leaves in your collection.




</td>
</tr>
</table>



<a name="loio75777daa78734f2db4e4c8a8124c0644__section_rqn_wd5_zcb"/>

## Improved Controls


<table>
<tr>
<td valign="top">

**`sap.m.App`**

Until now, `sap.m.App` assumed that it wasn't nested and always appeared as the top-level root DOM element for apps. With the new `isTopLevel` property, you can now disable this behavior for different use cases, such as nested components and standalone usage.For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.App).



</td>
</tr>
<tr>
<td valign="top">

**`sap.m.ExpandableText`**

Тhe control now also implements the new `emptyIndicatorMode` property. It allows developers to display an empty text as a language-dependent “-” symbol. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.ExpandableText).



</td>
</tr>
<tr>
<td valign="top">

**`sap.m.Table`**

We introduced the `ColumnResizer` plugin that handles column resizing for a responsive table.

For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.plugins.ColumnResizer%23methods/Summary).



</td>
</tr>
<tr>
<td valign="top">

**`sap.ui.comp.smartfield.SmartField`**

The `SmartField` control now supports currency and unit of measure custom lists in the model. In these custom lists you can define supported currency and units of measure, and decimal number requirements. This function is enabled by adding the `com.sap.vocabularies.CodeList.v1.CurrencyCodes` annotation for currency and `com.sap.vocabularies.CodeList.v1.UnitsOfMeasure` for units of measure. Once the annotations are added, `SmartField` handles the validation and formatting of the values according to the definitions in the list.



</td>
</tr>
<tr>
<td valign="top">

**`sap.ui.comp.smarttable.SmartTable`**

-   We have added the `showPasteButton`*Paste* button in the table and use the paste feature based on the `sap.m.plugins.PasteProvider` plugin. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smarttable.SmartTable%23methods/getShowPasteButton) for the method, the [API Reference](https://ui5.sap.com/#/api/sap.m.plugins.PasteProvider) for the plugin, and the [Sample](https://ui5.sap.com/#/entity/sap.ui.comp.smarttable.SmartTable/sample/sap.ui.comp.sample.smarttable.smartMTableWithCriticality).

-   We have enabled the `enableAutoColumnWidth` property for the calculation of custom column width. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smarttable.SmartTable%23methods/getEnableAutoColumnWidth) and the [Sample](https://ui5.sap.com/#/entity/sap.ui.comp.smarttable.SmartTable/sample/sap.ui.comp.sample.smarttable.mtableCustom). 




</td>
</tr>
</table>



<a name="loio75777daa78734f2db4e4c8a8124c0644__section_g3r_bf5_zcb"/>

## SAP Fiori Elements


<table>
<tr>
<td valign="top">

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




</td>
</tr>
</table>



<a name="loio75777daa78734f2db4e4c8a8124c0644__section_z2h_fh5_zcb"/>

## Documentation


<table>
<tr>
<td valign="top">

We have enhanced the existing documentation for the `sap.m.Table` control and related entities with details about column width handling, such as the strict layout and the pop-in feature.

For more information, see [Configuring Responsive Behavior of a Table](../10_More_About_Controls/configuring-responsive-behavior-of-a-table-38855e0.md), [Defining Column Width](../10_More_About_Controls/defining-column-width-6f778a8.md), and [Table Design](../10_More_About_Controls/table-design-d3234bc.md).



</td>
</tr>
</table>

**Related Information**  


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

[What's New in SAPUI5 1.69](what-s-new-in-sapui5-1-69-41203fd.md "With this release SAPUI5 is upgraded from version 1.68 to 1.69.")

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

