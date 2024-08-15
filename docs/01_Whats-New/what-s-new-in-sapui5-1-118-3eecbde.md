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

**Related Information**  


[What's New in SAPUI5 1.124](what-s-new-in-sapui5-1-124-7f77c3f.md "With this release SAPUI5 is upgraded from version 1.123 to 1.124.")

[What's New in SAPUI5 1.123](what-s-new-in-sapui5-1-123-9d00ac7.md "With this release SAPUI5 is upgraded from version 1.122 to 1.123.")

[What's New in SAPUI5 1.122](what-s-new-in-sapui5-1-122-5d078da.md "With this release SAPUI5 is upgraded from version 1.121 to 1.122.")

[What's New in SAPUI5 1.121](what-s-new-in-sapui5-1-121-91a4a2f.md "With this release SAPUI5 is upgraded from version 1.120 to 1.121.")

[What's New in SAPUI5 1.120](what-s-new-in-sapui5-1-120-2359b63.md "With this release SAPUI5 is upgraded from version 1.119 to 1.120.")

[What's New in SAPUI5 1.119](what-s-new-in-sapui5-1-119-0b1903a.md "With this release SAPUI5 is upgraded from version 1.118 to 1.119.")

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

