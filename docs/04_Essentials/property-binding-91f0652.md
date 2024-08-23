<!-- loio91f0652b6f4d1014b6dd926db0e91070 -->

# Property Binding

With property binding, you can initialize properties of a control automatically and update them based on the data of the model.

To define property binding on a control, you have the following options:

-   As part of the control’s declaration in an XML view

-   Using JavaScript, in the `settings` object in the constructor of a control, or in special cases, using the `bindProperty` method of a control


Once you have defined the property binding, the property is updated automatically every time the property value of the bound model is changed, and vice versa.

Let’s say, we have the following JSON data:

```json
{
	"company" : {
		"name"  : "Acme Inc.",
		"street": "23 Franklin St.",
		"city"  : "Claremont",
		"state" : "New Hampshire",
		"zip"   : "03301",
		"revenue": "1833990"
	}
}
```

To define property binding in the control declaration in the **XML view**, just include the binding path within curly brackets \(see also [Binding Path](binding-path-2888af4.md)\):

```xml
<mvc:View 
	controllerName="sap.ui.sample.App"
	xmlns="sap.m"
	xmlns:mvc="sap.ui.core.mvc">
	<Input value="{/company/name}"/>
</mvc:View>
```

In **JavaScript**, you can include the binding path within curly brackets as a string literal in the `settings` object:

```js
// "Input" required from module "sap/m/Input"
var oInput = new sap.m.Input({
	value: "{/company/name}"
});
```

You can also use a complex syntax for property bindings. This complex syntax allows you to define additional binding information to be contained in the `settings` object, such as a formatter function.

You can then set the `bindingMode` or other additional properties like this:

```xml
<mvc:View
	controllerName="sap.ui.sample.App"
	xmlns="sap.m"
	xmlns:mvc="sap.ui.core.mvc">
	<Input
		value="{
			path:'/company/name', 
			mode: 'OneWay' 
		}"/>
</mvc:View>
```

In **JavaScript** views or controllers, you use a JS object instead of a string literal. This must contain a `path` property containing the binding path, and can contain additional properties:

```js
// "Input" required from module "sap/m/Input"
// "BindingMode" required from module "sap/ui/model/BindingMode"

var oInput = new Input ({
	value: {
		path: "/company/name",
		mode: BindingMode.OneWay
	}
});
```

Depending on the use case, it may be useful to define the binding at a later time, using the `bindProperty` method:

```js
oInput.bindProperty("value", "/company/name");
```

This option also allows you to use the same object literal that you used in the constructor to define the binding:

```js
// "TypeInteger" required from module "sap/ui/model/type/Integer"

oInput.bindProperty("value", {
	path: "/company/name",
	type: new TypeInteger()
});
```

> ### Note:  
> Some controls offer convenience methods for their main properties that are most likely to be bound by an application:
> 
> ```js
> oTextField.bindValue("/company/name");
> ```

To **remove** a property binding, you can use the `unbindProperty` method. The property binding is removed automatically whenever a control is destroyed:

```js
oTextField.unbindProperty("value");
```

You can also bind multiple paths by combining them as parts of a binding. For more information, see [Composite Binding](composite-binding-a2fe8e7.md).



<a name="loio91f0652b6f4d1014b6dd926db0e91070__section_N10078_N10013_N10001"/>

## Formatting Property Values

Values in data are often represented in an internal format and need to be converted to an external format for visual representation, especially numbers, dates, and times with locale-dependent external formats. SAPUI5 provides two different options for converting data. You can use both options for each binding, you don't have to use one option consistently throughout your app:

-   Formatter functions for one-way conversion

-   Data types in two-way binding

    Data types can be used to parse user input in addition to formatting values.




### Using a Formatter Function

If you define the property binding in the **XML view**, you need to define a formatter function \(`roundToMillion`\) in the view controller:

```js
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";
	return Controller.extend("sap.ui.sample.App", {
		……………
		roundToMillion: function(fValue) {
			if (fValue) {
				return "> " + Math.floor(fValue/1000000) + "M";
			}
			return "0";
		}
	});
}); 
```

The `this` context of a formatter function is generally set to the control \(or managed object\) that owns the binding. In XML views, however, the view should contain a reference to the formatter function, which resides in the view controller. This is done by putting a dot \(`.`\) in front of the name of the formatter function \(`{ formatter: '.myformatter' }`\). In this case, the formatter's `this` context is bound to the controller.

```xml
<mvc:View
	controllerName="sap.ui.sample.App"
	xmlns="sap.m"
	xmlns:mvc="sap.ui.core.mvc">
	<Input
		value="{ 
			path:'/company/revenue',
			formatter: '.roundToMillion'
		}"/>
</mvc:View>
```

If you use **JavaScript**, you can pass the formatter function as a third parameter to the `bindProperty` method, or you can add the binding info with the `formatter` key. The `formatter` has a single parameter `value`, which is the value that is to be formatted, and is executed as a member of the control, meaning it can access additional control properties or model data.

```js
//"Input" required from module sap/m/Input

oTextField.bindProperty("value", "/company/title", function(sValue) {
	return sValue && sValue.toUpperCase();
});

oControl = new Input({
	value: {
		path:"/company/revenue",
		formatter: function(fValue) {
			if (fValue) {
				return "> " + Math.floor(fValue/1000000) + "M";
			}
			return "0";
		}
	}
})
```

Because it can contain any JavaScript, the formatter function can be used for formatting a value and also for performing type conversions or calculating results, for example, to show a special traffic light image depending on a Boolean value:

```js
oImage.bindProperty("src", "/company/trusted", function(bValue) {
	return bValue ? "green.png" : "red.png";
}); 
```

> ### Caution:  
> The framework only updates a binding when one of the properties included in the binding changes. If the formatter uses another property value that is not part of the binding definition, the framework won't know that the result depends on that additional property and could miss necessary updates. Therefore, make sure that you declare a composite binding referencing all necessary properties \(maybe even from different models\).



### Using Data Types

The data type system enables you to format and parse data, as well as to validate whether the entered data lies within any defined constraints. SAPUI5 comes with several predefined and ready-to-use types, referred to as simple types. For more information, see [Formatting, Parsing, and Validating Data](formatting-parsing-and-validating-data-07e4b92.md).

Here’s how you can use these types in an XML view:

```xml
<mvc:View
	controllerName="sap.ui.sample.App"
	xmlns="sap.m"
	xmlns:mvc="sap.ui.core.mvc">
	<Input
		value="{ 
			path:'/company/revenue',
			type: 'sap.ui.model.type.Integer'
		}"/>
</mvc:View>

```

You can also provide parameter values for some of the simple types in your XML view. These are declared as `formatOptions`, as you can see in the Float type sample below. Permitted `formatOptions` are properties of the corresponding data type. For more information, see the *API Reference* in the Demo Kit.

```xml
<mvc:View
   controllerName="sap.ui.sample.App"
   xmlns="sap.m"
   xmlns:mvc="sap.ui.core.mvc">
   <Input
	value="{ 
		path:'/company/revenue', 
		type: 'sap.ui.model.type.Float',
		formatOptions: {
			minFractionDigits: 2,
			maxFractionDigits: 2
		}
	}"/>
</mvc:View>
```

Using JavaScript, you can define a type to be used for a property binding by passing it as a third parameter in `bindProperty` or by adding it to the binding information by using the key `type`, as shown here:

```js
// "TypeString" required from module "sap/ui/model/type/String"
// "Input" required from module "sap/m/Input"
// "TypeFloat" required from module "sap/ui/model/type/Float"

oTextField.bindProperty("value", "/company/name", new sap.ui.model.type.String());

oControl = new sap.m.Input({
	value: {
		path:"/company/revenue",
		type: new TypeFloat({
			minFractionDigits: 2,
			maxFractionDigits: 2
		})
	}
})
```

Predefined data types also offer visual feedback for erroneous user input. To turn this feature on, add the following line to your controller's `init` function:

```js
// "Messaging" required from module "sap/ui/core/Messaging"
Messaging.registerObject(this.getView(), true);
```

For other ways to activate this feature, such as using the `handleValidation` property, see [Validation Messages](validation-messages-a90d93d.md).

You can define **custom types** by inheriting from `sap.ui.model.SimpleType` and implementing the three methods `formatValue`, `parseValue`, and `validateValue`. `formatValue` is called whenever the value in the model is changed to convert it to the type of the control property it is bound to, and may throw a `FormatException`. `parseValue` is called whenever the user has modified a value in the UI and the change is transported back into the model. It may throw a `ParseException` if the value cannot be converted. If parsing is successful, `validateValue` is called to check additional constraints, such as minimum or maximum value, and throws a `ValidateException` if any constraints are violated.

```js
// "SimpleType" required from module "sap/ui/model/SimpleType"
// "ValidateException" required from module "sap/ui/model/ValidateException"

var Zipcode = SimpleType.extend("sap.ui.sample.Zipcode", {
    formatValue: function(oValue) {
        return oValue;
    },
    parseValue: function(oValue) {
        return oValue;
    },
    validateValue: function(oValue) {
       if (!/^(\d{5})?$/.test(oValue)) {
            throw new ValidateException("Zip code must have 5 digits!");
       }
    }
});
```

You can use your custom types in XML views or JavaScript in the same way as you would apply predefined types:

```xml
<mvc:View
   controllerName="sap.ui.sample.App"
   xmlns="sap.m"
   xmlns:mvc="sap.ui.core.mvc">
   <Input
      value="{
		path:'/company/zip',
		type: 'sap.ui.sample.Zipcode'
     }"/>
</mvc:View>
```



<a name="loio91f0652b6f4d1014b6dd926db0e91070__section_N100DE_N10013_N10001"/>

## Changing the Binding Mode

By default, all bindings of a model instance have the default binding mode of the model, but you can change this behavior if needed. When creating a `PropertyBinding`, you can specify a different binding mode, which is then used exclusively for this specific binding. Of course, a binding can only have a binding mode that is supported by the model in question.

```js
// "JSONModel" required from module "sap/ui/model/json/JSONModel"
// "Input" required from module "sap/m/Input"
// "BindingMode" required from module "sap/ui/model/BindingMode"
	var oModel = new JSONModel();
	// default binding mode is two-way
	oModel.setData(myData);
	var oInputFirstName = new Input ();
	oInputFirstName.setModel(oModel);

	// bind value property one way only
	// propertyname, formatter function, binding mode
	oInputFirstName.bindValue("/firstName", null, BindingMode.OneWay);
	oInputFirstName.placeAt("target1");

	var oInputLastName = new Input();
	oInputLastName.setModel(oModel);
	// bind value property two way (default)
	oInputLastName.bindValue("/lastName");
	oInputLastName.placeAt("target2");
```

In the example above, two `Input` fields are created and their `value` property is bound to the same property in the model. The first `Input` binding has a one-way binding mode, whereas the second `Input` has the default binding mode of the model instance, which is two-way. For this reason, when text is entered in the first `Input`, the value will **not** be changed in the model. This only happens if text is entered in the second `Input`. Then, of course, the value of the first `Input` will be updated as it has a one-way binding, that is, from model to view.

**Related Information**  


[Data Binding Tutorial Step 3: Create Property Binding](../03_Get-Started/step-3-create-property-binding-d70e989.md "Although there is no visible difference, the text on the screen is now derived from model data.")

[API Reference: `sap.ui.base.ManagedObject.bindProperty`](https://ui5.sap.com/#/api/sap.ui.base.ManagedObject/methods/bindProperty)

[Binding Syntax](binding-syntax-e2e6f41.md "You bind UI elements to data of a data source by defining a binding path to the model that represents the data source in the app.")

[Formatting, Parsing, and Validating Data](formatting-parsing-and-validating-data-07e4b92.md "Data that is presented on the UI often has to be converted so that is human readable and fits to the locale of the user. On the other hand, data entered by the user has to be parsed and validated to be understood by the data source. For this purpose, you use formatters and data types.")

