<!-- loio86d76053ea2e40f190773732781824e9 -->

# What's New in SAPUI5 1.133

With this release SAPUI5 is upgraded from version 1.132 to 1.133.

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

1.133 

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

<sub>Deprecated•Feature•Info Only•1.133</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-02-20

</td>
</tr>
<tr>
<td valign="top">

1.133 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.table.columnmenu*`** 

</td>
<td valign="top">

**`sap.m.table.columnmenu.Menu`**

We have improved the design and interaction of the column menu for all tables. The redesigned *Column settings* menu is now implemented in `sap.ui.mdc.Table` and in `sap.ui.comp.smarttable.SmartTable` by default. We have adapted the menu to make it more accessible and provided a leaner design by using icons for the quick actions instead of buttons. In addition, there is now a *Table Settings* button taking the user to the *View Settings* dialog with the personalization settings. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.table.columnmenu), the [Sample](https://ui5.sap.com/#/entity/sap.m.Table/sample/sap.m.sample.p13n.Engine) for `sap.m.Table`, and the [Sample](https://ui5.sap.com/#/entity/sap.ui.table.Table/sample/sap.m.sample.p13n.EngineGridTable) for `sap.ui.table.Table`.

<sub>Changed•Control•Info Only•1.133</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-02-20

</td>
</tr>
<tr>
<td valign="top">

1.133 

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

SAP Fiori elements-based apps used in SAP S/4HANA Cloud Public Edition 2502 now provide the following SAP Business AI capabilities:

-   **AI-Assisted Easy Filter**

    Users can define filter queries using natural language instead of applying filters manually.

-   **AI-Assisted Smart Summarization**

    Users can generate an efficient summary of an SAP Fiori elements-based object page.


For more information, see [Generative AI Features](../06_SAP_Fiori_Elements/generative-ai-features-0ec03d4.md).

<sub>Changed•SAP Fiori Elements•Info Only•1.133</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-02-20

</td>
</tr>
<tr>
<td valign="top">

1.133 

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

-   Row selection in responsive tables of list reports, object pages, and analytical list pages now resets automatically after an action updates the table's data binding. You can configure the `rememberSelections` property using the UI adaptation project. For more information, see [Adapting the UI: List Report and Object Page](../06_SAP_Fiori_Elements/adapting-the-ui-list-report-and-object-page-0d2f1a9.md) and [Adapting the UI: Analytical List Page](../06_SAP_Fiori_Elements/adapting-the-ui-analytical-list-page-2c5fa29.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.133</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-02-20

</td>
</tr>
<tr>
<td valign="top">

1.133 

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

-   You can now set the `rowCountMode` property to `Interactive` for grid tables in the `manifest.json` file. For more information, see [Setting the Table Type](../06_SAP_Fiori_Elements/setting-the-table-type-7f844f1.md).

-   You can now show a message strip in a custom action dialog. For more information, see [Localization of UI Texts](../06_SAP_Fiori_Elements/localization-of-ui-texts-b8cb649.md).

-   We’ve added *Share to SAP Collaboration Manager* to the context menu of tables.

-   The action parameter dialog now supports grouping action parameters using the `UI.OperationalParameterFacets` annotation. For more information, see [Actions](../06_SAP_Fiori_Elements/actions-cbf16c5.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.133</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-02-20

</td>
</tr>
<tr>
<td valign="top">

1.133 

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

We have enhanced the data export to the cloud: The user can now export a PDF file to a Google Workspace file share if this is set up in the system.

<sub>Changed•Feature•Info Only•1.133</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-02-20

</td>
</tr>
<tr>
<td valign="top">

1.133 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.Link, sap.m.ObjectStatus, sap.m.ObjectNumber, sap.m.ObjectIdentifier, sap.m.ObjectMarker, sap.m.ObjectAttribute`** 

</td>
<td valign="top">

**`sap.m.Link, sap.m.ObjectStatus, sap.m.ObjectNumber, sap.m.ObjectIdentifier, sap.m.ObjectMarker, sap.m.ObjectAttribute`**

We have introduced a new enumeration property called `reactiveAreaMode`. The property helps meet the WCAG 2.2 Target Size requirement. It is designed to make links easier to activate and sufficiently large to help users avoid accidentally selecting unintended UI elements. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.Link).

<sub>Changed•Control•Info Only•1.133</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-02-20

</td>
</tr>
<tr>
<td valign="top">

1.133 

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

-   We have introduced a new method `getFirstAndLastVisibleDates` that returns the first and last visible dates within the calendar view. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.SinglePlanningCalendar).
-   You can now select a range of days by selecting a start date, holding the [Shift\] key, and then selecting an end date. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.m.SinglePlanningCalendar/sample/sap.m.sample.SinglePlanningCalendarDateSelection).

<sub>Changed•Control•Info Only•1.133</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-02-20

</td>
</tr>
<tr>
<td valign="top">

1.133 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.tnt.SideNavigation`** 

</td>
<td valign="top">

**`sap.tnt.SideNavigation`**

We have introduced a new `design` property for navigation items, enabling application developers to add an individually styled action button. This button appears on top of the other fixed items in the static footer area and can be used for quick access to frequently used actions. Moreover, parent-side navigation items now can either be dual or single click areas; non-selectable items behave as single click areas and can expand to list any child items. Lastly, a new `press` event is added for action item types. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.tnt.NavigationListItem%23controlProperties).

<sub>Changed•Control•Info Only•1.133</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-02-20

</td>
</tr>
<tr>
<td valign="top">

1.133 

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

-   In cards that have been opened from another card because of Card Actions, we have moved the **Close** button from the header to the footer. The button is now always positioned at the right end of the footer, with precedence over any other preexisting buttons. We have provided an optional setting to hide the button if it is not needed. This new feature is backward compatible but generates a footer if none exists. For more information, see the [Documentation](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/footer).
-   We have introduced a new `overflow` property for cards with a fixed height. If set to `ShowMore`, a shading gradient overlay marks the borderline over which any content is cut due to overflowing the card's fixed height. Additionally, a *Show More* button automatically appears and enables the user to open the entire card in a new window and read its full content. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.integration.widgets.Card%23controlProperties).

<sub>Changed•Control•Info Only•1.133</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-02-20

</td>
</tr>
<tr>
<td valign="top">

1.133 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**Localization** 

</td>
<td valign="top">

**Localization**

The new version of SAPUI5 introduces the following features:

-   We now use the localization content of the Unicode Common Locale Data Repository \(CLDR\) version 46.1.0. Note that we haven't taken over the changed default calendar of the `ar_SA` locale for now. Locale-specific texts for deprecated IANA time zones have been removed from the CLDR data.

-   We have introduced a mapping of deprecated IANA time zones to current IANA time zones in`sap.ui.core.format.DateFormat`. Deprecated time zones supplied to the `format` function are mapped and a locale-specific text for the current time zone is provided instead. When parsing time zones, deprecated time zone keys are mapped accordingly. For more information, see *Mapping of Deprecated Time Zones* in [Parameters](../04_Essentials/date-format-91f2eba.md#loio91f2eba36f4d1014b6dd926db0e91070__section_params).


<sub>Changed•Feature•Info Only•1.133</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-02-20

</td>
</tr>
<tr>
<td valign="top">

1.133 

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

We now support the creation of entities for single-valued navigation properties. For more information, see [Creating a Single Entity](../04_Essentials/creating-a-single-entity-ba0e73c.md).

<sub>Changed•Feature•Info Only•1.133</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-02-20

</td>
</tr>
<tr>
<td valign="top">

1.133 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.richtexteditor.RichTextEditor` ** 

</td>
<td valign="top">

**`sap.ui.richtexteditor.RichTextEditor`**

We've introduced a new `prefixHttps` property to ensure that URLs without protocols are automatically prefixed with `https://`. This feature only works if the `CustomToolbar` property is enabled. It enhances user experience by maintaining consistent URL formatting and preserving user preferences for each link. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.richtexteditor.RichTextEditor%23controlProperties).

<sub>Changed•Control•Info Only•1.133</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-02-20

</td>
</tr>
<tr>
<td valign="top">

1.133 

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

We've now made the `Tokenizer` available for standalone usage. This allows for a more flexible and independent use of the control. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.Tokenizer%23controlProperties).

<sub>Changed•Control•Info Only•1.133</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2025-02-20

</td>
</tr>
</table>

**Related Information**  


[What's New in SAPUI5 1.134](what-s-new-in-sapui5-1-134-c512d71.md "With this release SAPUI5 is upgraded from version 1.133 to 1.134.")

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

