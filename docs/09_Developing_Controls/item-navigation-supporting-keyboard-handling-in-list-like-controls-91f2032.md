<!-- loio91f203236f4d1014b6dd926db0e91070 -->

# Item Navigation - Supporting Keyboard Handling in List-like Controls

The helper class `sap.ui.core.delegate.ItemNavigation` supports item navigation in lists.

The helper class can be used for keyboard events in controls that need the ability to navigate with arrow keys over a one- or two-dimensional list of DOM nodes. The delegate hooks into the browser events for arrow up/down/left/right, page up/down and home/end keys. With a list of DOM nodes provided by the control, it sets the focus to the relevant DOM node in the list while handling the events.

For item navigation handling, the control has to provide a DOM node that surrounds the DOM nodes of all items and a list of the DOM nodes of the items. When the control is entered, the initial focus should be set on the surrounding DOM node. The `setCycling` method determines whether the focus automatically moves to the top after the end of the list was reached. To use the page up/down keys, a page size must be set via the `setPageSize` method on the delegate.

To specify a preselected item for the delegate, use the `setSelectedIndex` method. On reentering a control with a selected item, the method sets the focus on the list item that had been selected before the control was ended. If no selected index is given, the method sets the focus on the first item when the control is entered again.

If item navigation has to trigger a control before a focus is set, the `BeforeFocus` and `AfterFocus` events can be used to do, for example, preparation tasks for the controls visibility.

> ### Note:  
> Using the item navigation does not prevent you from reacting on the events handled by the delegate in your control.

-   **[Integrating Item Navigation](integrating-item-navigation-7e24524.md "To integrate the item navigation in your control, apply the delegate in the
      onAfterRendering hook of your control.")**  
To integrate the item navigation in your control, apply the delegate in the `onAfterRendering` hook of your control.

