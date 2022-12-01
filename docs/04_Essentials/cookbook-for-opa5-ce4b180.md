<!-- loioce4b180d97064ad088a901b53ed48b21 -->

# Cookbook for OPA5

Advanced topics and best practices for OPA tests.



## Executing a Single Statement After Other `waitFors` are Done

If you skip all parameters except for the `success` parameter, you can execute your code after the other `waitFors` are done. Since there is no `check` function, OPA runs directly to `success`.

```js

iChangeTheHashToTheThirdProduct : function () {
        return this.waitFor({
            success : function () {
                sap.ui.test.Opa5.getWindow().location.hash = "#/Products(2)";
            }
        });
    },
```



## Passing a Parameter from One `waitFor` to Another

To check special conditions, for example, how one control relates to another control, you have to pass a control found in one `waitFor` statement as input for another `waitFor` statement. The following two options exist:

-   Storing the control in a variable in the outer scope: Use this option if you have a common outer scope, like the same functions, or the same page object file.

-   Storing the control in the OPA context: Use this option if you have to pass the parameter, for example, across some page objects.


```js

iDoSomething: function () {
        var oControl;
        this.waitFor({
            id : "myControlId",
            success : function (oCtrl) {
                //store control in outer scope
                oControl = oCtrl;
                
                //as alternative you could store the control in the Opa context
                sap.ui.test.Opa.getContext().control = oCtrl;
            }
        });
        return this.waitFor({
            controlType : "some.other.control"
            check: function (aControlsFromThisWaitFor) {
                //now you can compare oControl with aControlsFromThisWaitFor

                //or you can compare sap.ui.test.Opa.getContext().control with aControlsFromThisWaitFor
            }
        });
    },

```



<a name="loioce4b180d97064ad088a901b53ed48b21__section_abh_nmk_b1b"/>

## Application Parameters

As of version 1.48, you can easily specify URL parameters that are relevant for the application being tested. Simply place them in the `appParams` object under `Opa5.extendConfig()`. Only primitive types are supported. The provided object is serialized to URL search string and all parameters are available to the application being tested.

```js
Opa5.extendConfig({
    appParams: {
        "key": "value"
    }
});
```

When the application is started with `Opa5.iStartMyAppInAFrame()`, its parameters are appended to the application URL as provided in the first parameter. Application parameters overwrite any duplicated string in the URL that is given as first parameter of `iStartMyAppInAFrame()`. Alternatively, when `Opa5.iStartMyUIComponent()` is used, the URL parameters are appended to the current URL as the component is started in the same browser window. On `Opa5.iTeardownMyApp()`, the application parameters are cleared from the current URL.

For more details, see the *API Reference* for [`Opa5`](https://ui5.sap.com/#/api/sap.ui.test.Opa5) 



<a name="loioce4b180d97064ad088a901b53ed48b21__section_fr2_qqk_b1b"/>

## URL Parameters

As of version 1.48, OPA supports overwriting global configuration parameters for a single execution from URL. On startup, OPA parses `window.location.href` and extracts all search parameters starting with 'opa'. The prefix is removed and the resulting string has its first character changed to lower case. For example, the `?opaExecutionDelay=600` string in a URL sets the value of `executionDelay` to 600 ms. All OPA config parameters of primitive string and number types that are documented in `Opa.resetConfig()` could be overwritten.

All URL parameters that do not start with 'opa' are considered relevant for the application being tested and are passed to it. Application parameters from a URL always overwrite the application parameters provided in `Opa5.extendConfig()`.

For more details, see the *API Reference*: [`Opa5.extendConfig()`](https://ui5.sap.com/#/api/sap.ui.test.Opa/methods/sap.ui.test.Opa.resetConfig) and [`Opa.resetConfig()`](https://ui5.sap.com/#/api/sap.ui.test.Opa/methods/sap.ui.test.Opa.resetContext) 



<a name="loioce4b180d97064ad088a901b53ed48b21__section_ahv_ywt_sbb"/>

## Working with Message Toasts

A message toast is a small, non-disruptive popup for displaying information or success messages. Message toasts automatically disappear after a timeout unless the user moves the mouse over the message or taps on it.

To ensure stable execution of OPA5 tests which manipulate `messageToast` elements, it is recommended to set explicitly `autoWait` parameter to `false` only for the affected `waitFor` methods, as shown by the following example:

```js
this.waitFor({
        ...
        autoWait: false,
        ...
        }
    });
```

To retrieve a message toast control and manipulate it accordingly, use standard jQuery selectors with the help of the `check` parameter of OPA5 `waitFor` method, as `messageToast` elements cannot be retrieved by interaction with the SAPUI5 API.

Example:

```js
iShouldSeeMessageToastAppearance: function () {
                     return this.waitFor({
                        // Turn off autoWait
                        autoWait: false,
                        check: function () {
                            // Locate the message toast using its class name in a jQuery function
                            return Opa5.getJQuery()(".sapMMessageToast").length > 0;
                        },
                        success: function () {
                            Opa5.assert.ok(true, "The message toast was shown");
                        },
                        errorMessage: "The message toast did not show up"
                    });
                }
```



<a name="loioce4b180d97064ad088a901b53ed48b21__section_yy3_5gr_p2b"/>

## Working with Busy Controls

There are OPA5 rules that limit the ways you can use busy controls. Some OPA5 features prevent you from locating controls while they are busy. For example, actions require that the control is interactable and therefore not busy and `autoWait` ensures that all controls on the page are interactable. You can't test a control in its busy state when these features are enabled. You can always work with controls that are not busy as OPA5 either waits for them to become interactable \(and not busy\) or enforces no restrictions.

**The following table is a cheatsheet with the values for each OPA5 rule and the outcome for busy control testing:**


<table>
<tr>
<th valign="top" align="center">

 `OPA5.config` `autoWait` 



</th>
<th valign="top" align="center">

 `waitFor` actions



</th>
<th valign="top" align="center">

 `waitFor` `autoWait` 



</th>
<th valign="top" align="center">

verify busy control



</th>
</tr>
<tr>
<td valign="top" align="center">

✓



</td>
<td valign="top" align="center">

✓



</td>
<td valign="top" align="center">

any



</td>
<td valign="top" align="center">

X



</td>
</tr>
<tr>
<td valign="top" align="center">

✓



</td>
<td valign="top" align="center">

X



</td>
<td valign="top" align="center">

true / not modified



</td>
<td valign="top" align="center">

X



</td>
</tr>
<tr>
<td valign="top" align="center">

✓



</td>
<td valign="top" align="center">

X



</td>
<td valign="top" align="center">

false



</td>
<td valign="top" align="center">

✓



</td>
</tr>
<tr>
<td valign="top" align="center">

X



</td>
<td valign="top" align="center">

✓



</td>
<td valign="top" align="center">

any



</td>
<td valign="top" align="center">

X



</td>
</tr>
<tr>
<td valign="top" align="center">

X



</td>
<td valign="top" align="center">

X



</td>
<td valign="top" align="center">

false / not modified



</td>
<td valign="top" align="center">

✓



</td>
</tr>
<tr>
<td valign="top" align="center">

X



</td>
<td valign="top" align="center">

X



</td>
<td valign="top" align="center">

true



</td>
<td valign="top" align="center">

X



</td>
</tr>
</table>

A common scenario is asserting the busy state of a control. Testing whether a control is not busy is meaningless when `autoWait` is globally enabled. An example of testing for busyness with enabled `autoWait` can be found in the [OPA5 Samples](https://ui5.sap.com/#/entity/sap.ui.test.Opa5).



<a name="loioce4b180d97064ad088a901b53ed48b21__section_tbb_f1q_jkb"/>

## Working with Responsive Toolbars

A responsive toolbar can have overflowing content depending on the screen size. This content is moved to a popover, which can be opened by pressing a toggle button in the toolbar. A toggle button is displayed only when there's overflowing content. This is a problem for tests because they must only try to press the button when it's visible and interactable. One way to solve this is to always start the application being tested with a fixed screen size. Another way is to first look for toggle button with no visibility restrictions and then press on it only if it exists:

```js
this.waitFor({
    id: sToolbarId, // find the toolbar
    success: function (oToolbar) {
        this.waitFor({
        controlType: "sap.m.ToggleButton",
        visible: false, // look for ANY toggle button in the toolbar
        matchers: new Ancestor(oToolbar),
        success: function (aToggleButton) {
            if (aToggleButton[0].$().length) {
                // if the button exists, press on it
                this.waitFor({
                    controlType: "sap.m.ToggleButton",
                    matchers: new Ancestor(oToolbar),
                    actions: new Press()
                });
            } else {
            Opa5.assert.ok(true, "The toggle button is not present");
        }
    }
});
```



<a name="loioce4b180d97064ad088a901b53ed48b21__section_hfj_xbl_wfb"/>

## Deactivating Tests in Need of Adaptation

As of version 1.61, you can use the `opaTodo` and `opaSkip` methods in addition to `opaTest`. They are similar to `Qunit.todo` and `QUnit.skip` and have the same signatures as their QUnit counterparts.

In QUnit1, `opaTodo` is equivalent to `opaTest` as `QUnit.todo` is not yet available. In QUnit2, `opaTodo` will succeed if the test has at least one failing assertion or if it timeouts with either OPA5 or QUnit timeout.

If a test has to be adapted after recent changes, you have to disable it temporarily in order to have a successful build. A test which is commented out can easily be forgotten and its coverage value lost. `opaTodo` prompts you to uncomment the test once an adaptation is provided.

`opaTodo` and `opaSkip` are readily available to your test as globals.

Example:

```js
oOpa.waitFor({
    success: function () {
        Opa5.assert.ok(false, "Should not report test that needs adaptation");
    }
});
```

