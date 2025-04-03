<!-- loio4d1b9d44941f483f9b7f579873d38685 -->

# Currency and Unit Customizing in OData V4

For amounts or measures, you may sometimes need different currencies or units than defined in the CLDR. The data types `sap.ui.model.odata.type.Currency` and `sap.ui.model.odata.type.Unit` enable you to use code lists with customizing for currency codes and units.

For code lists with currency or unit customizing, you need to define the following annotations:

-   Currencies: `com.sap.vocabularies.CodeList.v1.CurrencyCodes`

-   Units: `com.sap.vocabularies.CodeList.v1.UnitsOfMeasure`


**Code list annotations for currency codes and measures in "metadata.xml"**

```xml
<EntityType Name="Product">
  ...
  <Property Name="WeightMeasure" Type="Edm.Decimal" Nullable="false" Precision="13" Scale="variable" />
  <Property Name="WeightUnit" Type="Edm.String" Nullable="false" MaxLength="3" />
  <Property Name="CurrencyCode" Type="Edm.String" Nullable="false" MaxLength="5" />
  <Property Name="Price" Type="Edm.Decimal" Nullable="false" Precision="15" Scale="variable" />
  ...
</EntityType>
...
<Annotations Target="SAP__self.Container">
  <Annotation Term="com.sap.vocabularies.CodeList.v1.CurrencyCodes">
    <Record>
      <PropertyValue Property="Url" String="../../../../default/iwbep/common/0001/$metadata" />
      <PropertyValue Property="CollectionPath" String="Currencies" />
    </Record>
  </Annotation>
</Annotations>
<Annotations Target="SAP__self.Container">
  <Annotation Term="com.sap.vocabularies.CodeList.v1.UnitsOfMeasure">
    <Record>
      <PropertyValue Property="Url" String="../../../../default/iwbep/common/0001/$metadata" />
      <PropertyValue Property="CollectionPath" String="UnitsOfMeasure" />
    </Record>
  </Annotation>
</Annotations>
...
<Annotations Target="SAP__self.Product/Price">
  ...
  <Annotation Term="Org.OData.Measures.V1.ISOCurrency" Path="CurrencyCode" />
  ...
</Annotations>
...
<Annotations Target="SAP__self.Product/WeightMeasure">
  ...
  <Annotation Term="Org.OData.Measures.V1.Unit" Path="WeightUnit" />
  ...
</Annotations>
```

Code lists that are referenced by the `com.sap.vocabularies.CodeList.v1.CurrencyCodes` or `com.sap.vocabularies.CodeList.v1.UnitsOfMeasure` annotations need the following:

-   The internal code as its only key property

-   A language-dependent description

-   A numeric property with the unit-specific number of significant fractional digits

-   Optional: An external code that should be visualized instead of the internal code

-   Optional: A standard code


The key property is annotated with:

-   `com.sap.vocabularies.Common.v1.Text` pointing to the description property

-   `com.sap.vocabularies.Common.v1.UnitSpecificScale` pointing to the numeric property

-   Optional: `com.sap.vocabularies.CodeList.v1.StandardCode` pointing to the standard code property


The entity type is optionally annotated with `Org.OData.Core.V1.AlternateKeys` pointing to another property that should be used for visualization.

If the alternate key is available, the type uses the alternate key as the key of the currency or unit. In this case, the data of the actual service have to contain the alternate key representation in the currency or unit property. The key is used and expected in the data if no alternate key is annotated. Note that there must be a maximum of one alternate key, and that key and alternate key must have exactly one property.

The property annotated as `com.sap.vocabularies.CodeList.v1.StandardCode` is interpreted as the ISO code by `sap.ui.model.odata.type.Currency` and used to find currency symbols. The currency symbols may be used for entering data.

**Example for the metadata of a code list service**

```xml
...
<EntityType Name="Currency">
  <Key>
    <PropertyRef Name="CurrencyCode" />
  </Key>
  <Property Name="CurrencyCode" Type="Edm.String" MaxLength="5" />
  <Property Name="ISOCode" Type="Edm.String" MaxLength="3" />
  <Property Name="Text" Type="Edm.String" MaxLength="15" />
  <Property Name="DecimalPlaces" Type="Edm.SByte" />
</EntityType>

<EntityType Name="UnitOfMeasure">
  <Key>
    <PropertyRef Name="UnitCode" />
  </Key>
  <Property Name="UnitCode" Type="Edm.String" MaxLength="3" />
  <Property Name="ISOCode" Type="Edm.String" MaxLength="3" />
  <Property Name="ExternalCode" Type="Edm.String" MaxLength="3" />
  <Property Name="Text" Type="Edm.String" MaxLength="30" />
  <Property Name="DecimalPlaces" Type="Edm.Int16" />
</EntityType>

<Annotations Target="SAP__self.Currency/CurrencyCode">
  <Annotation Term="Common.Text" Path="Text" />
  <Annotation Term="Common.UnitSpecificScale" Path="DecimalPlaces" />
  <Annotation Term="CodeList.StandardCode" Path="ISOCode" />
</Annotations>

<Annotations Target="SAP__self.UnitOfMeasure">
  <Annotation Term="Core.AlternateKeys">
    <Collection>
      <Record>
        <PropertyValue Property="Key">
          <Collection>
            <Record>
              <PropertyValue Property="Name" PropertyPath="ExternalCode" />
              <PropertyValue Property="Alias" String="ExternalCode" />
            </Record>
          </Collection>
        </PropertyValue>
      </Record>
    </Collection>
  </Annotation>
</Annotations>

<Annotations Target="SAP__self.UnitOfMeasure/UnitCode">
  <Annotation Term="Common.Text" Path="Text" />
  <Annotation Term="Common.UnitSpecificScale" Path="DecimalPlaces" />
  <Annotation Term="CodeList.StandardCode" PropertyPath="ISOCode" />
  <Annotation Term="CodeList.ExternalCode" PropertyPath="ExternalCode" />
</Annotations>
...
```

With the metadata above, you can use the data types `sap.ui.model.odata.type.Currency` and the `sap.ui.model.odata.type.Unit` in an input field as shown in the following example. The data types use a composite binding with the amount or measure as first part, the currency code or unit as second part, and the information about the code list customizing that has to be used as third part.

**Example how to use currency and unit types in a freestyle SAPUI5 application**

```
<mvc:View
    xmlns:core="sap.ui.core"
    xmlns:mvc="sap.ui.core.mvc"
    xmlns="sap.m"
    core:require="{
        Currency: 'sap/ui/model/odata/type/Currency',
        Unit: 'sap/ui/model/odata/type/Unit'
    }">
    ...
    <Input value="{mode: 'TwoWay', parts: ['WeightMeasure', 'WeightUnit', {mode: 'OneTime', path: '/##@@requestUnitsOfMeasure', targetType: 'any'}], type: 'Unit'}" />
    ...
    <Input value="{mode: 'TwoWay', parts: ['Price', 'CurrencyCode', {mode: 'OneTime', path: '/##@@requestCurrencyCodes', targetType: 'any'}], type: 'Currency'}" />
    ...
```

The code lists are automatically requested only once per browser session and code list URL.

If the `Decimal` type is used for the `'WeightMeasure'` or `'Price'` part, its format options may additionally influence the number of displayed and allowed decimals.For more information, see [`sap.ui.model.odata.type.Currency#formatValue`](https://ui5.sap.com/#/api/sap.ui.model.odata.type.Currency%23methods/formatValue) and [`sap.ui.model.odata.type.Unit#formatValue`](https://ui5.sap.com/#/api/sap.ui.model.odata.type.Unit%23methods/formatValue).

If you use XML templating, you can use `sap.ui.model.odata.v4.AnnotationHelper.format` to generate the composite binding for an amount or measure property. To recognize a property as an amount or measure, the property needs to be annotated either with the `Org.OData.Measures.V1.ISOCurrency`, or with the `Org.OData.Measures.V1.Unit` annotation. For more informatio about XML templating, see [XML Templating](xml-templating-5ee619f.md).

**Additional annotations when using XML templating**

```xml
<!-- used in view template -->
<Annotations Target="SAP__self.Product">
  <Annotation Term="com.sap.vocabularies.UI.v1.LineItem">
    <Collection>
      ...
      <Record Type="com.sap.vocabularies.UI.v1.DataField">
        <PropertyValue Property="Label" String="Weight" />
        <PropertyValue Property="Value" Path="WeightMeasure" />
      </Record>
      <Record Type="com.sap.vocabularies.UI.v1.DataField">
        <PropertyValue Property="Label" String="Price" />
        <PropertyValue Property="Value" Path="Price" />
      </Record>
      ...
    </Collection>
  </Annotation>
</Annotations>
```

The composite binding for the `sap.ui.model.odata.type.Currency` and `sap.ui.model.odata.type.Unit` data types is generated by the `sap.ui.model.odata.v4.AnnotationHelper.format` method. You can use it in the XML template view.

**How to use `AnnotationHelper.format` with currencies or units**

```xml
<template:alias name="format" value="sap.ui.model.odata.v4.AnnotationHelper.format">
<template:alias name="label" value="sap.ui.model.odata.v4.AnnotationHelper.label">
<VBox>
   <template:with path="meta>/ProductList/@com.sap.vocabularies.UI.v1.LineItem" var="lineItem">
      <Table items="{/ProductList}">
         <columns>
            <template:repeat list="{lineItem>}" var="field">
               <Column>
                  <Label text="{field>@@label}" />
               </Column>
            </template:repeat>
         </columns>
         <ColumnListItem>
            <template:repeat list="{lineItem>}" var="field">
               <Input value="{field>Value/@@format}" />
            </template:repeat>
         </ColumnListItem>
      </Table>
   </template:with>
</VBox>
</template:alias>
</template:alias>
```

**Example: Templating output**

```xml
<mvc:View
    xmlns:core="sap.ui.core"
    xmlns:mvc="sap.ui.core.mvc"
    xmlns="sap.m"
    core:require="{
        Currency: 'sap/ui/model/odata/type/Currency',
        Decimal: 'sap/ui/model/odata/type/Decimal',
        StringType: 'sap/ui/model/odata/type/String',
        Unit: 'sap/ui/model/odata/type/Unit'
    }">
    <VBox>
        <Table items="{/ProductList}">
            <columns>
                ...
                <Column>
                    <Label text="Weight" />
                </Column>
                <Column>
                    <Label text="Price" />
                </Column>
                ...
            </columns>
            <ColumnListItem
                ...
                <Input value="{
                    mode: 'TwoWay', 
                    parts: [{
                       path: 'WeightMeasure', 
                       type: 'Decimal', 
                       constraints:{'precision': 13, 'scale': 'variable', 'nullable': false}
                    }, {
                       path: 'WeightUnit', 
                       type: 'StringType', 
                       constraints: {'maxLength': 3, 'nullable': false}
                    }, {
                       mode: 'OneTime',
                       path: '/##@@requestUnitsOfMeasure',
                       targetType: 'any'
                    }], 
                    type: 'Unit'
                }" />
                <Input value="{
                    mode: 'TwoWay', 
                    parts: [{
                       path: 'Price', 
                       type: 'Decimal', 
                       constraints: {'precision': 15, 'scale': 'variable', 'nullable': false}
                    }, {
                       path: 'CurrencyCode', 
                       type: 'StringType', 
                       constraints: {'maxLength': 5, 'nullable': false}
                    }, {
                       mode: 'OneTime', 
                       path: '/##@@requestCurrencyCodes', 
                       targetType: 'any'
                    }], 
                    type: 'Currency'}" />
                ...
            </ColumnListItem>
        </Table>
    </VBox>
    ...
```

