<!-- loio4de64e2e191f4a7297d4fd2d1e233a2d -->

# Prevention of Cross-site Scripting

Cross-site scripting \(XSS\) can be prevented by ensuring that it is **not** possible to inject script code into an application page that runs in a browser.

Controls must prohibit writing scripts to the page that comes from the application or from business data saved by a different user. To ensure this, the following two measures must be combined:

-   Validation of typed control properties

    SAPUI5 core validates the value of properties set by the application against the type of the property. This guarantees that an `int` is always an `int`, and a `sap/ui/core/library.CSSSize` is a string representing a CSS size and does **not** contain a script tag. This also applies to enumerations and control IDs. The control renderer can rely on this check when writing the HTML. Property values that are typed in this way can be written without escaping.

-   Escaping

    Control developers must ensure that string control properties and other values coming from the application and not sufficiently typed to rule out script tags being contained are escaped when written to the HTML. For this, the `sap/ui/core/RenderManager` and SAPUI5 core provide helper methods.




## Avoiding XSS for a New Renderer

To ensure maximum security for a renderer, note the following:

-   For control properties, always use the most specific type that is available. For example, use `sap.ui.core.CSSSize` instead of `string` and instead of `sap/ui/core/library.string` for control properties that refer to a CSS size.

-   Use helper methods from the `RenderManager` instance \(used below as `oRenderManager`\), which is provided to the `render` method of the respective renderer to escape the value of a string property that is written to the HTML:

    -   Use `oRenderManager.writeEscaped(oControl.getSomeStringProperty()` instead of just `write(...)` for writing plainly to the HTML.

    -   Use `oRenderManager.writeAttributeEscaped("someHtmlProperty", oControl.getSomeStringProperty())` instead of just `writeAttribute(...)` for writing attributes.

    -   Use `sap/base/security/encodeXML` for string properties where none of the other two options is possible to escape the string and then process it further.


-   Check your HTML coding whether application values can make their way into the HTML:

    -   Check where the variable values come from: Can the application set a value directly or only decide which of the hardcoded values are used?
    -   Escape values given in parameters in method calls of controls because they are currently not validated by SAPUI5 core.
    -   Keep in mind that XSS can happen anywhere and anytime in CSS classes, or in styles.


**Related Information**  


[Cross-Site Scripting](../05_Developing_Apps/cross-site-scripting-91f0bd3.md "Cross-site scripting (XSS) is a widely known vulnerability most web sites have. This page does not provide general information about cross-site scripting but focuses on what you as an application developer using SAPUI5 can do to avoid these security issues.")

