<!-- loio98861cf90b874e3394b666cfb347ff0b -->

# View Replacement

View replacement lets you completely substitute an existing view in a standard application with your own custom implementation. This powerful extension mechanism gives you full control over the UI structure and behavior when other customization approaches aren't sufficient.



## When to Use View Replacement

View replacement should be your choice in the following cases:

-   **Insufficient extension points:** The standard view doesn't provide extension points in all the locations where you need them.
-   **Radical UI changes required:** You need to fundamentally restructure the user interface.
-   **Complete control needed:** Other customization methods, like view modifications or extension points, don't meet your requirements.

> ### Remember:  
> Before opting for view replacement, consider whether [Extension Points](extension-points-403c050.md) or [View Modification](view-modification-aa93e1c.md) could achieve your goals. View replacement completely overrides the original view, which means you'll need to maintain compatibility with any future updates to the standard application.



## How View Replacement Works

Here's an example of a basic view replacement:

Original view named `SampleView.view.xml` in the standard application:

```

<mvc:View xmlns="sap.m" xmlns:mvc="sap.ui.core.mvc">
    <Text text="SAP View 'SampleView' - this should be replaced by the customer View"></Text>  
</mvc:View>

```

Your custom replacement view, named `CustomView.view.xml`:

> ### Note:  
> You can still reference the original controller or, if needed, provide a completely new one. For more information, see the recommendations below.

```
<mvc:View xmlns="sap.m" xmlns:mvc="sap.ui.core.mvc" controller="samples.components.ext.sap.SampleView">
    <VBox class="sapUiMediumMargin">
        <Text text="Custom View 'Sub1' - this replaces the original SAP View 'SampleView'"></Text>
        <Button text="Custom Action" press="onCustomAction"/>
        <Panel headerText="Additional Content">
            <Text text="This content was not available in the original view"/>
        </Panel>
    </VBox>
</mvc:View>
```

To activate the view replacement, configure it in your component's `manifest.json` file

```
{
    "sap.ui5": {
        "extends": {
            "extensions": {
                "sap.ui.viewReplacements": {
                    "samples.components.ext.sap.SampleView": {
                        "viewName": "samples.components.ext.customer.CustomView",
                        "type": "XML"
                    }
                }
            }
        }
    }
}
```

The view replacement configuration follows this structure:

-   **`sap.ui.viewReplacements`**: This subsection of `sap.ui5/extensions` identifies this as a view replacement.

-   **`samples.components.ext.sap.SampleView`**: The fully qualified name of the view you want to replace.

-   **`viewName`**: The fully qualified name of your custom replacement view.

-   **`type`**: The view type.




## Best Practices

When implementing view replacements, follow these recommendations:

-   Maintain controller consistency: If the original view has a controller, ensure your replacement view is compatible with the standard controller interface, or provide a [Controller Replacement](controller-replacement-b0b14bf.md) as well.
-   Plan for updates: Since you're completely replacing the view, you'll need to manually incorporate any relevant updates from newer versions of the standard application.

