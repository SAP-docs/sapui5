<!-- loio1c80793df5bb424091954697fc0b2828 -->

# Using Web Components

Web Components integrate seamlessly into SAPUI5. A Web Component, especially a UI5 Web Component with its Custom Elements metadata, can be required and used like a regular SAPUI5 control.

**On this page:**

-   [General Concepts Compared to SAPUI5 Controls](using-web-components-1c80793.md#loio1c80793df5bb424091954697fc0b2828__section_GCS)
-   [Using UI5 Web Components in SAPUI5 Applications](using-web-components-1c80793.md#loio1c80793df5bb424091954697fc0b2828__section_WCSU)



<a name="loio1c80793df5bb424091954697fc0b2828__section_GCS"/>

## General Concepts Compared to SAPUI5 Controls

To use Web Components, it's important to understand how their concepts map to SAPUI5 concepts. While there are some differences, the basic concepts map easily to SAPUI5 nomenclature:


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

Besides the nomenclature for the basic concepts, several additional naming differences apply when using Web Components alongside SAPUI5 controls:

-   The DOM's `disabled` attribute is available as the `enabled` property in SAPUI5.

-   The `default` slot is available as the `content` aggregation in SAPUI5.

-   Web Components that allow native `text-content` expose a \(bindable\) property called `text` in SAPUI5.

-   Event names that contain a dash \(e.g. `selected-item`\) are exposed under a camelCased name in SAPUI5, e.g. `selectedItem`.




<a name="loio1c80793df5bb424091954697fc0b2828__section_WCSU"/>

## Using UI5 Web Components in SAPUI5 Applications



### I. Preparing Your Project

Before using Web Components packages in your application, follow these steps in your project directory:

1.  **Install the `ui5-tooling-modules` UI5 CLI extension**

    ```sh
    npm install ui5-tooling-modules --save-dev --ignore-scripts=false -rte=ui5.yaml,ui5-local.yaml,ui5-deploy.yaml,...
    # If only ui5.yaml exists, simply use -rte without the assigned values (=...)
    ```

    The `-rte` flag \(or `--register-tooling-extension`\) automatically registers the required custom task and middleware in your listed `ui5*.yaml` files, and `--ignore-scripts=false` ensures the registration script runs even if your `.npmrc` disables lifecycle scripts.

2.  **Install the Web Components packages your project needs**

    ```sh
    npm install @ui5/webcomponents
    npm install @ui5/webcomponents-ai
    npm install @ui5/webcomponents-fiori
    # npm install @ui5/webcomponents-...
    ```


After installation, verify that your `ui5*.yaml` files contain the following entries. If `-rte` did not add them \(e.g. because the package was already installed or the postinstall script was skipped\), add them manually to **all** applicable `ui5*.yaml` files in your project:

```
# In e.g. ui5.yaml, ui5-local.yaml, ui5-deploy.yaml, ui5-...yaml
builder:
  customTasks:
    - name: ui5-tooling-modules-task
      afterTask: replaceVersion
server:
  customMiddleware:
    - name: ui5-tooling-modules-middleware
      afterMiddleware: compression
```

Your `package.json` should now contain **`ui5-tooling-modules` in `devDependencies`** and **`@ui5/webcomponents*` in `dependencies`**. UI5 Web Component packages must be `dependencies` \(not `devDependencies`\) to ensure that `ui5-tooling-modules` can resolve their modules during both development and production builds.

> ### Caution:  
> **Projects with multiple UI5 CLI configuration files \(`ui5*.yaml`\):**
> 
> SAP Fiori tools projects commonly use separate YAML files for different scenarios \(e.g. `ui5.yaml`, `ui5-local.yaml`, `ui5-deploy.yaml`\). If your production build uses a different config file, for example `ui5 build --config ui5-deploy.yaml`, you **must** ensure that the `ui5-tooling-modules-task` is configured there as well. Otherwise, your Web Components aren't bundled into the build output, and the deployed application fails to find them at runtime.

For additional configuration options, see the [ui5-tooling-modules documentation](https://github.com/ui5-community/ui5-ecosystem-showcase/tree/main/packages/ui5-tooling-modules#configuration-options-in-yourappui5yaml).

**Finding UI5 Web Components**

UI5 Web Components are distributed across several npm packages. To find which package contains the web component you need, consult the [official UI5 Web Components documentation](https://ui5.github.io/webcomponents/). Each web component's page indicates its package.


<table>
<tr>
<th valign="top" align="center">

Package

</th>
<th valign="top" align="center">

Contents

</th>
<th valign="top" align="center">

Examples

</th>
</tr>
<tr>
<td valign="top">

`@ui5/webcomponents`

</td>
<td valign="top">

Core UI controls

</td>
<td valign="top">

Button, Input, List, Table, Dialog, ...

</td>
</tr>
<tr>
<td valign="top">

`@ui5/webcomponents-fiori`

</td>
<td valign="top">

SAP Fiori-specific controls

</td>
<td valign="top">

ShellBar, BarcodeScannerDialog, Wizard, SideNavigation, ...

</td>
</tr>
<tr>
<td valign="top">

`@ui5/webcomponents-ai`

</td>
<td valign="top">

AI-related controls

</td>
<td valign="top">

Button \(AI\), PromptInput, ...

</td>
</tr>
<tr>
<td valign="top">

`@ui5/webcomponents-icons`

</td>
<td valign="top">

Icon collections

</td>
<td valign="top">

Individual icons and AllIcons

</td>
</tr>
<tr>
<td valign="top">

`@ui5/webcomponents-...`

</td>
<td valign="top">

...

</td>
<td valign="top">

...

</td>
</tr>
</table>



### II. Using UI5 Web Components in XML Views

To use UI5 Web Components in an XML view, declare the corresponding namespace and use the web component's class name as an XML node.The class names can can be found in the official documentation, for example [`Button`](https://ui5.github.io/webcomponents/components/main/Button/).

```xml
<mvc:View xmlns:mvc="sap.ui.core.mvc"
    xmlns:core="sap.ui.core"
    xmlns:ai="@ui5/webcomponents-ai"
>
    <ai:Button text="Generate" click=".onBtnClick">
        <ai:ButtonState name="generate" icon="sap-icon://ai" />
        <ai:ButtonState name="generating" icon="sap-icon://stop" />
    </ai:Button>
</mvc:View>
```

Properties and events can be used identically to any other SAPUI5 control.

**Using Icons**

To use icons, load the `AllIcons` module via the XML view's `core:require` mechanism .

```xml
<mvc:View xmlns:mvc="sap.ui.core.mvc"
    xmlns:ai="@ui5/webcomponents-ai"
    xmlns:core="sap.ui.core"
    core:require="{ allIcons: '@ui5/webcomponents-icons/AllIcons' }"
>
    <ai:Button text="Generate" click=".onBtnClick">
        <!-- both icons are loaded in the 'AllIcons' collection -->
        <ai:ButtonState name="generate" icon="sap-icon://ai" />
        <ai:ButtonState name="generating" icon="sap-icon://stop" />
    </ai:Button>
</mvc:View>
```

To reduce the application's payload, you can also require individual icons:

```xml
<mvc:View xmlns:mvc="sap.ui.core.mvc" xmlns:ai="@ui5/webcomponents-ai">
<!-- ... -->
    <ai:ButtonState core:require="{ iconAI: '@ui5/webcomponents-icons/ai' }"
        name="generate"
        icon="sap-icon://ai"
    />
    <ai:ButtonState core:require="{ iconStop: '@ui5/webcomponents-icons/stop' }"
        name="generating"
        icon="sap-icon://stop"
    />
</mvc:View>
```

**Aggregations and Data Binding**

The previous examples show how the AI button aggregates internal states. Data binding works the same way as with traditional SAPUI5 controls - any `property` or `slot` \(`aggregation`, respectively\) offered by a Web Component can be bound to a model value.

The following example demonstrates how a `<ui5-list>` Web Component \(`List`\) can be bound against a model. In this case, we use another Web Component, the `<ui5-li>` element \(`ListItemStandard`\), as a binding template.

As before, use the corresponding **namespace and class name** to define the UI5 Web Components in our XML view \(see the official [`List`](https://ui5.github.io/webcomponents/components/List/) and [`ListItemStandard`](https://ui5.github.io/webcomponents/components/ListItemStandard/) documentation\):

```xml
<mvc:View xmlns:mvc="sap.ui.core.mvc" xmlns:webc="@ui5/webcomponents">
    <!-- You can use the standard UI5 data binding features -->
    <webc:List headerText="My Sample List" items="{/pathToMyListItems}">
        <!-- Web Components can aggregate other Web Components and use them as binding templates. -->
        <!-- relative binding paths are of couse also usable as shown below -->
        <webc:ListItemStandard
            icon="slim-arrow-right"
            iconEnd="true"
            description="{productID}"
            additionalText="{price}"
            text="{productName}"
        />
    </webc:List>
</mvc:View>
```

> ### Note:  
> Besides aggregating other UI5 Web Components, you can of course also aggregate SAPUI5 controls in most UI5 Web Components. However, there are exceptions if the [official UI5 Web Component documentation](https://sap.github.io/ui5-webcomponents/) states otherwise. This applies, for example, to the `<ui5-avatar-group>`, which can only hold `<ui5-avatar>` Web Components in its [default slot](https://sap.github.io/ui5-webcomponents/components/AvatarGroup/#default) and `content` aggregations.



### III. Using UI5 Web Components in JavaScript/TypeScript \(e.g. in Controllers\)

UI5 Web Components can easily be used in JavaScript by requiring the corresponding classes. Their usage is identical to any other traditional SAPUI5 control. You can create instances via constructor calls and then aggregate them into other UI5 Web Components or SAPUI5 controls.

```js
sap.ui.define([ // TypeScript: import ...
    "@ui5/webcomponents/Panel",
    "@ui5/webcomponents-ai/Button",
    "@ui5/webcomponents-ai/ButtonState",
    "@ui5/webcomponents-icons/ai",
    "@ui5/webcomponents-icons/stop",
    "@ui5/webcomponents/dist/Assets",
    "@ui5/webcomponents-ai/dist/Assets",
    "@ui5/webcomponents-fiori/dist/Assets"
], (Panel, AIButton, AIButtonState) => {
    "use strict";
    // ...
});
```

The `Assets` modules in the code above register translations and theme styles for the web components. Make sure to include the `Assets` module from each `@ui5/webcomponents-*` package you use to ensure proper theming and language support at runtime.

