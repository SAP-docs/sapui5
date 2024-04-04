<!-- loio604b1eb50e47483ebaf97a27fb065e95 -->

# Replacement of Bindings

For attributes, SAPUI5 binding expressions are used instead of preprocessing instructions. If the value of an XML attribute represents a valid SAPUI5 binding which refers to currently available model \(= *<variable\>*\) names only, the binding is evaluated and the result is written back into the XML attribute.

The `sap.ui.model.odata.AnnotationHelper.format` method can be used as a formatter which properly interprets OData Version 4.0 annotations from the OData meta model. You can use the same formatter for labels and values. For more information, see [SAP Annotations for OData Version 2.0](http://www.sap.com/Protocols/SAPData).

Formatters for labels are usually not needed. Instead, pointing to `'badge>MainInfo/Label/String'` could be used, but this does not take care of escaping and works only for string constants. The `sap.ui.model.odata.AnnotationHelper.format` inserts references to translatable texts in case the preprocessor has been called with `bindTexts : true`. This is important for design-time templating.

The following example shows a template with binding:

```xml

<Label text="{path: 'badge>MainInfo/Label', formatter: 'sap.ui.model.odata.AnnotationHelper.format'}"/>
<Text text="{path: 'field>Value', formatter: 'sap.ui.model.odata.AnnotationHelper.format'}" />
```

At the time the binding is resolved, `field>Value` refers to `meta>/dataServices/schema/0/entityType/0/com.sap.vocabularies.UI.v1.Badge/MainInfo/Value`. In the resulting `XML DOM`, the references to the meta model are gone and the type information including the constraints is inserted in the binding. This is shown in the following example:

```xml

<Label text="Phone"/>
<Text text="{path : 'PhoneNumber', type : 'sap.ui.model.odata.type.String', constraints : {'maxLength':'30'}}" />

```



## Custom Formatter Functions

You can also write your own custom formatter functions. For information how you access the model and path related to the current formatter call, see [sap.ui.core.util.XMLPreprocessor.IContext](https://ui5.sap.com/#/api/sap.ui.core.util.XMLPreprocessor.IContext).

The following code snippet shows a composite binding example. It assumes that the structure of the meta model that is used corresponds to the structure in the example and that `title>` refers to the header info's title property \(line 2 in the code snippet\):

```js
                    
1   "com.sap.vocabularies.UI.v1.HeaderInfo": {
2       "Title": {
3           "Label": {
4               "String": "Customer"
5           },
6           "Value": {
7               "Path": "CustomerName"
8           }
9       }
10  }
```

The following code snippet shows a formatter function that can be used in composite bindings either at root level \(line 1\), or for individual parts \(Line 2\). You can also use it for a simple binding. In this case, it behaves in the same way as a single part.

```
1   <Text text="{path: 'title>Label', formatter: 'formatParts'}: {path: 'title>Value', formatter: 'formatParts'}"/>
2   <Text text="{parts: [{path: 'title>Label', formatter: 'formatParts'}: {path: 'title>Value'}], formatter: 'formatParts'}"/>
```

The following code snippet shows an example formatter function.

```js

1   /*
2    * Custom formatter function for complex bindings to demonstrate access to ith part of binding.
3    * Delegates to {@link sap.ui.model.odata.AnnotationHelper#format} and wraps label texts in
4    * square brackets. Joins parts together, separated by a space.
5    *
6    * @param {sap.ui.core.util.XMLPreprocessor.IContext} oInterface
7    *   the callback interface related to the current formatter call
8    * @param {...any} [vRawValue]
9    *   the raw value(s) from the meta model
10   * @returns {string}
11   *   the resulting string value to write into the processed XML
12   */
13  window.formatParts = function(oInterface, vRawValue) {
14      var i, aResult;
15
16      /*
17       * Delegates to {@link sap.ui.model.odata.AnnotationHelper#format} and wraps label texts
18       * in square brackets.
19       *
20       * @param {sap.ui.core.util.XMLPreprocessor.IContext|sap.ui.model.Context} oInterface
21       *   the callback interface related to the current formatter call
22       * @param {any} [vRawValue]
23       *   the raw value from the meta model
24       * @returns {string}
25       */
26      function formatLabelValue(oInterface, vRawValue) {
27        var sResult = sap.ui.model.odata.AnnotationHelper.format(oInterface, vRawValue);
28        return sMyString.endsWith(oInterface.getPath(), "/Label")
29             ? "["+ sResult + "]"
30             : sResult;
31      }
32  
33       try {
34          if(oInterface.getModel()) {
35              returnformatLabelValue(oInterface, vRawValue);
36          } else {
37              // root formatter for a composite binding
38              aResult = [];
39              // "probe for the smallest non-negative integer"
40              for (i = 0; oInterface.getModel(i); i += 1) {               
41                  aResult.push(
42                      // Note: arguments[i + 1] is the raw value of the ith part!
43                      formatLabelValue(oInterface.getInterface(i), arguments[i + 1])
44                  );
45              }
46              return aResult.join(" ");
47          }
48      } catch (e) {
49          return e.message;
50      }
51  }
52  window.formatParts.requiresIContext = true;
```

This example formatter opts to the extended signature \(see line 51\), which provides a context interface as the first parameter. It distinguishes between root level calls and others \(see line 34\), delegates to `sap.ui.model.odata.AnnotationHelper#format` \(see line 27\), and wraps label texts in square brackets for demo purposes \(see line 29\). For root level calls, it loops over all available parts \(see line 40\) and accesses each part \(see line 43\). The demo code handles each part individually and joins the result, but in practice some more complicated dependency between parts would be realistic.

The delegation to `sap.ui.model.odata.AnnotationHelper#format` provides the raw value we already have at hand, even for root level calls \(see comment in line 42\).

> ### Note:  
> The custom formatter function needs to be accessible globally, because XML templating cannot call formatter functions inside the view's controller. This controller does not yet exist at the time of preprocessing. However, it is not sufficient to simply put it into window \(see line 8\). You must put it into your own namespace.

The example formatter has the following output:

```js

<Text text="[Customer]: {CustomerName}"/>
<Text text="[Customer] {CustomerName}"/>
```

> ### Note:  
> The colon \(":"\) is taken over literally from the first composite binding which consists of two bindings separated by a string literal.



## Mixing Runtime Data and Meta Data Within a Single Binding

The following code snippet shows a single binding that mixes runtime data and meta data. This will not work: The binding refers to the runtime and as runtime is not available ar this point, XML templating cannot replace the binding. \(In the example, "runtime" stands for the name of the model at runtime. This would typically be the default model and thus has no name.\)

```
{= ${runtime>value} > ${meta>threshold} }
```

`meta` will no longer be available anymore, so this binding cannot work as expected, but it will be evaluated every time the value changes and will compare the value to `undefined`.

To solve this, a clear separation is required: One expression binding that refers to meta data only and can be replaced by XML templating, and another expression binding that refers to runtime data only and can be evaluated later on. These two bindings need to be nested as follows:

```
{= '{= ${runtime<value} > ' + ${meta>threshold} + ' }' }
```

XML templating replaces this with a kind of a partial evaluation of the original mixed binding. By carefully putting the pieces into string literals and by taking care of escaping, you have full control over this process of partial evaluation. This is shown in the following examples, where the threshold value is assumed to be a number:

Expression binding with runtime data only:

```
{= ${runtime>value} > 42 }
```

Escaping for string constants:

```
{= '{= \'' + ${meta>A} + '\' + ${/B} } // --> {= 'A' + ${/B} }
```

Using the annotation helper:

```
{= '{= $' + ${path : 'meta>value, formatter :
'sap.ui.model.odata.AnnotationHelper.format'} + ' > ' + ${path : 'meta>threshold',
formatter : 'sap.ui.model.odata.AnnotationHelper.format'} + ' }' }
// --> {= ${path : 'path/to/property/value', type : 'sap.ui.model.odata.type.Int16'} > 42 }
```

[`sap.ui.model.odata.AnnotationHelper.format`](https://ui5.sap.com/#/api/sap.ui.model.odata.AnnotationHelper)

[`sap.ui.core.util.XML.Preprocessor.IContext`](https://ui5.sap.com/#/api/sap.ui.core.util.XMLPreprocessor.IContext)

[XML Templating](xml-templating-5ee619f.md "The XML templating concept enables you to use an XML view as a template. This template is transformed by an XML preprocessor on the source level, the XML DOM, at runtime just before an SAPUI5 control tree is created from the XML source.")

[Formatting, Parsing, and Validating Data](formatting-parsing-and-validating-data-07e4b92.md "Data that is presented on the UI often has to be converted so that is human readable and fits to the locale of the user. On the other hand, data entered by the user has to be parsed and validated to be understood by the data source. For this purpose, you use formatters and data types.")

