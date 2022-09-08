<!-- loioaa93e1c6953a41b48cd912a7331eadee -->

# View Modification

For modifying views, control properties of standard views can be changed.

The view modification is currently restricted to the `visible` property of controls, meaning that controls can be hidden in the custom application. The controls must have the `visible` property and the control's ID must be defined in the view. The view name together with the control ID uniquely determines the control in the standard application.

View modification is available for XML views, JS views and HTML views. Below is an example that explains how a view modification works. The first code snippet describes the `Sub3.view.xml` view in the delivered standard application.

```js
<mvc:View xmlns="sap." xmlns:mvc="sap.ui.core.mvc">
    <TextView text="SAP View 'Sub3' - the text after this one is hidden by customizing: "></TextView>
    <TextView id="someCustomizableTextControl" text="This text is made invisible by customization"></TextView>  
</mvc:View>
```

The following code snippet describes the extensions for the control `someCustomizableTextControl` with the `visible` property set to `false`.

```js
extensions: {  
    "sap.ui.viewModifications": {
        "samples.components.ext.sap.Sub3": {
            "someCustomizableTextControl": {
                "visible": false
            }
        }
    }
}
```

