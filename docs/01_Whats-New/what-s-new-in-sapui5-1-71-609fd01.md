<!-- loio609fd015eaf64bd2a4a5c0331590eb4c -->

# What's New in SAPUI5 1.71

With this release SAPUI5 is upgraded from version 1.70 to 1.71.



<a name="loio609fd015eaf64bd2a4a5c0331590eb4c__section_qwl_pb5_zcb"/>

## Improved Features


<table>
<tr>
<td valign="top">

**Card Explorer**

-   An entire new *Integrate* section has been added to the Card Explorer with more information about card consumption in the host environment - in apps, dashboards, or on any HTML page. This section gives you more information on how to use integration cards in apps and about the integration card API.

-   The Card Explorer now preserves the page last visited and thus offers an improved usability and better navigation.

For more information, see [Card Explorer](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/index.html).



</td>
</tr>
<tr>
<td valign="top">

**Handling of Currencies During Spreadsheet Export**

The export of currencies with a special formatting of decimals is now supported. To achieve this, the export takes `getCustomCurrencies` of `sap.ui.core.Configuration.FormatSettings` into account.



</td>
</tr>
<tr>
<td valign="top">

**Pre-Announcement: Deprecation of the SAPUI5 Tools for Eclipse**

Version 1.71 is the last SAPUI5 version for which we will update the [SAPUI5 Tools for Eclipse](https://tools.hana.ondemand.com/#sapui5).

> ### Caution:  
> After the release of SAPUI5 1.71, the SAPUI5 Tools for Eclipse will no longer be maintained.

We recommend that you use SAP Web IDE as the development environment for SAPUI5. For more information, see [App Development Using SAP Web IDE](../03_Get-Started/app-development-using-sap-web-ide-13ced94.md).



</td>
</tr>
<tr>
<td valign="top">

**Rule Expressions in Expression Language 2.0**

You can now type the rule expressions in expression language 2.0 in the rule builder control. For more information, see **Expression Language 2.0** in [Rule Builder Control](../03_Get-Started/rule-builder-control-67fcb30.md).



</td>
</tr>
<tr>
<td valign="top">

**SAPUI5 OData V4 Model**

The new version of the SAPUI5 OData V4 model introduces the following features:

-   Custom HTTP headers can be set statically in the manifest or dynamically using `sap.ui.model.odata.v4.ODataModel.changeHttpHeaders`.

-   Annotations for individual overloads of bound actions in the OData 4.01 format are understood as well.

-   `sap.ui.model.odata.v4.Context.requestSideEffects` can now also be called on a context belonging to a context binding that does not request data on its own. The call of `requestSideEffects` is propagated upwards in the binding hierarchy until a context binding or list binding that sends its own data requests is found. During the propagation, list bindings that do not send own data requests must not be passed.

-   Metadata parsing now uses a last-one-wins strategy for duplicated names consistently, also if operations are part of the duplicates.

-   With the model setting `autoExpandSelect:true`, property bindings that become active after their parent context or list binding has sent the first data request will be able to store their data so it can be reused by a later property binding with the same relative path and the same binding context.


> ### Restriction:  
> Due to the limited feature scope of this version of the SAPUI5 OData V4 model, check that all required features are in place before developing freestyle and SAP Fiori elements applications. Double-check the detailed documentation of the features, as certain parts of a feature may be missing. While we aim to be compatible with existing controls, some controls might not work due to small incompatibilities compared to `sap.ui.model.odata.(v2.)ODataModel`, or due to missing features in the model \(such as tree binding\). This also applies to smart controls \(`sap.ui.comp` library\) that do not support the SAPUI5 OData V4 model, as well as controls such as `TreeTable` and `AnalyticalTable`, which are not supported in combination with the SAPUI5 OData V4 model. The interface for applications has been changed for easier and more efficient use of the model. For a summary of these changes, see [Changes Compared to OData V2 Model](../04_Essentials/changes-compared-to-odata-v2-model-abd4d7c.md).

For more information, see [OData V4 Model](../04_Essentials/odata-v4-model-5de13cf.md), the [API Reference](https://ui5.sap.com/#/api/sap.ui.model.odata.v4), and the [Samples](https://ui5.sap.com/#/entity/sap.ui.model.odata.v4.ODataModel).



</td>
</tr>
<tr>
<td valign="top">

**Static Checks on Apps in the SAPUI5 ABAP Repository**

You can now use Code Inspector to perform certain checks for SAPUI5 apps that are stored in the SAPUI5 ABAP repository. For more information, see [Perform Static Checks on SAPUI5 Apps](../05_Developing_Apps/perform-static-checks-on-sapui5-apps-77b2d31.md).



</td>
</tr>
<tr>
<td valign="top">

**Support Assistant**

The file extension assertion `getReportAsFileInFormat` for OPA tests; which enables Support Assistant checks`RuleEngineOpaExtension`, has changed. Now, the value of the `fileName` parameter should have the extension `.support-assistant.json`, or it will automatically be changed to `.support-assistant.json`. This new feature will improve file recognition in automated test scenarios. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.core.support.RuleEngineOpaAssertions/methods/sap.ui.core.support.RuleEngineOpaAssertions.getReportAsFileInFormat).



</td>
</tr>
</table>



<a name="loio609fd015eaf64bd2a4a5c0331590eb4c__section_rqn_wd5_zcb"/>

## Improved Controls


<table>
<tr>
<td valign="top">

**`sap.f.dnd.GridDropInfo`**

We have introduced a new `dropIndicatorSize` property. It allows the app developer to specify the size of the drop indicator for items which are not part of the grid, for example, if a flat list item is dragged over an `sap.f.GridContainer`. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.f.dnd.GridDropInfo) and the [Sample](https://ui5.sap.com/#/entity/sap.f.GridContainer/sample/sap.f.sample.GridContainerDragAndDropFromList).



</td>
</tr>
<tr>
<td valign="top">

**`sap.f.DynamicPage`, `sap.uxap.ObjectPageLayout`**

We introduced visual improvements based on the latest SAP Fiori Design Guidelines. We adapted the headers of the controls to improve the visual hierarchy and achieve consistency between pages and floorplans.



</td>
</tr>
<tr>
<td valign="top">

**`sap.f.FlexibleColumnLayout`**

We introduced a visual improvement of the column separator to enhance its visibility. It is applied to the SAP Quartz Light theme and both SAP Belize themes \(along with the high-contrast themes\), and there are no differences between the cozy mode and the compact mode.For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.f.FlexibleColumnLayout/sample/sap.f.sample.FlexibleColumnLayoutWithTwoColumnStart).



</td>
</tr>
<tr>
<td valign="top">

**`sap.f.GridContainer`**

This control is no longer experimental, but some properties, methods, and aggregations are still in experimental state.For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.f.GridContainer). 



</td>
</tr>
<tr>
<td valign="top">

**`sap.m.Dialog, sap.m.IconTabBar`, and `sap.m.Input`**

Visual improvements based on the latest SAP Fiori Design Guidelines were implemented for the SAP Quartz Light theme.

-   `sap.m.Dialog` - button stretching on mobile phones has been removed.

-   `sap.m.Input` - `Success` semantic state border is now 1 px for both the SAP Quartz Light and SAP Belize themes.
-   `sap.m.IconTabBar` - top, right, and left shadows are hidden. The bottom shadow is visible over the content, and the bottom border has been removed.



</td>
</tr>
<tr>
<td valign="top">

**`sap.m.Label`**

Visual changes have been introduced. If the `required` property is set to `true`, the asterisk is now smaller and darker. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.m.Label/sample/sap.m.sample.Label).



</td>
</tr>
<tr>
<td valign="top">

**`sap.m.Link`**

A new key user adaptation/SAPUI5 flexibility feature now enables the `target` property to be changed in the UI Adaptation mode if the `href` property is set. For more information, see the [Samples](https://ui5.sap.com/#/entity/sap.m.Link).



</td>
</tr>
<tr>
<td valign="top">

**`sap.m.PlanningCalendar`**

We have changed the look of the `sap.m.PlanningCalendar`. The header part is now aligned with the one of `sap.m.SinglePlanningCalendar` to have a similar experience when interacting with the two controls. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.m.PlanningCalendar/sample/sap.m.sample.PlanningCalendarModifyAppointments).



</td>
</tr>
<tr>
<td valign="top">

**`sap.m.SelectDialog`**

We have updated the behavior of the `sap.m.SelectDialog` when the single selection mode has the `rememberSelections` property set to `true`. Now the user can close the `SelectDialog` by pressing the already selected item from a single selection dialog. This means that the users no longer need to press *Cancel*, if they have opened the `SelectDialog` for a second time to check what was previously selected. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.SelectDialog) and the [Sample](https://ui5.sap.com/#/entity/sap.m.SelectDialog). 



</td>
</tr>
<tr>
<td valign="top">

**`sap.m.SinglePlanningCalendar`**

A new `viewChange` event has been introduced, which is fired when the user changes the view of the control. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.SinglePlanningCalendar) and the [Sample](https://ui5.sap.com/#/entity/sap.m.SinglePlanningCalendar/sample/sap.m.sample.SinglePlanningCalendar).



</td>
</tr>
<tr>
<td valign="top">

**`sap.m.TableSelectDialog`**

The new `resizable` and `draggable` properties have been introduced which affect the desktop mode. They allow the `TableSelectDialog` to be dragged and resized. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.TableSelectDialog) and the [Sample](https://ui5.sap.com/#/entity/sap.m.TableSelectDialog/sample/sap.m.sample.TableSelectDialog).



</td>
</tr>
<tr>
<td valign="top">

**`sap.m.ViewSettingsDialog`**

We have improved the user experience of the search. When there are no items matching the search criteria, the *Select All* checkbox is disabled. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.ViewSettingsDialog).



</td>
</tr>
<tr>
<td valign="top">

**`sap.ui.comp.smarttable.SmartTable`**

An `sap.m.ObjectIdentifier` entity is now also rendered for fields that point to semantic keys using the `Common.EditableFieldFor` annotation. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smarttable.SmartTable) for the `SemanticKey` annotation and the [Sample](https://ui5.sap.com/#/entity/sap.ui.comp.smarttable.SmartTable/sample/sap.ui.comp.sample.smarttable.smartMTableWithCriticality).



</td>
</tr>
<tr>
<td valign="top">

**`sap.ui.integration.widgets.Card`**

-   Static resource handling improvements have been introduced. Relative URLs for static resources \(i18n files, icons, and images\) inside the manifest can now be resolved based on the provided path in the `baseURL` property. This property helps to resolve the card bundle resource locations, in cases when the card manifest is provided as an object.

-   We have introduced a new `withCredentials` boolean property for the `sap.ui.integration.widgets.Card`’s manifest. It is part of the `request` property. It indicates whether cross-site requests should be made using credentials or not.


For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.integration.widgets.Card).



</td>
</tr>
<tr>
<td valign="top">

**`sap.ui.table.AnalyticalTable`, `sap.ui.table.Table`, `sap.ui.table.TreeTable`**

The new `enableNotification` property of `MultiSelectionPlugin` can be used to display a message when the limit of rows that has been selected at the same time is reached.

For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.table.plugins.MultiSelectionPlugin) and the [Sample](https://ui5.sap.com/#/entity/sap.ui.table.Table/sample/sap.ui.table.sample.MultiSelectionPlugin).



</td>
</tr>
</table>



<a name="loio609fd015eaf64bd2a4a5c0331590eb4c__section_g3r_bf5_zcb"/>

## SAP Fiori Elements


<table>
<tr>
<td valign="top">

**List Report and Object Page**

General Features

You can now use `typeImageURL` as a fallback option for the header image. For more information, see [Using Images, Initials, and Icons](../06_SAP_Fiori_Elements/using-images-initials-and-icons-5760b63.md).

The list report has these new features:

-   The default text in the Delete dialog box has been enhanced to provide object information. For more information, see [Configuring the Delete Dialog Box](../06_SAP_Fiori_Elements/configuring-the-delete-dialog-box-15b7740.md).

-   You can use the SAPUI5 Visual Editor to improve the usability of the list report's table layout if a high number of columns is displayed by choosing different popin layout options. For more information, see [Adapting the UI: List Report and Object Page](../06_SAP_Fiori_Elements/adapting-the-ui-list-report-and-object-page-0d2f1a9.md).

The object page has this new feature:

In non-draft applications, the *Save and Edit* button can be enabled using the SAPUI5 Visual Editor. With this option, the object page can be kept forever in edit mode, with intermediate saving. For more information, see [Displaying Actions on the Object Page](../06_SAP_Fiori_Elements/displaying-actions-on-the-object-page-f65e8b1.md).



</td>
</tr>
</table>

**Related Information**  


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

[What's New in SAPUI5 1.77](what-s-new-in-sapui5-1-77-2ec6b6b.md "With this release SAPUI5 is upgraded from version 1.76 to 1.77.")

[What's New in SAPUI5 1.76](what-s-new-in-sapui5-1-76-b9b0a3f.md "With this release SAPUI5 is upgraded from version 1.75 to 1.76.")

[What's New in SAPUI5 1.75](what-s-new-in-sapui5-1-75-dc3d3ce.md "With this release SAPUI5 is upgraded from version 1.74 to 1.75.")

[What's New in SAPUI5 1.74](what-s-new-in-sapui5-1-74-21fc6cb.md "With this release SAPUI5 is upgraded from version 1.73 to 1.74.")

[What's New in SAPUI5 1.73](what-s-new-in-sapui5-1-73-7b82664.md "With this release SAPUI5 is upgraded from version 1.72 to 1.73.")

[What's New in SAPUI5 1.72](what-s-new-in-sapui5-1-72-25e5326.md "With this release SAPUI5 is upgraded from version 1.71 to 1.72.")

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

