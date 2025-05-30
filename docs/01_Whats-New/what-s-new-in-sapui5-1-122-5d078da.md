<!-- loio5d078da3eec34ab59c7c28a30c93cf59 -->

# What's New in SAPUI5 1.122

With this release SAPUI5 is upgraded from version 1.121 to 1.122.

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

1.122 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.layout.form.Form`, `sap.ui.layout.form.SimpleForm`** 

</td>
<td valign="top">

**`sap.ui.layout.form.Form`, `sap.ui.layout.form.SimpleForm`**

You can now define up to three columns in medium and four in large size in a form using `ColumnLayout`. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.layout.form.ColumnsL) for columns in L, the [API Reference](https://ui5.sap.com/#/api/sap.ui.layout.form.ColumnsM) for columns in M, the [Sample](https://ui5.sap.com/#/entity/sap.ui.layout.form.Form/sample/sap.ui.layout.sample.Form_Column_threeGroups346) for `Form`, and the [Sample](https://ui5.sap.com/#/entity/sap.ui.layout.form.SimpleForm/sample/sap.ui.layout.sample.SimpleForm_Column_threeGroups346) for `SimpleForm`.

<sub>Changed•Control•Info Only•1.122</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-03-21

</td>
</tr>
<tr>
<td valign="top">

1.122 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**Samples for `sap.ui.mdc` library** 

</td>
<td valign="top">

**Samples for `sap.ui.mdc` library**

You can now test more features of the controls in the \(experimental\) `sap.ui.mdc` library in the samples. To find the samples for this library in the Demo Kit, go to *Samples* and select MDC Samples. For more information, see the [Samples](https://ui5.sap.com/#/entity/sap.ui.mdc).

<sub>Changed•Feature•Info Only•1.122</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-03-21

</td>
</tr>
<tr>
<td valign="top">

1.122 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**Support for Async Control Event Handlers** 

</td>
<td valign="top">

**Support for Async Control Event Handlers**

You can now use the modern “`async`/`await`” JavaScript syntax for control event handlers. We have adjusted some tutorials and samples to benefit from this coding style.

Keep in mind that certain restrictions remain for asynchronous functions; in particular, they should not be used with the lifecycle hooks predefined by the SAPUI5 framework.

For more information, see [Async Functions and Event Handlers](../02_Read-Me-First/ecmascript-support-0cb44d7.md#loio0cb44d7a147640a0890cefa5fd7c7f8e__section_EHR).

<sub>Changed•Feature•Info Only•1.122</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-03-21

</td>
</tr>
<tr>
<td valign="top">

1.122 

</td>
<td valign="top">

Deprecated 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**Localization** 

</td>
<td valign="top">

**Localization**

We have deprecated the Legacy Unit Key Mapping introduced with SAPUI5 1.110 and will no longer adapt it when switching to future versions of the Unicode Common Locale Data Repository \(CLDR\).

<sub>Deprecated•Feature•Info Only•1.122</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-03-21

</td>
</tr>
<tr>
<td valign="top">

1.122 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**Data Binding** 

</td>
<td valign="top">

**Data Binding**

We have reworked the Data Binding tutorial, offering you state-of-the-art usage of data binding in SAPUI5.

For more information, see [Data Binding Tutorial](../03_Get-Started/data-binding-tutorial-e531093.md).

<sub>Changed•Feature•Info Only•1.122</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-03-21

</td>
</tr>
<tr>
<td valign="top">

1.122 

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

-   The selection set via the experimental `sap.ui.model.odata.v4.Context#setSelected` method is now also available via the experimental `@$ui5.context.isSelected` client-side annotation.

-   The `sap.ui.model.odata.v4.Context#requestParent` and `sap.ui.model.odata.v4.Context#getParent` methods that we introduced with SAPUI5 1.120 are no longer experimental; you can now use them in productive applications.

-   The `refresh` and `requestRefresh` methods of `sap.ui.model.odata.v4.ODataContextBinding` and `sap.ui.model.odata.v4.ODataListBinding` now also work on bindings for which the `$$ownRequest` binding parameter is set to `true`.


<sub>Changed•Feature•Info Only•1.122</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-03-21

</td>
</tr>
<tr>
<td valign="top">

1.122 

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

-   We now support the `UI.Hidden` annotation for tables in the list report, object page, and analytical list page. For more information, see [Tables](../06_SAP_Fiori_Elements/tables-c0f6592.md).

-   You can now use the `setRelevantFilters` extension API to ensure that the filters are correctly applied on custom cards. For more information, see [Custom Cards](../06_SAP_Fiori_Elements/custom-cards-6d260f7.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.122</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-03-21

</td>
</tr>
<tr>
<td valign="top">

1.122 

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

-   You can now configure a field to display the value list as a radio button group, instead of a dropdown list, using an annotation or a manifest setting. For more information, see [Value Help as a Dropdown List](../06_SAP_Fiori_Elements/value-help-as-a-dropdown-list-2a0a630.md).

-   For columns with a text arrangement annotation, we no longer display *Description* as an option in the *Columns* tab of the table's personalization dialog. For more information, see [Enabling Table Personalization](../06_SAP_Fiori_Elements/enabling-table-personalization-3e2b4d2.md).

-   Unbound actions can now also trigger side effects. For more information, see [Side Effects](../06_SAP_Fiori_Elements/side-effects-18b17bd.md).

-   End users can now delete the empty rows of a table in empty row mode. For more information, see [Enabling Inline Creation Mode or Empty Row Mode for Table Entries](../06_SAP_Fiori_Elements/enabling-inline-creation-mode-or-empty-row-mode-for-table-entries-cfb04f0.md).

-   `getCurrentVariantKey` and `setCurrentVariantKey` can now be used in the Table building block. For more information, see [The Table Building Block](../06_SAP_Fiori_Elements/the-table-building-block-3801656.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.122</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-03-21

</td>
</tr>
<tr>
<td valign="top">

1.122 

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

We have updated the TinyMCE version 5 and version 6 used in `sap.ui.richtexteditor.RichTextEditor` to TinyMCE 5.10.9 and TinyMCE 6.8.2. For more information, see [sap.ui.richtexteditor.RichTextEditor](../10_More_About_Controls/sap-ui-richtexteditor-richtexteditor-d4f3f15.md).

<sub>Changed•Control•Info Only•1.122</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-03-21

</td>
</tr>
<tr>
<td valign="top">

1.122 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.comp.smartfilterbar.SmartFilterBar`** 

</td>
<td valign="top">

**`sap.ui.comp.smartfilterbar.SmartFilterBar`**

You can now enable the *Today* button for date fields using custom data configuration. To do this, set the `showCurrentDateButton` property to `true`.

<sub>Changed•Control•Info Only•1.122</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-03-21

</td>
</tr>
<tr>
<td valign="top">

1.122 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**Connectors for Bootstrapping SAPUI5 Flexibility** 

</td>
<td valign="top">

**Connectors for Bootstrapping SAPUI5 Flexibility**

You can use the new `BtpServiceConnector` to connect SAPUI5 flexibility services on SAP BTP, Cloud Foundry environment. In addition to the features offered by the `KeyUserConnector`, the `BtpServiceConnector` also allows you to use end-user personalization.

Action: If you develop apps running standalone on SAP BTP, Cloud Foundry environment, we strongly recommend that you replace the `KeyUserConnector` with the `BtpServiceConnector` in your SAPUI5 bootstrap.

For more information, see [Bootstrapping SAPUI5 Flexibility](../04_Essentials/bootstrapping-sapui5-flexibility-642dab2.md).

<sub>Changed•Feature•Recommended•1.122</sub>

</td>
<td valign="top">

Recommended 

</td>
<td valign="top">

2024-03-21

</td>
</tr>
<tr>
<td valign="top">

1.122 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.ColorPalette`** 

</td>
<td valign="top">

**`sap.m.ColorPalette`**

We have introduced a new \(experimental\) `selectedColor` property that shows the last selected color in the color palette. Now, when the user selects a color, the selected color swatch appears bigger than the other color swatches and has an outline. If the user moves the focus, the selected color will continue to be shown until a new color is selected. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.ColorPalette).

<sub>Changed•Control•Info Only•1.122</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-03-21

</td>
</tr>
<tr>
<td valign="top">

1.122 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.MenuButton`** 

</td>
<td valign="top">

**`sap.m.MenuButton`**

We have removed the maximum-width restriction of the `MenuButton` to avoid any undesirable text truncation. Now, the button will expand according to the available space when necessary. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.MenuButton).

<sub>Changed•Control•Info Only•1.122</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-03-21

</td>
</tr>
<tr>
<td valign="top">

1.122 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.unified.Calendar`** 

</td>
<td valign="top">

**`sap.ui.unified.Calendar`**

To improve the user experience, we have configured the calendar to always show 6 weeks. The new behavior will prevent any unnecessary resizing when the user browses across months. For more information, see the [Samples](https://ui5.sap.com/#/entity/sap.ui.unified.Calendar).

<sub>Changed•Control•Info Only•1.122</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-03-21

</td>
</tr>
<tr>
<td valign="top">

1.122 

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

There is a new \(experimental\) feature in Analytical cards for the popover that opens when the user presses the interactive area \(when it’s available\). As a card developer, you can now specify an action button at the bottom of this popover. The action can be either a standard navigation action, or a custom-defined extension. For more information, see the [Details Popover](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/analytical/detailsPopover) and [Popover Extension Actions](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/analytical/popoverExtensionActions) samples, and the [Analytical Card](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/typesDeclarative/analytical) section in the Card Explorer.

<sub>Changed•Control•Info Only•1.122</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-03-21

</td>
</tr>
<tr>
<td valign="top">

1.122 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.uxap.ObjectPageSection`** 

</td>
<td valign="top">

**`sap.uxap.ObjectPageSection`**

We have added a new `anchorBarButtonColor` property. It allows you to specify the text color of each button inside the `AnchorBar`. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.uxap.ObjectPageSection).

<sub>Changed•Control•Info Only•1.122</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-03-21

</td>
</tr>
<tr>
<td valign="top">

1.122 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.uxap.ObjectPageLayout`** 

</td>
<td valign="top">

**`sap.uxap.ObjectPageLayout`**

We have introduced a new `sapUxAPObjectPageSubSectionTransparentBackground` class for `sap.uxap.ObjectPageSubSection` that allows applications to set a transparent background for subsections. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.uxap.ObjectPageSubSection).

<sub>Changed•Control•Info Only•1.122</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-03-21

</td>
</tr>
<tr>
<td valign="top">

1.122 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

****Demo Kit: New Design for the Tools Section**** 

</td>
<td valign="top">

**Demo Kit: New Design for the Tools Section**

We have redesigned the Tools section of the Demo Kit. It is now called Resources and has a new look and feel. For more information, see [Resources](https://ui5.sap.com/#/resources).

<sub>Changed•Feature•Info Only•1.122</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2024-03-21

</td>
</tr>
</table>

**Related Information**  


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

