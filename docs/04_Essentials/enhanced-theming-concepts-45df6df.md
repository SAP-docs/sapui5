<!-- loio45df6dff504647c686ab9ba72af827f6 -->

# Enhanced Theming Concepts

On top of pure CSS, SAPUI5 offers advanced theming concepts and functions which can be used optionally. These concepts are outlined in detail below.



<a name="loio45df6dff504647c686ab9ba72af827f6__section_CSS"/>

## CSS Variables, Functions, and More

SAPUI5 provides a set of [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) \(also called "CSS variables"\) that allows you to make your application or custom controls theming-aware. The CSS custom properties are provided by the [SAP Theming Base Content](https://github.com/SAP/theming-base-content). It contains all necessary data to connect to the SAP global theming infrastructure. The content exposes the central set of colors, metrics, and resources of a theme. SAPUI5 applications or custom controls can easily make use of the CSS custom properties of the SAP Theming Base Content. This concept contributes to a consistent way of implementing and changing the styles. CSS provides a lot of additional features like calculations, nesting, and more.

Here is the syntax:

```
button {
    color: var(--sapButton_TextColor); /* buttons will automatically have the current text color, which is '#000000' right now */
    [...]
}
```

The browser then takes care of substituting all references to a CSS custom property by the current value of this variable. \(`--sapButton_TextColor`\). Every time a CSS custom property is changed at runtime, it will affect all usages.

For example, a specific theme can modify the CSS custom property values given by the base theme. So a control can just use `--sapButton_TextColor`; which will automatically apply the correct color for every theme or user modification: The theme generation will create one CSS file per theme, and the usage of the CSS custom property ensures that the theme-dependent value will always be taken into account. A visually very different theme can easily be created by simply changing a number of colors.

While every library and control can introduce their own CSS custom properties \(for example, `--_my_lib_button_text`\), those provided by the SAP Theming Base Content are the most important. To be theming-aware, custom CSS variables are ideally based on existing ones provided by the SAP Theming Base Content. For more information, see [Creating Themable User Interfaces](creating-themable-user-interfaces-a2c67ac.md).

Additional benefits of CSS custom properties are, for example:

-   They promote modular and maintainable code by centralizing common values in one place.
-   They facilitate cascading and inheritance, allowing you to define values that can be inherited by child elements.
-   They can be used to generically build simple styling tools that allow for a limited degree of freedom \(=changing the CSS custom property values\). The **UI theme designer** is an example of such a tool.
-   They can also be linked to metadata, for example, to which group of colors they belong, to which colors they need to have some visual contrast.

> ### Caution:  
> Although CSS custom properties can be manipulated via code at runtime without the need of a dedicated SAPUI5 re-rendering step, they must not be manipulated globally.
> 
> All controls that use the `Parameters` API might require a re-rendering after an SAP CSS custom property has been changed \(for example, charts\).



## Base Theme for Generic Style

While some of the style and layout applied using CSS clearly depends on the current theme, and customers are likely to modify such style rules, there are other style rules that are required for a control to work properly and unlikely to differ for different themes. Examples are the overflow behavior, the positioning of popup elements, the mouse cursor type, the display mode, and others.

SAPUI5 promotes and supports keeping those style definitions in the so-called **base** theme, which serves as a common base for all themes.

Themes are built upon this base style that defines their specific visual design by applying colors and images, sizes and fonts. SAPUI5 theme generation takes care of combining the base theme with the specific theme for each generated theme CSS file. Because the specific CSS is appended to the base theme, a specific theme can always override styles defined in the base theme. If this step is required often, the respective style declaration should probably not be located in the base theme.

Any style declarations that reference CSS variables \(at least those common ones defined in the base theme\) can also be done in the base theme, and it is sufficient to do it only there: The CSS generation will apply the correct value for each respective theme. So this split between base theme and specific themes avoids duplicate creation and maintenance of CSS parts that are common for all themes and keeps the CSS files that need to be written for any new theme smaller.



## Compilation of One CSS File

SAPUI5 CSS generation merges all CSS files of a library theme into **one** CSS file per theme that is loaded at runtime. To reduce the CSS size additionally, all comments and unnecessary whitespace can be removed while compressing verbose declarations into a more compact format at the same time.

During development, however, you would not want to have all styles defined within one file to do the following:

-   Keep a clear separation between the styles for different controls, which helps to estimate and test the impact of a CSS modification
-   Keep the door open for future optimization regarding runtime performance and data transfer by tailoring CSS files on server side that only contain the CSS required on the current application page



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

Depending on the values, these latter attributes might also need to be mirrored. As applications running in RTL mode add a `dir` attribute to the HTML tag in the DOM, custom styles can use `html[dir="rtl"]` to handle RTL-specific styling:

```
html[dir="rtl"]  .myselector {
}
```



## CSS Preloading for Performance Optimization

CSS preloading should be considered only when you have identified specific performance bottlenecks or visible unstyled content during the initial page load, and you have the technical capability to implement and maintain the CSS preload correctly. In all other cases, let SAPUI5 handle CSS loading automatically.

The **only supported way** to preload theme CSS is to place correctly formed `<link rel="stylesheet">` elements **before** the SAPUI5 bootstrap script.

Specifically, **do not** do the following:

-   Add `<link rel="stylesheet">` manually at runtime after bootstrap. This is not supported and might not work.

-   Use programmatic CSS injection after bootstrap either. In application development, the manifest section `sap.ui5/resources/css` can be used declaratively instead.


For each preloaded library stylesheet `link`, the following attributes are required:

-   `id="sap-ui-theme-<em>&lt;library namespace></em>` \(for example, `id="sap-ui-theme-sap.ui.core"`

-   `rel="stylesheet"` \(note that this is different from `rel="preload"`; we need the actual `"stylesheet"` link, not just preloading\)

-   `href`: Full URL to exact `library.css` including theme and version information

    -   The theme part in `href` must match the configured theme as, for example, defined in the `data-sap-ui-theme` bootstrap parameter

    -   Include the matching SAPUI5 distribution version via the URL parameter as `sap-ui-dist-version` for theming services. When you use theming services, including the matching version is critical for proper theme delivery and cache management as well as preventing duplicates that would otherwise occur if the actual SAPUI5 runtime version differs. Without proper version information, theming services may return errors, breaking the UI entirely , in addition to causing visual inconsistencies.





### Complete Preloading Example

```
<!DOCTYPE html>
<html>
<head>
  <!-- 1. Preloaded UI5 theme CSS (must be BEFORE bootstrap) -->
  <link id="sap-ui-theme-sap.ui.core" rel="stylesheet" href="/resources/sap/ui/core/themes/sap_horizon/library.css?sap-ui-dist-version=1.140.0" />
  <link id="sap-ui-theme-sap.m" rel="stylesheet" href="/resources/sap/m/themes/sap_horizon/library.css?sap-ui-dist-version=1.140.0" />
  <!-- 2. Bootstrap UI5 -->
  <script id="sap-ui-bootstrap" src="..." data-...="..."></script>
</head>
<body><!-- ... --></body>
</html>
```

> ### Caution:  
> **Critical Requirements:** 
> 
> -   Include stylesheet `link` elements for all libraries and their dependencies **in the correct order** to ensure styles are applied correctly.
> 
> -   The `link` elements must appear **before** the SAPUI5 bootstrap script.

> ### Note:  
> Remove these deprecated flags from existing projects, since they are no longer needed as of version 1.140:
> 
> -   `data-sap-ui-ready`
> 
> -   `sap-ui-preload-lib-css`
> 
> -   `sap-ui-versioned-lib-css`



## CSS Loading Order and Guarantees

SAPUI5 provides specific guarantees about the order in which CSS is loaded and applied:



### Library CSS Insertion Order

-   `library.css` link elements are added in the order in which the corresponding libraries call `sap/ui/core/Lib.init`

-   Generally speaking, this order is determined by library dependencies and loading sequence

-   Applications must not rely on a specific CSS loading order between libraries




### Custom CSS Override Guarantees

`custom.css` \(if present for the active theme\) is always appended last within the SAPUI5 theming system. This ensures that custom theme overrides take precedence over standard library styles. Additional stylesheets included by SAPUI5 are inserted **before**`custom.css` to maintain override behavior.



### Library Dependencies

While it is technically possible to declare explicit dependencies between libraries for theming purposes, this practice must be carefully considered:

-   Dependencies can be error-prone and hard to maintain.

-   It is not always easy to detect them immediately.

-   They might lead to unwanted behavior if not implemented correctly.


Before implementing theming dependencies, do the following:

-   Evaluate whether the dependencies are really necessary.

-   If required, ensure they are modeled correctly in your library's metadata using `library.js`, `.library`, `ui5.yaml`, and `pom.xml`.

-   Consider alternative approaches that might achieve the desired result without causing complex dependencies.




## Runtime Parameter Access \(`Parameters` API\)

CSS custom properties should always be your first choice. The `Parameters` API should only be used if CSS custom properties cannot achieve the same result, such as for dynamic theming calculations or when you need to access theme values in JavaScript at runtime.

The [`Parameters` API](https://ui5.sap.com/#/api/sap.ui.core.theming.Parameters) provides JavaScript access to theme parameters if CSS custom properties are insufficient for your use case.

> ### Caution:  
> Only use parameters from your own library. Parameters from other libraries are not necessarily part of their public APIs and might change without notice. This prevents unwanted dependencies and ensures stability.



### When to Use the `Parameters` API

-   **Dynamic theming calculations** that cannot be done with CSS

-   **Runtime theme value access** for JavaScript logic

-   **Integration with non-CSS systems** \(for example., canvas rendering, SVG manipulation\)

-   **Conditional styling** based on theme parameter values




### Modern Asynchronous API

The current `Parameters` API uses an asynchronous pattern with automatic fallbacks:

```
/ Parameters required from "sap/ui/core/theming/Parameters"

// Define carefully chosen defaults - critical for rendering!
let styles = Object.assign({
  // Default styles
  backgroundColor: "#ffffff",
  borderColor: "#cccccc",
  textColor: "#333333"
}, Parameters.get({
  name: [ // Single request for related actual parameters
    "myLibButtonBackground",
    "myLibButtonBorderColor",
    "myLibButtonTextColor"
  ], callback: (mParams) => {
    // Update UI when actual parameters become available
    Object.assign(styles, mParams);
    updateButtonStyles(styles);
  }
}));
// Render immediately with defaults or actual values
initializeButtonStyles(styles);
```



### API Behavior

The `Parameters` API returns values immediately if available, otherwise it executes the callback if ready:

**Overview of Callback Scenarios**


<table>
<tr>
<th valign="top">

Scenario

</th>
<th valign="top">

Return Value

</th>
<th valign="top">

Callback Executed

</th>
</tr>
<tr>
<td valign="top">

Single parameter available

</td>
<td valign="top">

`string` 

</td>
<td valign="top">

No

</td>
</tr>
<tr>
<td valign="top">

Single parameter available

</td>
<td valign="top">

`undefined` 

</td>
<td valign="top">

Yes \(after CSS loads\)

</td>
</tr>
<tr>
<td valign="top">

Multiple parameters available

</td>
<td valign="top">

`object` map

</td>
<td valign="top">

No

</td>
</tr>
<tr>
<td valign="top">

Multiple parameters available

</td>
<td valign="top">

`undefined` 

</td>
<td valign="top">

Yes \(after CSS loads\)

</td>
</tr>
</table>



### Migration from Deprecated Synchronous API

**Old synchronous usage** \(deprecated\):

```
// ❌ Deprecated - Will be removed
const value = Parameters.get("myLibButtonBackground");

```

**New asynchronous usage** \(current\):

```
// ✅ Current - Future-proof async API
const handleParameter = function(parameter) {
  // In case you request multiple parameters, `parameter` would be an array
  // In the example there is only a query for a single parameter, therefore we retrieve directly the value of this parameter
};
let result = Object.assign({
    "myLibButtonBackground": "#cccccc"
  }, Parameters.get({
    name: "myLibButtonBackground",
    callback: handleParameter
  })
);

handleParameter(result);
```



### Required Default Values

When migrating from a synchronous to an asynchronous API, you must provide meaningful default values:

-   **Accessibility**: Ensure sufficient contrast ratios

-   **Visual consistency**: Choose values that look reasonable across themes

-   **Fallback behavior**: Select values that provide acceptable user experience

-   **Testing**: Test your default values across different scenarios




### Best Practices

-   **Use only your own parameters**: Use parameters that have been defined and are owned by your own library.

-   **Always provide default values**: Never assume parameters are immediately available.

-   **Semantic naming**: Use descriptive parameter names that reflect their purpose.

-   **Documentation**: Document the parameters in your library for other developers.




### Theme-Dependent URLs and Images

While CSS custom properties handle most theming needs, theme-dependent URLs \(such as images that change between themes\) still require LESS parameter handling for proper relative URL resolution.

When to use theme-dependent URLs:

-   Images need to change between different themes
-   Relative URL resolution between theme files is required
-   The URL points to theme-specific resources

**Implementation example:**

```
/* In your theme files (e.g., shared.less) */
@myCustomLibControlIcon: url('./img/my-icon.png');
@myCustomLibControlBackground: url('./patterns/background.svg');
```

```
/* Usage in CSS */
.myCustomLibControl:before {
    background-image: @myCustomLibControlIcon;
}

.myCustomLibControl {
    background-image: @myCustomLibControlBackground;
}
```

**URL format requirements:**

-   Use the proper `url()` format:

    ```
    @myCustomLibUrl:
          url(./path/to/img.png)
    ```

-   Don't use escaped strings: Avoid `@myCustomLibUrl: ~"path/to/img.png"`

-   Don't use absolute URLs: Avoid

    ```
    @myCustomLibUrl:
              url(/absolute/path/to/img.png)
    ```


**Theme resolution behavior:**

-   Images are loaded relative to the theme where they are referenced.

-   If an image URL defined in `base` stays active in a derived theme, LESS calculates a relative URL from the derived theme to the base theme.

-   To override an image within the base theme, add an additional rule to the individual theme referencing the new image.




## LESS Parameters for Advanced Use Cases

While CSS custom properties are the recommended approach for theming, LESS parameters are still needed for specific advanced use cases. LESS parameters can only be used when building your LESS files with the SAPUI5 CLI.

> ### Caution:  
> LESS parameters should only be used if CSS custom properties cannot achieve the desired result. Use CSS custom properties for all standard theming scenarios.



### When to Use LESS Parameters

LESS parameters are required for the following:

-   **Theme-dependent URLs**: Images that need to change among themes

-   **Complex calculations**: Mathematical operations that need to be resolved at build time

-   **Color manipulations**: LESS color functions for generating variations

-   **Conditional theming**: Different rules based on parameter values




### Defining LESS Parameters

**Local Parameter Naming Conventions:**

When creating your own parameters \(which should always be local to your library\), follow these naming conventions to ensure uniqueness and avoid conflicts.

**Naming convention overview:**

-   CSS Classes: Write namespace in camel case letters \(for example., `myCustomLibClassName`\)

-   LESS Parameters: Use snake\_case with leading underscore \(e.g., `@_my_custom_lib_param_name`\)


**Control-specific parameters** \(in `*.less` files\):

-   Pattern: <code>@_<i>&lt;library_namespace_with_underscores&gt;</i>_<i>&lt;file_name&gt;</i>_<i>&lt;parameter_name&gt;</i></code>

-   Example: Library `my.custom.lib`, file `MyButton.less` → `@_my_custom_lib_my_button_background_color`


**Library-specific parameters** \(in `shared.less` files\):

-   Pattern: <code>@_<i>&lt;library_namespace_with_underscores&gt;</i>_<i>&lt;parameter_name&gt;</i></code>

-   Example: Library `my.custom.lib`, file `shared.less` → `@_my_custom_lib_common_spacing`


**Naming rules for LESS parameters:**

-   Start with underscore: All local parameters must begin with `_`

-   Use snake\_case: Use underscores to separate all parts including parameter names

-   Library namespace with underscores: Convert dots to underscores \(`my.custom.lib` → `my_custom_lib`\)

-   Lowercase naming: Use lowercase letters throughout

**Semantic parameter naming examples:**

```
/* ✅ Good - Semantic naming */
@_my_custom_lib_button_primary_background: #0070f2;
@_my_custom_lib_input_error_border_color: #d32f2f;
@_my_custom_lib_table_header_text_color: #32363a;

/* ❌ Avoid - Appearance-based naming */
@_my_custom_lib_button_blue_background: #0070f2;
@_my_custom_lib_input_red_border: #d32f2f;
@_my_custom_lib_table_dark_gray_text: #32363a;
```



### Theme-Dependent URLs and Images

Theme-dependent URLs require LESS parameter handling for proper relative URL resolution. Theme-dependent URLs are required in the following cases:



### Consuming LESS Parameters at Runtime

To access LESS parameters at runtime \(when CSS custom properties are insufficient\), use the `Parameters` API:

```
sap.ui.require(["sap/ui/core/theming/Parameters"], function(Parameters) {
  // Define meaningful defaults
  let styles = Object.assign({
    primaryColor: "#0070f2",
    primaryHover: "#005ce6"
  }, Parameters.get({
    name: ["_my_custom_lib_primary_color", "_my_custom_lib_primary_hover"],
    callback: function(mParams) {
      // Update when parameters become available
      Object.assign(styles, mParams);
      updateCustomRendering(styles);
    }
  }));

  // Initialize with defaults or actual values
  initializeCustomRendering(styles);
});
```



### Best Practices for LESS Parameters

-   **Use sparingly**: Use only if CSS custom properties cannot achieve the same result.

-   **Prefix with underscore**: All local parameters must start with `_`.

-   **Semantic naming**: Use descriptive names that reflect the purpose and not the appearance.

-   **Document usage**: Clearly explain when and why LESS parameters are used.

-   **Provide default values**: Always include fallback values when accessing via `Parameters` API.

-   **Library ownership**: Only use parameters from your own library.


