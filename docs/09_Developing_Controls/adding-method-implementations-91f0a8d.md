<!-- loio91f0a8dc6f4d1014b6dd926db0e91070 -->

# Adding Method Implementations

After defining the metadata of a control, you add the method implementation to the control.

The following restrictions apply with regard to the method names:

-   Do not use names of methods that are or will be provided by a superclass. Due to inheritance, your implementation would overwrite the implementation of the superclass.

-   Names starting with `set...`/`get...`/`insert...`/`add...`/`remove...`/`indexOf...`/`destroy...` shall not be used because they may collide with setters/getters for properties or aggregations that are defined explicitely or by a superclass.

-   Names starting with `attach...`/`detach...`/`fire` may collide with methods created for events.


The following method names have a specific meaning and should be used accordingly:

-   `on...`: Used for event handlers that are automatically bound to browser events

-   `init`: Used for the initialization function that is called after control instantiation

-   `renderer`: Used for the function that creates the control's HTML


> ### Note:  
> Any method in your inheriting control overrides methods with the same name in the superclass. If, for example, your control implements the `init()` method, the `init()` of the superclass will no longer be executed. The control is then no longer properly initialized and this typically causes an error. To avoid breaking the control, call the superclass method.
> 
> Consider also that the superclass might implement the method later on, or removes its own method implementation because it is not needed anymore. We recommend that you check for the existence of the superclass method before calling it:
> 
> ```js
> 
> sap.ui.somelib.SomeControl.extend("my.OwnControl", {
>        ...
>        init: function() {
>              if (sap.ui.somelib.SomeControl.prototype.init) { // check whether superclass implements the method
>                     sap.ui.somelib.SomeControl.prototype.init.apply(this, arguments); // call the method with the original arguments
>              }
> 
>              //... do any further initialization of your subclass... 
>        } 
> ```

> ### Note:  
> When you modify the HTML of a control using the code in the control behavior file, make sure to escape any unchecked data you write with `sap.base.security.encodeXML(...)` to prevent cross-site-scripting issues. For more information, see [Cross-Site Scripting](../05_Developing_Apps/cross-site-scripting-91f0bd3.md).

-   **[Normal Methods](normal-methods-85738e3.md "Normal or public methods comprise all methods that do not belong to one of the special
      method types.")**  
Normal or public methods comprise all methods that do not belong to one of the special method types.
-   **[init\(\) Method](init-method-6d6b5bd.md "The init() method can be used to set up, for example, internal
		variables or subcontrols of a composite control.")**  
The `init()` method can be used to set up, for example, internal variables or subcontrols of a composite control.
-   **[exit\(\) Method](exit-method-d4ac0ed.md "The exit() method is used to clean up resources and to deregister event
		handlers.")**  
The `exit()` method is used to clean up resources and to deregister event handlers.
-   **[Event Handler Methods](event-handler-methods-bdf3e98.md "Event handler methods are invoked when an event occurs. Method names starting with
			on are reserved for event handler methods.")**  
Event handler methods are invoked when an event occurs. Method names starting with `on` are reserved for event handler methods.
-   **[Browser Events](browser-events-91f1b38.md "To react to browser events, a control needs to register for the event either explicitly,
		or by implementing the event handler.")**  
To react to browser events, a control needs to register for the event either explicitly, or by implementing the event handler.
-   **[Mobile Events](mobile-events-9860cd2.md "In addition to the general browser and control events you can access specific events for
		touch-enabled devices. ")**  
In addition to the general browser and control events you can access specific events for touch-enabled devices.
-   **[Devices Supporting both Mouse and Touch Input](devices-supporting-both-mouse-and-touch-input-1f9de72.md "Devices such as touch-enabled laptops support simultaneous mouse and touch input. As a control developer you have to take this into
		consideration. ")**  
Devices such as touch-enabled laptops support simultaneous mouse and touch input. As a control developer you have to take this into consideration.
-   **[Renderer Object](renderer-object-c9ab345.md "The renderer object is responsible for creating the HTML structure for the control.")**  
The `renderer` object is responsible for creating the HTML structure for the control.

