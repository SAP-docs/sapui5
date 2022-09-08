<!-- loiob72874dbc4ef41c0ba75a1ae523d795c -->

# Methods

`List` and `Table` provide the following two swipe methods:

-   `swipeOut( [callback] )`: After `swipeContent` is shown, the user can interact with the control, for example tap it. After this interaction, for example on tap event, you can use this method to hide `swipeContent` from the screen. By default, swipe for action works in auto-hide mode. This means that if a user tries to tap inside the list but outside the `swipeContent`, then the `swipeContent` hides automatically. After you call this method, `swipeContent` hides with animation and if you need to run code after the animation you can simply add a callback function to this method as a first parameter.
-   `getSwipedItem()`: This method returns the currently swiped list item. When no item is swiped, null is returned. The `swipeContent` events, for example tap, are a good place to use this method to get information for which list item `swipeContent` is shown.

The following example shows a delete scenario:

```js

tap : function(e) {
   var oList = this.getView().byId("myList"); // get the list using its Id
   var oSwipedItem = oList.getSwipedItem(); // Get which list item is swiped to delete
   oList.removeAggregation("items", oSwipedItem); // Remove this aggregation to delete list item from list
   oList.swipeOut(); // we are done, hide the swipeContent from screen 
}
....

```

