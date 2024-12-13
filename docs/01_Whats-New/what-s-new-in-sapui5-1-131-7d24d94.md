<!-- loio7d24d94d6bbe4a988265994a4a41eff6 -->

<link rel="stylesheet" type="text/css" href="../css/sap-icons.css"/>

# What's New in SAPUI5 1.131

With this release SAPUI5 is upgraded from version 1.130 to 1.131.

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

