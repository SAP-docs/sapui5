<!-- loioebd6f34797d846d1978e02b428d619c7 -->

<link rel="stylesheet" type="text/css" href="../css/sap-icons.css"/>

# What's New in SAPUI5 1.116

With this release SAPUI5 is upgraded from version 1.115 to 1.116.

> ### Tip:  
> If you want to do a search across all versions of the What's New content, you can also find it in the [SAPUI5 What's New viewer](https://help.sap.com/whats-new/67f60363b57f4ac0b23efd17fa192d60).

> ### Note:  
> Content marked as <span style="color:#666666;"><span class="SAP-icons"></span></span>** [Preview](https://help.sap.com/docs/whats-new-disclaimer)** is provided as a courtesy, without a warranty, and may be subject to change. For more information, see the [preview disclaimer](https://help.sap.com/docs/whats-new-disclaimer).

** **


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

 1.118 



</td>
<td valign="top">

 Deprecated 



</td>
<td valign="top">

 Announcement 



</td>
<td valign="top">

 **`sap.ui.table` Controls: Discontinued Use of `sap.ui.commons` Library** 



</td>
<td valign="top">

**`sap.ui.table` Controls: Discontinued Use of `sap.ui.commons` Library**

We will discontinue the use of the deprecated `sap.ui.commons` library as of SAPUI5 version 1.118. If you use shortcuts for defining titles, footers, column headers, and cell templates in your `sap.ui.table` controls based on the related controls in the `sap.ui.commons` library, these will no longer work. Instead, the `sap.ui.table` controls will always depend on the related controls in the `sap.m` library after version 1.118.

**Recommended Action**: Check which libraries are used in your application. If you use `sap.ui.table` controls and their shortcuts in combination with the `sap.ui.commons` library, make sure to switch to the `sap.m` library.

For more information about how to prepare for this change, see [Change to the SAPUI5 sap.ui.table library](https://blogs.sap.com/2023/05/25/change-to-the-sapui5-sap.ui.table-library/).

<sub><span style="color:#666666;"><span class="SAP-icons"></span></span>** [Preview](https://help.sap.com/docs/whats-new-disclaimer)**•Deprecated•Announcement•Recommended•1.118</sub>



</td>
<td valign="top">

 Recommended 



</td>
<td valign="top">

2023-09-07



</td>
</tr>
<tr>
<td valign="top">

 Upcoming 



</td>
<td valign="top">

 UI Changed 



</td>
<td valign="top">

 Announcement 



</td>
<td valign="top">

 **Improved Keyboard Handling and Screen Reader Support of `sap.m.Table`** 



</td>
<td valign="top">

**Improved Keyboard Handling and Screen Reader Support of `sap.m.Table`**

> ### Note:  
> The following information concerns important upcoming changes for end users. These changes may require end users to adjust and/or test cases to be adapted, but they won't stop or disrupt software or processes.

To improve accessibility, we will completely rework the screen reader and keyboard support of the `sap.m.Table` control in 1.117/1.118. The row-based navigation stays the same, but cell-based navigation will also be possible, similar to the grid table. We will also improve other accessibility features of the table, for example, the *Delete* and *Edit* buttons for row actions will become accessible via keyboard. These features will not only be changed for the responsive table, but partly also for `sap.m.List`. Also, the ARIA role will be adapted.

**Recommended Action**: Test cases might have to be adapted. Stay tuned and check out the related documentation once the changes have been made.

For more information about accessibility, see [Accessibility for End Users](https://help.sap.com/viewer/bc5a64aac808463baa95b4230f221716/1.116/en-US).

<sub><span style="color:#666666;"><span class="SAP-icons"></span></span>** [Preview](https://help.sap.com/docs/whats-new-disclaimer)**•UI Changed•Announcement•Recommended•Upcoming</sub>



</td>
<td valign="top">

 Recommended 



</td>
<td valign="top">

9999-01-01



</td>
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

 For more information, see [TypeScript in SAPUI5](../02_Read-Me-First/typescript-in-sapui5-a7ee961.md). 

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

