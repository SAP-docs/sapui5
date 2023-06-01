<!-- loio8cee506a8ade4272b40f226648b28024 -->

# What's New in SAPUI5 1.80

With this release SAPUI5 is upgraded from version 1.79 to 1.80.



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

 1.80 



</td>
<td valign="top">

 New 



</td>
<td valign="top">

 Control 



</td>
<td valign="top">

 **`sap.m.BadgeCustomData`, `sap.m.IBadgeEnabler`** 



</td>
<td valign="top">

**`sap.m.BadgeCustomData`, `sap.m.IBadgeEnabler`**

To facilitate control developers working on implementations of badges, we created a new `sap.m.BadgeCustomData` type to handle the badge data. Control developers can now use the new `sap.m.IBadgeEnabler` utility that helps working with badge data.For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.IBadgeEnabler).

<sub>New•Control•Info Only•1.80</sub>



</td>
<td valign="top">

Info Only



</td>
<td valign="top">

2020-07-16



</td>
</tr>
<tr>
<td valign="top">

 1.80 



</td>
<td valign="top">

 Changed 



</td>
<td valign="top">

 Feature 



</td>
<td valign="top">

 **SAPUI5 OData V4 Model****SAPUI5 OData V4 Model** 



</td>
<td valign="top">

**SAPUI5 OData V4 Model**

The new version of the SAPUI5 OData V4 model introduces the following features:

-   When using `groupLevels` with the `$$aggregation` binding parameter, we now support paging and expanding of several levels.
-   The new `$$sharedRequest` parameter is available for OData list bindings. This parameter leads to the reuse of data requested previously for the same resource path with identical parameters in bindings where `$$sharedRequest` is set. Note that a binding becomes read-only by using this parameter.

    For a comprehensive description of the restrictions, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel%23methods/bindList).

    Note also that `$$sharedRequest` is automatically set for list bindings of value list models returned by `sap.ui.model.odata.v4.ODataPropertyBinding#requestValueListInfo` and `sap.ui.model.odata.v4.ODataMetaModel#requestValueListInfo`.


> ### Restriction:  
> Due to the limited feature scope of this version of the SAPUI5 OData V4 model, check that all required features are in place before developing applications. Double-check the detailed documentation of the features, as certain parts of a feature may be missing. While we aim to be compatible with existing controls, some controls might not work due to small incompatibilities compared to `sap.ui.model.odata.(v2.)ODataModel`, or due to missing features in the model \(such as tree binding\). This also applies to smart controls \(`sap.ui.comp` library\) that do not support the SAPUI5 OData V4 model, as well as controls such as `TreeTable` and `AnalyticalTable`, which are not supported in combination with the SAPUI5 OData V4 model. The interface for applications has been changed for easier and more efficient use of the model. For a summary of these changes, see [Changes Compared to OData V2 Model](../04_Essentials/changes-compared-to-odata-v2-model-abd4d7c.md).

For more information, see [OData V4 Model](../04_Essentials/odata-v4-model-5de13cf.md), the [API Reference](https://ui5.sap.com/#/api/sap.ui.model.odata.v4), and the [Samples](https://ui5.sap.com/#/entity/sap.ui.model.odata.v4.ODataModel) in the Demo Kit.

<sub>Changed•Feature•Info Only•1.80</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2020-07-16



</td>
</tr>
<tr>
<td valign="top">

 1.80 



</td>
<td valign="top">

 Changed 



</td>
<td valign="top">

 Control 



</td>
<td valign="top">

 **`sap.f.GridContainer`** 



</td>
<td valign="top">

**`sap.f.GridContainer`**

-   We have enhanced drag and drop between two containers. When you drag one element over another container, the element in the original position is not visible, but keeps its place so that you can return the element back to its original place if you need to.
-   We have improved focus visualization and handling. You can now easily move the focus through the items in the container using the [Arrow Keys\]. For more information, see the [Samples](https://ui5.sap.com/#/entity/sap.f.GridContainer).

<sub>Changed•Control•Info Only•1.80</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2020-07-16



</td>
</tr>
<tr>
<td valign="top">

 1.80 



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

When you drag one tab over a tab with nested tabs, only one drop zone is available, but the list of nested tabs expands and you can drop the tab where it is needed. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.m.IconTabBar/sample/sap.m.sample.IconTabBarDragDrop).

<sub>Changed•Control•Info Only•1.80</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2020-07-16



</td>
</tr>
<tr>
<td valign="top">

 1.80 



</td>
<td valign="top">

 Changed 



</td>
<td valign="top">

 Control 



</td>
<td valign="top">

 **`sap.m.TablePersoDialog`** 



</td>
<td valign="top">

**`sap.m.TablePersoDialog`**

The look and feel of the control has been improved based on the latest design guidelines and the SAP Fiori 3 user experience. For example, the *Move column up/down* buttons are now right next to the search field using different icons; the *Reset* button is no longer an icon button and has been moved up to the header section; `sap.m.Table` is now used for the columns instead of `sap.m.List`, including multiple selection and the *Select All* checkbox. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.TablePersoDialog) and the [Sample](https://ui5.sap.com/#/entity/sap.m.Table/sample/sap.m.sample.TablePerso).

<sub>Changed•Control•Info Only•1.80</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2020-07-16



</td>
</tr>
<tr>
<td valign="top">

 1.80 



</td>
<td valign="top">

 Changed 



</td>
<td valign="top">

 Control 



</td>
<td valign="top">

 **`sap.tnt.NavigationListItem`** 



</td>
<td valign="top">

**`sap.tnt.NavigationListItem`**

We have added `href` and `target` properties to improve the SEO capabilities of the control. Now developers can use these new properties in the navigation within the application, so that search engines can discover and index the application pages. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.tnt.NavigationListItem).

<sub>Changed•Control•Info Only•1.80</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2020-07-16



</td>
</tr>
<tr>
<td valign="top">

 1.80 



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

-   Descriptions in columns annotated with `com.sap.vocabularies.UI.v1.TextArrangement` are now no longer automatically right-aligned when the description for a numeric field is made visible. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.ui.comp.smarttable.SmartTable/sample/sap.ui.comp.sample.smarttable.smartTableWithCriticality).

-   In tables of type `AnalyticalTable`, a *Show Details* link is now displayed if various units of measurement \(UoMs\) are used in a table. The link opens a `Totals` popover with the sum of all the rows for each UoM. This is now supported in addition to the support of various currency units.


<sub>Changed•Control•Info Only•1.80</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2020-07-16



</td>
</tr>
<tr>
<td valign="top">

 1.80 



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

-   We have added support \(experimental\) for microcharts in the List card. To allow a chart for every item in the list, we have introduced the `chart` property in the descriptor for `sap.ui.integration.widgets.Card` of type List. Supported chart types are `StackedBar` and `Bullet`. For details about their properties, see the [Card Microcharts](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/features/microcharts) section in the Card Explorer.
-   We have redefined the dynamic filtering feature \(experimental\), which allows developers to create custom filters in the manifest of the card. We have introduced a dedicated `filters` section for user-friendly visualization when working with design-time configuration tools. For more information, see the [Filters](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/features/filters) section and the [Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/filters) in the Card Explorer.

<sub>Changed•Control•Info Only•1.80</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2020-07-16



</td>
</tr>
<tr>
<td valign="top">

 1.80 



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

-   The SAP Fiori elements object page now supports SAP Icons within smart forms in object page sections.

-   The SAP Fiori elements now provide an extension in the object page table to add user defined input filter fields to the table toolbar. For more information, see [Example: Adding Custom Filter Fields in Table Toolbar](../06_SAP_Fiori_Elements/example-adding-custom-filter-fields-in-table-toolbar-e34f78f.md).

-   The SAP Fiori elements list report and object page tables now provide *Show Detail* and *Hide Details* buttons to display or hide columns of low and medium importance in a popin. For more information, see [Tables](../06_SAP_Fiori_Elements/tables-c0f6592.md).

-   The SAP Fiori elements object page now supports decimal formatter for data points. With annotation `NumberOfFractionalDigits`, you have the option to override the scale and precision defined in metadata to display the decimal formatted value on the UI. For more information, see [Data Points](../06_SAP_Fiori_Elements/data-points-c2a389a.md).

-   The SAP Fiori elements overview page now supports data label visibility in analytical charts. To enable this, set the property `showDataLabelForAnalyticalCards` to `True` in the manifest file.

-   The SAP Fiori elements overview page now provides an option to specify a subtitle if variant management is not available.


<sub>Changed•SAP Fiori Elements•Info Only•1.80</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2020-07-16



</td>
</tr>
<tr>
<td valign="top">

 1.80 



</td>
<td valign="top">

 New 



</td>
<td valign="top">

 Feature 



</td>
<td valign="top">

 **Demo Kit Improvements** 



</td>
<td valign="top">

**Demo Kit Improvements**

**Demo Kit Language**

You can now change the language of the Demo Kit app from the *More information* menu at the top of the app header. By default, the app opens in English. If you want your browser to remember the chosen language setting, make sure to accept our cookies policy.

> ### Note:  
> Keep in mind that the selected language applies only to the Demo Kit application user interface. The content provided in the application in the different sections, such as *Documentation*, *API Reference*, and *Samples* is available only in English.

![](images/Demo_Kit_Language_WN_1_80_eb91a45.gif)

**Samples**

You can now view the sample description and any additional details directly from the sample window by choosing *Sample information* at the top of the sample window.

![](images/Demo_Kit_Sample_Info_WN_1_80_c2dca89.gif)

<sub>New•Feature•Info Only•1.80</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2020-07-16



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

