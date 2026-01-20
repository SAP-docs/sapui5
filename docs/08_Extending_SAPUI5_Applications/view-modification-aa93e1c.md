<!-- loioaa93e1c6953a41b48cd912a7331eadee -->

# View Modification

View modification lets you change specific properties of controls in standard views without altering the structure of the view itself.

Currently, view modification is restricted to the `visible` property of controls, meaning that you can hide controls in your custom application.

To modify a control, it must meet the following requirements:

-   The control must have a `visible` property.
-   The control must have a stable ID defined in the view.
-   The combination of view name and control ID must uniquely identifiy the control.

View modification works across different view types, including XML views and typed views.



## Example

Here's an example for a view named `SampleView.view.xml` in the standard application:

```
<mvc:View xmlns="sap.m" xmlns:mvc="sap.ui.core.mvc">
    <Text text="SAP View 'SampleView' - the text after this one is hidden by customizing: "></Text>
    <Text id="someCustomizableTextControl" text="This text is made invisible by customization"></Text>  
</mvc:View>
```

To hide the second `Text` control with the `someCustomizableTextControl` ID, you would configure the view modification in your component's `manifest.json` like this:

```
extensions: {  
    "sap.ui.viewModifications": {
        "samples.components.ext.sap.SampleView": {
            "someCustomizableTextControl": {
                "visible": false
            }
        }
    }
}
```

The view modification configuration follows this structure:

-   **`sap.ui.viewModifications`**: This subsection of `sap.ui5/extensions` identifies this as a view modification.

-   **`samples.components.ext.sap.SampleView`**: The fully qualified name of the view you want to modify.

-   **`someCustomizableTextControl`**: The ID of the specific control you want to modify.

-   **`"visible": false`**: The property modification. In this case, it hides the control.


When the application loads, SAPUI5 automatically applies these modifications, making the specified control invisible without requiring any changes to the original view definition.

