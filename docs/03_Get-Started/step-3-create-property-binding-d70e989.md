<!-- loiod70e9894c09b4c27a98d4850d4e90f2c -->

# Step 3: Create Property Binding

Although there is no visible difference, the text on the screen is now derived from model data.



## Preview

![The browser shows the text "Hi, my name is Harry Hawk"](images/Tutorial_Data_Binding_Step_1_6d391d5.png)



## Coding

You can view and download all files in the Demo Kit at [Data Binding - Step 3](https://ui5.sap.com/#/entity/sap.ui.core.tutorial.databinding/sample/sap.ui.core.tutorial.databinding.03).

Set the `text` property of the `sap.m.Text` control to the value `{/greetingText}`. The curly brackets enclosing a binding path \(binding syntax\) are automatically interpreted as a binding. These binding instances are called `PropertyBindings`. In this case, the control's `text` property is bound to the `greetingText` property at the root of the default model, as the slash \(`/`\) at the beginning of the binding path denotes an absolute binding path.

**webapp/view/App.view.xml**

```
<mvc:View
	xmlns="sap.m"
	xmlns:mvc="sap.ui.core.mvc">
	<Text text="{/greetingText}"/>
</mvc:View>
```

**Related Information**  


[Binding Types](../04_Essentials/binding-types-91f0d8a.md "Depending on the different use cases, you can use different binding types: Propety binding, context binding, and list binding.")

[Property Binding](../04_Essentials/property-binding-91f0652.md "With property binding, you can initialize properties of a control automatically and update them based on the data of the model.")

