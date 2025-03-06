<!-- loio7d24d94d6bbe4a988265994a4a41eff6 -->

# What's New in SAPUI5 1.131

With this release SAPUI5 is upgraded from version 1.130 to 1.131.

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

1.131 

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

<sub>Deprecated•Feature•Info Only•1.131</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-11-28

</td>
</tr>
<tr>
<td valign="top">

1.131 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.mdc.Table`** 

</td>
<td valign="top">

**`sap.ui.mdc.Table`**

-   To collapse/expand either an entire node or an entire tree in tables with `TreeTableType`, we have introduced a `MenuButton`. For each functionality, the related function must be implemented in the configuration object of `TableDelegate`. For OData V4, we have already implemented this as a default functionality. For more information, see the [API Reference](https://ui5.sap.com/#/api/module:sap/ui/mdc/TableDelegate%23methods/sap/ui/mdc/TableDelegate.fetchExpandAndCollapseConfiguration).

-   We have enabled sticky group headers by default for tables with `ResponsiveTableType`. Group headers now remain in a fixed position at the top of the page during vertical scrolling. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.ui.mdc.Table/sample/sap.ui.mdc.demokit.sample.table.TableJson).

<sub>Changed•Control•Info Only•1.131</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-11-28

</td>
</tr>
<tr>
<td valign="top">

1.131 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.List`, `sap.m.Table`, `sap.m.Tree`, `sap.ui.mdc.Table,` `sap.ui.table.AnalyticalTable`, `sap.ui.table.Table`, `sap.ui.table.TreeTable` ** 

</td>
<td valign="top">

**`sap.m.List`, `sap.m.Table`, `sap.m.Tree`, `sap.ui.mdc.Table,` `sap.ui.table.AnalyticalTable`, `sap.ui.table.Table`, `sap.ui.table.TreeTable` **

We now also support the `Indication09` and `Indication10` color values for row highlights. Due to the accessibility contrast requirements, only values of `Indication01` to `Indication10` are supported. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.table.RowSettings%23methods/getHighlight).

<sub>Changed•Control•Info Only•1.131</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-11-28

</td>
</tr>
<tr>
<td valign="top">

1.131 

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

-   We now save the information about the resized columns in the flexible column layout in the personalization settings. For more information, see [Enabling the Flexible Column Layout](../06_SAP_Fiori_Elements/enabling-the-flexible-column-layout-e762257.md).

-   We now ensure that applications properly handle and respond to 503 error messages caused by a temporary server downtime.


<sub>Changed•SAP Fiori Elements•Info Only•1.131</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-11-28

</td>
</tr>
<tr>
<td valign="top">

1.131 

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

-   We now provide a `scrollThreshold` parameter that allows you to optimize data loading during scrolling in grid tables, analytical tables, and tree tables. For more information, see [Tables](../06_SAP_Fiori_Elements/tables-c0f6592.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.131</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-11-28

</td>
</tr>
<tr>
<td valign="top">

1.131 

</td>
<td valign="top">

New 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**Enabling Controls for SAPUI5 Flexibility** 

</td>
<td valign="top">

**Enabling Controls for SAPUI5 Flexibility**

If you develop your own controls, you can now enable them for SAPUI5 flexibility. This allows you to offer personalization or key user adaptation to your users. They can use these features even when working with your custom controls.

For more information, see [Enabling Controls for SAPUI5 Flexibility](../09_Developing_Controls/enabling-controls-for-sapui5-flexibility-46b2d74.md).

<sub>New•Feature•Info Only•1.131</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-11-28

</td>
</tr>
<tr>
<td valign="top">

1.131 

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

When using the currency instance of `sap.ui.core.format.NumberFormat` with the `style` format option set to `short` or `long`, the number of decimals provided with custom currencies or defined in the Unicode Common Locale Data Repository is not applied for formatting.

<sub>Changed•Feature•Info Only•1.131</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-11-28

</td>
</tr>
<tr>
<td valign="top">

1.131 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**`sap.ui.model.sorter`** 

</td>
<td valign="top">

**`sap.ui.model.sorter`**

We have provided getters for the binding path and the sorting order parameter of `sap.ui.model.sorter`.

<sub>Changed•Feature•Info Only•1.131</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-11-28

</td>
</tr>
<tr>
<td valign="top">

1.131 

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

-   You can now modify the annotations of a separate value help service using local annotation files. For more information, see [Value Lists](../04_Essentials/value-lists-ab267a6.md).

-   We have provided the experimental `separateReceived` event at the `sap.ui.model.odata.v4.ODataListBinding` for columns loaded separately using the experimental `$$separate` binding parameter introduced with SAPUI5 1.129.


<sub>Changed•Feature•Info Only•1.131</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-11-28

</td>
</tr>
<tr>
<td valign="top">

1.131 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**Improved Focus Handling in SAPUI5** 

</td>
<td valign="top">

**Improved Focus Handling in SAPUI5**

Whenever a UI5 element loses focus due to becoming disabled, invisible, or destroyed, the focus now automatically shifts to the next logical element, ensuring improved navigation and accessibility. Control developers can customize this behavior by overriding the default `onfocusfail` handler to meet specific control requirements.

For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.core.Element%23methods/onfocusfail).

<sub>Changed•Feature•Info Only•1.131</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-11-28

</td>
</tr>
<tr>
<td valign="top">

1.131 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.comp.smartmultiedit.Container`** 

</td>
<td valign="top">

**`sap.ui.comp.smartmultiedit.Container`**

We now support the `DateTimeWithTimezone` data type for fields within smart multi-edit containers. Date and time, along with time zone, can now be modified for fields in the smart multi-edit container.

For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smartmultiedit.Container) and the [Sample](https://ui5.sap.com/#/entity/sap.ui.comp.smartmultiedit.Container/sample/sap.ui.comp.sample.smartmultiedit).

<sub>Changed•Control•Info Only•1.131</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-11-28

</td>
</tr>
<tr>
<td valign="top">

1.131 

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

-   You can now set default values for semantic options in dynamic date range filters. You can manage this in the smart filter bar `ControlConfiguration`, where you can adjust the default value for this operation. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smartfilterbar.SmartFilterBar) and the [Sample](https://ui5.sap.com/#/entity/sap.ui.comp.smartfilterbar.SmartFilterBar/sample/sap.ui.comp.sample.smartfilterbar.UseDateRangeType).

-   The basic search feature is now limited to 1000 characters, including spaces, to improve performance. If the input exceeds this limit, a `valueState` error appears, and the search isn't triggered. This restriction applies to both standalone smart filter bar and smart filter bar within a value help dialog. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smartfilterbar.SmartFilterBar%23controlProperties) and the [Sample](https://ui5.sap.com/#/entity/sap.ui.comp.smartfilterbar.SmartFilterBar/sample/sap.ui.comp.sample.smartfilterbar.Basic).

<sub>Changed•Control•Info Only•1.131</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-11-28

</td>
</tr>
<tr>
<td valign="top">

1.131 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.Combobox`** 

</td>
<td valign="top">

**`sap.m.Combobox`**

The down-arrow navigation has been updated to align with the specifications and the ARIA standard. Now, if there is a selection made through the type-ahead \(autocomplete\) functionality, pressing the [Down Arrow\] key moves the focus to the next available item in the dropdown menu.

<sub>Changed•Control•Info Only•1.131</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-11-28

</td>
</tr>
<tr>
<td valign="top">

1.131 

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

We have made some visual improvements when the `headerBackgroundDesign` is set to `Transparent`. Now, the control won't show any unnecessary borders or shadows, and looks better when used in content with a transparent design. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.IconTabBar).

<sub>Changed•Control•Info Only•1.131</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-11-28

</td>
</tr>
<tr>
<td valign="top">

1.131 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.MaskInput`** 

</td>
<td valign="top">

**`sap.m.MaskInput`**

We have introduced a new `submit` event that fires when users press [Enter\] and submit a value. The event is fired only when the control is `enabled` and `editable`, regardless of whether there's a change in the submitted value. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.MaskInput).

<sub>Changed•Control•Info Only•1.131</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-11-28

</td>
</tr>
<tr>
<td valign="top">

1.131 

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

We have introduced a new `beforeClose` event, fired when the menu is closed. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.Menu).

<sub>Changed•Control•Info Only•1.131</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-11-28

</td>
</tr>
<tr>
<td valign="top">

1.131 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.Popover`** 

</td>
<td valign="top">

**`sap.m.Popover`**

Users can now resize the control in all directions, depending on the position of the opener. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.m.Popover/sample/sap.m.sample.Popover).

<sub>Changed•Control•Info Only•1.131</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-11-28

</td>
</tr>
<tr>
<td valign="top">

1.131 

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

You can now set actions in the card header to be placed as nested items in a menu. This feature allows you to group multiple actions. For more information, see the [Custom Actions](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/extension/customActions) and the [Host Actions](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/hostActions) samples.

<sub>Changed•Control•Info Only•1.131</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-11-28

</td>
</tr>
</table>

**Related Information**  


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

