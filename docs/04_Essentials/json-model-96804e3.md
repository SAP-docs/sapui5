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

