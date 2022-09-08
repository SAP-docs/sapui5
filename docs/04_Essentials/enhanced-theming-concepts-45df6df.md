<!-- loio45df6dff504647c686ab9ba72af827f6 -->

# Enhanced Theming Concepts

On top of pure CSS, SAPUI5 offers advanced theming concepts and functions which can be used optionally. These concepts are outlined in detail below.



## CSS Variables, Functions and More

SAPUI5 uses the popular CSS preprocessor [LESS](http://lesscss.org/). This tool introduces several features, including CSS variables, a concept which has also been heavily demanded by the CSS community: In any UI5-controlled CSS file, variables can be defined and can then be referenced anywhere in the CSS code of the same library. These variables are mainly used for colors. All CSS variables are global. The CSS variable concept contributes to a consistent way of implementing and changing the styles.

LESS adds more features like color calculations, mixins, and CSS selector nesting. The color calculations are used in SAPUI5 to derive many different color shades from just a few variables.

Here is the syntax:

```
@sapUiText: #000000; /* define the text color as 'black' */

button {
   color: @sapUiText; /* buttons will automatically have the current text color, which is '#000000' right now */
    [...]
}

```

LESS then takes care of substituting all references to a CSS variable by the current value of this variable. This happens during the build of the control library.

> ### Note:  
> In development scenarios this LESS processing might even happen at runtime in the browser to shorten the build time for SAPUI5 libraries. This is indicated by a *less mode* rectangle when a page is launched.

Additionally, a specific theme can modify the CSS parameter values given by the base theme. So a control can just define its text color to use `sapUiText` by default which will automatically take care of applying the correct color for every theme or user modification: The theme generation will create one CSS file per theme, and the substitution of the CSS parameter references will always take the theme-dependent value into account. So a visually very different theme can easily be created by simply changing a number of colors.

While every library and control can introduce their own CSS variables, those defined in `global.css` are most important. Ideally, there should only be a few of them, and they should be simple enough to be understood by most end users \(similar to what the Windows operating system offers end users\), but still cover as many aspects of the visual appearance as necessary to make them sufficient for most customer-required theme modifications.

Additional benefits of CSS variables are, for example:

-   They can be used to generically build simple styling tools that allow for a limited degree of freedom \(=changing the CSS parameter values\). The UI theme designer is an example of such a tool.
-   They can also be linked to metadata, for example, to which group of colors they belong, to which colors they need to have some visual contrast.



## Compilation of One CSS File

SAPUI5 CSS generation does not only substitute the CSS variable values but also merges all CSS files of a control library into **one** file that is loaded at runtime, thus increasing the performance.

Here are some of the reasons why you would not want to have all styles defined within one file during development:

-   Less collisions and merging when different developers edit the styles of their controls
-   Clear separation between the styles for different controls, which helps to estimate and test the impact of a CSS modification
-   Keeping the door open for future optimization regarding runtime performance and data transfer by tailoring CSS files on server side that only contain the CSS required on the current application page



## Optimization and Compression of CSS Size

For performance reasons, the SAPUI5 CSS generation can optionally remove all comments and unnecessary whitespace and can compress verbose declarations into a more compact format.



## Base Theme for Generic Style

While some of the style and layout applied using CSS clearly depends on the current theme, and customers are likely to modify such style rules, there are other style rules that are required for a control to work properly and unlikely to differ for different themes. Examples are the overflow behavior, the positioning of popup elements, the mouse cursor type, the display mode, and others.

SAPUI5 promotes and supports keeping those style definitions in the so-called base theme, which serves as a common base for all themes.

Themes are built upon this base style that defines their specific visual design by applying colors and images, sizes and fonts. SAPUI5 theme generation takes care of combining the base theme with the specific theme for each generated theme CSS file. Because the specific CSS is appended to the base theme, a specific theme can always override styles defined in the base theme. If this step is required often, the respective style declaration should probably not be located in the base theme.

Any style declarations which are referencing CSS variables \(at least those common ones defined in the base theme\) can also be done in the base theme, and it is sufficient to do it only there: The CSS generation will apply the correct value for each respective theme. So this split between base theme and specific themes avoids duplicate creation and maintenance of CSS parts which are common for all themes and keeps the CSS files that need to be written for any new theme smaller.



## Generic Right-to-Left Support

For some countries, right-to-left \(RTL\) text mode needs to be supported. In order to avoid the need to create a completely new set of CSS files for those countries, SAPUI5 supports generic RTL generation. Basically, this involves switching the right and left margins and mirroring everything else \(including CSS3 rotations, and so on\).

Everything else that is not covered by this automatic transformation can be fixed by using style rules that are only applied in the RTL case.

If you override RTL-specific attributes like text alignment, positioning and so on, you have to write the RTL equivalent into your application CSS. The attributes below are critical for RTL support:

-   `float`
-   `clear`
-   `text-align`

The following attributes require special attention:

-   `margin`
-   `padding`
-   `border`
-   `background-position`
-   `position` \(right/left\)
-   `text-indent`

Depending on the values, these latter attributes might also need to be mirrored. As applications running in RTL mode add a `dir` attribute to the HTML tag in the DOM, custom styles that have to be written can use the following selector to handle RTL-specific styling:

```
html[dir="rtl"]  .myselector {
}
```

