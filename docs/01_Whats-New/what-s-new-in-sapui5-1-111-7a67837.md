<!-- loio7a67837a0ee544eea8f19b19e288d507 -->

<link rel="stylesheet" type="text/css" href="../css/sap-icons.css"/>

# What's New in SAPUI5 1.111

With this release SAPUI5 is upgraded from version 1.110 to 1.111.

> ### Tip:  
> If you want to do a search across all versions of the What's New content, you can also find it in the [SAPUI5 What's New Viewer](https://help.sap.com/whats-new/67f60363b57f4ac0b23efd17fa192d60).

> ### Note:  
> Content marked as <span style="color:#666666;"><span class="SAP-icons"></span></span>** [Preview](https://help.sap.com/docs/whats-new-disclaimer)** is provided as a courtesy, without a warranty, and may be subject to change. For more information, see the [preview disclaimer](https://help.sap.com/docs/whats-new-disclaimer).

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

 Upcoming 



</td>
<td valign="top">

 Deleted 



</td>
<td valign="top">

 Announcement 



</td>
<td valign="top">

 **End of Cloud Provisioning for SAPUI5 Versions \(Q1/2023\).** 



</td>
<td valign="top">

**End of Cloud Provisioning for SAPUI5 Versions \(Q1/2023\)**

**Minor Versions Reaching Their End of Cloud Provisioning**

The following versions including all patches will be removed entirely:

-   1.90
-   1.93
-   1.97
-   1.98

Action: Upgrade to a version that’s still in maintenance.

**Patch Versions Reaching Their End of Cloud Provisioning**

The following patches will be removed:

-   Long-term maintenance versions:

    -   1.38.53 to 1.38.55
    -   1.71.44 to 1.71.46
    -   1.84.21 to 1.84.23
    -   1.96.2 to 1.96.7

    Action: Upgrade to the latest available patch for the respective SAPUI5 version.


For more information, see [UI5 Releases Ending Service in 2023](https://blogs.sap.com/2022/12/05/ui5-releases-ending-service-in-2023/) and [Version Overview](https://ui5.sap.com/versionoverview.html).

<sub><span style="color:#666666;"><span class="SAP-icons"></span></span>** [Preview](https://help.sap.com/docs/whats-new-disclaimer)**•Deleted•Announcement•Info Only•Upcoming</sub>



</td>
<td valign="top">

 Required 



</td>
<td valign="top">

2023-03-31



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

-   You can now create cards from the list report tables that can be added to the *Insights* section of *My Home* in SAP S/4HANA Cloud. For more information, see [Creating Cards for the Insights Section of *My Home* in SAP S/4HANA Cloud](../06_SAP_Fiori_Elements/creating-cards-for-the-insights-section-of-my-home-in-sap-s-4hana-cloud-9b13559.md).


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

-   You can now hide empty table rows in edit mode. For more information, see [Enabling Inline Creation Mode or Empty Rows Mode for Table Entries](../06_SAP_Fiori_Elements/enabling-inline-creation-mode-or-empty-rows-mode-for-table-entries-cfb04f0.md).

-   You can now enable the *Copy* button in the list report header and the object page header. For more information, see [Actions in the List Report](../06_SAP_Fiori_Elements/actions-in-the-list-report-993e99e.md) and [Enabling Actions in the Object Page Header](../06_SAP_Fiori_Elements/enabling-actions-in-the-object-page-header-5fe4396.md).

-   Fiscal annotations are now available in the filter bar and the field. For more information, see [Further Features of the Field](../06_SAP_Fiori_Elements/further-features-of-the-field-f49a0f7.md) .

-   The chart building block now supports control variant management. For more information, see [Passing Variant IDs as URL Parameters](../06_SAP_Fiori_Elements/passing-variant-ids-as-url-parameters-4132ffa.md).

-   We've replaced the simple *Share* button with a *Share* menu button. The menu can now also contain the *Chat in Microsoft Teams* option.

     ![](images/Chat_In_Microsoft_Teams_-_Share_Menu_Button_3b8f67e.png) 

    For more information, see ["Share" Functionality](../06_SAP_Fiori_Elements/share-functionality-022bf0d.md).


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

We have provided a new option for `customizeConfig` property: The `clientSideMandatoryCheck` property now allows you to run a check on client side whether a field of the `sap.ui.comp.smartfield.SmartField` control created inside the table has a value. For more information, see the  [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smarttable.SmartTable%23methods/getCustomizeConfig)  and the [Sample](https://ui5.sap.com/#/entity/sap.ui.comp.smarttable.SmartTable/sample/sap.ui.comp.sample.smarttable.mtableCustomizeConfig).

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

