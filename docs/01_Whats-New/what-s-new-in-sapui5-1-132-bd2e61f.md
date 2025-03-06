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

