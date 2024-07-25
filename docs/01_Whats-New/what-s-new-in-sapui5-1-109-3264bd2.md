<!-- loio3264bd2bb9af4998935c7933d0344d1a -->

# What's New in SAPUI5 1.109

With this release SAPUI5 is upgraded from version 1.108 to 1.109.

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

1.109 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.fl.variants.VariantManagement`** 

</td>
<td valign="top">

**`sap.ui.fl.variants.VariantManagement`**

-   We have improved the usability of the UI for views: There is no longer a CSS-based, fixed maximum width for the control. The control is now fully responsive, for example, to show longer view titles. You can still limit the maximum width of the control by using the `maxWidth` property. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.fl.variants.VariantManagement%23methods/setMaxWidth).

-   You can now configure the style of view titles by using the `titleStyle` property. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.fl.variants.VariantManagement%23methods/setTitleStyle).


<sub>Changed•Control•Info Only•1.109</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-12-01

</td>
</tr>
<tr>
<td valign="top">

1.109 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.comp.smartvariants.SmartVariantManagement`** 

</td>
<td valign="top">

**`sap.ui.comp.smartvariants.SmartVariantManagement`**

-   We have improved the usability of the UI for views: There is no longer a CSS-based, fixed maximum width for the control. The control is now fully responsive, for example, to show longer view titles. You can still limit the maximum width of the control by using the `maxWidth` property. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smartvariants.SmartVariantManagementBase%23methods/setMaxWidth).

-   You can now configure the style of view titles by using the `titleStyle` property. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.comp.smartvariants.SmartVariantManagementBase%23methods/setTitleStyle).


<sub>Changed•Control•Info Only•1.109</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-12-01

</td>
</tr>
<tr>
<td valign="top">

1.109 

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

If a user selects all rows in a table using the *Select All* checkbox, **only** the rows that are already loaded will be selected in tables where growing is enabled. We have added a message that informs the user about this. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.ListBase%23methods/getMultiSelectMode).

<sub>Changed•Control•Info Only•1.109</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-12-01

</td>
</tr>
<tr>
<td valign="top">

1.109 

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

<sub>Deprecated•Feature•Info Only•1.109</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-12-01

</td>
</tr>
<tr>
<td valign="top">

1.109 

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

-   We now provide the experimental `sap.ui.model.odata.v4.Context#resetChanges` method. As of now, it is still under development and must not be used for productive applications.For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context/methods/resetChanges).
-   We now provide the new `sap.ui.model.odata.v4.ODataListBinding#getAggregation` method.For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding/methods/getAggregation).
-   You can now request side effects to update single rows or the entire list with the experimental hierarchy feature introduced with SAPUI5 1.105, provided they do not affect the hierarchy itself \(node IDs, parent/child relations, or sibling order\).For more information, see the API Reference for [`#requestSideEffects`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.Context/methods/requestSideEffects) and the `hierarchyQualifier` parameter in [`#setAggregation`](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataListBinding/methods/setAggregation).
-   You can now prevent the posting of a new entity to the back end that would follow the `createActivate` event of an `sap.ui.model.odata.v4.ODataListBinding` by using the `sap.ui.base.Event#preventDefault` method.For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.base.Event/methods/preventDefault).
-   We have improved our documentation of how to delete a context used as the binding context of an object page or Details section. For more information, see [Deleting an Entity](../04_Essentials/deleting-an-entity-2613ebc.md).

<sub>Changed•Feature•Info Only•1.109</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-12-01

</td>
</tr>
<tr>
<td valign="top">

1.109 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**SAPUI5 OData V2 Model** 

</td>
<td valign="top">

**SAPUI5 OData V2 Model**

The new version of the SAPUI5 OData V2 model introduces the following features:

-   When you use an `sap.ui.model.type.Unit`, `sap.ui.model.odata.type.Unit`, or the unit instance of `sap.ui.core.format.NumberFormat`, entered unit-of-measure codes are now parsed case-insensitively where possible.
-   The `B` pattern symbol, representing the flexible day period, is now supported by `sap.ui.core.format.DateFormat`.

<sub>Changed•Feature•Info Only•1.109</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-12-01

</td>
</tr>
<tr>
<td valign="top">

1.109 

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

-   Variant Management is now enabled by default for tables and charts on the object page. For more information, see [Enabling Variant Management on the Object Page](../06_SAP_Fiori_Elements/enabling-variant-management-on-the-object-page-f26d42b.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.109</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-12-01

</td>
</tr>
<tr>
<td valign="top">

1.109 

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

-   In the list report, you can now specify the title for the `NewAction` parameter popup while creating a new object. For more information, see [Actions in the List Report](../06_SAP_Fiori_Elements/actions-in-the-list-report-993e99e.md).

-   If mandatory input fields that are not nullable are used in an input dialog, the `clientSideMandatoryCheck` is enforced on these fields automatically.


<sub>Changed•SAP Fiori Elements•Info Only•1.109</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-12-01

</td>
</tr>
<tr>
<td valign="top">

1.109 

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

-   We now provide an indication in the `TextArea` when the user input exceeds the maximum allowed length. For more information, see [Different Representations of a Field](../06_SAP_Fiori_Elements/different-representations-of-a-field-c18ada4.md).

-   We've replaced some keys that can be overridden by application developers using the custom i18n file approach. If you're using any of the deprecated keys in the application resource bundles, replace them with the new ones. For more information, see [Localization of UI Texts](../06_SAP_Fiori_Elements/localization-of-ui-texts-b8cb649.md).

-   By default, we now use the label annotation of the property as the title of the value help dialog. For context-dependent value help dialogs, we still use the label annotation of the `ValueList`. For more information, see [Field Help](../06_SAP_Fiori_Elements/field-help-a5608ea.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.109</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-12-01

</td>
</tr>
<tr>
<td valign="top">

1.109 

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

We have updated the illustrations in the default set. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.IllustratedMessageType).

<sub>Changed•Control•Info Only•1.109</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-12-01

</td>
</tr>
<tr>
<td valign="top">

1.109 

</td>
<td valign="top">

UI Changed 

</td>
<td valign="top">

Announcement 

</td>
<td valign="top">

**Object Pages: Variant Management Enabled by Default for Tables and Charts** 

</td>
<td valign="top">

**Object Pages: Variant Management Enabled by Default for Tables and Charts**

> ### Note:  
> The following information concerns important upcoming changes for end users. These changes may require end users to adjust and/or test cases to be adapted, but they won't stop or disrupt software or processes.

Object page tables and charts now have variant management enabled by default. Users can save their personalization as variants. This has been made available with version 1.108/1.109.

<sub>UI Changed•Announcement•Info Only•1.109</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-12-01

</td>
</tr>
<tr>
<td valign="top">

1.109 

</td>
<td valign="top">

UI Changed 

</td>
<td valign="top">

Announcement 

</td>
<td valign="top">

**SAP Fiori elements for OData V4: Value Help Titles Aligned** 

</td>
<td valign="top">

**SAP Fiori elements for OData V4: Value Help Titles Aligned**

> ### Note:  
> The following information concerns important upcoming changes for end users. These changes may require end users to adjust and/or test cases to be adapted, but they won't stop or disrupt software or processes.

We harmonized the titles for value help dialogs. The title of the value help for an input field now corresponds to the label of the input field by default.

<sub>UI Changed•Announcement•Info Only•1.109</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-12-01

</td>
</tr>
<tr>
<td valign="top">

1.109 

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

-   You can now configure the visibility of the main and side indicators of the numeric header using the new `visible` boolean property. you can set this property in the manifest or it can be resolved dynamically using a condition expression. For more information, see the [Numeric Header](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/headers/numeric) section in the Card Explorer.

-   We have aligned the behavior of icons when the icon source is resolved to an empty object or an empty string. Now, in such cases, all Integration cards show a default icon.

-   We have changed the default value of the \(experimental\) `dataMode` property to `Auto`. In this mode, the card makes data requests only when it’s in the viewport. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.integration.widgets.Card). 

-   You can use the new \(experimental\) `design` property to set the card background and border to `Transparent`. The default value of the new property is `Solid`. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.integration.widgets.Card).

-   We have introduced a new `minItems` property, which represents the minimum number of expected items. This property is used during the calculation of the minimum height of the card to minimize resizing while data is loading. The new property is available for List, Table, and Timeline cards. For more information, see the [Card Features - Sizing](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/features/sizing) section in the Card Explorer.


<sub>Changed•Control•Info Only•1.109</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-12-01

</td>
</tr>
<tr>
<td valign="top">

1.109 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.m.LightBox`** 

</td>
<td valign="top">

**`sap.m.LightBox`**

We are now using the `IllustratedMessage` control to show errors when an image could not be loaded, or when it takes too much time to load it.For more information, see the [Sample](https://ui5.sap.com/#/entity/sap.m.LightBox/sample/sap.m.sample.LightBox).

<sub>Changed•Control•Info Only•1.109</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2022-12-01

</td>
</tr>
</table>

**Related Information**  


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

