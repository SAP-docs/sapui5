<!-- loio91f30dbf6f4d1014b6dd926db0e91070 -->

# sap.ui.model.type.Float

The `Float` data type represents a float value.

The source value for this data type, that is, the value given in the model must be given as a number and is transformed into the type of the bound control property as follows:

-   `float`: No transformation needed
-   `integer`: Value is rounded using `Math.floor` 
-   `string`: Value is formatted or parsed according to the given output pattern

Examples how a `Float` type can be initialized:

```js
// "TypeFloat" required from module "sap/ui/model/type/Float"

// The source value is given as JavaScript number. Output is transformed into the type of the bound control property.
// If this type is "string" (e.g. the value property of the TextField control) the used default output pattern parameters depend on locale and fixed settings.

var oType = new TypeFloat();

// The source value is given as JavaScript number. Output is transformed into the type of the bound control property.
// If this type is "string" (e.g. the value property of the TextField control) the given output pattern is used (parameters which are not specified are taken from the default pattern)

oType = new TypeFloat({
  minIntegerDigits: 1, // minimal number of non-fraction digits
  maxIntegerDigits: 99, // maximal number of non-fraction digits
  minFractionDigits: 0, // minimal number of fraction digits
  maxFractionDigits: 99, // maximal number of fraction digits
  groupingEnabled: true, // enable grouping (show the grouping separators)
  groupingSeparator: ",", // the used grouping separator
  decimalSeparator: "." // the used decimal separator
});
```

The `Float` type supports the following validation constraints:

-   maximum
-   minimum

For more information, see the [API Reference: `sap.ui.model.type.Float`](https://ui5.sap.com/#/api/sap.ui.model.type.Float).

