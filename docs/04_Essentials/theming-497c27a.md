<!-- loio497c27a8ee26426faacd2b8a1751794a -->

# Theming

SAPUI5 is an HTML library, therefore styling is done using Cascading Style Sheets \(CSS\). This allows for creating an impressive visual experience using a widely known standard technology which is well-accepted on the market.

SAPUI5 supports you when creating and using different visual designs - called **themes** - that can be used alternatively and switched on the fly. This way, the same application can look very different, depending on the user's design preference or accessibility requirements.



## Theming Approach

SAPUI5 offers a modern theming approach with the following key features:

-   **CSS custom properties** providing all theming-related colors, metrics, and values \(available as of SAPUI5 1.127.0\)
-   **Theme switching** with programmatic APIs for dynamic theme changes
-   **Automatic CSS management**, where the framework handles loading and updating
-   **Performance optimization** through efficient CSS loading strategies

> ### Note:  
> Variables, mixins, and other LESS features have been deprecated as of version 1.127.0 in favor of CSS custom properties.



## Core Concepts



### Themes, Libraries, and CSS Artifacts

-   Each SAPUI5 library \(such as `sap.ui.core`, `sap.m`\) provides a `library.css` file per theme.

-   Themes can provide a `custom.css` with customer overrides.

-   SAPUI5 computes and requests the correct files based on the active theme, libraries used, and configuration.




### Default Behavior

-   If no theme is specified by any of the available configuration mechanisms, SAPUI5 automatically applies a default theme.

-   The default theme depends on the SAPUI5 version and is currently one of the themes of the *Horizon* theme family, for example, `sap_horizon`, depending on which flavor is selected in the Demo Kit.

-   If no theme has been specified, SAPUI5 also considers the system's light or dark mode settings and automatically applies the corresponding theme flavor. For example, if the user's system preference is dark mode, and no theme has been specified, SAPUI5 automatically applies `sap_horizon_dark`.




### CSS Custom Property Integration

Theme parameters are accessible as CSS custom properties:

-   CSS custom property: `--sapButton_Background`




## Overview of Theming Capabilities

SAPUI5 provides comprehensive theming capabilities using multiple approaches:

-   CSS custom properties \(recommended\)
-   Runtime parameter access
-   Theme discovery



### CSS Custom Properties \(Recommended\)

The modern approach uses CSS custom properties for a theme-aware styling:

```
.myComponent {
  background-color: var(--sapButton_Background);
  border-color: var(--sapButton_BorderColor);
  color: var(--sapButton_TextColor);
}
```

-   **Direct CSS usage**: No `JavaScript` required for basic theming
-   **Performance**: Optimal performance with native browser support
-   **Theme awareness**: Automatically updated when themes change



### Runtime Parameter Access

For dynamic theming scenarios, the `Parameters` API provides `JavaScript` access to theme values. For more information, see [Enhanced Theming Concepts](enhanced-theming-concepts-45df6df.md).



### Theme Discovery

To explore available custom CSS properties and their current values, use the [Theme Parameter Toolbox](https://ui5.sap.com/test-resources/sap/m/demokit/theming/webapp/index.html).



## Creating Custom Themes

You can create custom themes using several approaches, depending on your requirements and technical expertise.



### UI Theme Designer \(Recommended\)

The UI theme designer is the easiest way to create custom themes:

-   **Easy customization:** Modify color schemes with instant live preview
-   **Non-technical approach:** No CSS knowledge required for basic modifications
-   **Custom CSS support:** Add custom CSS for advanced adaptations
-   **Theme export:** Generate complete theme packages for deployment

For more information, see [UI Theme Designer](https://help.sap.com/viewer/product/UI_THEME_DESIGNER/Cloud/en-US).



### Theme from Scratch

You can create a completely new theme by writing CSS files if you meet the following requirements:

-   Create `library.css` files for each SAPUI5 library you want to support
-   Follow the required folder structure: `themes/[theme-name]/[library]/library.css`
-   Define all required theme parameters as CSS custom properties



## Best Practices



### Dos ![Yes](../02_Read-Me-First/images/Green_Led_3cb17ee.gif)

-   **Use CSS custom properties** as the primary theming approach
-   **Test themes** across all target browsers and devices
-   **Ensure accessibility compliance**, such as contrast ratios
-   **Use the UI theme designer** for productive scenarios where themes are created on a company-wide level
-   **Follow semantic naming** when creating custom themes



### Don'ts ![No](../02_Read-Me-First/images/Red_Led_5befb5a.gif)

-   **Don't hard-code colors** or metrics in custom CSS
-   **Don't use deprecated LESS features** in new development
-   **Don't create overly complex CSS selectors** that impact performance
-   **Don't forget to test accessibility** for custom themes



## Next Steps

For detailed implementation guidance, see the specialized topics below this topic.

**Related Information**  


[Available Themes](available-themes-da0d2e7.md "Provides a list of themes and their names.")

[Supported Combinations of Themes and Libraries](../02_Read-Me-First/supported-combinations-of-themes-and-libraries-38ff8c2.md "This chapter gives an overview of the possible combinations of themes and libraries for the SAPUI5 versions that are still in maintenance.")

[UI Theme Designer](https://help.sap.com/viewer/product/UI_THEME_DESIGNER/Cloud/en-US)

