<!-- loiob8c4e534cdb440e9a5bbff86f9572bd6 -->

# Step 11: Validation Using `sap/ui/core/Messaging`

Up to this point, we've created a currency field that formats itself correctly. The *currency* data type can also validate user input to ensure it meets currency requirements. However, SAPUI5 manages data type validation functions and doesn't have a built-in mechanism for reporting error messages back to the UI. We therefore need a way to report error messages from validation functions back to the user. In this step, we're enabling validation for the entire app with a feature known as "Messaging". Once this is set up, any validation error messages based on user input get passed to `Messaging`, which then connects them to the appropriate view and control that caused the error.



## Preview

  
  
**An error message is displayed upon entering text into the currency amount input field**

![The graphic has an explanatory text](images/Tutorial_Data_Binding_Step_11_3_e67207b.png "An error message is displayed upon entering text into the currency amount input field")



## Coding

You can view and download all files in the Demo Kit at [Data Binding - Step 11](https://ui5.sap.com/#/entity/sap.ui.core.tutorial.databinding/sample/sap.ui.core.tutorial.databinding.11).



## webapp/manifest.json

To generally enable validation in the app, enter the highlighted line into the `manifest.json` file.

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

Now, try entering a non-numeric value into the *Sales Amount* field and either press [Enter\] or move the focus to a different UI control. This action triggers either the `onenter` or `onchange` event. SAPUI5 then executes the validation function for the `sap.ui.model.type.Currency` data type.

With validation handling enabled in the manifest, any validation error messages will be picked up by `Messaging`. It checks its list of registered objects and passes the error message back to the correct view for display.

You'll notice that the field in error has a red border: ![](images/Tutorial_Data_Binding_Step_11_2_44db88e.png)

However, the error message only displays when that particular field is in focus: ![](images/Tutorial_Data_Binding_Step_11_3_e67207b.png)

**Related Information**  


[Error, Warning, and Info Messages](../04_Essentials/error-warning-and-info-messages-62b1481.md "SAPUI5 provides a central place for storing and managing info, warning, and error messages.")

