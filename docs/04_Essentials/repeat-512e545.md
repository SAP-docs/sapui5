<!-- loio512e545ba66f4214ba0de1eb56f319e1 -->

# repeat

The `<template:repeat` instruction iterates the `sap.ui.model.ListBinding` given by the `list` attribute.

> ### Note:  
> Sorting and filtering is already supported by the list binding via an extended syntax. For more information, see [Sorting, Grouping, and Filtering for List Binding](sorting-grouping-and-filtering-for-list-binding-ec79a5d.md).

The `var` attribute holds the name of the loop variable which can be used to access the current list element in a child element of `repeat`. In the preprocessing, `repeat` is replaced by multiple clones of its content, one clone per list element, with each clone again preprocessed as if it were contained in a `with` instruction defining the loop variable.

The following example iterates all fields in the identification annotation from the SAP UI vocabulary in the currently referenced element of the model `meta` and displays a label and content for each field. It is completely transparent to the `repeat` implementation whether the list binding refers to data or meta data. The templating engine is replacing "template time" binding expressions which refer to meta data with corresponding runtime binding expression which refer to data. The formatter `sap.ui.model.odata.AnnotationHelper.format` is used, which encapsulates knowledge about the SAP UI vocabulary and so on.

**Example: Template for "repeat" Instruction**

```xml

<template:repeat list="{meta>com.sap.vocabularies.UI.v1.Identification}" var="field">
  <Label text="{path: 'field>Label', formatter: 'AnnotationHelper.format'}" />
  <Text text="{path: 'field>Value', formatter: 'AnnotationHelper.format'}" />
</template:repeat>
```

**Example: Output Template for the "repeat" Instruction \(in Memory Only\)**

```xml

<Label text="Product ID" />
<Text core:require="{StringType: 'sap/ui/model/odata/type/String'}" text="{
    path: 'ProductID', type:'StringType', constraints: {"nullable": false, "maxLength": 10}}" />
<Label text="Price" />
<Text core:require="{Decimal: 'sap/ui/model/odata/type/Decimal'}" text="{
    path: 'Price/Amount', type: 'Decimal', constraints: {"precision":13, "scale":3}}" />
<Label text="Category" />
<Text core:require="{StringType: 'sap/ui/model/odata/type/String'}" text="{
    path: 'Category', type: 'StringType', constraints: {"maxLength": 40}}" />
<Label text="Supplier" />
<Text core:require="{StringType: 'sap/ui/model/odata/type/String'}" text="{
    path: 'SupplierName', type: 'StringType', constraints: {"maxLength": 80}}" />
```

**Example: Template for the "repeat" Instruction with `startIndex` and `length`**

You can start the iteration at an index other than 0 or limit the length of the iterated list in the usual manner. For this, specify `startIndex` and `length`. Both are optional and the defaults are 0 for `startIndex` and full length for `length`.

```xml

<template:repeat list="{path:'entityType>com.sap.vocabularies.UI.v1.Identification',startIndex:1,length:3}" var="field">
  <!-- ... -->
</template:repeat>
```

As the OData meta model supports filtering by name, you can repeat all `FieldGroup` annotations regardless of their qualifier.

> ### Note:  
> In JSON content, the annotation can be called `com.sap.vocabularies.UI.v1.FieldGroup` or `com.sap.vocabularies.UI.v1.FieldGroup#Dimension`, and so on, depending on its qualifier. The filter that is used in the following code snippet for the `<template:repeat>` instruction uses the special path name `@sapui.name` which refers back to the name of the object that is inspected for filtering. This name is, for example, `com.sap.vocabularies.UI.v1.FieldGroup#Dimension`.

**Example: Filter By Annotation Term**

```xml

<template:repeat list="{path:'entityType>', filters: {path: '@sapui.name', operator: 'StartsWith', value1: 'com.sap.vocabularies.UI.v1.FieldGroup'}}" var="fieldGroup">
  <form:SimpleForm>
    <form:title>
      <core:Title text="{path: 'fieldGroup>Label', formatter: 'AnnotationHelper.format'}"/>
    </form:title>
    <template:repeat list="{fieldGroup>Data}" var="field">
      <Label text="{path: 'field>Label', formatter: 'AnnotationHelper.format'}"/>
      <core:Fragment fragmentName="sap.ui.core.sample.ViewTemplate.scenario.Field" type="XML"/>
    </template:repeat>
  </form:SimpleForm>
</template:repeat>
```

