<!-- loio3f472df7cb364ab48541566d5cb1821e -->

# Writing a Control: FAQ



## Why does `onmousemove` not work in my control?

SAPUI5 does not by default register an event handler for this event because of performance reasons. For example, how to register this event, see the `Dialog` control.



## How can my control remember a state?

This can either be done in public properties, or in private member variables. The latter is usually defined in the `init()` method of the control and start with an underscore.



## Why is my control renderer called while the control is already on the screen?

Whenever the control state changes because, for example, a property is changed, the default behavior is to rerender the control. SAPUI5 calls the control renderer with the updated state and takes care of replacing the HTML in the page. It is also possible to implement the control change explicitly in the control, which then adapts the HTML to represent the new state. In this case, the default rerendering can be suppressed \(see below\).



## How can I avoid rerendering of my control when a property is changed?

If you call the property setter in your own code, like `this.setText("xy")`, you can instead use the generic setter defined in `Element.js` which also has the optional parameter `"bSuppressRerendering": this.setProperty("text", "xy", true)`. If the property change is done from the application, but you still want to avoid rerendering, for example, because you only need to toggle one CSS class or because the control DOM elements may not be removed and replaced, you need to overwrite the generated setter method. The generated method looks like this:

```js
sap.m.Button.prototype.setText = function(sText) {
	this.setProperty("text", sText);
};
```

You also need to add the flag in your overwriting implementation:

```js
sap.m.Button.prototype.setText = function(sText) {
	this.setProperty("text", sText, true);
};

```

Usually you then need to handle the visualization of the change yourself; in this case you might want to find the DOM element where your control text is located and exchange the text.

