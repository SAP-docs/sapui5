<!-- loioaad03b5942bf4be481698ecf43ec295c -->

# What's New in SAPUI5 1.76

With this release SAPUI5 is upgraded from version 1.75 to 1.76.



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

1.76 

</td>
<td valign="top">

New 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**Team Calendar** 

</td>
<td valign="top">

**Team Calendar**

We have added a new demo application - the Team Calendar. It demonstrates the integration between `sap.m.PlanningCalendar` and `sap.m.SinglePlanningCalendar` controls, sharing the same data source. The Team Calendar can be used as a starting point for building a fully functional complex application. Find it in the [Demo Apps](https://ui5.sap.com/#demoapps).

<sub>New•Feature•Info Only•1.76</sub>

</td>
<td valign="top">

Info Only

</td>
<td valign="top">

2020-03-26

</td>
</tr>
<tr>
<td valign="top">

1.76 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**Card Explorer** 

</td>
<td valign="top">

**Card Explorer**

-   The Component card sample in the Explore section has been enhanced. To facilitate developers, we have added the option to download the bundle of all the files in the sample.
-   All the properties in the Learn section are now listed with their Since attribute. This will inform developers since which version each feature is available.

For more information, see [Card Explorer](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/index.html).

<sub>Changed•Feature•Info Only•1.76</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-03-26

</td>
</tr>
<tr>
<td valign="top">

1.76 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**One Page Acceptance Tests \(OPA5\)** 

</td>
<td valign="top">

**One Page Acceptance Tests \(OPA5\)**

We've introduced `Drag` and `Drop` actions to OPA5 to help with the most common cases. For more information, see [Simulating User Interactions on Controls](../04_Essentials/simulating-user-interactions-on-controls-8615a0b.md), the [API Reference](https://ui5.sap.com/#/api/sap.ui.test.actions) and the [Sample](https://ui5.sap.com/#/entity/sap.ui.test.Opa5/sample/sap.ui.core.sample.OpaAction).

<sub>Changed•Feature•Info Only•1.76</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-03-26

</td>
</tr>
<tr>
<td valign="top">

1.76 

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

The new version of the SAPUI5 OData V2 model introduces the following features:

-   A new `transitionMessagesOnly` binding parameter is provided for the `sap.ui.model.odata.v2.ODataListBinding` class.
-   The `updateAggregatedMessages` parameter of `sap.ui.model.odata.v2.ODataModel#read` is now public.
-   Existing server messages can be retrieved from the model using the `sap.ui.model.Context#getMessages` method.

<sub>Changed•Feature•Info Only•1.76</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-03-26

</td>
</tr>
<tr>
<td valign="top">

1.76 

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

-   You can now access the binding parameter of an operation, as described in [OData Operations](../04_Essentials/odata-operations-b54f789.md).
-   A property path provided to `sap.ui.model.odata.v4.Context#requestSideEffects` can be given the suffix "`*`" to enforce re-reading of all properties of the related entity.

    For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context%23methods/requestSideEffects).


> ### Restriction:  
> Due to the limited feature scope of this version of the SAPUI5 OData V4 model, check that all required features are in place before developing applications. Double-check the detailed documentation of the features, as certain parts of a feature may be missing. While we aim to be compatible with existing controls, some controls might not work due to small incompatibilities compared to `sap.ui.model.odata.(v2.)ODataModel`, or due to missing features in the model \(such as tree binding\). This also applies to smart controls \(`sap.ui.comp` library\) that do not support the SAPUI5 OData V4 model, as well as controls such as `TreeTable` and `AnalyticalTable`, which are not supported in combination with the SAPUI5 OData V4 model. The interface for applications has been changed for easier and more efficient use of the model. For a summary of these changes, see [Changes Compared to OData V2 Model](../04_Essentials/changes-compared-to-odata-v2-model-abd4d7c.md).

For more information, see [OData V4 Model](../04_Essentials/odata-v4-model-5de13cf.md), the [API Reference](https://ui5.sap.com/#/api/sap.ui.model.odata.v4), and the [Samples](https://ui5.sap.com/#/entity/sap.ui.model.odata.v4.ODataModel) in the Demo Kit.

<sub>Changed•Feature•Info Only•1.76</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-03-26

</td>
</tr>
<tr>
<td valign="top">

1.76 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.f.FlexibleColumnLayout`** 

</td>
<td valign="top">

**`sap.f.FlexibleColumnLayout`**

-   With the new `autoFocus` property, we’ve introduced the possibility to enable/disable the autofocus functionality of the `FlexibleColumnLayout` control.For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.f.FlexibleColumnLayout) and the [Sample](https://ui5.sap.com/#/entity/sap.f.FlexibleColumnLayout/sample/sap.f.sample.FlexibleColumnLayoutWithOneColumnStart).

-   We’ve introduced the `columnResize` event, which is fired when the resizing of each column of the control is complete.For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.f.FlexibleColumnLayout%23events/columnResize).


<sub>Changed•Control•Info Only•1.76</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-03-26

</td>
</tr>
<tr>
<td valign="top">

1.76 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.FacetFilter`** 

</td>
<td valign="top">

**`sap.m.FacetFilter`**

Optimization regarding the initial database service query has been introduced. There are cases when the `items` aggregation for the `FacetFilterList` could take a long time fetching data from the database service. Now we have added а `search` event, that fires when the `FacetFilterList` is opened. This enables developers to register a handler function to prevent the default filtering behavior by calling the `sap.ui.base.Event.prototype.preventDefault` function. As a result, no list items are loaded initially. In this case, the developers have to define the filtering behavior at the application level inside the `search` event handler function. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.FacetFilter) and the [Samples](https://ui5.sap.com/#/entity/sap.m.FacetFilter).

<sub>Changed•Control•Info Only•1.76</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-03-26

</td>
</tr>
<tr>
<td valign="top">

1.76 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.List`, `sap.m.Table`, `sap.m.Tree`** 

</td>
<td valign="top">

**`sap.m.List`, `sap.m.Table`, `sap.m.Tree`**

New indication colors are now available \(provided by the `sap.ui.core.IndicationColor` enumeration\) that can be used for highlighting table rows. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.core.IndicationColor).

<sub>Changed•Control•Info Only•1.76</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-03-26

</td>
</tr>
<tr>
<td valign="top">

1.76 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.plugins.DataStateIndicator`** 

</td>
<td valign="top">

**`sap.m.plugins.DataStateIndicator`**

We made some improvements to this plugin class and the messages shown for the data state:

-   A new refresh function of the messages for each data state is available that re-evaluates the filter and then refreshes the message strip based on that information.

-   The `filter` property that is defined by the application can now also take the related control into account, along with the message, using the respective parameters.


For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.plugins.DataStateIndicator).

<sub>Changed•Control•Info Only•1.76</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-03-26

</td>
</tr>
<tr>
<td valign="top">

1.76 

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

An automatic pop-in mode has been enabled for the responsive table. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.Table%23methods/getAutoPopinMode) for the related method, the [API Reference](https://ui5.sap.com/#/api/sap.m.Column%23controlProperties) for the related properties, and the [Sample](https://ui5.sap.com/#/entity/sap.m.Table/sample/sap.m.sample.TableAutoPopin).

<sub>Changed•Control•Info Only•1.76</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-03-26

</td>
</tr>
<tr>
<td valign="top">

1.76 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.comp.smartchart.SmartChart`** 

</td>
<td valign="top">

**`sap.ui.comp.smartchart.SmartChart`**

A more comprehensive message text is now shown if no data is available. The message text can be changed.

<sub>Changed•Control•Info Only•1.76</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-03-26

</td>
</tr>
<tr>
<td valign="top">

1.76 

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

When a user tries to enter any text in interval type fields \(such as `DateTime Interval`, `DTOffset Interval`, `Decimal Interval`, `Float Interval`, `Boolean Interval`, `Numeric Interval`\), a dialog opens with the valid input options. This prevents the writing of incorrect or invalid data.

<sub>Changed•Control•Info Only•1.76</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-03-26

</td>
</tr>
<tr>
<td valign="top">

1.76 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.comp.smartform.SmartForm`** 

</td>
<td valign="top">

**`sap.ui.comp.smartform.SmartForm`**

We have introduced an empty field indicator for the `sap.ui.comp.smartform.SmartForm` control in display mode. If a field in a Form in display mode has no value, this should be indicated not by an empty space but by a recognizable visual hint such as an en dash "–". This indicator allows the user to know if the dataset is empty or not.

<sub>Changed•Control•Info Only•1.76</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-03-26

</td>
</tr>
<tr>
<td valign="top">

1.76 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.comp.ValueHelpDialog`** 

</td>
<td valign="top">

**`sap.ui.comp.ValueHelpDialog`**

-   We have added support for the `FetchValues` property in the `ValueList` annotation. `FetchValues` equal to `1` prevent the table from being populated on initial loading. `FetchValues` equal to `2` populate the table on initial loading. If `ControlConfiguration` exists in the `SmartFilterBar` for that field, the value of the annotation is ignored and the value from the `ControlConfiguration` is used. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smartfilterbar.SmartFilterBar%23annotations/Summary).

-   When the `SmartFilterBar` is used inside a `ValueHelpDialog`, if a property is annotated with `Hidden`, it’s not rendered but is used as a filter to restrict the query result from OData that is shown in the table. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smartfilterbar.SmartFilterBar%23annotations/Hidden).


<sub>Changed•Control•Info Only•1.76</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-03-26

</td>
</tr>
<tr>
<td valign="top">

1.76 

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

-   We have added a `type` property for the configuration parameters inside a card. This property defines the data type of the parameter. Currently the `type` property is used only in UI adaptation at design time. For more information, see the [Manifest Parameters](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/features/manifestParameters) section in the Card Explorer.
-   We have added support for the destinations to be resolved by the host environment. In the manifest, the card developer indicates the name of the destination and the request, which depends on this destination. On the host environment side, the host application developer creates a method that resolves the given destination name to a URL. For more information, see [Destinations](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/features/destinations) in the Card Explorer.
-   We have introduced optional application-level Host Actions that interact with the host environment. These specific actions are displayed by the card and processed back in the host environment. For example, sharing or removing a card. For more information, see [Host Actions](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/features/hostActions) in the Card Explorer.
-   A new `JsonDateTime` parser is now used to properly parse dates. Some `DateTime` values may appear in JSON files as `DateTime Wire` format strings like `/Date(700000+0500)/`. The parser automatically splits the date string into parts, taking into account the time zone offset if present, and returns a valid date object. For more information, see [DateTime Wire Format](https://docs.microsoft.com/en-us/dotnet/framework/wcf/feature-details/stand-alone-json-serialization?redirectedfrom=MSDN#datetime-wire-format).

<sub>Changed•Control•Info Only•1.76</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-03-26

</td>
</tr>
<tr>
<td valign="top">

1.76 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.table.AnalyticalTable`, `sap.ui.table.Table`, `sap.ui.table.TreeTable`** 

</td>
<td valign="top">

**`sap.ui.table.AnalyticalTable`, `sap.ui.table.Table`, `sap.ui.table.TreeTable`**

-   New indication colors are now available \(provided by the `sap.ui.core.IndicationColor` enumeration\) that can be used for highlighting table rows. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.core.IndicationColor).

-   The resizing of columns has been changed to improve the usability on tablet devices.


<sub>Changed•Control•Info Only•1.76</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-03-26

</td>
</tr>
<tr>
<td valign="top">

1.76 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.table.AnalyticalTable`, `sap.ui.table.Table, sap.ui.table.TreeTable`** 

</td>
<td valign="top">

**`sap.ui.table.AnalyticalTable`, `sap.ui.table.Table, sap.ui.table.TreeTable`**

`sap.ui.table.plugins.MultiSelectionPlugin` for these tables has been enhanced and now provides the following functions:

-   The selection of indices outside of data boundaries is now no longer possible, because the binding length is taken into account.

-   A validation takes place to prevent errors from occurring due to the selection of unsuitable parameters.

-   Methods that change the selection now return a `Promise` that is resolved after a selection has been made.

-   A `customPayload` parameter has been added to the `selectionChange` event to allow event listeners to make use of custom event data.


For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.table.plugins.MultiSelectionPlugin) and the [Sample](https://ui5.sap.com/#/entity/sap.ui.table.Table/sample/sap.ui.table.sample.MultiSelectionPlugin).

<sub>Changed•Control•Info Only•1.76</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-03-26

</td>
</tr>
<tr>
<td valign="top">

1.76 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.unified.calendar.Month`** 

</td>
<td valign="top">

**`sap.ui.unified.calendar.Month`**

We have enabled custom colors to be used with the `specialDates` aggregation in `sap.m.PlanningCalendar`, `sap.m.SinglePlanningCalendar`, and `sap.ui.unified.Calendar` controls. This enhancement harmonizes with the `legend` aggregation where custom colors were already available. It is implemented with the new `color` property of type `sap.ui.core.CSSColor` in the `sap.ui.unified.DateTypeRange` control. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.unified.DateTypeRange) and the [Samples](https://ui5.sap.com/#/entity/sap.m.PlanningCalendar).

<sub>Changed•Control•Info Only•1.76</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-03-26

</td>
</tr>
<tr>
<td valign="top">

1.76 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**SAP Fiori Elements** 

</td>
<td valign="top">

**SAP Fiori Elements**

**Updates with SAP Fiori Elements Floorplans**

-   **Path Support for Insert Restriction** 

    We now provide dynamic value support for `Capabilities.InsertRestriction/Insert` by path evaluation in List Reports and Object Pages. For more information, see [Defining and Adapting Sections](../06_SAP_Fiori_Elements/defining-and-adapting-sections-facfea0.md).

-   **Multiselect with Input Parameters**

    Multiselection for actions with input parameters is now supported in List Report applications. For more information, see [Actions](../06_SAP_Fiori_Elements/actions-cbf16c5.md).

-   **Date Range Type for Smart Filter Bar as Default Setting in Overview Page**

    In Overview Pages, the *Smart Filter Bar* with a `useDateRangeType` setting is now set to `True` by default. For more information, see [Configuring the Global Filter](../06_SAP_Fiori_Elements/configuring-the-global-filter-73d9693.md).

-   **Enhanced Extension Wizard for Creating SAP Fiori Elements Based Apps in List Report and Analytical List Pages**

    The methods `getCustomAppStateDataExtension` and `restoreCustomAppStateDataExtension` are now generated automatically in the List Report and Analytical List Page controller extension if a custom field is added to the app via the SAP WebIDE wizard. For more information, see [Adding Custom Fields to the Filter Bar](../06_SAP_Fiori_Elements/adding-custom-fields-to-the-filter-bar-5fb9f57.md).


**Usability Improvements**

-   **No Data Texts in Object Page Tables**

    Meaningful default texts are now provided for Object Page tables when a search does not return data. There is also an option to overwrite the default texts with app-specific texts. For more information, see [Maintaining Standard Texts for Tables](../06_SAP_Fiori_Elements/maintaining-standard-texts-for-tables-aacfac5.md).

-   **Sticky Tab Bar in List Report and Worklist**

    In Multiview List Report and Worklist applications, the tab bar is made sticky so that switching views is possible irrespective of the page scroll position.


<sub>Changed•Control•Info Only•1.76</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-03-26

</td>
</tr>
</table>

**Related Information**  


[What's New in SAPUI5 1.134](what-s-new-in-sapui5-1-134-c512d71.md "With this release SAPUI5 is upgraded from version 1.133 to 1.134.")

[What's New in SAPUI5 1.133](what-s-new-in-sapui5-1-133-86d7605.md "With this release SAPUI5 is upgraded from version 1.132 to 1.133.")

[What's New in SAPUI5 1.132](what-s-new-in-sapui5-1-132-bd2e61f.md "With this release SAPUI5 is upgraded from version 1.131 to 1.132.")

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

