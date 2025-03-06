<!-- loio86d76053ea2e40f190773732781824e9 -->

<link rel="stylesheet" type="text/css" href="../css/sap-icons.css"/>

# What's New in SAPUI5 1.133

With this release SAPUI5 is upgraded from version 1.132 to 1.133.

> ### Tip:  
> If you want to do a search across all versions of the What's New content, you can also find it in the [SAPUI5 What's New viewer](https://help.sap.com/whats-new/67f60363b57f4ac0b23efd17fa192d60).

> ### Note:  
> Content marked as <span style="color:#666666;"><span class="SAP-icons-V5"></span></span>**[Preview](https://help.sap.com/docs/whats-new-disclaimer)** is provided as a courtesy, without a warranty, and may be subject to change. For more information, see the [preview disclaimer](https://help.sap.com/docs/whats-new-disclaimer).

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

Upcoming 

</td>
<td valign="top">

Deleted 

</td>
<td valign="top">

Announcement 

</td>
<td valign="top">

**End of Cloud Provisioning for SAPUI5 Versions \(Q1/2025\)** 

</td>
<td valign="top">

**End of Cloud Provisioning for SAPUI5 Versions \(Q1/2025\)**

The following SAPUI5 versions will be removed from the SAPUI5 Content Delivery Network \(CDN\) after the end of Q1/2025.

**Minor Versions Reaching Their End of Cloud Provisioning**

The following versions including all patches will be removed entirely:

-   1.114
-   1.117
-   1.121

**Action**: Upgrade to a version that is still in maintenance.

**Patch Versions Reaching Their End of Cloud Provisioning**

The following patches will be removed:

-   Long-term maintenance versions:

    -   1.71.61 to 1.71.62
    -   1.84.41 to 1.84.43
    -   1.96.27 to 1.96.29
    -   1.108.26 to 1.108.29
    -   1.120.3 to 1.120.10

    **Action**: Upgrade to the latest available patch for the respective SAPUI5 version.


For more information, see [Version Overview](https://ui5.sap.com/versionoverview.html).

<sub><span style="color:#666666;"><span class="SAP-icons-V5"></span></span>**[Preview](https://help.sap.com/docs/whats-new-disclaimer)**•Deleted•Announcement•Info Only•Upcoming</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

9999-01-01

</td>
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

