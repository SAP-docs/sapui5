<!-- loio708002929ea548fd9433954a9275eb5f -->

# Creating a QUnit Test





## Prerequisites

As a prerequisite for creating a test, you need to have created a SAPUI5 application project that contains a test suite. For more information on how to do this, see [Concept and Basic Setup](concept-and-basic-setup-22f50c0.md). After completing this, continue with the steps described in the subsequent sections.



## Creating a Test Module

Create a file `MyTest.qunit.js` in the folder `webapp/test/unit`.

> ### Note:  
> You can use the file template shown in the following example. This code snippet shows a basic QUnit test template.

Each test file normally represents a SAPUI5 module, which is being tested.

```js
/*global QUnit */
sap.ui.define([], function() {
  "use strict";

  QUnit.module("Module A"); 

  QUnit.test("Basic test example", function(assert) {
    assert.ok(true, "this test is fine"); 
    var value = "hello1"; 
    assert.equal(value, "hello1", "We expect value to be 'hello1'"); 
  });

});
```

QUnit test files do not include the SAPUI5 bootstrap \(`sap-ui-core.js`\). Instead, the test starter ensures that the QUnit tests are loaded within an HTML page.



<a name="loio708002929ea548fd9433954a9275eb5f__section_hp4_xhn_vcc"/>

## Adding a QUnit Test Module to a Test Suite

In order to run a QUnit test, the corresponding module needs to be added to a test suite.

```

sap.ui.define(function() {
	"use strict";

	return {

		// ...

		tests: {
			"unit/MyTest": {
				title: "Unit tests for <NAMESPACE>"
			},
		}
	};
});
```



<a name="loio708002929ea548fd9433954a9275eb5f__section_irf_23n_vcc"/>

## Running a QUnit Test

Open the test suite `html` file in your desired browser to run the newly created test module.

**Related Information**  


[QUnit Home Page](https://qunitjs.com/)

[Testing Tutorial](../03_Get-Started/testing-tutorial-291c912.md "In this tutorial we will test application functionality with the testing tools that are delivered with SAPUI5. At different steps of this tutorial you will write tests using QUnit, OPA5, and the OData V2 mock server. Additionally, you will learn about testing strategies, Test Driven Development (TDD), and much more.")

