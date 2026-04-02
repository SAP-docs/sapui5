<!-- loio6314fcd2510648fbaad3cee8a421030d -->

# Developing Reuse Components

You can extend the `ReuseComponent` \(`sap.fe.core.ReuseComponent`\) base class to implement reuse components.

You can extend `ReuseComponent` to do the following:

-   Provide easy access to the page extension API to interact with the page and the controller.

-   Use building blocks in the root view of your reuse component.

-   Define a router configuration for your reuse component and use building blocks in the page you define as the target.

-   Implement hooks provided by the page in which the reuse component is embedded.


You can implement reuse components as shown in the following sample code:

> ### Sample Code:  
> `manifest.json`
> 
> ```
> {
>     "rootView": {
>         "viewName": "myReuseComponent.RootView",
>         "type": "XML",
>         "id": "View"
>     }
> }
> ```



## Using Building Blocks

In the root view, you can use building blocks to define the content of your reuse component, for example, the `Table` building block.

The `metaPath` and `contextPath` of the building blocks can be either an absolute path or a relative path. If you provide a relative path, it is resolved based on the context path of the consumer page. If you don't set a binding, the context path of the consumer page is used.

If you want to use multiple building blocks on the same entity, you can bind a surrounding control to that entity and use relative bindings inside of it. For example, if you have a separate navigation entity in the service for data related to the reuse component, as shown in the following sample code:

> ### Sample Code:  
> XML Fragment
> 
> ```
> <mvc:View xmlns:mvc="sap.ui.core.mvc" xmlns="sap.m" xmlns:macros="sap.fe.macros" controllerName="sap.fe.core.PageController" binding="/MyReuseEntitySet">
>     <VBox>
>         <macros:Field metaPath="aPropertyOnTheReuseEntity" />
>         <macros:Field metaPath="anotherPropertyOnTheReuseEntity" />
>     </VBox>
> </mvc:View>
> ```



## Defining the Metadata of the Reuse Component

In the `metadata` section of your reuse component, you can configure various settings, for example, the `contextPath` and `enhanceI18n` properties of the `TemplateComponent`, as shown in the following sample code:

> ### Sample Code:  
> JavaScript
> 
> ```
> sap.ui.define(["sap/fe/core/ReuseComponent"], function (ReuseComponent) {
>     "use strict";
> 
>     return ReuseComponent.extend("my.reuse.component.MyReuseComponent", {
>         metadata: {
>             properties: {
>                 enhanceI18n: {
>                     defaultValue: ["fe-reuse-component.myBundle"]
>                 },
>                 contextPath: {
>                     defaultValue: "/MyReuseEntitySet"
>                 }
>             }
>         }
>     });
> });
> ```

For information about the `TemplateContent` API, see the [API Reference](https://ui5.sap.com/#/api/sap.fe.core.TemplateComponent).

> ### Note:  
> The `contextPath` only affects the metadata. To use building blocks, you must still set the correct binding.



## Extending the Page Controller

As with custom pages, you need to extend the `PageController` to implement the `onInit` method. For example, you need to call the `onInit` method of the `PageController`, as shown in the following sample code:

> ### Sample Code:  
> JavaScript
> 
> ```
> sap.ui.define(["sap/fe/core/PageController"], function (PageController) {
>     "use strict";
> 
>     return PageController.extend("my.reuse.component.MyReuseComponentController", {
>         onInit: function () {
>             PageController.prototype.onInit.apply(this, arguments);
>             // Implement your logic here
>         }
>     });
> });
> ```

> ### Note:  
> You can't implement overrides in this controller. If you need to implement overrides, you must implement the hooks in the `ReuseComponent` base class. For more information, see the [Implementing Hooks](developing-reuse-components-6314fcd.md#loio6314fcd2510648fbaad3cee8a421030d__implementing_hooks) section in this topic.



## Accessing the Page's `extensionAPI`

If you want to access the page's `extensionAPI`, use the following sample code in your controller file:

> ### Sample Code:  
> JavaScript
> 
> ```
> const extensionAPI = this.getOwnerComponent().getExtensionAPI();
> ```



## Using the Initialized Event

The reuse component provides an initialized event that is fired when the reuse component is added to the SAPUI5 control tree and the parent relationship is established, so the page's `ExtensionAPI` can be accessed.

To execute custom code when the reuse component is initialized, use the following sample code:

> ### Sample Code:  
> JavaScript
> 
> ```
> sap.ui.define(["sap/fe/core/ReuseComponent"], function (ReuseComponent) {
>     "use strict";
> 
>     return ReuseComponent.extend("my.reuse.component.MyReuseComponent", {
>         init: function () {
>             ReuseComponent.prototype.init.apply(this, arguments);
> 
>             this.attachInitialized(function () {
>                 // implement your logic here
>             });
>         }
>     });
> });
> ```



## Providing the Section Title

If your reuse component provides its own title, you may not want SAP Fiori elements to provide a section title above it. The `ObjectPage.ExtensionAPI` provides the `setAsSectionTitleOwner` function to define a control as the section title and hide the default title, as shown in the following sample code:

> ### Sample Code:  
> JavaScript
> 
> ```
> init: function () {
>     ReuseComponent.prototype.init.apply(this, arguments);
> 
>     this.attachInitialized(function () {
>         var title = this.getRootControl().byId("title");
>         this.getExtensionAPI().setAsSectionTitleOwner(title);
>     });
> }
> ```

For information about the `setAsSectionTitleOwner` function, see the [API Reference](https://ui5.sap.com/#/api/sap.fe.templates.ObjectPage.ExtensionAPI%23methods/setAsSectionTitleOwner).



## Routing

If your reuse component has more than one view, you need to provide routing information.

In the following example, the root view contains an `sap.m.Page` control with the `page` ID. The second target also uses building blocks, so it uses the `sap.fe.core.fpm` component but has its own view:

> ### Sample Code:  
> `manifest.json`
> 
> ```
> {
>     "sap.ui5": {
>         "routing": {
>             "config": {
>                 "routerClass": "sap.m.routing.Router",
>                 "viewType": "XML",
>                 "controlId": "page",
>                 "controlAggregation": "content",
>                 "clearControlAggregation": true,
>                 "async": true,
>                 "containerOptions": {
>                     "propagateModel": true
>                 }
>             },
>             "routes": [
>                 {
>                     "pattern": "",
>                     "name": "default",
>                     "target": "default"
>                 },
>                 {
>                     "pattern": "detail",
>                     "name": "detail",
>                     "target": "detail"
>                 }
>             ],
>             "targets": {
>                 "default": {
>                     "type": "Component",
>                     "name": "sap.fe.core.fpm",
>                     "title": "Default View",
>                     "id": "defaultView",
>                     "options": {
>                         "settings": {
>                             "contextPath": "/RootEntitySet",
>                             "viewName": "fe-reuse-component.view.Default"
>                         }
>                     }
>                 },
>                 "detail": {
>                     "type": "Component",
>                     "name": "sap.fe.core.fpm",
>                     "title": "Detail View",
>                     "id": "detail",
>                     "options": {
>                         "settings": {
>                             "contextPath": "/RootEntitySet/Details",
>                             "viewName": "fe-reuse-component.view.Details"
>                         }
>                     }
>                 }
>             }
>         }
>     }
> }
> ```



<a name="loio6314fcd2510648fbaad3cee8a421030d__implementing_hooks"/>

## Implementing Hooks

The `ReuseComponent` base class provides hooks that you can implement to interact with the page in which the reuse component is embedded, as shown in the following sample code:

> ### Sample Code:  
> JavaScript
> 
> ```
> sap.ui.define(["sap/fe/core/ReuseComponent"], function (ReuseComponent) {
>     "use strict";
> 
>     return ReuseComponent.extend("my.reuse.component.MyReuseComponent", {
>         override: {
>             editFlow: {
>                 onBeforeSave: function () {
>                     return new Promise(function (fnResolve, fnReject) {
>                         // implement your logic here
>                     });
>                 }
>             }
>         }
>     });
> });
> ```



For information about which hooks can be implemented, see the [API Reference](https://ui5.sap.com/#/api/sap.fe.core.controllerextensions).



## Consuming the Reuse Component

For more information about consuming the reuse component, see [Including Reuse Components on an Object Page](including-reuse-components-on-an-object-page-d869d7a.md).



> ### Note:  
> For information about SAP Fiori elements for OData V2, see [Developing Reuse Components](developing-reuse-components-ba619bc.md).

