<!-- loio5e08ff90b7434990bcb459513d8c52c4 -->

# Control Development Guidelines: Theming/CSS

For themes and CSS for control development in SAPUI5, the following guidelines apply.



## General Guidelines

-   Write semicolons, even where optional.

-   Use `rem` for dimensions; use `px` only for dimensions that do not depend on the font size.

-   The root element of a control should come without outer margins; add any required padding inside. Root margins are owned by the parent control.

-   Do not hard-code any colors, use LESS parameters and color calculations instead; this is also recommended for other significant theme aspects such as fonts and background images.

-   Use other LESS features moderately. The more LESS processing happens, the less clear it is where the runtime CSS originates from.

-   Do **not** style HTML elements directly; all selectors must include a SAPUI5-specific CSS class to avoid affecting non-owned HTML.

-   Avoid the star selector \(such as: `* { color: black;}`\) in CSS, in particular without a "direct child" selector \("\>"\) in front of it \(for performance reasons\).

-   Only use inline CSS for control-instance specific style, for example the button width.

-   Do **not** use `!important` as it makes custom adaptations more difficult; use more specific selectors instead.

    There are rare justified exceptions, but they need to be documented.

-   Put browser-prefixed properties before the un-prefixed variant.

-   When the visuals of certain controls are different depending on the context/container where they are used, use CSS cascades along with marker CSS classes in the parent control:

    -   The area/container should write a certain marker CSS class to the HTML and document this CSS class in its JSDoc.

    -   The documentation should mention the purpose and contract/meaning of this class, for example, that it is meant to modify the appearance of children in a way that better fits table cells, toolbars, or headers.

    -   This CSS class may not have any CSS styles attached. It is a pure marker.

    -   This CSS class has the suffix `-CTX` \(e.g. `sapUiTable-CTX` or `sapUiBorderless-CTX`\) to make it distinguishable from "normal" CSS class names.

    -   Controls that want to modify their appearance in such an area use the marker class in a cascade: `.sapUiTable-CTX .sapUiInput { border: none; }`





## Naming

The following naming guidelines apply:

-   All CSS classes must begin with the `sapUi` prefix \(or `sapM` in the sap.m library\). Exception: some global CSS classes used in the core start with "sap-".

-   For each control there must be one unique control-specific prefix for CSS classes.

    For example, `sapUiBtn` for a `Button` control, or `sapMITB` for an `IconTabBar` in the `sap.m` library. This class must be written to the HTML root element of the control. All CSS classes within the HTML of this control must append a suffix to this class name, for example: `sapUiBtnInner` or `sapMITBHeader`.




## Images

Themes \(including "base"\) should only refer to existing images inside that theme. Images will be loaded relative to the theme where they are referenced \(see LESS option `"relativeUrls"`\)

If an image URL defined in `base` stays active in another theme `'mytheme'`, derived from `base`, LESS will calculate a relative URL that points from the `mytheme/library.css` to the `base/library.css`.

Similar path calculation is necessary when the URL is defined in another library \(e.g. from `sap/m/themes/mytheme/library.css` to`sap/ui/core/themes/base/image.png`\).

These URL transformations assume a single repository for all sources. When resources for different themes or libraries are located in different libraries, such relative URLs might not work.

To override an image within the base theme an additional rule has to be added to the individual theme referencing the image. Otherwise the base image will be loaded.



<a name="loio5e08ff90b7434990bcb459513d8c52c4__section_rwz_wl3_1bc"/>

## CSS Math Functions

[CSS Math Functions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Functions#math_functions) must be escaped in LESS to prevent incorrect calculations and syntax errors.

**Example for calc:**

```css
.sapUiMyControl {
    width: ~"calc(100% - 3rem)";
}
```

**Example for min + calc:**

```css
.sapUiMyControl {
    height: ~"min(48rem, calc(80vh - 5rem))";
}
```



## LESS Theme Parameters

For LESS theme parameters, the following guidelines apply:

-   Use the correct theme parameter - do not find by color value, but by semantics. In general, let the visual designers give the correct parameter to use.

    If finding a color for a text, do not use any border or background color parameter. Start with `@sapUiText` and try to find something more specific such as `@sapUiHeaderText`. Use parameters such as `@sapUiTextInverted` for bright-on-dark scenarios.

    If no suitable parameter exists, derive the color by calculation from a suitable parameter.

-   Do **not** add parameters to the public API \(using annotations\) without sufficient clarification with designers and product owners.

-   If you create your own local parameters, you must ensure that the names you define are unique by using name\(space\) prefixes.

    For **control-specific** parameters in `*.less` files, use a combination of the library name and the `*.less` file name for the prefix. Start with an underscore. Separate each part of the library namespace and the file name from each other using underscores as well.

    > ### Tip:  
    > For example, you can define the following prefix:
    > 
    > **Library**: `sap.ui.core`
    > 
    > **File**: `sap/ui/core/themes/base/MyControl.less`
    > 
    > **Prefix**: `@_sap_ui_core_MyControl_`

    For **library-specific** parameters in `library.source.less` files, use the library name for the prefix. Start with an underscore. Separate each part of the library namespace from each other using underscores.

    > ### Tip:  
    > For example, you can define the following prefix:
    > 
    > **Library**: `sap.ui.core`
    > 
    > **File**: `sap/ui/core/themes/base/library.source.less`
    > 
    > **Prefix**: `@_sap_ui_core_`

    > ### Caution:  
    > Local parameters themselves must **not** contain underscores. For example, do not write `@_sap_ui_core_MyControl_Some_Color`, but write <code>@_sap_ui_core_MyControl_<b>SomeColor</b></code> instead.

-   When defining URLs as parameters use the proper `url()` format: `@sapUiMyUrl: url(./path/to/img.png)`
    -   Do **not** use escaped strings \(~\): `@sapUiMyUrl: ~"path/to/img.png"`

    -   Do **not** use absolute URLs: `@sapUiMyUrl: url(/absolute/path/to/img.png)`



