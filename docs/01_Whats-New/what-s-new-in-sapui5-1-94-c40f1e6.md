<!-- loioc40f1e63ca404cb1833c15ea90ff203a -->

# What's New in SAPUI5 1.94

With this release SAPUI5 is upgraded from version 1.93 to 1.94.



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

1.94 

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

We now provide the `sap.ui.model.odata.v2.Context#isTransient` method, which returns information about whether an entity created on the client is not yet saved in the back-end system.

<sub>Changed•Feature•Info Only•1.94</sub>

</td>
<td valign="top">

Info Only

</td>
<td valign="top">

2021-09-09

</td>
</tr>
<tr>
<td valign="top">

1.94 

</td>
<td valign="top">

UI Changed 

</td>
<td valign="top">

Announcement 

</td>
<td valign="top">

**SAP Fiori Elements: Object Pages: Search Bar Added to Table Toolbar** 

</td>
<td valign="top">

**SAP Fiori Elements: Object Pages: Search Bar Added to Table Toolbar**

The following information concerns important upcoming changes. UI changes may have an impact on the user experience and may require test cases to be adapted.

Tables with searchable content in object pages now have a search field in the toolbar. The search behavior is the same as in list report filter bars. For more information, see [Tables](../06_SAP_Fiori_Elements/tables-c0f6592.md).

<sub>UI Changed•Announcement•Info Only•1.94</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2021-09-09

</td>
</tr>
<tr>
<td valign="top">

1.94 

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

-   Bound transition messages can now also be received in the `sap-messages` header. This can be useful if the payload, and hence any messages within the payload, is not available, for example in a success response of an action or function without corresponding return type. In this case, the server can send a bound transition message in the `sap-messages` header that the OData V4 model can forward to the message model.

-   XML templating can now process the `@com.sap.vocabularies.UI.v1.DoNotCheckScaleOfMeasureQuantity` annotation. This annotation prevents the validation of the number of decimals.

-   A new `@$ui5.node.groupLevelCount` instance annotation for data aggregation scenarios. It represents the number of direct children of a group node. For more information, see [Data Aggregation and Recursive Hierarchy](../04_Essentials/data-aggregation-and-recursive-hierarchy-7d91431.md).


<sub>Changed•Feature•Info Only•1.94</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2021-09-09

</td>
</tr>
<tr>
<td valign="top">

1.94 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**Whitespaces Visualization** 

</td>
<td valign="top">

**Whitespaces Visualization**

We have created a new sample pattern that showcases how whitespaces can be enabled on the application level, for freestyle applications. For more information, see [Whitespaces Concept](../05_Developing_Apps/whitespaces-concept-37deb0b.md) and the [Sample](https://ui5.sap.com/#/entity/sap.m.WhitespacePattern). 

<sub>Changed•Feature•Info Only•1.94</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2021-09-09

</td>
</tr>
<tr>
<td valign="top">

1.94 

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

We have updated the colors of value-state status icons. Now, they have better color-contrast ratios for improved accessibility. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.m.IconTabBar/sample/sap.m.sample.IconTabBar).

<sub>Changed•Control•Info Only•1.94</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2021-09-09

</td>
</tr>
<tr>
<td valign="top">

1.94 

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

We have introduced the `showClearIcon` property. If set to true, when there is text input it shows an additional icon that allows users to clear their input. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.Input). 

<sub>Changed•Control•Info Only•1.94</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2021-09-09

</td>
</tr>
<tr>
<td valign="top">

1.94 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.List`** 

</td>
<td valign="top">

**`sap.m.List`**

You can now adapt the default wrapping behavior for titles and descriptions in lists and define the number of characters after which wrapping is done by using the new `wrapCharLimit` property. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.StandardListItem%23methods/getWrapCharLimit) and the [Sample](https://ui5.sap.com/#/entity/sap.m.StandardListItem/sample/sap.m.sample.StandardListItemWrapping).

<sub>Changed•Control•Info Only•1.94</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2021-09-09

</td>
</tr>
<tr>
<td valign="top">

1.94 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.MenuButton`** 

</td>
<td valign="top">

**`sap.m.MenuButton`**

We have introduced a new `beforeMenuOpen` event, fired when the arrow button of the `sap.m.MenuButton` in split mode is pressed, and before the dropdown menu opens. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.MenuButton) and the [Sample](https://ui5.sap.com/#/entity/sap.m.MenuButton/sample/sap.m.sample.MenuButton).

<sub>Changed•Control•Info Only•1.94</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2021-09-09

</td>
</tr>
<tr>
<td valign="top">

1.94 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.PlanningCalendar`** 

</td>
<td valign="top">

**`sap.m.PlanningCalendar`**

The new `firstDayOfWeek` property enables developers to set the first day of week that is displayed in the week-based views of the `PlanningCalendar` - `Week` view, and `OneMonth` view \(on small devices\). Valid values are 0 to 6 starting on Sunday. If there is no valid value set, the default from the user locale is used. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.PlanningCalendar) and the [Sample](https://ui5.sap.com/#/entity/sap.m.PlanningCalendar/sample/sap.m.sample.PlanningCalendarWithLegend).

<sub>Changed•Control•Info Only•1.94</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2021-09-09

</td>
</tr>
<tr>
<td valign="top">

1.94 

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

The `SmartField` control now supports the `com.sap.vocabularies.UI.v1.DoNotCheckScaleOfMeasuredQuantity` annotation. When this annotation is added, the `SmartField` doesn't check whether the maximum number of decimal places for a unit of measure corresponds to what is determined in the code list customizing the currency codes and units. Skipping the validation of decimals allows the user to add more fractional digits than what's defined for the corresponding unit of measure. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smartfield.SmartField%23controlProperties).

For more information, see [Currency and Unit Customizing in OData V2](../04_Essentials/odata-v2-model-6c47b2b.md#loioaa9024c7c5444822a68daeb21a92bd51).

<sub>Changed•Control•Info Only•1.94</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2021-09-09

</td>
</tr>
<tr>
<td valign="top">

1.94 

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

We have updated the Microsoft Adaptive Cards SDK from version 1.2.3 to version 2.9.0, which will give us the possibility to adopt and consume the latest features and functionalities in future releases.

<sub>Changed•Control•Info Only•1.94</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2021-09-09

</td>
</tr>
<tr>
<td valign="top">

1.94 

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

-   The search field is now also available in the table toolbar on the object page. If the table is searchable \(that is, if an entity set is used for which `sap:searchable` is `true`\), the search field is displayed by default. For more information, see [Tables](../06_SAP_Fiori_Elements/tables-c0f6592.md).

-   When using multi-selection in tables, the *Select All* checkbox has been disabled by default in responsive tables in the list report, and on the object page in tab bar mode. End users can undo the selection using the *Clear All* checkbox. For more information, see [Enabling Multiple Selection in Tables](../06_SAP_Fiori_Elements/enabling-multiple-selection-in-tables-116b5d8.md).

-   Application developers can now display a field as a `TextArea` in edit mode or as an `ExpandableText` in display mode. For more information, see [Different Representations of a Field](../06_SAP_Fiori_Elements/different-representations-of-a-field-c18ada4.md).

-   App developers can now use fractional digits on visual filters. For more information, see [Visual Filters](../06_SAP_Fiori_Elements/visual-filters-1714720.md).

-   SAP Fiori elements for OData V4 now supports upload and delete functionalities for `Edm.stream` properties. For more information, see [Different Representations of a Field](../06_SAP_Fiori_Elements/different-representations-of-a-field-c18ada4.md).

-   SAP Fiori elements for OData V4 now supports the equal split mode for side content. For more information, see [Adding Dynamic Side Content to Object Page Sections](../06_SAP_Fiori_Elements/adding-dynamic-side-content-to-object-page-sections-8e01a46.md).

-   Application developers can now add actions for each form on the object page. For more information, see [Adding Custom Actions Using Extension Points](../06_SAP_Fiori_Elements/adding-custom-actions-using-extension-points-7619517.md) and [Adding Action Buttons to Forms in Sections](../06_SAP_Fiori_Elements/adding-action-buttons-to-forms-in-sections-e64efda.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.94</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2021-09-09

</td>
</tr>
</table>

**Related Information**  


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

