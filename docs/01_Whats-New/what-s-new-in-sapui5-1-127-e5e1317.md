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

-   You can now define a `sideEffectsEventsInteractionType` for each side effect event separately. For more information, see [Using Side Effect Events](../06_SAP_Fiori_Elements/using-side-effect-events-27c9c3b.md).


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

