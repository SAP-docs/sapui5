<!-- loioa9c949cd49a148b38228110540667930 -->

# Executing a QUnit Test



## Creating a QUnit TestSuite

For running QUnit tests, you need a QUnit TestSuite which configures the environment for the test. You create the QUnit TestSuite as follows:

1.  Create a file named `testsuite.qunit.html`:

    ```html
    	<!DOCTYPE html>
    	<html>
    		<head>
    			<meta charset="utf-8">
    			<base href="../../">
    			<title>TestSuite myapp</title>
    			<script src="resources/sap/ui/test/starter/createSuite.js"
    					data-sap-ui-testsuite="test-resources/testsuite.qunit"></script>
    		</head>
    		<body>
    		</body>
    	</html>
    ```

2.  Create an additional configuration file that contains references to all tests, for example, `testsuite.qunit.js`.


The QUnit test starter is configured with one configuration file per QUnit TestSuite. The file is a standard SAPUI5 AMD module \(using `sap.ui.define`\) which returns an object with the configuration.

The configuration object is an object with the following top level properties:

```js
sap.ui.define(function() {
	"use strict";

	return {
		/*
		 * Name of the test suite.
		 *
		 * This name will be used in the title of the index page / testsuite page.
		 */
		name: "TestSuite for myapp",
		/*
		 * An Object with default settings for all tests.
		 *
		 * The defaults and the test configuration will be merged recursively in a way
		 * that the merge contains properties from both, defaults and test config;
		 * if a property is defined by both config objects, the value from the test config will be used.
		 * There's no special handling for other types of values, e.g an array value in the defaults
		 * will be replaced by an array value in the test config.
		 */
		defaults: {
			qunit: {
				version: 2
			}
		},
		
		/*
		 * A map with the individual test configurations, keyed by a unique test name.
		 *
		 * There's no technical restriction for the length or the characters of the test names.
		 * The will be used only in the overview page showing all tests of your suite.
		 *
		 * But by default, the name is also used to derive the ID of the module that contains the test cases.
		 * It is therefore suggested to use module ID like names (no blanks, no special chars other than / or dot)
		 * If you have multiple tests that execute the same module but with different configurations
		 * (e.g. different QUnit versions or different URL parameters), you have to make up unique names
		 * and manually configure the module IDs for them.
		 */
		tests: {

			/*
			 * A test named 'myqunittest'.
			 * By default, it will require the module 'myqunittest.qunit'
			 * assuming that your testsuite configuration is stored in testsuite.qunit.js.
			 */
			myqunittest: {
				  title: "My QUnit test for myapp"
			}
		}
	};
});

```



<a name="loioa9c949cd49a148b38228110540667930__section_blb_yyk_5fb"/>

## Starting the QUnit TestSuite

After creating the QUnit TestModule, you can easily run this test without any tool in any browser by just using the URL of the QUnit TestSuite page, for example `http://localhost:8080/myapp/test-resources/testsuite.qunit.html`. This executes the test and informs you about its success or shows you any errors.



<a name="loioa9c949cd49a148b38228110540667930__section_p3l_jyk_5fb"/>

## Migrating Existing HTML-based Testing Suites

The migrating of existing HTML-based QUnit tests to the new QUnit test starter framework brings several benefits:

-   Code reduction by removing duplicated HTML environment code

-   Separation of concerns: test js code, html environment code, configuration code

-   CSP compliance: No inline JavaScript execution




### Extract Configuration from QUnit TestSuite and Tests

The list of configured test pages as defined in the existing `testsuite.qunit.html` has to be transformed to the new configuration format described in the Configuration section.

For each individual test page, the necessary configuration has to be extracted from the page itself: the QUnit version and Sinon version that is used, if a Bridge \(Sandbox\) is used and the options that are defined for the UI5 Core or for Code coverage etc.+

The configuration has to be stored in a new AMD module that has the same name as the QUnit TestSuite but ending with '.js' instead of '.html', for example, `testsuite.qunit.js`.



### Make `testsuite.qunit.html` Use the Externalized Configuration

The `testsuite.qunit.html` must be re-written to use the above mentioned `createSuite.js` script and to read the new configuration:

`testsuite.qunit.html`

```html
<!DOCTYPE html>
<html>
	<head>
		<!-- the usual headers -->
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta charset="utf-8">


		<!-- it is suggested to use a base tag pointing to the application root,
		     as it normalizes URLs across test suites, but this is not mandatory -->
		<base href="../../../../../../../">


		<!-- include the generic script that creates the TestRunner suite from the configuration
		     The name of the suite is specified in a separate attribute data-sap-ui-testsuite.
		     Note that this attribute value is a UI5 resource name (no .js at the end, no relative name).
		     The configuration will be read using sap.ui.require. The test starter will take care to
		     register a path for prefix 'test-resources/'.
		     -->
		<script src="resources/sap/ui/test/starter/createSuite.js"
				data-sap-ui-testsuite="test-resources/sap/ui/core/qunit/test/starter/testsuite.starter.qunit"></script>
	</head>
	<body>
	</body>
</html>
```

\(Semi-\)Automation

The application `migrate.html` can automate parts of the above work. After starting it, it collects the names of existing QUnit TestSuites. This may take about 60 sec and provides a list of the existing QUnit TestSuites. Enter the name of one QUnit TestSuite. The application reads it, collect the tests, peeks into the individual test files to gather some of the configuration settings, and shows the resulting `testsuite.qunit.html` and `testsuite.qunit.js` in two code editors. You can use the shown code as a starting point for your migration.



### Convert Test Pages to AMD Modules

This step is potentially the biggest effort and it has to be done manually. In order that it can be used with the new testing / testsuite approach, note the following minimal requirements:

-   The HTML page is converted to an AMD JS module, using `sap.ui.define`.

-   The test configuration \(used testing framework components, UI5 Core setup ...\) has been added to the external configuration described above

-   The new module creates all QUnit tests on execution, not later. It does **not** call `QUnit.start()`. If, for some reason, the module cannot fulfill this task on execution, but has to wait for some asynchronous task, the test option `autostart` can be set to `false` and the test module can call `QUnit.start()` at an appropriate point in time. Note: Do not mix the test option `autostart` with the QUnit option `autostart`.


The following requirements that are optional:

-   The test code is fully cleaned up and no longer uses globals, only AMD references.

-   The test code no longer uses sync APIs.

    > ### Note:  
    > This will become a mandatory requirement for CSP level 2 policy as sync code loading always requires a kind of `eval`.




<a name="loioa9c949cd49a148b38228110540667930__section_z2k_yxk_5fb"/>

## Test Suite Configuration Options

Both, the defaults and the individual test configurations have the same structure, which is documented in the following code snippet. The snippet also shows the internal defaults of the test starter. They are used as a fallback for options that are not defined in the configuration file \(neither defaults, nor individual tests\).

```js
{
	/*
	 * ID(s) of the module(s) to load.
	 *
	 * Can either be a single string or an array of strings.
	 * Each string can use the following placeholders
	 *  leading "./" - package name of the testsuite configuration
	 *        {name} - name of the current test
	 */
	module: "./{name}.qunit",
 
 
	/*
	 * URL of the test page to start for this test.
	 *
	 * By default, all tests use the generic starter page which reads the suite
	 * configuration, finds the tests and starts the configured test components
	 * before it requires and executes the configured test module(s).
	 *
	 * The URL must be relative to the application root and can use the following
	 * placeholders, enclosed in curly braces:
	 *       {suite} - name of the testsuite (configuration)
	 *        {name} - name of the current test
	 */
	page: "resources/sap/ui/test/starter/Test.qunit.html?testsuite={suite}&test={name}",
 
 
	/*
	 * Title of the test.
	 * The URL must be relative to the application root and can use the following
	 * placeholders, enclosed in curly braces:
	 *       {suite} - name of the testsuite (configuration)
	 *        {name} - name of the current test
	 */
	title: "QUnit tests '{name}' of suite '{suite}'",
 
 
	/*
	 * QUnit configuration.
	 *
	 * Either can be a null or false or an object with the properties documented below.
	 * The values null and false are equivalent to the object { version: null }
	 */
	qunit: {
		/*
		 * Version of QUnit that should be loaded.
		 * If set to a null, QUnit won't be loaded.
		 * If set to "edge", the newest available version of QUnit will be used.
		 * If set to a number, the corresponding version of QUnit will be used if supported.
		 * Currently supported versions are 1 and 2, an error will be thrown for unsupported versions.
		 */
		version: "edge",
 
		/*
		 * Most statically configurable options from QUnit.config can be configured,
		 * e.g. reorder, blocking etc.
		 * Note that 'autostart' is an exception. To avoid timing issues with asynchronous test
		 * loading, 'autostart' will always be set to false. Only after all tests have been loaded,
		 * QUnit.start() will be called, either by the generic test starter or by the test module itself,
		 * see the general test option 'autostart' below.
		 */
		// reorder: true // only serves as an example, not part of the internal defaults of the starter
	},
 
	/*
	 * Sinon configuration.
	 *
	 * Either can be a null or false or an object with the properties documented below.
	 * The values null and false are equivalent to the object { version: null }
	 */
	sinon: {
 
		/*
		 * Version of Sinon that should be loaded.
		 * If set to null, Sinon won't be loaded.
		 * If set to "edge", the newest available version of Sinon will be used.
		 * If set to a number, the corresponding version of Sinon will be used if supported.
		 * Currently supported are versions 1 and 4, an error will be thrown for unsupported versions.
		 */
		version: "edge",
 
		/*
		 * Whether one of the sinon-qunit bridges will be loaded.
		 * When set to true, the sap/ui/thirdparty/sinon-qunit bridge will be loaded for Sinon 1
		 * and the sap/ui/qunit/sinon-qunit-bridge will be loaded for newer versions of Sinon.
		 *
		 * The bridge will only be loaded after both, QUnit and Sinon have been loaded.
		 * If either QUnit or Sinon are not loaded, no bridge will be loaded.
		 *
		 * If Sinon is not loaded, but QUnit, the bridge will not be loaded, but a shim
		 * with dependencies will be configured. This allows tests to load Sinon / the bridge on
		 * their own without taking care of the bridge dependencies. 
		 */
		qunitBridge: true,
 
 
		/*
		 * Any other statically configurable Sinon option can be specified as well.
		 * Note that they only play a role when a sandbox is used.
		 */
		useFakeTimers: false,
		useFakeServer: false
	},
 
 
	/*
	 * Code coverage options.
	 * The qunit-coverage module will always be loaded after QUnit has been loaded to enable the coverage
	 * option. When the 'coverage' parameter is set in the URL (e.g. because the coverage checkbox has been
	 * clicked), then blanket will be loaded before qunit-coverage to avoid synchronous loading of it.
	 */
	coverage: {
		only: null,
		never: null,
		branchTracking: false
	},

	/*
	 * UI5 runtime configuration options.
	 *
	 * All properties will be copied to window["sap-ui-config"].
	 * If window["sap-ui-config"] doesn't support it or if the value is of a type
	 * not supported for window["sap-ui-config"], executing the UI5 Core might fail.
	 *
	 * Only exception for now: the libs property can be an array of library names,
	 * not only a comma separated string.
	 *
	 * To ease test development, the following defaults are defined by the test starter:
	 */
	ui5: {
		bindingSyntax: 'complex',
		noConflict: true,
		libs: [],
		theme: "sap_horizon"
	},
 
 
	/*
	 * Whether the UI5 Core (sap/ui/core/Core.js) should be required and booted.
	 *
	 * When this option is true, the Core is not only loaded and started, but loading and execution
	 * of the test module(s) is also delayed until a listener registered with sap.ui.getCore().attachInit()
	 * has been executed.
	 */
	bootCore: true,
 
 
	/*
	 * Whether the test starter should call QUnit.start() after all prerequisites have been fulfilled
	 * (e.g. QUnit, Sinon, a bridge, have been loaded, coverage tooling has been loaded and configured,
	 * the Core has been booted, the test modules have been loaded and executed).
	 */
	autostart: true,
 
 
	/*
	 * Whether the test starter should skip a test file. Such tests will remain in the overview list,
	 * but won't be executed in the test suite.
	 */
	skip: false
};
```

