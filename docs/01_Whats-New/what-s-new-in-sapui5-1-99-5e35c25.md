<!-- loio5e35c2512e014e3b9831afd1cd041ed4 -->

# What's New in SAPUI5 1.99

With this release SAPUI5 is upgraded from version 1.98 to 1.99.



<a name="loio5e35c2512e014e3b9831afd1cd041ed4__section_vvy_452_rrb"/>

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

For security reasons, SAPUI5 versions that are no longer maintained will be removed from the UI5 content delivery network \(CDN\) one year after their end of maintenance. If a version is still in maintenance, patches of that version that are older than one year will also be removed. We have noted that a number of customers are still using such outdated versions or patches. If this affects you, please note that once these versions or patches are removed, your applications will break. Please update to a more recent version or patch. For more information, see: [Removing Outdated UI5 Versions from UI5 CDN](https://blogs.sap.com/2021/01/26/removing-outdated-ui5-versions-from-ui5-cdn/) as well as the UI5 notifications in the Demo Kit.



</td>
<td valign="top">

n/a



</td>
</tr>
</table>



<a name="loio5e35c2512e014e3b9831afd1cd041ed4__section_qwl_pb5_zcb"/>

## Improved Features


<table>
<tr>
<td valign="top">

**SAPUI5 OData V4 Model**

The new version of the SAPUI5 OData V4 model introduces the following features:

-   You can now use the `filter`, `sort`, `changeParameters`, and `suspend` methods on a list binding with transient contexts if the list binding is either a [root binding](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding%23methods/getRootBinding) or its `$$ownRequest` binding parameter is set to `true`.

-   We removed the experimental `sap.ui.model.odata.v4.ODataContextBinding#moveEntityTo` method.

-   The new [`sap.ui.model.odata.v4.ODataModel#getKeepAliveContext`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel%23methods/getKeepAliveContext) method searches for a matching context in list bindings with the new [`$$getKeepAliveContext`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel%23methods/bindList) binding parameter. The found context is [set to keep-alive](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context%23methods/setKeepAlive) and returned. For more information, see [Relative Bindings](../04_Essentials/data-reuse-648e360.md#loio648e360fa22d46248ca783dc6eb44531__section_relativeBindings).

-   In a list binding, you can now create new records at the beginning of the list, but below previously created new records. For this, you have to set the `bAtEnd` parameter to `false` in the first call of [`sap.ui.model.odata.v4.ODataListBinding#create`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding%23methods/create), and to `true` in all subsequent calls.

-   We enabled the [creation](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding%23methods/create) of inactive rows, introduced with SAPUI5 1.97 for `Auto` update groups, also for `API` groups. For more information on batch groups, see [Batch Control](../04_Essentials/batch-control-74142a3.md).




</td>
</tr>
</table>



<a name="loio5e35c2512e014e3b9831afd1cd041ed4__section_rqn_wd5_zcb"/>

## Improved Controls


<table>
<tr>
<td valign="top">

**`sap.m.Carousel`**

The control now shows `sap.m.illustratedMessage` in use cases where there’s nothing to display. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.Carousel) and the [Sample](https://ui5.sap.com/#/entity/sap.m.Carousel/sample/sap.m.sample.CarouselEmptyMessages).



</td>
</tr>
<tr>
<td valign="top">

**`sap.m.DynamicDateRange` \(Experimental\)**

We have added new standard options to the control:

-   `Date and Time`: Used to select a single Date/Time value with a `DateTimePicker`.

-   `From / To (Date and Time)`, `From (Date and Time)` `То (Date and Time)`. These options are similar to the existing `From / To`, `From`, and `To`, but the new ones include time selection. When the new options are not used together with their date-only alternatives, their names are simplified, respectively to `From / To`, `From`, and `To`.

-   `Month in Year`: When this option is selected, a `Calendar` control appears, and the user can pick a month and a year.


For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.TimePicker) and the [Sample](https://ui5.sap.com/#/entity/sap.m.TimePicker/sample/sap.m.sample.TimePicker).



</td>
</tr>
<tr>
<td valign="top">

**`sap.m.SinglePlanningCalendar`**

We have introduced new behavior – an option to zoom in and zoom out to make the calendar appointments easier to read. You can do this by using the new `scaleFactor` property that changes the height of the calendar rows. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.SinglePlanningCalendar) and the [Sample](https://ui5.sap.com/#/entity/sap.m.SinglePlanningCalendar).



</td>
</tr>
<tr>
<td valign="top">

<code><b>sap.m.upload.UploadSet</b></code>

You can now drag the `UploadSetItems` within `UploadSet` to rearrange the items.

The `itemDragStart` and `itemDrop` events are also being exposed. These events return the item as a parameter to the event handler. The events are triggered when you drag and drop items that have already been uploaded.



</td>
</tr>
<tr>
<td valign="top">

**`sap.ui.comp.smartfield.SmartField`**

`SmartField` in read-only mode now supports time zones for `Edm.DateTimeOffset` fields with the following annotation

```
<Annotation Term="com.sap.vocabularies.Common.v1.Timezone" Path="ClockInTimezone"/>
```

You can format the date in the `sap.ui.core.CustomData` class with `key:“dateFormatSettings”`. You can also add a property with 3 options for the time zone: `show`, `hide`, or apply a `pattern`.



</td>
</tr>
<tr>
<td valign="top">

**`sap.ui.comp.smartfilterbar.SmartFilterBar`**

-   `SmartFilterBar` now allows you to set the default operation for a filter field just by setting the `conditionPanelDefaultOperation` configuration in the `ControlConfiguration` object. The `SmartFilterBar` filter fields can have different default operations as long as they are valid for the data type of the particular field. For instance, you can’t set a "StartsWith" operation in a numeric field because this is only relevant for string filter fields. If an invalid default operation is set, it is ignored.

-   You can now configure all `Edm.DateTimeOffset` fields with `filter-restriction="interval"` to render the new `DynamicDateRange` control by setting the `useDateRangeType` property of `SmartFilterBar` to `true` or by using `controlConfiguration`. We've also added two new options for these fields: *Date and Time* and *Date Time Range*.

    Have in mind that extending `DateRangeType` is not supported. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.ui.comp.smartfilterbar.SmartFilterBar/sample/sap.ui.comp.sample.smartfilterbar.UseDateRangeType).

-   Accessing internal controls from applications often affects the expected functionality of `SmartFilterBar`. Therefore, we have deprecated the following methods that return instances of internal controls in `sap.ui.comp.smartfilterbar.SmartFilterBar`:

    -   `sap.ui.comp.smartfilterbar.SmartFilterBar#getControlByKey`

    -   `sap.ui.comp.smartfilterbar.SmartFilterBar#determineControlByFilterItem`

    -   `sap.ui.comp.smartfilterbar.SmartFilterBar#determineControlByName`

    -   `sap.ui.comp.smartfilterbar.SmartFilterBarFilterGroupItem#setControl`

    -   `sap.ui.comp.smartfilterbar.SmartFilterBarFilterGroupItem#getControl`



For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.ui.comp.smartfilterbar.SmartFilterBar/sample/sap.ui.comp.sample.smartfilterbar.CustomField). 



</td>
</tr>
<tr>
<td valign="top">

**`sap.ui.comp.smarttable.SmartTable`**

We now support the `com.sap.vocabularies.Common.v1.Timezone` annotation. The annotation transforms the date and point in time of a property of type `Edm.DateTimeOffset` into the time zone as provided by the annotation. For more information, see the [API Reference for `SmartTable`](https://ui5.sap.com/#/api/sap.ui.comp.smarttable.SmartTable%23annotations/Timezone), the [API Reference for `DateFormat`](https://ui5.sap.com/#/api/sap.ui.core.format.DateFormat), and the [Sample](https://ui5.sap.com/#/entity/sap.ui.comp.smarttable.SmartTable/sample/sap.ui.comp.sample.smarttable).



</td>
</tr>
<tr>
<td valign="top">

**`sap.ui.integration.widgets.Card`**

-   List, Table, and Timeline cards now \(experimentally\) support pagination. For more information, see the [Pagination](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/features/pagination) section and the [Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/pagination/client) in the Card Explorer.

-   We have \(experimentally\) enabled the List, Table, Analytical, and Timeline cards to display illustrated messages when there is no data for the card’s content. In addition, you can use the card manifest to further configure specific illustrated messages and texts for chosen no-data scenarios. For more information, see the [Custom Error Message](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/configuration/customErrorMessages) section and the [Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/customErrorMessages) in the Card Explorer.

-   The Adaptive card now supports schema 1.3 of MS Adaptive Cards. This comes with several new features: `label` support for input elements inside cards; support for required fields via the `isRequired` property of the input elements; support for `errorMessage`; support for the `style` property for actions. For more information, see the [Adaptive Card](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/types/adaptive) Learn section and the [Styled Actions Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/adaptive/styled-actions) in the Card Explorer.

-   The Calendar card supports placeholder loading - a type of busy indicator that provides the user with a rough outline of the content while it is loading.




</td>
</tr>
</table>



<a name="loio5e35c2512e014e3b9831afd1cd041ed4__section_cps_cg5_zcb"/>

## Deprecations


<table>
<tr>
<td valign="top">

There are currently no major deprecations. For a complete list of all deprecations, see [Deprecated APIs](https://ui5.sap.com/#/api/deprecated). 



</td>
</tr>
</table>



<a name="loio5e35c2512e014e3b9831afd1cd041ed4__section_g3r_bf5_zcb"/>

## SAP Fiori Elements


<table>
<tr>
<td valign="top">

The following changes and new features are available for SAP Fiori elements for OData V2:

-   The `DataFieldWithUrl` annotation is now supported in the header section for external navigation targets. For more information, see [Navigation from an App \(Outbound Navigation\)](../06_SAP_Fiori_Elements/navigation-from-an-app-outbound-navigation-d782acf.md).

-   In the object page, you now have an option to navigate to the next object in the list using the *Save and Next* action. For more information, see [Navigation to an Object Page in Edit Mode](../06_SAP_Fiori_Elements/navigation-to-an-object-page-in-edit-mode-8665847.md).




</td>
</tr>
<tr>
<td valign="top">

The following changes and new features are available for SAP Fiori elements for OData V4:

-   You can now configure your app to disable the filter bar on a list report. For more information, see [Configuring Filter Bars](../06_SAP_Fiori_Elements/configuring-filter-bars-4bd7590.md).

-   We now support the handling of fields annotated with `Core.ComputedDefaultValue`. For more information, see [Adding Actions to Tables](../06_SAP_Fiori_Elements/adding-actions-to-tables-b623e0b.md).

-   Single-valued date fields now use the `sap.m.DynamicDateRange` control. This enables end users to use semantic date operators like `"TODAY"` and `"TOMORROW"`, as well as date pickers. For more information, see [Enabling Semantic Operators in the Filter Bar](../06_SAP_Fiori_Elements/enabling-semantic-operators-in-the-filter-bar-fef65d0.md).

-   You can now also use semantic dates in the `FilterBar` building block. For more information, see [Building Blocks](../06_SAP_Fiori_Elements/building-blocks-24c1304.md).

-   You can now use the `UI.TextArrangement` annotation to configure the display format of a table column of the value help. For more information, see [Field Help](../06_SAP_Fiori_Elements/field-help-a5608ea.md).

-   Applications can now configure custom actions that create new objects. For more information, see [Configuring Custom Actions that Create New Objects](../06_SAP_Fiori_Elements/configuring-custom-actions-that-create-new-objects-8cd6877.md).

-   You can now provide a *Search* field in analytical list page apps. For more information, see [Setting the Table Type](../06_SAP_Fiori_Elements/setting-the-table-type-7f844f1.md).

-   You can now use a multi-input field within a table on the object page. For more information, see [Using the Multi-Input Field on the Object Page](../06_SAP_Fiori_Elements/using-the-multi-input-field-on-the-object-page-04ff5b1.md).




</td>
</tr>
</table>

**Parent topic:** [Previous Versions](previous-versions-6660a59.md "")

**Related Information**  


[What's New in SAPUI5 1.105](what-s-new-in-sapui5-1-105-5567dcc.md "With this release SAPUI5 is upgraded from version 1.104 to 1.105.")

[What's New in SAPUI5 1.104](what-s-new-in-sapui5-1-104-f01ebd4.md "With this release SAPUI5 is upgraded from version 1.103 to 1.104.")

[What's New in SAPUI5 1.103](what-s-new-in-sapui5-1-103-7534ae8.md "With this release SAPUI5 is upgraded from version 1.102 to 1.103.")

[What's New in SAPUI5 1.102](what-s-new-in-sapui5-1-102-b530db3.md "With this release SAPUI5 is upgraded from version 1.101 to 1.102.")

[What's New in SAPUI5 1.101](what-s-new-in-sapui5-1-101-5a18410.md "With this release SAPUI5 is upgraded from version 1.100 to 1.101.")

[What's New in SAPUI5 1.100](what-s-new-in-sapui5-1-100-5deb78f.md "With this release SAPUI5 is upgraded from version 1.99 to 1.100.")

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

