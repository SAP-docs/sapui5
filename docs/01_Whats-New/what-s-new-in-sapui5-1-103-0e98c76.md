<!-- loio0e98c7660c8349f4acc60ee27b0cdde1 -->

# What's New in SAPUI5 1.103

With this release SAPUI5 is upgraded from version 1.102 to 1.103.

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

 1.103 



</td>
<td valign="top">

 Changed 



</td>
<td valign="top">

 Control 



</td>
<td valign="top">

 **`sap.m.plugins.DataStateIndicator`** 



</td>
<td valign="top">

**`sap.m.plugins.DataStateIndicator`**

The `MessageStrip` control, which is offered by the `DataStateIndicator` plugin, provides various messages for users that tell them about the current state of the UI. The new `close` event of `DataStateIndicator` is fired when the *Close* button of the `MessageStrip` control is pressed. This allows applications to intervene, for example, and let users remove these messages from the UI. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.plugins.DataStateIndicator%23events/close) for `DataStateIndicator`, the [API Reference](https://ui5.sap.com/#/api/sap.m.MessageStrip%23events/close) for `MessageStrip`, and the [Sample](https://ui5.sap.com/#/entity/sap.ui.comp.smarttable.SmartTable/sample/sap.ui.comp.sample.smarttable.mtableDataState).

<sub>Changed•Control•Info Only•1.103</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2022-06-16



</td>
</tr>
<tr>
<td valign="top">

 1.103 



</td>
<td valign="top">

 UI Changed 



</td>
<td valign="top">

 Announcement 



</td>
<td valign="top">

 **Smart Link Personalization: *Reset* Button Moved** 



</td>
<td valign="top">

**Smart Link Personalization: *Reset* Button Moved**

> ### Note:  
> The following information concerns important changes for end users. These changes may require end users to adjust and/or test cases to be adapted, but they won't stop or disrupt software or processes.

To further harmonize various personalization dialogs, the *Reset* button in the *Define Link List* dialog has been moved to the header.

<sub>UI Changed•Announcement•Info Only•1.103</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2022-06-16



</td>
</tr>
<tr>
<td valign="top">

 1.103 



</td>
<td valign="top">

 Changed 



</td>
<td valign="top">

 Control 



</td>
<td valign="top">

 **`sap.ui.comp.navpopover.SmartLink`** 



</td>
<td valign="top">

**`sap.ui.comp.navpopover.SmartLink`**

We have made the UI for `SmartLink` more consistent with other UIs. We now use the `sap.m.Dialog` instead of the deprecated `sap.m.P13nDialog`. The dialog has been slightly changed: For example, the *Reset* button is now located in the upper right-hand corner. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.ui.comp.tutorial.smartControls/sample/sap.ui.comp.tutorial.smartControls.03).

<sub>Changed•Control•Info Only•1.103</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2022-06-16



</td>
</tr>
<tr>
<td valign="top">

 1.103 



</td>
<td valign="top">

 Deprecated 



</td>
<td valign="top">

 Control 



</td>
<td valign="top">

 **Deprecation of the Visual Tree Mapper Library** 



</td>
<td valign="top">

**Deprecation of the Visual Tree Mapper Library**

The experimental [`sap.ui.vtm`](https://ui5.sap.com/#/api/sap.ui.vtm) library \(Visual Tree Mapper\) has been deprecated.

<sub>Deprecated•Control•Info Only•1.103</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2022-06-16



</td>
</tr>
<tr>
<td valign="top">

 1.103 



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

-   We now provide the new `sap.ui.model.odata.v4.ODataModel#delete` method.For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel%23methods/delete).
-   Multiple requests for absolute property bindings of singleton properties are now merged. For more information, see [Absolute Property Bindings of Singletons](../04_Essentials/data-reuse-648e360.md#loio648e360fa22d46248ca783dc6eb44531__section_APBS).

<sub>Changed•Feature•Info Only•1.103</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2022-06-16



</td>
</tr>
<tr>
<td valign="top">

 1.103 



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

-   We now support the handling of fields annotated with `InsertRestrictions/RequiredProperties` and `UpdateRestrictions/RequiredProperties`. For more information, see [Adding Actions to Tables](../06_SAP_Fiori_Elements/adding-actions-to-tables-b623e0b.md).

-   We've replaced some keys that can be overridden by application developers using the custom i18n file approach. If you're using any of the deprecated keys in the application resource bundles, replace them with the new ones. For more information, see [Localization of UI Texts](../06_SAP_Fiori_Elements/localization-of-ui-texts-b8cb649.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.103</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2022-06-16



</td>
</tr>
<tr>
<td valign="top">

 1.103 



</td>
<td valign="top">

 Changed 



</td>
<td valign="top">

 SAP Fiori Elements 



</td>
<td valign="top">

 **SAP Fiori elements for OData V2** 



</td>
<td valign="top">

**SAP Fiori elements for OData V2**

The following changes and new features are available for SAP Fiori elements for OData V2:

-   The reference facet title is now automatically hidden if it duplicates the section or the subsection title. For more information, see [Grouping of Fields](../06_SAP_Fiori_Elements/grouping-of-fields-cb1748e.md).

-   Parameterized entity sets with optional parameters are now supported in the list report. For more information, see [Configuring Filter Bars](../06_SAP_Fiori_Elements/configuring-filter-bars-4bd7590.md).

-   Applications can now define their own keyboard shortcuts for breakout actions in the analytical list page. For more information, see [Defining Custom Actions](../06_SAP_Fiori_Elements/defining-custom-actions-c3de5c0.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.103</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2022-06-16



</td>
</tr>
<tr>
<td valign="top">

 1.103 



</td>
<td valign="top">

 Changed 



</td>
<td valign="top">

 Control 



</td>
<td valign="top">

 **`sap.m.DateRangeSelection`, `sap.m.OverflowToolbar`, and `sap.m.IOverflowToolbarContent`** 



</td>
<td valign="top">

**`sap.m.DateRangeSelection`, `sap.m.OverflowToolbar`, and `sap.m.IOverflowToolbarContent`**

We have implemented `sap.m.OverflowToolbar` on the `sap.m.DateRangeSelection` to allow it to go to the overflow menu.For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.OverflowToolbar).

<sub>Changed•Control•Info Only•1.103</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2022-06-16



</td>
</tr>
<tr>
<td valign="top">

 1.103 



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

-   Colors in the `StackedBar` microcharts in List cards no longer accept `sap.m.ValueCSSColor` values. Now the colors should have standard semantic values provided by the `sap.m.ValueColor` enum. For more information, see the [Card Microcharts](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/features/microcharts) section in the Card Explorer.

-   We have allowed the usage of time series charts in the Analytical card. To enable this feature, we now pass the dimensions’ `dataType` parameter in the manifest. For more information, see the [Column with Time Axis](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/analytical/timeAxis) sample in the Card Explorer.

-   We have added documentation and a sample about intent-based navigation actions. Intent-based navigation is a mechanism, which has to be supported by the host environment, that allows you to launch applications or perform actions on semantic objects by using abstract intents. For more information, see the [Navigation](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/actions/navigation) section and the [Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/cardActions/ibn) in the Card Explorer.


<sub>Changed•Control•Info Only•1.103</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2022-06-16



</td>
</tr>
<tr>
<td valign="top">

 1.103 



</td>
<td valign="top">

 Changed 



</td>
<td valign="top">

 Control 



</td>
<td valign="top">

 **`sap.m.MessageBox`** 



</td>
<td valign="top">

**`sap.m.MessageBox`**

We have enhanced the `details` property and now it can also be a function that asynchronously fetches details from the backend. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.m.MessageBox/sample/sap.m.sample.MessageBoxInfo).

<sub>Changed•Control•Info Only•1.103</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2022-06-16



</td>
</tr>
</table>

**Related Information**  


[What's New in SAPUI5 1.112](what-s-new-in-sapui5-1-112-34afc69.md "With this release SAPUI5 is upgraded from version 1.111 to 1.112.")

[What's New in SAPUI5 1.111](what-s-new-in-sapui5-1-111-7a67837.md "With this release SAPUI5 is upgraded from version 1.110 to 1.111.")

[What's New in SAPUI5 1.110](what-s-new-in-sapui5-1-110-71a855c.md "With this release SAPUI5 is upgraded from version 1.109 to 1.110.")

[What's New in SAPUI5 1.109](what-s-new-in-sapui5-1-109-3264bd2.md "With this release SAPUI5 is upgraded from version 1.108 to 1.109.")

[What's New in SAPUI5 1.108](what-s-new-in-sapui5-1-108-66e33f0.md "With this release SAPUI5 is upgraded from version 1.107 to 1.108.")

[What's New in SAPUI5 1.107](what-s-new-in-sapui5-1-107-d4ff916.md "With this release SAPUI5 is upgraded from version 1.106 to 1.107.")

[What's New in SAPUI5 1.106](what-s-new-in-sapui5-1-106-5b497b0.md "With this release SAPUI5 is upgraded from version 1.105 to 1.106.")

[What's New in SAPUI5 1.105](what-s-new-in-sapui5-1-105-4d6c00e.md "With this release SAPUI5 is upgraded from version 1.104 to 1.105.")

[What's New in SAPUI5 1.104](what-s-new-in-sapui5-1-104-69e567c.md "With this release SAPUI5 is upgraded from version 1.103 to 1.104.")

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

