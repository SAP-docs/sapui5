<!-- loio23b9c779c2274213a281c1fc46b4962b -->

# Fragments with Multiple Root Nodes

XML fragments and JS fragments can have more than one root control.

In JS fragments, the `createContent()` method can optionally return an array of controls:

```js
// fragment is located in a file named: sap/ui/core/fragmenttest/MultiRootFragment.fragment.js,
sap.ui.define(["sap/m/Label", "sap/m/Input", "sap/m/Button"], function(Label, Input, Button) {
    return {
        createContent: function(oController) {
            var oLabel = new Label({text:"These controls are within one multi-root Fragment:"});
            var oInput = new Input();
            var oButton = new Button({text: "Still in the same Fragment"});
            return [ oLabel, oInput, oButton ];
        }
    }
});
```

As XML documents need to have exactly one root node, to achieve XML fragments with multiple root nodes, an additional `<FragmentDefinition>` tag needs to be added as root element containing the actual root controls. This `<FragmentDefinition>` tag will not have any representation in HTML at runtime; the children are added directly to wherever this fragment is placed.

```xml

<core:FragmentDefinition xmlns="sap.m" xmlns:core="sap.ui.core">
    <Label text="These controls are within one multi-root Fragment:" />
    <Input />
    <Button text="Still in the same Fragment" />
</core:FragmentDefinition>
```

> ### Note:  
> For HTML fragments this feature is currently not available.

