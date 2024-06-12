<!-- loioa1aea672037f484aa2549a8408a74e5b -->

# What's New in SAPUI5 1.95

With this release SAPUI5 is upgraded from version 1.94 to 1.95.



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

1.95 

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

-   The optional `bDeleteCreatedEntities` parameter has been added to the `sap.ui.model.odata.v2.ODataModel#resetChanges` method. If set to `true`, any created entities are removed.

-   The `sap.ui.model.odata.v2.ODataModel#deleteCreatedEntry` method has been deprecated. It does not update controls but cannot be changed for compatibility reasons. Applications should use `sap.ui.model.odata.v2.ODataModel#resetChanges` instead.


<sub>Changed•Feature•Info Only•1.95</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2021-10-07

</td>
</tr>
<tr>
<td valign="top">

1.95 

</td>
<td valign="top">

UI Changed 

</td>
<td valign="top">

Announcement 

</td>
<td valign="top">

**SAP Fiori Elements: Worklist Apps: Sort, Group, and Filter Options Moved to Table Personalization** 

</td>
<td valign="top">

**SAP Fiori Elements: Worklist Apps: Sort, Group, and Filter Options Moved to Table Personalization**

> ### Note:  
> The following information concerns important changes for end users. These changes may require end users to adjust and/or test cases to be adapted, but they won't stop or disrupt software or processes.

Sort, group, and filter options in table toolbars have been moved to the table personalization dialog. This is the same behavior as in list report apps.

<sub>UI Changed•Announcement•Info Only•1.95</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2021-10-07

</td>
</tr>
<tr>
<td valign="top">

1.95 

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

-   A new `sap.ui.model.odata.v4.ODataContextBinding#moveEntityTo` method. You can use this API in a list-detail scenario to load details first, as described in [Data Reuse](../04_Essentials/data-reuse-648e360.md). Note that this method is still a work in progress and should not be used for productive applications yet.

-   An absolute property binding with a path that ends in `$count` now supports the `$apply`, `$filter`, and `$search` OData system query options.

-   You can now provide handlers that provide the security token header. Note that expiration is currently only supported for the `X-CSRF-Token` header. For more information, see [Security Token Handling](../04_Essentials/model-instantiation-and-data-access-9613f1f.md#loio9613f1f2d88747cab21896f7216afdac__section_STH).


<sub>Changed•Feature•Info Only•1.95</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2021-10-07

</td>
</tr>
<tr>
<td valign="top">

1.95 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.Button`** 

</td>
<td valign="top">

**`sap.m.Button`**

We have improved the accessibility of the control, and the screen readers now announce when there is a change in the text, tooltip, or icon in a stand-alone `sap.m.Button`. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.Button).

<sub>Changed•Control•Info Only•1.95</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2021-10-07

</td>
</tr>
<tr>
<td valign="top">

1.95 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.DatePicker, sap.m.DateRangeSelection, sap.m.DateTimePicker, and sap.ui.unified.Calendar`** 

</td>
<td valign="top">

**`sap.m.DatePicker, sap.m.DateRangeSelection, sap.m.DateTimePicker, and sap.ui.unified.Calendar`**

These controls now have the new property `showCurrentDateButton`, which displays an additional button in the navigation part of the calendar. When pressed, the control navigates to the current date and focuses on it. This feature is available for pickers whose display format allows picking a day. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.DatePicker) and the [Sample](https://ui5.sap.com/#/entity/sap.m.DatePicker/sample/sap.m.sample.DatePicker).

<sub>Changed•Control•Info Only•1.95</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2021-10-07

</td>
</tr>
<tr>
<td valign="top">

1.95 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

<code><b>sap.m.StandardListItem</b></code> 

</td>
<td valign="top">

**`sap.m.StandardListItem`**

Information texts in lists can now also be wrapped if wrapping is enabled for this control. However, a *More* option for these texts is not available. For more information, see the [API Reference for `wrapping`](https://ui5.sap.com/#/api/sap.m.StandardListItem%23methods/getWrapping), the [API Reference for `info`](https://ui5.sap.com/#/api/sap.m.StandardListItem%23methods/getInfo), and the [Sample](https://ui5.sap.com/#/entity/sap.m.StandardListItem/sample/sap.m.sample.StandardListItemWrapping).

<sub>Changed•Control•Info Only•1.95</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2021-10-07

</td>
</tr>
<tr>
<td valign="top">

1.95 

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

-   We have introduced \(in experimental state\) support for data caching. This feature enables host-environment developers to implement client-side data caching. Additionally, card developers have options to control what data is cached and how it should be cached. For more information, see the [Data Handling - Cache](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/features/data), [Integrate - Caching](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/features/data) sections, and the [Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/cache) in the Card Explorer.

-   The side indicators in the numeric header of the card now support semantic colors. This functionality is achieved using the new `state` property of the `SideIndicator`. For more information, see the [Analytical Card Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/analytical) in the Card Explorer.

-   We have added a new `refreshData` method. You can use it to refresh only that part of the card that shows new data, without rerendering the whole card. For more information, see the [Refresh Data Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/extension/refreshData) in the Card Explorer.

-   The Analytical type card can now visualize \(in experimental state\) all charts from the `sap.viz` library. To enable it, we have enhanced the card manifest with new properties - `feeds`, which allows developers to define more measures and dimensions, and `chartProperties` to customize the charts. The properties `legend`, `plotArea`, `title`, `dimensionAxis`, and `measureAxis` are now deprecated. For more information, see the [Analytical Card](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/types/analytical) section and the [Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/analytical/bubble) in the Card Explorer.


<sub>Changed•Control•Info Only•1.95</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2021-10-07

</td>
</tr>
<tr>
<td valign="top">

1.95 

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

-   List report now supports default sort order and visualizations that are coming from the presentation variant.

-   A new extension API is now available that can hook into the live cycle method of the `sap-keep-alive` feature. For more information, see [Refresh Data Set for Back Navigation When sap-keep-alive Is Set to True](../06_SAP_Fiori_Elements/refresh-data-set-for-back-navigation-when-sap-keep-alive-is-set-to-true-f1c2704.md).

-   Responsive tables in an object page can now be configured to load more than the default value of 10. For more information, see [Adapting the UI: List Report and Object Page](../06_SAP_Fiori_Elements/adapting-the-ui-list-report-and-object-page-0d2f1a9.md).

-   The confirmation popup to discard drafts is now enabled by default for draft applications. For more information, see [Confirmation Popups](../06_SAP_Fiori_Elements/confirmation-popups-9a53662.md).

-   The creation of an object using a dialog is now supported in multi-view applications. For more information, see [Enabling Object Creation Using the Dialog in the List Report](../06_SAP_Fiori_Elements/enabling-object-creation-using-the-dialog-in-the-list-report-ceb9284.md).

-   You can now enable the history of recently entered values for any field in the smart filter bar. For more information, see [Enabling the History of Recently Entered Values](../06_SAP_Fiori_Elements/enabling-the-history-of-recently-entered-values-37dbf1f.md).

-   You can now configure a data refresh upon back navigation from an external app when keep-alive mode is enabled. For more information, see [Refresh Entity Sets in sap-keep-alive Mode](../06_SAP_Fiori_Elements/refresh-entity-sets-in-sap-keep-alive-mode-3c65f2c.md).

-   Triggering side effects for structural changes in an object page table is now supported in non-draft applications. For more information, see [Side Effects](../06_SAP_Fiori_Elements/side-effects-18b17bd.md).

-   You now have an option to mark the navigated row when `onListNavigationExtension` is used. For more information, see [Example: Enable Internal Navigation to Different Detail Page](../06_SAP_Fiori_Elements/example-enable-internal-navigation-to-different-detail-page-75002b3.md).

-   You can now order the legends as per the dimension configuration within analytical charts for an overview page. For more information, see [Configuring Charts](../06_SAP_Fiori_Elements/configuring-charts-c7c5a82.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.95</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2021-10-07

</td>
</tr>
<tr>
<td valign="top">

1.95 

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

-   Users can now select values outside of what is displayed in the visual filter bar for value help-based filters. For more information, see [Configuring the Visual Filter Bar](../06_SAP_Fiori_Elements/configuring-the-visual-filter-bar-33f3d80.md).

-   Application developers can now also add charts when using the list report in multi-view mode. For more information, see the following topics:

    -   [Multiple Views on List Report Tables](../06_SAP_Fiori_Elements/multiple-views-on-list-report-tables-a37df40.md)

    -   [Defining Multiple Views on a List Report Table - Multiple Table Mode](../06_SAP_Fiori_Elements/defining-multiple-views-on-a-list-report-table-multiple-table-mode-37aeed7.md)

    -   [Defining Multiple Views on a List Report with Different Entity Sets and Table Settings](../06_SAP_Fiori_Elements/defining-multiple-views-on-a-list-report-with-different-entity-sets-and-table-settings-b6b59e4.md)


-   SAP Fiori elements for OData V4 now also supports parameterized entities for value help associated with the visual filter. For more information, see the note mentioning *Supporting Parameterized Entities* in [Enhancing ValueList Annotations for Visual Filters](../06_SAP_Fiori_Elements/enhancing-valuelist-annotations-for-visual-filters-16d43eb.md).

-   The `DefaultValuesFunction` is now also supported when you create new objects annotated at entity level or navigation property level. For more information, see [Actions](../06_SAP_Fiori_Elements/actions-cbf16c5.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.95</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2021-10-07

</td>
</tr>
</table>

**Related Information**  


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

