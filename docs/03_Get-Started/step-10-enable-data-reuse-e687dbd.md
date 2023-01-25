<!-- loioe687dbdc4c064ba3a3ce3942288e8f74 -->

# Step 10: Enable Data Reuse

In this step we avoid unnecessary back-end requests by preventing the destruction of data shown in the detail area when sorting or filtering the list.



<a name="loioe687dbdc4c064ba3a3ce3942288e8f74__section_bt4_fxc_z1b"/>

## Preview

   
  
**No visual change compared to the last step**

 ![A list of users with an added detail area](images/Tut_OD4_Step_9_6e9025b.png "No visual change compared to the last step") 



<a name="loioe687dbdc4c064ba3a3ce3942288e8f74__section_tsr_gxc_z1b"/>

## Coding

You can view and download all files at [OData V4 - Step 10](https://ui5.sap.com/#/entity/sap.ui.core.tutorial.odatav4/sample/sap.ui.core.tutorial.odatav4.10/code).



<a name="loioe687dbdc4c064ba3a3ce3942288e8f74__section_pvc_fyc_z1b"/>

## webapp/controller/App.controller.js

```js
...
		onMessageBindingChange : function (oEvent) {
			...
		},

		onSelectionChange : function (oEvent) {
			var oDetailArea = this.byId("detailArea"),
				oLayout = this.byId("defaultLayout"),
				oUserContext = oEvent.getParameters().listItem.getBindingContext();
				oOldContext = oDetailArea.getBindingContext(),
				oSearchField = this.byId("searchField"),


			// remove keepAlive from old context
			if (oOldContext) {
				oOldContext.setKeepAlive(false);
			}

			// set binding
			oDetailArea.setBindingContext(oUserContext);
			// set keepAlive for new context
			oUserContext.setKeepAlive(true, function () {
				// hides detail area when context is destroyed
				oLayout.setSize("100%");
				oLayout.setResizable(false);
				oDetailArea.setVisible(false);
				oSearchField.setWidth("20%");
			});

			// resize view
			oDetailArea.setVisible(true);
			oLayout.setSize("60%");
			oLayout.setResizable(true);
			oSearchField.setWidth("40%");
		},

...
```

We extend the logic of the `onSelectionChange` function. First, we check if there's an "old" binding context in the detail area. If so, the `keepAlive` for the old context is set to `false`.

After the new binding context is added to the detail area, we set `keepAlive` to `true` and add an `onBeforeDestroy` function to it, which hides the detail area when the user linked to it is deleted.

You can use the `Context#setKeepAlive` method to prevent the destruction of information shown in the detail area when the selected user is no longer part of the list from which the information was selected. This could otherwise happen if you filter or sort the list.

**Related Information**  


[Extending the Lifetime of a Context that is not Used Exclusively by a Table Collection](../04_Essentials/data-reuse-648e360.md#loio648e360fa22d46248ca783dc6eb44531__section_ELC)

