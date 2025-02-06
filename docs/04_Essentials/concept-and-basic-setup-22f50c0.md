<!-- loio22f50c0f0b104bf3ba84620880793d3f -->

# Concept and Basic Setup

To apply the test starter concept to your SAPUI5 project, you need to create a test suite and a generic test page that allows for the running of one or multiple test modules.

> ### Note:  
> For SAPUI5 applications, the test suite and the generic test page are typically placed in the `webapp/test` folder. The code samples in the next sections use `<NAMESPACE>` as a placeholder for your SAPUI5 project namespace. Please replace this placeholder with your SAPUI5 project namespace defined in the `sap.app/id` property in the `manifest.json` file by replacing the '.' with '/', for example `my.ui5app` becomes `my/ui5app`. However, for the `<NAMESPACE-WITH-DOTS>` in `data-sap-ui-resource-roots`, use the exact value of `sap.app/id` \(separated by dots\).





<a name="loio22f50c0f0b104bf3ba84620880793d3f__section_v1s_4qg_vcc"/>

## The UI5 Test Suite

A test suite configures the environment for the tests. It consists of a `*.qunit.html` page often named `testsuite.qunit.html` and a corresponding `*.qunit.js` module.

The default naming convention for the test suite is `testsuite.qunit.html` and `testsuite.qunit.js`.

There can be multiple test suites in a project. When adding more test suites, the naming must follow the pattern `testsuite.<name>.qunit.html` / `testsuite.<name>.qunit.js`.



### The UI5 Test Suite Page

The test suite page uses the `sap/ui/test/starter/createSuite.js` script to initialize the test suite in a way which is compliant to the content security policy, based on the externalized test configuration provided in the test suite module.

Unlike with the UI5 bootstrap, this script only accepts a limited set of configuration options:

-   The `data-sap-ui-testsuite` attribute specifies the test suite module.

-   The`data-sap-ui-resource-roots` attribute registers the project-specific namespaces, allowing the test suite modules to load from the correct locations. Note that, unlike module names, this configuration requires namespaces to be separated by dots.

```

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>QUnit test suite for NAMESPACE</title>
    <script
        src="../resources/sap/ui/test/starter/createSuite.js"
        data-sap-ui-testsuite="test-resources/<NAMESPACE>/testsuite.qunit"
        data-sap-ui-resource-roots='{
            "test-resources.<NAMESPACE-WITH-DOTS>": "./"
        }'
    ></script>
</head>
<body>
</body>
</html>

```





### The UI5 Test Suite Module

The test suite module represents the configuration file for the UI5 test suite. The module must return a configuration object in the following basic structure:

-   The `name` property represents the name of the test suite and is displayed in the test suite overview page as title.

-   The `defaults` object contains the default [Configuration Options](configuration-options-738ed02.md) for tests.

-   The `tests` object contains the definition and configuration for the individual test modules. Configuration of the individual test modules can override the default configuration. For more information on how to add a defined test module to an existing test suite, see [Creating a QUnit Test](creating-a-qunit-test-7080029.md).

    ```
    sap.ui.define(() => {
    	"use strict";
    
    	return {
    		name: "QUnit test suite for NAMESPACE",
    		defaults: {},
    		tests: {}
    	};
    });
    ```


Here is an example of a test suite module that provides default configuration for third-party modules QUnit and `sinon`. We recommend setting the version manually to prevent test failures when SAPUI5 upgrades a third-party module to a new major version with breaking changes. By default, the latest available versions are used.

It also provides [Configuration of the SAPUI5 Runtime](configuration-of-the-sapui5-runtime-91f08de.md) at `ui5` to set the theme to `sap_horizon`. The `loader.paths` configuration is used to map the project-specific namespace to the correct location. Unlike the `data-sap-ui-resource-roots` configuration in the test suite page which only registers the`test-resources` namespace, this configuration maps the productive namespace to the parent folder \(assuming the test suite is placed within `webapp/fitest`\). The generic test `page` mentioned in the next section uses query parameters to run individual tests. The placeholders `{suite}` and `{name}` are replaced with the suite and test names, respectively.

```

sap.ui.define(function () {
	"use strict";

	return {
		name: "QUnit test suite for NAMESPACE",
		defaults: {
			page: "ui5://test-resources/<NAMESPACE>/Test.qunit.html?testsuite={suite}&test={name}",
			qunit: {
				version: 2,
			},
			sinon: {
				version: 4,
			},
			ui5: {
				theme: "sap_horizon",
			},
			loader: {
				paths: {
					"<NAMESPACE>": "../",
				},
			},
		},
		tests: {},
	};
});
```

The `tests` object is empty for now. For more information on how to add a defined test module to an existing test suite, see [Adding a QUnit Test Module to a Test Suite](creating-a-qunit-test-7080029.md#loio708002929ea548fd9433954a9275eb5f__section_hp4_xhn_vcc).



<a name="loio22f50c0f0b104bf3ba84620880793d3f__section_gts_ptg_vcc"/>

## The Generic Test Page

The generic test page is used to run individual tests. Typically, this file is named `Test.qunit.html`.

It includes the `sap/ui/test/starter/runTest.js` script which is responsible for loading the test suite configuration and starting the test. In the test suite module, the page is configured as `page`. It receives test suite and test name through query parameters to run a test.

Unlike the UI5 bootstrap, the generic test page only accepts the `data-sap-ui-resource-roots` configuration where project-specific namespaces should be registered. All other UI5 configuration must be provided in the test suite module as described above \(`ui5` property\).

```

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<script
		src="../resources/sap/ui/test/starter/runTest.js"
		data-sap-ui-resource-roots='{
			"test-resources.<NAMESPACE-WITH-DOTS>": "./"
		}'
	></script>
</head>
<body class="sapUiBody">
	<div id="qunit"></div>
	<div id="qunit-fixture"></div>
</body>
</html>
```

