<!-- loiod0db4d538edb43bca893acd4d6814a40 -->

# Theming FAQ

Frequently asked questions regarding theming in SAPUI5



## How can I adapt the visuals of a control?

While there is always the option to create a new theme, this is overkill for most minor style adaptations. For those minor changes, the recommendation is to include additional CSS into the page which changes the style of the respective tags of the SAPUI5 control. This allows complete, arbitrary changes of the visual design - after all it is the same technology that the UI5 controls use for their styling.

The main options are the following:

-   Inspect the HTML and CSS of a control and write a similar, but adapted CSS rule for a CSS property you want to override for all controls of a type.
-   Call `.addStyleClass("myStyle")` on some control instances if you want only those instances to look different from other instances - and then write CSS code that refers to the normal classes/tags and to the CSS class you just added.

> ### Note:  
> -   With this high degree of power and flexibility comes quite some responsibility. With CSS you can easily break the functionality of a control. This is not SAPUI5-specific, but when you make CSS adaptions, you should always have good knowledge of this open standard.
> -   The inner structure of a control, the tag hierarchy, the IDs and CSS classes are **not** part of the public control API for which we guarantee stability. This is also the case for other UI libraries which might define some CSS classes as stable, but not everything else. As CSS can refer to the inner structures of a control, you have to accept the risk that your style changes break when we change the inner structure. Changing the inner structure is a freedom we absolutely need to reserve, so we can fix bugs and add features of a control.
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

