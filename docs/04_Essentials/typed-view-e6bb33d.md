<!-- loioe6bb33d076dc4f23be50c082c271b9f0 -->

# Typed View

A view can also be defined by extending the `sap.ui.core.mvc.View` class. Such a view is referred to as a typed view. This means the view definition represents its own view class.



A typed view implements its own `View#createContent` method. It must either return one or several root controls that will be rendered as content of the view or a promise resolving with the view content.



<a name="loioe6bb33d076dc4f23be50c082c271b9f0__section_fx1_wqz_y4b"/>

## View Definition

The following example shows the definition of a view of type `myapp.views.MyView`:

```js
 sap.ui.define([
  "sap/ui/core/mvc/View",
  "sap/m/Panel"
], function(View, Panel) {
  return View.extend("myapp.views.MyView", {
    // define, which controller to use
    getControllerName: function() {
      return "myapp.controller.Main";
    },
    // whether the ID of content controls should be prefixed automatically with the view ID
    getAutoPrefixId: function() {
      return true; // default is false
    },
    // create view content and return the root control(s)
    createContent: function() {
      return new Promise(function(res, rej) {
          res(new Panel({...}));
      }).catch(function(err) {
          rej(err);
      });
    }
  });
});
```

Besides the `createContent` method, a view can implement the methods `getControllerName` and`getAutoPrefixId`:

-   `getControllerName`: Defines the name of the view controller that should be instantiated and used for the view. The name must be in class name notation \(i.e. dot notation\) **without** the `.controller` suffix. The suffix will be added by the framework when loading the module containing the controller.

-   `getAutoPrefixId`: Defines whether the IDs of controls created during the execution of `createContent` will automatically be prefixed with the ID of the view. The default implementation of this method returns `false`. Auto-prefixing is only available for synchronous content creation. For asynchronous content creation use  [`sap.ui.core.mvc.View#createId`](https://ui5.sap.com/#/api/sap.ui.core.mvc.View/methods/createId) instead in order to prefix the IDs programmatically.




<a name="loioe6bb33d076dc4f23be50c082c271b9f0__section_w3x_msz_y4b"/>

## View Instantiation

The preferred way of instantiating a typed view is via the factory function  [`sap.ui.core.mvc.View#create`](https://ui5.sap.com/#/api/sap.ui.core.mvc.View/methods/sap.ui.core.mvc.View.create) . When the `viewName` starts with the `module:` prefix, the remainder of the name is assumed to be the name of a module that exports a typed view \(a subclass of `sap.ui.core.mvc.View`\). The module name must use the same syntax as for `sap.ui.define` or `sap.ui.require`, respectively, i.e. use slashes for separation.

**Example:** Instantiating a typed view with `View.create`:

```js
 View.create({
    viewName: "module:myapp/views/MyView"
  }).then(oView) {
    oView.placeAt("content");
  });
```



<a name="loioe6bb33d076dc4f23be50c082c271b9f0__section_wjs_psz_y4b"/>

## View Declaration in XML

A typed view in XML can be declared via the class `sap.ui.core.mvc.View`. Using this class requires a `module:` prefix in the `viewName` attribute.

**Example:** View Declaration using class `sap.ui.core.mvc.View`:

```xml
<mvc:View viewName="module:myapp/views/MyView" />
```

**Related Information**  


[API Reference: `sap.ui.core.mvc.View`](https://ui5.sap.com/#/api/sap.ui.core.mvc.View)

