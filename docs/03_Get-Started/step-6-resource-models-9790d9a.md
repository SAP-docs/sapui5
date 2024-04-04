<!-- loio9790d9aa686e4f818f2ad99057adb7ee -->

# Step 6: Resource Models

Business applications also require language-specific \(translatable\) texts used as labels and descriptions on the user interface.

The example we used at the start of this tutorial was overly simplistic as we stored language-specific text directly in a JSON model object. Generally speaking, unless language-specific text is derived directly from a back-end system, it is not considered good programming practice to place translatable texts directly into a model. So let's correct this situation by placing all translatable texts \(such as field labels\) into a resource bundle.



## Preview

  
  
**Texts derived from the resource model \(No visual change to last step\)**

![](images/Tutorial_Data_Binding_Step_4_61d68f1.png "Texts derived from the resource model (No visual change to last step)")



## Coding

You can view and download all files in the Demo Kit at [Data Binding - Step 6](https://ui5.sap.com/#/entity/sap.ui.core.tutorial.databinding/sample/sap.ui.core.tutorial.databinding.06).

1.  Create a new entry in the `manifest.json` file under the `models` entry as shown in the coding below. The resource model is set to the component using the model name `i18n` and the data from the `i18n.properties` file as specified in the `bundleName` entry in the settings. Since we are creating a resource model, the file name is assumed to have the extension `.properties`; this does not need to be stated explicitly.

    **webapp/manifest.json**

    ```
    ...
    	"sap.ui5": {
    		"dependencies": {
    			"minUI5Version": "1.120.0",
    			"libs": {
    				"sap.m": {},
    				"sap.ui.core": {},
    				"sap.ui.layout": {}
    			}
    		},
    		"models": {
    			"": {
    				"type": "sap.ui.model.json.JSONModel",
    				"uri": "./model/data.json"
    			},
    			"i18n": {
    				"type": "sap.ui.model.resource.ResourceModel",
    				"settings": {
    					"bundleName": "ui5.databinding.i18n.i18n",
    					"supportedLocales": [
    						"",
    						"de"
    					],
    					"fallbackLocale": ""
    				}
    			}
    		},
    ...
    ```

    > ### Note:  
    > The configured `supportedLocales` represent the following i18n files present \(see Step 7\):
    > 
    > -   `""` - `i18n/i18n.properties`
    > -   `"de"` - `i18n/i18n_de.properties`
    > 
    > The configured `fallbackLocale` should represent one of these files; according to the fallback chain, the root bundle \(`""`\) is the last fallback. Configuring it explicitly avoids side effects when additional resource files are added. For more information, see [Supported Locales and Fallback Chain](../04_Essentials/supported-locales-and-fallback-chain-ec753bc.md).

2.  Create a new folder `i18n` in the `webapp` folder, and a new file `i18n.properties` within this folder. Add the code shown below.

    **webapp/i18n/i18n.properties \(New\)**

    ```ini
    # Field labels
    firstName=First Name
    lastName=Last Name
    enabled=Enabled
    
    # Screen titles
    panelHeaderText=Data Binding Basics
    ```

    The `panelHeaderText` property has been moved from the JSON model into the `i18n` resource bundle; also the field labels are no longer hard-coded in the XML view. This is because all of these text fields need to be translated.

    Language-specific text stored in resource models obeys the Java convention for internationalization \(i18n\).

3.  Modify the data binding for the panel header and the labels in `App.view.xml` to include the model name. Note that a "greater than" character separates the model name and the property name, and that i18n property names **must not** start with a slash character.

    **webapp/view/App.view.xml**

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

4.  Remove the line `panelHeaderText : "Data Binding Basics"` from the model data in the `data.json` file. This text has now been moved to the resource model.

    **webapp/model/data.json**

    ```
    {
    	"firstName": "Harry",
    	"lastName": "Hawk",
    	"enabled": true
    }
    ```

5.  Remove the `init` function and the import of `sap/ui/model/BindingMode` from `Component.js` as we do not want to set the one-way binding mode anymore.

    **webapp/Component.js**

    ```
    sap.ui.define([
    	"sap/ui/core/UIComponent"
    ], (UIComponent) => {
    	"use strict";
    	return UIComponent.extend("ui5.databinding.Component", {
    		metadata: {
    			interfaces: ["sap.ui.core.IAsyncContentCreation"],
    			manifest: "json"
    		}
    	});
    });
    ```


You could use multiple model instances by using different model names. The model name could be set as second parameter using the `setModel(oResourceModel,“i18n”)` method. The model is then propagated under this name to all aggregated child controls \(and their children, and so on…\). All these controls have access to this model under the name `i18n` as well as to the `JSONModel` \(default model, which has no name\).

**Related Information**  


[Resource Model](../04_Essentials/resource-model-91f122a.md#loio91f122a36f4d1014b6dd926db0e91070 "The resource model is used as a wrapper for resource bundles. In data binding you use the resource model instance, for example, to bind texts of a control to language-dependent resource bundle properties.")

