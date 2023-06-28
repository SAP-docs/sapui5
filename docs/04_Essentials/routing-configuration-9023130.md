<!-- loio902313063d6f45aeaa3388cc4c13c34e -->

# Routing Configuration

Routing configuration consists of `routes`, `targets`, `config`, and `owner`.



## Routes

Preferably, an **array** of routes is added to the router. Each route defines a name, a pattern, and optionally one or more targets to which to navigate when the route has been matched. In the `routes` section, you define which patterns are available for navigation. Routes need to be defined in an array instead of an object, because their order in the array determines the sequence when matching against the browser hash.

-   The `name` of the route \(unique within one router instance\)

-   The `pattern` as hash part of the URL that matches the route

-   The navigation `target` as defined in the `targets` section

    If you want to load multiple views/components at the same time, you can assign multiple targets \(see [Working with Multiple Targets](working-with-multiple-targets-2c5c84d.md)\).

-   If a target is configured for loading a component, you can enable the routing in the loaded component, see [Enabling Routing in Nested Components](enabling-routing-in-nested-components-fb19f50.md).

-   The `titleTarget` to specify from which target the title is taken when multiple targets are displayed. If no `titleTarget` is defined, the first target that has a `title` is chosen \(see [Using the title Property in Targets](using-the-title-property-in-targets-1238d70.md)\).


The sequence of the routes in the `routes` definition is important. As soon as a pattern is matched, the following patterns are ignored. To prevent this for a specific route, you use the `greedy` parameter. If set to `true`, the route is always taken into account.

For more information, see [API Reference: `sap.m.routing.Router`](https://ui5.sap.com/#/api/sap.m.routing.Router).



## Targets

A target defines the view or component that is displayed. It is associated with one or more routes or it can be displayed manually from within the app. Whenever a target is displayed, the corresponding view or component is loaded and added to the aggregation configured with the `controlAggregation` option of the control. The target definition can contain the following parameters:

-   The target key

-   The `type` to specify whether the target is a view or a component

-   The `name` to specify the name of the view or component

-   Additional optional parameters

    If you don't specify a parameter, the default value is taken from the `config` section.

    -   `viewType` \(e.g. `XML`\) which is valid only when the `type` is set to "View"

    -   `id` of the view or component instance

        A view or component instance is cached in SAPUI5 routing under the combination of its `name` and `id`. If there already is one instance created for a specific view or component with an `id`, this instance is reused if another target with the same `name` and `id` is displayed. If a new instance needs to be created instead of reusing the existing ones, assign the target a different `id`.

    -   `level` 

        You can use different levels to define the navigation direction, for example the navigation from a lower view level to a higher view level leads to forward navigation. This is, for example, important for `flip` and `slide` transitions, where the slide animation should go from left to right or vice versa.

    -   `controlId` of the control that is used as the parent to insert the view or component \(e.g. `app`\)

    -   `controlAggregation` target aggregation of the control with `controlId` to which the view or component is added

        The `NavContainer` control, for example, has an aggregation called `Pages` and the shell container has `Content`.

    -   `parent`: the key of another target which a view is created and added before the target view or component is added

    -   `path`: the namespace of the view or component

    -   `targetParent` where the control with the `controlId` is located \(see [Working with Multiple Targets](working-with-multiple-targets-2c5c84d.md)\); this option is set automatically for the root view of a component if the router instance is instantiated by the component.

    -   `clearAggregation` specifies whether the aggregation should be cleared before adding the new view instance.

        When you use the `sap.m.routing.Router` the default is `false`, for `sap.ui.core.routing.Router` it is `true`.

        When using `sap.ui.ux3.Shell` this value should be set to `true`, for `sap.m.NavContainer` to `false` to ensure that the correct content is shown.

    -   `transition` defines how the transition happens; you can choose between `slide` \(default\), `flip`, `fade`, and `show`.

    -   `title` contains either a static text or a valid binding syntax, e.g. to an i18n model, which is resolved under the binding context of the view \(see [Using the title Property in Targets](using-the-title-property-in-targets-1238d70.md)\)



> ### Note:  
> You can also use targets without routes to call a view directly . For more information, see the tutorial [Step 5: Display a Target Without Changing the Hash](../03_Get-Started/step-5-display-a-target-without-changing-the-hash-d9efab3.md) and [Step 10: Implement "Lazy Loading"](../03_Get-Started/step-10-implement-lazy-loading-cdab0a1.md), and the sample [Targets Without a Router](https://ui5.sap.com/#/entity/sap.ui.core.routing.Targets) in the *Samples* in the Demo Kit.

For more information, see [API Reference: `sap.m.routing.Router`](https://ui5.sap.com/#/api/sap.m.routing.Router).



## Config

The `config` section contains the global router configuration and default values that apply for all routes and targets. The `config` section contains the following settings.

-   `routerClass` defines which router is used.

    You can either use class `sap.ui.core.routing.Router` \(default\) or `sap.m.routing.Router`. If you use a `sap.m` control \(such as `NavContainer` or `SplitApp`\) in your app, you can benefit more from using `sap.m.routing.Router` because it not only loads the targets and places them in the corresponding container, but also triggers the animation for navigating to the right target.

    > ### Note:  
    > The possible values for `routerClass` are `sap.ui.core.routing.Router`, `sap.m.routing.Router`, or any other subclasses of `sap.ui.core.routing.Router`.
    > 
    > Compared to `sap.ui.core.routing.Router`, the `sap.m.routing.Router` is optimized for mobile apps and adds the `level`, `transition`, and `transitionParameters` properties, which can be specified for each route or target created by `sap.m.routing.Router`. The `transitionParameters` can also be used for custom transitions. See the *API Reference* for more information.

-   The `homeRoute` defines the route whose target title is inserted as the first entry in the title history in the `titleChanged` event or in the return value of `sap.ui.core.routing.Router.prototype.getTitleHistory`. For more information, see section *Initial title of the home page* of [Using the title Property in Targets](using-the-title-property-in-targets-1238d70.md).

    The property contains the `name` of one of the routes that are defined in the `routes` section as value.

-   You can also define default values for all target parameters

-   `async` defines whether targets are loaded asynchronously; the default value is `false`. We recommend setting this parameter to `true` to improve performance.

    > ### Note:  
    > A target with `type` "Component" is only displayed with asynchronous loading.

    > ### Note:  
    > If you use asynchronous loading, you cannot rely on the sequence of events that are fired during the load phase. If you follow our programming model with MVC, this should not be a problem.

-   Using the `bypassed` parameter, you specify the navigation target that is used whenever no navigation pattern is matched. If you use this setting, you also have to define a corresponding target in the `targets` section.


For more information, see [API Reference: `sap.m.routing.Router`](https://ui5.sap.com/#/api/sap.m.routing.Router).



## Owner

The `owner` parameter defines the owner of all views that are created by the router. This is typically a `UIComponent`. This parameter is set automatically if the router instance is instantiated by a component.



```js
{
    metadata: {
        routing: {
            config: {
                async: true
                viewType: "XML",
                path: "view",
                controlId: "splitApp",
                clearTarget: false,
                bypassed: {
                    target: "notFound"
                },
                homeRoute: "home"
            },
            routes: [
                {
                    pattern: "",
                    name : "home",
                    target: "home"
                },
                {
                    pattern: "category/{id}",
                    name: "category",
                    target: "category"
                },
                {
                    pattern: "category/{id}/product/{productId}",
                    name: "product",
                    target: ["category", "product"]
                },
],
            targets: {
                category: {
                    type: "View",
                    name: "Category",
                    controlAggregation: "masterPages" 
                },
                product: {
                    type: "View",
                    name: "Product",
                    controlAggregation: "detailPages",
                },
                home: {
                    type: "View",
                    name: "Home",
                    controlAggregation: "masterPages"
                },
                notFound: {
                    type: "View",
                    name: "NotFound",
                    controlAggregation: "detailPages",
                    parent: "home"
                }
            }
        }
    }    
}
```

In this example, the `Home` view is always shown when the hash is empty. The `Category` view is shown when the hash matches the pattern `category/{id}`. Both, the `Category` and the `Product` view are shown when the hash matches the pattern `category/{id}/product/{productId}`, because both of them are added to the `target` property of the `product` route.

**Related Information**  


[API Reference: `sap.ui.core.routing`](https://ui5.sap.com/#/api/sap.ui.core.routing)

[API Reference: `sap.m.routing.Router`](https://ui5.sap.com/#/api/sap.m.routing.Router)

[Sample: Targets Without a Router](https://ui5.sap.com/#/entity/sap.ui.core.routing.Targets)

[Working with Multiple Targets](working-with-multiple-targets-2c5c84d.md "If you want to navigate to multiple targets with the same hash, you can either assign multiple targets to a route, or define a parent for the target.")

[Tutorial: Navigation and Routing](../03_Get-Started/navigation-and-routing-tutorial-1b6dcd3.md "SAPUI5 comes with a powerful routing API that helps you control the state of your application efficiently. This tutorial will illustrate all major features and APIs related to navigation and routing in SAPUI5 apps by creating a simple and easy to understand mobile app. It represents a set of best practices for applying the navigation and routing features of SAPUI5 to your applications.")

[Enabling Routing in Nested Components](enabling-routing-in-nested-components-fb19f50.md "Every SAPUI5 component can define routing configuration in its manifest and a UI5 router instance will be created automatically after the component is instantiated.")

