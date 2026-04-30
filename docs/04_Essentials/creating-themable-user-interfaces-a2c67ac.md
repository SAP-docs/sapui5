<!-- loioa2c67acd17a948ee89344676762e0c2a -->

# Creating Themable User Interfaces

Best practices for developing SAPUI5 applications and controls that properly adapt to different themes while ensuring an excellent and consistent user experience, good performance, and consistent accessibility standards across all themes.



## Modern Theming Approach

SAPUI5 supports CSS custom properties as the main theming mechanism. This modern approach provides:

-   **Native browser support** with optimal performance

-   **Runtime flexibility** for dynamic theme changes

-   **Simplified development** without build-time compilation

-   **Better maintainability** with standard CSS syntax




## General Principles: Using CSS Custom Properties

Regardless of whether you develop applications, controls, or libraries, use CSS custom properties \(also known as CSS variables\) for theme-aware styling instead of hard-coded values. For a list of available custom CSS properties and their values, see the [Theme Parameter Toolbox](https://ui5.sap.com/test-resources/sap/m/demokit/theming/webapp/index.html).



### In-Application Development

For quick customization, you can reference existing CSS custom properties or override existing styles specifically.

```
/* Application-specific theming */

.myAppNotepadControl {
  /* Making custom control theme-aware */
  background-color: var(--sapBackgroundColor);
  box-shadow: var(--sapContent_Shadow1);
}

/* Application-specific overrides */

/* Given the following XML View definition:
<App class="myApp" xmlns="sap.m">
  <!-- ... -->
    <Button class="myCustomBorderRadius" ... />
  <!-- ... -->
  <dependents>
    <Dialog class="myAwesomeBackground" ...>
      <!-- ... -->
    </Dialog>
  </dependents>
</App>
*/

.myApp .sapMBtn.myCustomBorderRadius {
  border-radius: 8px; /* Custom border radius for specific sap.m.Button within myApp */
}

/* Popup controls (sap.m.Dialog, sap.m.Popover, etc.) render in static area outside myApp. */
.sapMDialog.myAwesomeBackground {
  --sapGroup_ContentBackground: url("..."); /* Custom content background for specific sap.m.Dialog */
}
```



### Runtime Parameter Access \(If Required\)

For accessing theme parameters at runtime, for example, if CSS custom properties are insufficient, or LESS parameters need to be accessed, use the `sap/ui/core/theming/Parameters.get` API. For detailed usage patterns, asynchronous handling, and migration guidelines, see the Runtime Parameter Access \(`Parameters` API\) section in [Enhanced Theming Concepts](enhanced-theming-concepts-45df6df.md).



## In-Library Development



### Organizing Theme Files and Parameters

Theme files and parameters should be organized in dedicated theme files following the established conventions.

```
com.myorg.mylib/src/themes/
├── base/
│   ├── library.source.less
│   └── shared.less
├── my_theme/
│   ├── library.source.less
│   └── shared.less
└── my_dark_theme/
    ├── library.source.less
    └── shared.less
```

**Where:**

-   `com.myorg.mylib` is your library's namespace

-   `base/` contains theme-independent styles applied to all themes

-   Theme folders \(`my_theme/`, `my_dark_theme/`\) contain theme-specific customization

-   `library.source.less` serves as the main entry point for the LESS build process


> ### Note:  
> While these files have a `.less` extension for tooling compatibility, you should primarily use native CSS syntax within them. LESS-specific syntax should only be used when you need advanced features as covered in [Enhanced Theming Concepts](enhanced-theming-concepts-45df6df.md).

**CSS vs LESS File Options**

-   Option 1 \(recommended\): Using `.less` files with SAPUI5 CLI

    Use `.less` files, organized as shown above, with native CSS syntax for maximum compatibility. For build setup and configuration, see [SAPUI5 CLI](https://ui5.github.io/cli/stable/).

-   Option 2: Direct CSS files without tooling

    Alternatively, you can provide a `library.css` file directly in the theme folder if you prefer to work without build tooling.

    Remember that without tooling, you must provide a `library.css` file for each theme you want to support:

    ```
    com.myorg.mylib/src/themes/
       ├── base/
       │   └── library.css           // Base theme styles
       ├── sap_horizon/
       │   └── library.css           // Horizon theme styles
       ├── sap_horizon_dark/
       │   └── library.css           // Horizon dark theme styles
       ├── sap_horizon_hcb/
       │   └── library.css           // High contrast black theme
       └── sap_horizon_hcw/
           └── library.css           // High contrast white theme
    ```


If you use the SAPUI5 CLI for building and provide both a `library.css` file and a `library.source.less` file, be aware that the SAPUI5 CLI will always process the `library.source.less` file during the build process and **overwrite** the existing `library.css` file. To avoid this, do the following:

-   Use only `library.source.less` files when working with SAPUI5 CLI \(recommended\)

-   Use only `library.css` files when not using SAPUI5 CLI build tooling

-   Never mix both file types in the same theme folder when using SAPUI5 CLI

**Advanced Organization for Larger Libraries**

For libraries with multiple controls, organize files by functionality:

```
com.myorg.mylib/src/themes/base/
├── library.source.less
├── shared.less              // Common variables and mixins
├── MyButton.less            // Button-specific styles
├── MyInput.less             // Input-specific styles
└── MyTable.less             // Table-specific styles
```

Take the following file type guidelines into account:

-   **Main file** \(`library.source.less`\): Imports all other files and serves as build entry point.

    ```
     /* library.source.less - Import structure */
       @import "shared.less"; // Import shared variables first
       @import "MyButton.less"; // Import control-specific files
       @import "MyInput.less";
       @import "MyTable.less";
    ```

-   **Shared files** \(`shared.less`\): Variables, mixins, and CSS used across multiple controls.

    ```
     /* shared.less - Common variables */
       :root {
         --_my_lib_base_spacing: var(--sapContent_Padding_M);
         --_my_lib_border_radius: 4px;
         --_my_lib_focus_color: var(--sapContent_FocusColor);
       }
    ```

-   **Control-specific files** \(`MyButton.less`\): Properties that are specific to individual controls.

    ```
    /* MyButton.less - Button-specific properties */
       :root {
         --_my_lib_button_height: 2.25rem;
         --_my_lib_button_background: var(--sapButton_Background);
       }
    
       .myLibButton {
         height: var(--_my_lib_button_height);
         background-color: var(--_my_lib_button_background);
         border-radius: var(--_my_lib_border_radius); /* from shared.less */
       }
    ```




### Defining Theme Parameters

**Separate Definition of Parameters**

Create dedicated parameter files instead of adding CSS directly to `library.source.less`. Afterwards, import all relevant files in `library.source.less` as it serves as the build entry point.

```
/* com.myorg.mylib/src/themes/base/library.source.less */
@import "shared.less";
```

```less
/* com.myorg.mylib/src/themes/base/shared.less */
:root {
  --_my_lib_control_background: var(--sapBackgroundColor);
  --_my_lib_control_border_color: var(--sapNeutralBorderColor);
  --_my_lib_control_text_color: var(--sapTextColor);
}
```

Use the [Theme Parameter Toolbox](https://ui5.sap.com/test-resources/sap/m/demokit/theming/webapp/index.html) to explore available custom CSS properties and their current values.

**Theme-Specific Customization**

For theme-specific adjustments, create corresponding parameter files in theme folders:

```
/* com.myorg.mylib/src/themes/my_dark_theme/shared.less */
:root {
  /* Inherit base parameters */
  --_my_lib_control_background: var(--sapBackgroundColor);
  --_my_lib_control_border_color: var(--sapNeutralBorderColor);
  --_my_lib_control_text_color: var(--sapTextColor);

  /* Dark theme specific additions */
  --_my_lib_control_shadow: var(--sapContent_Shadow1);
}
```

This approach provides clear separation between base styles and theme-specific customization while maintaining proper build integration.

**Semantic Naming Convention**

Use descriptive names that reflect the parameter's purpose, not its appearance.

-   ✅ **Correct**: `--_my_lib_button_primary_background` \(semantic naming\)

-   ❌ **Incorrect**: `--_my_lib_blue_color` \(appearance-based naming\)


**CSS Custom Property Naming Format**

When defining your own CSS custom properties for theming, follow these naming conventions to ensure uniqueness and avoid conflicts within SAPUI5 or with other libraries.

-   **Start with underscore**: All custom CSS properties must begin with `--_`

-   **Use snake\_case**: Use underscores to separate all parts including parameter names

-   **Library namespace with underscores**: Convert dots to underscores \(`my.custom.lib` → `my_custom_lib`\)

-   **Lowercase naming**: Use lowercase letters throughout


For library-specific parameters defined in shared theme files \(`shared.less`\), use the pattern <code>--_<i>&lt;library_namespace&gt;</i>_<i>&lt;parameter_name&gt;</i></code>.

```
/* Library: my.custom.lib, File: shared.less */
:root {
  --_my_custom_lib_common_spacing: 1rem;
  --_my_custom_lib_error_color: #d32f2f;
}
```

For control-specific parameters defined in control-specific theme files, use the pattern <code>--_<i>&lt;library_namespace&gt;</i>_<i>&lt;file_name&gt;</i>_<i>&lt;parameter_name&gt;</i></code>.

```
/* Library: my.custom.lib, File: MyButton.less */
:root {
  --_my_custom_lib_my_button_primary_background: #0070f2;
  --_my_custom_lib_my_button_hover_background: #005ce6;
}
```

Usage in CSS:

```
myCustomLibButton {
  background-color: var(--_my_custom_lib_my_button_primary_background);
  padding: var(--_my_custom_lib_common_spacing);
}

.myCustomLibButton:hover {
  background-color: var(--_my_custom_lib_my_button_hover_background);
}

.myCustomLibInput.error {
  border-color: var(--_my_custom_lib_error_color);
}
```

**Summary**:

-   ✅ **Correct**: `--_my_custom_lib_button_primary_background`

-   ❌ **Incorrect**: `--myCustomLibButtonPrimaryBackground` \(no underscore prefix, wrong case\)

-   ❌ **Incorrect**: `--_my_custom_lib_button_blue_background` \(appearance-based naming\)

-   ❌ **Incorrect**: `--_my.custom.lib_button_background` \(dots instead of underscores\)




### Defining Control-Specific Theme Parameters

Create parameters that are owned by your library and follow a logical hierarchy when you define them:

```
/* In your control's theme files */

/* Base level - fundamental properties */
:root {
  --_my_controls_base_background: var(--sapBackgroundColor);
  --_my_controls_base_text: var(--sapTextColor);
}

/* Control level - specific control types */
:root {
  --_my_controls_data_table_header_background: var(--sapList_HeaderBackground);
  --_my_controls_data_table_row_hover_background: var(--sapList_Hover_Background);
  --_my_controls_data_table_border_color: var(--sapList_BorderColor);
  --_my_controls_button_background: var(--_my_controls_base_background);
  --_my_controls_input_background: var(--_my_controls_base_background);
}

/* Variant level - states and variations */
:root {
  --_my_controls_button_primary_background: var(--sapButton_Emphasized_Background);
  --_my_controls_button_secondary_background: var(--_my_controls_button_background);
}
```

Structure your control CSS to use the defined parameters:

```
.myControlsDataTable {
  border: 1px solid var(--_my_controls_data_table_border_color);
}

.myControlsDataTable .header {
  background-color: var(--_my_controls_data_table_header_background);
  font-weight: var(--sapButton_Emphasized_FontWeight);
}

.myControlsDataTable .row:hover {
  background-color: var(--_my_controls_data_table_row_hover_background);
}
```



## Accessibility Compliance

Test your parameters for accessibility compliance. Follow the [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/) requirements to ensure your themes meet the accessibility standards. Make sure the following requirements are met:

-   `--sapBackgroundColor` and `--sapErrorBorderColor` are used together, which should fulfill the targeted WCAG success criteria related to non-text contrasts. Reusing such existing base parameters can also help align with the accessibility standards even if users switch to high contrast themes from SAPUI5 at runtime.

-   The existing focus indicator is fully visible. For more information, see, for example, [WCAG 2.2 "Failure of Success Criterion 1.4.11, 2.4.7 and 2.4.13"](https://www.w3.org/WAI/WCAG22/Techniques/failures/F78).




## Testing and Validation



### Testing Across Themes

Validate your theming implementation across different themes, for example:

```
// Theming required from "sap/ui/core/Theming"

// Switch between themes to test adaptation
Theming.setTheme("my_registered_dark_theme");
Theming.attachApplied(() => {
  // Verify your controls adapt correctly
});
```

For a complete list of built-in themes provided by SAPUI5, see [Available Themes](available-themes-da0d2e7.md).



### Responsive Design Integration

Ensure that theming also works with responsive design:

```
.myResponsiveControl {
  background-color: var(--_my_lib_control_background);
  padding: var(--sapContent_Padding_M);
}

/* Responsive adjustments maintain theming */
@media (max-width: 768px) {
  .myResponsiveControl {
    padding: var(--sapContent_Space_Tiny);
    /* Background color automatically adapts */
  }
}
```



## CSS Coding Guidelines

Follow these essential CSS coding practices when creating themable interfaces:



### Syntax and Formatting

-   **Use semicolons**, even if optional, for better consistency and maintainability

-   **Use `rem` for dimensions** that should scale with font size; use `px` only for dimensions that must remain fixed regardless of the font size.

-   **Put browser-prefixed properties before the un-prefixed variant** to ensure proper fallback behavior


```
/* ✅ Good - Proper syntax and units */
.myCustomLibControl {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
  padding: 1rem; /* Scales with font size */
  border-width: 1px; /* Fixed size regardless of font */
}

/* ❌ Avoid - Inconsistent syntax */
.myCustomLibControl {
  transform: scale(1.1);
  -webkit-transform: scale(1.1);
  padding: 16px /* Missing semicolon, fixed size instead of scalable */
}
```



### Selector Guidelines

-   **Do not style HTML elements directly** without namespace prefixes; all selectors must include library-specific CSS classes to avoid duplicate names

-   **Avoid broad use of the universal selector** \(`*`\), especially without a direct child selector \(`>`\), due to performance implications

-   **Do not use `!important`**, as it makes custom adaptations more difficult. Use more specific selectors instead. If you have to deviate from these guidelines \(in exceptional cases only\), document the reasoning behind this.


```
/* ✅ Good - Specific, scoped selectors */
.myCustomLibContainer .myCustomLibButton {
  background-color: var(--_my_custom_lib_button_background);
}

.myCustomLibDialog > .myCustomLibContent {
  padding: var(--_my_custom_lib_content_padding);
}

/* ❌ Avoid - Broad use of the universal selector (*) with properties heavy to the browser's rendering pipeline */
td * {
  width: ...;
  box-shadow: ...;
}

/* ❌ Avoid - Use of !important */
button {
  background-color: blue !important; /* Affects all buttons globally */
}

/* ⚠️ Exception - !important for critical accessibility override */
.myCustomLibHighContrast .myCustomLibButton {
  border: 2px solid currentColor !important; /* Required for high contrast accessibility compliance */
}
```



### Control Structure Guidelines

-   **Only use inline CSS for control-instance specific styling**, such as dynamic widths or positioning, that cannot be achieved through CSS classes

-   **Root elements should not have outer margins**; add any required spacing as padding inside the control. Root margins are owned by the parent control or layout.


```
 /* ✅ Good - No root margins, padding inside */
   .myCustomLibCard {
     padding: var(--_my_custom_lib_card_padding);
     /* No margin on root element */
   }

   .myCustomLibCard .myCustomLibContent {
     margin: var(--_my_custom_lib_content_margin); /* Internal spacing is fine */
   }

   /* ❌ Avoid - Root margins */
   .myCustomLibCard {
     margin: 1rem; /* This should be controlled by parent */
     padding: var(--_my_custom_lib_card_padding);
   }
```



## CSS Class Naming and Container Context



### CSS Class Naming Conventions

Follow consistent naming patterns for CSS classes in your custom controls and libraries:

**Namespace-Based Naming:**

-   Use your library namespace in camel case letters as the prefix.

-   **Example**: `my.custom.lib` → `myCustomLibButton`, `myCustomLibInput`


```
/* ✅ Good - Namespace-based naming */
.myCustomLibButton {
  background-color: var(--_my_custom_lib_button_background);
}

.myCustomLibInput {
  border-color: var(--_my_custom_lib_input_border_color);
}

/* ❌ Avoid - Generic names that might conflict */
.button {
  background-color: var(--_button_background);
}
```



### Container Context Handling `*-CTX`

If controls need different visuals depending on their container context, use CSS cascades with marker CSS classes.

**Implementation Pattern**:

1.  **Define marker classes**

    -   Use a **semantic name** that describes the context, followed by **`-CTX`**.

    -   **Document** the purpose in JSDoc.

    -   Marker classes themselves contain **no CSS rules**. They act only as indicators.


2.  **Style child controls**

    -   Use CSS cascades so child controls adjust when a parent context is present.


**Example Implementation:**

```
/* Context markers: thatTable-CTX, thatDensity-CTX */
/* Child controls adapt to parent context */

.thatTable-CTX .myCustomLibButton.sapMBtn {
  padding: var(--sapContent_Padding_S);
  font-size: var(--sapFontSmallSize);
}

.thatCondensedDensity-CTX .myCustomLibInput.sapMInputBase {
  height: var(--sapElement_Condensed_Height);
}
```



## CSS Math Functions

CSS math functions can be used together with CSS custom properties, but they should be applied thoughtfully due to potential performance implications. Consider the following recommendations:

-   Use static values or existing solutions, such as CSS `Grid` or `FlexBox`, instead of CSS math functions as they can be expensive.

-   Use CSS math functions only sparingly and if necessary, for example, for the following scenarios:

    -   Complex calculations that cannot be achieved with standard CSS

    -   Dynamic sizing that depends on multiple custom properties

    -   Maintaining mathematical relationships between theme parameters


-   When using CSS math functions, evaluate the performance impact, especially on lower-end devices.




### Implementation Examples

**Basic `calc()` with custom properties**:

```
myCustomLibDialog {
  /* Calculate dynamic width based on viewport and padding */
  width: calc(100vw - var(--_my_custom_lib_dialog_margin) * 2);
  max-width: calc(800px - var(--_my_custom_lib_padding));
}
```

**Complex calculations with multiple functions**:

```
.myCustomLibResponsiveGrid {
  /* Use min() for responsive sizing with custom properties */
  grid-template-columns: repeat(auto-fit, minmax(min(250px, 100%), 1fr));
  gap: max(var(--_my_custom_lib_min_spacing), 2vw);
}
```

**Performance-conscious approach**:

```
/* ✅ Good - Simple calculation when needed */
.myCustomLibContainer {
  padding: calc(var(--_my_custom_lib_base_spacing) * 2);
}

/* ❌ Avoid - Overly complex calculations */
.myCustomLibOverComplex {
  width: calc(
    100vw -
    var(--_my_custom_lib_sidebar) -
    max(var(--_my_custom_lib_padding), 2rem) * 2 -
    min(var(--_my_custom_lib_margin), 3vw)
  );
}
```



### Best Practices for Math Functions

-   **Consider alternatives first**: Evaluate if CSS `Grid`, `FlexBox`, or static values might work instead.

-   **Keep calculations simple**: Avoid nested or overly complex expressions.

-   **Use meaningful custom properties**: Make calculations readable and maintainable.

-   **Test across devices**: Verify performance on various device types.

-   **Document complex calculations**: Explain the purpose and expected behavior.




## CSS Selector Performance

When working with large datasets, be aware of CSS selector performance. For detailed guidance on identifying and resolving CSS performance issues with large datasets, see [Theming FAQ](theming-faq-d0db4d5.md).

