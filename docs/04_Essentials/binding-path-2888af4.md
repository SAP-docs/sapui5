<!-- loio2888af49635949eca14fa326d04833b9 -->

# Binding Path

Binding paths address the different properties and lists in a model and define how a node in the hierarchical data tree can be found.

A binding path consists of a number of name tokens, which are separated by a separator char. In all models provided by the framework, the separator char is the slash "/".

A binding path can either be absolute or relative: Absolute binding paths start with a slash, relative binding paths start with a name token and are resolved relative to the context of the control that is bound. A context exists either for each entry of the aggregation in case of aggregation binding or can be set explicitly for a control by using the `setBindingContext` method.

When you use multiple models, specify the model name within the binding path to address the correct model. The same applies for setting a binding context for such a model. The binding path must start with the model name followed by a '\>' as shown in the following example for setting a binding context.

```js
oControl.setBindingContext(oContext );
oControl.setBindingContext(oContext,"myModelName");
```

Binding path examples:

```
'/Products/0/ProductName'
'/Products(0)/ProductName'
'ProductName'

//with model name
'myModelName>/Products/0/ProductName'
'myModelName>/Products(0)/ProductName'
'myModelName>ProductName'
```

**Related Information**  


[OData V2 Model](odata-v2-model-6c47b2b.md#loio6c47b2b39db9404582994070ec3d57a2 "The OData V2 Model enables binding of controls to data from OData services.")

[OData V4 Model: Bindings](bindings-54e0ddf.md "Bindings connect SAPUI5 view elements to model data, allowing changes in the model to be reflected in the view element and vice versa.")

[Binding Path Syntax for JSON Models](json-model-96804e3.md#loiod52e364907f94a3caeb4f5e5ad0cf302 "The JSON model has a simple binding path syntax, because it consists of named objects, such as properties, arrays, or nested objects.")

[Binding Path Syntax for XML Models](xml-model-a53e71d.md#loiob8a2c24356c443228f7819d45697a2b8 "XML models differentiate between attributes and content. XML has no arrays and defines lists as multiple elements with the same name instead. This makes the binding path syntax for XML models more difficult than for JSON or OData models.")

[Binding Path Syntax for Resource Models](resource-model-91f122a.md#loiof05c6f2cf18241cbbb2b126989108765 "The binding path syntax for the resource model only contains a flat list of properties.")

