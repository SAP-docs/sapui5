<!-- loio409fde8b73364f5bb49905a669a57503 -->

# What's New in SAPUI5 1.115

With this release SAPUI5 is upgraded from version 1.114 to 1.115.

> ### Tip:  
> If you want to do a search across all versions of the What's New content, you can also find it in the [SAPUI5 What's New viewer](https://help.sap.com/whats-new/67f60363b57f4ac0b23efd17fa192d60).

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

We have added more samples for the `Engine` and deprecated the following entities: `TablePersoController` and `TablePersoDialog`. For more information, see [Personalization](../10_More_About_Controls/personalization-75c08fd.md), the  [API Reference](https://ui5.sap.com/#/api/sap.m.p13n.Engine), and the [Sample](https://ui5.sap.com/#/entity/sap.m.p13n.Engine/sample/sap.m.sample.p13n.EngineGridTable) for `sap.ui.table.Table`, the [Sample](https://ui5.sap.com/#/entity/sap.m.p13n.Engine/sample/sap.m.sample.p13n.Engine) for `sap.m.Table`, and the [Sample](https://ui5.sap.com/#/entity/sap.m.p13n.Engine/sample/sap.m.sample.p13n.EngineGridList) for `sap.f.GridList`.

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

 ** `sap.ui.table.AnalyticalTable`, `sap.ui.table.Table`, `sap.ui.table.TreeTable`** 



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

We have introduced the `sap.ui.mdc` library experimentally. This library contains smart composite controls that are metadata-driven and allow applications to use them with any SAPUI5 model and any data protocol. For more information, see [sap.ui.mdc \(experimental\)](../10_More_About_Controls/sap-ui-mdc-experimental-1dd2aa9.md) and the  [API Reference](https://ui5.sap.com/#/api/sap.ui.mdc).

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

