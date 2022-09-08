<!-- loioecbc417ff264498b96bc364c53280242 -->

# Advanced Concepts for SAPUI5 Components

Advanced concepts for components include routing and navigation and component data as well as the event bus.

The following advanced concepts for components exist.

-   Asynchronous content creation

    A `UIComponent` can implement the `sap.ui.core.IAsyncContentCreation` interface. This interface allows you to provide a Promise as the return value for the  [`sap.ui.core.UIComponent#createContent`](https://ui5.sap.com/#/api/sap.ui.core.UIComponent/methods/createContent) function.

    For more information, see [Methods Controlling the Initial Instantiation](methods-controlling-the-initial-instantiation-b430345.md).

-   Routing and navigation

    UI components support the routing and navigation concept, see [Initializing and Accessing a Routing Instance](initializing-and-accessing-a-routing-instance-acdb6cd.md).

-   Extensibility and customizing

    The extensibility and customizing concept allows you to extend and modify components in order to replace and extend the views and controllers as well as to modify the views. A customization can be performed, for example, on a custom application that extends a delivered standard application.

    For more information, see [Extending Apps](../08_Extending_SAPUI5_Applications/extending-apps-a264a9a.md)

-   Component data

    The JSON object `ComponentData` contains any initial values of parameters that can be used in the `createComponent()` method. Component data are already available for use in the `createComponent()` method, but not the parameters. The parameters are available in the `onBefore`, the `onAfterRendering` and the setter methods of the parameters.

    Component data is provided from outside and can be configured as desired. Configuration data is static and defined in the component. To change or extend the configuration, the component needs to be extended and a new configuration has to be created and merged with the configuration in the parent component.

-   Event bus of the component

    The local event bus belongs to the component and can be used by all children of this component. Once a component instance is destroyed, the listeners registered in the event bus are destroyed automatically. For more information, see [API Reference for the `getEventBus` method of `sap.ui.core.Component`](https://ui5.sap.com/#/api/sap.ui.core.Component/methods/getEventBus). 


