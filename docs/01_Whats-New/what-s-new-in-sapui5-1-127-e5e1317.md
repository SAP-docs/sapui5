<!-- loioe5e13176220c4b9597c75580d363abc8 -->

<link rel="stylesheet" type="text/css" href="../css/sap-icons.css"/>

# What's New in SAPUI5 1.127

With this release SAPUI5 is upgraded from version 1.126 to 1.127.

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

1.127 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.mdc.Chart` \(experimental\)** 

</td>
<td valign="top">

**`sap.ui.mdc.Chart` \(experimental\)**

To support time series for the chart, we have now implemented time dimensions. We have introduced the `timeUnitType` property for `PropertyInfo` to enable this feature. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.mdc.chart.PropertyInfo%23properties).

<sub>Changed•Control•Info Only•1.127</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-08-08

</td>
</tr>
<tr>
<td valign="top">

1.127 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.mdc.FilterBar`, `sap.ui.mdc.Table`, `sap.ui.mdc.Chart` \(experimental\)** 

</td>
<td valign="top">

**`sap.ui.mdc.FilterBar`, `sap.ui.mdc.Table`, `sap.ui.mdc.Chart` \(experimental\)**

To validate `p13n`-relevant metadata in the application, we have implemented a consistency check that compares the result returned by the `fetchProperties` property of the delegate against the `propertyInfo` property. If the provided `propertyInfo` is not a subset of the result, an error is thrown. This check is implemented in all controls with a `propertyInfo` property and a `fetchProperties` callback in the related delegate.

<sub>Changed•Control•Info Only•1.127</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-08-08

</td>
</tr>
<tr>
<td valign="top">

1.127 

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

-   In object pages, you can now use the manifest setting at the application level to configure tables in create mode. For more information, see [Enabling Inline Creation Mode or Empty Row Mode for Table Entries](../06_SAP_Fiori_Elements/enabling-inline-creation-mode-or-empty-row-mode-for-table-entries-cfb04f0.md).

-   We now support the mass edit feature for grid tables in list report pages. For more information, see [Enabling Editing Using a Dialog \(Mass Edit\) in the List Report](../06_SAP_Fiori_Elements/enabling-editing-using-a-dialog-mass-edit-in-the-list-report-7cc4f04.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.127</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-08-08

</td>
</tr>
<tr>
<td valign="top">

1.127 

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

-   We’ve now enabled the date picker with a minimum allowed date and a maximum allowed date. For more information, see [Configuring Date Fields with a Valid Date Range](../06_SAP_Fiori_Elements/configuring-object-page-features-d26d3dd.md).

-   You can now use the *Share: Microsoft Teams* \> *As Card* option to share the header facets and actions of an object page. For more information, see [The *Share* Functionality](../06_SAP_Fiori_Elements/the-share-functionality-022bf0d.md).

-   We now exclude columns that use 1:n navigation from table exports. For more information, see [Using the *Export* Button](../06_SAP_Fiori_Elements/using-the-export-button-4bab6f2.md).

-   We now support uploading files to a table. For more information, see [Enabling Upload Functionality](../06_SAP_Fiori_Elements/enabling-the-upload-functionality-d59dbec.md).

-   Tables in the analytical list page now provide a *Show Details* link for subtotals with various units. For more information, see [Table Groupings](../06_SAP_Fiori_Elements/table-groupings-d344c5a.md).

-   We now limit the search string to 1000 characters. For more information, see [Enabling the Search Function](../06_SAP_Fiori_Elements/enabling-the-search-function-3cdebee.md).

-   We now support annotations that allow masking of input fields. For more information, see [Different Representations of a Field](../06_SAP_Fiori_Elements/different-representations-of-a-field-c18ada4.md) .

-   You can now define a `sideEffectsEventsInteractionType` for each side effect event separately. For more information, see [Using Side Effect Events](../06_SAP_Fiori_Elements/event-driven-side-effects-27c9c3b.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.127</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-08-08

</td>
</tr>
<tr>
<td valign="top">

1.127 

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

We've made performance improvements for side effect annotations related to action calls.

Previously, even when an action didn't have an annotated side effect, the full entity was read after executing the action. Now, if an action doesn't have a side effect annotation and the service supports state messages, the system implicitly reads the state messages. For performance optimization, SAP Fiori elements for OData V4 no longer fetches unnecessary data. As a result, it's possible that the required data for an action is no longer executed if you haven't annotated the corresponding side effect.

SAP Fiori elements for OData V4 always aims to read only the required data. If applications want data to be refreshed after a change made by a user, or by calling an action, they must define a side effect. With this change, SAP Fiori elements no longer implicitly reads the full instance after the execution of an action. Instead, SAP Fiori elements relies on the definition of side effects.

> ### Example:  
> Your app contains an action that results in a status change on the UI, such as the delivery status of an item changing from *Sent* to *Delivered*.
> 
> Until now the status changed automatically, because all app data was loaded. Now, if the UI requires any other side effects, you must ensure that a side effect annotation exists for the action.

<sub>Changed•SAP Fiori Elements•Recommended•1.127</sub>

</td>
<td valign="top">

Recommended

</td>
<td valign="top">

2024-08-08

</td>
</tr>
<tr>
<td valign="top">

1.127 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.comp.smartfield.SmartField, sap.ui.comp.smartfilterbar.SmartFilterBar`** 

</td>
<td valign="top">

**`sap.ui.comp.smartfield.SmartField, sap.ui.comp.smartfilterbar.SmartFilterBar`**

From now on, if a field has both an `isFiscal*` annotation \(`IsFiscalYear`, `IsFiscalPeriod`, `IsFiscalYearPeriod`, `IsFiscalQuarter`, `IsFiscalYearQuarter`, `IsFiscalWeek`, or `IsFiscalYearWeek`\) and the `isDigitSequence` annotation, the `isFiscal*` annotation takes precedence.

<sub>Changed•Control•Info Only•1.127</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-08-08

</td>
</tr>
<tr>
<td valign="top">

1.127 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.comp.filterbar.FilterBar, sap.ui.comp.smartfilterbar.SmartFilterBar`** 

</td>
<td valign="top">

**`sap.ui.comp.filterbar.FilterBar, sap.ui.comp.smartfilterbar.SmartFilterBar`**

Filter bar and smart filter bar now support SAP Companion. You can enable it by setting custom data with the `sap-ui-DocumentationRef` key. For more information, see [Filter Bar](../10_More_About_Controls/filter-bar-2ae520a.md) and [Smart Filter Bar](../10_More_About_Controls/smart-filter-bar-7bcdffc.md).

<sub>Changed•Control•Info Only•1.127</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-08-08

</td>
</tr>
<tr>
<td valign="top">

1.127 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**CSS Custom Properties for Theming of Custom Controls / Applications** 

</td>
<td valign="top">

**CSS Custom Properties for Theming of Custom Controls/Applications**

We have included the theming parameters from the SAP Theming Base Content as CSS custom properties in the Horizon and Quartz themes of SAPUI5. You can now use them in your CSS for your custom controls or applications. We have also extended the Theme Parameter Toolbox to display the CSS custom properties for the Horizon and Quartz themes by default. The previous experimental `xx-css-variables` configuration option is no longer available.

For more information, see [CSS Variables, Functions, and More](../04_Essentials/enhanced-theming-concepts-45df6df.md#loio45df6dff504647c686ab9ba72af827f6__section_CSS), [Theming](../04_Essentials/theming-497c27a.md), and [Theme Parameter Toolbox](https://ui5.sap.com/test-resources/sap/m/demokit/theming/webapp/index.html).

<sub>Changed•Feature•Info Only•1.127</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-08-08

</td>
</tr>
<tr>
<td valign="top">

1.127 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**TypeScript** 

</td>
<td valign="top">

**TypeScript**

Support for controller extensions in TypeScript is now complete, comprising now also the use of extensions implemented by others in your own controller in addition to the modification of controllers implemented by others with your own extension.

For more information, see [Using Controller Extension with TypeScript](../04_Essentials/using-controller-extension-21515f0.md#loio21515f09c0324218bb705b27407f5d61__section_UCETS).

<sub>Changed•Feature•Info Only•1.127</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-08-08

</td>
</tr>
<tr>
<td valign="top">

1.127 

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

-   We have improved the experimental `OneWay` binding support for property bindings for structural properties that have a complex type. Updates on the client are now properly reflected.

    For more information, see [Property Binding With an Object Value](../04_Essentials/initialization-and-read-requests-fccfb2e.md#loiofccfb2eb41414f0792c165e69a878717__section_PBOV).

-   We have added the experimental `iLevels` parameter to `sap.ui.model.odata.v4.Context#expand`. Note that it must not be used in productive applications yet.

    For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context%23methods/expand).


<sub>Changed•Feature•Info Only•1.127</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-08-08

</td>
</tr>
<tr>
<td valign="top">

1.127 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.Menu` and `sap.ui.unified.Menu`** 

</td>
<td valign="top">

**`sap.m.Menu` and `sap.ui.unified.Menu`**

You can now set the menu items of these controls to be selectable. To make this possible, we have introduced the `sap.m.MenuItemGroup` and `sap.ui.unified.MenuItemGroup` controls. You have three options to define the selection mode for a group of items: `None` \(default\), `SingleSelect`, and `MultiSelect`. For more information, see the [sap.m.MenuItemGroup](https://ui5.sap.com/#/api/sap.m.MenuItemGroup) and [sap.ui.unified.MenuItemGroup](https://ui5.sap.com/#/api/sap.ui.unified.MenuItemGroup) API references .

<sub>Changed•Control•Info Only•1.127</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-08-08

</td>
</tr>
</table>

**Related Information**  


[What's New in SAPUI5 1.130](what-s-new-in-sapui5-1-130-85609d4.md "With this release SAPUI5 is upgraded from version 1.129 to 1.130.")

[What's New in SAPUI5 1.129](what-s-new-in-sapui5-1-129-d22b8af.md "With this release SAPUI5 is upgraded from version 1.128 to 1.129.")

[What's New in SAPUI5 1.128](what-s-new-in-sapui5-1-128-1f76220.md "With this release SAPUI5 is upgraded from version 1.127 to 1.128.")

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

