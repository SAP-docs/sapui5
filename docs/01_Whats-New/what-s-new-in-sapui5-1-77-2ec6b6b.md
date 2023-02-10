<!-- loio2ec6b6b03ee249928bba929eec3d2d74 -->

# What's New in SAPUI5 1.77

With this release SAPUI5 is upgraded from version 1.76 to 1.77.



<a name="loio2ec6b6b03ee249928bba929eec3d2d74__section_yxw_pxt_zcb"/>

## New Features


<table>
<tr>
<td valign="top">

**Supported Locales and Fallback**

A list of [supported locales](../04_Essentials/supported-locales-and-fallback-chain-ec753bc.md) can now be configured in the `manifest.json` file. This enables an application to only request particular resource bundles with language-specific texts. As requests, that were previously needed to check for the availability of language files, can now be avoided, this helps to improve the runtime performance of applications.

In addition, a new configuration allows you to explicitly set the fallback locale. English used to be the default locale, but now any fallback locale can be specified.



</td>
</tr>
<tr>
<td valign="top">

**Terminologies**

By defining terminologies together with additional resource bundles, you can adapt an application for different scenarios or industries. [Terminologies](../04_Essentials/terminologies-eba8d25.md) can be configured in the `manifest.json` file and can be activated in several ways, such as via API, URL parameter, or the bootstrap configuration.



</td>
</tr>
</table>



<a name="loio2ec6b6b03ee249928bba929eec3d2d74__section_qwl_pb5_zcb"/>

## Improved Features


<table>
<tr>
<td valign="top">

**SAPUI5 OData V4 Model**

The new version of the SAPUI5 OData V4 model introduces the following features:

-   You can now expand the first node of visually grouped aggregated data using `sap.ui.model.odata.v4.Context#expand`, as described in [Extension for Data Aggregation](../04_Essentials/extension-for-data-aggregation-7d91431.md).

    For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding%23methods/setAggregation).

-   Binding parameters and format options can now be passed to `sap.ui.model.odata.v4.AnnotationHelper#format`, and binding parameters can be passed to `sap.ui.model.odata.v4.AnnotationHelper#value`.

    For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.AnnotationHelper%23methods/).


> ### Restriction:  
> Due to the limited feature scope of this version of the SAPUI5 OData V4 model, check that all required features are in place before developing applications. Double-check the detailed documentation of the features, as certain parts of a feature may be missing. While we aim to be compatible with existing controls, some controls might not work due to small incompatibilities compared to `sap.ui.model.odata.(v2.)ODataModel`, or due to missing features in the model \(such as tree binding\). This also applies to smart controls \(`sap.ui.comp` library\) that do not support the SAPUI5 OData V4 model, as well as controls such as `TreeTable` and `AnalyticalTable`, which are not supported in combination with the SAPUI5 OData V4 model. The interface for applications has been changed for easier and more efficient use of the model. For a summary of these changes, see [Changes Compared to OData V2 Model](../04_Essentials/changes-compared-to-odata-v2-model-abd4d7c.md).

For more information, see [OData V4 Model](../04_Essentials/odata-v4-model-5de13cf.md), the [API Reference](https://ui5.sap.com/#/api/sap.ui.model.odata.v4), and the [Samples](https://ui5.sap.com/#/entity/sap.ui.model.odata.v4.ODataModel) in the Demo Kit.



</td>
</tr>
<tr>
<td valign="top">

**`Team Calendar`**

This demo app is now enhanced with improvements in the navigation and available resolutions to provide better user experience. Switching between the different calendars now happens without loading the pages. Find the updated Team Calendar under [Demo Apps](https://ui5.sap.com/#demoapps).



</td>
</tr>
</table>



<a name="loio2ec6b6b03ee249928bba929eec3d2d74__section_rqn_wd5_zcb"/>

## Improved Controls


<table>
<tr>
<td valign="top">

**`sap.f.FlexibleColumnLayout`**

We’ve introduced the `restoreFocusOnBackNavigation` property. If the property is set to `true`, the focus is restored to the last known when navigating back to a previously opened column, for example, upon closing of the end column and being transferred back to the mid column.For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.f.FlexibleColumnLayout) and the [Sample](https://ui5.sap.com/#/entity/sap.f.FlexibleColumnLayout/sample/sap.f.sample.FlexibleColumnLayoutWithOneColumnStart).



</td>
</tr>
<tr>
<td valign="top">

**`sap.m.Avatar`**

You can now display visual affordance as a badge icon at the bottom-end corner of the `sap.m.Avatar` control. To set the icon that indicates the possible action that can be triggered, use the `badgeIcon` property. You can also set a tooltip for the badge icon by using the `badgeTooltip` property.For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.Avatar) and the [Sample](https://ui5.sap.com/#/entity/sap.m.Avatar/sample/sap.m.sample.AvatarWithAffordance).



</td>
</tr>
<tr>
<td valign="top">

**`sap.m.Button`**

We have added a new `Attention` button type to the `sap.m.ButtonType` enum. This button type indicates a critical situation. For more information about the `sap.m.Button`, see the [API Reference](https://ui5.sap.com/#/api/sap.m.Button). 



</td>
</tr>
<tr>
<td valign="top">

**`sap.m.IconTabBar`**

This control is now updated according to the latest SAP Fiori design guidelines. The horizontal scrolling behavior of the tab filters has been removed. Now, all tabs that can't fit on the tab strip, are moved over to an overflow tab. An `items` aggregation has been added to the `sap.m.IconTabFilter` control, which allows the nesting of tab filters in a hierarchical order. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.IconTabBar) and the [Samples](https://ui5.sap.com/#/entity/sap.m.IconTabBar). 



</td>
</tr>
<tr>
<td valign="top">

**`sap.m.SearchField`**

We have introduced a new `change` event, fired when the user changes the value of the search field. Unlike the `liveChange` event, the `change` event is not fired for each key press. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.SearchField).



</td>
</tr>
<tr>
<td valign="top">

**`sap.m.Table`**

The automatic pop-in mode for the responsive table has been expanded: The new `hiddenInPopin` property now allows you to hide columns instead of moving them into the pop-in area based on the importance defined for each column \(`getImportance` in `sap.m.Column`\). For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.Table%23methods/getHiddenInPopin) for the related method and the [Sample](https://ui5.sap.com/#/entity/sap.m.Table/sample/sap.m.sample.TableAutoPopin).



</td>
</tr>
<tr>
<td valign="top">

**`sap.suite.ui.commons.CalculationBuilder`**

-   The <code>sap.suite.ui.commons.CalculationBuilderItemType.<b>Constant</b></code> item type has been deprecated. You can use the new <code>sap.suite.ui.commons.CalculationBuilderItemType.<b>Literal</b></code> item type instead. The respective properties and methods have also been adapted for use with the new item type.

    For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.suite.ui.commons.CalculationBuilder).

-   The *Constants* item in the *Item Details* dialog has been replaced with the *Literal* input field. Users can enter text or numeric literals directly in this field.




</td>
</tr>
<tr>
<td valign="top">

**`sap.tnt.SideNavigation`**

We have added a UI adaptation at runtime \(RTA\) `rename` action for the `sap.tnt.SideNavigation` items. Now it is possible to rename the text properties of the control at runtime directly in the SAP Fiori launchpad, without having to write new code. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.tnt.SideNavigation) and the [Samples](https://ui5.sap.com/#/entity/sap.tnt.SideNavigation).



</td>
</tr>
<tr>
<td valign="top">

**`sap.ui.comp.smartfield.SmartField, sap.ui.comp.smartfilterbar.SmartFilterBar`**

We have introduced a new OData type, `NumericText`, to improve the `display-format` with `NonNegative` value of `NUMC` fields. Now all values containing only `0`, for example, `0`, `00`, `000`, etc. are displayed as an empty field.



</td>
</tr>
<tr>
<td valign="top">

**`sap.ui.comp.smarttable.SmartTable`**

-   If the `demandPopin` property is set to `true`, the automatic pop-in mode for controls of type `ResponsiveTable` is now used. The mode is activated by a mapping to the `autoPopinMode` property. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.Table%23methods/getAutoPopinMode) for the related method and the [Sample](https://ui5.sap.com/#/entity/sap.ui.comp.smarttable.SmartTable/sample/sap.ui.comp.sample.smarttable.mtable).

-   Column headers in controls of type `ResponsiveTable` now use the `sap.m.Label` control instead of the `sap.m.Text` control. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.ui.comp.smarttable.SmartTable/sample/sap.ui.comp.sample.smarttable.mtable).




</td>
</tr>
<tr>
<td valign="top">

**`sap.ui.comp.ValueHelpDialog`**

We have introduced a new `DeprecationCode` annotation in the `ValueHelpDialog` to differentiate between `valid`, `deprecated`, and `revoked` value statuses.

Values with `revoked` status are hidden from the `ValueHelpDialog` results unless the user specifically selects in the filtering to display them. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smartfield.SmartField%23annotations/Summary).



</td>
</tr>
<tr>
<td valign="top">

**`sap.ui.integration.widgets.Card`**

-   We have introduced loading animation for UI Integration Cards. It displays a preview with an animated placeholder, which indicates the type and the attributes of the card while loading. For more information, see the loading of card samples in the [Card Explorer](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/index.html#/exploreOverview/types)..

-   We have introduced `label` and `description` properties in the Parameters and Destinations sections of the manifest. This is useful for user-friendly visualization when working with design-time configuration tools.
-   The markdown feature of Microsoft Adaptive Cards in `sap.ui.integration.widgets.Card` of type Adaptive is now enabled. The `TextBlock` element of the card supports a subset of Markdown syntax, that is defined in Microsoft's Adaptive Card. For more information, see the [Markdown Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/adaptive/markdown) in the Card Explorer. 

-   We have enhanced the capabilities of the Adaptive Card by supporting the `data` property, provided on the `sap.card` level in the card's manifest. For more information, see the [Data and Templating Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/adaptive/data) in the Card Explorer.

-   We have enabled manifest authors to define a destination with a basic configuration for the `Submit` action of the Adaptive Card type. Now you can control and define how the `Submit` action would be handled via the manifest. For more information, see the [Adaptive Card](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/types/adaptive) section and the [Submit Action Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/adaptive/adaptive-action-submit) in the Card Explorer.




</td>
</tr>
<tr>
<td valign="top">

**`sap.ui.richtexteditor.RichTextEditor`**

We have enabled the native mobile TinyMCE support and you can now enable it in your app. Keep in mind that this feature comes with some limitations, and for that reason we do not recommend the use of it. For more information, see [sap.ui.richtexteditor](../10_More_About_Controls/sap-ui-richtexteditor-d4f3f15.md) and the [API Reference](https://ui5.sap.com/#/api/sap.ui.richtexteditor.RichTextEditor). 



</td>
</tr>
<tr>
<td valign="top">

**`sap.uxap.ObjectPageLayout`**

-   We’ve introduced the `showTitle` property for `sap.uxap.ObjectPageSubSection` to enable you to determine whether the subsection title is displayed. If a subsection is the only one \(or the only one visible\) within a section, its title is displayed instead of the section title, even if this property is set to `false`. To hide the title of a subsection that is the only one \(or the only one visible\), you need to set the `showTitle` properties to `false` for both `ObjectPageSection` and its `ObjectPageSubSection`.For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.uxap.ObjectPageSubSection).

-   We’ve introduced the `subSectionVisibilityChange` event. The event is fired when there’s a change in the visibility of the subsections of the page or the current tab \(when `ObjectPageLayout` is used in tabs-based mode\).For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.uxap.ObjectPageLayout) and the [Sample](https://ui5.sap.com/#/entity/sap.uxap.ObjectPageLayout/sample/sap.uxap.sample.ObjectPageState).




</td>
</tr>
</table>



<a name="loio2ec6b6b03ee249928bba929eec3d2d74__section_g3r_bf5_zcb"/>

## SAP Fiori Elements


<table>
<tr>
<td valign="top">

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




</td>
</tr>
</table>

**Related Information**  


[What's New in SAPUI5 1.108](what-s-new-in-sapui5-1-108-799291a.md "With this release SAPUI5 is upgraded from version 1.107 to 1.108.")

[What's New in SAPUI5 1.107](what-s-new-in-sapui5-1-107-b88b40e.md "With this release SAPUI5 is upgraded from version 1.106 to 1.107.")

[What's New in SAPUI5 1.106](what-s-new-in-sapui5-1-106-c70bb90.md "With this release SAPUI5 is upgraded from version 1.105 to 1.106.")

[What's New in SAPUI5 1.105](what-s-new-in-sapui5-1-105-5567dcc.md "With this release SAPUI5 is upgraded from version 1.104 to 1.105.")

[What's New in SAPUI5 1.104](what-s-new-in-sapui5-1-104-f01ebd4.md "With this release SAPUI5 is upgraded from version 1.103 to 1.104.")

[What's New in SAPUI5 1.103](what-s-new-in-sapui5-1-103-7534ae8.md "With this release SAPUI5 is upgraded from version 1.102 to 1.103.")

[What's New in SAPUI5 1.102](what-s-new-in-sapui5-1-102-b530db3.md "With this release SAPUI5 is upgraded from version 1.101 to 1.102.")

[What's New in SAPUI5 1.101](what-s-new-in-sapui5-1-101-5a18410.md "With this release SAPUI5 is upgraded from version 1.100 to 1.101.")

[What's New in SAPUI5 1.100](what-s-new-in-sapui5-1-100-5deb78f.md "With this release SAPUI5 is upgraded from version 1.99 to 1.100.")

[What's New in SAPUI5 1.99](what-s-new-in-sapui5-1-99-5e35c25.md "With this release SAPUI5 is upgraded from version 1.98 to 1.99.")

[What's New in SAPUI5 1.98](what-s-new-in-sapui5-1-98-7aacb4e.md "With this release SAPUI5 is upgraded from version 1.97 to 1.98.")

[What's New in SAPUI5 1.97](what-s-new-in-sapui5-1-97-f21858f.md "With this release SAPUI5 is upgraded from version 1.96 to 1.97.")

[What's New in SAPUI5 1.96](what-s-new-in-sapui5-1-96-b39a11b.md "With this release SAPUI5 is upgraded from version 1.95 to 1.96.")

[What's New in SAPUI5 1.95](what-s-new-in-sapui5-1-95-1b09465.md "With this release SAPUI5 is upgraded from version 1.94 to 1.95.")

[What's New in SAPUI5 1.94](what-s-new-in-sapui5-1-94-2d6ffdd.md "With this release SAPUI5 is upgraded from version 1.93 to 1.94.")

[What's New in SAPUI5 1.93](what-s-new-in-sapui5-1-93-e9c8356.md "With this release SAPUI5 is upgraded from version 1.92 to 1.93.")

[What's New in SAPUI5 1.92](what-s-new-in-sapui5-1-92-1492551.md "With this release SAPUI5 is upgraded from version 1.91 to 1.92.")

[What's New in SAPUI5 1.91](what-s-new-in-sapui5-1-91-75777da.md "With this release SAPUI5 is upgraded from version 1.90 to 1.91.")

[What's New in SAPUI5 1.90](what-s-new-in-sapui5-1-90-b475202.md "With this release SAPUI5 is upgraded from version 1.89 to 1.90.")

[What's New in SAPUI5 1.89](what-s-new-in-sapui5-1-89-0805036.md "With this release SAPUI5 is upgraded from version 1.88 to 1.89.")

[What's New in SAPUI5 1.88](what-s-new-in-sapui5-1-88-bda141b.md "With this release SAPUI5 is upgraded from version 1.87 to 1.88.")

[What's New in SAPUI5 1.87](what-s-new-in-sapui5-1-87-e315108.md "With this release SAPUI5 is upgraded from version 1.86 to 1.87.")

[What's New in SAPUI5 1.86](what-s-new-in-sapui5-1-86-067e2fb.md "With this release SAPUI5 is upgraded from version 1.85 to 1.86.")

[What's New in SAPUI5 1.85](what-s-new-in-sapui5-1-85-eeb5bd9.md "With this release SAPUI5 is upgraded from version 1.84 to 1.85.")

[What's New in SAPUI5 1.84](what-s-new-in-sapui5-1-84-ccf76b7.md "With this release SAPUI5 is upgraded from version 1.82 to 1.84.")

[What's New in SAPUI5 1.82](what-s-new-in-sapui5-1-82-f081cf0.md "With this release SAPUI5 is upgraded from version 1.81 to 1.82.")

[What's New in SAPUI5 1.81](what-s-new-in-sapui5-1-81-f71563c.md "With this release SAPUI5 is upgraded from version 1.80 to 1.81.")

[What's New in SAPUI5 1.80](what-s-new-in-sapui5-1-80-3294c68.md "With this release SAPUI5 is upgraded from version 1.79 to 1.80.")

[What's New in SAPUI5 1.79](what-s-new-in-sapui5-1-79-edf8e35.md "With this release SAPUI5 is upgraded from version 1.78 to 1.79.")

[What's New in SAPUI5 1.78](what-s-new-in-sapui5-1-78-d176be3.md "With this release SAPUI5 is upgraded from version 1.77 to 1.78.")

[What's New in SAPUI5 1.76](what-s-new-in-sapui5-1-76-b9b0a3f.md "With this release SAPUI5 is upgraded from version 1.75 to 1.76.")

[What's New in SAPUI5 1.75](what-s-new-in-sapui5-1-75-dc3d3ce.md "With this release SAPUI5 is upgraded from version 1.74 to 1.75.")

[What's New in SAPUI5 1.74](what-s-new-in-sapui5-1-74-21fc6cb.md "With this release SAPUI5 is upgraded from version 1.73 to 1.74.")

[What's New in SAPUI5 1.73](what-s-new-in-sapui5-1-73-7b82664.md "With this release SAPUI5 is upgraded from version 1.72 to 1.73.")

[What's New in SAPUI5 1.72](what-s-new-in-sapui5-1-72-25e5326.md "With this release SAPUI5 is upgraded from version 1.71 to 1.72.")

[What's New in SAPUI5 1.71](what-s-new-in-sapui5-1-71-609fd01.md "With this release SAPUI5 is upgraded from version 1.70 to 1.71.")

[What's New in SAPUI5 1.70](what-s-new-in-sapui5-1-70-4e89fee.md "With this release SAPUI5 is upgraded from version 1.69 to 1.70.")

[What's New in SAPUI5 1.69](what-s-new-in-sapui5-1-69-41203fd.md "With this release SAPUI5 is upgraded from version 1.68 to 1.69.")

[What's New in SAPUI5 1.68](what-s-new-in-sapui5-1-68-5531aef.md "With this release SAPUI5 is upgraded from version 1.67 to 1.68.")

[What's New in SAPUI5 1.67](what-s-new-in-sapui5-1-67-0968958.md "With this release SAPUI5 is upgraded from version 1.66 to 1.67.")

[What's New in SAPUI5 1.66](what-s-new-in-sapui5-1-66-ebe7fda.md "With this release SAPUI5 is upgraded from version 1.65 to 1.66.")

[What's New in SAPUI5 1.65](what-s-new-in-sapui5-1-65-9d2b189.md "With this release SAPUI5 is upgraded from version 1.64 to 1.65.")

[What's New in SAPUI5 1.64](what-s-new-in-sapui5-1-64-1975e30.md "With this release SAPUI5 is upgraded from version 1.63 to 1.64.")

[What's New in SAPUI5 1.63](what-s-new-in-sapui5-1-63-77e1dcc.md "With this release SAPUI5 is upgraded from version 1.62 to 1.63.")

[What's New in SAPUI5 1.62](what-s-new-in-sapui5-1-62-27eea38.md "With this release SAPUI5 is upgraded from version 1.61 to 1.62.")

[What's New in SAPUI5 1.61](what-s-new-in-sapui5-1-61-de4d50b.md "With this release SAPUI5 is upgraded from version 1.60 to 1.61.")

[What's New in SAPUI5 1.60](what-s-new-in-sapui5-1-60-2a70354.md "With this release SAPUI5 is upgraded from version 1.58 to 1.60.")

[What's New in SAPUI5 1.58](what-s-new-in-sapui5-1-58-b28edde.md "With this release, SAPUI5 is upgraded from version 1.56 to 1.58.")

[What's New in SAPUI5 1.56](what-s-new-in-sapui5-1-56-53b4b5e.md "With this release, SAPUI5 is upgraded from version 1.54 to 1.56.")

[What's New in SAPUI5 1.54](what-s-new-in-sapui5-1-54-f29023e.md "With this release, SAPUI5 is upgraded from version 1.52 to 1.54.")

[What's New in SAPUI5 1.52](what-s-new-in-sapui5-1-52-a09dd79.md "With this release, SAPUI5 is upgraded from version 1.50 to 1.52.")

[What's New in SAPUI5 1.50](what-s-new-in-sapui5-1-50-a844984.md "With this release, SAPUI5 is upgraded from version 1.48 to 1.50.")

[What's New in SAPUI5 1.48](what-s-new-in-sapui5-1-48-2818f80.md "With this release, SAPUI5 is upgraded from version 1.46 to 1.48.")

[What's New in SAPUI5 1.46](what-s-new-in-sapui5-1-46-4cf0986.md "With this release, SAPUI5 is upgraded from version 1.44 to 1.46.")

[What's New in SAPUI5 1.44](what-s-new-in-sapui5-1-44-05ce1dc.md "With this release, SAPUI5 is upgraded from version 1.42 to 1.44.")

[What's New in SAPUI5 1.42](what-s-new-in-sapui5-1-42-4768f1a.md "With this release, SAPUI5 is upgraded from version 1.40 to 1.42.")

[What's New in SAPUI5 1.40](what-s-new-in-sapui5-1-40-e659bd2.md "With this release, SAPUI5 is upgraded from version 1.38 to 1.40.")

[What's New in SAPUI5 1.38](what-s-new-in-sapui5-1-38-6a875f9.md#loio6a875f998994489483e8085705347d72 "With this release, SAPUI5 is upgraded from version 1.36 to 1.38.")

