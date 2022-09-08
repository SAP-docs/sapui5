<!-- loio4549da61e2d949d6a3d20ad8a9d17a6f -->

# SAPUI5 Control Development Guidelines

Content developers developing SAPUI5 controls should follow the guidelines outlined below with regard to APIs, behavior, and themes/CSS.



## General Remarks

-   Keep things simple! Keep the number of entities created for a new control minimal.

-   Reuse is good, but carefully compare how many features of the reused control are needed, and how big the impact on performance would be. For example, if a control needs a clickable area, you can simply implement `onclick` and check where the click came from - this has zero impact on performance. Only if you need more features should you think about instantiating and aggregating. For example, you could use a `Button` control and use its `press` event, but this would cost performance.




## API

For APIs, the following guidelines apply:

-   Get the API right the first time, you will not be able to change it later \(compatibility\).

-   Control names start with an uppercase letter and use CamelCase for concatenated words.

-   Property, event, aggregation, association, method, and parameter names start with a lowercase letter and also use camelCase.

-   Do **not** use Hungarian notation for API parameters, as their type is documented in JSDoc.

-   Provide a reasonable default value for properties. Consider the most frequent use case.

-   Let block elements autofill the available width instead of explicitly setting "100%" as the default width.

-   `editable` and `enabled` are two different properties. "Not enabled" controls are **not** in the focus tab chain.

-   Check similar controls for consistent naming and modeling of public APIs.

    Controls for text input have a `value` property. Container controls with one generic area for child controls have a 1..n `content` aggregation. When the child controls are not generic, but have specific semantics, arrangement, or type, the name should be chosen accordingly \("items", "buttons",…\).

-   When there is one most important aggregation, it should be marked as the default aggregation; this facilitates the use in XMLViews.

-   Properties, associations, and aggregations should be preferred over API methods due to data binding support and easier usage in XMLViews.

-   Make sure not to break use in XMLViews; for example, types like `object` and `any` may not be used for mandatory properties.

-   Be careful about initial dependencies. The `Input` control, for example, should not always load the table library just because some inputs may show a value help table after certain user interaction




## Behavior

For behavior-related development, the following guidelines apply:

-   Do **not** use hardcoded IDs. When creating internal subcontrols, their ID should be prefixed with `this.getId() + "-"`.

-   Make sure not to break data binding.

-   Do **not** make assumptions about how your control is used.

-   Do **not** use `oEvent.preventDefault()` or `oEvent.stopPropagation()` without a good reason and clear documentation why it is required.

-   Use the SAPUI5 event handling methods when available instead of `jQuery.on()`. When you use `jQuery.on()`, always register them in `onAfterRendering()` and deregister them by using `jQuery.off()` in `onBeforeRendering()` and in `exit()`.

-   Use CSS3 for animations and fall back to no animation for legacy browsers; there are only a few exceptions where the animation is important.

-   Keep in mind that a control can be used multiple times in a page.

-   Provide immediate feedback for user interaction.

-   If an action takes a longer period of time, visualize this, for example by using a `BusyIndicator`.

-   When you create HTML markup for a control outside a renderer, for example, by writing to the `innerHTML` property of a DOM element, or by calling `jQuery.html()` or similar helpers, make sure to escape any unchecked data first with the function provided by `sap/base/security/encodeXML`. This is mandatory to prevent cross-site scripting issues. For more information, see [Cross-Site Scripting](../05_Developing_Apps/cross-site-scripting-91f0bd3.md).




## Renderer

With regard to the renderer, the following guidelines apply:

-   Produce clean, semantic HTML5, as compact as reasonably possible.

-   Each control instance must have exactly one root HTML element and can have any HTML element structure below that.

-   Unknown strings, such as values coming from string properties, need to be escaped before writing to HTML; this avoids security risks via XSS attacks.

-   Use `RenderManager.writeEscaped(…)`, or the function provided by module `sap/base/security/encodeXML`.

-   Container controls such as `Panel` or `Page`, as opposed to layout controls with a generic "content" aggregation, should render the children directly next to each other with no additional HTML or layout applied.

-   Use the Icon pool for images.

-   Provide a sufficiently large touch area for interaction on touch devices \(usually 3rem/48px\).

-   When internal HTML elements of the control below the root element need an ID, construct the ID as follows: `<control ID> + "-" + <someSuffix>`.

-   The HTML should adhere to the basic XHTML rules; close all tags, enclose attribute values in quotes and do **not** use empty attributes without value.

-   Avoid <table\>-based layouts when there is no logical table. If a table is used for layout, try to use "display:table" or even "table-layout:fixed" tables.

-   `RenderManager.writeControlData()` must be called in the root HTML element of the control to make events work.

-   `RenderManager.writeClasses()` must be called in the root HTML element of a control; otherwise `addStyleClass` does not work. this does not need to be used in subelements.


-   **[Control Development Guidelines: Theming/CSS](control-development-guidelines-theming-css-5e08ff9.md "For themes and CSS for control development in SAPUI5, the following
		guidelines apply.")**  
For themes and CSS for control development in SAPUI5, the following guidelines apply.

