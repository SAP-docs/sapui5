<!-- loio9252ee4015f24fc49c71c295394d1b8d -->

# Step 10: Property Formatting Using Data Types

SAPUI5 provides a set of simple data types such as `Boolean`, `Currency`, `Date` and `Float`. These data types can then be applied to controls in order to ensure that the value presented on the screen is formatted correctly, and, if the field is open for input, that the value entered by the user adheres to the requirements of that data type. We will now add a new field called *Sales Amount* of type `Currency`.



## Preview

   
  
<a name="loio9252ee4015f24fc49c71c295394d1b8d__fig_r1j_pst_mr"/>New *Sales Amount* input field

 ![](images/Tutorial_Data_Binding_Step_10_d15f8bc.png "New Sales Amount input field ") 



## Coding

You can view and download all files in the Demo Kit at [Data Binding - Step 10](https://ui5.sap.com/#/entity/sap.ui.core.tutorial.databinding/sample/sap.ui.core.tutorial.databinding.10).



## webapp/index.js

```js
sap.ui.require([
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/mvc/XMLView",
	"sap/ui/model/resource/ResourceModel"
], function (JSONModel, XMLView, ResourceModel) {
	"use strict";

	// Attach an anonymous function to the SAPUI5 'init' event
	sap.ui.getCore().attachInit(function () {
		var oModel = new JSONModel({
			firstName: "Harry",
			lastName: "Hawk",
			enabled: true,
			address: {
				street: "Dietmar-Hopp-Allee 16",
				city: "Walldorf",
				zip: "69190",
				country: "Germany"
			},
			salesAmount: 12345.6789,
			currencyCode: "EUR"

		});

		// Assign the model object to the SAPUI5 core
		sap.ui.getCore().setModel(oModel);

		var oResourceBundle = new ResourceModel({
			bundleName: "sap.ui.demo.db.i18n.i18n",
			supportedLocales: ["", "de"],
			fallbackLocale: ""
		});

		sap.ui.getCore().setModel(oResourceModel, "i18n");

		// Display the XML view called "App"
		new XMLView({
			viewName: "sap.ui.demo.db.view.App"
		}).placeAt("content");
	});
});

```

We create two new model properties `salesAmount` and `currencyCode`.



## webapp/view/App.view.xml

```xml
...
	<Panel headerText="{i18n>panel1HeaderText}" class="sapUiResponsiveMargin" width="auto">
		<form:SimpleForm editable="true" layout="ColumnLayout">
			<Label text="{i18n>firstName}"/>
			<Input value="{/firstName}" valueLiveUpdate="true" width="200px" enabled="{/enabled}"/>
			<Label text="{i18n>lastName}"/>
			<Input value="{/lastName}" valueLiveUpdate="true" width="200px" enabled="{/enabled}"/>
			<Label text="{i18n>enabled}"/>
			<CheckBox selected="{/enabled}"/>
		</form:SimpleForm>
	</Panel>
	<Panel headerText="{i18n>panel2HeaderText}" class="sapUiResponsiveMargin" width="auto">
		<content>
			<l:HorizontalLayout>
				<l:VerticalLayout>
					<Label labelFor="address" text="{i18n>address}:"/>
					<FormattedText class="sapUiSmallMarginBottom"
						htmlText="{/address/street}&lt;br&gt;{/address/zip} {/address/city}&lt;br&gt;{/address/country}"
						id="address" width="200px"/>
					<Link href="{
							parts: [
								'/firstName',
								'/lastName'
							],
							formatter: '.formatMail'
						}"
						text="{i18n>sendEmail}"/>
				</l:VerticalLayout>
				<l:VerticalLayout>
					<Label labelFor="salesAmount" text="{i18n>salesAmount}:"/>
					<Input description="{/currencyCode}" enabled="{/enabled}" id="salesAmount"
						value="{
							parts: [
								{path: '/salesAmount'},
								{path: '/currencyCode'}
							],
							type: 'sap.ui.model.type.Currency',
							formatOptions: {showMeasure: false}
						}" width="200px"/>
				</l:VerticalLayout>
			</l:HorizontalLayout>
		</content>
	</Panel>
</mvc:View>
```

A new pair of `Label` and `Input` elements have been created for the `salesAmount` model property. The description property of the `Input` element has been bound to the `currencyCode` model property. The value property of the `Input` element has been bound to the model properties `salesAmount` and `currencyCode`. The `{showMeasure: false}` parameter switches off the display of the currency symbol within the input field itself. This is not needed because it is being displayed using the `Input` element's description property.



## webapp/i18n/i18n.properties

```ini
# Field labels
firstName=Vorname
lastName=Nachname
enabled=Enabled
address=Address
salesAmount=Sales Amount...
```



## webapp/i18n/i18n\_de.properties

```ini
# Field labels
firstName=Vorname
lastName=Nachname
enabled=Aktiviert
address=Adresse
salesAmount=Verk\u00e4ufe bis zum heutigen Datum
...
```

Add the missing texts to the `properties` files. Please note that special characters \(non-Latin-1\) have to be entered by using Unicode escape characters.

**Related Information**  


[Formatting, Parsing, and Validating Data](../04_Essentials/formatting-parsing-and-validating-data-07e4b92.md "Data that is presented on the UI often has to be converted so that is human readable and fits to the locale of the user. On the other hand, data entered by the user has to be parsed and validated to be understood by the data source. For this purpose, you use formatters and data types.")

