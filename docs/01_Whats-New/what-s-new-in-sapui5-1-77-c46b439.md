<!-- loioc46b43916bd54813926e1027d723830e -->

# What's New in SAPUI5 1.77

With this release SAPUI5 is upgraded from version 1.76 to 1.77.



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

1.77 

</td>
<td valign="top">

New 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**Supported Locales and Fallback** 

</td>
<td valign="top">

**Supported Locales and Fallback**

A list of [supported locales](../04_Essentials/supported-locales-and-fallback-chain-ec753bc.md) can now be configured in the `manifest.json` file. This enables an application to only request particular resource bundles with language-specific texts. As requests, that were previously needed to check for the availability of language files, can now be avoided, this helps to improve the runtime performance of applications.

In addition, a new configuration allows you to explicitly set the fallback locale. English used to be the default locale, but now any fallback locale can be specified.

<sub>New•Feature•Info Only•1.77</sub>

</td>
<td valign="top">

Info Only

</td>
<td valign="top">

2020-04-23

</td>
</tr>
<tr>
<td valign="top">

1.77 

</td>
<td valign="top">

New 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**Terminologies** 

</td>
<td valign="top">

**Terminologies**

By defining terminologies together with additional resource bundles, you can adapt an application for different scenarios or industries. [Terminologies](../04_Essentials/terminologies-eba8d25.md) can be configured in the `manifest.json` file and can be activated in several ways, such as via API, URL parameter, or the bootstrap configuration.

<sub>New•Feature•Info Only•1.77</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-04-23

</td>
</tr>
<tr>
<td valign="top">

1.77 

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

-   You can now expand the first node of visually grouped aggregated data using `sap.ui.model.odata.v4.Context#expand`, as described in [Data Aggregation and Recursive Hierarchy](../04_Essentials/data-aggregation-and-recursive-hierarchy-7d91431.md).

    For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding%23methods/setAggregation).

-   Binding parameters and format options can now be passed to `sap.ui.model.odata.v4.AnnotationHelper#format`, and binding parameters can be passed to `sap.ui.model.odata.v4.AnnotationHelper#value`.

    For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.AnnotationHelper%23methods/).


> ### Restriction:  
> Due to the limited feature scope of this version of the SAPUI5 OData V4 model, check that all required features are in place before developing applications. Double-check the detailed documentation of the features, as certain parts of a feature may be missing. While we aim to be compatible with existing controls, some controls might not work due to small incompatibilities compared to `sap.ui.model.odata.(v2.)ODataModel`, or due to missing features in the model \(such as tree binding\). This also applies to smart controls \(`sap.ui.comp` library\) that do not support the SAPUI5 OData V4 model, as well as controls such as `TreeTable` and `AnalyticalTable`, which are not supported in combination with the SAPUI5 OData V4 model. The interface for applications has been changed for easier and more efficient use of the model. For a summary of these changes, see [Changes Compared to OData V2 Model](../04_Essentials/changes-compared-to-odata-v2-model-abd4d7c.md).

For more information, see [OData V4 Model](../04_Essentials/odata-v4-model-5de13cf.md), the [API Reference](https://ui5.sap.com/#/api/sap.ui.model.odata.v4), and the [Samples](https://ui5.sap.com/#/entity/sap.ui.model.odata.v4.ODataModel) in the Demo Kit.

<sub>Changed•Feature•Info Only•1.77</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-04-23

</td>
</tr>
<tr>
<td valign="top">

1.77 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**Team Calendar** 

</td>
<td valign="top">

**Team Calendar**

This demo app is now enhanced with improvements in the navigation and available resolutions to provide better user experience. Switching between the different calendars now happens without loading the pages. Find the updated Team Calendar under [Demo Apps](https://ui5.sap.com/#demoapps).

<sub>Changed•Feature•Info Only•1.77</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-04-23

</td>
</tr>
<tr>
<td valign="top">

1.77 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.f.FlexibleColumnLayout`** 

</td>
<td valign="top">

**`sap.f.FlexibleColumnLayout`**

We’ve introduced the `restoreFocusOnBackNavigation` property. If the property is set to `true`, the focus is restored to the last known when navigating back to a previously opened column, for example, upon closing of the end column and being transferred back to the mid column.For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.f.FlexibleColumnLayout) and the [Sample](https://ui5.sap.com/#/entity/sap.f.FlexibleColumnLayout/sample/sap.f.sample.FlexibleColumnLayoutWithOneColumnStart).

<sub>Changed•Control•Info Only•1.77</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-04-23

</td>
</tr>
<tr>
<td valign="top">

1.77 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.Avatar`** 

</td>
<td valign="top">

**`sap.m.Avatar`**

You can now display visual affordance as a badge icon at the bottom-end corner of the `sap.m.Avatar` control. To set the icon that indicates the possible action that can be triggered, use the `badgeIcon` property. You can also set a tooltip for the badge icon by using the `badgeTooltip` property.For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.Avatar) and the [Sample](https://ui5.sap.com/#/entity/sap.m.Avatar/sample/sap.m.sample.AvatarWithAffordance).

<sub>Changed•Control•Info Only•1.77</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-04-23

</td>
</tr>
<tr>
<td valign="top">

1.77 

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

We have added a new `Attention` button type to the `sap.m.ButtonType` enum. This button type indicates a critical situation. For more information about the `sap.m.Button`, see the [API Reference](https://ui5.sap.com/#/api/sap.m.Button). 

<sub>Changed•Control•Info Only•1.77</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-04-23

</td>
</tr>
<tr>
<td valign="top">

1.77 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.IconTabBar`** 

</td>
<td valign="top">

**`sap.m.IconTabBar`**

This control is now updated according to the latest SAP Fiori design guidelines. The horizontal scrolling behavior of the tab filters has been removed. Now, all tabs that can't fit on the tab strip, are moved over to an overflow tab. An `items` aggregation has been added to the `sap.m.IconTabFilter` control, which allows the nesting of tab filters in a hierarchical order. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.IconTabBar) and the [Samples](https://ui5.sap.com/#/entity/sap.m.IconTabBar). 

<sub>Changed•Control•Info Only•1.77</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-04-23

</td>
</tr>
<tr>
<td valign="top">

1.77 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.SearchField`** 

</td>
<td valign="top">

**`sap.m.SearchField`**

We have introduced a new `change` event, fired when the user changes the value of the search field. Unlike the `liveChange` event, the `change` event is not fired for each key press. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.SearchField).

<sub>Changed•Control•Info Only•1.77</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-04-23

</td>
</tr>
<tr>
<td valign="top">

1.77 

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

**`sap.m.Table`**

The automatic pop-in mode for the responsive table has been expanded: The new `hiddenInPopin` property now allows you to hide columns instead of moving them into the pop-in area based on the importance defined for each column \(`getImportance` in `sap.m.Column`\). For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.Table%23methods/getHiddenInPopin) for the related method and the [Sample](https://ui5.sap.com/#/entity/sap.m.Table/sample/sap.m.sample.TableAutoPopin).

<sub>Changed•Control•Info Only•1.77</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-04-23

</td>
</tr>
<tr>
<td valign="top">

1.77 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.suite.ui.commons.CalculationBuilder`** 

</td>
<td valign="top">

**`sap.suite.ui.commons.CalculationBuilder`**

-   The <code>sap.suite.ui.commons.CalculationBuilderItemType.<b>Constant</b></code> item type has been deprecated. You can use the new <code>sap.suite.ui.commons.CalculationBuilderItemType.<b>Literal</b></code> item type instead. The respective properties and methods have also been adapted for use with the new item type.

    For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.suite.ui.commons.CalculationBuilder).

-   The *Constants* item in the *Item Details* dialog has been replaced with the *Literal* input field. Users can enter text or numeric literals directly in this field.


<sub>Changed•Control•Info Only•1.77</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-04-23

</td>
</tr>
<tr>
<td valign="top">

1.77 

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

We have added a UI adaptation at runtime \(RTA\) `rename` action for the `sap.tnt.SideNavigation` items. Now it is possible to rename the text properties of the control at runtime directly in the SAP Fiori launchpad, without having to write new code. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.tnt.SideNavigation) and the [Samples](https://ui5.sap.com/#/entity/sap.tnt.SideNavigation).

<sub>Changed•Control•Info Only•1.77</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-04-23

</td>
</tr>
<tr>
<td valign="top">

1.77 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.comp.smartfield.SmartField`, `sap.ui.comp.smartfilterbar.SmartFilterBar`** 

</td>
<td valign="top">

**`sap.ui.comp.smartfield.SmartField`, `sap.ui.comp.smartfilterbar.SmartFilterBar`**

We have introduced a new OData type, `NumericText`, to improve the `display-format` with `NonNegative` value of `NUMC` fields. Now all values containing only `0`, for example, `0`, `00`, `000`, etc. are displayed as an empty field.

<sub>Changed•Control•Info Only•1.77</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-04-23

</td>
</tr>
<tr>
<td valign="top">

1.77 

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

-   If the `demandPopin` property is set to `true`, the automatic pop-in mode for controls of type `ResponsiveTable` is now used. The mode is activated by a mapping to the `autoPopinMode` property. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.Table%23methods/getAutoPopinMode) for the related method and the [Sample](https://ui5.sap.com/#/entity/sap.ui.comp.smarttable.SmartTable/sample/sap.ui.comp.sample.smarttable.mtable).

-   Column headers in controls of type `ResponsiveTable` now use the `sap.m.Label` control instead of the `sap.m.Text` control. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.ui.comp.smarttable.SmartTable/sample/sap.ui.comp.sample.smarttable.mtable).


<sub>Changed•Control•Info Only•1.77</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-04-23

</td>
</tr>
<tr>
<td valign="top">

1.77 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.comp.ValueHelpDialog`** 

</td>
<td valign="top">

**`sap.ui.comp.ValueHelpDialog`**

We have introduced a new `DeprecationCode` annotation in the `ValueHelpDialog` to differentiate between `valid`, `deprecated`, and `revoked` value statuses.

Values with `revoked` status are hidden from the `ValueHelpDialog` results unless the user specifically selects in the filtering to display them. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smartfield.SmartField%23annotations/Summary).

<sub>Changed•Control•Info Only•1.77</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-04-23

</td>
</tr>
<tr>
<td valign="top">

1.77 

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

-   We have introduced loading animation for UI Integration Cards. It displays a preview with an animated placeholder, which indicates the type and the attributes of the card while loading. For more information, see the loading of card samples in the [Card Explorer](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/index.html#/exploreOverview/types)..

-   We have introduced `label` and `description` properties in the Parameters and Destinations sections of the manifest. This is useful for user-friendly visualization when working with design-time configuration tools.
-   The markdown feature of Microsoft Adaptive Cards in `sap.ui.integration.widgets.Card` of type Adaptive is now enabled. The `TextBlock` element of the card supports a subset of Markdown syntax, that is defined in Microsoft's Adaptive Card. For more information, see the [Markdown Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/adaptive/markdown) in the Card Explorer. 

-   We have enhanced the capabilities of the Adaptive Card by supporting the `data` property, provided on the `sap.card` level in the card's manifest. For more information, see the [Data and Templating Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/adaptive/data) in the Card Explorer.

-   We have enabled manifest authors to define a destination with a basic configuration for the `Submit` action of the Adaptive Card type. Now you can control and define how the `Submit` action would be handled via the manifest. For more information, see the [Adaptive Card](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/types/adaptive) section and the [Submit Action Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/adaptive/adaptive-action-submit) in the Card Explorer.


<sub>Changed•Control•Info Only•1.77</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-04-23

</td>
</tr>
<tr>
<td valign="top">

1.77 

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

We have enabled the native mobile TinyMCE support and you can now enable it in your app. Keep in mind that this feature comes with some limitations, and for that reason we do not recommend the use of it. For more information, see [sap.ui.richtexteditor.RichTextEditor](../10_More_About_Controls/sap-ui-richtexteditor-richtexteditor-d4f3f15.md) and the [API Reference](https://ui5.sap.com/#/api/sap.ui.richtexteditor.RichTextEditor). 

<sub>Changed•Control•Info Only•1.77</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-04-23

</td>
</tr>
<tr>
<td valign="top">

1.77 

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

-   We’ve introduced the `showTitle` property for `sap.uxap.ObjectPageSubSection` to enable you to determine whether the subsection title is displayed. If a subsection is the only one \(or the only one visible\) within a section, its title is displayed instead of the section title, even if this property is set to `false`. To hide the title of a subsection that is the only one \(or the only one visible\), you need to set the `showTitle` properties to `false` for both `ObjectPageSection` and its `ObjectPageSubSection`.For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.uxap.ObjectPageSubSection).

-   We’ve introduced the `subSectionVisibilityChange` event. The event is fired when there’s a change in the visibility of the subsections of the page or the current tab \(when `ObjectPageLayout` is used in tabs-based mode\).For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.uxap.ObjectPageLayout) and the [Sample](https://ui5.sap.com/#/entity/sap.uxap.ObjectPageLayout/sample/sap.uxap.sample.ObjectPageState).


<sub>Changed•Control•Info Only•1.77</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-04-23

</td>
</tr>
<tr>
<td valign="top">

1.77 

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

-   Objects with less than 8 required fields can now be created quickly using a dialog on the list report page, without navigating to the object page. For more information, see [Enabling Object Creation Using the Dialog in the List Report](../06_SAP_Fiori_Elements/enabling-object-creation-using-the-dialog-in-the-list-report-ceb9284.md).

-   You can enable an inline deletion option in tables of list report and object pages.

-   Flexible column layout in two-column mode for edit scenario is now supported for non-draft apps.

-   External navigation to target applications that have flexible column layout can now open in full screen mode if the navigation context points to a unique object.

-   The SAP WebIDE application creation wizard for list reports and object pages now provides an option to display or hide the draft toggle button.

-   List reports now provide an option to enable date range filters in the smart filter bar. You can also configure filter range types. For more information, see [Enabling Semantic Operators in the Filter Bar](../06_SAP_Fiori_Elements/enabling-semantic-operators-in-the-filter-bar-fef65d0.md).

-   You can now customize application-specific texts when data is not returned for charts in list report and object pages. For more information, see [Maintaining Standard Texts for Charts](../06_SAP_Fiori_Elements/maintaining-standard-texts-for-charts-37cd601.md).

-   We have improved performance for delete actions, as both Delete and Get calls are grouped into a single batch call.

-   The SAP WebIDE application creation wizard for list reports and object pages now provides an option to choose the required variant management. *Page Variant* is set as the default with an option to change to *No Variant* and *Control Level Variant*.

-   Autoload is triggered for list report and object page apps that have at least one filter set or have custom variants as default. Autoload is not triggered if applications have Standard Variant as default with no filters.

-   We now provide a fallback navigation when navigating to the object page of an object that was deleted. The navigation will fallback to the list page of source application if the object is not found during back navigation from target application.

-   We now provide an option to reuse custom column fragments across several tables in multi-tab list report applications.

-   Rows with errors are now highlighted in red in object page tables for easy identification.


<sub>Changed•SAP Fiori Elements•Info Only•1.77</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2020-04-23

</td>
</tr>
</table>

**Related Information**  


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

