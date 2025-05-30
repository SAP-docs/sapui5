<!-- loio85609d48f6954cf1a13724c1aaa78c63 -->

# What's New in SAPUI5 1.130

With this release SAPUI5 is upgraded from version 1.129 to 1.130.

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

**Related Information**  


[What's New in SAPUI5 1.134](what-s-new-in-sapui5-1-134-c512d71.md "With this release SAPUI5 is upgraded from version 1.133 to 1.134.")

[What's New in SAPUI5 1.133](what-s-new-in-sapui5-1-133-86d7605.md "With this release SAPUI5 is upgraded from version 1.132 to 1.133.")

[What's New in SAPUI5 1.132](what-s-new-in-sapui5-1-132-bd2e61f.md "With this release SAPUI5 is upgraded from version 1.131 to 1.132.")

[What's New in SAPUI5 1.131](what-s-new-in-sapui5-1-131-7d24d94.md "With this release SAPUI5 is upgraded from version 1.130 to 1.131.")

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

