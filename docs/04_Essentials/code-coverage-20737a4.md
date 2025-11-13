<!-- loio20737a4c64f448d2af9b9745fbe5d762 -->

# Code Coverage

It can be handy to calculate the code coverage of your integration tests, for example, to figure out whether you forgot to test something or to provide statistics on your test quality.

At test execution time, Gherkin offers the option *Enable coverage* at the top left of the test results. Enabling the option reruns the tests and then lists the files that were tested at the bottom of the page.

Gherkin calculates code coverage for any JavaScript file that is loaded after the test harness. This may cause some system libraries to appear in the results. You can specify which files to calculate code coverage for by adding code to your HTML bootstrap file \(after loading SAPUI5, but before running your tests\), as follows.



<a name="loio20737a4c64f448d2af9b9745fbe5d762__section_ISTANBUL"/>

## Istanbul

Code coverage with `Istanbul` relies on a [UI5 server](https://ui5.github.io/cli/stable/pages/Server/) and [UI5 Middleware Code Coverage](https://github.com/UI5/cli-extensions/tree/main/packages/middleware-code-coverage).

If you use UI5 CLI's `ui5 serve`, you would need to enable it in `ui5.yaml` and `package.json` of your project.

```html
<script
  src="path/to/resources/sap/ui/qunit/qunit-coverage-istanbul.js"
  data-sap-ui-cover-only="GherkinWithOPA5/"
  data-sap-ui-cover-never="sap/ui/">
</script>
```

For more information, see the [documentation](https://github.com/UI5/cli-extensions/tree/main/packages/middleware-code-coverage).



<a name="loio20737a4c64f448d2af9b9745fbe5d762__section_k3n_wz4_fwb"/>

## Blanket.js \(Legacy\)

`Blanket.js` offers code coverage and instrumentation for JavaScript up to ECMAScript Language Specification 5. As of SAPUI5 version 1.113.0, code coverage measurement via [`Istanbul`](code-coverage-20737a4.md#loio20737a4c64f448d2af9b9745fbe5d762__section_ISTANBUL) is the recommended option.

```html
<script
  src="../../resources/sap/ui/qunit/qunit-coverage.js"
  data-sap-ui-cover-only="GherkinWithOPA5/"
  data-sap-ui-cover-never="sap/ui/">
</script>
```

For more information, see the documentation for `Blanket.js` on GitHub. Keep in mind that the attribute name is slightly different in the SAPUI5 implementation \(`data-sap-ui-cover-only` instead of `data-cover-only`\).

**Related Information**  


[`Blanket.js` Documentation on GitHub](https://github.com/alex-seville/blanket/blob/-/docs/intermediate_browser.md)

[`UI5 Middleware Code Coverage` repo on GitHub](https://github.com/UI5/cli-extensions/blob/-/packages/middleware-code-coverage)

[Code Coverage Measurement](code-coverage-measurement-7ef3242.md "You can measure the code coverage either via HTML or JavaScript code using a code coverage tool like Istanbul (default) or Blanket.js (legacy).")

