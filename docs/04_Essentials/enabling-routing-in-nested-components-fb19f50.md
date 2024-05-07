<!-- loiofb19f501b16e4e4991eb6a017770945b -->

# Enabling Routing in Nested Components

Every SAPUI5 component can define routing configuration in its manifest and a UI5 router instance will be created automatically after the component is instantiated.

Using components as targets in routing presents another challenge: When multiple components with their own routing configuration are used in an application, their router instances listen to the browser's `hashChange` event simultaneously and may do concurrent changes to the hash. This can lead to conflicts, hence, the hash access has to be coordinated. Therefore, some additional configuration has to be made for these nested components to ensure everything is running stable.

> ### Note:  
> Using routing with nested components requires asynchronous routing in **all** used components. The routers of all components have to enable asynchronous routing in their configuration. For more information, see [Routing Configuration](routing-configuration-9023130.md).



<a name="loiofb19f501b16e4e4991eb6a017770945b__section_ovn_4cl_ngb"/>

## Configure a Component as Routing Target

A target in SAPUI5 routing can load either a view, or a component. To load a component, you need to define the component in the `componentUsages` section of the owner component's `manifest.json`, see [Using and Nesting Components](using-and-nesting-components-346599f.md).

> ### Note:  
> If the configuration for a target can only be added at runtime, SAPUI5 provides APIs to add a target dynamically at runtime. For more information, see [Navigate with Dynamic Targets](navigate-with-dynamic-targets-856d6c6.md).

Loading a child component with a type `Component` target in a router builds up a hierarchy between this router and the router in the child component.

```json
{
    "sap.ui5": {
        "componentUsages": {
            "myreuse": {
                "name": "reuse.component",
                "settings": {},
                "componentData": {},
                "lazy": false
            }
        }
    }
}
```

Use the following configuration to load the component from the target:

-   `type`: Set the `type` to `Component`; this loads and instantiates the `Component.js` that is available under `componentUsages`.

-   `usage`: Use the key of the component usage as used in the `componentUsages` section of the parent component's `manifest.json`.

-   `options` \(optional\): Add additional options that are merged with the options defined in the `componentUsage` section, see [sap.ui.core.UIComponent](https://ui5.sap.com/#/api/sap.ui.core.UIComponent).

-   `containerOptions` \(optional\): Add additional options that are passed to the constructor of the component container where the component is rendered, see [sap.ui.core.ComponentContainer](https://ui5.sap.com/#/api/sap.ui.core.ComponentContainer).


```js
{
    "sap.ui5": {
        "componentUsages": {
            "myreuse": {
                "name": "reuse.component",
                "settings": {},
                "componentData": {},
                "lazy": false
            }

        },
        "routing": {
            "config": {
                ...
            },
            "routes": [
                ...
            ],
            "targets": {
                "attachment": {
                    "type": "Component",
                    "usage": "myreuse",

                    "options": {
                        // optional
                        // define the additional parameter for
                        // instatiating the component instance
                    },
                    "containerOptions": {
                        // optional
                        // define the additional parameter for
                        // instantiating the component container
                        // which enables the component to be rendered
                        // in the parent control
                    },
                    "controlId": "page",
                    "controlAggregation": "content"
                }
            }
        }
    }
}
```



<a name="loiofb19f501b16e4e4991eb6a017770945b__section_htm_scl_ngb"/>

## Configure Hash Prefix for the Nested Component

The hash from every router needs to be persisted in the browser hash. To identify the ownership of the hash segments from the browser hash, a prefix needs to be assigned to the component which is loaded by a `Target`. The prefix can be defined in the `Route` where the `Target` is used.

Instead of assigning the `target` option in a route with the name of a target which is going to be displayed once the route's pattern is matched, an object is assigned which also contains the prefix of the hash for this component besides the name of the target. The loaded component from the target has its own hash segment which begins with the given prefix and can change the hash by using method `navTo` on `Router` in the same way as it is done in the top level component.

```json
{
    "sap.ui5": {
        "componentUsages": {
            "myreuse": {
                "name": "reuse.component",
                "settings": {},
                "componentData": {},
                "lazy": false
            }
        },
        "routing": {
            "config": {
                ...
            },
            "routes": [{
                "name": "home",
                "pattern": "",
                "target": {
                    "name": "attachment",
                    "prefix": "atch"

                }
            }],
            "targets": {
                "attachment": {
                    "type": "Component",
                    "usage": "myreuse",
                    "options": {
                        // optional
                        // define the additional parameter for
                        // instatiating the component instance
                    },
                    "containerOptions": {
                        // optional
                        // define the additional parameter for
                        // instantiating the component container
                        // which enables the component to be rendered
                        // in the parent control
                    },
                    "controlId": "page",
                    "controlAggregation": "content"
                }
        }
    }
}
```



<a name="loiofb19f501b16e4e4991eb6a017770945b__section_PropagateTitleChanged"/>

## Propagate `titleChanged` Event from the Nested Component to the Parent Component

When the nested component `myreuse` has routing enabled, the router instance within the `myreuse` component fires on its own a `titleChanged` event once the displayed target has the `title` property defined. It is easier for an application to react to a `titleChanged` event if any `titleChanged` event\(s\) fired in the nested component\(s\) can be propagated to the router in the root component. To enable this, the property `propagateTitle` can be set in two ways:

-   in the `target` object of a route to enable the title propagation for this `Component` target.
-   in the `config` section of the routing configuration to enable the title propagation for all "Component" targets.

If `propagateTitle` is not set, no `titleChanged` event will be propagated from the nested component.

```json
{
    "sap.ui5": {
        "componentUsages": {
            "myreuse": {
                "name": "reuse.component",
                "settings": {},
                "componentData": {},
                "lazy": false
            }
        },
        "routing": {
            "config": {
                ...
            },
            "routes": [{
                "name": "home",
                "pattern": "",
                "target": {
                    "name": "attachment",
                    "prefix": "atch",

            "propagateTitle": true     
                }
            }],
            "targets": {
                "attachment": {
                    "type": "Component",
                    "usage": "myreuse",
                    "options": {
                        // optional
                        // define the additional parameter for
                        // instatiating the component instance
                    },
                    "containerOptions": {
                        // optional
                        // define the additional parameter for
                        // instantiating the component container
                        // which enables the component to be rendered
                        // in the parent control
                    },
                    "controlId": "page",
                    "controlAggregation": "content"
                }
        }
    }
}
```

The existing `titleChanged` event is extended with the following properties:

-   `propagated`: whether the event is propagated from the router of a nested component
-   `nestedHistory`: an array which contains the title and title history information of both the current router and the routers of the nested component\(s\). An application doesn't need to merge `nestedHistory` with the existing history parameter, because `nestedHistory` also contains the title history of the current router. Each element in the array has the following properties:
    -   `ownerComponentId`: the ID of the component whose router fired the event. The router instance of this component can be retrieved by using the property `Component.getComponentbyId(sOwnerComponentId).getRouter()` which can be used for applying the `hash` of one title history entry to the browser. See the `hash` property for more information.
    -   `history`: an array which contains the previous titles fired on the router. If the current event is fired on this router directly, the array contains the current title information as well, so that the application doesn't need to consider the existing `title` property of the event anymore. Each element in the array contains the following properties:
        -   `title`: the title
        -   `hash`: the browser hash part that belongs to this router when the event was fired. When only one component is created in the application, the entire browser hash can be used by the router of this component. Some applications use the global hash changer:

            ```
            HashChanger.getInstance().setHash(sHash) // HashChanger is required from sap/ui/core/routing/HashChanger
            ```

            to apply the hash to the browser. However, with nested components all component instances share the browser hash. The global hash changer then can't be used anymore, because it overwrites the entire browser hash without considering the other components. Instead, the application can parse the hash by using the method `getRouteInfoByHash` and navigate to the route by using the method `navTo`:

            ```
            // "Component" required from module "sap/ui/core/Component"
            var oRouter = Component.getComponent(sOwnerComponentId).getRouter();
            var oRouteInfo = oRouter.getRouteInfoByHash(sHash);
            if (oRouteInfo) {
              oRouter.navTo(oRouteInfo.name, oRouteInfo.arguments);
            }
            ```

        -   `isHome`: whether the title was changed from the home route



**Related Information**  


[Sample application: Routing with nested components](https://ui5.sap.com/#/entity/sap.ui.core.routing.Router/sample/sap.ui.core.sample.RoutingNestedComponent)

