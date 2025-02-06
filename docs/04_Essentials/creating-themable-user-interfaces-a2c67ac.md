<!-- loioa2c67acd17a948ee89344676762e0c2a -->

# Creating Themable User Interfaces

There are several things you should keep in mind to ensure that an application can actually be themed.



## General Aspects

Do not hard-code colors and fonts if you want your control or application to be themable in the theme designer tool.

For example, if you hard-coded the font color to black, this color cannot be adjusted when you apply a custom theme. This can be problematic if you want to apply a custom theme with a dark background color because the font color cannot be adjusted to a light color.



## Stable Theme Parameters

-   Themes in SAPUI5 are built with the CSS preprocessor [LESS](http://lesscss.org/) and make use of a complex parameter structure.
-   You can view the entire set of basic theme parameters in this [sample](https://ui5.sap.com/#/entity/sap.ui.core.theming/sample/sap.ui.core.sample.BasicThemeParameters) in the Demo Kit.
-   SAPUI5 applications have access to these parameters at runtime via the API call `Parameters.get\(\)` from module `sap/ui/core/theming/Parameters`. These parameters not only differ in terms of themes, they are also not necessarily stable across different versions of SAPUI5. For this reason, you cannot rely on the completeness of the set of parameters.
-   To allow developers to build theme-dependent, custom-styled applications or controls, a subset of roughly 70 parameters representing colors for different types of usage \(such as border, backgrounds, charts\) is available.
-   The parameters in this subset can be considered as "stable", which means the following:
    -   We will not change the naming for these parameters.
    -   The contrast ratio between foreground- colors like text and the related background will remain stable.

-   Always choose parameters that fit best from a semantic perspective, do **not** choose them based on their color value.
-   This set is available across all predefined themes and should be handled with care. You should test your implementations for all themes to ensure the results are as expected.

    > ### Note:  
    > This approach can only cover the most common use cases. In addition, be aware that due to parameter value changes with future versions of SAPUI5 it might be necessary to rework your applications even when using the "stable" theme parameters described here.

-   For charts, two individual sets are available, Chart Accent and Chart Semantic. Both sets are logically independent. Therefore only one of these sets is to be used consistently across individual charts.



## Tips for SAPUI5 Application Developers Writing Custom HTML

-   LESS parameters are not accessible via CSS and only support standard libraries.
-   To ensure theme-dependent styling, only use basic theme parameters.
-   Read appropriate parameter values via API and set the elements' CSS properties rather than hard-coding colors or borrowing arbitrary style classes from control sets:

    ```js
    sap.ui.require(["sap/ui/core/theming/Parameters"], function(Parameters){
        var myColor = Parameters.get("sapUiButtonHoverBorderColor");
    });
    ```




## Tips for SAPUI5 Control Developers

-   Use the theme LESS parameters in CSS class definitions and rules.
-   Use the appropriate level of parameters for the control, creating new ones as appropriate. For example, do not use color values or quick theming parameters directly in CSS rules.
-   Follow the control parameter hierarchy conventions.

