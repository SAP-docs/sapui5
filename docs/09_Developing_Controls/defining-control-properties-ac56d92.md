<!-- loioac56d92162ed47ff858fdf1ce26c18c4 -->

# Defining Control Properties

Control properties are defined as follows:

```js
properties: {
    title : "string",                         // a simple string property, default value is undefined
    buttonText : {defaultValue: "Search"},    // when no type is given, the type is string
    showLogoutButton : {type : "boolean", defaultValue : true},   // a boolean property where a default value is given
    width : {type : "sap.ui.core.CSSSize", defaultValue : "50px"} // a CSS size property where a default value is given
}
```

After the property is defined, the control automatically has the `setShowLogoutButton` and `getShowLogoutButton` methods for storing data. It is possible to assign custom definitions to these methods by overriding them and calling the generic property methods `setProperty` and `getProperty`:

```js
MyControl.prototype.setShowLogoutButton = function(show) {
    this.setProperty("showLogoutButton", show); // this validates and stores the new value
    return this; // return "this" to allow method chaining
};

```



## Allowed Property Types

**Built-in Types**


<table>
<tr>
<th valign="top">

Type

</th>
<th valign="top">

Description

</th>
</tr>
<tr>
<td valign="top">

`boolean` 

</td>
<td valign="top">

Can either be `true` or `false`. Properties of that type should not be set to `undefined` or `null`. The default value is `false`.

</td>
</tr>
<tr>
<td valign="top">

`int` 

</td>
<td valign="top">

JavaScript primitive values of type `number` and that don't have a fractional part. To keep the implementation efficient, the constraint is not enforced. Declaring a property as type `int` is rather for information reasons. The corresponding object expects any given value to be an integer value. The default value of the type is the number `0`.

</td>
</tr>
<tr>
<td valign="top">

`float` 

</td>
<td valign="top">

JavaScript primitive values of type `number` that can have a fractional part. It is named `float` instead of `number` to differentiate it from type `int` . The default value is the number `0`.

</td>
</tr>
<tr>
<td valign="top">

`string` 

</td>
<td valign="top">

JavaScript string literal \(`typeof value === "string"`\) or a `String` object \(`value instanceof String`\). The default value is an empty string.

</td>
</tr>
<tr>
<td valign="top">

`object` 

</td>
<td valign="top">

Plain JavaScript object \(an object whose constructor is `Object`\). Most of the time, other objects are accepted as well, but deserializers \(e.g. for XML views\) will try to convert the object from or to a JSON string. The default value is `null`.

Don't mix this type up with the `any` type! \(Sorry, we maybe should have named it „`serializable`" or „`JSON`" or something like that, to make this more clear...\).

</td>
</tr>
<tr>
<td valign="top">

`any` 

</td>
<td valign="top">

Any valid Javascript value \(including primitives, objects, functions, regular expressions, and native objects\). The support in serialized formats is quite limited. Valid JSON strings will be deserialized to an object. The default value is `null`.

</td>
</tr>
<tr>
<td valign="top">

`function` 

</td>
<td valign="top">

Can be any JavaScript function.

> ### Note:  
> Properties of type `function` defined in an XML view can be specified similar to [event handlers in XML views](../04_Essentials/handling-events-in-xml-views-b0fb4de.md). However, the legacy syntax of function names without dots is not supported.



</td>
</tr>
</table>

**Derived Types**


<table>
<tr>
<th valign="top">

Category

</th>
<th valign="top">

Description

</th>
</tr>
<tr>
<td valign="top">

regular expression \(RegExp\)

</td>
<td valign="top">

Derived from the built-in type `string`.

Restricted subtypes that limit their valid values to strings that match a given regular expression.

`RegExp` types can only be defined by calling the `DataType.createType()` method.

Example:

```
var fooType = DataType.createType('foo', {
    isValid : function(vValue) {
        return /^(foo(bar)?)$/.test(vValue);
    }
}, DataType.getType('string'));

```

If `mSettings` contains an implementation for `isValid`, then the validity check of the newly created type will first execute the check of the base type and then call the given `isValid` function.

For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.base.DataType). 

</td>
</tr>
<tr>
<td valign="top">

enumeration \(enum\)

</td>
<td valign="top">

Derived from the built-in type `string`.

Restricted subtypes can be derived that limit their valid values to a fixed set of values \(enumeration\).

An `enum` type is defined through an object literal whose keys represent the allowed values and must be registered by calling the `DataType.registerEnum()` method.

Restrictions:

-   The value for each key must be a string literal, equal to the key itself.

-   Renamings or aliases are not supported and only keys and values of type `string` are supported.


This was an early design decision in SAPUI5 and framework code relies on it. That code might fail for enumerations that don't obey these restrictions.

To reference an `enum` type in a property definition, its string name must be used \(like `sap.m.ValueColor` in the example below\).

Example for creating an enumeration:

```js
sap.ui.define(["sap/ui/base/DataType"], (DataType) => {
    /**
    * Enumeration of possible value color settings.
    *
    * @enum {string}
    * @public
    */
    const ValueColor = {
        /**
        * Neutral value color.
        * @public
        */
        Neutral : "Neutral",
        …
    };
    // Register enum type
    DataType.registerEnum("sap.m.ValueColor", ValueColor);
});
```

Example for defining a property using an enumeration:

```js

properties: {
    myProperty : {type: "sap.m.ValueColor", defaultValue: "Neutral"}
}

```

Example for requiring enum types programmatically:

```js
sap.ui.require([
    "sap/m/library", // enum sap.m.ButtonType (Module: sap/m/library)
    "sap/ui/model/FilterType" // enum sap.ui.model.FilterType (Module: sap/ui/model/FilterType)
], (sapMLib, FilterType) => {
    const { ButtonType } = sapMLib;
    mySapMButton.setType(ButtonType.Emphasized);
    myListBinding.filter(myFilter, FilterType.Control);
});
```

Make sure to check the API Reference on how to access types via their correct Module IDs \(documented as "Module: .../.../..."\).

> ### Caution:  
> **Deprecated Pseudo Modules:** Enums contained in a `library.js` module should not be imported as a standalone module. For more information, see [Best Practices for Loading Modules](../04_Essentials/best-practices-for-loading-modules-00737d6.md).



</td>
</tr>
<tr>
<td valign="top">

array

</td>
<td valign="top">

You don't have to define array types before using an array. From each valid type above, an array type with one or more dimensions can be derived by simply appending a pair of square brackets \(`[]`\) for each dimension.

Example:

```js

properties: {
    myProperty1 : "int[]",
    myProperty2 : "int[][]"
}

```

-   `int[]` is a one-dimensional array of integers

-   `int[][]` is a two-dimensional array of integers \(or more precisely an array of integer arrays\)


The type of an element in an array is called the component type \(`int` in the first example, `int[]` in the second\).

The `DataType` object for an array type has a method `getComponentType` to retrieve the component `type`. For non-array types, this method returns `null`.

The default value for any array type is the empty array.

</td>
</tr>
</table>



## Runtime Behavior and API of Property Types

At runtime, each type is represented as instance of the class `DataType` \(`sap/ui/base/DataType.js`\). A type can be looked up by its name by calling `DataType.getType(name)`. The framework treats all values for the above types as if they would be atomic. Changes inside a value \(e.g. changing the property of a value of type `object` or adding, removing, or changing members of an array\) are not detected by the framework and might lead to unexpected results. Instead, any change should be applied by setting a new \(or modified\) value with a call like `setText`, `setCaption`, `setColor`.

**Related Information**  


[API Reference: `sap.ui.base.DataType`](https://ui5.sap.com/#/api/sap.ui.base.DataType)

