<!-- loio291c9121e6044ab381e0b51716f97f52 -->

# Testing

In this tutorial we will test application functionality with the testing tools that are delivered with SAPUI5. At different steps of this tutorial you will write tests using QUnit, OPA5, and the OData V2 mock server. Additionally, you will learn about testing strategies, Test Driven Development \(TDD\), and much more.

For the application features that we add, we focus on writing clean and testable code with the goal of having good test coverage and a high quality app. We will create a simple full screen app that we will extend with more tests and features throughout the tutorial.

Imagine the following situation: You and your development team take over a bulletin board prototype that will be shipped as a product soon. A bulletin board typically consists of functionality to browse posts and add own offers to the board. However, the prototype only covers a minimum set of features and tests so far.

With this very minimalistic app as a starting point, we have a good foundation and we can inspect the most important testing functionality. Furthermore, we want to implement new features for the app that were requested by the product team using Test Driven Development and best practices for writing testable code and testing SAPUI5 apps.

So why do we do all this? Obviously, writing tests and testable code does not come without effort. Well, we want to ensure the implementation of a high quality app by having decent test coverage of our application logic. And we check that our code does not break by running the automated tests whenever we change something or when we upgrade to a newer version of the SAPUI5 framework or other external libraries. Additionally, we can find bugs proactively and do not need excessive manual testing anymore so the efforts definitely pay off. Also, when we decide to refactor something in the future, we can easily verify that the features of the app are still working as expected.

There are a lot more reasons and many small details that we will address throughout this tutorial. You can work yourself through the steps by applying the code deltas individually or by downloading the samples for each step and playing around with it.



## Preview

 ![](images/Tutorial_Testing_Overview_89001ea.png) 



## Prerequisites

In addition to the prerequisites that are presupposed for all our tutorials \(see [Prerequisites](get-started-setup-tutorials-and-demo-apps-8b49fc1.md#loio8b49fc198bf04b2d9800fc37fecbb218__tutorials_prerequisites)\), you should also be familiar with the basics of JavaScript unit testing with QUnit. Have a look at the official QUnit documentation to make yourself familiar with basic testing knowledge. Steps 27 to 29 of the Walkthrough tutorial also cover the test setup in an app that is used throughout this tutorial.

If you want to automate the test execution using a test runner, you can set this up as described under [Test Automation](../04_Essentials/test-automation-ae44824.md#loioae448243822448d8ba04b4784f4b09a0).



> ### Tip:  
> You don't have to do all tutorial steps sequentially, you can also jump directly to any step you want. Just download the code from the previous step, and start there.
> 
> You can view and download the files for all steps in the Demo Kit at [Testing Apps](https://ui5.sap.com/#/entity/sap.m.tutorial.testing). Copy the code to your workspace and make sure that the application runs by calling the `webapp/test/test.html` file. Depending on your development environment you might have to adjust resource paths and configuration entries.
> 
> For more information check the following sections of the tutorials overview page \(see [Get Started: Setup, Tutorials, and Demo Apps](get-started-setup-tutorials-and-demo-apps-8b49fc1.md)\):
> 
> -   [Downloading Code for a Tutorial Step](get-started-setup-tutorials-and-demo-apps-8b49fc1.md#loio8b49fc198bf04b2d9800fc37fecbb218__tutorials_download)
> 
> -   [Adapting Code to Your Development Environment](get-started-setup-tutorials-and-demo-apps-8b49fc1.md#loio8b49fc198bf04b2d9800fc37fecbb218__tutorials_adaptation)

1.  [Step 1: Overview and Testing Strategy](step-1-overview-and-testing-strategy-ab134ef.md "In this step, we will take a look at the prototype and define the test strategy for
		our app. The prototype already contains the infrastructure for unit and integration testing
		and a minimum set of tests and features.")  
In this step, we will take a look at the prototype and define the test strategy for our app. The prototype already contains the infrastructure for unit and integration testing and a minimum set of tests and features.
2.  [Step 2: A First Unit Test](step-2-a-first-unit-test-b81736e.md "In this step we will analyze the unit testing infrastructure and write a first unit
		test. ")  
In this step we will analyze the unit testing infrastructure and write a first unit test.
3.  [Step 3: Adding the Price Formatter](step-3-adding-the-price-formatter-2bf4892.md "We will now take care of the implementation of the price formatter and make sure that
		the tests we wrote in the previous step run successfully. ")  
We will now take care of the implementation of the price formatter and make sure that the tests we wrote in the previous step run successfully.
4.  [Step 4: Testing a New Module](step-4-testing-a-new-module-a5bb7a6.md "In the first unit test we have just extended the formatters module with a new
		function. Now we will write a unit test that will test the functionality of an entirely new
		module. ")  
In the first unit test we have just extended the formatters module with a new function. Now we will write a unit test that will test the functionality of an entirely new module.
5.  [Step 5: Adding a Flag Button](step-5-adding-a-flag-button-69a25bf.md "Now that we have implemented the conversion tests, we add the corresponding
		functionality and show the button to flag a post in the app. The design team has specified
		that the flag feature should be implemented with a toggle button that has a flag
		icon.")  
Now that we have implemented the conversion tests, we add the corresponding functionality and show the button to flag a post in the app. The design team has specified that the flag feature should be implemented with a toggle button that has a flag icon.
6.  [Step 6: A First OPA Test](step-6-a-first-opa-test-1b47457.md "A bulletin board may contain many posts. We expect to have a high data load once it
		is officially released. Then, there might be performance issues and long loading times if we
		display all entries at the same time. Therefore we will introduce a feature that limits the
		initial display to 20 items. The user can then click on a more button to view more items. As
		with the unit test, we start by writing an integration test for this feature and then add
		the application functionality later.")  
A bulletin board may contain many posts. We expect to have a high data load once it is officially released. Then, there might be performance issues and long loading times if we display all entries at the same time. Therefore we will introduce a feature that limits the initial display to 20 items. The user can then click on a more button to view more items. As with the unit test, we start by writing an integration test for this feature and then add the application functionality later.
7.  [Step 7: Changing the Table to a Growing Table](step-7-changing-the-table-to-a-growing-table-016e0d4.md "Let’s switch back to developing and add the missing feature for the test we
		implemented in the previous step. We will simply change the table to a growing table as this
		is a basic feature of the table. This will display a trigger at the end of the table that
		the user can click on to display more items.")  
Let’s switch back to developing and add the missing feature for the test we implemented in the previous step. We will simply change the table to a growing table as this is a basic feature of the table. This will display a trigger at the end of the table that the user can click on to display more items.
8.  [Step 8: Testing Navigation](step-8-testing-navigation-10592af.md "So far, we have a list of posts on the home page of the app. But typically, a
			post comes with more details that should be displayed on a separate detail page. We call
			it the post page because it displays details of a post. In this step we will introduce a new journey to test the post page. We write
			tests that trigger typical navigation events with OPA. Testing navigation greatly helps
			in reducing manual testing efforts as it covers a lot of testing paths. It is good
			practice to cover every view of your application with at least one test, since OPA will
			check if an exception is thrown. In this way you can detect critical errors very
			fast.")  
So far, we have a list of posts on the home page of the app. But typically, a post comes with more details that should be displayed on a separate detail page. We call it the post page because it displays details of a post. In this step we will introduce a new journey to test the post page. We write tests that trigger typical navigation events with OPA. Testing navigation greatly helps in reducing manual testing efforts as it covers a lot of testing paths. It is good practice to cover every view of your application with at least one test, since OPA will check if an exception is thrown. In this way you can detect critical errors very fast.
9.  [Step 9: Adding the Post Page](step-9-adding-the-post-page-4a9f063.md "Now that we have covered all kinds of tests for navigation, we introduce our
			Post page that shows details of a post in the bulletin board. To
		achieve this, we have to introduce a new view/controller pair and adjust the routing of the
		application.")  
Now that we have covered all kinds of tests for navigation, we introduce our *Post* page that shows details of a post in the bulletin board. To achieve this, we have to introduce a new view/controller pair and adjust the routing of the application.
10. [Step 10: Test Suite and Automated Testing](step-10-test-suite-and-automated-testing-07c97a2.md "In this step, we will step back from our tests and application features that we have
		implemented so far and add another important piece of test code: The test suite page. A test
		suite can execute multiple tests and collect the results. This comes in handy for automatic
		tools in a continuous integration process.")  
In this step, we will step back from our tests and application features that we have implemented so far and add another important piece of test code: The test suite page. A test suite can execute multiple tests and collect the results. This comes in handy for automatic tools in a continuous integration process.
11. [Step 11: Testing User Input](step-11-testing-user-input-92959b1.md "In this step, we will write a test that simulates a user search. We will enter the
		search string into the search field and check if the correct results are shown in worklist
		table.")  
In this step, we will write a test that simulates a user search. We will enter the search string into the search field and check if the correct results are shown in worklist table.
12. [Step 12: Adding a Search](step-12-adding-a-search-0c270b4.md "We now add a search field to our bulletin board and define a filter that represents
		the search term. This is done similarly as in step 24 of the Walkthrough
		tutorial.")  
We now add a search field to our bulletin board and define a filter that represents the search term. This is done similarly as in step 24 of the Walkthrough tutorial.
13. [Step 13: Testing User Interaction](step-13-testing-user-interaction-19ccd47.md "In this step we want to write a test that simulates user interaction with an icon tab
		bar. We want to change the tab and check if the correct content is shown.")  
In this step we want to write a test that simulates user interaction with an icon tab bar. We want to change the tab and check if the correct content is shown.
14. [Step 14: Adding Tabs](step-14-adding-tabs-6e9c6bd.md "We want to display statistics for posts, for example, how many times it was viewed. To
      achieve this, we implement an icon tab bar with an Info tab and a
         Statistics tab. The existing content should be placed on the
         Info tab and the view count on the Statistics
      tab.")  
We want to display statistics for posts, for example, how many times it was viewed. To achieve this, we implement an icon tab bar with an *Info* tab and a *Statistics* tab. The existing content should be placed on the *Info* tab and the view count on the *Statistics* tab.
15. [Step 15: Writing a Short Date Formatter Using TDD](step-15-writing-a-short-date-formatter-using-tdd-bc4114a.md "It's now time to improve the content of the Info tab. We want
		to see the Posted At date in a formatted way. Based on the age of the
		post, we either display the time, a textural representation of the day, or the date only. ")  
It's now time to improve the content of the *Info* tab. We want to see the *Posted At* date in a formatted way. Based on the age of the post, we either display the time, a textural representation of the day, or the date only.
16. [Step 16: Adding the Date Formatter](step-16-adding-the-date-formatter-2ca583d.md "Our formatter does its job, but it is not yet used. In this step we will use
		it.")  
Our formatter does its job, but it is not yet used. In this step we will use it.

**Related Information**  


[Testing](../04_Essentials/testing-7cdee40.md "SAPUI5 provides several testing options, like to unit and integration tests and the OData V2 mock server.")

[QUnit Home Page](https://qunitjs.com/)

