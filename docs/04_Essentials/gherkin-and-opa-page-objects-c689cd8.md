<!-- loioc689cd83e2524251a75d694b09263d07 -->

# Gherkin and OPA Page Objects

Gherkin is compatible with the concept of OPA5 page objects.

OPA5 page objects are a method for architecting integration testing to make test components more intuitive and reusable. For more information about OPA page objects, see [Structuring OPA Tests With Page Objects](structuring-opa-tests-with-page-objects-f2f843d.md).

> ### Note:  
> You can find a sample implementation in the *Samples* in the Demo Kit at [Using Gherkin with OPA5 Page Objects](https://ui5.sap.com/#/entity/sap.ui.test.Opa5/sample/sap.ui.core.sample.gherkin.GherkinWithPageObjects).

To make Gherkin work with page objects, you should load your OPA5 page objects in the HTML bootstrap file, as shown in the sample. The only adaptation you need to make when starting the Gherkin testing is to add the parameter `generateMissingSteps` when calling `opa5TestHarness.test`:

```js
opa5TestHarness.test({
  featurePath: "GherkinWithPageObjects/Requirements1",
  generateMissingSteps: true
});

```

This signals to Gherkin that if it cannot find a matching step definition in the steps file then it should try to use an OPA5 page object call instead. In the example above, no steps file is specified, which means that Gherkin will expect to make a page object call for each test step. You could also take a hybrid approach where each test step in the feature file either matches a Gherkin step definition or executes an OPA5 page object call. In addition, you can combine OPA5 page object calls with a Gherkin data table or scenario outline to achieve powerful results \(you can see both options in the sample\). Here is a sample feature file scenario that takes advantage of page objects:

```
#!featureScenario: Page 1 journey
  When on the overview: I press on "Go to Page 1"
  Then on page 1: I should see the page 1 text

```

Use the Gherkin console logs to help you debug your OPA5 page object calls.

> ### Caution:  
> Chaining OPA5 page objects, for example, `When.onTheOverview.iPressOnGoToPage1().and.onPage1.iShouldSeeThePage1Text()` is currently **not** supported in Gherkin feature files.

