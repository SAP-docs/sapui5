<!-- loioc70bb907d05a4f9fb6c36ecf73b3fb2e -->

# What's New in SAPUI5 1.106

With this release SAPUI5 is upgraded from version 1.105 to 1.106.



<a name="loioc70bb907d05a4f9fb6c36ecf73b3fb2e__section_pzq_t5d_s5b"/>

## Preview and Announcements

The following information concerns important upcoming changes. UI changes may have an impact on the user experience and may require test cases to be adapted.


<table>
<tr>
<th valign="top">

Type



</th>
<th valign="top">

Description



</th>
<th valign="top">

Available as of SAPUI5 Version



</th>
</tr>
<tr>
<td valign="top">

Announcement



</td>
<td valign="top">

**Deactivation of Default Time Zone Configuration Feature**

We needed to deactivate the feature to configure the default time zone via the time zone configuration option in [`sap.ui.core.Configuration`](https://ui5.sap.com/#/api/sap.ui.core.Configuration) and the API method [`sap.ui.core.Configuration.setTimezone`](https://ui5.sap.com/#/api/sap.ui.core.Configuration/methods/setTimezone). Reason: There was a risk that dates are visualized by one day off. This wrong date might have been persisted to the back end.

This feature was introduced with UI5 1.102.0. The following UI5 versions still contain this feature:

-   1.102.0 to 1.102.5
-   1.103
-   1.104

If you are on one of these releases, we recommend that you upgrade to a higher version where this feature is deactivated.

We plan to bring this feature back in a different form at a later point in time.



</td>
<td valign="top">

Deactivated as of:

1.106

1.105

1.102.6



</td>
</tr>
<tr>
<td valign="top">

Announcement



</td>
<td valign="top">

**Reminder: Outdated SAPUI5 Versions to Be Removed from the CDN**

For security reasons, SAPUI5 versions that are no longer maintained will be removed from the UI5 content delivery network \(CDN\) one year after their end of maintenance. If a version is still in maintenance, patches of that version that are older than one year will also be removed. We have noted that a number of customers are still using such outdated versions or patches. If this affects you, please note that once these versions or patches are removed, your applications will break. Please update to a more recent version or patch. For more information, see: [Removing Outdated UI5 Versions from UI5 CDN](https://blogs.sap.com/2021/01/26/removing-outdated-ui5-versions-from-ui5-cdn/) as well as the UI5 notifications in the Demo Kit.



</td>
<td valign="top">

 



</td>
</tr>
<tr>
<td valign="top">

UI Change



</td>
<td valign="top">

**Object Pages: Header Facets in Scrollable Containers**

On desktop computers, header facets that include information or important KPIs are shown in scrollable containers by default as they are on mobile devices. If several header facets are available, the user may need to scroll horizontally to view all of them.



</td>
<td valign="top">

1.106



</td>
</tr>
<tr>
<td valign="top">

UI Change



</td>
<td valign="top">

**Object Pages: Sections Now Show Six Columns by Default**

To reduce empty spaces on very large screens in object page apps, sections show six columns by default instead four.



</td>
<td valign="top">

1.106



</td>
</tr>
</table>

> ### Note:  
> Content marked as **Preview** is provided as a courtesy, without a warranty, and may be subject to change. For more information, see the [preview disclaimer](https://help.sap.com/viewer/wnp_disclaimer).



<a name="loioc70bb907d05a4f9fb6c36ecf73b3fb2e__section_rqn_wd5_zcb"/>

## Improved Controls


<table>
<tr>
<td valign="top">

**`sap.m.Image` \(Experimental\)**

We have enabled inline rendering of SVG files, so that they can be themeable and overstyled with a custom CSS. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.Image). 



</td>
</tr>
<tr>
<td valign="top">

**`sap.suite.ui.commons.Timeline`**

You can now configure the timeline control to visualize the respective IANA time zones within the timeline header bar. To do so, you can select *Custom Range* within *Time Range* while using *Filter By*. The time zone can either be passed using the configuration or specified using an annotation from a back-end service. If no time zone is maintained or if the time zone is invalid, the date/time is set to the local time zone.



</td>
</tr>
<tr>
<td valign="top">

**`sap.ui.comp.smartchart.SmartChart`**

-   To improve usability, we have adapted the messages that are shown if no data is available. Different messages are shown depending on the following conditions:

    -   During the initial state of the chart and depending on whether there is a `sap.ui.comp.filterbar.FilterBar` control

    -   After a first back-end request if no data is available

    -   After a first back-end request if no data and no `FilterBar` are available


-   We have introduced the new `notAssignedText` property. The property can be used to provide a description for fields with an empty string.

     For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smartchart.SmartChart%23methods/getNotAssignedText) and the [Samples](https://ui5.sap.com/#/entity/sap.ui.comp.smartchart.SmartChart).




</td>
</tr>
<tr>
<td valign="top">

**`sap.ui.comp.smartfield.SmartField`**

We have enabled key user adaptation for `TextArrangement` annotation types. Key users can now overwrite the `TextSeparate`, `TextFirst`, `TextLast`, and `TextOnly` values from the back-end metadata by choosing a new value from the UI Adaptation dialog.



</td>
</tr>
<tr>
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




</td>
</tr>
<tr>
<td valign="top">

**`sap.uxap.ObjectPageSection`**

We have introduced a new `heading` aggregation that allows you to include content, such as message strips, at the beginning of a section. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.uxap.ObjectPageSection) and the [Samples](https://ui5.sap.com/#/entity/sap.uxap.ObjectPageSection).



</td>
</tr>
</table>



<a name="loioc70bb907d05a4f9fb6c36ecf73b3fb2e__section_cps_cg5_zcb"/>

## Deprecations


<table>
<tr>
<td valign="top">

There are currently no major deprecations. For a complete list of all deprecations, see [Deprecated APIs](https://ui5.sap.com/#/api/deprecated). 



</td>
</tr>
</table>



<a name="loioc70bb907d05a4f9fb6c36ecf73b3fb2e__section_g3r_bf5_zcb"/>

## SAP Fiori Elements


<table>
<tr>
<td valign="top">

The following changes and new features are available for both SAP Fiori elements for OData V2 and SAP Fiori elements for OData V4:

-   We've now improved the content density so that the object page shows form data spread across six columns instead of four columns when opened on extra large screens. For more information, see [Defining and Adapting Sections](../06_SAP_Fiori_Elements/defining-and-adapting-sections-facfea0.md).

-   For the value help fields, a side effect is now triggered when the focus moves away from the source field group. For more information, see [Side Effects](../06_SAP_Fiori_Elements/side-effects-18b17bd.md).




</td>
</tr>
<tr>
<td valign="top">

The following changes and new features are available for SAP Fiori elements for OData V2:

-   The global side effect is now triggered only from the fields of the entity where the side effect is defined. For more information, see [Using the Global Side Effect](../06_SAP_Fiori_Elements/using-the-global-side-effect-955ae31.md).

-   You can now override the default behavior of the `ValueListNoValidation` for value help fields to include client-side validation. For more information, see [Displaying Text and ID for Value Help Input Fields](../06_SAP_Fiori_Elements/displaying-text-and-id-for-value-help-input-fields-080886d.md).

-   The refresh action upon pressing [Enter\] on the edit fields of a draft object page is now suppressed, unless it is explicitly configured. For more information, see [Using the Global Side Effect](../06_SAP_Fiori_Elements/using-the-global-side-effect-955ae31.md).

-   You can now define keyboard shortcuts for application-specific function import actions in the[Keyboard Shortcuts](../06_SAP_Fiori_Elements/keyboard-shortcuts-0cd318c.md).




</td>
</tr>
<tr>
<td valign="top">

The following changes and new features are available for SAP Fiori elements for OData V4:

-   We now provide the possibility to define a default action for menu buttons in list reports, object page headers, and forms. For more information, see the section *Defining a Default Action for a Menu Button* in [Actions](../06_SAP_Fiori_Elements/actions-cbf16c5.md).

-   You can now define default values for operators that require parameters, such as Next "X" Days. For more information, see [Enabling Semantic Operators in the Filter Bar](../06_SAP_Fiori_Elements/enabling-semantic-operators-in-the-filter-bar-fef65d0.md).

-   We've enabled the handling of side effects for the mass edit functionality. For more information, see [Enabling Editing Using a Dialog \(Mass Edit\)](../06_SAP_Fiori_Elements/enabling-editing-using-a-dialog-mass-edit-965ef5b.md).

-   `Edm.DateTime`-based fields now also support semantic dates. For more information, see [Enabling Semantic Operators in the Filter Bar](../06_SAP_Fiori_Elements/enabling-semantic-operators-in-the-filter-bar-fef65d0.md).




</td>
</tr>
</table>

