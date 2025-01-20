<!-- loiod9f16f2262a947ef9cd5b58f11c54b6e -->

# What's New in SAPUI5 1.98

With this release SAPUI5 is upgraded from version 1.97 to 1.98.



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

1.98 

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

-   The `sap.ui.model.odata.v2.ODataListBinding#create` method, which allows to create transient entries in a list binding similar to its counterpart in the OData V4 model. For more information, see [Creating Entities](../04_Essentials/odata-v2-model-6c47b2b.md#loio4c4cd99af9b14e08bb72470cc7cabff4).

-   You can now create inactive contexts using `sap.ui.model.odata.v2.ODataListBinding#create`. There is no POST request for an inactive context. The context will become active as soon as any of its properties is changed. Once this happens, the `createActivate` event is raised, enabling the application to create a new inactive context.

    Inactive contexts do not influence `sap.ui.model.odata.v2.ODataListBinding#getCount`. They are neither pending changes nor are they reset by `sap.ui.model.odata.v2.ODataModel#resetChanges`. For more information, see [Creating Entities](../04_Essentials/odata-v2-model-6c47b2b.md#loio4c4cd99af9b14e08bb72470cc7cabff4).

-   The `getAllCurrentContexts` method for list bindings returns all current contexts without raising a request.For more information, see [`sap.ui.model.ListBinding#getAllCurrentContexts`](https://ui5.sap.com/#/api/sap.ui.model.ListBinding%23methods/getAllCurrentContexts).


<sub>Changed•Feature•Info Only•1.98</sub>

</td>
<td valign="top">

Info Only

</td>
<td valign="top">

2022-01-27

</td>
</tr>
<tr>
<td valign="top">

1.98 

</td>
<td valign="top">

UI Changed 

</td>
<td valign="top">

Announcement 

</td>
<td valign="top">

**Chart Personalization Dialog Updated** 

</td>
<td valign="top">

**Chart Personalization Dialog Updated**

> ### Note:  
> The following information concerns important changes for end users. These changes may require end users to adjust and/or test cases to be adapted, but they won't stop or disrupt software or processes.

We have improved the dialog based on UX research. The panel for the dimension and measure selection has been updated and the option to select a chart type has been removed from the dialog. The switch is now available from the *Chart* toolbar.

<sub>UI Changed•Announcement•Info Only•1.98</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-01-27

</td>
</tr>
<tr>
<td valign="top">

1.98 

</td>
<td valign="top">

UI Changed 

</td>
<td valign="top">

Announcement 

</td>
<td valign="top">

**Draft-Enabled Apps \(OData V2\): Draft Toggle Button Moved** 

</td>
<td valign="top">

**Draft-Enabled Apps \(OData V2\): Draft Toggle Button Moved**

> ### Note:  
> The following information concerns important changes for end users. These changes may require end users to adjust and/or test cases to be adapted, but they won't stop or disrupt software or processes.

In draft-enabled list reports and object pages, the *Hide/Show Draft Values* toggle button has been removed from the toolbar. The option to hide or show draft values can now be found in the *Editing Status* dropdown list. For more information, see [Toggling Between Draft and Saved Values](../06_SAP_Fiori_Elements/toggling-between-draft-and-saved-values-fd3950a.md).

<sub>UI Changed•Announcement•Info Only•1.98</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-01-27

</td>
</tr>
<tr>
<td valign="top">

1.98 

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

-   You can now replace a row context of a list with a sibling entity of the same collection. The sibling entity must be available as a :1 navigation property and is accessed with an operation binding. For more information, see [Draft Handling with the OData V4 Model](../04_Essentials/draft-handling-with-the-odata-v4-model-40986e6.md).

-   An application can now create inactive contexts in a list binding using the `bInactive` parameter of `sap.ui.model.odata.v4.ODataListBinding#create`, provided the update group of the binding is an `Auto` group. There is no POST request for an inactive context. The context will become active as soon as any of its properties is changed. Once this happens, the `createActivate` event is raised, enabling the application to create a new inactive context.

    Inactive contexts do not influence `sap.ui.model.odata.v4.ODataListBinding#getCount`. They are neither pending changes nor are they reset by `sap.ui.model.odata.v4.ODataListBinding#resetChanges` or `sap.ui.model.odata.v4.ODataModel#resetChanges`. For more information, see [Creating an Entity](../04_Essentials/creating-an-entity-c9723f8.md).

-   The `sap.ui.model.odata.v4.ODataListBinding#getAllCurrentContexts` method returns all current contexts without raising a request.

-   The experimental `sap.ui.model.odata.v4.ODataContextBinding#moveEntityTo` method introduced with SAPUI5 1.95 is deprecated.


<sub>Changed•Feature•Info Only•1.98</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-01-27

</td>
</tr>
<tr>
<td valign="top">

1.98 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.DateTimePicker`, `sap.m.TimePicker`** 

</td>
<td valign="top">

**`sap.m.DateTimePicker`, `sap.m.TimePicker`**

We have introduced a shortcut button that focuses the current time. The button is shown if the new `showCurrentTimeButton` property is set to true. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.TimePicker) and the [Sample](https://ui5.sap.com/#/entity/sap.m.TimePicker/sample/sap.m.sample.TimePicker).

<sub>Changed•Control•Info Only•1.98</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-01-27

</td>
</tr>
<tr>
<td valign="top">

1.98 

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

-   When the user types something in the input field of the control, the displayed suggestion items now appear in groups if the `enableGroupHeaders` property is set to `true`.

-   We have added new standard options to the control that represent the first or the last day of the current week, month, quarter, or year.

-   The `StandardDynamicDateRangeKeys` is now an enumeration with keys matching the values. The default value of the `DynamicDateRange` control’s `options` property is now a full array of the keys \(before it was an empty array\).


For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.DynamicDateRange) and the [Samples](https://ui5.sap.com/#/entity/sap.m.DynamicDateRange).

<sub>Changed•Control•Info Only•1.98</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-01-27

</td>
</tr>
<tr>
<td valign="top">

1.98 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.IconTabBar`** 

</td>
<td valign="top">

**`sap.m.IconTabBar`**

There is a change in the way how the control computes and displays the number of tabs that are in the overflow buttons at both sides of the tabs area, when the property overflow mode is set to `StartAndEnd`. Now, only the top-level tabs are counted and not the nested sub-tabs. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.IconTabBar) and the [Sample](https://ui5.sap.com/#/entity/sap.m.IconTabBar/sample/sap.m.sample.IconTabBarStartAndEndOverflow).

<sub>Changed•Control•Info Only•1.98</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-01-27

</td>
</tr>
<tr>
<td valign="top">

1.98 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.Label`** 

</td>
<td valign="top">

**`sap.m.Label`**

We have introduced a new `showColon` property. If set to `true`, a colon \(:\) character is added to the label. This feature is useful in cases when the Label is used independently. In contrast, when the Label is in a Form or in a Simple Form, the colon \(:\) character is displayed automatically regardless of the value of the `showColon` property. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.Label).

<sub>Changed•Control•Info Only•1.98</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-01-27

</td>
</tr>
<tr>
<td valign="top">

1.98 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.List`** 

</td>
<td valign="top">

**`sap.m.List`**

You can now display an avatar in your list instead of an image or icon. We have integrated the `sap.m.Avatar` control as an aggregation of `StandardListItem`. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.StandardListItem%23aggregations) and the [Sample](https://ui5.sap.com/#/entity/sap.m.StandardListItem/sample/sap.m.sample.StandardListItemAvatar).

<sub>Changed•Control•Info Only•1.98</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-01-27

</td>
</tr>
<tr>
<td valign="top">

1.98 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.p13n*`** 

</td>
<td valign="top">

**`sap.m.p13n*`**

We have made personalization within a table or list more reusable. Different panels with reusable content for the various types of personalization are now available for freestyle use in your application.

The following panels are available \(as experimental APIs\):

-   `sap.m.p13n.SelectionPanel`

    Defines a number of properties that allow you to select and deselect fields as columns in your table, for example, and to change their order.

-   `sap.m.p13n.SortPanel`

    Defines a number of properties that allow you to sort your items based on various criteria, for example, in ascending or descending order.

-   `sap.m.p13n.GroupPanel`

    Defines a number of properties that allow you to group your data.


The panels are aggregated to `sap.m.p13n.Popup` \(experimental\), which serves as a container for all the panels.

For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.p13n) and the [Sample](https://ui5.sap.com/#/entity/sap.m.p13n.Popup/sample/sap.m.sample.p13n.Popup).

<sub>Changed•Control•Info Only•1.98</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-01-27

</td>
</tr>
<tr>
<td valign="top">

1.98 

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

With the new `firstDayOfWeek` property, you can now set the first day of a week displayed in the Week and Month views of the control. If there is no valid value set, the default from the user locale is used. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.SinglePlanningCalendar) and the [Sample](https://ui5.sap.com/#/entity/sap.m.SinglePlanningCalendar/sample/sap.m.sample.SinglePlanningCalendarSnappingHeader).

<sub>Changed•Control•Info Only•1.98</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-01-27

</td>
</tr>
<tr>
<td valign="top">

1.98 

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

For the `uploadCompleted` event, an additional JSON response object is now passed. Along with it, some of its parameters are also passed such as response, `responseXML`, `readyState`, status, and headers. It helps you to understand if the upload is complete.

<sub>Changed•Control•Info Only•1.98</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-01-27

</td>
</tr>
<tr>
<td valign="top">

1.98 

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

We have improved and simplified the usability of the *View Settings* dialog for the `SmartChart` control and made it more consistent with the personalization dialogs for the other smart controls.

The following changes have been made:

-   The dialog now shows the data visualized based on fields and layout options \(formerly called "roles"\) in a table that is grouped by dimensions and measures \(formerly called "type"\).

-   You can now select the chart type in the toolbar only.

-   The selected fields are shown automatically.

-   The dialog now automatically provides layout options that are compatible with the selected chart type.

-   You can select new dimensions or measures in an additional row.


![](images/SmartChart_ViewSettings_WN_a5bc782.png)For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.ui.comp.smartchart.SmartChart/sample/sap.ui.comp.sample.smartchart.general). 

<sub>Changed•Control•Info Only•1.98</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-01-27

</td>
</tr>
<tr>
<td valign="top">

1.98 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.comp.smartfilterbar.SmartFilterBar` and `sap.ui.comp.smartfield.SmartField`** 

</td>
<td valign="top">

**`sap.ui.comp.smartfilterbar.SmartFilterBar` and `sap.ui.comp.smartfield.SmartField`**

`SmartFilterBar` and `SmartField` now support the `com.sap.vocabularies.UI.v1.PresentationVariant.SortOrder` annotation for value lists with fixed values. This allows you to overwrite the backend sorting. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smartfilterbar.SmartFilterBar%23annotations/PresentationVariant) and the [Sample](https://ui5.sap.com/#/entity/sap.ui.comp.smartfilterbar.SmartFilterBar/sample/sap.ui.comp.sample.smartfilterbar.PresentationVariantSortOrderAnnotation) for `SmartFilterBar`, the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smartfield.SmartField%23annotations/PresentationVariant), and the [Sample](https://ui5.sap.com/#/entity/sap.ui.comp.smartfield.SmartField/sample/sap.ui.comp.sample.smartfield.PresentationVariantSortOrderAnnotation) for `SmartField`. 

<sub>Changed•Control•Info Only•1.98</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-01-27

</td>
</tr>
<tr>
<td valign="top">

1.98 

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

-   Until now, `SmartFilterBar` was using `sap.m.DatePicker` for single date filters that use the `Edm.DateTime` OData type with the `sap:display-format="Date"` annotation, and `Edm.String` OData type with the `sap:filter-restriction="single-value"` annotation. Now, the control supports the new `sap.m.DynamicDateRange` control for single date filters. This allows you to store semantic dates and restore them later when navigating or selecting a variant.

    In addition, we've adopted new single date options such as the first day of the current week, last day of the current week, first day of the current month, etc.

-   `SmartFilterBar` now also supports the option to set a default operator for date range and single date controls. With this improvement, we’ve made it a lot easier to change the default operator in the XML view via control configuration. Note that this method is not applicable for operators that need a parameter, for example 'Next X Days' where X is the required parameter.

    For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.ui.comp.smartfilterbar.SmartFilterBar/sample/sap.ui.comp.sample.smartfilterbar.UseDateRangeType).


<sub>Changed•Control•Info Only•1.98</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-01-27

</td>
</tr>
<tr>
<td valign="top">

1.98 

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

After introducing the visualization of multiple consecutive whitespace characters in the `SmartField` and `SmartFilterBar` controls in versions 1.96 and 1.97 respectively, we've now added this feature to the `ValueHelpDialog` control as well.

<sub>Changed•Control•Info Only•1.98</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-01-27

</td>
</tr>
<tr>
<td valign="top">

1.98 

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

-   We have introduced a new filter type – Search \(experimental\). To define it, you only have to set the filter's `type` property to `Search`, and then specify the optional initial value of the filter and the placeholder of the field. For more information, see the [Search Filter](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/filters/search) section and the [Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/searchFilter) in the Card Explorer.

-   Integration cards now support \(experimentally\) CSRF tokens as a method to prevent CSRF attacks. For more information, see the [CSRF Tokens](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/configuration/csrfTokens) section and the [Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/data/csrf) in the Card Explorer.

-   The submit action of the Adaptive card supports binding syntax. This allows card developers to map the values entered by the end user to the payload structure expected by the back-end service. For more information, see the [Action Handlers](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/configuration/actionHandlers) section and the [Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/adaptive/adaptive-action-submit-custom-payload) in the Card Explorer.

-   We have added support for more HTTP request methods. Together with GET and POST, Integration cards now also support PUT, PATCH, DELETE, OPTIONS, and HEAD methods. For more information, see the [Data Handling](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/features/data) section in the Card Explorer.

-   Object cards are \(experimentally\) enhanced with new item types and a new attribute. The new item types are `NumericData`, which shows some KPIs, and `Status`. The new attribute is `maxLines` - it represents the maximum number of lines the text can take. For more information, see the [Object Card](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/types/object) section, the [To Do Card](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/object/todoCard) sample, and [Additional Object Details](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/object/additionalObjectDetails) sample in the Card Explorer.

-   We have updated the `sap.ui.integration.widgets.Card` of type Adaptive with the new 1.01 version of UI5 Web Components. For more information, see the [Adaptive Card](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/types/adaptive) section in the Card Explorer.
-   We have updated the `sap.ui.integration.widgets.Card` of type Adaptive to support the newest templating and markdown features available for Microsoft Adaptive Cards, by getting the latest versions of `adaptivecards-templating`, `adaptive-expressions`, and `markdown-it`. Due to changes in the templating syntax, developers should adapt their applications when they switch to version 1.98. For more information, see the [Adaptive Card](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/types/adaptive) section and the [Templating](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/adaptive/templating) and [Markdown](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/adaptive/markdown) Samples in the Card Explorer. 

<sub>Changed•Control•Info Only•1.98</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-01-27

</td>
</tr>
<tr>
<td valign="top">

1.98 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.richtexteditor.RichTextEditor`** 

</td>
<td valign="top">

**`sap.ui.richtexteditor.RichTextEditor`**

We have updated the TinyMCE version 5 used in `sap.ui.richtexteditor.RichTextEditor` to TinyMCE 5.10.2. We recommend switching to the newer version, as v4 is no longer supported by TinyMCE and will not receive updates. For more information, see [sap.ui.richtexteditor](../10_More_About_Controls/sap-ui-richtexteditor-d4f3f15.md) and the [Samples](https://ui5.sap.com/#/entity/sap.ui.richtexteditor.RichTextEditor).

<sub>Changed•Control•Info Only•1.98</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-01-27

</td>
</tr>
<tr>
<td valign="top">

1.98 

</td>
<td valign="top">

Deprecated 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.f.IllustratedMessage` / `sap.m.IllustratedMessage`** 

</td>
<td valign="top">

**`sap.f.IllustratedMessage` / `sap.m.IllustratedMessage`**

The `sap.f.IllustratedMessage` and its related classes are now moved to the `sap.m` library. The `sap.f` classes and their documentation are kept for compatibility reasons and are marked as deprecated. All of them extend their `sap.m` version.For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.f.IllustratedMessage).

<sub>Deprecated•Control•Info Only•1.98</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-01-27

</td>
</tr>
<tr>
<td valign="top">

1.98 

</td>
<td valign="top">

Deprecated 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.P13n*`** 

</td>
<td valign="top">

**`sap.m.P13n*`**

The following entities have been deprecated and replaced with the new personalization panels:

-   `sap.m.P13nDialog`

-   `sap.m.P13nColumnsPanel`

-   `sap.m.P13nSortPanel`

-   `sap.m.P13nGroupPanel`


<sub>Deprecated•Control•Info Only•1.98</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-01-27

</td>
</tr>
<tr>
<td valign="top">

1.98 

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

-   Keyboard shortcuts for standard actions such as create, delete, edit, etc., can now get redirected to extension actions that replace the standard action. For more information, see [Keyboard Shortcuts](../06_SAP_Fiori_Elements/keyboard-shortcuts-0cd318c.md).

-   An additional filter option, *All \(Hiding Drafts\)*, is now available for the *Editing Status* filter field, for all draft applications. It replaces the draft toggle button in the list report table toolbar. Also, with this change, the draft toggle feature is available by default in draft-enabled applications. For more information, see [Toggling Between Draft and Saved Values](../06_SAP_Fiori_Elements/toggling-between-draft-and-saved-values-fd3950a.md).

-   It’s now possible to mass edit records in the list report page using the Edit dialog. For more information, see [Enabling Editing Using a Dialog \(Mass Edit\) in the List Report](../06_SAP_Fiori_Elements/enabling-editing-using-a-dialog-mass-edit-in-the-list-report-7cc4f04.md).

-   You now have an option to navigate from the list report to an object page directly in edit mode. For more information, see [Navigation to an Object Page in Edit Mode](../06_SAP_Fiori_Elements/navigation-to-an-object-page-in-edit-mode-8665847.md).

-   A validation of required fields is now possible before the object create request for non-draft objects. For more information, see [Validation of Required Fields in Non-draft Applications](../06_SAP_Fiori_Elements/validation-of-required-fields-in-non-draft-applications-400565b.md).

-   The visual filter section in the *Adapt Filter* dialog now supports dropdown-based filtering. The visual filters are now filtered based on the selection made, such as: *Visible*, *Active*, *Mandatory*, etc.

-   The visual filters now display the text associated with the units such as currency or unit of measures. For more information, see [Visual Filters](../06_SAP_Fiori_Elements/visual-filters-1714720.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.98</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-01-27

</td>
</tr>
<tr>
<td valign="top">

1.98 

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

-   The `FilterBar` building block now supports default values and custom filters. For more information, see [Building Blocks](../06_SAP_Fiori_Elements/building-blocks-24c1304.md).

-   SAP Fiori elements now enables you to navigate to a different internal target. For more information, see [Example: Enable Internal Navigation to Different Detail Page](../06_SAP_Fiori_Elements/example-enable-internal-navigation-to-different-detail-page-75002b3.md).

-   Users can now navigate to an app by clicking on the header of a KPI card. For more information, see [Creating Key Performance Indicator Tags](../06_SAP_Fiori_Elements/creating-key-performance-indicator-tags-d80a360.md).

-   Optimizations for the automatic column width calculation in tables are available for the `FieldGroup` and `Date`, both in display and edit mode. For more information, see [Setting the Default Column Width](../06_SAP_Fiori_Elements/setting-the-default-column-width-a765253.md).

-   SAP Fiori elements now supports restrictions for the MIME type and file size for `Edm.Stream` properties. For more information, see [Different Representations of a Field](../06_SAP_Fiori_Elements/different-representations-of-a-field-c18ada4.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.98</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-01-27

</td>
</tr>
</table>

**Related Information**  


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

