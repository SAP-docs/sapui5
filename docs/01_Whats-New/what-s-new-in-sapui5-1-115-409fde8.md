<!-- loio409fde8b73364f5bb49905a669a57503 -->

# What's New in SAPUI5 1.115

With this release SAPUI5 is upgraded from version 1.114 to 1.115.

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

1.115 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**`sap.m.p13n.Engine`** 

</td>
<td valign="top">

**`sap.m.p13n.Engine`**

We have added more samples for the `Engine` and deprecated the following entities: `TablePersoController` and `TablePersoDialog`. For more information, see [Personalization](../10_More_About_Controls/personalization-75c08fd.md), the [API Reference](https://ui5.sap.com/#/api/sap.m.p13n.Engine), and the [Sample](https://ui5.sap.com/#/entity/sap.m.p13n.Engine/sample/sap.m.sample.p13n.EngineGridTable) for `sap.ui.table.Table`, the [Sample](https://ui5.sap.com/#/entity/sap.m.p13n.Engine/sample/sap.m.sample.p13n.Engine) for `sap.m.Table`, and the [Sample](https://ui5.sap.com/#/entity/sap.m.p13n.Engine/sample/sap.m.sample.p13n.EngineGridList) for `sap.f.GridList`.

<sub>Changed•Feature•Info Only•1.115</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2023-06-15

</td>
</tr>
<tr>
<td valign="top">

1.115 

</td>
<td valign="top">

Deprecated 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.table.AnalyticalTable`, `sap.ui.table.Table`, `sap.ui.table.TreeTable`** 

</td>
<td valign="top">

**`sap.ui.table.AnalyticalTable`, `sap.ui.table.Table`, `sap.ui.table.TreeTable`**

We have deprecated the `editable` property. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.table.Table).

<sub>Deprecated•Control•Info Only•1.115</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2023-06-15

</td>
</tr>
<tr>
<td valign="top">

1.115 

</td>
<td valign="top">

New 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**Introduction of `sap.ui.mdc` library \(experimental\)** 

</td>
<td valign="top">

**Introduction of `sap.ui.mdc` library \(experimental\)**

We have introduced the `sap.ui.mdc` library experimentally. This library contains smart composite controls that are metadata-driven and allow applications to use them with any SAPUI5 model and any data protocol. For more information, see [sap.ui.mdc \(experimental\)](../10_More_About_Controls/sap-ui-mdc-experimental-1dd2aa9.md) and the [API Reference](https://ui5.sap.com/#/api/sap.ui.mdc).

<sub>New•Feature•Info Only•1.115</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2023-06-15

</td>
</tr>
<tr>
<td valign="top">

1.115 

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

-   Empty rows in the object page tables can be shown or hidden using the `InsertRestrictions` annotation. For more information, see [Enabling Inline Creation Mode or Empty Row Mode for Table Entries](../06_SAP_Fiori_Elements/enabling-inline-creation-mode-or-empty-row-mode-for-table-entries-cfb04f0.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.115</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2023-06-15

</td>
</tr>
<tr>
<td valign="top">

1.115 

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

-   Applications can now programmatically trigger 'Go' in the `FilterBar` building block. For more information, see [The FilterBar Building Block](../06_SAP_Fiori_Elements/the-filterbar-building-block-7838611.md).


<sub>Changed•SAP Fiori Elements•Info Only•1.115</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2023-06-15

</td>
</tr>
<tr>
<td valign="top">

1.115 

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

-   You can now close the current changeset in `Auto` groups by calling `sap.ui.model.odata.v4.ODataModel#submitBatch`. For any additional change requests that are created afterwards and make it into the same `$batch` request, a new changeset is created.

    For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.model.odata.v4.ODataModel/methods/submitBatch).

-   We now support the "Deep Create" scenario for navigation properties of cardinality "many", that is, collection-valued navigation properties.

    For more information, see [Creating an Entity](../04_Essentials/creating-an-entity-c9723f8.md).


<sub>Changed•Feature•Info Only•1.115</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2023-06-15

</td>
</tr>
<tr>
<td valign="top">

1.115 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Feature 

</td>
<td valign="top">

**SAPUI5 OData Types** 

</td>
<td valign="top">

**SAPUI5 OData Types**

The new version of SAPUI5 provides the `parseEmptyValueToZero` format option for the following numeric OData types:

-   `sap.ui.model.odata.type.Byte`
-   `sap.ui.model.odata.type.Decimal`
-   `sap.ui.model.odata.type.Double`
-   `sap.ui.model.odata.type.Int`
-   `sap.ui.model.odata.type.Int16`
-   `sap.ui.model.odata.type.Int32`
-   `sap.ui.model.odata.type.Int64`
-   `sap.ui.model.odata.type.SByte`
-   `sap.ui.model.odata.type.Single`

Empty input, that is, `null` or `""`, is parsed to 0 if `parseEmptyValueToZero` is set to `true` and if the `nullable` constraint is `false`.

For more information, see, for example, the [API Reference](https://ui5.sap.com/#/api/sap.ui.model.odata.type.Int16) for `sap.ui.model.odata.type.Int16`.

<sub>Changed•Feature•Info Only•1.115</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2023-06-15

</td>
</tr>
<tr>
<td valign="top">

1.115 

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

-   Using the new \(experimental\) `modelSizeLimit` property, you can set the maximum number of entries that are used for all list bindings inside the card. This feature is important for cards that use forms and filters. The default `modelSizeLimit` value is 1000. For more information, see the [Integration Card Configuration](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/configuration) section and the [Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/data/modelSizeLimit) in the Card Explorer.

-   We have \(experimentally\) introduced a new input field in the Object Card that enables the users to pick a date.

    For more information, see the [Object Card](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/typesDeclarative/object) section and the [Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/object/form) in the Card Explorer.

-   We have introduced a new `showColon` property for labels in the Object Card. When set to `false` it hides the colons. The default value is `true`, in which case all colons are automatically shown. For more information, see the [Object Card](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/typesDeclarative/object) section and the [Sample](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/explore/object/form) in the Card Explorer.


<sub>Changed•Control•Info Only•1.115</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2023-06-15

</td>
</tr>
<tr>
<td valign="top">

1.115 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**`sap.ui.comp.filterbar.FilterBar`, `sap.ui.comp.smartfilterbar.SmartFilterBar`, `sap.ui.comp.smartfield.SmartField`, `sap.ui.comp.valuehelpdialog.ValueHelpDialog`, and `sap.m.P13nConditionPanel`** 

</td>
<td valign="top">

**`sap.ui.comp.filterbar.FilterBar`, `sap.ui.comp.smartfilterbar.SmartFilterBar`,`sap.ui.comp.smartfield.SmartField`,`sap.ui.comp.valuehelpdialog.ValueHelpDialog`, and `sap.m.P13nConditionPanel`**

To improve the user experience, we have enabled these controls to display a number keypad on mobile devices when used with relevant numeric data types:

-   For OData V2: `Edm.Decimal`, `Edm.Double`, `Edm.Single`, and `EDM.String` with `display-format=NonNegative`
-   For OData V4: `DigitalSequence`

<sub>Changed•Control•Info Only•1.115</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2023-06-15

</td>
</tr>
<tr>
<td valign="top">

1.115 

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

We have improved the support for the `Common.isTimezone` annotation. It is now also supported for fields that have a value help dialog, suggestions, type ahead, and fixed-list value lists.

<sub>Changed•Control•Info Only•1.115</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2023-06-15

</td>
</tr>
<tr>
<td valign="top">

1.115 

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

The control now supports `In` parameters for `MultiComboBox` filters.

<sub>Changed•Control•Info Only•1.115</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2023-06-15

</td>
</tr>
<tr>
<td valign="top">

1.115 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**sap.m.Button** 

</td>
<td valign="top">

**sap.m.Button**

We have added a new `accessibleRole` property that can receive a value from an enumeration called `sap.m.ButtonAccessibleRole` and the application developer can select one of two values – `Default` or `Link`.

For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.ButtonAccessibleRole). 

<sub>Changed•Control•Info Only•1.115</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2023-06-15

</td>
</tr>
<tr>
<td valign="top">

1.115 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**sap.m.DynamicDateRange** 

</td>
<td valign="top">

**sap.m.DynamicDateRange**

We removed the experimental tag of the control. This changes the API to make the control more stable and easier to use.

For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.DynamicDateRange). 

<sub>Changed•Control•Info Only•1.115</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2023-06-15

</td>
</tr>
<tr>
<td valign="top">

1.115 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**sap.m.Wizard** 

</td>
<td valign="top">

**sap.m.Wizard**

We have provided an API that will allow the application to change the H level based on your needs so that the correct heading level structure is presented on the page. For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.m.Wizard). 

<sub>Changed•Control•Info Only•1.115</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2023-06-15

</td>
</tr>
<tr>
<td valign="top">

1.115 

</td>
<td valign="top">

Changed 

</td>
<td valign="top">

Control 

</td>
<td valign="top">

**sap.f.SidePanel** 

</td>
<td valign="top">

**sap.f.SidePanel**

We have added the ability to place the `sap.f.SidePanel` control on the left side of the screen. Previously it was fixed only to the right side.

For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.f.SidePanel). 

<sub>Changed•Control•Info Only•1.115</sub>

</td>
<td valign="top">

Info Only 

</td>
<td valign="top">

2023-06-15

</td>
</tr>
</table>

**Related Information**  


[What's New in SAPUI5 1.120](what-s-new-in-sapui5-1-120-2359b63.md "With this release SAPUI5 is upgraded from version 1.119 to 1.120.")

[What's New in SAPUI5 1.119](what-s-new-in-sapui5-1-119-0b1903a.md "With this release SAPUI5 is upgraded from version 1.118 to 1.119.")

[What's New in SAPUI5 1.118](what-s-new-in-sapui5-1-118-3eecbde.md "With this release SAPUI5 is upgraded from version 1.117 to 1.118.")

[What's New in SAPUI5 1.117](what-s-new-in-sapui5-1-117-029d3b4.md "With this release SAPUI5 is upgraded from version 1.116 to 1.117.")

[What's New in SAPUI5 1.116](what-s-new-in-sapui5-1-116-ebd6f34.md "With this release SAPUI5 is upgraded from version 1.115 to 1.116.")

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

