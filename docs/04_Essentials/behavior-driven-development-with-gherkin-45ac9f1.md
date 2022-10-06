<!-- loio45ac9f19d9414b30b121c6e00f57433c -->

# Behavior-driven Development with Gherkin

A software development process driven by app behavior.

With behavior-driven development \(BDD\), you as a developer start with a user story that defines the business value that the developed app should have. Next, you write a test that verifies the new functionality \(this test initially fails\). Finally, you write the needed functionality and your test passes. Gherkin is a test framework that supports this approach.

At first, as you are learning BDD, it will take a long time to implement new tests. Resist the temptation to abandon automated testing. The most important software development phase for successful software is the maintenance phase. Automated tests are the best way to ensure an effective maintenance phase, and help ensure that the code quality remains high over time.

It's true that when you first try automated testing it might take a long time, but even this first attempt will be worthwhile and pay dividends later. In your future projects, when you implement your tests much faster, your initial investment in learning how to do integration testing will really pay off.

One good way to ensure that you get the most value for your investment of time into automated testing is to ensure that you test the right things. Integration testing is best for testing the main path of the major business scenarios. These are what are called "face-saving tests", in the sense that you will lose face if you try to deliver the software when these major business scenarios are failing. Hence, integration tests are a great way to do a quick and painless smoke test every time you commit a change to your software, to ensure that you haven't broken anything important.

Since writing integration tests can be time-consuming, it's better to use unit testing to test all of the nuances and failure cases of your software. Unit tests are cheap and easy to write, and are better suited to achieving full test coverage for the software.



## Gherkin

Gherkin is written in JavaScript and is fully compatible with SAPUI5, OPA, and QUnit. It is based on the “cucumber” tool.

The advantages of using Gherkin are:

-   You write executable specifications that are easy to understand and that allow the easy generation of integration tests.

-   Product specification and documentation are **always up to date**; they evolve during the development project.

-   Single source of truth: Reduce communication errors across your development team, because the product owner, developers, and testers are all working from the same specification.

-   Maximize the business value you get out of the time spent writing tests, and keep your focus on the customer and their requirements.


The Gherkin library contains the following parts:

-   Feature file

    Software specification written in Gherkin syntax. Feature files are human-readable specifications that are also machine-readable. Features are composed of **test scenarios**, which are themselves composed of **test steps**.

    ```
    #!featureFeature: Wearing sunscreen stops skin cancer
    
      Scenario: Apply sunscreen
        Given the sun is dangerous
        When I apply sunscreen
        Then I protect my skin
    ```

-   Steps file

    Translates the feature file into something a computer can understand and execute. The steps file also contains the tests to be executed to ensure that the software behaves according to its specification. The main elements of a steps file are called **step definitions**.

    ```js
    this.register(/^I protect my skin$/i, function() {
      this.assert.assertEqual(this.mySkin, 'protected');
    });
    ```

-   Test harness

    Stitches together the feature file and steps file and executes runtime tests on the result using a test framework such as QUnit.

-   `DataTableUtils`

    Convenience library for handling data tables and string normalization.


**Related Information**  


[cucumber Home Page](https://cucumber.io/)

[Gherkin documentation on GitHub](https://github.com/cucumber/cucumber/wiki/Gherkin)

