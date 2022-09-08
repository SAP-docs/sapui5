<!-- loio856d6c6a408846b480ca177b9a1aab62 -->

# Navigate with Dynamic Targets

The `addTarget` method in the `sap.ui.core.routing.Targets` class enables you to add targets to the router dynamically at runtime. Components or views can serve as dynamic targets.

Usually, routing targets \(that represent views or components\) are defined statically in the [Routing Configuration](routing-configuration-9023130.md) inside the `manifest.json` file. But there are more and more scenarios where a target can't be defined during design time because the necessary information is only available at runtime. This could apply, for example, to a routing target that depends on the user configuration and must be loaded from the back end at runtime.

> ### Note:  
> Defining the targets statically in the `manifest.json` file is the preferred solution, as this allows for optimization possibilities \(e.g. during build time\). Only make use of dynamic targets when a static declaration is not possible, e.g. because certain information is not available during design time.

Before a target can be displayed, it needs to be added to the router. The SAPUI5 routing provides APIs to let an application add routing targets dynamically and to display them.



<a name="loio856d6c6a408846b480ca177b9a1aab62__section_jnj_rgx_mjb"/>

## Adding Dynamic Targets

Use the [addTarget](https://ui5.sap.com/#/api/sap.ui.core.routing.Targets/methods/addTarget) API of the `sap.ui.core.routing.Targets` module to add dynamic routing targets:

```js
var oTargetOptions = {
    name: "DynamicTargetComponent",
    type: "Component",
    controlId: ...,
    controlAggregation: ...,
    id: ...,
    ...
};
oRouter.getTargets().addTarget("myDynamicTarget", oTargetOptions);
```

On top of the other target options, the following configuration options can be used to display a `Component` or `View` as a dynamic target:

-   `name`: The component or view name

-   `type`: Set to either `Component` or `View`

-   `options` \(optional\): Relevant for targets of type `Component`

-   `containerOptions` \(optional\): Relevant for targets of type `Component`


> ### Note:  
> The `usage` property cannot be used for dynamic targets. For more information on the available target options, see [Enabling Routing in Nested Components](enabling-routing-in-nested-components-fb19f50.md).



<a name="loio856d6c6a408846b480ca177b9a1aab62__section_u1j_1hx_mjb"/>

## Displaying Dynamic Targets

After a target has been added, it is possible to display it with the [display](https://ui5.sap.com/#/api/sap.ui.core.routing.Targets/methods/display) method of the `sap.ui.core.routing.Targets` module.

A typical use case is to display a dynamic target after navigating to a route. By default there is no connection between a dynamically added target and the matched route, which would be relevant for the life-cycle of targets and the handling of the browser hash. In this case, the target will not be suspended after navigating away from the corresponding route, and the hash of the router will be reset.

However, if it's relevant to keep the hash in the router and make the target suspended after navigating away, the information about the target being connected to the matched route needs to be provided. In such a case, it is necessary to provide the `routeRelevant` parameter to the `display` method with its value set to `true`.

After defining a target as **route-relevant**, a connection between the active route and the target is created. Navigating away from the route will remove the dynamic target, so that the dynamic target won't be displayed automatically once the same route is matched again. To display the dynamic target once the route is matched again, the `display` method needs to be called again.

```js
oRouter.getTargets().display({
    name: "myDynamicTarget",
    prefix: ...,
    routeRelevant: true
});
```

