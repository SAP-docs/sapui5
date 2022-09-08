<!-- loio3cff5d0fa6754c0d9fdacd80653b81fb -->

# Programmatically Instantiating JS Fragments

For each fragment type, SAPUI5 provides a method that can be used to programmatically instantiate a fragment.



## Context

To give an example of a programmatic instantiation of a JS fragment, you first have to define one. The following code presents an example definition:

```js
// fragment is located in a file named: "my/useful/UiPartX.fragment.js"
sap.ui.define(["sap/m/Button"], function(Button) {
	return {
		createContent: function(oController) {
			var oButton  = new Button({
				text: "Hello World" ,
				press: oController.doSomething
			});
			return oButton;
		}
	};
});
```

This fragment can be instantiated from a controller as follows:

```js

this.loadFragment({
	name: "my.useful.UiPartX",
	type: "JS"
}).then(function(oMyButton){
	// oMyButton is now usable
});
```

This button can now be used as if it had been created in a standard way.

For fragments that are used several times, an ID for the fragment can be given optionally, see [Unique IDs](unique-ids-5da591c.md):

```js

this.loadFragment({
	name: "my.useful.UiPartX",
	id: "someId"
	type: "JS"
}).then(function(oMyButton){
	// oMyButton is now usable
});
```

JS Fragments are capable of asynchronously creating their content. To do so, the `createContent()` function must return a Promise instead of just regular controls. This Promise then must resolve with the actual content controls.

```js
// fragment is located in a file named: "reuse/SampleFragment.fragment.js"
sap.ui.define(["sap/ui/core/Fragment", "sap/m/Button", "heavy/work/SomeModule"], function(Fragment, Button, SomeModule) {
	return {
		createContent: function() {
			return SomeModule.doStuffAsync().then(function(results) {
				// work with your asynchronous results and create some controls
				// ...
				return new Button({
					// ...
				});
			});
		}
	};
});
```

You can now require the above fragment definition by calling `loadFragment`. All asynchronous behavior is encapsulated by the `loadFragment` Promise:

```js

this.loadFragment({
	name: "reuse.SampleFragment",
	type: "JS"
}).then(function(oButton){
	// oButton is now usable
	// the Promise from within the "reuse.SampleFragment" is resolved
});
```

