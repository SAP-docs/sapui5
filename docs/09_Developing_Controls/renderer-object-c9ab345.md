<!-- loioc9ab34570cc14ea5ab72a6d1a4a03e3f -->

# Renderer Object

The `renderer` object is responsible for creating the HTML structure for the control.



In general, the `renderer` is a plain object with at least a `render(oRm, oControl)` method. The framework calls this method when the HTML for a control has to be created or updated. Since the same renderer object is used for all instances of a control class, the control instance is given as a parameter to the `render` method. The method should use the APIs of the given `RenderManager` and the current state of the control to describe the necessary HTML. The `RenderManager` then injects that HTML into the page \(initial rendering\) or updates the existing HTML.

Additional methods can be added to the `renderer` object to encapsulate the rendering of parts of a control, such as a table's header or footer or cells. Each could be rendered with a method of their own. This not only structures the renderer, but also allows subclasses to modify the HTML creation for individual aspects of the control. When the framework calls the `render` method, the `this` keyword refers to the renderer object and is used to access the other methods.

When only a single `render` function is needed, it can be given as value of the `renderer` function without the enclosing renderer object:

```js
renderer: function(oRm, oControl) {
    oRm.openStart("div", oControl).openEnd().text(oControl.getText()).close("div");
}
```

This notation is only a shorthand for \(and internally converted to\):

```
renderer: {
    render: function(oRm, oControl) {
        oRm.openStart("div", oControl).openEnd().text(oControl.getText()).close("div");
    }
}
```

If an existing renderer is used without modification, you can use the name of the respective renderer class:

```js
renderer: "sap.m.ButtonRenderer"
```

If the renderer for a control gets more complex, it can be moved into a module of its own. By convention, the module for the renderer should be named like the module for the control, but with the additional suffix "Renderer". The control then should import the renderer module and provide it as a value of the `renderer` property:

This is shown in the following example. Note that the methods need to be packed together into an object to indicate that they all go into the control renderer. The main rendering method is called `render`. The `this` keyword refers to the control renderer type and is used to access the other methods:

```js

// module 'my/lib/MyControl'
sap.ui.define([`sap/ui/core/Control`, `my/lib/MyControlRenderer`],
    function(Control, MyControlRenderer) {
    "use strict";
   
    var MyControl = Control.extend("my.lib.MyControl", {
        
        // API of the control, as usual
        metadata: {
            ...
        },
        
        // refer to imported renderer
        renderer: MyControlRenderer
        
        ...
    };
    
    return MyControl;
});
```

```js
// module 'my/lib/MyControlRenderer'
sap.ui.define([], function() {
    "use strict";
   
    var MyControlRenderer = {
        apiVersion: 2, // explained later
        render: function(oRm, oControl) {
            // okay, not really complex, but you get the idea
            oRm.openStart("div", oControl).openEnd().text(oControl.getText()).close("div");
        }
    };
    
    return MyControlRenderer;
});
```

When using this approach, be careful not to create a cyclic dependency between control and renderer modules. The control should depend on the renderer, and the render can use methods from the control's instance, but not from the control module.

The `RenderManager` provides two flavors of APIs to describe the HTML for a control. There's an older one which used string concatenation to build HTML markup and converted it into DOM by using `innerHTML`. The method names of the old API were quite verbose and the API required callers to take care of cross-site scripting \(XSS\) protection by calling the appropriate encoding methods. There is a newer API that is better aligned with native DOM APIs. It is backed by different implementations in the `RenderManager` that either create a markup string for initial rendering or patch existing DOMs in case of smaller updates. The API also hides the need for XSS protection in most cases from the control developer.

All new code should exclusively use the new API \(and the two APIs must never be mixed within a single renderer\). If, in addition, the detailed contract that is described in the *API Reference* for the [`RenderManager`](https://ui5.sap.com/#/api/sap.ui.core.RenderManager), is understood and fulfilled, a renderer should declare this by setting the `apiVersion:2` flag in the renderer object. If a given control hierarchy \(including inherited renderers\) aligns on this flag, a more efficient rendering approach will be chosen by the framework. In mixed scenarios, the legacy rendering will be used. Examples in this documentation all set this flag, but before setting it in your code, make yourself familiar with the required contract!



<a name="loioc9ab34570cc14ea5ab72a6d1a4a03e3f__section_qjd_j3p_xkb"/>

## HTML Structure

A control must have exactly one HTML element as a root node. Additional elements may be added as children of this node. The root element is created by calling the `oRM.openStart("<tagName/>", oControl)` method with the control instance as second parameter. This parameter lets the `RenderManager` add additional attributes to the element that mark it as a UI5 control and associate it with the control instance. Also, the `RenderManager` will take care of custom style classes added to the control \(with `addStyleClass()`\).



<a name="loioc9ab34570cc14ea5ab72a6d1a4a03e3f__section_fbf_p3p_xkb"/>

## Inheritance

Inheritance for renderers can be achieved by using one of the following two signatures. In both variants, the returned renderer inherits all properties \(methods, fields\) from the given parent renderer. Both variants also add an `extend` method to the created renderer that behaves like the modern signature variant of the `Renderer.extend` method, but allows to extend the new renderer instead of `sap.ui.core.Renderer`.

When the renderer is embedded into the control class definition, it automatically inherits from the renderer of the base class of the control.



### Modern signature

In the modern signature variant, two parameters must be given: A qualified name for the new renderer \(its global name in dot notation\), and an optional object literal that contains methods or fields to be added to the new renderer class.

This signature has been designed to resemble the class extension mechanism as provided by [`Object.extend`](https://ui5.sap.com/#/api/sap.ui.base.Object%23methods/sap.ui.base.Object.extend).

```js
sap.ui.define(['sap/ui/core/Renderer'],
    function(Renderer) {
    "use strict";

    var LabelRenderer = Renderer.extend('mylib.LabelRenderer', {
        render: function(oRM, oControl) {

            renderPreamble(oRM, oControl);

            // implementation core renderer logic here
            renderPostamble(oRM, oControl);

        },

        renderPreamble : function(oRM, oControl) {
        ...
        },

        renderPostamble : function(oRM, oControl) {
        ...
        }
    });

    return LabelRenderer;
});
```

The extension of renderers works across multiple levels. A `FancyLabelRenderer` can extend the above `LabelRenderer`:

```js
sap.ui.define(['mylib/LabelRenderer'],
    function(LabelRenderer) {
    "use strict";

    var FancyLabelRenderer = LabelRenderer.extend('mylib.FancyLabelRenderer', {
        render: function(oRM, oControl) {

            // call base renderer
            LabelRenderer.renderPreamble(oRM, oControl);

            // ... do your own fancy rendering here

            // call base renderer again
            LabelRenderer.renderPostamble(oRM, oControl);
        }
    });

    return FancyLabelRenderer;
});
```



### Use as a generic method

Only renderers that have been created with a call to `extend` will get their own `extend` method to create new subclasses. To allow extending from older renderers that have been written from scratch as a plain object, the `Renderer.extend` method can be called as a generic method, providing the base renderer as its `this` context.

> ### Example:  
> **Derive from `sap.m.InputBaseRenderer` \(which is assumed to be a plain object\).**
> 
> ```js
> sap.ui.define(['sap/ui/core/Renderer', 
>                'sap/m/InputBaseRenderer'],
>     function(Renderer, InputBaseRenderer) {
>         "use strict";
>         var CustomInputRenderer = Renderer.extend(InputBaseRenderer);
> 
>         CustomInputRenderer.render: function(oRM, oControl) {
>             // call base renderer
>             InputBaseRenderer.render(oRM, oControl);
> 
>             // ... do your own rendering here
>         }
>         return CustomInputRenderer;
> });
> ```

**Related Information**  


[API Reference: `sap.ui.core.RenderManager`](https://ui5.sap.com/#/api/sap.ui.core.RenderManager)

[API Reference: `sap.ui.core.Renderer`](https://ui5.sap.com/#/api/sap.ui.core.Renderer)

