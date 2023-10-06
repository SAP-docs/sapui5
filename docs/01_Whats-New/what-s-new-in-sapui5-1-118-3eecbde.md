<!-- loio3eecbdea5f644f0898079d7e24da9d18 -->

# What's New in SAPUI5 1.118

With this release SAPUI5 is upgraded from version 1.117 to 1.118.

> ### Tip:  
> If you want to do a search across all versions of the What's New content, you can also find it in the [SAPUI5 What's New viewer](https://help.sap.com/whats-new/67f60363b57f4ac0b23efd17fa192d60).

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

1.118 



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

-   We now evaluate the `com.sap.vocabularies.Common.v1.IsTimezone` annotation for the `SmartTable` control. The translated time zone is diplayed rather than the IANA ID. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smarttable.SmartTable%23annotations/IsTimezone) and the [Sample](https://ui5.sap.com/#/entity/sap.ui.comp.smarttable.SmartTable/sample/sap.ui.comp.sample.smarttable).

-   You can now use quick grouping and quick sorting with multiple properties \(for example, ID and description of a supplier\) in the column header menu of responsive tables. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.ui.comp.smarttable.SmartTable/sample/sap.ui.comp.sample.smarttable.smartMTableWithCriticality).


<sub>Changed•Control•Info Only•1.118</sub>



</td>
<td valign="top">

Info Only 



</td>
<td valign="top">

2023-09-07



</td>
</tr>
<tr>
<td valign="top">

1.118 



</td>
<td valign="top">

Changed 



</td>
<td valign="top">

Control 



</td>
<td valign="top">

**`sap.ui.comp.smartchart.SmartChart`** 



</td>
<td valign="top">

**`sap.ui.comp.smartchart.SmartChart`**

-   You can now display time-zone-related information for the `SmartChart` control. We have introduced the `com.sap.vocabularies.Common.v1.Timezone` annotation for this control. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smartchart.SmartChart%23annotations/timezone) and the [Sample](https://ui5.sap.com/#/entity/sap.ui.comp.smartchart.SmartChart/sample/sap.ui.comp.sample.smartchart.timezone).

-   To display dates in a standardized format, we now support a number of additional calendar and fiscal OData V4 annotations.

    The following annotations are now supported:

    -   `com.sap.vocabularies.Common.v1.IsCalendarYear`

    -   `com.sap.vocabularies.Common.v1.IsCalendarWeek`

    -   `com.sap.vocabularies.Common.v1.IsCalendarMonth`

    -   `com.sap.vocabularies.Common.v1.IsCalendarQuarter`

    -   `com.sap.vocabularies.Common.v1.IsCalendarYearQuarter`

    -   `com.sap.vocabularies.Common.v1.IsCalendarYearMonth`

    -   `com.sap.vocabularies.Common.v1.IsCalendarYearWeek`

    -   `com.sap.vocabularies.Common.v1.IsFiscalYear`

    -   `com.sap.vocabularies.Common.v1.IsFiscalPeriod` \(not supported for time series\)
    -   `com.sap.vocabularies.Common.v1.IsFiscalQuarter` \(not supported for time series\)
    -   `com.sap.vocabularies.Common.v1.IsFiscalWeek` \(not supported for time series\)
    -   `com.sap.vocabularies.Common.v1.IsFiscalYearPeriod`
    -   `com.sap.vocabularies.Common.v1.IsFiscalYearQuarter` \(not supported for time series\)
    -   `com.sap.vocabularies.Common.v1.IsFiscalYearWeek` \(not supported for time series\)


For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smartchart.SmartChart%23annotations) for the annotations, the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smartchart.SmartChart%23methods/getActivateTimeSeries) for the `ActivateTimeSeries` property, and the [Samples](https://ui5.sap.com/#/entity/sap.ui.comp.smartchart.SmartChart) for the calendar and fiscal annotations.

<sub>Changed•Control•Info Only•1.118</sub>



</td>
<td valign="top">

Info Only 



</td>
<td valign="top">

2023-09-07



</td>
</tr>
<tr>
<td valign="top">

1.118 



</td>
<td valign="top">

Changed 



</td>
<td valign="top">

SAP Fiori Elements 



</td>
<td valign="top">

**SAP Fiori elements for OData V2 and SAP Fiori elements for OData V4** 



</td>
<td valign="top">

**SAP Fiori elements for OData V2 and SAP Fiori elements for OData V4**

The following changes and new features are available for SAP Fiori elements for OData V2 and SAP Fiori elements for OData V4:

-   Mandatory parameters are now supported in empty row mode. For more information, see [Enabling Inline Creation Mode or Empty Row Mode for Table Entries](../06_SAP_Fiori_Elements/enabling-inline-creation-mode-or-empty-row-mode-for-table-entries-cfb04f0.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.118</sub>



</td>
<td valign="top">

Info Only 



</td>
<td valign="top">

2023-09-07



</td>
</tr>
<tr>
<td valign="top">

1.118 



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

-   In empty row mode, the `POST` request for newly created rows is sent after an interval of 20 seconds, unless an immediate `POST` request is necessary. For more information, see [Enabling Inline Creation Mode or Empty Row Mode for Table Entries](../06_SAP_Fiori_Elements/enabling-inline-creation-mode-or-empty-row-mode-for-table-entries-cfb04f0.md).

-   We now ensure that the side effects in object page tables are triggered as soon as a value is set in the value help. For more information, see [Side Effects](../06_SAP_Fiori_Elements/side-effects-18b17bd.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.118</sub>



</td>
<td valign="top">

Info Only 



</td>
<td valign="top">

2023-09-07



</td>
</tr>
<tr>
<td valign="top">

1.118 



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

-   Overview page applications can now specify what data should be loaded automatically when loading the app. For more information, see [Descriptor Configuration for the Overview Page](../06_SAP_Fiori_Elements/descriptor-configuration-for-the-overview-page-f194b41.md).

-   We've replaced a key that application developers can override using the custom i18n file approach. If you're using the `T_ANNOTATION_HELPER_DEFAULT_OBJECT_PAGE_HEADER_TITLE_NO_HEADER_INFO` key in the application resource bundle, replace it with the new key. For more information, see [Localization of UI Texts](../06_SAP_Fiori_Elements/localization-of-ui-texts-b8cb649.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.118</sub>



</td>
<td valign="top">

Info Only 



</td>
<td valign="top">

2023-09-07



</td>
</tr>
<tr>
<td valign="top">

1.118 



</td>
<td valign="top">

Changed 



</td>
<td valign="top">

Control 



</td>
<td valign="top">

**`sap.m.DynamicDateRange`** 



</td>
<td valign="top">

**`sap.m.DynamicDateRange`**

With the new `addGroup` method, you can now easily create custom groups and custom-group headers for those groups. In addition, with the new `setGroupHeader` method, you can change the group header of a custom group. For more information, see the [DynamicDateRange API Reference](https://ui5.sap.com/#/api/sap.m.DynamicDateRange/methods/addGroup), and the [DynamicDateRangeGroups enumeration](https://ui5.sap.com/#/api/sap.m.DynamicDateRangeGroups).

<sub>Changed•Control•Info Only•1.118</sub>



</td>
<td valign="top">

Info Only 



</td>
<td valign="top">

2023-09-07



</td>
</tr>
<tr>
<td valign="top">

1.118 



</td>
<td valign="top">

Changed 



</td>
<td valign="top">

Control 



</td>
<td valign="top">

**`sap.m.SinglePlanningCalendar`** 



</td>
<td valign="top">

**`sap.m.SinglePlanningCalendar`**

The control now displays the row-header images using size S avatars with a circle shape. The UX guidance is to use circle shapes for people \(default for the control\), and squares for other business images. You can easily change the shape using the new `iconShape` property. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.PlanningCalendar).

<sub>Changed•Control•Info Only•1.118</sub>



</td>
<td valign="top">

Info Only 



</td>
<td valign="top">

2023-09-07



</td>
</tr>
<tr>
<td valign="top">

1.118 



</td>
<td valign="top">

Changed 



</td>
<td valign="top">

User Documentation 



</td>
<td valign="top">

**`sap.ui.integration.widgets.Card`** 



</td>
<td valign="top">

**`sap.ui.integration.widgets.Card`**

We have added documentation and a sample that demonstrate how you can bundle all the necessary files needed for a Component card using the UI5 Tooling. With this card type, card developers can expose a whole UI5 Component as content for the card. For more information, see the [Component Preload](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/bundle/componentPreload) section and the [Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/component/componentPreload) in the Card Explorer.

<sub>Changed•User Documentation•Info Only•1.118</sub>



</td>
<td valign="top">

Info Only 



</td>
<td valign="top">

2023-09-07



</td>
</tr>
<tr>
<td valign="top">

1.118 



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

-   **Experimental:** You can now create and delete nodes in recursive hierarchies. Note that these experimental features must not be used in productive applications yet.

    For more information, see the API Reference for [`ODataListBinding#create`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding%23methods/create) and [`Context#delete`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context%23methods/delete).

-   We now support the provision of a nested single entity in a transient entity.

    For more information, see *Nested Single Entity* in [Deep Create](../04_Essentials/creating-an-entity-c9723f8.md#loioc9723f8265f644af91c0ed941e114d46__section_DCR).


<sub>Changed•Feature•Info Only•1.118</sub>



</td>
<td valign="top">

Info Only 



</td>
<td valign="top">

2023-09-07



</td>
</tr>
<tr>
<td valign="top">

1.118 



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

-   The control now supports smart links in semantically connected fields in a smart form. In display mode, individual smart links are offered for each relevant field of the semantically connected fields.

-   We have enabled the control to support the usage of analytical parameters in the value help dialog. Analytical parameters are values that are passed to the back end and that influences the way the back end processes the incoming request. Typically, those parameters are used to normalize entries that have different units of measure.


<sub>Changed•Control•Info Only•1.118</sub>



</td>
<td valign="top">

Info Only 



</td>
<td valign="top">

2023-09-07



</td>
</tr>
<tr>
<td valign="top">

1.118 



</td>
<td valign="top">

Changed 



</td>
<td valign="top">

Control 



</td>
<td valign="top">

**`sap.ui.comp.smartfilterbar.SmartFilterBar` and `sap.m.P13nFilterPanel`** 



</td>
<td valign="top">

**`sap.ui.comp.smartfilterbar.SmartFilterBar` and `sap.m.P13nFilterPanel`**

We have improved the user experience in cases when the user filters on values that are represented in different currencies or different units of measure \(UoM\). In these cases, we now show a warning message, when the currency or UoM value is not specified in the filters.

<sub>Changed•Control•Info Only•1.118</sub>



</td>
<td valign="top">

Info Only 



</td>
<td valign="top">

2023-09-07



</td>
</tr>
<tr>
<td valign="top">

1.118 



</td>
<td valign="top">

Changed 



</td>
<td valign="top">

Control 



</td>
<td valign="top">

**`sap.ui.comp.valuehelpdialog.ValueHelpDialog`** 



</td>
<td valign="top">

**`sap.ui.comp.valuehelpdialog.ValueHelpDialog`**

Users can now copy multi-selection fields from the table of the dialog to the clipboard. This feature is supported only for the multi-selection fields that are created internally from smart controls and is available only for the grid table.

<sub>Changed•Control•Info Only•1.118</sub>



</td>
<td valign="top">

Info Only 



</td>
<td valign="top">

2023-09-07



</td>
</tr>
<tr>
<td valign="top">

1.118 



</td>
<td valign="top">

Changed 



</td>
<td valign="top">

Control 



</td>
<td valign="top">

**`sap.m.MessageToast`** 



</td>
<td valign="top">

**`sap.m.MessageToast`**

When a message toast opens, users can now move focus to the message using the following combination: [Ctrl/Command\] + [Shift\] + [M\] .

This allows them to keep the message on the screen for as long as they need.

<sub>Changed•Control•Info Only•1.118</sub>



</td>
<td valign="top">

Info Only 



</td>
<td valign="top">

2023-09-07



</td>
</tr>
<tr>
<td valign="top">

1.118 



</td>
<td valign="top">

Changed 



</td>
<td valign="top">

Control 



</td>
<td valign="top">

**`sap.ui.mdc.Table`** 



</td>
<td valign="top">

**`sap.ui.mdc.Table` \(experimental\)**

You can now use the context menu also for this control. The `contextMenu` aggregation and related `beforeOpenContextMenu` event have been added to the table.

<sub>Changed•Control•Info Only•1.118</sub>



</td>
<td valign="top">

Info Only 



</td>
<td valign="top">

2023-09-07



</td>
</tr>
<tr>
<td valign="top">

1.118 



</td>
<td valign="top">

New 



</td>
<td valign="top">

Feature 



</td>
<td valign="top">

**Sample for `sap.ui.mdc` library** 



</td>
<td valign="top">

**Sample for `sap.ui.mdc` library \(experimental\)**

You can now test the field and value help features of the \(experimental\) `sap.ui.mdc` library in a sample. To find the sample for this library in the Demo Kit, go to *Samples* and select MDC Overview. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.ui.mdc/sample/sap.ui.mdc.demokit.sample.FieldValueHelpJson).

<sub>New•Feature•Info Only•1.118</sub>



</td>
<td valign="top">

Info Only 



</td>
<td valign="top">

2023-09-07



</td>
</tr>
<tr>
<td valign="top">

1.118 



</td>
<td valign="top">

Deprecated 



</td>
<td valign="top">

Feature 



</td>
<td valign="top">

**Deprecations** 



</td>
<td valign="top">

**Deprecations**

We have deprecated the following entities for `sap.ui.table*`:

-   `grouped` property of `Column`

-   `enableGrouping` property

-   `groupBy` association

-   `group` event


We have introduced the `group` event in `AnalyticalTable` and the `grouped` property in `AnalyticalColumn`.

<sub>Deprecated•Feature•Info Only•1.118</sub>



</td>
<td valign="top">

Info Only 



</td>
<td valign="top">

2023-09-07



</td>
</tr>
<tr>
<td valign="top">

1.118 



</td>
<td valign="top">

Changed 



</td>
<td valign="top">

Control 



</td>
<td valign="top">

**`sap.m.Table`** 



</td>
<td valign="top">

**`sap.m.Table`, `sap.m.List`, `sap.m.Tree`**

To improve accessibility, we have completely reworked the screen reader support and keyboard handling of the `sap.m.Table` control. The row-based navigation stays the same, but cell-based navigation is now also possible, similar to the grid table. We have also improved other accessibility features of the table, for example, the *Delete* and *Edit* buttons for row actions have become accessible via keyboard. These features have not only been changed for the responsive table, but partly also for `sap.m.List`. Also, the ARIA role has been adapted. We have adapted the related documentation. For more information , see [Accessibility for End Users](https://help.sap.com/viewer/bc5a64aac808463baa95b4230f221716/1.116/en-US).

<sub>Changed•Control•Info Only•1.118</sub>



</td>
<td valign="top">

Info Only 



</td>
<td valign="top">

2023-09-07



</td>
</tr>
</table>

