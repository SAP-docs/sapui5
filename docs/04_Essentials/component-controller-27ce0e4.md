<!-- loio27ce0e4987cd426f8fa3e60836316428 -->

# Component Controller

The component controller is a script file \(written in either JavaScript or TypeScript\) that provides the runtime metadata and contains the component methods.

When written in JavaScript, a component controller is defined with the asynchronous module definition \(AMD\) syntax; this does not apply when using TypeScript. In the `sap.ui.define` statement the required dependencies can be declared which can be used in the controller.

To create a component, you extend either the `Component` or `UIComponent` base class and pass the name of the module \(namespace + `.Component`\).

```js
sap.ui.define([
  "sap/ui/core/UIComponent"
], (UIComponent) => {
  "use strict";

  return UIComponent.extend("my.app.Component", { // given "my.app" being the value of sap.app/id in manifest.json
    metadata: {
      interfaces: [
        "sap.ui.core.IAsyncContentCreation"
      ],
      manifest: "json"
    },
    // ...
  });
});
```

The metadata of the component controller should be used to declare the runtime metadata only \(which are the properties, aggregations, associations and events\).

We recommend to define the component metadata externally in the descriptor \(`manifest.json`\), because the descriptor for components is mandatory for modern components and allows performance optimizations.

We recommend to add the [`sap.ui.core.IAsyncContentCreation`](https://ui5.sap.com/#/api/sap.ui.core.IAsyncContentCreation) marker interface when defining a new component. Using this interface allows the component to be created fully asynchronously. This interface will implicitly set the component's `rootView` and router configuration to `async`. Nested views will also be handled asynchronously. Additionally, the error handling during the processing of views is stricter and will fail if a view definition contains errors, e.g. broken binding strings.

**Related Information**  


[Component Instantiation Guide](component-instantiation-guide-346599f.md "Components serve as the core building blocks of SAPUI5 applications. This guide explains the various ways to instantiate components, when to use each approach, and how to migrate from older mechanisms to modern alternatives.")

