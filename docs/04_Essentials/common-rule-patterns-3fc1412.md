<!-- loio3fc141206cee4ab2aa514b569ed423c0 -->

# Common Rule Patterns

The Support Assistant checks verify different aspects of your web application - from the view/elements structure and control properties to the dynamic, data and event-driven interactions. You can traverse the DOM tree, look at error logs during startup or check the CSS.



## Rules for the Rendered HTML and the SAPUI5 Element Tree

With these rules you can check how your application is rendered and how properties of the controls affect the rendering. Here is an example:

```
var mElements = oScope.getElements();
for (var n in mElements) {
  ...
}

```



<a name="loio3fc141206cee4ab2aa514b569ed423c0__section_Rules_for_the_Console_Traces_and_Logging"/>

## Rules for the Console Traces and Logging

Rules that analyze the console trace allow you to react to dynamic events while the application is loading. They can help you catch common errors in the binding and bootstrapping of the application. One such rule \(*Error Logs*\) is already created and catches all the errors from the console.

With version 1.46, the logging API has been enhanced to allow additional objects to be added to logs produced by any module. An additional callback function in a log statement can provide such additional objects, which can be stored with the log entry.

For more information, see the [API Reference: `sap/base/log`](https://ui5.sap.com/#/api/module%3Asap%2Fbase%2FLog). 

Here is an example of how to log a warning with additional support information:

```
// "Log" required from module "sap/base/Log"
//enable to log additional support information, this is automatically turned on if the url parameter: sap-ui-support is set to true
Log.logSupportInfo(true)

Log.warning("Log this text", function() {
  //return additional object for further processing in support tooling
  return {
    type: "sap.mylib.supportType", //type can be used to filter the logs in support tooling
    elementId: "sap.mylib.Class or ID" //can be given to narrow the scope of support tooling to a certain element ID, normally used as control ID.
    mylogobject: {
      context: "Identify Context"
    }
  }
});
```



<a name="loio3fc141206cee4ab2aa514b569ed423c0__section_gjj_15l_l1b"/>

## Recommendations for Writing CSS Rules

To set custom design preferences, you need to overwrite or manipulate the CSS styling rules. However, this bears a risk because inappropriate changes in the standard styles might provoke rendering or representation issues.

Below, you can find examples of specific Support Assistant rules to check in such situations.



### Getting all loaded style sheets

To get all loaded style sheets, you simply need to call the `document.styleSheets` method. This method returns a list of all inline and external CSS rules. You can further filter or search for a specific style depending on your needs.



### Getting a list of all custom CSS file paths

By custom CSS files we mean all files and styles that are not included within a standard `library.css` file. Here is an example function that filters all loaded styles and returns only those specific file paths. Once you have a list of all custom CSS files, you can do your further analysis.

```
getExternalStyleSheets: function() {
  return Array.from(document.styleSheets).filter(function(styleSheet) {
    var themeName = sap.ui.getCore().getConfiguration().getTheme(),
      styleSheetEnding = "/themes/" + themeName + "/library.css",
      hasHref = !styleSheet.href || !styleSheet.href.endsWith(styleSheetEnding),
      hasRules = !!styleSheet.rules;

    return hasHref && hasRules;
  });
},

```



### Determining if a specific style sheet is in an `inline` or `external` file

If you iterate over `document.styleSheets` elements, you will see that each element has a property `href` containing the full path to the style sheet. If it's empty, it means that the style is `inline`. Here is an example function that returns the full path to a specific style sheet when loaded externally and `inline` if the applied style is added by a `<style>` tag:

```
getStyleSheetName: function(styleSheet) {
  return styleSheet.href || "Inline";
},

```



### Determining if a specific CSS rule is applied on a node

Each style sheet object contains a property called `rules`. This property is a `CSSRuleList` of all `CSSStyleRules` that are inside this style sheet. Each rule has its own property `selectorText` that contains a selector of a rule. To get all nodes that contain that selector, we can use `document.querySelectorAll(rule.selectorText)`. Here is a simple example where we get all rules and find all nodes that contain each rule selector:

```
Array.from(styleSheet.rules).forEach(function(rule) {
  var selector = rule.selectorText,
    matchedNodes = document.querySelectorAll(selector);
});

```

