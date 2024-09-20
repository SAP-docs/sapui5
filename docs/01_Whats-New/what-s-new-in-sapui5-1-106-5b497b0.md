<!-- loio5b497b0f9aae4ea68173a491fecfe071 -->

# What's New in SAPUI5 1.106

With this release SAPUI5 is upgraded from version 1.105 to 1.106.

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

1.106 

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

<sub>Deprecated•Feature•Info Only•1.106</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-09-08

</td>
</tr>
<tr>
<td valign="top">

1.106 

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

-   To improve usability, we have adapted the messages that are shown if no data is available. Different messages are shown depending on the following conditions:

    -   During the initial state of the chart and depending on whether there is a `sap.ui.comp.filterbar.FilterBar` control

    -   After a first back-end request if no data is available

    -   After a first back-end request if no data and no `FilterBar` are available


-   We have introduced the new `notAssignedText` property. The property can be used to provide a description for fields with an empty string.

    For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smartchart.SmartChart%23methods/getNotAssignedText) and the [Samples](https://ui5.sap.com/#/entity/sap.ui.comp.smartchart.SmartChart).


<sub>Changed•Control•Info Only•1.106</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-09-08

</td>
</tr>
<tr>
<td valign="top">

1.106 

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

-   We now provide the possibility to define a default action for menu buttons in list reports, object page headers, and forms. For more information, see the section *Defining a Default Action for a Menu Button* in [Actions](../06_SAP_Fiori_Elements/actions-cbf16c5.md).

-   You can now define default values for operators that require parameters, such as Next "X" Days. For more information, see [Enabling Semantic Operators in the Filter Bar](../06_SAP_Fiori_Elements/enabling-semantic-operators-in-the-filter-bar-fef65d0.md).

-   We've enabled the handling of side effects for the mass edit functionality. For more information, see [Enabling Editing Using a Dialog \(Mass Edit\)](../06_SAP_Fiori_Elements/enabling-editing-using-a-dialog-mass-edit-965ef5b.md).

-   `Edm.DateTime`-based fields now also support semantic dates. For more information, see [Enabling Semantic Operators in the Filter Bar](../06_SAP_Fiori_Elements/enabling-semantic-operators-in-the-filter-bar-fef65d0.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.106</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-09-08

</td>
</tr>
<tr>
<td valign="top">

1.106 

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

-   The global side effect is now triggered only from the fields of the entity where the side effect is defined. For more information, see [Using Global Side Effects](../06_SAP_Fiori_Elements/using-global-side-effects-955ae31.md).

-   You can now override the default behavior of the `ValueListNoValidation` for value help fields to include client-side validation. For more information, see [Displaying Text and ID for Value Help Input Fields](../06_SAP_Fiori_Elements/displaying-text-and-id-for-value-help-input-fields-080886d.md).

-   The refresh action upon pressing [Enter\] on the edit fields of a draft object page is now suppressed, unless it is explicitly configured. For more information, see [Using Global Side Effects](../06_SAP_Fiori_Elements/using-global-side-effects-955ae31.md).

-   You can now define keyboard shortcuts for application-specific function import actions in the analytical list page applications. For more information, see [Keyboard Shortcuts](../06_SAP_Fiori_Elements/keyboard-shortcuts-0cd318c.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.106</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-09-08

</td>
</tr>
<tr>
<td valign="top">

1.106 

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

The following changes and new features are available for both SAP Fiori elements for OData V2 and SAP Fiori elements for OData V4:

-   We've now improved the content density so that the object page shows form data spread across six columns instead of four columns when opened on extra large screens. For more information, see [Defining and Adapting Sections](../06_SAP_Fiori_Elements/defining-and-adapting-sections-facfea0.md).

-   For the value help fields, a side effect is now triggered when the focus moves away from the source field group. For more information, see [Side Effects](../06_SAP_Fiori_Elements/side-effects-18b17bd.md) .


<sub>Changed•SAP Fiori Elements•Info Only•1.106</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-09-08

</td>
</tr>
<tr>
<td valign="top">

1.106 

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

-   We have made the loading placeholder for Timeline card more detailed to better reveal the expected loading content. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.ui.integration.widgets.Card/sample/sap.ui.integration.sample.LazyLoading).

-   We have \(experimentally\) enabled the Object card to validate the user input provided in the card form fields. As a card developer, using the available validation functions, you can now specify if the input is required, limit the number of characters, or restrict the input to some predefined options. You can also set the validation message and the validation type \(`Error`, `Warning`, or `Information`\). For more information, see the [Input Validation](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/features/inputValidation) section and the [Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/object/formWithValidation) in the Card Explorer.

-   We have \(experimentally\) introduced new properties that enable you to format Object card content:

    -   `titleMaxLines` - limits the number of lines in which the group title will be wrapped.
    -   `labelWrapping` - a Boolean property that determines whether the labels of the group items will be wrapped.

    For more information, see the [Object Card](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/typesDeclarative/object) section and the [Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/object/titleMaxLinesAndLabelWrapping) in the Card Explorer.

-   You can now control the visibility of List card item’s attributes using the new `visible` Boolean property.

    For more information, see the [List Card](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/typesDeclarative/list) section and the [Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/list/attributesVisibility) in the Card Explorer.


<sub>Changed•Control•Info Only•1.106</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-09-08

</td>
</tr>
<tr>
<td valign="top">

1.106 

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

We have enabled key-user adaptation for `TextArrangement` annotation types. Key users can now overwrite the `TextSeparate`, `TextFirst`, `TextLast`, and `TextOnly` values from the back-end metadata by choosing a new value from the UI Adaptation dialog.

<sub>Changed•Control•Info Only•1.106</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-09-08

</td>
</tr>
<tr>
<td valign="top">

1.106 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.suite.ui.commons.Timeline`** 

</td>
<td valign="top">

**`sap.suite.ui.commons.Timeline`**

You can now configure the timeline control to visualize the respective IANA time zones within the timeline header bar. To do so, you can select *Custom Range* within *Time Range* while using *Filter By*. The time zone can either be passed using the configuration or specified using an annotation from a back-end service. If no time zone is maintained or if the time zone is invalid, the date/time is set to the local time zone.

<sub>Changed•Control•Info Only•1.106</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-09-08

</td>
</tr>
<tr>
<td valign="top">

1.106 

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

We have introduced a new `heading` aggregation that allows you to include content, such as message strips, at the beginning of a section. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.uxap.ObjectPageSection) and the [Samples](https://ui5.sap.com/#/entity/sap.uxap.ObjectPageSection).

<sub>Changed•Control•Info Only•1.106</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-09-08

</td>
</tr>
<tr>
<td valign="top">

1.106 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.Image` \(Experimental\)** 

</td>
<td valign="top">

**`sap.m.Image` \(Experimental\)**

We have enabled inline rendering of SVG files, so that they can be themeable and overstyled with a custom CSS. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.Image). 

<sub>Changed•Control•Info Only•1.106</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-09-08

</td>
</tr>
<tr>
<td valign="top">

1.106 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Announcement 

</td>
<td valign="top">

**Deactivation of Default Time Zone Configuration Feature** 

</td>
<td valign="top">

**Deactivation of Default Time Zone Configuration Feature**

We needed to deactivate the feature to configure the default time zone via the time zone configuration option in [`sap.ui.core.Configuration`](https://ui5.sap.com/#/api/sap.ui.core.Configuration) and the API method [`sap.ui.core.Configuration.setTimezone`](https://ui5.sap.com/#/api/sap.ui.core.Configuration/methods/setTimezone). Reason: There was a risk that dates are visualized by one day off. This wrong date might have been persisted to the back end.

This feature was introduced with UI5 1.102.0. The following UI5 versions still contain this feature:

-   1.102.0 to 1.102.5
-   1.103
-   1.104

If you are on one of these releases, we recommend that you upgrade to a higher version where this feature is deactivated.

Deactivated as of:

-   1.106

-   1.105

-   1.102.6


We plan to bring this feature back in a different form at a later point in time.

<sub>Changed•Announcement•Info Only•1.106</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-09-08

</td>
</tr>
<tr>
<td valign="top">

1.106 

</td>
<td valign="top">

UI Changed 

</td>
<td valign="top">

Announcement 

</td>
<td valign="top">

**Object Pages: Sections Now Show Six Columns by Default** 

</td>
<td valign="top">

**Object Pages: Sections Now Show Six Columns by Default**

> ### Note:  
> The following information concerns important upcoming changes for end users. These changes may require end users to adjust and/or test cases to be adapted, but they won't stop or disrupt software or processes.

To reduce empty spaces on very large screens in object page apps, sections will show six columns by default instead four.

<sub>UI Changed•Announcement•Info Only•1.106</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-09-08

</td>
</tr>
<tr>
<td valign="top">

1.106 

</td>
<td valign="top">

UI Changed 

</td>
<td valign="top">

Announcement 

</td>
<td valign="top">

**Object Pages: Header Facets in Scrollable Containers** 

</td>
<td valign="top">

**Object Pages: Header Facets in Scrollable Containers**

> ### Note:  
> The following information concerns important upcoming changes for end users. These changes may require end users to adjust and/or test cases to be adapted, but they won't stop or disrupt software or processes.

On desktop computers, header facets that include information or important KPIs will be shown in scrollable containers by default as they are on mobile devices. If several header facets are available, the user may need to scroll horizontally to view all of them.

<sub>UI Changed•Announcement•Info Only•1.106</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-09-08

</td>
</tr>
</table>

**Related Information**  


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

