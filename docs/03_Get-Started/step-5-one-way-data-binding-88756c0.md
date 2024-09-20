<!-- loio88756c08fe144ba08ff1762ad92fc07c -->

# Step 5: One-Way Data Binding

Unlike the two-way binding behavior we've seen, one-way data binding is also possible. In this case, data travels in one direction only: from the model, through the binding instance, to the consumer \(usually the property of a control\), but never in the other direction. Let's modify the previous example to use one-way data binding. This shows how you can switch off the flow of data from the user interface back to the model if needed.



## Preview

  
  
**Two input fields and a checkbox**

![The graphic has an explanatory text](images/Tutorial_Data_Binding_Step_4_61d68f1.png "Two input fields and a checkbox")



## Coding

You can view and download all files in the Demo Kit at [Data Binding - Step 5](https://ui5.sap.com/#/entity/sap.ui.core.tutorial.databinding/sample/sap.ui.core.tutorial.databinding.05).



## webapp/Component.js

Insert the highlighted code into the `Component.js` file. The `init` function calls the init function of its parent, retrieves the default model instance bound to the component, and sets the default binding mode to one-way data binding.

```js
sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/BindingMode"
], (UIComponent, BindingMode) => {
	"use strict";

	return UIComponent.extend("ui5.databinding.Component", {
		metadata : {
			interfaces: ["sap.ui.core.IAsyncContentCreation"],
			manifest: "json"
		},

		init() {
			// call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);

			this.getModel().setDefaultBindingMode(BindingMode.OneWay);
		}
	});
});
```

Now, regardless of the state the checkbox is in, the input fields remain open for input, because one-way data binding ensures that data flows only from the model to the UI, but never in the other direction.

The binding mode \(one-way or two-way\) is set on the model itself. Therefore, unless you specifically alter it, a binding instance will always be created using the model's default binding mode.

If you wish to alter the binding mode, you've got two options:

-   Alter the model's default binding mode. This is the approach we used above.

-   Specify the data binding mode for a specific binding instance by using the `oBindingInfo.mode` parameter. This change only applies to this data binding instance. Any other binding instances will continue to use the model's default binding mode.For more information, see [API Reference: `sap.ui.base.ManagedObject.bindProperty`](https://ui5.sap.com/#/api/sap.ui.base.ManagedObject/methods/bindProperty). 


> ### Note:  
> There are two important points to understand about alterations to a model object's data binding mode:
> 
> -   If you alter the default binding mode of a model \(as in the example above\), **all** binding instances created after that point in time will use the altered binding mode, unless you explicitly say otherwise.
> 
> -   Altering a model's default binding mode doesn't affect already existing binding instances.

