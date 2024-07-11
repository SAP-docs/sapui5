<!-- loiofa0e2828d1444c268a8b6722e5df0b98 -->

# What's New in SAPUI5 1.97

With this release SAPUI5 is upgraded from version 1.96 to 1.97.



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

1.97 

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

-   If the parent context of an operation binding is a row context of a list binding, and the result of the operation fulfills the criteria for a return value context, you can now replace that row context with the result of the operation. For more information, see the `sap.ui.model.odata.v4.ODataContextBinding#execute` method, and in particular the `bReplaceWithRVC` parameter.

-   We have introduced the `sap.ui.model.odata.v4.Context#replaceWith` method. You can use it to replace a row context of a list binding by a kept-alive context that is not part of the collection. Such a context can be kept alive with the `sap.ui.model.odata.v4.Context#setKeepAlive` method introduced with SAPUI5 1.81.

-   You can now apply the `sort`, `filter`, `changeParameters`, and `suspend` methods to an `sap.ui.model.odata.v4.ODataListBinding` despite changes in kept-alive contexts or bindings relative to kept-alive contexts of the list. Accordingly, `sap.ui.model.odata.v4.ODataListBinding#hasPendingChanges` has been extended with a `bIgnoreKeptAlive` parameter.

-   The `sap.ui.model.odata.v4.ODataListBinding#filter` and `sap.ui.model.odata.v4.ODataListBinding#sort` methods do not reset the binding if the filters or sorters are unchanged.


<sub>Changed•Feature•Info Only•1.97</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2021-12-02

</td>
</tr>
<tr>
<td valign="top">

1.97 

</td>
<td valign="top">

UI Changed 

</td>
<td valign="top">

Announcement 

</td>
<td valign="top">

**Multi-Select in Responsive Tables: *Clear All* Instead of *Select All*** 

</td>
<td valign="top">

**Multi-Select in Responsive Tables: *Clear All* Instead of *Select All***

> ### Note:  
> The following information concerns important changes for end users. These changes may require end users to adjust and/or test cases to be adapted, but they won't stop or disrupt software or processes.

Responsive tables with a multi-select option will show a *Clear All* checkbox instead of a *Select All* checkbox. This is the same behavior as in other table types.

<sub>UI Changed•Announcement•Info Only•1.97</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2021-12-02

</td>
</tr>
<tr>
<td valign="top">

1.97 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.Avatar`** 

</td>
<td valign="top">

**`sap.m.Avatar`**

With the new `decorative` property, you can now set the `Avatar` control to be used only for decorative purposes and to be ignored by accessibility tools.For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.MessagePage).

<sub>Changed•Control•Info Only•1.97</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2021-12-02

</td>
</tr>
<tr>
<td valign="top">

1.97 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.ComboBox`, `sap.m.MultiComboBox`** 

</td>
<td valign="top">

**`sap.m.ComboBox`, `sap.m.MultiComboBox`**

We have introduced the `showClearIcon` property. If set to `true`, when there is text input it shows an additional icon that allows users to clear their input. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.m.ComboBox/sample/sap.m.sample.ComboBoxClearIcon) for `sap.m.ComboBox` and the [Sample](https://ui5.sap.com/#/entity/sap.m.MultiComboBox/sample/sap.m.sample.MultiComboBoxClearIcon) for `sap.m.MultiComboBox`.

<sub>Changed•Control•Info Only•1.97</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2021-12-02

</td>
</tr>
<tr>
<td valign="top">

1.97 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.DatePicker, sap.m.DateRangeSelection, sap.m.DateTimePicker, and sap.m.TimePicker`** 

</td>
<td valign="top">

**`sap.m.DatePicker, sap.m.DateRangeSelection, sap.m.DateTimePicker, and sap.m.TimePicker`**

These controls can now be opened by another control. To enable this feature, we have introduced a new `hideInput` property that hides the input field of the corresponding control. In this case, the only way to open the picker popover is by calling the `openBy` method. This new feature minimizes the visual footprint of the controls, which is useful when more controls are placed together. For more information, see the [DatePicker](https://ui5.sap.com/#/entity/sap.m.DatePicker/sample/sap.m.sample.DatePickerHidden), [DateRangeSelection](https://ui5.sap.com/#/entity/sap.m.DateRangeSelection/sample/sap.m.sample.DateRangeSelectionHidden), [DateTimePicker](https://ui5.sap.com/#/entity/sap.m.DateTimePicker/sample/sap.m.sample.DateTimePickerHidden), and [TimePicker](https://ui5.sap.com/#/entity/sap.m.TimePicker/sample/sap.m.sample.TimePickerHidden) samples.

<sub>Changed•Control•Info Only•1.97</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2021-12-02

</td>
</tr>
<tr>
<td valign="top">

1.97 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.DateTimePicker`** 

</td>
<td valign="top">

**`sap.m.DateTimePicker`**

The control now implements the new dial-based design for the time picker.For more information, see the [Samples](https://ui5.sap.com/#/entity/sap.m.DateTimePicker).

<sub>Changed•Control•Info Only•1.97</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2021-12-02

</td>
</tr>
<tr>
<td valign="top">

1.97 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.DynamicDateRange` \(Experimental\)** 

</td>
<td valign="top">

**`sap.m.DynamicDateRange` \(Experimental\)**

We have added a new standard option named `DATETOYEAR` - a period from today to the end of the year. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.DynamicDateRange).

<sub>Changed•Control•Info Only•1.97</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2021-12-02

</td>
</tr>
<tr>
<td valign="top">

1.97 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.MessagePage`** 

</td>
<td valign="top">

**`sap.m.MessagePage`**

With the new `titleLevel` property, we have enabled app developers to set a custom aria-level of the `MessagePage` title.For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.MessagePage).

<sub>Changed•Control•Info Only•1.97</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2021-12-02

</td>
</tr>
<tr>
<td valign="top">

1.97 

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

We have introduced a new `multipleAppointmentsSelection` property that allows mobile users to select multiple appointments. If set to `true`, every mouse click or tap on an appointment will lead to selection. The selection of multiple appointments using the [CTRL\] key is possible regardless of the value of this property. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.PlanningCalendar) and the [Sample](https://ui5.sap.com/#/entity/sap.m.PlanningCalendar/sample/sap.m.sample.PlanningCalendarOneLine).

<sub>Changed•Control•Info Only•1.97</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2021-12-02

</td>
</tr>
<tr>
<td valign="top">

1.97 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.comp.smartchart.SmartChart`, `sap.ui.comp.smarttable.SmartTable`** 

</td>
<td valign="top">

**`sap.ui.comp.smartchart.SmartChart`, `sap.ui.comp.smarttable.SmartTable`**

We have introduced the `uiStateChange` event for these controls. The event is fired when a change is made in the personalization data or using the `setUiState` method of the relevant control. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smarttable.SmartTable%23events/uiStateChange) and the [Sample](https://ui5.sap.com/#/entity/sap.ui.comp.smarttable.SmartTable/sample/sap.ui.comp.sample.smarttable.mtableCustomToolbar) for `SmartTable`, the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smartchart.SmartChart%23events/uiStateChange) and the [Sample](https://ui5.sap.com/#/entity/sap.ui.comp.smartchart.SmartChart/sample/sap.ui.comp.sample.smartchart.general) for `SmartChart`.

<sub>Changed•Control•Info Only•1.97</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2021-12-02

</td>
</tr>
<tr>
<td valign="top">

1.97 

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

Until now, when we used `SmartField` with the `Common.ValueListRelevantQualifiers` annotation and we had various defined value lists for a property, we took the value list without a qualifier as the default one. Now, if there's no qualifier, we take as the default the first value list returned from the back end that is marked as relevant. This change would allow you to define different value help dialogs for the same field, if needed. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smartfield.SmartField%23annotations/ValueListRelevantQualifiers).

<sub>Changed•Control•Info Only•1.97</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2021-12-02

</td>
</tr>
<tr>
<td valign="top">

1.97 

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

-   `SmartFilterBar` now visualizes multiple consecutive whitespace characters for list items in filter fields rendered as a combo box, multi-combo box, and multi-input field so no information is truncated.

-   `SmartFilterBar` now supports the new `sap.m.DynamicDateRange` control. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.ui.comp.smartfilterbar.SmartFilterBar/sample/sap.ui.comp.sample.smartfilterbar.ControlConfigurationDateRangeType). With the integration of this new control, we've also added the option to choose a time period from today until the end of the year for fields with single dates.

<sub>Changed•Control•Info Only•1.97</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2021-12-02

</td>
</tr>
<tr>
<td valign="top">

1.97 

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

-   We have now enabled the automatic rendering of whitespaces in a table cell of type `string`. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smarttable.SmartTable) and the [Sample](https://ui5.sap.com/#/entity/sap.ui.comp.smarttable.SmartTable/sample/sap.ui.comp.sample.smarttable.smartTableWithCriticality).

-   We have introduced the new `customizeConfig` property that provides custom configuration for cell templates and columns. The configuration is offered for columns of `SmartField` controls in edit mode that are generated by the control itself. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smarttable.SmartTable%23methods/setCustomizeConfig) and the [Sample](https://ui5.sap.com/#/entity/sap.ui.comp.smarttable.SmartTable/sample/sap.ui.comp.sample.smarttable.mtableCustomizeConfig).


<sub>Changed•Control•Info Only•1.97</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2021-12-02

</td>
</tr>
<tr>
<td valign="top">

1.97 

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

Timeline cards now support actions defined on an item level. These actions can be handled by the application in the same way as actions of the List card items.For more information, see the [Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/timeline) in the Card Explorer.

<sub>Changed•Control•Info Only•1.97</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2021-12-02

</td>
</tr>
<tr>
<td valign="top">

1.97 

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

-   You can now pass entity information during external navigation to a multi-entity app, so that the object page of any entity can be opened directly. For more information, see [Navigation from an App \(Outbound Navigation\)](../06_SAP_Fiori_Elements/navigation-from-an-app-outbound-navigation-d782acf.md).

-   A new keyboard shortcut is now available for the *Create With Filters* action in list reports. For more information, see [Keyboard Shortcuts](../06_SAP_Fiori_Elements/keyboard-shortcuts-0cd318c.md).

-   We have enhanced the customization of delivered apps, using an adaptation project, with a new option to define and set a custom selection presentation variant as the default. For more information, see [Extending the Delivered Apps Manifest Using an Adaptation Project](../06_SAP_Fiori_Elements/extending-the-delivered-apps-manifest-using-an-adaptation-project-a2b24a6.md) and [Extending Delivered Apps Using Adaptation Extensions](../06_SAP_Fiori_Elements/extending-delivered-apps-using-adaptation-extensions-52fc48b.md).

-   For analytical list pages, you can now add colors to the legends based on the dimension values. For more information, see [Configuring the Chart-Only View as the Default Option](../06_SAP_Fiori_Elements/configuring-the-chart-only-view-as-the-default-option-8e6e885.md).

-   Similar to `sap.ui.table.*` types, responsive tables in the list report and analytical list page now show the *Clear All* option by default when multiselect is enabled. For more information, see [Enabling Multiple Selection in Tables](../06_SAP_Fiori_Elements/enabling-multiple-selection-in-tables-116b5d8.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.97</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2021-12-02

</td>
</tr>
<tr>
<td valign="top">

1.97 

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

-   Applications can now pass the context when using `preferredMode=create`. For more information, see [Handling of the preferredMode Parameter](../06_SAP_Fiori_Elements/handling-of-the-preferredmode-parameter-bfaf3cc.md).

-   SAP Fiori elements now enables you to show and hide fields in object page facets. For more information, see [Showing and Hiding Content in Object Page Facets](../06_SAP_Fiori_Elements/showing-and-hiding-content-in-object-page-facets-9fcea86.md).

-   You can now sort tables based on navigation properties. For more information, see [Enabling Table Personalization](../06_SAP_Fiori_Elements/enabling-table-personalization-3e2b4d2.md).

-   The standard Create action now uses user default values from SAP Fiori launchpad to prefill the action dialog. For more information, see [Prefilling Fields When Creating a New Entity](../06_SAP_Fiori_Elements/prefilling-fields-when-creating-a-new-entity-11ff444.md).

-   SAP Fiori elements now allows you to save the selected tab in the page variant management dialog for list reports using multiple table mode. For more information, see [Enabling an App for Key User Adaptation](../06_SAP_Fiori_Elements/enabling-an-app-for-key-user-adaptation-ccd45ba.md).

-   You can now display field labels in a table column containing a field group when `showDataFieldsLabel` is set to `true` in the manifest. For more information, see [Grouping of Fields](../06_SAP_Fiori_Elements/grouping-of-fields-cb1748e.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.97</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2021-12-02

</td>
</tr>
<tr>
<td valign="top">

1.97 

</td>
<td valign="top">

New 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**Demo Kit News Section with Notifications** 

</td>
<td valign="top">

**Demo Kit News Section with Notifications**

We implemented a *News* section with notifications where you can get highlights on important news about SAPUI5. When we upload new information, you’ll see a notification bell with a counter in the main toolbar.

![](images/WN_1_97_Demo_Kit_News_fe57420.png)

<sub>New•Feature•Info Only•1.97</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2021-12-02

</td>
</tr>
</table>

**Related Information**  


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

