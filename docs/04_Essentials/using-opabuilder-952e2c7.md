<!-- loio952e2c7458e14d6581cdfc510fbb272a -->

# Using `OpaBuilder`

Write tests by leveraging the builder pattern to create OPA5 descriptors.

`sap.ui.test.OpaBuilder` is available as of version 1.74.

The main benefit for developers is having a function-driven API at hand, which supports and promotes a clean test definition and execution.

In [Simulating User Interactions on Controls](simulating-user-interactions-on-controls-8615a0b.md), we provided some examples on how to interact with controls. Let's have a look at some by implementing them using `OpaBuilder`.



<a name="loio952e2c7458e14d6581cdfc510fbb272a__section_zys_cq4_xjb"/>

## Simulating a `press` Event

The `waitFor` options for this straightforward example are as follows:

```js
return oOpa.waitFor({
    id: "myButton",
    actions: new Press()
});
```

When you use `OpaBuilder`, it looks like this:

```js
return oOpa.waitFor(
    new OpaBuilder()
        .hasId("myButton")
        .doPress()
        .build()
);
```

The result of the `OpaBuilder.build` method is the configuration object for the `Opa5.waitFor` method. Because it's commonly used just as such, `OpaBuilder` comes with a convenient `OpaBuilder.execute()` method. The required `Opa5` instance can be provided as a parameter to the `execute` function, or you can use the `constructor` or `create` method. Taking this into account, the previous example can also be written like this:

```js
return OpaBuilder.create(oOpa)
    .hasId("myButton")
    .doPress()
    .execute();
```

For more information, see [`OpaBuilder.build`](https://ui5.sap.com/#/api/sap.ui.test.OpaBuilder/methods/build), [`OpaBuilder.execute`](https://ui5.sap.com/#/api/sap.ui.test.OpaBuilder/methods/execute), and [`OpaBuilder.create`](https://ui5.sap.com/#/api/sap.ui.test.OpaBuilder/methods/sap.ui.test.OpaBuilder.create).



<a name="loio952e2c7458e14d6581cdfc510fbb272a__section_lvr_tt4_xjb"/>

## Complex Interaction with Child Elements

Let's assume we want to show the suggestion list with a filter for "Jo". The `waitFor` definition could look like this:

```js
oOpa.waitFor({
    id: "formInput",
    actions: [
        new EnterText({
            text: "Jo",
            keepFocus: true
        }),
        function (oInput) {
            this.waitFor({
                controlType: "sap.m.StandardListItem",
                matchers: [
                    new Ancestor(oInput),
                    new Properties({ title: "John" })
                ],
                actions: new Press()
            });
        }
    ]
});
```

`OpaBuilder` comes with convenient functions to operate on aggregations and child elements: `OpaBuilder.doOnAggregation` and `OpaBuilder.doOnChildren`.

While `doOnAggregation` requires the aggregation name of the defined control and only operates on those SAPUI5 aggregation items, `doOnChildren` addresses any control that is a child within the control hierarchy. Internally, the `sap.ui.test.Matchers.Ancestor` matcher is used as well, but the definition is simplified:

```js
OpaBuilder.create(oOpa)
    .hasId("formInput")
    .doEnterText("Jo", false, true),
    .doOnChildren(
        OpaBuilder.create(oOpa)
            .hasType("sap.m.StandardListItem")
            .hasProperties({ title: "John" })
            .doPress()
    )
    .execute();
```

For more information, see [`OpaBuilder.doOnAggregation`](https://ui5.sap.com/#/api/sap.ui.test.OpaBuilder/methods/doOnAggregation) and [`OpaBuilder.doOnChildren`](https://ui5.sap.com/#/api/sap.ui.test.OpaBuilder/methods/doOnChildren).



<a name="loio952e2c7458e14d6581cdfc510fbb272a__section_nyd_yv4_xjb"/>

## Custom Functions and Chaining

Let's have a look at an example including a custom matcher and an action:

```js
When.waitFor({
    id: "entryList",
    matchers: [
        new Properties({ mode: "MultiSelect" }),
        function (oList) {
            return oList.getItems().length > 0;
        }
    ],
    actions: function (oList) {
        for (var i = 0; i < oList.getItems().length; ++i) {
            oList.setSelectedItem(oList.getItems()[i], true);
        }
    },
    errorMessage: "Could not select all items"
});
```

> ### Note:  
> This example showcases the usage of a custom action. The best practice that we recommend is to use only `Press` and `EnterText` actions when simulating user interactions.

Besides user-defined functions, the example also contains two matchers. As the parameter of the `has` method accepts the same types as the `matchers` property, this part could directly be rewritten as:

```js
...
    .has([
        new Properties({ mode: "MultiSelect" }),
        function (oList) {
            return oList.getItems().length > 0;
        }
    ])
...
```

However, by leveraging the builder pattern, the `.has` methods can easily be chained. The resulting `matchers` options are an array consisting of all defined single matchers in the order of definition. This is similar to the `.do` method and the `actions` property.

```js
OpaBuilder.create(When)
    .hasId("entryList")
    .hasProperties({ mode: "MultiSelect" })
    .has(function (oList) {
        return oList.getItems().length > 0;
    })
    .do(function (oList) {
        for (var i = 0; i < oList.getItems().length; ++i) {
            oList.setSelectedItem(oList.getItems()[i], true);
        }
    })
    .error("Could not select all items")
    .execute();
```

While `matchers` and `actions` can be an array of functions, the more seldom used `check` and `success` properties must be a single function. Nevertheless, due to the builder pattern, those functions can be chained as well:

```js
OpaBuilder.create()
    .check(fnCheck1)
    .check(fnCheck2)
    .check(fnCheck3)
    .success(fnAssert1)
    .success(fnAssert2)
    .build();
```

`OpaBuilder` chains those functions, which results in the following `waitFor` options:

```js
{
    check: function (vInput) {
        return function(vInput) {
            return fnCheck1(vInput) && fnCheck2(vInput);
       ) && fnCheck3(vInput);
    },
    success: function (vInput) {
        fnAssert1(vInput);
        fnAssert2(vInput);
    }
}
```



<a name="loio952e2c7458e14d6581cdfc510fbb272a__section_dlk_2z4_xjb"/>

## Additional Features

While `OpaBuilder` itself cannot extend the features provided by `Opa5.waitFor`, it comes with some convenient methods to support test definition. Besides the already mentioned child element support, method chaining, and most commonly used matchers and actions as predefined functions, there are some less obvious features.



### Generated Error Message

If no error message is explicitly defined, `OpaBuilder` generates an error message when calling `build()`. The message consists of the `controlType` and `id` properties as well as the number of any additional matchers. A generated `errorMessage` can look like this:

```js
sap.m.Button#myButton with 1 additional matcher(s) not found
```



### Success Message and Description

When defining an OPA5 test without an assertion, there's no output on success. Most often, such an output is useful for longer journeys, so the `OpaBuilder.success` method also accepts a string argument. This generates a simple truthy assertion with the provided message as a success function:

```js
success: function (vControls) {
    Opa5.assert.ok(true, sSuccessMessage);
}
```

The `OpaBuilder.description` function can be used for even better logging. The provided message is set as `errorMessage` and assertion on success:

```js
OpaBuilder.description("Pressing 'Cancel' button")

// Output message...
// ...in case of success
Pressing 'Cancel' button - OK

// ...in case of failure
Pressing 'Cancel' button - FAILURE
```



### Aggregation Matcher

A common use case of tests is finding and operating on a control with one or more aggregation items that fulfill certain conditions. While there are already some predefined matchers for aggregations in place, `OpaBuilder` comes with the generic `hasAggregation` and the most commonly used `hasAggregationProperties` methods. The `vMatchers` parameter of `hasAggregation` can be any matcher method \(or matcher chain\) that is executed against the items of the defined aggregation of the matching control.

```js
OpaBuilder.create(oOpa)
    .hasType("sap.m.CustomListItem")
    .hasAggregation("content", [
        function(oContentItem) {
            return oContentItem instanceof sap.m.Title;
        },
        { 
            properties: {
                text: sMatchingTitle
            }
        }
    ])
    .press()
    .description("Pressing list item with title: " + sMatchingTitle)
    .execute();
```

> ### Note:  
> Defining two `hasAggregation` matchers can also match two different aggregation items. To ensure that one item fulfills all criteria, an all-criteria-matcher should be defined in the same `hasAggregation` call.



### Conditional Actions

When defining journeys, reusable functions in the page can speed up writing tests and their quality. Sometimes, the generic approach of those functions is not suitable. For example, a test fails if no control is found that matches the conditions. This could be a challenge if the control being tested is not guaranteed to exist.

**Example**:

Let's have an interaction that selects all items of a list that aren't selected yet.

```js
OpaBuilder.create(oOpa)
    .hasType("sap.m.CustomListItem")
    .hasProperties({ selected: false })
    .doPress()
    .description("Selecting unselected items")
    .execute();
```

This is fine as long as there is at least one unselected list item. When all items are already selected, the test fails, which is not what we want. Here, the `doConditional` function comes in handy:

```js
OpaBuilder.create(oOpa)
    .hasType("sap.m.CustomListItem")
    .doConditional(
        OpaBuilder.Matchers.properties({ selected: false }), 
        OpaBuilder.Actions.press()
    )
    .description("Selecting unselected items")
    .execute();
```



### Commonly Used Matchers and Actions

As already seen in the last example, `OpaBuilder` has two static members: `OpaBuilder.Matchers` and `OpaBuilder.Actions`. While there's no issue in using any matchers from `sap.ui.test.Matchers` in the `OpaBuilder` definition, the goal of the two members is to provide the most commonly used matchers and actions to be directly accessed when working with `OpaBuilder` without explicitly requiring them in the test class.

`OpaBuilder.Actions` contains both `sap.ui.test.Actions.Press` and `sap.ui.test.Actions.EnterText`, while `OpaBuilder.Matchers` does **not** contain every predefined matcher in `sap.ui.test.Matchers`, but still provides some additional ones as described in the API.



**Related Information**  


[API Reference: `sap.ui.test.OpaBuilder`](https://ui5.sap.com/#/api/sap.ui.test.OpaBuilder)

[API Reference: `sap.ui.test.OpaBuilder.Matchers`](https://ui5.sap.com/#/api/sap.ui.test.OpaBuilder.Matchers)

[API Reference: `sap.ui.test.OpaBuilder.Actions`](https://ui5.sap.com/#/api/sap.ui.test.OpaBuilder.Actions)

