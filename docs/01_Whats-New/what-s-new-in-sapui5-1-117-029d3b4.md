<!-- loio029d3b4a39c84384be6398c444f7e06a -->

<link rel="stylesheet" type="text/css" href="../css/sap-icons.css"/>

# What's New in SAPUI5 1.117

With this release SAPUI5 is upgraded from version 1.116 to 1.117.

> ### Tip:  
> If you want to do a search across all versions of the What's New content, you can also find it in the [SAPUI5 What's New viewer](https://help.sap.com/whats-new/67f60363b57f4ac0b23efd17fa192d60).

> ### Note:  
> Content marked as <span style="color:#666666;"><span class="SAP-icons"></span></span>**[Preview](https://help.sap.com/docs/whats-new-disclaimer)** is provided as a courtesy, without a warranty, and may be subject to change. For more information, see the [preview disclaimer](https://help.sap.com/docs/whats-new-disclaimer).

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

1.117 



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

We have deprecated the following entities for `sap.ui.table*`:

-   `sap.ui.table.ColumnMenu` and `sap.ui.table.AnalyticalColumnMenu`

-   `menu` aggregation of `Column`

-   `columnMenuOpen` event of `Column`
-   `columnVisibilityMenuSorter` property of `AnalyticalTable`

-   `showColumnVisibilityMenu` property of `Table`

-   `columnVisibility` event of `Table`

Instead of the deprecated `ColumnMenu`, you can use the `sap.m.table.columnmenu.Menu` control.

For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.table.columnmenu.Menu) and the [Sample](https://ui5.sap.com/#/entity/sap.ui.table.Table/sample/sap.ui.table.sample.Menus).

<sub>Deprecated•Feature•Info Only•1.117</sub>



</td>
<td valign="top">

Info Only 



</td>
<td valign="top">

2023-08-10



</td>
</tr>
<tr>
<td valign="top">

1.117 



</td>
<td valign="top">

Changed 



</td>
<td valign="top">

Control 



</td>
<td valign="top">

**`sap.m.List, sap.m.Table, sap.m.Tree`** 



</td>
<td valign="top">

**`sap.m.List, sap.m.Table, sap.m.Tree`**

To define the semantic level of a header, we have introduced the `headerLevel` property.

For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.ListBase%23methods/getHeaderLevel).

<sub>Changed•Control•Info Only•1.117</sub>



</td>
<td valign="top">

Info Only 



</td>
<td valign="top">

2023-08-10



</td>
</tr>
<tr>
<td valign="top">

1.117 



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

To display dates in a standardized format, we now support a number of additional calendar and fiscal OData V4 annotations . The following annotations are now supported:

-   `com.sap.vocabularies.Common.v1.IsCalendarYear`

-   `com.sap.vocabularies.Common.v1.IsCalendarWeek`

-   `com.sap.vocabularies.Common.v1.IsCalendarMonth`

-   `com.sap.vocabularies.Common.v1.IsCalendarQuarter`

-   `com.sap.vocabularies.Common.v1.IsCalendarYearQuarter`

-   `com.sap.vocabularies.Common.v1.IsCalendarYearMonth`

-   `com.sap.vocabularies.Common.v1.IsCalendarYearWeek`


For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smarttable.SmartTable%23annotations) for the annotations, the [Sample](https://ui5.sap.com/#/entity/sap.ui.comp.smarttable.SmartTable/sample/sap.ui.comp.sample.smartfilterbar.CalendarDates) for the calendar annotations, and the [Sample](https://ui5.sap.com/#/entity/sap.ui.comp.smarttable.SmartTable/sample/sap.ui.comp.sample.smartfilterbar.FiscalDates) for the fiscal annotations.



<sub>Changed•Control•Info Only•1.117</sub>



</td>
<td valign="top">

Info Only 



</td>
<td valign="top">

2023-08-10



</td>
</tr>
<tr>
<td valign="top">

1.117 



</td>
<td valign="top">

Changed 



</td>
<td valign="top">

Control 



</td>
<td valign="top">

**`sap.ui.mdc.Table` \(experimental\)** 



</td>
<td valign="top">

**`sap.ui.mdc.Table` \(experimental\)**

Refreshing table data via binding might be required if it has been changed in the back end. For example, a user might have selected *Go* in the filter bar without actually changing any filter settings. To evaluate whether the binding needs to be refreshed, even if `bindingInfo` has not changed, the `TableDelegate` uses the new `updateBinding` parameter `mSettings.forceRefresh`.

For more information, see the [API Reference](https://ui5.sap.com/#/api/module:sap/ui/mdc/TableDelegate%23methods/sap/ui/mdc/TableDelegate.updateBinding).

<sub>Changed•Control•Info Only•1.117</sub>



</td>
<td valign="top">

Info Only 



</td>
<td valign="top">

2023-08-10



</td>
</tr>
<tr>
<td valign="top">

1.117 



</td>
<td valign="top">

Changed 



</td>
<td valign="top">

Feature 



</td>
<td valign="top">

**`sap.ui.export.ExportHandler`** 



</td>
<td valign="top">

**`sap.ui.export.ExportHandler`**

We have made the `sap.ui.export.ExportHandler` class available. This class allows you to export data in various scenarios and formats other than spreadsheets, such as PDF files. The export can be used in a standalone scenario.

For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.export.ExportHandler%23overview).

<sub>Changed•Feature•Info Only•1.117</sub>



</td>
<td valign="top">

Info Only 



</td>
<td valign="top">

2023-08-10



</td>
</tr>
<tr>
<td valign="top">

1.117 



</td>
<td valign="top">

New 



</td>
<td valign="top">

Feature 



</td>
<td valign="top">

****Sample for `sap.ui.mdc` library**** 



</td>
<td valign="top">

****Sample for `sap.ui.mdc` library****

You can now test the table and filter bar features of the \(experimental\) `sap.ui.mdc` library in a sample. To find the sample for this library in the Demo Kit, go to *Samples* and select MDC Overview. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.ui.mdc/sample/sap.ui.mdc.demokit.sample.TableFilterBarJson).

<sub>New•Feature•Info Only•1.117</sub>



</td>
<td valign="top">

Info Only 



</td>
<td valign="top">

2023-08-10



</td>
</tr>
<tr>
<td valign="top">

1.117 



</td>
<td valign="top">

Changed 



</td>
<td valign="top">

Control 



</td>
<td valign="top">

**`sap.ui.layout.form.SimpleForm`** 



</td>
<td valign="top">

**`sap.ui.layout.form.SimpleForm`**

`ResponsiveGridLayout` is now the default layout for `SimpleForm` controls \(instead of `ResponsiveLayout`, which has already been deprecated\).

<sub>Changed•Control•Info Only•1.117</sub>



</td>
<td valign="top">

Info Only 



</td>
<td valign="top">

2023-08-10



</td>
</tr>
<tr>
<td valign="top">

1.117 



</td>
<td valign="top">

Changed 



</td>
<td valign="top">

SAP Fiori Elements 



</td>
<td valign="top">

**SAP Fiori elements for OData V2** 



</td>
<td valign="top">

**SAP Fiori elements for OData V2**

The following changes and new features are available for SAP Fiori elements for OData V2:

-   Empty rows in object page tables can now contain disabled fields. For more information, see [Enabling Inline Creation Mode or Empty Row Mode for Table Entries](../06_SAP_Fiori_Elements/enabling-inline-creation-mode-or-empty-row-mode-for-table-entries-cfb04f0.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.117</sub>



</td>
<td valign="top">

Info Only 



</td>
<td valign="top">

2023-08-10



</td>
</tr>
<tr>
<td valign="top">

1.117 



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

-   End users can now create dynamic tiles from the list report when relative date values such as *Today* and *Tomorrow* are used. For more information, see [The Share Functionality](../06_SAP_Fiori_Elements/the-share-functionality-022bf0d.md).

-   Changes coming from other flex layers are no longer considered when users navigate from the dynamic tiles created using the *Save as Tile* option. Such changes are also not considered when users navigate from the integration cards to the application. For more information, see [Store/Restore the Application State](../06_SAP_Fiori_Elements/store-restore-the-application-state-46bf248.md).

-   Application developers can now specify the `rowCountMode` and `rowCount` properties for a non-responsive table. For more information about the `Table`, see the [API Reference](https://ui5.sap.com/#/api/sap.fe.macros.Table%23overview) .

-   Application developers can now specify the create options for the table when using the `Table` building block. For more information, see [The Table Building Block](../06_SAP_Fiori_Elements/the-table-building-block-3801656.md).

-   Application developers can now use a tree table to display a hierarchy in a list report or an object page. For more information, see [Setting the Table Type](../06_SAP_Fiori_Elements/setting-the-table-type-7f844f1.md).

-   Applications can now enable the collaborative draft feature using the `ShareAction` annotation on back ends that support it. For more information, see [Draft Handling](../06_SAP_Fiori_Elements/draft-handling-ed9aa41.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.117</sub>



</td>
<td valign="top">

Info Only 



</td>
<td valign="top">

2023-08-10



</td>
</tr>
<tr>
<td valign="top">

1.117 



</td>
<td valign="top">

Changed 



</td>
<td valign="top">

Control 



</td>
<td valign="top">

**`sap.m.upload.UploadSet`** 



</td>
<td valign="top">

**`MenuButton` for File Selection in `UploadSet`**

We now provide a `MenuButton` for file selection in `UploadSet`, if users have enabled the `cloudFilePickerEnabled` property. The button includes the option to upload a file using a local system or upload a file via the cloud. These two options were separated and are now consolidated within the `MenuButton`.

For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.upload.UploadSet).

<sub>Changed•Control•Info Only•1.117</sub>



</td>
<td valign="top">

Info Only 



</td>
<td valign="top">

2023-08-10



</td>
</tr>
<tr>
<td valign="top">

1.117 



</td>
<td valign="top">

Changed 



</td>
<td valign="top">

Control 



</td>
<td valign="top">

**`sap.m.upload.UploadSetItem`** 



</td>
<td valign="top">

**`sap.m.upload.UploadSetItem`**

The following changes and new features are available for `sap.m.upload.UploadSetItem`:

-   **`markersAsStatus` Aggregation**

    The `ObjectStatus` can now be rendered in the marker section of the `uploadSetItem`.

-   **`getUploadType` Public Method**

    Developers can now see the source of an uploaded file using the `getUploadType` public method. The method displays the type of the uploaded file, if it was uploaded locally or by `cloudFilePicker`.


For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.upload.UploadSetItem).

<sub>Changed•Control•Info Only•1.117</sub>



</td>
<td valign="top">

Info Only 



</td>
<td valign="top">

2023-08-10



</td>
</tr>
<tr>
<td valign="top">

1.117 



</td>
<td valign="top">

Changed 



</td>
<td valign="top">

Feature 



</td>
<td valign="top">

**Modern ECMAScript Support in SAPUI5** 



</td>
<td valign="top">

**Modern ECMAScript Support in SAPUI5**

Since SAPUI5 1.116, the framework leverages features of modern ECMAScript up to and including [ECMAScript 2022 Language Specification](https://262.ecma-international.org/13.0/). There are certain restrictions you have to consider when using modern ECMAScript with your UI5 project.

For more information, see [ECMAScript Support](../02_Read-Me-First/ecmascript-support-0cb44d7.md). Please also make sure to [upgrade your tools for modern ECMAScript in UI5](https://blogs.sap.com/2023/05/24/upgrade-your-tools-for-modern-ecmascript-in-ui5/).

<sub>Changed•Feature•Info Only•1.117</sub>



</td>
<td valign="top">

Info Only 



</td>
<td valign="top">

2023-08-10



</td>
</tr>
<tr>
<td valign="top">

1.117 



</td>
<td valign="top">

Changed 



</td>
<td valign="top">

Feature 



</td>
<td valign="top">

**Theme-Dependent Custom Icon Fonts** 



</td>
<td valign="top">

**Theme-Dependent Custom Icon Fonts**

You can now configure variants of a custom icon font for different UI5 themes; previously, a custom icon font was applied to all themes. With an enhanced version of the metadata JSON file associated with an icon font, you can provide theme-dependent path configuration. For instance, this allows you to easily differentiate between custom icons for modern themes, such as SAP Horizon, and custom icons for older themes.

For more information and an example, see [Icon and Icon Pool](../10_More_About_Controls/icon-and-icon-pool-21ea0ea.md).

<sub>Changed•Feature•Info Only•1.117</sub>



</td>
<td valign="top">

Info Only 



</td>
<td valign="top">

2023-08-10



</td>
</tr>
<tr>
<td valign="top">

1.117 



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

-   We now provide `withCredentials` as an experimental model parameter.

    For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel).

-   **Experimental:** You can now create a nested single entity behind a single-valued navigation property in the transient entity.

    For more information, see *Nested Single Entity* in [Deep Create](../04_Essentials/creating-an-entity-c9723f8.md#loioc9723f8265f644af91c0ed941e114d46__section_DCR).

-   Support for read-only hierarchies is now available.

    For more information, see [Recursive Hierarchy](../04_Essentials/extension-for-data-aggregation-7d91431.md#loio7d914317c0b64c23824bf932cc8a4ae1__section_RCH).


<sub>Changed•Feature•Info Only•1.117</sub>



</td>
<td valign="top">

Info Only 



</td>
<td valign="top">

2023-08-10



</td>
</tr>
<tr>
<td valign="top">

1.117 



</td>
<td valign="top">

New 



</td>
<td valign="top">

User Documentation 



</td>
<td valign="top">

**TypeScript Tutorial** 



</td>
<td valign="top">

**TypeScript Tutorial**

You are familiar with SAPUI5 app development, but do you want to learn how to do it in TypeScript? Now there is a video that guides you through the official UI5 TypeScript Tutorial, adds hints about how to avoid pitfalls, and provides some background information. To find it, see [UI5 TypeScript Tutorial video](https://youtu.be/CRKNIiXZN6U).

<sub>New•User Documentation•Info Only•1.117</sub>



</td>
<td valign="top">

Info Only 



</td>
<td valign="top">

2023-08-10



</td>
</tr>
<tr>
<td valign="top">

1.117 



</td>
<td valign="top">

Changed 



</td>
<td valign="top">

Control 



</td>
<td valign="top">

**`sap.m.Menu` and `sap.ui.unified.Menu`** 



</td>
<td valign="top">

**`sap.m.Menu` and `sap.ui.unified.Menu`**

We have introduced a new `isOpen` method that indicates whether the menu is currently open. The `bOpen` flag in `sap.ui.unified.Menu`, which was used for similar purposes, will be phased out. If you use this flag in your applications, we recommend that you replace it with the new method. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.Menu/methods/isOpen).

<sub>Changed•Control•Info Only•1.117</sub>



</td>
<td valign="top">

Info Only 



</td>
<td valign="top">

2023-08-10



</td>
</tr>
<tr>
<td valign="top">

1.117 



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

We have changed the behavior for numeric fields that don't accept a `null` value \(`nullable=false`\). If the entry in such a field is left empty \(for example, if it's deleted\), when the focus leaves the field, we display `0`, and preserve this value in the model. To implement this behavior, for the following EDM types when annotated with `nullable=false` and `Common.v1.FieldControlType/Optional`, we pass a `parseEmptyValueToZero` formatter option:

-   Edm.Int64
-   Edm.Decimal
-   Edm.Double
-   Edm.Single
-   Edm.Int32
-   Edm.Int16
-   Edm.Byte
-   Edm.SByte

<sub>Changed•Control•Info Only•1.117</sub>



</td>
<td valign="top">

Info Only 



</td>
<td valign="top">

2023-08-10



</td>
</tr>
<tr>
<td valign="top">

1.117 



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

Users can now select a whole week from the Month view if they click on the week number. A second click removes the selection. This feature is enabled when the `dateSelectionMode` property is set to `MultiSelect`. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.m.SinglePlanningCalendar/sample/sap.m.sample.SinglePlanningCalendarDateSelection).

<sub>Changed•Control•Info Only•1.117</sub>



</td>
<td valign="top">

Info Only 



</td>
<td valign="top">

2023-08-10



</td>
</tr>
<tr>
<td valign="top">

1.117 



</td>
<td valign="top">

Changed 



</td>
<td valign="top">

Control 



</td>
<td valign="top">

**`sap.ui.comp.valuehelpdialog.ValueHelpDialog`** 



</td>
<td valign="top">

**`sap.ui.comp.valuehelpdialog.ValueHelpDialog`**

The control now supports analytical parameters. Analytical parameters are values that are passed to the back end, and that influence the way the back end processes the incoming request. Typically, those parameters are used to normalize entries that have different units of measure.

<sub>Changed•Control•Info Only•1.117</sub>



</td>
<td valign="top">

Info Only 



</td>
<td valign="top">

2023-08-10



</td>
</tr>
<tr>
<td valign="top">

1.117 



</td>
<td valign="top">

Changed 



</td>
<td valign="top">

Control 



</td>
<td valign="top">

**`sap.m.SelectDialog` and `sap.m.TableSelectDialog`** 



</td>
<td valign="top">

**`sap.m.SelectDialog` and `sap.m.TableSelectDialog`**

To improve the accessibility of these controls, we have introduced a new `initialFocus` property. It defines whether the initial focus will be received by the `SearchField` or by the `Content` list. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.SelectDialogBase) and the [Sample](https://ui5.sap.com/#/entity/sap.m.TableSelectDialog/sample/sap.m.sample.TableSelectDialogGrowing).

<sub>Changed•Control•Info Only•1.117</sub>



</td>
<td valign="top">

Info Only 



</td>
<td valign="top">

2023-08-10



</td>
</tr>
<tr>
<td valign="top">

1.117 



</td>
<td valign="top">

Changed 



</td>
<td valign="top">

Feature 



</td>
<td valign="top">

**OPA Framework** 



</td>
<td valign="top">

**OPA Framework**

We have enhanced the OPA framework to now perform comprehensive checks for component parents, ensuring controls nested within multiple layers are correctly treated when evaluating busy states.

<sub>Changed•Feature•Info Only•1.117</sub>



</td>
<td valign="top">

Info Only 



</td>
<td valign="top">

2023-08-10



</td>
</tr>
<tr>
<td valign="top">

1.117 



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

We have introduced the `stickyHeader` property. When set to `true`, the header of the panel will be visible while scrolling content. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.m.Panel/sample/sap.m.sample.PanelSticky). 

<sub>Changed•Control•Info Only•1.117</sub>



</td>
<td valign="top">

Info Only 



</td>
<td valign="top">

2023-08-10



</td>
</tr>
</table>

