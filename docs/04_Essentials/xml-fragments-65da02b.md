<!-- loio65da02badf704e03a4fd6bd4c5aba8f4 -->

# XML Fragments

SAPUI5 fragments of type XML are used in the context of XML templating to provide reuse parts for templates.

Any reference to an XML fragment is inlined by the preprocessor; that is, the reference is replaced by the fragment's XML DOM and preprocessing takes place on that DOM as well. All currently available variable names and all module aliases are inherited into the fragment. For more information, see [`template:require`](require-263f6e5.md).

**Example: XML Fragment**

```xml

<core:Fragment fragmentName="sap.ui.core.sample.ViewTemplate.tiny.Field" type="XML"/>
```

The fragment name can also result from a binding, including an expression binding which evaluates to a constant. As formatter functions return strings, and not booleans, `=== 'true'` has been added in the following example:

**Example: Dynamic Fragment Name**

```xml

<core:Fragment fragmentName="{= ${path: 'facet>Target', formatter: 'AnnotationHelper.isMultiple'} === 'true'
    ? 'sap.ui.core.sample.ViewTemplate.scenario.TableFacet'
    : 'sap.ui.core.sample.ViewTemplate.scenario.FormFacet' }" type="XML"/>
```

**Usage of Global Variables in XML Templating Fragments Detected**

XML Templating fragments can contain inherited variables and inherited module aliases.

The UI5 linter detects some usages of inherited variables or module aliases as a usage of global variables, for example `AnnotationHelper.format` in

```xml
<Text text="{path: 'field>Value', formatter: 'AnnotationHelper.format'}"/>
```

As the fragment could be embedded anywhere, the UI5 linter cannot know whether the fragment is used in XML templating scenarios. It also cannot know which variables or module aliases are currently available in the fragment.

To avoid global variable usage errors, you can require the module in the fragment again. Alternatively, you can use dot notation: If the usage of a variable or a module alias starts with a dot \(`.`\), the name is taken only from the currently available inherited scope.

**Example: Require Module Again in XML Templating Fragments**

```xml
<core:FragmentDefinition
    template:require="{AnnotationHelper : 'sap/ui/model/odata/AnnotationHelper'}"
    xmlns="sap.m"
    xmlns:core="sap.ui.core"
    xmlns:template="https://schemas.sap.com/sapui5/extension/sap.ui.core.template/1">

    <!-- "field" MUST point to a com.sap.vocabularies.Communication.v1.DataField -->
    <Text text="{path: 'field>Value', formatter: 'AnnotationHelper.format'}"/>
</core:FragmentDefinition>
```

**Example: Use Dot Notation in XML Templating Fragments to Refer to Inherited Variables or Module Aliases**

```xml
<core:FragmentDefinition
    xmlns="sap.m"
    xmlns:core="sap.ui.core"
    xmlns:template="https://schemas.sap.com/sapui5/extension/sap.ui.core.template/1">

    <!-- "field" MUST point to a com.sap.vocabularies.Communication.v1.DataField -->
    <Text text="{path: 'field>Value', formatter: '.AnnotationHelper.format'}"/>
</core:FragmentDefinition>
```

**Related Information**  


[XML Templating](xml-templating-5ee619f.md "The XML templating concept enables you to use an XML view as a template. This template is transformed by an XML preprocessor on the source level, the XML DOM, at runtime just before an SAPUI5 control tree is created from the XML source.")

