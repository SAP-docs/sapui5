<!-- loio99c4cdcdf896487182d7911cb34999ec -->

# What's New in SAPUI5 1.79

With this release SAPUI5 is upgraded from version 1.78 to 1.79.



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

1.79 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**Browser and Platform Support** 

</td>
<td valign="top">

**Browser and Platform Support**

SAPUI5 used PhantomJS in the past to test the framework, even though PhantomJS was never officially supported. We have now removed all PhantomJS-specific code from the SAPUI5 code base. For more information, see [Browser and Platform Support](../02_Read-Me-First/browser-and-platform-support-74b59ef.md).

<sub>Changed•Feature•Info Only•1.79</sub>

</td>
<td valign="top">

Info Only

</td>
<td valign="top">

2020-06-18

</td>
</tr>
<tr>
<td valign="top">

1.79 

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

-   The security token is requested in the constructor if the new `earlyTokenRequest` and the `tokenHandling` model parameters are both set to true. Note that the model has a static cache of security tokens and will only perform the request if the required token cannot be found in that cache.
-   Server messages may target more than one property of the same entity. The additional targets are provided in the `additionalTargets` property in the `SAP-Message` header and the error response.
-   If the new `bRejectOnFailure` parameter is set to true, `sap.ui.model.odata.v2.ODataModel#metadataLoaded` returns a promise that is rejected when the initial loading of metadata fails.

<sub>Changed•Feature•Info Only•1.79</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-06-18

</td>
</tr>
<tr>
<td valign="top">

1.79 

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

-   The `sap.ui.model.odata.v4.ODataListBinding#resume` and `sap.ui.model.odata.v4.ODataContextBinding#resume` methods only refresh the bindings that were changed while being suspended.
-   The `autoExpandSelect` model setting and the `$$aggregation` list binding parameter can now be used together.

> ### Restriction:  
> Due to the limited feature scope of this version of the SAPUI5 OData V4 model, check that all required features are in place before developing applications. Double-check the detailed documentation of the features, as certain parts of a feature may be missing. While we aim to be compatible with existing controls, some controls might not work due to small incompatibilities compared to `sap.ui.model.odata.(v2.)ODataModel`, or due to missing features in the model \(such as tree binding\). This also applies to smart controls \(`sap.ui.comp` library\) that do not support the SAPUI5 OData V4 model, as well as controls such as `TreeTable` and `AnalyticalTable`, which are not supported in combination with the SAPUI5 OData V4 model. The interface for applications has been changed for easier and more efficient use of the model. For a summary of these changes, see [Changes Compared to OData V2 Model](../04_Essentials/changes-compared-to-odata-v2-model-abd4d7c.md).

For more information, see [OData V4 Model](../04_Essentials/odata-v4-model-5de13cf.md), the [API Reference](https://ui5.sap.com/#/api/sap.ui.model.odata.v4), and the [Samples](https://ui5.sap.com/#/entity/sap.ui.model.odata.v4.ODataModel) in the Demo Kit.

<sub>Changed•Feature•Info Only•1.79</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-06-18

</td>
</tr>
<tr>
<td valign="top">

1.79 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.f.GridContainer`, `sap.f.GridList`** 

</td>
<td valign="top">

**`sap.f.GridContainer`, `sap.f.GridList`**

We have improved the accessibility of these controls by providing better navigation and keyboard handling. For more information, see the [sap.f.GridContainer](https://ui5.sap.com/#/entity/sap.f.GridContainer) and [sap.f.GridList](https://ui5.sap.com/#/entity/sap.f.GridList) samples.

<sub>Changed•Control•Info Only•1.79</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-06-18

</td>
</tr>
<tr>
<td valign="top">

1.79 

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

-   We have introduced the `maxNestingLevel` property, which specifies the allowed levels of tabs nested within one another using drag and drop. The default value is 0, which means that nesting via user interaction is not allowed. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.m.IconTabBar/sample/sap.m.sample.IconTabBarDragDrop).
-   Tab-filter label texts in horizontal layout are no longer truncated. For more information, see the [Samples](https://ui5.sap.com/#/entity/sap.m.IconTabBar).

<sub>Changed•Control•Info Only•1.79</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-06-18

</td>
</tr>
<tr>
<td valign="top">

1.79 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.Input`, `sap.m.MultiInput`** 

</td>
<td valign="top">

**`sap.m.Input`, `sap.m.MultiInput`**

When the controls are used with tabular suggestions, the column headers are now sticky. In this way, when the list is scrolled, the headers do not scroll away, helping users to easily understand the relation between the header and the cell below. For more information, see the [sap.m.Input](https://ui5.sap.com/#/entity/sap.m.Input/sample/sap.m.sample.InputKeyValueTabularSuggestions) and [sap.m.MultiInput](https://ui5.sap.com/#/entity/sap.m.MultiInput/sample/sap.m.sample.MultiInputGrouping) samples.

<sub>Changed•Control•Info Only•1.79</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-06-18

</td>
</tr>
<tr>
<td valign="top">

1.79 

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

We are extending the set of controls that support the possibility to add links as part of the `ValueStateText` in the `InputBase` with the `sap.m.MultiComboBox`. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.InputBase).

<sub>Changed•Control•Info Only•1.79</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-06-18

</td>
</tr>
<tr>
<td valign="top">

1.79 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.Panel`** 

</td>
<td valign="top">

**`sap.m.Panel`**

We have enhanced the control by making the whole header clickable to allow users to collapse/expand the `sap.m.Panel` easier and faster. In addition, when the focus is on the active area, the [Spacebar\] and [Enter\]/[Return\] keys also trigger expand/collapse of the control. This scenario works if the title is provided via the API. If the `headerToolbar` aggregation is used, app developers have to handle it on their own. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.Panel).

<sub>Changed•Control•Info Only•1.79</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-06-18

</td>
</tr>
<tr>
<td valign="top">

1.79 

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

-   Fiscal date formats can now be used during the export. The input format for the column has a specific textual string format to enable this. For more information, see [Data Types for Spreadsheet Export](../04_Essentials/data-types-for-spreadsheet-export-283217d.md), the [API Reference](https://ui5.sap.com/#/api/sap.ui.export.Spreadsheet/overview), and the [Sample](https://ui5.sap.com/#/entity/sap.ui.comp.smartfilterbar.SmartFilterBar/sample/sap.ui.comp.sample.smartfilterbar.FiscalDates).

-   The `HTML5.CssDefaults` annotation is now supported. This annotation allows you to specify column widths with a `px`, `em`, or `rem` value for tables of type `GridTable`. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smarttable.SmartTable%23annotations/CssDefaults) for the `CssDefaults` annotation and the [Sample](https://ui5.sap.com/#/entity/sap.ui.comp.smarttable.SmartTable/sample/sap.ui.comp.sample.smarttable.smartTableWithCriticality).

-   We have introduced the `showDetailsButton` property for tables of type `ResponsiveTable`. It allows you to toggle the visibility of hidden columns in the pop-in area by selecting [Show Details\]/[Hide Details\]. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smarttable.SmartTable%23methods/getShowDetailsButton) for the related method and the [Sample](https://ui5.sap.com/#/entity/sap.ui.comp.smarttable.SmartTable/sample/sap.ui.comp.sample.smarttable.mtableShowDetails).


<sub>Changed•Control•Info Only•1.79</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-06-18

</td>
</tr>
<tr>
<td valign="top">

1.79 

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

-   We have introduced the Extension JavaScript module \(experimental\), which enables developers to extend the built-in capabilities of the card. You can use it to specify custom logic for fetching data, define custom data formatters, or add custom actions to the card. For more information, see the [Card Extension](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/features/extension) section and the [Card Extension Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/extension) in the Card Explorer.
-   The dynamic filtering feature \(experimental\) is now available, which allows developers to define custom filters in the manifest of the card. For more information, see the [Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/filtering) in the Card Explorer.

<sub>Changed•Control•Info Only•1.79</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-06-18

</td>
</tr>
<tr>
<td valign="top">

1.79 

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

We have updated the `sap.ui.richtexteditor.RichTextEditor` and respectively the TinyMCE library from version 4.7.13 to the latest currently available 4.9.10, in order to be in sync with the latest fixes and updates. For more information, see [sap.ui.richtexteditor](../10_More_About_Controls/sap-ui-richtexteditor-d4f3f15.md) and the [API Reference](https://ui5.sap.com/#/api/sap.ui.richtexteditor.RichTextEditor). 

<sub>Changed•Control•Info Only•1.79</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-06-18

</td>
</tr>
<tr>
<td valign="top">

1.79 

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

-   The SAP Fiori elements object page now provides an option to include apps from different semantic objects as related apps. For more information, see [Enabling the Related Apps Button](../06_SAP_Fiori_Elements/enabling-the-related-apps-button-8dcfe2e.md).

-   The SAP Fiori elements object page now provides an option to customize the data loading behavior of subsections. For more information, see [Defining the Loading Behavior of Object Page Subsections](../06_SAP_Fiori_Elements/defining-the-loading-behavior-of-object-page-subsections-6b84249.md).

-   The default texts for the confirmation of object and item deletion have been enhanced. For more information, see [Configuring the Delete Confirmation Dialog Box](../06_SAP_Fiori_Elements/configuring-the-delete-confirmation-dialog-box-84e4f89.md).

-   The SAP Fiori elements list report and object page now support a flexible column layout with 3-column layout for create, read, update, and delete \(CRUD\) operations in non-draft apps. For more information, see [Enabling the Flexible Column Layout](../06_SAP_Fiori_Elements/enabling-the-flexible-column-layout-e762257.md).

-   The *Message* button on the object page now shows the semantic color of the highest severity message and its count.


<sub>Changed•SAP Fiori Elements•Info Only•1.79</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-06-18

</td>
</tr>
</table>

**Related Information**  


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

