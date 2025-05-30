<!-- loio3cff5d0fa6754c0d9fdacd80653b81fb -->

# Programmatically Instantiating JS Fragments

For each fragment type, SAPUI5 provides a method that can be used to programmatically instantiate a fragment.



## Context

To give an example of a programmatic instantiation of a JS fragment, you first have to define one. The following code presents an example definition:

```js
// The fragment is available under the resource name "my/useful/UiPartX.js"
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

const oMyButton = await this.loadFragment({
	name: "module:my/useful/UiPartX"
});
// oMyButton is now usable
```

This button can now be used as if it had been created in a standard way.

> ### Note:  
> The `await` operator can only be used inside an `async` function. Please be aware that there are certain limitations in SAPUI5 when using `async` functions as event handlers. For more information, see [ECMAScript Support](../02_Read-Me-First/ecmascript-support-0cb44d7.md).

For fragments that are used several times, an ID for the fragment can be given optionally, see [Unique IDs](unique-ids-5da591c.md):

```js

const oMyButton = await this.loadFragment({
	name: "module:my/useful/UiPartX",
	id: "someId"
});
// oMyButton is now usable
```

JS Fragments are capable of asynchronously creating their content. To do so, the `createContent()` function must return a Promise instead of just regular controls. This Promise then must resolve with the actual content controls.

```js
// fragment is located in a file named "reuse/SampleFragment.js"
sap.ui.define(["sap/ui/core/Fragment", "sap/m/Button", "heavy/work/SomeModule"], function(Fragment, Button, SomeModule) {
	return {
		async createContent() {
			return await SomeModule.doStuffAsync();
		}
	};
});
```

