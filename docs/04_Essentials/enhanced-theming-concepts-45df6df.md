<!-- loio45df6dff504647c686ab9ba72af827f6 -->

# Enhanced Theming Concepts

On top of pure CSS, SAPUI5 offers advanced theming concepts and functions which can be used optionally. These concepts are outlined in detail below.



<a name="loio45df6dff504647c686ab9ba72af827f6__section_CSS"/>

## CSS Variables, Functions, and More

SAPUI5 provides a set of [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) which allows you to make your application or custom controls theming-aware. The CSS custom properties are provided by the [SAP Theming Base Content](https://github.com/SAP/theming-base-content). It contains all necessary data to connect to the SAP global theming infrastructure. The content exposes the central set of colors, metrics, and resources of a theme. SAPUI5 applications or custom controls can easily make use of the CSS custom properties of the SAP Theming Base Content. This concept contributes to a consistent way of implementing and changing the styles. CSS provides a lot of additional features like calculations, nesting, and more.

Here is the syntax:

```
button {
    color: var(--sapButton_TextColor); /* buttons will automatically have the current text color, which is '#000000' right now */
    [...]
}
```

The browser then takes care of substituting all references to a CSS custom property by the current value of this variable. Every time a CSS custom property is changed at runtime, it will affect all usages.

Additionally, a specific theme can modify the CSS custom property values given by the base theme. So a control can just define its text color to use `--sapButton_TextColor` by default, which will automatically take care of applying the correct color for every theme or user modification: The theme generation will create one CSS file per theme, and the usage of the CSS custom property ensures that the theme-dependent value will always be taken into account. A visually very different theme can easily be created by simply changing a number of colors.

While every library and control can introduce their own CSS custom properties, those provided by the SAP Theming Base Content are the most important. Ideally, there should only be a few of them, and they should be simple enough to be understood by most end users \(similar to what the Windows operating system offers end users\), but still cover as many aspects of the visual appearance as necessary to make them sufficient for most customer-required theme modifications. To be theming-aware, these CSS custom properties are ideally based on existing ones provided by the SAP Theming Base Content.

Additional benefits of CSS custom properties are, for example:

-   They promote modular and maintainable code by centralizing common values in one place.
-   Although they can be manipulated via code at runtime without the need of a dedicated SAPUI5 re-rendering step, they must not be manipulated globally.

    > ### Tip:  
    > All controls that use the Parameters API might require a re-rendering after an SAP CSS custom property has been changed \(e.g. charts\)!

-   They facilitate cascading and inheritance, allowing you to define values that can be inherited by child elements.
-   They can be used to generically build simple styling tools that allow for a limited degree of freedom \(=changing the CSS custom property values\). The UI theme designer is an example of such a tool.
-   They can also be linked to metadata, for example, to which group of colors they belong, to which colors they need to have some visual contrast.



## Compilation of One CSS File

SAPUI5 CSS generation merges all CSS files of a control library into **one** file that is loaded at runtime, thus increasing the performance.

Here are some of the reasons why you would not want to have all styles defined within one file during development:

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

