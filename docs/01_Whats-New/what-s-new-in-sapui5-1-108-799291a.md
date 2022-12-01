<!-- loio799291a4be7542c9a0a96ba425d0dec2 -->

# What's New in SAPUI5 1.108

With this release SAPUI5 is upgraded from version 1.107 to 1.108.



<a name="loio799291a4be7542c9a0a96ba425d0dec2__section_pzq_t5d_s5b"/>

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

For security reasons, SAPUI5 versions that are no longer maintained will be removed from the UI5 content delivery network \(CDN\) one year after their end of maintenance. If a version is still in maintenance, patches of that version that are older than one year will also be removed. We have noted that a number of customers are still using such outdated versions or patches. If this affects you, please note that once these versions or patches are removed, your applications will break. Please update to a more recent version or patch. For more information, see: [Removing Outdated UI5 Versions from UI5 CDN](https://blogs.sap.com/2021/01/26/removing-outdated-ui5-versions-from-ui5-cdn/) as well as the UI5 notifications in the Demo Kit.



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

**Analytical List Pages: Date Ranges Supported**

Filter fields on analytical list pages now provide date range options.



</td>
<td valign="top">

1.108



</td>
</tr>
</table>

> ### Note:  
> Content marked as **Preview** is provided as a courtesy, without a warranty, and may be subject to change. For more information, see the [preview disclaimer](https://help.sap.com/viewer/wnp_disclaimer).



<a name="loio799291a4be7542c9a0a96ba425d0dec2__section_qwl_pb5_zcb"/>

## Improved Features


<table>
<tr>
<td valign="top">

**Replacement for `jQuery.fn.control`**

To become more independent from specific jQuery functionality, we now provide the new `sap.ui.core.Element#closestTo` method as a replacement for the `jQuery.fn.control` extension function, which is commonly used to retrieve the nearest SAPUI5 control that wraps a given DOM element. The new method returns a single SAPUI5 element instead of the array of SAPUI5 elements returned by `jQuery.fn.control`. You might therefore need to add an outer loop when migrating your code to the new API.

For more information, see [Legacy jQuery.sap Replacement](../04_Essentials/legacy-jquery-sap-replacement-a075ed8.md)and the [API Reference](https://ui5.sap.com/#/api/sap.ui.core.Element/methods/sap.ui.core.Element.closestTo).



</td>
</tr>
<tr>
<td valign="top">

**SAPUI5 OData V2 Model**

The new version of the SAPUI5 OData V2 model introduces the following features:

-   We now support "deep create" requests for navigation properties of cardinality "many". For more information, see [Deep Create](../04_Essentials/odata-v2-model-6c47b2b.md#loio4c4cd99af9b14e08bb72470cc7cabff4__section_DCR).
-   We now provide the new `sap.ui.model.ClientTreeBinding#getCount` method.For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.model.ClientTreeBinding/methods/getCount).
-   When you use an `sap.ui.model.type.Currency`, `sap.ui.model.odata.type.Currency`, or the currency instance of `sap.ui.core.format.NumberFormat`, entered currency codes are now parsed case-insensitively where possible.
-   We have introduced the new `calendarWeekNumbering` format option for `sap.ui.core.format.DateFormat`.



</td>
</tr>
<tr>
<td valign="top">

**SAPUI5 OData V4 Model**

The new version of the SAPUI5 OData V4 model introduces the following features:

-   We now provide "deferred delete" requests: You can call the `sap.ui.model.odata.v4.Context#delete` method with an API group; the back-end request is then only sent when `ODataModel#submitBatch` is called for this API group. For more information, see [Deleting an Entity](../04_Essentials/deleting-an-entity-2613ebc.md).
-   We have improved our documentation of how to overwrite value list annotations in local annotation files. For more information, see [Value Lists](../04_Essentials/value-lists-ab267a6.md).
-   The `dataRequested` and `dataReceived` events introduced with SAPUI5 1.106 for the `sap.ui.model.odata.v4.ODataModel` now provide the path for additional property requests.For more information, see the API Reference for [`ODataModel.dataReceived`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel/events/dataReceived) and [`ODataModel.dataRequested`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel/events/dataRequested).



</td>
</tr>
<tr>
<td valign="top">

**Visualization of Changes in Key User Adaptation**

When visualizing UI changes in key user adaptation, key users can now filter for unsaved changes. On platforms where the draft feature is available, key users can also filter for draft changes.

See the [Demo App](https://ui5.sap.com/test-resources/sap/ui/demoapps/demokit/rta/freestyle/test/flpSandbox.html?sap-ui-theme=sap_horizon#masterDetail-display).



</td>
</tr>
</table>



<a name="loio799291a4be7542c9a0a96ba425d0dec2__section_rqn_wd5_zcb"/>

## Improved Controls


<table>
<tr>
<td valign="top">

**`sap.m.Avatar`**

Up to three Latin letters can be displayed as initials in a `sap.m.Avatar`. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.Avatar) and the [Sample](https://ui5.sap.com/#/entity/sap.m.Avatar/sample/sap.m.sample.Avatar). 



</td>
</tr>
<tr>
<td valign="top">

**`sap.m.Carousel`**

We have improved the keyboard interaction and accessibility of the control. The initial focus is now on the active carousel item, unlike before, when it was on the carousel container. This allows you to focus on a concrete item and provides more information to the screen readers.For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.m.Carousel/sample/sap.m.sample.CarouselWithMorePages).



</td>
</tr>
<tr>
<td valign="top">

**`sap.m.IllustratedMessage`**

We have introduced a new illustration breakpoint variant `Dot`, suitable for spaces that don't have a lot of vertical space. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.IllustratedMessageSize).



</td>
</tr>
<tr>
<td valign="top">

**`sap.ui.comp.smarttable.SmartTable` and `sap.ui.comp.smartchart.SmartChart`**

To improve the user experience, we have changed the filter panel in the table personalization dialog.

Until now, the user had to add each filtering operator on a new line:

 ![](images/WhatsNew_1_108_SmartTable_Old2_7da843a.png) 

As of now, there is a value help available for the input field and all selected filtering operators are displayed in one line per each filtered column:

 ![](images/WhatsNew_1_108SmartTable_New_ee42f56.png) 

For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.ui.comp.smarttable.SmartTable/sample/sap.ui.comp.sample.smarttable).



</td>
</tr>
<tr>
<td valign="top">

**`sap.ui.comp.smarttable.SmartTable`**

-   We have enhanced the `customizeConfig` property: It now supports `autoColumnWidth` configuration settings, which influence the automatic calculation of the column width for columns generated by the `SmartTable` control itself. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smarttable.SmartTable%23methods/getCustomizeConfig).

-   We have enhanced the data export to the cloud: Now it is possible to select a file in a Google Sheets format and export it to a Google Workspace file share. For more information, see the SAP Note [3216632](https://launchpad.support.sap.com/#/notes/3216632).




</td>
</tr>
<tr>
<td valign="top">

**`sap.ui.integration.widgets.Card`**

-   The Adaptive card now uses the recently released 1.7.0 UI5 WebComponents bundle. For more information, see the [Adaptive Card](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/typesOther/adaptive) Learn section in the Card Explorer.

-   You can now configure the visibility of the card footer using the new `visible` boolean property. Card developers can set this property in the manifest. Additionally, they can add it to the `Configuration.js`, which will also enable card administrators, who are using the Configuration editor, to control the visibility of the card footer. For more information, see the [Card Footer](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/footer) section and the [Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/footer/hiddenFooter) in the Card Explorer.

-   We have made the loading placeholder for Analytical cards more detailed to better reveal the expected loading content. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.ui.integration.widgets.Card/sample/sap.ui.integration.sample.LazyLoading).

-   We have \(experimentally\) enhanced the `sap.ui.integration.Extension` with a new `loadDependencies` lifecycle hook. As a card developer, you can use it to load critical dependencies for your extension, without which the data cannot be displayed. While the dependencies are loaded, the card displays a loading animation. This hook is asynchronous, so other tasks won’t be blocked. For more information, see the [Card Extension](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/features/extension) section and the [Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/extension/loadDependencies) in the Card Explorer, and the [API Reference](https://ui5.sap.com/#/api/sap.ui.integration.Extension).

-   A new `visible` property is now introduced for icons and avatars to achieve consistency in representation if an empty value for the `src` property is used in the card manifest. The new property is available for:

    -   Default Header
    -   Sap.f.CardHeader
    -   ObjectContent
    -   TableContent
    -   List Content

     For more information, see the [Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/object/iconVisibility) in the Card Explorer. 




</td>
</tr>
</table>



<a name="loio799291a4be7542c9a0a96ba425d0dec2__section_cps_cg5_zcb"/>

## Deprecations


<table>
<tr>
<td valign="top">

There are currently no major deprecations. For a complete list of all deprecations, see [Deprecated APIs](https://ui5.sap.com/#/api/deprecated). 



</td>
</tr>
</table>



<a name="loio799291a4be7542c9a0a96ba425d0dec2__section_g3r_bf5_zcb"/>

## SAP Fiori Elements


<table>
<tr>
<td valign="top">

The following changes and new features are available for SAP Fiori elements for OData V2:

-   For controls such as the combo box, checkbox, date picker, or date time picker, a side effect is now triggered as soon as the value is set, instead of when the control is out of focus. For more information, see [Side Effects](../06_SAP_Fiori_Elements/side-effects-18b17bd.md).

-   The analytical list page now supports the dynamic date range in `SmartFilterBar`. For more information, see [Enabling Semantic Operators in the Filter Bar](../06_SAP_Fiori_Elements/enabling-semantic-operators-in-the-filter-bar-fef65d0.md).

-   The section title is now hidden in cases where the section contains only a table or a chart, and their title is a duplicate of the section title. For more information, see [Defining and Adapting Sections](../06_SAP_Fiori_Elements/defining-and-adapting-sections-facfea0.md).




</td>
</tr>
<tr>
<td valign="top">

The following changes and new features are available for SAP Fiori elements for OData V4:

-   You can now define exactly which application links are shown in the *Related Apps* menu. For more information, see [Enabling the Related Apps Button](../06_SAP_Fiori_Elements/enabling-the-related-apps-button-8dcfe2e.md).

-   You can now execute the `PrepareAction` or global side effects by pressing *Enter* in draft mode. For more information, see [Draft Handling](../06_SAP_Fiori_Elements/draft-handling-ed9aa41.md).

-   You can now add a custom message in the message bar above a table in the list report. For more information, see [Adding a Custom Message Strip to List Report, Analytical List Page and Object Page Tables](../06_SAP_Fiori_Elements/adding-a-custom-message-strip-to-list-report-analytical-list-page-and-object-page-tables-0fdbefb.md).

-   You can now render semantically connected fields as a link to enable navigation using these fields. For more information, see [Grouping of Fields](../06_SAP_Fiori_Elements/grouping-of-fields-cb1748e.md).

-   We now provide a keyboard shortcut to trigger the default positive action in a list report, object page, and subobject page. For more information, see [Keyboard Shortcuts](../06_SAP_Fiori_Elements/keyboard-shortcuts-0cd318c.md).

-   We now provide an option to skip the *Create* pop-up dialog for new actions in specific cases. For more information, see [Handling of the preferredMode Parameter](../06_SAP_Fiori_Elements/handling-of-the-preferredmode-parameter-bfaf3cc.md).

-   On mobile devices, header facets are now arranged horizontally and can be accessed via horizontal scrolling. For more information, see [Header Facets](../06_SAP_Fiori_Elements/header-facets-17dbd5b.md).




</td>
</tr>
</table>



<a name="loio799291a4be7542c9a0a96ba425d0dec2__section_r5v_3h5_zcb"/>

## Demo Kit Improvements


<table>
<tr>
<td valign="top">

**TypeScript Demo App**

A new `TypeScript To-Do List` demo app is now available in both the Demo Apps and the Samples sections of the Demo Kit. For more information, see the [Samples](https://ui5.sap.com/#/entity/sap.m.sample.TsTodos).



</td>
</tr>
</table>

