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
  "use strict";
  return View.extend("myapp.views.MyView", {
    // define, which controller to use
    getControllerName: function() {
      return "myapp.controller.Main";
    },
    // create view content and return the root control
    createContent: async function(oController) {
      // "createContent" allows for asynchronous actions
      const someControl = await oController.loadFragment(...);

      return new Panel({
        //create stable id, prefixed with the view id
        id: this.createId("myPanel"),
        headerText: "My Panel",
        content: [someControl, /* ... */]
      });
    }
  });
});
```

Besides the `createContent` method, a view can implement the `getControllerName` method, which defines the name of the view controller that should be instantiated and used for the view. The name must be in class name notation \(i.e. dot notation\) **without** the `.controller` suffix. The suffix will be added by the framework when loading the module containing the controller.

> ### Note:  
> A Typed View must not specify a `type`, since the class inheriting from `sap/ui/core/mvc/View` is sufficient.

> ### Caution:  
> Contrary to `JSView`s, Typed Views are modeled as classes extending the `sap/ui/core/mvc/View` base class. When migrating `JSView`s to Typed Views, make sure that your corresponding Controller does not use the same fully qualified class name. For a best practice recommendation on structuring an application project, see [Folder Structure: Where to Put Your Files](../05_Developing_Apps/folder-structure-where-to-put-your-files-003f755.md).



<a name="loioe6bb33d076dc4f23be50c082c271b9f0__section_w3x_msz_y4b"/>

## View Instantiation

The preferred way of instantiating a typed view is via the factory function [`sap.ui.core.mvc.View#create`](https://ui5.sap.com/#/api/sap.ui.core.mvc.View/methods/sap.ui.core.mvc.View.create) . When the `viewName` starts with the `module:` prefix, the remainder of the name is assumed to be the name of a module that exports a typed view \(a subclass of `sap.ui.core.mvc.View`\). The module name must use the same syntax as for `sap.ui.define` or `sap.ui.require`, respectively, i.e. use slashes for separation.

**Example:** Instantiating a typed view with `View.create`:

```js
const oView = await View.create({
    viewName: "module:myapp/views/MyView"
});
oView.placeAt("content");
```



<a name="loioe6bb33d076dc4f23be50c082c271b9f0__section_wjs_psz_y4b"/>

## View Declaration in XML

A typed view in XML can be declared via the class `sap.ui.core.mvc.View`. Using this class requires a `module:` prefix in the `viewName` attribute.

**Example:** View Declaration using class `sap.ui.core.mvc.View`:

```xml
<mvc:View viewName="module:myapp/views/MyView" />
```



<a name="loioe6bb33d076dc4f23be50c082c271b9f0__section_gjh_kdr_k1c"/>

## View Declaration in `manifest.json`

A typed view can be described in a manifest in a fashion similar to the instantiation shown above.

More information on the `sap.ui5/routing` section can be found in [Routing Configuration](routing-configuration-9023130.md).

```
{
  "sap.ui5": {
    "rootView": {
      "viewName": "module:myapp/views/MyView"
    },
    "routing": {
      "targets": {
        "myHome": {
          "name": "module:myapp/views/MyHomeView"
        }
        /* other views, e.g. XML ... */
      }
    }
  }
}
```

**Related Information**  


[Typed View Sample](https://ui5.sap.com/entity/sap.ui.core.mvc.View/sample/sap.ui.core.sample.View.navigationTypedView)

[API Reference: `sap.ui.core.mvc.View`](https://ui5.sap.com/#/api/sap.ui.core.mvc.View)

