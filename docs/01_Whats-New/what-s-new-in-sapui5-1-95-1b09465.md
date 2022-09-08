<!-- loio1b094659cfcf422c968ce17d39f89211 -->

# What's New in SAPUI5 1.95

With this release SAPUI5 is upgraded from version 1.94 to 1.95.



<a name="loio1b094659cfcf422c968ce17d39f89211__section_yvs_ksr_2qb"/>

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



<a name="loio1b094659cfcf422c968ce17d39f89211__section_qwl_pb5_zcb"/>

## Improved Features


<table>
<tr>
<td valign="top">

**SAPUI5 OData V2 Model**

The new version of the SAPUI5 OData V2 model introduces the following features:

-   The optional `bDeleteCreatedEntities` parameter has been added to the `sap.ui.model.odata.v2.ODataModel#resetChanges` method. If set to `true`, any created entities are removed.

-   The `sap.ui.model.odata.v2.ODataModel#deleteCreatedEntry` method has been deprecated. It does not update controls but cannot be changed for compatibility reasons. Applications should use `sap.ui.model.odata.v2.ODataModel#resetChanges` instead.




</td>
</tr>
<tr>
<td valign="top">

**SAPUI5 OData V4 Model**

The new version of the SAPUI5 OData V4 model introduces the following features:

-   A new `sap.ui.model.odata.v4.ODataContextBinding#moveEntityTo` method. You can use this API in a list-detail scenario to load details first, as described in [Relative Bindings](../04_Essentials/data-reuse-648e360.md). Note that this method is still a work in progress and should not be used for productive applications yet.

-   An absolute property binding with a path that ends in `$count` now supports the `$apply`, `$filter`, and `$search` OData system query options.

-   You can now provide handlers that provide the security token header. Note that expiration is currently only supported for the `X-CSRF-Token` header. For more information, see [Security Token Handling](../04_Essentials/model-instantiation-and-data-access-9613f1f.md#loio9613f1f2d88747cab21896f7216afdac__section_STH).




</td>
</tr>
</table>



<a name="loio1b094659cfcf422c968ce17d39f89211__section_rqn_wd5_zcb"/>

## Improved Controls


<table>
<tr>
<td valign="top">

**`sap.m.Button`**

We have improved the accessibility of the control, and the screen readers now announce when there is a change in the text, tooltip, or icon in a stand-alone `sap.m.Button`. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.Button).



</td>
</tr>
<tr>
<td valign="top">

**`sap.m.DatePicker`, `sap.m.DateRangeSelection`, `sap.m.DateTimePicker`, and `sap.ui.unified.Calendar`**

These controls now have the new property `showCurrentDateButton`, which displays an additional button in the navigation part of the calendar. When pressed, the control navigates to the current date and focuses on it. This feature is available for pickers whose display format allows picking a day. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.DatePicker) and the [Sample](https://ui5.sap.com/#/entity/sap.m.DatePicker/sample/sap.m.sample.DatePicker).



</td>
</tr>
<tr>
<td valign="top">

<code><b>sap.m.StandardListItem</b></code>

Information texts in lists can now also be wrapped if wrapping is enabled for this control. However, a *More* option for these texts is not available. For more information, see the [API Reference for `wrapping`](https://ui5.sap.com/#/api/sap.m.StandardListItem%23methods/getWrapping), the [API Reference for `info`](https://ui5.sap.com/#/api/sap.m.StandardListItem%23methods/getInfo), and the [Sample](https://ui5.sap.com/#/entity/sap.m.StandardListItem/sample/sap.m.sample.StandardListItemWrapping).



</td>
</tr>
<tr>
<td valign="top">

**`sap.ui.integration.widgets.Card`**

-   We have introduced \(in experimental state\) support for data caching. This feature enables host-environment developers to implement client-side data caching. Additionally, card developers have options to control what data is cached and how it should be cached. For more information, see the [Data Handling - Cache](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/features/data), [Integrate - Caching](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/features/data) sections, and the [Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/cache) in the Card Explorer.

-   The side indicators in the numeric header of the card now support semantic colors. This functionality is achieved using the new `state` property of the `SideIndicator`. For more information, see the [Analytical Card Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/analytical) in the Card Explorer.

-   We have added a new `refreshData` method. You can use it to refresh only that part of the card that shows new data, without rerendering the whole card. For more information, see the [Refresh Data Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/extension/refreshData) in the Card Explorer.

-   The Analytical type card can now visualize \(in experimental state\) all charts from the `sap.viz` library. To enable it, we have enhanced the card manifest with new properties - `feeds`, which allows developers to define more measures and dimensions, and `chartProperties` to customize the charts. The properties `legend`, `plotArea`, `title`, `dimensionAxis`, and `measureAxis` are now deprecated. For more information, see the [Analytical Card](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/types/analytical) section and the [Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/analytical/bubble) in the Card Explorer.




</td>
</tr>
</table>



<a name="loio1b094659cfcf422c968ce17d39f89211__section_cps_cg5_zcb"/>

## Deprecations


<table>
<tr>
<td valign="top">

There are currently no major deprecations. For a complete list of all deprecations, see [Deprecated APIs](https://ui5.sap.com/#/api/deprecated). 



</td>
</tr>
</table>



<a name="loio1b094659cfcf422c968ce17d39f89211__section_g3r_bf5_zcb"/>

## SAP Fiori Elements


<table>
<tr>
<td valign="top">

The following changes and new features are available for SAP Fiori elements for OData V2:

-   List report now supports default sort order and visualizations that are coming from the presentation variant. For more information, see .

-   A new extension API is now available that can hook into the live cycle method of the `sap-keep-alive` feature. For more information, see [Refresh Data Set for Back Navigation when SAP-Keep-Alive is Set to True](../06_SAP_Fiori_Elements/refresh-data-set-for-back-navigation-when-sap-keep-alive-is-set-to-true-f1c2704.md).

-   Responsive tables in an object page can now be configured to load more than the default value of 10. For more information, see [Adapting the UI: List Report and Object Page](../06_SAP_Fiori_Elements/adapting-the-ui-list-report-and-object-page-0d2f1a9.md).

-   The confirmation popup to discard drafts is now enabled by default for draft applications. For more information, see [Confirmation Popups for Actions](../06_SAP_Fiori_Elements/confirmation-popups-9a53662.md).

-   The creation of an object using a dialog is now supported in multi-view applications. For more information, see [Enabling Object Creation Through Dialog in the List Report](../06_SAP_Fiori_Elements/enabling-object-creation-using-the-dialog-in-the-list-report-ceb9284.md).

-   You can now enable the history of recently entered values for any field in the smart filter bar. For more information, see [Enable the History of Recently Entered Values](../06_SAP_Fiori_Elements/enable-the-history-of-recently-entered-values-37dbf1f.md).

-   You can now configure a data refresh upon back navigation from an external app when keep-alive mode is enabled. For more information, see [Refresh Entity Sets in `sap-keep-alive`Mode](../06_SAP_Fiori_Elements/refresh-entity-sets-in-sap-keep-alive-mode-3c65f2c.md).

-   Triggering side effects for structural changes in an object page table is now supported in non-draft applications. For more information, see [Side Effects](../06_SAP_Fiori_Elements/side-effects-18b17bd.md).

-   You now have an option to mark the navigated row when `onListNavigationExtension` is used. For more information, see [Example: Enable Internal Navigation for a List Report to Object Pages of Different Entity Sets](../06_SAP_Fiori_Elements/example-enable-internal-navigation-to-different-detail-page-75002b3.md).

-   You can now order the legends as per the dimension configuration within analytical charts for an overview page. For more information, see [Configuring Charts](../06_SAP_Fiori_Elements/configuring-charts-c7c5a82.md).




</td>
</tr>
<tr>
<td valign="top">

The following changes and new features are available for SAP Fiori elements for OData V4:

-   Users can now select values outside of what is displayed in the visual filter bar for value help-based filters. For more information, see [Configuring the Visual Filter Bar](../06_SAP_Fiori_Elements/configuring-the-visual-filter-bar-33f3d80.md).

-   Application developers can now also add charts when using the list report in multi-view mode. For more information, see the following topics:

    -   [Multiple Views on List Report Tables](../06_SAP_Fiori_Elements/multiple-views-on-list-report-tables-a37df40.md)

    -   [Defining Multiple Views on a List Report Table - Multiple Table Mode](../06_SAP_Fiori_Elements/defining-multiple-views-on-a-list-report-table-multiple-table-mode-37aeed7.md)

    -   [Defining Multiple Views on a List Report with Different Entity Sets and Table Settings](../06_SAP_Fiori_Elements/defining-multiple-views-on-a-list-report-with-different-entity-sets-and-table-settings-b6b59e4.md)


-   SAP Fiori elements for OData V4 now also supports parameterized entities for value help associated with the visual filter. For more information, see the note mentioning *Supporting Parameterized Entities* in [Enhancing ValueList Annotations for Visual Filters](../06_SAP_Fiori_Elements/enhancing-valuelist-annotations-for-visual-filters-16d43eb.md).

-   The `DefaultValuesFunction` is now also supported when you create new objects annotated at entity level or navigation property level. For more information, see [Actions](../06_SAP_Fiori_Elements/actions-cbf16c5.md).




</td>
</tr>
</table>

**Parent topic:** [Previous Versions](previous-versions-6660a59.md "")

**Related Information**  


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

[What's New in SAPUI5 1.94](what-s-new-in-sapui5-1-94-2d6ffdd.md "With this release SAPUI5 is upgraded from version 1.93 to 1.94.")

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

