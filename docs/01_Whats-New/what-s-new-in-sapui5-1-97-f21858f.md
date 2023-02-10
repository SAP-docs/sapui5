<!-- loiof21858fa6a07451c9cb86e0c023a7092 -->

# What's New in SAPUI5 1.97

With this release SAPUI5 is upgraded from version 1.96 to 1.97.



<a name="loiof21858fa6a07451c9cb86e0c023a7092__section_vvy_452_rrb"/>

## Preview and Announcements

The following information concerns important upcoming changes. UI changes may have an impact on the user experience and may require test cases to be adapted.


<table>
<tr>
<th valign="top">

Type



</th>
<th valign="top">

Description



</th>
<th valign="top">

Available as of SAPUI5 Version



</th>
</tr>
<tr>
<td valign="top">

Announcement



</td>
<td valign="top">

**Reminder: Outdated SAPUI5 Versions to Be Removed from the CDN**

For security reasons, SAPUI5 versions that are no longer maintained will be removed from the UI5 content delivery network \(CDN\) one year after their end of maintenance. If a version is still in maintenance, patches of that version that are older than one year will also be removed. We have noted that a number of customers are still using such outdated versions or patches. If this affects you, please note that once these versions or patches are removed, your applications will break. Please update to a more recent version or patch. For more information, see: [Removing Outdated UI5 Versions from UI5 CDN](https://blogs.sap.com/2021/01/26/removing-outdated-ui5-versions-from-ui5-cdn/).



</td>
<td valign="top">

n/a



</td>
</tr>
<tr>
<td valign="top">

UI Change



</td>
<td valign="top">

**Multi-Select in Responsive Tables: *Clear All* Instead of *Select All***

Responsive tables with a multi-select option will show a *Clear All* checkbox instead of a *Select All* checkbox. This is the same behavior as in other table types.



</td>
<td valign="top">

1.97



</td>
</tr>
</table>

> ### Note:  
> Content marked as **Preview** is provided as a courtesy, without a warranty, and may be subject to change. For more information, see the [preview disclaimer](https://help.sap.com/viewer/wnp_disclaimer).



<a name="loiof21858fa6a07451c9cb86e0c023a7092__section_qwl_pb5_zcb"/>

## Improved Features


<table>
<tr>
<td valign="top">

**SAPUI5 OData V4 Model**

The new version of the SAPUI5 OData V4 model introduces the following features:

-   If the parent context of an operation binding is a row context of a list binding, and the result of the operation fulfills the criteria for a return value context, you can now replace that row context with the result of the operation. For more information, see the `sap.ui.model.odata.v4.ODataContextBinding#execute` method, and in particular the `bReplaceWithRVC` parameter.

-   We have introduced the `sap.ui.model.odata.v4.Context#replaceWith` method. You can use it to replace a row context of a list binding by a kept-alive context that is not part of the collection. Such a context can be kept alive with the `sap.ui.model.odata.v4.Context#setKeepAlive` method introduced with SAPUI5 1.81.

-   You can now apply the `sort`, `filter`, `changeParameters`, and `suspend` methods to an `sap.ui.model.odata.v4.ODataListBinding` despite changes in kept-alive contexts or bindings relative to kept-alive contexts of the list. Accordingly, `sap.ui.model.odata.v4.ODataListBinding#hasPendingChanges` has been extended with a `bIgnoreKeptAlive` parameter.

-   The `sap.ui.model.odata.v4.ODataListBinding#filter` and `sap.ui.model.odata.v4.ODataListBinding#sort` methods do not reset the binding if the filters or sorters are unchanged.




</td>
</tr>
</table>



<a name="loiof21858fa6a07451c9cb86e0c023a7092__section_rqn_wd5_zcb"/>

## Improved Controls


<table>
<tr>
<td valign="top">

**`sap.m.Avatar`**

With the new `decorative` property, you can now set the `Avatar` control to be used only for decorative purposes and to be ignored by accessibility tools.For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.MessagePage).



</td>
</tr>
<tr>
<td valign="top">

**`sap.m.ComboBox`, `sap.m.MultiComboBox`**

We have introduced the `showClearIcon` property. If set to `true`, when there is text input it shows an additional icon that allows users to clear their input. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.m.ComboBox/sample/sap.m.sample.ComboBoxClearIcon) for `sap.m.ComboBox` and the [Sample](https://ui5.sap.com/#/entity/sap.m.MultiComboBox/sample/sap.m.sample.MultiComboBoxClearIcon) for `sap.m.MultiComboBox`.



</td>
</tr>
<tr>
<td valign="top">

**`sap.m.DatePicker`, `sap.m.DateRangeSelection`, `sap.m.DateTimePicker`, and `sap.m.TimePicker`**

These controls can now be opened by another control. To enable this feature, we have introduced a new `hideInput` property that hides the input field of the corresponding control. In this case, the only way to open the picker popover is by calling the `openBy` method. This new feature minimizes the visual footprint of the controls, which is useful when more controls are placed together. For more information, see the [DatePicker](https://ui5.sap.com/#/entity/sap.m.DatePicker/sample/sap.m.sample.DatePickerHidden), [DateRangeSelection](https://ui5.sap.com/#/entity/sap.m.DateRangeSelection/sample/sap.m.sample.DateRangeSelectionHidden), [DateTimePicker](https://ui5.sap.com/#/entity/sap.m.DateTimePicker/sample/sap.m.sample.DateTimePickerHidden), and [TimePicker](https://ui5.sap.com/#/entity/sap.m.TimePicker/sample/sap.m.sample.TimePickerHidden) samples.



</td>
</tr>
<tr>
<td valign="top">

**`sap.m.DateTimePicker`**

The control now implements the new dial-based design for the time picker.For more information, see the [Samples](https://ui5.sap.com/#/entity/sap.m.DateTimePicker).



</td>
</tr>
<tr>
<td valign="top">

**`sap.m.DynamicDateRange` \(Experimental\)**

We have added a new standard option named `DATETOYEAR` - a period from today to the end of the year. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.DynamicDateRange).



</td>
</tr>
<tr>
<td valign="top">

**`sap.m.MessagePage`**

With the new `titleLevel` property, we have enabled app developers to set a custom aria-level of the `MessagePage` title.For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.MessagePage).



</td>
</tr>
<tr>
<td valign="top">

**`sap.m.PlanningCalendar`**

We have introduced a new `multipleAppointmentsSelection` property that allows mobile users to select multiple appointments. If set to `true`, every mouse click or tap on an appointment will lead to selection. The selection of multiple appointments using the [CTRL\] key is possible regardless of the value of this property. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.PlanningCalendar) and the [Sample](https://ui5.sap.com/#/entity/sap.m.PlanningCalendar/sample/sap.m.sample.PlanningCalendarOneLine).



</td>
</tr>
<tr>
<td valign="top">

**`sap.ui.comp.smartchart.SmartChart`, `sap.ui.comp.smarttable.SmartTable`**

We have introduced the `uiStateChange` event for these controls. The event is fired when a change is made in the personalization data or using the `setUiState` method of the relevant control. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smarttable.SmartTable%23events/uiStateChange) and the [Sample](https://ui5.sap.com/#/entity/sap.ui.comp.smarttable.SmartTable/sample/sap.ui.comp.sample.smarttable.mtableCustomToolbar) for `SmartTable`, the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smartchart.SmartChart%23events/uiStateChange) and the [Sample](https://ui5.sap.com/#/entity/sap.ui.comp.smartchart.SmartChart/sample/sap.ui.comp.sample.smartchart.general) for `SmartChart`.



</td>
</tr>
<tr>
<td valign="top">

**`sap.ui.comp.smartfield.SmartField`**

Until now, when we used `SmartField` with the `Common.ValueListRelevantQualifiers` annotation and we had various defined value lists for a property, we took the value list without a qualifier as the default one. Now, if there's no qualifier, we take as the default the first value list returned from the back end that is marked as relevant. This change would allow you to define different value help dialogs for the same field, if needed. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smartfield.SmartField%23annotations/ValueListRelevantQualifiers).



</td>
</tr>
<tr>
<td valign="top">

**`sap.ui.comp.smartfilterbar.SmartFilterBar`**

-   `SmartFilterBar` now visualizes multiple consecutive whitespace characters for list items in filter fields rendered as a combo box, multi-combo box, and multi-input field so no information is truncated.

-   `SmartFilterBar` now supports the new `sap.m.DynamicDateRange` control. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.ui.comp.smartfilterbar.SmartFilterBar/sample/sap.ui.comp.sample.smartfilterbar.ControlConfigurationDateRangeType). With the integration of this new control, we've also added the option to choose a time period from today until the end of the year for fields with single dates.



</td>
</tr>
<tr>
<td valign="top">

**`sap.ui.comp.smarttable.SmartTable`**

-   We have now enabled the automatic rendering of whitespaces in a table cell of type `string`. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smarttable.SmartTable) and the [Sample](https://ui5.sap.com/#/entity/sap.ui.comp.smarttable.SmartTable/sample/sap.ui.comp.sample.smarttable.smartTableWithCriticality).

-   We have introduced the new `customizeConfig` property that provides custom configuration for cell templates and columns. The configuration is offered for columns of `SmartField` controls in edit mode that are generated by the control itself. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smarttable.SmartTable%23methods/setCustomizeConfig) and the [Sample](https://ui5.sap.com/#/entity/sap.ui.comp.smarttable.SmartTable/sample/sap.ui.comp.sample.smarttable.mtableCustomizeConfig).




</td>
</tr>
<tr>
<td valign="top">

**`sap.ui.integration.widgets.Card`**

Timeline cards now support actions defined on an item level. These actions can be handled by the application in the same way as actions of the List card items.For more information, see the [Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/timeline) in the Card Explorer.



</td>
</tr>
</table>



<a name="loiof21858fa6a07451c9cb86e0c023a7092__section_cps_cg5_zcb"/>

## Deprecations


<table>
<tr>
<td valign="top">

There are currently no major deprecations. For a complete list of all deprecations, see [Deprecated APIs](https://ui5.sap.com/#/api/deprecated). 



</td>
</tr>
</table>



<a name="loiof21858fa6a07451c9cb86e0c023a7092__section_g3r_bf5_zcb"/>

## SAP Fiori Elements


<table>
<tr>
<td valign="top">

The following changes and new features are available for SAP Fiori elements for OData V2:

-   You can now pass entity information during external navigation to a multi-entity app, so that the object page of any entity can be opened directly. For more information, see [Navigation from an App \(Outbound Navigation\)](../06_SAP_Fiori_Elements/navigation-from-an-app-outbound-navigation-d782acf.md).

-   A new keyboard shortcut is now available for the *Create With Filters* action in list reports. For more information, see [Keyboard Shortcuts](../06_SAP_Fiori_Elements/keyboard-shortcuts-0cd318c.md).

-   We have enhanced the customization of delivered apps, using an adaptation project, with a new option to define and set a custom selection presentation variant as the default. For more information, see [Extending the Delivered Apps Manifest Using an Adaptation Project](../06_SAP_Fiori_Elements/extending-the-delivered-apps-manifest-using-an-adaptation-project-a2b24a6.md) and [Extending Delivered Apps Using Adaptation Extensions](../06_SAP_Fiori_Elements/extending-delivered-apps-using-adaptation-extensions-52fc48b.md).

-   For analytical list pages, you can now add colors to the legends based on the dimension values. For more information, see [Chart-Only View](../06_SAP_Fiori_Elements/configuring-the-chart-only-view-as-the-default-option-8e6e885.md).

-   Similar to `sap.ui.table.*` types, responsive tables in the list report and analytical list page now show the *Clear All* option by default when multiselect is enabled. For more information, see [Enabling Multiple Selection in Tables](../06_SAP_Fiori_Elements/enabling-multiple-selection-in-tables-116b5d8.md).




</td>
</tr>
<tr>
<td valign="top">

The following changes and new features are available for SAP Fiori elements for OData V4:

-   Applications can now pass the context when using `preferredMode=create`. For more information, see [Handling of the preferredMode Parameter](../06_SAP_Fiori_Elements/handling-of-the-preferredmode-parameter-bfaf3cc.md).

-   SAP Fiori elements now enables you to show and hide fields in object page facets. For more information, see [Showing and Hiding Content in Object Page Facets](../06_SAP_Fiori_Elements/showing-and-hiding-content-in-object-page-facets-9fcea86.md).

-   You can now sort tables based on navigation properties. For more information, see [Enabling Table Personalization](../06_SAP_Fiori_Elements/enabling-table-personalization-3e2b4d2.md).

-   The standard Create action now uses user default values from SAP Fiori launchpad to prefill the action dialog. For more information, see [Prefilling Fields When Creating a New Entity](../06_SAP_Fiori_Elements/prefilling-fields-when-creating-a-new-entity-11ff444.md).

-   SAP Fiori elements now allows you to save the selected tab in the page variant management dialog for list reports using multiple table mode. For more information, see [Enabling an App for Key User Adaptation](../06_SAP_Fiori_Elements/enabling-an-app-for-key-user-adaptation-ccd45ba.md).

-   You can now display field labels in a table column containing a field group when `showDataFieldsLabel` is set to `true` in the manifest. For more information, see [Grouping of Fields](../06_SAP_Fiori_Elements/grouping-of-fields-7d7a0c4.md).




</td>
</tr>
</table>



<a name="loiof21858fa6a07451c9cb86e0c023a7092__section_r5v_3h5_zcb"/>

## Demo Kit Improvements


<table>
<tr>
<td valign="top">

**Demo Kit News Section with Notifications**

We implemented a *News* section with notifications where you can get highlights on important news about SAPUI5. When we upload new information, you’ll see a notification bell with a counter in the main toolbar.

![](images/WN_1_97_Demo_Kit_News_fe57420.png)



</td>
</tr>
</table>

**Related Information**  


[What's New in SAPUI5 1.108](what-s-new-in-sapui5-1-108-799291a.md "With this release SAPUI5 is upgraded from version 1.107 to 1.108.")

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

