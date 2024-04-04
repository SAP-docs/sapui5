<!-- loiob8c4e534cdb440e9a5bbff86f9572bd6 -->

# Step 11: Validation Using `sap/ui/core/Messaging`

So far, we have created a currency field that can format itself correctly. The currency data type also has the ability to validate that user input adheres to the requirements of a currency; however, data type validation functions are managed by SAPUI5, which of itself has no mechanism for reporting error messages back to the UI; therefore, we need a mechanism for reporting error messages raised by validation functions back to the user. In this step, we will enable validation for the entire app with a feature known as the "Messaging". Once this is done, any validation error messages generated based on the user input will be passed to `Messaging`, which in turn will connect them to the appropriate view and control that caused the error.



## Preview

  
  
**A message appears**

![](images/Tutorial_Data_Binding_Step_11_3_e67207b.png "A message appears")



## Coding

You can view and download all files in the Demo Kit at [Data Binding - Step 11](https://ui5.sap.com/#/entity/sap.ui.core.tutorial.databinding/sample/sap.ui.core.tutorial.databinding.11).



## webapp/manifest.json

Enter the highlighted line into the `manifest.json` file to generally enable validation in the app.

```js
...
"sap.ui5": {
	"handleValidation": true,
	"dependencies": {
		"minUI5Version": "1.120.0",
		"libs": {
			"sap.m": {},
			"sap.ui.core": {},
			"sap.ui.layout": {}
		}
	},
...
```

You can now enter a non-numeric value into the *Sales Amount* field and either press [Enter\] or move the focus to a different UI control. This action triggers either the `onenter` or `onchange` event, and then SAPUI5 executes the validation function belonging to the `sap.ui.model.type.Currency` data type.

Now that validation handling has been enabled in the manifest, any validation error messages will be picked up by `Messaging`, which in turn checks its list of registered objects and then passes the error message back to the correct view for display.

Note that the field in error has a red border: ![](images/Tutorial_Data_Binding_Step_11_2_44db88e.png)

However, the error message itself will only be displayed when that particular field has focus: ![](images/Tutorial_Data_Binding_Step_11_3_e67207b.png)

**Related Information**  


[Error, Warning, and Info Messages](../04_Essentials/error-warning-and-info-messages-62b1481.md "SAPUI5 provides a central place for storing and managing info, warning, and error messages.")

