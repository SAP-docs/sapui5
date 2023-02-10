<!-- loio7ef32428dc7c4c048a8d7e8de0a556fb -->

# Code Coverage Measurement

You can measure the code coverage for your test inside the `Control.qunit.html` page either via HTML or JavaScript code using a code coverage tool like `Istanbul` \(default\) or `Blanket.js` \(legacy\).



<a name="loio7ef32428dc7c4c048a8d7e8de0a556fb__section_q14_k2p_fwb"/>

## Istanbul

`Istanbul` enables code coverage and instrumentation for ES6+ files. It also supports branching and correctly identifies visited scopes in conditional clauses.

[UI5 Middleware Instrumentation](https://github.com/SAP/ui5-tooling-extensions/tree/main/packages/ui5-middleware-instrumentation) is a [UI5 server](https://sap.github.io/ui5-tooling/stable/pages/Server/) middleware that enables [`Istanbul`](https://istanbul.js.org/) in UI5 Tooling.

It is integrated into SAPUI5, but if you use UI5 Tooling's `ui5 serve`, you'd need to enable it in `ui5.yaml` and `package.json` of your project.

For more information, see the [documentation](https://github.com/SAP/ui5-tooling-extensions/tree/main/packages/ui5-middleware-instrumentation).



### HTML

With the following line you enable `Istanbul` to measure the code coverage:

```html
<script type="text/javascript" src="../../../../../resources/sap/ui/qunit/qunit-coverage-istanbul.js"></script>
```

With this argument, all files that are executed during the test run are added to the result.

If you want to limit the test run, you can use the following code:

-   Limit test to a single file:

    ```html
    <script type="text/javascript" src="../../../../../resources/sap/ui/qunit/qunit-coverage-istanbul.js"
    	data-sap-ui-cover-only="sap/ui/core/Popup.js"
    ></script>
    ```

-   Limit test to multiple files \(provide an array with comma-separated sources that should occur in the result\):

    ```html
    <script type="text/javascript" src="../../../../../resources/sap/ui/qunit/qunit-coverage-istanbul.js"
    	data-sap-ui-cover-only="[sap/ui/core/Popup.js, sap/ui/core/EventProvider]"
    ></script>
    ```

-   Limit test to a specific library:

    ```html
    <script type="text/javascript" src="../../../../../resources/sap/ui/qunit/qunit-coverage-istanbul.js"
    	data-sap-ui-cover-only="sap/ui/core/"
    ></script>
    ```

-   Exclude specific objects:

    ```html
    <script type="text/javascript" src="../../../../../resources/sap/ui/qunit/qunit-coverage-istanbul.js"
    	data-sap-ui-cover-never="sap/m/"
    ></script>
    ```




### JavaScript

Inside your test page, you can add these lines before running the tests:

```
sap.ui.require(["sap/ui/qunit/qunit-coverage-istanbul"], function(/*coverage*/){
    // code
});
```

If you want to limit the test run, you can use the following code:

-   Limit test to a single file:

    ```
        var oScript = document.querySelector('script[src$="qunit/qunit-coverage-istanbul.js"]');
        if (oScript) {
            oScript.setAttribute("data-sap-ui-cover-only", "sap/ui/core/Popup.js");
        }
    ```

-   Limit test to multiple files \(provide an array with comma-separated sources that should occur in the result\):

    ```
        var oScript = document.querySelector('script[src$="qunit/qunit-coverage-istanbul.js"]');
        if (oScript) {
            oScript.setAttribute("data-sap-ui-cover-only", "['sap/ui/core/Popup.js', 'sap/ui/core/EventProvide']");
        }
    ```

-   Limit test to a specific library:

    ```
        var oScript = document.querySelector('script[src$="qunit/qunit-coverage-istanbul.js"]');
        if (oScript) {
            oScript.setAttribute("data-sap-ui-cover-only", "sap/ui/core/");
        }
    ```

-   Exclude specific objects:

    ```
        var oScript = document.querySelector('script[src$="qunit/qunit-coverage-istanbul.js"]');
        if (oScript) {
            oScript.setAttribute("data-sap-ui-cover-never", "sap/ui/example/thirdparty/");
        }
    ```




## Blanket.js



### HTML

With the following line you enable `Blanket.js` to measure the code coverage:

```html
<script type="text/javascript" src="../../../../../resources/sap/ui/qunit/qunit-coverage.js"></script>
```

With this argument, all files that are executed during the test run are added to the result.

If you want to limit the test run, you can use the following code:

-   Limit test to a single file:

    ```html
    <script type="text/javascript" src="../../../../../resources/sap/ui/qunit/qunit-coverage.js"
    	data-sap-ui-cover-only="sap/ui/core/Popup.js"
    ></script>
    ```

-   Limit test to multiple files \(provide an array with comma-separated sources that should occur in the result\):

    ```html
    <script type="text/javascript" src="../../../../../resources/sap/ui/qunit/qunit-coverage.js"
    	data-sap-ui-cover-only="[sap/ui/core/Popup.js, sap/ui/core/EventProvider]"
    ></script>
    ```

-   Limit test to a specific library:

    ```html
    <script type="text/javascript" src="../../../../../resources/sap/ui/qunit/qunit-coverage.js"
    	data-sap-ui-cover-only="sap/ui/core/"
    ></script>
    ```

-   Exclude specific objects:

    ```html
    <script type="text/javascript" src="../../../../../resources/sap/ui/qunit/qunit-coverage.js"
    	data-sap-ui-cover-never="sap/m/"
    ></script>
    ```




### JavaScript

Inside your test page, you can add these lines before running the tests:

```
sap.ui.require(["sap/ui/qunit/qunit-coverage"], function(/*coverage*/){
    // code
});
```

If you want to limit the test run, you can use the following code:

-   Limit test to a single file:

    ```
    if (window.blanket) {
    	blanket.options("sap-ui-cover-only", "sap/ui/core/Popup.js");
    }
    ```

-   Limit test to multiple files \(provide an array with comma-separated sources that should occur in the result\):

    ```
    if (window.blanket) {
    	blanket.options("sap-ui-cover-only", "[sap/ui/core/Popup.js, sap/ui/core/EventProvide]");
    }
    ```

-   Limit test to a specific library:

    ```
    if (window.blanket) {
    	blanket.options("sap-ui-cover-only", "sap/ui/core/");
    }
    ```

-   Exclude specific objects:

    ```
    if (window.blanket) {
    	blanket.options("sap-ui-cover-never", "sap/ui/example/thirdparty/");
    }
    ```




## Results

To view the results of the measurement, select the *Enable coverage* checkbox on the test page. This will trigger a new test run.

In this example the coverage is limited to one specific file - the only one that is important for this test.



### Istanbul results

 ![](images/Istanbul_Code_Coverage_8b7a4a5.png) 



### Blanket.js results

 ![](images/QUnit_Code_Coverage_358de53.jpg) 

**Related Information**  


[`UI5 Middleware Instrumentation`](https://github.com/SAP/ui5-tooling-extensions/tree/main/packages/ui5-middleware-instrumentation)

[More information about `Blanket.js`](https://github.com/alex-seville/blanket/blob/master/docs/intermediate_browser.md)

