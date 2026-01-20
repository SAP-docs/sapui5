<!-- loioecbc417ff264498b96bc364c53280242 -->

# Advanced Concepts for SAPUI5 Components

Advanced concepts for components include routing and navigation and component data as well as the event bus.

The following advanced concepts for components exist.

-   Asynchronous content creation

    A `UIComponent` can implement the `sap.ui.core.IAsyncContentCreation` interface. This interface allows you to provide a Promise as the return value for the [`sap.ui.core.UIComponent#createContent`](https://ui5.sap.com/#/api/sap.ui.core.UIComponent/methods/createContent) function.

    For more information, see [Content Creation in Components](content-creation-in-components-b430345.md).

-   Routing and navigation

    UI components support the routing and navigation concept, see [Initializing and Accessing a Routing Instance](initializing-and-accessing-a-routing-instance-acdb6cd.md).

-   Extensibility and customizing

    The extensibility and customizing concept allows you to extend and modify components in order to replace and extend the views and controllers as well as to modify the views. A customization can be performed, for example, on a custom application that extends a delivered standard application.

    For more information, see [Extending Apps](../08_Extending_SAPUI5_Applications/extending-apps-a264a9a.md)

-   Owner Component concept

    Closely related to extensibility and customizing is the concept of the *Owner Component*. The owner component is the `sap.ui.core.(UI)Component` instance that created and therefore "owns" any `sap.ui.base.ManagedObject` instance, including SAPUI5 controls, views, fragments, and other components. The framework uses the owner component to identify extension points, view modifications, and controller extensions defined in the owner component's `manifest.json`, enabling views, fragments, and controllers to be extended through their owner component's configuration.

    For more information, see [The Owner Component](the-owner-component-a7a3138.md).

-   Component data

    Component data is an optional object that contains application-specific initial data passed to a component during instantiation. This data is provided from outside the component and made available during the component's initialization phase. The component data can be accessed throughout the component lifecycle using the `Component#getComponentData()` method. The content of the component data itself is not part of the SAPUI5 framework's offering; however, other layers of the SAP UI technology stack may provide content via the component data, for example the SAP Fiori launchpad's [`startupParameters`](https://help.sap.com/docs/SAP_NETWEAVER_AS_ABAP_752/a7b390faab1140c087b8926571e942b7/079561b716bb4f2f8ae4e47bacbdb86d.html).

    Component data is typically used to pass configuration values, startup parameters, or contextual information that the component needs to function properly. It differs from a static configuration in that it can vary between different instantiations of the same component.

    For more information, see the [API Reference for `sap.ui.core.Component#getComponentData`](https://ui5.sap.com/#/api/sap.ui.core.Component/methods/getComponentData).

-   Component creation mechanisms

    SAPUI5 provides several mechanisms for component instantiation, each suited for different scenarios. The main approaches include `ComponentSupport` for declarative creation, `Component.create()` for programmatic instantiation, routing-based creation for nested components, and `ComponentContainer` for rendering components in the control tree. Each mechanism offers specific advantages for different use cases, such as initial application startup, nested component creation, or dynamic component loading.

    For more information, see our [Component Instantiation Guide](component-instantiation-guide-346599f.md).

-   Event bus of the component

    The local event bus belongs to the component and can be used by all children of this component. Once a component instance is destroyed, the listeners registered in the event bus are destroyed automatically. For more information, see [API Reference for the `getEventBus` method of `sap.ui.core.Component`](https://ui5.sap.com/#/api/sap.ui.core.Component/methods/getEventBus). 


