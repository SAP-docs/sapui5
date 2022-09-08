<!-- loioa53ec81aca59413cac86267b0fd5c787 -->

# Device-specific Behavior of Controls

Some controls have different behaviors between running on different device types \(mobile, desktop, tablet\).

For example, the `sap.m.Carousel` control shows the left and right navigation buttons in addition to gesture only when it runs on desktop. The distinction between desktop and mobile behaviors should be done by checking `sap.ui.Device.system.desktop` but NOT `sap.ui.Device.support.touch`, because some desktop browsers can also support touch, for example on devices supporting both mouse and touch input.

A property `combi` is provided in `sap.ui.Device.support`, which allows you to tell whether the browser supports both touch and mouse interfaces.

Not all browsers on devices supporting both mouse and touch input may support touch events. Some browsers may fire mouse events when the user operates them by touch. Since those mouse events are not marked with `_sapui_delayedMouseEvents`, they can still be handled with SAPUI5 event delegation and the registered handler.

