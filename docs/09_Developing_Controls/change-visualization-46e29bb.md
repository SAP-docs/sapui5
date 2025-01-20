<!-- loio46e29bb05f2b41e2a8d21a2f5a9042db -->

# Change Visualization

Change visualization is a way for key users to get an overview of the changes that have been made on the UI.

Change visualization was introduced to provide key users with information about which parts of the application have changed and how they have changed. To provide semantic information about what has changed, change handlers should implement the `getChangeVisualizationInfo` function.

You can use the `getChangeVisualizationInfo` function to accurately display the change when the user is in *Visualization* mode. The changes are classified and grouped by categories. Each change is represented by a change indicator \(a small bubble\) located on the corresponding control; multiple changes made on the same control will result in the change indicator's color becoming darker. Selecting such a change indicator brings up a table with details for each change. To make this description suitable for your control / action, you can return the following information:

> ### Sample Code:  
> getChangeVisualizationInfo\(\) return object
> 
> ```
> // All properties are optional
> return {
>     affectedControls: ["control1"], //  Array of IDs of the controls which are affected by the change; default is the change selector
>     dependentControls: ["control2"], //  Array of IDs of controls that are also affected by the change; for example the source container of a "move" action
>     displayControls: ["control1"], // Array of IDs of the controls where the change indicator should be displayed; default is the change selector
>     descriptionPayload: {
>         category: ChangeCategories.RENAME, // Optional category to classify the change and optimize its visualization. All categories are enumerated in sap.ui.fl.changeHandler.common.ChangeCategories
>         descriptionText: "This text will always be shown on the indicator", // Optional text that overrides any standard text that is prepared for that change (if you want to show your own text)
>         descriptionTooltip: "This tooltip will always be shown on the indicator", // Optional tooltip that overrides any standard tooltip that is prepared for that change (if you want to show your own tooltip)
>         ... -> other category-specific parameters (see the list after this code sample) - these will be ignored if you already provide a descriptionText/descriptionTooltip
>     }, // Object containing additional information for the change visualization description,
>     updateRequired: true or false // If an element changes its ID (e.g. controls inside a SimpleForm), setting this parameter rebuilds the change indicator in the Visualization mode to keep it up-to-date (in the right place with the right information)
> }
> ```

For the `descriptionPayload`, you can define a category to optimize the visualization of that change. The following categories exist: ADD, MOVE, RENAME, COMBINESPLIT, REMOVE, OTHER. Some categories use specific parameters:

-   MOVE:

    -   `descriptionPayload.sourceParentContainer` - Parent container from which the element was moved.

    -   `descriptionPayload.targetParentContainer` - Parent container to which the element was moved.


-   RENAME:

    -   `descriptionPayload.originalLabel` - Label before the change was applied \(this parameter also supports bindings - the change visualization code resolves the binding before displaying the label\).

    -   `descriptionPayload.newLabel` - Label after the change was applied.


-   COMBINE:

    -   `descriptionPayload.originalSelectors` - Selectors of the elements that were combined.



For *settings* changes or changes with category *other*, you can also define a `descriptionText` and `descriptionTooltip` on the `descriptionPayload`, which is directly displayed in the change indicator. These texts replace the standard texts that are generated for the different categories:

-   `descriptionPayload.descriptionText` - The text that is displayed on the change indicator.

-   `descriptionPayload.descriptionTooltip` - The tooltip that is displayed on the change indicator, for example, when the text is long.


Some examples:

> ### Sample Code:  
> BaseRename.js
> 
> ```
> getChangeVisualizationInfo: function(oChange) {
>     const oNewLabel = oChange.getText([mRenameSettings.changePropertyName]);
>     return {
>         descriptionPayload: {
>             originalLabel: oChange.getRevertData(),
>             newLabel: oNewLabel?.value
>         }
>     };
> }
> ```

> ### Sample Code:  
> MoveControls.js
> 
> ```
> MoveControls.getChangeVisualizationInfo = function(oChange) {
>     const oChangeContent = oChange.getContent();
>     const oRevertData = oChange.getRevertData()[0];
>     return {
>         affectedControls: [oChangeContent.movedElements[0].selector],
>         dependentControls: [oChangeContent.source.selector],
>         descriptionPayload: {
>             sourceParentContainer: oRevertData.sourceParent,
>             targetParentContainer: oChangeContent.target.selector
>         }
>     };
> };
> ```

If you don't implement this function, a default change visualization is provided for the change, which contains minimal information. This information can potentially be incorrect depending on the complexity of your change. Therefore, we recommend that you check how the visualization looks for your change and make the necessary adjustments.

To check how the visualization looks, start the application in UI adaptation mode, and select *Visualization* in the header bar. For more information, see [Visualizing UI Changes](https://help.sap.com/docs/ui5-flexibility-for-key-users/ui5-flexibility-for-key-users/visualizing-ui-changes).

