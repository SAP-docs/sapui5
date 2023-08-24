<!-- loio91f31c206f4d1014b6dd926db0e91070 -->

# sap.ui.model.type.String

The `String` data type represents a string.

The source value \(value given in the model\) must be given as a string and is transformed into the type of the bound control property:

-   `string`: No transformation needed
-   `integer`/`float`: String is parsed accordingly
-   `boolean`: "true" or "X" are interpreted as true, "false" or " " as false

The `string` type does not have any format options.

Example how a `String` type can be initialized:

```js
// "TypeString" required from module "sap/ui/model/type/String"

// The source value is given as string. The length of the string must not be greater than 5.
var oType = new TypeString(null, {maxLength: 5});
```

The `String` type supports the following validation constraints:

-   `maxLength` \(expects an integer number\)
-   `minLength` \(expects an integer number\)
-   `startsWith` \(expects a string\)
-   `startsWithIgnoreCase` \(expects a string\)
-   `endsWith` \(expects a string\)
-   `endsWithIgnoreCase` \(expects a string\)
-   `contains` \(expects a string\)
-   `equals` \(expects a string\)
-   `search` \(expects a regular expression\)

For more information, see API Reference: [`sap.ui.model.type.String`](https://ui5.sap.com/#/api/sap.ui.model.type.String).

