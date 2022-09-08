<!-- loio79e967d093c247639cf60f77cee810d2 -->

# Programmatically Instantiating HTML Fragments

For each fragment type, SAPUI5 provides a method that can be used to programmatically instantiate a fragment.



## Context

To give an example of a programmatic instantiation of an HTML fragment, you first have to define one. The following code presents an example definition:

```js
<div data-sap-ui-type="sap.m.Button" data-press="doSomething" data-text="Hello World"></div>
```

This fragment can be instantiated from a controller as follows:

```js

this.loadFragment({
    name: "my.useful.UiPartZ",
    type: "HTML" 
}).then(function(myButton) {
    // ...
});
```

This instantiation can be done at any place in the code, given that a controller is available and the returned `button` can be used like any `button`.

