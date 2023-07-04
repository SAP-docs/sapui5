<!-- loio22f175e7084247bc896c15280af9d1dc -->

# Getting Started with OPA5

The following section explains step-by-step how to easily write tests for SAPUI5 apps.

We assume a simple app that displays a button on the page after a random time between 0 and 10 seconds. After pressing the button, the text on the button changes. Again, this may take 0 to 10 seconds.

This simulates the behaviour of many SAPUI5 apps: Depending on user actions and model changes, controls change after some time. How can we easily test these SAPUI5 apps without having to write complicated tests that know a lot about the implementation of the app?



## Creating an Asynchronous App

First, we create a very simple view with an invisible button with *Press me* as the button text:

```xml

<mvc:View controllerName="view.Main"
  xmlns="sap.m"
  xmlns:mvc="sap.ui.core.mvc">
  <App>
    <Page>
      <headerContent>
        <Button id="pressMeButton" text="Press me" press="onPress" visible="false"/>
      </headerContent>
    </Page>
  </App>
</mvc:View>

```

We display the button in the controller after 0 to 10 seconds. On press, we change the text.

```js
sap.ui.define(["sap/ui/core/mvc/Controller"], function(Controller) {
    "use strict";
    return Controller.extend("view.Main", {
        onInit: function() {
          
            var that = this;
            window.setTimeout(function() {
                that.byId("pressMeButton").setVisible(true);
            }, Math.random() * 10000);
        },


      onPress: function() {
            this.byId("pressMeButton").setText("I got pressed");
      }

    });
   }, true);

    // "Controller" required from module "sap/ui/core/mvc/Controller"
   Controller.create({
    name: "view.Main"
});
```

Now how can we test this app without having to do a lot of mocking or writing of cryptic code?



## Creating an OPA Test

When we write tests, we try to write it in a way that everyone can immediately understand what is done and tested with this test:

```js
sap.ui.require([
  "sap/ui/test/Opa5",
    "sap/ui/test/opaQUnit",
    "sap/ui/test/actions/Press",
    "sap/ui/test/matchers/PropertyStrictEquals"
], function (Opa5, opaQUnit, Press, PropertyStrictEquals) {

  opaQUnit("Should press a Button", function (Given, When, Then) {
        // Arrangements
        Given.iStartMyApp();

        //Actions
        When.iPressOnTheButton();

        // Assertions
        Then.theButtonShouldHaveADifferentText();
    });
});
```

If you use `opaQunit`, OPA gives you the following three objects in your QUnit:

-   Given = arrangements
-   When = actions
-   Then = assertions



## Given: Defining Arrangements

Let's start by defining arrangements. In the following example, we assume that the app runs in a page called `index.html`. Our OPA test is located in the `test/opa5.html` folder.

We define a relative path pointing to the `index.html` of our application under `test ../index.html - ../`. This means that you go up one directory relative to the current directory:

```js
// "Opa5" required from "sap/ui/test/Opa5"
var arrangements = new Opa5({
    iStartMyApp : function () {
        return this.iStartMyAppInAFrame("../index.html");
    }
});
```

This is simple because we already programmed our app and just need to start it. The `return this` is needed for chaining the statements.



## When: Defining Actions

We now give OPA the ID and the `viewName` of the control we are looking for. OPA waits until the element is present in the respective view. OPA checks whether it is visible. After OPA has found the button, it invokes the `Press` action. If no button is found, we specify an error message so we know which `waitFor` went wrong.

```js
var actions = new Opa5({
    iPressOnTheButton : function () {
        return this.waitFor({
            viewName : "Main",
            id : "pressMeButton",
            actions : new Press(),
            errorMessage : "did not find the Button"
        });
    }
});

```



## Then: Defining Assertions

After clicking the button, we want to check if the text has changed. For this, we can use matchers to check if the button we are searching for matches our conditions. We want to be sure that the text property of the button is equal to "I got pressed".

```js
var assertions = new Opa5({
    theButtonShouldHaveADifferentText : function () {
        return this.waitFor({
            viewName : "Main",
            id : "pressMeButton",
            matchers : new PropertyStrictEquals({
                name : "text",
                value : "I got pressed"
            }),
            success : function (oButton) {
                Opa5.assert.ok(true, "The button's text changed to: " + oButton.getText());
            },
            errorMessage : "did not change the Button's text"
        });
    }
});
```



## Running the Test

We have now defined all statements and must now add them to the `OpaConfig` as follows:

```js
// "Opa5" required from "sap/ui/test/Opa5"
Opa5.extendConfig({
    arrangements : arrangements,
    actions : actions,
    assertions : assertions,
    viewNamespace : "view."
});

```

The `viewNamespace` is very important for finding the correct view. As you probably do not want to set this in every single `waitFor`, a default is provided. You can now launch the test page and the OPA test should run. If everything worked, you get the following result:

![](images/Testing_OPA_Success_New_b7d6ee3.jpg) 

For more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.test) and the [Samples](https://ui5.sap.com/#/entity/sap.ui.test.Opa5). 



## OPA Startup



### **Starting a UIComponent**

You can use a UIComponent to run your OPA5 tests. To do this, you have to call the `iStartMyUIComponent` function on the OPA5 instance with an object that contains at least the name of your UIComponent \(see API documentation about `sap/ui/component` for all possible parameters\), for example:

```js
// "Opa5" required from "sap/ui/test/Opa5"
new Opa5().iStartMyUIComponent({
    componentConfig: {
        name: "samples.components.button"
    }
});

```

Your UIComponent will now run in the same window as your OPA5 Tests. In addition, you can append a new hash value to the browser URL, for example:

```js
// "Opa5" required from "sap/ui/test/Opa5"
new Opa5().iStartMyUIComponent({
    componentConfig: {
        name: "samples.components.button"
    } ,
    hash: "newHashValue"
});
```

This is very helpful if you want to start your tests with a specific target.

> ### Note:  
> Use the `iStartMyUIComponent` approach instead of an iFrame if you want your tests to run faster \(thanks to all resources being loaded at once\), make debugging easier \(by not having to switch between different frames\), and if you want to have full control over the mock server \(e.g. Start and Stop time\).

> ### Note:  
> Please note that OPA5 tests can only run for a single UIComponent. You first have to tear down the current UIComponent before starting an OPA5 test for another UIComponent, for example:
> 
> ```js
> // "Opa5" required from "sap/ui/test/Opa5"
> new Opa5().iTeardownMyApp();
> // or
> new Opa5().iTeardownMyUIComponent();
> ```



### **Starting an App in an iFrame**

You can run the app being tested in an iFrame. You can start only one iFrame at a time. An error will be thrown if you try to start an iFrame when one is already launched or if you try to teardown the iFrame before it is started. If an iFrame element is already present on the page, it will be used. The iFrame and test window must be in the same domain. For example, if you have the `test.html` file next to the `index.html` file, you can start your app with the following code:

```js
// "Opa5" required from "sap/ui/test/Opa5"
Opa5().iStartMyAppInAFrame("index.html?responderOn=true");
```

You can remove the iFrame using one of the following methods:

```js
// "Opa5" required from "sap/ui/test/Opa5"
new Opa5().iTeardownMyApp();
// or
new Opa5().iTeardownMyAppFrame();
```

 For more information, see the [API Reference: `Opa5`](https://ui5.sap.com/#/api/sap.ui.test.Opa5). 

Starting the app can be a slow operation so it is not recommended to do this for every test. However, it is good practice to group tests in modules and restart the app in every module to enable faster debugging of larger suites.

Loading an iFrame is significantly slower than loading a component. It requires a separate page, in which the mocked app is started in an SAP Fiori Launchpad sandbox. This is useful as it allows debugging of unmocked data requests and mock app issues in isolation from the OPA test. It is easy to migrate to the component launcher once the test suite grows and the app is proven to be correctly mocked.

SAPUI5 and OPA code \(for example, autoWaiter, UI5 plugin, QUnitUtils\) is injected asynchronously in the iFrame on launch. The iFrame will be considered launched when all of the scripts are loaded. These scripts will communicate the app state to the test code. Errors in the iFrame will also be logged in the test. If OPA code is already loaded by the app, the newly injected code will be used instead to ensure version compatibility.

OPA provides several getters that give access to certain properties of the context in which the app is loaded. By default, the getters return the test window's objects but if an iFrame is used, they will return the iFrame's objects. You need to keep the context in mind if you want to manipulate app data in your test:

```js
// "Opa5" required from "sap/ui/test/Opa5"

// returns the body of the app window wrapped in a jQuery object
Opa5.getJQuery()("body");
// returns the SAPUI5 OPA plugin object of the app window
Opa5.getPlugin();
// returns the SAPUI5 core interface of the app window
Opa5.getWindow().sap.ui.getCore();
// returns the Date in the app context
Opa5.getWindow().Date();
// the following test code will return false if the app is started in an iFrame
new Opa5.getWindow().Date() instanceof Date
```

