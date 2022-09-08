<!-- loiof5f6a475d58a4b39923465221b485d6c -->

# Scrolling: Implementation Details

SAPUI5 embeds the open source library iScroll4 that takes care of scrolling in the application.

Scrolling support in mobile browsers is weak and inconsistent. Only the latest platforms and browsers start to support partially usable scrolling functionality. To avoid this, SAPUI5 supports iScroll4. Though the library is globally available in a SAPUI5 application, programmers should not call it directly. The `sap.ui.core.delegate.ScrollEnablement` delegate provides all functionality and smooth integration of iScroll4 into the SAPUI5 library.

For more information, see [sap.ui.core.delegate.ScrollEnablement](https://ui5.sap.com/#/api/sap.ui.core.delegate.ScrollEnablement) 



<a name="loiof5f6a475d58a4b39923465221b485d6c__section_N10028_N10011_N10001"/>

## Do not use nested scrolling

We do not recommend to use nested levels of scrolling, for example, when a page with enabled vertical scrolling contains a scroll container that has vertical scrolling too. Such combinations may lead to behavior that is unexpected both for programmers and users.



<a name="loiof5f6a475d58a4b39923465221b485d6c__section_N10035_N10011_N10001"/>

## Implement a custom scroll container

A custom control that needs to provide a scrollable area for its content should implement the following steps:

1.  Instantiate a `sap.ui.core.delegate.ScrollEnablement` delegate, at best in the `.onAfterRendering` callback.
2.  Implement a `.getScrollDelegate` method that returns the current instance of the delegate to other controls.
3.  Destroy the `ScrollEnablement` delegate on exit.

Example:

```js

myCustomScroller.prototype.onAfterRendering = function() {
  if(!this._oScroller){
    sap.ui.require("sap/ui/core/delegate/ScrollEnablement");
    // attach a scroller to the scrollable container DOM element
    this._oScroller = new sap.ui.core.delegate.ScrollEnablement(this, this._scrollContainerId, {
      horizontal: false,
      vertical: true
    });
  }
};

myCustomScroller.prototype.getScrollDelegate = function() {
  return this._oScroller;
};

myCustomScroller.prototype.exit = function() {
  if(this._oScroller){
    this._oScroller.destroy();
    this._oScroller = null;
  }
}; 
```

> ### Note:  
> The Zynga scroller that is included in the SAPUI5 library is deprecated. The configuration parameter `oConfig.zynga=true` of the scrolling delegate should not be used.



<a name="loiof5f6a475d58a4b39923465221b485d6c__section_N10078_N10011_N10001"/>

## Interaction with the scroll containers

There are cases, when an embedded control controls scrolling of the parent container, if required:

-   `sap.m.ScrollContainer` inside `sap.m.Page` may block parent scrolling, if it scrolls in the same direction itself
-   `sap.m.TextArea` in edit mode blocks parent scrolling, so that the user can scroll text contents during input
-   `sap.m.GrowingList` scrolls parent container to update positions of visible items after the new items have been loaded from the server

When using `sap.m.FlexBox` with `fitContainer:true` or `sap.m.TileContainer` inside a page, the `enableScrolling` property of the page needs to be set to `false` for the `FlexBox` or `TileContainer` to fit the viewport.

> ### Note:  
> The scrollbar changes its size and position on scrolling when the lazy loading mechanism is used. This behavior is expected as the scrollbar is dynamically resized when more content is rendered at the moment of scrolling.
> 
> For example, when you open a page that uses lazy loading, only the blocks in the visible area of the screen are displayed. So, the more you scroll, the more content is being rendered, which leads to a smaller size of the scrollbar. For more information on lazy loading, see [Object Page Layout](object-page-layout-2e61ab6.md).

