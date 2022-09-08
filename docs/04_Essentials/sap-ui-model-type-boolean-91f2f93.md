<!-- loio91f2f9396f4d1014b6dd926db0e91070 -->

# sap.ui.model.type.Boolean

The `Boolean` data type represents a string.

The source value \(value given in the model\) must be given as boolean and is transformed into the type of the bound control property:

-    `boolean`: No transformation needed
-    `string`: "true" or "X" are interpreted as true, "false" and "" as false

The `Boolean` type has **no** format or validation constraint options.

Example how a `Boolean` type can be initialized:

```js
// "TypeBoolean" required from module "sap/ui/model/type/Boolean"
// The source value is given as boolean.
var oType = new TypeBoolean();
```

For more information, see the [API Reference: `sap.ui.model.type.Boolean`](https://ui5.sap.com/#/api/sap.ui.model.type.Boolean).

