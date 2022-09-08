<!-- loiob6ab31cb81bd443996cde2f91d203072 -->

# Events Fired on the Pages

Events fired on the pages allow a decentral reaction to navigation.

The `NavContainer` fires events to its child controls when they’re displayed or when they’re hidden.

> ### Note:  
> Although this documentation calls them "pages" and an `sap.m.Page` control is the typical child of a `NavContainer`, any full screen control can be used, for example, an `sap.m.Carousel` control or a custom control. The direct child controls often are views. In this case, the events are fired on the views, and not on a page control that is contained in the view. Thus, the event is not fired **by** the child control, but by the `NavContainer` **on** the child control \(whatever type it is\). This causes the different registration compared to normal control events.

Before the navigation animation starts, the `NavContainer` fires the following events:

-   `beforeHide` on the page which is about to be left
-   `beforeFirstShow` on the page which is about to be shown; this event is only fired if the respective page has not been shown before
-   `beforeShow` on the page which is about to be shown

These events can be used to create or update the user interface of the new page and to stop any activity, such as animations or repeated data polling, on the page which is left.

After the navigation has been completed and the new page has covered the whole screen, the following events are fired:

-   `afterShow` on the page which is now shown
-   `afterHide` on the page which has been left

You can destroy the hidden page, and the now active page can start its activity.

You can use the `addEventDelegate` function to register to these events. This function is available on every control.

```js

page1.addEventDelegate({
   onBeforeShow: function(evt) {
      // page1 is about to be shown; act accordingly - if required you can read event information from the evt object
   },
   onAfterHide: function(evt) {
      // ...
   }
});
```

**Related Information**  


[API Reference: `sap.m.NavContainerChild`](https://ui5.sap.com/#/api/sap.m.NavContainerChild)

