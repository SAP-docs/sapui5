<!-- loio9790d9aa686e4f818f2ad99057adb7ee -->

# Step 6: Resource Models

Business applications also require language-specific \(translatable\) texts used as labels and descriptions on the user interface.

The example we used at the start of this tutorial was overly simplistic as we stored language-specific text directly in a JSON model object. Generally speaking, unless language-specific text is derived directly from a back-end system, it is not considered good programming practice to place translatable texts directly into a model. So let's correct this situation by placing all translatable texts \(such as field labels\) into a resource bundle.



## Preview

  
  
**Texts derived from the resource model \(No visual change to last step\)**

![](images/Tutorial_Data_Binding_Step_4_61d68f1.png "Texts derived from the resource model (No visual change to last step)")



## Coding

You can view and download all files in the Demo Kit at [Data Binding - Step 6](https://ui5.sap.com/#/entity/sap.ui.core.tutorial.databinding/sample/sap.ui.core.tutorial.databinding.06).



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
		// Create a JSON model from an object literal
		var oModel = new JSONModel({
			firstName: "Harry",
			lastName: "Hawk",
			enabled: true
		});

		// Assign the model object to the SAPUI5 core
		sap.ui.getCore().setModel(oModel);

		// Create a resource bundle for language specific texts
		// the configured supportedLocales represent the i18n files present:
		// * "" - i18n/i18n.properties
		// the configured fallbackLocale should represent one of these files
		// * "" - according to the fallback chain the root bundle is the last fallback.
		//   Configuring it explicitly avoids side effects when additional resource files are added.
		// @see https://ui5.sap.com/#/topic/ec753bc539d748f689e3ac814e129563
		var oResourceModel = new ResourceModel({
			bundleName: "sap.ui.demo.db.i18n.i18n",
			supportedLocales: ["", "de"],
			fallbackLocale: ""
		});

		// Assign the model object to the SAPUI5 core using the name "i18n"
		sap.ui.getCore().setModel(oResourceModel, "i18n");

		// Display the XML view called "App"
		new XMLView({
			viewName: "sap.ui.demo.db.view.App"
		}).placeAt("content");
	});
});

```

Since we are creating a resource model, the file name is assumed to have the extension `.properties`; this does not need to be stated explicitly. The resource model is set to the core using the model name `i18n`.

> ### Note:  
> Remove `, panelHeaderText : "Data Binding Basics"` from the model definition in the `index.js` file. This text is now moved to the resource model.



## webapp/i18n/i18n.properties \(New\)

```ini
# Field labels
firstName=First Name
lastName=Last Name
enabled=Enabled

# Screen titles
panelHeaderText=Data Binding Basics
```

Create a new folder `i18n`, and a new file `i18n.properties` within and add the code above.

The `panelHeaderText` property has been moved from the JSON model into the `i18n` resource bundle, also the field labels are no longer hard coded in the XML view. This is because all of these text fields need to be translated.

Language-specific text stored in resource models obeys the Java convention for internationalization \(i18n\).



## webapp/view/App.view.xml

```xml
<mvc:View
	xmlns="sap.m"
	xmlns:form="sap.ui.layout.form"
	xmlns:mvc="sap.ui.core.mvc">
	<Panel headerText="{i18n>panelHeaderText}" class="sapUiResponsiveMargin" width="auto">
		<form:SimpleForm editable="true" layout="ColumnLayout">
			<Label text="{i18n>firstName}"/>
			<Input value="{/firstName}" valueLiveUpdate="true" width="200px" enabled="{/enabled}"/>
			<Label text="{i18n>lastName}"/>
			<Input value="{/lastName}" valueLiveUpdate="true" width="200px" enabled="{/enabled}"/>
			<Label text="{i18n>enabled}"/>
			<CheckBox selected="{/enabled}"/>
		</form:SimpleForm>
	</Panel>
</mvc:View>
```

Modify the data binding for the panel header and the labels in `App.view.xml` to include the model name. Notice that a "greater than" character separates the model name and the property name, and that i18n property names **must not** start with a slash character.

You could use multiple model instances by using different model names. The model name could be set as second parameter using the `setModel(oResourceModel,“i18n”)` method. The model is then propagated under this name to all aggregated child controls \(and their children, and so on…\). All these controls have access to this model under the name `i18n` as well as to the `JSONModel` \(default model, which has no name\).

**Related Information**  


[Resource Model](../04_Essentials/resource-model-91f122a.md#loio91f122a36f4d1014b6dd926db0e91070 "The resource model is used as a wrapper for resource bundles. In data binding you use the resource model instance, for example, to bind texts of a control to language-dependent resource bundle properties.")

