<!-- loio58cf64cbb951496a99ac94e01a0905b2 -->

# with

The `<template:with>` instruction can be used to change a variable's value or to add a variable with a new name.

This changed variable is available only within the scope of the `with` instruction. In the example titled **"with" Template**, `"meta>com.sap.vocabularies.UI.v1.Badge"` refers to `"/dataServices/schema/0/entityType/0/com.sap.vocabularies.UI.v1.Badge"` within `oMetaModel`. `"badge"` then becomes a valid model name while processing the content of the `with` instruction, in addition to the existing ones:

-   meta = `oMetaModel, "/dataServices/schema/0/entityType/0"`

-   badge = `oMetaModel, "/dataServices/schema/0/entityType/0/com.sap.vocabularies.UI.v1.Badge"`


If you omit the "var" attribute, the same model name will be reused; for example, "meta" in our example, and the `with` instruction changes the binding context locally. A new variable name improves readability.



## "with" Template

```xml

<template:with path="meta>com.sap.vocabularies.UI.v1.Badge" var="badge">
    <!-- ... -->
</template:with>

```



A helper can be called from a `with` instruction. It receives an `sap.ui.model.Context` object identifying the model and path from the instruction's "path" property and may return one of the following:

-   A `sap.ui.model.Context` object that is assigned to the variable

-   A non-empty string that is used as a path within the same model and assigned to the variable

-   Undefined, in which case the helper is ignored and the original path is assigned to the variable

-   A thenable \(usually a Promise\) resolving with any of the above, if the view is loaded asynchronously.


The helper can analyze the object the path points to and derive a "resolved path" from that, such as by normalization or following references. Typically, it only points to a different path, but it can even change the model instance, such as jumping from a data model to its meta model or jumping to a resource model, and so on.

The example titled **"with" Template Including Helper** assumes that "field" is an OData meta model with a current binding context that points to a field inside some annotation, such as `"/dataServices/schema/0/entityType/0/com.sap.vocabularies.UI.v1.Badge/MainInfo"`. The helper function `sap.ui.model.odata.AnnotationHelper.resolvePath` is used to follow the field value's `path` property. For more information, see [Annotation Helper](annotation-helper-dbec058.md) and [API Reference: `sap.ui.model.odata.AnnotationHelper.resolvePath`](https://ui5.sap.com/#/api/sap.ui.model.odata.AnnotationHelper).

It returns a path inside the meta model which refers to the corresponding property's meta data, such as `"/dataServices/schema/<i>/entityType/<j>/property/<k>"`. This result is in turn assigned by the `with` instruction to the variable named "target".



## "with" Template Including Annotation Helper

```xml

<template:with path="meta>Value" helper="sap.ui.model.odata.AnnotationHelper.resolvePath" var="target">
  <template:if test="{= {target>sap:semantics} === 'email'}" >
    <core:Icon src="sap-icon://email" />
  </template:if>
  <template:if test="{= {target>sap:semantics} === 'tel'}" >
    <core:Icon src="sap-icon://phone" />
  </template:if>
</template:with>
```

**Related Information**  


[Annotation Helper](annotation-helper-dbec058.md "A collection of methods which help to consume OData Version 4.0 annotations in XML template views.")

