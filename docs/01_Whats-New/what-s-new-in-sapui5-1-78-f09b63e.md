<!-- loiof09b63e46de44642ba2bf4bd3bf848a0 -->

# What's New in SAPUI5 1.78

With this release SAPUI5 is upgraded from version 1.77 to 1.78.



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

1.78 

</td>
<td valign="top">

New 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**Special Messaging Support for Visually Impaired Users \(Experimental\)** 

</td>
<td valign="top">

**Special Messaging Support for Visually Impaired Users \(Experimental\)**

We have introduced a way to programmatically expose dynamic content changes, that can be announced by the screen reader via the newly added `sap.ui.core.InvisibleMessage` \(experimental\) class. The class is designed to be used both internally in the controls logic and from the applications. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.core.InvisibleMessage) and the [Sample](https://ui5.sap.com/#/entity/sap.ui.core.InvisibleMessage).

<sub>New•Feature•Info Only•1.78</sub>

</td>
<td valign="top">

Info Only

</td>
<td valign="top">

2020-05-21

</td>
</tr>
<tr>
<td valign="top">

1.78 

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

-   A new `expand` parameter has been added to `sap.ui.model.odata.v2.ODataModel#createEntry`. The listed navigation properties are requested with an additional GET request in the same `$batch` request as the POST request for the entity creation. Note the prerequisites listed in the API documentation.

    For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.model.odata.v2.ODataModel%23methods/createEntry).

-   Server messages without the `target` property, that is with `target=undefined`, are interpreted as unbound messages if the `BusinessObject` message scope is used.

<sub>Changed•Feature•Info Only•1.78</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-05-21

</td>
</tr>
<tr>
<td valign="top">

1.78 

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

-   The `sap.ui.model.odata.v4.AnnotationHelper#format` and `#value` methods can be used on properties.
-   `sap.ui.model.odata.v4.Context#requestSideEffects` now supports updating data by specifying navigation properties to the parent entities followed by collection-valued structural or navigation properties in the path expressions. This extends the feature delivered with SAPUI5 1.75.
-   The auto-`$expand/$select` mechanism has been improved, so that the first data requests are sent out earlier.

> ### Restriction:  
> Due to the limited feature scope of this version of the SAPUI5 OData V4 model, check that all required features are in place before developing applications. Double-check the detailed documentation of the features, as certain parts of a feature may be missing. While we aim to be compatible with existing controls, some controls might not work due to small incompatibilities compared to `sap.ui.model.odata.(v2.)ODataModel`, or due to missing features in the model \(such as tree binding\). This also applies to smart controls \(`sap.ui.comp` library\) that do not support the SAPUI5 OData V4 model, as well as controls such as `TreeTable` and `AnalyticalTable`, which are not supported in combination with the SAPUI5 OData V4 model. The interface for applications has been changed for easier and more efficient use of the model. For a summary of these changes, see [Changes Compared to OData V2 Model](../04_Essentials/changes-compared-to-odata-v2-model-abd4d7c.md).

For more information, see [OData V4 Model](../04_Essentials/odata-v4-model-5de13cf.md), the [API Reference](https://ui5.sap.com/#/api/sap.ui.model.odata.v4), and the [Samples](https://ui5.sap.com/#/entity/sap.ui.model.odata.v4.ODataModel) in the Demo Kit.

<sub>Changed•Feature•Info Only•1.78</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-05-21

</td>
</tr>
<tr>
<td valign="top">

1.78 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**Screen Reader Support Enhancement** 

</td>
<td valign="top">

**Screen Reader Support Enhancement**

We have removed the `application` role from the body of SAPUI5 apps. Following the Aria 1.1 recommendations, the `application` role is not recommended on a body level, as the screen reader interprets the whole application as one big custom control. Now, the screen reader will no longer be forced into operating mode and will be started in its regular reading mode.

<sub>Changed•Feature•Info Only•1.78</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-05-21

</td>
</tr>
<tr>
<td valign="top">

1.78 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**Spreadsheet Export** 

</td>
<td valign="top">

**Spreadsheet Export**

Fiscal date formats can now be used during the export. The input format for the column has a specific textual string format to enable this.For more information, see [Data Types for Spreadsheet Export](../04_Essentials/data-types-for-spreadsheet-export-283217d.md), the [API Reference](https://ui5.sap.com/#/api/sap.ui.export.Spreadsheet/overview), and the [Sample](https://ui5.sap.com/#/entity/sap.ui.export.Spreadsheet/sample/sap.ui.export.sample.formatting).

<sub>Changed•Feature•Info Only•1.78</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-05-21

</td>
</tr>
<tr>
<td valign="top">

1.78 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.ColorPalette`** 

</td>
<td valign="top">

**`sap.m.ColorPalette`**

We have added a new `setColorPickerSelectedColor` setter, which enables developers to dynamically set the selected color, prior to opening the color picker. This is useful when the user wants to select a variation of this color. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.ColorPalette) and the [Samples](https://ui5.sap.com/#/entity/sap.m.ColorPalette).

<sub>Changed•Control•Info Only•1.78</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-05-21

</td>
</tr>
<tr>
<td valign="top">

1.78 

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

-   We have introduced a new behavior of the `IconTabBar` filters with sub tabs. If the filter has its own text content, you can select the filter to display the content. Clicking on the second area \(chevron button\) expands the list of sub tabs. If the filter doesn’t have its own text content, then we have one single area and clicking on it expands the list of sub tabs. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.m.IconTabBar/sample/sap.m.sample.IconTabBarSubTabs).

-   If the `IconTabBar` is used inside a shell, it inherits the styling of the shell.

-   A new `ariaTexts` property is now available. You can use it to set specific texts to be announced by a screen reader. It is of type `object` and can have two properties: `headerLabel` and `headerDescription`. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.IconTabBar%23methods/setAriaTexts).


<sub>Changed•Control•Info Only•1.78</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-05-21

</td>
</tr>
<tr>
<td valign="top">

1.78 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.InputBase` \(Experimental\)** 

</td>
<td valign="top">

**`sap.m.InputBase` \(Experimental\)**

The class now supports the possibility to add links as part of the `ValueStateText` in the `InputBase`. Using the `formattedValueStateText` aggregation, you can now define the formatted text that appears in the value state message pop-up. The support is fully implemented in the `sap.m.Input`, `sap.m.MultiInput`, and `sap.m.ComboBox` controls. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.InputBase).

<sub>Changed•Control•Info Only•1.78</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-05-21

</td>
</tr>
<tr>
<td valign="top">

1.78 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.List`, `sap.m.Table`** 

</td>
<td valign="top">

**`sap.m.List`, `sap.m.Table`**

The `List` and `Table` controls now provide a method to scroll the list of items so that the item with the given index is in the viewport. The scrolling is done based on the provided item index. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.ListBase%23methods/scrollToIndex) for the related method and the [Sample](https://ui5.sap.com/#/entity/sap.m.Table/sample/sap.m.sample.TableScrollToIndex).

<sub>Changed•Control•Info Only•1.78</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-05-21

</td>
</tr>
<tr>
<td valign="top">

1.78 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.MultiComboBox`, `sap.m.MultiInput`** 

</td>
<td valign="top">

**`sap.m.MultiComboBox`, `sap.m.MultiInput`**

When the `sap.m.MultiComboBox` and `sap.m.MultiInput` controls contain only one token with long text, the token is always displayed and the text is truncated depending on the screen width. Previously, the token was removed and in its place a text saying “1 item” was displayed, which was not very informative. For more information, see the [`sap.m.MultiComboBox`](https://ui5.sap.com/#/entity/sap.m.MultiComboBox/sample/sap.m.sample.MultiComboBox) and the [`sap.m.MultiInput`](https://ui5.sap.com/#/entity/sap.m.MultiInput/sample/sap.m.sample.MultiInput) samples.

<sub>Changed•Control•Info Only•1.78</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-05-21

</td>
</tr>
<tr>
<td valign="top">

1.78 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.comp.smartfilterbar.SmartFilterBar`, `sap.ui.comp.smartfield.SmartField`** 

</td>
<td valign="top">

**`sap.ui.comp.smartfilterbar.SmartFilterBar`, `sap.ui.comp.smartfield.SmartField`**

-   We have introduced an *Input History Settings* dialog in SAP Fiori launchpad that allows you to set whether you want to track recently used values or not and to clear your history. The feature is available by default for SAP Business Technology Platform users. On premise users need to activate it by adding the `INPUTFIELD_HISTORY` parameter to one of these transactions: `/UI2/FLP_SYS_CONF` or `/UI2/FLP_CUS_CONF`. For more information about configuring parameters, see the documentation about SAP Fiori launchpad for On Premise Products on the SAP Help Portal at [https://help.sap.com/viewer/product/SAP\_FIORI\_LAUNCHPAD/EXTERNAL/en-US](https://help.sap.com/viewer/product/SAP_FIORI_LAUNCHPAD/EXTERNAL/en-US).

-   Fields of `SmartFilterBar` or `SmartField` that have the `valueList` annotation with fixed values rendered as a dropdown list now support the use of `ValueListParameterIn` and `ValueListParameterOut`. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smartfield.SmartField%23annotations/ValueList) and the [Samples](https://ui5.sap.com/#/entity/sap.ui.comp.smartfield.SmartField).


<sub>Changed•Control•Info Only•1.78</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-05-21

</td>
</tr>
<tr>
<td valign="top">

1.78 

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

-   We have introduced a new option, *Today -X/+Y days*, which is added to the dynamic range type in `SmartFilterBar`. It allows you to filter periods from `X` to `Y` days in past and/or future periods taking the current date as a reference point. The filter changes dynamically and supports negative numbers, thus providing the option to define a period which is based on today but is in the future or in the past. The feature is available without further configuration. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.ui.comp.smartfilterbar.SmartFilterBar/sample/sap.ui.comp.sample.smartfilterbar.example1).

-   We have improved the navigation from an arbitrary source app to a target app. Now, regardless of the date formats, the data that comes from the source app is transferred to the target app via single URL parameters. `Edm.Date` \(only available for OData V4\), `Edm.String` with `display-format="yearmonthday"`, `Edm.DateTime` with `sap-semantics="date"`, and `Edm.DateTimeOffset` are now transferred successfully.


<sub>Changed•Control•Info Only•1.78</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-05-21

</td>
</tr>
<tr>
<td valign="top">

1.78 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.comp.ValueHelpDialog`** 

</td>
<td valign="top">

**`sap.ui.comp.ValueHelpDialog`**

When the `ValueHelpDialog` of `SmartField` or `SmartFilterBar` is open, the table is now populated with results on initial loading without having to click the *Go* button. To prevent this behavior, you can set `preventInitialDataFetchInValueHelpDialog` to `true` or use the `FetchValues` property of the `ValueList` annotation. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.ui.comp.smartfilterbar.SmartFilterBar/sample/sap.ui.comp.sample.smartfilterbar.DeprecationCodeAnnotation).

<sub>Changed•Control•Info Only•1.78</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-05-21

</td>
</tr>
<tr>
<td valign="top">

1.78 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.layout.Splitter`** 

</td>
<td valign="top">

**`sap.ui.layout.Splitter`**

-   A new `resetContentAreasSizes` method is now available that allows developers to programmatically reset the size of the content areas. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.layout.Splitter%23methods/resetContentAreasSizes).

-   The bars used in the `sap.ui.layout.Splitter` and `sap.ui.layout.ResponsiveSplitter` controls are now larger. This makes the bars easily draggable on touch devices. For more information, see the sample pages of [sap.ui.layout.Splitter](https://ui5.sap.com/#/entity/sap.ui.layout.Splitter) and [sap.ui.layout.ResponsiveSplitter](https://ui5.sap.com/#/entity/sap.ui.layout.ResponsiveSplitter).


<sub>Changed•Control•Info Only•1.78</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-05-21

</td>
</tr>
<tr>
<td valign="top">

1.78 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

SAP Fiori Elements 

</td>
<td valign="top">

**SAP Fiori Elements** 

</td>
<td valign="top">

**SAP Fiori Elements**

-   SAP Fiori Elements has enhanced the initial no data text for charts in analytical list page floorplans, and users can now configure them. For more information, see [Maintaining Standard Texts for Charts](../06_SAP_Fiori_Elements/maintaining-standard-texts-for-charts-37cd601.md).

-   SAP Fiori Elements now provides an option to choose fields to be displayed based on the device type and the importance of the field. For example, applications can be set to show only fields of high importance when viewed on small screens. For more information, see [Displaying Fields in Smartforms on Small Devices](../06_SAP_Fiori_Elements/displaying-fields-in-smartforms-on-small-devices-0096cd2.md).

-   Object page tables and chart variants can now be enabled through a manifest setting. For more information, see [Enabling Variant Management on the Object Page](../06_SAP_Fiori_Elements/enabling-variant-management-on-the-object-page-f26d42b.md).

-   You can define visual filters which have all filters as in parameters using the manifest setting `allFiltersAsInParameters`. For more information, see [Descriptor Configuration for the Analytical List Page](../06_SAP_Fiori_Elements/descriptor-configuration-for-the-analytical-list-page-2a9df06.md).

-   SAP Fiori Elements now provides an option to show a confirmation popup for warnings for *Delete* actions in object pages. For more information, see [Confirmation Popups](../06_SAP_Fiori_Elements/confirmation-popups-9a53662.md).

-   By default, the analytical list page is loaded with data when an application is launched. For more information, see [Analytical List Page](../06_SAP_Fiori_Elements/analytical-list-page-3d33684.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.78</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-05-21

</td>
</tr>
</table>

**Related Information**  


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

