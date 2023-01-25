<!-- loioa5bb7a6d736f41c8ac1c1ef0b2d40676 -->

# Step 4: Testing a New Module

In the first unit test we have just extended the formatters module with a new function. Now we will write a unit test that will test the functionality of an entirely new module.



## Preview

A frequently used feature of a bulletin board is to flag interesting posts to mark them for later reading. The UI should contain a button to toggle the flagged state for each item. We will implement this feature with a custom type and again start writing the test case for it first and add the implementation later.

   
  
**The unit test for the Flagged feature will fail until the feature is implemented**

 ![](images/Tutorial_Testing_Step_04_ba4369b.png "The unit test for the Flagged feature will fail until the
					feature is implemented") 



## Coding

You can view and download all files in the *Samples* in the Demo Kit at [Testing - Step 4](https://ui5.sap.com/#/entity/sap.m.tutorial.testing/sample/sap.m.tutorial.testing.04).



## webapp/model/FlaggedType.js \(new\)

```js
sap.ui.define([
	"sap/ui/model/SimpleType"
], function (SimpleType) {
	"use strict";
	return SimpleType.extend("sap.ui.demo.bulletinboard.model.FlaggedType", {
		formatValue: function () {
		},
		parseValue: function () {
		},
		validateValue: function () {
		}
	});
});
```

We plan to control a button state based on the `Flagged` property in the model. The button expects a Boolean value for the pressed state. In the model, we have a binary integer representation, so we will again need conversion logic to format the model value. And we also need a back conversion to store a state change in the model when the user clicks the button.

A formatter function will only take care of one direction so this time we decide to implement a custom data type for the conversions. As with the previous test, we add an empty hull for our new data type in the model folder. The `FlaggedType` extends the `SimpleType`. Its interface provides two conversion functions and a validation function:

-   `formatValue`: formats a model value to be displayed in the UI

-   `parseValue`: parses a UI value to be stored in the model

-   `validateValue`: checks a value for displaying validation errors




## webapp/test/unit/model/FlaggedType.js \(new\)

```js
sap.ui.require(
	[
		"sap/ui/demo/bulletinboard/model/FlaggedType"
	],
	function (FlaggedType) {
		"use strict";
		QUnit.module("FlaggedType - formatting");
		QUnit.test("Should convert 1 to true", function (assert) {
			// Act
			var bFormattedValue = new FlaggedType().formatValue(1);
			// Assert
			assert.strictEqual(bFormattedValue , true, "The formatting conversion was correct");
		});
		QUnit.test("Should convert other values to false", function (assert) {
			var oFlaggedType = new FlaggedType();
			// Act
			var bFormattedZero = oFlaggedType.formatValue(0);
			var bFormattedNegativeNumber = oFlaggedType.formatValue(-666);
			// Assert
			assert.strictEqual(bFormattedZero, false, "The formatting conversion was correct");
			assert.strictEqual(bFormattedNegativeNumber, false, "The formatting conversion was correct");
		});
		QUnit.module("FlaggedType - parsing");
		QUnit.test("Should parse false to 0", function (assert) {
			// Act
			var iParsedValue = new FlaggedType().parseValue(false);
			// Assert
			assert.strictEqual(iParsedValue, 0, "The parsing conversion matched the input");
		});
		QUnit.test("Should parse true to 1", function (assert) {
			// Act
			var iParsedValue = new FlaggedType().parseValue(true);
			// Assert
			assert.strictEqual(iParsedValue, 1, "The parsing conversion matched the input");
		});
	}
);
```

The new `FlaggedType.js` file matches the file name of the implementation and is put in the `model` subfolder of the `test/unit` folder similar to the implementation under the `webapp` folder. By keeping the same structure for tests and productive code, we can easily relate the tests to the implementation.

We define this testing module with `sap.ui.require` since we just want to load dependencies but do not want to declare a namespace for this testing module. We load the new and still empty `FlaggedType` implementation as the only dependency and declare two QUnit modules: one for formatting and one for parsing, to check both the to- and back-conversion of the flagged type.

> ### Note:  
> We do not test the validation function of the data type as our conversion is so simple. There are no expected validation errors that we have to take care of.

In each QUnit module we define test cases for each condition. For a Boolean conversion there are just two cases, `true` and `false`. So we expect that the integer value `1` is converted to `true` and everything else to `false`.

Let's have a look at the first test case to see how the custom data type is invoked for testing.

As we have loaded the type as a dependency, we can just access it with the variable `FlaggedType` and create a new instance of it in each test case. This time we do not create a `reuse` function but simply create the instance inside the test case. On the type we manually call the function `formatValue` that we want to test and compare the result to the expected value in an assertion.

In the second test case, we check all other values, we expect it to be `0` but it could be also a negative value. So we check both cases in the same test case with a separate assertion each. Only when both assertions are fulfilled the test will be successful.

The other test cases in the parsing module are similar and check the back conversion from Boolean value to integer value.



## webapp/test/unit/AllTests.js

```js
sap.ui.define([
	"./model/models",
	"./model/formatter",
	"./model/FlaggedType"

], function() {
	"use strict";
});
```

In the `AllTests.js` file we just load the new testing module as a dependency so that it is executed automatically whenever we execute the unit tests.

You can now call the unit tests and check the result. As in the previous step, the tests should fail with an error message that the conversion is not correct. This is expected as we did not implement the conversion logic yet but just the tests for it.



## Conventions

-   Use data types if you need both formatting and parsing of a model value

-   Organize the tests in the same file structure as the productive code


**Related Information**  


[API Reference: `sap.ui.model.SimpleType`](https://ui5.sap.com/#/api/sap.ui.model.SimpleType)

[API Reference: `sap.ui.require`](https://ui5.sap.com/#/api/sap.ui/methods/sap.ui.require)

[Formatting, Parsing, and Validating Data](../04_Essentials/formatting-parsing-and-validating-data-07e4b92.md "Data that is presented on the UI often has to be converted so that is human readable and fits to the locale of the user. On the other hand, data entered by the user has to be parsed and validated to be understood by the data source. For this purpose, you use formatters and data types.")

