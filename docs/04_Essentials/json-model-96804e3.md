<!-- loio96804e3315ff440aa0a50fd290805116 -->

# JSON Model

The JSON model can be used to bind controls to JavaScript object data, which is usually serialized in the JSON format.

The JSON model is a client-side model and, therefore, intended for small data sets, which are completely available on the client. The JSON model does **not** support mechanisms for server-based paging or loading of deltas. It supports, however, two-way binding. Also, client-side models like the JSON model have **no** built-in support for sending data back to the server. The apps have to use, for example, `model.getData()` and `jQuery.ajax()` to send updated data to the server.

To instantiate a JSON model, use the following code:

```js
var oModel = new sap.ui.model.json.JSONModel();
```

After the instance has been created, there are different options to get the data into the model.

The easiest option is to set data by using the `setData` method:

```js
oModel.setData({
    firstName: "Peter",
    lastName: "Pan"
});
```

> ### Note:  
> The correct JSON notation uses double quotes for the keys and string values.

Usually, you do not define your data inline in the application but load it from a server-side service using an XHR request. The JSON model, however, also has a `loadData` method, which loads the JSON data from the specified URL asynchronously and applies it to the model:

```js
oModel.loadData("data.json");
```

**Related Information**  


[API Reference: `sap.ui.model.json.JSONModel`](https://ui5.sap.com/#/api/sap.ui.model.json.JSONModel)

<a name="loio50357d719b35439984348080bcbb14a4"/>

<!-- loio50357d719b35439984348080bcbb14a4 -->

## Sorting and Filtering in JSON Models

If you use a JSON model for data binding, sorting and filtering is implemented in JavaScript because the data is available on the client. You can use custom sorting and filtering methods in the JSON model. To define custom methods, set the `fnCompare` method on the Sorter object or the `fnTest` method on the filter object after creating it.

The `fnTest` method of the filter gets the value to test as the only parameter and returns, whether the row with the given value should be filtered or not.

```js
var oFilter = new sap.ui.model.Filter("property", function(value) {
    return (value > 100); 
});

```

The `fnCompare` method of the Sorter gets the two values to compare as parameters and returns -1, 0 or 1, dependent on which of the two values should be ordered before the other:

```js
var oSorter = new sap.ui.model.Sorter("property");
oSorter.fnCompare = function(value1, value2) {
    if (value1 < value2) return -1;
    if (value1 == value2) return 0;
    if (value1 > value2) return 1;
};
```

<a name="loiod52e364907f94a3caeb4f5e5ad0cf302"/>

<!-- loiod52e364907f94a3caeb4f5e5ad0cf302 -->

## Binding Path Syntax for JSON Models

The JSON model has a simple binding path syntax, because it consists of named objects, such as properties, arrays, or nested objects.

The following example shows a simple JSON model with the different binding paths:

```js

{
    company: {
        name: "Treefish Inc",
        info: {
            employees: 3,
        },
        contacts: [
            {
                name: "Barbara",
                phone: "873"
            },
            {
                name: "Gerry",
                phone: "734"
            },
            {
                name: "Susan",
                phone: "275"
            }
        ]
    }
}
```

Absolute binding paths within this model:

```
/company/name
/company/info/employees
/company/contacts
```

Relative binding paths within the "/company" context:

```
name
info/employees
contacts
```

Relative binding paths within a list binding of "/company/contacts":

```
name
phone
```

<a name="loio18a76b577b144bc2b9b424e39d379c06"/>

<!-- loio18a76b577b144bc2b9b424e39d379c06 -->

## Performance Impact of Model Updates

The JSON model allows for updating data via the [`JSONModel#setProperty`](https://ui5.sap.com/#/api/sap.ui.model.json.JSONModel%23methods/setProperty) API. The model then iterates all its data bindings to check if the data update in the model affects the binding. If this is the case, listeners to change events for this data binding—typically the bound control—are informed. When you update multiple properties by multiple calls of the `setProperty` API, **each** of these calls iterates the data bindings as described. This may lead to performance issues in large applications with many data bindings and many consecutive calls of the `setProperty` method.

To avoid performance issues in this scenario, prefer [Two-Way Binding](odata-v2-model-6c47b2b.md#loio42b3ca19a47d49a3b4ba5f34ca0d1f7e) over `setProperty` calls. If this is not possible, set the `bAsyncUpdate` parameter to `true` in the calls of the `setProperty` method. The model then iterates the data bindings **asynchronously**: With this, the iteration is only done once for all `setProperty` calls, thus improving the performance.

```

oModel.setProperty("/company/name", "SampleTec Solutions", /*oContext*/ null, /*bAsyncUpdate*/ true);
		
```

<a name="loiob8cd1692485d4108af607af347982dd9"/>

<!-- loiob8cd1692485d4108af607af347982dd9 -->

## Using the Typed JSON Model

> ### Note:  
> `sap.ui.model.json.TypedJSONModel` and `sap.ui.model.json.TypedJSONContext` are only applicable for TypeScript projects. If you use JavaScript, you can continue using `sap.ui.model.json.JSONModel` and `sap.ui.model.Context`.

The `TypedJSONModel` and `TypedJSONContext` classes provide strongly-typed wrappers around the existing `JSONModel` and `Context` classes. The `TypedJSONModel#setData` and `TypedJSONModel#getData` methods accept and return strongly typed data according to the underlying data structure. Manipulating and accessing data in the model via `TypedJSONModel#setProperty` and `TypedJSONModel#getProperty` is type-safe, ensuring that the data structure remains consistent and only **valid binding paths** are passed to these methods.

These features not only prevent runtime errors but allow for a richer development experience due to **autocompletion features**.

The following code snippet illustrates how to use the `TypedJSONModel` and `TypedJSONContext` classes:

```
import { TypedJSONModel } from 'sap/ui/model/json/TypedJSONModel';

interface Order {
  order_id: string;
  items: OrderItem[];
}
interface OrderItem {
  item_id: string;
  approved: boolean;
}

const data: { order: Order } = {
  order: { order_id: "PO-2025-0042", items: [...] },
};

// Benefit from TypeScript's type inference:
const model = new TypedJSONModel(data);
const firstOrderItem = model.getProperty("/order/items/0"); // firstOrderItem: OrderItem -> automatically typed
const approved = firstOrderItem.approved; // approved: boolean -> automatically typed

// Prevent runtime errors at compile time:
model.setProperty("/order/items/0/approved", "true");
// this will raise a typescript error because "true" is not a boolean

const itemID = model.getProperty("/order/items/0/itemID");
// this will raise a typescript error because itemID does not exist on OrderItem
```

You can even use a `TypedJSONContext` to access properties with **relative binding paths** in a type-safe manner:

```
// ...typing as in the previous example...
const context = model.createBindingContext("/order/items/0"); // returns a TypedJSONContext
const itemId = context.getProperty("item_id"); // itemId: string -> automatically typed

// you can also set properties using a context and a relative path:
model.setProperty("approved", false, context); // only accepts "approved" or "item_id" as relative paths -> ensured by TypeScript
```

The `TypedJSONModel` and `TypedJSONContext` classes currently provide a typed wrapper for the following methods:


<table>
<tr>
<th valign="top">

Method

</th>
<th valign="top">

Typed Alternative

</th>
</tr>
<tr>
<td valign="top">

`sap.ui.model.json.JSONModel#getData`

</td>
<td valign="top">

`sap.ui.model.json.TypedJSONModel#getData`

</td>
</tr>
<tr>
<td valign="top">

`sap.ui.model.json.JSONModel#setData`

</td>
<td valign="top">

`sap.ui.model.json.TypedJSONModel#setData`

</td>
</tr>
<tr>
<td valign="top">

`sap.ui.model.json.JSONModel#getProperty`

</td>
<td valign="top">

`sap.ui.model.json.TypedJSONModel#getProperty`

</td>
</tr>
<tr>
<td valign="top">

`sap.ui.model.json.JSONModel#setProperty`

</td>
<td valign="top">

`sap.ui.model.json.TypedJSONModel#setProperty`

</td>
</tr>
<tr>
<td valign="top">

`sap.ui.model.json.JSONModel#createBindingContext`

</td>
<td valign="top">

`sap.ui.model.json.TypedJSONModel#createBindingContext`

</td>
</tr>
<tr>
<td valign="top">

`sap.ui.model.Context#getProperty`

</td>
<td valign="top">

`sap.ui.model.json.TypedJSONContext#getProperty`

</td>
</tr>
<tr>
<td valign="top">

`sap.ui.model.Context#getModel`

</td>
<td valign="top">

`sap.ui.model.json.TypedJSONContext#getModel`

</td>
</tr>
</table>



<a name="loiob8cd1692485d4108af607af347982dd9__section_jp4_lbx_hgc"/>

## Defining the Underlying Data Structure

You can define the underlying data structure of the `TypedJSONModel` implicitly by calling the constructor. The data passed to the constructor will be used as a reference for the data structure as shown above.

In case you need to define the data structure explicitly, e.g. when declaring a property *without setting it*, use the generic type parameter as shown below:

```
import Controller from "sap/ui/core/mvc/Controller";
import { TypedJSONModel } from 'sap/ui/model/json/TypedJSONModel';

export default class App extends Controller {
  model: TypedJSONModel<{ order: Order }>;
  ...
}
```

