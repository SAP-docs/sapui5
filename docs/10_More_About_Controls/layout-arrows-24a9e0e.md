<!-- loio24a9e0e2424245e4873c0f29f00144f4 -->

# Layout Arrows

Layout arrows are used to alter the current layout of the `FlexibleColumnLayout`.

The `FlexibleColumnLayout` provides layout arrows on screen sizes where more than one column may be displayed at one time \(desktop and tablet\). They allow the user to alter the current layout.

Layout arrows are the only way for the layout to change on control level, without the app changing it explicitly. Layout changes due to interaction with the layout arrows are only from one type of two-column layout to another type of two-column layout, or from one type of three-column layout to another type of three-column layout. Changing the number of active columns \(for example, from a two-column layout to a three-column layout\) can only happen on app level by directly manipulating the `layout` property from your controller.

Examples for layout changes due to layout arrows interaction:

-   In a `TwoColumsBeginExpanded` layout there is one arrow that changes it to `TwoColumnsMidExpanded`.

-   In a `TwoColumnsMidExpanded` layout there is one arrow that changes it to `TwoColumnsBeginExpanded`.

-   In a `ThreeColumnsMidExpanded` layout there are two arrows that allow changing the layout either to a `ThreeColumnsEndExpanded` or to `ThreeColumnsMidExpandedEndHidden` layout.


