<!-- loiod0db4d538edb43bca893acd4d6814a40 -->

# Theming FAQ

Frequently asked questions regarding theming in SAPUI5



## When exactly does the `Theming.applied` event fire?

The `Theming.applied` event timing behavior can be confusing, especially if it fires synchronously and not asynchronously.

> ### Note:  
> The `Theming.applied` event ensures consistent behavior: If you attach a handler, it will always be called regardless of whether the theme is already loaded or needs to be loaded. If the theme is already fully applied when you attach it, your handler executes immediately. If a theme change or new library CSS loading is in progress, your handler will be called when the loading completes; this way, all listeners are notified consistently.

> ### Caution:  
> Developers must not rely on the synchronous execution behavior, as it can vary depending on the current state of theme loading. Always write your code in a way that it can handle both synchronous and asynchronous execution patterns.



### Event Timing Behavior

**Synchronous Firing**:

The event fires immediately \(synchronously\) if the following applies:

-   All required CSS files are already loaded

-   No CSS requests are pending for the current theme

-   Theme switching doesn't require additional CSS loading


**Asynchronous Firing**:

The event fires after CSS loading completes if the following applies:

-   New CSS files need to be loaded for the theme

-   Libraries are loaded dynamically after theme application

-   Theme switching requires fetching CSS from external sources




### Best Practices for Event Handling

**For Self-Triggered Theme Changes**:

**JavaScript:**

```
sap.ui.require(["sap/ui/core/Theming"], function(Theming) {
  // 1. Change theme FIRST
  Theming.setTheme("sap_horizon_dark");

  // 2. THEN attach listener
  function onApplied() {
    console.log("New theme applied:", Theming.getTheme());
    // Clean up listener after handling
    Theming.detachApplied(onApplied);
  }

  Theming.attachApplied(onApplied);
});
```

**TypeScript:**

```
import Theming from "sap/ui/core/Theming";

// 1. Change theme FIRST
Theming.setTheme("sap_horizon_dark");

// 2. THEN attach listener
const onApplied = () => {
  console.log("New theme applied:", Theming.getTheme());
  // Clean up listener after handling
  Theming.detachApplied(onApplied);
};

Theming.attachApplied(onApplied);
```

**Why Order Matters**:

If you attach the callback before setting the theme, the callback might immediately be called for the currently applied theme before your required change takes effect.



### Event Guarantees

-   The event fires exactly once per theme application cycle.

-   It's safe to perform DOM manipulations in the event handler.

-   The event indicates that all theme-related CSS is loaded and applied.

-   Custom CSS \(`custom.css`\) is guaranteed to be loaded last.




## Why is my theme event handler called immediately?

This happens if the `applied` event fires synchronously, which can occur in several scenarios.



### Common Scenarios

**Theme Already Applied**:

```
// If "sap_horizon" is already the current theme
Theming.attachApplied(function() {
  // This fires immediately because the theme is already applied
  console.log("Handler called immediately!");
});
```

**No CSS Loading Required**:

```
// If switching to a theme that's already cached/loaded
Theming.setTheme("sap_horizon_dark");
Theming.attachApplied(function() {
  // May fire immediately if CSS is already available
  console.log("Theme switch completed immediately!");
});
```



### How to Handle Immediate Firing

**Check if Theme Change is Needed:**

**JavaScript:**

```
sap.ui.require(["sap/ui/core/Theming"], function(Theming) {
  var targetTheme = "sap_horizon_dark";
  var currentTheme = Theming.getTheme();

  if (currentTheme !== targetTheme) {
    Theming.setTheme(targetTheme);
    Theming.attachApplied(function onApplied() {
      console.log("Theme changed to:", Theming.getTheme());
      Theming.detachApplied(onApplied);
    });
  } else {
    console.log("Theme is already set to:", currentTheme);
  }
});
```

**TypeScript:**

```
import Theming from "sap/ui/core/Theming";

const targetTheme = "sap_horizon_dark";
const currentTheme = Theming.getTheme();

if (currentTheme !== targetTheme) {
  Theming.setTheme(targetTheme);

  const onApplied = () => {
    console.log("Theme changed to:", Theming.getTheme());
    Theming.detachApplied(onApplied);
  };

  Theming.attachApplied(onApplied);
} else {
  console.log("Theme is already set to:", currentTheme);
}
```

**Universal Pattern \(Both Cases Handled \)**:

**JavaScript:**

```
sap.ui.require(["sap/ui/core/Theming"], function(Theming) {
  function handleThemeApplied() {
    console.log("Theme is ready:", Theming.getTheme());
    // Your theme-dependent logic here
  }

  // This pattern works whether the event fires sync or async
  var targetTheme = "sap_horizon_dark";
  Theming.setTheme(targetTheme);

  function onApplied() {
    handleThemeApplied();
    Theming.detachApplied(onApplied);
  }

  Theming.attachApplied(onApplied);
});
```

```
import Theming from "sap/ui/core/Theming";

const handleThemeApplied = () => {
  console.log("Theme is ready:", Theming.getTheme());
  // Your theme-dependent logic here
};

// This pattern works whether the event fires sync or async
const targetTheme = "sap_horizon_dark";
Theming.setTheme(targetTheme);

const onApplied = () => {
  handleThemeApplied();
  Theming.detachApplied(onApplied);
};

Theming.attachApplied(onApplied);
```



### Key Takeaways

-   Always set the theme first, then attach the listener

-   Be prepared for both synchronous and asynchronous event firing

-   Clean up event listeners after handling to avoid memory leaks

-   Use the universal pattern when you're unsure about timing behavior




## How can I adapt the visuals of a control?

While there is always the option to create a new theme, this is overkill for most minor style adaptations. For those minor changes, the recommendation is to include additional CSS into the page which changes the style of the respective tags of the SAPUI5 control. This allows complete, arbitrary changes of the visual design - after all it is the same technology that the UI5 controls use for their styling.

The main options are the following:

-   Inspect the HTML and CSS of a control and write a similar, but adapted CSS rule for a CSS property you want to override for all controls of a type.
-   Call `.addStyleClass("myStyle")` on some control instances if you want only those instances to look different from other instances - and then write CSS code that refers to the normal classes/tags and to the CSS class you just added.

> ### Note:  
> -   With this high degree of power and flexibility comes quite some responsibility. With CSS you can easily break the functionality of a control. This is not SAPUI5-specific, but when you make CSS adaptions, you should always have good knowledge of this open standard.
> -   The inner structure of a control, the tag hierarchy, the IDs and CSS classes are **not** part of the public control API for which we guarantee stability. This is also the case for other libraries which might define some CSS classes as stable, but not everything else. As CSS can refer to the inner structures of a control, you have to accept the risk that your style changes break when we change the inner structure. Changing the inner structure is a freedom we absolutely need to reserve, so we can fix bugs and add features of a control.
> -   When your CSS does not work as expected, use the developer tools in your browser to inspect the page and check which CSS rules are applied to the respective tag, and which rules might be applied but are overridden by other rules. If your rules are overridden by other rules, this is probably due to their order of appearance \(last rule wins\) or the CSS selector specificity \(more specific CSS selectors win\).

**DON'Ts**

-   Do not adapt the style attribute of HTML elements belonging to SAPUI5 controls. When these controls are re-rendered, the changes will be lost.



<a name="loiod0db4d538edb43bca893acd4d6814a40__section_mwg_rvd_nbb"/>

## How can I provide additional CSS that is not overwritten by the SAPUI5 CSS?

When SAPUI5 is used in a standard way, which means loaded by a`<script>` element in the `<head>` of a page, and all libraries declared in the respective attribute of the `script` tag\), it is sufficient to just add the custom CSS to any place after the SAPUI5 `<script>` element. SAPUI5 will insert its CSS links immediately after the `<script>` tag, so any subsequent CSS will appear further down in the DOM and can thus overwrite the SAPUI5 CSS.

However, it is important to understand the precedence rules of CSS: The order of appearance is not the only factor that determines which one of two or more conflicting rules wins. Actually it is only the least important factor. The most important \(and maybe least known\) factor is the specificity of the selector belonging to a rule.

For example, if one rule says `button {color:red;}` to make all button texts red, and a second rule says `div > button {color:green;}` to make all button texts, which are direct children of a `<div>` element, green, the second rule always wins because it is more specific. The order of appearance in the DOM does not matter in this case. It would only matter if both rules started with an equal selector, such as `button{color:***}`.

The order of loading is completely irrelevant, only the position in the DOM counts in this case. If you load SAPUI5 without a `<script>` tag in the `<head>`, or if you do not specify all used control libraries in the `<script>` tag, but loaded some of them later on when the body was already loaded, you can still make sure a custom CSS appears further down in the DOM by loading it with `sap.ui.dom.includeStyleSheet(stylesheetUrl[, id])`**after** loading SAPUI5 or the dynamically loaded control library.

**Related Information**

-   For more information on the related part of the CSS specification, see [http://www.w3.org/TR/CSS21/cascade.html\#cascading-order](http://www.w3.org/TR/CSS21/cascade.html#cascading-order)
-   For more information on specificity, see [http://www.w3.org/TR/CSS21/cascade.html\#specificity](http://www.w3.org/TR/CSS21/cascade.html#specificity) 



## Why do SAPUI5 controls not have a `style` property where I can make arbitrary changes?

A control usually does not map to **one** HTML element, but to a whole tree of HTML elements. Whatever is set for the `style` property would probably be added to the root element of this HTML tree, and only there, so there is no `style` access to inner parts. If you just want to override the height of a button, this would actually work. But as soon as a change is a bit more complex, it will not work that easily. A more complex change is, for example, adapting the height of a `ComboBox` control. The outer `<div>` will get the proper height. And incidentally also the `<input>` tag inside, as it has 100% height set. But the dropdown arrow and the respective button-kind-of-thing has a fixed height, and the whole control will look pretty broken then.

In other cases, when HTML elements that break the CSS inheritance chain are nested, for example, `<table>` and font settings, you can change `style` to a different font and text color, but it will simply do nothing.

In general, we try to expose the obvious adaptation content in the API, for example, the button height. But the less obvious adaptations might have to be supported from inside the control to work properly, and as we cannot foresee and support everything you can do with a `style` property, we raise the bar a little bit by requiring you to write CSS \(potentially using `.addStyleClass(…)` for the respective control\). With CSS you can do what you cannot do with a `style` property: tweak the inner HTML components of a control.

Applications \(at least the more traditional ones – currently this seems to be less of a rule, but I'm not sure it will stay like this forever\) need to conform to some visual design guideline and, in general, it is not even desired that applications change the `TextField` height or use font just the way they like. As you can use CSS, UI5 still supports that, but we shouldn't make breaking the visual design a rule in our official API.



## I am adding a style class, but it does not work! Why?

If you want to change some styling and use `control.addStyleClass(…)` to add a CSS class, but it does not seem to work, you first have to pin down exactly what is not working:

-   Has the style class not been added to the HTML?
-   Has the style class been added correctly, but the style you supplied not been applied by the browser?

You can check this by inspecting the HTML with your browser's developer tools.

-   If the style class has really not been added to a control, bear in mind that some entities are not controls, but only elements \(inherited from `sap.ui.core.Element`\). Only some of them support `addStyleClass`.
-   If the style class is available in the HTML, the bug is inside the CSS styles you supplied:
    -   Are they loaded by the browser?
    -   Are the selectors matching the element you want to style? You can again check in the developer tools: They mostly list all styles which apply, but some are overriding others \(those are usually listed with a strikethrough\). If your style is not listed at all, your CSS selector is probably not correct.
    -   If your selector is fine, but other style rules override your styles \(potentially those from the original UI5 theme\), then the CSS precedence rules determined this. Refer to the section on additional CSS above and see [http://www.w3.org/TR/CSS21/cascade.html\#cascading-order](http://www.w3.org/TR/CSS21/cascade.html#cascading-order) for the respective part of the CSS spec and [http://www.w3.org/TR/CSS21/cascade.html\#specificity](http://www.w3.org/TR/CSS21/cascade.html#specificity) for more on specificity.
    -   Maybe your browser does not understand the CSS styles you have written. Some browsers still display them in the developer tools, some don't, so you might want to try changing very common styles like the border to check whether selector and specificity are fine.




<a name="loiod0db4d538edb43bca893acd4d6814a40__section_opb_ccz_3bb"/>

## How can I perform a "clean" browser switch inside CSS code?

On all SAPUI5 application pages, the HTML root tag of the DOM gets the additional attribute `data-sap-ui-browser` where the value is the type and the current browser version. When browser-specific CSS needs to be written, this attribute can be used in CSS selectors.

```
html[data-sap-ui-browser*="sf"] button {  /* this rule will only be applied if the current browser is ANY version of Safari */
   padding-top: 0px;
}

```



## When should I use the UI theme designer, and when should I perform manual steps?

There is not one single way to create a new theme, but there are several options. Which one you choose depends on several factors:

-   How different is the desired design from an existing theme?
-   Should the theme be used across several applications or just in one?
-   Are sufficient CSS skills available?
-   How much effort can be invested?

Depending on the answers it might be better to not even create a new theme but just adapt an existing one.



## How can I troubleshoot theme configuration issues?

Theme configuration problems can manifest in various ways. Here's a systematic approach to diagnose and resolve common issues:



### Verification of Theme Setup

**Configuration Check**:

**JavaScript:**

```
// Verify current theme
sap.ui.require(["sap/ui/core/Theming"], function(Theming) {
  console.log("Current theme:", Theming.getTheme());
});

// Check if theme is fully applied
sap.ui.require(["sap/ui/core/Theming"], function(Theming) {
  Theming.attachApplied(function() {
    console.log("Theme applied successfully:", Theming.getTheme());
  });
});
```

**TypeScript:**

```
import Theming from "sap/ui/core/Theming";

// Verify current theme
console.log("Current theme:", Theming.getTheme());

// Check if theme is fully applied
Theming.attachApplied(() => {
  console.log("Theme applied successfully:", Theming.getTheme());
});
```

**Inspection of Theme Root Configuration**:

**JavaScript:**

```
// Check theme roots in browser console
console.log("Theme roots:", window["sap-ui-config"]?.["theme-roots"]);
```
*TypeScript:*
```ts
// Check theme roots in browser console
console.log("Theme roots:", (window as any)["sap-ui-config"]?.["theme-roots"]);
```

**TypeScript:**

```
// Check theme roots in browser console
console.log("Theme roots:", (window as any)["sap-ui-config"]?.["theme-roots"]);
```



### Common CSS Loading Issues

**Duplicate CSS Requests**:

-   **Cause**: Mismatch of preloaded links and SAPUI5-computed URLs

-   **Solution**: Ensure version parameters match, verify theme names, and check path consistency.


**404 Errors:**

-   **Cause**: Incorrect theme root URLs or missing theme assets

-   **Solution**: Verify the theme root accessibility, check the spelling of theme names, and confirm asset availability.


**Wrong Theme Applied**:

-   **Cause**: Mismatch of theme names or configuration conflicts
-   **Solution**: Check URL parameters, verify bootstrap configuration, and inspect configuration precedence.



### Performance Issues

**Slow Initial Loading**:

-   Check if preloading is beneficial for your specific use case

-   Monitor network requests in browser developer tools

-   Consider lazy loading for non-critical components




### Configuration Validation

**Bootstrap Parameter Check**:

```
<!-- Ensure theme name matches theme root configuration -->
<script
  id="sap-ui-bootstrap"
  src="/resources/sap-ui-core.js"
  data-sap-ui-theme="myTheme"
  data-sap-ui-theme-roots='{"myTheme": "https://correct.service.com/"}'>
</script>
```

**Security Configuration**:

```
<!-- Verify allowed origins match theme root domains -->
<meta name="sap-allowed-theme-origins" content="https://trusted.service.com,https://backup.service.com">
```



## How can I identify and resolve CSS performance issues with large datasets?

CSS performance problems can cause significant UI freezing, especially when working with large tables or datasets. These issues are often browser-specific and might be more pronounced in certain environments.



### Common Symptoms

-   UI freezing during scrolling or interaction

-   Delayed response to user actions

-   Browser-specific performance degradation \(for example, Edge versus Chrome\)

-   Performance issues that get increasingly worse with dataset size

-   Application and animation freezing




### Identifying Problematic CSS Selectors

**Use Browser Developer Tools**:

Most browsers provide performance analysis tools that can help identify CSS-related performance issues. Access your browser's developer tools and look for performance profiling features. During the problematic interaction, record a performance trace to identify long-running style recalculation tasks and CSS selectors with high invalidation counts.

**Common Performance Anti-Patterns**:

-   Expensive pseudo-selectors, such as `:has()`, `:not()`, `:nth-child()`, `:nth-of-type()`

-   Universal selector \(`*`\) with complex hierarchies or properties expensive for the browser's rendering pipeline

-   Broad selectors, for example, matching thousands of elements unintentionally \(for example, generic tag selectors like `div`, `tr`, `td`, or `span` without proper scoping\)

-   Deeply nested descendant selectors

-   Overly complex mix of CSS math functions:

    ```
    width: calc(100vw -
              var(--_my_custom_lib_sidebar) - max(var(--_my_custom_lib_padding), 2rem) * 2 -
              min(var(--_my_custom_lib_margin), 3vw) ...)
    ```




### Case Study: Table Performance Issue

A real-world example involves a CSS selector that causes severe performance degradation:

```
/* Problematic selector - affects all tables */
table:has(.searchSuggestion) td,
table:has(.searchSuggestion) .sapMLIBShowSeparator > td {
    border-top: none;
}
```

**Why This Causes Issues**:

-   The `:has()` pseudo-selector is computationally expensive

-   When applied to large tables \(1000+ rows\), the pseudo-selector iterates over thousands of DOM elements
-   Style recalculations become increasingly costly with growing dataset size

-   The selector is too broad and affects unintended elements




### Solution Strategies

1.  **Restrict Selector Scope**

    ```
    /* Better - restrict to specific control scope */
    .mySearchField table:has(.searchSuggestion) td,
    .mySearchField table:has(.searchSuggestion) .sapMLIBShowSeparator > td {
        border-top: none;
    }
    ```

2.  **Use More Specific Selectors**:

    ```
    /* Alternative approach - target specific elements */
    tr.searchSuggestion td,
    tr.searchSuggestion .sapMLIBShowSeparator > td {
        border-top: none;
    }
    ```

3.  **Avoid Expensive Pseudo-Selectors**:

    If possible, replace expensive pseudo-selectors with class-based targeting:

    ```
    * Instead of using :has(), add specific classes */
    .search-suggestion-table td {
        border-top: none;
    }
    ```




### Performance Testing and Validation

To validate CSS performance improvements, create test scenarios with large datasets \(more than 500 table rows\) and monitor performance across different browsers using their developer tools to profile CSS recalculation time. Compare performance before and after applying your CSS changes by first recording a baseline measurement with the current CSS, then temporarily disabling suspect CSS rules to isolate the issue, and finally verifying the improvement after implementing your solution. Cross-browser testing is essential to ensure fixes work consistently across your target browsers.



### When to Investigate

-   User reports of UI freezing or sluggish response

-   Performance degradation after CSS changes

-   Browser-specific performance issues

-   Increasing number of issues as datasets grow


> ### Tip:  
> If you suspect CSS performance issues, start by creating a minimal reproduction case with a large dataset. This helps isolate the problem and validate potential solutions before implementing them in your application.
> 
> For comprehensive best practices on CSS performance and theming, see [Creating Themable User Interfaces](creating-themable-user-interfaces-a2c67ac.md).

