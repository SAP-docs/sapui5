<!-- loiodaf6852a04b44d118963968a1239d2c0 -->

# Expression Binding

Expression binding is an enhancement of the SAPUI5 binding syntax, which allows for providing expressions instead of custom formatter functions.

Using expression binding saves the overhead of defining a function and is recommended if the formatter function has a trivial implementation like a comparison of values. Expression binding is especially useful in the context of SAPUI5 XML templating where XML views with templating are preprocessed and the SAPUI5 controller as the natural place to put custom formatter functions is not available.

An expression binding is specified in an XML view by one of the following two options:

-   <code>{=<b>expression</b>}</code>

    This variant uses one-way binding. This allows the automatic recalculation if the model values change.

-   <code>{:=<b>expression</b>}</code>

    This variant uses one-time binding, meaning that the value is calculated only once. This variant needs less resources because no change listeners to the model have to be maintained.


The syntax of the `expression` is similar to JavaScript syntax, but you can only use a subset of the JavaScript expression syntax as defined in the table below. Additionally, you can embed values from the model layer into an expression as additional bindings by using one of the following syntaxes:

-   <code>%{<b>binding</b>}</code>

-   <code>${<b>binding</b>}</code>


`binding` can either be a simple path or a complex binding. The embedded binding <code>${<b>binding</b>}</code> delivers a value formatted according to the target type of the control property the expression binding applies to, for example `boolean` in case of `<Icon src="sap-icon://message-warning" visible="{= ${status} === 'critical' }">`. This can be undesirable or even lead to errors, for example if OData V4 automatically adds the correct type for the `status` property, which is string-like, not boolean. For expression bindings, we therefore recommend to use the syntax `%{binding}` by default, which is just a shortcut for `${path : 'binding', targetType : 'any'}`. In rare cases, you might also want to specify a different `targetType`, for example `string`, `boolean`, `int` or `float`.

For more information how these values relate to OData types, see the [`sap.ui.model.odata.type`](https://ui5.sap.com/#/api/sap.ui.model.odata.type) API documentation or explore the [XML Templating: UI5 OData Types](https://ui5.sap.com/#/entity/sap.ui.core.mvc.XMLView/sample/sap.ui.core.sample.ViewTemplate.types) sample in the Demo Kit.

For more information about `targetType`, see the [sap.ui.base.ManagedObject\#bindProperty](https://ui5.sap.com/#/api/sap.ui.base.ManagedObject/methods/bindProperty) API documentation in the Demo Kit.

> ### Note:  
> Expression binding can also be used with JavaScript:
> 
> ```js
> // Example 1
> new Text({"visible": "{=%{status} === 'critical' && %{amount} > 10000 }"});
> 
> // Example 2
> new Icon({color: "'{=encodeURIComponent(%{/ID}) }'"});
> ```

> ### Note:  
> An expression binding does **not** validate binding paths. As a result, an expression binding will **not** detect incorrect or misspelled binding paths. But if you use an OData V4 model and try to bind data that does **not** exist in the model, a warning is logged in the console.

To embed a path containing a closing curly brace into an expression binding, use a complex binding syntax: `%{path:'...'}`, for example `"{:= %{path:'target>extensions/[${name} === \'semantics\']/value'} === 'email'}"`. You can use this also to avoid variable replacement by buildtools like Maven for special names like "Description" or "Name".


<table>
<tr>
<th valign="top">

Syntax Element

</th>
<th valign="top">

Symbol

</th>
</tr>
<tr>
<td valign="top">

Literal

</td>
<td valign="top">

number, for example `42`, `6.022e+23` or `-273.15`

object, for example `{foo: 'bar'}`

string, for example `'foo'`

`null`

`true`

`false`

</td>
</tr>
<tr>
<td valign="top">

Grouping

</td>
<td valign="top">

\(...\), for example `3 * (4 + 10)` 

</td>
</tr>
<tr>
<td valign="top">

Unary operator

</td>
<td valign="top">

`!`

`+`

`-`

`typeof`

</td>
</tr>
<tr>
<td valign="top">

Multiplicative operator

</td>
<td valign="top">

`*`

`/`

`%`

</td>
</tr>
<tr>
<td valign="top">

Additive operator

</td>
<td valign="top">

`+`

`-`

</td>
</tr>
<tr>
<td valign="top">

Relational operator

</td>
<td valign="top">

`<`

`>`

`<=`

`>=`

</td>
</tr>
<tr>
<td valign="top">

Strict equality operator

</td>
<td valign="top">

`===`

`!==`

</td>
</tr>
<tr>
<td valign="top">

Binary logical operator

</td>
<td valign="top">

`&&`

`||`

</td>
</tr>
<tr>
<td valign="top">

Conditional operator

</td>
<td valign="top">

`?` 

</td>
</tr>
<tr>
<td valign="top">

Member access operator with the `.` operator

</td>
<td valign="top">

> ### Note:  
> With these, you can use members and member methods on standard types such as string, array, number, and so on.
> 
> Example: `%{message>/}.length >0` or `%{/firstName}.indexOf('S')`.



</td>
</tr>
<tr>
<td valign="top">

Function call

</td>
<td valign="top">

`<function name>(...)`

Example:

<code>• text="{= <b>Math.max(%{/value1}, %{/value2}, %{/value3})</b> }"</code>

> ### Note:  
> You can use functions that are available via global symbols, such as `Math.max(...)` or `isNaN(...)`.



</td>
</tr>
<tr>
<td valign="top">

Array literals

</td>
<td valign="top">

`[...]`, for example `[2,3,5,7,11]` 

</td>
</tr>
<tr>
<td valign="top">

Property/array access

</td>
<td valign="top">

`o[...]`, for example `'foo/bar'.split('/')[1]` 

</td>
</tr>
<tr>
<td valign="top">

`in` operator

</td>
<td valign="top">

`'PI' in Math` \(true\) or `0 in []` \(false\)

</td>
</tr>
<tr>
<td valign="top">

Global symbol

</td>
<td valign="top">

`Array`, `Boolean`, `Date`, `encodeURIComponent`, `Infinity`, `isFinite`, `isNaN`, `JSON`, `Math`, `NaN`, `Number`, `Object`, `odata.collection`,`odata.compare`, `odata.fillUriTemplate`, `odata.uriEncode`, `parseFloat`, `parseInt`, `RegExp`, `String`, `undefined`

> ### Note:  
> When using any of the global symbols `odata.compare`, `odata.fillUriTemplate`, or `odata.uriEncode`, make sure to require the `sap/ui/model/odata/ODataExpressionAddons` module in advance to avoid synchronous loading of modules on demand. If you need to minimize the loading of modules, e.g. for performance reasons, you can also import the corresponding modules individually:
> 
> -   `sap.ui.model.odata.v4.ODataUtils` if `odata.compare` is used
> -   `sap.ui.thirdparty.URITemplate` if `odata.fillUriTemplate` is used
> -   `sap.ui.model.odata.ODataUtils` if `odata.uriEncode` is used



</td>
</tr>
</table>



## Simple Example

> ### Note:  
> With expression binding you only need the XML view but no controller logic.

The following example shows how you use the custom formatter function to map an XML view to an expression binding in the XML view without controller logic.

The icon is only displayed if the status property in the view's default model has the value `critical`. You can use expression binding to replace the formatter function `myFormatter` in the controller with an expression binding in the XML view. You no longer need to implement any formatter function.

The application version without expression binding consists of the XML view \(`sample.App.view.xml`\) and the controller:

XML view \(`sample.App.view.xml`\)

```xml
<mvc:View controllerName="sample.App" xmlns="sap.ui.core" xmlns:mvc="sap.ui.core.mvc">
    ...
    <Icon src="sap-icon://message-warning" visible="{path: 'status', formatter: '.myFormatter'}">
    ...
</mvc:View>
```

Controller \(`sample.App.controller.js`\)

```xml
...
myFormatter(sStatus) {
    return sStatus === "critical";
}
...
```

When using expression binding, however, you only need the XML view without controller logic \(`sample.App.view.xml`\):

```xml
<mvc:View controllerName="sample.app" xmlns="sap.ui.core" xmlns:mvc="sap.ui.core.mvc">
    ...
    <Icon src="sap-icon://message-warning" visible="{= %{status} === 'critical'}">
    ...
</mvc:View>
```

> ### Note:  
> Some symbols need to be escaped in XML views, for example `&&` needs to be escaped with `&amp;&amp;`



## More Complex Expressions

With the expression syntax sketched above it is possible to create more complex expressions as shown in the examples below.

> ### Note:  
> We recommend to use formatter functions instead of very complex and hard-to-read expressions. Some characters that are used by operators, however, need to be escaped in XML, for example the left angle bracket \(<\) and the ampersand \(&\). Escaping makes it more difficult to read the expression. To avoid escaping, use one of the following options:
> 
> -   Rephrase the expression to make it more readable, for example, use `a > b` instead of `b &lt; a`.
> 
> -   Use a custom formatter function.
> 
> 
> For more information about escaping in XML, see the W3C XML specification at [http://www.w3.org/TR/xml/\#syntax](http://www.w3.org/TR/xml/#syntax).

Examples for more complex expressions:

```xml
<!-- Set to visible if the status is critical and the amount is above the threshold (note escaping of &&). -->
visible="{=%{status} === 'critical' &amp;&amp; %{amount} > 10000}"
```

```xml
<!-- Text for amount level using language-dependent texts from the resource model. -->
text="{=%{/amount} > 10000 ? %{i18n>/high} : %{i18n>/normal}}"
```

```xml
<!-- Set to visible if the rating is VIP, ignoring case or if the order amount is greater than 10,000. -->
visible="{=%{/rating}.toUpperCase() === 'VIP' || %{/orderAmount} > 10000}"
```

```xml
<!-- Set to visible if the rating contains VIP, ignoring the case. -->
visible={=RegExp('vip', 'i').test(%{/rating})}
```

```xml
<!-- Text is maximum of three values. -->
text="{= Math.max(%{/value1}, %{/value2}, %{/value3})}"
```

```xml
<!-- Control is enabled only if the order status is set. --> 
enabled="{=%{/orderStatus} !== null}"
```

```xml
<!-- Set text to the second string 'middle', access second element in the array generated via 'split'. -->
text="{='small@middle@long'.split('@')[1]}"
```

```xml
<!-- Concatenate literal strings and expression bindings or bindings. -->
text="Hello {=%{gender}==='male' ? 'Mr.' : 'Mrs.'} {lastName}"
```

```xml
<!-- Set text by using a composite binding that combines several values in a formatter defined by a parameterized entry of an i18n language resource. -->
<!-- i18n language resource -->
successMsg=Message is available from {0} until {1}
errorMsg=Message is too short

<!-- View -->
<mvc:View
    controllerName="sample.App"
    xmlns="sap.m"
    xmlns:core="sap.ui.core"
    xmlns:mvc="sap.ui.core.mvc"
    core:require="{DateType: 'sap/ui/model/type/Date'}">
    ...
    <Text 
        text="{=%{/data/message}.length &lt; 20
         ? %{i18n>errorMsg} 
         : %{parts: [
             {path: 'i18n>successMsg'},
             {path: '/data/today', type: 'DateType', constraints: {displayFormat: 'Date'}},
             {path: '/data/tomorrow', type: 'DateType', constraints: {displayFormat: 'Date'}}
         ], formatter: '.formatMessage'}}" />
    ...		
</mvc:View>
```

```
// Controller
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/base/strings/formatMessage"
], function(Controller, formatMessage) {
    return Controller.extend("sample.App", {
        onInit() {
            ...
        },
        formatMessage: formatMessage,
        ...
    });
});
```

**Related Information**  


[Composite Binding](composite-binding-a2fe8e7.md "Calculated fields enable the binding of multiple properties in different models to a single property of a control.")

[Examples for Data Binding in Different View Types](examples-for-data-binding-in-different-view-types-25ab54b.md "Examples how complex syntax can be used for calculated fields in XML, HTML, and JS views.")

[XML Templating](xml-templating-5ee619f.md "The XML templating concept enables you to use an XML view as a template. This template is transformed by an XML preprocessor on the source level, the XML DOM, at runtime just before an SAPUI5 control tree is created from the XML source.")

[Configuration of the SAPUI5 Runtime](configuration-of-the-sapui5-runtime-91f08de.md "SAPUI5 provides several options for the configuration of the SAPUI5 runtime. The possible ways to provide input for the available configuration options are described in detail.")

