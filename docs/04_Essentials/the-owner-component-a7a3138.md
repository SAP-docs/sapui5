<!-- loioa7a313889e874a118c5e17803c958b24 -->

# The Owner Component

If you wish to extend your view or controller, you must define the extension in the manifest.json of their owner component.



<a name="loioa7a313889e874a118c5e17803c958b24__section_p1l_4by_jkb"/>

## What is the Owner Component?

Technically, the owner component is the `sap.ui.core.(UI)Component` instance which created \(and thus "owns"\) any `sap.ui.base.ManagedObject` instance. This of course includes all subclasses of `ManagedObject`, e.g. any SAPUI5 control, as well as views, fragments, and even other \(UI\)Components.

One of the most common use cases of the owner component is the extensibility of \(UI\)Components. The framework uses the owner component to identify [extension points](../08_Extending_SAPUI5_Applications/view-extension-403c050.md), [view modifications](../08_Extending_SAPUI5_Applications/view-modification-aa93e1c.md), and [controller extensions](controller-extensions-21515f0.md) from the owner component's manifest.json.



<a name="loioa7a313889e874a118c5e17803c958b24__section_tks_rby_jkb"/>

## What is Handled by the Framework?

For the most part, the framework takes care of setting and propagating the owner component throughout all framework-managed control and Component creation mechanisms. This includes the following:

-   `sap.ui5/rootView` creation during Component startup,
-   view and Component creation via routing \(based on the `sap.ui5/routing/...` configuration\),
-   creation of nested Components defined in the `sap.ui5/componentUsages` section via the `sap.ui.core.Component#createComponent` factory,
-   fragment creation via `sap.ui.core.mvc.Controller#loadFragment`;

    > ### Note:  
    > This applies **only if the controller has an owner component assigned to it**, which is the case if it was created via a framework-managed mechanism or the application follows the best practices given below.

-   nested views and fragments automatically receive their owner component from the artifact they're contained in,

    e.g. if a fragment is contained in a view \(for example as the content of a `dependents` aggregation\) it receives the same owner component as its containing view, and thus will receive extensions,

-   factories called while an owner component is known will propagate it to any controls they create. This includes controls, views and fragments created from within `sap.ui.core.UIComponent#createContent` or `sap.ui.core.mvc.Controller#onInit`.

    > ### Note:  
    > The `then()` handler of an asynchronous view or fragment factory is **not** executed with an owner scope. To handle this scenario, see the best practices given below.


> ### Note:  
> The owner component for `ManagedObject`s is assigned by the framework at the time when they are created. **It is not updated afterwards,** for example if a control is moved from one Component's control tree to another.
> 
> We advise you not to move controls over Component boundaries.



<a name="loioa7a313889e874a118c5e17803c958b24__section_zmp_rwc_kkb"/>

## What Needs to be Handled by the Application?

Any `ManagedObject` that is created outside the above-listed framework-managed features is not automatically assigned an owner component. This is a very common occurrence, since a lot of `ManagedObject`s \(e.g. fragments\) will be created after the startup of a Component at an unknown point in time. For example, an `sap.m.Dialog` with fragment content might only be created upon user interaction.

Since the owner component is the carrier of extension information through its manifest.json, your views, fragments, and controllers rely on the connection to an owner component to look up any extension configuration and apply it accordingly. The framework cannot apply extensions for views, fragments, and controllers if no owner component is known. These scenarios must be handled by the application.



<a name="loioa7a313889e874a118c5e17803c958b24__section_u13_jvr_nvb"/>

## Best Practices for Creating Controls

Whenever possible, use one of the above-listed framework-managed control creation mechanisms.

If this is not possible, you can assign the correct owner component manually by retrieving the Component instance and wrapping any code that creates a `ManagedObject` inside a `runAsOwner()` call on the Component instance:

```js
// In this sample, the 'this' context is a controller instance
// The controller class provides a shorthand getter for its owner component
var oComponent = this.getOwnerComponent();
// oComponent is now the owner component instance which owns the controller
oComponent.runAsOwner(() => {
    // create additional ManagedObjects here, e.g. via
    //   * a View and Fragment factory
    //   * or simply via a control's constructor
    XMLView.create(/*...*/).then(() => {
        // Due to the asynchronous nature of the XMLView factory
        // the owner-component scope is lost again inside the 'then' handler!
        // Make sure to call runAsOwner again if more controls are created here.
    });
    Fragment.load(/*...*/).then(/*...*/);
    new Button(/*...*/);
});
```

A common use case for asynchronous operations is the `UIComponent#createContent` method. Components implementing the `sap.ui.core.IAsyncContentCreation` interface can use an async implementation here.

Using `async/await` might give you the impression that your code is executed synchronously and a manual setting of the owner component is not needed anymore. This is not the case, however.

The comments in the following code sample outline some common pitfalls and misconceptions:

```js
MyComponent.prototype.createContent = async function() {
    // the first async break is still in the owner scope of "this"
    // as up to this point all statements are running in the same execution stack and the framework tracks the owner component for you
    const firstView = await XMLView.create(/*...*/);
    myView.byId("...").setValue("abc");

    // This is a second async break in the implementation, and the owner component scope is lost to the framework
    // From here on, you need to wrap every async call into a "runAsOwner" call (refer also to the sample above)
    const secondView = await this.runAsOwner(() => {
        return XMLView.create(/*...*/);
    });

    // do some more work with your views/fragments

    // and return the controls you want to aggregate in the UIComponent's "rootControl" aggregation
    // Alternatively, you can return another Promise resolving with controls
    return firstView;
};
```

> ### Note:  
> Since the owner-component scoping is only active during the execution of the `runAsOwner` function, the `then(...)` handlers of the factory promises are **not** scoped anymore! You would need to call `runAsOwner` again in such a case.

If `ManagedObject`s need to be created outside a controller instance, the static `sap.ui.core.Component.getOwnerComponentFor` function can be used:

```js
// 'oPage' is a examplary sap.m.Page control, the static API however accepts all ManagedObjects
// Note: though all ManagedObjects can be passed to this function, the owner component can only
//       be returned for ManagedObjects that have an owner component assigned already
var oComponent = Component.getOwnerComponentFor(oPage);
oComponent.runAsOwner(() => {
    // same as in the above sample
});
```

**Related Information**  


[`sap.ui.core.Component.getOwnerComponentFor`](https://ui5.sap.com/#/api/sap.ui.core.Component/methods/sap.ui.core.Component.getOwnerComponentFor)

[`sap.ui.core.Component.prototype.runAsOwner`](https://ui5.sap.com/#/api/sap.ui.core.Component/methods/runAsOwner)

[`sap.ui.core.Component.getOwnerIdFor`](https://ui5.sap.com/#/api/sap.ui.core.Component/methods/sap.ui.core.Component.getOwnerIdFor)

