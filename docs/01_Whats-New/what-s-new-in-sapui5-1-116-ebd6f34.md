<!-- loioebd6f34797d846d1978e02b428d619c7 -->

<link rel="stylesheet" type="text/css" href="../css/sap-icons.css"/>

# What's New in SAPUI5 1.116

With this release SAPUI5 is upgraded from version 1.115 to 1.116.

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

1.116 

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

<sub>Deprecated•Feature•Info Only•1.116</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2023-07-13

</td>
</tr>
<tr>
<td valign="top">

1.116 

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

We have now added a *Remove All Filters* button to the infobar of the `SmartTable` control that removes all existing filters. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.ui.comp.smarttable.SmartTable/sample/sap.ui.comp.sample.smarttable.mtable).

<sub>Changed•Control•Info Only•1.116</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2023-07-13

</td>
</tr>
<tr>
<td valign="top">

1.116 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

SAP Fiori Elements 

</td>
<td valign="top">

**SAP Fiori elements for OData V2** and **SAP Fiori elements for OData V4** 

</td>
<td valign="top">

**SAP Fiori elements for OData V2** and **SAP Fiori elements for OData V4**

The following changes and new features are available for SAP Fiori elements for OData V2 and SAP Fiori elements for OData V4:

-   For draft-enabled applications, the default number of empty rows in object page tables is now reduced from two to one. For more information, see [Enabling Inline Creation Mode or Empty Row Mode for Table Entries](../06_SAP_Fiori_Elements/enabling-inline-creation-mode-or-empty-row-mode-for-table-entries-cfb04f0.md).

-   Users can now copy and paste multiple values between the filter fields and the value help dialog of the filter bar. They can also copy and paste the values between a spreadsheet and the filter fields of the application. For more information, see [Configuring Filter Fields](../06_SAP_Fiori_Elements/configuring-filter-fields-f5dcb29.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.116</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2023-07-13

</td>
</tr>
<tr>
<td valign="top">

1.116 

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

**SAP Fiori elements for OData V4**

The following changes and new features are available for SAP Fiori elements for OData V4:

-   Application developers can now override the keys for the *Create* and *Delete* buttons on a table using the custom i18n file approach. For more information, see [Localization of UI Texts](../06_SAP_Fiori_Elements/localization-of-ui-texts-b8cb649.md).

-   You can now define the order of the standard actions in the table. For more information, see [Adding Actions to Tables](../06_SAP_Fiori_Elements/adding-actions-to-tables-b623e0b.md).

-   You can now interact with the `FilterBar` building block using the `SelectionVariant` format. For more information, see [The FilterBar Building Block](../06_SAP_Fiori_Elements/the-filterbar-building-block-7838611.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.116</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2023-07-13

</td>
</tr>
<tr>
<td valign="top">

1.116 

</td>
<td valign="top">

New 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**TypeScript: Supported productively** 

</td>
<td valign="top">

**TypeScript: Supported productively**

TypeScript can now be used productively.

For more information, see [TypeScript Support](../02_Read-Me-First/typescript-support-a7ee961.md). 

<sub>New•Feature•Info Only•SAPUI5</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2023-07-13

</td>
</tr>
<tr>
<td valign="top">

1.116 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.comp.smartfilterbar.SmartFilterBar`, `sap.ui.comp.smartfield.SmartField`, `sap.ui.comp.valuehelpdialog.ValueHelpDialog`, and `sap.m.P13nConditionPanel`** 

</td>
<td valign="top">

**`sap.ui.comp.smartfilterbar.SmartFilterBar`, `sap.ui.comp.smartfield.SmartField`, `sap.ui.comp.valuehelpdialog.ValueHelpDialog`, and `sap.m.P13nConditionPanel`**

These controls now support the following calendar annotations. When any of these annotations are applied, the smart controls can parse, validate, and format values, according to the annotation’s definition.

-   com.sap.vocabularies.Common.v1.IsCalendarYear
-   com.sap.vocabularies.Common.v1.IsCalendarWeek
-   com.sap.vocabularies.Common.v1.IsCalendarMonth
-   com.sap.vocabularies.Common.v1.IsCalendarQuarter
-   com.sap.vocabularies.Common.v1.IsCalendarYearWeek
-   com.sap.vocabularies.Common.v1.IsCalendarYearMonth
-   com.sap.vocabularies.Common.v1.IsCalendarYearQuarter

For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smartfilterbar.SmartFilterBar).

<sub>Changed•Control•Info Only•1.116</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2023-07-13

</td>
</tr>
<tr>
<td valign="top">

1.116 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.comp.valuehelpdialog.ValueHelpDialog`** 

</td>
<td valign="top">

**`sap.ui.comp.valuehelpdialog.ValueHelpDialog`**

We have provided an option to initially expand the filter bar and show all filters for dialogs that are created automatically \(based on OData annotations\):

-   For `ValueHelp` dialogs of the fields in the `SmartFilterBar`, and the `FilterPanel` of the `SmartTable`, custom data can be passed with the `defaultFilterBarExpanded` and `defaultShowAllFilters` properties. The values can be `Boolean` or `Object` \(with listed OData properties and their desired values\).
-   For ValueHelp dialogs of the SmartField, the same custom data can be passed, but only with the `Boolean` value type.
-   For custom implemented `ValueHelp` dialogs, you can use the`filterBarExpanded` and `showAllFilters` properties.

For more information, see the [Smart Filter Bar with Different Annotations](https://ui5.sap.com/#/entity/sap.ui.comp.smartfilterbar.SmartFilterBar/sample/sap.ui.comp.sample.smartfilterbar.Annotations), and the [Smart Field - TextInEditModeSource](https://ui5.sap.com/#/entity/sap.ui.comp.smartfield.SmartField/sample/sap.ui.comp.sample.smartfield.TextInEditModeSource) samples. 

<sub>Changed•Control•Info Only•1.116</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2023-07-13

</td>
</tr>
<tr>
<td valign="top">

1.116 

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

We have \(experimentally\) introduced a new input field in the Object Card that enables users to enter a duration time interval. The value of the duration \(hours and minutes\) is stored in ISO 8601 duration format. For more information, see the [Object Card](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/typesDeclarative/object) section and the [Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/object/form) in the Card Explorer.

<sub>Changed•Control•Info Only•1.116</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2023-07-13

</td>
</tr>
<tr>
<td valign="top">

1.116 

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

Disabled items in the menu are now focusable. This way they can be accessed by screen readers, and via keyboard and mouse interactions.

<sub>Changed•Control•Info Only•1.116</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2023-07-13

</td>
</tr>
<tr>
<td valign="top">

1.116 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m` library: Date- and time-related controls** 

</td>
<td valign="top">

**`sap.m` library: Date- and time-related controls**

We have improved the placeholders of these controls in cases when the placeholders are not explicitly set. Previously the expected date format was used as a placeholder, but because it's a technical term, it could not be translated. Now the placeholder is a sample date in the required format, starting with *e.g.*, where *e.g.* is translatable. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.m.DateTimePicker/sample/sap.m.sample.DatePicker).

<sub>Changed•Control•Info Only•1.116</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2023-07-13

</td>
</tr>
<tr>
<td valign="top">

1.116 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**Demo Kit: Index of Deprecated APIs with new sorting order** 

</td>
<td valign="top">

**Demo Kit: Index of Deprecated APIs with new sorting order**

We now display the Index of Deprecated APIs in a numeric sorting order, instead of alphabetically.

For more information, see the [Index of Deprecated APIs](https://ui5.sap.com/#/api/deprecated).

<sub>Changed•Feature•Info Only•1.116</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2023-07-13

</td>
</tr>
<tr>
<td valign="top">

1.116 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**Demo Kit: Editable code samples** 

</td>
<td valign="top">

**Demo Kit: Editable code samples**

The code samples in the Demo Kit are now editable. You can switch to code-editing mode by clicking<span class="NS-SAP-icons"></span> \(Show source code for this sample\).

For more information, see the [Samples](https://ui5.sap.com/#/controls).

<sub>Changed•Feature•Info Only•1.116</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2023-07-13

</td>
</tr>
<tr>
<td valign="top">

1.116 

</td>
<td valign="top">

Deleted 

</td>
<td valign="top">

Announcement 

</td>
<td valign="top">

**End of Cloud Provisioning for SAPUI5 Versions \(Q2/2023\)** 

</td>
<td valign="top">

**End of Cloud Provisioning for SAPUI5 Versions \(Q2/2023\)**

The following SAPUI5 versions will be removed from the SAPUI5 Content Delivery Network \(CDN\) after the end of Q2/2023.

**Minor Versions Reaching Their End of Cloud Provisioning**

The following versions including all patches will be removed entirely:

-   1.91
-   1.99
-   1.100
-   1.101

**Action**: Upgrade to a version that is still in maintenance.

**Patch Versions Reaching Their End of Cloud Provisioning**

The following patches will be removed:

-   Long-term maintenance versions:

    -   1.38.56
    -   1.71.2
    -   1.71.47 to 1.71.48
    -   1.84.24 to 1.84.25
    -   1.96.8 to 1.96.9

    **Action**: Upgrade to the latest available patch for the respective SAPUI5 version.

-   Other versions

    -   1.102.0

    **Action**: Upgrade to a version that is still in maintenance.


For more information, see [UI5 Releases Ending Service in 2023](https://blogs.sap.com/2022/12/05/ui5-releases-ending-service-in-2023/) and [Version Overview](https://ui5.sap.com/versionoverview.html).

<sub>Deleted•Announcement•Required•1.116</sub>

</td>
<td valign="top">

Required 

</td>
<td valign="top">

2023-07-13

</td>
</tr>
<tr>
<td valign="top">

1.116 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**Modern ECMAScript Support in SAPUI5** 

</td>
<td valign="top">

**Modern ECMAScript Support in SAPUI5**

We have enabled UI5 framework libraries to use modern ECMAScript syntax in their code and define Specification Version 3.0 in their UI5 Tooling configuration.

**Action:** If you use UI5 Tooling in your projects, upgrade to UI5 Tooling 3.0 and make sure that your project's development infrastructure fully supports this change.

For more information, see [Upgrade Your Tools for Modern ECMAScript in UI5](https://blogs.sap.com/2023/05/24/upgrade-your-tools-for-modern-ecmascript-in-ui5/).

<sub>Changed•Feature•Required•1.116</sub>

</td>
<td valign="top">

Required 

</td>
<td valign="top">

2023-07-13

</td>
</tr>
</table>

**Related Information**  


[What's New in SAPUI5 1.125](what-s-new-in-sapui5-1-125-9d87044.md "With this release SAPUI5 is upgraded from version 1.124 to 1.125.")

[What's New in SAPUI5 1.124](what-s-new-in-sapui5-1-124-7f77c3f.md "With this release SAPUI5 is upgraded from version 1.123 to 1.124.")

[What's New in SAPUI5 1.123](what-s-new-in-sapui5-1-123-9d00ac7.md "With this release SAPUI5 is upgraded from version 1.122 to 1.123.")

[What's New in SAPUI5 1.122](what-s-new-in-sapui5-1-122-5d078da.md "With this release SAPUI5 is upgraded from version 1.121 to 1.122.")

[What's New in SAPUI5 1.121](what-s-new-in-sapui5-1-121-91a4a2f.md "With this release SAPUI5 is upgraded from version 1.120 to 1.121.")

[What's New in SAPUI5 1.120](what-s-new-in-sapui5-1-120-2359b63.md "With this release SAPUI5 is upgraded from version 1.119 to 1.120.")

[What's New in SAPUI5 1.119](what-s-new-in-sapui5-1-119-0b1903a.md "With this release SAPUI5 is upgraded from version 1.118 to 1.119.")

[What's New in SAPUI5 1.118](what-s-new-in-sapui5-1-118-3eecbde.md "With this release SAPUI5 is upgraded from version 1.117 to 1.118.")

[What's New in SAPUI5 1.117](what-s-new-in-sapui5-1-117-029d3b4.md "With this release SAPUI5 is upgraded from version 1.116 to 1.117.")

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

