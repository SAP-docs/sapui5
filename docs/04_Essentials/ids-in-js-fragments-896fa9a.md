<!-- loio896fa9aae5fb40deb209bc31ead99ba7 -->

# IDs in JS Fragments

The fragment logic of JS fragments cannot influence the IDs of controls that are created in the `createContent()` method.

This behavior is similar to how JS views behave regarding IDs. When a stable ID is given within a JS fragment, the `this.createId()` method should be used:

```js
createContent: function(oController ) {
	var oButton  = new sap.m.Button(this.createId("btnInJsFragment"), { 
	// use createId() to let the fragment influence the ID
	    text: "Hello JS World"
	}); 
	return oButton ; 
}
```

If an ID is given when the fragment is instantiated, `createId()` will add it as prefix. Else, `createId()` will leave the given ID untouched.

It is, however, possible that a containing view may add its prefix. For more information, see [IDs of Fragments in Views](ids-of-fragments-in-views-f10bf70.md).

