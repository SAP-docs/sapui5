<!-- loio7a67837a0ee544eea8f19b19e288d507 -->

# What's New in SAPUI5 1.111

With this release SAPUI5 is upgraded from version 1.110 to 1.111.

> ### Tip:  
> If you want to do a search across all versions of the What's New content, you can also find it in the [SAPUI5 What's New viewer](https://help.sap.com/whats-new/67f60363b57f4ac0b23efd17fa192d60).

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

1.111 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.Input`, `sap.m.MultiInput`, `sap.m.ComboBox`, `sap.m.MultiComboBox`** 

</td>
<td valign="top">

**`sap.m.Input`, `sap.m.MultiInput`, `sap.m.ComboBox`, `sap.m.MultiComboBox`**

The type-ahead \(autocomplete\) functionality is updated to always suggest the exactly matched item and not autocomplete the value further, if there are other non-exact item matches.

<sub>Changed•Control•Info Only•1.111</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2023-02-23

</td>
</tr>
<tr>
<td valign="top">

1.111 

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

We have introduced a new `navigationFinished` event. The event is fired when navigation between two pages has completed regardless of whether the DOM is ready or not. This is useful when performing navigation before the `sap.m.NavContainer` is rendered. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.NavContainer).

<sub>Changed•Control•Info Only•1.111</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2023-02-23

</td>
</tr>
<tr>
<td valign="top">

1.111 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.IllustratedMessage`** 

</td>
<td valign="top">

**`sap.m.IllustratedMessage`**

We have introduced a new `enableDefaultTitleAndDescription` property. It provides the option to enable/disable the default title and description when using the default illustration set. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.IllustratedMessage).

<sub>Changed•Control•Info Only•1.111</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2023-02-23

</td>
</tr>
<tr>
<td valign="top">

1.111 

</td>
<td valign="top">

Deprecated 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.ActionSelect`** 

</td>
<td valign="top">

**`sap.m.ActionSelect`**

We have deprecated the `sap.m.ActionSelect` control.

<sub>Deprecated•Control•Info Only•1.111</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2023-02-23

</td>
</tr>
<tr>
<td valign="top">

1.111 

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

We have implemented the `initialFocusedDate` property in `sap.ui.unified.Calendar`, which holds a reference to a JavaScript Date Object and can be used to define the date that was initially navigated to in the calendar. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.unified.Calendar).

<sub>Changed•Control•Info Only•1.111</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2023-02-23

</td>
</tr>
<tr>
<td valign="top">

1.111 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.unified.CalendarLegend`** 

</td>
<td valign="top">

**`sap.ui.unified.CalendarLegend`**

The `sap.ui.unified.CalendarLegend` control offers a new functionality. If an instance of this is associated to `sap.ui.unified.Calendar`, its calendar legend items can be focused and keyboard navigation between them is provided. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.unified.CalendarLegend).

<sub>Changed•Control•Info Only•1.111</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2023-02-23

</td>
</tr>
<tr>
<td valign="top">

1.111 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.DynamicDateRange`** 

</td>
<td valign="top">

**`sap.m.DynamicDateRange`**

We have implemented a new `calendarWeekNumbering` property in the `sap.m.DynamicDateRange`. Using this property, you can set predefined settings to the control about week numbering and the first day of the week. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.core.date.CalendarWeekNumbering).

<sub>Changed•Control•Info Only•1.111</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2023-02-23

</td>
</tr>
<tr>
<td valign="top">

1.111 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.DynamicDateRange`** 

</td>
<td valign="top">

**`sap.m.DynamicDateRange`**

We have implemented new options in the `sap.m.DynamicDateRange` control for `Minutes`, `Last Hours`, `Next Minutes` and `Next Hours`. Using these options, you can select smaller time frames. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.DynamicDateRange).

<sub>Changed•Control•Info Only•1.111</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2023-02-23

</td>
</tr>
<tr>
<td valign="top">

1.111 

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

-   You can now create cards from the list report tables that can be added to the *Insights* section of *My Home* in SAP S/4HANA Cloud Public Edition. For more information, see [Creating Cards for the Insights Cards Section of My Home in SAP S/4HANA Cloud Public Edition and My Home in SAP S/4HANA](../06_SAP_Fiori_Elements/creating-cards-for-the-insights-cards-section-of-my-home-in-sap-s-4hana-cloud-public-edit-9b13559.md) .


<sub>Changed•SAP Fiori Elements•Info Only•1.111</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2023-02-23

</td>
</tr>
<tr>
<td valign="top">

1.111 

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

The following changes and new features are available forSAP Fiori elements for OData V4:

-   You can now hide empty table rows in edit mode. For more information, see [Enabling Inline Creation Mode or Empty Row Mode for Table Entries](../06_SAP_Fiori_Elements/enabling-inline-creation-mode-or-empty-row-mode-for-table-entries-cfb04f0.md).

-   You can now enable the *Copy* button in the list report header and the object page header. For more information, see [Actions in the List Report](../06_SAP_Fiori_Elements/actions-in-the-list-report-993e99e.md) and [Enabling Actions in the Object Page Header](../06_SAP_Fiori_Elements/enabling-actions-in-the-object-page-header-5fe4396.md).

-   Fiscal annotations are now available in the filter bar and the field. For more information, see [Further Features of the Field](../06_SAP_Fiori_Elements/further-features-of-the-field-f49a0f7.md) .

-   The chart building block now supports control variant management. For more information, see [Passing Variant IDs as URL Parameters](../06_SAP_Fiori_Elements/passing-variant-ids-as-url-parameters-4132ffa.md).

-   We've replaced the simple *Share* button with a *Share* menu button. The menu can now also contain the *Chat in Microsoft Teams* option.

    ![](images/Chat_In_Microsoft_Teams_-_Share_Menu_Button_3b8f67e.png)

    For more information, see [The Share Functionality](../06_SAP_Fiori_Elements/the-share-functionality-022bf0d.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.111</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2023-02-23

</td>
</tr>
<tr>
<td valign="top">

1.111 

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

User input into inactive rows is now regarded as a pending change by

-   `sap.ui.model.odata.v4.ODataListBinding#hasPendingChanges`,
-   `sap.ui.model.odata.v4.ODataContextBinding#hasPendingChanges`,
-   `sap.ui.model.odata.v4.ODataModel#hasPendingChanges`;

it can be reset using

-   `sap.ui.model.odata.v4.ODataListBinding#resetChanges`,
-   `sap.ui.model.odata.v4.ODataContextBinding#resetChanges`,
-   `sap.ui.model.odata.v4.ODataModel#resetChanges`.

You can prevent the activation of inactive rows after user input since SAPUI5 1.109 using `sap.ui.base.Event#preventDefault` in the handler of the `createActivate` event.

For more information, see the API Reference for

-   `ODataListBinding`: [`hasPendingChanges`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding/methods/hasPendingChanges) and [`resetChanges`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding/methods/resetChanges),
-   `ODataContextBinding`: [`hasPendingChanges`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataContextBinding/methods/hasPendingChanges) and [`resetChanges`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataContextBinding/methods/resetChanges),
-   `ODataModel`: [`hasPendingChanges`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel/methods/hasPendingChanges) and [`resetChanges`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel/methods/resetChanges),
-   [`Event.preventDefault`](https://ui5.sap.com/#/api/sap.ui.base.Event/methods/preventDefault), and [`createActivate`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding/events/createActivate).

<sub>Changed•Feature•Info Only•1.111</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2023-02-23

</td>
</tr>
<tr>
<td valign="top">

1.111 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**Dates, Times, Timestamps, and Time Zones** 

</td>
<td valign="top">

**Dates, Times, Timestamps, and Time Zones**

The new version of SAPUI5 introduces the following features for time zone configuration:

-   We provide `sap.ui.core.date.UI5Date`. It inherits from the JavaScript `Date` and works in a similar way, but uses the time zone provided via the `sap-timezone` URL parameter instead of the local time zone of the browser. The `UI5Date.getInstance` factory method returns a `UI5Date` instance if a time zone different from the local time zone of the browser was provided to SAPUI5; otherwise, it returns a JavaScript `Date`.

    For more information, see [Dates, Times, Timestamps, and Time Zones](../04_Essentials/dates-times-timestamps-and-time-zones-6c9e61d.md).

-   `DateFormat` and UI5 types in `sap.ui.model.odata.type` now use `UI5Date`, and any methods previously returning a JavaScript `Date` now return a `UI5Date` if a time zone different from the local time zone of the browser was provided.
-   The `DynamicDateRange` control now provides the `toDates` static public method that replaces `DynamicDateUtil`'s existing `toDates` method and returns either `UI5Date`s or native JavaScript `Date`s.
-   We have adapted the following controls to use `UI5Date` instead of JavaScript's native `Date`:
    -   `sap.m.DatePicker`,
    -   `sap.m.TimePicker`,
    -   `sap.m.DateTimePicker`,
    -   `sap.m.DateRangeSelection`,
    -   `sap.ui.unified.Calendar`.

-   We provide the `getModelValue` method for

    -   `sap.ui.model.odata.type.Date`,
    -   `sap.ui.model.odata.type.DateTime`,
    -   `sap.ui.model.odata.type.DateTimeOffset`,
    -   `sap.ui.model.odata.type.Time`,
    -   `sap.ui.model.odata.type.TimeOfDay`.

    It returns the model representation of the provided `UI5Date` or `Date`.


<sub>Changed•Feature•Info Only•1.111</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2023-02-23

</td>
</tr>
<tr>
<td valign="top">

1.111 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.SelectDialog`** 

</td>
<td valign="top">

**`sap.m.SelectDialog`**

To improve the accessibility of the control, the initial focus is now set on the list during data loading. Once the data is loaded, the focus is moved to the first list item. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.SelectDialog).

<sub>Changed•Control•Info Only•1.111</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2023-02-23

</td>
</tr>
<tr>
<td valign="top">

1.111 

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

-   We have added a new `timeout` setting for data request sections. It describes the timeout \(in milliseconds\) for the request. A value of 0 means that there is no timeout. The default value is 15000 milliseconds. For more information, see the [Data Handling](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/features/data) section and the [Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/data) in the Card Explorer.

-   As a card developer, you can now use rating indicators in the Object card. For more information, see the [Object Card](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/typesDeclarative/object) section and the [Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/object/object1) in the Card Explorer.


<sub>Changed•Control•Info Only•1.111</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2023-02-23

</td>
</tr>
<tr>
<td valign="top">

1.111 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Announcement 

</td>
<td valign="top">

**Changed Format of What's New Content** 

</td>
<td valign="top">

**Changed Format of What's New Content**

We have introduced a new channel for our What's New content: You can now view the content in the What's New viewer as well. The What's New viewer allows you to display and search for entries across all versions. For each entry, various attributes are displayed, for example, the type of change and whether it is related to a feature or a control.

We have also changed the format of the What's New content in the Demo Kit. You can show or hide the columns for these attributes. Similar to the What's New viewer, you can filter the entries based on these attributes by clicking on *Filter* or simply based on a search term. For more information, see [SAPUI5 What's New Viewer](https://help.sap.com/whats-new/67f60363b57f4ac0b23efd17fa192d60) and [Want to Know What’s New in SAPUI5 and SAP Fiori Elements? Check the What’s New Viewer!](https://blogs.sap.com/?p=1702680).

<sub>Changed•Announcement•Info Only•1.111</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2023-02-23

</td>
</tr>
<tr>
<td valign="top">

1.111 

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

We have provided a new option for `customizeConfig` property: The `clientSideMandatoryCheck` property now allows you to run a check on client side whether a field of the `sap.ui.comp.smartfield.SmartField` control created inside the table has a value. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smarttable.SmartTable%23methods/getCustomizeConfig)  and the [Sample](https://ui5.sap.com/#/entity/sap.ui.comp.smarttable.SmartTable/sample/sap.ui.comp.sample.smarttable.mtableCustomizeConfig).

<sub>Changed•Control•Info Only•1.111</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2023-02-23

</td>
</tr>
</table>

**Related Information**  


[What's New in SAPUI5 1.131](what-s-new-in-sapui5-1-131-7d24d94.md "With this release SAPUI5 is upgraded from version 1.130 to 1.131.")

[What's New in SAPUI5 1.130](what-s-new-in-sapui5-1-130-85609d4.md "With this release SAPUI5 is upgraded from version 1.129 to 1.130.")

[What's New in SAPUI5 1.129](what-s-new-in-sapui5-1-129-d22b8af.md "With this release SAPUI5 is upgraded from version 1.128 to 1.129.")

[What's New in SAPUI5 1.128](what-s-new-in-sapui5-1-128-1f76220.md "With this release SAPUI5 is upgraded from version 1.127 to 1.128.")

[What's New in SAPUI5 1.127](what-s-new-in-sapui5-1-127-e5e1317.md "With this release SAPUI5 is upgraded from version 1.126 to 1.127.")

[What's New in SAPUI5 1.126](what-s-new-in-sapui5-1-126-1d98116.md "With this release SAPUI5 is upgraded from version 1.125 to 1.126.")

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

