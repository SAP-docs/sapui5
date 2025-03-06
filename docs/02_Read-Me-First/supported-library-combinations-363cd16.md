<!-- loio363cd16eba1f45babe3f661f321a7820 -->

# Supported Library Combinations

SAPUI5 provides a set of JavaScript and CSS libraries, which can be combined in an application using the combinations that are supported.



In general, most library combinations are supported. However, restrictions apply for the following libraries:

-   `sap.ui.commons` \(deprecated\)

-   `sap.ui.richtexteditor`\*

-   `sap.ui.suite` \(deprecated\)

-   `sap.ui.ux3` \(deprecated\)


These libraries can **only** be used in combination with the following libraries:



-   `sap.ui.core`

-   `sap.ui.layout`

-   `sap.ui.unified`

-   `sap.ui.table`

-   `sap.viz`




\*Combinations between `sap.m` and `sap.ui.richtexteditor` are allowed only for desktop apps. If your use case requires it and you have enabled the mobile theme, see the [sap.ui.richtexteditor.RichTextEditor](../10_More_About_Controls/sap-ui-richtexteditor-richtexteditor-d4f3f15.md) documentation.

**Related Information**  


[Deprecated Themes and Libraries](deprecated-themes-and-libraries-a87ca84.md "As SAPUI5 evolves over time, some of the UI controls are replaced by others, or their concepts abandoned entirely. This chapter gives an overview of the most important deprecations at theme and library level. Individual control deprecations and more information about the controls replacing them can be found in the API reference within the Demo Kit.")

