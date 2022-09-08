<!-- loio607a316ea4cd47c893d69ef111428e9d -->

# Changing the Layout and Loading Views \(Best Practices\)

The app can load controls \(usually views\) in the three columns with the standard means \(`beginColumnPages`, `midColumnPages`, `endColumnPages` aggregations\) and navigate between them with the `.to()`, `.backToPage()` or any other public method, similar to the `sap.m.NavContainer` or `sap.m.SplitContainer` controls.

At the same time, the app can change the layout of the control by modifying the `layout` property.

If both a layout change and the loading of a new view need to happen as a result of one user action, the best practice is to change the layout first, and to load the views \(or navigate to already loaded views\) second. This would ensure that the columns are resized first \(as layout change is done synchronously\), and only then views are placed inside the already resized columns. This would eliminate the need for controls in the views to readapt to the new size after they are placed and rendered initially.

