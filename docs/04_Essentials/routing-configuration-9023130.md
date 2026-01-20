<!-- loio902313063d6f45aeaa3388cc4c13c34e -->

# Routing Configuration

Routing configuration consists of `routes`, `targets`, `config`, and `owner`.



## Routes

A route defines a navigable path in your application. Routes are added to the router as an array. Each route entry must include a unique `name`, a `pattern` that matches the hash, and optionally one or more `targets` that define what to display when the route is matched.

> ### Remember:  
> Routes must be defined in an array, not in an object. The order of routes in the array determines their matching priority - routes are evaluated sequentially, and the first matching route is used. If a route matches, subsequent routes are ignored, unless the `greedy` parameter is set to `true` for that route.

> ### Tip:  
> Each of the following properties can also be defined in the `config` section of the router configuration. This allows you to set defaults that apply to **all** routes, reducing duplication. You can then override these defaults in individual routes as needed.

-   `name`

    A unique identifier for the route within the router instance.

-   `pattern`

    Defines the hash pattern that the route matches. Patterns can include various types of parameters:

    -   **Hard-coded pattern**:

        The pattern matches the hash exactly. For example, when a pattern is defined as `product/settings`, this pattern matches only if the hash is `product/settings` and no data is passed on to the events of the route.

        For more information, see the tutorial [Step 6: Navigate to Routes with Hard-Coded Patterns](../03_Get-Started/step-6-navigate-to-routes-with-hard-coded-patterns-782aac0.md).

    -   **Mandatory parameter**:

        You can define mandatory parameters for the pattern by placing the parameter in curly brackets \(<code>{<i>parameter ID</i>}</code>\).

        For example, if you define the pattern `product/{id}`, the hashes `product/5` and `product/3` \(where 3 and 5 are product IDs\) match the pattern. The matched event handler gets `5` or `3` passed on with the key `id` in its arguments. But hash `product/` does not match the pattern because the mandatory parameter is missing.

        For more information, see the tutorial [Step 7: Navigate to Routes with Mandatory Parameters](../03_Get-Started/step-7-navigate-to-routes-with-mandatory-parameters-f96d252.md).

    -   **Optional parameter**:

        You can define optional parameters for the pattern by placing the parameter between colons \(<code>:<i>parameter ID</i>:</code>\).

        For example, if you define a pattern `product/{id}/detail/:detailId:`, the `detailId` parameter is optional, whereas `id` is mandatory. Both hashes `product/5/detail` and `product/3/detail/2` match the pattern.

    -   **Query parameter**:

        The query parameter allows you to pass on queries with any parameter. A query parameter starts with `?`, and you can either define it as mandatory \(`product/{?query}`\) or optional \(`product/:?query:`\).

        The matched value is converted into an object saved with the parameter name as the key when passed to the event handler.

        For more information, see the tutorial [Step 9: Allow Bookmarkable Tabs with Optional Query Parameters](../03_Get-Started/step-9-allow-bookmarkable-tabs-with-optional-query-parameters-b8561ff.md).

    -   **"Rest as String" parameter**:

        A parameter that ends with an asterisk \(`*`\) is called a "rest as string" parameter. Such a parameter matches as much as possible. It can be combined with the syntax of mandatory or optional parameters.

        For example, a pattern `product/{id}/:detail*:` defines a mandatory parameter with the name `id` and an optional "rest as string" parameter with the name `detail`. It matches `product/5/3` and `product/5/detail/3/foo`. The event handler gets `3` or `detail/3/foo` passed on with the key `detail` in its arguments.


-   `target`

    Specifies the name\(s\) of the target\(s\) to load and display when this route is matched. Multiple targets can be assigned if multiple views or components should be shown simultaneously. For more information, see [Working with Multiple Targets](working-with-multiple-targets-2c5c84d.md).

    If a target is configured for loading a component, you can enable the routing in the loaded component, see [Enabling Routing in Nested Components](enabling-routing-in-nested-components-fb19f50.md).

-   `titleTarget`

    When multiple targets are loaded and displayed, this defines which target provides the page title. If not set, the first target with a `title` property is used \(see [Using the title Property in Targets](using-the-title-property-in-targets-1238d70.md)\).


The subclass `sap.f.routing.Router` provides one additional property that can be used in the route configuration:

-   `layout`

    Defines the layout of the target control that is used to display the target. This property is only available for `sap.f.routing.Router` and can be set to any of the values given in the `sap.f.LayoutType` enum.


For more information, see [API Reference: `sap.ui.core.routing.Router`](https://ui5.sap.com/#/api/sap.ui.core.routing.Router), [API Reference: `sap.m.routing.Router`](https://ui5.sap.com/#/api/sap.m.routing.Router), and [API Reference: `sap.f.routing.Router`](https://ui5.sap.com/#/api/sap.f.routing.Router).

> ### Tip:  
> For a better understanding about how patterns work and what matched parameters look like, see the following page in the *Samples* in the Demo Kit: [sap.ui.core.sample.PatternMatching/preview](https://ui5.sap.com/#/entity/sap.ui.core.routing.Route/sample/sap.ui.core.sample.PatternMatching).

> ### Note:  
> SAPUI5 uses Crossroads.js for parsing the hash and the Hasher framework for manipulating the hash.



## Targets

A target defines the view or component that is displayed when a route is matched or explicitly invoked in code. Targets allow you to decouple route configuration from view/component instantiation and placement.

Each target is responsible for loading and inserting a view or component into a specific aggregation of a container control — typically defined via `controlId` and `controlAggregation`.

The target can be:

-   Automatically displayed as part of route matching
-   Manually displayed using router APIs \(e.g., `Router.prototype.navTo`, `Targets.prototype.display`\)

When a target is displayed:

-   The specified view or component is loaded and instantiated
-   It is then inserted into the defined aggregation specified by `controlAggregation`, of the control identified by `controlId`


The targets section of the router configuration is an object in which each key defines the name of a target, and the corresponding value is a configuration object for that specific target. A target configuration object contains the following properties:

> ### Tip:  
> Each of the following properties can also be defined in the `config` section of the router configuration. This allows you to set defaults that apply to **all** targets, reducing duplication. You can then override these defaults in individual targets as needed.

-   `type`

    Defines whether the target represents a view or a component.

-   `name`

    Name of the view or component to load.

-   `id`

    Optional ID used to identify the target instance. Instances are cached per `name` + `id`. If not set, an auto-generated ID is used.

-   `path`

    Optional namespace prefix for resolving the `name`.

-   `viewType`

    Type of the view \(e.g., "XML"\); only relevant if `type` is "View".

-   `controlId`

    ID of the control into which the view/component is placed.

-   `controlAggregation`

    Aggregation name of the `controlId` into which the content is inserted.

-   `parent`

    Key of another target that is loaded and placed before this one. Useful when building up a nested UI hierarchy.

-   `clearAggregation`

    Whether to clear the aggregation before adding new content. The defaults are:

    `true` for `sap/ui/core/routing/Router`

    `false` for `sap/m/routing/Router`

    `false` for `sap/f/routing/Router`

-   `title`

    Static title or data-binding expression, used for dynamic titles in shells or browser tabs. The binding syntax is resolved under the binding context of the view \(see [Using the title Property in Targets](using-the-title-property-in-targets-1238d70.md)\).


When a target is defined with `type: "Component"`, the following additional properties can be used to control how the component is instantiated and embedded into the app:

-   `usage`

    Refers to the component usage alias as defined in the `sap.ui5/componentUsages` section of the `manifest.json`. This allows the target to reuse an existing component configuration without having to define its `name` and `path` again.

-   `options`

    An object that contains additional options for the component. This can include properties like `async`, `settings`, and `componentData`. These options are passed to the component when it is instantiated.

-   `containerOptions`

    An object that contains additional options for the `sap.ui.core.ComponentContainer` control that will host the component. These options are passed to the constructor when the `sap.ui.core.ComponentContainer` is created. This can include properties like `propagateModel`, `lifecycle`, `height`, and `width`.


The **subclasses** of `sap/ui/core/routing/Router` provide additional properties that can be used in the target configuration. `sap/m/routing/Router` and `sap/f/routing/Router` add the following properties:

-   `level` 

    Defines the navigation direction, which is important for transitions like `flip` and `slide`.

-   `transition`

    Defines the transition effect when navigating to this target. Possible values are `slide`, `flip`, `fade`, and `show`. The default value is `slide`.

-   `transitionParameters`

    An object that contains additional parameters for the transition effect. This can be used to customize the transition behavior, such as duration or easing.


> ### Note:  
> You can also use targets without routes to call a view directly.For more information, see the tutorial [Step 5: Display a Target Without Changing the Hash](../03_Get-Started/step-5-display-a-target-without-changing-the-hash-d9efab3.md) and [Step 10: Implement "Lazy Loading"](../03_Get-Started/step-10-implement-lazy-loading-cdab0a1.md), and the sample [Targets Without a Router](https://ui5.sap.com/#/entity/sap.ui.core.routing.Targets) in the *Samples* in the Demo Kit.

For more information, see [API Reference: `sap.ui.core.routing.Targets`](https://ui5.sap.com/#/api/sap.ui.core.routing.Targets).



## Config

The `config` section defines global router settings and default values that apply to all routes and targets in your app. This helps reduce duplication by centralizing common configuration.

Every property that can be used in a route or a target can also be defined in the `config` section. These values will then act as defaults. If a route or target defines the same property explicitly in its own configuration, that local value overrides the global default from `config`.

In addition to the defaults for the routes and targets of your app, the `config` section can contain the following properties:

-   `routerClass`

    Specifies the class to be used as the router instance. By default, this is `sap.ui.core.routing.Router`.

    You can also use a specialized subclass router from a specific library to take advantage of additional features tailored for the containers within that library. For example, if your application uses `sap.m` containers like `sap.m.App` or `sap.m.SplitApp`, you can use `sap.m.routing.Router`. This router automatically handles the placement of targets in the correct container and provides additional features such as transition animations and support for parameters like `transition`, `transitionParameters`, and `level`. The same applies to `sap.f.routing.Router` for containers in the `sap.f` library, like `sap.f.FlexibleColumnLayout`.

-   `homeRoute`

    Defines the name of the route whose target title is inserted as the first entry in the title history returned by `sap.ui.core.routing.Router.prototype.getTitleHistory` or the `titleChanged` event. For more information, see section *Initial title of the home page* of [Using the title Property in Targets](using-the-title-property-in-targets-1238d70.md).

-   `async`

    Determines whether views and components are loaded asynchronously; the default value is `false`. We recommend setting this parameter to `true` to improve performance.

    > ### Note:  
    > A target with `type` "Component" is only displayed with asynchronous loading.

    > ### Note:  
    > If you use asynchronous loading, you cannot rely on the sequence of events that are fired during the load phase. If you follow our programming model with MVC, this should not be a problem.

    > ### Note:  
    > If the `Component.js` implements the `sap.ui.core.IAsyncContentCreation` interface, the default value for `async` is set to `true`, so no `async` config needs to be set in the `manifest.json`.

-   `bypassed`

    Defines the fallback target to be displayed when no defined route matches the current URL/hash. This parameter expects a target name. A corresponding target must be defined in the targets section.


For more information, see [API Reference: `sap.m.routing.Router`](https://ui5.sap.com/#/api/sap.m.routing.Router).



## Owner

The `owner` parameter defines the owner of all views that are created by the router. This is typically a `UIComponent`. This parameter is set automatically if the router instance is instantiated by a component.



## Example

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

[API Reference: `sap.f.routing.Router`](https://ui5.sap.com/#/api/sap.f.routing.Router)

[Sample: Targets Without a Router](https://ui5.sap.com/#/entity/sap.ui.core.routing.Targets)

[Working with Multiple Targets](working-with-multiple-targets-2c5c84d.md "If you want to navigate to multiple targets with the same hash, you can either assign multiple targets to a route, or define a parent for the target.")

[Tutorial: Navigation and Routing](../03_Get-Started/navigation-and-routing-tutorial-1b6dcd3.md "SAPUI5 comes with a powerful routing API that helps you control the state of your application efficiently. This tutorial will illustrate all major features and APIs related to navigation and routing in SAPUI5 apps by creating a simple and easy to understand mobile app. It represents a set of best practices for applying the navigation and routing features of SAPUI5 to your applications.")

[Enabling Routing in Nested Components](enabling-routing-in-nested-components-fb19f50.md "Every SAPUI5 component can define routing configuration in its manifest and a UI5 router instance will be created automatically after the component is instantiated.")

