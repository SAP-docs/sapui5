<!-- loio933965ba8c0440308e1e3233be7bc52f -->

# Main Methods

Overview of the two main methods used in the `sap.f.FlexibleColumnLayoutSemanticHelper` class.

**`getCurrentUIState()`**

This method returns an object, providing the following detailed information about the current state of the `FlexibleColumnLayout`:

-   The current layout of the control

-   The relative sizes and visibility of the control's columns

-   Whether the control currently displays a page in fullscreen \(and is fullscreen explicitly set, or is this due to device size constraints?\)

-   What action buttons the app should display, in which column, and what control layout appears when these buttons are chosen


The example below shows a sample value of the `actionButtonsInfo` field of this object:

```
"actionButtonsInfo":{
       "midColumn":{
         "fullScreen":null,
         "exitFullScreen":null,
         "closeColumn":null
       },
       "endColumn":{
         "fullScreen":"EndColumnFullScreen",
         "exitFullScreen":null,
         "closeColumn":"TwoColumnsBeginExpanded"
       }
   }

```

This means that currently the app should not display any action buttons in the `Mid` column. In the `End` column however, there should be two action buttons – *Fullscreen* and *Close*. If the user chooses the *Fullscreen* button, the layout should change to `EndColumnFullScreen`, and if the user chooses the *Close* button, the layout should change to `TwoColumnsBeginExpanded`.

**`getNextUIState(iNextLevel)`**

This method tells you to what layout the control should transition, and what kinds of action buttons would be displayed to represent a different logical level. The argument `iNextLevel` is a zero-based int. 0 stands for the initial logical level, 1 - for master and detail, 2 - for master, detail, and detail-detail, 3 and above – for the subsequent logical levels.

If the current layout is `OneColumn` \(only the `Begin` column is displayed\), and the user selects an item from it, both master and detail should be displayed. To determine the recommended layout to display them, call `getNextUIState(1)`. It will return an object with a layout field with value `TwoColumnsBeginExpanded`. Later, if the user selects an item from the `Mid` column, call `getNextUIState(2)` to determine the layout to use for the detail-detail level. Alternatively, if the user choses an item in the `Begin` column, call again `getNextUIState(1)` to determine the proper two-column layout to switch to.

Note that the `getNextUIState` method is not static – its return value depends on the current state of the control. For example, calling `getNextUIState(2)` will return `ThreeColumnsMidExpanded` if currently a two-column layout is displayed, but `EndColumnFullScreen` - if a fullscreen layout is displayed, etc.

**Related Information**  


[API Reference: `sap.f.FlexibleColumnLayoutSemanticHelper`](https://ui5.sap.com/#/api/sap.f.FlexibleColumnLayoutSemanticHelper)

