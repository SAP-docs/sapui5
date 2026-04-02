<!-- loio92ed100c9bef4f24b62e0419d2ea22bc -->

# What's New in SAPUI5 1.142

With this release SAPUI5 is upgraded from version 1.141 to 1.142.

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

1.142 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.Tokenizer`** 

</td>
<td valign="top">

**`sap.m.Tokenizer`**

-   The `Tokenizer` control can now be used in forms. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.Tokenizer%23controlProperties).
-   The control now includes multi-line display and a *Clear All* button, enhancing user experience by allowing tokens to wrap across multiple lines and enabling one-click token removal. This facilitates efficient handling of many tokens, improving app visibility and usability. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.Tokenizer%23overview) and the [Sample](https://ui5.sap.com/#/entity/sap.m.Tokenizer/sample/sap.m.sample.TokenizerMultiLine).

<sub>Changed•Control•Info Only•1.142</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-10-30

</td>
</tr>
<tr>
<td valign="top">

1.142 

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

-   The `SmartChart` now incorporates `sap.m.IllustratedMessage` to visually indicate scenarios where no data is available, such as before a search, after applying filters, or when no data is received from the back end. This enhancement improves user experience by providing clear visual cues and customizable messages, making it easier to understand the state of the data and take appropriate actions. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smartchart.SmartChart) and the [Sample](https://ui5.sap.com/#/entity/sap.ui.comp.smartchart.SmartChart/sample/sap.ui.comp.sample.smartchart.general).

-   We have added an FAQ section to the `SmartChart` control API documentation to answer common questions and clarify usage patterns. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smartchart.SmartChart%23faq).

<sub>Changed•Control•Info Only•1.142</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-10-30

</td>
</tr>
<tr>
<td valign="top">

1.142 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.plugins.UploadSetwithTable`** 

</td>
<td valign="top">

**`sap.m.plugins.UploadSetwithTable`**

We've added the `itemRenameCanceled` event to `UploadSetwithTable`. This event is triggered when you cancel the renaming action on a document.

For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.plugins.UploadSetwithTable) and the [Sample](https://ui5.sap.com/#/entity/sap.m.plugins.UploadSetwithTable/sample/sap.m.sample.UploadSetwithTablePlugin.ResponsiveTableSimple).

<sub>Changed•Control•Info Only•1.142</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-10-30

</td>
</tr>
<tr>
<td valign="top">

1.142 

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

-   You can now avoid default navigation to prevent unintended navigation after executing an action on an object page table. For more information, see [Configuring Internal Navigation](../06_SAP_Fiori_Elements/configuring-internal-navigation-2c65f07.md).

-   We now show an illustrated message if there is no data in a table. For more information, see [Displaying An Illustrated Message When No Data Is Found](../06_SAP_Fiori_Elements/displaying-an-illustrated-message-when-no-data-is-found-f9925b6.md).

-   We've added more keys that can be overridden by application developers using the custom i18n file approach. You can now override the following keys:

    -   `NOITEMS_LR_SMARTTABLE_ILLUSTRATION_TITLE`

    -   `NOITEMS_LR_SMARTTABLE_ILLUSTRATION_DESCRIPTION`

    -   `NOITEMS_LR_SMARTTABLE_WITH_FILTER_ILLUSTRATION_TITLE`

    -   `NOITEMS_LR_SMARTTABLE_WITH_FILTE_ILLUSTRATION_DESCRIPTION`

    -   `NOITEMS_MULTIVIEW_LR_SMARTTABLE_WITH_FILTER_ILLUSTRATION_TITLE`

    -   `NOITEMS_MULTIVIEW_LR_SMARTTABLE_WITH_FILTER_ILLUSTRATION_DESCRIPTION`

    -   `NOITEMS_SMARTTABLE_ILLUSTRATION_TITLE`

    -   `NOITEMS_SMARTTABLE_ILLUSTRATION_DESCRIPTION`

    -   `NOITEMS_SMARTTABLE_WITH_FILTER_ILLUSTRATION_TITLE`

    -   `NOITEMS_SMARTTABLE_WITH_FILTER_ILLUSTRATION_DESCRIPTION`

    -   `NOITEMS_SMARTTABLE_WITH_FILTER_FOR_SEGMENTEDBUTTON_ILLUSTRATION_TITLE`

    -   `NOITEMS_SMARTTABLE_WITH_FILTER_FOR_SEGMENTEDBUTTON_ILLUSTRATION_DESCRIPTION`


    For more information, see [Localization of UI Texts](../06_SAP_Fiori_Elements/localization-of-ui-texts-b8cb649.md).

-   Visibility of the *Delete* button on subobject page tables is now controlled by `DeleteRestriction` through `NavigationRestriction`. For more information, see [Adding Actions to Tables](../06_SAP_Fiori_Elements/adding-actions-to-tables-b623e0b.md).

-   You can now configure the settings of related apps using the extension controller. For more information, see [Enabling the Related Apps Button](../06_SAP_Fiori_Elements/enabling-the-related-apps-button-8dcfe2e.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.142</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-10-30

</td>
</tr>
<tr>
<td valign="top">

1.142 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

SAP Fiori Elements 

</td>
<td valign="top">

**SAP Fiori Elements for OData V2 and SAP Fiori Elements for OData V4** 

</td>
<td valign="top">

**SAP Fiori Elements for OData V2 and SAP Fiori Elements for OData V4**

The following changes and new features are available for SAP Fiori elements for OData V2 and SAP Fiori elements for OData V4:

-   We have deprecated the fixed card layout on overview pages; use the resizable card layout instead. For more information, see [Configuring the Manifest for the Overview Page](../06_SAP_Fiori_Elements/configuring-the-manifest-for-the-overview-page-f194b41.md).

-   You can now configure the granularity in time series charts of analytical cards. Use the `chartProperties.timeAxis.levels` setting at both chart level and tab level to display data accurately. For more information, see [Time Series Chart](../06_SAP_Fiori_Elements/time-series-chart-784d317.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.142</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-10-30

</td>
</tr>
<tr>
<td valign="top">

1.142 

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

-   You can now use the `ConditionalSwitch` building block. Note that this building block is an experimental feature and subject to revisions. For more information, see [The ConditionalSwitch Building Block](../06_SAP_Fiori_Elements/the-conditionalswitch-building-block-ba06542.md).

-   We've added more keys that can be overridden by application developers using the custom i18n file approach. You can now override the following keys:

    -   `T_ILLUSTRATED_MESSAGE_TITLE_BEFORESEARCH`

    -   `T_ILLUSTRATED_MESSAGE_TITLE_NOSEARCHRESULTS`

    -   `T_ILLUSTRATED_MESSAGE_TITLE_NODATA`


    For more information, see [Localization of UI Texts](../06_SAP_Fiori_Elements/localization-of-ui-texts-b8cb649.md).

-   We now support custom message strips on an object page. For information about the `Field` API, see the [API Reference](https://ui5.sap.com/#/api/sap.m.MessageStrip).

-   We’re introducing the SAP Fiori development portal to offer guidance to developers when creating SAP Fiori elements for OData V4 apps. It comprises the following features:

    -   The new structure highlights our building blocks, which are the cornerstone of every SAP Fiori elements for OData V4 application. They provide maximum flexibility for creating and extending SAP Fiori apps. At the same time our standard floorplans with predefined layouts are available, as they offer the most efficient approach to building SAP Fiori elements apps.

    -   Our capabilities now provide the following information:

        -   Short explanations of the features

        -   The implementation steps

        -   Links to more detailed documentation and code

        -   A live preview of how your code will look in the app



    The SAP Fiori development portal replaces the previously known flexible programming model explorer. For more information, see the SAP Fiori development portal at [Introduction](https://ui5.sap.com/test-resources/sap/fe/core/fpmExplorer/index.html#/topic/introduction).

-   We've renamed the `group` property, which was introduced with SAPUI5 1.139, to `overflowGroup` property, to provide a more meaningful name.

-   We now determine the default table type based on the characteristics of the entity set. For more information, see [Tables](../06_SAP_Fiori_Elements/tables-c0f6592.md).

-   You can now add semantically connected fields to a table. For more information, see [Adding ConnectedFields to a Table](../06_SAP_Fiori_Elements/adding-connectedfields-to-a-table-4a275ce.md).

-   We've simplified the browser page titles for object pages and subobject pages.

-   You can now turn off 412 confirmation popups by disabling strict handling. For more information, see [Confirmation Popups](../06_SAP_Fiori_Elements/confirmation-popups-9a53662.md).

-   You can now use the `Table` API to select or deselect line items in a table. For more information, see [Interacting with a Table Using the API](../06_SAP_Fiori_Elements/interacting-with-a-table-using-the-api-fa9defb.md).

-   You can now show a separator before groups of actions in a table toolbar. For more information, see [Actions](../06_SAP_Fiori_Elements/actions-cbf16c5.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.142</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-10-30

</td>
</tr>
<tr>
<td valign="top">

1.142 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.table.AnalyticalTable`, `sap.ui.table.Table`, `sap.ui.table.TreeTable`** 

</td>
<td valign="top">

**`sap.ui.table.AnalyticalTable`, `sap.ui.table.Table`, `sap.ui.table.TreeTable`**

We have enhanced the `RowAction` functionality in `sap.ui.table` to display up to three actions, with the `Navigation` action always displayed on the far right. If more than three actions have been defined, an overflow menu is shown. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.table.RowAction) and the [Sample](https://ui5.sap.com/#/entity/sap.ui.table.Table/sample/sap.ui.table.sample.RowAction).

<sub>Changed•Control•Info Only•1.142</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-10-30

</td>
</tr>
<tr>
<td valign="top">

1.142 

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

You can now use the `Edm.Decimal` type with a new `scale="floating"` option, which is necessary for working with ABAP DECFLOAT types. The OData V4 model supports OData V4.01 services within this scope. For more information, see [Upgrading Your OData Model](../04_Essentials/upgrading-your-odata-model-cda632b.md)and the `scale` parameter in the [API Reference](https://ui5.sap.com/#/api/sap.ui.model.odata.type.Decimal%23constructor).

<sub>Changed•Feature•Info Only•1.142</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-10-30

</td>
</tr>
<tr>
<td valign="top">

1.142 

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

The screen reader announcement for buttons styled as `Emphasized` has been updated to Default Action, improving accessibility for users relying on assistive technologies. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.m.Button/sample/sap.m.sample.Button).

<sub>Changed•Control•Info Only•1.142</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-10-30

</td>
</tr>
<tr>
<td valign="top">

1.142 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**Demo Kit: New AI Integration Demo App** 

</td>
<td valign="top">

**Demo Kit: New AI Integration Demo App**

We've introduced a new AI Integration demo app. It illustrates how to seamlessly integrate UI5 Web Components into the OpenUI5 framework, enabling developers to test AI use cases. For more information, see the [Demo Apps](https://ui5.sap.com/#/demoapps/).

<sub>Changed•Feature•Info Only•1.142</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-10-30

</td>
</tr>
<tr>
<td valign="top">

1.142 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.SegmentedButton`** 

</td>
<td valign="top">

**`sap.m.SegmentedButton`**

The new `contentMode` property enables flexible width behavior with values of `ContentFit` or `EqualSized`. These options offer greater control over button sizing, allowing for either content-based or uniform widths, thereby enhancing the design and consistency of the user interface. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.SegmentedButton).

<sub>Changed•Control•Info Only•1.142</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-10-30

</td>
</tr>
<tr>
<td valign="top">

1.142 

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

The new `dateTimeWithTimezone` formatter allows datetime values to be converted to different time zones, enhancing the flexibility and accuracy of time-related data across various regions. This feature is useful for applications that require precise time zone adjustments for global users. For more information, see the [Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/dateAndTime/dateAndTimeWithTimezone) and the [Documentation](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/formatters/dateAndTime) in the Card Explorer.

<sub>Changed•Control•Info Only•1.142</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-10-30

</td>
</tr>
<tr>
<td valign="top">

1.142 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.Carousel`** 

</td>
<td valign="top">

**`sap.m.Carousel`**

Accessibility attributes and keyboard navigation handling have been updated to improve user experience, including changes to roles and rendering adaptations. These enhancements ensure better navigation and interaction for users relying on assistive technologies. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.m.Carousel/sample/sap.m.sample.CarouselWithMorePages). 

<sub>Changed•Control•Info Only•1.142</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-10-30

</td>
</tr>
<tr>
<td valign="top">

1.142 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**Document Export** 

</td>
<td valign="top">

**Document Export**

We have introduced a new feature to export data in a CSV format from the `sap.ui.export` library, offering a secure and configurable CSV export capability. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.export.CommaSeparatedValues) and the [Sample](https://ui5.sap.com/#/entity/sap.ui.export.sample.csvexport).

<sub>Changed•Feature•Info Only•1.142</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-10-30

</td>
</tr>
</table>

**Related Information**  


[What's New in SAPUI5 1.144](what-s-new-in-sapui5-1-144-ad1c805.md "With this release SAPUI5 is upgraded from version 1.143 to 1.144.")

[What's New in SAPUI5 1.143](what-s-new-in-sapui5-1-143-ad08c66.md "With this release SAPUI5 is upgraded from version 1.142 to 1.143.")

[What's New in SAPUI5 1.141](what-s-new-in-sapui5-1-141-a7ed66d.md "With this release SAPUI5 is upgraded from version 1.140 to 1.141.")

[What's New in SAPUI5 1.140](what-s-new-in-sapui5-1-140-26a106c.md "With this release SAPUI5 is upgraded from version 1.139 to 1.140.")

[What's New in SAPUI5 1.139](what-s-new-in-sapui5-1-139-e10db71.md "With this release SAPUI5 is upgraded from version 1.138 to 1.139.")

[What's New in SAPUI5 1.138](what-s-new-in-sapui5-1-138-8f6a92b.md "With this release SAPUI5 is upgraded from version 1.136 to 1.138.")

[What's New in SAPUI5 1.136](what-s-new-in-sapui5-1-136-a82754d.md "With this release SAPUI5 is upgraded from version 1.135 to 1.136.")

[What's New in SAPUI5 1.135](what-s-new-in-sapui5-1-135-93d7630.md "With this release SAPUI5 is upgraded from version 1.134 to 1.135.")

[What's New in SAPUI5 1.134](what-s-new-in-sapui5-1-134-c512d71.md "With this release SAPUI5 is upgraded from version 1.133 to 1.134.")

[What's New in SAPUI5 1.133](what-s-new-in-sapui5-1-133-86d7605.md "With this release SAPUI5 is upgraded from version 1.132 to 1.133.")

[What's New in SAPUI5 1.132](what-s-new-in-sapui5-1-132-bd2e61f.md "With this release SAPUI5 is upgraded from version 1.131 to 1.132.")

[What's New in SAPUI5 1.131](what-s-new-in-sapui5-1-131-7d24d94.md "With this release SAPUI5 is upgraded from version 1.130 to 1.131.")

[What's New in SAPUI5 1.130](what-s-new-in-sapui5-1-130-85609d4.md "With this release SAPUI5 is upgraded from version 1.129 to 1.130.")

[What's New in SAPUI5 1.129](what-s-new-in-sapui5-1-129-d22b8af.md "With this release SAPUI5 is upgraded from version 1.128 to 1.129.")

[What's New in SAPUI5 1.128](what-s-new-in-sapui5-1-128-1f76220.md "With this release SAPUI5 is upgraded from version 1.127 to 1.128.")

[What's New in SAPUI5 1.127](what-s-new-in-sapui5-1-127-e5e1317.md "With this release SAPUI5 is upgraded from version 1.126 to 1.127.")

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

