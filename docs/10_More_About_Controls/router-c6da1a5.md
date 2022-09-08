<!-- loioc6da1a56c2a14742b785c7bd5ca4205b -->

# Router

The `sap.f.routing.Router` has built-in support for routing-capable controls in the `sap.f` library.

The `sap.f.routing.Router` currently supports the `FlexibleColumnLayout` control only, similarly to how the `sap.m.routing.Router` has specific knowledge of the `sap.m.NavContainer` and `sap.m.SplitContainer`. Therefore, the `sap.f.routing.Router` should be used for apps based on the `FlexibleColumnLayout`.

The `sap.f.routing.Router` offers the `beforeRouteMatched` event. This event is fired before views are loaded into the respective columns. Use this event to manually change the layout \(if you didn’t specify a layout on route level\).

The `sap.f.routing.Router` has the following main differences to the `sap.m.routing.Router`:

-   The `sap.f.routing.Router` can have up to 3 targets per route \(one for each column\).

-   The `sap.f.routing.Router` supports the `layout` setting on route level. Effectively, this means that you can specify a layout along with the targets of a route. This layout will be applied to the root control \(which is meant to be a `sap.f.FlexibleColumnLayout`\) before views are loaded.

-   The `sap.f.routing.Router` view loading is exclusively asynchronous.


> ### Sample Code:  
> A sample route of a `sap.f.routing.Router`-based app:
> 
> ```
> {
>    "pattern": "itemInfo",
>    "name": "itemInfo",
>    "target": [
>       "master",
>       "detail",
>       "detailDetail"
>    ],
>    "layout": "ThreeColumnsMidExpanded"
> }
> ```

> ### Sample Code:  
> A sample of its targets definition:
> 
> ```
> "targets": {
>    "master": {
>       "type": "View",
>       "name": "Master",
>       "controlAggregation": "beginColumnPages"
>    },
>    "detail": {
>       "type": "View",
>       "name": "Detail",
>       "controlAggregation": "midColumnPages"
>    },
>    "detailDetail": {
>       "type": "View",
>       "name": "DetailDetail",
>       "controlAggregation": "endColumnPages"
>    }
> }
> 
> ```

If the route is matched, the router will first apply the `layout` property to the `sap.f.FlexibleColumnLayout` root control, and will then start loading the views asynchronously in its aggregations \(and will navigate to each of them in the respective column\).

Another way to achieve this, when the layout cannot be known in advance, is to just specify the targets \(as you do when using `sap.m.routing.Router`\), without supplying a `layout` setting:

```
{
   "pattern": "itemInfo",
   "name": "itemInfo",
   "target": [
      "master",
      "detail",
      "detailDetail"
   ]
}

```

And then change the layout manually. The recommended lifecycle event to do this is a `beforeRouteMatched` event handler in your controller. In theory, you could change the layout as response of `routeMatched` too, but `beforeRouteMatched` is better for the purpose, as views aren’t loaded yet, which ensures that when they are, columns will be already resized, and there will be no need for the controls in the views to readapt \(which would be the case if views were loaded first, and only then columns resized\).

**Related Information**  


[API Reference: `sap.f.routing.Router`](https://ui5.sap.com/#/api/sap.f.routing.Router)

