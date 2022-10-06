<!-- loiob9b0a3f223c14b9d99e0d86e649cafec -->

# What's New in SAPUI5 1.76

With this release SAPUI5 is upgraded from version 1.75 to 1.76.



<a name="loiob9b0a3f223c14b9d99e0d86e649cafec__section_yxw_pxt_zcb"/>

## New Features


<table>
<tr>
<td valign="top">

**`Team Calendar`**

We have added a new demo application - the Team Calendar. It demonstrates the integration between `sap.m.PlanningCalendar` and `sap.m.SinglePlanningCalendar` controls, sharing the same data source. The Team Calendar can be used as a starting point for building a fully functional complex application. Find it in the [Demo Apps](https://ui5.sap.com/#demoapps).



</td>
</tr>
</table>



<a name="loiob9b0a3f223c14b9d99e0d86e649cafec__section_qwl_pb5_zcb"/>

## Improved Features


<table>
<tr>
<td valign="top">

**`Card Explorer`**

-   The Component card sample in the Explore section has been enhanced. To facilitate developers, we have added the option to download the bundle of all the files in the sample.
-   All the properties in the Learn section are now listed with their Since attribute. This will inform developers since which version each feature is available.

For more information, see [Card Explorer](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/index.html).



</td>
</tr>
<tr>
<td valign="top">

**One Page Acceptance Tests \(OPA5\)**

We've introduced `Drag` and `Drop` actions to OPA5 to help with the most common cases. For more information, see [Simulating User Interactions on Controls](../04_Essentials/simulating-user-interactions-on-controls-8615a0b.md), the [API Reference](https://ui5.sap.com/#/api/sap.ui.test.actions) and the [Sample](https://ui5.sap.com/#/entity/sap.ui.test.Opa5/sample/sap.ui.core.sample.OpaAction).



</td>
</tr>
<tr>
<td valign="top">

**SAPUI5 OData V2 Model**

The new version of the SAPUI5 OData V2 model introduces the following features:

-   A new `transitionMessagesOnly` binding parameter is provided for the `sap.ui.model.odata.v2.ODataListBinding` class.
-   The `updateAggregatedMessages` parameter of `sap.ui.model.odata.v2.ODataModel#read` is now public.
-   Existing server messages can be retrieved from the model using the `sap.ui.model.Context#getMessages` method.



</td>
</tr>
<tr>
<td valign="top">

**SAPUI5 OData V4 Model**

The new version of the SAPUI5 OData V4 model introduces the following features:

-   You can now access the binding parameter of an operation, as described in [OData Operations](../04_Essentials/odata-operations-b54f789.md).
-   A property path provided to `sap.ui.model.odata.v4.Context#requestSideEffects` can be given the suffix "`*`" to enforce re-reading of all properties of the related entity.

    For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context%23methods/requestSideEffects).


> ### Restriction:  
> Due to the limited feature scope of this version of the SAPUI5 OData V4 model, check that all required features are in place before developing applications. Double-check the detailed documentation of the features, as certain parts of a feature may be missing. While we aim to be compatible with existing controls, some controls might not work due to small incompatibilities compared to `sap.ui.model.odata.(v2.)ODataModel`, or due to missing features in the model \(such as tree binding\). This also applies to smart controls \(`sap.ui.comp` library\) that do not support the SAPUI5 OData V4 model, as well as controls such as `TreeTable` and `AnalyticalTable`, which are not supported in combination with the SAPUI5 OData V4 model. The interface for applications has been changed for easier and more efficient use of the model. For a summary of these changes, see [Changes Compared to OData V2 Model](../04_Essentials/changes-compared-to-odata-v2-model-abd4d7c.md).

For more information, see [OData V4 Model](../04_Essentials/odata-v4-model-5de13cf.md), the [API Reference](https://ui5.sap.com/#/api/sap.ui.model.odata.v4), and the [Samples](https://ui5.sap.com/#/entity/sap.ui.model.odata.v4.ODataModel) in the Demo Kit.



</td>
</tr>
</table>



<a name="loiob9b0a3f223c14b9d99e0d86e649cafec__section_rqn_wd5_zcb"/>

## Improved Controls


<table>
<tr>
<td valign="top">

**`sap.f.FlexibleColumnLayout`**

-   With the new `autoFocus` property, we’ve introduced the possibility to enable/disable the autofocus functionality of the `FlexibleColumnLayout` control.For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.f.FlexibleColumnLayout) and the [Sample](https://ui5.sap.com/#/entity/sap.f.FlexibleColumnLayout/sample/sap.f.sample.FlexibleColumnLayoutWithOneColumnStart).

-   We’ve introduced the `columnResize` event, which is fired when the resizing of each column of the control is complete.For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.f.FlexibleColumnLayout%23events/columnResize).




</td>
</tr>
<tr>
<td valign="top">

**`sap.m.FacetFilter`**

Optimization regarding the initial database service query has been introduced. There are cases when the `items` aggregation for the `FacetFilterList` could take a long time fetching data from the database service. Now we have added а `search` event, that fires when the `FacetFilterList` is opened. This enables developers to register a handler function to prevent the default filtering behavior by calling the `sap.ui.base.Event.prototype.preventDefault` function. As a result, no list items are loaded initially. In this case, the developers have to define the filtering behavior at the application level inside the `search` event handler function. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.FacetFilter) and the [Samples](https://ui5.sap.com/#/entity/sap.m.FacetFilter).



</td>
</tr>
<tr>
<td valign="top">

**`sap.m.List, sap.m.Table, sap.m.Tree`**

New indication colors are now available \(provided by the `sap.ui.core.IndicationColor` enumeration\) that can be used for highlighting table rows. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.core.IndicationColor).



</td>
</tr>
<tr>
<td valign="top">

**`sap.m.plugins.DataStateIndicator`**

We made some improvements to this plugin class and the messages shown for the data state:

-   A new refresh function of the messages for each data state is available that re-evaluates the filter and then refreshes the message strip based on that information.

-   The `filter` property that is defined by the application can now also take the related control into account, along with the message, using the respective parameters.


For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.plugins.DataStateIndicator).



</td>
</tr>
<tr>
<td valign="top">

**`sap.m.Table`**

An automatic pop-in mode has been enabled for the responsive table. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.Table%23methods/getAutoPopinMode) for the related method, the [API Reference](https://ui5.sap.com/#/api/sap.m.Column%23controlProperties) for the related properties, and the [Sample](https://ui5.sap.com/#/entity/sap.m.Table/sample/sap.m.sample.TableAutoPopin).



</td>
</tr>
<tr>
<td valign="top">

**`sap.ui.comp.smartchart.SmartChart`**

A more comprehensive message text is now shown if no data is available. The message text can be changed.



</td>
</tr>
<tr>
<td valign="top">

**`sap.ui.comp.smartfilterbar.SmartFilterBar`**

When a user tries to enter any text in interval type fields \(such as `DateTime Interval`, `DTOffset Interval`, `Decimal Interval`, `Float Interval`, `Boolean Interval`, `Numeric Interval`\), a dialog opens with the valid input options. This prevents the writing of incorrect or invalid data.



</td>
</tr>
<tr>
<td valign="top">

**`sap.ui.comp.smartform.SmartForm`**

We have introduced an empty field indicator for the `sap.ui.comp.smartform.SmartForm` control in display mode. If a field in a Form in display mode has no value, this should be indicated not by an empty space but by a recognizable visual hint such as an en dash "–". This indicator allows the user to know if the dataset is empty or not.



</td>
</tr>
<tr>
<td valign="top">

**`sap.ui.comp.ValueHelpDialog`**

-   We have added support for the `FetchValues` property in the `ValueList` annotation. `FetchValues` equal to `1` prevent the table from being populated on initial loading. `FetchValues` equal to `2` populate the table on initial loading. If `ControlConfiguration` exists in the `SmartFilterBar` for that field, the value of the annotation is ignored and the value from the `ControlConfiguration` is used. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smartfilterbar.SmartFilterBar%23annotations/Summary).

-   When the `SmartFilterBar` is used inside a `ValueHelpDialog`, if a property is annotated with `Hidden`, it’s not rendered but is used as a filter to restrict the query result from OData that is shown in the table. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smartfilterbar.SmartFilterBar%23annotations/Hidden).




</td>
</tr>
<tr>
<td valign="top">

**`sap.ui.integration.widgets.Card`**

-   We have added a `type` property for the configuration parameters inside a card. This property defines the data type of the parameter. Currently the `type` property is used only in UI adaptation at design time. For more information, see the [Manifest Parameters](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/features/manifestParameters) section in the Card Explorer.
-   We have added support for the destinations to be resolved by the host environment. In the manifest, the card developer indicates the name of the destination and the request, which depends on this destination. On the host environment side, the host application developer creates a method that resolves the given destination name to a URL. For more information, see [Destinations](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/features/destinations) in the Card Explorer.
-   We have introduced optional application-level Host Actions that interact with the host environment. These specific actions are displayed by the card and processed back in the host environment. For example, sharing or removing a card. For more information, see [Host Actions](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/features/hostActions) in the Card Explorer.
-   A new `JsonDateTime` parser is now used to properly parse dates. Some `DateTime` values may appear in JSON files as `DateTime Wire` format strings like `/Date(700000+0500)/`. The parser automatically splits the date string into parts, taking into account the time zone offset if present, and returns a valid date object. For more information, see [DateTime Wire Format](https://docs.microsoft.com/en-us/dotnet/framework/wcf/feature-details/stand-alone-json-serialization?redirectedfrom=MSDN#datetime-wire-format).



</td>
</tr>
<tr>
<td valign="top">

**`sap.ui.table.AnalyticalTable, sap.ui.table.Table, sap.ui.table.TreeTable`**

-   New indication colors are now available \(provided by the `sap.ui.core.IndicationColor` enumeration\) that can be used for highlighting table rows. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.core.IndicationColor).

-   The resizing of columns has been changed to improve the usability on tablet devices.




</td>
</tr>
<tr>
<td valign="top">

**`sap.ui.table.AnalyticalTable, sap.ui.table.Table, sap.ui.table.TreeTable`**

`sap.ui.table.plugins.MultiSelectionPlugin` for these tables has been enhanced and now provides the following functions:

-   The selection of indices outside of data boundaries is now no longer possible, because the binding length is taken into account.

-   A validation takes place to prevent errors from occurring due to the selection of unsuitable parameters.

-   Methods that change the selection now return a `Promise` that is resolved after a selection has been made.

-   A `customPayload` parameter has been added to the `selectionChange` event to allow event listeners to make use of custom event data.


For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.table.plugins.MultiSelectionPlugin) and the [Sample](https://ui5.sap.com/#/entity/sap.ui.table.Table/sample/sap.ui.table.sample.MultiSelectionPlugin).



</td>
</tr>
<tr>
<td valign="top">

**`sap.ui.unified.calendar.Month`**

We have enabled custom colors to be used with the `specialDates` aggregation in `sap.m.PlanningCalendar`, `sap.m.SinglePlanningCalendar`, and `sap.ui.unified.Calendar` controls. This enhancement harmonizes with the `legend` aggregation where custom colors were already available. It is implemented with the new `color` property of type `sap.ui.core.CSSColor` in the `sap.ui.unified.DateTypeRange` control. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.unified.DateTypeRange) and the [Samples](https://ui5.sap.com/#/entity/sap.m.PlanningCalendar).



</td>
</tr>
</table>



<a name="loiob9b0a3f223c14b9d99e0d86e649cafec__section_g3r_bf5_zcb"/>

## SAP Fiori Elements


<table>
<tr>
<td valign="top">

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

