<!-- loio1238d706b130433c9bd6b85cfb77cece -->

# Using the `title` Property in Targets

Routing in SAPUI5 allows you to define titles declaratively in the configuration. The title can be set with valid binding syntax which is then resolved under the scope of the target to which it belongs. This means that the title can be translated when it's bound to the i18n model or resolved dynamically under the current binding context.

When a new target that has the `title` property defined is displayed, or the title of the current target changes, the `titleChanged` event is fired. The event contains the current title and the history of previously displayed titles. You can use this event to update the title of your app.



## Examples for setting the title in `Target`

```js
{
    ...,
    "routes": [{
        "pattern": "products/overview",
        "name": "ProductsOverview",
        "target": "products"
    }],
    "targets": {
        "products": {
            "type": "View",
            "path": "shop.products",
            "title": "Products Overview"

        }
    },
    ...
}
```

```js
{
    ...,
    "routes": [{
        "pattern": "products/{id}",
        "name": "Product",
        "target": "product"
    }],
    "targets": {
        "product": {
            "type": "View",
            "path": "shop.products",
            "title": "{ parts: ['helperModel>/PRODUCTS_TITLE', 'myModel>productName'], formatter: '.myFormatterFunction' }"
        }
    },
    ...
}
```

The `title` property can also be defined on a "Component" type target. When it is set with a binding syntax, the binding is resolved in the context of the root view of the component that is loaded by this target. The router of the loaded component may also have `title` property defined on its own target\(s\) and eventually fire its own `titleChanged` event once a target is displayed inside the loaded component. UI5 provides a way to propagate the `titleChanged` event from a "Component" target to its owner router in order to let the event be consumed at one central place \(and not at any available router\). For detailed information, see [Propagate `titleChanged` Event from the Nested Component to the Parent Component](enabling-routing-in-nested-components-fb19f50.md#loiofb19f501b16e4e4991eb6a017770945b__section_PropagateTitleChanged).

```js
{
    ...,
    "routes": [{
        "pattern": "attachment/{id}",
        "name": "Attachment",
        "target": {
          "name": "attachment",
          "prefix": "atch"
        }
    }],
    "targets": {
        "attachment": {
            "type": "Component",
            "usage": "productComponent",
            "title": "Attachment"
        }
    },
    ...
}
```



## Defining `titleTarget` in `Route`

A route can display multiple targets and you can use the `titleTarget` option in the `Route` configuration to specify which target the title should be taken from explicitly. By default, the `Route` takes the title of the first target that has the `title` property defined.

```js
{
    ...,
    "routes": [{
        "pattern": "product/{id}/parts",
        "name": "ProductParts",
        "target": ["product", "productParts"],
        "titleTarget": "productParts"

    }],
    "targets": {
        "product": {
            "type": "View",
            "viewType": "XML",
            "path": "shop.products",
            "name": "Product",
            "title": "Product"
        },
        "productParts": {
            "type": "View",
            "viewType": "XML",
            "path": "shop.products",
            "name": "Product",
            "title": "Product Parts"
        }
    },
    ...
}
```



## Listening to the `titleChanged` event

To receive a notification when the title is changed, you can register to the `titleChanged` event on the `Router` instance. The `titleChanged` event is then fired when a target with a set `title` options displayed, or the title of a displayed target is changed \(for example, because the binding context changes\).

```js
oRouter.attachTitleChanged(function(oEvent) {
    var sTitle = oEvent.getParameter("title"),
        aHistory = oEvent.getParameter("history");

    // Example usage: set the browser page title (optional)
    document.title = sTitle;

    aHistory.reverse().forEach(function(oHistory) {
        // show the history in a dropdown
        // oDropdown.addItem(new Item({
        //	text: oHistory.title
        //}).data("hash", oHistory.hash));
    });
});
```

> ### Note:  
> You don't need this event in the SAP Fiori launchpad. The title is updated automatically.



## Initial title of the home page

In the routing configuration, you select one of the routes as a home route that leads to the home page of your app.

If a user navigates to any view of the app using deep link navigation, the home page is also added to the navigation history as the first entry:

```
{
   hash: sHomeRoutePattern,
   isHome: true,
   title: sAppTitle
}
```

This ensures that the user can also navigate to the home page from any other view.

The title of the home page \(and also any title of a route\) is only defined in the `targets` section of the routing configuration. Since the user did not navigate to the home page yet, this target information is not loaded, and the title is not available. Therefore, the `title` attribute that is defined in the `manifest.json` descriptor file, is taken as placeholder for the home page title until the actual title is loaded.

