<!-- loio21aeff6928f84d179a47470123afee59 -->

# Retrieving Controls

Common use cases for retrieving controls



<a name="loio21aeff6928f84d179a47470123afee59__section_nyd_prc_wbb"/>

## Retrieving a Control by Its ID

```js
new sap.ui.test.Opa5().waitFor({
    id : "page-title",
    viewName : "Category",
    viewNamespace : "my.Application.",
    success : function (oTitle) {
        Opa5.assert.ok(oTitle.getVisible(), "the title was visible");
    }
});
```

In this example, we search for a control with the ID `page-title`. The control is located in the `my.Application.Category` view.

By default, OPA5 tries to find the element until the default timeout of 15 seconds is reached. You can override this behavior by passing it as a parameter to the `waitFor` function. Zero means infinite timeout.

```js
new sap.ui.test.Opa5().waitFor({
    id : "productList",
    viewName : "Category",
    success : function (oList) {
        Opa5.assert.ok(oList.getItems().length, "The list did contain products");
    },
    timeout: 10
});
```

In this example, the `check` function is omitted. In this case, OPA5 creates its own `check` function that waits until the control is found or the specified timeout is reached.



<a name="loio21aeff6928f84d179a47470123afee59__section_zkc_qrc_wbb"/>

## Retrieving a Control That Doesn't Have an ID

Sometimes you need to test for a control that has no explicit ID set and maybe you can't or don't want to provide one for your test. To get around this issue, use a custom check function to filter for this control. Let's assume we have a view called `Detail` and there are multiple `sap.m.ObjectHeaders` on this page. We want to wait until there's an object header with the title `myTitle`.

To do this, use the following code:

```js
return new Opa5().waitFor({
    controlType : "sap.m.ObjectHeader",
    viewName : "Detail",
    matchers : new sap.ui.test.matchers.PropertyStrictEquals({
                                 name : "title",
                                 value: "myTitle"
                           }),
    success : function (aObjectHeaders) {
        Opa5.assert.strictEqual(aObjectHeaders.length, 1, "was there was only one Object header with this title on the page");
        Opa5.assert.strictEqual(aObjectHeaders[0].getTitle(), "myTitle", "was on the correct Title");
    }
});

```

Since no ID is specified, OPA passes an array of controls to the `check` function. The array contains all visible object header instances in the `Detail` view. However, a built-in support for comparing properties doesn't exist, so we implement a custom check.



<a name="loio21aeff6928f84d179a47470123afee59__section_n1n_rrc_wbb"/>

## More About Matchers

For more information about all matchers, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.test.matchers) and the [Samples](https://ui5.sap.com/#/entity/sap.ui.test.matchers). 

`sap.ui.test.matchers.Properties`: This matcher checks if the controls have properties with given values. The values can also be defined as regular expressions \(`RegExp`\) for the string type properties.

```js
return new Opa5().waitFor({
            controlType : "sap.m.StandardListItem",
            matchers : new sap.ui.test.matchers.Properties({
                text: new RegExp("laptop", "i"),
                selected: true
            }),
            success : function (aItems) {
                Opa5.assert.ok(aItems[0], "Item is selected")
            },
            errorMessage: "No selected item found"
});
```

> ### Note:  
> `sap.ui.test.matchers.Properties` and `sap.ui.test.matchers.PropertyStrictEquals` serve the same purpose but it's easier to pass parameters to `sap.ui.test.matchers.Properties`.

`sap.ui.test.matchers.Ancestor`: This matcher checks if the control has the specified ancestor \(ancestor is of a control type\).

```js
var oOpa = new Opa5();
return oOpa.waitFor({
            controlType: "sap.m.List",
            success: function (oList) {
                return oOpa.waitFor({
                    controlType : "sap.m.StandardListItem",
                    matchers : new sap.ui.test.matchers.Ancestor(oList),
                    success : function (aItems) {
                        Opa5.assert.ok(aItems.length, "Found list items")
                    },
                    errorMessage: "No list items found"
                });
            }
});
```

`sap.ui.test.matchers.Descendant`: This matcher checks if the control has the specified descendant. In this example, we search for a table row, which has a text control with a certain value.

```js
this.waitFor({
    controlType: "sap.m.Text",
    matchers: new Properties({
        text: "special text"
    }),
    success: function (aText) {
        return this.waitFor({
            controlType: "sap.m.ColumnListItem",
            matchers: new Descendant(aText[0]),
            success: function (aRows) {
                Opa5.assert.strictEqual(aRows.length, 1, "Found row with special text");
            },
            errorMessage: "Did not find row or special text is not inside table row"
        });
    },
    errorMessage: "Did not find special text"
});
```

`sap.ui.test.matchers.BindingPath`: This matcher checks if the controls have specified data binding paths. The `path` property matches controls by their binding context. Controls with a binding context are usually inside an aggregation or have a parent control with data binding. The `propertyPath` property matches controls by the data binding paths of their own properties. Binding property paths can be part of an expression binding. You can set the `path` and `propertyPath` properties separately or in combination.For a practical example of the various types of data binding, see the [Tutorial Samples](https://ui5.sap.com/#/entity/sap.ui.core.tutorial.databinding).

```js
// Match a CheckBox located inside a ListItem:
// the CheckBox has a property binding with relative path "Selected"
// the ListItem has a binding context path "/products/0"
return new Opa5().waitFor({
    controlType : "sap.m.CheckBox",
    matchers : new sap.ui.test.matchers.BindingPath({
        path: "/products/0",
        propertyPath: "Selected"
    }),
    success : function (aResult) {
        Opa5.assert.ok(aResult[0], "CheckBox is matched")
    }
});
```

`sap.ui.test.matchers.I18NText`: This matcher checks if a control property has the same value as a text from an I18N resource bundle.

```js
return new Opa5().waitFor({
    controlType : "sap.m.Button",
    matchers : new sap.ui.test.matchers.I18NText({
        propertyName: "text",
        key: "search"
    }),
    success : function () {
        Opa5.assert.ok(true, "Search button is matched");
    }
});
```

> ### Note:  
> As of version 1.95, `sap.ui.test.matchers.I18NText` is extended to allow using library resource bundle.

```js
return new Opa5().waitFor({
    controlType : "sap.m.Button",
    matchers : new sap.ui.test.matchers.I18NText({
       propertyName: "text",
        key: "VIEWSETTINGS_ACCEPT",
        useLibraryBundle: true
    }),
    success : function () {
        Opa5.assert.ok(true, "OK button is matched");
    }
});
```

You can also define a matcher as an inline function: The first parameter of the function is a control to match. If the control matches, return `true` to pass the control on to the next matcher and/or to check and success functions.

```js
return new Opa5().waitFor({
    controlType : "sap.m.StandardListItem",
    matchers : function(oItem) {
        return oItem.$().hasClass("specialItem");
    },
    success : function (aItems) {
        Opa5.assert.ok(aItems.length, "Found special items")
    },
    errorMessage: "No special items found"
});
```

If you return a 'truthy' value from the matcher, but not a Boolean, it will be used as an input parameter for the next matchers and/or check and success. This allows you to build a matchers pipeline.

```js
return new Opa5().waitFor({
    controlType : "sap.m.StandardListItem",
    matchers : [
        function(oItem) {
            // returns jQuery instance of control
            return oItem.$().length && oItem.$();
        },
        function($item) {
        // $item is the matching control's jQuery instance
            return $item.hasClass("specialItem");
        }
    ],
    actions : function ($item) {
        // $item is the matching control's jQuery instance
        $item.trigger("click");
    },
    errorMessage: "No special items found"
});
```

`sap.ui.test.matchers.LabelFor`: This matcher checks if a given control is associated with an `sap.m.Label` control. This means that there should be a label on the page with a `labelFor` association to the control. The label can be filtered by text value or by the `i18n` key of a given property value. Note that some controls, such as `sap.ui.comp.navpopover.SmartLink`, `sap.m.Link`, `sap.m.Label`, and `sap.m.Text` can't be matched by `sap.ui.test.matchers.LabelFor` as they can't have an associated label.

Using the `i18n` key:

```js
return new Opa5().waitFor({
    controlType: "sap.m.Input",
    // Get sap.m.Input which is associated with Label which have i18n text with key "CART_ORDER_NAME_LABEL"
    matchers: new sap.ui.test.matchers.LabelFor({ key: "CART_ORDER_NAME_LABEL", modelName: "i18n" }),
    // It will enter the given text in the matched sap.m.Input
    actions: new sap.ui.test.actions.EnterText({ text: "MyName" })
});
```

Using the `text` property:

```js
return new Opa5().waitFor({
    controlType: "sap.m.Input",
    // Get sap.m.Input which is associated with Label which have i18n text with text "Name"
    matchers: new sap.ui.test.matchers.LabelFor({ text: "Name" }),
    // It will enter the given text in the matched sap.m.Input
    actions: new sap.ui.test.actions.EnterText({ text: "MyName" }),
    success: function (oInput) {
        Opa5.assert.ok(oInput.getValue() === "MyName", "Input value is correct");
    }
});
```

For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.test.Opa5) and the [Sample](https://ui5.sap.com/#/sample/sap.ui.core.sample.OpaMatchers/preview). 



<a name="loio21aeff6928f84d179a47470123afee59__section_ys1_trc_wbb"/>

## Searching for Controls Inside a Dialog

Use the option `searchOpenDialogs` to restrict control search to open dialogs only. You can combine `searchOpenDialogs` with `controlType` or any predefined or custom matcher.As of version 1.62, the ID option is also effective in combination with `searchOpenDialogs`. If the dialog is inside a view, the `viewName` option ensures that the given ID is relative to the view. Otherwise, the search is done by global ID.

This is an example of matching a control with ID `mainView--testButton` located inside a dialog. The dialog itself is part of a view with name `main.view` and ID `mainView`:

```js
this.waitFor({
    searchOpenDialogs: true,
    id: "testButton",
    viewName: "main.view"
    actions: new sap.ui.test.actions.Press(),
    errorMessage : "Did not find the dialog button"
});
```

The next example shows the use case where we want to press a button with 'Order Now' text on it inside a dialog.

To do this, we set the `searchOpenDialogs` option to true and then restrict the `controlType` we want to search for to `sap.m.Button`. We use the check function to search for a button with the text 'Order Now' and save it to the outer scope. After we find it, we trigger a `tap` event:

```js
iPressOrderNow : function () {
    var oOrderNowButton = null;
    this.waitFor({
        searchOpenDialogs : true,
        controlType : "sap.m.Button",
        check : function (aButtons) {
            return aButtons.filter(function (oButton) {
                if(oButton.getText() !== "Order Now") {
                    return false;
                }

                oOrderNowButton = oButton;
                return true;
            });
        },
        actions: new sap.ui.test.actions.Press(),
        errorMessage : "Did not find the Order Now button"
    });
    return this;
}
```



<a name="loio21aeff6928f84d179a47470123afee59__section_n4y_vsy_pgb"/>

## Searching for Controls Inside a Fragment

As of version 1.63, you can limit the control search to a fragment with the option `fragmentId`.

`fragmentId` is effective only when searching by control ID inside a view. Whether a control belongs to a fragment is only relevant when the fragment has a user-assigned ID, which is different from the ID of its parent view. In this case, the fragment ID takes part in the formation of control ID and you have to use the `fragmentId` option to simplify test maintenance.

The next example shows the use case where we want to press a button with ID `theMainView--greeting--helloWorld`, located inside a fragment with ID `greeting` and view with ID `theMainView`:

```js
this.waitFor({
    viewId: "theMainView",
    fragmentId: "greeting",
    id: "hello",
    actions: new Press(),
    errorMessage : "Did not find the Hello button"
});
```



<a name="loio21aeff6928f84d179a47470123afee59__section_q2d_b5d_nhb"/>

## Searching for Missing Controls

In OPA5, you can look for controls that are invisible, disabled, or noninteractable by using the respective `waitFor` boolean properties: `visible`, `enabled`, and `interactable`.

You need a more creative approach to verify that no controls on the page match a certain criteria. One idea is to verify that a parent doesn't have a given child. Locate the parent using OPA5 standard matchers and then use a custom `check` function to iterate over the children of the parent. The result of the `check` should be truthy if no children match a given condition.

The following example shows a custom `check` function that returns `true` if a popover doesn't contain a button with a certain text.

```js
this.waitFor({
   controlType: "sap.m.Popover",
    success: function (aPopovers) {
        return this.waitFor({
            check: function () {
                var aPopoverContent = aPopovers[0].getContent();
                var aButtons = aPopoverContent.forEach(function (oChild) {
                    return oChild.getMetadata().getName() === "sap.m.Button" &&
                        oChild.getText() === "Another text";
                });
                return !aButtons || !aButtons.length;
            },
            success: function () {
                Opa5.assert.ok(true, "The popover button is missing");
            },
            errorMessage: "The popover button is present"
        });
    }
});
```



<a name="loio21aeff6928f84d179a47470123afee59__section_wyv_hxv_hhb"/>

## Searching for Disabled Controls

As of version 1.65, you can search for controls by their enabled state using the `enabled` property. When `enabled` is set to `true`, only enabled controls will match. When `enabled` is set to `false`, both enabled and disabled controls will match.

By default, only enabled controls are matched when:

-   `autoWait` is set to `true`, or

-   there are actions defined in the `waitFor`


If `autoWait` is disabled and there are no actions, the search matches disabled controls as well.

The next example shows that the `enabled` property has priority over `autoWait`:

```js
this.waitFor({
    controlType: "sap.m.Button",
    enabled: false,
    autoWait: true,
    success: function () {...}
})
```



<a name="loio21aeff6928f84d179a47470123afee59__section_p4z_5rc_wbb"/>

## Writing Nested Arrangements and Actions

UI elements can be recursive, for example in a tree. Instead of triggering the action for each known element, you can also define it recursively \(see the code snippet below\). OPA ensures that the `waitFor` statements triggered in a success handler are executed before the next arrangement, action, or assertion. That also allows you to work with an unknown number of entries, for example in a list. First, you wait for the list, and then trigger actions on each list item.

```js
iExpandRecursively : function() {
    return this.waitFor({
        controlType : "sap.m.StandardTreeItem",
        matchers : new sap.ui.test.matchers.PropertyStrictEquals({
            name : "expanded", 
            value : false
        }),
        actions : function (oTreeNode) {
            oTreeNode.getTree().expandToLevel(oTreeNode.getLevel() + 1)
            that.iExpandRecursively();
        },
        errorMessage : "Didn't find collapsed tree nodes"
    });
}
```



<a name="loio21aeff6928f84d179a47470123afee59__section_tkk_cbs_kjb"/>

## Declarative Syntax



### Overview

As of version 1.72, OPA5 supports the declarative matcher syntax that allows you to declare built-in matchers in a literal object. A matcher declaration is a JSON object. The OPA5 `waitFor` statement is simplified by using a single JSON object, instead of the more verbose matcher instances. Only built-in matchers are allowed. Inline matcher functions and custom matcher instances are only allowed in the matchers `waitFor` parameter:

```js
return this.waitFor({
    controlType : "sap.m.Text",
    matchers : function () {
        // ...
    }
});
```

There are two places you can add a matcher declaration in a `waitFor` object:

-   On the top level

    In this case, if you use an unknown matcher, an exception is thrown, stating that the parameter isn't defined in OPA5 API.

    ```js
    this.waitFor({
        controlType : "sap.m.Text",
        propertyStrictEquals: {
            name : "text",
            value : "foo"
        }
    });
    ```

-   In the `matchers` parameter

    In this case, if you use an unknown matcher, an exception is thrown, stating that the matcher isn't supported.

    ```js
    this.waitFor({
        controlType : "sap.m.Text",
        matchers: {
            propertyStrictEquals: {
                name : "text",
                value : "foo"
            }
        }
    });
    ```


If there are matchers declared in both places, they're combined.



### Matcher Properties

A matcher is declared by its name and properties. The name is a key in the matchers object literal and has to start with a lower-case letter. For example, to declare an `sap.ui.test.matchers.Properties` matcher, use the name `properties`. Every matcher accepts a specific set of properties, which has to be declared as a value in the matchers object. This value has to be an object literal. Behind the scenes, every matcher declaration is transformed into a matcher instance. Every value in the declaration represents the properties that are fed to one matcher instance. There's an example for every built-in matcher in the API documentation.

The following two `waitFor` statements produce the same set of matchers:

```js
// declaration
this.waitFor({
    controlType : "sap.m.Text",
    matchers: {
        propertyStrictEquals: {
            name : "text",
            value : "foo"
        }
    }
});

// instantiation
this.waitFor({
    controlType : "sap.m.Text",
    matchers: new PropertyStrictEquals({
        name : "text",
        value : "foo"
    })
});
```

If you have to use one matcher twice, the value for the matcher must be an array. Each element of the array has to be an object literal that is used by one matcher instance. This is useful when you have to match a control by two or more of its properties.

The following two `waitFor` statements produce the same set of matchers:

```js
// declaration
this.waitFor({
    matchers: {
        properties: [{
            text: "hello"
        }, {
            number: 0
        }]
    }
});

// instantiation
this.waitFor({
    matchers: [
        new PropertyStrictEquals({
            name : "text",
            value : "foo"
        }),
        new PropertyStrictEquals({
            name : "number",
            value : 0
        })
    ]
});
```



### Ancestors and Descendants

When declaring an `sap.ui.test.matchers.Ancestor` or `sap.ui.test.matchers.Descendant`, you have to declare which control is ancestor or descendant. With matcher instances, you simply pass the control instance that you have already located in a previous `waitFor` statement. Keep in mind that with matcher declarations you can't use object instances or functions as values. The solution is to use a nested declarative matcher for the ancestor or descendant. It's assumed that it will match exactly one control and if it doesn't, any one of the matches is used. This is a special matcher, which supports a superset of matchers, such as, `controlType`, `ID`, and any other JSON-compatible properties available in a typical `waitFor` statement.

The following two `waitFor` statements produce the same result:

```js
// declaration
this.waitFor({
    controlType: "sap.m.Text",
    matchers: {
        ancestor: {
            controlType : "sap.m.Bar",
            properties: {
                text: "hello"
            }
        }
    }
});

// instantiation
this.waitFor({
    controlType : "sap.m.Bar",
    matchers: new Properties({
        text: "hello"
    }),
    success: function (aAncestors) {
        var oAncestor = aAncestors[0]; // order not guaranteed
        return this.waitFor({
            controlType: "sap.m.Text",
            matchers: new Ancestor(oAncestor)
        });
    }
});
```

