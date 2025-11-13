<!-- loio8f6a92b4a9c246f0bbe11cbd1aae1876 -->

# What's New in SAPUI5 1.138

With this release SAPUI5 is upgraded from version 1.136 to 1.138.

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

1.138 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.mdc.Field`, `sap.ui.mdc.ValueHelp` ** 

</td>
<td valign="top">

**`sap.ui.mdc.Field`, `sap.ui.mdc.ValueHelp` **

-   We have improved the message handling for these controls: Based on the binding for the `value` property, error messages for fields related to these controls, especially for currency and unit fields, are now shown directly next to the fields that are affected. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.ui.mdc.Field/sample/sap.ui.mdc.demokit.sample.FieldTypes).

-   We have introduced a *\(Not Selected\)* value for Boolean fields. Using this value, users can filter for all entries without a *yes* or *no* value in a specific field. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.ui.mdc.Field/sample/sap.ui.mdc.demokit.sample.FieldTypes).


<sub>Changed•Control•Info Only•1.138</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-07-10

</td>
</tr>
<tr>
<td valign="top">

1.138 

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

There are currently no major deprecations. For a complete list of all deprecations, see [Deprecated APIs](https://ui5.sap.com/#/api/deprecated).

<sub>Deprecated•Feature•Info Only•1.138</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-07-10

</td>
</tr>
<tr>
<td valign="top">

1.138 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.List`, `sap.m.Table`, `sap.m.Tree`** 

</td>
<td valign="top">

**`sap.m.List`, `sap.m.Table`, `sap.m.Tree`**

To define row actions for list items, you can now use the `sap.m.ListItemAction` control. `ListItemBase` contains the `actions` aggregation that provides an icon, a text, and the type, for example, editable or deletable, for the action, and whether it is visible in the row. The `getItemActionCount` method of `ListBase` defines how many actions can be added to an item. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.ListItemAction%23overview) and the [Sample](https://ui5.sap.com/#/entity/sap.m.List/sample/sap.m.sample.ListActions).

<sub>Changed•Control•Info Only•1.138</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-07-10

</td>
</tr>
<tr>
<td valign="top">

1.138 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.Table`, `sap.ui.mdc.Table`, `sap.ui.table.AnalyticalTable`, `sap.ui.table.Table`, `sap.ui.table.TreeTable`** 

</td>
<td valign="top">

**`sap.m.Table`, `sap.ui.mdc.Table`, `sap.ui.table.AnalyticalTable`, `sap.ui.table.Table`, `sap.ui.table.TreeTable`**

We have provided a built-in, quick resizing of columns in addition to the existing resizing options using drag and drop or keyboard shortcuts. This accessible column resizing is available in the column menu \(*Resize column width \(pixel\)*\). For responsive tables, use the `QuickResize` class to define quick actions for the column resizing. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.table.columnmenu.QuickResize), the [Sample](https://ui5.sap.com/#/entity/sap.ui.table.Table/sample/sap.ui.table.sample.Menus) for `sap.ui.table.Table` \(standalone\), the [Sample](https://ui5.sap.com/#/entity/sap.m.Table/sample/sap.m.sample.TableViewSettingsDialog) for `sap.m.Table` \(standalone\), and the [Sample](https://ui5.sap.com/#/entity/sap.ui.mdc.Table/sample/sap.ui.mdc.demokit.sample.table.TableJson) for `sap.ui.mdc.Table` with responsive tables.

<sub>Changed•Control•Info Only•1.138</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-07-10

</td>
</tr>
<tr>
<td valign="top">

1.138 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.ViewSettingsDialog`** 

</td>
<td valign="top">

**`sap.m.ViewSettingsDialog`**

To enhance the accessibility of the control, screen readers now announce “Reset has reverted all settings to initial state” when a user selects the *Reset* button.

<sub>Changed•Control•Info Only•1.138</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-07-10

</td>
</tr>
<tr>
<td valign="top">

1.138 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**`Icon Explorer`** 

</td>
<td valign="top">

**`Icon Explorer`**

In the *SAP TNT Icons* library \(former *SAP Fiori Tools* library\), icon fonts have been updated to versions 3.8 and 3.7 for the Horizon theme, and to versions 2.13 and 2.12 respectively for older themes. The following new icons have been added to the library:

-   add-project
-   add-issue
-   ai-feature-estimator
-   clean-up
-   navigate-source-code
-   refine-test-data
-   sap-fiori-tools
-   service-estimator

Find the icon that fits your needs via the [Icon Explorer](https://sapui5.hana.ondemand.com/sdk/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).

<sub>Changed•Feature•Info Only•1.138</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-07-10

</td>
</tr>
<tr>
<td valign="top">

1.138 

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

-   When a child item from a collapsed parent item is selected, the parent item now also appears as selected. This is only a visual indication at the level of the parent item.
-   The `press` event is now preventable and new parameters \(`ctrlKey`, `shiftKey`, `altKey`, and `metaKey`\) have been added to enable the handling of specific user interactions, such as control-click, shift-click, and other modified clicks.

<sub>Changed•Control•Info Only•1.138</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-07-10

</td>
</tr>
<tr>
<td valign="top">

1.138 

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

-   The experimental *Header Info Section* feature in an extended card header now includes an `Interactive Status` property that permits supported `ObjectStatus` components to become interactive. This feature is now supported in Card Headers of type Default and Numeric. For more information, see the [Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/headerInfoSection) and the updated [Info Section](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/headers/infoSection) in the Card Explorer.
-   UI Integration Cards of declarative card types List, Object, and Table, now support interactive `ObjectStatus` components.
-   The different types of card interactions are now finalized, are extensively documented in Card Explorer, and include samples. In addition to the existing types of card interactions and the already available interactive elements inside the card, card developers can now choose the new whole card interaction \(experimental\) pattern. For more information and samples, see the new section [Interaction Types](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/features/interactionTypes).
-   Card interaction of type whole card interaction \(experimental\) sets `actions` at the card level within the card's manifest, enabling the entire card area to respond interactively to click or tap events. To achieve whole card interaction, the host environment can either use the `sap.f.GridContainer`, which is already enabled for this scenario, or use a custom layout with specific configuration. For more information, see the new section [Card Interactions](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/integrate/interactions).
-   The `actions` property for the content of an Object Card has been deprecated because whole card interaction is now available.
-   Plain text data can now be sent using the `request` configuration of the `manifest.json` file or can be sent using the `request` method. For more information, see the section [Data Handling](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/features/data) in Card Explorer and the [API Reference](https://ui5.sap.com/#/apisap.ui.integration.widgets.Card%23methods/request).
-   The `experimental` flag is now removed from the `card.getTranslatedText()` method. For more information, see the section [Card Extensions](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/features/extension).

<sub>Changed•Control•Info Only•1.138</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-07-10

</td>
</tr>
<tr>
<td valign="top">

1.138 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.Menu`** 

</td>
<td valign="top">

**`sap.m.Menu`**

We have introduced a new implementation of the `sap.m.Menu` that simplifies its structure, enhances its functionality across device types, and overcomes the previous limitations associated with the complex and challenging-to-maintain former structure of the control. Key improvements include:

-   The `sap.m.Menu` now exclusively uses the `sap.m.ResponsivePopover`, which supports seamless display across desktop, tablet, and mobile devices.
-   The refactored design simplifies the control's maintenance and facilitates the addition of new features, while supporting the control's existing functionality and API capabilities.
-   The `sap.m.Menu` now includes a modular `MenuItem` renderer that allows easy customization of menu items with various appearances and functionality.
-   The inner DOM structure is now consistent across devices. The only difference is that now the `ResponsiveRenderer` renders as `sap.m.Popover` on desktop and tablet devices, whereas on mobile devices, it renders as `sap.m.Dialog`.

For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.Menu) and the [Samples](https://ui5.sap.com/#/entity/sap.m.Menu).

<sub>Changed•Control•Info Only•1.138</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-07-10

</td>
</tr>
<tr>
<td valign="top">

1.138 

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

-   The `$$separate` binding parameter, introduced experimentally with SAPUI5 1.129, is now available and can be used productively. For more information, see [Expensive Navigation Properties in Lists](../04_Essentials/initialization-and-read-requests-fccfb2e.md#loiofccfb2eb41414f0792c165e69a878717__section_ENPL).

-   The binding of properties of open types is now supported.


<sub>Changed•Feature•Info Only•1.138</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-07-10

</td>
</tr>
<tr>
<td valign="top">

1.138 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.richtexteditor.RichTextEditor`** 

</td>
<td valign="top">

**`sap.ui.richtexteditor.RichTextEditor`**

The `RichTextEditor` control now uses TinyMCE v7.7.2 by default for better performance, accessibility, UX, and security in applications. Please note that TinyMCE v6 will be deprecated within the next 6 months, and TinyMCE v5 will be removed in a future SAPUI5 version. To ensure ongoing compatibility and benefit from new features, please upgrade to the latest version. For more information, see [Migrating from TinyMCE 6 to TinyMCE 7](https://www.tiny.cloud/docs/tinymce/latest/migration-from-6x/).

<sub>Changed•Control•Info Only•1.138</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-07-10

</td>
</tr>
<tr>
<td valign="top">

1.138 

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

-   We have provided a built-in, quick resizing of columns in addition to the existing resizing options using drag and drop or keyboard shortcuts. This accessible column resizing is available in the column menu \(*Resize column width \(pixel\)*\). For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.ui.comp.smarttable.SmartTable/sample/sap.ui.comp.sample.smarttable.mtable).

-   An illustrated message is now shown if no data is available in the table or no columns have been made visible. To make the existing messages available, use the `noData` aggregation and the `sap.m.IllustratedMessage` control. Otherwise, the messages can also be replaced with custom illustrated messages. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smarttable.SmartTable%23aggregations) for the `noData` aggregation and the [Sample](https://ui5.sap.com/#/entity/sap.ui.comp.smarttable.SmartTable/sample/sap.ui.comp.sample.smarttable.smartTableNoDataIllustration).


<sub>Changed•Control•Info Only•1.138</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-07-10

</td>
</tr>
<tr>
<td valign="top">

1.138 

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

-   After confirming the 412 warnings, repeated messages from the back end are suppressed and no longer shown on the UI. For more information, see [Confirmation Popups](../06_SAP_Fiori_Elements/confirmation-popups-9a53662.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.138</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-07-10

</td>
</tr>
<tr>
<td valign="top">

1.138 

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

-   Unfilled currency fields in list report and object page now correctly show as empty.

-   You can now configure the threshold for the number of rows initially loaded in a table. For more information, see [Adapting the UI](../06_SAP_Fiori_Elements/adapting-the-ui-59bfd31.md).

-   You can now freeze columns in the *Column Settings* dialog and disable column freezing by using the `disableColumnFreeze` parameter. For more information, see [Tables](../06_SAP_Fiori_Elements/tables-c0f6592.md).

-   You can now use the `getCount()` method to retrieve the number of rows loaded in a table and display the number in a tile or any data field. For more information, see [Influencing the Request Dynamically](../06_SAP_Fiori_Elements/influencing-the-request-dynamically-2cc6c03.md).

-   You can now set multi-input fields to read-only or mandatory. For more information, see [Using the Multi-Input Field on the Object Page](../06_SAP_Fiori_Elements/using-the-multi-input-field-on-the-object-page-04ff5b1.md).

-   You can now use the `determineContextNavigationType` method to ensure that the paginator buttons behave correctly when some records in the table on the object page are configured for either external navigation or no navigation to the detail view. For more information, see [Example: Replacing Standard Navigation in a Responsive Table on the Object Page](../06_SAP_Fiori_Elements/example-replacing-standard-navigation-in-a-responsive-table-on-the-object-page-b20dc7a.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.138</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-07-10

</td>
</tr>
<tr>
<td valign="top">

1.138 

</td>
<td valign="top">

New 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**Demo Kit: New UXC Integration Demo App** 

</td>
<td valign="top">

**Demo Kit: New UXC Integration Demo App**

We've introduced a new UXC Integration demo app. It illustrates how to seamlessly integrate UI5 Web Components into SAPUI5 applications, enabling developers to align their user interface with the latest UX design recommendations. For more information, see the [Demo Apps](https://ui5.sap.com/#/demoapps/). 

<sub>Changed•Control•Info Only•1.138</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-07-10

</td>
</tr>
<tr>
<td valign="top">

1.138 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**Demo Kit: Updated HelloWorld TypeScript Sample** 

</td>
<td valign="top">

**Demo Kit: Updated TypeScript Sample and a New HelloWorld TypeScript Demo App**

We've updated the TypeScript sample and added a new HelloWorld TypeScript demo app to illustrate a TypeScript setup for developing UI5 applications. For more information, see the [Demo Apps](https://ui5.sap.com/#/demoapps/) and the [Sample](https://ui5.sap.com/#/entity/sap.m.sample.TsHelloWorld/sample/sap.m.sample.TsHelloWorld).

<sub>Changed•Control•Info Only•1.138</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-07-10

</td>
</tr>
</table>

**Related Information**  


[What's New in SAPUI5 1.141](what-s-new-in-sapui5-1-141-a7ed66d.md "With this release SAPUI5 is upgraded from version 1.140 to 1.141.")

[What's New in SAPUI5 1.140](what-s-new-in-sapui5-1-140-26a106c.md "With this release SAPUI5 is upgraded from version 1.139 to 1.140.")

[What's New in SAPUI5 1.139](what-s-new-in-sapui5-1-139-e10db71.md "With this release SAPUI5 is upgraded from version 1.138 to 1.139.")

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

