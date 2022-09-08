<!-- loiod6af195124cf430599530668ddea7425 -->

# Programmatically Instantiating XML Fragments

For each fragment type, SAPUI5 provides a method that can be used to programmatically instantiate a fragment.



## Context

To give an example of a programmatic instantiation of an XML fragment, you first have to define one. The following code presents an example definition:

```xml
<Button xmlns="sap.m" id="btnInFragment" text="Hello World" />
```

This fragment can be instantiated from a controller as follows:

```xml

this.loadFragment({
    name: "my.useful.VerySimpleUiPart"
}).then(function(oMyButton) {
    // ...
});
```

> ### Note:  
> Fragments of any type can be used within views of any type.

If XML fragments are used within XML views, the fragment ID is prefixed by default with the view ID. This will allow you to call `this.byId(…)` in the view’s controller in order to retrieve controls inside the fragment. The following code inside the controller will instantiate the above fragment with the `Button`, and then retrieve the `Button` via its ID:

```xml

this.loadFragment({
    name: "my.useful.VerySimpleUiPart"
}).then(function(myButton) {
    // Retrieve the button via its ID
    // in this exsample: myButton == theSameButton
    var theSameButton = this.byId("btnInFragment");
}.bind(this));
```

> ### Caution:  
> Make sure that you are correctly chaining to the `loadFragment` Promise!
> 
> Calling `sap.ui.getCore().byId("...")` or `oController.byId("...")` before the `loadFragment` Promise is resolved will result in `undefined`.

**Related Information**  


[API Reference: `sap.ui.core.mvc.Controller.loadFragment()`](https://ui5.sap.com/#/api/sap.ui.core.mvc.Controller/methods/loadFragment)

