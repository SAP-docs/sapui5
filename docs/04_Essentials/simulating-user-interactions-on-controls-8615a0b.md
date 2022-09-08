<!-- loio8615a0b9088645ae936dbb8bbce5d01d -->

# Simulating User Interactions on Controls

OPA5 has a built-in actions parameter that can be used for simulating events. If you use an action, OPA5 makes sure that the UI is in a state that allows the action to be executed.

We recommend that you use actions and not success functions for user interactions as using success functions doesn't execute the checks on the UI. You can use multiple actions on one control and you can mix built-in actions with custom actions.



## Simulating a `press` Event

In this example, we trigger a `press` event on a button, using the `waitFor` function of OPA5, and the `Press` action. Note that the action has access to the located button implicitly.

```js
oOpa.waitFor({
    id: "myButton",
    actions: new Press()
});
```

As of version 1.97, you can add key modifiers, such as [Control\], [Alt\], and [Shift\]:

```js
oOpa.waitFor({
    id: "myButton",
    actions: new Press({
        altKey: true,
        shiftKey: true,
        ctrlKey: true
    }),
});
```

As of version 1.98, you can use coordinates for the X and Y axes by providing values for the `xPercentage` and `yPercentage` properties. The values provided should be percentages, for example in the range \[0 - 100\], relative to the control, which is then converted to exact coordinates in pixels:

```js
oOpa.waitFor({
    id: "myButton",
    actions: new Press({
        xPercentage: 80,
        yPercentage: 20
    }),
});
```



## Choosing an Item from `sap.m.Select`

Here's an example showing how to choose an item from `sap.m.Select`, using the `waitFor` function of OPA5, and the `Press` action:

```js
sap.ui.require([
    "sap/ui/test/opaQUnit",
    "sap/ui/test/actions/Press",
    "sap/ui/test/matchers/Properties",
    "sap/ui/test/matchers/Ancestor"
],  function (opaTest, Press, Properties, Ancestor) {

    opaTest("Should trigger a press event", function (Given, When, Then) {
        // Startup the application using Given

        When.waitFor({
            id: "mySelect",
            actions: new Press(),
            success: function(oSelect) {
                this.waitFor({
                    controlType: "sap.ui.core.Item",
                    matchers: [
                        new Ancestor(oSelect),
                        new Properties({ key: "Germany"})
                    ],
                    actions: new Press(),
                    errorMessage: "Cannot select Germany from mySelect"
                });
            },
            errorMessage: "Could not find mySelect"
        });

        // Assert what happened after pressing using Then

    });

});
```

For `sap.m.Combobox`, use `controlType: "sap.m.StandardListItem"`.



## Entering Text into Input Fields

Use the `EnterText` action when you want to enter text in a form control.

In this example, the text of an `sap.m.Input` is changed twice. First, "Hello " is entered as value. Then, with the second action, "World" is added. As a result, the value of the input is "Hello World".

```js
oOpa.waitFor({
    id: "myInput",
    actions: [
        new EnterText({ text: "Hello " }),
        new EnterText({ text: "World" })
    ]
});
```

There are a couple of modifiers to the `EnterText` action:

-   Use the `clearTextFirst` property to empty the existing value before entering new text. This example changes a control value to "Hello" and then to "World" with two consecutive actions:

    ```js
    actions: [
        new EnterText({ text: "Hello" }), // changes Input value to "Hello"
        new EnterText({ text: "World", clearTextFirst: true }) // changes Input value to "World"
    ]
    ```

-   Use the `keepFocus` property to preserve the focus on the input after the action completes. This is useful if the control has enabled suggestions that have to remain open after the text is entered. After the text is entered, you can perform another OPA5 search for the suggestion control and select it using a `Press` action.

    ```js
    // Show the suggestion list with filter "Jo"
    oOpa.waitFor({
        id: "formInput",
        actions: new EnterText({
            text: "Jo",
            keepFocus: true
        }),
        success: function (oInput) {
            // Select a suggestion by pressing an item with text "John".
            // After the press action, the value of the input should be changed to "John".
            // Note that the focus will remain in the input field.
            this.waitFor({
                controlType: "sap.m.StandardListItem",
                matchers: [
                    new Ancestor(oInput),
                    new Properties({
                        title: "John"
                    })
                ],
                actions: new Press()
            });
        }
    });
    ```

-   Use the `pressEnterKey` property to add an `enter` key to the end of the input. This triggers the `change` event for the input and the input remains focused. If you use this when focusing out of the input results in unwanted results. For example, focusing out of inputs in a popup results in the popup closing only in some browsers, which leads to inconsistent test results.

    ```js
    oOpa.waitFor({
        controlType: "sap.m.Input",
        searchOpenDialogs: true,
        actions: new EnterText({
            text: "test",
            pressEnterKey: true
        })
    });
    oOpa.waitFor({
        controlType: "sap.m.Popover",
        searchOpenDialogs: true,
        success: function (aPopover) {
            Opa5.assert.ok(aPopover[0].isOpen(), "Popover should remain open on any browser");
        }
    });
    ```




<a name="loio8615a0b9088645ae936dbb8bbce5d01d__section_tmf_bpm_2cb"/>

## Table Interaction

A Table consists of columns \(`sap.m.Column`\) and rows. The rows, defined as `sap.m.ColumnListItems`, consist of cells. In order to use a stable locator, which isn’t expected to change frequently, you can use a field/value combination to retrieve and interact with table items.

The following example simulates a click on an item in a table. The name of the field can be found in the $metadata file of your OData service.

```
iClickOnTableItemByFieldValue: function () {
                    return this.waitFor({
                        controlType: "sap.m.ColumnListItem",

                        // Retrieve all list items in the table
                        matchers: [function(oCandidateListItem) {
                            var oTableLine = {};
                            oTableLine = oCandidateListItem.getBindingContext().getObject();
                            var sFound = false;

                            // Iterate through the list items until the specified cell is found
                            for (var sName in oTableLine) {
                                if ((sName === "Field Name") && (oTableLine[sName].toString() === "Cell Value")) {
                                     QUnit.ok(true, "Cell has been found");
                                    sFound = true;
                                    break;
                                }
                            }
                            return sFound;
                        }],

                        // Click on the specified item
                        actions: new Press(),
                        errorMessage: "Cell could not be found in the table"
                     });
                }
```



<a name="loio8615a0b9088645ae936dbb8bbce5d01d__section_qn2_rhr_vkb"/>

## Simulating Drag and Drop

As of version 1.76, you can use the `sap.ui.test.actions.Drag` and `sap.ui.test.actions.Drop` actions.

First, locate a control to drag and use the `Drag` action with it. Then, locate the control on which you wish to drop the first control, and use the `Drop` action with it. The `Drop` action accepts several optional parameters to specify the drop target:

-   Use `idSuffix` to set an exact DOM element within the control tree

-   Use `aggregationName` to set the target to be the DOM element for this aggregation

-   Use `before` or `after` to choose whether the dragged control should be dropped before or after the drop target.


The following example rearranges items in a list:

```js
// Find the item to drag
oOpa.waitFor({
    controlType: "sap.m.StandardListItem",
    matchers: new BindingPath({
        path: "/ProductCollection/1"
    }),
    // Start the dragging
    actions: new Drag()
});

// Find another item on which to drop the dragged item
oOpa.waitFor({
    controlType: "sap.m.StandardListItem",
    matchers: new BindingPath({
        path: "/ProductCollection/5"
    }),
    // Finish dragging and drop the item right before this one.
    // In the end, the item with binding context path "/ProductCollection/1" should appear right on top of the item with
    // binding context path "/ProductCollection/5"
    actions: new Drop({
        before: true
    })
});
```



<a name="loio8615a0b9088645ae936dbb8bbce5d01d__section_zr4_1xn_npb"/>

## Simulating Scroll

As of version 1.90, you can scroll in controls that provide a scrollable area. The following example scrolls `sap.uxap.ObjectPageLayout` vertically by 200px:

```js
oOpa.waitFor({
    controlType: "sap.uxap.ObjectPageLayout",
    actions: new Scroll({
        x: 0,
        y: 200
    })
});
```

For more information, see [`sap.ui.core.delegate.ScrollEnablement`](https://ui5.sap.com/#/api/sap.ui.core.delegate.ScrollEnablement).



## Writing Your Own Action

Since OPA5 uses JavaScript for its execution, you can’t use native browser events to simulate user events. Sometimes it's also hard to know the exact position where to click or enter your keystrokes since SAPUI5 controls don't have a common interface for that. If you find you're missing a certain built-in action, you can create your own actions easily. Just provide an inline function as shown here:

```js
sap.ui.require(["sap/ui/test/opaQUnit", "sap/ui/test/matchers/Properties"], function (opaTest, Properties) {

    opaTest("Should simulate press on the delete button", function (Given, When, Then) {
        // Startup the application using Given

        When.waitFor({
            id : "entryList",
            matchers : new Properties({ mode : "Delete"}),
            actions: function (oList) {
                oList.fireDelete({listItem : oList.getItems()[0]});
            },
            errorMessage : "The delete button could not be pressed"
        });

        // Assert what happened after selecting the item using Then

    });

});
```

**Related Information**  


[API Reference: `sap.ui.test.actions`](https://ui5.sap.com/#/api/sap.ui.test.actions)

[API Reference: `sap.ui.test.actions.EnterText`](https://ui5.sap.com/#/api/sap.ui.test.actions.EnterText)

[API Reference: `sap.ui.test.actions.Press`](https://ui5.sap.com/#/api/sap.ui.test.actions.Press)

[API Reference: `sap.ui.test.matchers.Interactable`](https://ui5.sap.com/#/api/sap.ui.test.matchers.Interactable)

