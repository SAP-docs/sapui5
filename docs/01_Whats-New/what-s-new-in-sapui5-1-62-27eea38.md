<!-- loio27eea38eeb7b40d19d0dfe3ddf513175 -->

# What's New in SAPUI5 1.62

With this release SAPUI5 is upgraded from version 1.61 to 1.62.



<a name="loio27eea38eeb7b40d19d0dfe3ddf513175__section_bkm_s15_zcb"/>

## New Controls


<table>
<tr>
<td valign="top">

**`sap.m.GenericTag`**

The new `sap.m.GenericTag` control displays complimentary information related to the current page, such as key performance indicators \(KPI\) and situations.

 ![](images/sap_m_GenericTag_New_Control_1_7fe88c5.png) 

It consists of four different parts:

-   A required status indicator with semantic colors \(A\)

-   An optional icon that is displayed in the same color as the status indicator \(B\)

-   A required text that is truncated automatically \(C\)

-   An optional content area that can display either a control of type `sap.m.ObjectNumber` or a warning icon \(D\)


 ![](images/sap_m_GenericTag_New_Control_2_fb7c92b.png) 

The control can move to the overflow area of `sap.m.OverflowToolbar`.

For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.GenericTag) and the [Samples](https://ui5.sap.com/#/entity/sap.m.GenericTag).



</td>
</tr>
<tr>
<td valign="top">

**`sap.ui.integration.widgets.Card`**

A card is a user experience design pattern that displays the most concise pieces of information in a limited-space container. It helps users structure their work in an intuitive and dynamic way.

  
  
**Analytical card**

 ![](images/Cards_3ff4cba.png "Analytical card") 

Using cards, you can group information, link additional details, and present a summary. You can also get direct insights without leaving the current screen and choose further navigation options. Each card is designed in a different style and contains various content formats.

-   The List card is used to display multiple list items of all kinds.

-   The Analytical card is used for data visualization with various chart types.


Cards can be used by referencing the `sap.ui.integration` library.

`sap.ui.integration.widgets.Card` is a self-contained user interface element, connected to a manifest and used as a widget.

For more information, see [Cards](../10_More_About_Controls/cards-5b46b03.md), the [API Reference](https://ui5.sap.com/#/api/sap.ui.integration.widgets.Card), and the [Samples](https://ui5.sap.com/#/entity/sap.ui.integration.widgets.Card).



</td>
</tr>
</table>



<a name="loio27eea38eeb7b40d19d0dfe3ddf513175__section_qwl_pb5_zcb"/>

## Improved Features


<table>
<tr>
<td valign="top">

**Routing in Nested Components**

SAPUI5 routing now supports navigation to components in addition to the already existing routing to views. You configure the routing in the component’s manifest. Moreover, the target component can also come with its own routing, which integrates via enhanced configuration in the manifest.

For details, see [Enabling Routing in Nested Components](../04_Essentials/enabling-routing-in-nested-components-fb19f50.md).



</td>
</tr>
<tr>
<td valign="top">

**SAPUI5 OData V4 Model**

The new version of the SAPUI5 OData V4 model introduces the following features:

-   Bound actions on collections can now be executed using the header context of the `sap.ui.model.odata.v4.ODataListBinding`. If the returned entity is part of the same entity set, the promise of `sap.ui.model.odata.v4.ODataContextBinding#execute` can be resolved with a return value context.

-   `sap.ui.model.odata.v4.Context#requestSideEffects` was introduced in SAPUI5 1.61 and now resolves side effects in :n navigations reloading only affected properties.

-   The `##` syntax for branching into the `MetaModel` as described in `sap.ui.model.odata.v4.ODataModel#bindProperty` is now also available in property bindings.

-   Non-primitive values are supported in property bindings with binding mode `OneTime` and target type `"any"`.

-   The following methods can now be executed while a binding is suspended:

    -   `filter`, `sort`, `changeParameters`, `setAggregation`, and `updateAnalyticalInfo` of `sap.ui.model.odata.v4.ODataListBinding`

    -   `changeParameters` of `sap.ui.model.odata.v4.ODataContextBinding`

    -   `refresh` method of all bindings


    When the binding is resumed, a request reflecting all the changes by these methods is triggered.


> ### Restriction:  
> Due to the limited feature scope of this version of the SAPUI5 OData V4 model, check that all required features are in place before developing applications. Check the detailed documentation of the features, as certain parts of a feature may be missing. While we aim to be compatible with existing controls, some controls might not work due to small incompatibilities compared to `sap.ui.model.odata.(v2.)ODataModel`, or due to missing features in the model \(such as tree binding\). This also applies to smart controls \(`sap.ui.comp` library\) and SAP Fiori elements that do not support the SAPUI5 OData V4 model, as well as controls such as `TreeTable` and `AnalyticalTable`, which are not supported together with the SAPUI5 OData V4 model. The interface for applications has been changed for easier and more efficient use of the model. For a summary of these changes, see [Changes Compared to OData V2 Model](../04_Essentials/changes-compared-to-odata-v2-model-abd4d7c.md).

For more information, see [OData V4 Model](../04_Essentials/odata-v4-model-5de13cf.md), the [API Reference](https://ui5.sap.com/#/api/sap.ui.model.odata.v4), and the [Samples](https://ui5.sap.com/#/entity/sap.ui.model.odata.v4.ODataModel).



</td>
</tr>
</table>



<a name="loio27eea38eeb7b40d19d0dfe3ddf513175__section_rqn_wd5_zcb"/>

## Improved Controls


<table>
<tr>
<td valign="top">

**`sap.m.Carousel`**

The control can now display several items at once. This functionality is implemented through a new `customLayout` aggregation of type `sap.m.CarouselLayout`. The `sap.m.CarouselLayout` defines how many items are displayed in the visible area of the `sap.m.Carousel` control and has a `visiblePagesCount` property, which determines the count of items to be displayed.For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.Carousel) and the [Sample](https://ui5.sap.com/#/sample/sap.m.sample.CarouselWithMorePages/preview).



</td>
</tr>
<tr>
<td valign="top">

<code><b><code>sap.m.Column</code></b></code>

The `sortIndicator` property now shows a sort icon when a column is sorted. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.Column) for the `sortIndicator` property.



</td>
</tr>
<tr>
<td valign="top">

**`sap.m.ComboBox`**

In order for the `ComboBox` to be aligned with the rest of the input controls and the already available features, we updated the used list structure of the control from `sap.m.SelectList` to `sap.m.List`, and respectively updated the protected API `getList`. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.ComboBox).



</td>
</tr>
<tr>
<td valign="top">

<code><b>sap.m.ListBase</b></code>

You can now use more values for the `highlight` property. These values are provided by the `sap.ui.core.MessageType` and `sap.ui.core.IndicationColor` enumerations. To define a custom semantic for the highlight color, you can use the new `highlightText` property. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.ListItemBase/controlProperties) for the `highlight` property.



</td>
</tr>
<tr>
<td valign="top">

**`sap.m.OverflowToolbar`**

-   We extended the `sap.m.sample.OverflowToolbarSimple` sample to demonstrate the behavior of grouped controls. It contains two pairs of grouped controls: `Label` with `Input` and `Label` with `Select`.For more information, see the [Sample](https://ui5.sap.com/#/sample/sap.m.sample.OverflowToolbarSimple/preview).

-   The `sap.m.OverflowToolbar` now allows `sap.m.GenericTag` to move into the overflow area.For more information, see the [Sample](https://ui5.sap.com/#/sample/sap.m.sample.OverflowToolbarSimple/preview).




</td>
</tr>
<tr>
<td valign="top">

**`sap.m.SinglePlanningCalendar`**

-   You can now select or deselect single appointments either by clicking or tapping on the appointment or by using the keyboard arrow keys to navigate to the appointment and then select or deselect it by pressing the space bar or the [Enter\] key. You can enter multi-selection mode using key combinations \(for example, [Ctrl + click\] for Microsoft Windows Operating Systems or [Cmd + click\] for Mac Operating Systems\).

-   The `sap.m.SinglePlanningCalendar` now has a new `stickyMode` property which allows users to select which toolbars will be fixed while scrolling.


For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.SinglePlanningCalendar) and the [Samples](https://ui5.sap.com/#/entity/sap.m.SinglePlanningCalendar).



</td>
</tr>
<tr>
<td valign="top">

<code><b>sap.m.StandardListItem</b></code>

The new `information` value in the `sap.ui.core.ValueState` enumeration is now supported by the `infoState` property of `StandardListItem`. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.StandardListItem/methods/getInfoState).



</td>
</tr>
<tr>
<td valign="top">

**`sap.tnt.SideNavigation`**

We have implemented a `selectedKey` property of `sap.tnt.SideNavigation`, with which you can easily set the selected item, when the control is bound to a model. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.tnt.SideNavigation) and the [Sample](https://ui5.sap.com/#/sample/sap.tnt.sample.ToolPage/preview).



</td>
</tr>
<tr>
<td valign="top">

<code><b>sap.ui.comp.smarttable.SmartTable</b></code>

-   When you do a spreadsheet export \(selecting *Export As*\), the *Filter* worksheet now shows the actual column labels instead of the technical names. For more information, see the [Sample](https://ui5.sap.com/#/sample/sap.ui.comp.sample.smarttable/preview).

-   The control now automatically renders the sort icon of the `sortIndicator` property in the <code><code>sap.m.Column</code></code> control if `SmartTable` is used in combination with `sap.m.Table`. The sort icon is also displayed when sorting is applied to or removed from a column in the *Sort* settings of the table personalization. For more information, see the [Sample](https://ui5.sap.com/#/sample/sap.ui.comp.sample.smarttable.mtable/preview). 




</td>
</tr>
<tr>
<td valign="top">

**`sap.ui.core.support.RuleEngineOpaExtension`**

The rule engine OPA extension, which allows Support Assistant checks, has been enhanced with a new assertion. The new `getReportAsFileInFormat` assertion allows storing past history in `window._$files` in a preferred format. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.core.support.RuleEngineOpaExtension) and the [Sample](https://ui5.sap.com/#/sample/sap.ui.core.sample.OpaWithSupportAssistant/preview).



</td>
</tr>
<tr>
<td valign="top">

**`sap.ui.table.AnalyticalTable`, `sap.ui.table.Table`, `sap.ui.table.TreeTable`**

You can now use more values for the `highlight` property. These values are provided by the `sap.ui.core.MessageType` and `sap.ui.core.IndicationColor` enumerations. To define a custom semantic for the highlight color, you can use the new `highlightText` property. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.table.RowSettings) for the `highlight` property.



</td>
</tr>
</table>



<a name="loio27eea38eeb7b40d19d0dfe3ddf513175__section_g3r_bf5_zcb"/>

## SAP Fiori Elements


<table>
<tr>
<td valign="top">

**List Report and Object Page**

The object page has these new features:

-   An object page with only one section and a responsive table in it now shows more rows, so you can utilize the available space.


**Overview Page**

The overview page has these new features or enhancements:

-   Configuring the `requestAtLeast` property of the `PresentationVariant` annotation lets you receive additional dimensions from the back end. For more information, see [Annotations Used in Overview Pages](../06_SAP_Fiori_Elements/annotations-used-in-overview-pages-65731e6.md).

-   Defining the `getCustomMessage` function in the controller file lets you customize success messages \(for no data\) and error scenarios. You can also add an icon for the success scenario. For more information, see [Custom Messages](../06_SAP_Fiori_Elements/custom-messages-b75910f.md).

-   The time series now supports the vertical bullet, stacked column, and scatter charts. For more information, see [Chart Cards Used in Overview Pages](../06_SAP_Fiori_Elements/chart-cards-used-in-overview-pages-68e62ad.md).


**Analytical List Page**

The analytical list page has these new features or enhancements:

-   The new `onBeforeRebindVisualFilterExtension` lets you:

    -   Modify visual filter or parameter values.

    -   Add a custom query parameter to the visual filter call.

    -   Influence the sorting order.


    For more information, see [Creating Custom Filter](../06_SAP_Fiori_Elements/creating-custom-filter-7251ea3.md).

-   The ALP ignores the `UI.Hidden` fields for the selection of visual filters and filterable KPIs. For more information, see [Visual Filters](../06_SAP_Fiori_Elements/visual-filters-1714720.md).




</td>
</tr>
</table>



<a name="loio27eea38eeb7b40d19d0dfe3ddf513175__section_r5v_3h5_zcb"/>

## Demo Kit Improvements


<table>
<tr>
<td valign="top">

**Demo Kit Landing Page**

-   We added a block on the welcome page about the *UI5 Evolution* project. It contains a short description with a link to the interactive documentation page about the project. For more information, see [Best Practices for App Developers](../03_Get-Started/best-practices-for-app-developers-28fcd55.md).

-   We added a live code editor to the Demo Kit welcome page that showcases a simple app. You can edit the code directly and see your changes immediately in the *Result* area.

    ![](images/Demo_Kit_Live_Editor_fbae7e8.png)




</td>
</tr>
<tr>
<td valign="top">

**Settings Dialog in Samples Section**

You can now switch the *Content Density* of the Demo Kit samples to *Condensed*.



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

