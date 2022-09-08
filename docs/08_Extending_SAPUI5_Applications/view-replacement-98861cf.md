<!-- loio98861cf90b874e3394b666cfb347ff0b -->

# View Replacement

Views of a delivered standard application can be replaced to adapt the application to the customer needs.

If the extension points provided for view extension are not sufficient to meet the requirements of the custom application, you can replace the standard view with a custom view.

The following view is delivered in the standard application:

```js

<mvc:View xmlns="sap.m" xmlns:mvc="sap.ui.core.mvc">
    <TextView text="SAP View 'Sub1' - this one should have been replaced by the customer View"></TextView>  
</mvc:View>

```

This is the custom view to replace the standard view:

```js

<mvc:View xmlns="sap.m" xmlns:mvc="sap.ui.core.mvc">
    <TextView text="Custom View 'Sub1' - this one replaces the original SAP View 'Sub1'"></TextView>    
</mvc:View>
```

The following extension replaces the custom view with the view in the standard application

```js

extensions: {
    .....some more content
    "sap.ui.viewReplacements": {
        "samples.components.ext.sap.Sub1": {
            viewName: "samples.components.ext.customer.CustomSub1",
            type: "XML"
        }
    },
    .....some more content

```

