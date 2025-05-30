<!-- loio02ef39f70a244c7cb0cb4d65be6ae396 -->

# Frequently Asked Questions



## How can I avoid timeouts?

There are two situations where you might have trouble with timeouts:

-   When loading your app

-   When trying to find SAPUI5 controls in the app


When loading the app, the OPA5 command can accept a parameterdefining the number of seconds to wait for the application to load.

```js
var opa5 = new Opa5();
opa5.iStartMyAppInAFrame("path/to/your/app.html", 30); // wait time in seconds
```

When trying to find SAPUI5 controls in the app, you can add the following settings to cause OPA5 to wait a different amount of time for a control to become available on the screen. You also need to set the QUnit timeout \(to a time equal to or greater than the OPA5 setting\), otherwise QUnit might give up early:

```js
sap.ui.test.Opa.config.timeout = 20; // wait time in seconds
QUnit.config.testTimeout = 20000; // wait time in milliseconds
```



## Who should write feature files?

Ideally, the Product Owner develops feature files together with developers. Depending on how familiar Product Owners are with the tool, they can upload the feature files directly to source control, or let the developers do the upload.



## How can I avoid inadequacies when writing the step definitions?

You may find that there is a gap between what the Product Owner has written, and the information that the developer requires to implement an integration test. Developers can modify the feature file to enable testing, as long as they check back with the Product Owner to ensure that the feature file is still correct.



## Every time the Product Owner modifies the feature file, it breaks the tests How can I avoid this?

Actually, this is the point of Gherkin. When modifications to a feature file are uploaded to source control, we expect this to break existing tests, since the application's expected behavior has changed — but the application itself has not changed yet. Gherkin is forcing the application to stay in sync with the feature file. Consider that this also encourages you to be more honest about accepting new feature changes into your product — and the amount of extra work that this entails. We recommend that you use your formal code review process to allow developers to change the application and fix the tests, and then submit all the new code together with the feature file changes at the same time into the main branch.

