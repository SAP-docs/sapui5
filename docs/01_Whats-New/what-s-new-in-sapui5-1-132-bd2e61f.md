<!-- loiobd2e61ff57714ee28efdb5abb83af2e4 -->

# What's New in SAPUI5 1.132

With this release SAPUI5 is upgraded from version 1.131 to 1.132.

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

1.132 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.mdc.FilterBar`** 

</td>
<td valign="top">

**`sap.ui.mdc.FilterBar`**

We have introduced the option to filter a value help using the `Empty` and `NotEmpty` operators not only in fields of type `string`, but also in fields of type `Date` and `DateTime`. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.mdc.enums.OperatorName) and the [Sample](https://ui5.sap.com/#/entity/sap.ui.mdc/sample/sap.ui.mdc.demokit.sample.TableFilterBarJson). 

<sub>Changed•Control•Info Only•1.132</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-01-23

</td>
</tr>
<tr>
<td valign="top">

1.132 

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

<sub>Deprecated•Feature•Info Only•1.132</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-01-23

</td>
</tr>
<tr>
<td valign="top">

1.132 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

SAP Fiori Elements 

</td>
<td valign="top">

**SAP Fiori Elements for OData V2 and SAP Fiori Elements for OData V4** 

</td>
<td valign="top">

**SAP Fiori Elements for OData V2 and SAP Fiori Elements for OData V4**

The following changes and new features are available for SAP Fiori elements for OData V2 and SAP Fiori elements for OData V4:

-   You can now enable live mode for filter bars in list report applications. For more information, see [Configuring Filter Bars](../06_SAP_Fiori_Elements/configuring-filter-bars-4bd7590.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.132</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-01-23

</td>
</tr>
<tr>
<td valign="top">

1.132 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

SAP Fiori Elements 

</td>
<td valign="top">

**SAP Fiori Elements for OData V2** 

</td>
<td valign="top">

**SAP Fiori Elements for OData V2**

The following changes and new features are available for SAP Fiori elements for OData V2:

-   You can now use the `focusOnEditExtension` API in object pages to set focus on a specific control in both create mode and edit mode. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.suite.ui.generic.template.ObjectPage.controllerFrameworkExtensions).


<sub>Changed•SAP Fiori Elements•Info Only•1.132</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-01-23

</td>
</tr>
<tr>
<td valign="top">

1.132 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

SAP Fiori Elements 

</td>
<td valign="top">

**SAP Fiori Elements for OData V4** 

</td>
<td valign="top">

**SAP Fiori Elements for OData V4**

The following changes and new features are available for SAP Fiori elements for OData V4:

-   By default, we now display 10 fixed rows in a tree or analytical table on an object page when the table is not the sole control in the section or when the `sectionLayout` is set to `Page`. For more information, see [Setting the Table Type](../06_SAP_Fiori_Elements/setting-the-table-type-7f844f1.md).

-   You can now use the `VariantManagement` building block. For more information, see [The VariantManagement Building Block](../06_SAP_Fiori_Elements/the-variantmanagement-building-block-33640ff.md).

-   We no longer show the *Open in New Tab* option in the context menu if the object page is set to open in edit mode. For more information, see [Tables](../06_SAP_Fiori_Elements/tables-c0f6592.md) and [Navigation to an Object Page in Edit Mode](../06_SAP_Fiori_Elements/navigation-to-an-object-page-in-edit-mode-8665847.md).
-   We now support displaying a hierarchy within a value help. For more information, see [Field Help](../06_SAP_Fiori_Elements/field-help-a5608ea.md).
-   Key users can now split and combine actions in tables on the object page and in the list report. For more information, see [Enabling an App for Key User Adaptation](../06_SAP_Fiori_Elements/enabling-an-app-for-key-user-adaptation-ccd45ba.md).
-   We've implemented the `DataFieldForActionGroup` annotation, which allows the grouping of actions and their rendering within menu buttons. For more information, see [Actions](../06_SAP_Fiori_Elements/actions-cbf16c5.md).
-   We now sort the values in columns by their unit of measure or currency first, followed by the values themselves. For more information, see [Enabling Table Personalization](../06_SAP_Fiori_Elements/enabling-table-personalization-3e2b4d2.md) and [Configuring Default Settings \(Visualizations, Sort Order, Filter Values\)](../06_SAP_Fiori_Elements/configuring-default-settings-visualizations-sort-order-filter-values-49a6ba5.md).
-   We now support using an absolute path as the target entity for side effects events in a list report. For more information, see [Event-Driven Side Effects](../06_SAP_Fiori_Elements/event-driven-side-effects-27c9c3b.md).

<sub>Changed•SAP Fiori Elements•Info Only•1.132</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-01-23

</td>
</tr>
<tr>
<td valign="top">

1.132 

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

-   We have updated the `RichTextEditor` control to use TinyMCE version 6.8.5.
-   Two new premium TinyMCE plugins, `MergeTags` and `TinyComments`, are now available for use with the `RichTextEditor`.

<sub>Changed•Control•Info Only•1.132</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-01-23

</td>
</tr>
<tr>
<td valign="top">

1.132 

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

We've introduced a new property called `valueHelpTitleSource`. This property determines if the title of the value help dialog comes from the label of the main property or from the label of the value list. By default, the title is taken from the label of the main property. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smartfield.SmartField%23controlProperties). 

<sub>Changed•Control•Info Only•1.132</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-01-23

</td>
</tr>
<tr>
<td valign="top">

1.132 

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

-   We have extended the combo box filter with an additional attribute to allow for grouping items. For more information, see the [Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/comboBoxFilter/dynamicFilterGrouping).
-   Cards of type WebPage are no longer experimental. The WebPage Integration Cards now support relative URLs for their `src` property.

<sub>Changed•Control•Info Only•1.132</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-01-23

</td>
</tr>
<tr>
<td valign="top">

1.132 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.Button`** 

</td>
<td valign="top">

**`sap.m.Button`**

We have introduced a new `BadgeStyle` property that allows for the badge notification to be represented either as a number in default style or as a dot in attention style. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.m.Button/sample/sap.m.sample.ButtonWithBadge).

<sub>Changed•Control•Info Only•1.132</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-01-23

</td>
</tr>
<tr>
<td valign="top">

1.132 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.TimePicker`** 

</td>
<td valign="top">

**`sap.m.TimePicker`**

To improve accessibility, `TimePicker` now displays tooltips for hours, minutes, and seconds. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.m.TimePicker/sample/sap.m.sample.TimePickerHidden).

<sub>Changed•Control•Info Only•1.132</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-01-23

</td>
</tr>
<tr>
<td valign="top">

1.132 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.ViewSettingsDialog`** 

</td>
<td valign="top">

**`sap.m.ViewSettingsDialog`**

We have added a new preventable `beforeClose` event, for cases where the dialog should not close after selecting *OK*. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.ViewSettingsDialog%23events/Summary).

<sub>Changed•Control•Info Only•1.132</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-01-23

</td>
</tr>
<tr>
<td valign="top">

1.132 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.Menu`** 

</td>
<td valign="top">

**`sap.m.Menu`**

It's now possible to navigate through the elements added to the `endContent` aggregation. We've removed the experimental tag from the `endContent` aggregation. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.m.Menu/sample/sap.m.sample.MenuEndContent).

<sub>Changed•Control•Info Only•1.132</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-01-23

</td>
</tr>
<tr>
<td valign="top">

1.132 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**Types and Formatters** 

</td>
<td valign="top">

**Types and Formatters**

The new version of SAPUI5 introduces the following features:

-   The `decimals` format option of `sap.ui.model.type.Unit` and `sap.ui.model.odata.type.Unit` now defaults to 3 decimals if none of the `decimals`, `maxFractionDigits`, or `minFractionDigits` format options is set.

-   We have provided the new `decimalPadding` format option for the currency, float, and unit instances of `sap.ui.core.format.NumberFormat`. This format option is also available for types using the respective `NumberFormat` instances. In particular, it is available for `sap.ui.model.odata.type.Currency` and `sap.ui.model.odata.type.Unit`.

    For more information, see the API Reference for [`NumberFormat`](https://ui5.sap.com/#/api/sap.ui.core.format.NumberFormat), [`Currency`](https://ui5.sap.com/#/api/sap.ui.model.odata.type.Currency), and [`Unit`](https://ui5.sap.com/#/api/sap.ui.model.odata.type.Unit).


<sub>Changed•Feature•Info Only•1.132</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-01-23

</td>
</tr>
<tr>
<td valign="top">

1.132 

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

We have renamed the `iLevels` parameter of the `sap.ui.model.odata.v4.Context#expand` function introduced experimentally with SAPUI5 1.128 to `bAll`. Like the `bAll` parameter of `Context#collapse`, it is now available and can be used productively.For more information, see the API Reference for [`Context#expand`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context%23methods/expand) and [`Context#collapse`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context%23methods/collapse).

<sub>Changed•Feature•Info Only•1.132</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-01-23

</td>
</tr>
<tr>
<td valign="top">

1.132 

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

-   We have introduced a new `badgeIconColor` property that enables applications to define the color of the badge icon to indicate different statuses or categories. You can find a list of accepted values in the new `sap.m.AvatarBadgeColor` enumeration.For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.Avatar).

-   We have introduced handling for displaying a badge without an icon with a new custom URI. When using `sap-icon://avatar-icon-none` as the value in the `showBorder` property, the badge remains visible and can display a background color or tooltip.

For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.Avatar).

<sub>Changed•Control•Info Only•1.132</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-01-23

</td>
</tr>
<tr>
<td valign="top">

1.132 

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

We have introduced a new `src` property that enables applications to define the illustration to be displayed as a graphical element within the control.For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.IllustratedMessage) and the [Sample](https://ui5.sap.com/#/entity/sap.m.IllustratedMessage/sample/sap.m.sample.IllustratedMessageInPageWithURI).

<sub>Changed•Control•Info Only•1.132</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-01-23

</td>
</tr>
</table>

**Related Information**  


[What's New in SAPUI5 1.141](what-s-new-in-sapui5-1-141-a7ed66d.md "With this release SAPUI5 is upgraded from version 1.140 to 1.141.")

[What's New in SAPUI5 1.140](what-s-new-in-sapui5-1-140-26a106c.md "With this release SAPUI5 is upgraded from version 1.139 to 1.140.")

[What's New in SAPUI5 1.139](what-s-new-in-sapui5-1-139-e10db71.md "With this release SAPUI5 is upgraded from version 1.138 to 1.139.")

[What's New in SAPUI5 1.138](what-s-new-in-sapui5-1-138-8f6a92b.md "With this release SAPUI5 is upgraded from version 1.136 to 1.138.")

[What's New in SAPUI5 1.136](what-s-new-in-sapui5-1-136-a82754d.md "With this release SAPUI5 is upgraded from version 1.135 to 1.136.")

[What's New in SAPUI5 1.135](what-s-new-in-sapui5-1-135-93d7630.md "With this release SAPUI5 is upgraded from version 1.134 to 1.135.")

[What's New in SAPUI5 1.134](what-s-new-in-sapui5-1-134-c512d71.md "With this release SAPUI5 is upgraded from version 1.133 to 1.134.")

[What's New in SAPUI5 1.133](what-s-new-in-sapui5-1-133-86d7605.md "With this release SAPUI5 is upgraded from version 1.132 to 1.133.")

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

