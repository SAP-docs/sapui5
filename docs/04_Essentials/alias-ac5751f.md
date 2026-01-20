<!-- loioac5751f89cb142b7a6d53eaf8a0f6339 -->

# alias

The `<template:alias>` instruction can be used to define a shortcut alias name for a JavaScript value, for example a static helper class, a formatter function, or a helper function.

The shortcut alias is only available in the scope of the `alias` instruction. Each nested scope can redefine aliases.

A proper relative name must be used. This proper name must not contain or consist of a dot. The value to which the alias refers to can be any JavaScript object or property including a function that is available at that point. Exisiting alias names can be used in new alias definitions to refer to values, for example, `<template:alias name="format" value="AH.format">`. Aliases are inherited into fragments, but of course a fragment may \(re\)define its own set of aliases. For compatibility reasons, aliases can also start with a dot, both in definition and in references.



## "alias" Template

```xml
<template:alias name="AH" value="AnnotationHelper">
  <template:with path="meta>com.sap.vocabularies.UI.v1.Badge" var="badge">
    <form:SimpleForm>
      <form:title>
        <core:Title text="{path: 'badge>HeadLine', formatter: 'AH.format'}"/>
      </form:title>
      <Label text="{path: 'badge>Title/Label', formatter: 'AH.format'}"/>
      <Text text="{path: 'badge>Title/Value', formatter: 'AH.format'}"/>
      <Label text="{path: 'badge>MainInfo/Label', formatter: 'AH.format'}"/>
      <template:with path="badge>MainInfo" var="field">
        <core:Fragment fragmentName="sap.ui.core.sample.ViewTemplate.tiny.Field" type="XML"/>
      </template:with>
      <Label text="{path: 'badge>SecondaryInfo/Label', formatter: 'AH.format'}"/>
      <template:with path="badge>SecondaryInfo" var="field">
        <core:Fragment fragmentName="sap.ui.core.sample.ViewTemplate.tiny.Field" type="XML"/>
      </template:with>
    </form:SimpleForm>
  </template:with>
</template:alias>
```

