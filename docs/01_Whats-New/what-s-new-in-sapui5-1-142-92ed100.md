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

-   You can now configure the granularity in time series charts of analytical cards. Use the `chartProperties.timeAxis.levels` setting at both chart level and tab level to display data accurately. For more information, see [Time Series Chart Card](../06_SAP_Fiori_Elements/time-series-chart-card-784d317.md).


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

You can now use the `Edm.Decimal` type with a new `scale="floating"` option, which is necessary for working with ABAP DECFLOAT types. The OData V4 model supports OData V4.01 services within this scope. For more information, see [Transition to OData V4.01](../04_Essentials/transition-to-odata-v4-01-cda632b.md)and the `scale` parameter in the [API Reference](https://ui5.sap.com/#/api/sap.ui.model.odata.type.Decimal%23constructor).

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

