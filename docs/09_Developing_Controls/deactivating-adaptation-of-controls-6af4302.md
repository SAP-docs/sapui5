<!-- loio6af43022e00945019903f8e9410eb6e5 -->

# Deactivating Adaptation of Controls

You can specify that some controls cannot be adapted.

To deactivate adaptation of controls, use the following design-time metadata:

-   `{ actions: "not-adaptable" }`: Disable all actions.

-   `{ actions: "not-adaptable-tree" }`: Disable all actions on a control and all its children.

-   `{ actions: "not-adaptable-visibility" }`: Disable all actions that influence the visibility: *reveal* and *remove*.


You can deactivate adaptation of dependent child controls by overwriting the `actions` property. There are two options to do so:

-   Overwrite with `null` value \(soft\)

    Overwrites all actions for all other controls with `null` values. No actions are available for adaptation, but the controls are still adaptable. They can have property changes or other technical change handlers, like `addXML`.

    ```
    ... propagateMetadata: function() { return { actions: null } } ...
    ```

-   Overwrite with `not-adaptable` value \(hard\)

    Overwrites all actions for all other controls with `null` values and determines that the control is not adaptable \(not editable\). Also, no property changes and other technical change handlers are possible.

    ```
    ... propagateMetadata: function() { return { actions: "not-adaptable" } } ...
    ```


You can also deactivate adaptation for a particular instance with instance-specific control design-time metadata. For more information, see [Instance-Specific Design-Time Metadata](instance-specific-design-time-metadata-8fa2324.md).

