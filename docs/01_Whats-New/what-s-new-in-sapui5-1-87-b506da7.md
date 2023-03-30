<!-- loiob506da7781ca487195bc7177a8dea9d2 -->

# What's New in SAPUI5 1.87

With this release SAPUI5 is upgraded from version 1.86 to 1.87.



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

 1.87 



</td>
<td valign="top">

 Deprecated 



</td>
<td valign="top">

 Announcement 



</td>
<td valign="top">

 **End of Support for Microsoft Internet Explorer 11 after SAPUI5 1.87** 



</td>
<td valign="top">

**End of Support for Microsoft Internet Explorer 11 after SAPUI5 1.87**

SAPUI5 1.87 is the last version to support Microsoft Internet Explorer 11. For more information, see [SAPUI5 Support Status for Microsoft Internet Explorer 11](../02_Read-Me-First/browser-and-platform-support-74b59ef.md#loio74b59efa0eef48988d3b716bd0ecc933__MS_IE).

<sub>Deprecated•Announcement•Info Only•1.87</sub>



</td>
<td valign="top">

Info Only



</td>
<td valign="top">

2021-02-25



</td>
</tr>
<tr>
<td valign="top">

 1.87 



</td>
<td valign="top">

 New 



</td>
<td valign="top">

 Control 



</td>
<td valign="top">

 **`sap.m.ExpandableText`** 



</td>
<td valign="top">

**`sap.m.ExpandableText`**

You can use the control to display long texts, for example, inside a table, list, or form. Only the first characters from the text field and a `More` link are shown initially, which allows the full text to be displayed. There are two options for displaying the full text, which are defined by the `overflowMode` property - in place \(default\) or as a popover. The `maxCharacters` property specifies the maximum number of characters from the beginning of the text field, that are shown initially. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.ExpandableText) and the [Samples](https://ui5.sap.com/#/entity/sap.m.ExpandableText).

<sub>New•Control•Info Only•1.87</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2021-02-25



</td>
</tr>
<tr>
<td valign="top">

 1.87 



</td>
<td valign="top">

 Changed 



</td>
<td valign="top">

 Feature 



</td>
<td valign="top">

 **New Type for Spreadsheet Export** 



</td>
<td valign="top">

**New Type for Spreadsheet Export**

The `sap.ui.export.EdmType.Percentage` data type is now available for export. This type allows you to convert numeric values into a percentage.

For more information, see [Spreadsheet Export](../04_Essentials/spreadsheet-export-2691788.md), the [API Reference](https://ui5.sap.com/#/api/sap.ui.export.Spreadsheet/overview), and the [Samples](https://ui5.sap.com/#/entity/sap.ui.export.Spreadsheet).

<sub>Changed•Feature•Info Only•1.87</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2021-02-25



</td>
</tr>
<tr>
<td valign="top">

 1.87 



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

-   A new `additionally` property within the `group` map of the `$$aggregation` list binding parameter. This allows you to define properties that are fetched together with a group level, such as a text for a key. For more information, see [`sap.ui.model.odata.v4.ODataListBinding#setAggregation`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding/methods/setAggregation) and [Extension for Data Aggregation](../04_Essentials/extension-for-data-aggregation-7d91431.md).

-   Support of the `sap.ui.model.odata.v4.Context#requestSideEffects` method in combination with kept-alive contexts. A list binding context can be kept alive with the `sap.ui.model.odata.v4.Context#setKeepAlive` method introduced with SAPUI5 1.81.

-   Evaluation of the `Org.OData.Core.V1.ContentID` instance annotation in messages of error responses to change sets, so that the message can be assigned to the correct request and the message target can be calculated correctly. For more information, see [Server Messages in the OData V4 Model](../04_Essentials/server-messages-in-the-odata-v4-model-fbe1cb5.md).


For more information, see [OData V4 Model](../04_Essentials/odata-v4-model-5de13cf.md), the [API Reference](https://ui5.sap.com/#/api/sap.ui.model.odata.v4), and the [Samples](https://ui5.sap.com/#/entity/sap.ui.model.odata.v4.ODataModel) in the Demo Kit.

<sub>Changed•Feature•Info Only•1.87</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2021-02-25



</td>
</tr>
<tr>
<td valign="top">

 1.87 



</td>
<td valign="top">

 Changed 



</td>
<td valign="top">

 Control 



</td>
<td valign="top">

 **`sap.f.Card`** 



</td>
<td valign="top">

**`sap.f.Card`**

We no longer apply default `min-height` in the control, which allows smaller cards to be rendered properly. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.f.Card).

<sub>Changed•Control•Info Only•1.87</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2021-02-25



</td>
</tr>
<tr>
<td valign="top">

 1.87 



</td>
<td valign="top">

 Changed 



</td>
<td valign="top">

 Control 



</td>
<td valign="top">

 **`sap.f.GridList`** 



</td>
<td valign="top">

**`sap.f.GridList`**

We have improved the keyboard handling capabilities of the control. Now, similar to `sap.f.GridContainer`, the navigation with [Arrow\] keys follows the cells of the underlying \(virtual\) grid. This behavior provides stable navigation paths if there are items of different sizes. When any of the borders are reached, the `borderReached` event is fired. To navigate to another `GridList`, you have two options:

-   Navigate using the [Tab\] key.

-   Configure navigation with the [Arrow\] keys. This is achieved by using the `focusItemByDirection` method and requires additional logic from the application side to determine the navigation direction in the actual app layout.


For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.f.GridList) and the [Samples](https://ui5.sap.com/#/entity/sap.f.GridList).

<sub>Changed•Control•Info Only•1.87</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2021-02-25



</td>
</tr>
<tr>
<td valign="top">

 1.87 



</td>
<td valign="top">

 Changed 



</td>
<td valign="top">

 Control 



</td>
<td valign="top">

 **`sap.m.BadgeCustomData`** 



</td>
<td valign="top">

**`sap.m.BadgeCustomData`**

We have added a new `animation` property that enables you to choose the animation type to be performed by the badge element.For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.BadgeCustomData).

<sub>Changed•Control•Info Only•1.87</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2021-02-25



</td>
</tr>
<tr>
<td valign="top">

 1.87 



</td>
<td valign="top">

 Changed 



</td>
<td valign="top">

 Control 



</td>
<td valign="top">

 **`sap.m.Dialog`** 



</td>
<td valign="top">

**`sap.m.Dialog`**

You can now drag and resize the dialog using the keyboard. To enable this behavior, you have to set the `draggable` and/or `resizable` properties to `true`. While the keyboard focus is located on the title bar, the dialog can then be moved with the [Arrow\] keys and resized with  [Shift\] + [Arrow\]  keys. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.m.Dialog/sample/sap.m.sample.Dialog).

<sub>Changed•Control•Info Only•1.87</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2021-02-25



</td>
</tr>
<tr>
<td valign="top">

 1.87 



</td>
<td valign="top">

 Changed 



</td>
<td valign="top">

 Control 



</td>
<td valign="top">

 **`sap.m.Image`** 



</td>
<td valign="top">

**`sap.m.Image`**

With the new `lazyLoading` property, you can now ensure that off-screen images are loaded early enough so that they finish loading once the user scrolls near them.For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.Image).

<sub>Changed•Control•Info Only•1.87</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2021-02-25



</td>
</tr>
<tr>
<td valign="top">

 1.87 



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

As an application developer you can now use the following new functions:

-   `GetEndDate` returns the end date that is visible in current state of the control.

-   `GetVisibleIntervalsCount` returns the number of intervals \(for example, hours, days, weeks\) that are currently visible.


For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.PlanningCalendar/methods).

<sub>Changed•Control•Info Only•1.87</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2021-02-25



</td>
</tr>
<tr>
<td valign="top">

 1.87 



</td>
<td valign="top">

 Changed 



</td>
<td valign="top">

 Control 



</td>
<td valign="top">

 **`sap.m.Text`** 



</td>
<td valign="top">

**`sap.m.Text`**

The new `emptyIndicatorMode` property allows developers to display an empty text as a language dependent “-” symbol. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.Text).

<sub>Changed•Control•Info Only•1.87</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2021-02-25



</td>
</tr>
<tr>
<td valign="top">

 1.87 



</td>
<td valign="top">

 Changed 



</td>
<td valign="top">

 Control 



</td>
<td valign="top">

 **`sap.m.Title`** 



</td>
<td valign="top">

**`sap.m.Title`**

You can now place a link as a title. To enable this functionality, we have introduced the `content` aggregation, which accepts controls \(`sap.m.Link`\) that implement the [`sap.ui.core.ITitleContent`](https://ui5.sap.com/#/api/sap.ui.core.ITitleContent) interface. To place a link as a title you have to add the [`sap.m.Link`](https://ui5.sap.com/#/api/sap.m.Link) control to the `content` aggregation. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.Title).

<sub>Changed•Control•Info Only•1.87</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2021-02-25



</td>
</tr>
<tr>
<td valign="top">

 1.87 



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

Dates and times in charts now have a format that is easier to read than the more technical format before, for example, *CW15 2020*. This change applies to the following annotations:

-   `Common.v1.IsCalendarYearWeek`

-   `Common.v1.IsCalendarYearMonth`

-   `Common.v1.IsCalendarYearQuarter`


For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smartchart.SmartChart) and the [Samples](https://ui5.sap.com/#/entity/sap.ui.comp.smartchart.SmartChart).

<sub>Changed•Control•Info Only•1.87</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2021-02-25



</td>
</tr>
<tr>
<td valign="top">

 1.87 



</td>
<td valign="top">

 Changed 



</td>
<td valign="top">

 Control 



</td>
<td valign="top">

 **`sap.ui.comp.smartfield.SmartField`, `sap.ui.comp.smartform.SmartForm`** 



</td>
<td valign="top">

**`sap.ui.comp.smartfield.SmartField`, `sap.ui.comp.smartform.SmartForm`**

`SmartForm` and `SmartField` now support the `importance` property. Based on this property, the `SmartForm` decides which `SmartFields` will be visible. This feature makes the `SmartForm` more flexible if you have limited screen real estate because it can display only the fields that are important for the user. The following options are available:

-   If the `SmartForm` has `high` importance, only smart fields with `high` importance will be visible.

-   If the `SmartForm` has `medium` importance, only smart fields with `high` and `medium` importance will be visible.

-   If the `SmartForm` has `low` importance \(default\), all smart fields will be visible, regardless of their importance.


> ### Note:  
> If a `SmartField` is annotated as `mandatory` or `hidden`, its visibility is not affected by the `importance` property.

The `SmartField` importance can also be set using the `UI.Importance` annotation. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smartfield.SmartField%23annotations/Importance) in the Demo Kit. 

If both the property and the annotation are set, the importance of the property is taken into account.

For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smartform.SmartForm) and the [Smart Form using Importance property Sample](https://ui5.sap.com/#/entity/sap.ui.comp.smartform.SmartForm/sample/sap.ui.comp.sample.smartformImportance).

<sub>Changed•Control•Info Only•1.87</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2021-02-25



</td>
</tr>
<tr>
<td valign="top">

 1.87 



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

`SmartField` now supports values that are not part of the `ComboBox` list. As a result, such values are no longer shown as invalid and are now sent to the backend.

We have extended `sap.m.ComboBox` with our own control `sap.ui.comp.smartfield.ComboBox`. The bound property of the `SmartField` value of `sap.ui.comp.smartfield.ComboBox` is `enteredValue`. In this property, we store the `selectedKey` when a selection is made inside the `ComboBox` from `sap.m.List`, or a manually entered value. For more information, see the [Smart Field with ValueHelp Sample](https://ui5.sap.com/#/entity/sap.ui.comp.smartfield.SmartField/sample/sap.ui.comp.sample.smartfield.SmartFieldWithValueHelp).

<sub>Changed•Control•Info Only•1.87</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2021-02-25



</td>
</tr>
<tr>
<td valign="top">

 1.87 



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

We have done some fine-tuning regarding the handling of the column width for all supported table types: The `enableAutoColumnWidth` property, which enables the automatic resizing of columns, is no longer experimental. Column resizing now takes various factors into account, for example, long column header texts, the width of icons, or paddings of input fields in edit mode. End users can now also adjust the column size in responsive tables based on their specific needs.

For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smarttable.SmartTable%23methods/getEnableAutoColumnWidth) and the [Sample](https://ui5.sap.com/#/entity/sap.ui.comp.smarttable.SmartTable/sample/sap.ui.comp.sample.smarttable).

<sub>Changed•Control•Info Only•1.87</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2021-02-25



</td>
</tr>
<tr>
<td valign="top">

 1.87 



</td>
<td valign="top">

 Changed 



</td>
<td valign="top">

 Control 



</td>
<td valign="top">

 **`sap.ui.comp.smartvariants.SmartVariantManagement`** 



</td>
<td valign="top">

**`sap.ui.comp.smartvariants.SmartVariantManagement`**

We have made some changes in the *Manage Views* dialog:

-   To ensure consistent usability, we changed the *OK* button to *Save*.

-   For standard views, you can now show your company name as the author instead of *SAP* under *Created By*.


For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.ui.comp.tutorial.smartControls/sample/sap.ui.comp.tutorial.smartControls.07).

<sub>Changed•Control•Info Only•1.87</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2021-02-25



</td>
</tr>
<tr>
<td valign="top">

 1.87 



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

-   Integration cards now allow you to use arrays as values in the manifest parameters. One example scenario is to use an array parameter in expression binding inside the visible property and to display only the elements that have values. For more information, see the [Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/object/arrayParameters) in the Card Explorer.

-   Two new experimental actions are now available in the Calendar card that you can use to set dynamic data fetching to be dependent of the selected date/month:

    -   `DateChange` – triggered when a date is selected.

    -   `MonthChange` – triggered when the currently displayed month is changed from the pickers or from the arrow buttons.


    Both `DateChange` and `MonthChange` actions are triggered when the `Today` button is pressed. For more information, see the [Samples](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/calendar/extension) and the [Calendar Card](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/types/calendar) section in the Card Explorer.

-   The `Extension` feature is no longer in experimental state. For more information, see the [Samples](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/extension) and the [Card Extension](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/features/extension) section in the Card Explorer.

<sub>Changed•Control•Info Only•1.87</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2021-02-25



</td>
</tr>
<tr>
<td valign="top">

 1.87 



</td>
<td valign="top">

 Changed 



</td>
<td valign="top">

 Control 



</td>
<td valign="top">

 **`sap.ui.layout.cssgrid.ResponsiveColumnLayout`** 



</td>
<td valign="top">

**`sap.ui.layout.cssgrid.ResponsiveColumnLayout`**

We have enhanced the layout with higher density of responsive breakpoints, providing flexibility and allowing developers to configure the grid settings and display the content in the best possible way. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.layout.cssgrid.ResponsiveColumnLayout).

<sub>Changed•Control•Info Only•1.87</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2021-02-25



</td>
</tr>
<tr>
<td valign="top">

 1.87 



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

-   If `UI.Importance` is not defined, the default value is set as `None`, except for semantic key fields. Before this release, the default value was set as `High`. For more information, see [Tables](../06_SAP_Fiori_Elements/tables-c0f6592.md).

-   In a draft application with a flexible column layout, the subobject page closes and returns to the main object if you click the *Apply* button. For more information, see [Object Page Elements](../06_SAP_Fiori_Elements/object-page-elements-645e27a.md).

-   You can now see tooltips for images in list reports and object pages.

-   A data loss warning message is now shown to the user while navigating away from a non-draft page with unsaved changes through the shell menu.

-   A new `TriggerAction` annotation is now supported for side effects. For more information, see [Side Effects](../06_SAP_Fiori_Elements/side-effects-18b17bd.md) and [Side Effect Annotations: Examples](../06_SAP_Fiori_Elements/side-effect-annotations-examples-61cf21d.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.87</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2021-02-25



</td>
</tr>
<tr>
<td valign="top">

 1.87 



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

**Title**

The following changes and new features are available for SAP Fiori elements for OData V4:

-   Application developers can now calculate default values for action parameters through a back-end function. As a result, on the UI, when the user opens the action parameter dialog, the parameter fields are prefilled with the returned values of the back-end function. For more information, see [Actions](../06_SAP_Fiori_Elements/actions-cbf16c5.md).

-   Key users can now embed, update, move, and remove IFrame content \(that is, embedded content\) on object page headers and sections. For more information, see [Embedding Content.](https://help.sap.com/viewer/0f8b49c4dfc94bc0bda25a19aa93d5b2/Cloud/en-US/bfdf15154f16419fb60ce598b21fe515.html?q=embedding%20content).

-   Application developers can now add custom fields to forms on the object page. For more information, see [Extension Points for Forms on the Object Page](../06_SAP_Fiori_Elements/extension-points-for-forms-on-the-object-page-4e49753.md).

-   Application developers can now override the horizontal alignment of table columns via the manifest. For more information, see [Overriding the Horizontal Alignment of Annotation-Based Table Columns](../06_SAP_Fiori_Elements/overriding-the-horizontal-alignment-of-annotation-based-table-columns-fb93920.md).

-   Application developers can now overwrite the annotation-based values via the manifest for certain properties. For more information, see [Actions](../06_SAP_Fiori_Elements/actions-cbf16c5.md).

-   Application developers can now add dynamic side content to sections on the object page. For more information, see [Adding Dynamic Side Content to Object Page Sections](../06_SAP_Fiori_Elements/adding-dynamic-side-content-to-object-page-sections-8e01a46.md).

-   When application developers enable full-screen mode for tables, a button on the table toolbar allows users to open the table in full-screen mode. This provides more space for displaying and working with table entries. For more information, see [Enabling the Full-Screen Mode for Tables](../06_SAP_Fiori_Elements/enabling-the-full-screen-mode-for-tables-1d3c2ff.md).

-   Application developers can now selectively enable `DataFieldForIntentBasedNavigation` buttons using the `NavigationAvailable` property of the `DataFieldForIntentBasedNavigation` annotation. For more information, see [Navigation from an App \(Outbound Navigation\)](../06_SAP_Fiori_Elements/navigation-from-an-app-outbound-navigation-d782acf.md).

-   Application developers can now overwrite the behavior of the `Common.Text` annotation via the `TextArrangementType` `#TextSeparate`. For more information, see [Further Features of the Field](../06_SAP_Fiori_Elements/further-features-of-the-field-f49a0f7.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.87</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2021-02-25



</td>
</tr>
<tr>
<td valign="top">

 1.87 



</td>
<td valign="top">

 Changed 



</td>
<td valign="top">

 Feature 



</td>
<td valign="top">

 **Demo Kit HTML Title** 



</td>
<td valign="top">

**Demo Kit HTML Title**

We’ve improved the HTML title tag of the Demo Kit app to contain more information about the page that is currently loaded. Now, if you have multiple tabs with different Demo Kit content loaded on them, you can see the specific page names directly from the browser tab.

<sub>Changed•Feature•Info Only•1.87</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2021-02-25



</td>
</tr>
</table>

**Related Information**  


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

