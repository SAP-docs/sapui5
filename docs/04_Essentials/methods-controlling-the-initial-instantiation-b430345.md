<!-- loiob430345887f1419fba50320b57c1bdf9 -->

# Methods Controlling the Initial Instantiation

SAPUI5 provides two methods for the initial instantiation of the component.

You can use the following methods:

-   `init`

    Overwrite this method for example to connect the model between the control and the component. This method is **not** called by the application directly, but called automatically when you create the instance of the component. The routing instance needs to be initialized here, see [Initializing and Accessing a Routing Instance](initializing-and-accessing-a-routing-instance-acdb6cd.md).

-   `createContent`

    By default, the UI component creates the `sap.ui5/rootView` declared in the manifest as the root control, see [Descriptor Dependencies to Libraries and Components](descriptor-dependencies-to-libraries-and-components-8521ad1.md).

    Alternatively, you can overwrite this method and programmatically create the root control. You can either return the root control immediately or return a Promise resolving with the root control. For more information, see [`sap.ui.core.UIComponent#createContent`](https://ui5.sap.com/#/api/sap.ui.core.UIComponent/methods/createContent). Using `createContent` in an asynchronous fashion requires the UI Component to implement the`sap.ui.core.IAsyncContentCreation` interface.

    Implementing this interface has the following additional effects:

    -   The routing configuration and the root view will automatically be set to `async=true`,

    -   Views \(and Fragments\) nested in asynchronous Views are now also created asynchronously if their owner component implements the mentioned interface \(this of course includes the root view\),

    -   the loading and processing of nested Views will be contained in the factory Promise of `sap.ui.core.Component.create`. The same is true for nested asynchronous Views and Fragments. This means that once your `Component.create` factory call resolves, all inner controls are created.


    The following code snippet shows a sample of the `createContent` function returning the root control directly:

    ```js
    sap.ui.define(["sap/ui/core/UIComponent", "sap/m/Label"], function(UIComponent, Label) {
        return UIComponent.extend("my.app.Component", {
            metadata: {
                manifest: "json"
            },
    
            createContent: function () {
                return new Label({ text: "Hello!" });
            }
        });
    });
    ```

    The following code snippet shows a UI Component that implements the `sap.ui.core.IAsyncContentCreation` interface. The `createContent` function returns the Promise of the [`XMLView.create`](https://ui5.sap.com/#/api/sap.ui.core.mvc.XMLView/methods/sap.ui.core.mvc.XMLView.create) factory:

    ```js
    sap.ui.define(["sap/ui/core/UIComponent", "sap/ui/core/mvc/XMLView"], function(UIComponent, XMLView) {
            return UIComponent.extend("my.app.Component", {
                metadata: {
                    manifest: "json",
                    interfaces: ["sap.ui.core.IAsyncContentCreation"]
                },
                createContent: function () {
                    return XMLView.create({ ... });
                }
            });
        });
    ```


> ### Note:  
> The settings passed to the `sap.ui.core.Component.create` or `sap.ui.component` factory calls are not available in the `Init` and `createContent` methods. Use `componentData` instead. For more information, see [`sap.ui.core.Component.create`](https://ui5.sap.com/#/api/sap.ui.core.Component/methods/sap.ui.core.Component.create).

You can also overwrite the getters and setters for component properties in the Component controller.

