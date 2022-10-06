<!-- loio623b01e57b2349e0888d9dc16020b135 -->

# Flexible Column Layout Semantic Helper

A helper class, designed to facilitate the implementation of apps based on the `sap.f.FlexibleColumnLayout` control and the SAP Fiori 2.0 design guidelines.

`FlexibleColumnLayout` gives you the freedom to implement any app logic that involves changing the layout \(showing/hiding columns\) as a result of the user’s actions. However, there are certain UX patterns that are considered as optimal and are recommended for SAP Fiori 2.0 apps. The `FlexibleColumnLayoutSemanticHelper` class helps you implement them by giving you tips about what layout to display when.

> ### Note:  
> Using this class is NOT mandatory in order to build an app with the `FlexibleColumnLayout`, but makes it easier to achieve the optimal UX recommended in the SAP Fiori 2.0 design guidelines.

The first 3 logical levels of information are displayed in the three columns side by side, and the forth \(and others\) are displayed in the `End` column in fullscreen. If at any time the user opens a page in fullscreen, all subsequent levels are also displayed in fullscreen.

Here is a short overview of some of the rules of the default rule set:

-   The control starts with `OneColumn` layout \(usually to display a list of items\).

-   When the user selects an item from the `Begin` column, the item's details are displayed in the `Mid` column and the layout should change to `TwoColumnsBeginExpanded`. Two action buttons are displayed on the page in the `Mid` column – *Fullscreen* and *Close*.

    -   Choosing the *Close* button changes the layout back to `OneColumn`.

    -   Choosing the *Fullscreen* button changes the layout to `MidColumnFullScreen`. The *Fullscreen* button is then replaced with an *ExitFullscreen* button, which restores the layout to `TwoColumnsBeginExpanded`.


-   If the user selects an item from the `Mid` column:

    -   If the current layout is `TwoColumnsBeginExpanded`/`TwoColumnsMidExpanded`, the layout changes to `ThreeColumnsMidExpanded`. The *Close* and *Fullscreen* buttons should now be displayed only in the `End` column.

    -   If the current layout is `MidColumnFullScreen`, the layout changes to `EndColumnFullScreen`.


-   If the user selects an item from the `End` column \(which represents the third logical level of information\), the layout should change to `EndColumnFullScreen` and the forth \(then fifth, etc.\) logical level should again be displayed in the `End` column.


