<!-- loio91f1b3856f4d1014b6dd926db0e91070 -->

# Browser Events

To react to browser events, a control needs to register for the event either explicitly, or by implementing the event handler.

SAPUI5 applications can have the following two event types:

-   Browser events: These events are fired by the browser; examples for browser events are `click` and `blur`.

-   Control events: These events are fired by SAPUI5 controls. They contain more semantic information than browser events and relate to the control functionality. An example for a control event is when a browser's a `click` event on an icon in a panel header that triggers a `maximize` or `minimize` event of the control.


To register browser events explicitly for certain DOM elements, use either `jQuery.on()` or the respective browser methods, such as `addEventListener`, and register the event in the `onAfterRendering` method of the control. This ensures that the event registration is repeated after the control is re-rendered, meaning that new DOM elements are created and old DOM elements are discarded. The event registration must be removed in the `onBeforeRendering` and `exit` methods by using `jQuery.off()` to prevent memory leaks. The `exit` method is called before the control is destroyed.

The explicit registering for browser events enables you to handle any type of browser event and works exactly the same way as in web pages or jQuery-based web applications. On the other hand, it requires some coding to do the registration and deregistration of the event handlers, which can affect performance if many event handlers are used.

Example for explicit registration of browser events:

```js
MyControl.prototype.init = function() {
        this.handleClick = MyControl.prototype.handleClick.bind(this);
}

MyControl.prototype.onAfterRendering = function() {
        this.$().on("click", this.handleClick);
}

MyControl.prototype.onBeforeRendering = function() {
        this.$().off("click", this.handleClick);
}


MyControl.prototype.exit = function() {
        this.$().off("click", this.handleClick);
}


MyControl.prototype.handleClick = function(oEvent) {
        // do something...
}
```

Instead of explicitly registering browser events, you can implement the event handler directly for certain common event types by using a naming convention for the handler method. SAPUI5 automatically registers event handlers for a list of commonly used event types on the root element of a complete tree of SAPUI5 controls, the [`sap.ui.core.UIArea`](https://ui5.sap.com/#/api/sap.ui.core.UIArea/overview). For more information about these event types, see the [ `sap.ui.events.ControlEvents`](https://ui5.sap.com/#/api/sap.ui.events) in the API Reference. If the respective event occurs at any position in the tree and the respective control implements the `on<eventName>` method, this method is invoked as if it had been registered with `jQuery.on()`.

The event handler implementation requires less code, reduces the number of event handler registrations in the DOM and also reduces the number of event handler registrations and deregistrations that are executed on every rerendering action. On the other hand, this option is only available for specific events.

Example for registering the event handler directly:

```js

MyControl.prototype.onclick = function(oEvent) {
   // do something...
}
```

SAPUI5 also provides so-called pseudo events. Pseudo events are semantically enriched and can be handled by just implementing an `on<eventName>` method. They **cannot** be used with `jQuery.on()`. By using pseudo events, you avoid additional checks for modifier keys in the event handler or for certain keycodes. For a list of Pseudo Events, see [sap.ui.events.PseudoEvents.events](https://ui5.sap.com/#/api/module%3Asap%2Fui%2Fevents%2FPseudoEvents.events) in the API Reference.

