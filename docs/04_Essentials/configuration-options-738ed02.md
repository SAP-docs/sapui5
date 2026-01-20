<!-- loio738ed025b36e484fa99046d0f80552fd -->

# Configuration Options

The UI5 test suite module contains the configuration for the UI5 test suite.



<a name="loio738ed025b36e484fa99046d0f80552fd__section_vyx_hpm_sdc"/>

## **Available Options and Default Values**

The following options are available on the `defaults` and the individual test configuration objects:

> ### Note:  
> The values used in the following code are the default values and are used as a fallback for options that are not defined in the configuration file - neither in the `defaults` object, nor in an individual test configuration object.

```

{
	/*
	 * ID(s) of the module(s) to load.
	 *
	 * Can either be a single string or an array of strings.
	 * Each string might start with a leading "./" 
	 * when the test module is located in the same folder
	 * as the testsuite configuration.
	 * You can use the following placeholder:
	 *   {name} - name of the current test module
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
	 *   {suite} - name of the testsuite (configuration)
	 *   {name} - name of the current test module
	 */
	page: "resources/sap/ui/test/starter/Test.qunit.html?testsuite={suite}&test={name}",


	/*
	 * Title of the test.
	 * The URL must be relative to the application root and can use the following
	 * placeholders, enclosed in curly braces:
	 *   {suite} - name of the testsuite (configuration)
	 *   {name} - name of the current test module
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
	 * Sinon.JS configuration.
	 *
	 * Either can be a null or false or an object with the properties documented below.
	 * The values null and false are equivalent to the object { version: null }
	 */
	sinon: {

		/*
		 * Version of Sinon.JS that should be loaded.
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
		 * The bridge will only be loaded after both, QUnit and Sinon.JS have been loaded.
		 * If either QUnit or Sinon.JS are not loaded, no bridge will be loaded.
		 *
		 * If Sinon.JS is not loaded, but QUnit, the bridge will not be loaded, but a shim
		 * with dependencies will be configured. This allows tests to load Sinon.JS/the bridge on
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
		noConflict: true,
		libs: [],
		theme: "default"
	},

	/*
	 * UI5 Loader configuration.
	 *
	 * The provided configuration will be passed to `sap.ui.loader.config` and can be used to 
	 * configure paths, shims, and other loader configuration.
	 */
	loader: {},

	/*
	 * Whether the test starter should call QUnit.start() after all prerequisites have been fulfilled
	 * (e.g. QUnit, Sinon, a bridge, have been loaded, UI5 Middleware Code Coverage is running and configured,
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

