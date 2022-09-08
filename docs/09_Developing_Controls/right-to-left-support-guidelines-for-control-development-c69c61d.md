<!-- loioc69c61d7c9bc4514b9479b3998f61ef6 -->

# Right-to-Left Support Guidelines for Control Development

SAPUI5 developers have to consider the text directionality when implementing new controls. The following guidelines explain how this can be done and highlight what you need to focus on.



## General Guidelines

You should develop the control as usual, with only left-to-right \(LTR\) direction in mind.

-   You don't need any RTL-specific CSS classes and you shouldn't write RTL-specific styles into a CSS file.

-   You shouldn't use CSS properties related to RTL.

-   You need to consider the semantics of the control properties. Controls that have directional properties like `left` or `right` need to be changed to `begin` or `end` respectively.

-   Think about the RTL behavior according to the items below when writing JavaScript code that relates to positions.


You can find more detailed guidelines and specifics in the *Related Information* section.



## Turning on RTL Mode with the URL Parameter

You can test your control by setting the URL parameter `sap-ui-rtl` to `true`. This will display your control in RTL mode. The automatically converted stylesheets and mirrored images are used, and `dir=rtl` is set on the `<html>` tag.



## RTL Mode in Text-Displaying Controls

Languages that have RTL text directionality keep the default directionality of numeric values and texts in LTR mode. In order to handle these cases, SAPUI5 uses two additional API properties - `textDirection` and `textAlign`. You can find detailed information on how to use these properties in the section *Related Information*.

**Related Information**  


[API Properties for Right-to-Left Support in Text-Displaying Controls](../05_Developing_Apps/api-properties-for-right-to-left-support-in-text-displaying-controls-7e7cd0a.md "Languages with right-to-left (RTL) text directionality keep the default directionality of numeric values and texts in left-to-right (LTR) mode. To ensure correct handling, two API properties have been introduced - textDirection and textAlign.")

