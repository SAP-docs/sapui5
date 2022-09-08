<!-- loiobdf3e9818cd84d37a18ee5680e97e1c1 -->

# Event Handler Methods

Event handler methods are invoked when an event occurs. Method names starting with `on` are reserved for event handler methods.

For common events, such as `click` or `keydown`, it is sufficient to add a handler method. These events are defined in the module `sap/ui/events/ControlEvents`. As SAPUI5 core automatically registers browser event handlers for these methods, they are called automatically. SAPUI5 core also fires events with a richer semantic meaning, so that control developers do not need to check various keycodes.

```js
onclick: function(oEvent) {
   alert("Control " + this.getId() + " was clicked.");
}
```

There are also SAPUI5-specific event handlers, which can be used for reacting on specific situations. These are `onBeforeRendering`, `onAfterRendering`, `onLocalizationChanged`, and `onThemeChanged`.

Internally used events, which start with "sap", are defined in the `sap/ui/events/PseudoEvent` module. An example is the `sapnext` event, which is triggered by "arrow down" or "arrow right" \(or "arrow left" in right-to-left mode\). The `sapnext` event performs all checks that are required to check whether the user wants to navigate to the next item. The `event` object that is passed to the handler method contains more information. These methods are private methods and must only be called by SAPUI5 core.

```js
onsapnext: function(events) {
   // navigate to next item, an arrow key was pressed
}
```

**Related Information**  


[API Reference: `ControlEvents`](https://ui5.sap.com/#/api/module%3Asap%2Fui%2Fevents%2FControlEvents)

[API Reference: `PseudoEvents`](https://ui5.sap.com/#/api/module%3Asap%2Fui%2Fevents%2FPseudoEvents.events)

