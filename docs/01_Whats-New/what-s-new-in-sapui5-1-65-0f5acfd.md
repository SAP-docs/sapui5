<!-- loio0f5acfddbcfd49258e07ad44770bfaa7 -->

# What's New in SAPUI5 1.65

With this release SAPUI5 is upgraded from version 1.64 to 1.65.

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

1.65 

</td>
<td valign="top">

New 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**New Theme Available for SAP Fiori 3 User Experience ** 

</td>
<td valign="top">

**New Theme Available for SAP Fiori 3 User Experience **

The SAP Fiori 3 user experience is now supported. A new theme with *SAP Quartz Light* as the default appearance \(theme ID `sap_fiori_3`\) has been introduced. The theme is provided as an additional theme in SAPUI5.

For more information, see [Supported Combinations of Themes and Libraries](../02_Read-Me-First/supported-combinations-of-themes-and-libraries-38ff8c2.md).

<sub>New•Feature•Info Only•1.65</sub>

</td>
<td valign="top">

Info Only

</td>
<td valign="top">

2019-04-25

</td>
</tr>
<tr>
<td valign="top">

1.65 

</td>
<td valign="top">

New 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.f.GridContainer (Experimental)`** 

</td>
<td valign="top">

**`sap.f.GridContainer (Experimental)`**

The new `GridContainer` control allows you to align tiles, cards, and other controls in configuration, such as an overview page. It relies on a regular grid mesh constructed of rows with the same height and columns with the same width. Each item can be configured to span a different number of rows and columns inside that mesh. `GridContainer` automatically calculates how many rows an item needs, based on the height of the item.

![](images/What_s_New_1_65_sap_f_GridContainer_2916482.png)

For more information, see [sap.f.GridContainer](../10_More_About_Controls/sap-f-gridcontainer-cca5ee5.md), the [API Reference](https://ui5.sap.com/#/api/sap.f.GridContainer), and the [Sample](https://ui5.sap.com/#/entity/sap.f.GridContainer/sample/sap.f.sample.GridContainer).

<sub>New•Control•Info Only•1.65</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2019-04-25

</td>
</tr>
<tr>
<td valign="top">

1.65 

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

-   You can now create more than one transient entity in a list binding without refreshing the list binding, see `sap.ui.model.odata.v4.ODataListBinding` in the API Reference.

-   `$count` reflects the number of records shown in the table. Duplicates are avoided by filtering out created and persisted records using system query option `$filter`.

-   You can use `@$ui5.context.isTransient` in expression bindings to find out whether context is transient, see It is now ensured that created and persisted records are shown only once in the list, and that `sap.ui.model.odata.v4.Context.isTransient` in the API Reference.


> ### Restriction:  
> Due to the limited feature scope of this version of the SAPUI5 OData V4 model, check that all required features are in place before developing applications. Check the detailed documentation of the features, as certain parts of a feature may be missing. While we aim to be compatible with existing controls, some controls might not work due to small incompatibilities compared to `sap.ui.model.odata.(v2.)ODataModel`, or due to missing features in the model \(such as tree binding\). This also applies to smart controls \(`sap.ui.comp` library\) and SAP Fiori elements that do not support the SAPUI5 OData V4 model, as well as controls such as `TreeTable` and `AnalyticalTable`, which are not supported together with the SAPUI5 OData V4 model. The interface for applications has been changed for easier and more efficient use of the model. For a summary of these changes, see [Changes Compared to OData V2 Model](../04_Essentials/changes-compared-to-odata-v2-model-abd4d7c.md).

For more information, see [OData V4 Model](../04_Essentials/odata-v4-model-5de13cf.md), the [API Reference](https://ui5.sap.com/#/api/sap.ui.model.odata.v4), and the [Samples](https://ui5.sap.com/#/entity/sap.ui.model.odata.v4.ODataModel).

<sub>Changed•Feature•Info Only•1.65</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2019-04-25

</td>
</tr>
<tr>
<td valign="top">

1.65 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**Spreadsheet Export** 

</td>
<td valign="top">

**Spreadsheet Export**

It is now ensured that created and persisted records areCurrency values and numbers, that cannot be represented in the spreadsheet file in the format as defined by the *IEEE \(Institute of Electrical and Electronics Engineers\)* in standard 754-2008 \(standard for floating-point arithmetic\) because they are too large, now automatically use the `BigNumber` data type as a fallback option.

For more information, see [Spreadsheet Export](../04_Essentials/spreadsheet-export-2691788.md) and the [API Reference](https://ui5.sap.com/#/api/sap.ui.export). 

<sub>Changed•Feature•Info Only•1.65</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2019-04-25

</td>
</tr>
<tr>
<td valign="top">

1.65 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**Test Automation** 

</td>
<td valign="top">

**Test Automation**

The setup for Karma-based test automation has been improved significantly: The corresponding plugin has been completely reworked and renamed to `karma-ui5`.

For more information, see [Installing Karma for Automated Testing](../04_Essentials/test-automation-ae44824.md#loioa182676ed3714bd5b4f011eb29076f6c) and [karma-ui5 on Github](https://github.com/SAP/karma-ui5).

<sub>Changed•Feature•Info Only•1.65</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2019-04-25

</td>
</tr>
<tr>
<td valign="top">

1.65 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.f.Avatar`** 

</td>
<td valign="top">

**`sap.f.Avatar`**

With the new `fallbackIcon` property, you can define a fallback icon to be displayed if the image `src` is incorrect and no `initials` are set. If `fallbackIcon` is not set, a default fallback icon is displayed depending on the value of the `displayShape` property.For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.f.Avatar) and the [Sample](https://ui5.sap.com/#/entity/sap.f.Avatar/sample/sap.f.sample.Avatar).

<sub>Changed•ControlControl•Info Only•1.65</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2019-04-25

</td>
</tr>
<tr>
<td valign="top">

1.65 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.f.DynamicPage`** 

</td>
<td valign="top">

**`sap.f.DynamicPage`**

-   We have implemented a new sticky subheader in the `DynamicPage` control. It is positioned below the `DynamicPageHeader` and is always visible \(sticks to the `DynamicPageTitle` when the header is collapsed\). You can implement the subheader with the new `stickySubheader` association, which accepts controls that implement the `sap.f.IDynamicPageStickyContent` interface.For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.f.DynamicPage) and the [Sample](https://ui5.sap.com/#/entity/sap.f.DynamicPage/sample/sap.f.sample.DynamicPageWithStickySubheader).

-   We have improved the visual design of the content set in the `snappedContent` and `expandedContent` aggregations of `sap.f.DynamicPageTitle`. The width of the content set in these aggregations and the `heading` aggregation are no longer dependent.For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.f.DynamicPage/sample/sap.f.sample.DynamicPageFreeStyle).


<sub>Changed•Control•Info Only•1.65</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2019-04-25

</td>
</tr>
<tr>
<td valign="top">

1.65 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.f.ShellBar`** 

</td>
<td valign="top">

**`sap.f.ShellBar`**

The control is no longer experimental. To comply with the latest UX guidelines, its child controls have a predefined semantic order and are displayed in their cozy content density mode with dark visual design.For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.f.ShellBar) and the [Sample](https://ui5.sap.com/#/entity/sap.f.ShellBar/sample/sap.f.sample.ShellBar).

<sub>Changed•Control•Info Only•1.65</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2019-04-25

</td>
</tr>
<tr>
<td valign="top">

1.65 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.Select`** 

</td>
<td valign="top">

**`sap.m.Select`**

We have improved the `sap.m.Select` control to display the text set in the `valueStateText` property on multiple lines when the dropdown list is opened. The implementation ensures that the value state text is displayed even though it is longer than the width of the `sap.m.Select` container.For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.Select) and the [Sample](https://ui5.sap.com/#/entity/sap.m.Select/sample/sap.m.sample.SelectValueState).

<sub>Changed•Control•Info Only•1.65</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2019-04-25

</td>
</tr>
<tr>
<td valign="top">

1.65 

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

-   You can now change the start and end date of appointments by selecting and dragging their top or bottom end and dropping it on the desired time interval. Use the new `enableAppointmentsResize` property to enable the feature.

-   You can now create appointments by clicking and dragging. Select a start \(or end\) time interval in an empty cell, start dragging up \(or down\) over the time intervals to determine the desired time interval. Use the new `enableAppointmentsCreate` property to enable the feature.

-   We have improved the visual design of appointments that are shorter than 30 minutes. The color bar at the left border of appointments now has variable height to represent the time interval accurately. For appointments that are 30 minutes or longer, it fills 100% of the height.

-   You can now focus on individual cells in the `SinglePlanningCalendar` and navigate between them using the keyboard. When pressing the [Space\] or [Enter\] key on a focused cell, the new `cellPress` event is fired, which can be used for creating an appointment.

-   We have improved the visual design of the control by adding a shadow effect below the sticky header so that it is easier for the user to recognize the line between the fixed header and the scrollable content.


For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.SinglePlanningCalendar) and the [Samples](https://ui5.sap.com/#/entity/sap.m.SinglePlanningCalendar).

<sub>Changed•Control•Info Only•1.65</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2019-04-25

</td>
</tr>
<tr>
<td valign="top">

1.65 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.ToolbarSeparator`** 

</td>
<td valign="top">

**`sap.m.ToolbarSeparator`**

We have enabled the control to move to the overflow area of `sap.m.OverflowToolbar` where it changes its layout from vertical to horizontal. If the control happens to be the first or the last item of the overflow area, it is not displayed.For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.m.OverflowToolbar/sample/sap.m.sample.OverflowToolbarSimple).

<sub>Changed•Control•Info Only•1.65</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2019-04-25

</td>
</tr>
<tr>
<td valign="top">

1.65 

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

The control now supports the `com.sap.vocabularies.UI.v1.DataFieldDefault` annotation. You can use it to define a criticality or a label for a column that is initially not visible.

For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smarttable.SmartTable) for the annotations and the [Sample](https://ui5.sap.com/#/entity/sap.ui.comp.smarttable.SmartTable/sample/sap.ui.comp.sample.smarttable.smartTableWithCriticality).

<sub>Changed•Control•Info Only•1.65</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2019-04-25

</td>
</tr>
<tr>
<td valign="top">

1.65 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.core.hyphenation.Hyphenation`** 

</td>
<td valign="top">

**`sap.ui.core.hyphenation.Hyphenation`**

We have changed the `leftmin` and `rightmin` properties for all languages, with the default value of 3 characters. `leftmin` defines the minimum of characters to remain on the previous line, and `rightmin` defines the minimum of characters to move to the new line.For more information, see [Hyphenation for Text Controls](../10_More_About_Controls/hyphenation-for-text-controls-6322164.md) and the [API Reference](https://ui5.sap.com/#/api/sap.ui.core.hyphenation.Hyphenation). 

<sub>Changed•Control•Info Only•1.65</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2019-04-25

</td>
</tr>
<tr>
<td valign="top">

1.65 

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

-   We have introduced a new `Table` card type, that displays a set of items in a table format. Table cards use the responsive UI5 control `sap.m.Table`.

-   We have introduced a new experimental card type - `Component` card. It is used to display multiple controls. The `Component` card is used as a custom approach for use cases that do not fit in other card types and structures. The content area of the unstructured content card can be moved to the top.

    > ### Note:  
    > In contrast to the other integration card types, the structure and behavior of the `Component` card are custom-definable and follow the established SAPUI5 Component model. For more information, see [Components](../04_Essentials/components-958ead5.md).


For more information, see [Cards](../10_More_About_Controls/cards-5b46b03.md), the [API Reference](https://ui5.sap.com//#/api/sap.ui.integration.widgets.Card), and the [Samples](https://ui5.sap.com/#/entity/sap.ui.integration.widgets.Card).

<sub>Changed•Control•Info Only•1.65</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2019-04-25

</td>
</tr>
<tr>
<td valign="top">

1.65 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.uxap.ObjectPageHeader`** 

</td>
<td valign="top">

**`sap.uxap.ObjectPageHeader`**

-   We have improved the visual appearance of the image placed in `ObjectPageHeader` to be identical with the styling of the `sap.f.Avatar` control.For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.uxap.ObjectPageLayout/sample/sap.uxap.sample.ObjectPageDynamicHeader).

-   When the user presses an action from the overflow area, a dialog should open and the action sheet should close. To notify the app developer that the action is in the overflow area, we now pass an additional `bInOverflow` parameter along with the `press` event of the control set in the `actions` aggregation of the `sap.uxap.ObjectPageHeader`.For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.uxap.ObjectPageHeader).

<sub>Changed•Control•Info Only•1.65</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2019-04-25

</td>
</tr>
<tr>
<td valign="top">

1.65 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

SAP Fiori Elements 

</td>
<td valign="top">

**SAP Fiori Elements** 

</td>
<td valign="top">

**SAP Fiori Elements**

**List Report**

You can pass the variant ID as a URL parameter while navigating from an analytical list page application to the list report and vice versa. For more information, see [Managing Variants](../06_SAP_Fiori_Elements/managing-variants-8ce658e.md).

**Analytical List Page**

If there are measures with negative values, you can now enable the visual filter donut chart type to display an overlay message. For more information, see [Visual Filters](../06_SAP_Fiori_Elements/visual-filters-1714720.md).

<sub>Changed•SAP Fiori Elements•Info Only•1.65</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2019-04-25

</td>
</tr>
<tr>
<td valign="top">

1.65 

</td>
<td valign="top">

New 

</td>
<td valign="top">

User Documentation 

</td>
<td valign="top">

**New openSAP Course: Evolved Web Apps with SAPUI5** 

</td>
<td valign="top">

**New openSAP Course: Evolved Web Apps with SAPUI5**

We have launched a new openSAP course on how to develop professional web apps with UI5. Key highlights:

-   Evolved best practices and recommendations for app developers
-   New UI5 innovations \(drag and drop, OData V4, XML composites\)
-   Developer productivity tools and features in SAP Web IDE
-   Optimizing apps with the UI5 Tooling
-   Configuring apps for SAP Fiori elements and SAP Fiori launchpad
-   Adapting apps with SAPUI5 flexibility

The key concepts shown in this course apply to both, SAPUI5 and OpenUI5. The course is aimed at intermediate to advanced developers but is also suitable for ambitious UI5 beginners. Participation is free of charge.

For more information and to enroll, see [https://open.sap.com/courses/ui52](https://open.sap.com/courses/ui52).

![](images/openSAP_Evolved_Web_Apps_56cac78.png)

<sub>New•User Documentation•Info Only•1.65</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2019-04-25

</td>
</tr>
<tr>
<td valign="top">

1.65 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**Demo Kit Search** 

</td>
<td valign="top">

**Demo Kit Search**

We have improved the global search capabilities in the Demo Kit app by migrating to a client-side search based on Elasticlunr.js.

![](images/SAPUI5_What_s_New_1_65_Client-side_Search_0a431d3.png)

<sub>Changed•Feature•Info Only•1.65</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2019-04-25

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

