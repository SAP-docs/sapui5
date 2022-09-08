<!-- loiode31215b9b134a408b574344462c9619 -->

# Reacting to Layout Changes

The `FlexibleColumnLayout` control provides the `stateChange` event.

The event is fired in the following cases:

-   The layout changes because the user chose a layout arrow.

-   The user resizes the browser beyond the 960px/1280px thresholds, which doesn’t change the layout, but changes the number of columns that can be displayed at one time.


The app can subscribe to this event to be able to react to the layout change, for example to show/hide action buttons, such as fullscreen button or close column button.

> ### Note:  
> The event is NOT fired if the app changes the `layout` property explicitly. It is only fired if it was changed internally, due to the user interacting with the layout arrows or columns appearing/disappearing.

