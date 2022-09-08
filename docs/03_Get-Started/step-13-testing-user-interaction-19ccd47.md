<!-- loio19ccd473c9a14c2ab7529303a2232d2c -->

# Step 13: Testing User Interaction

In this step we want to write a test that simulates user interaction with an icon tab bar. We want to change the tab and check if the correct content is shown.



## Preview

   
  
<a name="loio19ccd473c9a14c2ab7529303a2232d2c__fig_r1j_pst_mr"/>Test interacting with an icon tab bar

 ![](images/Tutorial_Testing_Step_13_c76a7b5.png "Test interacting with an icon tab bar") 



## Coding

You can view and download all files in the *Samples* in the Demo Kit at [Testing - Step 13](https://ui5.sap.com/#/entity/sap.m.tutorial.testing/sample/sap.m.tutorial.testing.13).



## test/integration/journeys/PostJourney.js

```js
sap.ui.define([
	"sap/ui/test/opaQunit",
	"./pages/Worklist",
	"./pages/Browser",
	"./pages/Post"
], function (opaTest) {
	"use strict";
	…
	opaTest(…) {
		// Actions
			When.onTheBrowser.iPressOnTheForwardButton();
			
			// Assertions
			Then.onThePostPage.theTitleShouldDisplayTheName("Jeans");
		});
		opaTest("Should select the statistics tab", function (Given, When, Then) {
			// Actions
			When.onThePostPage.iPressOnTheTabWithTheKey("statistics");
			// Assertions
			Then.onThePostPage.iShouldSeeTheViewCounter()
				.and.iTeardownMyApp();
		});
```

We extend the `PostJourney.js` file with a new test. It is important to move the `Teardown` to the last test, otherwise our app would be removed and the test would not be able to find the *Statistics* tab.

Delete `.and.iTeardownMyApp();` from the last test in the file and add the new test case



## test/integration/pages/Post.js

```js
sap.ui.define([
	'sap/ui/test/Opa5',
	'sap/ui/test/matchers/Properties',
	'sap/ui/test/actions/Press'
], function (Opa5, Properties, Press) {
	"use strict";
 
		var sViewName = "Post";
 
		Opa5.createPageObjects({
			onThePostPage: {
				actions: {
					iPressTheBackButton: function () {
						return this.waitFor({
							id: "page",
							viewName: sViewName,
							actions: new Press(),
							errorMessage: "Did not find the nav button on object page"
						});
					},
					iPressOnTheTabWithTheKey: function (sKey) {
						return this.waitFor({
							controlType: "sap.m.IconTabFilter",
							viewName : sViewName,
							matchers: new Properties({
								key: sKey
							}),
							actions: new Press(),
							errorMessage: "Cannot find the icon tab bar"
						});
 
					}
				},
				assertions: {
					theTitleShouldDisplayTheName: function (sName) {
						return this.waitFor({
							id: "objectHeader",
							viewName: sViewName,
							matchers: new Properties({
								title: sName
							}),
							success: function (oPage) {
								Opa5.assert.ok(true, "was on the remembered detail page");
							},
							errorMessage: "The Post " + sName + " is not shown"
						});
					},
 
					iShouldSeeTheViewCounter: function () {
						return this.waitFor({
							id: "viewCounter",
							viewName: sViewName,
							success: function () {
								Opa5.assert.ok(true, "The view counter was visible");
							},
							errorMessage: "The view counter could not be found"
						});
					}

				}
			}
		});
	});
```

To change the selected tab, you set the selected key of the `sap.m.IconTabBar`. We have looked up the `setSelectedKey` function in the API documentation of the control, so we know that we can write a `waitFor` statement that makes use of it.

There is no uniform way of triggering user interactions with OPA. In most cases it is sufficient to use the API of the controls, e.g. setting a value. Note however, that calling the API methods of a control might not trigger the same events as when pressing the control.

In the `assert` part we add a new assertion for checking the visibility of a control with the ID `viewCounter`. Each `waitFor` statement checks if the control is rendered and visible unless you set `visible: false`. Therefore, we only use the `ok(true)` assertion in the success handler of the `waitFor` statement since QUnit expects at least one assertion for a test.



## Conventions

-   Actions in OPA never contain a QUnit assertion


**Parent topic:** [Testing](testing-291c912.md "In this tutorial we will test application functionality with the testing tools that are delivered with SAPUI5. At different steps of this tutorial you will write tests using QUnit, OPA5, and the OData V2 mock server. Additionally, you will learn about testing strategies, Test Driven Development (TDD), and much more.")

**Next:** [Step 12: Adding a Search](step-12-adding-a-search-0c270b4.md "We now add a search field to our bulletin board and define a filter that represents the search term. This is done similarly as in step 24 of the Walkthrough tutorial.")

**Previous:** [Step 14: Adding Tabs](step-14-adding-tabs-6e9c6bd.md "We want to display statistics for posts, for example, how many times it was viewed. To achieve this, we implement an icon tab bar with an Info tab and a Statistics tab. The existing content should be placed on the Info tab and the view count on the Statistics tab.")

**Related Information**  


[API Reference: `sap.m.IconTabBar`](https://ui5.sap.com/#/api/sap.m.IconTabBar)

[API Overview and Samples: `sap.m.IconTabBar` ](https://ui5.sap.com/#/entity/sap.m.IconTabBar)

