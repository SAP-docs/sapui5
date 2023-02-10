<!-- loio2d6ffddd26dd41ba91a5cf1b38f6b0f6 -->

# What's New in SAPUI5 1.94

With this release SAPUI5 is upgraded from version 1.93 to 1.94.



<a name="loio2d6ffddd26dd41ba91a5cf1b38f6b0f6__section_yvs_ksr_2qb"/>

## Preview and Announcements

The following information concerns important upcoming changes. UI changes may have an impact on the user experience and may require test cases to be adapted.


<table>
<tr>
<th valign="top">

Type



</th>
<th valign="top">

Description



</th>
<th valign="top">

Available as of SAPUI5 Version



</th>
</tr>
<tr>
<td valign="top">

Announcement



</td>
<td valign="top">

**Reminder: Outdated SAPUI5 Versions to Be Removed from the CDN**

For security reasons, SAPUI5 versions that are no longer maintained will be removed from the UI5 content delivery network \(CDN\) one year after their end of maintenance. If a version is still in maintenance, patches of that version that are older than one year will also be removed. We have noted that a number of customers are still using such outdated versions or patches. If this affects you, please note that once these versions or patches are removed, your applications will break. Please update to a more recent version or patch. For more information, see: [Removing Outdated UI5 Versions from UI5 CDN](https://blogs.sap.com/2021/01/26/removing-outdated-ui5-versions-from-ui5-cdn/).



</td>
<td valign="top">

n/a



</td>
</tr>
<tr>
<td valign="top">

UI Change



</td>
<td valign="top">

**SAP Fiori Elements: Object Pages: Search Bar Added to Table Toolbar**

Tables with searchable content in object pages now have a search field in the toolbar. The search behavior is the same as in list report filter bars. For more information, see [Tables](../06_SAP_Fiori_Elements/tables-c0f6592.md).



</td>
<td valign="top">

1.94



</td>
</tr>
<tr>
<td valign="top">

UI Change \(Preview\)



</td>
<td valign="top">

**SAP Fiori Elements: Worklist Apps: Sort, Group, and Filter Options Moved to Table Personalization**

Sort, group, and filter options in table toolbars have been moved to the table personalization dialog. This is the same behavior as in list report apps.



</td>
<td valign="top">

1.95



</td>
</tr>
<tr>
<td valign="top">

UI Change \(Preview\)



</td>
<td valign="top">

**SAP Fiori Elements: Multi-Select in Responsive Tables: *Clear All* Instead of *Select All***

Responsive tables with a multi-select option will show a *Clear All* checkbox instead of a *Select All* checkbox. This is the same behavior as in other table types.



</td>
<td valign="top">

1.96



</td>
</tr>
</table>

> ### Note:  
> Content marked as **Preview** is provided as a courtesy, without a warranty, and may be subject to change. For more information, see the [preview disclaimer](https://help.sap.com/viewer/wnp_disclaimer).



<a name="loio2d6ffddd26dd41ba91a5cf1b38f6b0f6__section_qwl_pb5_zcb"/>

## Improved Features


<table>
<tr>
<td valign="top">

**SAPUI5 OData V2 Model**

We now provide the `sap.ui.model.odata.v2.Context#isTransient` method, which returns information about whether an entity created on the client is not yet saved in the back-end system.



</td>
</tr>
<tr>
<td valign="top">

**SAPUI5 OData V4 Model**

The new version of the SAPUI5 OData V4 model introduces the following features:

-   Bound transition messages can now also be received in the `sap-messages` header. This can be useful if the payload, and hence any messages within the payload, is not available, for example in a success response of an action or function without corresponding return type. In this case, the server can send a bound transition message in the `sap-messages` header that the OData V4 model can forward to the message model.

-   XML templating can now process the `@com.sap.vocabularies.UI.v1.DoNotCheckScaleOfMeasureQuantity` annotation. This annotation prevents the validation of the number of decimals.

-   A new `@$ui5.node.groupLevelCount` instance annotation for data aggregation scenarios. It represents the number of direct children of a group node. For more information, see [Extension for Data Aggregation](../04_Essentials/extension-for-data-aggregation-7d91431.md).




</td>
</tr>
<tr>
<td valign="top">

**Whitespaces Visualization**

We have created a new sample pattern that showcases how whitespaces can be enabled on the application level, for freestyle applications. For more information, see [Whitespaces Concept](../05_Developing_Apps/whitespaces-concept-37deb0b.md) and the [Sample](https://ui5.sap.com/#/entity/sap.m.WhitespacePattern). 



</td>
</tr>
</table>



<a name="loio2d6ffddd26dd41ba91a5cf1b38f6b0f6__section_rqn_wd5_zcb"/>

## Improved Controls


<table>
<tr>
<td valign="top">

**`sap.m.IconTabBar`**

We have updated the colors of value-state status icons. Now, they have better color-contrast ratios for improved accessibility. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.m.IconTabBar/sample/sap.m.sample.IconTabBar).



</td>
</tr>
<tr>
<td valign="top">

**`sap.m.Input`, `sap.m.MultiInput`**

We have introduced the `showClearIcon` property. If set to true, when there is text input it shows an additional icon that allows users to clear their input. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.Input). 



</td>
</tr>
<tr>
<td valign="top">

**`sap.m.List`**

You can now adapt the default wrapping behavior for titles and descriptions in lists and define the number of characters after which wrapping is done by using the new `wrapCharLimit` property. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.StandardListItem%23methods/getWrapCharLimit) and the [Sample](https://ui5.sap.com/#/entity/sap.m.StandardListItem/sample/sap.m.sample.StandardListItemWrapping).



</td>
</tr>
<tr>
<td valign="top">

**`sap.m.MenuButton`**

We have introduced a new `beforeMenuOpen` event, fired when the arrow button of the `sap.m.MenuButton` in split mode is pressed, and before the dropdown menu opens. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.MenuButton) and the [Sample](https://ui5.sap.com/#/entity/sap.m.MenuButton/sample/sap.m.sample.MenuButton).



</td>
</tr>
<tr>
<td valign="top">

**`sap.m.PlanningCalendar`**

The new `firstDayOfWeek` property enables developers to set the first day of week that is displayed in the week-based views of the `PlanningCalendar` - `Week` view, and `OneMonth` view \(on small devices\). Valid values are 0 to 6 starting on Sunday. If there is no valid value set, the default from the user locale is used. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.PlanningCalendar) and the [Sample](https://ui5.sap.com/#/entity/sap.m.PlanningCalendar/sample/sap.m.sample.PlanningCalendarWithLegend).



</td>
</tr>
<tr>
<td valign="top">

**`sap.ui.comp.smartfield.SmartField`**

The `SmartField` control now supports the `com.sap.vocabularies.UI.v1.DoNotCheckScaleOfMeasuredQuantity` annotation. When this annotation is added, the `SmartField` doesn't check whether the maximum number of decimal places for a unit of measure corresponds to what is determined in the code list customizing the currency codes and units. Skipping the validation of decimals allows the user to add more fractional digits than what's defined for the corresponding unit of measure. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smartfield.SmartField%23controlProperties).

For more information, see [Currency and Unit Customizing in OData V2](../04_Essentials/odata-v2-model-6c47b2b.md#loioaa9024c7c5444822a68daeb21a92bd51).



</td>
</tr>
<tr>
<td valign="top">

 **`sap.ui.integration.widgets.Card`**

We have updated the Microsoft Adaptive Cards SDK from version 1.2.3 to version 2.9.0, which will give us the possibility to adopt and consume the latest features and functionalities in future releases.



</td>
</tr>
</table>



<a name="loio2d6ffddd26dd41ba91a5cf1b38f6b0f6__section_cps_cg5_zcb"/>

## Deprecations


<table>
<tr>
<td valign="top">

There are currently no major deprecations. For a complete list of all deprecations, see [Deprecated APIs](https://ui5.sap.com/#/api/deprecated). 



</td>
</tr>
</table>



<a name="loio2d6ffddd26dd41ba91a5cf1b38f6b0f6__section_g3r_bf5_zcb"/>

## SAP Fiori Elements


<table>
<tr>
<td valign="top">

The following changes and new features are available for SAP Fiori elements for OData V4:

-   The search field is now also available in the table toolbar on the object page. If the table is searchable \(that is, if an entity set is used for which `sap:searchable` is `true`\), the search field is displayed by default. For more information, see [Tables](../06_SAP_Fiori_Elements/tables-c0f6592.md).

-   When using multi-selection in tables, the *Select All* checkbox has been disabled by default in responsive tables in the list report, and on the object page in tab bar mode. End users can undo the selection using the *Clear All* checkbox. For more information, see [Enabling Multiple Selection in Tables](../06_SAP_Fiori_Elements/enabling-multiple-selection-in-tables-116b5d8.md).

-   Application developers can now display a field as a `TextArea` in edit mode or as an `ExpandableText` in display mode. For more information, see [Different Representations of a Field](../06_SAP_Fiori_Elements/different-representations-of-a-field-c18ada4.md).

-   App developers can now use fractional digits on visual filters. For more information, see [Visual Filters](../06_SAP_Fiori_Elements/visual-filters-1714720.md).

-   SAP Fiori elements for OData V4 now supports upload and delete functionalities for `Edm.stream` properties. For more information, see [Different Representations of a Field](../06_SAP_Fiori_Elements/different-representations-of-a-field-c18ada4.md).

-   SAP Fiori elements for OData V4 now supports the equal split mode for side content. For more information, see [Adding Dynamic Side Content to Object Page Sections](../06_SAP_Fiori_Elements/adding-dynamic-side-content-to-object-page-sections-8e01a46.md).

-   Application developers can now add actions for each form on the object page. For more information, see [Adding Custom Actions Using Extension Points](../06_SAP_Fiori_Elements/adding-custom-actions-using-extension-points-7619517.md) and [Adding Action Buttons to Forms in Sections](../06_SAP_Fiori_Elements/adding-action-buttons-to-forms-in-sections-e64efda.md).




</td>
</tr>
</table>

**Related Information**  


[What's New in SAPUI5 1.108](what-s-new-in-sapui5-1-108-799291a.md "With this release SAPUI5 is upgraded from version 1.107 to 1.108.")

[What's New in SAPUI5 1.107](what-s-new-in-sapui5-1-107-b88b40e.md "With this release SAPUI5 is upgraded from version 1.106 to 1.107.")

[What's New in SAPUI5 1.106](what-s-new-in-sapui5-1-106-c70bb90.md "With this release SAPUI5 is upgraded from version 1.105 to 1.106.")

[What's New in SAPUI5 1.105](what-s-new-in-sapui5-1-105-5567dcc.md "With this release SAPUI5 is upgraded from version 1.104 to 1.105.")

[What's New in SAPUI5 1.104](what-s-new-in-sapui5-1-104-f01ebd4.md "With this release SAPUI5 is upgraded from version 1.103 to 1.104.")

[What's New in SAPUI5 1.103](what-s-new-in-sapui5-1-103-7534ae8.md "With this release SAPUI5 is upgraded from version 1.102 to 1.103.")

[What's New in SAPUI5 1.102](what-s-new-in-sapui5-1-102-b530db3.md "With this release SAPUI5 is upgraded from version 1.101 to 1.102.")

[What's New in SAPUI5 1.101](what-s-new-in-sapui5-1-101-5a18410.md "With this release SAPUI5 is upgraded from version 1.100 to 1.101.")

[What's New in SAPUI5 1.100](what-s-new-in-sapui5-1-100-5deb78f.md "With this release SAPUI5 is upgraded from version 1.99 to 1.100.")

[What's New in SAPUI5 1.99](what-s-new-in-sapui5-1-99-5e35c25.md "With this release SAPUI5 is upgraded from version 1.98 to 1.99.")

[What's New in SAPUI5 1.98](what-s-new-in-sapui5-1-98-7aacb4e.md "With this release SAPUI5 is upgraded from version 1.97 to 1.98.")

[What's New in SAPUI5 1.97](what-s-new-in-sapui5-1-97-f21858f.md "With this release SAPUI5 is upgraded from version 1.96 to 1.97.")

[What's New in SAPUI5 1.96](what-s-new-in-sapui5-1-96-b39a11b.md "With this release SAPUI5 is upgraded from version 1.95 to 1.96.")

[What's New in SAPUI5 1.95](what-s-new-in-sapui5-1-95-1b09465.md "With this release SAPUI5 is upgraded from version 1.94 to 1.95.")

[What's New in SAPUI5 1.93](what-s-new-in-sapui5-1-93-e9c8356.md "With this release SAPUI5 is upgraded from version 1.92 to 1.93.")

[What's New in SAPUI5 1.92](what-s-new-in-sapui5-1-92-1492551.md "With this release SAPUI5 is upgraded from version 1.91 to 1.92.")

[What's New in SAPUI5 1.91](what-s-new-in-sapui5-1-91-75777da.md "With this release SAPUI5 is upgraded from version 1.90 to 1.91.")

[What's New in SAPUI5 1.90](what-s-new-in-sapui5-1-90-b475202.md "With this release SAPUI5 is upgraded from version 1.89 to 1.90.")

[What's New in SAPUI5 1.89](what-s-new-in-sapui5-1-89-0805036.md "With this release SAPUI5 is upgraded from version 1.88 to 1.89.")

[What's New in SAPUI5 1.88](what-s-new-in-sapui5-1-88-bda141b.md "With this release SAPUI5 is upgraded from version 1.87 to 1.88.")

[What's New in SAPUI5 1.87](what-s-new-in-sapui5-1-87-e315108.md "With this release SAPUI5 is upgraded from version 1.86 to 1.87.")

[What's New in SAPUI5 1.86](what-s-new-in-sapui5-1-86-067e2fb.md "With this release SAPUI5 is upgraded from version 1.85 to 1.86.")

[What's New in SAPUI5 1.85](what-s-new-in-sapui5-1-85-eeb5bd9.md "With this release SAPUI5 is upgraded from version 1.84 to 1.85.")

[What's New in SAPUI5 1.84](what-s-new-in-sapui5-1-84-ccf76b7.md "With this release SAPUI5 is upgraded from version 1.82 to 1.84.")

[What's New in SAPUI5 1.82](what-s-new-in-sapui5-1-82-f081cf0.md "With this release SAPUI5 is upgraded from version 1.81 to 1.82.")

[What's New in SAPUI5 1.81](what-s-new-in-sapui5-1-81-f71563c.md "With this release SAPUI5 is upgraded from version 1.80 to 1.81.")

[What's New in SAPUI5 1.80](what-s-new-in-sapui5-1-80-3294c68.md "With this release SAPUI5 is upgraded from version 1.79 to 1.80.")

[What's New in SAPUI5 1.79](what-s-new-in-sapui5-1-79-edf8e35.md "With this release SAPUI5 is upgraded from version 1.78 to 1.79.")

[What's New in SAPUI5 1.78](what-s-new-in-sapui5-1-78-d176be3.md "With this release SAPUI5 is upgraded from version 1.77 to 1.78.")

[What's New in SAPUI5 1.77](what-s-new-in-sapui5-1-77-2ec6b6b.md "With this release SAPUI5 is upgraded from version 1.76 to 1.77.")

[What's New in SAPUI5 1.76](what-s-new-in-sapui5-1-76-b9b0a3f.md "With this release SAPUI5 is upgraded from version 1.75 to 1.76.")

[What's New in SAPUI5 1.75](what-s-new-in-sapui5-1-75-dc3d3ce.md "With this release SAPUI5 is upgraded from version 1.74 to 1.75.")

[What's New in SAPUI5 1.74](what-s-new-in-sapui5-1-74-21fc6cb.md "With this release SAPUI5 is upgraded from version 1.73 to 1.74.")

[What's New in SAPUI5 1.73](what-s-new-in-sapui5-1-73-7b82664.md "With this release SAPUI5 is upgraded from version 1.72 to 1.73.")

[What's New in SAPUI5 1.72](what-s-new-in-sapui5-1-72-25e5326.md "With this release SAPUI5 is upgraded from version 1.71 to 1.72.")

[What's New in SAPUI5 1.71](what-s-new-in-sapui5-1-71-609fd01.md "With this release SAPUI5 is upgraded from version 1.70 to 1.71.")

[What's New in SAPUI5 1.70](what-s-new-in-sapui5-1-70-4e89fee.md "With this release SAPUI5 is upgraded from version 1.69 to 1.70.")

[What's New in SAPUI5 1.69](what-s-new-in-sapui5-1-69-41203fd.md "With this release SAPUI5 is upgraded from version 1.68 to 1.69.")

[What's New in SAPUI5 1.68](what-s-new-in-sapui5-1-68-5531aef.md "With this release SAPUI5 is upgraded from version 1.67 to 1.68.")

[What's New in SAPUI5 1.67](what-s-new-in-sapui5-1-67-0968958.md "With this release SAPUI5 is upgraded from version 1.66 to 1.67.")

[What's New in SAPUI5 1.66](what-s-new-in-sapui5-1-66-ebe7fda.md "With this release SAPUI5 is upgraded from version 1.65 to 1.66.")

[What's New in SAPUI5 1.65](what-s-new-in-sapui5-1-65-9d2b189.md "With this release SAPUI5 is upgraded from version 1.64 to 1.65.")

[What's New in SAPUI5 1.64](what-s-new-in-sapui5-1-64-1975e30.md "With this release SAPUI5 is upgraded from version 1.63 to 1.64.")

[What's New in SAPUI5 1.63](what-s-new-in-sapui5-1-63-77e1dcc.md "With this release SAPUI5 is upgraded from version 1.62 to 1.63.")

[What's New in SAPUI5 1.62](what-s-new-in-sapui5-1-62-27eea38.md "With this release SAPUI5 is upgraded from version 1.61 to 1.62.")

[What's New in SAPUI5 1.61](what-s-new-in-sapui5-1-61-de4d50b.md "With this release SAPUI5 is upgraded from version 1.60 to 1.61.")

[What's New in SAPUI5 1.60](what-s-new-in-sapui5-1-60-2a70354.md "With this release SAPUI5 is upgraded from version 1.58 to 1.60.")

[What's New in SAPUI5 1.58](what-s-new-in-sapui5-1-58-b28edde.md "With this release, SAPUI5 is upgraded from version 1.56 to 1.58.")

[What's New in SAPUI5 1.56](what-s-new-in-sapui5-1-56-53b4b5e.md "With this release, SAPUI5 is upgraded from version 1.54 to 1.56.")

[What's New in SAPUI5 1.54](what-s-new-in-sapui5-1-54-f29023e.md "With this release, SAPUI5 is upgraded from version 1.52 to 1.54.")

[What's New in SAPUI5 1.52](what-s-new-in-sapui5-1-52-a09dd79.md "With this release, SAPUI5 is upgraded from version 1.50 to 1.52.")

[What's New in SAPUI5 1.50](what-s-new-in-sapui5-1-50-a844984.md "With this release, SAPUI5 is upgraded from version 1.48 to 1.50.")

[What's New in SAPUI5 1.48](what-s-new-in-sapui5-1-48-2818f80.md "With this release, SAPUI5 is upgraded from version 1.46 to 1.48.")

[What's New in SAPUI5 1.46](what-s-new-in-sapui5-1-46-4cf0986.md "With this release, SAPUI5 is upgraded from version 1.44 to 1.46.")

[What's New in SAPUI5 1.44](what-s-new-in-sapui5-1-44-05ce1dc.md "With this release, SAPUI5 is upgraded from version 1.42 to 1.44.")

[What's New in SAPUI5 1.42](what-s-new-in-sapui5-1-42-4768f1a.md "With this release, SAPUI5 is upgraded from version 1.40 to 1.42.")

[What's New in SAPUI5 1.40](what-s-new-in-sapui5-1-40-e659bd2.md "With this release, SAPUI5 is upgraded from version 1.38 to 1.40.")

[What's New in SAPUI5 1.38](what-s-new-in-sapui5-1-38-6a875f9.md#loio6a875f998994489483e8085705347d72 "With this release, SAPUI5 is upgraded from version 1.36 to 1.38.")

