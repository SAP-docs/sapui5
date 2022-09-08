<!-- loio0187ea5e2eff4166b0453b9dcc8fc64f -->

# Component Metadata

The component class provides specific metadata for components by extending the `ManagedObject` class. The `UIComponent` class provides additional metadata for the configuration of user interfaces or the navigation between views.

> ### Note:  
> With the introduction of the descriptor for applications, components, and libraries, we recommend to migrate the component metadata to the descriptor. The descriptor is inspired by W3C’s Web Application Manifest and provides comprehensive information for applications, components and libraries. For more information, see [Descriptor for Applications, Components, and Libraries \(manifest.json\)](descriptor-for-applications-components-and-libraries-manifest-json-be0cf40.md). The metadata property `manifest` must be set to `json` to indicate that the `manifest.json` file should be loaded and used:
> 
> ```js
> // "Component" required from module "sap/ui/core/Component"
> Component.extend("some.sample.Component", {
>     "metadata": {
>         "manifest": "json"
>     }
> });
> ```
> 
> You can also define the descriptor inline by just providing an object. However, we do **not** recommend this because this would prevent that the descriptor can be analyzed by tools.

The metadata defined in `Component.js` is common for components. The following parameters are available:

-   `manifest`: Specifies if your component uses the descriptor

-   `abstract`: Specifies if your component class is an abstract class that serves as a base for other components

-   `version`: Version of your component; this parameter belongs to the design time metadata and is currently not used; it may be used in the future in the design time repository

-   `properties`, `aggregations`, `associations`, and `events`: Define these for your component in the same way as for a control. For more information, see [Defining the Control Metadata](../09_Developing_Controls/defining-the-control-metadata-7b52540.md).

-   `library`: Specifies the library to which your component belongs to


The following properties are deprecated and no longer needed if you use the descriptor:

-   `includes`: Array of strings containing the paths to CSS and JavaScript resources for your component; will be added to the header of the HTML page and loaded by the browser. The resources will be resolved relative to the location of `Component.js`.

-   `dependencies`: Used to specify all external dependencies, such as libraries or components. Like the includes for resources that are added to the application’s HTML, the dependencies are loaded by SAPUI5 core before the component is initialized. Everything that is referenced here can be used in your component code right from the start. Specify here external dependences such as libraries or components, that will be loaded by SAPUI5 core in the initialization phase of your Component and can be used after it.

    -   `libs`: Path to the libraries that should be loaded by SAPUI5 core to be used in your component

    -   `components`: Full path to the components that should be loaded by SAPUI5 core to be used in your component

    -   `ui5version`: Minimum version of SAPUI5 that the component requires; it helps to be ensure that the features of SAPUI5 runtime used in this component are available. As SAPUI5 currently does not enforce the use of the correct version, it is only used for information purposes.


-   `config`: Static configuration; specify the name-value pairs that you need in the component

-   `extensions`: Extensions for components and views, see [Extending Apps](../08_Extending_SAPUI5_Applications/extending-apps-a264a9a.md)

    -   `sap.ui.viewExtensions`: Used for providing custom view content in a specified extension point in the standard application

    -   `sap.ui.viewModifications`: Used for overriding control properties in the standard application

    -   `sap.ui.viewReplacements`: Used for replacing a standard view with a custom view

    -   `sap.ui.controllerExtensions`: Used for extending a controller in a delivered standard application with a custom controller

    -   `sap.ui.controllerReplacements`: Used for replacing a controller in a delivered standard application with a custom controller



Example for metadata in `Component.js`:

```js
// "Component" required from module "sap/ui/core/Component"
Component.extend("some.sample.Component", {
    "metadata": {
        "manifest": "json", // Specifies that your Component class uses the descriptor via the manifest.json file
        "abstract": true, // Specifies if your Component class is an abstract one that serves as a base for your other components 
        "library": "sap.ui.core", // Specifies the library the component belongs to
        "version": "1.0", // Version of your Component
        "properties": { // Defined for components in the same way as for a control or view
            "config": "any"
        }
    }
});
```

In addition to the common metadata for components, the `UIComponent` class provides the following metadata for UI components:

-   `publicMethods`: Definition of public methods for your component

-   `aggregations`: Defines aggregations for your component

-   `interfaces`: Defines the interfaces implemented by your component.

    We recommend to add the `sap.ui.core.IAsyncContentCreation` marker interface when defining a new component. Using this interface allows the component to be created fully asynchronously. This interface will implicitly set the component's `rootView` and router configuration to `async`. Nested views will also be handled asynchronously. Additionally, the error handling during the processing of views is stricter and will fail if a view definition contains errors, e.g. broken binding strings.


The following properties are deprecated and no longer needed if you use the descriptor:

-   `rootView`: Can be the view name as string or the view configuration object

-   `routing`: Provides the default values for all views

    -   `config`: Default values for routing that are applied, if no setting is specified by a route

        -   `viewType`: View type of the view that is created, for example XML, JS or HTML

        -   `viewPath`: Prefix that is preceding the view

        -   `targetParent`: ID of the view in which the `targetControl` is searched

        -   `targetControl`: ID of the control that contains the views

        -   `targetAggregation`: Name of the aggregation of the `targetControl` that contains views

        -   `clearTarget`: Boolean; if set to `true`, the aggregation should be cleared before adding the View to it


    -   `routes`: Contains the configuration objects

        -   `name`: Mandatory parameter used for listening or navigating to the route

        -   `pattern`: String that is matched against the hash. The \{\} means this segment of the URL is passed to a handler with the value it contains

        -   `view`: Name of the view that is created




Example for UI component metadata:

```js
// "UIComponent" required from module "sap/ui/core/UIComponent"
UIComponent.extend("some.sample.UIComponent", {
    "metadata": {
        "publicMethods": [ "render" ],
        "aggregations": {
            "rootControl": {
                "type": "sap.ui.core.Control", multiple: false, visibility: "hidden"
            }
        }
    }
}),
```



## Properties Section in Component Metadata

You can add a properties section to the metadata for all properties that can adopt different values during runtime. The getters and setters for these properties are generated automatically, but you can overwrite them if you require additional functionality. The following example contains two properties at the end of the metadata section.

```js
// "UIComponent" required from module "sap/ui/core/UIComponent"
UIComponent.extend("samples.components.shell.Component", {
    "metadata": {
        "abstract": true,
        "version": "1.0",
...
        "properties": {
            "appTitle": {
                "name":"appTitle",
                "type":"string",
                "defaultValue":"Default Value that will be replaced with something meaningful through the setter for this property"
            },
            "someOtherProp": {
                "name":"myProperty",
                "type":"string",
                "defaultValue":"Some text"
            }
        }
    }
});
```

The getters and setters for these properties are generated automatically and can be overwritten if additional functionality is required.

