<!-- loio04129b2798c447368f4c8922c3c33cd7 -->

# Instantiation of Fragments

SAPUI5 provides two options to instantiate a fragment: If it is instantiated inside a controller extending `sap.ui.core.mvc.Controller`, the`loadFragment()` function is the way to go. However, if it is instantiated in a non-controller artefact, the generic function `sap.ui.core.Fragment.load()` can be used.

Comparing fragments to views, there is one important difference: Fragments are no controls. While views are control instances which have their own HTML and their own set of properties and may contain other controls, fragments just consist of their content. Views contain their content controls, while fragments consist of their content controls.

For example, when a fragment containing a button is instantiated, the result is just this button.



<a name="loio04129b2798c447368f4c8922c3c33cd7__section_lby_wsx_lqb"/>

## Instantiation of Fragments in a Controller

Since 1.93, the `loadFragment()` function is available on every controller instance extending `sap.ui.core.mvc.Controller`. This API has several advantages over the generic `sap.ui.core.Fragment.load()` function:

-   The `loadFragment` API relays the handling of asynchronous destroy operations to the framework's lifecycle.

    In some cases it might happen that a controller instance is destroyed before the asynchronously loaded fragment content becomes available. This typically leads to left-over controls, which are not properly cleaned up. As a result you might experience duplicate ID errors when the same view is recreated. To circumvent such issues, the `loadFragment()` function automatically wires the fragment loading into the view's exit lifecycle. This way the fragment content also gets destroyed once the view is destroyed. Additionally, all methods which are available on the controller instance, such as an event handler, are also available for the fragment content.

-   View Prefixing: By default, the fragment content is prefixed by the view ID. With that, all fragment content is available by using the `byId` function on the controller or view instance. This option can be disabled by passing `false` to the `autoPrefixId` parameter. In this case, the application developer has to ensure that no duplicate ID issues occur for this fragment content.

-   Addition to the `dependents` aggregation: By default, the fragment content is added to the `dependents` aggregation of the view. This offers two major advantages: First, all models and element bindings which are available on the view instance are also available automatically on the fragment content. Second, if the view is destroyed, the fragment content is destroyed also. This option can be disabled by passing `false` to the `addToDependents` parameter. In this case, the application developer has to ensure that the fragment content is destroyed when the view is destroyed. If not, duplicate ID issues might occur.


```js
this.loadFragment({
    name: "myapp.fragments.MyFragment"
});
```



<a name="loio04129b2798c447368f4c8922c3c33cd7__section_wcr_5sx_lqb"/>

## Generic Instantiation of Fragments

The generic function `sap.ui.core.Fragment.load()` can be called with either the name, the type, and optionally a controller, or with a configuration object and an optional controller; for more information, see the [API Reference](https://ui5.sap.com/#/api/sap.ui.core.Fragment/methods/sap.ui.core.Fragment.load). 

It either returns the root control contained in the fragment or an array of root controls, depending on the type of the fragment. SAPUI5 offers three types: `XML`, `HTML`, and `JS`.

The different methods used for the instantiation of a fragment have the following commonalities:

-   A fragment name must be given. This name must be resolvable to the fragment file URL by the SAPUI5 module loading mechanism. In case of JS fragments the name may also be defined inline.
-   A controller can be optionally given. Some fragments may require a controller and certain methods to be present in this controller.
-   An ID can be optionally given.

    If no ID is given, any control IDs specified in the fragment are used as is. The repeated use of a fragment can lead to duplicate IDs. One way to avoid that problem is to specify a unique fragment ID. For more information see [Unique IDs](unique-ids-5da591c.md). This ID will then be used as prefix for all controls in this fragment instance.


> ### Note:  
> When using the generic function `sap.ui.core.Fragment.load()` the application developer has to take care to add fragment content only to non-destroyed content:
> 
> ```js
> Fragment.load({
>     name: "myapp.fragments.MyFragment"
>  }).then(function(oContent){
>     if(!this.isDestroyStarted()){
>        // do stuff
>    }
> });
> ```

-   **[Programmatically Instantiating JS Fragments](programmatically-instantiating-js-fragments-3cff5d0.md "For each fragment type, SAPUI5 provides a method that
		can be used to programmatically instantiate a fragment.")**  
For each fragment type, SAPUI5 provides a method that can be used to programmatically instantiate a fragment.
-   **[Programmatically Instantiating XML Fragments](programmatically-instantiating-xml-fragments-d6af195.md "For each fragment type, SAPUI5 provides a method that can be used to programmatically
		instantiate a fragment.")**  
For each fragment type, SAPUI5 provides a method that can be used to programmatically instantiate a fragment.
-   **[Programmatically Instantiating HTML Fragments](programmatically-instantiating-html-fragments-79e967d.md "For each fragment type, SAPUI5 provides a method that can be used to programmatically
		instantiate a fragment.")**  
For each fragment type, SAPUI5 provides a method that can be used to programmatically instantiate a fragment.
-   **[Instantiating Fragments in Declarative Views](instantiating-fragments-in-declarative-views-234320f.md "Example, how all three types of fragments can be instantiated in an XML
		view.")**  
Example, how all three types of fragments can be instantiated in an XML view.
-   **[Using Other Objects Instead of Controllers](using-other-objects-instead-of-controllers-c24ea6d.md "For the instantiation of fragments, the oController object must not necessarily be a
		controller. It can also be another object.")**  
For the instantiation of fragments, the oController object must not necessarily be a controller. It can also be another object.
-   **[Inline Definition and Instantiation of Fragments](inline-definition-and-instantiation-of-fragments-b807931.md "Instead of defining fragments externally in a separate file, they can also be defined
		inline and can be instantiated immediately.")**  
Instead of defining fragments externally in a separate file, they can also be defined inline and can be instantiated immediately.

**Related Information**  


[API Reference: `sap.ui.core.mvc.Controller.prototype.loadFragment`](https://ui5.sap.com/#/api/sap.ui.core.mvc.Controller/methods/loadFragment)

[API Reference: `sap.ui.core.Fragment.load`](https://ui5.sap.com/#/api/sap.ui.core.Fragment/methods/sap.ui.core.Fragment.load)

