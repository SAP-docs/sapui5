<!-- loio04575456e15e426d81054805990c7a53 -->

# Defining Dialogs as Fragments

You can use fragments for the definition of dialogs.



## Context

To use fragments for defining popups, just let the root control of the fragment be a dialog or similar control.

The following shows an XML fragment dialog example:

```xml
<Dialog xmlns="sap.m" title="XML Fragment Dialog">
    <TextView text="{/dialogText}" />
    <buttons>
        <Button text="Close" press="closeDialog"/>
    </buttons>
</Dialog>
```

Other fragment types are used the same way to define, for instance, a dialog as fragment.

For example, in JS fragments, the `createContent()` method returns a dialog control:

```js
// fragment is located in a file named: testdata/fragments/JSFragmentDialog.fragment.js,
sap.ui.define(["sap/m/Dialog", "sap/m/Input", "sap/m/Button"], function(Dialog, Input, Button) {
    return {
        createContent: function(oController) {
            var oDialog = new Dialog({
                title: "JavaScript Fragment Dialog",
                content: [
                    new Input({
                        text: "{/dialogText}"
                    })
                ],
                buttons: [
                    new Button({
                        text: "Close",
                        press: function(){
                            oDialog.close();
                        }
                    })
                ]
            });
            return oDialog;
        }
    }
});
```

