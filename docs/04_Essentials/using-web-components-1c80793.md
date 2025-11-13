<!-- loio1c80793df5bb424091954697fc0b2828 -->

# Using Web Components

Web Components integrate seamlessly into SAPUI5. A Web Component, especially a UI5 Web Component with its Custom Elements metadata, can be required and used like a regular SAPUI5 control.



<a name="loio1c80793df5bb424091954697fc0b2828__section_BAD4FC9765174E0EB7264A423F7C4ED6"/>

## General Concepts Compared to SAPUI5 Controls

To use Web Components, it's important to understand the different concepts and their mapping. While there are some differences between Web Components and SAPUI5 controls, the basic concepts of Web Components map easily to SAPUI5 nomenclature:


<table>
<tr>
<th valign="top" align="center">

Web Components

</th>
<th valign="top" align="center">

SAPUI5

</th>
<th valign="top" align="center">

Comment

</th>
</tr>
<tr>
<td valign="top">

properties

</td>
<td valign="top">

properties

</td>
<td valign="top">

Provided as standard UI5 getters/setters, including automatically generated accessor functions, e.g. `Button#getText()` and `Button#setText()` 

</td>
</tr>
<tr>
<td valign="top">

properties

*\(readonly\)*

</td>
<td valign="top">

getters

</td>
<td valign="top">

*Readonly* properties can be accessed with a camel-cased getter, e.g. for the [`AvatarGroup`'s `colorScheme`](https://ui5.github.io/webcomponents/components/AvatarGroup/#colorscheme) property: `AvatarGroup#getColorScheme()`. Readonly properties of course do not provide a setter.

</td>
</tr>
<tr>
<td valign="top">

slots

</td>
<td valign="top">

aggregations

</td>
<td valign="top">

Slots are provided as standard UI5 aggregations, including all accessor and modifier methods, e.g. `List#addItems()`, `List#getItems()`, ...

</td>
</tr>
<tr>
<td valign="top">

events

</td>
<td valign="top">

events

</td>
<td valign="top">

Provided as standard UI5 events; see the [API Reference](https://ui5.sap.com/#/api/sap.ui.base.Event) 

</td>
</tr>
<tr>
<td valign="top">

methods

</td>
<td valign="top">

methods

</td>
<td valign="top">

Any API exposed by a Web Component is available, e.g. the `walk()` API of the [Tree Web Component](https://ui5.github.io/webcomponents/components/Tree/#walk)

</td>
</tr>
<tr>
<td valign="top">

\-

</td>
<td valign="top">

associations

</td>
<td valign="top">

Associations are a UI5-only concept. Any Web Component property that takes an HTML Element's ID is available as an association in SAPUI5.

</td>
</tr>
</table>



### API-Specific Differences

Besides the nomenclature for the basic concepts, several additional naming differences need to be considered to harmonize the usage together with SAPUI5 controls:

-   The DOM's `disabled` attribute is available as the `enabled` property in SAPUI5.

-   The `default` slot is available as the `content` aggregation in SAPUI5.

-   Web Components that allow native `text-content` expose a \(bindable\) property called `text` in SAPUI5.

-   Event names that contain a dash \(e.g. `selected-item`\) are exposed under a camelCased name in SAPUI5, e.g. `selectedItem`.




<a name="loio1c80793df5bb424091954697fc0b2828__section_798A4B993F764A04BAB08DEAACC5DFA9"/>

## Using UI5 Web Components in SAPUI5 Applications

This section explains how to integrate UI5 Web Components into existing SAPUI5 applications. We'll cover the following topics:

1.  [Preparing your project](using-web-components-1c80793.md#loio1c80793df5bb424091954697fc0b2828__subsection_PREP)
2.  [Usage of UI5 Web Components in XML views](using-web-components-1c80793.md#loio1c80793df5bb424091954697fc0b2828__subsection_XML)
3.  [Usage of UI5 Web Components in JavaScript/TypeScript, e.g. in controllers](using-web-components-1c80793.md#loio1c80793df5bb424091954697fc0b2828__subsection_JSTS)



### 1. Preparing Your Project

Before using external Web Components packages in your application, prepare your project by adding the `ui5-tooling-modules` UI5 CLI extension and configuring your `ui5.yaml`.

**The `ui5-tooling-modules` extension**

This extension is essential for handling npm dependencies, including UI5 Web Components. Run the following command in your project directory:

`npm install ui5-tooling-modules --save-dev`

This adds the extension to your project's `package.json` under `devDependencies`, similar to the example below:

```json
"devDependencies": {
    ...
    "ui5-tooling-modules": "^3",
    ...
}
```

> ### Note:  
> We install the `ui5-tooling-modules` extension as a `devDependency` since it's not needed for the final productive build of the application.

**Configuring `ui5.yaml`**

Next, add the custom task and custom middleware to the respective sections in the `ui5.yaml`:

```
builder:
  customTasks:
    - name: ui5-tooling-modules-task
      afterTask: replaceVersion
  # ... more custom taks, e.g. transpilation, and so on
server:
  customMiddleware:
    - name: ui5-tooling-modules-middleware
      afterMiddleware: compression
  # ... more custom middlewares, e.g. transpilation, live-reload, and so on
```

We stick to the minimal needed configuration here, but the `ui5-tooling-modules` extension offers additional configuration options described in the [extension's official documentation](https://github.com/ui5-community/ui5-ecosystem-showcase/tree/main/packages/ui5-tooling-modules#configuration-options-in-yourappui5yaml).

For more information on setting up custom tasks and middleware, see [UI5 CLI Custom Task Documentation](https://ui5.github.io/cli/v4/pages/extensibility/CustomTasks/).

**Installing UI5 Web Components Packages**

Run the following commands to add the `@ui5/webcomponents` and the `@ui5/webcomponents-ai` packages to your project:

`npm install @ui5/webcomponents`

`npm install @ui5/webcomponents-ai`

Your `package.json` should now contain the following entries in the `dependencies` section:

```json
"dependencies": {
    ...
    "@ui5/webcomponents": "^2.9.0",
    "@ui5/webcomponents-ai": "^2.9.0",
    ...
}
```

> ### Note:  
> Web Component packages must be installed as a `dependency` to ensure that `ui5-tooling-modules` can resolve their modules.



### 2. Using UI5 Web Components in XML Views

**Declaring the Namespace**

To use the UI5 Web Components in an XML view, first declare the corresponding namespace.

With `xmlns:ai="@ui5/webcomponents-ai"`, we declare the namespace for UI5 Web Components, allowing you to use their tags with the XML namespace `ai`.

```xml
<!-- On the view, we define the "ai" namespace for UI5 Web Components -->
<mvc:View
    xmlns:mvc="sap.ui.core.mvc"
    xmlns:core="sap.ui.core"
    xmlns:ai="@ui5/webcomponents-ai">
</mvc:View>
```

**Using an AI Button**

To add a `<ui5-ai-button>` to your XML view, use the `ai` namespace along with the button’s class name \(`Button`\) as an XML node.

> ### Note:  
> The class names of each UI5 Web Component can can be found in the official documentation, e.g. [`Button`](https://ui5.github.io/webcomponents/components/main/Button/).

In this example, we use the `text` property to specify the button's text and bind the `click` event to a function in the controller. The AI button also needs to aggregate some internal states that provide their own icon. We'll look into the usage of icons in the next section.

```xml
<mvc:View
    xmlns:mvc="sap.ui.core.mvc"
    xmlns:core="sap.ui.core"
    xmlns:ai="@ui5/webcomponents-ai">

    <!-- Add the button using the class name -->
    <ai:Button text="Generate" click=".onBtnClick">
        <ai:ButtonState name="generate" icon="sap-icon://ai"></ai:ButtonState>
        <ai:ButtonState name="generating" icon="sap-icon://stop"></ai:ButtonState>
    </ai:Button>
</mvc:View>
```

> ### Note:  
> Properties and Events can be used identically to any other SAPUI5 control.

**Using Icons**

To enable the usage of icons, use the XML view's `core:require` mechanism and load the `AllIcons` module.

```xml
<mvc:View
    xmlns:mvc="sap.ui.core.mvc"
    xmlns:core="sap.ui.core"
    xmlns:ai="@ui5/webcomponents-ai"
    core:require="{
        allIcons: '@ui5/webcomponents-icons/AllIcons',
    }">

    <ai:Button text="Generate" click=".onBtnClick">
        <!-- both icons are loaded in the 'AllIcons' collection -->
        <ai:ButtonState name="generate" icon="sap-icon://ai"></ai:ButtonState>
        <ai:ButtonState name="generating" icon="sap-icon://stop"></ai:ButtonState>
    </ai:Button>
</mvc:View>
```

To reduce the overall payload of an application, you can also require individual icons:

```xml
<!-- In this sample we only load one specific icon: chain-link -->
<mvc:View
    xmlns:mvc="sap.ui.core.mvc"
    xmlns:core="sap.ui.core"
    xmlns:ai="@ui5/webcomponents-ai"
    core:require="{
        iconAI: '@ui5/webcomponents-icons/ai',
        iconStop: '@ui5/webcomponents-icons/stop'
    }">

    <ai:Button text="Generate" click=".onBtnClick">
        <!-- each icon is loaded individually in a core:require statement -->
        <ai:ButtonState name="generate" icon="sap-icon://ai"></ai:ButtonState>
        <ai:ButtonState name="generating" icon="sap-icon://stop"></ai:ButtonState>
    </ai:Button>
</mvc:View>
```

**Aggregations and Data Binding**

In the previous examples, we have seen how the AI button can aggregate internal states. Now let's look at how data binding can be used with UI5 Web Components in the same fashion as with traditional SAPUI5 controls.

Any `property` or `slot` \(`aggregation`, respectively\) offered by a UI5 Web Component can be bound to a model value, thus leveraging the full data binding capabilities of the SAPUI5 programming model.

The following example demonstrates how a `<ui5-list>` UI5 Web Component can be bound against a model. In this case, we use another UI5 Web Component, the `<ui5-li>` element, as a binding template.

As before, use the corresponding **namespace and class name** to define the UI5 Web Components in our XML view \(see the official [`List`](https://ui5.github.io/webcomponents/components/List/) and [`ListItemStandard`](https://ui5.github.io/webcomponents/components/ListItemStandard/) documentation\):

```xml
<mvc:View
    xmlns:mvc="sap.ui.core.mvc"
    xmlns:core="sap.ui.core"
    xmlns:webc="@ui5/webcomponents">

    <!-- You can use the standard UI5 data binding features -->
    <webc:List headerText="My Sample List" items="{/pathToMyListItems}">
        <!-- Web Components can aggregate other Web Components and use them as binding templates. -->
        <!-- relative binding paths are of couse also usable as shown below -->
        <webc:ListItemStandard
            icon="slim-arrow-right"
            iconEnd="true"
            description="{productID}"
            additionalText="{price}" text="{productName}">
    </webc:List>
</mvc:View>
```

> ### Note:  
> Besides aggregating other UI5 Web Components, you can of course also aggregate SAPUI5 controls in most UI5 Web Components.
> 
> However, there are exceptions if the [official UI5 Web Component documentation](https://sap.github.io/ui5-webcomponents/) states otherwise. This applies, for example, to the `<ui5-avatar-group>`, which can only hold `<ui5-avatar>` UI5 Web Components in its [default slot](https://sap.github.io/ui5-webcomponents/components/AvatarGroup/#default) and `content` aggregations.



### 3. Using UI5 Web Components in JavaScript/TypeScript \(e.g. in Controllers\)

UI5 Web Components can easily be used in JavaScript by requiring the corresponding classes. Their usage is identical to any other traditional SAPUI5 control. You can create instances via constructor calls and then aggregate them into other UI5 Web Components or SAPUI5 controls.

The following sample demonstrates how UI5 Web Components can be used in a JavaScript-based Typed View:

```js
sap.ui.define([
    "@ui5/webcomponents/Panel",
    "@ui5/webcomponents-ai/Button",
    "@ui5/webcomponents-ai/ButtonState",
    "@ui5/webcomponents-icons/ai",
    "@ui5/webcomponents-icons/stop"
    ], function(Panel, AIButton, AIButtonState) {
    "use strict";
    return {
        createContent() {
            // we can aggregate Web Components from different packages, e.g. the Panel's content can hold AI Buttons
            return new Panel({
                content: [new AIButton({
                    text: "Generate",
                    // aggregation content is defined like any other SAPUI5 control
                    states: [
                        new AIButtonState({ name: "generate", icon: "sap-icon://ai" }),
                        new AIButtonState({ name: "generating", icon: "sap-icon://stop" })
                    ]
                    click: (evt) => {
                        // some event handler
                        const src = evt.getSource();
                        // ...
                    }
                })]
            })
        }
    };
});
```

> ### Note:  
> UI5 Web Components can be used in TypeScript but without type definitions.

The same sample in TypeScript looks like this:

```js
import Event from "sap/ui/base/Event";
import Panel from "@ui5/webcomponents/Panel";
import AIButton from "@ui5/webcomponents-ai/Button";
import AIButtonState from "@ui5/webcomponents-ai/ButtonState";
import "@ui5/webcomponents-icons/ai";
import "@ui5/webcomponents-icons/stop";

export default {
    createContent() {
        return new Panel({
            // we can aggregate Web Components from different packages, e.g. the Panel's content can hold AI Buttons
            content: [new AIButton({
                text: "Generate",
                // aggregation content is defined like any other SAPUI5 control
                states: [
                    new AIButtonState({ name: "generate", icon: "sap-icon://ai" }),
                    new AIButtonState({ name: "generating", icon: "sap-icon://stop" })
                ]
                click(evt:Event) {
                    // some event handler
                    const src = evt.getSource() as AIButton;
                    // ...
                }
            })]
        })
    }
}
```

**Including UI5 Web Components Assets \(i18n, Themes\)**

UI5 Web Components are translated into the same languages as SAPUI5, and the same themes are available. To ensure that the assets are included in your application, require the `Assets` module:

In JavaScript:

```js
sap.ui.define([
    [...],
    "@ui5/webcomponents/dist/Assets",
    "@ui5/webcomponents-ai/dist/Assets"
    ], function([...]) {
        [...]
    };
});
```

In TypeScript:

```js
import "@ui5/webcomponents/dist/Assets";
import "@ui5/webcomponents-ai/dist/Assets";
```

If you include another UI5 Web Components package, such as `@ui5/webcomponents-fiori`, you need to also include the `Assets` module from this package, e.g. `@ui5/webcomponents-fiori/dist/Assets`.

