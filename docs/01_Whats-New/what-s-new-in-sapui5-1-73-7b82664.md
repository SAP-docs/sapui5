<!-- loio7b826642c45d4b8d97c5013cdc240ad6 -->

# What's New in SAPUI5 1.73

With this release SAPUI5 is upgraded from version 1.72 to 1.73.



<a name="loio7b826642c45d4b8d97c5013cdc240ad6__section_bkm_s15_zcb"/>

## New Controls


<table>
<tr>
<td valign="top">

**`sap.f.AvatarGroup` \(Experimental\)**

`AvatarGroup` is used to display a group of related avatars, arranged horizontally. The control allows you to display the avatars in different sizes, depending on your use case. Two group types are available: `Group` and `Individual`.

 ![](images/WN_1_73_-_AvatarGroup_d2ac28d.gif) 

For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.f.AvatarGroup) and the [Samples](https://ui5.sap.com/#/entity/sap.f.AvatarGroup).



</td>
</tr>
</table>



<a name="loio7b826642c45d4b8d97c5013cdc240ad6__section_qwl_pb5_zcb"/>

## Improved Features


<table>
<tr>
<td valign="top">

**Alternatives for the SAPUI5 Tools for Eclipse**

As we have announced with SAPUI5 version 1.71, the SAPUI5 Tools for Eclipse are no longer updated. We have removed the corresponding documentation from the SAPUI5 documentation with version 1.73. To find out more about recommended alternatives, please read our blog post: [SAPUI5 Tools for Eclipse - Now Is the Time to Look for Alternatives](https://blogs.sap.com/sapui5-tools-for-eclipse-now-is-the-time-to-look-for-alternatives/).



</td>
</tr>
<tr>
<td valign="top">

**Export Functions**

The `sap.ui.core.util.Export` class has been deprecated. To use export functions, `sap.ui.export.Spreadsheet` is available.

For more information, see [Spreadsheet Export](../04_Essentials/spreadsheet-export-2691788.md), the [API Reference](https://ui5.sap.com/#/api/sap.ui.export.Spreadsheet), and the [Samples](https://ui5.sap.com/#/entity/sap.ui.export.Spreadsheet).



</td>
</tr>
<tr>
<td valign="top">

**SAPUI5 OData V4 Model**

The new version of the SAPUI5 OData V4 model introduces the following features:

-   Binding of operation parameters as described in [OData Operations](../04_Essentials/odata-operations-b54f789.md) in the SAPUI5 documentation.

-   Methods for finding bindings that have become public:

    -   `sap.ui.model.odata.v4.ODataModel#getAllBindings`
    -   `sap.ui.model.Binding#getPath` 
    -   `sap.ui.model.Binding#getContext`
    -   `sap.ui.model.Binding#getModel`


> ### Restriction:  
> Due to the limited feature scope of this version of the SAPUI5 OData V4 model, check that all required features are in place before developing applications. Double-check the detailed documentation of the features, as certain parts of a feature may be missing. While we aim to be compatible with existing controls, some controls might not work due to small incompatibilities compared to `sap.ui.model.odata.(v2.)ODataModel`, or due to missing features in the model \(such as tree binding\). This also applies to smart controls \(`sap.ui.comp` library\) that do not support the SAPUI5 OData V4 model, as well as controls such as `TreeTable` and `AnalyticalTable`, which are not supported in combination with the SAPUI5 OData V4 model. The interface for applications has been changed for easier and more efficient use of the model. For a summary of these changes, see [Changes Compared to OData V2 Model](../04_Essentials/changes-compared-to-odata-v2-model-abd4d7c.md).

For more information, see [OData V4 Model](../04_Essentials/odata-v4-model-5de13cf.md), the [API Reference](https://ui5.sap.com/#/api/sap.ui.model.odata.v4), and the [Samples](https://ui5.sap.com/#/entity/sap.ui.model.odata.v4.ODataModel).



</td>
</tr>
</table>



<a name="loio7b826642c45d4b8d97c5013cdc240ad6__section_rqn_wd5_zcb"/>

## Improved Controls


<table>
<tr>
<td valign="top">

**`sap.f.semantic.SemanticPage`**

The `fitContent` property of the `sap.f.DynamicPage` control is now also exposed in `sap.f.semantic.SemanticPage`. It's used to optimize the responsiveness and behavior of the control and we recommend using this property when displaying content of adaptive controls that stretch to fill the available space.For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.f.semantic.SemanticPage).



</td>
</tr>
<tr>
<td valign="top">

**`sap.m.Button`**

Four new button types were introduced in the `sap.m.ButtonType` enum. Designed as message triggering buttons, use them to open `sap.m.MessagePopover`. Each button type has a dedicated meaning.

-   Critical
-   Negative
-   Success
-   Neutral

 ![](images/WhatsNew_173_messageButtons_dbf0df8.png) 

For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.ButtonType).



</td>
</tr>
<tr>
<td valign="top">

**`sap.m.ComboBox`, `sap.m.MultiComboBox`**

We have updated the behavior of the `showItems` method. When the control's picker is opened, the dropdown arrow is not in pressed state, as it was previously. Now, pressing the dropdown arrow for the first time opens the control's picker with all items, and with the second press the picker is closed. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.ComboBoxBase).



</td>
</tr>
<tr>
<td valign="top">

**`sap.m.Dialog`**

We have enabled responsive padding support. Application developers can now configure `sap.m.Dialog` and enable its responsive padding in the SAP Fiori 3 themes.

For more information, see [Enabling Responsive Paddings According to the Control Width](../04_Essentials/enabling-responsive-paddings-according-to-the-control-width-3b718b5.md).



</td>
</tr>
<tr>
<td valign="top">

**`sap.m.Input`**

A `change` event is now fired when the browser autofill fills an input.

> ### Note:  
> If `showValueHelp` or `showSuggestion` are set to `true`, the native browser autofill will not fire a `change` event.

 For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.Input).



</td>
</tr>
<tr>
<td valign="top">

**`sap.m.Label`**

A visual change was introduced for the `sap.m.Label` control to align it with SAP Fiori Design Guidelines. The asterisk is now positioned on the right side of the text. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.Label) and the [Sample](https://ui5.sap.com/#/entity/sap.m.Label/sample/sap.m.sample.Label).



</td>
</tr>
<tr>
<td valign="top">

**`sap.m.list`**, **`sap.m.StandardListItem`**

The usability of the additional information text and its combination with title and description has been improved for these controls. The information text is no longer truncated if it is shorter than or equal to the character limit predefined by the control. For more information, see the [Card Explorer](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/list/numeric).



</td>
</tr>
<tr>
<td valign="top">

**`sap.m.MessagePopover`**

We have exposed the `groupItems` property and `navigateBack` function as APIs in the control. Using the `navigateBack` function you can navigate back to the list page, and with the `groupItems` property you can configure whether or not items should be grouped. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.MessagePopover). 



</td>
</tr>
<tr>
<td valign="top">

**`sap.m.NotificationListItem`**, **`sap.m.NotificationListGroup`**

We have redesigned the notifications, and now they are lighter, easy to use, and aligned with the SAP Fiori 3 user experience. The changes include:

-   The priority of the notifications is now visualized with a status icon.
-   Action buttons in the `sap.m.OverflowToolbar` could now be hidden.
-   Collapse/expand functionality of the `sap.m.NotificationListGroup` is implemented with an arrow button instead of text.
-   For the `sap.m.NotificationListGroup`, we have enabled an item counter, which represents the count of currently loaded items inside this group. It can be visible or hidden using the new `showItemsCounter` property.
-   The new `authorInitials` property is now introduced for `sap.m.NotificationListItem`. It is visualized as an avatar, and used as a fallback when the `authorPicture` is not provided. The background color of the avatar is chosen randomly.

For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.NotificationListGroup) and the [Samples](https://ui5.sap.com/#/entity/sap.m.NotificationListGroup).



</td>
</tr>
<tr>
<td valign="top">

**`sap.m.NumericContent`**

A new `adaptiveFontSize` property is now introduced to meet different country/locale requirements according to the Unicode Common Locale Data Repository \(CLDR\). For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.NumericContent) and [CLDR](http://cldr.unicode.org/).



</td>
</tr>
<tr>
<td valign="top">

**`sap.m.PlanningCalendar`**

We have added a new `headerId` parameter to the `rowHeaderClick` event, which enables developers to directly access row header by ID.

> ### Note:  
> Do not use this feature for `PlanningCalendar`’s `rowHeader` modification.

For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.PlanningCalendar).



</td>
</tr>
<tr>
<td valign="top">

**`sap.m.ProgressIndicator`**

With the new `displayAnimation` property, you can now determine whether a percentage change is displayed with or without animation.For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.ProgressIndicator) and the [Sample](https://ui5.sap.com/#/entity/sap.m.ProgressIndicator/sample/sap.m.sample.ProgressIndicator).



</td>
</tr>
<tr>
<td valign="top">

**`sap.ui.comp.SmartField, sap.ui.comp.SmartFilterBar, sap.ui.comp.SmartTable`**

You can now search for empty strings for dates of type `Edm.DateTime`, `Edm.DateTimeOffset`, and `StringDate`, for example, in the value help or the personalization dialog.



</td>
</tr>
<tr>
<td valign="top">

**`sap.ui.integration.widgets.Card`**

-   We have improved the support for the relative date ranges. This allows the card developers to use date ranges, such as `lastYear` or `nextQuarter` inside the card's manifest. Such automatically calculated date ranges can be used in data requests or other card attributes. For more information, see [Integration Card Date Range Handling](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/featureDateRangeHandling) in the Card Explorer.
-   We have added a new `format` namespace to hold formatters used in expression bindings, and added a predefined `date` formatter method to it. For more information, see the [Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/dateAndTime) in the Card Explorer.
-   The custom HTML element to consume cards on any web page is refactored. Now, height and width are specified in the standard CSS syntax and no longer as separate tag attributes. For more information, see the [Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/htmlConsumption) in the Card Explorer.



</td>
</tr>
<tr>
<td valign="top">

**`sap.ui.layout.cssgrid.ResponsiveColumnLayout`**

This control now also supports Microsoft Internet Explorer 11, due to the implemented polyfill. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.layout.cssgrid.CSSGrid) and the [Sample](https://ui5.sap.com/#/entity/sap.ui.layout.cssgrid.CSSGrid/sample/sap.ui.layout.sample.GridResponsiveColumnLayout).



</td>
</tr>
<tr>
<td valign="top">

**`sap.ui.table.AnalyticalTable, sap.ui.table.Table, sap.ui.table.TreeTable`**

The `navigated` property that was introduced in version 1.72 is now also available for these controls \(if no row actions are available\). The property shows a navigation indicator at the end of a row to indicate that the user has either already navigated to further details or can navigate to further details from the item, depending on the application use case. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.table.RowSettings) and the [Sample](https://ui5.sap.com/#/entity/sap.ui.table.Table/sample/sap.ui.table.sample.RowAction).



</td>
</tr>
<tr>
<td valign="top">

**`sap.uxap.ObjectPageHeader`**

With the new `objectImageBackgroundColor` property, you can now determine the background color of the icon or the image placeholder used in the `sap.uxap.ObjectPageHeader`.For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.uxap.ObjectPageHeader) and the [Sample](https://ui5.sap.com/#/entity/sap.uxap.ObjectPageLayout/sample/sap.uxap.sample.ObjectPageHeaderContentPriorities).



</td>
</tr>
<tr>
<td valign="top">

**`sap.uxap.ObjectPageLayout`**

With the new `sectionChange` event, you can identify when the page is scrolled to a specific section. The `section` and `subSection` event parameters are provided when the event is fired.For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.uxap.ObjectPageLayout).



</td>
</tr>
</table>



<a name="loio7b826642c45d4b8d97c5013cdc240ad6__section_r5v_3h5_zcb"/>

## Demo Kit Improvements


<table>
<tr>
<td valign="top">

**Search Highlighting in *Search Results* and *API Reference* Tree**

You can now easily find the results you're interested in with the new search highlighting functionality that we implemented for the *Search Results* page and the *API Reference* tree filter.

 ![](images/WN_1_73_Demo_Kit_Search_Highlighting_0405589.gif) 



</td>
</tr>
</table>

**Related Information**  


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

