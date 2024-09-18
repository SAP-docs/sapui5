<!-- loio4f35848febaa44988ccf18941bcc4af8 -->

# What's New in SAPUI5 1.99

With this release SAPUI5 is upgraded from version 1.98 to 1.99.



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

1.99 

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

-   You can now use the `filter`, `sort`, `changeParameters`, and `suspend` methods on a list binding with transient contexts if the list binding is either a [root binding](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding%23methods/getRootBinding) or its `$$ownRequest` binding parameter is set to `true`.

-   We removed the experimental `sap.ui.model.odata.v4.ODataContextBinding#moveEntityTo` method.

-   The new [`sap.ui.model.odata.v4.ODataModel#getKeepAliveContext`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel%23methods/getKeepAliveContext) method searches for a matching context in list bindings with the new [`$$getKeepAliveContext`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel%23methods/bindList) binding parameter. The found context is [set to keep-alive](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context%23methods/setKeepAlive) and returned. For more information, see [Relative Bindings](../04_Essentials/data-reuse-648e360.md#loio648e360fa22d46248ca783dc6eb44531__section_relativeBindings).

-   In a list binding, you can now create new records at the beginning of the list, but below previously created new records. For this, you have to set the `bAtEnd` parameter to `false` in the first call of [`sap.ui.model.odata.v4.ODataListBinding#create`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding%23methods/create), and to `true` in all subsequent calls.

-   We enabled the [creation](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding%23methods/create) of inactive rows, introduced with SAPUI5 1.97 for `Auto` update groups, also for `API` groups. For more information on batch groups, see [Batch Control](../04_Essentials/batch-control-74142a3.md).


<sub>Changed•Feature•Info Only•1.99</sub>

</td>
<td valign="top">

Info Only

</td>
<td valign="top">

2022-02-22

</td>
</tr>
<tr>
<td valign="top">

1.99 

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

The control now shows `sap.m.illustratedMessage` in use cases where there’s nothing to display. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.Carousel) and the [Sample](https://ui5.sap.com/#/entity/sap.m.Carousel/sample/sap.m.sample.CarouselEmptyMessages).

<sub>Changed•Control•Info Only•1.99</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-02-22

</td>
</tr>
<tr>
<td valign="top">

1.99 

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

We have added new standard options to the control:

-   `Date and Time`: Used to select a single Date/Time value with a `DateTimePicker`.

-   `From / To (Date and Time)`, `From (Date and Time)` `То (Date and Time)`. These options are similar to the existing `From / To`, `From`, and `To`, but the new ones include time selection. When the new options are not used together with their date-only alternatives, their names are simplified, respectively to `From / To`, `From`, and `To`.

-   `Month in Year`: When this option is selected, a `Calendar` control appears, and the user can pick a month and a year.


For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.TimePicker) and the [Sample](https://ui5.sap.com/#/entity/sap.m.TimePicker/sample/sap.m.sample.TimePicker).

<sub>Changed•Control•Info Only•1.99</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-02-22

</td>
</tr>
<tr>
<td valign="top">

1.99 

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

We have introduced new behavior – an option to zoom in and zoom out to make the calendar appointments easier to read. You can do this by using the new `scaleFactor` property that changes the height of the calendar rows. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.SinglePlanningCalendar) and the [Sample](https://ui5.sap.com/#/entity/sap.m.SinglePlanningCalendar).

<sub>Changed•Control•Info Only•1.99</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-02-22

</td>
</tr>
<tr>
<td valign="top">

1.99 

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

**`sap.m.upload.UploadSet`**

You can now drag the `UploadSetItems` within `UploadSet` to rearrange the items.

The `itemDragStart` and `itemDrop` events are also being exposed. These events return the item as a parameter to the event handler. The events are triggered when you drag and drop items that have already been uploaded.

<sub>Changed•Control•Info Only•1.99</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-02-22

</td>
</tr>
<tr>
<td valign="top">

1.99 

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

`SmartField` in read-only mode now supports time zones for `Edm.DateTimeOffset` fields with the following annotation

```
<Annotation Term="com.sap.vocabularies.Common.v1.Timezone" Path="ClockInTimezone"/>
```

You can format the date in the `sap.ui.core.CustomData` class with `key:“dateFormatSettings”`. You can also add a property with 3 options for the time zone: `show`, `hide`, or apply a `pattern`.

<sub>Changed•Control•Info Only•1.99</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-02-22

</td>
</tr>
<tr>
<td valign="top">

1.99 

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

<sub>Changed•Control•Info Only•1.99</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-02-22

</td>
</tr>
<tr>
<td valign="top">

1.99 

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

We now support the `com.sap.vocabularies.Common.v1.Timezone` annotation. The annotation transforms the date and point in time of a property of type `Edm.DateTimeOffset` into the time zone as provided by the annotation. For more information, see the [API Reference for `SmartTable`](https://ui5.sap.com/#/api/sap.ui.comp.smarttable.SmartTable%23annotations/Timezone), the [API Reference for `DateFormat`](https://ui5.sap.com/#/api/sap.ui.core.format.DateFormat), and the [Sample](https://ui5.sap.com/#/entity/sap.ui.comp.smarttable.SmartTable/sample/sap.ui.comp.sample.smarttable).

<sub>Changed•Control•Info Only•1.99</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-02-22

</td>
</tr>
<tr>
<td valign="top">

1.99 

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

-   List, Table, and Timeline cards now \(experimentally\) support pagination. For more information, see the [Pagination](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/features/pagination) section and the [Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/pagination/client) in the Card Explorer.

-   We have \(experimentally\) enabled the List, Table, Analytical, and Timeline cards to display illustrated messages when there is no data for the card’s content. In addition, you can use the card manifest to further configure specific illustrated messages and texts for chosen no-data scenarios. For more information, see the [Custom Error Message](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/configuration/customErrorMessages) section and the [Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/customErrorMessages) in the Card Explorer.

-   The Adaptive card now supports schema 1.3 of MS Adaptive Cards. This comes with several new features: `label` support for input elements inside cards; support for required fields via the `isRequired` property of the input elements; support for `errorMessage`; support for the `style` property for actions. For more information, see the [Adaptive Card](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/types/adaptive) Learn section and the [Styled Actions Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/adaptive/styled-actions) in the Card Explorer.

-   The Calendar card supports placeholder loading - a type of busy indicator that provides the user with a rough outline of the content while it is loading.


<sub>Changed•Control•Info Only•1.99</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-02-22

</td>
</tr>
<tr>
<td valign="top">

1.99 

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

-   The `DataFieldWithUrl` annotation is now supported in the header section for external navigation targets. For more information, see [Navigation from an App \(Outbound Navigation\)](../06_SAP_Fiori_Elements/navigation-from-an-app-outbound-navigation-d782acf.md).

-   In the object page, you now have an option to navigate to the next object in the list using the *Save and Next* action. For more information, see [Navigation to an Object Page in Edit Mode](../06_SAP_Fiori_Elements/navigation-to-an-object-page-in-edit-mode-8665847.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.99</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-02-22

</td>
</tr>
<tr>
<td valign="top">

1.99 

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

-   You can now configure your app to disable the filter bar on a list report. For more information, see [Configuring Filter Bars](../06_SAP_Fiori_Elements/configuring-filter-bars-4bd7590.md).

-   We now support the handling of fields annotated with `Core.ComputedDefaultValue`. For more information, see [Adding Actions to Tables](../06_SAP_Fiori_Elements/adding-actions-to-tables-b623e0b.md).

-   Single-valued date fields now use the `sap.m.DynamicDateRange` control. This enables end users to use semantic date operators like `"TODAY"` and `"TOMORROW"`, as well as date pickers. For more information, see [Enabling Semantic Operators in the Filter Bar](../06_SAP_Fiori_Elements/enabling-semantic-operators-in-the-filter-bar-fef65d0.md).

-   You can now also use semantic dates in the `FilterBar` building block. For more information, see [Building Blocks](../06_SAP_Fiori_Elements/building-blocks-24c1304.md).

-   You can now use the `UI.TextArrangement` annotation to configure the display format of a table column of the value help. For more information, see [Field Help](../06_SAP_Fiori_Elements/field-help-a5608ea.md).

-   Applications can now configure custom actions that create new objects. For more information, see [Configuring Custom Actions that Create New Objects](../06_SAP_Fiori_Elements/configuring-custom-actions-that-create-new-objects-8cd6877.md).

-   You can now provide a *Search* field in analytical list page apps. For more information, see [Setting the Table Type](../06_SAP_Fiori_Elements/setting-the-table-type-7f844f1.md).

-   You can now use a multi-input field within a table on the object page. For more information, see [Using the Multi-Input Field on the Object Page](../06_SAP_Fiori_Elements/using-the-multi-input-field-on-the-object-page-04ff5b1.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.99</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-02-22

</td>
</tr>
</table>

**Related Information**  


[What's New in SAPUI5 1.125](what-s-new-in-sapui5-1-125-9d87044.md "With this release SAPUI5 is upgraded from version 1.124 to 1.125.")

[What's New in SAPUI5 1.124](what-s-new-in-sapui5-1-124-7f77c3f.md "With this release SAPUI5 is upgraded from version 1.123 to 1.124.")

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

