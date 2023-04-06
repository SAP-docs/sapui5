<!-- loio34afc69bf9194d43a9f49042825bb199 -->

<link rel="stylesheet" type="text/css" href="../css/sap-icons.css"/>

# What's New in SAPUI5 1.112

With this release SAPUI5 is upgraded from version 1.111 to 1.112.

> ### Tip:  
> If you want to do a search across all versions of the What's New content, you can also find it in the [SAPUI5 What's New viewer](https://help.sap.com/whats-new/67f60363b57f4ac0b23efd17fa192d60).

> ### Note:  
> Content marked as <span style="color:#666666;"><span class="SAP-icons"></span></span>** [Preview](https://help.sap.com/docs/whats-new-disclaimer)** is provided as a courtesy, without a warranty, and may be subject to change. For more information, see the [preview disclaimer](https://help.sap.com/docs/whats-new-disclaimer).

** **


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

 **End of Cloud Provisioning for SAPUI5 Versions \(Q1/2023\).** 



</td>
<td valign="top">

**End of Cloud Provisioning for SAPUI5 Versions \(Q1/2023\)**

**Minor Versions Reaching Their End of Cloud Provisioning**

The following versions including all patches will be removed entirely:

-   1.90
-   1.93
-   1.97
-   1.98

Action: Upgrade to a version that’s still in maintenance.

**Patch Versions Reaching Their End of Cloud Provisioning**

The following patches will be removed:

-   Long-term maintenance versions:

    -   1.38.53 to 1.38.55
    -   1.71.44 to 1.71.46
    -   1.84.21 to 1.84.23
    -   1.96.2 to 1.96.7

    Action: Upgrade to the latest available patch for the respective SAPUI5 version.


For more information, see [UI5 Releases Ending Service in 2023](https://blogs.sap.com/2022/12/05/ui5-releases-ending-service-in-2023/) and [Version Overview](https://ui5.sap.com/versionoverview.html).

<sub><span style="color:#666666;"><span class="SAP-icons"></span></span>** [Preview](https://help.sap.com/docs/whats-new-disclaimer)**•Deleted•Announcement•Info Only•Upcoming</sub>



</td>
<td valign="top">

 Required 



</td>
<td valign="top">

2023-03-31



</td>
</tr>
<tr>
<td valign="top">

 1.112 



</td>
<td valign="top">

 Changed 



</td>
<td valign="top">

 Announcement 



</td>
<td valign="top">

 **What's New Viewer for OpenUI5** 



</td>
<td valign="top">

**What's New Viewer for OpenUI5**

Due to some issues with references to OpenUI5 content we had to remove the What's New viewer for OpenUI5. The What's New viewer is therefore only available in SAPUI5. For more information, see [Want to Know What’s New in SAPUI5 and SAP Fiori Elements? Check the What’s New Viewer!](https://blogs.sap.com/?p=1702680).

<sub>Changed•Announcement•Info Only•1.112</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2023-03-23



</td>
</tr>
<tr>
<td valign="top">

 1.112 



</td>
<td valign="top">

 Changed 



</td>
<td valign="top">

 Control 



</td>
<td valign="top">

 **`sap.m.Input`, `sap.m.ComboBox`, `sap.m.MultiComboBox`** 



</td>
<td valign="top">

**`sap.m.Input`, `sap.m.ComboBox`, `sap.m.MultiComboBox`**

We have removed the experimental flag for the `showItems(fnFilter)` method. For more information, see the [`sap.m.Input`API Reference](https://ui5.sap.com/#/api/sap.m.Input/methods/showItems) and [`sap.m.ComboBoxBase`API Reference](https://ui5.sap.com/#/api/sap.m.ComboBoxBase/methods/showItems).

<sub>Changed•Control•Info Only•1.112</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2023-03-23



</td>
</tr>
<tr>
<td valign="top">

 1.112 



</td>
<td valign="top">

 Changed 



</td>
<td valign="top">

 Control 



</td>
<td valign="top">

 **`sap.m.IllustratedMessage`** 



</td>
<td valign="top">

**`sap.m.IllustratedMessage`**

-   We have added a new sample that demonstrates how to use `sap.m.IllustratedMessage` with an external illustration set. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.m.IllustratedMessage/sample/sap.m.sample.IllustratedMessageInPageCustom).

-   We have added a new `ariaTitleLevel` property. It allows setting custom aria-level values to the title in `sap.m.IllustratedMessage`. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.IllustratedMessage). 

<sub>Changed•Control•Info Only•1.112</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2023-03-23



</td>
</tr>
<tr>
<td valign="top">

 1.112 



</td>
<td valign="top">

 Deprecated 



</td>
<td valign="top">

 Control 



</td>
<td valign="top">

 **`sap.m.MessagePage`** 



</td>
<td valign="top">

**`sap.m.MessagePage`**

We have deprecated the `sap.m.MessagePage`, and recommend using the `sap.m.IllustratedMessage` instead.

<sub>Deprecated•Control•Info Only•1.112</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2023-03-23



</td>
</tr>
<tr>
<td valign="top">

 1.112 



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

-   Selection of the *Select All* checkbox within responsive tables of the list report and object pages now shows a message toast with a count of the selected items. For more information, see [Enabling Multiple Selection in Tables](../06_SAP_Fiori_Elements/enabling-multiple-selection-in-tables-116b5d8.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.112</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2023-03-23



</td>
</tr>
<tr>
<td valign="top">

 1.112 



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

-   We now offer a streamlined way to include reuse components on an object page. For more information, see [Including Reuse Components on an Object Page](../06_SAP_Fiori_Elements/including-reuse-components-on-an-object-page-d869d7a.md).

-   You can now use filtering within chart personalization. For more information, see [Enabling Chart Personalization](../06_SAP_Fiori_Elements/enabling-chart-personalization-7d41330.md).

-   We have removed a restriction for handling 412 \("Precondition failed"\) messages. For more information, see [Confirmation Popups](../06_SAP_Fiori_Elements/confirmation-popups-9a53662.md).

-   We have added a new button, *Validate*, to the object page for applications that are being run on tablets and mobile devices. For more information, see [Draft Handling](../06_SAP_Fiori_Elements/draft-handling-ed9aa41.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.112</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2023-03-23



</td>
</tr>
<tr>
<td valign="top">

 1.112 



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

-   We have \(experimentally\) introduced two new `ShowCard` and `HideCard` actions that enable you, from one card, to open another card that shows more details or actions. The `ShowCard` action opens a dialog with the new card, which is created by a given manifest. The `HideCard` action closes this dialog. For more information, see the [Show Card](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/actions/showCard) section and the [Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/cardActions/showHideCard) in the Card Explorer.

-   We have \(experimentally\) enhanced the Object card and now it also supports `Image` and `Input` as content types. For more information, see the [Object Card](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/typesDeclarative/object) section and the [Samples](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/object/formWithValidation) in the Card Explorer.

-   We have added a new \(experimental\) `previewMode` property that can be used when the end user is exploring, selecting, or configuring cards. It depends on the host environment to trigger the card rendering into the required preview mode. The available options for the host developers are:

    -   `Off` \(default\) - live data is displayed.
    -   `MockData` - the card shows mock data, loaded using a data request. The card developer should set the data source in the `data/mockData` part of the manifest.
    -   `Abstract` - the card shows an abstract placeholder without loading data.

     For more information, see the [Integrate/Preview](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/integrate/preview) section and the [Samples](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/preview) in the Card Explorer. 

-   The date range filter now supports several new options: `dateTimeRange`, `fromDateTime`, `toDateTime`, and `dateTime`. For more information, see the [Date Range Filter](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/filters/dateRange) section and the [Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/dateRangeFilter/agenda) in the Card Explorer.

<sub>Changed•Control•Info Only•1.112</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2023-03-23



</td>
</tr>
<tr>
<td valign="top">

 1.112 



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

**sap.ui.comp.smartfilterbar.SmartFilterBar**

We have added support for several new interval options of the `DynamicDateRange` control. Now you can also create filters with `NEXTMINUTES`, `NEXTHOURS`, `LASTMINUTES`, and `LASTHOUTRS` options. For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.ui.comp.smartfilterbar.SmartFilterBar/sample/sap.ui.comp.sample.smartfilterbar.UseDateRangeType).

<sub>Changed•Control•Info Only•1.112</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2023-03-23



</td>
</tr>
<tr>
<td valign="top">

 1.112 



</td>
<td valign="top">

 Changed 



</td>
<td valign="top">

 Control 



</td>
<td valign="top">

 **`sap.ui.comp.valuehelpdialog.ValueHelpDialog`** 



</td>
<td valign="top">

**`sap.ui.comp.valuehelpdialog.ValueHelpDialog`**

We have removed the leftmost \(empty\) column of the items table when the control is in single-items selection mode. This column is shown only in multiple-items selection mode where the user can select more than one row in the table.

<sub>Changed•Control•Info Only•1.112</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2023-03-23



</td>
</tr>
<tr>
<td valign="top">

 1.112 



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

-   We now provide Deep Create in a first version as an experimental feature. You can use a transient context as the binding context of a list binding and call `sap.ui.model.odata.v4.ODataListBinding#create` on that dependent list binding. Note that the Deep Create feature is currently neither complete nor intended for productive use.
-   The experimental hierarchy feature introduced with SAPUI5 1.105 now works if the hierarchy properties announced by the [Org.OData.Aggregation.V1.RecursiveHierarchy](https://oasis-tcs.github.io/odata-vocabularies/vocabularies/Org.OData.Aggregation.V1.html#RecursiveHierarchy) and [com.sap.vocabularies.Hierarchy.v1.RecursiveHierarchy](https://github.com/SAP/odata-vocabularies/blob/main/vocabularies/Hierarchy.md) annotations are part of a property of the complex type.
-   You can now specify `$$sharedRequest:false` for list bindings. This is helpful for list bindings of separate value list models, as `$$sharedRequest` defaults to `true` for these bindings.

<sub>Changed•Feature•Info Only•1.112</sub>



</td>
<td valign="top">

 Info Only 



</td>
<td valign="top">

2023-03-23



</td>
</tr>
</table>

