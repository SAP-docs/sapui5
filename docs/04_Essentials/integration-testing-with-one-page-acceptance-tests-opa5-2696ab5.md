<!-- loio2696ab50faad458f9b4027ec2f9b884d -->

# Integration Testing with One Page Acceptance Tests \(OPA5\)

OPA5 is an API for SAPUI5 controls. It hides asynchronicity and eases access to SAPUI5 elements. This makes OPA especially helpful for testing user interactions, integration with SAPUI5, navigation, and data binding.

The OPA5 library is JavaScript-based. This means that you can write your tests in the same language in which your app is written. This has the following advantages:

-   Quick and easy access to JavaScript functions

-   Easy ramp-up as it can be used with any JavaScript unit test framework, such as QUnit or Jasmine

-   Using the same runtime enables debugging

-   Good SAPUI5 integration

-   Feedback within seconds makes it possible to execute tests directly after a change

-   Asynchronicity is handled with polling instead of timeouts, which makes it faster

-   Enables test-driven development \(TDD\)


Developers write OPA tests during app development. The test-driven development \(TDD\) results in less fragile tests, because the app is better isolated and supports less fragile APIs for testing:

-   It follows the arrange act assert pattern \(corresponds to given when then\), which improves readability and understanding of the test cases.

-   It is easy to run on mobile devices as no plugins/apps are needed; you can as easily just run it in the browser.

-   Saves time for the developer as regressions decrease


In short: Writing acceptance tests with OPA5 is very easy – Give it a try!



## Restrictions of OPA5

Note the following restrictions of OPA:

-   Screen capturing
-   Testing across more than one page
-   Remote test execution
-   End-to-end tests are not recommended with OPA due to authentication issues and fragility of test data

**Related Information**  


[Browser and Platform Support](../02_Read-Me-First/browser-and-platform-support-74b59ef.md "Here you can find information on the browser and platform support for the SAPUI5 libraries on iOS, Android, macOS, and Windows platforms.")

