<!-- loio65da02badf704e03a4fd6bd4c5aba8f4 -->

# XML Fragments

SAPUI5 fragments of type XML are used in the context of XML templating to provide reuse parts for templates.

Any reference to an XML fragment is inlined by the preprocessor; that is, the reference is replaced by the fragment's XML DOM and preprocessing takes place on that DOM as well. All currently available variable names are inherited into the fragment.

**Example: XML Fragment**

```xml

<core:Fragment fragmentName="sap.ui.core.sample.ViewTemplate.tiny.Field" type="XML"/>
```

The fragment name can also result from a binding, including an expression binding which evaluates to a constant. As formatter functions return strings, and not booleans, `=== 'true'` has been added in the following example:

**Example: Dynamic Fragment Name**

```xml

<core:Fragment fragmentName="{= ${path: 'facet>Target', formatter: 'sap.ui.model.odata.AnnotationHelper.isMultiple'} === 'true'
    ? 'sap.ui.core.sample.ViewTemplate.scenario.TableFacet'
    : 'sap.ui.core.sample.ViewTemplate.scenario.FormFacet' }" type="XML"/>
```

**Related Information**  


[XML Templating](xml-templating-5ee619f.md "The XML templating concept enables you to use an XML view as a template. This template is transformed by an XML preprocessor on the source level, the XML DOM, at runtime just before an SAPUI5 control tree is created from the XML source.")

