<!-- loio22f50c0f0b104bf3ba84620880793d3f -->

# Concept and Basic Setup

To apply the test starter concept to your SAPUI5 project, you need to create a test suite and a generic test page that allows for the running of one or multiple test modules.

> ### Note:  
> For SAPUI5 applications, the test suite and the generic test page are typically placed in the `webapp/test` folder. The code samples in the next sections use `<NAMESPACE>` as a placeholder for your SAPUI5 project namespace. Please, replace this placeholder with your SAPUI5 project namespace defined in the `sap.app/id` property in the `manifest.json` file by replacing the '.' with '/', for example `my/ui5app`.





<a name="loio22f50c0f0b104bf3ba84620880793d3f__section_v1s_4qg_vcc"/>

## The UI5 Test Suite

A test suite configures the environment for the tests. It consists of a `*.qunit.html` page often named `testsuite.qunit.htm`l and a corresponding `*.qunit.js` module often named `testsuite.qunit.js`.



### The UI5 Test Suite Page

The test suite page uses the `sap/ui/test/starter/createSuite.js` script to initialize the test suite in a way which is compliant to the content security policy, based on the externalized test configuration provided in the test suite module.

```

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <base href="../">
    <title>QUnit test suite for NAMESPACE</title>
    <script
        src="resources/sap/ui/test/starter/createSuite.js"
        data-sap-ui-testsuite="test-resources/<NAMESPACE>/testsuite.qunit"
        data-sap-ui-resource-roots='{
            "test-resources.<NAMESPACE>": "./test"
        }'
    ></script>
</head>
<body>
</body>
</html>

```





### The UI5 Test Suite Module

The test suite module represents the configuration file for the UI5 test suite. The module must return a configuration object in the following structure:

```

sap.ui.define(function() {
	"use strict";

	return {
		defaults: {
			page: "test/Test.qunit.html?testsuite={suite}&test={name}",
			qunit: {
				version: 2
			},
			sinon: {
				version: 4
			},
			ui5: {
				language: "EN",
				theme: "sap_horizon"
			},
			coverage: {
				only: "<NAMESPACE>/",
				never: "<NAMESPACE>/test/"
			},
			loader: {
				paths: {
					"<NAMESPACE>": "./"
				}
			}
		},
		tests: {}
	};
});

```

The `tests` object is empty for now. For more information on how to add a defined test module to an existing test suite, see [Adding a QUnit Test Module to a Test Suite](creating-a-qunit-test-7080029.md#loio708002929ea548fd9433954a9275eb5f__section_hp4_xhn_vcc).



<a name="loio22f50c0f0b104bf3ba84620880793d3f__section_gts_ptg_vcc"/>

## The Generic Test Page

The generic test page runs one or multiple test modules. Typically, this file is named `test.qunit.html`. The generic test page is configured in the test suite module. It will be called with the test suite and test name in order to run a test.

```

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<base href="../">
	<script
		src="resources/sap/ui/test/starter/runTest.js"
		data-sap-ui-resource-roots='{
			"test-resources.<NAMESPACE>": "./test"
		}'
	></script>
</head>
<body class="sapUiBody">
	<div id="qunit"></div>
	<div id="qunit-fixture"></div>
</body>
```

