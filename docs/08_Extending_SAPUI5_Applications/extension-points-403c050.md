<!-- loio403c050da4ae4566b6aafec2bc590389 -->

# Extension Points

Extension points are locations in application views where you can insert custom content. These points are pre-defined by the application.

This topic covers two complementary aspects of working with extension points:

1.  How to make an application extensible by defining extension points as designated insertion locations for customization.
2.  How to extend an existing application by implementing custom content for these pre-defined extension points.

Understanding both perspectives is essential - whether you're an app developer aiming to make an application extensible and customizable for others, or a developer who needs to add functionality to an existing application without modifying the original source code.



## Preparing an Application for Extensibility

When developing an **extensible application**, you can define extension points in two ways:

-   **XML Extension Points**: Use `<core:ExtensionPoint name="extensionName" />` tags in XML views to mark customizable locations.

-   **JS Extension Points**: Programmatic creation using the `ExtensionPoint.load()` function within JavaScript-based views, such as [typed views](../04_Essentials/typed-view-e6bb33d.md).


You can use both ways to add extension points to a standard view, indicating the position where custom content can be inserted.

Each extension point can contain pre-defined default content that appears whenever the extending application doesn't provide a custom extension. We'll explain this in more detail in the following sections.

> ### Note:  
> When creating an extensible application, you must clearly document the types of controls that are suitable for the extension points you offer.



### Defining Extension Points in XML Views

In XML views, the location of an extension point is defined by an `<ExtensionPoint>` tag from the `sap.ui.core` namespace. The controls provided by the extending application are inserted at this specified location. The tag must therefore be placed in the view in places where a control would be placed.

In the XML view example below, three extension points are defined: `extension1`, `extension2`, and `extension3`. The extension name, along with the view name, identifies an extension point. The section [Extending an Application](extension-points-403c050.md#loio403c050da4ae4566b6aafec2bc590389__section_EAA) explains how users of your app can implement an extension point through their `manifest.json`.

```
<mvc:View xmlns="sap.m"  xmlns:core="sap.ui.core" xmlns:mvc="sap.ui.core.mvc">
    <core:ExtensionPoint name="extension1" />
    <Text text="SAP View 'Sub2' - this one is extended by the customer and there should be a button after this text"></Text>    
    <core:ExtensionPoint name="extension2" />   
    <core:ExtensionPoint name="extension3" />   
</mvc:View>

```

Additionally, you can provide default content in the extension point tag. It's used if no custom content is defined and is otherwise ignored. This feature is particularly interesting for aggregations which are filled by data binding. You can, for example, define default content to represent the binding template of an aggregation. Making this extensible allows customer applications to inject their own custom binding template, e.g. a special customized `ListItem`.

```
<mvc:View xmlns="sap.m"  xmlns:core="sap.ui.core" xmlns:mvc="sap.ui.core.mvc">
    <ListBox items="{/names}">
        <core:ExtensionPoint name="extension1">
            <!-- The ListItem acts as the default content and is created in case
            the extending app does not provide an implementation for the extension point "extension1" -->
            <ListItem text="{firstName}" />
        </core:ExtensionPoint>
    </ListBox>  
</mvc:View>
```



### Defining Extension Points in JS or TS Views

In JavaScript or TypeScript-based views, extension points can be created within the `createContent` method using the `ExtensionPoint.load()` function.

> ### Remember:  
> Use `ExtensionPoint.load()` instead of the deprecated `sap.ui.extensionpoint()` function. The `ExtensionPoint.load()` API should be called with `async: true` for modern SAPUI5 applications. To enable this asynchronous loading behavior, your `Component` must implement the [`sap.ui.core.IAsyncContentCreation`](https://ui5.sap.com/#/api/sap.ui.core.IAsyncContentCreation) interface. **The following samples assume that this is the case.**

> ### Caution:  
> The `sap.ui.extensionpoint()` function has been deprecated since SAPUI5 1.56. Use `ExtensionPoint.load()` instead.

**JavaScript example:**

```js
sap.ui.define([
    "sap/ui/core/mvc/View",
    "sap/ui/core/ExtensionPoint"
], (View, ExtensionPoint) => {
    "use strict";

    return View.extend("my.app.view.MyView", {
        createContent(oController) {
            return ExtensionPoint.load({
                container: this,
                name: "extension4",
                async: true
            });
        }
    });
});
```

**TypeScript example:**

```js
import View from "sap/ui/core/mvc/View";
import ExtensionPoint from "sap/ui/core/ExtensionPoint";
import Control from "sap/ui/core/Control";
import { $ViewSettings } from "sap/ui/core/mvc/View";

export default class MyView extends View {
    static readonly metadata: $ViewSettings = {
        // view metadata
    };

    createContent(controller?: object): Promise<Control[]> {
        return ExtensionPoint.load({
            container: this,
            name: "extension4",
            async: true
        });
    }
}
```

> ### Note:  
> These examples create a view with one extension point. It can be customized to hold controls but does not show any default content.

You can add extension point content to an aggregation of another control by loading the extension point first and then adding the returned controls to the target control. In the following example, an extension point is added to `VerticalLayout`:

**JavaScript example:**

```js
sap.ui.define([
    "sap/ui/core/mvc/View",
    "sap/ui/layout/VerticalLayout",
    "sap/ui/core/ExtensionPoint"
], (View, VerticalLayout, ExtensionPoint) => {
    "use strict";

    return View.extend("my.app.view.MyView", {
        async createContent(oController) {
            const oLayout = new VerticalLayout(this.createId("Layout1"));

            // Load extension point content and add to layout
            const aExtensionControls = await ExtensionPoint.load({
                container: this,
                name: "extension4",
                async: true
            });

            aExtensionControls.forEach(oControl => {
                oLayout.addContent(oControl);
            });

            return oLayout;
        }
    });
});
```

**TypeScript example:**

```js
import View from "sap/ui/core/mvc/View";
import VerticalLayout from "sap/ui/layout/VerticalLayout";
import ExtensionPoint from "sap/ui/core/ExtensionPoint";
import Control from "sap/ui/core/Control";
import { $ViewSettings } from "sap/ui/core/mvc/View";

export default class MyView extends View {
    static readonly metadata: $ViewSettings = {
        // view metadata
    };

    async createContent(controller?: object): Promise<Control[]> {
        const layout = new VerticalLayout(this.createId("Layout1"));

        // Load extension point content and add to layout
        const extensionControls = await ExtensionPoint.load({
            container: this,
            name: "extension4",
            async: true
        });

        extensionControls.forEach((control: Control) => {
            layout.addContent(control);
        });

        return [layout];
    }
}
```

You can also include extension point content alongside other controls by loading the extension point and then combining it with other controls:

**JavaScript example:**

```js
sap.ui.define([
    "sap/ui/core/mvc/View",
    "sap/ui/layout/VerticalLayout",
    "sap/m/Button",
    "sap/ui/core/ExtensionPoint"
], (View, VerticalLayout, Button, ExtensionPoint) => {
    "use strict";

    return View.extend("my.app.view.MyView", {
        async createContent(oController) {
            // Load extension point content first
            const aExtensionControls = await ExtensionPoint.load({
                container: this,
                name: "extension4",
                async: true
            });

            // Create layout with mixed content
            const oLayout = new VerticalLayout({
                content: [
                    new Button({text: "I am preceding the extension point"}),
                    ...aExtensionControls, // Spread extension controls
                    new Button({text: "I am following the extension point"})
                ]
            });
            return oLayout;
        }
    });
});
```

**TypeScript example:**

```js
import View from "sap/ui/core/mvc/View";
import VerticalLayout from "sap/ui/layout/VerticalLayout";
import Button from "sap/m/Button";
import ExtensionPoint from "sap/ui/core/ExtensionPoint";
import Control from "sap/ui/core/Control";
import { $ViewSettings } from "sap/ui/core/mvc/View";

export default class MyView extends View {
    static readonly metadata: $ViewSettings = {
        // view metadata
    };

    async createContent(controller?: object): Promise<Control[]> {
        // Load extension point content first
        const extensionControls = await ExtensionPoint.load({
            container: this,
            name: "extension4",
            async: true
        });

        // Create layout with mixed content
        const layout = new VerticalLayout({
            content: [
                new Button({text: "I am preceding the extension point"}),
                ...extensionControls, // Spread extension controls
                new Button({text: "I am following the extension point"})
            ]
        });
        return [layout];
    }
}
```

For table-like controls with aggregations that span two dimensions \(for example rows and columns\), extension points must be provided for both dimensions. In the `sap.m.Table`, for example, one extension point needs to be provided in the `columns` aggregation, and another one in the provided `cells` aggregation of the `ColumnListItem` template.

To define default content for extension points in script-based views or fragments, use the `createDefaultContent` parameter:

**JavaScript example:**

```js
sap.ui.define([
    "sap/ui/core/mvc/View",
    "sap/m/Button",
    "sap/ui/core/ExtensionPoint"
], (View, Button, ExtensionPoint) => {
    "use strict";

    return View.extend("my.app.view.MyView", {
        createContent(oController) {
            const createDefaultContent = () => {
                return [new Button({text: "Default Content"})];
            };

            return ExtensionPoint.load({
                container: this,
                name: "extension4",
                createDefaultContent,
                async: true
            });
        }
    });
});
```

**TypeScript example:**

```js
import View from "sap/ui/core/mvc/View";
import Button from "sap/m/Button";
import ExtensionPoint from "sap/ui/core/ExtensionPoint";
import Control from "sap/ui/core/Control";
import { $ViewSettings } from "sap/ui/core/mvc/View";

export default class MyView extends View {
    static readonly metadata: $ViewSettings = {
        // view metadata
    };

    createContent(controller?: object): Promise<Control[]> {
        const createDefaultContent = (): Control[] => {
            return [new Button({text: "Default Content"})];
        };

        return ExtensionPoint.load({
            container: this,
            name: "extension4",
            createDefaultContent,
            async: true
        });
    }
}
```

The function provided as `createDefaultContent` callback needs to return a control or an array of controls and is only executed when no customizing is configured for the extension point. The callback can also return a Promise that resolves with an array of controls for asynchronous default content creation.



<a name="loio403c050da4ae4566b6aafec2bc590389__section_EAA"/>

## Extending an Application

When **extending an application**, your custom content is referenced in your `Component`'s `manifest.json`.

As an example, we'll use the extension points that have been defined in the standard application described in the section above.

The snippet below from the `manifest.json` shows how to connect an extension point in the delivered standard application with your own extension content in your custom application.

Extension point content can either be defined in a view or a fragment. Make sure to set the correct type:

```json
extensions: {
    "sap.ui.viewExtensions": {
        "samples.components.ext.sap.Sub2": {
            "extension2": {
                className: "sap.ui.core.Fragment",
                fragmentName: "samples.components.ext.customer.CustomFragment",
                type: "XML"
                id: "stableid"
            },
            "extension3": {
                className: "sap.ui.core.mvc.View",
                viewName: "samples.components.ext.customer.CustomSubSubView1",
                type: "XML"
            }
        }
    }
}
```

If you add an ID to the view extension, this ID overrules the original view ID. For view fragments like in the example, IDs of nested controls are then also prefixed with this ID.

Extension content in the custom application in the `CustomFragment.fragment.xml` file:

```
<Button xmlns="sap.m" text="This Button is in an Extension Fragment" />

```

> ### Note:  
> You can also add multiple root-level controls using one fragment.

Extension content in the custom application in the `CustomSubSubView1.view.xml` file.

```
<mvc:View xmlns="sap.m"  xmlns:core="sap.ui.core" xmlns:mvc="sap.ui.core.mvc">
    <core:ExtensionPoint name="extension1" />
    <Text text="Customer View 'SubSubView1' - this one extends the original SAP View 'Sub2' - and even custom views can be extended:"></Text>   
    <core:ExtensionPoint name="extension2" />   
</mvc:View>

```

For modern SAPUI5 applications, you can also implement extension content using **typed views** in TypeScript. Here's an example of a TypeScript-based extension view:

**CustomExtensionView.ts:**

```
import View from "sap/ui/core/mvc/View";
import Button from "sap/m/Button";
import Text from "sap/m/Text";
import VBox from "sap/m/VBox";
import { $ViewSettings } from "sap/ui/core/mvc/View";

/**
 * @namespace my.extension.view
 */
export default class CustomExtensionView extends View {
    static readonly metadata: $ViewSettings = {
        // view metadata if needed
    };

    createContent(): Promise<Control | Control[]> | Control | Control[] {
        return new VBox({
            items: [
                new Text({
                    text: "This is a modern TypeScript extension view"
                }),
                new Button({
                    text: "Custom Extension Button",
                    press: () => {
                        // Handle button press
                    }
                })
            ]
        });
    }
}
```

When using typed views as extensions, update your `manifest.json` accordingly:

```json
{
    "extensions": {
        "sap.ui.viewExtensions": {
            "samples.components.ext.sap.Sub2": {
                "extension2": {
                    "className": "sap.ui.core.mvc.View",
                    "viewName": "my.extension.view.CustomExtensionView",
                    "type": "JS",
                    "id": "customExtensionView"
                }
            }
        }
    }
}
```



## Best Practices

When implementing extension points in modern SAPUI5 applications, consider these best practices:



### Use the Modern `ExtensionPoint.load()` API

Always use the modern `ExtensionPoint.load()` API instead of the deprecated `sap.ui.extensionpoint()` function:

```js
// ✅ Modern approach
sap.ui.define([
    "sap/ui/core/mvc/View",
    "sap/ui/core/ExtensionPoint"
], (View, ExtensionPoint) => {
    "use strict";

    return View.extend("my.app.view.MyView", {
        createContent() {
            return ExtensionPoint.load({
                container: this,
                name: "myExtension",
                async: true
            });
        }
    });
});

// ❌ Deprecated approach
sap.ui.extensionpoint(this, "myExtension");
```



### Leverage TypeScript for Type Safety

We recommend using TypeScript for better development experience and type safety:

```js
import View from "sap/ui/core/mvc/View";
import ExtensionPoint from "sap/ui/core/ExtensionPoint";
import Control from "sap/ui/core/Control";

export default class MyExtensionView extends View {
    createContent(): Promise<Control[]> {
        // TypeScript provides full type checking and IntelliSense
        return ExtensionPoint.load({
            container: this,
            name: "myExtension",
            async: true
        });
    }
}
```



### Use Stable IDs

Always use stable IDs for controls in extension points to ensure consistent behavior:

```js
async createContent() {
    const aExtensionControls = await ExtensionPoint.load({
        container: this,
        name: "myExtension",
        createDefaultContent: () => {
            return [new Button(this.createId("myExtensionButton"), {
                text: "Extension Button"
            })];
        },
        async: true
    });
    return aExtensionControls;
}
```

