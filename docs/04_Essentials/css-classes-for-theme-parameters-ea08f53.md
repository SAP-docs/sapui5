<!-- loioea08f53503da42c19afd342f4b0c9ec7 -->

# CSS Classes for Theme Parameters

SAPUI5 provides a set of essential adjustable colors behind the generic predefined CSS rules that enable custom content to use the respective CSS classes for the required colors.

If SAPUI5 applications define their own HTML and CSS content that is not created by any standard SAPUI5 controls, switching between different themes or adapting colors using the theme designer won't have any effect on these parts of the application.

The reason this doesn't work is because this type of styling cannot make use of the SAPUI5 theme parameters.

HTML content like that might be created as part of the following:

-   JavaScript libraries that are **not** SAPUI5 libraries

-   Custom/notepad controls\(if they do **not** belong to a control library with a theme build\)

-   Plain static HTML or CSS content used in an application


To resolve this problem, you can use CSS classes. There is a number of predefined CSS classes that are supplied with color values by LESS CSS parameters of the current theme. These classes can be used in custom HTML content and in custom controls. The names of the CSS classes are generic and mostly derived from the respective theme parameter name. This makes it easier to use the classes, and the names created are not too long or conflict-prone.



The most straightforward example is the theme parameter `@sapUiText`. The theme parameter is mainly used for text colors, so the custom CSS rule sets the `color` property.

```
   CSS
.sapThemeText {
   color: @sapUiText;
}
```

This solution is not sufficient if the same color is used for borders, for example. To support this, the color is defined for each CSS color parameter: Once as a text color, once as a background color, once as a border color, and so on. The styled CSS property name is part of the CSS class name, as a suffix:

```
   CSS
.sapThemeText-asColor {
   color: @sapUiText;
}
.sapThemeText-asBackgroundColor {
   background-color: @sapUiText;
}
.sapThemeText-asBorderColor {
   border-color: @sapUiText;
}
```

Nevertheless, if there is an obvious default CSS property, such as the \(text\) color for `@sapUiText` or the background color for `@sapUiPageBG`, this one is available without suffix.

If an application is using SAPUI5, and a theme is loaded into the page, any custom content like plain HTML, HTML inside HTML controls or HTML/XML views, or HTML rendered by custom/notepad controls can use theming if the respective generic CSS classes are added. If custom HTML should have the font color as defined in the current theme, the application writes:

```html

<span class="sapThemeText">some custom text in custom HTML</span>
```

Whenever the theme is switched or the theme designer is used to modify the standard text color, this span automatically gets the new text color. The same is valid if a custom/notepad control is created. Just make sure the control writes the respective CSS class, for example, by calling `oRm.addClass("sapThemeText");`:

```js

// the part creating the HTML:
render : function(oRm, oControl) { 
oRm.openStart("div", oControl); 
    oRm.style("width", oControl.getSize());  
    oRm.style("height", oControl.getSize());
    oRm.class("mySquare");       
    oRm.class("sapThemeText");  // here the CSS class is added which makes the text color depend on the current theme
    oRm.openEnd();
    oRm.text(oControl.getText()); 
    oRm.close("div");
},

```

**Related Information**  


[List of Supported CSS Classes](list-of-supported-css-classes-91a4946.md "Overview of the CSS classes currently supported by SAPUI5.")

[Step 33: Custom Controls](../03_Get-Started/step-33-custom-controls-d12d2ee.md "In this step, we are going to extend the functionality of SAPUI5 with a custom control. We want to rate the product shown on the detail page, so we create a composition of multiple standard controls using the SAPUI5 extension mechanism and add some glue code to make them work nicely together. This way, we can reuse the control across the app and keep all related functionality in one module.")

