<!-- loio85609d48f6954cf1a13724c1aaa78c63 -->

<link rel="stylesheet" type="text/css" href="../css/sap-icons.css"/>

# What's New in SAPUI5 1.130

With this release SAPUI5 is upgraded from version 1.129 to 1.130.

> ### Tip:  
> If you want to do a search across all versions of the What's New content, you can also find it in the [SAPUI5 What's New viewer](https://help.sap.com/whats-new/67f60363b57f4ac0b23efd17fa192d60).

> ### Note:  
> Content marked as <span style="color:#666666;"><span class="SAP-icons-V5"></span></span>**[Preview](https://help.sap.com/docs/whats-new-disclaimer)** is provided as a courtesy, without a warranty, and may be subject to change. For more information, see the [preview disclaimer](https://help.sap.com/docs/whats-new-disclaimer).

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

Upcoming 

</td>
<td valign="top">

Deleted 

</td>
<td valign="top">

Announcement 

</td>
<td valign="top">

**End of Cloud Provisioning for SAPUI5 Versions \(Q4/2024\)** 

</td>
<td valign="top">

**End of Cloud Provisioning for SAPUI5 Versions \(Q4/2024\)**

The following SAPUI5 versions will be removed from the SAPUI5 Content Delivery Network \(CDN\) after the end of Q4/2024.

**Minor Versions Reaching Their End of Cloud Provisioning**

The following versions including all patches will be removed entirely:

-   1.114
-   1.117
-   1.118
-   1.119

**Action**: Upgrade to a version that is still in maintenance.

**Patch Versions Reaching Their End of Cloud Provisioning**

The following patches will be removed:

-   Long-term maintenance versions:

    -   1.71.59 to 1.71.60
    -   1.84.37 to 1.84.39
    -   1.96.25 to 1.96.26
    -   1.108.23 to 1.108.25
    -   1.120.0 to 1.120.2

    **Action**: Upgrade to the latest available patch for the respective SAPUI5 version.


For more information, see [Version Overview](https://ui5.sap.com/versionoverview.html).

<sub><span style="color:#666666;"><span class="SAP-icons-V5"></span></span>**[Preview](https://help.sap.com/docs/whats-new-disclaimer)**•Deleted•Announcement•Info Only•Upcoming</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

9999-01-01

</td>
</tr>
<tr>
<td valign="top">

1.130 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

User Documentation 

</td>
<td valign="top">

**Accessibility Documentation for End Users** 

</td>
<td valign="top">

**Accessibility Documentation for End Users**

We have enhanced the documentation for the table controls and added the keyboard shortcuts for cell selection. For more information, see [Accessibility for End Users](https://help.sap.com/viewer/bc5a64aac808463baa95b4230f221716/1.130/en-US).

<sub>Changed•User Documentation•Info Only•1.130</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-10-31

</td>
</tr>
<tr>
<td valign="top">

1.130 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**Document Export** 

</td>
<td valign="top">

**Document Export**

For PDF exports, we now support the `TextDirectionLayout` property in the `com.sap.vocabularies.PDF.v1.Features` annotation that offers an RTL \(right-to-left\) layout for certain languages, such as Arabic or Hebrew.

<sub>Changed•Feature•Info Only•1.130</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-10-31

</td>
</tr>
<tr>
<td valign="top">

1.130 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

SAP Fiori Elements 

</td>
<td valign="top">

SAP Fiori Elements for OData V4 

</td>
<td valign="top">

**SAP Fiori Elements for OData V4**

The following changes and new features are available for SAP Fiori elements for OData V4:

-   We now support key user adaptation on the mass edit dialog. For more information, see [Enabling an App for Key User Adaptation](../06_SAP_Fiori_Elements/enabling-an-app-for-key-user-adaptation-ccd45ba.md).

-   You can now add a custom fragment to the mass edit dialog. For more information, see [Adding a Custom ViewExtension to the Mass Edit Dialog](../06_SAP_Fiori_Elements/adding-a-custom-viewextension-to-the-mass-edit-dialog-fd26fee.md).

-   You can now define a custom save functionality for the mass edit dialog. For more information, see [Replacing the Standard Save Functionality in the Mass Edit Dialog](../06_SAP_Fiori_Elements/replacing-the-standard-save-functionality-in-the-mass-edit-dialog-492d8a9.md).

-   We now provide a dialog that enables users to directly create a new object in the list report or on the object page. For more information, see [Enabling Object Creation Using the Dialog in the List Report](../06_SAP_Fiori_Elements/enabling-object-creation-using-the-dialog-in-the-list-report-ceb9284.md) and [Tree Tables](../06_SAP_Fiori_Elements/tree-tables-7cf7a31.md).

-   We now support `pattern` as a format option for date-and-time-based controls. For more information, see [Configuring Fields](../06_SAP_Fiori_Elements/configuring-fields-4b50f21.md).

-   Key users can now make changes to the `manifest.json` file. For more information, see [Adapting the UI](../06_SAP_Fiori_Elements/adapting-the-ui-59bfd31.md).

-   You can now use aggregatable properties to filter the data on analytical tables. For more information, see [Setting the Table Type](../06_SAP_Fiori_Elements/setting-the-table-type-7f844f1.md).

-   We now support sorting of data in micro charts. For more information, see [Micro Chart Facet](../06_SAP_Fiori_Elements/micro-chart-facet-e219fd0.md).

-   We now save the information about the resized columns in the flexible column layout in the personalization settings. For more information, see [Enabling the Flexible Column Layout](../06_SAP_Fiori_Elements/enabling-the-flexible-column-layout-e762257.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.130</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-10-31

</td>
</tr>
<tr>
<td valign="top">

1.130 

</td>
<td valign="top">

Deprecated 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**Deprecations** 

</td>
<td valign="top">

**Deprecations**

There are currently no major deprecations. For a complete list of all deprecations, see [Deprecated APIs](https://ui5.sap.com/#/api/deprecated).

<sub>Deprecated•Feature•Info Only•1.130</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-10-31

</td>
</tr>
<tr>
<td valign="top">

1.130 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**sap.m.List** 

</td>
<td valign="top">

**sap.m.List**

Up to now, labels in lists might have been truncated. We have now enabled wrapping for input list items, which is already a feature for standard list items. We have also introduced the `contentSize` property to adjust the behavior for input controls of different sizes. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.InputListItem%23methods/getContentSize).

<sub>Changed•Control•Info Only•1.130</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-10-31

</td>
</tr>
<tr>
<td valign="top">

1.130 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**sap.m.plugins.CellSelector** 

</td>
<td valign="top">

**sap.m.plugins.CellSelector**

We have now made the `selectionChange` event public. The event indicates that the user changed the selection of cells. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.plugins.CellSelector%23events).

<sub>Changed•Control•Info Only•1.130</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-10-31

</td>
</tr>
<tr>
<td valign="top">

1.130 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**sap.ui.mdc.Table** 

</td>
<td valign="top">

**sap.ui.mdc.Table**

We have enabled the interactive row mode for tables of type `GridTableType`. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.mdc.enums.TableRowCountMode%23overview).

<sub>Changed•Control•Info Only•1.130</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-10-31

</td>
</tr>
<tr>
<td valign="top">

1.130 

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

The smart field now supports lazy loading of value help metadata for function import parameters. Now you can load value help metadata for an entry with the following format: `<namespace>.<entity container name>/<function import name>/<parameter name>`.

<sub>Changed•Control•Info Only•1.130</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-10-31

</td>
</tr>
<tr>
<td valign="top">

1.130 

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

We've improved the interval options for dynamic date range filters enabling the inclusion of past and future intervals from minutes to years. Users can now select *Last X Minutes/Hours/Days/Weeks/Months/Quarters/Years* and *Next X Minutes/Hours/Days/Weeks/Months/Quarters/Years* with the option to include or exclude the current period. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smartfilterbar.SmartFilterBar) and the [Sample](https://ui5.sap.com/#/entity/sap.ui.comp.smartfilterbar.SmartFilterBar/sample/sap.ui.comp.sample.smartfilterbar.UseDateRangeType).

<sub>Changed•Control•Info Only•1.130</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-10-31

</td>
</tr>
<tr>
<td valign="top">

1.130 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.MultiComboBox`** 

</td>
<td valign="top">

**`sap.m.MultiComboBox`**

We have corrected the accessibility validation to hide the checkbox from the accessibility tree and make it non-interactive. This ensures compliance with the latest accessibility standards.

<sub>Changed•Control•Info Only•1.130</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-10-31

</td>
</tr>
<tr>
<td valign="top">

1.130 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**SAPUI5 Types** 

</td>
<td valign="top">

**SAPUI5 Types**

The parse error messages of the following types now contain an example showing the expected format:

-   `sap.ui.model.type.Date`
-   `sap.ui.model.type.Time`
-   `sap.ui.model.type.DateTime`
-   `sap.ui.model.type.DateInterval`
-   `sap.ui.model.type.TimeInterval`
-   `sap.ui.model.type.DateTimeInterval`

<sub>Changed•Feature•Info Only•1.130</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-10-31

</td>
</tr>
<tr>
<td valign="top">

1.130 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**SAPUI5 Formatter** 

</td>
<td valign="top">

**SAPUI5 Formatter**

When using the currency instance of `sap.ui.core.format.NumberFormat#getCurrencyInstance` without providing custom currencies, the number of decimals defined in the Unicode Common Locale Data Repository for the given currency is used when formatting the amount unless the `decimals` format option is provided.

For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.core.format.NumberFormat%23methods/sap.ui.core.format.NumberFormat.getCurrencyInstance).

<sub>Changed•Feature•Info Only•1.130</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-10-31

</td>
</tr>
<tr>
<td valign="top">

1.130 

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

-   The support for `OneWay` property bindings for properties of complex type, introduced as an experimental feature with SAPUI5 1.126, is now available; you can use it in productive applications.

    For more information, see [Property Binding With an Object Value](../04_Essentials/initialization-and-read-requests-fccfb2e.md#loiofccfb2eb41414f0792c165e69a878717__section_PBOV).

-   The selection feature introduced with SAPUI5 1.111 is now available and can be used productively.

    For more information, see [Selection](../04_Essentials/selection-ec55312.md)and the API Reference for [`v4.Context#setSelected`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context%23methods/setSelected) and [`#isSelected`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context%23methods/isSelected).

-   The `createInPlace` property, introduced as an experimental feature with SAPUI5 1.126 for the `$$aggregation` binding parameter and the `sap.ui.model.odata.v4.ODataListBinding#setAggregation` API, is now available and can be used productively.

    For more information, see [Recursive Hierarchy](../04_Essentials/data-aggregation-and-recursive-hierarchy-7d91431.md#loio7d914317c0b64c23824bf932cc8a4ae1__section_RCH)and the [API Reference](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding%23methods/setAggregation).

-   The `sap.ui.model.odata.v4.Context#expand` method now returns a `Promise`.

    For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context%23methods/expand).

-   We have provided the new `sap.ui.model.odata.v4.Context#getFilter` method. It returns an `sap.ui.model.Filter` corresponding to the context.

    For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context%23methods/getFilter).


<sub>Changed•Feature•Info Only•1.130</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-10-31

</td>
</tr>
<tr>
<td valign="top">

1.130 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**Demo Kit: Improved search in collapsed nodes** 

</td>
<td valign="top">

**Demo Kit: Improved search in collapsed nodes**

Previously, when using a browser search \([Ctrl\] + [F\] \) or the Demo Kit’s global search, results in collapsed nodes, such as code samples or sections, wouldn’t be highlighted. These nodes would remain collapsed. We’ve improved this experience, and now when users perform a search that includes collapsed nodes, the nodes expand, and the search term is highlighted.

<sub>Changed•Feature•Info Only•1.130</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-10-31

</td>
</tr>
<tr>
<td valign="top">

1.130 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.Select`** 

</td>
<td valign="top">

**`sap.m.Select`**

We’ve added a new `beforeOpen` event. This event indicates that the control is opening and triggers before the `sap.m.SelectList` opens.For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.Select).

<sub>Changed•Control•Info Only•1.130</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-10-31

</td>
</tr>
<tr>
<td valign="top">

1.130 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.Avatar`** 

</td>
<td valign="top">

**`sap.m.Avatar`**

We have improved the control behavior. The magnifier icon is no longer displayed for avatars when an icon URI is set as the source image.For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.Avatar).

<sub>Changed•Control•Info Only•1.130</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-10-31

</td>
</tr>
<tr>
<td valign="top">

1.130 

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

To improve the accessibility of the control, we have set the navigation arrows to be always visible on touch devices. The behavior on desktop devices doesn't change - the navigation arrows are always shown, except when the arrows are placed over the content \(`sap.m.CarouselArrowsPlacement.Content`\) when they are shown only on hover. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.m.Carousel/sample/sap.m.sample.CarouselWithDisplayOptions).

<sub>Changed•Control•Info Only•1.130</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-10-31

</td>
</tr>
<tr>
<td valign="top">

1.130 

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

We have enhanced the options for date ranges of type *Last X Minutes / Hours / Days / Weeks / Months / Quarters / Years* and *Next X Minutes / Hours / Days / Weeks / Months / Quarters / Years*. Until now, the control has returned intervals that exclude the current period. For example, if today is 17 October 2024, then `Last 2 Days` would return the interval `15 October 2024 – 16 October 2024`. We have now added additional options and the users also have the choice to include the current period. Therefore, in the same example, the control would return `16 October 2024 – 17 October 2024`. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.m.DynamicDateRange/sample/sap.m.sample.DynamicDateRange).

<sub>Changed•Control•Info Only•1.130</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-10-31

</td>
</tr>
<tr>
<td valign="top">

1.130 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.TableSelectDialog`** 

</td>
<td valign="top">

**`sap.m.TableSelectDialog`**

We have improved the UX of the control when the dialog is in single-selection mode and the `rememberSelections` property is set. When a user selects an item and reopens the dialog, the selection is preserved. Now, if the user selects the same item again, the dialog closes automatically. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.TableSelectDialog).

<sub>Changed•Control•Info Only•1.130</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-10-31

</td>
</tr>
<tr>
<td valign="top">

1.130 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

****

`sap.ui.integration.widgets.Card`

</td>
<td valign="top">

**`sap.ui.integration.widgets.Card`**

-   Application developers can now specify the first day of the week in a Calendar card by setting the option `calendarWeekNumbering` in the card manifest to one of the available options: `Default`, `ISO_8601`, `MiddleEastern`, or `WesternTraditional`. For more information, see the [API Reference](https://ui5.sap.com/#api/module:sap/base/i18n/date/CalendarWeekNumbering) and the [Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/calendar).

-   We have added a new `use12HourFormat` Boolean property to the Calendar card, which enables developers to display the card either in 24-hour \(default\) or 12-hour format.

-   We have improved the UX in the pagination for List, Table, and Timeline cards. Previously, users could flip back and forth through the items of the card in place. Now, they can scroll through the items. Scrolling happens in a separate card, which opens in a dialog after selecting the *Show More* button. For more information, see the [Pagination](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/features/pagination) section and the [Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/pagination/server).

-   The Component card now supports file upload functionality. To achieve this, we have enhanced the card’s `request` method to support parameters of type `FormData`. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.integration.widgets.Card/methods/request) and the [Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/component/uploadFile).

-   We have introduced a new `fitType` property for icons in the Default Header and in the Object card. You can use it to define how the image fits in the icon space. The new property accepts values from the `sap.m.AvatarImageFitType` enum, with the default value `Cover`. For more information, see the [Default Header](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/headers/default) section and the [Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/object/iconFitType).


<sub>Changed•Control•Info Only•1.130</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-10-31

</td>
</tr>
</table>

